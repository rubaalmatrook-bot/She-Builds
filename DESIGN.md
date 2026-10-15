# SHE BUILDS — DESIGN SYSTEM

## Concept
## Selected direction — Scheme C: Split Editorial
The student selected Scheme C after reviewing all three schemes. Preserve its asymmetric photograph-and-story columns, inset mini-index, editorial Cormorant Garamond headings and Libre Baskerville reading text, warm ivory/sand/brown/charcoal palette, and generous whitespace. Archive and About extend this visual language. Stack columns on phones. Use subtle 150–250ms hover/focus transitions and respect reduced motion.

The authentication milestone adds a public split-screen editorial login page and a session gate for the existing three content pages. Missing content and photographs remain explicitly labeled drafts.
She Builds is a daily discovery website celebrating female architects from different countries and cultures. Each day it highlights one woman and introduces her background, architectural approach, three notable projects, and one engaging fact in language accessible to everyone.

## Audience and first impression
For curious visitors of any age or background, not only architects. Within ten seconds, visitors should understand that this is a calm, sophisticated, educational collection of stories about women shaping architecture.

## Mood
- Feel: sophisticated, calm, educational.
- Never feel: flashy, confusing, overly academic.
- Design direction: modern and minimal; a carefully organized gallery, with editorial serif typography and refined, subtle interaction.

## References — systems, not identities
- An architectural exhibition catalogue: borrow its clear hierarchy, concise captions, and consideration for the artwork; copy no imagery, layouts, or identities.
- A quiet editorial magazine: borrow pacing, restrained typographic scale, and generous margins; copy no names, logos, photographs, text, or proprietary type.
- A well-organized museum collection interface: borrow consistent image grids and approachable labels; copy no interface assets or branded elements.
These are reference *types*, not claims that a specific named site was selected. If a specific reference is added later, update this file before changing the site.

## Palette
Today's Architect alone uses the richer warm beige `#D8C9B6` as its page background. Archive, About and login retain warm ivory. Homepage section headings use the existing editorial serif at weight 600 in deep charcoal `#282520`, visibly stronger than the earlier weight 500. Keep the featured architect's name prominent above the supporting section headings, with generous spacing and the existing responsive Scheme C split composition. Preserve portrait grayscale, color project photographs, all content and credits, navigation, daily rotation and authentication.

- Warm ivory `#F5F0E8`: primary backgrounds.
- Sand beige `#D8C9B6`: dividers, subtle surfaces, decorative accents.
- Warm brown `#604B40`: secondary headings, captions, links and button backgrounds when contrast is verified.
- Deep charcoal `#282520`: principal text, headings, strong buttons.
- White `#FFFFFF`: accessible form inputs and image placeholders when needed.
Maintain strong text/background contrast; use deep charcoal for small text on ivory.

## Typography
The shared header masthead uses Cormorant Garamond at weight 500, with upright “She” and true italic “Builds,” in charcoal. Set the wordmark slightly larger (responsive 2.5–2.85rem), with restrained negative letter spacing, a shared baseline and an unbroken word pair. Load the italic face under a masthead-only font alias so other typography stays unchanged. Use the same treatment on Home, Archive, About and login, including the session-check wordmark. Header wordmarks link to `index.html`; signed-out visitors still pass through the existing authentication gate. Preserve all other layout, typography, navigation and page colors.

Use free fonts from Google Fonts only:
- Headings and brand: Cormorant Garamond, serif, 400–600. H1: clamp(3rem, 7vw, 5.5rem); H2: clamp(2rem, 4vw, 3.5rem); H3: 1.75rem.
- Main paragraphs, captions, form labels and navigation: Libre Baskerville, serif, 400/700; body: 1rem, line-height 1.7; captions: 0.85rem; navigation: 0.9rem.
Use italic serif details sparingly. Prioritize readability over a magazine-like effect; if body serif is too dense on mobile, adjust size, spacing, and line length before changing fonts.

