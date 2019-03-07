$(document).ready(function(){
    $('#fullpage').fullpage({
    	verticalCentered: false,
    	scrollingSpeed: 400,
    	resize: false,
    	continuousVertical: true,
    	menu:true,
		//navigation:true,
		//navigationPosition:"left",
		//navigationTooltips:['关于', '简介', '技能', '项目', '经验', '联系'],
    	anchors: ['page1','page2','page3','page4','page5','page6'],
        afterLoad: function(anchorLink,index){
            switch(index){
                case 1:
                    break;
                case 2:
                    break;          
                case 3:
                    break;          
                case 4:
                    break;               
                case 5:
                    break;             
                case 6:
                    break;
            }
        }
    });
});
$("#photo2").hover(function(){
	$(this).fadeTo(800,1);},function(){
	$(this).stop(true,false).fadeTo(800,0);
});