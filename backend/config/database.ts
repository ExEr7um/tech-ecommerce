import path from "path"

export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite")

  const connections = {
    mysql: {
      connection: {
        connectionString: env("DATABASE_URL"),
        database: env("DATABASE_NAME", "strapi"),
        host: env("DATABASE_HOST", "localhost"),
        password: env("DATABASE_PASSWORD", "strapi"),
        port: env.int("DATABASE_PORT", 3306),
        ssl: env.bool("DATABASE_SSL", false) && {
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          key: env("DATABASE_SSL_KEY", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        user: env("DATABASE_USERNAME", "strapi"),
      },
      pool: {
        max: env.int("DATABASE_POOL_MAX", 10),
        min: env.int("DATABASE_POOL_MIN", 2),
      },
    },
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        database: env("DATABASE_NAME", "strapi"),
        host: env("DATABASE_HOST", "localhost"),
        password: env("DATABASE_PASSWORD", "strapi"),
        port: env.int("DATABASE_PORT", 3306),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl: env.bool("DATABASE_SSL", false) && {
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          key: env("DATABASE_SSL_KEY", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        user: env("DATABASE_USERNAME", "strapi"),
      },
      pool: {
        max: env.int("DATABASE_POOL_MAX", 10),
        min: env.int("DATABASE_POOL_MIN", 2),
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME", "data.db")
        ),
      },
      useNullAsDefault: true,
    },
  }

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  }
}
