const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppID = 'kid_By6NFYOt';
function uploadHomeworks() {
    let setHomeWorkUrl =  kinveyBaseUrl + "appdata/" + kinveyAppID + "/Students";
    let authHeaders = {
        "Authorization": "Kinvey " + sessionStorage.getItem('authToken'),
    };
    let upload = {
        name:$('#studentName').val(),
        theme:$('#theme').val(),
        description:$('#homeWorkDescription').val(),
    };
    $.ajax({
        method: "POST",
        url:setHomeWorkUrl,
        data:upload,
        headers:authHeaders,
    })

}