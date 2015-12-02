$(document).ready(function() {

  // TWEET INFO
  function userInfo(){
    for(var i=0; i<window.alldata.length; i++){
      // DUPLICATE USER CHECK
      if($('#main-content').children().hasClass(alldata[i].user.name)){
        return;
      }
      // ROW CREATE
      var newRow = $('<div>');
      newRow.addClass('row').addClass('text-center').addClass(alldata[i].user.name);

      // USER NAME CREATE
      var tweetTitle = $('<div>');
      tweetTitle.addClass('col-xs-12').addClass('text-center').addClass('user-name');
      tweetTitle.text('User: ' + alldata[i].user.name);
      newRow.append(tweetTitle);

      // ==== USER INFO =====
      var userId = $('<div>'),
      userLocation = $('<div>'),
      userImg = $('<div>'),
      userStatuses = $('<div>'),
      userFriends = $('<div>');

      userId.addClass('col-xs-12').addClass('col-sm-6').addClass('col-lg-2').addClass('user-id');
      userId.text('ID: ' + alldata[i].user.id_str);

      userLocation.addClass('col-xs-12').addClass('col-sm-6').addClass('col-lg-3').addClass('user-location');
      userLocation.text('Location: ' + alldata[i].user.location);

      userImg.addClass('col-xs-12').addClass('col-sm-12').addClass('col-lg-7').addClass('user-image');
      userImg.text('Image: ' + alldata[i].user.profile_image_url);

      userStatuses.addClass('col-xs-6').addClass('user-statuses');
      userStatuses.text('Statuses: '+alldata[i].user.statuses_count);

      userFriends.addClass('col-xs-6').addClass('user-friends');
      userFriends.text('Friends: '+alldata[i].user.friends_count);

      newRow.append(userId);
      newRow.append(userLocation);
      newRow.append(userImg);
      newRow.append(userStatuses);
      newRow.append(userFriends);

      // APPEND NEW ROW
      $('#main-content').append(newRow);
    }
  }

  // FUNCTIONS CALLED
  userInfo();
});