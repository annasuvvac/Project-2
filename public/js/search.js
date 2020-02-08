/* eslint-disable indent */
function searchCity(userInput) {
    var queryUrl = 'https://hotels4.p.rapidapi.com/locations/search?query=' + userInput;
    $.ajax({
        url: queryUrl,
        method: 'GET',
        'headers': {
            'content-type': 'application/json',
            'x-rapidapi-host': 'hotels4.p.rapidapi.com',
            'x-rapidapi-key': '0678ac7d4dmsh7ec92c295c5eef2p194aa9jsnf39296021020'
        }, 'params': {
            'locale': 'en_US',
        }
    }).then(function (response) {
        // console.log(response);
        console.log(response.suggestions[3].entities);

        var resultArray = response.suggestions[3].entities;

        // for (var i = 0; i < resultArray.length; i++) {
        //   console.log(resultArray[i].name);
        // }

        for (var i = 0; i < resultArray.length; i++) {

            var box = $('<div class="card-panel" id="box-' + i + '">');
            var outerBox = $('<div class="col s12 m4">');

            var icon = $('<i class="material-icons large teal-text">').text('store');
            var name = $('<h4>').addClass('Name').text(resultArray[i].name);

            var caption = $('<p>').addClass('captions').html(resultArray[i].caption);


            box.append(icon);
            box.append(name);
            box.append(caption);
            outerBox.append(box);

            $('#hotel-results').append(outerBox);



        }
    });
};

$('#searchCityButton').on('click', function (event) {


    event.preventDefault();

    var userInput = $('#userInput').val().trim();
    console.log(userInput);

    searchCity(userInput);
});

// function clear() {
//   $('#displayBox').empty();
// }

$('#userInput').submit(function () {
    event.preventDefault();

    var userInput = $('#userInput').val().trim();
    console.log(userInput);

    searchCity(userInput);

});

$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();

            var userInput = $('#userInput').val().trim();
            console.log(userInput);

            searchCity(userInput);

        }
    });
});


