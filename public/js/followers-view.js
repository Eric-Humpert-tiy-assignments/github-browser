'use strict'
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var $followersList;

  function loadFollowers(folUrl) {
    $.ajax(folUrl)
      .done(function(data){
        createDOM(data);
      });
  }

  function createDOM (followers){
    $followersList.empty();
    console.log('Here is a thing you need!');
    var $template = $('#followers-template');
    var templateText = $template.html();
    var templateFunc = _.template(templateText);

    for (var follower of followers) {
      var html = templateFunc(follower);
      $followersList.append(html);
    }
  }

  function reset() {
    $('.follower-list').empty();
  }

  function init(folUrl) {
    $followersList = $('.follower-list');
    loadFollowers(folUrl);
  }

  context.FollowersView = {
    init: init,
    reset: reset
  };

})(window.GithubBrowser);
