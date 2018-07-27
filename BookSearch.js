$(document).ready(function (){

$("#Search").on("click", function(event){
    var search = $("#book").val();
    var yourAPIKey = 'AIzaSyBeXUW-Nknu_CqR2YSRfegh1OrDkUOmd98'
    var response = $.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${yourAPIKey}`)
    console.log(response);
    
})

});