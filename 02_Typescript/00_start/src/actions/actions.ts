import { push } from 'connected-react-router';
import { ApiModel,  messageFactory } from '../api';
import { Model } from '../store';
import { BaseAction } from './base';
import { actionIds } from './const';

// Target: STORE
export const storeSessionInfo = (nickname: string, room: string): BaseAction<Model.SessionInfoState> => ({
  type: actionIds.SETUP_SESSION_INFO,
  payload: { nickname, room }
});



// Target: API
export const disconnectRoomRequest = (): BaseAction => ({
  type: actionIds.DISCONNECT,  
});




// Target: STORE
export const onMessageReceived = (message: Model.Message): BaseAction<Model.Message> => ({
  type: actionIds.MESSAGE_RECEIVED, 
  payload: message,
});



