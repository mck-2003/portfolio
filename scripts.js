const modal = document.getElementById("entryModal");
const entrybutton = document.getElementById("entryButton")


$(document).ready(function(){

    if (sessionStorage.getItem("skipModal") != "true") {
        console.log(sessionStorage.getItem("skipModal"));
        showModal(modal); 
    }

    $('#entryButton').on("click", function() {
        sessionStorage.setItem("skipModal", "true");
        console.log(sessionStorage.getItem("skipModal"));
    });

   
});


function showModal(id) {
    $("#" + id).fadeIn('slow');
}
function hideModal(id) {
    $("#" + id).fadeOut('slow');
}