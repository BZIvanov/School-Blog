const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppID = 'kid_By6NFYOt';
const appSecrets = '9887cd73e9a84e26875688775c120525';
/* Ajax "Loading" event listener */
$(document).on({
  ajaxStart: function () {
    $('#infoBox').show();
  },
  ajaxStart: function () {
    $('#infoBox').hide();
  },
});
function showInfo(mesgText) {
  $('#infoBox').text(mesgText).show().delay(1500).fadeOut(2000);
}
function ajaxError(data) {
  const errorMsg = translations.errorMsg.en;
  $('#errorBoxBG').text(errorMsg).show().delay(1500).fadeOut(2000);
}
function login() {
  const loginData = {
    username: $('#loginUser').val(),
    password: $('#loginPass').val(),
  };
  $.ajax({
    method: 'POST',
    url: kinveyBaseUrl + 'user/' + kinveyAppID + '/login',
    data: loginData,
    headers: { Authorization: 'Basic ' + btoa(kinveyAppID + ':' + appSecrets) },
    success: loginSucces,
    error: ajaxError,
  });
  function loginSucces(data) {
    sessionStorage.authToken = data._kmd.authtoken;
    showInfo(translations.loginSuccess.en);
    window.setTimeout(function () {
      location.href = 'base-form.html';
    }, 3000);
  }
}
function register() {
  const fName = $('#fullName').val();
  const uName = $('#userName').val();
  const password = $('#passInput').val();
  const passwordConf = $('#passwordConfirm').val();
  if (fName === '') {
    showInfo(translations.emptyName.en);
  } else if (uName === '') {
    showInfo(translations.emptyUser.en);
  } else if (password.length <= 4) {
    showInfo(translations.emptyPassword.en);
  } else if (password !== passwordConf) {
    showInfo(translations.passwordsMismatch.en);
  } else {
    registerMe();
  }
  function registerMe() {
    const typeOfUser = $('input[name=check]:checked').val();
    const registerData = {
      name: $('#fullName').val(),
      username: $('#userName').val(),
      password: $('#passInput').val(),
      passwordConf: $('#passwordConfirm').val(),
      typeofuser: typeOfUser,
    };
    $.ajax({
      method: 'POST',
      url: kinveyBaseUrl + 'user/' + kinveyAppID + '/',
      data: registerData,
      headers: {
        Authorization: 'Basic ' + btoa(kinveyAppID + ':' + appSecrets),
      },
      success: registerSucces,
      error: ajaxError,
    });

    function registerSucces(data) {
      sessionStorage.authToken = data._kmd.authtoken;
      showInfo('Регистраран потребител');
      window.setTimeout(function () {
        location.href = 'login-form.html';
      }, 3000);
    }
  }
}
$(function () {
  $('#formLogin').submit(function (e) {
    e.preventDefault();
    login();
  });
  $('#formRegister').submit(function (e) {
    e.preventDefault();
    register();
  });
});

function logout() {
  alert('Logout');
  sessionStorage.clear();
  window.setTimeout(function () {
    location.href = 'index.html';
  }, 1500);
}

/*scroll-to-top button*/
$(document).ready(function () {
  const offset = 220;
  const duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('#scrollToTop').fadeIn(duration);
    } else {
      $('#scrollToTop').fadeOut(duration);
    }
  });
  $('#scrollToTop').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
function link() {
  const link_s = document.getElementById('link_id').value;
  document.getElementById('link_str').innerHTML = link_s.link();
}
