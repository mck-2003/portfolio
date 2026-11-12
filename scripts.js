const modal = document.getElementById("entryModal");

$(document).ready(function(){
    var about = 'about.html';
    if (document.referrer.indexOf(about) != -1) { showModal(modal);}
   
});

function showModal(id) {
    $("#" + id).fadeIn('slow');
}
function hideModal(id) {
    $("#" + id).fadeOut('slow');
}