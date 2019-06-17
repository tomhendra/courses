const merge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  test: 'test',
  production: 'prod',
};

let env = envs[process.env.NODE_ENV || 'development'];

if (env !== 'prod') {
  require('dotenv').config({ path: `./.env/.env.${env}` });
  env = 'dev';
} 

// require either webpack.dev or webpack.prod
const envConfig = require(`./webpack/webpack.${env}.js`);
module.exports = merge(common, envConfig);
