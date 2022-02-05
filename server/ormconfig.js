module.exports = {
    type: 'mysql',
  // Updated upstream
    //host: 'miss-usa-dev.c7y9em8extsj.us-east-2.rds.amazonaws.com',
    // username: 'admin',
    // password: 'softsuave#123',
    // database: "miss-usa-dev",
    // charset: 'utf8',
    // driver: 'mysql',
        synchronize: false,
    // entities:[
    //  // '**/**.entity.ts',
    //  "dist/**/*.entity.js"
  
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'practice',
    charset: 'utf8',
    
    synchronize: false,
    entities: [
      '**/**.entity.ts',
    ],
    logging: process.env.NODE_ENV !== 'production' ? 'all' : 'error',
    migrations: ["migration/*.ts"],
    cli: {
      migrationsDir: "migration"
    },
    connectTimeout: 30000,
    acquireTimeout: 30000
  };