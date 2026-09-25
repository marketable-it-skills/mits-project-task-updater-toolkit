# WSOS 2 — Communication and interpersonal skills

Collected marking aspects from `project-tasks/references` where `wsosSection` is **2**.

**Scope:** 33 `marking-scheme.json` files scanned → **19 projects / 62 aspects**. Labels seen: *Communication and interpersonal skills* (32).

## Catalogue by theme

| Theme | Typical aspects | Example max marks |
| --- | --- | --- |
| HTTP / API error contracts | Correct status codes (400/401/403/404/409/422/500/503); JSON error body; content-type | 0.25–1.25 |
| Auth & access feedback | Missing/invalid/expired token → 401; unauthorized redirect to login | 0.5–1.5 |
| User-facing error UX | Clear error messages; 400/404/500 shown to user (judgement + measurement) | 0.25–1.25 |
| Shared chrome / IA | Header/logo, nav links, consistent header/footer, copyright | 0.25–0.5 |
| Docs & presentation | README/setup instructions; content presentation; professional communication | 0.75–1.5 |
| Spec compliance (path/media) | Base path, path extension, content type match spec | 0.25 |
| Misc / legacy placement | Reachable URL, ER diagram, no frameworks, index/thumbnails (often WSOS 1-like) | 0.25–1.0 |

### All WSOS 2 aspect titles

