import Job from "./Job";

abstract class InterviewProcess {
  protected job: Job;
  protected interviewStep: string;

  constructor(job: Job, interviewStep: string) {
    this.job = job;
    this.interviewStep = interviewStep;
  }

  public abstract interview(): void;
}

export default InterviewProcess;
