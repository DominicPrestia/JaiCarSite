var videoFile = $(".videoSpacing");
var replacedImage = $(".replacedImage")

//Sets the initial video or image depending on screen size
if($(window).width() <= 1000){
	$(replacedImage).show();
	$(videoFile).hide();
}
else{
	$(videoFile).show();
	$(replacedImage).hide();
}

//Sets image or video on the fly depending on screen size
$(window).resize(function(){ 
	if($(window).width() <= 1000){
		$(replacedImage).show();
		$(videoFile).hide();
	}
	else{
		$(videoFile).show();
		$(replacedImage).hide();
	}
})