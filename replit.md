# Overview

Tech EduVate is a modern educational platform specializing in DevOps and Cloud computing training. The application is built as a single-page website featuring a professional, animated design that showcases courses, testimonials, pricing, and contact functionality. The platform offers comprehensive training programs in DevOps, DevSecOps, AWS, Azure, and Google Cloud Platform, targeting professionals looking to advance their careers in cloud technologies.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with React 18 and TypeScript, utilizing a modern component-based architecture. Key design decisions include:

- **Component Structure**: Modular components organized by functionality (Navigation, HeroSection, CoursesSection, etc.), promoting reusability and maintainability
- **Styling Framework**: Tailwind CSS with shadcn/ui components for consistent design system and rapid development
- **State Management**: React Query (TanStack Query) for server state management, eliminating the need for complex state management libraries
- **Routing**: Wouter for lightweight client-side routing, chosen for its minimal bundle size
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Animation System**: CSS-based animations with Tailwind utilities for smooth user interactions

## Backend Architecture

The backend follows a REST API architecture with Express.js:

- **Server Framework**: Express.js with TypeScript for type safety and modern JavaScript features
- **API Design**: RESTful endpoints following conventional patterns (/api/contact for contact form submissions)
- **Data Storage**: In-memory storage implementation with interfaces designed for easy database migration
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions

Currently implements an in-memory storage pattern with clear interfaces:

- **Storage Interface**: IStorage interface defining data operations (getUser, createUser, createContactSubmission)
- **Memory Implementation**: MemStorage class for development and testing
- **Schema Design**: Drizzle ORM schemas prepared for PostgreSQL migration
- **Data Models**: User management and contact submission entities with proper TypeScript typing

## Development Environment

- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Custom Vite integration with Express for full-stack development
- **Hot Module Replacement**: Enabled for rapid development feedback
- **TypeScript**: Strict mode enabled with path mapping for clean imports

## Design System

- **Component Library**: shadcn/ui providing consistent, accessible components
- **Theme System**: CSS custom properties for dynamic theming with dark mode support
- **Typography**: Inter font for modern, readable text rendering
- **Color Palette**: Blue/purple gradient scheme with semantic color naming

# External Dependencies

## UI and Styling
- **@radix-ui/react-\***: Headless UI components for accessibility and flexibility
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Type-safe variant system for component styling
- **lucide-react**: Icon library for consistent iconography

## Data Management
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling and validation
- **zod**: Runtime type validation and schema definition
- **drizzle-orm**: Type-safe database ORM prepared for PostgreSQL

## Database
- **@neondatabase/serverless**: Serverless PostgreSQL driver (configured but not yet implemented)
- **drizzle-kit**: Database migration and schema management tools

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **wouter**: Lightweight routing library
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

## Runtime Environment
- **express**: Web application framework
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds