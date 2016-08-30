$(document).ready(function () {
    $('#finishedHomeWorks').click(function () {
        $('#showTeachHome').show();
    });
});
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

$.ajax(requestStudent).then(function (responseSt) {
    for (let objSt of responseSt) {
        let listSt = $('#showStHome');
        let innerSt = document.createElement('li');
        let nameOfSt = document.createElement('ul');
        let subj1 = document.createElement('ul');
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