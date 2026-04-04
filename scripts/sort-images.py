#!/usr/bin/env python3
"""
Sort unreferenced assets/images into:
  DELETE-IMAGES/ - duplicates, format variants, resized/WP-generated files
  MOVE-IMAGES/   - legitimate unreferenced images worth keeping

Run with --dry-run to preview without moving anything.
"""
import os, re, sys, shutil
from pathlib import Path
from collections import defaultdict

DRY_RUN = "--dry-run" in sys.argv

BASE = Path("/home/mike/hugo/assets/images")
DELETE = BASE / "DELETE-IMAGES"
MOVE   = BASE / "MOVE-IMAGES"

# --- Load referenced images from image-paths.md ---
referenced = set()
with open("/home/mike/hugo/image-paths.md") as f:
    for line in f:
        m = re.search(r'/images/(.+)', line.strip())
        if m:
            referenced.add(m.group(1).strip())

# --- Collect all files, skip staging folders ---
all_files = []
for p in BASE.rglob("*"):
    if p.is_file():
        rel = str(p.relative_to(BASE))
        if Path(rel).parts[0] in ("DELETE-IMAGES", "MOVE-IMAGES"):
            continue
        all_files.append(rel)

unreferenced = set(f for f in all_files if f not in referenced)

to_delete = set()
reasons   = {}   # f -> reason string (for dry-run output)

def mark_delete(f, reason):
    to_delete.add(f)
    reasons[f] = reason

# -------------------------------------------------------
# PASS 1a: OS copy files — "filename (1).ext"
# -------------------------------------------------------
for f in unreferenced:
    if re.search(r'\s+\(\d+\)$', Path(f).stem):
        mark_delete(f, "OS copy — (1) suffix")

# -------------------------------------------------------
# PASS 1b: Format duplicates (same dir, same stem, diff ext)
#   Keep best format: webp > avif > png > jpg/jpeg
# -------------------------------------------------------
FORMAT_PRIORITY = {'.webp': 0, '.avif': 1, '.png': 2,
                   '.jpg': 3, '.jpeg': 3, '.JPG': 3}

by_dir_stem = defaultdict(list)
for f in unreferenced:
    if f in to_delete:
        continue
    p = Path(f)
    clean_stem = re.sub(r'\s+\(\d+\)$', '', p.stem).lower()
    key = (str(p.parent), clean_stem)
    by_dir_stem[key].append(f)

for key, files in by_dir_stem.items():
    if len(files) <= 1:
        continue
    exts = [Path(f).suffix.lower() for f in files]
    if len(set(exts)) <= 1:
        continue
    best = min(FORMAT_PRIORITY.get(e, 99) for e in exts)
    for f in files:
        ext = Path(f).suffix.lower()
        if FORMAT_PRIORITY.get(ext, 99) > best:
            mark_delete(f, f"format duplicate (keeping better format)")

# -------------------------------------------------------
# PASS 1c: Cross-directory duplicates (same filename, diff dirs)
#   Prefer deeper/more specific dir; deprioritize admin/ front-page/
# -------------------------------------------------------
by_filename = defaultdict(list)
for f in unreferenced:
    if f in to_delete:
        continue
    by_filename[Path(f).name.lower()].append(f)

DEPRIORITIZED_DIRS = {"admin", "front-page"}

def dir_priority(f):
    parts = Path(f).parts
    return (1 if parts[0] in DEPRIORITIZED_DIRS else 0, len(parts))

for fname, files in by_filename.items():
    if len(files) <= 1:
        continue
    files_sorted = sorted(files, key=dir_priority)
    for f in files_sorted[1:]:
        mark_delete(f, f"cross-dir duplicate of {files_sorted[0]}")

# -------------------------------------------------------
# PASS 2a: Entire DELETE-converted/ folder
# -------------------------------------------------------
for f in unreferenced:
    if f in to_delete:
        continue
    if Path(f).parts[0] == "DELETE-converted":
        mark_delete(f, "WP conversion artifact (DELETE-converted/)")

# -------------------------------------------------------
# PASS 2b: Resized / WP-generated variants by filename pattern
# -------------------------------------------------------
RESIZE_PATTERNS = [
    (r'-e\d{7,}$',          "WP timestamp suffix"),
    (r'-[0-9a-f]{13}$',     "WP hash suffix"),
    (r'_opt-[0-9a-f]{8,}$', "WP opt+hash suffix"),
    (r'-\d+x\d+$',          "dimension suffix (-WxH)"),
    (r'-\d{3,4}$',          "size suffix (-NNN)"),
    (r'[-_]opt$',           "optimization suffix"),
    (r'[-_]sm$',            "small-size suffix"),
    (r'^Cropped-',          "cropped variant"),
    (r'\d{4,5}px',          "pixel-size in name"),
]

for f in unreferenced:
    if f in to_delete:
        continue
    stem = Path(f).stem
    for pattern, label in RESIZE_PATTERNS:
        if re.search(pattern, stem, re.IGNORECASE):
            mark_delete(f, f"resize/WP variant — {label}")
            break

# -------------------------------------------------------
# PASS 3: Everything else → MOVE-IMAGES
# -------------------------------------------------------
to_move = unreferenced - to_delete

# -------------------------------------------------------
# Execute (or dry-run)
# -------------------------------------------------------
def move_file(f, dest_base):
    src = BASE / f
    dst = dest_base / f
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.move(str(src), str(dst))

if not DRY_RUN:
    DELETE.mkdir(exist_ok=True)
    MOVE.mkdir(exist_ok=True)

del_errors  = []
move_errors = []
del_count   = 0
move_count  = 0

if DRY_RUN:
    print("\n=== DRY RUN — no files will be moved ===\n")
    print("── DELETE-IMAGES ──────────────────────────────")
    for f in sorted(to_delete):
        print(f"  {f}  [{reasons.get(f, '')}]")
    print(f"\n  Subtotal: {len(to_delete)} files\n")
    print("── MOVE-IMAGES ─────────────────────────────────")
    for f in sorted(to_move):
        print(f"  {f}")
    print(f"\n  Subtotal: {len(to_move)} files\n")
else:
    for f in sorted(to_delete):
        try:
            move_file(f, DELETE)
            del_count += 1
        except Exception as e:
            del_errors.append(f"  {f}: {e}")

    for f in sorted(to_move):
        try:
            move_file(f, MOVE)
            move_count += 1
        except Exception as e:
            move_errors.append(f"  {f}: {e}")

    print(f"\n=== Image Sort Complete ===")
    print(f"  → DELETE-IMAGES : {del_count} files")
    print(f"  → MOVE-IMAGES   : {move_count} files")
    print(f"  → Referenced    : {len(referenced)} (untouched)")
    total = del_count + move_count
    print(f"  → Total moved   : {total}")

    if del_errors:
        print(f"\nDELETE errors ({len(del_errors)}):")
        for e in del_errors: print(e)
    if move_errors:
        print(f"\nMOVE errors ({len(move_errors)}):")
        for e in move_errors: print(e)
