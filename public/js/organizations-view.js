'use strict';
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var $organizationList;

  function loadOrgs(orgUrl) {
    $.ajax(orgUrl)
      .done(function(data) {
        createDOM(data);
      });
  }

  function createDOM(organizations) {
    $organizationList.empty();

    var $template = $('#organization-template');
    var templateText = $template.html();
    var templateFunc = _.template(templateText);

    for (var org of organizations) {
      console.log(org);
      var html = templateFunc(org);
      $organizationList.append(html);
    }
  }

  function reset() {
    $('.organization-list').empty();
  }

  function init(orgUrl) {
    $organizationList = $('.organization-list');
    loadOrgs(orgUrl);
  }

  context.OrganizationsView = {
    init: init,
    reset: reset
  }

})(window.GithubBrowser);
