import * as React from 'react';
import { connect } from 'react-redux';

import { LobbyComponent } from './lobby.component';


interface LobbyContainerProps {

}

class LobbyContainerInner extends React.Component<LobbyContainerProps> {
 

  public render() {
    return (
      <LobbyComponent
       
      />
    );
  }
}

// TODO: Typings.
const mapStateToProps = (state) => ({
  
})

// TODO: Typings.
const mapDispatchToProps = (dispatch) => ({
 
});

export const LobbyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LobbyContainerInner);