- `measurement` 0.5 — Authentication error response *(s17-es2023-module_c-commercial-open-api)*
- `measurement` 0.5 — AI Service returns unexpected error *(s17-es2023-module_c-commercial-open-api)*
- `judgement` 0.5 — Tests are easy to understand *(s17-es2023-module_e-advanced-web-development)*
- `measurement` 0.25 — API was implemented to follow spec: Base path *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — API was implemented to follow spec: path extension *(s17-es2025-module_c-rest-api)*
- `measurement` 0.25 — API was implemented to follow spec: content type *(s17-es2025-module_c-rest-api)*
- `measurement` 0.5 — Header contains SkillShare Academy logo *(s17-es2025-training-hu-module_a-design_and_implementation)*
- `measurement` 0.5 — Navigation links to all 4 main pages *(s17-es2025-training-hu-module_a-design_and_implementation)*
- `measurement` 0.5 — Header and navigation are consistent across all pages *(s17-es2025-training-hu-module_a-design_and_implementation)*
- `measurement` 0.25 — Footer includes copyright notice *(s17-es2025-training-hu-module_a-design_and_implementation)*
- `measurement` 0.25 — Footer is consistent across all pages *(s17-es2025-training-hu-module_a-design_and_implementation)*
- `measurement` 0.25 — Login page accessible and functional *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.25 — Invalid login credentials show appropriate error *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.25 — Non-admin users cannot access admin interface *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.25 — Successful login redirects to dashboard *(s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)*
- `measurement` 0.5 — Duplicate email registration returns 400 error *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Login with invalid credentials returns 401 *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Invalid course ID returns 404 error *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Duplicate enrollment returns 409 conflict *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Chapter completion without enrollment returns 403 *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Session booking with insufficient credits returns 403 *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Invalid session ID returns 404 error *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — All endpoints return proper JSON content-type headers *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Success responses use correct HTTP status codes *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 0.5 — Error responses include descriptive message field *(s17-es2025-training-hu-module_c-rest-api)*
- `measurement` 1.25 — 401 returned for missing or invalid token *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — 400 for malformed requests *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — 403 for credit limit exceeded *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — 404 for not found resources *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — 503 when content service unavailable *(s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend)*
- `measurement` 0.5 — 401 Unauthorized redirects to login *(s17-es2027-hu-r2-module_b-skillshare-academy-rest-api-frontend)*
- `measurement` 1.25 — 400, 403, 404, 422, 500 displayed to user *(s17-es2027-hu-r2-module_b-skillshare-academy-rest-api-frontend)*
- `judgement` 0.75 — Clarity of error messages and user feedback *(s17-es2027-hu-r2-module_b-skillshare-academy-rest-api-frontend)*
- `measurement` 0.25 — All error responses return JSON with at least an error and code field *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — 401 Unauthorized returned when Bearer token is missing *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — 401 Unauthorized returned for invalid or malformed token *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — 401 Unauthorized returned for an expired token *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — 403 Forbidden returned when user is not enrolled in the requested course *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.5 — 403 Forbidden returned when a chapter is locked (previous chapter not completed) *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — 404 Not Found returned for a non-existent course *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 0.25 — 404 Not Found returned for a non-existent chapter *(s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend)*
- `measurement` 1.5 — Any 401 Unauthorized response from the content service triggers a full-page navigation to the main SSA dashboard *(s17-es2027-hu-r3-module_d-ssa-lms-frontend)*
- `measurement` 0.25 — 400 Bad Request: a user-friendly error message is displayed *(s17-es2027-hu-r3-module_d-ssa-lms-frontend)*
- `measurement` 0.5 — 404 Not Found: a message informs the user the content is unavailable *(s17-es2027-hu-r3-module_d-ssa-lms-frontend)*
- `measurement` 0.25 — 500 Internal Server Error: a message informs the user of a temporary server problem *(s17-es2027-hu-r3-module_d-ssa-lms-frontend)*
- `judgement` 1 — Clear and effective content presentation *(s17-hu_ro_training_2023-module_a-dinease-showcase-website)*
- `judgement` 1 — Project documentation and setup instructions *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 1 — Professional presentation and communication *(s17-hu_ro_training_2023-module_b-restaurants-owners-hub)*
- `measurement` 0.25 — No server-side or client-side framework is used *(s17-ts2025-module_a-static-website-design)*
- `measurement` 0.25 — Home page is reachable at the index.html *(s17-ts2025-module_a-static-website-design)*
- `measurement` 0.25 — ER diagram schema is provided *(s17-ts2025-module_b-bicycle-rental-admin)*
- `measurement` 0.5 — The HTML5 game page is accessible via required URL *(s17-ws2022-module_e-virtual-word-interactive-game)*
- `measurement` 0.25 — The mini test project is reachable as described *(s17-ws2024-module_a-mini-speed-test-projects)*
- `measurement` 0.25 — Exact mini projects are provided. *(s17-ws2024-module_a-mini-speed-test-projects)*
- `measurement` 0.5 — An index page is created to link to each speed test project *(s17-ws2024-module_a-mini-speed-test-projects)*
- `measurement` 1 — The index page contains thumbnail and title to each speed test project *(s17-ws2024-module_a-mini-speed-test-projects)*
- `measurement` 0.25 — URL is reachable *(s17-ws2024-module_b-product-management)*
- `measurement` 0.5 — ER diagram schema is provided *(s17-ws2024-module_b-product-management)*
- `measurement` 0.25 — URL is reachable *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.5 — ER diagram schema is provided *(s17-ws2024-module_c-lyon-heritage-site)*
- `measurement` 0.25 — URL is reachable *(s17-ws2024-module_d-lyon-mobile-web-service)*
- `measurement` 0.5 — ER diagram schema is provided *(s17-ws2024-module_d-lyon-mobile-web-service)*

### Projects without `marking-scheme.json` (not scanned)

- `s17-es2023-module_a-design_and_implementation`
- `s17-es2023-module_b-dynamic_website_with_server_side_rendering`
- `s17-es2025-training-hu-module_e-advanced-web-development`
- `s17-ws2026-training-event-scheduler`
- `s17-wscnt2026-module-a-rest-api-backend` (xlsx only)

---

## s17-es2023-module_c-commercial-open-api

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **2**
- Source: `s17-es2023-module_c-commercial-open-api\marking\marking-scheme.json`

### 1. Authentication error response

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | The expected error response according to the specification is returned if the token is missing or invalid. |
| Calculation | pass-or-fail |

