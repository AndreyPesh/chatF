export interface Room {
  id: string;
  roomName: string;
  users: [{ id: string; fullName: string }];
}
