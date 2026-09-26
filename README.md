# FitLog

A workout library and session planner built with Next.js, React, TypeScript, and Tailwind CSS.

**[View the live application](https://assignment-6-two-pink.vercel.app/)**

## Project Screenshot

A real application screenshot is still needed. Add a capture of the home page and workout library at `public/readme/fitlog-home.png`, then uncomment the image below.

<!-- Uncomment after adding the actual screenshot:
![FitLog home page and workout library](public/readme/fitlog-home.png)
-->

## Overview

FitLog lets users explore exercises, read workout instructions, and assemble a session of up to five workouts. Separate Plan and Saved lists make it possible to choose exercises for a session and keep others for later.

This learning project demonstrates fetching data in Next.js Server Components, interactive React components, shared state with React Context, and browser persistence.

## Features

- Browse workouts from an external API and sort by duration (ascending), calories (descending), or rating (descending).
- View muscle groups, equipment, difficulty, sets, reps, duration, calories, ratings, and step-by-step instructions.
- Add up to five unique workouts to Today's Plan and save workouts separately for later.
- See Plan and Saved counters in the navigation, plus exercise count, total minutes, and total calories for the current plan.
- Remove workouts from either list or mark a planned workout as done.
- Keep both lists after a page refresh using browser `localStorage`.
- Receive action feedback and see loading, error/retry, empty-list, and 404 states.
- Use layouts that adapt through Tailwind breakpoints: the library changes from one to two to three columns, while details and plan cards adjust for wider screens.

## Tech Stack

- **Next.js 16.3.6:** App Router, Server Components, dynamic workout routes, and `next/image`.
- **React 19.2.8:** interactive components, hooks, and Context for shared workout state.
- **TypeScript 5:** shared workout types and strict type checking.
- **Tailwind CSS 4:** utility styling and responsive layouts through the PostCSS integration.
- **Fonts:** Inter and Oswald through `next/font/google`.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with the hero and workout library; `/#library` jumps to the library. |
| `/workouts/[id]` | Workout details, instructions, and Plan/Save actions. |
| `/my-plan` | Today's Plan and Saved tabs, plan totals, completion, and removal actions. |

## Data and Persistence

Server Components fetch workout data from these external endpoints:

- Library: `https://api.abcz.workers.dev/api/fitlog`
- Details: `https://api.abcz.workers.dev/api/fitlog/:id`

The repository contains a shared `Workout` type, but no local workout dataset or application database. Remote workout images use `next/image`, with `img.magnific.com` allowed in `next.config.ts`.

`WorkoutStateProvider` manages two independent collections and stores their workout objects as JSON under `fitlog-plan` and `fitlog-saved` in `localStorage`. Data stays in the same browser and origin; there are no accounts or cross-device synchronization.

**Behavior to know:** Mark as Done removes a workout from the plan without recording completion history. Removing or completing a planned workout leaves its Saved entry intact. Today's Plan stays stored until changed; it does not reset automatically each day. Minutes and calories are sums of the API values for the current plan, rather than measured activity.

## Dependencies

Versions below follow `package.json`; `package-lock.json` records the resolved installation.

| Runtime package | Version |
| --- | --- |
| `next` | `16.3.6` |
| `react` | `19.2.8` |
| `react-dom` | `19.2.8` |

| Development/tooling packages | Version |
| --- | --- |
| `typescript` | `^5` |
| `tailwindcss`, `@tailwindcss/postcss` | `^4` |
| `eslint` | `^9` |
| `eslint-config-next` | `16.3.6` |
| `@types/node` | `^20` |
| `@types/react`, `@types/react-dom` | `^19` |

## Run Locally

Prerequisites: Node.js **20.9 or later** and npm.

1. Clone the repository and enter its directory:

   ```bash
   git clone https://github.com/rezaulhasan1369/assignment_6.git
   cd assignment_6
   ```

2. Install the locked dependencies:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [localhost:3000](http://localhost:3000).

The current implementation requires no environment variables. Network access is needed for workout data and remote images, and a fresh build may need to download the Google fonts.

On Windows PowerShell, if script execution policy blocks `npm.ps1`, use `npm.cmd` in place of `npm`.

## Build and Checks

Create a production build:

```bash
npm run build
```

Serve the production build locally:

```bash
npm start
```

Run ESLint:

```bash
npm run lint
```

## Project Structure

```text
src/
  app/          Pages, root layout, global styles, and loading/error/404 states
  components/   Navigation, hero, workout library, cards, and workout actions
  context/      Shared Plan/Saved state and localStorage persistence
  types/        Workout data type
public/
  assets/       Banner and logo images
```

## Learning Context

Created by **Mohd. Rezaul Hasan** as Programming Hero Assignment 6, FitLog is a learning and portfolio project focused on API integration, routing, responsive interfaces, and client-side state management.

## Links

- [Live Demo](https://assignment-6-two-pink.vercel.app/)
- [Repository](https://github.com/rezaulhasan1369/assignment_6)
- [GitHub Profile](https://github.com/rezaulhasan1369)
