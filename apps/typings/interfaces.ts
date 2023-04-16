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
export interface Game {
  id: number;
  user_x: string;
  user_x_avatar: string;
  user_o: string;
  user_o_avatar: string;
  win: string;
  created_at: Date;
}

export interface SessionData {
  game: { [key: string]: any };
  gameid: { [key: number]: any }
}

// export interface Session & Partial<SessionData>{
//   gameid: { [key: number]: any }
// }