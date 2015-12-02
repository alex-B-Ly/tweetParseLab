$(document).ready(function() {

  // TWEET INFO
  function tweetInfo(){
    for(var i=0; i<window.alldata.length; i++){
      // ROW CREATE
      var newRow = $('<div>');
      newRow.addClass('row').addClass('text-center').addClass('tweet' + alldata[i].id_str);

      // TITLE CREATE
      var tweetTitle = $('<div>');
      tweetTitle.addClass('col-xs-12 tweet-title');
      tweetTitle.text('Tweet #' + alldata[i].id_str);
      newRow.append(tweetTitle);

      // USER INFO

      // APPEND NEW ROW
      $('#main-content').append(newRow);
    }
  }

  // FUNCTIONS CALLED
  tweetInfo();

});