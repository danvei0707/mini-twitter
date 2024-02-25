import 'dotenv/config';

const { 
    PORT,
    MYSQL_HOST, 
    MYSQL_USER, 
    MYSQL_PASSWORD, 
    MYSQL_DATABASE 
} = process.env;

export { 
    PORT,
    MYSQL_HOST, 
    MYSQL_USER, 
    MYSQL_PASSWORD, 
    MYSQL_DATABASE 
};

