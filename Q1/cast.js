$(document).ready(function() {


var api = "https://galvanize-cors.herokuapp.com/https://feedwrangler.net/api/v2/podcasts/categories?client_key=b5d42c0169eda03e135efd59042b79d2"

$.get(api, function(category) {
  $materialize(),
  $parallax(),
  $appendCategoryToForm(category),
  $returnSelected(),
  $select()

    //nav ///
function $materialize(){
   var collapseButton = $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
  });
 return collapseButton
}


function $select(){
 var selectOption = $('select').material_select();
 return selectOption;
}



function $parallax(){
  var aarolax =  $('.parallax').parallax();
  return aarolax
}

    function $appendCategoryToForm(category) {
       var categories = category.podcasts;
        for (var i = 0; i < categories.length; i++) {
            var option = '<option value="' +
                categories[i].podcasts_url + '" > ' +
                categories[i].title + '</option>';
                // $getPodCast(category.podcasts[i].podcasts_url)
           $('select').append(option)
        }
    }

    function $returnSelected() {
        $('select').change(function() {
            var selected = $(this).val();
                $getPodCast(selected)
              $('.present').html('');
              $('.present').append('<h4>' + `HERE THEY ARE! `  + '</h4>')
    })
}


function $getPodCast(url) {
  $('.show').html('');
  var button = `<a href =` +  `"http://www.stitcher.com/stitcher-list/all-podcasts-top-shows"`
  + `id = "download-button" class="btn-large waves-effect waves-light teal lighten-1" ` + ` >FIND & LISTEN</a>`;
   var card =  `<a href =` +  `"http://www.stitcher.com/stitcher-list/all-podcasts-top-shows">`+ `<div class = "col s4 m4">`
   + `<div class="card card-panel hoverable ">` +   `<div class="card-image">` +
   image + `<div class="card-action">` + title + button + `</a>` ;
        var url = "https://galvanize-cors.herokuapp.com/https://feedwrangler.net/" + url;
        $.get(url, function(data) {
            for (var i = 0; i < 3; i++) {
              var image = `<img src = `  + data.podcasts[i].image_url +  ` class= "responsive" >`;
              var title =  `<p class ="title">` + data.podcasts[i].title + `</p>`;


                $('.show').append(card);

            }

        })
    }
})
});
