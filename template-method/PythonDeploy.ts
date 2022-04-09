import DeployBase from "./DeployBase";

class PythonDeploy extends DeployBase {
  protected installDependencies(): void {
    console.log("Running install script for Python app..");
  }

  protected build(): void {
    console.log("Running build script for Python app");
  }

  protected test(): void {
    console.log("Running test script for Python app");
  }

  protected deploy(): string {
    console.log("Deploying Python application..");
    return "https://deployed.app";
  }
}

export default PythonDeploy;
