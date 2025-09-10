
# AI‑Augmented IT Support Dashboard (Portfolio‑Ready)

A lightweight, **GitHub Pages**‑hostable dashboard that demonstrates:
- IT support / installation tickets modeled from real‑world tasks (e.g., Perth Airport T4, IKEA AP install).
- **AI (GPT) augmented** workflow for auto‑categorization + natural‑language insights (optional).
- **PowerBI** optional path: import `data/tickets.csv`, publish to web, and embed the iframe in `dashboard/index.html`.

## Project Structure
```
ai-support-dashboard/
├─ data/
│  ├─ tickets.csv           # simulated tickets (120 days, ~220+ rows)
│  └─ insights.json         # KPIs + AI summary (can be GPT‑generated)
├─ scripts/
│  ├─ generate_data.py      # placeholder (edit to regenerate data)
│  ├─ classify_with_gpt.py  # optional: uses OpenAI API or keyword fallback
│  └─ build_insights.py     # aggregates CSV -> insights.json
└─ dashboard/
   ├─ index.html            # static dashboard (ECharts)
   ├─ utils.js
   └─ styles.css
```

## Local Preview
Use any static server in `dashboard/` (so relative paths to `../data/*` work). Examples:

**Python 3**
```bash
cd dashboard
python -m http.server 8080
# open http://localhost:8080
```

**Node (npx)**
```bash
cd dashboard
npx http-server -p 8080
```

> If you open `index.html` directly from the filesystem, the browser may block `fetch('../data/tickets.csv')` due to CORS/file URL restrictions.

## Optional: GPT Enrichment
- Set your environment variable: `export OPENAI_API_KEY=sk-...`
- Run: `python scripts/classify_with_gpt.py` to produce `data/tickets_enriched.csv`
- Then `python scripts/build_insights.py` to refresh `insights.json`

*(The demo works without GPT. The script falls back to rule‑based tagging.)*

## Optional: PowerBI Integration
1. Open **PowerBI Desktop** → Import `data/tickets.csv`.
2. Build visuals (trend, categories, SLA, resolution time).
3. Use **Publish to web** (if enabled on your tenant).
4. Paste the iframe URL into `dashboard/index.html` where indicated.

## Deploy to GitHub Pages (Free)
1. Create a new GitHub repo, e.g., `ai-support-dashboard`.
2. Copy the entire project directory into the repo.
3. Commit & push.
4. In **Settings → Pages**:
   - Source: **GitHub Actions** (recommended) or **Deploy from a branch**.
   - If using branch deploy, set the site root to `/dashboard` (so `index.html` is the homepage).
5. Your site will be available at `https://<your-username>.github.io/ai-support-dashboard/`.

## Portfolio Wording (Sample)
> **AI‑Enhanced IT Support Dashboard** — I designed a ticket‑like dataset based on real IT support tasks (airport/iKEA install), then used GPT to auto‑categorize descriptions and generate plain‑language insights. The dashboard (ECharts/PowerBI) highlights trends, SLA compliance, and anomalies to inform resourcing decisions. Tools include PowerBI, GPT (optional), Power Query, and lightweight static hosting via GitHub Pages.

## License
MIT
