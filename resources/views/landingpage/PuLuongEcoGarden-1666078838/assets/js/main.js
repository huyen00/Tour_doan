$(document).ready(function(){
  // $(".guide").hide();
  $(".close").click(function(){
    $(".guide").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_map").css('opacity','1');
      $("#icon_rotate").css('opacity','1');
      $("#icon_unrotate").css('opacity','1');
      $("#icon_album").css('opacity','1');
  });
  $(".guide").click(function(){
      $(".guide").hide();
      $("#icon_sharelink").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_map").css('opacity','1');
      $("#icon_rotate").css('opacity','1');
      $("#icon_unrotate").css('opacity','1');
      $("#icon_album").css('opacity','1');
  });
  $("#icon_guide").click(function(){
      $(".guide").show();
      $("#icon_sharelink").css('opacity','0');
      $("#icon_info").css('opacity','0');
      $("#icon_mute").css('opacity','0');
      $("#icon_unmute").css('opacity','0');
      $("#hotspot_Close").css('opacity','0');
      $("#hotspot_open").css('opacity','0');
      $("#icon_fullscreen").css('opacity','0');
      $("#icon_VR").css('opacity','0');
      $("#icon_form").css('opacity','0');
      $("#icon_map").css('opacity','0');
      $("#icon_rotate").css('opacity','0');
      $("#icon_unrotate").css('opacity','0');
      $("#icon_album").css('opacity','0');

  });
});
// click info
$(".close").click(function(){
  $(".info").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_map").css('opacity','1');
      $("#icon_rotate").css('opacity','1');
      $("#icon_unrotate").css('opacity','1');
      $("#icon_album").css('opacity','1');
});
$(".info").click(function(){
    $(".info").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_map").css('opacity','1');
      $("#icon_rotate").css('opacity','1');
      $("#icon_unrotate").css('opacity','1');
      $("#icon_album").css('opacity','1');
});
$("#icon_info").click(function(){
    $(".info").show();
    $("#icon_sharelink").css('opacity','0');
      $("#icon_guide").css('opacity','0');
      $("#icon_mute").css('opacity','0');
      $("#icon_unmute").css('opacity','0');
      $("#hotspot_Close").css('opacity','0');
      $("#hotspot_open").css('opacity','0');
      $("#icon_fullscreen").css('opacity','0');
      $("#icon_VR").css('opacity','0');
      $("#icon_form").css('opacity','0');
      $("#icon_map").css('opacity','0');
      $("#icon_rotate").css('opacity','0');
      $("#icon_unrotate").css('opacity','0');
      $("#icon_album").css('opacity','0');
});
// click show map
$("#icon_map").click(function(){
  $(".map").show();
  $("#icon_sharelink").css('opacity','0');
  $("#icon_guide").css('opacity','0');
  $("#icon_mute").css('opacity','0');
  $("#icon_unmute").css('opacity','0');
  $("#hotspot_Close").css('opacity','0');
  $("#hotspot_open").css('opacity','0');
  $("#icon_fullscreen").css('opacity','0');
  $("#icon_VR").css('opacity','0');
  $("#icon_form").css('opacity','0');
  $("#icon_info").css('opacity','0');
  $("#icon_rotate").css('opacity','0');
  $("#icon_unrotate").css('opacity','0');
  $("#icon_album").css('opacity','0');
});
$(".close").click(function(){
  $(".map").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_rotate").css('opacity','1');
      $("#icon_unrotate").css('opacity','1');
      $("#icon_album").css('opacity','1');
});
$(".map").click(function(){
    $(".map").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_rotate").css('opacity','1');
      $("#icon_unrotate").css('opacity','1');
      $("#icon_album").css('opacity','1');
});
$("#icon_album").click(function(){
  $(".album_thumb").show();
  $("#icon_sharelink").css('opacity','0');
  $("#icon_guide").css('opacity','0');
  $("#icon_mute").css('opacity','0');
  $("#icon_unmute").css('opacity','0');
  $("#hotspot_Close").css('opacity','0');
  $("#hotspot_open").css('opacity','0');
  $("#icon_fullscreen").css('opacity','0');
  $("#icon_VR").css('opacity','0');
  $("#icon_info").css('opacity','0');
  $("#icon_map").css('opacity','0');
  $("#icon_rotate").css('opacity','0');
  $("#icon_unrotate").css('opacity','0');
  $("#icon_form").css('opacity','0');

});
$(".close_album_thumb").click(function(){
  $(".album_thumb").hide();
  $("#icon_sharelink").css('opacity','1');
  $("#icon_guide").css('opacity','1');
  $("#icon_mute").css('opacity','1');
  $("#icon_unmute").css('opacity','1');
  $("#hotspot_Close").css('opacity','1');
  $("#hotspot_open").css('opacity','1');
  $("#icon_fullscreen").css('opacity','1');
  $("#icon_VR").css('opacity','1');
  $("#icon_info").css('opacity','1');
  $("#icon_map").css('opacity','1');
  $("#icon_rotate").css('opacity','1');
  $("#icon_unrotate").css('opacity','1');
  $("#icon_form").css('opacity','1');

});
// click popup 
$(".popup").click(function(){
  $(".popup").hide();
});
// $(".info_duan").click(function(){
//   $(".info_duan").hide();
// });
$(".info_infomation_image").click(function(){
  $(".info_infomation_image").hide();
});
$(".info_information").click(function(){
  $(".info_information").hide();
});
$(".image_tra").click(function(){
  $(".image_tra").hide();
});

