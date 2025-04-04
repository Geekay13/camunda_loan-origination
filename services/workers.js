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
  createWorker("createLoan", createLoanHandler)
  
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
  const variables = job.variables;
  const salary = variables.pi.annual_salary;
  let creditScore;

  if (salary > 20000) {
    creditScore = 850;
  } else if (salary >=  10000 && salary <= 20000) {
    creditScore = 750;
  } else if (salary >= 5000 && salary <= 10000) {
    creditScore = 650;
  } else if ( salary < 5000){
    creditScore = 500;
  }
  return job.complete({ creditScore });
}

const createTicketHandler = (job) => {
  let ticketId = Math.floor(Math.random() * 10000000);
  return job.complete({ ticketId });
}

const createLoanHandler = (job) => {
  return job.complete();
}

const sendOfferMailHandler = (job) => {
  return job.complete();
}

const provideLoanHandler = (job) => {
  return job.complete();
}


const confirmationMailHandler = (job) => {
  return job.complete();
}
const sendRejectMailHandler = (job) => {
  return job.complete();
}
const declineApplicationHandler = (job) => {
  return job.complete();
}
const loanDeclineHandler = (job) => {
  return job.complete();
}
const sendApproveMailHandler = (job) => {
  return job.complete();
}
const sendReminderHandler = (job) => {
  return job.complete();
}