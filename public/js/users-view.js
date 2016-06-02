'use strict';
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var $userList;
  var userClickCallback;

  function loadUsers() {
    $.ajax('https://api.github.com/search/users?q=bob')
      .done(function(data) {
        createUserDOM(data.items);
      });
  }

  function createUserDOM(users) {
    for (var user of users) {
      var textString = '<li class="user" data-url="' + user.repos_url + '" data-org-url="' + user.organizations_url + '" data-fol-url="' + user.followers_url + '">' + user.login +'</li>';
      $userList.append(textString);
    }
  }

  function userClicked() {
    //If there is a previously chosen user, we want to unchose it
    var chosenItems = $('.user-list .chosen');
    chosenItems.removeClass('chosen');

    //chooses the current user
    var $this = $(this);
    $this.addClass('chosen');

    var repoUrl = $this.data('url');
    var orgUrl = $this.data('org-url');
    var folUrl = $this.data('fol-url');

    userClickCallback(repoUrl, orgUrl, folUrl);
  }

  function init(userClick) {
    userClickCallback = userClick; //what we will call when someone clicks on a user.
    $userList = $('.user-list');
    loadUsers();

    $userList.on('click', 'li', userClicked);
  }

  context.UsersView = {
    init: init
  };

})(window.GithubBrowser);
