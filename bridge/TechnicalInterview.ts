import InterviewProcess from "./InterviewProcess";
import Job from "./Job";

class TechnicalInterview extends InterviewProcess {
  constructor(job: Job) {
    super(job, "Technical Interview");
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

export default TechnicalInterview;
