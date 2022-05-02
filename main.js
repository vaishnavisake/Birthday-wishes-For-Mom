var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	//block_image_object;//

fabric.Image.fromURL('BirthdayImage.jpg' , function(Img){	
block_image_object  = Img;	

block_image_object.scaleToWidth(700);
block_image_object.scaleToHeight(501);
block_image_object.set({
top:25,
left:35
});
canvas.add(block_image_object);
});

}

function playsound(){
	x.play();
}