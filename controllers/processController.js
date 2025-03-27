// Dummy Post API Handler

const path = require("path");
const fs = require("fs");
const c8 = require("./../config/camunda");
const {triggerMessages} = require("./../services/workers.js");


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

const triggerMessage = async (req, res)=>{
  const {messageName, correlationId} = req.body;
  triggerMessages(messageName, correlationId);
  res.status(200).json({ message: "this is Trigger Message" });
}

module.exports = { postDeploy, triggerMessage };
