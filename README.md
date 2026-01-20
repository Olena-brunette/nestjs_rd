# NestJS Project

NestJS application with layered architecture.

## Project Architecture

The project is organized into four main layers:

### Domain Layer (`src/domain/`)

Contains core business entities and repository interfaces.

```
domain/
├── entities/
│   └── user.entity.ts                    # User entity
└── repositories/
    └── user.repository.interface.ts      # Repository interface
```

### Application Layer (`src/application/`)

Contains use cases - the application business logic.

```
application/
├── use-cases/
│   └── users/
│       └── list-users.use-case.ts        # List users use case
└── modules/
    └── users.module.ts                   # Users module
```

### Infrastructure Layer (`src/infrastructure/`)

Contains implementations for repositories, database connections, and configuration.

```
infrastructure/
├── database/
│   └── repositories/
│       └── user.repository.ts            # User repository implementation
├── config/
│   ├── app.config.ts                     # App configuration
│   └── config.validation.ts              # Config validation
└── modules/
    └── database.module.ts                # Database module
```

### Presentation Layer (`src/presentation/`)

Contains controllers, DTOs, and mappers for handling HTTP requests.

```
presentation/
├── http/
│   ├── controllers/
│   │   ├── app.controller.ts             # Main controller
│   │   ├── health.controller.ts          # Health check
│   │   └── users.controller.ts           # Users endpoints
│   └── dto/
│       └── user-response.dto.ts          # Response DTO
├── mappers/
│   └── user.mapper.ts                    # Entity/DTO mapper
└── modules/
    └── users-presentation.module.ts      # Presentation module
```

## Project Structure

```
nestjs_rd/
├── src/
│   ├── main.ts                     # Entry point
│   ├── app.module.ts               # Root module
│   │
│   ├── domain/                     # Domain layer
│   │   ├── entities/               # Entities
│   │   └── repositories/           # Repository interfaces
│   │
│   ├── application/                # Application layer
│   │   ├── use-cases/              # Use cases
│   │   └── modules/                # Modules
│   │
│   ├── infrastructure/             # Infrastructure layer
│   │   ├── config/                 # Configuration
│   │   ├── database/               # Database
│   │   └── modules/                # Modules
│   │
│   └── presentation/               # Presentation layer
│       ├── http/                   # HTTP
│       │   ├── controllers/        # Controllers
│       │   └── dto/                # DTOs
│       ├── mappers/                # Mappers
│       └── modules/                # Modules
│
├── dist/                           # Compiled files
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
└── eslint.config.mjs               # ESLint config
```

## Why This Architecture?

Each layer has a specific responsibility:
- **Domain** - business  rules
- **Application** - use cases
- **Infrastructure** - external integrations (DB, APIs, configs)
- **Presentation** - communication with clients (HTTP, WebSocket, etc.)

This separation makes the code easier to navigate and understand.

Layers are isolated and can be tested independently.

When technologies or requirements change, only one layer needs to be updated - changes don't affect the entire codebase.

The architecture supports growth.

### Dependency Direction

Dependencies flow: `Presentation` → `Application` → `Domain` ← `Infrastructure`. This ensures business logic isn't coupled to frameworks or external services.




