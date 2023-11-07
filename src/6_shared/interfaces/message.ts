import { ROLE_DIALOGUE_PARTICIPANTS } from '../enums/roles';

export interface MessageData {
  id: number;
  role: ROLE_DIALOGUE_PARTICIPANTS;
  userPhotoUrl: string;
  time: string;
  message: string;
}
