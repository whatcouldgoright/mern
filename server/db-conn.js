const mongoose = require ('mongoose')

const {DB_CONN, DB_USER, DB_PASS } = process.env;
console.log('about to connect as' + DB_USER);
mongoose
    .connect(
        DB_CONN,
        {
            auth:
                {
                    user: DB_USER,
                    password: DB_PASS
                },
            useNewUrlParser: true
        }
    )
    .then(() => console.log(`Successfully connected to Mongo with username: ${DB_USER}`))
    .catch(console.error);