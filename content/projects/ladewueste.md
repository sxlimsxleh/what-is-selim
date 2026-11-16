---
title: Ladewüste — where Germany runs out of fast chargers
summary: Germany's messy public charger register turned into a playful 3D map where you drop virtual fast chargers and watch "charging deserts" shrink.
status: in-progress   # change to shipped when done
year: 2026
role: Solo build (with Claude Code)
stack: [Python, DuckDB, dbt, H3, FastAPI, React, TypeScript, deck.gl, MapLibre]
links: { repo: "TODO" }
featured: true
---
**Problem:** the Bundesnetzagentur Ladesäulenregister is a hand-made, inconsistent CSV.
**What I built:** profiled and cleaned it with dbt tests (Data Doctor page shows every fix with counts), H3 coverage model, greedy site planner, play mode.
**Result:** TODO real counts from docs/mess_report.md
