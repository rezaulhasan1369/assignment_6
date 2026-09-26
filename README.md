# FitLog — Workout Library

FitLog is a responsive workout library and workout-planning web application built with Next.js. It allows users to browse exercises, view detailed workout information, build a daily workout plan, save workouts for later, and track basic workout metrics.

## Live Demo

Live Site: Will be added after deployment.

## GitHub Repository

https://github.com/rezaulhasan1369/assignment_6

## Key Features

- Browse 12 workouts loaded dynamically from the FitLog API.
- View detailed workout information including equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
- Add workouts to Today's Plan with a maximum limit of 5 workouts.
- Save workouts separately for later use.
- View live Plan and Saved counters from the navigation bar.
- Track total exercises, workout duration, and calories in My Plan.
- Mark planned workouts as done or remove workouts from Plan and Saved lists.
- Sort the workout library by Duration, Calories, or Rating.
- Persist Plan and Saved workout data using localStorage.
- Display toast/status feedback for workout actions.
- Custom loading, error, empty, and 404 states.
- Responsive layout for mobile, tablet, and desktop devices.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- Next.js Image Optimization
- React Context API
- Browser localStorage
- FitLog REST API

## API

Workout data is provided by the FitLog API.

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## Pages

### Home

The Home page contains the hero section and workout library. Users can browse all available workouts and sort them by Duration, Calories, or Rating.

### Workout Details

Each workout has a dynamic details page containing its image, muscle groups, description, specifications, instructions, and actions for adding the workout to Today's Plan or saving it for later.

### My Plan

The My Plan page contains:

- Today's Plan
- Saved workouts
- Exercise count
- Total workout minutes
- Total calories
- Mark as Done functionality
- Remove functionality
- Links back to workout details

## Data Persistence

FitLog uses browser `localStorage` to preserve Today's Plan and Saved workouts after a page refresh.

## Responsive Design

The application is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

## Run Locally

Clone the repository:

```bash
git clone https://github.com/rezaulhasan1369/assignment_6.git
```

Enter the project directory:

```bash
cd assignment_6
```
Install dependencies:

```bash
npm install
```
Start the development server:

```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the application.

## Production Build

To create an optimized production build:

```bash
npm run build
```
## Project Structure

The project follows the Next.js App Router structure.

- `src/app` — Application routes, layouts, loading, error, and 404 pages
- `src/components` — Reusable UI components
- `src/context` — Shared workout state management
- `src/types` — TypeScript type definitions
- `public/assets` — Static images and assets

## Workout Management

FitLog maintains two separate workout collections:

- **Today's Plan** — Workouts selected for the current workout session
- **Saved** — Workouts bookmarked for later

Removing or completing a workout from Today's Plan does not automatically remove it from Saved.

## Error and Loading Handling

The application includes:

- Home page loading state while workout data is being fetched
- Custom 404 page for invalid routes
- Application error handling
- Empty states for workout collections
- User feedback for workout actions

## Deployment

The project is prepared for deployment on Vercel or another Next.js-compatible hosting platform.

Live Site: Will be added after deployment.

## Author

Developed by **Mohd. Rezaul Hasan**

Programming Hero — Assignment 6

## License

This project was created for educational purposes as part of Programming Hero coursework.