### 2. AI Service returns unexpected error

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | If the AI service returns an unexpected error with status 500, the respective endpoints implemented by the competitor return a 503 response according to the spec. |
| Calculation | pass-or-fail |

---

## s17-es2023-module_e-advanced-web-development

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **1**
- Source: `s17-es2023-module_e-advanced-web-development\marking\marking-scheme.json`

### 1. Tests are easy to understand

| Field | Value |
| --- | --- |
| Sub-criterion | Task 1 - Writing automated tests |
| Type | judgement |
| Max mark | 0.5 |
| Judgement 0 | The unit tests lack clarity and are challenging to understand. The language used is overly technical, convoluted, or fails to follow the recognizable "Arrange, Act, Assert" structure commonly associated with unit tests. As a result, users may struggle to comprehend the purpose, steps, or expected outcomes of the tests. |
| Judgement 1 | The unit tests are somewhat understandable, but there are instances where the language or structure could be improved for better clarity. While there may be elements of the "Arrange, Act, Assert" pattern, it is not consistently followed or clearly recognizable, requiring users to make additional effort to interpret the tests' purpose and expected results. |
| Judgement 2 | The unit tests are generally written in a way that is easy to understand. The language used is clear and concise, and the "Arrange, Act, Assert" pattern is recognizable, allowing users to grasp the purpose and expected outcomes of the tests with relative ease. |
| Judgement 3 | The unit tests are exceptionally well-written and easy to understand. The language used is simple, precise, and effectively follows the "Arrange, Act, Assert" pattern, ensuring that users can easily identify the different sections and comprehend the purpose, steps, and expected results of the tests. |

---

## s17-es2025-module_c-rest-api

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **3**
- Source: `s17-es2025-module_c-rest-api\marking\marking-scheme.json`

### 1. API was implemented to follow spec: Base path

| Field | Value |
| --- | --- |
| Sub-criterion | Organization |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Correct base path |
| Calculation | pass-or-fail |

### 2. API was implemented to follow spec: path extension

| Field | Value |
| --- | --- |
| Sub-criterion | Organization |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | No trailing extensions like ".php" or "/index.php" or required trailing "/" |
| Calculation | pass-or-fail |

### 3. API was implemented to follow spec: content type

| Field | Value |
| --- | --- |
| Sub-criterion | Organization |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Response content type is always "application/json" or "application/problem+json" for errors |
| Calculation | pass-or-fail |

---

## s17-es2025-training-hu-module_a-design_and_implementation

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **5**
- Source: `s17-es2025-training-hu-module_a-design_and_implementation\marking\marking-scheme.json`

### 1. Header contains SkillShare Academy logo

| Field | Value |
| --- | --- |
| Sub-criterion | Header and Navigation Implementation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Check that header includes SkillShare Academy logo (text or image) on the left side, preferably the vertical purple logo |
| Calculation | pass-or-fail |

### 2. Navigation links to all 4 main pages

| Field | Value |
| --- | --- |
| Sub-criterion | Header and Navigation Implementation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Click each navigation link (Home, Courses, Mentors, About) and verify they navigate to correct pages |
| Calculation | pass-or-fail |

### 3. Header and navigation are consistent across all pages

| Field | Value |
| --- | --- |
| Sub-criterion | Header and Navigation Implementation |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Visit all 4 pages and verify header/navigation look identical (except active page highlighting is allowed) |
| Calculation | pass-or-fail |

### 4. Footer includes copyright notice

| Field | Value |
| --- | --- |
| Sub-criterion | Footer Implementation |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Check that footer contains copyright notice with current year or appropriate text |
| Calculation | pass-or-fail |

### 5. Footer is consistent across all pages

| Field | Value |
| --- | --- |
| Sub-criterion | Footer Implementation |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Visit all 4 pages and verify footer content and styling are identical |
| Calculation | pass-or-fail |

---

