function drawGrid( plane, flg){
	if(plane=="XY"){
			
			maxV=parseFloat(gridData.yaxis[gridData.yaxis.length-1].Dimension)+(gridOffSet*2);
			maxH=parseFloat(gridData.xaxis[gridData.xaxis.length-1].Dimension)+(gridOffSet*2);
			minV = parseFloat(gridData.yaxis[0].Dimension);
			minH = parseFloat(gridData.xaxis[0].Dimension);
			drawVertiLines(gridData.xaxis,"X",plane, flg);
			drawHorizLines(gridData.yaxis,"Y",plane, undefined, false, flg);
			
	}
	else if(plane=="XZ"){
		
		maxV=parseFloat(gridData.zaxis[gridData.zaxis.length-1].Dimension)+(gridOffSet*2);
		maxH=parseFloat(gridData.xaxis[gridData.xaxis.length-1].Dimension)+(gridOffSet*2);
		minV = parseFloat(gridData.zaxis[0].Dimension);
		minH = parseFloat(gridData.xaxis[0].Dimension);
		drawVertiLines(gridData.xaxis,"X",plane, flg);
		drawHorizLines(gridData.zaxis,"Z",plane, true, true, flg);
		
	}
	else if(plane=="YZ"){
		
		maxV=parseFloat(gridData.zaxis[gridData.zaxis.length-1].Dimension)+(gridOffSet*2);
		maxH=parseFloat(gridData.yaxis[gridData.yaxis.length-1].Dimension)+(gridOffSet*2);
		minV = parseFloat(gridData.zaxis[0].Dimension);
		minH = parseFloat(gridData.yaxis[0].Dimension);
		drawVertiLines(gridData.yaxis,"Y",plane, flg);
		drawHorizLines(gridData.zaxis,"Z",plane, true, true, flg);
		
	}
}

function drawHorizLines(lineData,axis,plane, flag, elevFlag, redrawFlag)
{

	for (var i = 0; i < lineData.length; i++) 
	{
	   	var startX = minH + gridOffSet-maxH * 0.1;
		var startY=mapCoordinate( parseFloat(lineData[i].Dimension),axis,plane);
		var endX= maxH - gridOffSet + maxH * 0.1;
		var endY=mapCoordinate( parseFloat(lineData[i].
			Dimension),axis,plane);

		var line = new fabric.Line([ startX*scale - 5,startY*scale - 0.5 / canvas.getZoom(),endX*scale + 5,endY*scale - 0.5 / canvas.getZoom()],
			{id:'hLine'+i,index:i, stroke: '#c0c0c0',  strokeDashArray: [5,5, 10], strokeWidth: 1 / canvas.getZoom(),
			hasControls:false, selectable: true, lockMovementX: true, lockMovementY: true, mode: 'gridLine', type: 'hori'});
		
		if (redrawFlag == undefined || redrawFlag == false)
			canvas.add(line);

		var strLength = lineData[i].Label.toString().length === 1 ? 2 : lineData[i].Label.toString().length;
		var ircle_flg = false;
		if (elevFlag != true)
		{
			circle_flg = true;
		}
		if (!elevFlag)
		{
			var Label_left = insertTextBoxes(startX - (strLength + 1) * 15 / canvas.getZoom(), startY - 6 / scale, lineData[i].Label.toString(), false, false, false, circle_flg);
			canvas.add(Label_left);

			var Label_right = insertTextBoxes(maxH - gridOffSet + maxH * 0.1 + 15 / canvas.getZoom(), startY - 6 / scale, lineData[i].Label.toString(), false, false, false, circle_flg);
			canvas.add(Label_right);
		}

		//adding Dimension Text Boxes
		var value = "";
		if(i<lineData.length-1)
		{
			var dim = 0;
			if (flag == undefined)
			{
				value = displayDimension(lineData[i+1].g_dimension_ft, lineData[i+1].g_dimension_in, lineData[i+1].g_dimension_fra);
				dim = convertToUnit(lineData[i+1].g_dimension_ft, lineData[i+1].g_dimension_in, lineData[i+1].g_dimension_fra, "+");
			}
			else 
			{
				value = displayDimension(lineData[i+1].g_dimension_ft_tos, lineData[i+1].g_dimension_in_tos, lineData[i+1].g_dimension_fra_tos);
				dim = convertToUnit(lineData[i+1].g_dimension_ft_tos, lineData[i+1].g_dimension_in_tos, lineData[i+1].g_dimension_fra_tos, "+");
			}
			var positionY = (mapCoordinate(parseFloat(lineData[i+1].Dimension),axis, plane)+mapCoordinate(parseFloat(lineData[i].Dimension),axis,plane)) / 2;
			var dimText_left = insertTextBoxes(minH + gridOffSet - 80 / canvas.getZoom(), positionY, value.toString(), true, true, false);
			if (dimText_left.width < dim * scale * canvas.getZoom())
				canvas.add(dimText_left);

			var dimText_right = insertTextBoxes(maxH - gridOffSet + 35 / canvas.getZoom(), positionY, value.toString(), true, true, false);
			if (dimText_right.width < dim * scale * canvas.getZoom())
				canvas.add(dimText_right);
		}

		if (elevFlag == true)
		{
			if (i == 0)
				value = "0'-" + '0"';
			else 
			{
				value = displayDimension(lineData[i].dimension_ft_tos, lineData[i].dimension_in_tos, lineData[i].dimension_fra_tos);
			}
			// var elevText_left = insertTextBoxes(startX - strLength * 15 / canvas.getZoom(), startY + 6 / canvas.getZoom() / scale, value.toString(), false, true, false);
			// canvas.add(elevText_left);

			// var elevText_right = insertTextBoxes(maxH - gridOffSet + maxH * 0.1 + 15 / canvas.getZoom(), startY + 6 / canvas.getZoom() / scale, value.toString(), false, true, false);
			// canvas.add(elevText_right);

			var strLength = (lineData[i].Label + " @ Ele " + value).toString().length;

			var Label_left = insertTextBoxes(startX - (strLength + 1) * 15 / canvas.getZoom(), startY - 6 / scale, lineData[i].Label + " @ Ele " + value, false, false, false, false);
			canvas.add(Label_left);

			var Label_right = insertTextBoxes(maxH - gridOffSet + maxH * 0.1 + 15 / canvas.getZoom(), startY - 6 / scale, lineData[i].Label + " @ Ele " + value, false, false, false, false);
			canvas.add(Label_right);
		}
	}
}

