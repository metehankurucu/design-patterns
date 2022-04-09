import DeployBase from "./DeployBase";

class NodejsDeploy extends DeployBase {
  protected installDependencies(): void {
    console.log("Running install script for Node.js app..");
  }

  protected build(): void {
    console.log("Running build script for Node.js app");
  }

  protected test(): void {
    console.log("Running test script for Node.js app");
  }

  protected deploy(): string {
    console.log("Deploying Node.js application..");
    return "https://deployed.app";
  }
}

export default NodejsDeploy;
