import React from "react";

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const socket = MySocket.getSocket(this.props.currentUser.id);

    socket.off("lobby");
    socket.off("removeRoom");
    socket.off("updateRoom");

    socket.on("lobby", payload => {
      this.props.receiveRooms(payload.rooms);
      if (payload.roomId) {
        const user = this.props.currentUser;
        user.roomId = payload.roomId;
        this.props.joinRoom(user);
      }
    });

    socket.on("removeRoom", payload => {
      this.props.removeRoom(payload.id);
    });

    socket.on("updateRoom", data => {
      this.props.receiveRoom(data);
    });

    socket.emit("getRooms");
  }

  render() {
    return (
      <div className="lobby-page">
        <div className="lobby">
          <GameRooms
            className="game-rooms"
            currentUser={this.props.currentUser}
            rooms={this.props.rooms}
            createRoom={this.props.createRoom}
            joinRoom={this.props.joinRoom}
          />
        </div>
      </div>
    );
  }
}

export default Lobby;
