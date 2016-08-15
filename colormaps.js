var colorMapSetting = 'std';

function stdColorMap(value)
{
	var settings = [
		[   0,  45, 180, 180],
		[ 100, 113, 180,  45],
		[ 300, 180, 164,  45],
		[1000, 180,  85,  45],
		[2000, 180,  73,  27],
		[4000, 180,  61,   9]
	];
	var lower = settings[0];
	var upper = settings[0];
	
	for (var i = 1; i < settings.length; ++i) {
		var setting = settings[i];
		lower = upper;
		upper = setting;
		if (value < setting[0]) {break;}
	}
	if (value > upper[0]){
		return 'rgb(' + String(upper[1]) + ',' + String(upper[2]) + ',' + String(upper[3]) + ')';
	}
	var rate = (value - lower[0]) / (upper[0] - lower[0]);
	var r = parseInt(lower[1] * (1 - rate) + upper[1] * rate);
	var g = parseInt(lower[2] * (1 - rate) + upper[2] * rate);
	var b = parseInt(lower[3] * (1 - rate) + upper[3] * rate);
	return 'rgb(' + String(r) + ',' + String(g) + ',' + String(b) + ')';
}

function grayScaleColorMap(value)
{
	value = value / 1000 * 256;
	var intVal = parseInt(value);
	return 'rgb(' + String(intVal) + ',' + String(intVal) + ',' + String(intVal) + ')';
}

function grayScaleColorMapShallow(value)
{
	var intVal = parseInt(value);
	return 'rgb(' + String(intVal) + ',' + String(intVal) + ',' + String(intVal) + ')';
}

function colorMap(value)
{
	if (colorMapSetting == 'std'){
		return stdColorMap(value);
	} else if (colorMapSetting == 'grayscale'){
		return grayScaleColorMap(value);
	} else if (colorMapSetting == 'grayscale_shallow'){
		return grayScaleColorMapShallow(value);
	} else {
		return stdColorMap(value);
	}
}
