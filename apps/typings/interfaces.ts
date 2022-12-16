export interface Hallo {
  gruss: string;
}
export interface Player<T> {
  name: string;
  user_id: number;
  status: boolean; // am zug?
  //x oder y?
  data: T;
}
// Turn ?
// Board ?
// Win ?
