# Simple Notes Application
Welcome to the Simple Notes Application! This project allows you to manage notes using a MariaDB database. Follow the instructions below to get the server up and running.

## Prerequisites
Ensure you have the following installed:

- Docker - Download and Install Docker
- Docker Compose - Install Docker Compose
- Node.js (v18.x or later) - Download and Install Node.js
- Bun.js - Install Bun.js

## Installation and Setup
- Clone the Repository

```bash
git clone https://github.com/yourusername/simple-notes-app.git
cd simple-notes-app
```

- Install Dependencies

```bash

bun install
Running the Server
Start the Database
```

- Launch the MariaDB container using Docker Compose:

```bash
docker-compose up
Run Database Migrations
```

- Initialize the database schema:

```bash
npm run migrate
Start the Development Server
```

- Start the server:

```bash
bunx next dev --turbo
```
Alternatively:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.