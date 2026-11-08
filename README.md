# React Shopping Dashboard

A small React and Vite project for practicing controlled components and
state-driven UI. The dashboard lets you search and filter a shopping list, add
items, and toggle their cart status.

## Requirements

- Node.js (with npm)

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Features

- Search items by name; matching is case-insensitive and supports partial
  matches.
- Filter the list by category.
- Add an item with a name and category. Price is optional.
- Toggle an item's cart status with its cart button.

Available categories are Produce, Dairy, Bakery, and Dessert.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm test -- --run` | Run the Vitest test suite once. |
| `npm run lint` | Run ESLint. |
