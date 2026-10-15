# SHE BUILDS — WEBSITE SPECIFICATION

## Purpose and audience
She Builds is an approachable, visually curated website that highlights one female architect each day. It celebrates architects from different countries and cultures for a general audience, with short, verified profiles and accessible language.

## Site map (three content pages plus the required log-in)

### `login.html` — Sign up and log in
- Always public. Split-screen editorial design on desktop, usable on phone.
- Email/password sign-up, email/password sign-in, readable status and error messages.
- On successful sign-in, send visitor to `index.html`.

### `index.html` — Today's Architect
- The one daily featured woman selected automatically from a curated collection using the current date (same feature for every visitor on the same UTC calendar date, documented on the site).
- Show name, region/country, short background, approachable description of design style, three verified notable projects (with image or missing-image placeholder), and one verified interesting fact.
- A clear navigation path to The Archive and About.
- Make daily rotation deterministic: if there are N verified profiles, cycle the index across dates; do not fabricate new content or imply that the archive grows automatically each day.

### `archive.html` — The Archive
- Organized, responsive card grid showing the available curated architect profiles.
- Each card includes name, region/country and a licensed photo or labeled image placeholder.
- A card can reveal that architect's detail in an accessible on-page section or via a URL query parameter on this same page; do not add an extra page beyond the agreed three content pages unless the user approves.
- If there is no verified profile data yet, display clearly labeled draft placeholders rather than invented biographies.

### `about.html` — About
- Concisely explain the site's mission, commitment to geographic/cultural breadth, and accessible educational approach.
- Explain how the daily rotation and finite archive work.
- Include attribution/credits for licensed photographs and factual sources where applicable.

## Content and verification rules
- NEVER invent names, facts, dimensions, dates, nationalities, places, quotes, awards or projects. Ask the student for content or clearly label data awaiting verification.
- Profiles must contain background, design approach, three notable projects and one interesting fact before they go live as factual content.
- Provide a small, easy-to-edit local JavaScript data file for curated, verified profiles. No AI-generated daily facts or network API is required.
- The project must not depend on new images being generated. Store supplied, permitted JPG/WebP files in `images/`; where missing, use a plain gray placeholder labeled `[ADD: image of ...]`.
- Images must have meaningful alt text. Alert the student whenever an image is larger than 500 KB.

## Authentication gate (mandatory)
- Supabase email-and-password sign-up and log-in using the public Project URL and **publishable** key only, loaded with a Supabase CDN script tag.
- `login.html` is NEVER gated.
- `index.html` is the home page at the top level of the folder.
- Every page except `login.html` checks for a current logged-in Supabase user/session; when signed out, redirect to `login.html`, including when directly entering a `.html` page address.
- Following successful log-in, navigate to `index.html`. Every gated page has a working Log out button which signs the visitor out and returns to `login.html`.
- All internal links are relative, not absolute.
- Display a loading state while checking a session, so protected content is not briefly shown before redirecting.
- The gate is for coursework demonstration, not protection of sensitive content. Do not put private information behind it.

## Technical constraints
- Plain HTML, CSS and JavaScript files only; no frameworks, no npm, no build step.
- Supabase via CDN script tag; no local secret keys or server-side credentials.
- Use static `index.html` in the project root, deployed from GitHub to Vercel (Framework Preset: Other).
- Must work well on a phone, with accessible keyboard navigation and readable contrast.
- No payments, no database tables and no storage of visitor data beyond authentication.
- Each page has a unique title and a one-line meta description. Add a share image that uses permitted artwork and reference the live URL once available.

## Build and review milestones
### Current approved review scope
Scheme C is selected. Promote it to root `index.html` and build `archive.html` and `about.html`. Use labeled draft content until complete, sourced profiles are supplied. Provide a local `profiles.js` collection and deterministic UTC rotation that activates only for complete verified profiles; an empty collection displays a draft. No Supabase, login page, or authentication controls in this milestone. Remove scheme folders after checks. Do not commit or deploy before this review. Authentication requirements below remain for the later milestone.

### Homepage scheme review scope
- The three local homepage schemes use identical, clearly labeled draft profile content until verified architect content is supplied.
- These are browser-openable design previews only: authentication, daily rotation, Archive and About pages are implemented in later milestones. Preview navigation uses real on-page sections and links between schemes; no simulated log-in or log-out controls.
- Each preview includes a local typographic share image. Live absolute share URLs will be added after deployment.

1. Save `DESIGN.md`, `SPEC.md` and `AGENTS.md`; initialize a local Git repository.
2. Show three distinct homepage schemes in `scheme-a/`, `scheme-b/` and `scheme-c/`, all browser-viewable; student critiques and chooses.
3. Update DESIGN.md to record the chosen scheme before promoting it to root `index.html`; build other pages and delete the scheme folders. Commit: `First working version`.
4. Publish public GitHub repository using GitHub Desktop and deploy to Vercel.
5. Configure Supabase; use only Project URL and publishable key. Commit functional auth as `Log-in gate`, then push.
6. Make at least FIVE real, meaningful commits **after** the first working version (log-in gate counts as one). For each design/content decision, update DESIGN.md or SPEC.md first; test, commit, and push. Keep commit references for reflection.
7. Test from a signed-out private browser window and phone. Complete reflection with actual details and real commit links.

## Done when — mandatory checklist
- [ ] The website works on a phone.
- [ ] The menu reaches every page.
- [ ] Sign up, log in and log out all work.
- [ ] Typing a page address ending in `.html` while signed out redirects to `login.html`.
- [ ] Every image has alt text.
- [ ] The live link opens in a new tab or window when tested.
- [ ] There are at least three content pages, plus `login.html`.
- [ ] GitHub shows at least five meaningful commits after `First working version`.
- [ ] DESIGN.md, SPEC.md and AGENTS.md exist and reflect the final website.
- [ ] The newest pushed GitHub version is live on Vercel.

## Canvas hand-in
- Submission comment: the short `.vercel.app` link, a working fictional test email and password, and the GitHub repository link.
- Upload `BA4_Lastname_Reflection` as Word/PDF, 300–500 words, covering (1) idea, audience and most important reference, (2) biggest before/after change with links to the two real commits, and (3) directing the agent: what went well, what needed correction, and advice to a classmate.
- Never submit a real account password as the test login.
