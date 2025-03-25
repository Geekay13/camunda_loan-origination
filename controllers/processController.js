// Dummy Post API Handler
const { Camunda8 } = require('@camunda8/sdk');
const path = require("path");
const fs = require("fs");

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
// const c8 = new Camunda8();
const zbc = c8.getZeebeGrpcApiClient();

const postDeploy = async  (req, res) => {
  const bpmnFolder = path.join(__dirname, "./../resource/process-files");
  const files = fs.readdirSync(bpmnFolder).map(file => path.join(bpmnFolder, file));
   files.forEach( async element => {
    const result = await zbc.deployResource({ processFilename: element });
  }); 
  res.status(200).json({ message: "this is post api" });
};

module.exports = { postDeploy };
