'use strict'
$(document).ready(init);
function init(){
	$('.lang-block').click(()=>{
		SwitchVisibleOf('.appearable-window');
		if($('.language-text img')[0].style.transform!='rotateX(180deg)'){
			$('.language-text img')[0].style.transform='rotateX(180deg)';
		}
		else{
			$('.language-text img')[0].style.transform='rotateX(0deg)'
		}
	})
}
function SwitchVisibleOf(arg){
	if($(arg)[0].style.display=='none'){
		$(arg)[0].style.display='block';
	}
	else{
		$(arg)[0].style.display='none';
	}
}