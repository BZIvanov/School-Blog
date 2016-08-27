const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppID = 'kid_By6NFYOt';
 //const appSecrets = '9887cd73e9a84e26875688775c120525';
function showHomeW() {
    let method = "GET";
    let userAtuh = "Kinvey " + sessionStorage.getItem('authToken');
    let headers = {};
    headers['Authorization'] = userAtuh;
    let requestUrl = kinveyBaseUrl + "appdata/" + kinveyAppID + "/Homeworks";
    let request = {
        method:method,
        headers:headers,
        url:requestUrl,
    };
    $.ajax(request).then(function (response) {
       alert(JSON.stringify(response));
    });
}
function showFinished() {

}
