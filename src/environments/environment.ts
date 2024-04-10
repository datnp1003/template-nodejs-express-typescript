export const environment = {
    connectionString:{
        mongo: 'mongodb://localhost:27017/express-mongo',
        sql: 'mssql://localhost:1433/express-sql',
        dynamoDb: {
            region: 'us-west-2',
            endpoint: 'http://localhost:8000',
            accessKeyId: 'local',
        }
    }
};