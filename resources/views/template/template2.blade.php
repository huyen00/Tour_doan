@extends('tour360.layout.index')
@section('title', $tour->name)
@section('image',asset( ($tour->setting_tour != null ) ? $tour->setting_tour->thumb : null))
@section('icon',asset( ($tour->setting_tour != null ) ? $tour->setting_tour->favicon : null))

@section('content')
<div id="pano" style="width:100%;height:100%;">
	<noscript><table style="width:100%;height:100%;"><tr style="vertical-align:middle;"><td><div style="text-align:center;">ERROR:<br/><br/>Javascript not activated<br/><br/></div></td></tr></table></noscript>

<div class="option_menu_top">
    <div class="menu_top">
        <div class="logo_company">
          <img src="{{ ($tour->setting_tour != null ) ? $tour->setting_tour->logo : null }}" class="img-fluid " alt="">
        </div>
		<li class="menu_mobile" id="menu_mobile">
			<a class="link_menu_mobile">
				<i class="fa-solid fa-bars"></i>
			</a>
		</li>
        <div class="menu_top_text">
            <ul class="list_menu_top">
				@foreach ($tour->category_panos as $category)
                	<li class="item_menu_top">
						<a class="link_menu_top"> {{$category->name}} <i class="fa-solid fa-caret-down"></i></a>
						<ul class="list_sub_top">
						@foreach ( $category->panos as $pano )
						<li class="item_sub_top" id="{{$pano->id_thumb}}">
							<a class="link_sub">{{$pano->name}}</a>
						</li>
						@endforeach
						</ul>
                	</li>
				@endforeach

            </ul>

        </div>
        <div class="menu_top_mobile">
          <ul class="list_menu_top_mobile">

            @foreach ($tour->category_panos as $category)
                    <li class="item_menu_top_mobile" id="check_{{$category->id}}">

                        <a  class="link_menu_top_mobile"> {{$category->name}} 		 </a>
                        <ul class="list_sub_top_mobile" id="panel_{{$category->id}}">
                          @foreach ( $category->panos as $pano )
                            <li class="item_menu_top_mobile link_mobile" id="{{$pano->id_thumb}}">
                                <a class="link_menusub_top_mobile">{{$pano->name}}</a>
                            </li>

                            @endforeach
                        </ul>

                    </li>
                    @endforeach

                </ul>
        </div>
    </div>
