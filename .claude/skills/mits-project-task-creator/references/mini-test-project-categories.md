# Module A mini Test Project categories

Use this when authoring **Module A mini speed Test Projects**. Place each mini
Test Project in **exactly one** category. The brief, assets, and constraints
must match that category so assessors can test it independently.

Do **not** mix categories in one mini project (for example a CSS-only visual
plus a PHP endpoint). Graphic-design-only work (GIMP/XCF/PNG mockups with no
HTML) is **not** one of these three categories.

## Design Implementation

Tasks in this category recreate a small visual UI or motion effect using **HTML and CSS only**. The competitor matches a reference image or video: layout, colour, typography, CSS animation, and CSS-driven interaction such as hover, focus, or checkbox/radio toggles. JavaScript must not be required. Typical features include loaders and progress motion, decorative loops (for example a drip or streetlamp), CSS charts, floating labels, toasts, and styled buttons or switches. A new mini Test Project should ship a reference video or still, state the CSS-only constraint, and be judgeable by looking at the page in the browser.

## Front-end Development

Tasks in this category add **client-side behaviour with JavaScript** (together with HTML and CSS). The competitor builds an interactive widget: pointer and keyboard events, DOM updates, canvas drawing, timers, or a small piece of UI state. Typical features include drag-or-click image compare, counters and countdown rings, typing or scroll text, add-to-cart controls, live generators (for example a box-shadow preview), character or object animation, and simple media players. Starter HTML and media assets are common; the brief may freeze the HTML structure. A new mini Test Project should list the exact interactions, provide a demo video, and remain self-contained in the browser with no server logic.

## Back-end Development

Tasks in this category focus on **server-side or data-driven behaviour**: PHP (or equivalent) endpoints, HTTP methods, CORS, query parameters, file or image processing, and reading provided JSON or other data files. The visible UI can be minimal; marks come from correct output, headers, and configuration. Typical features include input validation, cascading selects from a data file, paginated or infinite-scroll lists, request logging, zip or folder processing, CORS for GET/POST/PUT/DELETE, server-generated images, and small algorithms (for example pathfinding). A new mini Test Project should state the runtime, the input/output contract, which files may be edited, and how an assessor calls or inspects the result.

## Alignment checks

Before writing a mini Test Project, confirm:

| If the core of the task is… | Category |
| --- | --- |
| Matching a visual/motion reference with HTML/CSS; no JS | Design Implementation |
| Browser events, DOM/canvas/media state, JS widgets | Front-end Development |
| PHP/HTTP/CORS/files/JSON data contracts/algorithms | Back-end Development |

Interactive widgets that need dragging, timers, or JS state belong in
Front-end Development even if they look like a “UI component”. CSS-only
versions of the same idea belong in Design Implementation.
