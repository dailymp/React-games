import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './lobby-actions.styles';


interface LobbyActionsProps extends WithStyles<typeof styles> {
  nickname: string;
  selectedRoom: string;
  onNicknameChange: React.ChangeEventHandler<HTMLInputElement>;
  onJoinRoomRequest: () => void;
};

const LobbyActionsComponentInner: React.StatelessComponent<LobbyActionsProps> = (props) =>
  <React.Fragment>
    
    <Button
      className={props.classes.joinButton}
      variant="contained" 
      size="large" 
      color="secondary"
      onClick={props.onJoinRoomRequest}
      disabled={!enrollFieldsInformed(props.nickname, props.selectedRoom)}
    >
      Join
    </Button>
  </React.Fragment>

const enrollFieldsInformed = (nickname: string, selectedRoom: string) =>
  (!!(nickname && selectedRoom));



export const LobbyActionsComponent =
  withStyles(styles)<LobbyActionsProps>(LobbyActionsComponentInner);
