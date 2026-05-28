# Accounts Spec Demo — Postman v12 Native Git

**Spec-first customer demo** with a professional web UI, OpenAPI contract, and Postman collection in one repo.

**Path:** `/Users/nituroy/Documents/DEMO/accounts-spec-demo`

---

## What’s in the box

| Item | Purpose |
|------|---------|
| `public/` | Dashboard UI (HTML/CSS/JS) |
| `server.js` | Simple Accounts API (no database) |
| `openapi.yaml` | **Hero artifact** for spec-first PR demo |
| `postman/collections/` | Collection v3 YAML + basic tests |
| `.github/workflows/` | CI on PR + publish on main |
| `DEMO-GUIDE.md` | Full customer script |
| `demo/pr-add-tier/` | Exact PR change to rehearse |

---

## Quick start

1. Double-click **`start-api.command`**
2. Browser → **http://localhost:3000**
3. Postman desktop → **Files → Open Folder → this folder → Connect → Local View**

---

## Demo story (short)

1. Show UI + spec + collection aligned  
2. PR changes **openapi.yaml** (add `tier`)  
3. Reviewer asks to update collection  
4. Postman Agent/spec sync → commit `postman/` to same PR  
5. GitHub Action runs **Postman CLI** tests  
6. Merge → **workspace push** to Cloud  

Read **[DEMO-GUIDE.md](./DEMO-GUIDE.md)** for the full script.

---

## GitHub setup (for live CI)

1. Push repo to GitHub  
2. Add secret `POSTMAN_API_KEY` in repo settings  
3. Open a PR → see **Accounts API checks** run  

---

## Postman workspace

Update `.postman/resources.yaml` if not using Sam’s demo workspace ID.
