import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";


class Test1 extends React.Component {
  componentDidMount() {
    console.log("Test1 211110");
  }

  render() {
    return (
      <div>Test1!</div>
    )
  }
}

class Test2 extends React.Component {
  componentDidMount() {
    console.log("Test2 211110");
  }

  render() {
    return (
      <div>Test2!</div>
    )
  }
}

class Div extends React.Component { // class Div () {} (X), props ? 
  componentDidMount() {
    console.log("Div Component Mounted! 211110_5");
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Test1} />
        <Route path="/test2" component={Test2} />
      </BrowserRouter>
    )
  }
}

ReactDOM.render( // 여러 컴포넌트를 root element에 올릴 수 있나?  ->  작동 안 하는 걸 보니, 못 올리나봐
  <Div />,
  document.getElementById("root")
);