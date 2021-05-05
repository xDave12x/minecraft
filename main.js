var canvas=new fabric.Canvas('myCanvas');
player_y=10;
player_x=10;
block_img_width=30;
block_img_heigth=30;
var player_object="";
var block_img_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeigth(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);

    });
}
function new_Img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeigth(block_img_heigth);
        block_img_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_img_object);

    });
}