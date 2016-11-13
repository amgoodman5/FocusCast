
$( document ).ready(function() {
  //nav ///
  $('.button-collapse').sideNav({
        menuWidth: 500, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      });


//paralax//
      $(document).ready(function(){
            $('.parallax').parallax();

    });
//   $.ajax({
//   url: "https://feedwrangler.net/api/v2/podcasts/categories",
//   data: {
//     title: "Arts",
//     podcasts_url:"/api/v2/podcasts/category/145"
//   },
//   success: function( result ) {
//     $( "option" ).append( "<strong>" + result + "</select>"  );
//   }
// });
//
//
// function getData(data){
//
//   var catArr = [];
//   $.get('https://feedwrangler.net/api/v2/podcasts/categories', function(data) {
//
//
//   for (var i = 0; i < data.podcasts.length; i++) {
//   var cateList =  catArr.push(data.podcasts[i].podcasts_url);
//   }
//
//
//
// }
//
//
// });

 });
// });
