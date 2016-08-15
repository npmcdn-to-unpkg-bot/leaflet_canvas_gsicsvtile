function openSetting()
{
	$("#ctrlbtn").hide();
	$("#ctrlpane").show();
}

function applySetting()
{
	colorMapSetting = $("input[name=colormap]:checked").val();
	
	map.removeLayer(canvasTiles);
	map.addLayer(canvasTiles);
}

function closeSetting()
{
	$("#ctrlpane").hide();
	$("#ctrlbtn").show();
}
