# Salary Service

A backend microservice built with Node.js, NestJS, MongoDB (Mongoose), and TypeScript.
The service manages roles, role categories, and salary entries, with validation, automated tests, and full CRUD capabilities.

This project is part of a larger system - [Anonymous Salary Reports](https://github.com/Anonymous-Salary-Reports)

## 🛠️ Tech Stack
| Layer              | Technology                               |
|--------------------|------------------------------------------|
| **Runtime**        | Node.js                                  |
| **Framework**      | NestJS                                   |
| **Language**       | TypeScript                               |
| **Database**       | MongoDB + Mongoose ODM                   |
| **Authentication** | JWT, Passport                            |
| **Testing**        | Jest + Supertest + mongodb-memory-server |
| **Validation**     | Class-validator / class-transformer      |
| **Code Quality**   | ESLint + Prettier                        |


## 🔌 API Endpoints
- `POST /role-category` - Add a new role category
- `GET /role-category` - Get all role categories
- `POST /role` - Add a new role
- `GET /role/:categoryId` - Get all roles for a given category ID
- `POST /salary/create` - Add a new salary entry
- `GET /salary/get-all-by-role-id/:roleId` - Get all salary entries for a given role ID
- `POST /salary/toggle-like/salary/:salaryId` - Toggle like for a salary entry
- `POST /salary/toggle-dislike/salary/:salaryId` - Toggle dislike for a salary entry

## 🚀 Getting Started
### Prerequisites

Before running this service, ensure you have the following installed:

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+
- **MongoDB** 6.0+ (or MongoDB Atlas account for cloud database)
- **Git** (for cloning the repository)

### Installation
- Run `git clone https://github.com/Anonymous-Salary-Reports/salary-reports-salary-service.git`  
- Run `cd salary-reports-salary-service`
- Run `npm install`
- create .env file with properties:  
MONGODB_URI, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_DATABASE, PORT
- Create also property JWT_ACCESS_SECRET which has to match the one in the auth service
- If you're on windows and using WSL, run docker desktop
- Run `docker compose up -d`
- Start the application by `npm run start:dev`

## 🧪 Testing
- Run `npm run test` to execute service integration tests
- Run `npm run test:e2e` to execute end-to-end tests

## Future Improvements
- [ ] Implement pagination for GET endpoints
- [ ] Add search capabilities by field name, operator and value/s
- [ ] Add functionalities to delete salaries, roles and role categories