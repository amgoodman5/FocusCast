$(document).ready(function() {
    //nav ///

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
    $('.parallax').parallax();
    $('select').material_select();


});




$.get("https://galvanize-cors.herokuapp.com/https://feedwrangler.net/api/v2/podcasts/categories?client_key=b5d42c0169eda03e135efd59042b79d2", function(category) {

    $appendCategoryToForm(category)
    $returnSelected()
    $('select').material_select();



    function $appendCategoryToForm(category) {
        for (var i = 0; i < category.podcasts.length; i++) {
            var option = '<option value="' +
                category.podcasts[i].podcasts_url + '" > ' +
                category.podcasts[i].title + '</option>';
                // $getPodCast(category.podcasts[i].podcasts_url)
            $('select').append(option)

        }
    }

    function $returnSelected() {
        $("select").change(function() {
            var selected = $(this).val();
            for (var i = 0; i < selected.length; i++) {
                $getPodCast(selected[i])
            }

        });
    }

    function $getPodCast(url) {
      console.log(url)
        event.preventDefault();
        var url = "https://galvanize-cors.herokuapp.com/https://feedwrangler.net/" + url;
        $.get(url, function(data) {
            for (var i = 0; i < 3; i++) {
              var image = `<img src = `  + data.podcasts[i].image_url +  `  class= "responsive">`;
               var feed = data.podcasts[i].feed_url;
               var titles = `<h2 class = "card-title">` + data.podcasts[i].title  + `</h2>`;
               var button = `<a href = ` + data.podcasts[i].feed_url + `id = "download-button" class="btn-large waves-effect waves-light teal lighten-1" ` + ` >test</a>`;
                var card =   `<div class="row">` + ` <div class="col s12 m4 l4 align-center">` + `<div class="card">` +   `<div class="card-image">` +  image + titles + `<div class="card-action">` + button;

                $('.show').append(card);

            }
        })
    }
})