## s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **4**
- Source: `s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering\marking\marking-scheme.json`

### 1. Login page accessible and functional

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication and Access Control |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Navigate to /login, form contains username/password fields and submits correctly |
| Calculation | pass-or-fail |

### 2. Invalid login credentials show appropriate error

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication and Access Control |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Login with wrong password displays clear error message and prevents access |
| Calculation | pass-or-fail |

### 3. Non-admin users cannot access admin interface

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication and Access Control |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Login with regular user account redirects away from admin pages or shows access denied |
| Calculation | pass-or-fail |

### 4. Successful login redirects to dashboard

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication and Access Control |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Admin login automatically redirects to /dashboard and displays admin interface |
| Calculation | pass-or-fail |

---

## s17-es2025-training-hu-module_c-rest-api

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **10**
- Source: `s17-es2025-training-hu-module_c-rest-api\marking\marking-scheme.json`

### 1. Duplicate email registration returns 400 error

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication System Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST with existing email returns 400 with error message |
| Calculation | pass-or-fail |

### 2. Login with invalid credentials returns 401

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication System Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST with wrong password returns 401 with error message |
| Calculation | pass-or-fail |

### 3. Invalid course ID returns 404 error

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /api/v1/courses/99999 returns 404 with error message |
| Calculation | pass-or-fail |

### 4. Duplicate enrollment returns 409 conflict

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Enrolling in same course twice returns 409 with error message |
| Calculation | pass-or-fail |

### 5. Chapter completion without enrollment returns 403

| Field | Value |
| --- | --- |
| Sub-criterion | Course Management Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Complete chapter without enrollment returns 403 with error message |
| Calculation | pass-or-fail |

### 6. Session booking with insufficient credits returns 403

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Session Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Booking expensive session with low credit balance returns 403 with error |
| Calculation | pass-or-fail |

### 7. Invalid session ID returns 404 error

| Field | Value |
| --- | --- |
| Sub-criterion | Mentor Session Testing |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST /api/v1/mentors/sessions/99999/book returns 404 with error message |
| Calculation | pass-or-fail |

### 8. All endpoints return proper JSON content-type headers

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and Response Format |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Response headers include Content-Type: application/json |
| Calculation | pass-or-fail |

### 9. Success responses use correct HTTP status codes

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and Response Format |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET returns 200, POST creation returns 201 |
| Calculation | pass-or-fail |

### 10. Error responses include descriptive message field

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and Response Format |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: All 4xx/5xx responses contain JSON with message field |
| Calculation | pass-or-fail |

---

## s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **5**
- Source: `s17-es2027-hu-r2-module_a-skillshare-academy-rest-api-backend\marking\marking-scheme.json`

### 1. 401 returned for missing or invalid token

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication |
| Type | measurement |
| Max mark | 1.25 |
| Extra description | Test: Call any protected endpoint (e.g. GET /api/v1/users/me) without X-API-TOKEN header. Expect 401 Unauthorized with JSON body {"message": "Invalid token"}. Test with invalid token; expect same response. |
| Calculation | pass-or-fail |

### 2. 400 for malformed requests

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: POST /api/v1/users/register with missing required fields or invalid JSON. Expect 400 Bad Request with JSON error message. |
| Calculation | pass-or-fail |

### 3. 403 for credit limit exceeded

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: User with 0 credits attempts POST /mentors/sessions/:id/book for session costing credits. Expect 403 Forbidden with {"message": "Insufficient credits"}. |
| Calculation | pass-or-fail |

### 4. 404 for not found resources

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: GET /courses/99999, POST /courses/99999/enroll, or POST /mentors/sessions/99999/book with non-existent IDs. Expect 404 with appropriate {"message": "... not found"}. |
| Calculation | pass-or-fail |

### 5. 503 when content service unavailable

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: If content service returns unexpected error (e.g. 500), endpoints that depend on it (GET /courses, GET /courses/:id) should return 503 Service Unavailable with error message. Simulate or verify spec compliance. |
| Calculation | pass-or-fail |

