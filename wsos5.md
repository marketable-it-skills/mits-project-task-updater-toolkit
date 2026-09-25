# WSOS 5 — Back-End Development

Collected marking aspects from `project-tasks/references` where `wsosSection` is **5**.

**Scope:** 33 `marking-scheme.json` files scanned → **18 projects / 477 aspects**. Labels seen: *Back-End Development* (29); *Front-End Development* (2).

## Catalogue by theme

| Theme | Typical aspects | Approx. share |
| --- | --- | --- |
| REST / API behaviour | Endpoints, methods, CRUD, response payloads, job flows | high (~100+) |
| Auth & access control | Tokens, login links/sessions, workspace association, quotas | high (~100+) |
| Database & persistence | Schema/data correct; writes persist; relationships | medium |
| Server-rendered apps | Initial SSR content; server forms; admin flows | medium |
| Business rules | Billing, credits, enrollment, booking limits, validation | medium |
| Files / uploads | Upload, export, image processing side of API | lower |
| Security | CSRF, auth required, exploit protection | lower but important |
| Backend tests | Passing tests, coverage, mutation testing | when required |
| Misc / legacy placement | Some older schemes put client-only behaviours under 5 | rare |

### All WSOS 5 aspect titles

- `measurement` 0.5 — When in full-screen, only the VIP grid and exit button is visible *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 1 — Able to swap any two names  *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 0.5 — Default names button *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 1 — By clicking on a button, the user can load a sample list as the VIP list. *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 0.5 — Loading the sample list correctly *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 0.5 — User is able to drag the exported files containing a list of names of VIPs into the tool *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 1 — When the file is dragged over the dropping area, there is indicator *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 1 — The tool should construct the VIP area once the file are dropped. *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 0.5 — The state and data recovers after re-opening browser *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 0.5 — The tool should save a copy as cache locally in web browser *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 1 — Exporting the VIP list to file *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 1 — File format is correct *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 0.5 — Copying to Clipboard *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 0.5 — The text to clipboard has correct format. *(s17-es2021-module_a-vip-seating-arrangement-tool)*
- `measurement` 1 — Authentication token is required *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.25 — Correct workspace association *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 1 — Quota enforced *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.5 — Conversation start *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.5 — Converstation response *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.5 — Converstation continuation *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 1 — Inputs blocked while response in progress *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 1 — EOF indicator *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.25 — Converstation not found *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 1.5 — Billing *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.5 — Generation job start *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.25 — Job status *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 1.5 — Preliminary image is available *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.5 — Result *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.25 — Upscale *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.25 — Zoom in / out *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.25 — Not found *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 1.5 — Billing *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 1.5 — Image Upload *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.5 — Image recognition response *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.5 — Billing *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 1 — Tests passing *(s17-es2023-module_e-advanced-web-development)*
- `measurement` 0.5 — Test coverage at least 80% *(s17-es2023-module_e-advanced-web-development)*
- `measurement` 1 — Test coverage is 100% *(s17-es2023-module_e-advanced-web-development)*
- `measurement` 1 — There is a maximum of 15 mutants surviving *(s17-es2023-module_e-advanced-web-development)*
- `measurement` 1 — There is a maximum of 3 mutants surviving *(s17-es2023-module_e-advanced-web-development)*
- `measurement` 0.5 — Each required page renders initial content from the server *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 1.5 — User receives email link and can log in via that link *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Each form/action has valid CSRF protection: Login form *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Each form/action has valid CSRF protection: Investment request form *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Each form/action has valid CSRF protection: Tour booking form *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 1 — User input properly escaped: No XSS vulnerabilities via form input *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 1 — SQL injection prevention *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 1.5 — Database seed completeness. Running the seed.sql script creates the structure and required data as specified *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `judgement` 1 — Clean and consistent URL routing *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `judgement` 1 — Code modularity and separation of concerns *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `judgement` 1 — Error handling for invalid forms and routes *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Sponsors page shows approved presenting sponsors *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.75 — Investment page shows turbines with spots *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.75 — Investment page shows spot status *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.25 — Investment page shows total support amount *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Tours page shows dates and available seats *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Tours page shows active booking *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Tours page provides function to cancel active booking *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.25 — Mock emails: /mock-emails accessible and not requiring login *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Mock emails: /mock-emails shows email details *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Mock emails: /mock-emails shows emails sorted by timestamp *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.25 — Mock emails: /mock-emails shows email body with preserved new lines *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Mock emails: /mock-emails shows email body links are clickable *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Access to /admin/* is only possible when logged in as a user with the admin role *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.2 — Investment requests: show with status *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.4 — Investment requests: can be rejected *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.4 — Investment requests: can be approved *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.1 — Tour bookings: Shows tours with bookins *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Tour bookings: Create tour *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.2 — Tour bookings: Cancel bookings *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.2 — Tour bookings: Delete tours *(s17-es2025-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.75 — POST /auth/login with {"username":"alice","password":"alice12345"} *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — Login fails (bad password) *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Token required on protected route: 
Test: GET /alerts with no Authorization header *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Operator access allowed: 
Test: log in as bob, then GET /alerts with Bearer <token> *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Operator access denied (role escalation): 
Test: bob token on POST /auth/assign-role *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Admin assigns role: 
Test: alice token, POST /auth/assign-role {"username":"user","role":"operator"}
 *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — Admin cannot drop own admin: 
Test: alice token tries to set role=operator for alice *(s17-es2025-module_c-rest-api)*
- `measurement` 1 — List turbines public: 
Test: GET /turbines *(s17-es2025-module_c-rest-api)*
- `measurement` 1 — Live status:
Test: Upstream healthy; GET /turbines/1/status *(s17-es2025-module_c-rest-api)*
- `measurement` 1 — Cached fallback:
Test: Simulate upstream timeout; GET /turbines/1/status *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Missing property handling:
Test: Upstream returns temperature:null; GET /turbines/1/status *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Unknown turbine:
Test: GET /turbines/999/status *(s17-es2025-module_c-rest-api)*
- `measurement` 1.5 — Valid pitch/yaw:
Test: bob token, POST /turbines/1/control {"pitch":10,"yaw":180} *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — Range validation:
Test: pitch = -120 *(s17-es2025-module_c-rest-api)*
- `measurement` 1 — Valid state transition:
Test: shutdown then start sequence using correct endpoints *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — Invalid transition:
Test: POST /turbines/1/maintenance while status = started *(s17-es2025-module_c-rest-api)*
- `measurement` 1.5 — High-RPM alert fires:
Test: mock rpm = 70; fetch status *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Alert deduplication:
Test: repeat fetch while rpm still mocked to be 70
 *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — Alert resolves:
Test: rpm above 70, fetch status, rpm drops to 50; fetch status *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Acknowledge:
Test: POST /alerts/{id}/ack as bob *(s17-es2025-module_c-rest-api)*
- `measurement` 1 — Initial fetch & parse:
Test: alice token, GET /turbines/1/logs *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — No duplicates on second fetch:
Test: GET /turbines/1/logs repeatedly *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — Level filter:
Test: GET /turbines/1/logs?levels=error,warning *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — Message substring filter
Test: GET /turbines/1/logs?message=wind *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — Upstream failure fallback:
Test: simulate 500 from external logs; request logs *(s17-es2025-module_c-rest-api)*
- `measurement` 1 — Course list displays with complete information *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 1 — Create new course functionality *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Edit course form with chapter editing button *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Delete course with confirmation dialog *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Mentor list displays complete information *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Mentor approval workflow functionality *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 1 — Passwords securely hashed in database *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.75 — Role-based access control enforced *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.75 — Session management with logout functionality *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.75 — Protection against SQL injection *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.75 — Input validation and XSS protection *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `judgement` 0.5 — Administrative workflow efficiency and data presentation *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — POST /api/v1/users/register creates new user successfully *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — User registration sets creditBalance to 0 *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — POST /api/v1/users/login with valid credentials returns token *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Protected endpoints require X-API-TOKEN header *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Invalid token returns 401 authorization error *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — POST /api/v1/users/logout revokes current token *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — GET /api/v1/users/me returns user basic information *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — User profile includes statistics object *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — User profile includes recentActivity array *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — GET /api/v1/courses returns array of courses *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Course listing includes isEnrolled status *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — GET /api/v1/courses/:id returns single course details *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — POST /api/v1/courses/:id/enroll creates enrollment *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 1 — POST /api/v1/courses/:courseId/chapters/:chapterId/complete awards credits *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — GET /api/v1/mentors/sessions returns available sessions *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Session data includes mentor and booking information *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 1 — POST /api/v1/mentors/sessions/:id/book creates booking with sufficient credits *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.75 — POST /users/register creates user and returns 201 *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.75 — POST /users/login returns token and 200 *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — POST /users/logout revokes token *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 1.5 — GET /users/me returns user profile and stats *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — recentActivity and sessions structure in /users/me *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.75 — GET /courses returns course list with enrollment status *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.75 — GET /courses/:id returns course details with chapters *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.75 — POST /courses/:id/enroll enrolls user *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 1.25 — POST chapter complete awards credits *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.75 — GET /mentors/sessions returns available sessions *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 1.25 — POST /mentors/sessions/:id/book books session *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — Response format and Content-Type *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `judgement` 0.75 — API adherence to specification *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — Token structure is validated (must have exactly three parts: header.payload.signature) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 1.0 — HMAC-SHA256 signature is verified using the correct shared secret *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Token expiry (exp claim) is validated on every request *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — User ID is extracted from the sub claim of the token payload *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Token validation is performed locally without external JWT or auth libraries *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Token validated locally on every protected request (no caching or skipping) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — GET /api/courses returns all courses without authentication *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Course objects in list contain all required fields *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Each course in the list includes a chapters array ordered by orderIndex *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — GET /api/courses/:slug returns single course details (Bearer token required) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.75 — isCompleted flag for each chapter is fetched from the main backend *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.75 — User enrollment is validated with the main backend before serving course details *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — GET /api/courses/:slug/chapters/:chapterId returns chapter metadata *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Content blocks are returned in orderIndex order *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Heading blocks (h1–h4) are returned with correct type and text fields *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 1.5 — Paragraph and list_item blocks are assembled from chunks into HTML *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — rawText field is included for paragraph and list_item blocks *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Image blocks are returned with url and alt fields *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — Video blocks are returned with url and title fields *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — Link blocks are returned with url and title fields *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 1.0 — Quiz is included in the chapter response with questions and options (no correct answers exposed) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — credits field is included in the chapter response *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — Correct answers (isCorrect) are never exposed to clients in any response *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — First chapter (orderIndex 1) is always accessible for enrolled users *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 1.0 — Chapters with orderIndex > 1 are locked if the previous chapter is not completed *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Previous chapter completion is fetched from the main backend *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — POST .../quiz/validate accepts and processes an answers array *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Returns {"passed": true} when all submitted answers are correct *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Returns {"passed": false} when one or more answers are incorrect *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Correct answers validated against quiz_options.isCorrect in the database *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 1.0 — On a passing quiz, the content service notifies the main backend chapter completion endpoint *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — POST /api/courses creates a new course with required fields (title, slug) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — POST /api/courses returns 201 Created with the course object *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.75 — Slug format is validated (lowercase letters, digits, hyphens only) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Duplicate slug is rejected with 409 Conflict *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Optional fields (description, difficulty) are handled in POST /api/courses *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — New course is initialized with totalChapters: 0, totalCredits: 0, chapters: [] *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — PUT /api/courses/:id updates course metadata *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Partial updates are supported in PUT (only supplied fields are updated) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — totalChapters and totalCredits are recomputed from chapter data after PUT *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — PUT /api/courses/:id returns 200 with updated course and chapters summary *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — 400 returned for invalid payload or missing required fields in course administration *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — 404 returned when course ID does not exist in PUT /api/courses/:id *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — All responses include Content-Type: application/json header *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — Bearer token is correctly parsed from the Authorization header *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — Correct HTTP success status codes used (200 for GET/PUT, 201 for POST course creation) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `judgement` 1.0 — Overall API response quality and adherence to the OpenAPI specification *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — GET /api/courses is accessible without authentication *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — All content endpoints (except health and GET /api/courses) enforce Bearer token authentication *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `judgement` 2.5 — Database schema design with proper normalization and relationships *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 1 — CSV data import functionality *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `judgement` 2 — Secure user authentication system with password hashing *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 1 — Role-based access control (dineEasyAdmin vs restaurantAdmin) *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 1 — Account lockout mechanism after failed login attempts *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 1 — OWASP security guidelines implementation *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `judgement` 2 — CRUD operations for menu items *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 1 — Menu item data fields (name and price) *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 1 — Reservation confirmation and cancellation *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 1 — Server-side framework utilization *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 2 — REST API server is properly set up and configured *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 3 — All required API endpoints are implemented *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 3 — Authentication and authorization mechanisms are implemented *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 2 — Data validation prevents security vulnerabilities *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 2 — Caching mechanisms are implemented *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 1 — Rate limiting is implemented *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 2 — Error handling and graceful degradation *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 2 — Proper integration with unsecure APIs *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 1 — Comprehensive logging is implemented *(s17-hu_ro_training_2023-module_c-commercial_api_provider)*
- `measurement` 0.25 — DB-dump is provided and contains FK-constraints and correct columns *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — The CSV data has been imported into the database. *(s17-ts2025-module_b-bicycle-rental-admin)*
- `judgement` 0.5 — Database column type is reasonable defined *(s17-ts2025-module_b-bicycle-rental-admin)*
- `judgement` 0.5 — DB structure is normalized *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — The login page is available *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is not possible to access the application pages without authentication *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — Login is only possible using email or phone number and password *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — After logging in, the user is redirected to the categories page *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — Test accounts have been created *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — There is an option to log out of the account *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — The error message for invalid login data contains only a general phrase *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — A page with the list of bicycle categories has been implemented *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — Only the categories of the authorized user are displayed *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is possible to create a new category *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — An existing category can be edited *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — It is not possible to save a category without specifying a name *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — A category without bicycles can be deleted *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — A page with the list of bicycles has been implemented *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — The page displays all bicycles related to the selected category *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — Bicycles can be added *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — The created bicycles (copies) are displayed in the list according to the specified quantity *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — Each bicycle must have a unique slug based on its name *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is possible to edit the attributes of a selected bicycle *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — The status of a selected bicycle can be changed *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — If a bicycle is already booked or rented, its status cannot be changed to 'unavailable' *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — A bicycle can only be deleted if its status is 'unavailable' *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 1 — Validation error messages are displayed when performing actions *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.75 — The coordinates (x, y) of the bicycle image center are determined automatically and randomly *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is possible to add rental conditions for a category *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — In the condition, weather values can be set from the provided list (one or more) *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — In the condition, a minimum user rating can be set *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is possible to view the list of tariffs *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is possible to add a tariff for each category (name, type, price) *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — If the dynamic type is selected, a minimum and maximum price can be set *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — It is not allowed to create duplicate tariffs with the same type and price *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — A tariff can be archived *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is possible to view the rental history of a bicycle on a separate page *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.75 — The list displays the required data for each bicycle *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — The list can be filtered by date *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — The list is displayed with pagination *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — The list can be exported to CSV *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.75 — The exported list contains all data *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — A page displaying moderation requests has been implemented *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — Each request contains the required data *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — It is possible to approve a request *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — It is possible to reject a request *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is possible to view all created promo codes for the selected category *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — It is possible to add a promo code for a category *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — A promo code consists of a random string *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — It is possible to delete a promo code *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.25 — shouldReturnAccessToken_whenCredentialsAreValid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnBadRequest_whenNoDataProvided *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenCredentialsAreInvalid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldLogoutUser_whenTokenIsValid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenTokenIsMissing *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenTokenIsExpired *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldRegisterAccount_whenDataIsValid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenEmailIsDuplicate *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnBadRequest_whenRequiredFieldsAreMissing *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnBicycle_whenIdIsValid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnNotFound_whenIdDoesNotExist *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenTokenIsMissing *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenTokenIsInvalid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldRateRental_whenDataIsValid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnForbidden_whenRentalAlreadyRated *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnForbidden_whenOwnerHasInsufficientFunds *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnNotFound_whenRentalIdDoesNotExist *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenTokenIsMissing *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenTokenIsInvalid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — repair_withTypeWash_shouldDecreaseWearBy10 *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — repair_withTypeRepair_shouldDecreaseWearBy25 *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — repair_withTypeTires_shouldResetWearTo0 *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — repair_withTypeChain_shouldDecreaseWearBy30 *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — repair_withInsufficientBalance_shouldReturnConflict *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — repair_withInvalidBicycleId_shouldReturnNotFound *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — repair_withoutAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — repair_withInvalidAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — retrieve_withValidBicycleId_shouldReturnRentals *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — retrieve_withInvalidBicycleId_shouldReturnNotFound *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — retrieve_withoutAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — retrieve_withInvalidAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — retrieve_withValidAuthToken_shouldReturnBicycles *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — retrieve_withoutAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — retrieve_withInvalidAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — completeRental_withValidAuthToken_shouldSucceed *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — completeRental_shouldReturnBadRequest_whenCompletingWithoutPhotos *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — completeRental_shouldReturnBadRequest_whenCompletingWithInvalidRating *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — completeRental_withoutAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — completeRental_withInvalidAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — rentBicycle_withValidAuthToken_shouldSucceed *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — rentBicycle_whenAlreadyRenting_shouldReturnConflict *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — rentBicycle_whenBicycleAlreadyTaken_shouldReturnConflict *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — rentBicycle_shouldReturnNotFound_whenPromoCodeDoesNotExist *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — rentBicycle_shouldReturnConflict_whenPromoCodeIsInvalid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — rentBicycle_shouldReturnConflict_whenUserHasInsufficientFunds *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — rentBicycle_shouldReturnConflict_whenBicycleHasHighWearPercentage *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — rentBicycle_withoutAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — rentBicycle_withInvalidAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — getPrice_withStaticTariff_shouldReturnFixedPrice *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — getPrice_withDynamicTariff_shouldReturnCalculatedPrice *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — getPrice_withoutAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — getPrice_withInvalidAuthToken_shouldReturnUnauthorized *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnTariffs_whenUserIsAuthenticated *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenNoTokenProvided *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenInvalidTokenProvided *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldIncreaseBalanceAndCreateTransaction_whenTopUpWithValidAmount *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnBadRequest_whenTopUpWithZeroAmount *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenRepairBicycleWithoutToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenRepairBicycleWithInvalidToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldDecreaseBalanceAndCreateTransaction_whenWithdrawWithValidAmount *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenRepairBicycleWithoutToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenRepairBicycleWithInvalidToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnNull_whenUserHasNoCurrentRental *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenRequestWithoutToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenRequestWithInvalidToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — bicycles_shouldReturnUserBicycles_whenUserIsAuthenticated *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — bicycles_shouldReturnUnauthorized_whenRequestWithoutToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — bicycles_shouldReturnUnauthorized_whenRequestWithInvalidToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — currentUser_shouldReturnCurrentUser_whenUserIsAuthenticated *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — currentUser_shouldReturnUnauthorized_whenRequestWithoutToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — currentUser_shouldReturnUnauthorized_whenRequestWithInvalidToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — currentWork_shouldReturnEmptyObject_whenUserHasNoWork *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — currentWork_shouldRetrieveCurrentWork_whenUserHasActiveWork *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — currentWork_shouldReturnUnauthorized_whenRequestWithoutToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — currentWork_shouldReturnUnauthorized_whenRequestWithInvalidToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnWorks_whenUserIsAuthenticated *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnUnauthorized_whenRequestWithoutToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenRequestWithInvalidToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldSendWorkRequest_whenUserIsAuthenticated *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenWorksIdRequestWithoutToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.2 — shouldReturnUnauthorized_whenWorksIdRequestWithInvalidToken *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnTrafficData_whenRequestIsValid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldReturnWeatherData_whenRequestIsValid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.25 — shouldRetrieveOauthLink_whenRequestIsValid *(s17-ts2025-module_c-bicycle-rental-api)*
- `measurement` 0.5 — Score saving via API *(s17-ws2022-module_e-virtual-word-interactive-game)*
- `measurement` 0.5 — When score saving fails, an error message shows on the user interface *(s17-ws2022-module_e-virtual-word-interactive-game)*
- `measurement` 0.5 — Speed Test Project C1 for Back-end Development *(s17-ws2024-module_a-mini-speed-test-projects)*
- `measurement` 1 — Speed Test Project C9 for Back-end Development *(s17-ws2024-module_a-mini-speed-test-projects)*
- `measurement` 0.5 — Speed Test Project C11 for Back-end Development *(s17-ws2024-module_a-mini-speed-test-projects)*
- `measurement` 0.25 — Admin login page is at path /login *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Admin can sign-in by using the login passphrase *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Admin can view the list of companies *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — Admin can view a particular company after clicking on the companies list *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Admin can view the associated products of a particular company in the company showing page *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Admin can create companies *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Admin can update companies information *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Admin can mark a company as deactivated *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — All fields in companies are available for create *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — When a company is deactivated, all the associated products are marked as hidden *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — There is a separated list for listing deactivated companies *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — No one can delete a company on the web interface *(s17-ws2024-module_b-product-management)*
- `measurement` 0.75 — DB-dump is provided and contains FK-constraints and correct columns *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — GTIN field is indexed in products table *(s17-ws2024-module_b-product-management)*
- `judgement` 0.5 — Database column type is reasonable defined *(s17-ws2024-module_b-product-management)*
- `judgement` 0.5 — DB structure is normalized *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Able to load the verification page *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — Can input multiple GTIN code and submit to see result *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — The result page data is correct *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — The result page shows an "All corrects" and green tick when no any GTIN verification error *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — The products API output can list JSON *(s17-ws2024-module_b-product-management)*
- `measurement` 1.0 — The products list API is correct *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — The pagination of products list API is correct *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — A single product can be queried via JSON *(s17-ws2024-module_b-product-management)*
- `measurement` 0.75 — The single product fields are correct according to the Test Project *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — The product API returns 404 when accessing a non-exist product *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — The product API returns 404 when accessing a hidden product *(s17-ws2024-module_b-product-management)*
- `measurement` 0.75 — The products list JSON allows querying by using keyword. *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — Able to display products in a page via /products *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — The displayed products are dynamic loaded from database *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — A specific product can be viewed in web page by admin only /products/GTIN *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Products can be marked as hidden by admin *(s17-ws2024-module_b-product-management)*
- `measurement` 0.75 — Hidden products can be permanently deleted *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — When accessing the /products/new URL, the create product form is present *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Newly created product can be saved to database *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — The product management functions are only visible and operable after admin login *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Accessing product management functions without login results in 401 error *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Products has two languages of information, English and French *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — The form submission checks if GTIN is 13 or 14 length *(s17-ws2024-module_b-product-management)*
- `measurement` 1.0 — Admin can upload image *(s17-ws2024-module_b-product-management)*
- `measurement` 1.0 — Admin can change image *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — Admin can remove the uploaded image *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — There is a default placeholder image when no image is uploaded *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — A product's public page can be reached by accessing the /01/GTIN *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — Admin login page is at path /login *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Admin can sign-in by using the login passphrase *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Admin can view the list of companies *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — Admin can view a particular company after clicking on the companies list *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Admin can view the associated products of a particular company in the company showing page *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Admin can create companies *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Admin can update companies information *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Admin can mark a company as deactivated *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — All fields in companies are available for create *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — When a company is deactivated, all the associated products are marked as hidden *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — There is a separated list for listing deactivated companies *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — No one can delete a company on the web interface *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.75 — DB-dump is provided and contains FK-constraints and correct columns *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — GTIN field is indexed in products table *(s17-ws2024-module_c-lyon-heritage-site)*
- `judgement` 0.5 — Database column type is reasonable defined *(s17-ws2024-module_c-lyon-heritage-site)*
- `judgement` 0.5 — DB structure is normalized *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Able to load the verification page *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — Can input multiple GTIN code and submit to see result *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — The result page data is correct *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — The result page shows an "All corrects" and green tick when no any GTIN verification error *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — The products API output can list JSON *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 1.0 — The products list API is correct *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — The pagination of products list API is correct *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — A single product can be queried via JSON *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.75 — The single product fields are correct according to the Test Project *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — The product API returns 404 when accessing a non-exist product *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — The product API returns 404 when accessing a hidden product *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.75 — The products list JSON allows querying by using keyword. *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — Able to display products in a page via /products *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — The displayed products are dynamic loaded from database *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — A specific product can be viewed in web page by admin only /products/GTIN *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Products can be marked as hidden by admin *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.75 — Hidden products can be permanently deleted *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — When accessing the /products/new URL, the create product form is present *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Newly created product can be saved to database *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — The product management functions are only visible and operable after admin login *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Accessing product management functions without login results in 401 error *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Products has two languages of information, English and French *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — The form submission checks if GTIN is 13 or 14 length *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 1.0 — Admin can upload image *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 1.0 — Admin can change image *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — Admin can remove the uploaded image *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — There is a default placeholder image when no image is uploaded *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — A product's public page can be reached by accessing the /01/GTIN *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — Admin login page is at path /login *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Admin can sign-in by using the login passphrase *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Admin can view the list of companies *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — Admin can view a particular company after clicking on the companies list *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Admin can view the associated products of a particular company in the company showing page *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Admin can create companies *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Admin can update companies information *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Admin can mark a company as deactivated *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — All fields in companies are available for create *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — When a company is deactivated, all the associated products are marked as hidden *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — There is a separated list for listing deactivated companies *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — No one can delete a company on the web interface *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.75 — DB-dump is provided and contains FK-constraints and correct columns *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — GTIN field is indexed in products table *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `judgement` 0.5 — Database column type is reasonable defined *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `judgement` 0.5 — DB structure is normalized *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Able to load the verification page *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — Can input multiple GTIN code and submit to see result *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — The result page data is correct *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — The result page shows an "All corrects" and green tick when no any GTIN verification error *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — The products API output can list JSON *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 1.0 — The products list API is correct *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — The pagination of products list API is correct *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — A single product can be queried via JSON *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.75 — The single product fields are correct according to the Test Project *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — The product API returns 404 when accessing a non-exist product *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — The product API returns 404 when accessing a hidden product *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.75 — The products list JSON allows querying by using keyword. *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — Able to display products in a page via /products *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — The displayed products are dynamic loaded from database *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — A specific product can be viewed in web page by admin only /products/GTIN *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Products can be marked as hidden by admin *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.75 — Hidden products can be permanently deleted *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — When accessing the /products/new URL, the create product form is present *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Newly created product can be saved to database *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — The product management functions are only visible and operable after admin login *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Accessing product management functions without login results in 401 error *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Products has two languages of information, English and French *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — The form submission checks if GTIN is 13 or 14 length *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 1.0 — Admin can upload image *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 1.0 — Admin can change image *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — Admin can remove the uploaded image *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — There is a default placeholder image when no image is uploaded *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.25 — A product's public page can be reached by accessing the /01/GTIN *(s17-ws2024-module_d-lyon-mobile-web-service)*

---

## s17-es2021-module_a-vip-seating-arrangement-tool

- WSOS 5 label in scheme: *Front-End Development*
- Aspects: **14**
- Source: `s17-es2021-module_a-vip-seating-arrangement-tool\marking\marking-scheme.json`

### 1. When in full-screen, only the VIP grid and exit button is visible

| Field | Value |
| --- | --- |
| Sub-criterion | VIP grid area |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 2. Able to swap any two names 

| Field | Value |
| --- | --- |
| Sub-criterion | VIP grid area |
| Type | measurement |
| Max mark | 1 |
| Extra description | The swapping mechanism is same as test project. It is by swapping the dragged name box and dropped box. |
| Calculation | pass-or-fail |

### 3. Default names button

| Field | Value |
| --- | --- |
| Sub-criterion | Loading Default VIP names |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | There is a button to load default VIP list. |
| Calculation | pass-or-fail |

### 4. By clicking on a button, the user can load a sample list as the VIP list.

| Field | Value |
| --- | --- |
| Sub-criterion | Loading Default VIP names |
| Type | measurement |
| Max mark | 1 |
| Extra description | When the button is clicked, the grid is reset to contain only 3 names: Andrew, Robert, Steve. Deduct 0.5 points for each missing or incorrect name. |
| Calculation | pass-or-fail |

### 5. Loading the sample list correctly

| Field | Value |
| --- | --- |
| Sub-criterion | Loading Default VIP names |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | This sample list is pre-defined. They are: - Andrew - Robert - Steve |
| Calculation | pass-or-fail |

### 6. User is able to drag the exported files containing a list of names of VIPs into the tool

| Field | Value |
| --- | --- |
| Sub-criterion | Loading external files |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | by dropping into the file dropping area. |
| Calculation | pass-or-fail |

### 7. When the file is dragged over the dropping area, there is indicator

| Field | Value |
| --- | --- |
| Sub-criterion | Loading external files |
| Type | measurement |
| Max mark | 1 |
| Extra description | There are two visual clues: An indicator, and a line of text hints Deduct .5 point per missing or incorrect. |
| Calculation | pass-or-fail |

### 8. The tool should construct the VIP area once the file are dropped.

| Field | Value |
| --- | --- |
| Sub-criterion | Loading external files |
| Type | measurement |
| Max mark | 1 |
| Calculation | pass-or-fail |

### 9. The state and data recovers after re-opening browser

| Field | Value |
| --- | --- |
| Sub-criterion | Restoring VIP area states from cache |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 10. The tool should save a copy as cache locally in web browser

| Field | Value |
| --- | --- |
| Sub-criterion | Restoring VIP area states from cache |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The save happens whenever a change are made to the list. The cache stores in Local Storage. |
| Calculation | pass-or-fail |

### 11. Exporting the VIP list to file

| Field | Value |
| --- | --- |
| Sub-criterion | Exporting |
| Type | measurement |
| Max mark | 1 |
| Extra description | It is able to trigger download. |
| Calculation | pass-or-fail |

### 12. File format is correct

| Field | Value |
| --- | --- |
| Sub-criterion | Exporting |
| Type | measurement |
| Max mark | 1 |
| Extra description | The first line is the title, with `# VIP List`. The second line is empty. From the 3rd line and the rest,  each line is the name of VIP, with a hyphen in front of it. |
| Calculation | pass-or-fail |

### 13. Copying to Clipboard

| Field | Value |
| --- | --- |
| Sub-criterion | Exporting |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The copy button exists and when click on it,  the VIP names are copied to clip board. The names are in the copied list, regardless of the format. |
| Calculation | pass-or-fail |

### 14. The text to clipboard has correct format.

| Field | Value |
| --- | --- |
| Sub-criterion | Exporting |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | When the text is copied to the clipboard, the format is correct. |
| Calculation | pass-or-fail |

---

## s17-es2023-module_c-commercial-open-api

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **21**
- Source: `s17-es2023-module_c-commercial-open-api\marking\marking-scheme.json`

### 1. Authentication token is required

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication |
| Type | measurement |
| Max mark | 1 |
| Extra description | For any request, the token X-API-TOKEN is required. If it is missing or not valid, the API does not proceed. |
| Calculation | pass-or-fail |

### 2. Correct workspace association

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Specyfing the token selects the correct underlying workspace for quotas and billing. This can be verified by calling an AI function and checking if the billing of the correct workspace is updated. |
| Calculation | pass-or-fail |

### 3. Quota enforced

| Field | Value |
| --- | --- |
| Sub-criterion | Quotas |
| Type | measurement |
| Max mark | 1 |
| Extra description | When the quota is exceeded, any request to start a new computation is denied (according to which endpoints return 403 in the API specification). |
| Calculation | pass-or-fail |

### 4. Conversation start

| Field | Value |
| --- | --- |
| Sub-criterion | Chat |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | A conversation can be started with an initial prompt. The endpoint response contains the conversation ID, response (can be empty string), and if the response is final. |
| Calculation | pass-or-fail |

### 5. Converstation response

| Field | Value |
| --- | --- |
| Sub-criterion | Chat |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The response is provided in the GET endpoint. The final flag is set when the response is final. Calling the endpoint multiple times reveals the latest available response from the Chatterblast service. |
| Calculation | pass-or-fail |

### 6. Converstation continuation

| Field | Value |
| --- | --- |
| Sub-criterion | Chat |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The conversation can be continued with the PUT endpoint. The endpoint response contains the expected fields. |
| Calculation | pass-or-fail |

### 7. Inputs blocked while response in progress

| Field | Value |
| --- | --- |
| Sub-criterion | Chat |
| Type | measurement |
| Max mark | 1 |
| Extra description | If there was a prompt submitted, further prompts are cancelled and a response with status code 400 is returned while the previous response is not yet final. |
| Calculation | pass-or-fail |

### 8. EOF indicator

| Field | Value |
| --- | --- |
| Sub-criterion | Chat |
| Type | measurement |
| Max mark | 1 |
| Extra description | The <EOF> indicator and what comes after it is not included in the response. |
| Calculation | pass-or-fail |

### 9. Converstation not found

| Field | Value |
| --- | --- |
| Sub-criterion | Chat |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | If the provided conversation ID does not exist, a 404 error is returned according to the specification. |
| Calculation | pass-or-fail |

### 10. Billing

| Field | Value |
| --- | --- |
| Sub-criterion | Chat |
| Type | measurement |
| Max mark | 1.5 |
| Extra description | The biling of the workspace is updated once the final answer is returned with the provided time it took according the the indicator. |
| Calculation | pass-or-fail |

### 11. Generation job start

| Field | Value |
| --- | --- |
| Sub-criterion | Image Generation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | A image generation job can be started. The endpoint response contains the job ID according to the specification. |
| Calculation | pass-or-fail |

### 12. Job status

| Field | Value |
| --- | --- |
| Sub-criterion | Image Generation |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | The job status endpoint returns the current status, progress and an image URL according to the specification. |
| Calculation | pass-or-fail |

### 13. Preliminary image is available

| Field | Value |
| --- | --- |
| Sub-criterion | Image Generation |
| Type | measurement |
| Max mark | 1.5 |
| Extra description | The image URL in the job status response points to a URL on the newly written server by the competitor and returns the image in a way that it can be included in a <img> tag. |
| Calculation | pass-or-fail |

### 14. Result

| Field | Value |
| --- | --- |
| Sub-criterion | Image Generation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The job result endpoint returns a resource ID and an image URL which can be included in a <img> tag. |
| Calculation | pass-or-fail |

### 15. Upscale

| Field | Value |
| --- | --- |
| Sub-criterion | Image Generation |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | The generated image can be upscaled. The upscale endpoint returns a job ID according to the specification. |
| Calculation | pass-or-fail |

### 16. Zoom in / out

| Field | Value |
| --- | --- |
| Sub-criterion | Image Generation |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | The generated image can be zoomed in or out. The zoom in/out endpoints returns a job ID according to the specification. |
| Calculation | pass-or-fail |

### 17. Not found

| Field | Value |
| --- | --- |
| Sub-criterion | Image Generation |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | The following endpoints all return a 404 error according the spec if a non existing resource is provided: job status, job result, upscale, zoom in, zoom out. |
| Calculation | pass-or-fail |

### 18. Billing

| Field | Value |
| --- | --- |
| Sub-criterion | Image Generation |
| Type | measurement |
| Max mark | 1.5 |
| Extra description | The biling of the workspace is updated once the image generation job has completed with the duration it took DreamWeaver to complete the job. |
| Calculation | pass-or-fail |

### 19. Image Upload

| Field | Value |
| --- | --- |
| Sub-criterion | Image Recognition |
| Type | measurement |
| Max mark | 1.5 |
| Extra description | An image can be uploaded via multipart form. |
| Calculation | pass-or-fail |

### 20. Image recognition response

| Field | Value |
| --- | --- |
| Sub-criterion | Image Recognition |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The recognition response is returned with the correct mapping of x, y, width, height from the AI services original top, left, bottom, right response. |
| Calculation | pass-or-fail |

### 21. Billing

| Field | Value |
| --- | --- |
| Sub-criterion | Image Recognition |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The billing of the workspace is updated with the duration of the request to the Mindreader service. |
| Calculation | pass-or-fail |

---

## s17-es2023-module_e-advanced-web-development

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **5**
- Source: `s17-es2023-module_e-advanced-web-development\marking\marking-scheme.json`

### 1. Tests passing

| Field | Value |
| --- | --- |
| Sub-criterion | Task 1 - Writing automated tests |
| Type | measurement |
| Max mark | 1 |
| Extra description | There is at least one test with an assertion and all tests are passing. |
| Calculation | pass-or-fail |

### 2. Test coverage at least 80%

| Field | Value |
| --- | --- |
| Sub-criterion | Task 1 - Writing automated tests |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The test coverage of lines and conditionals is at least 80% |
| Calculation | pass-or-fail |

### 3. Test coverage is 100%

| Field | Value |
| --- | --- |
| Sub-criterion | Task 1 - Writing automated tests |
| Type | measurement |
| Max mark | 1 |
| Extra description | The test coverage of lines and conditionals is 100% |
| Calculation | pass-or-fail |

### 4. There is a maximum of 15 mutants surviving

| Field | Value |
| --- | --- |
| Sub-criterion | Task 1 - Writing automated tests |
| Type | measurement |
| Max mark | 1 |
| Extra description | A maximum of 15 mutants survive after running the tests with a mutation testing framework. |
| Calculation | pass-or-fail |

### 5. There is a maximum of 3 mutants surviving

| Field | Value |
| --- | --- |
| Sub-criterion | Task 1 - Writing automated tests |
| Type | measurement |
| Max mark | 1 |
| Extra description | A maximum of 3 mutants survive after running the tests with a mutation testing framework. |
| Calculation | pass-or-fail |

---

## s17-es2025-module_b-dynamic-website-with-server-side-rendering

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **31**
- Source: `s17-es2025-module_b-dynamic-website-with-server-side-rendering\marking\marking-scheme.json`

### 1. Each required page renders initial content from the server

| Field | Value |
| --- | --- |
| Sub-criterion | Organization, Design, Email Templates |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | For each page: Investors, Tours, Sponsors, Admin-Investor, Admin-Tours. View HTML source, if data is present directly in the HTML, award the point. |
| Calculation | pass-or-fail |

### 2. User receives email link and can log in via that link

| Field | Value |
| --- | --- |
| Sub-criterion | Security & Authentication |
| Type | measurement |
| Max mark | 1.5 |
| Extra description | Submitting login form creates email with login link |
| Calculation | pass-or-fail |

### 3. Each form/action has valid CSRF protection: Login form

| Field | Value |
| --- | --- |
| Sub-criterion | Security & Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test by removing hidden XSRF form field and verify the form posting is rejected. |
| Calculation | pass-or-fail |

### 4. Each form/action has valid CSRF protection: Investment request form

| Field | Value |
| --- | --- |
| Sub-criterion | Security & Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test by removing hidden XSRF form field and verify the form posting is rejected. |
| Calculation | pass-or-fail |

### 5. Each form/action has valid CSRF protection: Tour booking form

| Field | Value |
| --- | --- |
| Sub-criterion | Security & Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test by removing hidden XSRF form field and verify the form posting is rejected. |
| Calculation | pass-or-fail |

### 6. User input properly escaped: No XSS vulnerabilities via form input

| Field | Value |
| --- | --- |
| Sub-criterion | Security & Authentication |
| Type | measurement |
| Max mark | 1 |
| Extra description | Investor text for funding a turbine: Once investment request is approved by admin, the text shown publicly is properly escaped. |
| Calculation | pass-or-fail |

### 7. SQL injection prevention

| Field | Value |
| --- | --- |
| Sub-criterion | Security & Authentication |
| Type | measurement |
| Max mark | 1 |
| Extra description | Uses ORM or parameterised queries. |
| Calculation | pass-or-fail |

### 8. Database seed completeness. Running the seed.sql script creates the structure and required data as specified

| Field | Value |
| --- | --- |
| Sub-criterion | Architecture & Infrastructure |
| Type | measurement |
| Max mark | 1.5 |
| Calculation | pass-or-fail |

### 9. Clean and consistent URL routing

| Field | Value |
| --- | --- |
| Sub-criterion | Architecture & Infrastructure |
| Type | judgement |
| Max mark | 1 |
| Judgement 0 | Missing or broken |
| Judgement 1 | Basic implementation |
| Judgement 2 | Clean and consistent with small issues |
| Judgement 3 | Robust and complete |

### 10. Code modularity and separation of concerns

| Field | Value |
| --- | --- |
| Sub-criterion | Architecture & Infrastructure |
| Type | judgement |
| Max mark | 1 |
| Judgement 0 | Modularity or separation of concerns completely absent |
| Judgement 1 | Minor modularity and separation concern implement but severe mix of concerns. |
| Judgement 2 | Modularity is clear when reading the code, and code is mostly separating concerns with minor issues. |
| Judgement 3 | Clear modules and consistent separation of concerns (database, render / model, logic) |

### 11. Error handling for invalid forms and routes

| Field | Value |
| --- | --- |
| Sub-criterion | Architecture & Infrastructure |
| Type | judgement |
| Max mark | 1 |
| Judgement 0 | No error handling apart from showing a server error |
| Judgement 1 | Errors are specifically handled but human friendly presentation of the error is absent. |
| Judgement 2 | Errors are handled but not specific about what went wrong (to a degree that is relevant to the user, not showing the stacktrace) |
| Judgement 3 | Errors are handled, presented in a human friendly way. |

### 12. Sponsors page shows approved presenting sponsors

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Sponsors page shows the approved sponsors after their request was approved by an admin. |
| Calculation | pass-or-fail |

### 13. Investment page shows turbines with spots

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | At least 10 turbines shown and each has 10 spots |
| Calculation | pass-or-fail |

### 14. Investment page shows spot status

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Spot status is one of available, pending or funded (with text or logo) |
| Calculation | pass-or-fail |

### 15. Investment page shows total support amount

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | The total support amount is shown and is the sum of all three types of funding. |
| Calculation | pass-or-fail |

### 16. Tours page shows dates and available seats

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | At least 5 tours shown with dates and available seats. |
| Calculation | pass-or-fail |

### 17. Tours page shows active booking

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | After booking and being logged in, an active booking is shown |
| Calculation | pass-or-fail |

### 18. Tours page provides function to cancel active booking

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Clicking the cancellation of an active booking cancels the booking: trigger email and free seats |
| Calculation | pass-or-fail |

### 19. Mock emails: /mock-emails accessible and not requiring login

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Can be viewed at /mock-emails without login |
| Calculation | pass-or-fail |

### 20. Mock emails: /mock-emails shows email details

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Shows recipient, subject, body and sent timestamp |
| Calculation | pass-or-fail |

### 21. Mock emails: /mock-emails shows emails sorted by timestamp

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Emails are sorted by timestamp |
| Calculation | pass-or-fail |

### 22. Mock emails: /mock-emails shows email body with preserved new lines

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Body rendering preserves new lines |
| Calculation | pass-or-fail |

### 23. Mock emails: /mock-emails shows email body links are clickable

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Public Site |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Links are clickable |
| Calculation | pass-or-fail |

### 24. Access to /admin/* is only possible when logged in as a user with the admin role

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Admin Interface |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Navigating to the admin section either shows an error that the user is not logged in or not an admin, or redirects away from the admin section. |
| Calculation | pass-or-fail |

### 25. Investment requests: show with status

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Admin Interface |
| Type | measurement |
| Max mark | 0.2 |
| Extra description | Requests are shown with the correct status |
| Calculation | pass-or-fail |

### 26. Investment requests: can be rejected

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Admin Interface |
| Type | measurement |
| Max mark | 0.4 |
| Extra description | Requests can be rejected -> triggers email |
| Calculation | pass-or-fail |

### 27. Investment requests: can be approved

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Admin Interface |
| Type | measurement |
| Max mark | 0.4 |
| Extra description | Requests can be approved -> triggers email |
| Calculation | pass-or-fail |

### 28. Tour bookings: Shows tours with bookins

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Admin Interface |
| Type | measurement |
| Max mark | 0.1 |
| Extra description | Existing tours are listed with bookings (can be in sub-page) |
| Calculation | pass-or-fail |

### 29. Tour bookings: Create tour

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Admin Interface |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Tours can be created |
| Calculation | pass-or-fail |

### 30. Tour bookings: Cancel bookings

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Admin Interface |
| Type | measurement |
| Max mark | 0.2 |
| Extra description | Individual bookings can be cancelled -> triggers email and frees seats |
| Calculation | pass-or-fail |

### 31. Tour bookings: Delete tours

| Field | Value |
| --- | --- |
| Sub-criterion | Functionality — Admin Interface |
| Type | measurement |
| Max mark | 0.2 |
| Extra description | Tours can be deleted, but only if no non-cancelled bookings exist for this tour |
| Calculation | pass-or-fail |

---

## s17-es2025-module_c-rest-api

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **25**
- Source: `s17-es2025-module_c-rest-api\marking\marking-scheme.json`

### 1. POST /auth/login with {"username":"alice","password":"alice12345"}

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication & Access Control |
| Type | measurement |
| Max mark | 0.75 |
| Calculation | pass-or-fail |

### 2. Login fails (bad password)

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication & Access Control |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 3. Token required on protected route: 
Test: GET /alerts with no Authorization header

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication & Access Control |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 4. Operator access allowed: 
Test: log in as bob, then GET /alerts with Bearer <token>

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication & Access Control |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 5. Operator access denied (role escalation): 
Test: bob token on POST /auth/assign-role

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication & Access Control |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 6. Admin assigns role: 
Test: alice token, POST /auth/assign-role {"username":"user","role":"operator"}


| Field | Value |
| --- | --- |
| Sub-criterion | Authentication & Access Control |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 7. Admin cannot drop own admin: 
Test: alice token tries to set role=operator for alice

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication & Access Control |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 8. List turbines public: 
Test: GET /turbines

| Field | Value |
| --- | --- |
| Sub-criterion | Turbine Data & Freshness |
| Type | measurement |
| Max mark | 1 |
| Calculation | pass-or-fail |

### 9. Live status:
Test: Upstream healthy; GET /turbines/1/status

| Field | Value |
| --- | --- |
| Sub-criterion | Turbine Data & Freshness |
| Type | measurement |
| Max mark | 1 |
| Calculation | pass-or-fail |

### 10. Cached fallback:
Test: Simulate upstream timeout; GET /turbines/1/status

| Field | Value |
| --- | --- |
| Sub-criterion | Turbine Data & Freshness |
| Type | measurement |
| Max mark | 1 |
| Calculation | pass-or-fail |

### 11. Missing property handling:
Test: Upstream returns temperature:null; GET /turbines/1/status

| Field | Value |
| --- | --- |
| Sub-criterion | Turbine Data & Freshness |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 12. Unknown turbine:
Test: GET /turbines/999/status

| Field | Value |
| --- | --- |
| Sub-criterion | Turbine Data & Freshness |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 13. Valid pitch/yaw:
Test: bob token, POST /turbines/1/control {"pitch":10,"yaw":180}

| Field | Value |
| --- | --- |
| Sub-criterion | Control & Action Log |
| Type | measurement |
| Max mark | 1.5 |
| Calculation | pass-or-fail |

### 14. Range validation:
Test: pitch = -120

| Field | Value |
| --- | --- |
| Sub-criterion | Control & Action Log |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 15. Valid state transition:
Test: shutdown then start sequence using correct endpoints

| Field | Value |
| --- | --- |
| Sub-criterion | Control & Action Log |
| Type | measurement |
| Max mark | 1 |
| Calculation | pass-or-fail |

### 16. Invalid transition:
Test: POST /turbines/1/maintenance while status = started

| Field | Value |
| --- | --- |
| Sub-criterion | Control & Action Log |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 17. High-RPM alert fires:
Test: mock rpm = 70; fetch status

| Field | Value |
| --- | --- |
| Sub-criterion | Alerts Lifecycle |
| Type | measurement |
| Max mark | 1.5 |
| Calculation | pass-or-fail |

### 18. Alert deduplication:
Test: repeat fetch while rpm still mocked to be 70


| Field | Value |
| --- | --- |
| Sub-criterion | Alerts Lifecycle |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 19. Alert resolves:
Test: rpm above 70, fetch status, rpm drops to 50; fetch status

| Field | Value |
| --- | --- |
| Sub-criterion | Alerts Lifecycle |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 20. Acknowledge:
Test: POST /alerts/{id}/ack as bob

| Field | Value |
| --- | --- |
| Sub-criterion | Alerts Lifecycle |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 21. Initial fetch & parse:
Test: alice token, GET /turbines/1/logs

| Field | Value |
| --- | --- |
| Sub-criterion | Log Retrieval & Search |
| Type | measurement |
| Max mark | 1 |
| Calculation | pass-or-fail |

### 22. No duplicates on second fetch:
Test: GET /turbines/1/logs repeatedly

| Field | Value |
| --- | --- |
| Sub-criterion | Log Retrieval & Search |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 23. Level filter:
Test: GET /turbines/1/logs?levels=error,warning

| Field | Value |
| --- | --- |
| Sub-criterion | Log Retrieval & Search |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 24. Message substring filter
Test: GET /turbines/1/logs?message=wind

| Field | Value |
| --- | --- |
| Sub-criterion | Log Retrieval & Search |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 25. Upstream failure fallback:
Test: simulate 500 from external logs; request logs

| Field | Value |
| --- | --- |
| Sub-criterion | Log Retrieval & Search |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

---

## s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **12**
- Source: `s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering\marking\marking-scheme.json`

### 1. Course list displays with complete information

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Functionality |
| Type | measurement |
| Max mark | 1 |
| Extra description | Test: Page shows courses with title, description, difficulty, total chapters, and total credits |
| Calculation | options |

### 2. Create new course functionality

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Functionality |
| Type | measurement |
| Max mark | 1 |
| Extra description | Test: Create course button opens form, saves new course with all fields, and updates course list |
| Calculation | pass-or-fail |

### 3. Edit course form with chapter editing button

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Functionality |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Edit button opens populated form, includes inactive 'Edit Chapters' button as specified |
| Calculation | pass-or-fail |

### 4. Delete course with confirmation dialog

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Functionality |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Delete shows custom confirmation dialog (not browser popup), removes course and chapters but preserves completion records |
| Calculation | pass-or-fail |

### 5. Mentor list displays complete information

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Management Functionality |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Page shows mentors with name, hourly credit rate, years of experience, average rating, approval status |
| Calculation | options |

### 6. Mentor approval workflow functionality

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Management Functionality |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Approve button for pending mentors changes status to active and updates interface immediately |
| Calculation | pass-or-fail |

### 7. Passwords securely hashed in database

| Field | Value |
| --- | --- |
| Sub-criterion | Security Implementation |
| Type | measurement |
| Max mark | 1 |
| Extra description | Test: Check database shows hashed passwords (bcrypt/similar), not plain text passwords |
| Calculation | pass-or-fail |

### 8. Role-based access control enforced

| Field | Value |
| --- | --- |
| Sub-criterion | Security Implementation |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: Admin pages are inaccessible to non-admin users, redirect or show access denied |
| Calculation | pass-or-fail |

### 9. Session management with logout functionality

| Field | Value |
| --- | --- |
| Sub-criterion | Security Implementation |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: Logout button ends session, subsequent admin page access requires re-login |
| Calculation | pass-or-fail |

### 10. Protection against SQL injection

| Field | Value |
| --- | --- |
| Sub-criterion | Security Implementation |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: Form inputs use prepared statements/ORM, SQL injection attempts in search fields do not execute |
| Calculation | pass-or-fail |

### 11. Input validation and XSS protection

| Field | Value |
| --- | --- |
| Sub-criterion | Security Implementation |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: Form inputs are validated, XSS attempts in form fields are escaped/sanitized in output |
| Calculation | pass-or-fail |

### 12. Administrative workflow efficiency and data presentation

| Field | Value |
| --- | --- |
| Sub-criterion | User Interface and Branding |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | Poor administrative workflows with confusing processes and unclear data presentation |
| Judgement 1 | Basic administrative functions work but workflows are not optimized for efficiency |
| Judgement 2 | Good administrative workflows with clear processes and well-organized data presentation |
| Judgement 3 | Excellent streamlined administrative workflows with optimal efficiency and intuitive data management |

---

## s17-es2025-training-hu-module_c-rest-api

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **17**
- Source: `s17-es2025-training-hu-module_c-rest-api\marking\marking-scheme.json`

### 1. POST /api/v1/users/register creates new user successfully

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication System Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST with valid email/name/password returns 201 with user data |
| Calculation | pass-or-fail |

### 2. User registration sets creditBalance to 0

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication System Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: New user response shows credits: 0 |
| Calculation | pass-or-fail |

### 3. POST /api/v1/users/login with valid credentials returns token

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication System Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST with correct email/password returns 200 with token |
| Calculation | pass-or-fail |

### 4. Protected endpoints require X-API-TOKEN header

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication System Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /api/v1/users/me without header returns 401 |
| Calculation | pass-or-fail |

### 5. Invalid token returns 401 authorization error

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication System Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /api/v1/users/me with fake token returns 401 |
| Calculation | pass-or-fail |

### 6. POST /api/v1/users/logout revokes current token

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication System Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: After logout, using same token returns 401 |
| Calculation | pass-or-fail |

### 7. GET /api/v1/users/me returns user basic information

| Field | Value |
| --- | --- |
| Sub-criterion | User Profile and Statistics |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Response includes user.id, user.name, user.email, user.creditBalance |
| Calculation | pass-or-fail |

### 8. User profile includes statistics object

| Field | Value |
| --- | --- |
| Sub-criterion | User Profile and Statistics |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Response includes stats.enrolledCourses, stats.completedChapters, stats.totalCreditsEarned, stats.upcomingBookings |
| Calculation | pass-or-fail |

### 9. User profile includes recentActivity array

| Field | Value |
| --- | --- |
| Sub-criterion | User Profile and Statistics |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Response includes recentActivity array with timestamp and type fields |
| Calculation | pass-or-fail |

### 10. GET /api/v1/courses returns array of courses

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Response is array with course objects containing id, title, description |
| Calculation | pass-or-fail |

### 11. Course listing includes isEnrolled status

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Each course object includes isEnrolled boolean field |
| Calculation | pass-or-fail |

### 12. GET /api/v1/courses/:id returns single course details

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Valid course ID returns course with chapters array |
| Calculation | pass-or-fail |

### 13. POST /api/v1/courses/:id/enroll creates enrollment

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Valid course ID returns 201, subsequent GET shows isEnrolled: true |
| Calculation | pass-or-fail |

### 14. POST /api/v1/courses/:courseId/chapters/:chapterId/complete awards credits

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Testing |
| Type | measurement |
| Max mark | 1 |
| Extra description | Test: Chapter completion increases user credit balance and returns updated balance |
| Calculation | pass-or-fail |

### 15. GET /api/v1/mentors/sessions returns available sessions

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Session Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Response is array with session objects containing id, mentorName, creditCost |
| Calculation | pass-or-fail |

### 16. Session data includes mentor and booking information

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Session Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Sessions include mentorName, expertise, sessionDate, durationMinutes, creditCost |
| Calculation | pass-or-fail |

### 17. POST /api/v1/mentors/sessions/:id/book creates booking with sufficient credits

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Session Testing |
| Type | measurement |
| Max mark | 1 |
| Extra description | Test: Booking with enough credits returns 201 and deducts credits from balance |
| Calculation | pass-or-fail |

---

## s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **13**
- Source: `s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend\marking\marking-scheme.json`

### 1. POST /users/register creates user and returns 201

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: POST /api/v1/users/register with valid JSON {email, password, name}. Expect 201 Created with user object (id, email, name, credits: 0). Test duplicate email; expect 400 with {"message": "Failed to register user"}. |
| Calculation | pass-or-fail |

### 2. POST /users/login returns token and 200

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: POST /api/v1/users/login with valid {email, password}. Expect 200 OK with user object and token. Test invalid credentials; expect 401 with {"message": "Invalid email or password"}. |
| Calculation | pass-or-fail |

### 3. POST /users/logout revokes token

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Login, then POST /api/v1/users/logout with X-API-TOKEN. Expect 200 with {"message": "Logout successful"}. Verify token no longer works for GET /users/me. |
| Calculation | pass-or-fail |

### 4. GET /users/me returns user profile and stats

| Field | Value |
| --- | --- |
| Sub-criterion | User Management API |
| Type | measurement |
| Max mark | 1.5 |
| Extra description | Test: GET /api/v1/users/me with valid token. Response must include user (id, name, email, creditBalance), stats (enrolledCourses, completedChapters, totalCreditsEarned, upcomingBookings), recentActivity array, sessions array. Data must come from database. |
| Calculation | pass-or-fail |

### 5. recentActivity and sessions structure in /users/me

| Field | Value |
| --- | --- |
| Sub-criterion | User Management API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: recentActivity has type, description, creditsEarned/creditsPaid, timestamp. sessions has booking with session, status, creditsPaid. Up to 5 recentActivity items, sorted newest first. |
| Calculation | pass-or-fail |

### 6. GET /courses returns course list with enrollment status

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: GET /api/v1/courses with valid token. Expect 200 with courses array. Each course has id, title, description, difficulty, totalChapters, totalCredits, isEnrolled. Data from content service integration. |
| Calculation | pass-or-fail |

### 7. GET /courses/:id returns course details with chapters

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: GET /api/v1/courses/1 with valid token. Expect 200 with course object including chapters array (id, title, description, credits, isCompleted). Test non-existent ID; expect 404 {"message": "Course not found"}. |
| Calculation | pass-or-fail |

### 8. POST /courses/:id/enroll enrolls user

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: POST /api/v1/courses/1/enroll with valid token. Expect 200 {"message": "Successfully enrolled in course"}. Repeat; expect 409 {"message": "Already enrolled in this course"}. Invalid course ID; expect 404. |
| Calculation | pass-or-fail |

### 9. POST chapter complete awards credits

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management API |
| Type | measurement |
| Max mark | 1.25 |
| Extra description | Test: POST /api/v1/courses/:courseId/chapters/:chapterId/complete with enrolled user. Expect 200 with message, creditsEarned, newBalance. Not enrolled; expect 403 {"message": "Not enrolled in this course"}. Already completed; expect 409 {"message": "Chapter already completed"}. |
| Calculation | pass-or-fail |

### 10. GET /mentors/sessions returns available sessions

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Session API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: GET /api/v1/mentors/sessions with valid token. Expect 200 with sessions array. Each has id, mentorName, expertise, experienceLevel, sessionDate, durationMinutes, creditCost, isAvailable. |
| Calculation | pass-or-fail |

### 11. POST /mentors/sessions/:id/book books session

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Session API |
| Type | measurement |
| Max mark | 1.25 |
| Extra description | Test: POST /api/v1/mentors/sessions/6/book with valid token and sufficient credits. Expect 200 with message and booking (id, sessionId, status, creditsPaid, bookedAt). Insufficient credits; expect 403 {"message": "Insufficient credits"}. Session unavailable; expect 409 {"message": "Session not available"}. |
| Calculation | pass-or-fail |

### 12. Response format and Content-Type

| Field | Value |
| --- | --- |
| Sub-criterion | Data Integrity and Integration |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: All API responses have Content-Type: application/json. JSON structure matches specification (property names, types). Array order matters per spec. |
| Calculation | pass-or-fail |

### 13. API adherence to specification

| Field | Value |
| --- | --- |
| Sub-criterion | Data Integrity and Integration |
| Type | judgement |
| Max mark | 0.75 |
| Judgement 0 | API does not follow specification; endpoints missing or return incorrect structure, status codes do not match spec |
| Judgement 1 | Basic endpoints implemented but with significant deviations from spec (wrong status codes, missing fields, incorrect error messages) |
| Judgement 2 | Most endpoints follow specification; minor deviations in response format or edge cases |
| Judgement 3 | Full adherence to OpenAPI specification; correct status codes, response structures, and error handling for all scenarios |

---

## s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **49**
- Source: `s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend\marking\marking-scheme.json`

### 1. Token structure is validated (must have exactly three parts: header.payload.signature)

| Field | Value |
| --- | --- |
| Sub-criterion | Token Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Send requests with malformed tokens: one-part (justpayload), two-part (header.payload), four-part (a.b.c.d). All must return 401 UNAUTHORIZED. |
| Calculation | pass-or-fail |

### 2. HMAC-SHA256 signature is verified using the correct shared secret

| Field | Value |
| --- | --- |
| Sub-criterion | Token Authentication |
| Type | measurement |
| Max mark | 1.0 |
| Extra description | Test: Create a valid token structure (correct exp, sub) but sign it with a different secret. Verify 401. Then sign with the correct secret (38344ac35d91bfd0c8f43963b0ca188d2a039504e825ff968b0366855bdbca5b) and verify 200. |
| Calculation | pass-or-fail |

### 3. Token expiry (exp claim) is validated on every request

| Field | Value |
| --- | --- |
| Sub-criterion | Token Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Issue a token with exp set to now-1 (past). Verify 401. Issue a token with exp set to now+3600. Verify protected endpoint returns 200 (assuming enrolled user). |
| Calculation | pass-or-fail |

### 4. User ID is extracted from the sub claim of the token payload

| Field | Value |
| --- | --- |
| Sub-criterion | Token Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Verify: The content service uses the sub value from the token payload as the user identifier when calling main backend endpoints (e.g. enrolled-courses, completed-chapters). Check by issuing tokens with different sub values and verifying enrollment/completion checks use the correct user ID. |
| Calculation | pass-or-fail |

### 5. Token validation is performed locally without external JWT or auth libraries

| Field | Value |
| --- | --- |
| Sub-criterion | Token Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Review: Inspect the submitted code (or package.json / requirements) for any JWT library imports (e.g. jsonwebtoken, passport-jwt, python-jose). The validation must be custom-implemented using a standard HMAC-SHA256 cryptographic library only. |
| Calculation | pass-or-fail |

### 6. Token validated locally on every protected request (no caching or skipping)

| Field | Value |
| --- | --- |
| Sub-criterion | Token Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Make two requests with the same expired token to different protected endpoints. Both must return 401. Make two requests with the same valid token to different endpoints. Both must succeed. Verify no token is accepted based on session state. |
| Calculation | pass-or-fail |

### 7. GET /api/courses returns all courses without authentication

| Field | Value |
| --- | --- |
| Sub-criterion | Course Catalog |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /api/courses with no Authorization header. Verify 200 OK with a courses array. Verify the response is not empty (uses the provided database data). |
| Calculation | pass-or-fail |

### 8. Course objects in list contain all required fields

| Field | Value |
| --- | --- |
| Sub-criterion | Course Catalog |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /api/courses. For each course in the courses array, verify the presence of: id (integer), slug (string), title (string), description (string), difficulty (beginner|intermediate|advanced), totalChapters (integer), totalCredits (integer). |
| Calculation | pass-or-fail |

### 9. Each course in the list includes a chapters array ordered by orderIndex

| Field | Value |
| --- | --- |
| Sub-criterion | Course Catalog |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /api/courses. For a course with multiple chapters, verify chapters array is present and items appear in ascending orderIndex order. Each chapter item must include id, title, credits, orderIndex. |
| Calculation | pass-or-fail |

### 10. GET /api/courses/:slug returns single course details (Bearer token required)

| Field | Value |
| --- | --- |
| Sub-criterion | Course Catalog |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /api/courses/{valid-slug} with a valid token for an enrolled user. Verify 200 with a course object wrapped in a course key, including id, slug, title, difficulty, totalChapters, totalCredits, and a chapters array. |
| Calculation | pass-or-fail |

### 11. isCompleted flag for each chapter is fetched from the main backend

| Field | Value |
| --- | --- |
| Sub-criterion | Course Catalog |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: Request GET /api/courses/{slug} for a user who has completed some chapters. Verify the chapters array includes isCompleted: true for completed chapters and isCompleted: false for incomplete ones. The data must match the main backend's /users/me/completed-chapters response. |
| Calculation | pass-or-fail |

### 12. User enrollment is validated with the main backend before serving course details

| Field | Value |
| --- | --- |
| Sub-criterion | Course Catalog |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: Request GET /api/courses/{slug} with a valid token for a user not enrolled in that course. Verify 403 NOT_ENROLLED. Confirm the enrollment check uses the main backend /users/me/enrolled-courses endpoint. |
| Calculation | pass-or-fail |

### 13. GET /api/courses/:slug/chapters/:chapterId returns chapter metadata

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /api/courses/{slug}/chapters/{id} for an accessible chapter. Verify response includes courseId, chapterId, title, description, and credits fields. |
| Calculation | pass-or-fail |

### 14. Content blocks are returned in orderIndex order

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET a chapter with multiple content blocks. Verify the content array items are ordered by ascending orderIndex. Verify each item exposes an orderIndex field matching its position. |
| Calculation | pass-or-fail |

### 15. Heading blocks (h1–h4) are returned with correct type and text fields

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET a chapter containing h1, h2, h3, or h4 blocks. Verify each heading item has type ("h1"/"h2"/"h3"/"h4") and text (the heading content from the text column). |
| Calculation | pass-or-fail |

### 16. Paragraph and list_item blocks are assembled from chunks into HTML

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 1.5 |
| Extra description | Test: GET a chapter with paragraph and list_item blocks that have associated chunks. Verify: (1) the html field is present and contains rendered HTML; (2) bold chunks are wrapped in <strong>; (3) italic chunks are wrapped in <em>; (4) paragraphs produce <p>...</p>; (5) list_item blocks produce <li>...</li>. Chunk rows must not appear directly in the response. |
| Calculation | pass-or-fail |

### 17. rawText field is included for paragraph and list_item blocks

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET a chapter with paragraph/list_item blocks. Verify each such block has a rawText field (may be null if raw_text column is null; must not be omitted entirely). |
| Calculation | pass-or-fail |

### 18. Image blocks are returned with url and alt fields

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET a chapter containing an image block. Verify the item has type "image", a url (from the url column), and an alt field (from img_alt column). No extraneous fields from other block types. |
| Calculation | pass-or-fail |

### 19. Video blocks are returned with url and title fields

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: GET a chapter containing a video block. Verify the item has type "video", a url, and a title field. No raw text or heading fields. |
| Calculation | pass-or-fail |

### 20. Link blocks are returned with url and title fields

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: GET a chapter containing a link block. Verify the item has type "link", a url, and a title field. |
| Calculation | pass-or-fail |

### 21. Quiz is included in the chapter response with questions and options (no correct answers exposed)

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 1.0 |
| Extra description | Test: GET a chapter with a quiz. Verify: (1) response contains a quiz.questions array; (2) each question has id, text, and options array; (3) each option has id and text; (4) isCorrect is NOT present in any option object. Exposing isCorrect is a critical failure. |
| Calculation | pass-or-fail |

### 22. credits field is included in the chapter response

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: GET a chapter. Verify the response root includes a credits field (integer) matching the chapter's credit value from the database. |
| Calculation | pass-or-fail |

### 23. Correct answers (isCorrect) are never exposed to clients in any response

| Field | Value |
| --- | --- |
| Sub-criterion | Chapter and Content Delivery |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: GET /api/courses/{slug}/chapters/{id}. Inspect every option object in the quiz.questions array. Verify that no option contains an isCorrect, correct, answer, or similar field. This is a strict security requirement. |
| Calculation | pass-or-fail |

### 24. First chapter (orderIndex 1) is always accessible for enrolled users

| Field | Value |
| --- | --- |
| Sub-criterion | Sequential Access Control |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET the first chapter (orderIndex 1) of a course using a valid enrolled-user token with no completed chapters. Verify 200 OK (not 403 CHAPTER_LOCKED). |
| Calculation | pass-or-fail |

### 25. Chapters with orderIndex > 1 are locked if the previous chapter is not completed

| Field | Value |
| --- | --- |
| Sub-criterion | Sequential Access Control |
| Type | measurement |
| Max mark | 1.0 |
| Extra description | Test: GET a chapter with orderIndex 2 or higher for an enrolled user who has not completed the preceding chapter. Verify 403 with {"error": "Previous chapter must be completed first", "code": "CHAPTER_LOCKED"}. Then mark the previous chapter complete and retry — verify 200. |
| Calculation | pass-or-fail |

### 26. Previous chapter completion is fetched from the main backend

| Field | Value |
| --- | --- |
| Sub-criterion | Sequential Access Control |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Verify: The content service calls the main backend /users/me/completed-chapters endpoint to determine whether the previous chapter is completed. It must not store completion state itself. Test by completing chapter 1 via the main backend and confirming chapter 2 becomes accessible in the content service. |
| Calculation | pass-or-fail |

### 27. POST .../quiz/validate accepts and processes an answers array

| Field | Value |
| --- | --- |
| Sub-criterion | Quiz Validation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST /api/courses/{slug}/chapters/{id}/quiz/validate with body {"answers": [{"questionId": 1, "selectedOptionId": "a"},...]}. Verify the endpoint accepts the request and returns a response (not 400/404). |
| Calculation | pass-or-fail |

### 28. Returns {"passed": true} when all submitted answers are correct

| Field | Value |
| --- | --- |
| Sub-criterion | Quiz Validation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Submit all correct answers for a chapter quiz. Verify response is 200 OK with body {"passed": true}. |
| Calculation | pass-or-fail |

### 29. Returns {"passed": false} when one or more answers are incorrect

| Field | Value |
| --- | --- |
| Sub-criterion | Quiz Validation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Submit at least one wrong answer for a chapter quiz. Verify response is 200 OK with body {"passed": false}. |
| Calculation | pass-or-fail |

### 30. Correct answers validated against quiz_options.isCorrect in the database

| Field | Value |
| --- | --- |
| Sub-criterion | Quiz Validation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Verify: Cross-reference submitted answers with the is_correct column in the quiz_options table. The content service must check all answers — passing requires every answer to match the correct option, not just the first or majority. |
| Calculation | pass-or-fail |

### 31. On a passing quiz, the content service notifies the main backend chapter completion endpoint

| Field | Value |
| --- | --- |
| Sub-criterion | Quiz Validation |
| Type | measurement |
| Max mark | 1.0 |
| Extra description | Test: Submit all correct answers for a chapter. Verify that after the call, the chapter appears as completed in the main backend (check via main backend /users/me/completed-chapters). The content service must call POST /courses/:id/chapters/:id/complete on the main backend. |
| Calculation | pass-or-fail |

### 32. POST /api/courses creates a new course with required fields (title, slug)

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST /api/courses with {"title": "Test Course", "slug": "test-course"} and a valid Bearer token. Verify the course is created and persisted (retrievable via GET /api/courses). |
| Calculation | pass-or-fail |

### 33. POST /api/courses returns 201 Created with the course object

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: POST /api/courses with valid data. Verify status 201 and response body contains a course object with id, slug, title, description, difficulty, totalChapters (0), totalCredits (0), and empty chapters array. |
| Calculation | pass-or-fail |

### 34. Slug format is validated (lowercase letters, digits, hyphens only)

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Test: POST /api/courses with slugs containing invalid characters: "My Course" (space), "UPPER", "special@char". All must return 400 with code INVALID_COURSE_SLUG. Test a valid slug like "my-new-course-2" returns 201. |
| Calculation | pass-or-fail |

### 35. Duplicate slug is rejected with 409 Conflict

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Create a course with slug "test-course". Then POST again with the same slug. Verify 409 with code DUPLICATE_COURSE_SLUG. |
| Calculation | pass-or-fail |

### 36. Optional fields (description, difficulty) are handled in POST /api/courses

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST with difficulty: "intermediate" and description: "A test desc". Verify these appear in the response. Test invalid difficulty value returns 400. Test omitting description sets it to null. |
| Calculation | pass-or-fail |

### 37. New course is initialized with totalChapters: 0, totalCredits: 0, chapters: []

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: POST /api/courses with valid data. Verify the response course object has totalChapters: 0, totalCredits: 0, and chapters: [] (empty array). |
| Calculation | pass-or-fail |

### 38. PUT /api/courses/:id updates course metadata

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: PUT /api/courses/{id} with {"title": "Updated Title"}. Verify 200 OK and the response course object contains the updated title. Verify the change persists (GET /api/courses returns the new title). |
| Calculation | pass-or-fail |

### 39. Partial updates are supported in PUT (only supplied fields are updated)

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: PUT /api/courses/{id} with only {"slug": "new-valid-slug"}. Verify only slug is changed and other fields (title, description, difficulty) remain unchanged. Also verify that an empty body returns 400. |
| Calculation | pass-or-fail |

### 40. totalChapters and totalCredits are recomputed from chapter data after PUT

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Verify: After a successful PUT, the response and subsequent GET include totalChapters and totalCredits values recomputed from the chapters table — not the stale values from before the update. |
| Calculation | pass-or-fail |

### 41. PUT /api/courses/:id returns 200 with updated course and chapters summary

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: PUT /api/courses/{id} with valid data. Verify 200 OK and response contains a course object with a chapters array (summaries in orderIndex order, same shape as GET /api/courses). |
| Calculation | pass-or-fail |

### 42. 400 returned for invalid payload or missing required fields in course administration

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: POST /api/courses with missing title or missing slug returns 400 with code INVALID_COURSE_PAYLOAD. PUT /api/courses/{id} with invalid difficulty returns 400 with INVALID_DIFFICULTY. PUT with non-numeric id returns 400 with INVALID_ID_FORMAT. |
| Calculation | pass-or-fail |

### 43. 404 returned when course ID does not exist in PUT /api/courses/:id

| Field | Value |
| --- | --- |
| Sub-criterion | Course Administration |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: PUT /api/courses/99999 (an ID that does not exist) with a valid Bearer token and a valid request body. Verify 404 with code COURSE_NOT_FOUND. |
| Calculation | pass-or-fail |

### 44. All responses include Content-Type: application/json header

| Field | Value |
| --- | --- |
| Sub-criterion | API Compliance and Response Quality |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Check the Content-Type response header on at least three different endpoints (GET /api/health, GET /api/courses, and one error response). All must include application/json. |
| Calculation | pass-or-fail |

### 45. Bearer token is correctly parsed from the Authorization header

| Field | Value |
| --- | --- |
| Sub-criterion | API Compliance and Response Quality |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Send a request with Authorization: Bearer <valid-token>. Verify it succeeds. Send Authorization: <token> without the Bearer prefix. Verify 401. Send the token in a non-standard header (e.g. X-Token). Verify 401. |
| Calculation | pass-or-fail |

### 46. Correct HTTP success status codes used (200 for GET/PUT, 201 for POST course creation)

| Field | Value |
| --- | --- |
| Sub-criterion | API Compliance and Response Quality |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Verify GET /api/courses returns 200, GET /api/courses/:slug returns 200, GET /api/courses/:slug/chapters/:id returns 200, POST /api/courses returns 201, PUT /api/courses/:id returns 200, POST .../quiz/validate returns 200. |
| Calculation | pass-or-fail |

### 47. Overall API response quality and adherence to the OpenAPI specification

| Field | Value |
| --- | --- |
| Sub-criterion | API Compliance and Response Quality |
| Type | judgement |
| Max mark | 1.0 |
| Judgement 0 | Responses deviate significantly from the OpenAPI spec: missing required fields, incorrect data types, wrong nesting structure, or extra fields that should not appear (e.g. isCorrect exposed) |
| Judgement 1 | Responses partially match the OpenAPI spec with minor structural issues: some fields missing or incorrectly named, but core structure is recognizable |
| Judgement 2 | Responses closely follow the OpenAPI spec with only minor deviations: all major fields present with correct types, structure is correct, naming is mostly consistent |
| Judgement 3 | Responses fully conform to the OpenAPI specification: all fields present with correct types and naming, correct wrapping (e.g. course vs courses key), consistent camelCase, no extraneous fields |

### 48. GET /api/courses is accessible without authentication

| Field | Value |
| --- | --- |
| Sub-criterion | API Compliance and Response Quality |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: GET /api/courses with no Authorization header. Verify 200 OK (not 401). This endpoint must be public per specification. |
| Calculation | pass-or-fail |

### 49. All content endpoints (except health and GET /api/courses) enforce Bearer token authentication

| Field | Value |
| --- | --- |
| Sub-criterion | API Compliance and Response Quality |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test the following endpoints without an Authorization header, each must return 401: GET /api/courses/:slug, GET /api/courses/:slug/chapters/:id, POST /api/courses/:slug/chapters/:id/quiz/validate, POST /api/courses, PUT /api/courses/:id. |
| Calculation | pass-or-fail |

---

## s17-hu_ro_training_2023-module_b-restaurants-owners-hub

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **10**
- Source: `s17-hu_ro_training_2023-module_b-restaurants-owners-hub\marking\marking-scheme.json`

### 1. Database schema design with proper normalization and relationships

| Field | Value |
| --- | --- |
| Sub-criterion | Database Design and Implementation |
| Type | judgement |
| Max mark | 2.5 |
| Judgement 0 | No database schema or poorly designed structure |
| Judgement 1 | Basic schema with some normalization issues |
| Judgement 2 | Well-designed schema with proper relationships and normalization |
| Judgement 3 | Excellent schema design with optimal structure and data integrity |

### 2. CSV data import functionality

| Field | Value |
| --- | --- |
| Sub-criterion | Database Design and Implementation |
| Type | measurement |
| Max mark | 1 |
| Extra description | Successful import of initial data from provided CSV files |
| Calculation | options |

### 3. Secure user authentication system with password hashing

| Field | Value |
| --- | --- |
| Sub-criterion | User Authentication and Security |
| Type | judgement |
| Max mark | 2 |
| Judgement 0 | No authentication system or insecure implementation |
| Judgement 1 | Basic authentication with some security measures |
| Judgement 2 | Secure authentication with proper password hashing |
| Judgement 3 | Excellent authentication with comprehensive security measures |

### 4. Role-based access control (dineEasyAdmin vs restaurantAdmin)

| Field | Value |
| --- | --- |
| Sub-criterion | User Authentication and Security |
| Type | measurement |
| Max mark | 1 |
| Extra description | Proper implementation of two user roles with appropriate access restrictions |
| Calculation | options |

### 5. Account lockout mechanism after failed login attempts

| Field | Value |
| --- | --- |
| Sub-criterion | User Authentication and Security |
| Type | measurement |
| Max mark | 1 |
| Extra description | Lock accounts after 3 failed attempts for 30 seconds |
| Calculation | pass-or-fail |

### 6. OWASP security guidelines implementation

| Field | Value |
| --- | --- |
| Sub-criterion | User Authentication and Security |
| Type | measurement |
| Max mark | 1 |
| Extra description | Protection against SQL injection, XSS, and CSRF attacks |
| Calculation | options |

### 7. CRUD operations for menu items

| Field | Value |
| --- | --- |
| Sub-criterion | Menu Management System |
| Type | judgement |
| Max mark | 2 |
| Judgement 0 | No menu management functionality |
| Judgement 1 | Basic CRUD with limited functionality |
| Judgement 2 | Good CRUD operations with proper validation |
| Judgement 3 | Excellent CRUD system with comprehensive features |

### 8. Menu item data fields (name and price)

| Field | Value |
| --- | --- |
| Sub-criterion | Menu Management System |
| Type | measurement |
| Max mark | 1 |
| Extra description | Proper handling of dish names and prices |
| Calculation | options |

### 9. Reservation confirmation and cancellation

| Field | Value |
| --- | --- |
| Sub-criterion | Reservation Handling System |
| Type | measurement |
| Max mark | 1 |
| Extra description | Ability to confirm or cancel reservations |
| Calculation | pass-or-fail |

### 10. Server-side framework utilization

| Field | Value |
| --- | --- |
| Sub-criterion | Code Quality and Organization |
| Type | measurement |
| Max mark | 1 |
| Extra description | Proper use of chosen server-side framework features |
| Calculation | options |

---

## s17-hu_ro_training_2023-module_c-commercial_api_provider

- WSOS 5 label in scheme: *Back-End Development*
- Aspects: **9**
- Source: `s17-hu_ro_training_2023-module_c-commercial_api_provider\marking\marking-scheme.json`

### 1. REST API server is properly set up and configured

| Field | Value |
| --- | --- |
| Sub-criterion | API Gateway Implementation |
| Type | measurement |
| Max mark | 2 |
| Extra description | Express.js or similar framework is used with proper middleware configuration for JSON parsing, CORS, and other settings |
| Calculation | pass-or-fail |

### 2. All required API endpoints are implemented

| Field | Value |
| --- | --- |
| Sub-criterion | API Gateway Implementation |
| Type | measurement |
| Max mark | 3 |
| Extra description | API endpoints for authentication, restaurant search, detailed views, orders, and reviews are implemented according to specification |
| Calculation | pass-or-fail |

### 3. Authentication and authorization mechanisms are implemented

| Field | Value |
| --- | --- |
| Sub-criterion | Security Implementation |
| Type | measurement |
| Max mark | 3 |
| Extra description | Bearer token authentication is properly implemented with validation against authentication service |
| Calculation | pass-or-fail |

### 4. Data validation prevents security vulnerabilities

| Field | Value |
| --- | --- |
| Sub-criterion | Security Implementation |
| Type | measurement |
| Max mark | 2 |
| Extra description | Input validation is implemented to prevent injection attacks and other security issues |
| Calculation | pass-or-fail |

### 5. Caching mechanisms are implemented

| Field | Value |
| --- | --- |
| Sub-criterion | Reliability and Performance |
| Type | measurement |
| Max mark | 2 |
| Extra description | Proper caching is implemented to improve response times and reduce dependency on unsecure APIs |
| Calculation | pass-or-fail |

### 6. Rate limiting is implemented

| Field | Value |
| --- | --- |
| Sub-criterion | Reliability and Performance |
| Type | measurement |
| Max mark | 1 |
| Extra description | Rate limiting mechanisms are in place to prevent API abuse |
| Calculation | pass-or-fail |

### 7. Error handling and graceful degradation

| Field | Value |
| --- | --- |
| Sub-criterion | Reliability and Performance |
| Type | measurement |
| Max mark | 2 |
| Extra description | API provides meaningful responses when underlying services are unavailable |
| Calculation | pass-or-fail |

### 8. Proper integration with unsecure APIs

| Field | Value |
| --- | --- |
| Sub-criterion | Integration and Data Flow |
| Type | measurement |
| Max mark | 2 |
| Extra description | API successfully fetches and processes data from provided unsecure services |
| Calculation | pass-or-fail |

### 9. Comprehensive logging is implemented

| Field | Value |
| --- | --- |
| Sub-criterion | Integration and Data Flow |
| Type | measurement |
| Max mark | 1 |
| Extra description | All requests and errors are properly logged for debugging and monitoring |
| Calculation | pass-or-fail |

---

## s17-ts2025-module_b-bicycle-rental-admin

- WSOS 5 label in scheme: *Back-end development*
- Aspects: **50**
- Source: `s17-ts2025-module_b-bicycle-rental-admin\marking\marking-scheme.json`

### 1. DB-dump is provided and contains FK-constraints and correct columns

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | 0.25 given if DB-dump is provided but not correctly containing FK-constraints |
| Calculation | pass-or-fail |

### 2. The CSV data has been imported into the database.

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 3. Database column type is reasonable defined

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | All columns use string type or text type |
| Judgement 1 | Columns are basically in their related types. But numbers for int/float may not be optimized for operation. |
| Judgement 2 | Columns are in their related types. For example, int, float, text, boolean, JSON. And are in proper length. |
| Judgement 3 | Columns are in their related types. And the length of each type matches the use case. Status column are easy to understand and maintained. Including straightforward column value, or with comments. |

### 4. DB structure is normalized

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | Not normalized, a lot of redundant data/fields |
| Judgement 1 | Normalized with second normal form |
| Judgement 2 | Normalized with third normal form (partial) |
| Judgement 3 | Normalized with third normal form (full) |

### 5. The login page is available

| Field | Value |
| --- | --- |
| Sub-criterion | Login |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 6. It is not possible to access the application pages without authentication

| Field | Value |
| --- | --- |
| Sub-criterion | Login |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Except for the Login page. Deduct 0.25 for each error or mismatch |
| Calculation | pass-or-fail |

### 7. Login is only possible using email or phone number and password

| Field | Value |
| --- | --- |
| Sub-criterion | Login |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 for each error or mismatch |
| Calculation | pass-or-fail |

### 8. After logging in, the user is redirected to the categories page

| Field | Value |
| --- | --- |
| Sub-criterion | Login |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 9. Test accounts have been created

| Field | Value |
| --- | --- |
| Sub-criterion | Login |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | admin1@gmail.com and admin2@gmail.com. Deduct 0.25 for each error or mismatch |
| Calculation | pass-or-fail |

### 10. There is an option to log out of the account

| Field | Value |
| --- | --- |
| Sub-criterion | Login |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 11. The error message for invalid login data contains only a general phrase

| Field | Value |
| --- | --- |
| Sub-criterion | Login |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Without specifying particular attributes |
| Calculation | pass-or-fail |

### 12. A page with the list of bicycle categories has been implemented

| Field | Value |
| --- | --- |
| Sub-criterion | Categories |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 13. Only the categories of the authorized user are displayed

| Field | Value |
| --- | --- |
| Sub-criterion | Categories |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 14. It is possible to create a new category

| Field | Value |
| --- | --- |
| Sub-criterion | Categories |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 15. An existing category can be edited

| Field | Value |
| --- | --- |
| Sub-criterion | Categories |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 16. It is not possible to save a category without specifying a name

| Field | Value |
| --- | --- |
| Sub-criterion | Categories |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 17. A category without bicycles can be deleted

| Field | Value |
| --- | --- |
| Sub-criterion | Categories |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 18. A page with the list of bicycles has been implemented

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 19. The page displays all bicycles related to the selected category

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 20. Bicycles can be added

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The name and quantity are required |
| Calculation | pass-or-fail |

### 21. The created bicycles (copies) are displayed in the list according to the specified quantity

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 22. Each bicycle must have a unique slug based on its name

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | If a bicycle with the same name already exists, a free sequential number is added at the end. For example: super-bicycle → super-bicycle-01. Deduct 0.25 for each error or mismatch |
| Calculation | pass-or-fail |

### 23. It is possible to edit the attributes of a selected bicycle

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 24. The status of a selected bicycle can be changed

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 25. If a bicycle is already booked or rented, its status cannot be changed to 'unavailable'

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 26. A bicycle can only be deleted if its status is 'unavailable'

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 for a mismatch |
| Calculation | pass-or-fail |

### 27. Validation error messages are displayed when performing actions

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 1 |
| Extra description | Deduct 0.25 for a missing message |
| Calculation | pass-or-fail |

### 28. The coordinates (x, y) of the bicycle image center are determined automatically and randomly

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | With an offset of 10px from each other on a 5000x5000 map. They must not overlap. Deduct 0.25 for each error or mismatch |
| Calculation | pass-or-fail |

### 29. It is possible to add rental conditions for a category

| Field | Value |
| --- | --- |
| Sub-criterion | Rent Conditions |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 30. In the condition, weather values can be set from the provided list (one or more)

| Field | Value |
| --- | --- |
| Sub-criterion | Rent Conditions |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 for a mismatch |
| Calculation | pass-or-fail |

### 31. In the condition, a minimum user rating can be set

| Field | Value |
| --- | --- |
| Sub-criterion | Rent Conditions |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 32. It is possible to view the list of tariffs

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 33. It is possible to add a tariff for each category (name, type, price)

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 for a mismatch |
| Calculation | pass-or-fail |

### 34. If the dynamic type is selected, a minimum and maximum price can be set

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 35. It is not allowed to create duplicate tariffs with the same type and price

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 36. A tariff can be archived

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | It must be marked differently in the list. Deduct 0.25 for a mismatch |
| Calculation | pass-or-fail |

### 37. It is possible to view the rental history of a bicycle on a separate page

| Field | Value |
| --- | --- |
| Sub-criterion | History |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 38. The list displays the required data for each bicycle

| Field | Value |
| --- | --- |
| Sub-criterion | History |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Renter's name and phone number, rental start date, rental end date, wear percentage at the end of the rental with user-provided photos, final price, given rating (nullable). Deduct 0.25 if missing. |
| Calculation | pass-or-fail |

### 39. The list can be filtered by date

| Field | Value |
| --- | --- |
| Sub-criterion | History |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 40. The list is displayed with pagination

| Field | Value |
| --- | --- |
| Sub-criterion | History |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | 10 values per page. Control buttons: Previous, Next, Page numbers (with ellipsis if there are more than 3 pages). Deduct 0.25 for each absence or mismatch |
| Calculation | pass-or-fail |

### 41. The list can be exported to CSV

| Field | Value |
| --- | --- |
| Sub-criterion | History |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | When clicking the Export button |
| Calculation | pass-or-fail |

### 42. The exported list contains all data

| Field | Value |
| --- | --- |
| Sub-criterion | History |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | The filter is applied. The file name is: exports_history-Y-m-d.csv (for example, exports_history_2025-09-06.csv). Deduct 0.25 for each error or mismatch |
| Calculation | pass-or-fail |

### 43. A page displaying moderation requests has been implemented

| Field | Value |
| --- | --- |
| Sub-criterion | Applications |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 44. Each request contains the required data

| Field | Value |
| --- | --- |
| Sub-criterion | Applications |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Name, Phone, Email. Deduct 0.25 if missing |
| Calculation | pass-or-fail |

### 45. It is possible to approve a request

| Field | Value |
| --- | --- |
| Sub-criterion | Applications |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 46. It is possible to reject a request

| Field | Value |
| --- | --- |
| Sub-criterion | Applications |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 47. It is possible to view all created promo codes for the selected category

| Field | Value |
| --- | --- |
| Sub-criterion | Promo codes |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 48. It is possible to add a promo code for a category

| Field | Value |
| --- | --- |
| Sub-criterion | Promo codes |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Expiration time, free usage minutes, or discount percentage. Deduct 0.25 if missing or mismatched |
| Calculation | pass-or-fail |

### 49. A promo code consists of a random string

| Field | Value |
| --- | --- |
| Sub-criterion | Promo codes |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | From 5 to 10 characters, only letters and digits (uppercase). Deduct 0.25 for a mismatch |
| Calculation | pass-or-fail |

### 50. It is possible to delete a promo code

| Field | Value |
| --- | --- |
| Sub-criterion | Promo codes |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

---

## s17-ts2025-module_c-bicycle-rental-api

- WSOS 5 label in scheme: *Back-end development*
- Aspects: **84**
- Source: `s17-ts2025-module_c-bicycle-rental-api\marking\marking-scheme.json`

### 1. shouldReturnAccessToken_whenCredentialsAreValid

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 2. shouldReturnBadRequest_whenNoDataProvided

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 3. shouldReturnUnauthorized_whenCredentialsAreInvalid

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 4. shouldLogoutUser_whenTokenIsValid

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 5. shouldReturnUnauthorized_whenTokenIsMissing

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 6. shouldReturnUnauthorized_whenTokenIsExpired

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 7. shouldRegisterAccount_whenDataIsValid

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 8. shouldReturnUnauthorized_whenEmailIsDuplicate

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 9. shouldReturnBadRequest_whenRequiredFieldsAreMissing

| Field | Value |
| --- | --- |
| Sub-criterion | Auth |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 10. shouldReturnBicycle_whenIdIsValid

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 11. shouldReturnNotFound_whenIdDoesNotExist

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 12. shouldReturnUnauthorized_whenTokenIsMissing

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 13. shouldReturnUnauthorized_whenTokenIsInvalid

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 14. shouldRateRental_whenDataIsValid

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 15. shouldReturnForbidden_whenRentalAlreadyRated

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 16. shouldReturnForbidden_whenOwnerHasInsufficientFunds

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 17. shouldReturnNotFound_whenRentalIdDoesNotExist

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 18. shouldReturnUnauthorized_whenTokenIsMissing

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 19. shouldReturnUnauthorized_whenTokenIsInvalid

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 20. repair_withTypeWash_shouldDecreaseWearBy10

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 21. repair_withTypeRepair_shouldDecreaseWearBy25

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 22. repair_withTypeTires_shouldResetWearTo0

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 23. repair_withTypeChain_shouldDecreaseWearBy30

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 24. repair_withInsufficientBalance_shouldReturnConflict

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 25. repair_withInvalidBicycleId_shouldReturnNotFound

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 26. repair_withoutAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 27. repair_withInvalidAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 28. retrieve_withValidBicycleId_shouldReturnRentals

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 29. retrieve_withInvalidBicycleId_shouldReturnNotFound

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 30. retrieve_withoutAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 31. retrieve_withInvalidAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 32. retrieve_withValidAuthToken_shouldReturnBicycles

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 33. retrieve_withoutAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 34. retrieve_withInvalidAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Bicycles |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 35. completeRental_withValidAuthToken_shouldSucceed

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 36. completeRental_shouldReturnBadRequest_whenCompletingWithoutPhotos

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 37. completeRental_shouldReturnBadRequest_whenCompletingWithInvalidRating

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 38. completeRental_withoutAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 39. completeRental_withInvalidAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 40. rentBicycle_withValidAuthToken_shouldSucceed

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 41. rentBicycle_whenAlreadyRenting_shouldReturnConflict

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 42. rentBicycle_whenBicycleAlreadyTaken_shouldReturnConflict

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 43. rentBicycle_shouldReturnNotFound_whenPromoCodeDoesNotExist

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 44. rentBicycle_shouldReturnConflict_whenPromoCodeIsInvalid

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 45. rentBicycle_shouldReturnConflict_whenUserHasInsufficientFunds

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 46. rentBicycle_shouldReturnConflict_whenBicycleHasHighWearPercentage

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 47. rentBicycle_withoutAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 48. rentBicycle_withInvalidAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Rental |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 49. getPrice_withStaticTariff_shouldReturnFixedPrice

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 50. getPrice_withDynamicTariff_shouldReturnCalculatedPrice

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 51. getPrice_withoutAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 52. getPrice_withInvalidAuthToken_shouldReturnUnauthorized

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 53. shouldReturnTariffs_whenUserIsAuthenticated

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 54. shouldReturnUnauthorized_whenNoTokenProvided

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 55. shouldReturnUnauthorized_whenInvalidTokenProvided

| Field | Value |
| --- | --- |
| Sub-criterion | Tariffs |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 56. shouldIncreaseBalanceAndCreateTransaction_whenTopUpWithValidAmount

| Field | Value |
| --- | --- |
| Sub-criterion | Transactions |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 57. shouldReturnBadRequest_whenTopUpWithZeroAmount

| Field | Value |
| --- | --- |
| Sub-criterion | Transactions |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 58. shouldReturnUnauthorized_whenRepairBicycleWithoutToken

| Field | Value |
| --- | --- |
| Sub-criterion | Transactions |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 59. shouldReturnUnauthorized_whenRepairBicycleWithInvalidToken

| Field | Value |
| --- | --- |
| Sub-criterion | Transactions |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 60. shouldDecreaseBalanceAndCreateTransaction_whenWithdrawWithValidAmount

| Field | Value |
| --- | --- |
| Sub-criterion | Transactions |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 61. shouldReturnUnauthorized_whenRepairBicycleWithoutToken

| Field | Value |
| --- | --- |
| Sub-criterion | Transactions |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 62. shouldReturnUnauthorized_whenRepairBicycleWithInvalidToken

| Field | Value |
| --- | --- |
| Sub-criterion | Transactions |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 63. shouldReturnNull_whenUserHasNoCurrentRental

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 64. shouldReturnUnauthorized_whenRequestWithoutToken

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 65. shouldReturnUnauthorized_whenRequestWithInvalidToken

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 66. bicycles_shouldReturnUserBicycles_whenUserIsAuthenticated

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 67. bicycles_shouldReturnUnauthorized_whenRequestWithoutToken

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 68. bicycles_shouldReturnUnauthorized_whenRequestWithInvalidToken

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 69. currentUser_shouldReturnCurrentUser_whenUserIsAuthenticated

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 70. currentUser_shouldReturnUnauthorized_whenRequestWithoutToken

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 71. currentUser_shouldReturnUnauthorized_whenRequestWithInvalidToken

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 72. currentWork_shouldReturnEmptyObject_whenUserHasNoWork

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 73. currentWork_shouldRetrieveCurrentWork_whenUserHasActiveWork

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 74. currentWork_shouldReturnUnauthorized_whenRequestWithoutToken

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 75. currentWork_shouldReturnUnauthorized_whenRequestWithInvalidToken

| Field | Value |
| --- | --- |
| Sub-criterion | Users |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 76. shouldReturnWorks_whenUserIsAuthenticated

| Field | Value |
| --- | --- |
| Sub-criterion | Works |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 77. shouldReturnUnauthorized_whenRequestWithoutToken

| Field | Value |
| --- | --- |
| Sub-criterion | Works |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 78. shouldReturnUnauthorized_whenRequestWithInvalidToken

| Field | Value |
| --- | --- |
| Sub-criterion | Works |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 79. shouldSendWorkRequest_whenUserIsAuthenticated

| Field | Value |
| --- | --- |
| Sub-criterion | Works |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 80. shouldReturnUnauthorized_whenWorksIdRequestWithoutToken

| Field | Value |
| --- | --- |
| Sub-criterion | Works |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 81. shouldReturnUnauthorized_whenWorksIdRequestWithInvalidToken

| Field | Value |
| --- | --- |
| Sub-criterion | Works |
| Type | measurement |
| Max mark | 0.2 |
| Calculation | pass-or-fail |

### 82. shouldReturnTrafficData_whenRequestIsValid

| Field | Value |
| --- | --- |
| Sub-criterion | External Services |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 83. shouldReturnWeatherData_whenRequestIsValid

| Field | Value |
| --- | --- |
| Sub-criterion | External Services |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 84. shouldRetrieveOauthLink_whenRequestIsValid

| Field | Value |
| --- | --- |
| Sub-criterion | External Services |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Check manually |
| Calculation | pass-or-fail |

---

## s17-ws2022-module_e-virtual-word-interactive-game

- WSOS 5 label in scheme: *Back-end development*
- Aspects: **2**
- Source: `s17-ws2022-module_e-virtual-word-interactive-game\marking\marking-scheme.json`

### 1. Score saving via API

| Field | Value |
| --- | --- |
| Sub-criterion | Learning Activities |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | When finishing the game, total count of correct quiz is sent. As long as postMessage send, no guarantee of success |
| Calculation | pass-or-fail |

### 2. When score saving fails, an error message shows on the user interface

| Field | Value |
| --- | --- |
| Sub-criterion | Learning Activities |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

---

## s17-ws2024-module_a-mini-speed-test-projects

- WSOS 5 label in scheme: *Back-end development*
- Aspects: **3**
- Source: `s17-ws2024-module_a-mini-speed-test-projects\marking\marking-scheme.json`

### 1. Speed Test Project C1 for Back-end Development

| Field | Value |
| --- | --- |
| Sub-criterion | Back-end Development |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | each error of not following test project deduct 0.25 |
| Calculation | pass-or-fail |

### 2. Speed Test Project C9 for Back-end Development

| Field | Value |
| --- | --- |
| Sub-criterion | Back-end Development |
| Type | measurement |
| Max mark | 1 |
| Extra description | each error of not following test project deduct 0.25 |
| Calculation | pass-or-fail |

### 3. Speed Test Project C11 for Back-end Development

| Field | Value |
| --- | --- |
| Sub-criterion | Back-end Development |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | each error of not following test project deduct 0.25 |
| Calculation | pass-or-fail |

---

## s17-ws2024-module_b-product-management

- WSOS 5 label in scheme: *Back-end development*
- Aspects: **44**
- Source: `s17-ws2024-module_b-product-management\marking\marking-scheme.json`

### 1. Admin login page is at path /login

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 2. Admin can sign-in by using the login passphrase

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 3. Admin can view the list of companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | With column as described, deduct 0.25 per missing field. List include deactivated companies |
| Calculation | pass-or-fail |

### 4. Admin can view a particular company after clicking on the companies list

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 5. Admin can view the associated products of a particular company in the company showing page

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 6. Admin can create companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 7. Admin can update companies information

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 8. Admin can mark a company as deactivated

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 9. All fields in companies are available for create

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 per error. |
| Calculation | options |

### 10. When a company is deactivated, all the associated products are marked as hidden

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 11. There is a separated list for listing deactivated companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 12. No one can delete a company on the web interface

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Even if the company is deactivated, company cannot be deleted |
| Calculation | pass-or-fail |

### 13. DB-dump is provided and contains FK-constraints and correct columns

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | 0.25 given if DB-dump is provided but not correctly containing FK-constraints |
| Calculation | pass-or-fail |

### 14. GTIN field is indexed in products table

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 15. Database column type is reasonable defined

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | All columns use string type or text type |
| Judgement 1 | Columns are basically in their related types. But numbers for int/float may not be optimized for operation. |
| Judgement 2 | Columns are in their related types. For example, int, float, text, boolean, JSON. And are in proper length. |
| Judgement 3 | Columns are in their related types. And the length of each type matches the use case. Status column are easy to understand and maintained. Including straightforward column value, or with comments. |

### 16. DB structure is normalized

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | Not normalized, a lot of redundant data/fields |
| Judgement 1 | Normalized with second normal form |
| Judgement 2 | Normalized with third normal form (partial) |
| Judgement 3 | Normalized with third normal form (full) |

### 17. Able to load the verification page

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | There is title, bulk-input text area, and a submit button. Deduct 0.25 per missing. |
| Calculation | pass-or-fail |

### 18. Can input multiple GTIN code and submit to see result

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 19. The result page data is correct

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 20. The result page shows an "All corrects" and green tick when no any GTIN verification error

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 21. The products API output can list JSON

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | GET /products.json |
| Calculation | pass-or-fail |

### 22. The products list API is correct

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 1.0 |
| Extra description | all columns for products and data is correct. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 23. The pagination of products list API is correct

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | All columns for pagination is correct. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 24. A single product can be queried via JSON

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | GET /products/GTIN.json |
| Calculation | pass-or-fail |

### 25. The single product fields are correct according to the Test Project

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 26. The product API returns 404 when accessing a non-exist product

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | GET /products/GTIN.json that GTIN does not exist |
| Calculation | pass-or-fail |

### 27. The product API returns 404 when accessing a hidden product

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | GET /products/GTIN.json when that product is marked as hidden |
| Calculation | pass-or-fail |

### 28. The products list JSON allows querying by using keyword.

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | GET /products.json?query=KEYWORD. Search name, name in French, description, description in French. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 29. Able to display products in a page via /products

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | No need to check if matching DB. |
| Calculation | pass-or-fail |

### 30. The displayed products are dynamic loaded from database

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 31. A specific product can be viewed in web page by admin only /products/GTIN

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | By admin only, not for public. Deduct 0.25 if URL format not correct |
| Calculation | pass-or-fail |

### 32. Products can be marked as hidden by admin

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 33. Hidden products can be permanently deleted

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Only products that are already hidden can be operated. Deduct 0.25 if any products can be deleted. |
| Calculation | pass-or-fail |

### 34. When accessing the /products/new URL, the create product form is present

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 35. Newly created product can be saved to database

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 36. The product management functions are only visible and operable after admin login

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 37. Accessing product management functions without login results in 401 error

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 38. Products has two languages of information, English and French

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | for the name, description fields |
| Calculation | pass-or-fail |

### 39. The form submission checks if GTIN is 13 or 14 length

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Server-side Form verification |
| Calculation | pass-or-fail |

### 40. Admin can upload image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 1.0 |
| Calculation | pass-or-fail |

### 41. Admin can change image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 1.0 |
| Calculation | pass-or-fail |

### 42. Admin can remove the uploaded image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 43. There is a default placeholder image when no image is uploaded

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 44. A product's public page can be reached by accessing the /01/GTIN

| Field | Value |
| --- | --- |
| Sub-criterion | Public facing product page |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

---

## s17-ws2024-module_c-lyon-heritage-site

- WSOS 5 label in scheme: *Back-end development*
- Aspects: **44**
- Source: `s17-ws2024-module_c-lyon-heritage-site\marking\marking-scheme.json`

### 1. Admin login page is at path /login

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 2. Admin can sign-in by using the login passphrase

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 3. Admin can view the list of companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | With column as described, deduct 0.25 per missing field. List include deactivated companies |
| Calculation | pass-or-fail |

### 4. Admin can view a particular company after clicking on the companies list

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 5. Admin can view the associated products of a particular company in the company showing page

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 6. Admin can create companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 7. Admin can update companies information

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 8. Admin can mark a company as deactivated

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 9. All fields in companies are available for create

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 per error. |
| Calculation | options |

### 10. When a company is deactivated, all the associated products are marked as hidden

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 11. There is a separated list for listing deactivated companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 12. No one can delete a company on the web interface

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Even if the company is deactivated, company cannot be deleted |
| Calculation | pass-or-fail |

### 13. DB-dump is provided and contains FK-constraints and correct columns

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | 0.25 given if DB-dump is provided but not correctly containing FK-constraints |
| Calculation | pass-or-fail |

### 14. GTIN field is indexed in products table

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 15. Database column type is reasonable defined

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | All columns use string type or text type |
| Judgement 1 | Columns are basically in their related types. But numbers for int/float may not be optimized for operation. |
| Judgement 2 | Columns are in their related types. For example, int, float, text, boolean, JSON. And are in proper length. |
| Judgement 3 | Columns are in their related types. And the length of each type matches the use case. Status column are easy to understand and maintained. Including straightforward column value, or with comments. |

### 16. DB structure is normalized

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | Not normalized, a lot of redundant data/fields |
| Judgement 1 | Normalized with second normal form |
| Judgement 2 | Normalized with third normal form (partial) |
| Judgement 3 | Normalized with third normal form (full) |

### 17. Able to load the verification page

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | There is title, bulk-input text area, and a submit button. Deduct 0.25 per missing. |
| Calculation | pass-or-fail |

### 18. Can input multiple GTIN code and submit to see result

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 19. The result page data is correct

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 20. The result page shows an "All corrects" and green tick when no any GTIN verification error

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 21. The products API output can list JSON

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | GET /products.json |
| Calculation | pass-or-fail |

### 22. The products list API is correct

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 1.0 |
| Extra description | all columns for products and data is correct. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 23. The pagination of products list API is correct

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | All columns for pagination is correct. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 24. A single product can be queried via JSON

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | GET /products/GTIN.json |
| Calculation | pass-or-fail |

### 25. The single product fields are correct according to the Test Project

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 26. The product API returns 404 when accessing a non-exist product

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | GET /products/GTIN.json that GTIN does not exist |
| Calculation | pass-or-fail |

### 27. The product API returns 404 when accessing a hidden product

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | GET /products/GTIN.json when that product is marked as hidden |
| Calculation | pass-or-fail |

### 28. The products list JSON allows querying by using keyword.

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | GET /products.json?query=KEYWORD. Search name, name in French, description, description in French. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 29. Able to display products in a page via /products

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | No need to check if matching DB. |
| Calculation | pass-or-fail |

### 30. The displayed products are dynamic loaded from database

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 31. A specific product can be viewed in web page by admin only /products/GTIN

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | By admin only, not for public. Deduct 0.25 if URL format not correct |
| Calculation | pass-or-fail |

### 32. Products can be marked as hidden by admin

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 33. Hidden products can be permanently deleted

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Only products that are already hidden can be operated. Deduct 0.25 if any products can be deleted. |
| Calculation | pass-or-fail |

### 34. When accessing the /products/new URL, the create product form is present

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 35. Newly created product can be saved to database

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 36. The product management functions are only visible and operable after admin login

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 37. Accessing product management functions without login results in 401 error

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 38. Products has two languages of information, English and French

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | for the name, description fields |
| Calculation | pass-or-fail |

### 39. The form submission checks if GTIN is 13 or 14 length

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Server-side Form verification |
| Calculation | pass-or-fail |

### 40. Admin can upload image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 1.0 |
| Calculation | pass-or-fail |

### 41. Admin can change image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 1.0 |
| Calculation | pass-or-fail |

### 42. Admin can remove the uploaded image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 43. There is a default placeholder image when no image is uploaded

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 44. A product's public page can be reached by accessing the /01/GTIN

| Field | Value |
| --- | --- |
| Sub-criterion | Public facing product page |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

---

## s17-ws2024-module_d-lyon-mobile-web-service

- WSOS 5 label in scheme: *Back-end development*
- Aspects: **44**
- Source: `s17-ws2024-module_d-lyon-mobile-web-service\marking\marking-scheme.json`

### 1. Admin login page is at path /login

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 2. Admin can sign-in by using the login passphrase

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 3. Admin can view the list of companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | With column as described, deduct 0.25 per missing field. List include deactivated companies |
| Calculation | pass-or-fail |

### 4. Admin can view a particular company after clicking on the companies list

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 5. Admin can view the associated products of a particular company in the company showing page

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 6. Admin can create companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 7. Admin can update companies information

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 8. Admin can mark a company as deactivated

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 9. All fields in companies are available for create

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 per error. |
| Calculation | options |

### 10. When a company is deactivated, all the associated products are marked as hidden

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 11. There is a separated list for listing deactivated companies

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 12. No one can delete a company on the web interface

| Field | Value |
| --- | --- |
| Sub-criterion | Companies (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Even if the company is deactivated, company cannot be deleted |
| Calculation | pass-or-fail |

### 13. DB-dump is provided and contains FK-constraints and correct columns

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | 0.25 given if DB-dump is provided but not correctly containing FK-constraints |
| Calculation | pass-or-fail |

### 14. GTIN field is indexed in products table

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 15. Database column type is reasonable defined

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | All columns use string type or text type |
| Judgement 1 | Columns are basically in their related types. But numbers for int/float may not be optimized for operation. |
| Judgement 2 | Columns are in their related types. For example, int, float, text, boolean, JSON. And are in proper length. |
| Judgement 3 | Columns are in their related types. And the length of each type matches the use case. Status column are easy to understand and maintained. Including straightforward column value, or with comments. |

### 16. DB structure is normalized

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | Not normalized, a lot of redundant data/fields |
| Judgement 1 | Normalized with second normal form |
| Judgement 2 | Normalized with third normal form (partial) |
| Judgement 3 | Normalized with third normal form (full) |

### 17. Able to load the verification page

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | There is title, bulk-input text area, and a submit button. Deduct 0.25 per missing. |
| Calculation | pass-or-fail |

### 18. Can input multiple GTIN code and submit to see result

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 19. The result page data is correct

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 20. The result page shows an "All corrects" and green tick when no any GTIN verification error

| Field | Value |
| --- | --- |
| Sub-criterion | GTIN Query and Verification |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 21. The products API output can list JSON

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | GET /products.json |
| Calculation | pass-or-fail |

### 22. The products list API is correct

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 1.0 |
| Extra description | all columns for products and data is correct. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 23. The pagination of products list API is correct

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | All columns for pagination is correct. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 24. A single product can be queried via JSON

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | GET /products/GTIN.json |
| Calculation | pass-or-fail |

### 25. The single product fields are correct according to the Test Project

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 26. The product API returns 404 when accessing a non-exist product

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | GET /products/GTIN.json that GTIN does not exist |
| Calculation | pass-or-fail |

### 27. The product API returns 404 when accessing a hidden product

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | GET /products/GTIN.json when that product is marked as hidden |
| Calculation | pass-or-fail |

### 28. The products list JSON allows querying by using keyword.

| Field | Value |
| --- | --- |
| Sub-criterion | Products API |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | GET /products.json?query=KEYWORD. Search name, name in French, description, description in French. Deduct 0.25 per error |
| Calculation | pass-or-fail |

### 29. Able to display products in a page via /products

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | No need to check if matching DB. |
| Calculation | pass-or-fail |

### 30. The displayed products are dynamic loaded from database

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 31. A specific product can be viewed in web page by admin only /products/GTIN

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | By admin only, not for public. Deduct 0.25 if URL format not correct |
| Calculation | pass-or-fail |

### 32. Products can be marked as hidden by admin

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 33. Hidden products can be permanently deleted

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.75 |
| Extra description | Only products that are already hidden can be operated. Deduct 0.25 if any products can be deleted. |
| Calculation | pass-or-fail |

### 34. When accessing the /products/new URL, the create product form is present

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 35. Newly created product can be saved to database

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 36. The product management functions are only visible and operable after admin login

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 37. Accessing product management functions without login results in 401 error

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 38. Products has two languages of information, English and French

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | for the name, description fields |
| Calculation | pass-or-fail |

### 39. The form submission checks if GTIN is 13 or 14 length

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Server-side Form verification |
| Calculation | pass-or-fail |

### 40. Admin can upload image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 1.0 |
| Calculation | pass-or-fail |

### 41. Admin can change image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 1.0 |
| Calculation | pass-or-fail |

### 42. Admin can remove the uploaded image

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 43. There is a default placeholder image when no image is uploaded

| Field | Value |
| --- | --- |
| Sub-criterion | Products CRUD (Admin) |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 44. A product's public page can be reached by accessing the /01/GTIN

| Field | Value |
| --- | --- |
| Sub-criterion | Public facing product page |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

---

## Summary

- Marking schemes scanned: **33**
- Projects with WSOS 5 aspects: **18**
- Total WSOS 5 aspects: **477**

### Projects with no WSOS 5 aspects (or no usable scheme)

- s17-es2021-module_c-php-api-development
- s17-es2023-module_d-interactive-frontend-using-an-api
- s17-es2025-module_a-static-website-design
- s17-es2025-module_a-static-website-design-1
- s17-es2025-module_d-interactive-frontend-using-an-api
- s17-es2025-training-hu-module_a-design_and_implementation
- s17-es2025-training-hu-module_d-interactive-frontend-using-an-api
- s17-es2027-hu-r2-module_b-skillshare-academy-rest-api-frontend
- s17-es2027-hu-r3-module_d-ssa-lms-frontend
- s17-hu_ro_training_2023-module_a-dinease-showcase-website
- s17-hu_ro_training_2023-module_d-interactive_guest_experience
- s17-ts2025-module_a-static-website-design
- s17-ts2025-module_d-bicycle-rental-frontend
- s17-ws2026-tarining-memory-game-presentation
- s17-wskz2026-module-d
