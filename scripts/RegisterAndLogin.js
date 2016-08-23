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
function ajaxError(data) {
    let errorMsg = "Try Again";
    $('#errorBox').text(errorMsg).show().delay(2000).fadeOut(2000);

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
        headers: { "Authorization": "Basic " + btoa(kinveyAppID + ":" + appSecrets) },
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
    let fName = $('#fullName').val();
    let uName = $('#userName').val();
    let password = $('#passInput').val();
    let passwordConf = $('#passwordConfirm').val();
    if (uName === "") {
        alert("Try again,Username cant be empty");
    }
    else if(fName === ""){
        alert("Try again.Full name cant be empty");
    }
    else if(password <= 4){
        alert("The password must be minimum 4 symbols");
    }
    else if(password != passwordConf){
     alert("the two fields with passwords must be much!");
    }
    else {
        registerMe();
    }
        function registerMe() {
            let typeOfUser = $("input[name=check]:checked").val();
            let registerData = {
                name: $('#fullName').val(),
                username: $('#userName').val(),
                password: $('#passInput').val(),
                passwordConf: $('#passwordConfirm').val(),
                typeofuser: typeOfUser,
            };
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + 'user/' + kinveyAppID + '/',
                data: registerData,
                headers: {
                    "Authorization": "Basic " + btoa(kinveyAppID + ":" + appSecrets)
                },
                success: registerSucces,
                error: ajaxError,

            });

            function registerSucces(data) {
                sessionStorage.authToken = data._kmd.authtoken;
                showInfo('User registered successfully');

            }
        }
    }
$(function () {
    $('#formLogin').submit(function (e) { e.preventDefault(); login() });
    $('#formRegister').submit(function (e) { e.preventDefault(); register() });
});

function logout() {
    alert('logout');
    sessionStorage.clear();

}

/*scroll-to-top button*/
$(document).ready(function () {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('#scrollToTop').fadeIn(duration);
        } else {
            $('#scrollToTop').fadeOut(duration);
        }
    });
    $('#scrollToTop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800)
        return false;
    });
});