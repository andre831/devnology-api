import pgPromise from "pg-promise";

const base = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: "localhost",
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSRGRES_DB,
};

const pgp = pgPromise({});

const db = pgp(base);

export { db };
