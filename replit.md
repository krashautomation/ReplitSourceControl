# Overview

This is a full-stack web application built with React and Express that serves as a template for building modern web applications. The application features a clean, modern UI built with React, shadcn/ui components, and Tailwind CSS on the frontend, paired with an Express.js backend that uses Drizzle ORM for database operations. The project is structured as a monorepo with shared TypeScript schemas and includes comprehensive tooling for development and production deployment.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool and development server
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **UI Framework**: shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **Styling**: Tailwind CSS with CSS custom properties for theming, supporting both light and dark modes
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture  
- **Framework**: Express.js with TypeScript running on Node.js
- **Database Layer**: Drizzle ORM configured for PostgreSQL with Neon Database as the provider
- **API Pattern**: RESTful API structure with `/api` prefix for all endpoints
- **Development**: Development server uses tsx for TypeScript execution with hot reloading

## Data Storage
- **Database**: PostgreSQL database using Neon Database serverless platform
- **ORM**: Drizzle ORM with schema-first approach and automatic TypeScript type generation
- **Migrations**: Drizzle Kit handles database migrations and schema changes
- **Schema Definition**: Shared schema definitions between frontend and backend located in `/shared/schema.ts`
- **Fallback Storage**: In-memory storage implementation for development and testing purposes

## Development Tooling
- **Build System**: Vite for frontend builds with esbuild for backend bundling in production
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Code Quality**: Path mapping configured for clean imports using `@/` for client code and `@shared/` for shared modules
- **Development Experience**: Hot module replacement, runtime error overlays, and Replit-specific development tooling

## Project Structure
The application follows a monorepo structure with clear separation of concerns:
- `/client/` - React frontend application
- `/server/` - Express.js backend application  
- `/shared/` - Shared TypeScript schemas and types
- UI components organized in `/client/src/components/ui/` following shadcn/ui patterns

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon Database client for serverless PostgreSQL connections
- **drizzle-orm**: Modern TypeScript ORM for SQL databases with excellent type safety
- **drizzle-kit**: Database migration and introspection toolkit for Drizzle ORM

## Frontend Dependencies
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **wouter**: Minimalist routing library for React applications
- **@radix-ui/***: Collection of low-level UI primitives for building design systems
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Tool for creating type-safe component variants
- **clsx**: Utility for constructing className strings conditionally

## Development Dependencies
- **vite**: Next-generation frontend build tool with fast HMR
- **tsx**: TypeScript execution environment for Node.js development
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific development tooling
- **esbuild**: Fast JavaScript bundler for production builds

## Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation

## UI and Styling
- **lucide-react**: Modern icon library with React components
- **date-fns**: Modern JavaScript date utility library
- **embla-carousel-react**: Carousel component for React applications
- **cmdk**: Command menu component for React applications