# Mova Law Group Website Rules

These rules are mandatory for every coding agent, including Codex, OpenCode, and delegated agents.

## Prime Directive

Make only the change the user requested. Preserve everything else.

If the user asks to change one sentence, change that sentence only. A small request is never permission to redesign, restructure, rewrite, modernize, refactor, rename, reorder, or replace unrelated work.

## Scope Guardrails

1. Identify the exact requested element, file, and behavior before editing.
2. Use the smallest clean patch that completes the request.
3. Do not change adjacent copy, spacing, colors, typography, imagery, components, sections, routes, metadata, dependencies, or configuration unless required for the requested result.
4. Do not remove, replace, merge, or reorder an existing section unless the user explicitly requests that exact action.
5. When adding a section, extend the page. Preserve every existing section unless removal was explicitly requested.
6. Do not reinterpret “update,” “adjust,” “flip,” “fix,” or “change” as permission for a broad rewrite.
7. Do not perform cleanup, refactoring, dependency upgrades, formatting sweeps, or architecture changes alongside a content or visual adjustment.
8. If the requested placement or target is genuinely ambiguous, ask one concise question before editing.

## Approved Design System

- Preserve the established premium legal direction: navy `#071827`, gold `#C8A060`, off-white `#F7F7F4`, light gray `#D9DEE6`, and charcoal `#333333`.
- Preserve the editorial serif headings, clean sans-serif body copy, restrained gold rules, squared geometry, generous spacing, and conversion-focused hierarchy.
- Maintain responsive behavior and accessibility.
- Reuse approved components and patterns before introducing a new visual language.
- Never replace approved imagery or copy unless the user requests it.
- Never invent verdicts, settlements, awards, ratings, testimonials, guarantees, attorney credentials, office locations, or legal claims.
- Keep legal disclaimers and qualified language intact.

## Content Rules

- Treat visible text as approved content unless the user targets it for editing.
- Preserve names, phone numbers, calls to action, disclaimers, and factual details.
- Do not strengthen legal or marketing claims without verified source material and explicit approval.
- Generated testimonials must never be presented as real client statements.
- Do not publish placeholder text, fake contact data, or a form that implies delivery to a backend when no backend is connected.

## Asset Rules

- Store production assets under `public/` with descriptive filenames.
- Do not overwrite or delete an approved asset unless explicitly requested.
- Optimize for web use where practical without visibly degrading quality.
- Do not introduce watermarked, unlicensed, or attribution-restricted imagery.
- Keep generated or stock imagery professional, realistic, and consistent with the established brand.

## Required Workflow

1. Read this file before editing.
2. Inspect the current Git status and the exact target code.
3. Preserve unrelated user changes.
4. Apply the smallest patch.
5. Review the diff and confirm only intended files changed.
6. Run the cheapest reliable verification, including `npm run build` for production-facing code changes.
7. Commit the completed adjustment with a specific message.
8. Push the commit to the configured GitHub `main` branch unless the user explicitly says not to push.
9. When the site is connected to Vercel, verify the requested change on the live production URL before reporting completion.

## Completion Standard

An adjustment is not complete merely because local files changed. Completion requires:

- requested scope implemented;
- unrelated website content preserved;
- production build passing;
- clean Git status;
- commit created and pushed to GitHub;
- live deployment verified when available;
- concise report containing the commit, proof, risk, and one next action.

If a required completion step is blocked, report the exact blocker. Never claim success without proof.