function drawVertiLines(lineData,axis,plane, redrawFlag)
{
	for (var i = 0; i < lineData.length; i++) 
	{
		var startX=mapCoordinate( parseFloat(lineData[i].Dimension),axis,plane);
		var startY= gridOffSet - maxV * 0.1;
		var endX= mapCoordinate( parseFloat(lineData[i].Dimension),axis,plane);
		var endY=maxV - gridOffSet + maxV * 0.1 + Math.abs(minV);

		var line = new fabric.Line([ startX*scale - 0.5 / canvas.getZoom(), startY*scale - 5, endX * scale - 0.5 / canvas.getZoom(), endY * scale + 5],
			 {id:'vLine'+i,index:i, stroke: '#c0c0c0',  strokeDashArray: [5,5, 10], strokeWidth: 1 / canvas.getZoom(),
			 hasControls:false, selectable: true, lockMovementX: true, lockMovementY: true, mode: 'gridLine', type: 'vert'});
		if (redrawFlag == undefined || redrawFlag == false)
		 	canvas.add(line);
 
		 var Label_top = insertTextBoxes(endX, startY - 18 / scale, lineData[i].Label.toString(), false, false, true, true);
		 canvas.add(Label_top);

		 var Label_bottom = insertTextBoxes(endX, endY, lineData[i].Label.toString(), false, false, true, true);
		 canvas.add(Label_bottom);
		 
		 //adding Dimension Text Boxes
		 if(i<lineData.length-1)
		 {
			 var value;
			 value = displayDimension(lineData[i+1].g_dimension_ft, lineData[i+1].g_dimension_in, lineData[i+1].g_dimension_fra)
			 var dim = convertToUnit(lineData[i+1].g_dimension_ft, lineData[i+1].g_dimension_in, lineData[i+1].g_dimension_fra, "+");
			 var positionX = (mapCoordinate(parseFloat(lineData[i+1].Dimension),axis, plane)+mapCoordinate(parseFloat(lineData[i].Dimension),axis,plane))/2;
			 var dimText_top = insertTextBoxes(positionX, gridOffSet - 12 / scale, value.toString(), false, true, true);
			 if (dimText_top.width < dim * scale * canvas.getZoom())
			 {
			 	canvas.add(dimText_top);
			 }

			 var dimText_bottom = insertTextBoxes(positionX, maxV - gridOffSet + 12 / scale + Math.abs(minV), value.toString(), false, true, true);
			 if (dimText_bottom.width < dim * scale * canvas.getZoom())
			 	canvas.add(dimText_bottom);
		 }
	 }
	
}

