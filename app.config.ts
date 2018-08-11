interface IConfig {
    [key: string]: IConfigProperties; // Index Signature
    development: IConfigProperties;
    staging: IConfigProperties;
    production: IConfigProperties;
}

interface IConfigProperties {
    [key: string]: any;
    apiEndpoint: string;
    debug: boolean;
}

const appConfig: IConfig = {
    development: {
        apiEndpoint: '/api/',
        debug: true,
    },
    staging: {
        apiEndpoint: '/api/',
        debug: false,
    },
    production: {
        apiEndpoint: '/api/',
        debug: false,
    },
};

export const config = (() => {
    let env: string = '';
    if (process.env.NODE_ENV) {
        env = process.env.NODE_ENV;
    } else {
        env = 'development';
    }
    return appConfig[env];
})();
