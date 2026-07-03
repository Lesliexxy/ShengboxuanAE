# 圣博轩建筑工程 — Business Website

A bilingual (中文 / English), light-mode marketing site for Shengboxuan Architectural
Engineering Co., Ltd. Static HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html        Single page: hero, about, services, track record, projects, contact
css/styles.css     All styling
js/main.js         Language toggle, mobile nav, scroll header, lightbox
assets/img/        Optimized project photos
```

The original source photos and the company PDF (`圣博轩有限责任公司.pdf`) are kept in this
folder for reference but are not linked from the site. Consider excluding the two raw
photo folders (`Single_family_house_Sanya...`, `Hotel apartment_Dali...`) and the PDF from
the published repo/branch if you'd rather keep the public site lean.

## Preview locally

Any static file server works, e.g.:

```
npx serve .
# or
python -m http.server 8080
```

## Publish to GitHub Pages

1. Create a new GitHub repository (e.g. `shengboxuan-website`).
2. Push the contents of this folder to the repo's `main` branch.
3. In the repo Settings → Pages, set Source to `main` / root.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

If you want it at the root of `<username>.github.io` instead, name the repo
`<username>.github.io` and push there directly.

## Content notes

- Contact phone number currently shown is the Shenyang HQ line from the company
  brochure. Swap in a direct Sanya number in `index.html` (search for `15881727276`)
  whenever one is available.
- The "三亚海棠湾" reference photo in the Track Record section is cropped from a
  third-party project marketing poster to remove that company's branding/QR code —
  it illustrates past labor/window-installation work there, not an original photo.
