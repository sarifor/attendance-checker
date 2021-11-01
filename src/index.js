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
        ListAttendanceDailycheckin
    Button
*/

class ListAttendanceDailycheckin extends React.Component {
  render() {
    return (
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>                
      </div>
    )
  }
}

class ListAttendance extends React.Component { // 클래스명: 대문자, Pascal Case
  /* componentDidMount() {
    console.log("ListAttendance에 온 this.props: ", this.props);
  } */

  render() {
    return ( // class가 아닌 className 사용, this.props or this.state 상황 구분!
      <div className="list__attendance">
        <ListAttendanceDailycheckin />
        <ListAttendanceDailycheckin />
        <ListAttendanceDailycheckin />
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

/* function handleSubmit(e) { // Class 안에는 function을 넣을 수 없음
  e.preventDefault();
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

  checkinHistory.push(checkinHistoryEach);
  console.log(checkinHistory);
} */

/* class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <form onSubmit={handleSubmit}>
          <button type="submit">Check In</button>
        </form>
      </div>      
    )
  }  
} */

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <ListHeader />
        <ListAttendance />
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
  render() {
    return (
      <main>
        <List />
      </main>
    )
  }
};

class TempTest extends React.Component {
  render() {
    console.log("TempTest 안의 this.props: ", this.props);
    return (
      <div>
        <p>{this.props.attendance}</p>
      </div>
    )
  }
}

class Div extends React.Component { // class Div () {} (X), props ?
  state = {
    attendance: []
  };

  assign = () => {
    const jsonData = '{"location": "Starbucks", "attendance": [{"day" : "2021/11/1", "when" :  "0710", "pass" : "N", "mail" : "Y"}, {"day" : "2021/11/2", "when" :  "0700", "pass" : "Y", "mail" : "N"}, {"day" : "2021/11/3", "when" :  "0700", "pass" : "Y", "mail" : "N"}]}'; // '서버로부터 전송받은, 문자열로 전환된 객체' 가정
    const objData = JSON.parse(jsonData);
    const attendance = objData.attendance;
    console.log("assign 함수 안의 배열: ", attendance);

    this.setState(attendance, () => console.log("setState 적용 후의 state: ", this.state));
  };

  componentDidMount() {
    this.assign();
    console.log("componentDidMount 하고 난 뒤: ", this.state);
  }

  render() {
    console.log("render 안");
    return (
      <div>
        <Header />
        <Nav />
        <Main />
        <TempTest attendance={this.state.attendance} />
      </div>
    )
  }
}

ReactDOM.render( // 여러 컴포넌트를 root element에 올릴 수 있나?  ->  작동 안 하는 걸 보니, 못 올리나봐
  <Div />,
  document.getElementById("root")
);