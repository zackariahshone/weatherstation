let x = 1;
let nCity;
// let cityLon = 0;
// let cityLat = 0;
//const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

let date = new Date();
console.log(date);
const storage = localStorage;
let city = '';

function convert(tempk){
  return  tempf = Math.floor((tempk - 273.15) * 9/5 + 32);
}
$('#search').click(function () {
    
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
            let cityLon = response.coord.lon;
            let cityLat = response.coord.lat;
           const iconcode = response.weather[0].icon;

           const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
           //(255.372K − 273.15) × 9/5 + 32
           const tempk =response.main.temp;
            const tempf = convert(tempk);
            console.log("FARENHEIRT: " + tempf);

            $('.city-date').html('<h1>' + response.name + '</h1>');
            $('.citytemp').html('<h2> Temp: ' + tempf + '</h2>');
            $('.cityhumidity').html('<h2> Humidity:' + response.main.humidity + '</h2>');
            $('.citywind').html('<h2> Wind Speed: ' + response.wind.speed + '</h2>');
            $('#weatherIcon').attr('src',iconurl);
            //FOR UV INDEX
            const uvUrl ="http://api.openweathermap.org/data/2.5/uvi?appid="+ APIKey +"&lat="+ cityLat+"&lon="+cityLon;
            $.ajax({
                url: uvUrl,
                method: "GET"
            })
            .then(function(response){
               let uIndex = response.value;
                console.log("UV Data: "+response.value);
                $("#uv").text(response.value);
                
                if(uIndex > 9){
                    $('#uv').removeClass();
                    $('#uv').addClass('highUv');
                }
                 if(uIndex > 5 && uIndex <= 8){
                    $('#uv').removeClass();
                     $('#uv').addClass('medUv');
                 }
                if(uIndex < 4){
                    $('#uv').removeClass();
                    $('#uv').addClass('lowUv');
                }
               
            });

        
        });
        
      
        

   
    const queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    $.ajax({
            url: queryURLFive,
            method: "GET"
        })
        .then(function (response) {
            console.log(queryURLFive);
            console.log(response);
           $('.citydetails').html('<h2>' + response.city.name+' Five Day Forcast </h2>');
           let y = 2;
            for (let i = 0; i < 5; i++) {
                // console.log("this is Y: " + y);
                
               const maxF = convert(response.list[y].main.temp_max);
               const minF = convert(response.list[y].main.temp_min);
               


                
                $(".date"+x).html(response.list[y].dt_txt);

                // console.log(response.list[y].dt_txt);
                const maxt = convert()
                
                $(".temp" + x).text("High: " + maxF);
                
                $(".wind" + x).text('Low: ' + minF);
                
                $(".tempF" + x).text("Humidity: " + response.list[y].main.humidity);

                y = y + 8;
                x++;
                // console.log("this is Y: " + y);
                // console.log("x needs to be reset also"+ x );
                
            }
            if(y >= 40){
                y = 2;
                x = 1;
                // console.log("Y is reset y= "+y);
            }
        });


});

