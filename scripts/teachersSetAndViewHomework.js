const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppID = 'kid_By6NFYOt';
const appSecrets = '9887cd73e9a84e26875688775c120525';

function checkFields() {
    let nameOfTeach = $('#simpleName').val();
    let subj = $('#subject').val();
    let descrHomeWork = $('#descrHomeWork').val();
    if (nameOfTeach === "") {
        alert("Please insert name of teacher.Try again");
    }
    else if (subj === "") {
        alert("Please input subject field.Try again");
    }
    else if(descrHomeWork.length <= 2){
        alert("The description is too short!");
    }
    else {
        setHomerowk();
    }

    function setHomerowk() {
        let homeWorkUrl = kinveyBaseUrl + "appdata/" + kinveyAppID + "/Teachers";
        let authHeaders = {
            "Authorization": "Kinvey " + sessionStorage.getItem('authToken'),
        };
        let homeWorkData = {
            name: $("#simpleName").val(),
            subject: $("#subject").val(),
            description: $("#descrHomeWork").val()
        };

        $.ajax({
            method: "POST",
            url: homeWorkUrl,
            data: homeWorkData,
            headers: authHeaders,
        });
    }
}
function showHomeW() {
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
         let list = $('#field');
         let inner = document.createElement('ul');
         let nameOfTeacher = document.createElement('li');
         let subj = document.createElement('li');
         let descr = document.createElement('li');

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