</div>
<div class="background_sound"></div>
	<!-- <div class="logo_tour">
		<img src="assets/img/logo_trahoavang1.png" class="img-fluid " alt="">
		<li class="logo_ocop">
			Doanh nghi???p OCOP 4 *
		</li>
	</div> -->

	<!-- menu icon top- right -->
	<ul class="hide_show_menusub">

		<ul class="menu_sub" id="menu_sub">
      @if($tour->setting_display->sound)
	  <div class=" item_icon list_sound" id="list_sound" >
		<li class=" " id="icon_mute">
			<i class="fas fa-volume-off"></i>

		</li>
	
		<div class="change_sound" id="change_sound">
		<!-- @foreach ($tour->sounds as $sounds) -->
			<li class="item_sound" id="sound1">
				<span>Nh???c n???n 1</span>
			</li>
			<!-- @endforeach -->
			<li class="item_sound" id="sound2">
				<span>Nh???c n???n 2</span>
			</li>
			<li class="item_sound" id="text_unmute">
				<span>T???t ??m thanh</span>
			</li>
			<li class="item_sound" id="text_mute">
				<span>B???t ??m thanh</span>
			</li>
		</div>

		<li class="" id="icon_unmute" >
			<i class="fas fa-volume-mute"></i>
		</li>
	  </div>


      @endif
      @if($tour->setting_display->infor)
			<li class="item_icon" id="icon_info" onclick="show_info()" aria-label="{{__('infor')}}" data-balloon-pos="up">
				<i class="fas fa-info-circle"></i>

			</li>
      @endif
      @if($tour->setting_display->setting_map)
			<li class="item_icon" id="icon_map"  aria-label="{{__('map')}}" data-balloon-pos="up" onclick="show_map()">
				<i class="fas fa-map"></i>

			</li>
      @endif
			<li class="item_icon" id="icon_album" aria-label="Album" data-balloon-pos="up" onclick="show_album()">
				<i class="fa-solid fa-images"></i>

			</li>
			@if($tour->setting_display->show_hotspot)
			<li class="item_icon" id="hotspot_Close" aria-label="{{__('hide_hotspot')}}" data-balloon-pos="up">
				<i class="fas fa-toggle-off"></i>

			</li>
			<li class="item_icon" id="hotspot_open" aria-label="{{__('show_hotspot')}}" data-balloon-pos="up">
				<i class="fas fa-toggle-on"></i>

			</li>
      @endif

      @if($tour->setting_display->rotate)
			<li class="item_icon" id="icon_rotate" aria-label="{{__('off_rotate')}}" data-balloon-pos="up">
				<i class="fa-solid fa-rotate-right"></i>

			</li>
			<li class="item_icon" id="icon_unrotate" aria-label="{{__('open_rotate')}}" data-balloon-pos="up">
				<i class="fa-solid fa-clock-rotate-left"></i>

			</li>
      @endif
      @if($tour->setting_display->setting_vr)
			<li class="item_icon" id="icon_VR" aria-label="VR" data-balloon-pos="up">
				<i class="fas fa-vr-cardboard"></i>

			</li>
      @endif
      @if($tour->setting_display->fullscreen)
			<li class="item_icon" id="icon_fullscreen" onclick="toggleFullscreen()" aria-label="{{__('fullscreen')}}" data-balloon-pos="up">
				<i class="fas fa-expand"></i>
			</li>
      @endif
		</ul>
		<li class="item_icon" id="icon_menusub">
			<i class="fas fa-ellipsis-v"></i>
		</li>
	</ul>
	<ul class="menu_contact">
		<ul class="menu_contact_mobile">
      @if($tour->setting_display->contact)
			<li class="item_icon" id="icon_form" aria-label="{{__('contact')}}" data-balloon-pos="right" onclick="show_contact()">
				<i class="fas fa-address-book"></i>
			</li>
      @endif
      @if($tour->setting_display->guide)
			<li class="item_icon" id="icon_guide" aria-label="{{__('guide')}}" data-balloon-pos="right" onclick="show_guide()">
				<i class="fas fa-question"></i>
			</li>
      @endif
	  @if($tour->setting_display->share)
				<li class="item_icon" id="icon_sharelink" aria-label="Sao ch??p link" data-balloon-pos="right">
					<i class="fas fa-share-alt"></i>
				</li>
      	@endif
		@if($tour->setting_display->back_scene)
		<li class="item_icon" id="icon_backscene">
				<i class="fa-solid fa-reply"></i>
		</li>
		@endif
		{{-- <div class="icon_back">

		</div>
       --}}
		</ul>
		<ul class="name_scene">
			<h2 class="title_name_scene" id="name_scene">{{ $tour->panos[0]->name }}</h3>
			<span class="title_tour">{{$tour->name}}</span>
		</ul>

	</ul>
	<!-- album thumb -->
	<div class="album_thumb" id="album_thumb">
		<div class="list_album_thumb">
			<div class="close_album_thumb" onclick="close_album()">
				<i class="fas fa-times"></i>
			</div>
			<div class="row list_album">
				@foreach ($tour->panos as $pano )
				<div class="item_album" id="{{$pano->id_thumb}}">
					<div class="item_img_album">
						<img src="{{$pano->thumb_img}}" class="img-fluid img_album" alt="">
					</div>
					<div class="title_album">
						<span>{{$pano->name}}</span>
					</div>
				</div>
				@endforeach
			</div>
		</div>
	</div>

 <!-- form info tong quat -->

 <div class="general_info" id="general_info">
	<span class="button_close" id="close_general" onclick="close_form()">
		<i class="fas fa-times"></i>
	</span>
	<div class="form_general_info">
		<h5>Gi???i Thi???u Chung </h5>
		<div class="content_general_info">
			<div class="content_general">
				@foreach ($tour->infors as $info )
				<span  class="info_link"  onclick="show_item_info({{$info->id}}); @if($info->voice_active) setDataPlayAudio({{ $info->id }},'{{ $info->voice_active->voice}}') @endif ">
					{{ $info->title }}
				</span>
				@endforeach
			</div>

		</div>
	</div>
