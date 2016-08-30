$(document).ready(function () {
    $('#finishedHomeWorks').click(function () {
        $('#showTeachHome').show();
    });
});
let method = "GET";
let userAtuh = "Kinvey " + sessionStorage.getItem('authToken');
let headers = {};
headers['Authorization'] = userAtuh;
let requestUrl = kinveyBaseUrl + "appdata/" + kinveyAppID + "/Teachers";
let request = {
    method: method,
    headers: headers,
    url: requestUrl,
};
let methodShow = "GET";
let userAtuhStudent = "Kinvey " + sessionStorage.getItem('authToken');
let headersStudent = {};
headersStudent['Authorization'] = userAtuhStudent;
let requestUrlStudent = kinveyBaseUrl + "appdata/" + kinveyAppID + "/Homeworks";
let requestStudent = {
    method: methodShow,
    headers: headersStudent,
    url: requestUrlStudent,
};
$.ajax(request).then(function (response) {
    for (let obj of response) {
        let list = $('#showTeachHome');
        let inner = document.createElement('li');
        let nameOfTeacher = document.createElement('li');
        let subj = document.createElement('li');
        let descr = document.createElement('ul');

        nameOfTeacher.appendChild(document.createTextNode(obj.name));
        subj.appendChild(document.createTextNode(obj.subject));
        descr.appendChild(document.createTextNode(obj.description));
        inner.appendChild(nameOfTeacher);
        inner.appendChild(subj);
        inner.appendChild(descr);
        list.append(inner);
    }
});
$.ajax(requestStudent).then(function (responseSt) {
    for (let objSt of responseSt) {
        let listSt = $('#showStHome');
        let innerSt = document.createElement('li');
        let nameOfSt = document.createElement('li');
        let subj1 = document.createElement('li');
        let descr1 = document.createElement('ul');
        nameOfSt.appendChild(document.createTextNode(objSt.name));
        subj1.appendChild(document.createTextNode(objSt.theme));
        descr1.appendChild(document.createTextNode(objSt.description));
        innerSt.appendChild(nameOfSt);
        innerSt.appendChild(subj1);
        innerSt.appendChild(descr1);
        listSt.append(innerSt);
    }
});