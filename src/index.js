import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Div extends React.Component { // class Div () {} (X), props ? 
  componentDidMount() {
    console.log("Div Component Mounted!");
  }
  render() {
    return (
      <Routes>
        <Route path="/">
          <div>route!!</div>
        </Route>
        <Route path="/test">
          <div>Test!!</div>
        </Route>
      </Routes>
    )
  }
}

ReactDOM.render( // 여러 컴포넌트를 root element에 올릴 수 있나?  ->  작동 안 하는 걸 보니, 못 올리나봐
  <BrowserRouter>
    <Div />
  </BrowserRouter>,
  document.getElementById("root")
);