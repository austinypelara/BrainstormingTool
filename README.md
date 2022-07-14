# Elara Brainstorming Tool

This is a simple webapp to help teams collaborate and share ideas for new projects. Deployed [here](https://austinypelara.github.io/BrainstormingTool/)

## Getting Started

Start by first cloning the repository:

```bash
git clone https://github.com/austinypelara/BrainstormingTool.git
```

Or,

```bash
gh repo clone austinypelara/BrainstormingTool
```

## Dependencies

Next install the dependencies:

```bash
npm install
```

## Running

Run a development server for hot reloading and fast development using

```bash
npm run dev
```

The site is hosted at [https://localhost:3000/BrainstormingTool](https://localhost:3000/BrainstormingTool). By default, it is not hosting at the root simply because it helps avoid issues with hosting on [Github Pages](https://pages.github.com/). You can change this by modifying the `svelte.config.js` file:

```bash
// Change
const dev = "production" === "development";

// To
const dev = "development" === "development";

// Or
const dev = true;
```

## Building

To build the project, just run:

```bash
npm run build
```

The default folder for the static folders will be in `/docs`. Again, this is because of [Github Pages](https://pages.github.com/).