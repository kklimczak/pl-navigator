export class Building {

  constructor(
    public name: string,
    public aliases: string,
    public address: string,
    public geometry: [number, number][],
    public entries: [number, number][]
  ) {}
}
