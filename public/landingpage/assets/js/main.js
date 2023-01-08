$(document).ready(function(){
    $('.multiple-items').slick({
        prevArrow: '<div class="icon_slick icon_prev"><i class="fa-solid fa-chevron-left"></i> </div>',
        nextArrow: '<div class="icon_slick icon_next"><i class="fa-solid fa-chevron-right"></i></div>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
      });

      $('.responsive').slick({
        prevArrow: '<div class="icon_slick icon_prev"><i class="fa-solid fa-chevron-left"></i> </div>',
        nextArrow: '<div class="icon_slick icon_next"><i class="fa-solid fa-chevron-right"></i></div>',
        // dots: true,
        infinite: true,
        speed: 300,
        margin:10,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });
      $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      $(".item_question").click(function(event){

        var id = $(this).attr("id").split('_')[1];
        $(".sub_question").hide();
        $(`#link_${id}`).removeClass('active');
        $(".icon_down").removeClass("fa-rotate-180");
        $(`#panel_${id}`).show();
       
        $(`#icondown_${id}`).addClass("fa-rotate-180");
        console.log("huy");
        $(`#link_${id}`).addClass('active');
      });

    //   
    $(".show_menu_sub").click(function(){
      $(".list_sub_mobile").slideToggle();
    });
    // menu mobile
    $(".logo_mobile_menu").click(function(){
      $(".menu_content_mobile").slideToggle();
    });
  });
  