// click video
$(document).ready(function(){
  // $(".video").hide();
  $(".close").click(function(){
    $(".video").hide();
  });
  $(".video").click(function(){
      $(".video").hide();
  });
  $("#icon_video").click(function(){
      $(".video").show();
  });
});
// click form
$(document).ready(function(){
  // $(".form").hide();
  $(".close").click(function(){
    $(".form").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_map").css('opacity','1');
      $("#icon_rotate").css('opacity','1');
      $("#icon_unrotate").css('opacity','1');
      $("#icon_album").css('opacity','1');

  });
  $(".form").click(function(){
      // $(".form").hide();
      $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_map").css('opacity','1');
      $("#icon_rotate").css('opacity','1');
      $("#icon_unrotate").css('opacity','1');
      $("#icon_album").css('opacity','1');

  });
  $("#icon_form").click(function(){
      $(".form").show();
      $("#icon_sharelink").css('opacity','0');
      $("#icon_guide").css('opacity','0');
      $("#icon_mute").css('opacity','0');
      $("#icon_unmute").css('opacity','0');
      $("#hotspot_Close").css('opacity','0');
      $("#hotspot_open").css('opacity','0');
      $("#icon_fullscreen").css('opacity','0');
      $("#icon_VR").css('opacity','0');
      $("#icon_info").css('opacity','0');
      $("#icon_map").css('opacity','0');
      $("#icon_rotate").css('opacity','0');
      $("#icon_unrotate").css('opacity','0');
      $("#icon_album").css('opacity','0');

  });
// xử lý popup
$("#link_menu_top").click(function(){
  $(".list_sub_top_mobile").css("display","block");
 
 })

  // xử lý menu icon sub
 
  $("#icon_menusub").click(function(){
    $(".menu_sub").slideToggle();
   
  });

  // xu lý show menu
   $('.arrow-left').click(function(event){
    $(".menu_tour").removeClass('show_menu_tour');
    $(".menu_tour").toggleClass('hide_menu_tour');
    $('.arrow-right').show();
    $('.arrow-left').hide();
   });
   $('.arrow-right').click(function(event){
    $(".menu_tour").removeClass('hide_menu_tour');
    $(".menu_tour").toggleClass('show_menu_tour');
    $('.arrow-left').show();
    $('.arrow-right').hide();
   })
});
// click album
$("#icon_album").click(function(){
  $(".album_thumb").show();
});
$(".close_album_thumb").click(function(){
  $(".album_thumb").hide();
});

// hs
$(document).ready(function(){
  $(".form").hide();
  $(".info_toancanh").click(function(){
    $(".form").hide();
  });
  // $(".form").click(function(){
  //     $(".form").hide();
  // });
  $("info_toancanh").click(function(){
      $(".form").show();
  });


});

