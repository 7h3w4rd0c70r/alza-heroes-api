
export type Config = {
    environment: string;
    configEnv: string;
    server: ServerConfig;
    params: ParamsConfig;
    mongoose: MongooseConfig;
};

export type ServerConfig = {
    host: string;
    port: number;
};

export type ParamsConfig = {
    sendErrorStackTrace: boolean;
};

export type MongooseConfig = {
    uri: string;
    db: string;
};

export default Config;
