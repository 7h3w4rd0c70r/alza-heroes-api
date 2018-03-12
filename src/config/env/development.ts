
module.exports = {
    environment: 'development',
    server: {
        host: '0.0.0.0',
        port: 8080,
    },
    params: {
        sendErrorStackTrace: true,
    },
    mongoose: {
        uri: 'mongodb://127.0.0.1:27017',
        db: 'alza-heroes',
    },
}
