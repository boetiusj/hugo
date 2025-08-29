# **Terminal Playbook (copy/paste friendly)**

## **One-time setup (do these once)**

`# Never create merge commits on pull (use fast-forward only)`  
`git config --global pull.ff only`

`# Remember how you resolved conflicts (learns your choices!)`  
`git config --global rerere.enabled true`

`# Use an editor that won’t surprise you (pick one)`  
`git config --global core.editor "nano"`  
`# or: git config --global core.editor "code --wait"`

`# Ignore build artifacts (Hugo)`  
`printf "\n# Hugo\npublic/\nresources/\nhugo_stats.json\n" >> .gitignore`  
`git rm -r --cached public resources 2>/dev/null || true`  
`git add .gitignore && git commit -m "chore: ignore Hugo build outputs"`

## **Daily loop (feature → merge → deploy)**

**0\) Confirm trunk (your deploy branch)**

`# assume trunk is mk`  
`git remote show origin     # look for "HEAD branch: mk"`

**1\) Update trunk**

`git switch mk`  
`git pull --ff-only`

**2\) Create a feature branch**

`git switch -c fix/jsonld`  
`git push -u origin fix/jsonld   # sets tracking`

**3\) Work, commit small, run builds**

`hugo --gc --minify --baseURL="/"`  
`git add -A && git commit -m "Fix JSON-LD: build data + jsonify once"`

**4\) Keep your feature branch fresh (rebase)**

`git fetch origin`  
`git rebase origin/mk`  
`# if conflicts:`  
`#   git status`  
`#   git diff --name-only --diff-filter=U`  
`# choose per file:`  
`#   git checkout --ours path/to/file     # keep your version`  
`#   git checkout --theirs path/to/file   # take trunk version`  
`git add <fixed files>`  
`git rebase --continue`  
`# push rewritten history safely:`  
`git push --force-with-lease`

**5\) Fast-forward merge to trunk**

`git switch mk`  
`git pull --ff-only`  
`# if your feature is rebased on mk, this will be a clean FF merge:`  
`git merge --ff-only fix/jsonld || git merge --no-ff fix/jsonld`  
`hugo --gc --minify --baseURL="/"`  
`git push`

**6\) Prune branches**

`git branch -d fix/jsonld`  
`git push origin --delete fix/jsonld`

## **Conflict cheat-sheet (speed picks)**

See conflicts:

 `git status`  
`git diff --name-only --diff-filter=U`

* 

Keep **your** version:

 `git checkout --ours path/to/file`

* 

Take **incoming** version:

 `git checkout --theirs path/to/file`

* 

Finish:

 `git add path/to/file`  
`git commit            # or: git merge --continue / git rebase --continue`

* 

**Generated stuff?** Don’t fight it.

`printf "\npublic/\nresources/\nhugo_stats.json\n" >> .gitignore`  
`git rm -r --cached public resources 2>/dev/null || true`  
`git add .gitignore && git commit -m "ignore build outputs"`

## **“Oh no” recovery (quick exits)**

`git merge --abort    # bail from a bad merge`  
`git rebase --abort   # bail from a bad rebase`  
`git reset --hard     # nuke local changes (be sure!)`  
`git reflog           # find a safe commit after a bad jump`

**Editor stuck on COMMIT\_EDITMSG?**

`rm -f .git/.COMMIT_EDITMSG.swp`  
`GIT_EDITOR=true git rebase --continue`

---

# **VS Code Playbook (visual \+ safe)**

You’ll still run a couple terminal one-liners for “ff-only” pulls and “force-with-lease”. Everything else is point-and-click.

## **One-time VS Code settings**

1. Turn on the 3-way Merge Editor:  
    Settings → search “Merge Editor” → **Enable**.

2. Nice to have: install **Git Graph** (visual history).

In a terminal (inside VS Code), apply:

 `git config --global pull.ff only`  
`git config --global rerere.enabled true`

3. 

## **Daily loop (UI steps)**

**1\) Update trunk**

* Bottom-left: checkout **mk**.

* Source Control “⋯” → **Pull** (ff-only enforced by your config).

**2\) Create/publish a feature branch**

* Click branch name → **Create new branch** (e.g., `fix/jsonld`).

* Source Control “Publish Branch”.

**3\) Commit as you go**

* Stage changed files in the SC panel → write a short message → **Commit**.

Run your build in the terminal:

 `hugo --gc --minify --baseURL="/"`

* 

**4\) Rebase feature onto mk (UI)**

* Command Palette → **Git: Rebase Current Branch…** → choose **mk**.

* If conflicts appear, VS Code opens the **Merge Editor**:

  * For each hunk: choose **Current** (your branch), **Incoming** (mk), or **Both**.

  * Click **Complete Merge** at top when all are resolved.

  * Back to SC panel → **Commit** (finalizes the rebase).

* Push rewritten branch:

  * SC “⋯” → **Push (Force with Lease)**  
     *(or terminal: `git push --force-with-lease`)*

**5\) Merge to mk (UI)**

* Checkout **mk** (status bar).

* SC “⋯” → **Merge Branch…** → select `fix/jsonld`.

* Resolve any remaining conflicts in Merge Editor → **Complete Merge** → **Commit**.

* **Push**.

**6\) Clean up**

* Branch menu → **Delete Branch…** (select `fix/jsonld`) → also **Delete remote branch**.

## **VS Code conflict tips**

* The Merge Editor shows **Current / Incoming** with inline previews. Use it—it’s safer than manual editing.

* For generated files showing up:

  * Right-click file → **Discard Changes** (if safe).

  * Add to `.gitignore` in Explorer; commit ignore change.

* Stuck in a half-merge?

  * Command Palette → **Git: Abort Merge** or **Abort Rebase**.

  * Or terminal: `git merge --abort` / `git rebase --abort`.

---

# **Best Practices (works in both worlds)**

* **One true trunk.** Set your deploy branch (e.g., `mk`) as:

  * GitHub default branch, and

  * Netlify “Branch to deploy”.

* **Small, focused branches.** One fix or feature per branch. Merge quickly.

* **Pull ff-only on trunk.** Prevents weird “merge bubbles” on pull.

* **Rebase feature branches before merging.** Cleaner history; fewer surprises.

* **Use `--force-with-lease`, never `--force`.** Protects collaborators (including future-you).

* **Commit messages: call the shot.**  
   `Fix JSON-LD: build arrays as data; jsonify once` beats `Update file`.

**Automate what nags you.** A tiny script or Make target:

 `#!/usr/bin/env bash`  
`set -euo pipefail`  
`git switch mk && git pull --ff-only`  
`git switch "$1" && git fetch origin && git rebase origin/mk`  
`hugo --gc --minify --baseURL="/"`

*   
* **Keep build outputs out of Git.** `public/`, `resources/`, `hugo_stats.json` → `.gitignore`.

* **Lock in conflict choices.** `rerere` remembers how you resolved recurring files.

---

# **Which should you use?**

* **Terminal** when you want speed, scripts, and absolute control. Great for tricky rebases, history surgery, and CI/CD debugging.

* **VS Code** when you’re resolving many conflicts or reviewing complex diffs. The Merge Editor is like a good ump—keeps the game fair and visible.

