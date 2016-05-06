function callApi(){
  var channels = ["freecodecamp", "storbeck", "terakilobyte", "ESL_SC2","OgamingSC2","cretetion", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "comster404", "brunofin"];
  for (var i = 0; i < channels.length; i++){
    $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/'+channels[i],
      jsonp: "callback",
      dataType: "jsonp",
      success: function(data){
        buildIt(data);
      }
    });
  }
}


// function online(data){
//   console.log(data);
//
// }
//
// function offline(data){
//   console.log('offline');
// }
//
// function closed(data){
//  console.log('closed');
// }


function buildIt(data){
  if (data.status == 422){
   $('.results').append("<p>closed</p>");
 } else if (data.stream == null){
    $('.results').append('<p>offline</p>');
  } else {
    $('.results').append('<div class="well">' + data.stream.channel.display_name + '</div></a>');
}
}
