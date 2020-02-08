function searchCity(userInput) {
    var queryUrl = "https://hotels4.p.rapidapi.com/locations/search?query=" + userInput ;
    $.ajax({
        url: queryUrl,
        method: "GET",
        'headers': {
            'content-type':'application/json',
            'x-rapidapi-host':'hotels4.p.rapidapi.com',
            'x-rapidapi-key':'0678ac7d4dmsh7ec92c295c5eef2p194aa9jsnf39296021020'
        },'params':{
            'locale':'en_US',
        }
    }).then(function (response) {
        console.log(response);
        // console.log(response.hotel[0].hotel.events_url);
    
        // for (var i = 0; i < response.hotel.length; i++) {
        //     var box = $('<div class="boxes" id="box-' + i + '">');
        //     var right = $('<div class="pies" id="pie-' + i + '">');
        //     var name = $("<h4>").addClass("Name").text(response.hotel[i].hotel.name);
        //     var phone = $("<div>").addClass("Phone").text('Phone Number: ' + response.hotel[i].hotel.phone_numbers);
        //     var address = $("<div>").addClass("Locations").text('Address: ' + response.hotels[i].hotel.location.address);
    
        //     console.log(barURL);

           
        //     right.append(name, phone, hotelURL, ratings, address);
        //     box.append(img);
           
        //     box.append(right);
        //     $("#displayBox").append(box)
            
        // }
    });
};

$("#searchCityButton").on("click", function (event) {
  
    event.preventDefault();
  
    var userInput = $("#userInput").val().trim();
    console.log(userInput);
  
    searchCity(userInput);
});

function clear() {
    $("#displayBox").empty();
}