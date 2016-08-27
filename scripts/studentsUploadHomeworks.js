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
        for(let obj of response){
            let list = $('#fieldInStudents');
            let inner = document.createElement('ul');
            let nameOfTeacher = document.createElement('li');
            let subj = document.createElement('li');
            let descr = document.createElement('ul');

            nameOfTeacher.appendChild(document.createTextNode(obj.name));
            subj.appendChild(document.createTextNode(obj.subject));
            descr.appendChild(document.createTextNode(obj.description));
            inner.appendChild(nameOfTeacher);
            inner.appendChild(subj);
            inner.appendChild(descr);
            list.append(inner);
        }
    });
}