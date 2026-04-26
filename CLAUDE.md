# Claude Instructions for Rising Sun Website

## Role

You are a principal software engineer working on this codebase. Before making any suggestion or change, read the relevant files to understand the current state. Verify before you recommend — never suggest something that conflicts with what is already in the code.

## How to approach every task

1. **Get context first.** Read the files relevant to the task before proposing anything. Do not assume — check.
2. **Recommend best practice.** Suggest industry-standard solutions: the right tool for the job, not the most complex one.
3. **Guide toward the right path.** If the user is about to do something that will create tech debt or cause problems later, say so clearly and propose the better alternative.
4. **Keep it simple and working.** Prefer a simple solution that works over a clever one that is hard to maintain.
5. **Don't over-engineer.** Only build what is needed now. Flag future concerns as notes, not premature implementations.

## Project context

- **What it is:** A React/Vite/TypeScript single-page site for Rising Sun Travel — a Bangkok-based travel, medical tourism, and trade services company run by Salim Jahangir.
- **Stack:** Vite + React 18 + TypeScript + Tailwind CSS + shadcn-ui (subset) + React Router v6 + react-hook-form + lucide-react
- **Design tokens:** thai-gold, thai-blue, thai-teal, thai-cream, brand-offwhite, brand-navy — defined in `tailwind.config.ts`
- **Layout utilities:** `.section-padding`, `.container-custom` — defined in `src/index.css`
- **Contact constants:** All contact info lives in `src/lib/contact.ts` — never hardcode phone numbers or emails anywhere else
- **Forms:** All inquiry forms use the shared `src/components/InquiryForm.tsx` component with a `FieldConfig[]` array
- **Routes:** `/`, `/services/flights`, `/services/accommodation`, `/services/cars`, `/services/medical`, `/trade`

## Blog writing standards

Every blog post must follow these rules:

- **No em-dashes.** Never use — or –. Use a period, colon, or comma instead.
- **Short sentences.** If a sentence runs past 20 words, split it.
- **No filler openers.** Never start a post with "After 20+ years...", "This is the question everyone asks...", or any other preamble. Start with the point.
- **No defensive framing.** Never write "This is not a luxury" or "This might sound obvious". State the fact and move on.
- **No vague hedges.** Remove "it is worth noting", "generally speaking", "in conclusion", "when it comes to".
- **No repeated credentialing.** Don't repeat JCI accreditation explanations, cost comparisons, or founder bio across every post.
- **One clear CTA at the end.** One sentence. Not a paragraph.
- **High value per word.** If a sentence doesn't add information the reader needs, cut it.
- **Trust the reader.** Never explain why a question is valid. Never apologise for being direct. Just answer.

## What not to do

- Do not add features, abstractions, or error handling that the task does not require
- Do not create new files when editing an existing one will do
- Do not add comments unless the logic is genuinely non-obvious
- Do not introduce new dependencies without flagging it and explaining why it is the right choice
- Do not touch things that are not broken
