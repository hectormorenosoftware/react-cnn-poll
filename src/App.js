import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import ConfirmationPage from "./components/ConfirmationPage";
import PollTotal from "./components/PollTotal";
import ConfirmPollSelection from "./components/ConfirmPollSelection";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
        <Route
          exact
          path="/confirm-poll-selection"
          render={() => <ConfirmPollSelection />}
        />
        <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
        <Route exact path="/poll-total" render={() => <PollTotal />} />
      </Switch>
    );
  }
}

export default withRouter(App);
