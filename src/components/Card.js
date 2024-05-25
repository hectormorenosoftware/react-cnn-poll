import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addPollSelection } from "../redux/actions/pollActions";
import "./Card.css";

class Card extends React.PureComponent {
  routeToConfirmation = () => {
    const { addPoll, image, title, history, pollSelection } = this.props;

    history.push("/confirm-poll-selection");

    addPoll({
      image,
      title,
      text: "Click this image to confirm your selection.",
      pollSelection,
    });
  };

  render() {
    const { image, title, text, onClickEventEnabled } = this.props;
    return (
      <div
        className="Card"
        onClick={onClickEventEnabled ? this.routeToConfirmation : null}
      >
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h3>{text}</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPoll: (selection) => dispatch(addPollSelection(selection)),
  };
}
export default withRouter(connect(null, mapDispatchToProps)(Card));
