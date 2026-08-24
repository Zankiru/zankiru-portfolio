# Luis Bucheli — Developer Portfolio

![License: MIT](https://img.shields.io/badge/License-MIT-2a5f4f.svg)

A personal portfolio site built with plain HTML, CSS, and JavaScript — no framework, no build step. The main project featured on the site is **EnterpriseRx Sig Code Lookup**, a study and reference tool for translating pharmacy prescription "sig" codes.

**Live Site:** <a href="https://zankiru.github.io/zankiru-portfolio">Z's Portfolio</a>

### Sig Code Lookup will be updated periodically once new sigs are learned.
---

## 🔍 Featured Project: EnterpriseRx Sig Code Lookup

`sig-lookup.html` is the tool linked from the "Featured" project card on the portfolio homepage. It helps pharmacy technicians translate prescription sig codes (like `BID`, `PRN`, `QHS`) into the label-copy phrasing used in EnterpriseRx.

### What it does

- **Instant single-code lookup** — type a code, see its translation immediately, with partial-match suggestions (cycle through them with `Tab`, clear with `Esc`).
- **Multi-sig translation** — type several codes in one go, either space-separated (`1 BID PO PRN P`) or run together (`1BIDPOPRNP`), and get one combined translation instead of looking each one up separately.
- **Category-aware sentence construction** — recognized codes are reordered into the canonical clinical sentence structure (Dose → Route → Frequency → Special → PRN/Condition → Duration) regardless of the order they were typed in, and PRN reasons are fused into one clause with correct list grammar (e.g. `PRN P NA DZ` → "as needed for pain, nausea, and dizziness").
- **Browse by category** — Frequency, Route, PRN/Condition, Special, Duration, Dose, and pre-built Combo Sigs, all browsable by tab.
- **70+ sig codes** covering common frequencies, routes, PRN reasons, special instructions, durations, and doses, plus curated combo translations for the most frequent full sigs.

### Example

| You type | You get |
|---|---|
| `BID` | `Two times a day` |
| `1 BID PO PRN P` | `Take one tablet by mouth two times a day as needed for pain.` |
| `1SS QID PO X10` | `Take one and one-half tablets by mouth four times a day for 10 days.` |

### Why it's built this way

The parser is intentionally dependency-free — just a longest-match tokenizer over a flat array of `{ code, translation, category }` objects, with a small rule set for turning matched categories into a coherent sentence. It grew in stages: single-code lookup → multi-code tokenizer → category-aware sentence construction, each layered on top of the last without touching the UI.

---

## 🖥️ About This Portfolio

The site itself (`index.html`) is a single-page portfolio with four sections:

- **About** — background and experience summary
- **Projects** — the Sig Code Lookup tool plus additional in-progress projects
- **Skills** — languages, frameworks, and platforms
- **Contact** — email, GitHub, and LinkedIn, plus a contact form

### Skills shown on the site

- **Languages:** JavaScript / TypeScript, Python, Go, SQL, HTML & CSS

---

## 🛠️ Tech Stack

- HTML5 + semantic markup
- CSS3 (custom properties, CSS Grid/Flexbox, no framework)
- Vanilla JavaScript (no dependencies, no bundler)
- Fonts via Google Fonts: DM Serif Display, DM Sans, DM Mono

## 📁 Project Structure

```
.
├── index.html          # Portfolio homepage
├── istyles.css         # Portfolio styles
├── sig-lookup.html      # EnterpriseRx Sig Code Lookup tool
├── opti-sigs.js              # Sig data + multi-sig parser logic
├── sigstyles.css        # Sig Lookup tool styles
├── README.md
└── LICENSE
```


## 🚀 Running Locally

No build step required — it's all static files.

```bash
git clone https://github.com/Zankiru/<repo-name>.git
cd <repo-name>

# open index.html directly in a browser, or serve it locally:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — free to use, copy, modify, and share, including as study material for pharmacy tech students or developers learning how to build a small parser/tokenizer from scratch. Attribution (keeping the copyright notice) is appreciated but see the license for the exact terms.
