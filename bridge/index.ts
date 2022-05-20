import JuniorSoftwareEngineer from "./JuniorSoftwareEngineer";
import SeniorSoftwareEngineer from "./SeniorSoftwareEngineer";
import TechnicalInterview from "./TechnicalInterview";
import TelescreenInterview from "./TelescreenInterview";

(() => {
  const seniorSWE = new SeniorSoftwareEngineer();
  const juniorSWE = new JuniorSoftwareEngineer();

  console.log("Interview Process For Senior SWE");
  let telescreenInterview = new TelescreenInterview(seniorSWE);
  telescreenInterview.interview();

  let technicalInterview = new TechnicalInterview(seniorSWE);
  technicalInterview.interview();

  console.log();

  console.log("Interview Process For Junior SWE");
  telescreenInterview = new TelescreenInterview(juniorSWE);
  telescreenInterview.interview();

  technicalInterview = new TechnicalInterview(juniorSWE);
  technicalInterview.interview();
})();
