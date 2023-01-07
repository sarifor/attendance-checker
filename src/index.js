import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

/* 
Div
  (Header)
  (Nav)
  Main
    List
      ListHeader
      ListAttendance
        (ListAttendanceDailycheckin)
    Button
*/

class ListAttendance extends React.Component {
  render() {
    console.log("ListAttendance > render > this.state: ", this.props);
    return (
      <div className="list__attendance">
        { this.props.attendance.map(each => (
          <div key={each.id}>
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

function handleSubmit() {
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
  let untilWhen = parseInt("0700");

  if (time < untilWhen) {
    pass = "Y"
  } else {
    pass = "N"
  }

  if (pass === "Y") {
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

  return checkinHistoryEach;
}

class Button extends React.Component {
  handleLowToHigh = (e) => {
    e.preventDefault();

    const checkinHistoryEach = handleSubmit(); // day, when, pass, mail 값이 들어 있는 객체를 반환
    this.props.lowToHigh(checkinHistoryEach);
  }

  render() {
    return (
      <div className="button">
        <form onSubmit={this.handleLowToHigh}>
          <button type="submit">Check In</button>
        </form>
      </div>      
    )
  }  
}

class AutoButton extends Button {
  componentDidMount() {
    const checkinHistoryEach = handleSubmit();
    console.log(checkinHistoryEach);
    this.props.lowToHigh(checkinHistoryEach);
  }

  render() {
    return (
      <div>
        <span>From iPhone</span>
      </div>
    )
  }   
};

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

/* class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>Starbucks Attendance Checker</h2>      
      </header>
    )
  }
}; */

/* class Nav extends React.Component {
  render() {
    return (
      <nav>
      </nav>
    )
  }
}; */

/* function getCurrentLocation () {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    // maximumAge: 0
  };

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    const href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    console.log(href);
  };

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      success, 
      () => console.log("Error"),
      options
    )
  };
}; */

class Main extends React.Component {  
  state = { text: [] };

  lowToHigh = (text) => { // 핵심 역할: setState
    const receivedText = text;
    if (receivedText) {
      this.setState(() => {
        return { text: this.state.text.concat(receivedText)
          .map((each, index) => {
            each['id'] = index;
            return each;
          })
        };
      });
    }
    console.log("Main > lowToHigh > tihs.state: ", this.state);
  };

  componentDidMount() {
    this.lowToHigh();
    console.log("Main > componentDidMount > tihs.state: ", this.state);
    // getCurrentLocation();
  }

  render() {
    console.log("Main > render > this.state: ", this.state);
    return (
      <main>
        <List attendance={this.state.text} />
        {this.props.match.params.test === "test" ? (
          <AutoButton lowToHigh={this.lowToHigh} />          
        ) : (
          <Button lowToHigh={this.lowToHigh} />          
        )}        
      </main>
    )
  }
};

class Div extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/:test" component={Main} />
            <Route path="/" component={Main} />
          </Switch>         
        </Router>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Div />
  </React.StrictMode>,
  document.getElementById("root")
);