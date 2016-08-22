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
    }
});
function showInfo(mesgText) {
    $('#infoBox').text(mesgText).show().delay(2000).fadeOut(2000);
}
function ajaxError() {
    let errorMsg = "Try Again";
    $('#infoBox').text(errorMsg).show().delay(2000).fadeOut(2000);

}
function login() {
    let loginData = {
        username: $('#loginUser').val(),
        password: $('#loginPass').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + 'user/' + kinveyAppID + '/login',
        data: loginData,
        headers: {"Authorization": "Basic " + btoa(kinveyAppID + ":" + appSecrets)},
        success: loginSucces,
        error: ajaxError
    });
    function loginSucces(data) {
        sessionStorage.authToken = data._kmd.authtoken;
        showInfo('Login successful');
        window.setTimeout(function () {
            location.href = 'base-form.html';
        },3000);
    }
}
function register() {
    let typeOfUser = $("input[name=check]:checked").val();
    let registerData = {
        name: $('#fullName').val(),
        username: $('#userName').val(),
        password: $('#passInput').val(),
        passwordConf: $('#passwordConfirm').val(),
        typeofuser: typeOfUser
    };
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + 'user/' + kinveyAppID + '/',
        data: registerData,
        headers: {
            "Authorization": "Basic " + btoa(kinveyAppID + ":" + appSecrets)
        },
    });
}
$(function() {
    $('#formLogin').submit(function(e){e.preventDefault(); login()});
    $('#formRegister').submit(function(e){e.preventDefault(); register()});
});
