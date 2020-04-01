import { connect } from "react-redux";
import Lobby from "./lobby";

const mSTP = state => ({
    currentUser: state.session.user,
    rooms: Object.values(state.rooms)
});

const mDTP = dispatch => ({
    // receiveRooms: rooms => dispatch(receiveRooms(rooms)),
    // receiveRoom: room => dispatch(receiveRoom(room)),
    // createRoom: userData => dispatch(createRoom(userData)),
    // joinRoom: payload => dispatch(joinRoom(payload)),
    // removeRoom: id => dispatch(receiveRemoveRoom(id))
});

export default connect(mSTP, mDTP)(Lobby);
