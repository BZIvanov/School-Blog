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
function showAvailableHomeworks() {
    let method = "GET";
    let userAtuh = "Kinvey " + sessionStorage.getItem('authToken');
    let headers = {};
    headers['Authorization'] = userAtuh;
    let requestUrl = kinveyBaseUrl + "appdata/" + kinveyAppID + "/Teachers";
    let request = {
        method:method,
        headers:headers,
        url:requestUrl,
    };
    $.ajax(request).then(function (response) {
        alert(JSON.stringify(response));
    });
}