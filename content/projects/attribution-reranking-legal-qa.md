---
title: Attribution-aware re-ranking for legal QA
summary: Using attribution to train a re-ranker that makes legal RAG answers cite the evidence they actually used. Published at ASAIL 2026.
status: research
year: 2025
role: Guided research at TUM; co-author
stack: [Python, PyTorch, cross-encoders, MExGen/C-LIME]
links: { paper: "TODO" }
featured: false
---
- Applied MExGen/C-LIME attribution to estimate paragraph-level influence on generated legal answers.
- Trained a cross-encoder re-ranker with attribution-derived supervision.
- Evaluated against dense retrieval baselines (BERTScore, ROUGE-L, claim recall, citation faithfulness, citation similarity).
