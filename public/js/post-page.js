

function initPost(callback = displayPosts){
    var jsonreq = new XMLHttpRequest();
    jsonreq.onreadystatechange = function(){
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
            callback(this.responseText);
        }
        if(this.readyState == XMLHttpRequest.DONE && this.status == 404){
            alert("error occured in loading image json");
        }
        // Micah added this
        var likes = 0;
        var dislikes = 0;
        var thumbsUp = document.getElementById('thumbs-up');
        var thumbsDown = document.getElementById('thumbs-down');
        var likeCount = document.getElementById('like-count').value;
        var dislikeCount = document.getElementById('dislike-count').value;

        // thumbsUp.on('click', function() {
        //     console.log("thumbsUp is clicked");
        // });
        var upClick = false;
        function handleThumbsUpClick(){
            if(upClick === false){
<<<<<<< HEAD
                // likes++;
                // likeCount++;
                // likeCount.value = likeCount.value + likes;
=======
                likes++;
                // likeCount++;
                likeCount.value = likeCount.value + likes;
>>>>>>> 6e33b15f435ad330a48de192df3d6fafe40781dc
                upClick = true;
                thumbsUp.classList.toggle('highlight');
            }
            else{
                upClick = false;
<<<<<<< HEAD
                // likeCount--;
=======
                likeCount--;
>>>>>>> 6e33b15f435ad330a48de192df3d6fafe40781dc
                // likeCount = likeCount;
                thumbsUp.classList.toggle('highlight');
            }
        }
        thumbsUp.addEventListener('click', function(event){
            if(downClick === false) {
                handleThumbsUpClick();
            }
            else{
                handleThumbsDownClick();
                handleThumbsUpClick();
            }
        });
        var downClick = false;
        function handleThumbsDownClick() {
            if(downClick === false){
<<<<<<< HEAD
                // dislikeCount++;
                // dislikeCount. = dislikeCount;
=======
                dislikeCount++;
                dislikeCount. = dislikeCount;
>>>>>>> 6e33b15f435ad330a48de192df3d6fafe40781dc
                downClick = true;
                thumbsDown.classList.toggle('highlight');
            }
            else {
                downClick = false;
<<<<<<< HEAD
                // dislikeCount--;
=======
                dislikeCount--;
>>>>>>> 6e33b15f435ad330a48de192df3d6fafe40781dc
                // dislikeCount.value = dislikeCount;
                thumbsDown.classList.toggle('highlight');
            }
        }
        thumbsDown.addEventListener('click', function(event){
            if(upClick === false) {
                handleThumbsDownClick();
            }
            else{
                handleThumbsUpClick();
                handleThumbsDownClick();
            }
        });
    };

    jsonreq.open('GET','image-data.json',true);
    jsonreq.send();


    //added by Kevin Dong: add event listener to picture so that it goes to comment page
    var posts = document.getElementsByClassName('drawing-post');
    Array.prototype.forEach.call(posts, function(ele){
        ele.addEventListener('click', function(){
            loadPage('comment-page.html',initComment,ele.getAttribute('uid'));
        });
    });
}

function displayPosts(jsonInfo){
    var imgData = JSON.parse(jsonInfo);
    imgData.forEach(element => {
        var image = document.createElement('img');
        image.src = element.data;
        document.getElementById('main-div').appendChild(image);
    });
}
