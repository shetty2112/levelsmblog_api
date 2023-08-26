import mysql from "mysql";

export const db = mysql.createConnection({
    host: "database-lsmblog.cvu7i63hnnos.us-west-2.rds.amazonaws.com",
    user: "root",
    password: "shetty1234",
    database: "blog"
}) 