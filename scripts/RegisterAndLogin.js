const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppID = 'kid_By6NFYOt';
const appSecrets = '9887cd73e9a84e26875688775c120525';


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
    });
    alert("successfully logged in.");
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
            "Authorization": "Basic " + btoa(kinveyAppID + ":" + appSecrets)},
        });
    alert("user is created");
}
$(function() {
    $('#formLogin').submit(function(e){e.preventDefault(); login()});
    $('#formRegister').submit(function(e){e.preventDefault(); register()});
});