</div>
<!-- form info -->
@foreach ($tour->infors as $info )
<div class="info info_{{ $info->id }}" id="info_{{ $info->id }}">
	<span class="button_close" id="close_general" onclick="close_item_info({{ $info->id }})">
		<i class="fas fa-times"></i>
	</span>
	<div class="form_info">
		<div class="title_info">
			<h5 id="title_info" >{{ $info->title }}</h5>
		</div>
		<div class="content_info">
			<div class="text_content_info" id="text_content_info">
				{!! $info->description_vn !!}
			</div>
		</div>
		<div class="footer_info">
			@if($info->voice_active)
			<div class="footer_icon" id="footer_voice"
				onclick="playAudio({{ $info->id }},'{{ $info->voice_active->voice}}')">
				<i class="fa-solid fa-play icon_play icon_play_{{ $info->id }}"></i>
				Nghe
			</div>
			@endif
            @if(count($info->images) > 0)
			<div class="footer_icon" onclick="show_image({{ $info->id }})" id="footer_image">
				H??nh ???nh
				<i class="fa-solid fa-image icon_image"></i>
			</div>
            @endif
		</div>
	</div>
</div>
	<!-- image -->
	<div class="image" id="image_{{ $info->id }}">
		<span class="button_close" id="close_general" onclick="close_image({{ $info->id }})">
			<i class="fas fa-times"></i>
		</span>
		<div class="form_image">
			<div class="row list_image">
				@foreach ($info->images as $image)
				<div class="item_image">
					<img src="/{{ $image->image }}" class="img-fluid img_album" alt="">
					<div class="title_image">
						<span>{{ $image->name }}</span>
					</div>
				</div>
				@endforeach
			</div>
		</div>
	</div>
@endforeach

<!-- map -->

<div class="map" id="map">
	<span class="button_close" id="close_general" onclick="close_form()">
		<i class="fas fa-times"></i>
	</span>
	<div class="form_map">
		<iframe src="tour/{{ $tour->code }}/map" class="iframe_map" frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen frameborder="0"></iframe>
	</div>
</div>
<!-- contact -->
<div class="contact" id="contact">
	<div class="form_contact">
		<h3 class="title_contact">{{__('contact')}}</h3>
		<form id="contact-form" >
			<input type="hidden" name="_token" value="2d7EP09QskNLTOighldVx0TZxQ3ae1iotrMIeMfq">
			<div class="form-group ">
				<input type="text" name="name" id="name" class="form-control" placeholder="{{__('name')}}">
			</div>
			<div class="form-group ">
				<input type="text" name="email" id="phone" class="form-control" placeholder="{{__('email')}}">
			</div>
			<div class="form-group ">
				<input type="text" name="phone" id="phone" class="form-control" placeholder="{{__('phone')}}">
			</div>
			<div class="form-group ">
				<textarea class="form-control" name="message" id="message" placeholder="{{__('message')}}" rows="3" cols="4"></textarea>
			</div>
			<div style="text-align:center">
				<button type="submit" class=" btn-sub text-uppercase">{{__('send_us')}}</button>
			</div>
		</form>
	</div>
	<span class="button_close" id="close_general" onclick="close_form()">
		<i class="fas fa-times"></i>
	</span>
</div>
{{-- form info hotspot --}}
<div class="info_hotspot" id="info_hotspot">
<span class="button_close" id="close_info_hotspot" onclick="close_info_hotspot()">
	<i class="fas fa-times"></i>
