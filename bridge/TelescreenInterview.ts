import InterviewProcess from "./InterviewProcess";
import Job from "./Job";

class TelescreenInterview extends InterviewProcess {
  constructor(job: Job) {
    super(job, "Telescreen Interview");
  }

  public interview(): void {
    console.log(
      `${this.interviewStep} started for ${this.job.title} position.`
    );
    this.job.checkQualifications();
    console.log(
      `${this.interviewStep} finished for ${this.job.title} position.`
    );
  }
}

export default TelescreenInterview;
