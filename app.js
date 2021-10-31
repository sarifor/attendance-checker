let listAttendance = document.querySelector(".list__attendance");

// JSON에서 Object로 바꾸기
const jsonData = '{"location": "Starbucks", "attendance": [{"day" : "2021/11/1", "when" :  "0710", "pass" : "N", "mail" : "Y"}, {"day" : "2021/11/2", "when" :  "0700", "pass" : "Y", "mail" : "N"}, {"day" : "2021/11/3", "when" :  "0700", "pass" : "Y", "mail" : "N"}]}'; // 서버로부터 전송받은, 문자열로 전환된 객체
const objData = JSON.parse(jsonData);

// 배열을 for문으로 HTML에 출력
const attendance = objData.attendance;
for(var i = 0; i < attendance.length; i++) {
    // <div class="list__attendance">에, 새 div와 span 추가하여 배열의 값 집어넣기
    const div = document.createElement('div');
    const day = document.createElement('span');
    const when = document.createElement('span');
    const pass = document.createElement('span');
    const mail = document.createElement('span');

    day.textContent = attendance[i].day;
    when.textContent = attendance[i].when;
    pass.textContent = attendance[i].pass;
    mail.textContent = attendance[i].mail;

    div.appendChild(day);
    div.appendChild(when);
    div.appendChild(pass);
    div.appendChild(mail);

    listAttendance.appendChild(div);
};
