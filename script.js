$(document).ready(function() {
    
    
   $(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 750) {
        $(".navbar-inverse").addClass("navbar-fixed-top");
        
      }

      else{
          $(".navbar-inverse").removeClass("navbar-fixed-top");
         
      }
  })
})

   $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
   
   $(".submit-b").click(function(){
  alert("Your Response is recorded");
});
});
$(document).on("click",".footer-nav a",function(e){
        e.preventDefault();
        var id = $(this).attr("href"),
            topSpace = 30;
        $('html, body').animate({
          scrollTop: $(id).offset().top - topSpace
        }, 800);
    });

$(document).on("click","header a",function(e){
        e.preventDefault();
        var id = $(this).attr("href"),
            topSpace = 30;
        $('html, body').animate({
          scrollTop: $(id).offset().top - topSpace
        }, 800);
    });
$(document).on("click",".categories a",function(e){
        e.preventDefault();
        var id = $(this).attr("href"),
            topSpace = 30;
        $('html, body').animate({
          scrollTop: $(id).offset().top - topSpace
        }, 800);
    });

$(document).on("click",".cat a",function(e){
        e.preventDefault();
        var id = $(this).attr("href"),
            topSpace = 30;
        $('html, body').animate({
          scrollTop: $(id).offset().top - topSpace
        }, 800);
    });
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}