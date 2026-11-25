# my-tinybase-app

A TinyBase app built with TypeScript and React, using TinyWidgets components.

## Getting Started

Alongside this file, you will see a directory called `client`.

To start the web client with Vite, run the following commands:

```bash
cd client
npm install
npm run dev
```

PNPM, Yarn, and Bun should also work. Your app will be available at
`http://localhost:5173`, or whichever port Vite specifies in the console.

After that, start hacking!

## Structure

This project is organized into a single `client` directory:

### Client

The `client` directory contains your React-based web application,
built with Vite and TypeScript.

#### Key Files

- **`index.html`**: The main HTML file that loads your app
- **`src/index.tsx`**: Entry point that bootstraps and renders the React app
- **`src/App.tsx`**: Main React component that renders the todo list
- **`src/Store.tsx`**: TinyBase main store configuration
- **`src/app.css.ts`**: TinyWidgets theme variables for the generated app

#### How It Works

The app uses **TinyBase** to manage application state in a reactive data store.
Type-safe schemas define the structure of your data, providing autocomplete
and compile-time type checking.

**Persistence** is enabled using browser LocalStorage.
Your data is automatically saved and restored when you reload the page.

**React Integration**: TinyBase provides React hooks that automatically subscribe
to store changes and trigger re-renders when data updates. This means your UI
stays in sync with your data with minimal boilerplate.

Components like `TodoList` and `TodoItem` use hooks like `useSortedRowIds`, `useRow`, and
callback hooks like `useAddRowCallback` and `useDelRowCallback`
to interact
with the store.

**TinyWidgets UI**: This React app uses TinyWidgets for its app shell and
shared interface controls, including the top navigation, title, info badges,
buttons, inputs, and other common UI elements. The generated TinyBase
components still own the app behavior and store interactions.

## Learn More

- [TinyBase Documentation](https://tinybase.org)
- [TinyBase Examples](https://tinybase.org/demos/)