---

## s17-es2027-hu-r2-module_b-skillshare-academy-rest-api-frontend

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **3**
- Source: `s17-es2027-hu-r2-module_b-skillshare-academy-rest-api-frontend\marking\marking-scheme.json`

### 1. 401 Unauthorized redirects to login

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Feedback |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Use invalid or expired token. Any API call returns 401. User must be redirected to login page. Content must not be replaced by raw error; redirect is the expected behavior. |
| Calculation | pass-or-fail |

### 2. 400, 403, 404, 422, 500 displayed to user

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Feedback |
| Type | measurement |
| Max mark | 1.25 |
| Extra description | Test: 400 (malformed data): user notified of invalid data. 403: insufficient permissions message. 404: content unavailable message. 422: field-specific validation errors shown. 500: system issue message. Errors shown comprehensibly; page content not fully replaced. |
| Calculation | pass-or-fail |

### 3. Clarity of error messages and user feedback

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Feedback |
| Type | judgement |
| Max mark | 0.75 |
| Judgement 0 | Errors shown as raw API messages or not shown; user cannot understand the problem |
| Judgement 1 | Basic error display but messages are technical or unclear |
| Judgement 2 | Errors displayed clearly with human-readable messages; user can correct issues |
| Judgement 3 | Excellent error handling with clear, actionable messages; field-level feedback for validation; smooth UX |

---

## s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **8**
- Source: `s17-es2027-hu-r3-module_c-skillshare-academy-lms-rest-api-backend\marking\marking-scheme.json`

### 1. All error responses return JSON with at least an error and code field

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Communication |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: Trigger any error (e.g. GET /api/courses/nonexistent-slug with valid token). Verify response body contains both error (human-readable message) and code (machine-readable string, e.g. COURSE_NOT_FOUND) fields. |
| Calculation | pass-or-fail |

### 2. 401 Unauthorized returned when Bearer token is missing

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Communication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Send GET /api/courses/{valid-slug} with no Authorization header. Verify response is 401 with {"error": "Unauthorized", "code": "UNAUTHORIZED"}. |
| Calculation | pass-or-fail |

### 3. 401 Unauthorized returned for invalid or malformed token

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Communication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Send GET /api/courses/{valid-slug} with Authorization: Bearer invalidtoken123. Verify 401 with code UNAUTHORIZED. Also test with a token signed with a wrong secret. |
| Calculation | pass-or-fail |

### 4. 401 Unauthorized returned for an expired token

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Communication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Craft a valid token with an exp value in the past (e.g. exp: 1). Send it to a protected endpoint. Verify 401 with code UNAUTHORIZED. |
| Calculation | pass-or-fail |

### 5. 403 Forbidden returned when user is not enrolled in the requested course

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Communication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Send GET /api/courses/{valid-slug} with a valid token for a user who is not enrolled in that course. Verify 403 with {"error": "Not enrolled in this course", "code": "NOT_ENROLLED"}. |
| Calculation | pass-or-fail |

### 6. 403 Forbidden returned when a chapter is locked (previous chapter not completed)

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Communication |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: Enroll a user in a course, then request a chapter with orderIndex > 1 without having completed the previous chapter. Verify 403 with {"error": "Previous chapter must be completed first", "code": "CHAPTER_LOCKED"}. |
| Calculation | pass-or-fail |

### 7. 404 Not Found returned for a non-existent course

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Communication |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: GET /api/courses/this-course-does-not-exist with a valid token. Verify 404 with {"error": "Course not found", "code": "COURSE_NOT_FOUND"}. |
| Calculation | pass-or-fail |

### 8. 404 Not Found returned for a non-existent chapter

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling and User Communication |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: GET /api/courses/{valid-slug}/chapters/99999 with a valid enrolled-user token. Verify 404 with {"error": "Chapter not found", "code": "CHAPTER_NOT_FOUND"}. |
| Calculation | pass-or-fail |

