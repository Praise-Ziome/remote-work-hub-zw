# Remote Work Hub ZW

Remote Work Hub Zimbabwe is a landing page that curates verified remote jobs, AI opportunities, freelance gigs, and internships for Zimbabweans and professionals across Africa.

![Status](https://img.shields.io/badge/status-active-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## Features

- **Verified job listings** — featured remote roles with pay, location, posted date, and category tags
- **Category browsing** — jobs grouped into Engineering, AI & Data, Writing, Admin, Internships, Design, Support, Marketing, and Finance
- **Career resources** — short guides on spotting fake remote jobs, CV tips, and interview prep
- **Newsletter signup** — client-side email validation with inline feedback
- **Light/dark mode** — theme toggle with `localStorage` persistence and automatic detection of the user's system preference
- **Fully responsive** — collapses gracefully from desktop down to mobile, including a hamburger nav

## Tech stack

- HTML5
- CSS3 (custom properties for theming, no framework/build step)
- Vanilla JavaScript (ES6+)

No dependencies, no build tools — just three files.

## Project structure

```
remote-work-hub-zw/
├── index.html      # Page markup
├── styles.css       # Styling, layout, and light/dark theme variables
├── script.js        # Theme toggle, mobile menu, dynamic content rendering
└── README.md
```

## Getting started

Clone the repo and open `index.html` directly in a browser, or serve it locally:

```bash
git clone https://github.com/<your-username>/remote-work-hub-zw.git
cd remote-work-hub-zw
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customizing content

Job listings, categories, and career resources are defined as plain JS arrays near the top of `script.js` (`JOBS`, `CATEGORIES`, `RESOURCES`), so you can edit or extend them without touching the HTML. Swap these for a fetch call to an API or JSON file if you want the data to be dynamic.

## Roadmap

- [ ] Wire up job detail pages / modals
- [ ] Connect newsletter form to a real email service
- [ ] Add a jobs filter/search page
- [ ] Persist and paginate a full job dataset

## License

MIT — free to use and adapt.
