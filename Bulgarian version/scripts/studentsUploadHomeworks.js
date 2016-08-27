const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppID = 'kid_By6NFYOt';
function uploadHomeworks() {
    let setHomeWorkUrl =  kinveyBaseUrl + "appdata/" + kinveyAppID + "/Homeworks";
    let authHeaders = {
        "Authorization": "Kinvey " + sessionStorage.getItem('authToken'),
    };
    let upload = {
        name:$('#studentName').val(),
        theme:$('#themeOfHomework').val(),
        description:$('#descriptionOfHomeWork').val(),
    };
    $.ajax({
        method: "POST",
        url:setHomeWorkUrl,
        data:upload,
        headers:authHeaders,
    })

}