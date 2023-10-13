(function($) {
  $(document).ready(function() {

  $('body a').each(function(){ 
    var oldUrl = $(this).attr("href"); 
    var newUrl = ("/gcccac" + oldUrl );
    $(this).attr("href", newUrl);
  });





    $('.tabs').tabs();

    $("body").on('click', '.apply-btn', function () {
      $('.tabs').tabs();
    });
    

    $(document).on('click', '.nextbtn,.prevbtn', function(e) {
        var tab_id = $(this).attr("href").substr(1);
        $('.tabs').tabs('select', tab_id);
        e.preventDefault();
    });


    $("#main-menu > li").append("<div class='subarrow'></div>");

    $(document.body).on('click', '#main-menu .subarrow' ,function(){
        if ($(this).closest('li').hasClass('show')) {
            $(this).closest('li').removeClass("show");
        } else {
            $(this).closest('li').addClass("show");
        }
    });




    $('select').formSelect();
     $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav({
      edge: 'left', 
    });

    $( ".drag-content" ).draggable();


    $('.item1').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      items:1,
      autoplay:true,
      autoplayTimeout:5000,
  });

       




  $('.item3').owlCarousel({
      loop:true,
      nav:false,
      autoplay:true,
      autoplayTimeout:1500,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
  });  
  $('.item4').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  });

  $('.item8').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:4
          },
          1000:{
              items:8
          }
      }
  });


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 150) {
            $('body').addClass('fixed-header');
        }
        else {
            $('body').removeClass('fixed-header');
        }
    });

  $(document.body).on('click', '.feeshow' ,function(){
    if ($('.feecal-content').hasClass('show')) {
        $('.feecal-content').removeClass("show");
    } else {
        $('.feecal-content').addClass("show");
    }
  });



$('a[data-toggle="formtab"]').click(function(){
  var targetId = $(this).attr('href');
  $('.tabs-panels').removeClass('active')
  $('a[data-toggle="formtab"]').removeClass('active');
  $(targetId).addClass('active');
  $('a[href="'+targetId+'"]').addClass('active');

});




$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})

});








  });
})(jQuery);