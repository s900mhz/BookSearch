var yourAPIKey = 'AIzaSyBeXUW-Nknu_CqR2YSRfegh1OrDkUOmd98'
var BASE_URL = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBeXUW-Nknu_CqR2YSRfegh1OrDkUOmd98`

$(document).ready(function () {
    $("#Search").on("click", function (event) {
        let userBook = $("#book").val();
        getBookByTitle(userBook)
    });
});

function getBookByTitle(title) {
    let url = BASE_URL + "&q=" + title;
    $.getJSON(url,displayBooks);
};
function displayBooks(data) {

    let htmlString = "<div>";

    $.each(data.items, function (i, item){
        htmlString += '<div class="col-xs-3">';
        // Build up the HTML using the data from the API
        htmlString += '<img src="' + item.volumeInfo.imageLinks.thumbnail + '" alt="' + item.id + '" title="' + item.id + '", class ="img-thumbnail img-responsive"/><br/>';
        htmlString += '<strong class="small">Pub: ' + item.volumeInfo.publishedDate + '</strong></div>';
        htmlString += '<div class="col-xs-9"><h1>' + item.volumeInfo.title + '</h1>';
        $.each(item.volumeInfo.authors, function (i, author) {
            htmlString += '<p class="bg-info"><i>' + author + '</i></p>';
        });
        htmlString += '<p class="small">' + item.volumeInfo.description + '</p>';
        htmlString += '<p class="well small">Extract: "' + item.searchInfo.textSnippet + '"<a href="' + item.accessInfo.webReaderLink + '" target="_blank"> Read more</a></p>';
        htmlString += '</div>';
        
    });
    $("#booktitle").html(htmlString + "</div>")
}

//${search}&key=${yourAPIKey}
//     $.get(url, function (response) {
//     console.log(response);
//     displayBooks(response.items["0"].volumeInfo.title)
//  })
//items[0].volumeInfo.title