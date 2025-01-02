# TODO Frontend

A **task management application** built with **Next.js**, **TypeScript**, and **TailwindCSS**.

## Features
- Create, edit, and delete tasks.
- Task status tracking.
- Responsive design.
- Themed components with TailwindCSS.

## Technologies Used
- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Strongly typed JavaScript.
- **TailwindCSS**: Utility-first CSS framework.
- **PNPM**: Fast package manager.
- **ESLint**: Code quality and linting.
- **PostCSS**: CSS transformations and optimizations.

## Folder Structure
```plaintext
|-- _forms          # Forms for task management
|-- app             # Next.js app directory
|-- components      # Reusable UI components
|-- public          # Static assets
|-- services        # API and business logic
|-- theme           # Theming configuration
|-- .env            # Environment variables
```

### Key Files
- **`package.json`**: Project dependencies and scripts.
- **`next.config.ts`**: Next.js configuration.
- **`tailwind.config.ts`**: TailwindCSS configuration.
- **`tsconfig.json`**: TypeScript configuration.
- **`services/todo.ts`**: Logic for handling tasks.
- **`_forms/TaskForm.tsx`**: Task form component.
- **`components/TaskLists.tsx`**: Task list UI.

## Installation

### Prerequisites
- Node.js (>= 16.x)
- PNPM (>= 8.x)

### Steps
```bash
# repository
clone the repository

# Navigate to the project directory
$ cd "your_cloned_repo"

# Install dependencies
### use any of available package manager

$ pnpm install

# Set up environment variables
Rename .env.example to .env (.env has been added already) 

# Start the development server
$ pnpm dev
```

## Scripts
- **`pnpm dev`**: Start the development server.

## Development Notes
- The project uses a modular architecture to keep the codebase maintainable.
- Components are reusable and follow a theming pattern.
- Static assets are located in the `public/` directory.
