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

// What to build
//        <div class="well clearfix">
//             <div class="col-sm-4">
//                 <h1>Test</h1>
//             </div>
//             <div class="col-sm-4 ">
//                 <h2>Game</h1>
//             </div>
//             <div class="col-sm-4 ">
//                 <h2>status</h2>
//             </div>
//         </div>


function buildIt(data){
  if (data.status == 422){
   $('.results').append("<p>closed</p>");
 } else if (data.stream == null){
    $('.results').append('<p>offline</p>');
  } else {
    $('.results').append('<div class="well clearfix"><div class="col-sm-4"><h3>' + data.stream.channel.display_name + '</h3></div><div class="col-sm-4"><h3>' + data.stream.channel.game +'</div><div class="col-sm-4"><h3>' + data.stream.channel.status + '</h3></div></div>');
}
}
