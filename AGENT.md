---
schema_version: "1.0"
---

# Agent Manifest: spigolo.net

```yaml
repo: spigolo.net
type: static-site
description: "Static HTML e-commerce site — Italian gift boxes, Spigolo brand"
owner: migar-git
```

## Authority

```yaml
authority:
  max_auto_level: 1
  always_open_pr: true
  protected_paths:
    - .env*
  notify_on: [2, 3]
  allowed_machines: []
```

## Commands

```yaml
commands:
  test:   ""
  lint:   ""
  format: ""
  build:  ""
  deploy: ""
```

## LLM Routing

```yaml
llm:
  local_model: "qwen2.5-coder:7b"
  escalate_on:
    - cross_repo_change
    - architecture_decision
    - security_related
    - confidence_below: 0.75
```

## Dependencies

```yaml
dependencies: []
```

## CI / Analytics

```yaml
ci:
  push_results: false
  min_pass_rate: 1.0
  track:
    - lint_errors
```

## Notes

```yaml
notes: |
  - Static HTML site for Spigolo Italian gift boxes brand
  - E-commerce catalog pages (no backend payment processing in this repo)
  - Italian-language content
  - No build system — pure HTML/CSS/JS
```
