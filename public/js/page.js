'use strict';
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var chosenRepoUrl;
  var chosenOrgUrl;
  var chosenFolUrl;

  function userClicked(repoUrl, orgUrl, folUrl) {
    console.log('user clicked page.js function', repoUrl, orgUrl, folUrl);
    chosenRepoUrl = repoUrl;
    chosenOrgUrl = orgUrl;
    chosenFolUrl = folUrl;
    //

    //reset the page any time a user is clicked
    resetPage();
  }

  function resetPage() {
    $('.repositories').hide();
    $('.options .chosen').removeClass('chosen');

    context.RepositoriesView.reset();
  }

  function repositoriesClicked() {
    console.log('repositoriesClicked');
    $('.options .chosen').removeClass('chosen');
    $(this).addClass('chosen');

    $('.repositories').show();
    context.RepositoriesView.init(chosenRepoUrl);
  }

  function organizationsClicked() {
    console.log('organizationsClicked');
    $('.options .chosen').removeClass('chosen');
    $(this).addClass('chosen');

    $('.repositories').hide();

    //you have to write the code here for your homework
    context.OrganizationsView.init(chosenOrgUrl);
  }

  function followersClicked() {
    console.log('followersClicked');
    $('.options .chosen').removeClass('chosen');
    $(this).addClass('chosen');

    $('.repositories').hide();

    //you have to write the code here for your homework
    context.FollowersView.init(chosenFolUrl);
  }

  function start() {

    context.UsersView.init(userClicked);

    $('.repositories-option').on('click', repositoriesClicked);
    $('.organizations-option').on('click', organizationsClicked);
    $('.followers-option').on('click', followersClicked);
  }

  context.start = start;

})(window.GithubBrowser);
