export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:7mdLWuSXt0Ko@ep-mute-poetry-a5rn1mbr.us-east-2.aws.neon.tech/content_ai?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:7mdLWuSXt0Ko@ep-mute-poetry-a5rn1mbr.us-east-2.aws.neon.tech/content_ai?sslmode=require",
  },
};
