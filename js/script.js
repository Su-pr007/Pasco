'use strict'
$(document).ready(init);
function init(){

}
function changeSelect(path, block, selTo){
	console.log(path+' '+selTo);
	$(path+' '+block).removeClass('selected');
	$(path+' '+selTo).addClass('selected');
}