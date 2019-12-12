var fancyText = document.getElementsByTagName("h");
var intervalTime = 150;
var initialPause = 1000;
var callbackPause = 500;
function deleteContent(callback) {
    var intervalId = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);
}
function addContent(contentToAdd, callback) {
    var currentIndex = 0;
    var intervalId = setInterval(function() {
        if (currentIndex == contentToAdd.length) {
            clearInterval(intervalId);
            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }
        fancyText.innerHTML = contentToAdd.substring(0, currentIndex);
        currentIndex++;
    }, intervalTime);
}
setTimeout(function() {
    deleteContent(function() {
        addContent("HackGTeeny WorkShop", function() {
            deleteContent(function() {
                addContent("Pikachu fan site", function() {
                    deleteContent(function() {
                        addContent("Web Dev 101 Course");
                    })
                });
            });
        });
    });
}, initialPause);