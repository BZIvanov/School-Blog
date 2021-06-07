$(document).ready(function () {
  $('#finishedHomeWorks').click(function () {
    $('#showTeachHome').show();
  });
});

function showLogoutNotification(mesgText) {
  $('#LogOutHomeWork').text(mesgText).show().delay(1500).fadeOut(2000);
}

const methodShow = 'GET';
const userAtuhStudent = 'Kinvey ' + sessionStorage.getItem('authToken');
const headersStudent = {};
headersStudent['Authorization'] = userAtuhStudent;
const requestUrlStudent =
  kinveyBaseUrl + 'appdata/' + kinveyAppID + '/Homeworks';
const requestStudent = {
  method: methodShow,
  headers: headersStudent,
  url: requestUrlStudent,
};

$.ajax(requestStudent).then(function (responseSt) {
  for (let objSt of responseSt) {
    const listSt = $('#showStHome');
    const innerSt = document.createElement('div');
    const nameOfSt = document.createElement('li');
    const subj1 = document.createElement('li');
    const descr1 = document.createElement('ul');
    nameOfSt.appendChild(document.createTextNode(objSt.name));
    subj1.appendChild(document.createTextNode(objSt.theme));
    descr1.appendChild(document.createTextNode(objSt.description));
    innerSt.appendChild(nameOfSt);
    innerSt.appendChild(subj1);
    innerSt.appendChild(descr1);
    listSt.append(innerSt);
  }
});

function logout() {
  showLogoutNotification('Log out');
  sessionStorage.clear();
  window.setTimeout(function () {
    location.href = 'index.html';
  }, 3000);
}
