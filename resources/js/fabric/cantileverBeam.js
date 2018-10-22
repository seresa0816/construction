
var class_cant_Beam = function()
{
	var main = this;

	main.mode = "cantBeam";

	main.isDrawReady = 0;
	// main.unique_id = 0;

	main.data = {};

	main.length = 0;

	main.init 		= function()
	{
		main.initEvent();
	}

	main.initEvent 	= function()
	{
		
	}

	main.drawCantBeam = function(referObj, data)
	{
		if (!main.isDrawReady)
			return;

		if ($("#viewdrpdwn").val() != 1)
		{
			$("#message_area p").html("You can't draw Cantilever Beam on Elevation View.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return;
		}
		undoAction.addAction("memberPlace");

		var cantBeam = JSON.parse(JSON.stringify(data));

		main.length = convertToUnit(cantBeam.length_ft, cantBeam.length_in, cantBeam.length_fr, "+");

		if (cantBeam.connectionType == "column")
		{
			main.drawCantBeamColumn(referObj, cantBeam);
		}
		else 
		{
			main.drawCantBeamBeam(referObj, cantBeam);
		}
	}

	main.drawCantBeamColumn = function(referObj, data)
	{
		var startPoint_x = referObj.memberProperties.startPoint.x;
		var startPoint_y = referObj.memberProperties.endPoint.y;

		switch (data.direction) 
		{
			case "Left":
				data.memberProperties.startPoint.x = startPoint_x - main.length;
				data.memberProperties.startPoint.y = startPoint_y;
				data.memberProperties.endPoint.x = startPoint_x;
				data.memberProperties.endPoint.y = data.memberProperties.startPoint.y;
			break;
			case "Right":
				data.memberProperties.startPoint.x = startPoint_x;
				data.memberProperties.startPoint.y = startPoint_y;
				data.memberProperties.endPoint.x = data.memberProperties.startPoint.x + main.length;
				data.memberProperties.endPoint.y = data.memberProperties.startPoint.y;
			break;
			case "Top":
				data.memberProperties.startPoint.x = startPoint_x;
				data.memberProperties.startPoint.y = startPoint_y;
				data.memberProperties.endPoint.x = data.memberProperties.startPoint.x;
				data.memberProperties.endPoint.y = data.memberProperties.startPoint.y + main.length;
			break;
			case "Bottom":
				data.memberProperties.startPoint.x = startPoint_x;
				data.memberProperties.startPoint.y = startPoint_y - main.length;
				data.memberProperties.endPoint.x = data.memberProperties.startPoint.x;
				data.memberProperties.endPoint.y = startPoint_y;
			break;
		}

		data.memberProperties.startPoint.z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);
		data.memberProperties.endPoint.z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);
		data.id = increaseGUID();//"Mem" + memId ++;
		main.draw(data);
		reloadGrid();
	}

	main.drawCantBeamBeam = function(referObj, data)
	{
		var startPoint_x, startPoint_y;
		var distance = convertToUnit(data.distFrom_ft, data.distFrom_in, data.distFrom_fr, "+");
		if (referObj.memberProperties.startPoint.x == referObj.memberProperties.endPoint.x)
		{
			if (data.direction == "Left")
			{
				data.memberProperties.startPoint.x = referObj.memberProperties.startPoint.x - main.length;
				data.memberProperties.startPoint.y = referObj.memberProperties.startPoint.y + distance;

				data.memberProperties.endPoint.x = referObj.memberProperties.startPoint.x;
				data.memberProperties.endPoint.y = referObj.memberProperties.startPoint.y + distance;
			}
			else if (data.direction == "Right")
			{
				data.memberProperties.startPoint.x = referObj.memberProperties.startPoint.x;
				data.memberProperties.startPoint.y = referObj.memberProperties.startPoint.y + distance;

				data.memberProperties.endPoint.x = data.memberProperties.startPoint.x + main.length;
				data.memberProperties.endPoint.y = referObj.memberProperties.startPoint.y + distance;
			}
		}
		else if (referObj.memberProperties.startPoint.y == referObj.memberProperties.endPoint.y)
		{
			if (data.direction == "Left")
			{
				data.memberProperties.startPoint.x = referObj.memberProperties.startPoint.x + distance;
				data.memberProperties.startPoint.y = referObj.memberProperties.startPoint.y - main.length;

				data.memberProperties.endPoint.x = referObj.memberProperties.startPoint.x + distance;
				data.memberProperties.endPoint.y = referObj.memberProperties.startPoint.y;
			}
			else if (data.direction == "Right")
			{
				data.memberProperties.startPoint.x = referObj.memberProperties.startPoint.x + distance;
				data.memberProperties.startPoint.y = referObj.memberProperties.startPoint.y;

				data.memberProperties.endPoint.x = data.memberProperties.startPoint.x;
				data.memberProperties.endPoint.y = referObj.memberProperties.startPoint.y + main.length;
			}
		}

		data.memberProperties.startPoint.z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);
		data.memberProperties.endPoint.z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);
		data.id = increaseGUID();//"Mem" + memId ++;
		main.draw(data);
		reloadGrid();
	}

	main.draw 		= function(data)
	{
		var diff_tos = 99999;
		if (data.origin == undefined) 
		{
			data.origin = new Object();
			data.origin.start_x = data.memberProperties.startPoint.x;
	        data.origin.start_y = data.memberProperties.startPoint.y;
	        data.origin.start_z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);

	        data.origin.end_x = data.memberProperties.endPoint.x;
	        data.origin.end_y = data.memberProperties.endPoint.y;
	        data.origin.end_z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);
		}
		data.floor = undefined;

		for (var i = 0; i < gridData.zaxis.length - 1; i ++)
	    {
	        if (data.memberProperties.startPoint.z >= (gridData.zaxis[i].Dimension - 24) && (data.memberProperties.startPoint.z <= (gridData.zaxis[i].Dimension + 24)) )
	        {
	            if (Math.abs(data.memberProperties.startPoint.z - gridData.zaxis[i].Dimension) < diff_tos)
	            {
	                diff_tos = Math.abs(data.memberProperties.startPoint.z - gridData.zaxis[i].Dimension);
	                data.floor = gridData.zaxis[i].Dimension;
	            }
	        }
	    }

	    if (data.floor != parseFloat($("#depthdrpdwn").val()))
	    	return;

	    if (data.alignment == "Sloped")
	    {
	        data.memberProperties.startPoint.z = convertToUnit(data.tos_ft1, data.tos_in1, data.tos_fr1, data.tos_sign1);
	        data.memberProperties.endPoint.z = convertToUnit(data.tos_ft2, data.tos_in2, data.tos_fr2, data.tos_sign2);
	    }
	    else if (data.alignment == "Skewed")
	    {
	        data.memberProperties.startPoint.x = data.origin.start_x + convertToUnit(data.left_x_ft, data.left_x_in, data.left_x_fr, data.left_x_sign);
	        data.memberProperties.startPoint.y = data.origin.start_y + convertToUnit(data.left_y_ft, data.left_y_in, data.left_y_fr, data.left_y_sign);
	        data.memberProperties.endPoint.x = data.origin.end_x + convertToUnit(data.right_x_ft, data.right_x_in, data.right_x_fr, data.right_x_sign);
	        data.memberProperties.endPoint.y = data.origin.end_y + convertToUnit(data.right_y_ft, data.right_y_in, data.right_y_fr, data.right_y_sign);
	    }
	    else if (data.alignment == "Sloped & Skewed")
	    {
	        data.memberProperties.startPoint.x = data.origin.start_x + convertToUnit(data.left_x_ft, data.left_x_in, data.left_x_fr, data.left_x_sign);
	        data.memberProperties.startPoint.y = data.origin.start_y + convertToUnit(data.left_y_ft, data.left_y_in, data.left_y_fr, data.left_y_sign);
	        data.memberProperties.endPoint.x = data.origin.end_x + convertToUnit(data.right_x_ft, data.right_x_in, data.right_x_fr, data.right_x_sign);
	        data.memberProperties.endPoint.y = data.origin.end_y + convertToUnit(data.right_y_ft, data.right_y_in, data.right_y_fr, data.right_y_sign);
	        data.memberProperties.startPoint.z = convertToUnit(data.tos_ft1, data.tos_in1, data.tos_fr1, data.tos_sign1);
	        data.memberProperties.endPoint.z = convertToUnit(data.tos_ft2, data.tos_in2, data.tos_fr2, data.tos_sign2);
	    }
	    else 
	    {
	        data.memberProperties.startPoint.x = data.origin.start_x;
	        data.memberProperties.startPoint.y = data.origin.start_y;
	        data.memberProperties.startPoint.z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);

	        data.memberProperties.endPoint.x = data.origin.end_x;
	        data.memberProperties.endPoint.y = data.origin.end_y;
	        data.memberProperties.endPoint.z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);

	        data.tos_ft1 = data.tos_ft;
	        data.tos_in1 = data.tos_in;
	        data.tos_fr1 = data.tos_fr;

	        data.tos_ft2 = data.tos_ft;
	        data.tos_in2 = data.tos_in;
	        data.tos_fr2 = data.tos_fr;

	        data.tos_sign1 = data.tos_sign
	        data.tos_sign2 = data.tos_sign;
	    }

		var l_width = 3;

		var startX 	= mapCoordinate(data.memberProperties.startPoint.x, "X", "XY");
		var endX 	= mapCoordinate(data.memberProperties.endPoint.x, "X", "XY");

		var startY 	= mapCoordinate(data.memberProperties.startPoint.y, "Y", "XY");
		var endY 	= mapCoordinate(data.memberProperties.endPoint.y, "Y", "XY");

		var line;
		
		var Length = 5;
		var metric;

	    if (canvas.getZoom() / default_zoom > 4)
	        metric = 4;
	    else if (canvas.getZoom() / default_zoom < 0.25)
	        metric = 0.25;
	    else metric = 1;

	    // if (metric == 4)
	    // {
	    //     Length = 5 * 4 * default_zoom / canvas.getZoom();
	    // }

        if (startX == endX)
            line = new fabric.Line([startX * scale - Length / 2, startY * scale, endX * scale - Length / 2, endY * scale], 
                {
                    stroke: '#000000',
                    id: data.id, 
                    strokeWidth: Length,
                    hasControls: false, 
                    memType: "cantBeam", 
                    mode: "cantBeam", 
                    uid: data.id, 
                    tos: data.memberProperties.startPoint.z
                });
        else if (startY == endY)
            line = new fabric.Line([startX * scale, startY * scale - Length / 2, endX * scale, endY * scale - Length / 2],
                {
                    stroke: '#000000',
                    id: data.id, 
                    strokeWidth: Length,
                    hasControls: false,
                    memType: "cantBeam", 
                    mode: "cantBeam", 
                    uid: data.id, 
                    tos: data.memberProperties.startPoint.z
                }); 
		else 
            line = new fabric.Line([startX * scale - Length / 2, startY * scale - Length / 2, endX * scale - Length / 2, endY * scale - Length / 2],
                {
                    stroke: '#000000',
                    id: data.id, 
                    strokeWidth: Length,
                    hasControls: false,
                    memType: "cantBeam", 
                    mode: "cantBeam", 
                    uid: data.id, 
                    tos: data.memberProperties.startPoint.z
                });

        data.type  	= main.mode;
		data.mode  	= "cantBeam";
        data.color 	= "#000000";
        data.uid 	= "cantBeam_" + line.uid;

        // if (shape.chkPosAvailable(line, line.mode))
	    if (shape.chkPossibleBeam(line))
	    {
			// memberList.push(data);
			dataModel.insertData(data);//canteBeam
			canvas.add(line);
			stopDraggingElement(line);
	    }
	}

	main.drawElev = function(data, plane)
	{
		var Length = 5;
		var line;
		if (plane == "XZ")
		{
			if (data.memberProperties.startPoint.y != parseFloat($("#depthdrpdwn").val()))
				return;

			var startX 	= mapCoordinate(data.memberProperties.startPoint.x, "X", "XZ");
			var endX 	= mapCoordinate(data.memberProperties.endPoint.x, "X", "XZ");
			var startY 	= mapCoordinate(data.memberProperties.startPoint.z, "Z", "XZ");
			var endY 	= mapCoordinate(data.memberProperties.endPoint.z, "Z", "XZ");

			line = new fabric.Line([startX * scale, startY * scale - Length / 2, endX * scale, endY * scale - Length / 2],
				{
					stroke: "#000000",
					id: data.id,
					strokeWidth: Length, 
					hasControls: false,
					lockMovementX: false,
					lockMovementY: false,
					memType: "cantBeam",
					mode: "cantBeam",
					uid: data.id
				});
		}
		else if (plane == "YZ")
		{
			if (data.memberProperties.startPoint.x != parseFloat($("#depthdrpdwn").val()))
				return;

			var startX 	= mapCoordinate(data.memberProperties.startPoint.y, "Y", "YZ");
			var endX 	= mapCoordinate(data.memberProperties.endPoint.y, "Y", "YZ");
			var startY 	= mapCoordinate(data.memberProperties.startPoint.z, "Z", "YZ");
			var endY 	= mapCoordinate(data.memberProperties.endPoint.z, "Z", "YZ");

			line = new fabric.Line([startX * scale, startY * scale - Length / 2, endX * scale, endY * scale - Length / 2], 
				{
					stroke: "#000000",
					id: data.id,
					strokeWidth: Length,
					hasControls: false,
					lockMovementX: false,
					lockMovementY: false,
					memType: "cantBeam",
					mode: "cantBeam",
					uid: data.id
				});
		}

		data.type = main.mode;
		data.mode = main.mode;
		data.id = increaseGUID();//"Mem" + memId ++;
		data.uid = "cantBeam_" + line.uid;

		if (shape.chkPosAvailable(line, line.mode))
		{
			canvas.add(line);
		}
	}

	main.init();
}