let x = 1;
let y = 3;
let nCity;

let date = new Date();
console.log(date);
const storage = localStorage;
let city = '';
// $('#citybtn').click(function () {
//     city = $('#city').val();
//     const nCity = $('<p>');
//     nCity.text(city);
//     nCity.attr('id', 'newbtn');
//     $('.prevbuttons').prepend(nCity);
//     console.log(city);
// });

$('#show').click(function () {
    
    city = $('#city').val();
    const nCity = $('<p>');
    nCity.text(city);
    nCity.attr('id', 'newbtn');
    $('.prevbuttons').prepend(nCity);
    console.log(city);

    const APIKey = "6af3e9cb79cfccec5f936552226ac51d";
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response);
            $('.city-date').html('<h1>' + response.name + '</h1>');
            $('.citytemp').html('<h2>' + response.main.temp + '</h2>');
            $('.cityhumidity').html('<h2>' + response.main.humidity + '</h2>');
            $('.citywind').html('<h2>' + response.wind.speed + '</h2>');
            
        })



   
    const queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    $.ajax({
            url: queryURLFive,
            method: "GET"
        })
        .then(function (response) {
            console.log(queryURLFive);
            console.log(response);
           $('.citydetails').html('<h2>' + response.city.name+' Four Day Forcast </h2>');
        
            for (let i = 0; i < 3; i++) {
                console.log("this is Y: " + y);
                
                
                $(".date"+x).html(response.list[y].dt_txt);

                console.log(response.list[y].dt_txt);

                
                $(".temp" + x).text("High: " + response.list[y].main.temp_max);
                
                $(".wind" + x).text('Low: ' + response.list[y].main.temp_min);
                
                $(".tempF" + x).text("Humidity: " + response.list[y].main.humidity);

                y = y + 4;
                x++;
                console.log("this is Y: " + y);
                console.log("x needs to be reset also"+ x );
                
            }
            if(y >= 15){
                y = 4;
                x = 1;
                console.log("Y is reset y= "+y);
            }
        });
});

//)};




//  const APIKey = "6af3e9cb79cfccec5f936552226ac51d";

//  const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=" + APIKey;
//  //   // Here we run our AJAX call to the OpenWeatherMap API
//    $.ajax({
//          url: queryURL,
//          method: "GET"
//        })
//        // We store all of the retrieved data inside of an object called "response"
//          .then(function(response) {
//                console.log(queryURL);
//                // Log the resulting object
//                console.log(response.city.name);

//          });



// Transfer content to HTML

//         const br = $('<br>');
//      for (let i = 0; i < 3; i++) {
//         console.log("this is Y: " + y);
//         $(".city"+x).prepend("<h1>" + response.city.name + " Weather Details"+"</h1>"+
//         "<h3>"+ response.list[y].dt_txt +"</h3>");

//         console.log(response.list[y].dt_txt);

//         $('.wind' + x).prepend(br); 
//         $(".wind" +x).prepend("High: " + response.list[y].main.temp_max);
//         $('.wind' + x).prepend(br);
//         $(".temp" + x).prepend('Low: ' + response.list[y].main.temp_min);
//         $('.wind' + x).prepend(br);
//         $(".tempF" + x).prepend("Humidity: " + response.list[y].main.humidity); 

//         y+=4;
//         x++;
//         console.log("this is Y: " + y);
//   }