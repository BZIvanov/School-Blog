//const kinveyBaseUrl = 'https://baas.kinvey.com/';
//const kinveyAppID = 'kid_By6NFYOt';
$(document).on({
    ajaxStart: function () {
        $('#infoPosts').show();
    },
    ajaxStart: function () {
        $('#errorPosts').hide();
    }
});
function showInfoPosts(mesgText) {
    $('#infoPosts').text(mesgText).show().delay(1500).fadeOut(2000);
}
function postsValidation() {
    let title = $('#postTitle').val();
    let author = $('#postAuthor').val();
    let description = $('#postDescription').val();
    if (title === "") {
        showInfoPosts("Title field cant be empty");
    }
    else if (author === "") {
        showInfoPosts("Author field cant be empty");
    }
    else if (description.length <= 4) {
        showInfoPosts("Post is too short!");
    }
    else {
        createPost();
    }
}
function createPost(posts, status) {
    showInfo('Posts created.');
    if(posts.length == 0){
        $('posts').text('No posts in the table.');
    } else {}
              
    let postsTable = $("<table>")
        .append($("<tr>").append(
            '<th>Title</th>',
            '<th>Author</th>',
            '<th>Description</th>')     
            );
    for (let post of posts) {
        booksTable.append($('<tr>').append(
            $('<td>').text(post.title),
            $('<td>').text(post.author),
            $('<td>').text(post.description))
            );
    }
$('#posts').append(postsTable);
}
}
let setPostsUrl = kinveyBaseUrl + "appdata/" + kinveyAppID + "/Posts";
let authHeaders = {
    "Authorization": "Kinvey " + sessionStorage.getItem('authToken'),
};

let createPostData = {
    title: $('#postTitle').val(),
    author: $('#postAuthor').val(),
    description: $('#postDescription').val(),
    comments: [{ author: "moni88", commentText: "this book is great!"}, { author: "kateto", commentText: "very good book."}]
};
$.ajax({
    method: "POST",
    url: setPostsUrl,
    data: createPostData,
    headers: authHeaders,
    success: createPostSuccess,
    error: showAjaxError
});

function createPostSuccess(response) {
    showInfoPosts('Post created successful! ');
}
}

function addComment(postData, commentText, commentAuthor){
    let setPostsUrl = kinveyBaseUrl + "appdata/" + kinveyAppID + "/Posts";
    let authHeaders = {
        "Authorization": "Kinvey " + sessionStorage.getItem('authToken'),'Content-type': 'application/json'
    };

    if(!postData.comments) {
        postData.comments = [];
    }
    postData.comments.push({
        text: commentText, author: commentAuthor
    });
   
    $.ajax({
        method: "PUT",
        url: kinveyPostsUrl + '/' + postData._id,
        headers: kinveyAuthHeaders,
        data: JSON.stringify(postData),
        success: addPostCommentSuccess,
        error: showAjaxError
    });

    function addPostCommentSuccess(data) {
        //showListBooksView();
        showInfo('Post comments added.');
    }
}