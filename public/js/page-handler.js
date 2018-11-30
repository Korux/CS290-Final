document.getElementById("home-button").addEventListener('click',function(){
    loadPage(this.getAttribute("loadedpage"),initHome);
});

document.getElementById("post-button").addEventListener('click',function(){
    loadPage(this.getAttribute("loadedpage"),initPost);
});

document.getElementById("addpost-button").addEventListener('click',function(){
    loadPage(this.getAttribute("loadedpage"),initAddpost);
});

document.getElementById("browse-button").addEventListener('click',function(){
    loadPage(this.getAttribute("loadedpage"));
});

document.getElementById("search-button").addEventListener('click',function(){

});


function loadPage(path,callback = function(){},id = null){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
            document.getElementById("subpage-holder").innerHTML = this.responseText;
            callback(id);
        }
        if(this.readyState == XMLHttpRequest.DONE && this.status == 404){
            alert("error occured in loading page");
        }
    };
    xhttp.open("GET",path,true);
    xhttp.send();
}
