$(function () {
  var $btn = $('#btnTop');
  var $home = $('#carouselExampleIndicators');
  var startpoint = $home.scrollTop() + $home.height();
  console.log(startpoint);
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > startpoint) {
      $btn.show();
    } else {
      $btn.hide();
    }
  });
});

window.onload = () => {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        // function () {
        //   // Add hash (#) to URL when done scrolling (default click behavior)
        //   window.location.hash = hash;
        // }
      );
    } // End if
  });
};

//remove hashtags from url
// $(window).on('hashchange', function (e) {
//   history.replaceState("", document.title, e.originalEvent.oldURL);
// })