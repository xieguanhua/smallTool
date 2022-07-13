import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config:PowerPartial<EggAppConfig> = {
    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1657698132491_7258',
    //  add your config here
    middleware: [ 'errorHandler' ],
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true,
    },
    security: {
      csrf: {
        enable: false,
      },
      domainWhiteList: [ '*' ], // 白名单
    },
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
