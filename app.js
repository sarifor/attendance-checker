// JSON에서 Object로 바꾸기
const jsonData = '{"location": "Starbucks", "attendance": [{"day" : "2021/11/1", "when" :  "0710", "pass" : "N", "mail" : "Y"}, {"day" : "2021/11/2", "when" :  "0700", "pass" : "Y", "mail" : "N"}, {"day" : "2021/11/3", "when" :  "0700", "pass" : "Y", "mail" : "N"}]}'; // 서버로부터 전송받은, 문자열로 전환된 객체
const objData = JSON.parse(jsonData);
console.log(objData);