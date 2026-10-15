# SHE BUILDS — WEBSITE SPECIFICATION

## Live website
Vercel address: https://she-builds-one.vercel.app/

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
### Yasmeen Lari photography
Approved Project 03 replacement: replace Pakistan State Oil Headquarters with Tomb of Sultan Ibrahim Conservation, Makli, Thatta, Pakistan. Verify Lari’s conservation work through Heritage Foundation of Pakistan and associated pottery/ceramic craft training using her PLATFORM interview (Part 2). Explicitly distinguish conservation involvement from original architectural design; do not assign a conservation date from the photograph. Use A.Savin’s Commons `PK Thatta asv2020-02 img25 Makli Necropolis.jpg`, identified as this tomb, under Free Art License 1.3, saved as `images/tomb-sultan-ibrahim.webp` below 500 KB, preserving aspect ratio. Credit “A.Savin, Wikipedia,” link source and license, identify She Builds conversion/resizing and retain the image adaptation under FAL 1.3. Replace the PSO text panel with the existing project-image layout. Preserve Projects 01/02, portrait and all other profiles. No commit.

Approved Project 02 replacement: replace Finance and Trade Centre with “Low-Cost Rural Housing,” a body of humanitarian work rather than a single named building. Describe Lari helping communities construct affordable homes using local materials and traditional building knowledge, verified against Heritage Foundation of Pakistan’s Sindh Floods Rehabilitation documentation. Use the BBC Urdu still `Yasmeen Lari Houses.jpg`, confirmed CC BY 3.0 on Commons, as `images/yasmeen-lari-rural-housing.webp` under 500 KB with preserved aspect ratio. Credit BBC Urdu with source/license links, inherited modification notices and WebP conversion details. Clearly label it as illustrating rural housing work; do not claim a specific village, building, LOG shelter or 2022 flood project. Preserve Denso Hall, PSO, portraits and other profiles. This supersedes the earlier instruction to keep FTC unchanged. No commit.

Approved replacement: replace only Angoori Bagh Housing (Project 01) with Denso Hall Conservation, Karachi. Describe Yasmeen Lari’s heritage conservation involvement through Heritage Foundation of Pakistan, explicitly distinguishing James Strachan’s original design. Use Kabir118’s Commons file `Denso Hall, Karachi 01.jpg` under CC BY-SA 3.0, saved as `images/denso-hall.webp` below 500 KB with its aspect ratio preserved. Show descriptive alt text, photographer/source/license links and conversion notice. Identify the photograph as a 2014 view rather than the completed 2023 restoration. Record acquisition and share-alike terms in the existing credits JSON. This supersedes the earlier instruction to retain all three project placeholders: FTC and PSO remain unchanged. Preserve the portrait, other profiles and design. No commit.

The follow-up project-photo search covers Wikimedia Commons, Flickr (including Creative Commons queries), architectural archives and official sources. Keep all three project placeholders until an image-specific license or documented permission permits She Builds publication. Log additional candidates and explicit restrictions in the existing image-credit JSON; do not infer permission from archive access, press downloads or general website licenses. Preserve the approved portrait and other profiles.

Add only subject-verified, legally reusable Yasmeen Lari photography at the existing portrait and three project image paths. Document sources, creators, exact licenses, attribution requirements, conversion changes and unresolved searches in `images/yasmeen-lari-image-credits.json`. The BBC Urdu portrait is available under CC BY 3.0 as confirmed by its reviewed Commons file page. Retain gray placeholders for Angoori Bagh Housing, Finance and Trade Centre and Pakistan State Oil Headquarters until reuse permission and subject identity are established. Do not substitute the similarly named Agra garden or Lari's unrelated rural houses for Angoori Bagh Housing. Save permitted WebP files under 500 KB preserving aspect ratio; keep the existing CSS grayscale and centered 3:4 gallery portrait frame, color project photography and visible credits. Preserve other profiles, original images and Scheme C. No rotation, authentication or commit.

### Kazuyo Sejima photography
Acquire reusable, subject-verified photographs for Kazuyo Sejima's portrait, Toledo Museum of Art Glass Pavilion, New Museum in New York and Rolex Learning Center at EPFL. Use the reserved paths in `profiles.js` and document sources, creators, exact licenses, attribution conditions and conversion changes in `images/kazuyo-sejima-image-credits.json`. Save WebP files under 500 KB with original aspect ratios preserved; use the approved centered 3:4 gallery portrait frame. Display visible credits and source/license links through the existing renderer. Retain SANAA — Kazuyo Sejima and Ryue Nishizawa as the architectural credit for all three projects, supported by the Pritzker 2010 source. Keep gray placeholders for unavailable images. Preserve other profiles, existing images, Scheme C and navigation. No rotation, authentication or commit.

