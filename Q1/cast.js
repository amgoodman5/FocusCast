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





$.get("https://feedwrangler.net/api/v2/podcasts/categories?client_key=b5d42c0169eda03e135efd59042b79d2", function(data) {

    $appendCategoryToForm(data)
    $getCategoryUrl(data)
    $getCategoryId(data)
    $getImg(data)
    $('select').material_select();



})

function $appendCategoryToForm(data) {
    for (var i = 0; i < data.podcasts.length; i++) {
        var title = $('select').append('<option value="' + data.podcasts[i].podcasts_url + '" > ' + data.podcasts[i].title + '</option>');
    }
}

$("select").change(function() {
    var selected = $(this).val();
    for (var i = 0; i < selected.length; i++) {
        getPodCast(selected[i])
    }

});

function getPodCast(url) {
    event.preventDefault();
    var url = "https://feedwrangler.net" + url;
    $.get(url, function(data) {
        for (var i = 0; i < 3; i++) {

            $('.show').append(`<div class="card-panel orange accent-4 col s4">` +
                data.podcasts[i].title +
                `<a href = ` + data.podcasts[i].feed_url + `id = "download-button" class="btn-large waves-effect waves-light teal lighten-1" ` + ` >test</a>` +
                `<img src = ` + data.podcasts[i].image_url + ` class= "responsive">` +
                `</div>`)
        }
    })
}




function $getCategoryUrl(data, $appendCategoryTitle) {
    for (var i = 0; i < data.podcasts.length; i++) {
        var $title = $appendCategoryTitle;
        var $getUrlId = data.podcasts[i].podcasts_url;
        var $getCurl = "https://feedwrangler.net" + $getUrlId;

    }
}

function $getCategoryId(data) {
    for (var i = 0; i < data.podcasts.length; i++) {
        var $getCatId = data.podcasts[i].category_id;


    }
}

function $getImg(data) {
    for (var i = 0; i < data.podcasts.length; i++) {
        var $getImage = data.podcasts[i].image_url

    }
}
