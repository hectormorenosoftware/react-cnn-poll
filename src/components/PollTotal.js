import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PresidentDonaldJTrump from "../images/DonaldJTrump.jpeg";
import JoeBiden from "../images/joebiden.jpeg";
import Card from "./Card";

class PollTotal extends React.PureComponent {
  routeToSelectionMenu = () => {
    this.props.history.push("/");
  };
  render() {
    const { selectionOneTotal, selectionTwoTotal } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>CNN Presidential Poll Total Count</h2>
            <h2>Who would you vote for?</h2>
            <div className="col button-flex-box">
              <button
                className="btn btn-confirm"
                type="button"
                onClick={this.routeToSelectionMenu}
              >
                Click to go back to selection menu
              </button>
            </div>
            <div className="Cards">
              <div className="CardGroup">
                <Card
                  title="Joe Biden"
                  text={selectionOneTotal.count.toString()}
                  image={JoeBiden}
                  pollSelection="selectionOne"
                  onClickEventEnabled={false}
                />
                <Card
                  title="Donald J. Trump"
                  text={selectionTwoTotal.count.toString()}
                  image={PresidentDonaldJTrump}
                  pollSelection="selectionTwo"
                  onClickEventEnabled={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectionOneTotal: state.pollReducer.selectionOneTotal,
    selectionTwoTotal: state.pollReducer.selectionTwoTotal,
  };
}

export default withRouter(connect(mapStateToProps, null)(PollTotal));
