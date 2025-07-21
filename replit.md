# GK Cloud Solutions - AI Flashcard Learning Platform

## Overview

This is a full-stack web application for "GK Cloud Solutions" - an AI flashcard learning platform that uses the proven Leitner method for spaced repetition learning. The application is built as a modern React SPA with an Express.js backend, featuring a landing page for an AI learning product called "Master AI - The Leitner Way."

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with custom configuration for development and production
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite middleware integration

### Project Structure
- `client/` - Frontend React application
- `server/` - Backend Express.js application
- `shared/` - Shared types and schemas between frontend and backend
- `migrations/` - Database migration files

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with animated elements and call-to-action
   - Products showcase (Master AI, Intelligence, Programming cards)
   - Features explanation with Leitner method visualization
   - Testimonials from users
   - Contact form with validation
   - Footer with company information

2. **UI System**: Complete shadcn/ui implementation with 40+ components including forms, dialogs, navigation, data display, and feedback components

3. **Custom Hooks**:
   - `use-scroll-to`: Smooth scrolling navigation
   - `use-parallax`: Parallax scrolling effects
   - `use-mobile`: Responsive design utilities
   - `use-toast`: Toast notification system

### Backend Components
1. **Database Schema**: User management system with Drizzle ORM
2. **Storage Layer**: Abstracted storage interface with in-memory implementation
3. **Route System**: Modular route registration system
4. **Development Tools**: Vite integration for seamless development experience

## Data Flow

### Frontend Data Flow
1. React Query manages all server state and caching
2. Form data flows through React Hook Form with Zod validation
3. UI state managed through React hooks and context
4. Smooth animations using Framer Motion

### Backend Data Flow
1. Express middleware handles request processing and logging
2. Storage interface abstracts database operations
3. Drizzle ORM provides type-safe database interactions
4. Session management through PostgreSQL store

### Database Schema
- **Users Table**: Basic user management with username/password
- **Schema Validation**: Zod schemas for runtime type checking
- **Type Safety**: Full TypeScript integration with Drizzle

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Primitive UI components for accessibility
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast bundling for production
- **TypeScript**: Static type checking
- **Replit Integration**: Development environment optimization

### Database and Backend
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database toolkit
- **Connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations handle schema updates

### Environment Configuration
- Development: Local development with Vite dev server
- Production: Optimized builds with static asset serving
- Database: Environment-based connection strings

### Hosting Considerations
- Static assets served from Express in production
- Database migrations run via `drizzle-kit push`
- Environment variables required for database connectivity

### Development vs Production
- **Development**: Hot reload, source maps, development banners
- **Production**: Optimized bundles, static serving, error handling
- **Replit Integration**: Special handling for Replit development environment