## Layout, grid, and spacing
- Restrained grid with consistent image cards; two to three columns on larger screens, one column on small phones.
- Max content width about 1200px, padded about 24px desktop and 18px phone.
- Space scale: 8, 16, 24, 40, 64, 96px; generous whitespace between sections.
- The daily feature presents a clear title and lead image, followed by short readable content sections.
- The Archive is an organized grid; navigation consistently reaches the three pages.
- Home, Archive and About use the Supabase sign-in gate; login remains public.

## Images
- Yasmeen Lari’s Project 03 is now Tomb of Sultan Ibrahim Conservation and uses the standard project photograph layout with visible credits. This supersedes the former PSO text-panel exception; preserve the Scheme C layout and all existing image treatments.
- All architect portraits in Archive gallery cards and selected profiles use CSS `filter: grayscale(100%)` for a consistent black-and-white editorial presentation. Apply this automatically to future portraits, without altering image files, credits or license records. Architectural project photographs retain their original colors. Preserve the existing 3:4 gallery frames, centered `object-fit: cover`, profile portrait sizing, layout and all other styling.
- Archive gallery portrait frames use a consistent 3:4 aspect ratio and equal widths at each responsive breakpoint, including gray placeholders. Photographs fill the frame with `object-fit: cover` and centered positioning, without stretching. This is display-only cropping; preserve all original image files. Apply these rules automatically to future gallery portraits. Reserve consistent space for names, country labels and “Read her story” links so the cards align. Keep photo credits and license links visible outside the profile links. Profile-detail and project photographs retain their existing sizing; Scheme C, typography and palette remain unchanged.
- Use only photographs and project images that the student has permission to use, or appropriately licensed materials with credit as needed.
- Do not copy reference-site photographs or branding.
- Each image is thoughtfully cropped in consistent frames; no aggressive filters. Use muted placeholder blocks labeled `[ADD: image of ...]` whenever an image is missing.
- Files live in `/images/`, ideally optimized JPG or WebP under 500 KB each. All images have informative alt text.

## Motion
- Gentle image hover scale (around 1.02), smooth focus/hover states, subtle transitions of 150–250ms.
- Respect `prefers-reduced-motion`; avoid dramatic scrolling effects, auto-play video, and distracting animation.

## Log-in page
- Split-screen editorial composition on desktop: architectural photograph on one side, warm ivory sign-up/log-in form and She Builds wordmark on the other.
- On mobile, stack or crop the visual section and show the complete form promptly without horizontal scrolling.
- The image must be licensed or provided by the student; otherwise use a neutral placeholder.
- Email and password sign-up and log-in must be clear and functional, with helpful error messages.

## Navigation and buttons
- Quiet, legible navigation: Today's Architect, The Archive, About and Log out.
- Active page clearly distinguished. Buttons are plain, rectangular or gently rounded, not flashy.
- Keyboard focus styles must be visible, and tap targets comfortable on phones.

## Writing voice
Concise, approachable, curious, factually verified, inclusive, and educational without jargon. Define unfamiliar concepts in simple terms. Make no unsupported claims.

## Five never rules
1. Never make the interface flashy or visually overwhelming.
2. Never use unexplained academic jargon or long dense biographies.
3. Never invent biographical facts, quotes, projects, places or dates.
4. Never use unlicensed images, borrowed brand identities or inaccessible low-contrast text.
5. Never hide navigation, omit essential accessibility, or break the mobile layout.

## Three early homepage schemes
Before a final version, generate and compare three genuinely different homepage layouts using the same content and overall brand values:
- Scheme A — Cover Story: a single dominant editorial photograph, generous title and a linear article layout.
- Scheme B — Museum Index: a precise visual grid with a highlighted daily card and concise exhibit-like labels.
- Scheme C — Split Editorial: asymmetric photograph-and-story columns with an inset mini-index of architects.
All three schemes were reviewed; Scheme C was selected. Promote it to the root and remove the scheme folders after the three content pages pass checks.
