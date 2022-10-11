export type Routes = Route[];

export interface Route {
  path: string;
  component?: any;
  children?: Routes;
}
