import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { confirmPollSelection } from "../redux/actions/pollActions";
import "./ConfirmPollSelection.css";

class ConfirmPollSelection extends React.PureComponent {
  routeToRoot = () => {
    const { history } = this.props;
    history.push("/");
  };
  confirmAppointment = () => {
    const { history, confirmPoll } = this.props;

    confirmPoll();

    history.push("/confirmation");
  };

  render() {
    const { text, image, title } = this.props.pollSelection;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Confirm your Presidential vote</h2>
          </div>
        </div>
        <div className="row">
          <div className="col button-flex-box">
            <button
              className="btn btn-confirm"
              type="button"
              onClick={this.routeToRoot}
            >
              Click to go back and start over
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Cards cards-flex-box">
              <div
                className="Card card-dimensions"
                onClick={this.confirmAppointment}
              >
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <h3>{text}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    confirmPoll: () => dispatch(confirmPollSelection()),
  };
}

function mapStateToProps(state) {
  return {
    pollSelection: state.pollReducer.pollSelection,
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ConfirmPollSelection)
);
