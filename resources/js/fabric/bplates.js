
var class_BPlates 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "pourStop";
	main.parent  	 = parent;

	main.unique_id 	 = 0;
	main.grid_w 	 = 0;
	main.grid_h 	 = 0;

	main.prev_x 	 = 0;
	main.prev_y 	 = 0;
	main.gap 		 = 5;
	main.isDrawReady = 0;

	main.init 	= function()
	{
		main.grid_w  = main.parent.grid_w;
		main.grid_h  = main.parent.grid_h;

		main.pourStop = new pourStop();

		main.initEvent();
	}

	main.initEvent = function()
	{
		
	}

	main.drawPourStop = function(beamObj, data)
	{
		if (!main.isDrawReady)
		{
			return;
		}
		if ($("#viewdrpdwn").val() != 1)
		{
			$("#message_area p").html("You can't draw Pour Stop on Elevation View.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return;
		}

		var pourObj = JSON.parse(JSON.stringify(data));
		pourObj.tmpBeam_uid = beamObj.uid;
		main.drawShape(pourObj);
	}

	main.drawShape = function(pourObj)
	{
		var beamObj;
		for (var i = 0; i < memberList.length; i ++)
		{
			if (memberList[i].uid == pourObj.tmpBeam_uid)
				beamObj = memberList[i];
		}
		pourObj.maxWidth = beamObj.memberProperties.endPoint.x - beamObj.memberProperties.startPoint.x;
		pourObj.maxHeight = beamObj.memberProperties.endPoint.y - beamObj.memberProperties.startPoint.y;
		if (pourObj.pourposition == "fulllength")
		{
			pourObj.memberProperties.startPoint.x = beamObj.memberProperties.startPoint.x;
			pourObj.memberProperties.startPoint.y = beamObj.memberProperties.startPoint.y;
			pourObj.memberProperties.startPoint.z = beamObj.memberProperties.startPoint.z;

			pourObj.spacing_x = 0;
			pourObj.spacing_y = 0;

			pourObj.width = beamObj.memberProperties.endPoint.x - beamObj.memberProperties.startPoint.x;
			pourObj.height = beamObj.memberProperties.endPoint.y - beamObj.memberProperties.startPoint.y;

			pourObj.memberProperties.endPoint.x = beamObj.memberProperties.endPoint.x;
			pourObj.memberProperties.endPoint.y = beamObj.memberProperties.endPoint.y;
			pourObj.memberProperties.endPoint.z = beamObj.memberProperties.endPoint.z;
		}

		else if (pourObj.pourposition == "specificlength")
		{
			if ( beamObj.memberProperties.startPoint.x == beamObj.memberProperties.endPoint.x )
			{
				pourObj.spacing_x = 0;
				pourObj.spacing_y = convertToUnit(pourObj.position_ft, pourObj.position_in, pourObj.position_fr, "+");
				pourObj.height = convertToUnit(pourObj.length_ft, pourObj.length_in, pourObj.length_fr, "+");
				pourObj.width = 0;
				pourObj.memberProperties.startPoint.y = beamObj.memberProperties.startPoint.y + pourObj.spacing_y;
				pourObj.memberProperties.endPoint.y = pourObj.memberProperties.startPoint.y + pourObj.height;

				if (pourObj.memberProperties.endPoint.y > beamObj.memberProperties.endPoint.y)
				{
					$("#message_area p").html("You can't place Pour Stop on selected Beam.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 2000);
					return;
				}

				pourObj.memberProperties.startPoint.x = beamObj.memberProperties.startPoint.x;
				pourObj.memberProperties.startPoint.z = beamObj.memberProperties.startPoint.z;

				pourObj.memberProperties.endPoint.x = beamObj.memberProperties.endPoint.x;
				pourObj.memberProperties.endPoint.z = beamObj.memberProperties.endPoint.z;
			}
			else if (beamObj.memberProperties.startPoint.y == beamObj.memberProperties.endPoint.y)
			{
				pourObj.spacing_y = 0;
				pourObj.spacing_x = convertToUnit(pourObj.position_ft, pourObj.position_in, pourObj.position_fr, "+");
				pourObj.width = convertToUnit(pourObj.length_ft, pourObj.length_in, pourObj.length_fr, "+");
				pourObj.height = 0;

				pourObj.memberProperties.startPoint.x = beamObj.memberProperties.startPoint.x + convertToUnit(pourObj.position_ft, pourObj.position_in, pourObj.position_fr, "+");
				pourObj.memberProperties.endPoint.x = pourObj.memberProperties.startPoint.x + convertToUnit(pourObj.length_ft, pourObj.length_in, pourObj.length_fr, "+");

				if (pourObj.memberProperties.endPoint.x > beamObj.memberProperties.endPoint.x)
				{
					$("#message_area p").html("You can't place Pour Stop on selected Beam.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 2000);
					return;
				}

				pourObj.memberProperties.startPoint.y = beamObj.memberProperties.startPoint.y;
				pourObj.memberProperties.startPoint.z = beamObj.memberProperties.startPoint.z;

				pourObj.memberProperties.endPoint.y = beamObj.memberProperties.endPoint.y;
				pourObj.memberProperties.endPoint.z = beamObj.memberProperties.endPoint.z;
			}
			else 
			{
				
			}
		}

		pourObj.origin_x = beamObj.memberProperties.startPoint.x;
		pourObj.origin_y = beamObj.memberProperties.startPoint.y;

		pourObj.id = main.unique_id ++;
		pourObj.uid = "pourStop_" + pourObj.id;
		pourObj.type = "pourStop";
		pourObj.floor = floor;
		pourObj.beam = JSON.parse(JSON.stringify(beamObj));

		beamObj.pourstop = JSON.parse(JSON.stringify(pourObj));
		delete beamObj.pourstop.beam;

		canvas.discardActiveObject();

		// memberList.push(pourObj)
		dataModel.insertData(pourObj);

		main.draw(pourObj);
	}

	main.draw = function(data)
	{
		var color = "#ffa500";

		if(data.color)
			color = data.color;
		
		var plane = "XY";
		if (data.pourposition != "fulllength")
		{
			if (data.memberProperties.startPoint.x == data.memberProperties.endPoint.x)
			{
				data.spacing_y = convertToUnit(data.position_ft, data.position_in, data.position_fr, "+");
				data.height = convertToUnit(data.length_ft, data.length_in, data.length_fr, "+");
				data.memberProperties.startPoint.x = data.origin_x + data.spacing_x;
				data.memberProperties.endPoint.x = data.memberProperties.startPoint.x + data.width;

				data.memberProperties.startPoint.y = data.origin_y + data.spacing_y;
				data.memberProperties.endPoint.y = data.memberProperties.startPoint.y + data.height;
			}
			else if (data.memberProperties.startPoint.y == data.memberProperties.endPoint.y)
			{
				data.spacing_x = convertToUnit(data.position_ft, data.position_in, data.position_fr, "+");
				data.width = convertToUnit(data.length_ft, data.length_in, data.length_fr, "+");
				data.memberProperties.startPoint.x = data.origin_x + data.spacing_x;
				data.memberProperties.endPoint.x = data.memberProperties.startPoint.x + data.width;

				data.memberProperties.startPoint.y = data.origin_y + data.spacing_y;
				data.memberProperties.endPoint.y = data.memberProperties.startPoint.y + data.height;
			}
		}

		else 
		{
			data.memberProperties.startPoint.x = data.origin_x;
			data.memberProperties.endPoint.x = data.origin_x + data.maxWidth;
			data.memberProperties.startPoint.y = data.origin_y;
			data.memberProperties.endPoint.y = data.origin_y + data.maxHeight;
		}
		if (data.memberProperties.endPoint.x > data.maxWidth + data.origin_x || data.memberProperties.endPoint.y > data.maxHeight + data.origin_y)
		{
			$("#message_area p").html("You can't change Pour Stop on selected Beam.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 2000);
			return;
		}

		var startX=mapCoordinate(data.memberProperties.startPoint.x,"X",plane) * scale;
        var endX=mapCoordinate(data.memberProperties.endPoint.x,"X",plane) * scale;
        var startY=mapCoordinate(data.memberProperties.startPoint.y,"Y",plane) * scale;
        var endY=mapCoordinate(data.memberProperties.endPoint.y,"Y",plane) * scale;

        var Length = 4;

        if (data.memberProperties.orientation == "left")
        {
        	if ( startX == endX )
        	{
        		startX -= 4;
        		endX -= 4;
        	}
        	else if (startY == endY) 
        	{
        		startY -= 4;
        		endY -= 4;
        	}
        	else
        	{
        		startX += 2;
        		endX -= 4;
        		startY += 2;
        		endY -= 2;
        	}
        }
        else 
        {
        	if ( startX == endX )
        	{
        		startX += 0;
        		endX += 0;
        	}
        	else if (startY == endY) 
        	{
        		startY += 0;
        		endY += 0;
        	}
        	else
        	{
        		startX += 2;
        		endX -= 4;
        		startY -= 2;
        		endY -= 2;
        	}
        }
        
        var line = new fabric.Line(
        			[ 
        				startX, startY, endX, endY
        			],
					{
						stroke: '#ffa500',
						id: data.id, 
						strokeWidth: Length,
						hasControls: false,
						lockMovementX: false,
						lockMovementY: false, 
						memType: data.type, 
						mode: data.type, 
						uid:data.id
					});
        
		canvas.add(line);
	    stopDraggingElement(line);

		line.uid  = data.id;
		line.mode = main.mode;
		line.hasControls = false;
	}

	main.placeBplatesOnElev = function(item)
	{
		main.drawElev();
	}

	main.drawElev = function(item, plane)
	{
		var lines = [], objs = [];
		var l_width = 4;
		if (plane == "XZ")
		{
			if (parseFloat($("#depthdrpdwn").val()) != item.memberProperties.startPoint.y && parseFloat($("#depthdrpdwn").val()) != item.memberProperties.endPoint.y)
				return;
			
			var startX=mapCoordinate(item.memberProperties.startPoint.x,"X",plane);
	        var endX=mapCoordinate(item.memberProperties.endPoint.x,"X",plane);
	        var startZ=mapCoordinate(item.memberProperties.startPoint.z,"Z",plane);
	        var endZ=mapCoordinate(item.memberProperties.endPoint.z,"Z",plane);

			var line = new fabric.Line([startX*scale, startZ*scale - 4, endX*scale, endZ*scale - 4],
			{ stroke: '#ffa500', id:item.id,  strokeWidth: 4,hasControls:false, memType: item.type, mode: item.type, uid:item.id});

			line.mode = item.mode;
			line.hasControls = false;
			canvas.add(line);
			stopDraggingElement(line);
		}
		else 
		{
			if (parseFloat($("#depthdrpdwn").val()) != item.memberProperties.startPoint.x && parseFloat($("#depthdrpdwn").val()) != item.memberProperties.endPoint.x)
				return;

			var startY=mapCoordinate(item.memberProperties.startPoint.y,"Y",plane);
	        var endY=mapCoordinate(item.memberProperties.endPoint.y,"Y",plane);
	        var startZ=mapCoordinate(item.memberProperties.startPoint.z,"Z",plane);
	        var endZ=mapCoordinate(item.memberProperties.endPoint.z,"Z",plane);

			var line = new fabric.Line([startY*scale, startZ*scale - 4, endY*scale, endZ*scale - 4],
			{ stroke: '#ffa500', id:item.id,  strokeWidth: 4,hasControls:false, memType: item.type, mode: item.type, uid:item.id});

			line.mode = item.mode;
			line.hasControls = false;
			canvas.add(line);
			stopDraggingElement(line);
		}
	}

	main.placeBplates = function(item)
	{
		main.drawShape(item);
	}

	main.showHideItems = function(show)
	{
		main.parent.showHideItems(show, main.mode);
	}

	main.init();
}
