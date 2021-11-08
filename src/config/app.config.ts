export default () => ({
    environment: process.env.NODE_ENV || 'developlemt',
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    }
})