# Video Capture

**Short Description:**

> A single-page React app that uses the user’s camera (WebRTC) to display a live video preview and capture a timed snapshot. It can also be configured to take snapshot manually.

**Demo Video:**

A short video demonstrating the app’s functionality is included in the `demo/` directory of this repository:  
[demo/demo.mp4](./demo/demo.mp4)

---

## Stack

- Frontend: React
- Build Tool: Vite

---

## Setup

**Prerequisites:**

- Node.js version: 22.13.0
- npm: 10.9.2

**Steps to run locally:**

```bash
F# If you have nvm installed, this will automatically switch to the version in .nvmrc
nvm use

# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Usually at http://localhost:5173 or as per your setup
```

---

## Features / Functionality

- Implements all required features from the assignment:

  - Single-page layout with instructions, live video preview, and captured snapshot.
  - Automatic snapshot taken after a countdown.

- **Additional features (not in the requirements):**
  - Manual snapshot mode can be enabled in the code (via prop to a feature entry), allowing user to take the snapshot at any time instead of waiting for the automatic countdown.
  - The countdown is displayed in the top-right corner of the video container to avoid obstructing the user's view and provide clear feedback during auto-capture.
