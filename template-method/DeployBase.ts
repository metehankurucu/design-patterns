abstract class DeployBase {
  public run(repoUrl: string) {
    try {
      this.clone(repoUrl);
      this.installDependencies();
      this.build();
      this.test();
      const appUrl = this.deploy();
      this.notify(`App successfully deployed to ${appUrl}`);
    } catch (error) {
      this.notify(
        `Deploy failed with message: ${JSON.stringify(
          (error as Error).message
        )}`
      );
    }
  }

  protected clone(repoUrl: string) {
    console.log(`Cloning project from ${repoUrl}..`);
  }

  protected abstract installDependencies(): void;

  protected abstract build(): void;

  protected abstract test(): void;

  protected abstract deploy(): string;

  protected notify(message: string): void {
    console.log(message);
  }
}

export default DeployBase;
