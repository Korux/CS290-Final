document.getElementById("home-button").addEventListener('click', function() {
    loadPage(this.getAttribute("loadedpage"), initHome);
});

document.getElementById('input-search').onkeypress = function(e) {
    if (!e) e = window.event;
    if (e.keyCode == '13') {
        loadPage('search-page.html', initSearch);
        return false;
    }
}

document.getElementById("post-button").addEventListener('click', function() {
    loadPage(this.getAttribute("loadedpage"), initPost);
});

document.getElementById("addpost-button").addEventListener('click', function() {
    loadPage(this.getAttribute("loadedpage"), initAddpost);
});

document.getElementById("browse-button").addEventListener('click', function() {
    loadPage(this.getAttribute("loadedpage"), initBrowse);
});

document.getElementById("search-button").addEventListener('click', function() {
    loadPage(this.getAttribute("loadedpage"), initSearch);
});


function loadPage(path, callback = function() {}, id = null) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            loadAnimation(this.responseText).then(() => {
                callback(id);
            });
        }
        if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
            alert("error occured in loading page");
        }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
}

function loadAnimation(newText) {
    return new Promise(function(resolve) {
        $('#subpage-holder').fadeOut(500);
        setTimeout(function() {
            document.getElementById("subpage-holder").innerHTML = newText;
            $('#subpage-holder').fadeIn(500);
            resolve();
        }, 500);
    });
}
