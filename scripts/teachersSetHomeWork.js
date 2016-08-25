const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppID = 'kid_By6NFYOt';
const appSecrets = '9887cd73e9a84e26875688775c120525';

function setHomerowk() {
    let homeWorkUrl =  kinveyBaseUrl + "appdata/" + kinveyAppID + "/Teachers";
    let authHeaders = {
        "Authorization": "Kinvey " + sessionStorage.getItem('authToken'),
    };
    let homeWorkData = {
        name: $("#simpleName").val(),
        subject: $("#subject").val(),
        description: $("#description").val()
    };
    $.ajax({
        method: "POST",
        url:homeWorkUrl,
        data:homeWorkData,
        headers:authHeaders,
    })
}