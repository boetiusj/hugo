# 0) One-time comfort settings
git config --global pull.ff only
git config --global rerere.enabled true

# 1) Start from mk up-to-date
git switch mk
git pull --ff-only

# 2) New feature/fix branch
git switch -c fix/short-name
git push -u origin fix/short-name

# 3) Work → build → commit
hugo --gc --minify --baseURL="/"
git add -A
git commit -m "Describe the change clearly"

# 4) Rebase on latest mk before merge
git fetch origin
git rebase origin/mk
# resolve any conflicts: git status; git checkout --ours/--theirs; git add; git rebase --continue
git push --force-with-lease

# 5) Fast-forward merge to mk
git switch mk
git pull --ff-only
git merge --ff-only fix/short-name || git merge --no-ff fix/short-name
hugo --gc --minify --baseURL="/"
git push

# 6) Clean up
git branch -d fix/short-name
git push origin --delete fix/short-name

# Handy checks
git remote show origin     # shows: HEAD branch: mk (or main)
git status -sb             # shows if mk is ahead/behind origin/mk
git fetch origin --prune   # refresh origin/* pointers
git pull --ff-only         # fast-forward mk to origin/mk
git push                   # update origin/mk from mk

# If you ever need to set tracking:

git branch -u origin/mk mk
