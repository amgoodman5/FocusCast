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





$.get('https://feedwrangler.net/api/v2/podcasts/categories', function(data) {

    $appendCategoryToForm(data)
    $getCategoryUrl(data)
    $getCategoryId(data)
    $getImg(data)
    $('select').material_select();



})
function $appendCategoryToForm(data) {
    for (var i = 0; i < data.podcasts.length; i++) {
     var title =  $('select').append( '<option value="' + data.podcasts[i].podcasts_url +'" > '  + data.podcasts[i].title + '</option>' );
   }
}



$( "select" ).change(function() {
var selected = $(this).val();
for (var i = 0; i < selected.length; i++) {
getPodCast(selected[i])
}

});
function getPodCast(url){
  var url = "https://feedwrangler.net" + url;
  $.get(url, function(data){
  for (var i = 0; i < data.podcasts.length; i++) {
    $('.show').append('<h2>' + data.podcasts[i].title + '</h2>')
  }


  })




  //call url//
  //branch through and get title image and url//
  //display elements in each category//

}




function $getCategoryUrl(data, $appendCategoryTitle) {
    for (var i = 0; i < data.podcasts.length; i++){
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



// function displayResults(results) {
//   var $movies = $('.movies');
//   for (var i = 0; i < results.Search.length; i++) {
//     var $p = $('<p data-imdbid="' + results.Search[i].imdbID + '">' + results.Search[i].Title + '</p>');
//     $p.click(showMovieDetails);
//     $movies.append($p);
//     moviesByID[results.Search[i].imdbID] = results.Search[i];
//   }
// }






// // //     }
//     $('select').on('change', function() {
//         if ($('#role option:selected').val() === 'Tank') {
//             $('img').attr('src', data[0].img);
//         } else if ($('#role option:selected').val() === 'Support') {
//             $('img').attr('src', data[1].img);
//         } else if ($('#role option:selected').val() === 'Defense') {
//             $('img').attr('src', data[2].img);
//         } else if ($('#role option:selected').val() === 'Attack') {
//             $('img').attr('src', data[3].img);
//         }
//     });
//
//
//
//
//
//
//
//




//
// });
// $('.save').click(function(){
//   event.preventDefault();
//
//   var obj ={}
//   obj.firstName = $('#fname').val();
//   obj.lastName = $('#lname').val();
//   obj.role = $("#role option:selected").val();
//   console.log(obj)
//   $.post('http://galvanize-student-apis.herokuapp.com/gpersonnel/users', obj,function(data){
//     $('.save-status').css('display', 'block')
//     $('.save-status').text(data.message)
//     $(".save-status").fadeIn(500).delay(2000).show(0).fadeOut(500);
// //set to default // add time lapse
//
//  });
