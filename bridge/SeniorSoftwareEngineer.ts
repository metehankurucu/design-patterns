import Job from "./Job";

class SeniorSoftwareEngineer implements Job {
  title = "Senior Software Engineer";

  checkQualifications = () => {
    console.log(`Qualifications checked for ${this.title}`);
  };
}

export default SeniorSoftwareEngineer;
