/**@type {import("drizzle-kit").Config} */
export default {
  schema: "./config/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:vRJ5f7eHPyFS@ep-square-boat-a527ddbk.us-east-2.aws.neon.tech/neondb?sslmode=requireL',
  }
};

