import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Test extends React.Component {
  render () {
    return (
      <div>Test!</div>
    )
  };
};

class Root extends React.Component {
  render () {
    return (
      <div>Root!</div>
    )
  };
};

class Div extends React.Component {
  componentDidMount() {
    console.log("Test 2");
  };

  render () {
    return (
      <Router>
        <Switch>
          {/*<Route path="/test" component={Test} />*/}
          <Route path="/test">
            <div>Test!</div>
          </Route>
          <Route path="/" component={Root} />
        </Switch>
      </Router>
    )
  };
};

ReactDOM.render( // 여러 컴포넌트를 root element에 올릴 수 있나?  ->  작동 안 하는 걸 보니, 못 올리나봐
  <React.StrictMode>
    <Div />
  </React.StrictMode>,
  document.getElementById("root")
);