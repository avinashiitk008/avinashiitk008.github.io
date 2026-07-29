# 🔬 Dr. Avinash Kumar — Academic Profile Website

**Live at:** [https://avinashiitk008.github.io](https://avinashiitk008.github.io)

A modern, dark-themed academic profile website for **Dr. Avinash Kumar**, Project Scientist at the **Indian Institute of Technology (IIT) Kanpur**. The site showcases his research in enzyme technology, nanobiotechnology, and computational biology.

## 🚀 Deployment Workflow

This site is deployed via **GitHub Pages**. Any changes pushed to the `main` branch go live automatically.

### Making Changes

This repo uses Claude Code (in `C:\Users\HP\OneDrive\Desktop\claude`) for development. The workflow is:

1. **Request changes** — tell Claude what to update
2. **Claude edits files** — modifies `index.html`, `styles.css`, `script.js`, etc.
3. **Claude commits and pushes** — changes are committed with `git add`, `git commit`, `git push`
4. **GitHub Pages deploys** — the site updates automatically at `avinashiitk008.github.io`

### Git Configuration

- **Remote:** `origin` → `https://github.com/avinashiitk008/avinashiitk008.github.io.git`
- **Branch:** `main`
- **User:** `avinashiitk008` / `kumaravinash98@gmail.com`

### CRITICAL RULES (Claude, follow these every time):

1. **After EVERY change to any file in this repo, you MUST:**
   - Stage the changes: `git add -A`
   - Commit with a descriptive message: `git commit -m "description of changes"`
   - Push to origin: `git push origin main`
   - Verify the push succeeded

2. **Never leave uncommitted changes** in this repo. The site should always reflect the latest pushed state.

3. **Always use the full path** to git: `"C:\Program Files\Git\bin\git.exe"` — or ensure `$env:Path` is refreshed.

---

## Features

- **Responsive Design** — Adapts beautifully across desktop, tablet, and mobile (breakpoints at 1024px, 768px, 480px)
- **Dark Theme** — Premium dark UI with accent color highlights (blues, purples, greens)
- **Scroll Animations** — Elements fade and slide in as you scroll (IntersectionObserver-based)
- **Count-Up Stats** — Citation counts, h-index, i10-index animate on scroll
- **SVG Stat Rings** — Circular progress indicators for impact metrics
- **Skill Bars** — Animated proficiency bars for core research areas
- **Interactive Publications** — Filter by year (2023–2026) with real publication data from Google Scholar
- **Collaborator Grid** — Co-authors and research partners displayed dynamically
- **Mobile Navigation** — Slide-out hamburger menu on smaller screens

## File Structure

```
├── README.md         # Deployment docs & workflow instructions
├── index.html        # HTML structure and content
├── styles.css        # All styles (reset, layout, components, responsive)
├── script.js         # Interactivity, animations, and data
└── rrr.jpg           # Profile photo
```

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | Vanilla CSS3 (custom properties, flexbox, grid, animations) |
| Interactivity | Vanilla JavaScript (ES6+, IntersectionObserver, requestAnimationFrame) |
| Icons | Emoji (no icon library dependency) |
| Fonts | Inter (body), Playfair Display (headings) via Google Fonts |
| Hosting | GitHub Pages (auto-deploy from `main` branch) |

## Data Source

Publications, citation metrics, and collaborator information sourced from:
- [Google Scholar Profile](https://scholar.google.com/citations?user=a_QGD-sAAAAJ&hl=en)

## License

Academic profile — free to use and adapt for personal academic websites.
