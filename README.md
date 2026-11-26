# Fullstack Trello Clone: Next.js 14, Server Actions, React, Prisma, Tailwind, PostgreSQL

![image](https://raw.githubusercontent.com/bikrantlabs/flowdeck/main/public/demo-img.png)

This is a repository for Fullstack Trello Clone: Next.js 14, Server Actions, React, Prisma, Tailwind, PostgreSQL

Key Features:

- Auth
- Organizations / Workspaces
- Board creation
- Unsplash API for random beautiful cover images
- Activity log for entire organization
- Board rename and delete
- List creation
- List rename, delete, drag & drop reorder and copy
- Card creation
- Card description, rename, delete, drag & drop reorder and copy
- Card activity log
- Board limit for every organization
- Landing page
- PostgreSQL DB
- Prisma ORM
- shadcnUI & TailwindCSS

### Prerequisites

- Docker Desktop with the `docker compose` command
- A `.env` file configured with the required app and Supabase credentials (see below)

### Cloning the repository

```shell
git clone https://github.com/BikrantJung/trello-clone.git
```

### Setup .env file

```js
NEXT_PUBLIC_APP_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

//For reference: https://masteringnuxt.com/blog/setting-up-prisma-with-supabase
DATABASE_URL=
DIRECT_URL=

// Obtain from https://unsplash.com/developers
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
NEXT_PUBLIC_UNSPLASH_SECRET_KEY=

```

### Build and run with Docker

The Docker image uses Node.js 18 and the pnpm version compatible with this project's lockfile. Dependencies run inside Docker, so Node.js and pnpm do not need to be installed on your Mac.

Build the image:

```shell
docker compose build
```

Compose starts a local PostgreSQL 16 database for development. The app container always uses this database, even if your `.env` contains different `DATABASE_URL` or `DIRECT_URL` values. The database is available from your Mac at `localhost:5433`; its data persists in a named Docker volume.

Before the first startup, start the database and push the Prisma schema to it:

```shell
docker compose up -d db
docker compose run --rm app pnpm db:push
```

Start the development server:

```shell
docker compose up
```

Open [http://localhost:3000](http://localhost:3000). The project directory is mounted into the container for live editing, and dependencies are stored in a separate Docker volume.

Stop the application with `Ctrl+C`, or run:

```shell
docker compose down
```

`docker compose down` keeps the local database data. `docker compose down -v` deletes it.

Production is configured separately: set `DATABASE_URL` and `DIRECT_URL` as secrets in your hosting platform. Do not use the local Compose URLs in production.

For subsequent starts, use `docker compose up`. Rebuild the image after changing the Dockerfile or environment used during the image build:

```shell
docker compose build
docker compose up
```

If dependencies change in `package.json` or `pnpm-lock.yaml`, rebuild and refresh the existing dependency volume:

```shell
docker compose build
docker compose run --rm app pnpm install --frozen-lockfile --force
docker compose up
```

## Available commands

Run application and database commands in the container with `docker compose run --rm app pnpm [command]`.

| command                   | description                                    |
| :------------------------ | :--------------------------------------------- |
| `dev`                     | Starts a development instance of the app       |
| `db:push`                 | Synchronizes current schema.prisma to database |
| `db:generate`             | Generates types for Prisma                     |
| `db:reset`                | Resets the database                            |
| `ui:add [component_name]` | Installs any component from shadcn/ui library  |
