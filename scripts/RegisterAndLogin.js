const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppID = 'kid_By6NFYOt';
const appSecrets = '9887cd73e9a84e26875688775c120525';

function login() {
    let authBase64 = btoa(kinveyAppID + ":" + appSecrets);
    let loginUrl = kinveyBaseUrl + "user/" + kinveyAppID + "/login";
    let loginData = {
        username: $("#loginUser").val(),
        pass: $("#loginPass").val()
    };
    $.ajax({
        method: "POST",
        url: loginUrl,
        data: JSON.stringify(loginData),
        headers: {"Authorization": "Basic" + " " + authBase64},
    })

}
function register() {
    let authBase64 = btoa(kinveyAppID + ":" + appSecrets);
    let registerUrl = kinveyBaseUrl + "user/" + kinveyAppID + "/";
    let registerData = {
        fullname: $("#fullName").val(),
        username: $("#userName").val(),
        password: $("#passInput").val(),
        passConfirm: $("#passwordConfirm").val()
    };
    $.ajax({
        method: "POST",
        url: registerUrl,
        data: JSON.stringify(registerData),
        headers: {"Authorization": "Basic" + " " + authBase64},
    });
}
$(function () {
    $('#formLogin').submit(function(e){e.preventDefault(); login()});
    $('#formRegister').submit(function(e){e.preventDefault(); register()});
});
