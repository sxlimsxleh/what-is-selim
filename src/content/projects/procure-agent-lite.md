---
title: procure-agent-lite
summary: A messy procurement inbox in, a human-approved draft purchase order in a mock SAP out, with every number traceable to its source.
status: shipped
year: 2026
role: Solo build (with Claude Code)
stack: [Python, Pydantic, Claude API, FastAPI, SQLite, Streamlit, pytest, GitHub Actions]
links: { repo: "https://github.com/sxlimsxleh/procure-agent-lite" }
featured: true
order: 1
---
**Problem:** buyers copy numbers from PDFs and emails into SAP by hand.
**What I built:** extraction with grounding checks (every field cites its source text), deterministic policy + scoring, human approval, idempotent writes to a flaky mock SAP OData API, audit log, evals.
**Result:** TODO add accuracy table (before → after) from the repo README.
**What I learned:** TODO
