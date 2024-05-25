import React from "react";
import { withRouter } from "react-router-dom";
import PresidentDonaldJTrump from "../images/DonaldJTrump.jpeg";
import JoeBiden from "../images/joebiden.jpeg";
import Card from "./Card";

class IndexPage extends React.PureComponent {
  routeToPollTotal = () => {
    this.props.history.push("/poll-total");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Cards">
              <h2>CNN Presidentian Poll</h2>
              <div className="col button-flex-box">
                <button
                  className="btn btn-confirm"
                  type="button"
                  onClick={this.routeToPollTotal}
                >
                  Click to go to see poll count
                </button>
              </div>
              <div className="CardGroup">
                <Card
                  title="Joe Biden"
                  text="Click to vote for Joe Biden"
                  image={JoeBiden}
                  pollSelection="selectionOne"
                  onClickEventEnabled={true}
                />
                <Card
                  title="Donald J. Trump"
                  text="Click to vote for Donald J. Trump"
                  image={PresidentDonaldJTrump}
                  pollSelection="selectionTwo"
                  onClickEventEnabled={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
