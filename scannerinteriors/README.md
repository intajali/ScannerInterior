# Scanner Interiors

Public site for Scanner Interiors Pvt Ltd. Most pages read the typed catalogue. The contact form saves an enquiry only after PostgreSQL confirms the insert.

## App

```bash
cd aura-interiors
npm install
npm run dev
```

Open http://localhost:3000.

## Database

Installed versions used by this setup: Prisma 7.10.1, `@prisma/client` 7.10.1, `@prisma/adapter-pg` 7.10.1, `pg` 8.23.1, and `tsx` 4.23.15 for the seed script. The connection string lives in `DATABASE_URL`. That variable is read only by Prisma CLI, the seed script, and `getPrismaClient()` on the server. It is not a `NEXT_PUBLIC_` variable, so Next.js does not send it to the browser.

### What you need to provide

PostgreSQL is not provisioned by this repository. Before migrating, you need:

1. A running PostgreSQL server.
2. An empty database, for example `aura_interiors`.
3. A role that can create tables in that database.
4. A `.env` file in `aura-interiors` with your own connection string.

```bash
cp .env.example .env
```

Edit `DATABASE_URL` and replace `USER`, `PASSWORD`, host, port, and database name. Example shape:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/aura_interiors"
```

Create the empty database with your own credentials, for example:

```bash
createdb aura_interiors
```

### Apply the schema and seed

The initial migration is already in `prisma/migrations`. It creates `Project`, `ProjectImage`, `Service`, and `Enquiry`.

```bash
npm run db:deploy
npm run db:seed
```

`db:deploy` applies the committed migration and does not prompt. Use `npm run db:migrate` when you are changing `prisma/schema.prisma` during development. Prisma will ask for a migration name.

`db:seed` loads the six services and seven demonstration projects. It does not insert enquiries. Running it again updates those records by slug. The contact form stores the chosen service as a relation, so seed the services before expecting a successful enquiry.

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env` to show the WhatsApp button on the contact page. Use digits and a country code, with no plus sign.

`npm run db:studio` opens Prisma Studio against `DATABASE_URL`.

### Server access

Import `getPrismaClient` from `src/lib/prisma.ts` in Server Components, route handlers, or scripts. Importing it from a Client Component throws. Enquiry writes go through `createEnquiry` in `src/features/enquiries/create-enquiry.ts`, which checks the input and stores `service` as a relation to `Service` when a service slug is supplied.

Generated client output is in `src/generated` and is gitignored. `npm install` runs `prisma generate`.
