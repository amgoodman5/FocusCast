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

    $appendCategoryTitle(data)
    $getCategoryUrl(data)
    $getCategoryId(data)
    $getImg(data)
    $('select').material_select();




    // var $getImage = data.podcasts[i].image_url
    // var $getCategoryUrl = "https://feedwrangler.net" + getUrl;

})

function $appendCategoryTitle(data) {

    for (var i = 0; i < data.podcasts.length; i++) {
     $("select").append( '<option>' + data.podcasts[i].title + '</option>' );

          }
      $('select').material_select();


      //
      // $("select").append( "<option>'" + (i)  + data.podcasts[i].title + "'</option>"  );
      //
      //      }
      //  $('select').material_select();




}



function $getCategoryUrl(data) {
    for (var i = 0; i < data.podcasts.length; i++) {
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
// $.get('https://feedwrangler.net/api/v2/podcasts/categories', function(data) {
//     for (var i = 0; i < data.podcasts.length; i++) {
// var $getCategoryTitle = data.podcasts[i].title;
// var $option = $('<option value ="' + $getCategoryTitle + '">');
// console.log($option);
// $option.text($getCategoryTitle);
//         $('select').append($option).innerHTML;
//     }
// });


// <div class="input-field col s12">
//    <select multiple>
//      <option value="" disabled selected>Choose your option</option>
//      <option value="1">Option 1</option>
//      <option value="2">Option 2</option>
//      <option value="3">Option 3</option>
//    </select>
//    <label>Materialize Multiple Select</label>
//  </div>

// for (var i = 0; i < data.length; i++) {
//         var $option = $('<option value ="' + data[i].title + '">');
//
//
// //     }
// //     $('select').on('change', function() {
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
