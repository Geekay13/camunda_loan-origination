const c8 = require("./../config/camunda");

const zbc = c8.getZeebeGrpcApiClient();
const { ZeebeJob } = require("@camunda8/sdk/dist/zeebe/types");

const createWorker = (taskType, taskHandler) =>{
    return zbc.createWorker({ taskType, taskHandler});
}


const startProcess = async (variables) =>{
  const processInstance = await zbc.createProcessInstance({
    bpmnProcessId: 'Process_1f255lo', variables
  });
  return {
    message: `Started process instance ${processInstance.processInstanceKey}`,
    variables: processInstance.variables
  };
}

const worker = () => {
  createWorker("getCreditScore", getCreditScoreHandler)
  createWorker("createTicket", createTicketHandler)
  createWorker("sendOfferMail", sendOfferMailHandler)
  createWorker("provideLoan", provideLoanHandler)
  createWorker("confirmationMail", confirmationMailHandler)
  createWorker("sendRejectMail", sendRejectMailHandler)
  createWorker("declineApplication", declineApplicationHandler)
  createWorker("loanDecline", loanDeclineHandler)
  createWorker("sendApproveMail", sendApproveMailHandler)
  createWorker("sendReminder", sendReminderHandler)
  createWorker("declineApplication", declineApplicationHandler)
  createWorker("declineApplication", declineApplicationHandler)
  createWorker("declineApplication", declineApplicationHandler)
}

const triggerMessages = (messageName, correlationId) => {
  zbc.publishMessage({
    name: messageName,  // Must match the message name in your BPMN
    correlationKey: correlationId,  // Must match the correlation key in your process
    timeToLive: 30,  // Time in seconds the message should be buffered
    variables: {
      status: "approved",
      // Add any other variables you want to pass to the process
    }
  });
  return true;
}

module.exports = {worker, startProcess, triggerMessages}

const getCreditScoreHandler = (job) => {
  return job.complete({
    a: 1
  });
}

const createTicketHandler = (job) => {
  return job.complete({
    b: 2
  });
}

const sendOfferMailHandler = (job) => {
  return job.complete({
    c: 3
  });
}

const provideLoanHandler = (job) => {
  return job.complete({
    d: 4
  });
}


const confirmationMailHandler = (job) => {
  return job.complete({
    e: 5
  });
}
const sendRejectMailHandler = (job) => {
  return job.complete({
    f: 6
  });
}
const declineApplicationHandler = (job) => {
  return job.complete({
    h: 7
  });
}
const loanDeclineHandler = (job) => {
  return job.complete({
    i: 8
  });
}
const sendApproveMailHandler = (job) => {
  return job.complete({
    j: 9
  });
}

const sendReminderHandler = (job) => {
  return job.complete({
    k: 10
  });
}