</span>
<div class="form_info">
	<div class="title_info">
		<h5 id="title_info_hotspot" ></h5>
	</div>
	<hr class="line">
	<div class="content_info">
		<div class="text_content_info" id="text_content_info_hotspot">

		</div>
	</div>
	<div class="footer_info">
		{{-- <div class="footer_icon" id="footer_voice">
			<i class="fa-solid fa-play icon_play"></i>
			<i class="fa-solid fa-pause icon_pause "></i>

			Nghe
		</div>
		<div class="footer_icon" onclick="show_image_hotspot()" id="footer_image">
			H??nh ???nh
			<i class="fa-solid fa-image icon_image"></i>
		</div> --}}
	</div>
</div>
</div>

<!-- image hotspot -->
{{-- <div class="image_hotspot" id="image_hotspot">
	<span class="button_close" id="close_general" onclick="close_image_hotspot()">
		<i class="fas fa-times"></i>
	</span>
	<div class="form_image">
		<div class="row list_image">
			<div class="item_image">
				<img src="panos/1_flycam1.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>To??n c???nh 01</span>
				</div>
			</div>
			<div class="item_image">
				<img src="panos/15_nguyenlieua1.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>Khu nguy??n li???u A1</span>
				</div>
			</div>
			<div class="item_image">
				<img src="panos/2_nguyenlieua2.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>Khu nguy??n li???u A2</span>
				</div>
			</div>
			<div class="item_image">
				<img src="panos/3_nguyenlieua4.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>Khu nguy??n li???u A3</span>
				</div>
			</div>
			<div class="item_image">
				<img src="panos/13_khunguyenlieub1.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>Khu nguy??n li???u B1</span>
				</div>
			</div>
			<div class="item_image">
				<img src="panos/4_nguyenlieub6.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>Khu nguy??n li???u B2</span>
				</div>
			</div>
			<div class="item_image">
				<img src="panos/5_khusxcayduoclieu.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>Khu nh?? tr??ng b??y</span>
				</div>
			</div>
			<div class="item_image">
				<img src="panos/6_traloai1.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>Khu tr??ng b??y d?????c li???u</span>
				</div>
			</div>
			<div class="item_image">
				<img src="panos/7_traloai2.tiles/thumb.jpg" class="img-fluid img_album" alt="">
				<div class="title_image">
					<span>khu tr??ng b??y tr?? Lo???i 2</span>
				</div>
			</div>
		</div>
	</div>
</div> --}}
{{-- guide --}}
<div class="guide" id="guide">
	<span class="button_close" id="close_general" onclick="close_guide()">
		<i class="fas fa-times"></i>
	</span>
	<div class="guide_tour"  >
		<div class="title_guide">
			<h5>H?????ng d???n</h5>
		</div>
		<table>
			<tbody>
				<tr>
					<td>
						<img src="" class="img_guide"  class="img-fluid" alt="">
					</td>
					<td>
						<div class="form_guide_text">1. Click gi??? v??o ???nh r???i k??o v??? ph??a c???n xem.<br>
								   2. ????a con tr??? chu???t v??o c??c ??i???m ???????c ????nh d???u ????? xem tr?????c th??ng tin c??c ?????a ??i???m kh??c,        click v??o ????? chuy???n ?????n ?????a ??i???m t????ng ???ng<br>
								3. S??? d???ng thanh menu ph??a d?????i ????? khai th??c c??c t??nh n??ng kh??c.</div>
					</td>
				</tr>
			</tbody>
		</table>

	</div>
</div>

<script>
    var tour = {!! json_encode($tour) !!}
	var list_hotspot = {!! json_encode($list_hotspot_first) !!}
	var editor = {!! json_encode($isEditor) !!}
    var check_info = {!! json_encode($tour->infors) !!}
    var check_info_number = check_info.length;
	console.log(tour.panos);
    console.log(check_info[0].id)
</script>

@endsection