function insertTextBoxes( xAxis, yAxis,value, angle, smallfont, centerAlign, circle_flg)
{
	var fontsize = 15;
	if (smallfont)
		fontsize = 11;
	var circle = new fabric.Circle(
	{
		radius: fontsize * value.length / canvas.getZoom(),
		fill: '#eef'
	});
	if (circle_flg != true)
	{
		var text = new fabric.Text(value, 
		{
			left: xAxis*scale,
			top: yAxis*scale,
			fontSize: fontsize / canvas.getZoom(),
			width: fontsize * value.length,
			height: fontsize,
			selectable: false,
			editable: false,
			mode: "axisLabel"
		});

		if (angle == true)
		{
			text.set({angle: -90});
			text.set({top: yAxis * scale + text.width / 2});
		}

		if (centerAlign)
		{
			text.set({originX: "center", originY: "center"});
		}
		return text;
	}
	else 
	{
		var text = new fabric.Text(value, 
		{
			fontSize: fontsize / canvas.getZoom(),
			originX: "center",
			originY: "center",
			textAlign: "center"
		});
		
		var circle = new fabric.Circle(
		{
			radius: text.width / 2 + 5,
			fill: "white",
			stroke: "black",
			originX: "center",
			originY: "center",
			strokeWidth: 1
		});

		var g = new fabric.Group([circle, text], 
		{
			left: xAxis * scale,
			top: yAxis * scale,
			mode: "axisLabel"
		});
		return g;
	}
}

function getGridIndex(position, Axis, plane)
{
	var index, i;
	switch (plane)
	{
		case "XY":
		{
			switch(Axis)
			{
				case "X":
					if (position < 0)
						return -1;
					if (position > parseFloat(gridData.xaxis[gridData.xaxis.length - 1].Dimension))
						return -1;
					for (i = 0; i < gridData.xaxis.length - 1; i ++)
					{
						if (parseFloat(gridData.xaxis[i].Dimension) <= position && parseFloat(gridData.xaxis[i + 1].Dimension) > position)
						{
							break;
						}
					}
					if (i == gridData.xaxis.length-1 && parseFloat(gridData.xaxis[i].Dimension) <= position)
						index = i + 1;
					else 
						index = i + 1;
				break;

				case "Y":
					if (position < 0)
						return -1;
					if (position > parseFloat(gridData.yaxis[gridData.yaxis.length - 1].Dimension))
						return -1;
					for (i = 1; i < gridData.yaxis.length; i ++)
					{
						if (parseFloat(gridData.yaxis[gridData.yaxis.length - 1].Dimension) - parseFloat(gridData.yaxis[i].Dimension) <= position && parseFloat(gridData.yaxis[gridData.yaxis.length - 1].Dimension) - parseFloat(gridData.yaxis[i - 1].Dimension) > position)
							break;
					}
					index = i;
					index = gridData.yaxis.length - index;
				break;
			}
		}
		break;

		case "YZ":
		{
			switch(Axis)
			{
				case "Y":
					if (position < 0)
						return -1;
					if (position > parseFloat(gridData.yaxis[gridData.yaxis.length - 1].Dimension))
						return -1;
					for (i = 0; i < gridData.yaxis.length - 1; i ++)
					{
						if (parseFloat(gridData.yaxis[i+1].Dimension) > position && parseFloat(gridData.yaxis[i].Dimension) <= position)
							break;
					}
					if (i == gridData.yaxis.length-1 && parseFloat(gridData.yaxis[i].Dimension) <= position)
						index = i + 1;
					else 
						index = i + 1;
				break;

				case "Z":
					if (position < 0)
						return -1;
					if (position > parseFloat(gridData.zaxis[gridData.zaxis.length - 1].Dimension))
						return -1;
					for (i = 1; i < gridData.zaxis.length; i ++)
					{
						if (parseFloat(gridData.zaxis[gridData.zaxis.length - 1].Dimension) - parseFloat(gridData.zaxis[i].Dimension) <= position && parseFloat(gridData.zaxis[gridData.zaxis.length - 1].Dimension) - parseFloat(gridData.zaxis[i - 1].Dimension) > position)
							break;
					}
					index = i;
					index = gridData.zaxis.length - index;
				break;
			}
		}
		break;

		case "XZ":
		{
			switch(Axis)
			{
				case "X":
					if (position < 0)
						return -1;
					if (position > parseFloat(gridData.xaxis[gridData.xaxis.length - 1].Dimension))
						return -1;
					for (i = 0; i < gridData.xaxis.length - 1; i ++)
					{
						if (parseFloat(gridData.xaxis[i].Dimension) <= position && parseFloat(gridData.xaxis[i + 1].Dimension) > position)
						{
							break;
						}
					}
					if (i == gridData.xaxis.length-1 && parseFloat(gridData.xaxis[i].Dimension) <= position)
						index = i + 1;
					else 
						index = i + 1;
				break;

				case "Z":
					if (position < 0)
						return -1;
					if (position > parseFloat(gridData.zaxis[gridData.zaxis.length - 1].Dimension))
						return -1;
					for (i = 1; i < gridData.zaxis.length; i ++)
					{
						if (parseFloat(gridData.zaxis[gridData.zaxis.length - 1].Dimension) - parseFloat(gridData.zaxis[i].Dimension) <= position && parseFloat(gridData.zaxis[gridData.zaxis.length - 1].Dimension) - parseFloat(gridData.zaxis[i - 1].Dimension) > position)
							break;
					}
					index = i;
					index = gridData.zaxis.length - index;
				break;
			}
		}
		break;
	}
	return index;
}

