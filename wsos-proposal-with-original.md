# WSOS section proposals (WSC2026 TD17 §2.2)

Proposed revised text for WorldSkills Occupational Standards sections 1–5, informed by marking aspects collected from `project-tasks/references` (`wsos1.md`, `wsos2.md`, `wsos3.md`, `wsos4.md`, `wsos5.md`).

Basis:
- WSOS 1: 39 aspects / 17 projects - delivery, structure, constraints, git
- WSOS 2: 62 aspects / 19 projects - HTTP/UI errors, specs, diagrams, docs
- WSOS 3: 162 aspects / 22 projects - layout, content presentation, responsiveness, W3C/a11y/SEO
- WSOS 4: 359 aspects / 15 projects - client interactivity, SPA/PWA, API-driven UI, browser state
- WSOS 5: 477 aspects / 18 projects - APIs, auth, database, SSR, business rules, backend tests

---

## 1 Work organization and management - 5%

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

## 2 Communication and interpersonal skills - 5%

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

## 3 Design implementation - 25%

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

---

## 4 Front-end development - 25%

The individual needs to know and understand:
- ECMAScript (JavaScript) for interactive web interfaces
- How to integrate libraries, frameworks, components, and other client-side systems
- How client applications consume APIs and manage asynchronous UI state (loading, progress, errors)
- Browser capabilities relevant to the product (e.g. routing, storage, offline behaviour, notifications, installability)
- Coding practices for modular, reusable front-end code, including troubleshooting and automated testing when required

The individual shall be able to:
- Create and update JavaScript (or framework) behaviour that implements the required interactive functionality
- Render and update interface elements and media in response to user actions and application state
- Implement client-side application structure such as SPA routing and reusable components or modules when specified
- Consume APIs from the client (including auth/token handling) and present results, progress, and empty or disabled states correctly
- Manage browser-side state as required (e.g. persistence, offline/cached content, background updates, notifications)
- Manipulate graphical and content elements dynamically according to the brief
- Use open-source JavaScript libraries or frameworks appropriately when allowed
- Write modular, reusable front-end code and handle client-side errors through debugging and fixes
- Write and run automated front-end tests when required by the task

---

## 5 Back-end development - 40%

The individual needs to know and understand:
- Server-side programming with PHP and/or Node.js (or other allowed stacks)
- How to design and implement databases, including data types, keys, relationships, and normalisation where required
- How to manage data exchange between server and client systems through APIs and/or server-rendered interfaces
- Authentication, authorisation, sessions/tokens, and common web application security practices
- Software design patterns suitable for server applications (e.g. modular structure, MVC where applicable)
- Coding practices including troubleshooting and automated testing for back-end implementation

The individual shall be able to:
- Implement server-side features and API endpoints that meet the specification (methods, paths, payloads, side effects)
- Create or use database structures and persist data correctly according to system requirements
- Enforce authentication and authorisation rules (e.g. required tokens, roles, quotas, ownership checks)
- Implement business rules and server-side validation (e.g. billing, limits, booking or enrollment constraints)
- Build server-rendered pages and form handling when required, including session and CSRF protection where specified
- Integrate with provided libraries, frameworks, APIs, file storage, or other server services as required
- Protect against common security exploits relevant to the task
- Create modular, reusable server-side code and handle errors through debugging and fixes
- Write and run automated back-end tests when required (including coverage targets where specified)
- Configure and operate the application on the provided server environment as needed for correct backend behaviour
