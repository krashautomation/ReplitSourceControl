# REST Express

This is a full-stack web application built with a modern tech stack, featuring a RESTful API backend powered by Express.js and a reactive frontend built with React and Vite.

## Description

This project serves as a boilerplate or starting point for building modern web applications. It includes a pre-configured set of tools and libraries for handling everything from routing and data fetching to UI components and database migrations. This is a change.

## Tech Stack

### Backend

*   **[Express.js](https://expressjs.com/):** A fast, unopinionated, minimalist web framework for Node.js.
*   **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
*   **[Drizzle ORM](https://orm.drizzle.team/):** A TypeScript ORM for SQL databases.
*   **[Passport.js](http://www.passportjs.org/):** Simple, unobtrusive authentication for Node.js.

### Frontend

*   **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/):** A fast build tool that provides a quicker and leaner development experience for modern web projects.
*   **[Wouter](https://github.com/molefrog/wouter):** A minimalist routing library for React.
*   **[@tanstack/react-query](https://tanstack.com/query/v4):** A powerful data-fetching library for React.
*   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom designs.
*   **[Radix UI](https://www.radix-ui.com/):** A collection of unstyled, accessible UI components.

### Database

*   **[PostgreSQL](https://www.postgresql.org/):** A powerful, open source object-relational database system.
*   **[Neon](https://neon.tech/):** A serverless PostgreSQL platform.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/rest-express.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Development

To start the development server, run the following command:

```bash
npm run dev
```

This will start the backend server and the Vite development server for the frontend.

### Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create a `dist` directory with the production-ready assets.

To start the production server, run the following command:

```bash
npm run start
```

## Project Structure

```
.
├── client/         # Frontend code
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── lib/        # Utility functions and libraries
│   │   ├── pages/      # Page components
│   │   └── App.tsx     # Main App component
│   └── index.html    # HTML entry point
├── server/         # Backend code
│   ├── index.ts      # Main server file
│   └── routes.ts     # API routes
├── shared/         # Shared code between client and server
│   └── schema.ts     # Database schema
├── drizzle.config.ts # Drizzle ORM configuration
├── package.json      # Project dependencies and scripts
└── vite.config.ts    # Vite configuration
```

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the client and server for production.
*   `npm run start`: Starts the production server.
*   `npm run check`: Runs the TypeScript compiler to check for errors.
*   `npm run db:push`: Pushes database changes using Drizzle Kit.
