# Project Documentation

This documentation provides a precise overview of the project, its runtime architecture, configuration, data model, and operational guidance. It also lists observed issues and actionable recommendations without changing any source code.

## Overview

- Purpose: Serve a personal resume as a simple Node.js web app with EJS templates and static assets.
- Stack: `Node.js`, `Express`, `EJS`, `Bootstrap`, `log4js`, `fs-extra`.
- Entry points:
  - App: `app.js`
  - Route: `routes/home.js`
  - View: `views/cv.ejs`
  - Static assets: `public/`

## Folder Structure

- `app.js`: Express app setup, example content bootstrap, logging, server start.
- `routes/home.js`: Root route that reads JSON and renders the CV template.
- `views/`: EJS templates (`cv.ejs`, partials/head).
- `public/`: Static resources, `examples/` with sample resumes, `ress/` for icons and mounted content (`public/ress/mountedRess`).
- `utils/logger.js`: `log4js` configuration writing to `logs/out.log` and stdout.
- `utils/path.js`: Helper to resolve the root directory.
- `images/`: README screenshots.
- `Dockerfile`: Container build (Node 22 Alpine base).
- `package.json`: Dependencies and project metadata.
- `logs/`: Runtime logs (created at runtime if not present).

## Runtime Architecture

- Express app with a single route (`/`) that renders `views/cv.ejs`.
- On startup, if `public/ress/mountedRess/me.json` is missing, the app copies the selected example directory into `public/ress/mountedRess` and verifies `me.json`.
- Static middleware serves assets from `public/`, Bootstrap, and Font Awesome from `node_modules`.
- Logging via `log4js` both to stdout and `logs/out.log`.

## Configuration

- Example selector: environment variable `example` (numeric) determines which example is copied on first run.
  - `1` → `public/examples/cvExample1`
  - `2` → `public/examples/cvExample2`
- Port: server listens on env `PORT` (default `5555`).
- Mounted data: user-provided resume data and images should live in `public/ress/mountedRess` (can be bind-mounted in Docker).

Notes and mismatches observed:
- Dockerfile sets `ENV EXAMPLE=2` (uppercase), while the app reads `process.env.example` (lowercase). Recommend unifying on a single variable name.
- No `npm start` script; app is run with `node app.js`.

## Data Model (me.json)

The resume is driven by a JSON document typically located at `public/ress/mountedRess/me.json` with the following top-level properties:

- `enableTestimonials` (boolean): Enable/disable the testimonials feature.
- `showTestimonialsInMain` (boolean): Place testimonials in main column if true, otherwise in the sidebar.
- `picture` (string): Path to profile image (e.g., `/ress/mountedRess/me.jpg`).
- `name` (string): Full name.
- `header` (string): Subtitle/role.
- `about` (string): About text.
- `mail` (string): Contact email.
- `interests` (array): Items with `title` and optional `subentries` array.
- `educations` (array): Items with `date`, `desc1`, `desc2`.
- `menus` (array): Skill sections with `title` and `subentries` array.
- `links` (array): Items with `imagePath` and `link` URL; optionally `id` to tag an image.
- `workexperiences` (array): Items with `date`, `title`, `desc`, and optional `highlights` array.
- `testimonials` (array): Items with `name`, `title`, `text`.

EJS uses `<%= ... %>` which escapes by default, reducing XSS risk when rendering untrusted text. Image paths and links are used directly; ensure they reference safe, expected locations.

## Endpoints

- `GET /`: Reads `me.json` and renders the CV page (`views/cv.ejs`).

## Logging

- `log4js` is configured with two appenders: stdout and `logs/out.log`.
- The middleware `log4js.connectLogger` is enabled at app level for basic request logging.
- A custom request logger is declared after route registration and may not run for requests that complete within routes; relying on `connectLogger` is sufficient for request logs.
- No log rotation or size limits are configured.

## Running Locally

Without Docker:
- `npm install`
- `npm start`
- Open `http://localhost:5555`

With Docker (examples):
- Example 1: `docker run --rm -p 8001:5555 -e example=1 blade34242/my-resume2:latest`
- Example 2: `docker run --rm -p 8002:5555 -e example=2 blade34242/my-resume2:latest`

With Docker (mount your data):
- `docker run --rm -p 8003:5555 -v <LOCAL_PATH>:/home/node/app/public/ress/mountedRess blade34242/my-resume2:latest`

## Known Issues and Recommendations

- Env var: unified on `example` (lowercase) consistently.
- Docker base image: upgraded to `node:22-alpine`.
- Hardcoded port: make `PORT` configurable via env.
- Unused imports: `body-parser` and `readLog` are imported but unused.
- Request logging placement: the custom logger middleware runs after routes; consider moving before routes or removing in favor of `connectLogger`.
- Sync file IO on request: `routes/home.js` uses `fs.readFileSync`; prefer async `fs.promises.readFile`.
- Global variable leak: `pwd` is assigned without `const/let` in `routes/home.js`.
- Added npm scripts: `start`, `dev` (nodemon).
- Added 404/error handlers and graceful shutdown.
- No tests or linter: introduce a minimal test and lint setup.
- Log rotation: configure rolling file appender to prevent unbounded log growth.
- Docker runtime user/permissions: verify non-root user and proper ownership for mounted volumes.

## Troubleshooting

- Blank page or errors on `/`: check that `public/ress/mountedRess/me.json` exists and contains valid JSON.
- Images not loading: verify `picture` and link `imagePath` point to existing files under `public/ress` or the mounted folder.
- Port conflicts: change container port mapping or make app port configurable.
- Logs missing: ensure `logs/` exists or that the process has write permissions; check stdout logs.

## Roadmap (Actionable)

- Configuration
  - Unify `example`/`EXAMPLE` handling and read via `process.env` with defaults.
  - Introduce `PORT` env.
- Code health
  - Remove unused imports; fix global `pwd`.
  - Switch to async file IO for request path.
  - Add input validation for `me.json` structure.
- Build & Ops
  - Upgrade Docker base to Node 18/20; add healthcheck.
  - Add basic CI (lint + build).
  - Add log rotation in `log4js`.
- Features
  - Implement PDF export or link to external print-to-PDF guidance.
  - Optional dark mode and theme tweaks.

## Reference

- Main app: `app.js`
- Route: `routes/home.js`
- View: `views/cv.ejs`
- Examples: `public/examples/cvExample1`, `public/examples/cvExample2`
- Logger: `utils/logger.js`
