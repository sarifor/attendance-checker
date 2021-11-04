import React from 'react';
import ReactDOM from 'react-dom';

/* 
Div
  Header
  Nav
  Main
    List
      ListHeader
      ListAttendance
        (ListAttendanceDailycheckin)
    Button
*/

/* class ListAttendanceDailycheckin extends React.Component {
  render() { // TypeError: Cannot read properties of undefined (reading 'day')
    return (
      <div>
      </div>
    )
  }
} */

class ListAttendance extends React.Component { // 클래스명: 대문자, Pascal Case
  /* state = { attendance: [] };

  componentDidMount() {
    this.assign();
  }

  componentWillUnmount() {
  }

  assign() {
    this.setState({
      attendance: checkinHistory
    });
  } */

  render() {
    console.log("ListAttendance > render > this.state: ", this.props);
    return ( // class가 아닌 className 사용
      <div className="list__attendance">
        { this.props.attendance.map((each, index) => (
          <div key={index}>
            <span>{each.day}</span>
            <span>{each.when}</span>
            <span>{each.pass}</span>
            <span>{each.mail}</span>                                    
          </div>
        ))}
      </div>
    )
  }
}

class ListHeader extends React.Component {
  render() {
    return (
      <div className="list__header">
        <h4>Day</h4>
        <h4>When</h4>
        <h4>Pass</h4>                                       
        <h4>Mail</h4>
      </div>
    )
  }  
}

function handleSubmit() { // Class 안에는 function을 넣을 수 없음
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hour = date.getHours();
  
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  const today = year + "/" + month + "/" + day;
  const time = parseInt(hour + "" + minutes);

  let pass = "";
  let mail = "";
  let untilWhen = parseInt("0700"); // Javascript의 number vs. int ?

  if (time < untilWhen) {
    pass = "Y"
  } else {
    pass = "N"
  }

  if (pass === "Y") { // pass = "Y" (X)
    mail = "N"
  } else {
    mail = "Y"
  }

  const checkinHistoryEach = {
    day: today,
    when: time,
    pass: pass,
    mail: mail
  };

  return checkinHistoryEach; // return 심화학습 하기!
}

class Button extends React.Component {
  handleLowToHigh = (e) => {
    e.preventDefault(); // 매우 중요! 이거 안 쓰면 콘솔 로그 찍어봐도 변수 값이 다 비어 보임!!!

    const checkinHistoryEach = handleSubmit();
    this.props.lowToHigh(checkinHistoryEach);
  }

  render() {
    // console.log(this.props.lowToHigh());

    return (
      <div className="button">
        <form onSubmit={this.handleLowToHigh}>
          <button type="submit">Check In</button>
        </form>
      </div>      
    )
  }  
}

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <ListHeader />
        <ListAttendance attendance={this.props.attendance} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>Starbucks Attendance Checker</h2>      
      </header>
    )
  }
};

class Nav extends React.Component {
  render() {
    return (
      <nav>
      </nav>
    )
  }
};

class Main extends React.Component {  
  state = { text: [] };

  lowToHigh = (text) => { // setState 브랜치의 assign 함수도 그렇고, 왜 앞에 const를 붙이면 안 되지?
    const receivedText = text;
    if (receivedText) {
      this.setState(() => {
        return { text: this.state.text.concat(receivedText) }
      });
    }
    console.log("Main > lowToHigh > tihs.state: ", this.state);
  };

  componentDidMount() {
    this.lowToHigh();
    console.log("Main > componentDidMount > tihs.state: ", this.state);
  }

  render() {
    console.log("Main > render > this.state: ", this.state);
    return (
      <main>
        <List attendance={this.state.text} />
        <Button lowToHigh={this.lowToHigh} />
      </main>
    )
  }
};

class Div extends React.Component { // class Div () {} (X), props ?
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Main />
      </div>
    )
  }
}

ReactDOM.render( // 여러 컴포넌트를 root element에 올릴 수 있나?  ->  작동 안 하는 걸 보니, 못 올리나봐
  <Div />,
  document.getElementById("root")
);