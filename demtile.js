function drawDemTile(canvas, tilePoint, zoom)
{
	var ctx = canvas.getContext('2d');

	var height = canvas.height;
	var width = canvas.width;
	
	ctx.fillStyle = "rgb(200, 0, 0)";
	ctx.fillRect(0, 0, width / 2, height / 2);
}
