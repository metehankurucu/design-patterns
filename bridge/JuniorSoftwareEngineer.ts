import Job from "./Job";

class JuniorSoftwareEngineer implements Job {
  title = "Junior Software Engineer";

  checkQualifications = () => {
    console.log(`Qualifications checked for ${this.title}`);
  };
}

export default JuniorSoftwareEngineer;
