import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardLayout } from '../../common';
import {
  LobbyActionsComponent,
  LobbyHeaderComponent,
  RoomListComponent
} from './components';
import styles from './lobby.styles';
import { CardContentDTO, QuestionDTO } from '../../api/model';


interface LobbyProps extends WithStyles<typeof styles>{
  rooms: string[],
  updateRooms: () => void,
  selectedRoom: string,
  updateSelectedRoom: (room: string) => void,
  nickname: string,
  updateNickname: (nickname: string) => void,
  onJoinRoomRequest: () => void,
  onClick?: () => void;
  loadQuestion?: (question: QuestionDTO) => void;
  onChangeAnswer?: (newValue: boolean) => void;
  onChangeQuestion?: (newQuestion: number) => void;
  title?: string;
  subtitle?: string;
  footer?: string;
  currentPage?: number;
  answerGived?: string;
}

class LobbyComponentInner extends React.Component<LobbyProps> {
  public componentDidMount() {
    this.props.updateRooms();
  }

  private handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateNickname(e.target.value);
  }

  private handleSelectedRoomChange = (room: string) => {
    this.props.updateSelectedRoom(room);
  }

  public render() {
    return (
      <CardLayout>
        <Card className={this.props.classes.card}>
          <LobbyHeaderComponent />
          <CardContent className={this.props.classes.cardContent}>
            <Typography variant="subheading">
            Welcome to the trivia challenge!
            </Typography>
        {/*     <RoomListComponent
              rooms={this.props.rooms}
              selectedRoom={this.props.selectedRoom}
              onSelectedRoomChange={this.handleSelectedRoomChange}
            /> */}
             <Typography 
                        gutterBottom variant="headline" component="h2">
                        test
                        {this.props.title
                        }
                    </Typography>

                    <Typography 
                        variant="headline"
                        component="h2">
                        test2
                        {this.props.subtitle}
                    </Typography>

                    <Typography
                        variant="headline"
                        component="h2">
                        test23
                        {this.props.footer}

                    </Typography>
          </CardContent>
          <CardActions className={this.props.classes.cardActions}>
            <LobbyActionsComponent
              nickname={this.props.nickname}
              selectedRoom={this.props.selectedRoom}
              onJoinRoomRequest={this.props.onJoinRoomRequest}
              onNicknameChange={this.handleNicknameChange}
            />
          </CardActions>
        </Card>
      </CardLayout>
    )
  }
}

export const LobbyComponent = withStyles(styles)<LobbyProps>(LobbyComponentInner);

export const createInitialCardContent = (): CardContentDTO =>({ 
  title: 'Welcome to the trivia challenge!',
  subtitle: 'You will be presented with 10 True or False questions.',
  footer: 'Can you score 100 %?',
});
