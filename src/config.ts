/**
 * Config files
 */
export const configuration = () => ({
  db: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  host: {
    url: process.env.HOST_URL,
    port: process.env.HOST_PORT,
  },
  jwt: {
    secret: process.env.JWT_secret,
    expiresIn: process.env.JWT_expiresIn,
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: +process.env.MAIL_PORT,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
