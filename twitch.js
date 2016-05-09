function callApi(){
  var channels = ["freecodecamp", "storbeck", "terakilobyte", "ESL_SC2","OgamingSC2","cretetion", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "comster404", "brunofin"];
  for (var i = 0; i < channels.length; i++){
    $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/'+channels[i],
      jsonp: "callback",
      dataType: "jsonp",
      testData: channels[i],
      success: function(data){
        var chan = this.testData;
        buildIt(data, chan);
      }
    });
  }
}


function buildIt(data, chan){
  if (data.status == 422){
   $('.results').append('<a href= http://www.twitch.tv/' + chan + '><div class="well clearfix"><div class="col-sm-4"><h3>' + chan + '</h3></div><div class="col-sm-4"><h3>does not exist</h3></div></a>');
 } else if (data.stream == null){
    $('.results').append('<a href= http://www.twitch.tv/' + chan + '><div class="well clearfix"><div class="col-sm-4"><h3>' + chan + '</h3></div><div class="col-sm-4"><h3>Offline</h3></div></a>');
  } else {
    $('.results').append('<a href=' + data.stream.channel.url + '><div class="well clearfix"><div class="col-sm-4"><h3>' + data.stream.channel.display_name + '</h3></div><div class="col-sm-4"><h3>Online</div><div class="col-sm-4"><h3>' + data.stream.channel.game +'</h3></div></div></a>');
}
}
