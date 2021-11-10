import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Div() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <div>Test</div>
        </Route>          
        <Route path="/">
          <div>root 1</div>
        </Route> 
      </Switch>
    </Router>
  )
}

ReactDOM.render( // 여러 컴포넌트를 root element에 올릴 수 있나?  ->  작동 안 하는 걸 보니, 못 올리나봐
  <Div />,
  document.getElementById("root")
);