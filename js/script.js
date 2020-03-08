'use strict'


$(document).ready(init);
function init(){
	if($(window).width()>920){

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
		}
		$('.type-3').last().addClass('m-r0');
		$('.type-4').last().addClass('m-r0');
		resizeImg('.widget.flickr .img-container');
		$('.main-footer .photos').height($('.main-footer .photos img').height());
		$('.subscribe-field .blue-button').height($('.subscribe-field .mail').height());
		$('.subscribe-field .mail').width($('.subscribe-field').width()-$('.subscribe-field .blue-button').width()-$('.subscribe-field>span').width()-150);
		$('.type-2 .blog-top').width($('.type-2 .blog-top').first().width())
		$('.type-2 .blog-bottom').width($('.type-2').width()-$('.type-2 .blog-top').width());
		$('.right-panel_bg').width($('body').width()-$('.right-panel').offset().left+40);
		let a=[];
		$('.blogs .type-3 .blog-top').toArray().forEach((e)=>{  
			a.push(e["offsetHeight"]);
		});
		$('.blogs .type-3 .blog-top').height(a.sort().shift());
		a=undefined;
		$('.type-4 .blog-top').height($('.type-4 .blog-top img').height());
		$('.main-footer .twitter .twitter-message').width($('.main-footer .twitter li').width()-$('.main-footer .twitter-icon').width()-20);
		$('.widget.flickr .img-container').height($('.widget.flickr .img-container').width());
		return true
	}
	else{

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

// Смена выбранного элемента
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
window.addEventListener('resize', ()=>{
	setTimeout(init, 200)
}, false);