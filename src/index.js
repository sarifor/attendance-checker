import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";


class Test1 extends React.Component {
  render() {
    return (
      <div>Test1!!!</div>
    )
  }
}

class Test2 extends React.Component {
  render() {
    return (
      <div>Test2!!!</div>
    )
  }
}

class Div extends React.Component { // class Div () {} (X), props ? 
  componentDidMount() {
    console.log("Div Component Mounted!");
  }
  render() {
    return (
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
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