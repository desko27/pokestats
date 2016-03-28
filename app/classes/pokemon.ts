export class Pokemon {
  
  // pokemon list data
  id: number;
  name: string;
  resource_uri: string;

  // api full data
  stats: Object[];

  // displaying functions
  public getOrderedStats() { // NOT WORKING
      return this.stats === undefined ? [] : this.stats.reverse();
  }

}