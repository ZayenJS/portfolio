export class Reducer {
  public static matches = (reducer: any, prop: string) => Object.keys(reducer).includes(prop);
}
