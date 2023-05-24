/**
 * Config files
 */
export default {
  db: {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'moviedb',
  },
  host: {
    url: 'http://localhost',
    port: '3000',
  },
  jwt: {
    secret: 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCTNDtKuBmm3jWg',
    expiresIn: '1200s',
  },
  mail: {
    host: 'smtp.ethereal.email',
    port: 587,
    user: 'libbie65@ethereal.email',
    pass: 'yHT7dDyFKmZxGBaN1P',
  },
};
