$(document).on({
  ajaxStart: function () {
    $('#infoStudent').show();
  },
  ajaxStart: function () {
    $('#errorStudent').hide();
  },
});
function showInfoStudent(mesgText) {
  $('#infoStudent').text(mesgText).show().delay(1500).fadeOut(2000);
}
function studentsValidation() {
  let nameOfStudent = $('#studentName').val();
  let nameOfTheme = $('#themeOfHomework').val();
  let descrOfHmrkSt = $('#descriptionOfHomeWork').val();
  if (nameOfStudent === '') {
    showInfoStudent(translations.studentName.en);
  } else if (nameOfTheme === '') {
    showInfoStudent(translations.studentSubject.en);
  } else if (descrOfHmrkSt.length <= 4) {
    showInfoStudent(translations.studentHomework);
  } else {
    uploadHomeworks();
  }
}
function uploadHomeworks() {
  let setHomeWorkUrl = kinveyBaseUrl + 'appdata/' + kinveyAppID + '/Homeworks';
  let authHeaders = {
    Authorization: 'Kinvey ' + sessionStorage.getItem('authToken'),
  };

  let upload = {
    name: $('#studentName').val(),
    theme: $('#themeOfHomework').val(),
    description: $('#descriptionOfHomeWork').val(),
  };
  $.ajax({
    method: 'POST',
    url: setHomeWorkUrl,
    data: upload,
    headers: authHeaders,
    success: uploadOk(),
  });
  function uploadOk() {
    showInfoStudent(translations.homeworkSubmission.en);
    window.setTimeout(function () {
      location.href = 'student-page.html';
    }, 1500);
  }
}
$(document).ready(function () {
  $('#showHomeWorkStudents').click(function () {
    $('#fieldInStudents').slideDown();
  });
  let method = 'GET';
  let userAtuh = 'Kinvey ' + sessionStorage.getItem('authToken');
  let headers = {};
  headers['Authorization'] = userAtuh;
  let requestUrl = kinveyBaseUrl + 'appdata/' + kinveyAppID + '/Teachers';
  let request = {
    method: method,
    headers: headers,
    url: requestUrl,
  };
  $.ajax(request).then(function (response) {
    for (let obj of response) {
      let list = $('#fieldInStudents');
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
  $(document).ready(function () {
    $('#hideHomeworksStudents').click(function () {
      $('#fieldInStudents').slideUp();
    });
  });
});
function logout() {
  showInfoStudent(translations.logout.en);
  sessionStorage.clear();
  window.setTimeout(function () {
    location.href = 'index.html';
  }, 3000);
}