var array_list = [
  // 0
  {
    title_list : "Khu nguyên liệu A",
    content_list: "Là khu nguyên liệu đã  và đang cho thu hoạch ổn định (gồm nhiều cây 3-7 năm tuổi, ngoài ra có các khu vực đang phát triển cây con độ tuổi 1,5 - 2,5 năm tuổi). Diện tích khoảng 10ha"
   
    
  },
  // 1
  {
    title_list : "Khu nguyên liệu B",
    content_list: "Là khu mới phát triển (gồm nhiều cây con độ tuổi dưới 1 năm tới 2 năm tuổi), đây là khu nguyên liệu của thành viên HTX, mà trong đó thành viên được hỗ trợ giống, kỹ thuật, bao tiêu thu mua... tạo vùng nguyên liệu ổn định lâu dài cũng như tạo công ăn việc làm cho nhân dân địa phương. Diện tích khoảng 6ha."
   
  
  },
  // 2
  {
    title_list : "Khu cây trồng lâu năm",
    content_list: "Khu gồm cây trà mẹ, lâu năm tuổi (cây 10-20 năm tuổi) vừa cung cấp hoa vừa cung cấp quả, hạt giống cũng như phôi chiết. Khu cây lâu năm tuổi kết hợp một số khu vực khu nguyên liệu A là nguồn cung cấp chính cây con cho cả khu vực nguyên liệu xung quanh khác."
   
   
  
  },
  // 3
  {
    title_list : "Khu Vườn Ươm",
    content_list: "Khu vườn ươm là nơi nhân giống, tạo sự chủ động nguồn cung cho HTX cũng như vùng nguyên liệu được bền vững."
   
   
  
  },
  
  // 4
  {
    title_list : "Nhà thu mua",
    content_list: "Nhà ở của chủ cơ sở kinh doanh kèm chức năng thu mua nguyên liệu của thành viên HTX cũng như nhân dân quanh vùng"
  },
  // 5
  {
    title_list : "Nhà Trưng bày sản phẩm",
    content_list: "Khu tổ hợp nhà trưng bày sản phẩm gồm khu trưng bày, khu xưởng sấy, kho và tiếp giáp khu vườn ươm.Đây là điểm giới thiệu và bán sản phẩm OCOP thứ 3/5 điểm giới thiệu và bán sản phẩm OCOP trên địa bàn tỉnh được hỗ trợ theo QĐ 1656/QĐ-UBND ngày 19 tháng 8 năm 2020 của UBND tỉnh đã khai trương và đi vào hoạt động "
    
   
  
  },
  // 6
  {
    title_list : "",
    content_list: "Đây là đường 293 (hướng đi về chùa Tây Yên Tử - chùa Hạ) tuyến đường Hoằng dương phật pháp kết nối địa danh tâm linh, lịch sử giữa thành phố Bắc Giang và vùng đất Tây Yên Tử"
  },
  // 7
  {
    title_list : "",
    content_list: "Đây là đường 293 (hướng đi về tp Bắc Giang) tuyến đường Hoằng dương phật pháp kết nối địa danh tâm linh, lịch sử giữa thành phố Bắc Giang và vùng đất Tây Yên Tử"
  },
  // 8 : A1
  {
    title_list : "Những cây 5 - 7 năm tuổi",
    content_list: "Cây đang thu hoạch và có thể là cây giống bố mẹ Cây cho thu hoạch cả hoa và lá Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 9:A2
  {
    title_list : "Cây trà 6 năm tuổi",
    content_list: "Cây đang thu hoạch và có thể là cây giống bố mẹ Cây cho thu hoạch cả hoa và lá Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 10 :A3
  {
    title_list : "Cây 7 năm tuổi",
    content_list: "Cây đang thu hoạch và có thể là cây giống bố mẹ Cây cho thu hoạch cả hoa và lá Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 11:
  {
    title_list : "Cây 1 tuổi rưỡi",
    content_list: "Cây được trồng mở rộng diện tích hoặc thêm vào những cây trồng loại khác đã được phá bỏ. Cây cho thu hoạch lá ngay từ độ tuổi này. Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 12 : B1
  {
    title_list : "Cây hơn 1 năm tuổi",
    content_list: "Cây mới được trồng bên khu vườn mới của thành viên HTX Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 13 : B2
  {
    title_list : "Cây 1 năm tuổi",
    content_list: "Cây mới được trồng bên khu vườn mới của thành viên HTX Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 14
  {
    title_list : "Dược liệu khác",
    content_list: "Đây là mặt hàng cũng nằm trong danh mục được kiểm định và được có mặt trong gian hàng"
  },
  // 15
  {
    title_list : "Máy sấy lạnh",
    content_list: "Sấy lạnh là phương pháp sấy bằng tác nhân là không khí rất khô ở nhiệt độ thấp hơn nhiệt độ sấy thông thường. Dải nhiệt độ sấy từ 35-600C, độ ẩm không khí sấy vào khoảng 10-30%. Quá trình sấy được tiến hành ở áp suất khí quyển. Máy sấy lạnh được cấu thành bởi một máy bơm nhiệt được đặt trong một tủ sấy hoặc một hầm sấy tùy theo quy mô. Máy bơm nhiệt có một đầu nóng và một đầu lạnh. Đầu nóng sẽ cung cấp nhiệt lượng cho tác nhân sấy, còn đầu lạnh dùng để tách ẩm cho không khí sấy. Do đó, máy sấy lạnh còn gọi là máy sấy bơm nhiệt. "
  },
  // 16
  {
    title_list : "Máy sấy thăng hoa",
    content_list: "Sấy thăng hoa hay sấy đông khô: Đây là phương pháp sấy ưu việt nhất trong tất cả phương pháp sấy hiện nay. Sấy thăng hoa (freeze drying) là một kỹ thuật còn được gọi là “làm khô lạnh”. Trong đó sản phẩm được sấy khô qua quá trình thăng hoa của nước dưới nhiệt độ và áp suất thấp. Nước trong sản phẩm được đông lạnh thành đá sau đó được loại bỏ trực tiếp ra khỏi sản phẩm bằng cách hóa hơi. Điều này được thực hiện trong môi trường chân không."
  },

  
];


var array_info = [
  {
    title_info: "Sản phẩm Trà Loại 1",
    content_info: "Trà loại 1 là ....<br> 1...<br> 2.... <br>3..."
    
   
    
  },
  {
    title_info : "Sản phẩm Trà Loại 2",
    content_info: "Trà loại 2 là ....<br> 1...<br> 2.... <br>3..."
   
  
  },
  {
    title_info : "Sản phẩm Trà Loại 3",
    content_info: "Trà loại 3 là ....<br> 1...<br> 2.... <br>3..."
   
   
  
  },
  {
    title_info : "Giới thiệu về Pù Luông Eco Garden",
    content_info: "<b>Các tiện ích: </b> Đừng bỏ qua cơ hội tận hưởng những dịch vụ thư giãn, giải trí như hồ bơi ngoài trời hay chỉ đơn giản là ngắm cảnh từ sân thượng/sân hiên và vườn. Các dịch vụ, tiện ích khác tại khách sạn này bao gồm truy cập Internet không dây miễn phí, dịch vụ tư vấn/hỗ trợ khách và khu lò nướng BBQ.<br> <b>Bữa ăn: </b>Khách có thể dùng bữa trưa hoặc bữa tối tại nhà hàng của khách sạn hoặc chọn nghỉ lại trong phòng và gọi món với dịch vụ phòng (có giới hạn thời gian). Thư giãn sau một ngày dài bên cạnh ly đồ uống yêu thích tại quầy bar/khu lounge. Khách có thể dùng bữa sáng đặc sản địa phương miễn phí hàng ngày từ 07:00 đến 09:30.<br> <b> Tiện nghi cho doanh nhân:</b> Có nhiều dịch vụ, tiện ích dành cho khách, bao gồm dịch vụ giặt ủi/giặt khô, quầy tiếp tân phục vụ 24 giờ/ngày và dịch vụ trông giữ/bảo quản hành lý. Xe đưa đón sân bay phục vụ 24 giờ với phụ phí, bên cạnh đó cũng có bãi đậu xe tự phục vụ miễn phí trong khuôn viên. <br> <b>Phòng nghỉ: </b>Hãy nghỉ ngơi thoải mái như đang ở nhà mình tại một trong 16 phòng. Quý vị sẽ luôn có thể giữ liên lạc bằng truy cập Internet không dây miễn phí ngay tại phòng. Các phòng tắm có dép đi trong nhà và bàn chải và kem đánh răng (theo yêu cầu). Phòng được trang bị màn/rèm cản sáng; và dịch vụ dọn phòng phục vụ hàng ngày. <br> <b>Địa điểm tham quan:</b> Khoảng cách được làm tròn đến 0,1 km (hoặc dặm).<br>Thác Hiêu - 23,6 km <br> Hồ Mỏ Luông - 40,2 km <br> Bản Lác - 41,5 km <br> Khu bảo tồn Thiên nhiên Pù Luông - 47,3 km <br> Suối Cá thần Cẩm Lương - 47,9 km <br> <b> Vị trí: </b>Pù Luông Eco Garden ở Bá Thước, cách Thác Hiêu 14,7 mi (23,6 km) và cách Hồ Mỏ Luông 25 mi (40,2 km). Khách sạn này cách Bản Lác 25,8 mi (41,5 km) và cách Khu bảo tồn Thiên nhiên Pù Luông 29,4 mi (47,3 km). <br> <b>Điểm nổi bật: </b> Ở Bá Thước",
   images:[
    
      {
      image:'assets/img/image_2.jpg'
      },{
        image:'assets/img/image_3.jpg'
      }
   ]
   
  
  },
  {
    title_info : "Giới Thiệu về cây Trà Hoa Vàng",
    content_info: "Trà hoa vàng hay còn gọi là Kim hoa trà, Chè rừng, Hải đường vàng, là một cây có giá trị làm cảnh và là loại thảo dược quý. Cây có nguồn gốc bản địa phân bố ở một vài vùng núi phía bắc nước ta. Theo nghiên cứu khoa học hiện đại, Trà hoa vàng là loài dược liệu rất quý, trà có chứa hơn 400 hoạt chất và trong đó quý giá là các saponin, tea polyphenol và các nguyên tố như Selenium (Se), Germannium (Ge), Kalium (K), Kẽm (Zn), Molypden (Mo), Vanadium (V), Mangan (Mn) và các vitamin B1, B2, C. Trà Hoa Vàng được giới y học nghiên cứu rất nhiều và đã được ứng dụng trên nhiều quốc gia như Mỹ,Trung Quốc, Pháp, Nhật Bản, Việt Nam ... <br> Nước sắc lá trà có tác dụng hạ huyết áp rõ ràng và tác dụng được duy trì trong thời gian tương đối dài. Trong lá trà có những hoạt chất làm giảm tổng hàm lượng lipit trong huyếtthanh máu, giảm lượng cholesterol mật độ thấp (cholesterol xấu) và tăng lượng cholesterol mật độ cao (cholesterol tốt). Nước sắc lá trà có tác dụng ức chế sự tụ tập của tiểu cầu, chống sự hình thành huyết khối gây tắc nghẽn mạch máu. Phòng ngừa ung bướu và ức chế sự phát triển của các khối u khác. Giải độc gan và thận, ngăn ngừa xơ vữa động mạnh máu. Ức chế và tiêu diệt vi khuẩn. Ngoài ra, lá chè còn có tác dụng chống viêm, chống dị ứng và duy trì trạng thái bình thường của tuyến giáp. Cây Trà Hoa Vàng ngày nay rất được nhiều người ưa chuộng trồng để làm cảnh và dùng làm trà như một loại thảo dược dùng để dưỡng sinh.<br> 2Trà hoa vàng của Hợp tác xã đã đạt chuẩn OCOP 4 sao và là sản phẩm tiêu biểu cấp Tỉnh 2019, cấp khu vực 2020 và toàn quốc 2021. <br>3Sản phẩm được trồng hữu cơ không dùng thuốc bảo vệ thực vật và  phân bón hoá học. Mỗi năm chỉ ra hoa 1 lần vào tháng 10 đến tháng 12 âm lịch hàng năm. Thu hoạch vào buổi sáng để giữ được hoạt chất quý của trà không bị ảnh hưởng bởi ánh nằng mặt trời. Không thu hái vào trời mưa để thu được những bông trà thơm ngon nhất. Trà được chế biến bằng quy trình sấy công nghệ cao, hiện đại nhất hiện tại sấy thăng hoa, trà khô ở nhiệt độ -40 độ C để đảm bảo giữ được nguyên dược tính hoạt chất quý của trà.",

    images:[
    
      {
      image:'assets/img/image_info_1.jpg'
      },{
        image:'assets/img/logo_trahoavang.jpg'
      }
   ]
  
  },
  
];

// xử lý popup

function showform(data){
  if( $(document).width() < 601 ){
    $(".menu_sub").hide();
  };
  if( $(document).width() < 801 ){
    $(".menu_sub").hide();
  };

  document.getElementById('popup_').style.display = "flex";

  $("#title_form").html(data.title_list);
  $("#content_form").html(data.content_list);
}
// show info tra
function show_info(data){
  if( $(document).width() < 601 ){
    $(".menu_sub").hide();
  };
  if( $(document).width() < 801 ){
    $(".menu_sub").hide();
  };
  document.getElementById('info_information').style.display = "flex";
  $("#title_info_general").html(data.title_info);
  $("#content_info_general").html(data.content_info);
  
  
}
function close_contact(){
  document.getElementById('form').style.display = "none";
}

function show_image(){
  
  document.getElementById('image_tra').style.display = "flex";

   document.getElementById('info_information').style.display = "none";
}
function close_info_tra(){
  document.getElementById('image_tra').style.display = "none";
  document.getElementById('info_information').style.display = "flex";
}
function close_info(){
  document.getElementById('info_information').style.display = "none";
}
function show_htx(data){
  if( $(document).width() < 601 ){
    $(".menu_sub").hide();
  };
  if( $(document).width() < 801 ){
    $(".menu_sub").hide();
  };
  document.getElementById('info_duan').style.display = "flex";
 
 
  $("#title_info_duan").html(data.title_info);
  $("#content_info_duan").html(data.content_info);
}
function show_image_duan(){
  document.getElementById('info_infomation_image').style.display = "flex";
  document.getElementById('info_duan').style.display = "none";
}

function close_image_duan(){
  document.getElementById('info_infomation_image').style.display = "none";
  document.getElementById('info_duan').style.display = "flex";
}
function close_duan(){
  document.getElementById('info_duan').style.display = "none";
  $(".info").css("display","block");
}

// popup info image tra
function show_htx_tra(data){
  document.getElementById('info_duan_tra').style.display = "flex";
 
 
  $("#title_info_duan_tra").html(data.title_info);
  $("#content_info_duan_tra").html(data.content_info);
}
function show_image_duan_tra(){
  document.getElementById('info_infomation_image_2').style.display = "flex";
  document.getElementById('info_duan').style.display = "none";
  document.getElementById('info_duan_tra').style.display = "none";
}
function close_duan_tra(){
  document.getElementById('info_duan_tra').style.display = "none";
  $(".info").css("display","block");
}
function close_image_duan_tra(){
  document.getElementById('info_infomation_image_2').style.display = "none";
  document.getElementById('info_duan_tra').style.display = "flex";
}

// xử lý voice 
(function ($) {
  embedpano({
      xml: "tour.xml",
      target: "pano",
      html5: "only",
      mobilescale: 1.0,
      initvars: {
        array_list_xml: array_list,
        array_info_xml:array_info,
      },
      passQueryParameters: true,
      onready: krpanoReady
  });

  function krpanoReady(krpano) {
    $("#icon_unmute").hide();
      $("#icon_unmute").on("click", function (e) {
          e.preventDefault();

          console.log(krpano);
          $("#icon_mute").show();
        
          $("#icon_unmute").hide();
    

          krpano.call("resumesound()");
      });
      $("#icon_mute").on("click", function (e) {
        e.preventDefault();

        console.log(krpano);
        $("#icon_unmute").show();
      
        $("#icon_mute").hide();
   
        krpano.call("pause_sound()");
        
        
    });
    $(".item_menu_top_mobile").click(function(event){
      // const id = this.id.split('_')[1];
        var id = $(this).attr("id").split('_')[1];
      
        $(".list_sub_top_mobile").hide();
        // $(`#panel_${id}`).addClass('panel-hien');
        $(`#panel_${id}`).show();
       

    });
  
    
    // title scene html 
    // getSceneTitleName();
    function getSceneTitleName(){ 
      var title = String( krpano.get("scene[get(xml.scene)].title") ); 
      console.log("title ="+ title);     
      $("#name_scene").html(title);
    };
    // xu ly VR
    $("#icon_VR").on("click", function(e){
      krpano.call("webvr.enterVR()");
    });
    // xu ly xoay
    $("#icon_rotate").hide();
    $("#icon_rotate").on("click",function(e){
      $("#icon_unrotate").show();
      $("#icon_rotate").hide();
      krpano.call("toggleRotate()");
    });
    $("#icon_unrotate").on("click",function(e){
      $("#icon_unrotate").hide();
      $("#icon_rotate").show();
      krpano.call("toggleRotate()");
    });

    
    // xu ly scene
    
    $("#icon_back").on("click",function(e){
      krpano.call("back_scene()");
    });
    // xu ly show/hide hotspot
    $("#hotspot_open").hide();
    $("#hotspot_Close").on("click",function(e){
      $("#hotspot_open").show();
      $("#hotspot_Close").hide();
      krpano.call("hideallhotspots()");
    });
    $("#hotspot_open").on("click",function(e){
      $("#hotspot_open").hide();
      $("#hotspot_Close").show();
      krpano.call("showallhotspot()");
    });
    // $(".slick-slide.slick-current").click(function(e){
    //   // $(".slick-slide").addclass("slick-current");
   
    //   krpano.call("loadscene_with_name()");
     
    // });
   
    // xu ly active khi click
  $(".item_sub_top").click(function(e){
    var link_scene = $(this).attr('id');
    console.log(link_scene);
   
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
      
    });
    var elems = document.querySelectorAll(".active_menu");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active_menu");
      
      });
     
    $(this).addClass("active");
    $(this).removeClass("active_menu");
    console.log($(this).attr('id'));
    let target_active_menu = "#" + $(this).attr('id')
    var elems_active_menu = document.querySelectorAll(target_active_menu);
      [].forEach.call(elems_active_menu, function(el) {
        el.classList.add("active_menu");
      
      });
    krpano.call("load_scene(" +link_scene + ")");
    getSceneTitleName();
   
  });
  // xu ly active khi click album thumb
  $(".item_album").click(function(e){
    var link_scene = $(this).attr('id');
    console.log(link_scene);
   
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
      
    });
    var elems = document.querySelectorAll(".active_menu");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active_menu");
      
      });
     
    $(this).addClass("active");
    $(this).removeClass("active_menu");
    console.log($(this).attr('id'));
    let target_active_menu = "#" + $(this).attr('id')
    var elems_active_menu = document.querySelectorAll(target_active_menu);
      [].forEach.call(elems_active_menu, function(el) {
        el.classList.add("active_menu");
      
      });
    krpano.call("load_scene(" +link_scene + ")");
    getSceneTitleName();
   
  });

  // xu lys show scene menu
  $(".item_menu_top_mobile").click(function(e){
    var link_scene = $(this).attr('id');
   
    var elems = document.querySelectorAll(".active_menu");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active_menu");
      
    });
    var elems_thumbs = document.querySelectorAll(".active");
    [].forEach.call(elems_thumbs, function(el) {
      el.classList.remove("active");
      
    });
    let target_active = "#" + $(this).attr('id');
    var elem_active = document.querySelectorAll(target_active);
    [].forEach.call(elem_active, function(el) {
      el.classList.add("active");
    
    });
    $(this).addClass("active_sub");
    $(this).removeClass("active");
 
    krpano.call("load_scene(" +link_scene + ")");
    getSceneTitleName();
  });
  // xu ly minimap
 
 

   
  }
})(jQuery);

// xử lý fullscreen
function toggleFullscreen() {
if (!document.fullscreenElement &&    // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
} else {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
}
// xử lý share link
const button = document.querySelector('#icon_sharelink')
button.onclick = () => {
navigator.clipboard.writeText(window.location.href);
}

// xử lý quay trở lại scene trước
function changepano(panoName)
{
var krpano = document.getElementById("krpanoSWFObject1");
krpano.call("loadscene(" + panoName + ");");
}


// xư lý thumbs list
$(document).ready(function(){
 
  $(".button_close").click(function(){
    $(".popup").hide();
  });
  // menu mobile
 
  
  
});
