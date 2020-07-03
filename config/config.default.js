'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.name = 'VueClub';

  config.description = 'Vue：Vue.js专业中文社区';
  config.keywords = 'Vue.js中文社区, vue2, Vue3, vue2.0, vue2.0文档,vue, vue-router , vue-valider , nodejs';

  config.site_logo = '/public/images/vue.png';

  config.site_icon = '/public/images/vue.png';

  // debug 为 true 时，用于本地调试
  config.debug = false;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519887194138_3450';

  config.host = 'http://vue-js.com';

  config.session_secret = 'vue_club_secret'; // 务必修改

  // add your config here
  config.middleware = [ 'locals', 'authUser', 'blockUser', 'errorPage', 'errorHandler' ];

  config.authUser = {
    enable: true,
    match: '/',
  };

  // 是否允许直接注册（否则只能走 github 的方式）
  config.allow_sign_up = true;

  // cdn host，如 http://cnodejs.qiniudn.com
  config.site_static_host = process.env.EGG_SITE_STATIC_HOST || ''; // 静态文件存储域名

  config.mini_assets = process.env.EGG_MINI_ASSETS || true;

  // 版块
  config.tabs = [[ 'share', '分享' ], [ 'ask', '问答' ], [ 'job', '招聘' ]];

  // RSS配置
  config.rss = {
    title: 'Vue：Vue.js专业中文社区',
    link: 'http://vue-js.com',
    language: 'zh-cn',
    description: 'Vue：Vue.js专业中文社区',
    // 最多获取的RSS Item数量
    max_rss_items: 50,
  };

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  config.qn_access = {
    accessKey: 'K1EzvixYD2GbvvsiX3ko6g989GuVMUZkyrCdUl5o',
    secretKey: 'ggoFiqnCsE_Un4XpKPRqYQJyke8_Yo6kApm2bcsh',
    bucket: 'vueclub',
    origin: 'https://static.vue-js.com',
  };

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  config.upload = {
    path: path.join(__dirname, '../app/public/upload/'),
    url: '/public/upload/',
  };

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
    layout: 'layout.html',
  };

  config.avatars_allow_hostname = [
    'avatars0.githubusercontent.com',
    'avatars1.githubusercontent.com',
    'avatars2.githubusercontent.com',
    'avatars.githubusercontent.com',
    'www.gravatar.com',
    'gravatar.com',
    'www.google-analytics.com',
  ];

  config.auth_cookie_name = 'vue_club';
  config.admins = {
    ADMIN_USER: true,
    ab8512: true,
    febobo: true,
  };

  config.siteFile = {
    '/favicon.ico': '/public/images/cnode_icon_32.png',
  };

  // database
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0',
    },
  };

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  // console.log(process.env.EGG_MONGODB_URL);
  // mongodb://vue_club_dev:vue_club_dev@mongodb:27017/vue_club_dev
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://vue_club_dev:vue_club_dev@127.0.0.1:27017/vue_club_dev',
    options: {
      server: { poolSize: 20 },
      reconnectTries: 10,
      reconnectInterval: 500,
    },
  };

  // passport
  config.passportGithub = {
    key: process.env.EGG_PASSPORT_GITHUB_CLIENT_ID || '981a5e0bb7aaa4b76443',
    secret: process.env.EGG_PASSPORT_GITHUB_CLIENT_SECRET || '55d43c59a806d35bf9f055b39725d85c19c9779d',
    callbackURL: 'https://vue-js.com/passport/github/callback',
    proxy: true,
  };

  config.passportLocal = {
    usernameField: 'name',
    passwordField: 'pass',
  };

  // 邮箱配置
  config.mail_opts = {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'vueclub@126.com',
      pass: '123456qq',
    },
  };

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: process.env.EGG_ALINODE_APPID || '85328',
    secret: process.env.EGG_ALINODE_SECRET || '17b232b05a5162b8e8e5ad3dee076f5af7a59887',
  };

  config.topic = {
    perDayPerUserLimitCount: 10,
  };

  config.list_topic_count = 20;

  // 每个 IP 每天可创建用户数
  config.create_user_per_ip = 1000;

  config.search = 'google'; // 'google', 'baidu', 'local'

  config.security = {
    csrf: {
      ignore: '/api/*/*',
    },
  };

  config.default_page = 1;
  config.default_limit = 20;

  return config;
};
