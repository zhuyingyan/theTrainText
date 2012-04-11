function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function')
	{
		window.onload=func;
	}
	else
	{
		window.onload=function()
		{
			oldonload();
			func();
		}
	}
}
function onProductReviews(){
	var productReviews=document.getElementById("productReviews");
	var list=productReviews.getElementsByTagName("div");
	list[list.length-1].style.borderBottom="none";
}
addLoadEvent(onProductReviews);
function onFeaturedPro_list(){
	var featuredPro_list=document.getElementById("featuredPro_list");
	var list=featuredPro_list.getElementsByTagName("div");
	list[list.length-1].style.borderRight="none";
}
addLoadEvent(onFeaturedPro_list);
function onPropularPro_list(){
	var propularPro_list=document.getElementById("propularPro_list");
	var list=propularPro_list.getElementsByTagName("div");
	for(var i=0;i<list.length;i++)
	{
		if((i+1)%4==0)
		{
			list[i].style.marginRight="0";
		}
	}
}
addLoadEvent(onPropularPro_list);
function writeString(){
    var input = document.getElementById("search");
    var findTest = input.getElementsByTagName("input");
    var footer = document.getElementById("footer");
    var footerTest = footer.getElementsByTagName("input");
    var enterString = findTest.item(0);
    var footerString = footerTest.item(0);
    writeInput(enterString,"Enter Product Details.");
    writeInput(footerString,"Enter Email");
}
function writeInput(name,str)
{

    name.value = str;
    name.style.color = "#707070";
    name.onfocus=function(){
        this.value = "";
        this.style.color = "#000";
    };
    name.onblur = function () {
        this.value = str;
        this.style.color = "#707070";
    };
}
addLoadEvent(writeString);