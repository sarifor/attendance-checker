import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Div extends React.Component { // class Div () {} (X), props ? 
  componentDidMount() {
    console.log("Div Component Mounted! 211110_10");
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <div>Test1</div>
          </Route>
          <Route exact path="/test">
            <div>Test2</div>
          </Route>    
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render( // 여러 컴포넌트를 root element에 올릴 수 있나?  ->  작동 안 하는 걸 보니, 못 올리나봐
  <Div />,
  document.getElementById("root")
);