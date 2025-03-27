const { Camunda8 } = require('@camunda8/sdk');
const c8 = new Camunda8({
    ZEEBE_GRPC_ADDRESS: 'localhost:26500',
    ZEEBE_REST_ADDRESS: 'http://localhost:8080',
    ZEEBE_CLIENT_ID: 'zeebe',
    ZEEBE_CLIENT_SECRET: 'zecret',
    CAMUNDA_OAUTH_URL: 'http://localhost:18080/auth/realms/camunda-platform/protocol/openid-connect/token',
    CAMUNDA_TASKLIST_BASE_URL: 'http://localhost:8082',
    CAMUNDA_OPERATE_BASE_URL: 'http://localhost:8081',
    CAMUNDA_OPTIMIZE_BASE_URL: 'http://localhost:8083',
    CAMUNDA_TENANT_ID: '',
    CAMUNDA_SECURE_CONNECTION: false
  });
  module.exports = c8;