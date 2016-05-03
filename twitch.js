
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

function buildIt(data){
  if(data.stream == null){
    $('.results').append('<p>nope</p');
  } else {
    $('.results').append('<div class="well">' + data.stream.channel.display_name + '</div></a>');
}
}
