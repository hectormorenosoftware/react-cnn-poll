import React from "react";
import { withRouter } from "react-router-dom";

import Success from "./success";
import "./ConfirmationPage.css";

class ConfirmationPage extends React.PureComponent {
  routeToMainMenu = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Your vote has been confirmed and saved!</h2>
            <div className="confirmation-page-flex-box">
              <button
                className="btn btn-confirm"
                type="button"
                onClick={this.routeToMainMenu}
              >
                Click to go back to main menu
              </button>
            </div>
            <Success />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConfirmationPage);
