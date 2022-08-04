const allEnv = {
    development: "https://yapi.lingzhuyun.com:3000/mock/156",
    // development: "http://192.168.2.228:7777",
    // development: "https://demoapi.lingzhuyun.com/lzcloud",
    // development: "https://api.lingzhuyun.com/lzcloud",
    sit: "http://192.168.2.228:7777",
    uat: "https://demoapi.lingzhuyun.com/lzcloud",
    production: "https://api.lingzhuyun.com/lzcloud"
    // production: "https://yapi.lingzhuyun.com:3000/mock/156"
};
export const getHost = function () {
    const env = import.meta.env
    return allEnv[env.VITE_MODE_NAME];
};