### Lina Bo Bardi photography
Acquire and display only reusable photographs verified as Lina Bo Bardi, Casa de Vidro, MASP and Sesc Pompeia. Use the four existing `profiles.js` image paths and the existing Archive image renderer, with natural aspect ratios, descriptive alt text and visible creator/source/license credits. Record source pages, original URLs, exact license or public-domain basis, attribution requirements and conversion changes in `images/lina-bo-bardi-image-credits.json`. Each WebP must be under 500 KB. Unclear rights or failed downloads retain labeled gray placeholders. Preserve Zaha Hadid and all other profiles and the Scheme C design; no commit.

### Zaha Hadid photography acquisition
Rosenthal photography is now approved for display using the manually supplied `images/CenterForContemporaryArtCorner.jpg`. Its SHA-1 matches the Commons original (`5ae5adb27f814544fc9153eae76ff38692b301be`). Convert to `images/rosenthal-center.webp` under 500 KB without cropping or changing aspect ratio; attribute Eric Inglert with the original Commons source, CC BY-SA 3.0 license link and WebP conversion notice. The image and any adaptations retain CC BY-SA 3.0 or compatible terms. Update only Rosenthal image metadata and credits; preserve the renderer, design and other architect profiles. This supersedes the earlier instruction to leave Rosenthal as a placeholder. No commit.

The three available photographs (portrait, Vitra Fire Station and Bergisel Ski Jump) are now approved for Archive display. Copy their checked alt text, creator, source URL, license URL, dimensions and change notice from `images/zaha-hadid-image-credits.json` into Zaha's image metadata in `profiles.js`. Render available licensed images with visible linked credits and natural proportions; fall back to gray labeled placeholders on load failure or missing metadata/files. Reuse the portrait in the gallery and selected profile, keeping credit links outside the gallery's profile link. Rosenthal remains a placeholder. Other architects, homepage layout, palette, typography and navigation remain unchanged. No rotation, authentication or commit. Update About's photo-credit wording to match the displayed photography.

Acquire only the four Zaha Hadid portrait/project images with explicit reuse permission. Save optimized WebP files under 500 KB at the existing `profiles.js` paths, preserving aspect ratios. Document source pages, creators, licenses, attribution requirements and conversion changes in `images/zaha-hadid-image-credits.json`. This supersedes the earlier no-download restriction for these four images only. Keep the renderer, layout and other architect profiles unchanged; display integration and visible credits are a later step. No commit in this step.

### Selected collection — content preparation milestone
Sarah Sadeq Project 03 is now verified against the firm's official portfolio: `ARCH-KSA-ALRIYADH-1840-IBRHMJMZ`, a residence in Riyadh attributed to Sarah Sadeq Architects. Retain the exact published portfolio identifier as its name; do not invent a client-facing title or imply a completion date. Source: https://sarahsadeq.com/projects/arch-ksa-alriyadh-1840-ibrhmjmz/

The student selected these seven architects, in this order:
1. Zaha Hadid — Iraq / United Kingdom
2. Lina Bo Bardi — Italy / Brazil
3. Kazuyo Sejima — Japan
4. Yasmeen Lari — Pakistan
5. Marina Tabassum — Bangladesh
6. Sarah Sadeq — Kuwait
7. Eileen Gray — Ireland / France

Prepare all seven in `profiles.js`, with biography, approach, three project slots, interesting fact, source references, and portrait/project image metadata. Country labels describe the selected cultural/geographic associations rather than asserting citizenship. Source-backed fields are marked verified individually; unsupported details stay pending. Record collaboration credits. Image paths are reserved future destinations, not existing assets; all images remain labeled placeholders with draft alt text to revise against the eventual photograph and permission/credit fields pending.

The data-preparation milestone is complete. The current implementation displays all seven selected architects in the Archive and opens each profile within `archive.html` using a query parameter. Publish individual narrative fields and projects only when their status is `verified` and their source references resolve. Pending project slots display only a generic verification notice, without an unverified project name or description. This explicitly permits partial profiles while project verification continues. Country labels remain geographic associations chosen by the site owner.

Keep gray labeled image placeholders, the existing three content pages, Scheme C homepage composition, warm neutral palette, serif typography and subtle interactions. Remove the dormant automatic-selection code; no daily rotation or Supabase authentication in this step. Keep the homepage a clearly labeled preview linking to the populated Archive. Update stale empty-collection copy on Home and About. Do not download/generate images or commit. Full-profile `verified` flags remain false until all required content is verified; Archive publication uses field-level verification instead.

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
