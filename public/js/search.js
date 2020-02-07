function cityId(userInput) {
    var queryUrl = "https://hotels4.p.rapidapi.com/locations/search" + userInput + "&apikey=0678ac7d4dmsh7ec92c295c5eef2p194aa9jsnf39296021020";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.location_suggestions[0].id);
        var cityId = response.location_suggestions[0].id;
        searchCity(cityId);
    });
};



function searchCity(cityId) {
    var queryUrl = "https://hotels4.p.rapidapi.com/locations/search" + cityId + "&entity_type=city&q=hotels&count=5&establishment_type=7&apikey=0678ac7d4dmsh7ec92c295c5eef2p194aa9jsnf39296021020";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.hotel[0].hotel.events_url);
    
        for (var i = 0; i < response.hotel.length; i++) {
            var box = $('<div class="boxes" id="box-' + i + '">');
            var right = $('<div class="pies" id="pie-' + i + '">');
            var name = $("<h4>").addClass("Name").text(response.hotel[i].hotel.name);
            var phone = $("<div>").addClass("Phone").text('Phone Number: ' + response.hotel[i].hotel.phone_numbers);
            var address = $("<div>").addClass("Locations").text('Address: ' + response.hotels[i].hotel.location.address);
    
            console.log(barURL);

           
            right.append(name, phone, hotelURL, ratings, address);
            box.append(img);
           
            box.append(right);
            $("#displayBox").append(box)
            
        }
    });
};

$("#searchCity").on("click", function (event) {
  
    event.preventDefault();
  
    var userInput = $("#userInput").val().trim();
    console.log(userInput);
  
    cityId(userInput);
});

function clear() {
    $("#displayBox").empty();
}

$("#searchCity").on("click", function (event) {
   
    var queryUrl = "https://hotels4.p.rapidapi.com/locations/search" + userInput + "&apikey=0678ac7d4dmsh7ec92c295c5eef2p194aa9jsnf39296021020";
   
    clear();

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then();
});