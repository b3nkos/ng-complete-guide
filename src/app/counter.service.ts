export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive(): void {
    this.activeToInactiveCounter++;
    console.log(`Active to Inactive ${this.activeToInactiveCounter}`);
  }

  incrementInactiveToActive(): void {
    this.inactiveToActiveCounter++;
    console.log(`Inactive to Active ${this.inactiveToActiveCounter}`);
  }
}
