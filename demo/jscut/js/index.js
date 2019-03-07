document.onselectstart=new Function('event.returnValue=false;');
window.onload=function(){
    var boxDiv = document.getElementById('box');//外层容器
	var mainDiv=document.getElementById("main");
    var rightDiv=document.getElementById("right");
    var downDiv=document.getElementById("down");
    var leftDiv=document.getElementById("left");
    var topDiv=document.getElementById("up");
    var leftUpDiv=document.getElementById("left-up");
    var leftDownDiv=document.getElementById("left-down");
    var rightUpDiv=document.getElementById("right-up");
    var rightDownDiv=document.getElementById("right-down");
    var ifBool = false;
	var contact= "";

    $( "#main" ).draggable({ containment: 'parent' ,drag: clipChanges});
    leftUpDiv.onmousedown=function(e){
        e.stopPropagation();
        ifBool=true;
        contact="leftUpDiv";
    }
    leftDownDiv.onmousedown=function(e){
        e.stopPropagation();
        ifBool=true;
        contact="leftDownDiv";
    }
    rightUpDiv.onmousedown=function(e){
        e.stopPropagation();
        ifBool=true;
        contact="rightUpDiv";
    }
    rightDownDiv.onmousedown=function(e){
        e.stopPropagation();
        ifBool=true;
        contact="rightDownDiv";
    }
	rightDiv.onmousedown=function(e){
        e.stopPropagation();
        ifBool=true;
		contact="rightDiv";
	}
    topDiv.onmousedown=function(e){
        e.stopPropagation();
        ifBool=true;
        contact="topDiv";
    }
    downDiv.onmousedown=function(e){
        e.stopPropagation();
        ifBool=true;
        contact="downDiv";
    }
    leftDiv.onmousedown=function(e){
        e.stopPropagation();
        ifBool=true;
        contact="leftDiv";
    }
	window.onmousemove=function(e){
        e.stopPropagation();
        if(ifBool){
            switch(contact){
                case "rightDiv":moveRight(e);break;
                case "topDiv":moveTop(e);break;
                case "downDiv":moveDown(e);break;
                case "leftDiv":moveLeft(e);break;
                case "leftUpDiv":moveLeft(e);moveTop(e);break;
                case "leftDownDiv":moveLeft(e);moveDown(e);break;
                case "rightUpDiv":moveRight(e);moveTop(e);break;
                case "rightDownDiv":moveRight(e);moveDown(e);break;clipChanges();
            }
            clipChanges();
        }
	}
    window.onmouseup=function(e){
        ifBool=false;
        contact="";
    }

    clipChanges();
    function moveTop(e){
        var y = e.clientY;
        var boxTopOffset = getPosition(boxDiv).top;
        var mainTopOffset = getPosition(mainDiv).top;
        if (y<boxTopOffset) {
            y=boxTopOffset;
        }
        var heightOffset = mainTopOffset - y;
        mainDiv.style.top = mainDiv.offsetTop - heightOffset + "px";
        mainDiv.style.height = mainDiv.clientHeight + heightOffset + "px";
    }
    function moveRight(e){
        var x=e.clientX;
        var boxLeftOffset = getPosition(boxDiv).left;
        var mainLeftOffset = getPosition(mainDiv).left;
        if(x>(boxLeftOffset+boxDiv.offsetWidth)){
            x=boxLeftOffset+boxDiv.offsetWidth
        }
        mainDiv.style.width=x-mainLeftOffset-2 + "px";
    }
    function moveDown(e){
        var y = e.clientY;
        var boxTopOffset = getPosition(boxDiv).top;
        var mainTopOffset = getPosition(mainDiv).top;
        if(y>(boxTopOffset+boxDiv.offsetHeight)){
            y=boxTopOffset+boxDiv.offsetHeight;
        }
        mainDiv.style.height = y-mainTopOffset-2 + "px";
    }
    function moveLeft(e){
        var x=e.clientX;
        var boxLeftOffset = getPosition(boxDiv).left;
        var mainLeftOffset = getPosition(mainDiv).left;
        if(x<boxLeftOffset){
            x=boxLeftOffset;
        }
        var widthOffset = mainLeftOffset - x;
        mainDiv.style.left = mainDiv.offsetLeft - widthOffset + "px";
        mainDiv.style.width = mainDiv.clientWidth + widthOffset + "px";
    }
    function setPreimg(view){
        var img3=document.getElementById("img3");
        img3.style.top=-view.top+"px";
        img3.style.left=-view.left+"px";
        img3.style.clip = "rect("+view.top+"px,"+view.right+"px,"+view.bottom+"px,"+view.left+"px)";
    }
    function clipChanges(){
        var top=mainDiv.offsetTop;
        var right=mainDiv.offsetLeft+mainDiv.offsetWidth;
        var bottom=mainDiv.offsetTop+mainDiv.offsetHeight;
        var left=mainDiv.offsetLeft;
        var img2=document.getElementById("img2");
        img2.style.clip="rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
        setPreimg({"top":top,"right":right,"bottom":bottom,"left":left});
    }
    function getPosition(node){
        var left = node.offsetLeft;
        var top = node.offsetTop;
        current = node.offsetParent; // 取得元素的offsetParent
        // 一直循环直到根元素
        while (current != null) {
            left += current.offsetLeft;
            top += current.offsetTop;
            current = current.offsetParent;
        }
        return {"left":left,"top":top};
    }
}