---

## s17-es2027-hu-r3-module_d-ssa-lms-frontend

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **4**
- Source: `s17-es2027-hu-r3-module_d-ssa-lms-frontend\marking\marking-scheme.json`

### 1. Any 401 Unauthorized response from the content service triggers a full-page navigation to the main SSA dashboard

| Field | Value |
| --- | --- |
| Sub-criterion | Authentication & Token |
| Type | measurement |
| Max mark | 1.5 |
| Extra description | Test: use an expired or invalid token, then navigate to a course page or chapter page. The browser must perform a full-page redirect (window.location or equivalent) to the dashboard URL — not display an inline error message. Also test: submitting a quiz with an invalid token returns 401 → redirect. |
| Calculation | pass-or-fail |

### 2. 400 Bad Request: a user-friendly error message is displayed

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: trigger a 400 response (e.g. by sending a malformed quiz submission). A readable message must appear informing the user the request was invalid — not a raw error object, JSON dump, or stack trace. |
| Calculation | pass-or-fail |

### 3. 404 Not Found: a message informs the user the content is unavailable

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | Test: navigate to /courses/nonexistent-course. The API returns 404. The UI must show a clear, readable message (e.g. 'Course not found' or 'Content unavailable') — not a blank page or JavaScript exception. |
| Calculation | pass-or-fail |

### 4. 500 Internal Server Error: a message informs the user of a temporary server problem

| Field | Value |
| --- | --- |
| Sub-criterion | Error Handling |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Test: simulate a 500 response (e.g. mock via DevTools or a service override). The UI must show a user-friendly message (e.g. 'Something went wrong, please try again later') — not a blank screen or raw error body. |
| Calculation | pass-or-fail |

---

## s17-hu_ro_training_2023-module_a-dinease-showcase-website

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **1**
- Source: `s17-hu_ro_training_2023-module_a-dinease-showcase-website\marking\marking-scheme.json`

### 1. Clear and effective content presentation

| Field | Value |
| --- | --- |
| Sub-criterion | Communication Skills |
| Type | judgement |
| Max mark | 1 |
| Judgement 0 | Content is unclear and poorly presented |
| Judgement 1 | Content is somewhat clear with minor issues |
| Judgement 2 | Content is clear and well-presented |
| Judgement 3 | Content is exceptionally clear and engaging |

---

## s17-hu_ro_training_2023-module_b-restaurants-owners-hub

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **2**
- Source: `s17-hu_ro_training_2023-module_b-restaurants-owners-hub\marking\marking-scheme.json`

### 1. Project documentation and setup instructions

| Field | Value |
| --- | --- |
| Sub-criterion | Project Documentation and Presentation |
| Type | judgement |
| Max mark | 1 |
| Judgement 0 | No documentation or setup instructions |
| Judgement 1 | Basic documentation with limited instructions |
| Judgement 2 | Good documentation with clear setup process |
| Judgement 3 | Excellent documentation with comprehensive instructions |

### 2. Professional presentation and communication

| Field | Value |
| --- | --- |
| Sub-criterion | Project Documentation and Presentation |
| Type | measurement |
| Max mark | 1 |
| Extra description | Clear communication during project demonstration |
| Calculation | judgement |

---

## s17-ts2025-module_a-static-website-design

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **2**
- Source: `s17-ts2025-module_a-static-website-design\marking\marking-scheme.json`

### 1. No server-side or client-side framework is used

| Field | Value |
| --- | --- |
| Sub-criterion | Organization |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 2. Home page is reachable at the index.html

| Field | Value |
| --- | --- |
| Sub-criterion | Organization |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

---

## s17-ts2025-module_b-bicycle-rental-admin

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **1**
- Source: `s17-ts2025-module_b-bicycle-rental-admin\marking\marking-scheme.json`

