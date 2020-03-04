'use strict'
$(document).ready(init);
function init(){
	$('.type-3').last().addClass('m-r0');
	$('.type-4').last().addClass('m-r0');
	$('.main-footer .photos').height($('.main-footer .photos img').height());
	$('.subscribe-field .mail, .subscribe-field .blue-button').height($('.subscribe-field>span').height()-34);
	$('.subscribe-field .mail').width($('.subscribe-field').width()-$('.subscribe-field .blue-button').width()-$('.subscribe-field>span').width()-150);
	$('.type-2 .blog-bottom').width($('.type-2').width()-$('.type-2 .blog-top').width());
	$('.type-3 .blog-top').height($('.type-3').height()-$('.type-3 .blog-bottom').height());
	$('.right-panel_bg').width($('body').width()-$('.right-panel').offset().left+40);
	$('.type-1 .blog-top').height($('.type-1 .blog-top img').height());
	$('.type-4 .blog-top').height($('.type-4 .blog-top img').height());
	$('.content .image').height($('.content .image').height()+20);
	$('.content .image').width($('.content .image').height());
	$('.main-footer .twitter .twitter-message').width($('.main-footer .twitter .twitter-message').width()-$('.main-footer .twitter-icon').width()-20);
	$('.widget.flickr .img-container').height($('.widget.flickr .img-container').width());
	for(let i=1; i<=$('.widget.flickr .img-container').length; i++){
		if($('.widget.flickr .img-container:nth-child('+i+') img').height()>$('.widget.flickr .img-container:nth-child('+i+') img').width()){
			$('.widget.flickr .img-container:nth-child('+i+') img').width($('.widget.flickr .img-container:nth-child('+i+')').width());
		}
		else{
			$('.widget.flickr .img-container:nth-child('+i+') img').height($('.widget.flickr .img-container:nth-child('+i+')').height())
		}
	}
	$('.main-footer .news form').on('submit', (e)=>{
		e.preventDefault();
	})
}
function changeSelect(path, block, selTo){
	$(path+' '+block).removeClass('selected');
	$(path+' '+selTo).addClass('selected');
}
// function openPagesMenu(number){
// 	if($('.menu>li:nth-child('+number+') .inner_menu').css('display')=='block'){
// 		$('.menu>li .padding').css('borderBottom', 'none');
// 		$('.menu>li .inner_menu').hide();
// 		$('.menu>li svg line').show();
// 	}
// 	else{
// 		$('.pages .menu>li .inner_menu').hide();
// 		$('.menu>li .padding').css('borderBottom', 'none');
// 		$('.menu>li:nth-child('+number+') .padding').css('borderBottom', '1px solid #999');
// 		$('.menu>li:nth-child('+number+') .inner_menu').show();
// 		$('.menu>li svg line').show();
// 		$('.menu>li:nth-child('+number+') svg line:nth-child(2)').hide();
// 	}
// }
let asd1;
$('.menu>li').click((qq)=>{
	let number=qq['currentTarget'].attributes['name']['nodeValue'];
	if($('.menu>li:nth-child('+number+') .inner_menu').css('display')=='block'){
		$('.menu>li .padding').css('borderBottom', 'none');
		$('.menu>li .inner_menu').hide();
		$('.menu>li svg line').show();
	}
	else{
		$('.pages .menu>li .inner_menu').hide();
		$('.menu>li .padding').css('borderBottom', 'none');
		$('.menu>li:nth-child('+number+') .padding').css('borderBottom', '1px solid #999');
		$('.menu>li:nth-child('+number+') .inner_menu').show();
		$('.menu>li svg line').show();
		$('.menu>li:nth-child('+number+') svg line:nth-child(2)').hide();
	}
});
