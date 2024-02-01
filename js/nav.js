"use strict";


function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);


function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function navSubStory(e) {
    hidePageComponents();
    $allStoriesList.show();
    $submitfrm.show();
}

function navOwnStories(e) {
    hidePageComponents();
    userStories();
    $ownStories.show();
}

function navFavs(e) {
    hidePageComponents();
    favoritesList.show();
}

function navProfClk(e) {
    hidePageComponents();
    $usrprf.show();
}

$navsub.on("click", navSubStory);
$navUserProfile.on("click", navProfClk);
$body.on("click", "#my-stories", navOwnStories);
$body.on("click", "#favs", navFavs);