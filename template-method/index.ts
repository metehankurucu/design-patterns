import DeployBase from "./DeployBase";
import NodejsDeploy from "./NodejsDeploy";
import PythonDeploy from "./PythonDeploy";

(() => {
  let deploy: DeployBase;

  deploy = new NodejsDeploy();
  deploy.run("git-repo-url");

  console.log();

  deploy = new PythonDeploy();
  deploy.run("git-repo-url");
})();
