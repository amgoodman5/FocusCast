
$( document ).ready(function() {
  //nav ///

   $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      });


        $('.parallax').parallax();

});


//
//   $.ajax({
//   url: "https://feedwrangler.net/api/v2/podcasts/categories",
//   data: {
//     title: "Arts",
//     podcasts_url:"/api/v2/podcasts/category/145"
//   },
//   success: function( result ) {
//     $( "body" ).append( "<strong>" + result + "</select>"  );
//   }
// });



$.get('https://feedwrangler.net/api/v2/podcasts/categories', function(data, categoryUrl) {
for (var i = 0; i < data.podcasts.length; i++) {
  var getUrl =  data.podcasts[i].podcasts_url;
  var getCategoryID = data.podcasts[i].category_id;
  var getImage =  data.podcasts[i].image_url
  var getCategoryUrl = "https://feedwrangler.net" + getUrl;
  var getCategoryTitle = data.podcasts[i].title;

}
$('#show').append(getCatagoryTitle).text;

  // $.get('https://feedwrangler.net/api/v2/podcasts/categories', function(data) {
  // for (var i = 0; i < data.podcasts.length; i++) {
  // var castCat =  data.podcasts[i].title;
  // console.log(castCat)
  // }

// console.log (castUrl["title"]);
});
