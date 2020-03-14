'use strict'
$(document).ready(init);
function init(){
	$('.blog').removeClass('type-1').removeClass('type-2').removeClass('type-3').removeClass('type-4').removeClass('type-5');
	resizeImg('.widget.flickr .img-container');
	$('.main-footer .photos').height($('.main-footer .photos img').height());
	$('.widget.flickr .img-container').height($('.widget.flickr .img-container').width());
	if($(window).width()>=920){
		$('.main-footer .right-panel_block, .main-footer .pasco, .bottom-footer .social-links, .bottom-footer .social-links+p').remove();

		let blogs=$('.blog');
		for(let i = 0; i<blogs.length; i++){
			switch(i%9){
				case 0:
					blogs[i].classList.add('type-1');
					break;
				case 1:
				case 2:
				case 3:
					blogs[i].classList.add('type-2');
					break;
				case 4:
				case 5:
				case 6:
					blogs[i].classList.add('type-3');
					break;
				case 7:
				case 8:
					blogs[i].classList.add('type-4');
					break;
				default:
					continue;
			}
			if(i>=9){
				blogs[i].style.display='none';
			}
		}
		$('.more-container').click(()=>{
			$('.blogs .blog').css('display', 'flex');
			$('.more-container').hide();
		});
		$('.type-3').last().addClass('m-r0');
		$('.type-4').last().addClass('m-r0');
		$('.subscribe-field .blue-button').height($('.subscribe-field .mail').height());
		$('.subscribe-field .mail').width($('.subscribe-field').width()-$('.subscribe-field .blue-button').width()-$('.subscribe-field>span').width()-150);
		$('.type-2 .blog-top').width($('.type-2 .blog-top').first().width())
		$('.type-2 .blog-bottom').width($('.type-2').width()-$('.type-2 .blog-top').width());
		$('.right-panel_bg').width($('body').width()-$('.right-panel').offset().left+40);

		let a=[];
		$('.blogs .type-3:eq(1) .blog-top').toArray().forEach((e)=>{  
			a.push(e["offsetHeight"]);
		});
		$('.blogs .type-3 .blog-top').height(a.slice(0, 3).sort().shift());

		$('.type-4 .blog-top').height($('.type-4 .blog-top img').height());
		$('.main-footer .twitter .twitter-message').width($('.main-footer .twitter li').width()-$('.main-footer .twitter-icon').width()-20);
	}
	if($(window).width()<920){
		let tags = ['All', 'Photography', 'Lifestyle', 'Trip', 'Inspiration'];
		if(!document.querySelector('.burger-button')) $('.middle-header .main-menu').prepend('<div class="burger-button"><div class="burger-line"></div></div>');
		$('.top-header .right_border').removeClass('right_border');
		$('.sorts').html('');
		$('.sorts').append('<select class="sort"></select>');
		$('.sorts .sort').append('<option>Sort blog</option>')
		for(let i of tags) $('.sorts .sort').append('<option>'+i+'</option>');
		let flickr_imgs = $('.widget.flickr .img-container').toArray();
		if(flickr_imgs.length>4){
			for(let i = 0; i<5; i++) flickr_imgs.sort((a, b)=>{
				return Math.random()-0.5;
			}).pop().remove();
		}
		$('.main-footer .widget.pages').parent().prepend($('.right-panel .tags').parent());
		$('.main-footer .widget.pages').parent().prepend($('.right-panel .categories'));
		$('.main-footer .widget.pages').parent().prepend('<div class="widget pasco"><h3>Pasco</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, libero. Quasi facilis sapiente impedit, officia praesentium aliquid nulla. Odit quos ipsa, praesentium expedita ipsum rem repellat deleniti voluptatibus illo tempora?</p><button class="radius50">READ MORE</button></div>');
		$('.main-footer .bottom-footer').append('<div class="social-links"><a href="#" class="fa fa-facebook"></a><a href="#" class="fa fa-twitter"></a><a href="#" class="fa fa-vk"></a><a href="#" class="fa fa-pinterest"></a><a href="#" class="fa fa-tumblr"></a><a href="#" class="fa fa-dribbble"></a></div>').append('<p><span class="right_border">© 2016 PASCO</span><span>All Rights Reserved</span></p>');
		$('.top-header .login-span').removeClass('login-span');
		let blogs=$('.blog');
		for(let i = 0; i<blogs.length; i++){
			switch(i){
				case 0:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
					blogs[i].classList.add('type-1');
					break;
				case 1:
					blogs[i].classList.add('type-2');
					break;
				case 2:
				case 3:
				case 4:
				case 5:
					blogs[i].classList.add('type-3');
					break;
				default:
					continue;
			}
		}
		scrollTo(pageYOffset, 60);
	}
}
function resizeImg(imgContainer){
	for(let i=0; i<$(imgContainer).length; i++){
		if($(imgContainer+':eq('+i+') img').height()>$(imgContainer+':eq('+i+') img').width()){
			$(imgContainer+':eq('+i+') img').width('100%');
		}
		else{
			$(imgContainer+':eq('+i+') img').height('100%')
		}
	}
}
// Визуальная смена выбранного элемента
function changeSelect(path, block, selTo){
	$(path+' '+block).removeClass('selected');
	$(path+' '+selTo).addClass('selected');
}
// открытие / закрытие навигационного меню в footer
$('.menu>li').click((qq)=>{
	let number=qq['currentTarget'].attributes['name']['nodeValue'];
	if($('.menu>li:eq('+number+') .inner_menu').css('display')=='block'){
		$('.menu>li .padding').css('borderBottom', 'none');
		$('.menu>li .inner_menu').hide();
		$('.menu>li svg line').show();
	}
	else{
		$('.pages .menu>li .inner_menu').hide();
		$('.menu>li .padding').css('borderBottom', 'none');
		$('.menu>li:eq('+number+') .padding').css('borderBottom', '1px solid #999');
		$('.menu>li:eq('+number+') .inner_menu').show();
		$('.menu>li svg line').show();
		$('.menu>li:eq('+number+') svg line:nth-child(2)').hide();
	}
});