### 1. ER diagram schema is provided

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

---

## s17-ws2022-module_e-virtual-word-interactive-game

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **1**
- Source: `s17-ws2022-module_e-virtual-word-interactive-game\marking\marking-scheme.json`

### 1. The HTML5 game page is accessible via required URL

| Field | Value |
| --- | --- |
| Sub-criterion | Avatar movement |
| Type | measurement |
| Max mark | 0.5 |
| Extra description | /XX_module_e/ |
| Calculation | pass-or-fail |

---

## s17-ws2024-module_a-mini-speed-test-projects

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **4**
- Source: `s17-ws2024-module_a-mini-speed-test-projects\marking\marking-scheme.json`

### 1. The mini test project is reachable as described

| Field | Value |
| --- | --- |
| Sub-criterion | Mini Test Project General |
| Type | measurement |
| Max mark | 0.25 |
| Calculation | pass-or-fail |

### 2. Exact mini projects are provided.

| Field | Value |
| --- | --- |
| Sub-criterion | Mini Test Project General |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | Not providing extra non-required project folders |
| Calculation | pass-or-fail |

### 3. An index page is created to link to each speed test project

| Field | Value |
| --- | --- |
| Sub-criterion | Mini Test Project General |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

### 4. The index page contains thumbnail and title to each speed test project

| Field | Value |
| --- | --- |
| Sub-criterion | Mini Test Project General |
| Type | measurement |
| Max mark | 1 |
| Extra description | Deduct 0.25 per missing. |
| Calculation | pass-or-fail |

---

## s17-ws2024-module_b-product-management

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **2**
- Source: `s17-ws2024-module_b-product-management\marking\marking-scheme.json`

### 1. URL is reachable

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | / and not showing blank page or error page |
| Calculation | pass-or-fail |

### 2. ER diagram schema is provided

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

---

## s17-ws2024-module_c-lyon-heritage-site

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **2**
- Source: `s17-ws2024-module_c-lyon-heritage-site\marking\marking-scheme.json`

### 1. URL is reachable

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | / and not showing blank page or error page |
| Calculation | pass-or-fail |

### 2. ER diagram schema is provided

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

---

## s17-ws2024-module_d-lyon-mobile-web-service

- WSOS 2 label in scheme: *Communication and interpersonal skills*
- Aspects: **2**
- Source: `s17-ws2024-module_d-lyon-mobile-web-service\marking\marking-scheme.json`

### 1. URL is reachable

| Field | Value |
| --- | --- |
| Sub-criterion | Admin |
| Type | measurement |
| Max mark | 0.25 |
| Extra description | / and not showing blank page or error page |
| Calculation | pass-or-fail |

### 2. ER diagram schema is provided

| Field | Value |
| --- | --- |
| Sub-criterion | Database |
| Type | measurement |
| Max mark | 0.5 |
| Calculation | pass-or-fail |

---

## Summary

- Marking schemes scanned: **33**
- Projects with WSOS 2 aspects: **19**
- Total WSOS 2 aspects: **62**

### Projects with no WSOS 2 aspects (or no usable scheme)

- s17-es2021-module_a-vip-seating-arrangement-tool
- s17-es2021-module_c-php-api-development
- s17-es2023-module_d-interactive-frontend-using-an-api
- s17-es2025-module_a-static-website-design
- s17-es2025-module_a-static-website-design-1
- s17-es2025-module_b-dynamic-website-with-server-side-rendering
- s17-es2025-module_d-interactive-frontend-using-an-api
- s17-es2025-training-hu-module_d-interactive-frontend-using-an-api
- s17-hu_ro_training_2023-module_c-commercial_api_provider
- s17-hu_ro_training_2023-module_d-interactive_guest_experience
- s17-ts2025-module_c-bicycle-rental-api
- s17-ts2025-module_d-bicycle-rental-frontend
- s17-ws2026-tarining-memory-game-presentation
- s17-wskz2026-module-d
