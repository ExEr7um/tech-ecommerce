export default ({ env }) => ({
  app: {
    keys: env.array("APP_KEYS"),
  },
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
})