function nearestGrid(axis, pos)
{
	var index = 0;
	var min = 99999;
	var tmp = 0;
	switch (axis)
	{
		case "X":
			for (var i = 0; i < gridData.xaxis.length; i ++)
			{
				if (Math.abs(gridData.xaxis[i].Dimension - pos) < min)
				{
					min = Math.abs(gridData.xaxis[i].Dimension - pos);
					index = i;
				}
			}
		break;

		case "Y":
			pos = gridData.yaxis[gridData.yaxis.length - 1].Dimension - pos;
			for ( i = 0; i < gridData.yaxis.length; i ++ )
			{
				if (Math.abs(gridData.yaxis[i].Dimension - pos) < min)
				{
					min = Math.abs(gridData.yaxis[i].Dimension - pos);
					index = i;
				}
			}
		break;

		case "Z":
			pos = gridData.zaxis[gridData.zaxis.length - 1].Dimension - pos;
			for (i = 0; i < gridData.zaxis.length; i ++)
			{
				if (Math.abs(gridData.zaxis[i].Dimension - pos) < min)
				{
					min = Math.abs(gridData.zaxis[i].Dimension - pos);
					index = i;
				}
			}
		break;

	}
	return index;
}

function nearestGridElev(axis, pos, plane)
{
	var index = 0;
	var min = 99999;
	var tmp = 0;
	if (plane == "XZ")
	{
		switch (axis)
		{
			case "X":
				for (var i = 0; i < gridData.xaxis.length; i ++)
				{
					if (Math.abs(gridData.xaxis[i].Dimension - pos) < min)
					{
						min = Math.abs(gridData.xaxis[i].Dimension - pos);
						index = i;
					}
				}
			break;

			case "Z":
				pos = gridData.zaxis[gridData.zaxis.length - 1].Dimension - pos;
				for ( i = 0; i < gridData.zaxis.length; i ++ )
				{
					if (Math.abs(gridData.zaxis[i].Dimension - pos) < min)
					{
						min = Math.abs(gridData.zaxis[i].Dimension - pos);
						index = i;
					}
				}
			break;
		}
	}
	else if (plane == "YZ")
	{
		switch(axis)
		{
			case "Y":
				for (var i = 0; i < gridData.yaxis.length; i ++)
				{
					if (Math.abs(gridData.yaxis[i].Dimension - pos) < min)
					{
						min = Math.abs(gridData.yaxis[i].Dimension - pos);
						index = i;
					}
				}
			break;
			case "Z":
				pos = gridData.zaxis[gridData.zaxis.length - 1].Dimension - pos;
				for ( i = 0; i < gridData.zaxis.length; i ++ )
				{
					if (Math.abs(gridData.zaxis[i].Dimension - pos) < min)
					{
						min = Math.abs(gridData.zaxis[i].Dimension - pos);
						index = i;
					}
				}
			break;
		}
	}

	return index;
}

function updateMemberList(new_index, axis)
{
	if (axis == "x")
	{
		for ( var i = 0; i < memberList.length; i ++ )
		{
			if (memberList[i].startIndex)
			{
				if (memberList[i].startIndex.x_index > new_index - 1)
				{
					memberList[i].startIndex.x_index += 1;
				}
			}
		}
	}

	else 
	{
		for ( var i = 0; i < memberList.length; i ++ )
		{
			if (memberList[i].startIndex)
			{
				if (memberList[i].startIndex.y_index > new_index)
				{
					memberList[i].startIndex.y_index += 1;
				}
			}
		}
	}
}