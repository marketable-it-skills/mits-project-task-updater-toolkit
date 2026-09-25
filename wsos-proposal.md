# WSOS section proposals (WSC2026 TD17 §2.2)

Proposed revised text for WorldSkills Occupational Standards sections 1–3, informed by marking aspects collected from `project-tasks/references` (`wsos1.md`, `wsos2.md`, `wsos3.md`).

Basis:
- WSOS 1: 39 aspects / 17 projects — delivery, structure, constraints, git
- WSOS 2: 62 aspects / 19 projects — HTTP/UI errors, specs, diagrams, docs
- WSOS 3: 162 aspects / 22 projects — layout, content presentation, responsiveness, W3C/a11y/SEO

---

## 1 Work organization and management — 5%

The individual needs to know and understand:
- How project structure, file organisation, and naming affect maintainability and assessment
- How deployment, environment configuration, and entry URLs determine whether a solution can be verified
- How time, brief constraints, and technical trade-offs shape workable solutions
- How version control supports organised delivery of work
- How required deliverables (e.g. database dumps, seeds, archives) must be complete and usable

The individual shall be able to:
- Deliver a running solution at the specified URL or path within the given time limits
- Provide required project artefacts in a usable form (e.g. SQL dump or seed that imports successfully)
- Organise files, assets, and code so the project structure is clear and navigable
- Respect brief constraints (allowed technologies, given schemas, module boundaries)
- Troubleshoot common setup and deployment problems that block verification
- Use software version control systems such as git appropriately for the task, including clear commit history when required

---

## 2 Communication and interpersonal skills — 5%

The individual needs to know and understand:
- How written specifications and client requirements define expected behaviour and contracts
- How systems communicate success and failure to clients and users (e.g. HTTP status codes, response bodies, UI feedback)
- Software design communication techniques including flowcharts and ER diagrams
- How documentation and presentation make a solution understandable to others
- Principles of collaborating through shared specifications, source code, and workflow systems

The individual shall be able to:
- Read and use specification documents and provided front-end and back-end source code
- Implement behaviour that matches client requirements and the written specification
- Communicate errors and edge cases clearly through appropriate HTTP status codes and response bodies, and/or clear user-facing messages and redirects
- Produce required communication artefacts (e.g. ER diagram, overview or index page, setup documentation) when specified
- Interpret standards and requirements and apply them consistently in the delivered product
- Present the solution clearly so it meets business and client communication needs

---

## 3 Design implementation — 25%

The individual needs to know and understand:
- Design principles and patterns for hierarchy, typography, aesthetics, composition, and usable interfaces
- Brand, corporate identity, and style-guide requirements when provided
- Limitations of devices and screen resolutions, and how layouts adapt across defined viewports
- Appropriate use of graphic and media formats on the web
- World Wide Web Consortium (W3C) standards for HTML and CSS, including accessibility (WCAG)
- Usability, interactive design, and search engine / performance considerations that affect the presented interface
- How to embed and present media (images, audio, video, animations) as part of the visual design

The individual shall be able to:
- Implement the required page structure, navigation, footer, and content blocks so the interface matches the brief
- Apply visual design (layout, spacing, colour, typography, branding) that is clear, consistent, and polished
- Style shared chrome and page sections so navigation, current state, and content presentation support usability
- Implement responsive layouts that work correctly on the defined screen resolutions or devices without broken layout or unusable content
- Implement forms and interactive UI elements with appropriate field types, validation feedback, and usable presentation
- Present and control media as specified (e.g. sizing, aspect ratio, playback behaviour) while keeping the design intact
- Create interfaces that conform to W3C HTML/CSS expectations and accessibility guidelines when required
- Use CSS or other external styling to control appearance, including animations or interactive visual effects when specified
- Support discoverability and clarity of content (e.g. SEO-related presentation) where the brief requires it
