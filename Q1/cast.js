$(document).ready(function() {
  var api =
    'https://galvanize-cors.herokuapp.com/https://feedwrangler.net/api/v2/podcasts/categories?client_key=b5d42c0169eda03e135efd59042b79d2';
  var image = ' ';
  var title = ' ';

  var option = ' ';
  var category;
  var aarolax;
  var collapseButton;

  $.get(api, $handleApi);

  function $handleApi(category) {
    return Promise.resolve(5) //take anything or nothing
      .then($materialize)
      .then($parallax)
      .then(() => $renderCategories(category))
      .then($returnSelected)
      .then($select)
      .then($showCard);
  }

  //nav ///
  function $materialize() {
    collapseButton = $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
    return collapseButton;
  }

  function $select() {
    return $('select').material_select();
  }

  function $parallax() {
    return $('.parallax').parallax();
  }

  function $appendCategoryToForm(category) {
    return category.podcasts
      .map(category => '<option value="' + category.podcasts_url + '" > ' + category.title + '</option>')
      .join('');
  }

  const $renderCategories = category => {
    $('select').append($appendCategoryToForm(category));
  };

  function $returnSelected() {
    $('select').change(function() {
      return Promise.resolve($(this).val()).then($getPodCast);

      $('.present').html('');
      $('.present').append('<h4>' + `HERE THEY ARE! ` + '</h4>');
    });
  }

  function $getPodCast(url) {
    $('.show').html('');
    var url = 'https://galvanize-cors.herokuapp.com/https://feedwrangler.net/' + url;
    $.get(url)
      .then(results => results.podcasts)
      .then($renderPodcasts)
      .then(results => console.log('hello', results) || results)
      .then($getPostCastHtml)
      .then(results => {
        console.log('hello', results) || results;
      })
      .then($showCard);
  }
});

function $renderPodcasts(podcasts) {
  return podcasts.length > 3 ? podcasts.slice(0, 3) : podcasts;
}

function $getPostCastHtml(podcasts) {
  return podcasts.map(podcast => {
    let image = `<img src = ` + podcast.image_url + ` class= "responsive" >`;
    let title = `<p class ="title">` + podcast.title + `</p>`;
    let button =
      `<a href =` +
      `"http://www.stitcher.com/stitcher-list/all-podcasts-top-shows"` +
      `id = "download-button" class="btn-large waves-effect waves-light teal lighten-1" ` +
      ` >FIND & LISTEN</a>`;
    return;
    `<a href =` +
      `"http://www.stitcher.com/stitcher-list/all-podcasts-top-shows">` +
      `<div class = "col s4 m4">` +
      `<div class="card card-panel hoverable ">` +
      `<div class="card-image">` +
      image +
      `<div class="card-action">` +
      title +
      button +
      `</a>`;
  });
}

function $showCard(cards) {
  return $('.show').append(cards);
}
