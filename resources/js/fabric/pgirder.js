
var class_PGirder = function()
{
	var main = this;

	main.mode = "pgirder";

	main.isDrawReady = 0;
	main.unique_id = 0;

	main.data = {};

	main.init 		= function()
	{
		main.initEvent();
	}

	main.initEvent 	= function()
	{
		canvas.on("mouse:down", function(evt)
		{
			if (!main.isDrawReady)
				return;

			if ($("#viewdrpdwn").val() != 1)
			{
				$("#message_area p").html("You can't draw Plate Girder on Elevation View.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}

			pgirderMember = new plateGirder();

			var configure_beam = new_configure.pgirder;

			Object.keys(configure_beam.memberProperties).map(function(entry)
			{
				pgirderMember.memberProperties[entry] = $("#" + configure_beam.memberProperties[entry]).val();
			});

			Object.keys(configure_beam.finishProperties).map(function(entry)
			{
				if (entry != "paintType" && entry != "primerCheck")
					pgirderMember.finishProperties[entry] = $("#" + configure_beam.finishProperties[entry]).val();
				else if (entry == "primerCheck")
					pgirderMember.finishProperties[entry] = $("#" + configure_beam.finishProperties[entry]).prop("checked");
				else 
					pgirderMember.finishProperties[entry] = $("input[name='" + configure_beam.finishProperties[entry] + "']:checked").val();
			});

			Object.keys(configure_beam.connectionProperties).map(function(entry)
			{
				pgirderMember.connectionProperties[entry] = $("#" + configure_beam.connectionProperties[entry]).val();
			});
			
			Object.keys(configure_beam).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
				{
					pgirderMember[entry] = $("#" + configure_beam[entry]).val();

					if ($("#" + configure_beam[entry]).is(":checkbox"))
					{
						if ($("#" + configure_beam[entry]).prop("checked"))
						{
							pgirderMember[entry] = "on";
						}
						else 
						{
							pgirderMember[entry] = "off";
						}
					}
				}
			});

			var pointer = canvas.getPointer(evt.e);

			var startPoint_x = pointer.x / scale;
			var startPoint_y = pointer.y /scale;

			x_index = getGridIndex(startPoint_x, "X", "XY") - 1;
			y_index = getGridIndex(startPoint_y, "Y", "XY");

			y_index = gridData.yaxis.length - y_index - 1;

			if (x_index < 0 || x_index >= gridData.xaxis.length - 1)
				return;
			if (y_index < 0 || y_index > gridData.yaxis.length - 1)
				return;

			pgirderMember.memberProperties.startPoint = new point();
			pgirderMember.memberProperties.endPoint 	 = new point();

			var floor = $("#depthdrpdwn").val();
			pgirderMember.memberProperties.startPoint.z = parseFloat(floor);
    		height = convertToUnit(pgirderMember.tos_ft, pgirderMember.tos_in, pgirderMember.tos_fr, "+");

    		pgirderMember.tos_ft1 = pgirderMember.tos_ft;
    		pgirderMember.tos_in1 = pgirderMember.tos_in;
    		pgirderMember.tos_fr1 = pgirderMember.tos_fr;

    		pgirderMember.tos_ft2 = pgirderMember.tos_ft;
    		pgirderMember.tos_in2 = pgirderMember.tos_in;
    		pgirderMember.tos_fr2 = pgirderMember.tos_fr;

			pgirderMember.memberProperties.startPoint.z = height;

			pgirderMember.memberProperties.endPoint.z = height;

			pgirderMember.floor = floor;

			var maxY = gridData.yaxis[gridData.yaxis.length - 1].Dimension;

			var min = Math.min(
							startPoint_x - gridData.xaxis[x_index].Dimension,
							gridData.xaxis[x_index + 1].Dimension - startPoint_x,
							maxY - gridData.yaxis[y_index].Dimension - startPoint_y,
							-(maxY - gridData.yaxis[y_index + 1].Dimension - startPoint_y)
							);
			

			if (min == maxY - gridData.yaxis[y_index].Dimension - startPoint_y)
			{
				pgirderMember.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
				pgirderMember.memberProperties.startPoint.y = gridData.yaxis[y_index].Dimension;

				pgirderMember.memberProperties.endPoint.x = gridData.xaxis[x_index + 1].Dimension;
				pgirderMember.memberProperties.endPoint.y = gridData.yaxis[y_index].Dimension;
			}

			else if (min == -(maxY - gridData.yaxis[y_index + 1].Dimension - startPoint_y))
			{
				pgirderMember.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
				pgirderMember.memberProperties.startPoint.y = gridData.yaxis[y_index + 1].Dimension;

				pgirderMember.memberProperties.endPoint.x = gridData.xaxis[x_index + 1].Dimension;
				pgirderMember.memberProperties.endPoint.y = gridData.yaxis[y_index + 1].Dimension;
			}

			else if (min == startPoint_x - gridData.xaxis[x_index].Dimension)
			{
				pgirderMember.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
				pgirderMember.memberProperties.startPoint.y = gridData.yaxis[y_index].Dimension;

				pgirderMember.memberProperties.endPoint.x = gridData.xaxis[x_index].Dimension;
				pgirderMember.memberProperties.endPoint.y = gridData.yaxis[y_index + 1].Dimension;
			}

			else if (min == gridData.xaxis[x_index + 1].Dimension - startPoint_x)
			{
				pgirderMember.memberProperties.startPoint.x = gridData.xaxis[x_index + 1].Dimension;
				pgirderMember.memberProperties.startPoint.y = gridData.yaxis[y_index].Dimension;

				pgirderMember.memberProperties.endPoint.x = gridData.xaxis[x_index + 1].Dimension;
				pgirderMember.memberProperties.endPoint.y = gridData.yaxis[y_index + 1].Dimension;
			}
			
			pgirderMember.x_depth = pgirderMember.memberProperties.startPoint.x;
			pgirderMember.y_depth = pgirderMember.memberProperties.startPoint.y;

			undoAction.addAction("memberPlace");

			main.draw(pgirderMember);
		});
	}

	main.draw 		= function(data)
	{
		data = main.drawPgirder(data);
		var Length = 5;
		var metric;

	    if (canvas.getZoom() / default_zoom > 4)
	        metric = 4;
	    else if (canvas.getZoom() / default_zoom < 0.25)
	        metric = 0.25;
	    else metric = 1;

	    var Length = 5;
	    // if (metric == 4)
	    // {
	    //     Length = 5 * 4 * default_zoom / canvas.getZoom();
	    // }

		var startX 	= mapCoordinate(data.memberProperties.startPoint.x, "X", "XY");
		var endX 	= mapCoordinate(data.memberProperties.endPoint.x, "X", "XY");

		var startY 	= mapCoordinate(data.memberProperties.startPoint.y, "Y", "XY");
		var endY 	= mapCoordinate(data.memberProperties.endPoint.y, "Y", "XY");

		var width  	= Math.abs(data.memberProperties.startPoint.x - data.memberProperties.endPoint.x);
		var height 	= Math.abs(data.memberProperties.startPoint.y - data.memberProperties.endPoint.y);

		var objs 	= [];
		var group
		if (startX == endX)
		{
			group = new fabric.Line([startX*scale - Length / 2,startY*scale,endX*scale - Length / 2,endY*scale],
				{
					stroke 		: '#000000',
					id 			: data.id,
					strokeWidth : Length,
					hasControls : false,
					lockMovementX : false,
					lockMovementY : false,
					memType 	: data.type,
					mode 		: data.type,
					uid 		: data.id
				});
		}
		else 
			group = new fabric.Line([startX*scale,startY*scale - Length / 2,endX*scale,endY*scale - Length / 2],
				{
					stroke 		: '#000000',
					id 			: data.id,
					strokeWidth : Length,
					hasControls : false,
					lockMovementX : false,
					lockMovementY : false,
					memType 	: data.type,
					mode 		: data.type,
					uid 		: data.id
				});

	    // group.uid 	= main.unique_id++;
	    // group.left  = startX * scale;
	    // group.top   = endY * scale;
	    group.mode  = "pgirder";
	    group.hasControls 		= false;
		group.hasRotatingPoint 	= false;
		group.lockRotation 		= true;
		group.type 	= "pgirder";

		data.type  	= main.mode;
		data.mode  	= "pgirder";
        data.color 	= "#000000";
        if (data.id == undefined)
        {
	        data.id 	= "Mem" + memId ++;
	    }
	    group.uid = data.id;
	    if (data.uid == undefined)
	    {
	    	data.uid 	= "pgirder_" + group.uid;
	    }

        group.id = data.id;

        if (!checkExistMember(data))
        {
        	// memberList.push(data);
			dataModel.insertData(data); //plateGirder
	        if (data.floor == parseFloat($("#depthdrpdwn").val()))
	        {
			    canvas.add(group);
			    stopDraggingElement(group);
			}
		}
	}

	main.drawPgirder  = function(data) 
	{
		data.memberProperties.startPoint.z = data.memberProperties.endPoint.z = convertToUnit(data.tos_ft, data.tos_in, data.tos_fr, data.tos_sign);
		if (data.origin == undefined)
	    {
	        data.origin = new Object();
	        data.origin.start_x = data.memberProperties.startPoint.x;
	        data.origin.start_y = data.memberProperties.startPoint.y;
	        data.origin.start_z = data.memberProperties.startPoint.z;

	        data.origin.end_x = data.memberProperties.endPoint.x;
	        data.origin.end_y = data.memberProperties.endPoint.y;
	        data.origin.end_z = data.memberProperties.endPoint.z;
	    }
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

	        data.memberProperties.endPoint.x = data.origin.end_x;
	        data.memberProperties.endPoint.y = data.origin.end_y;

	        data.tos_ft1 = data.tos_ft;
    		data.tos_in1 = data.tos_in;
    		data.tos_fr1 = data.tos_fr;

    		data.tos_ft2 = data.tos_ft;
    		data.tos_in2 = data.tos_in;
    		data.tos_fr2 = data.tos_fr;

    		data.tos_sign1 = data.tos_sign;
    		data.tos_sign2 = data.tos_sign;
		}

		data.floor = undefined;
		for (var i = 0; i < gridData.zaxis.length; i ++)
		{
			if (data.memberProperties.startPoint.z >= (gridData.zaxis[i].Dimension - 24) && data.memberProperties.startPoint.z <= (gridData.zaxis[i].Dimension + 24))
			{
				data.floor = gridData.zaxis[i].Dimension;
				break;
			}
		}
		if (data.id == undefined)
			data.id 	= "Mem" + memId ++;

	    return data;
	}

	main.drawElev = function(data, plane)
	{
		data = main.drawPgirder(data);
		var offSet = 0;
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

		if (plane == "XZ")
		{
			if (data.y_depth != parseFloat($("#depthdrpdwn").val()))
            	return;
	        var startX=mapCoordinate(data.memberProperties.startPoint.x,"X",plane)+offSet;
	        var endX=mapCoordinate(data.memberProperties.endPoint.x,"X",plane)-offSet;
	        var startZ=mapCoordinate(data.memberProperties.startPoint.z,"Z",plane)+offSet;
	        var endZ=mapCoordinate(data.memberProperties.endPoint.z,"Z",plane)-offSet;
	        
			var line = new fabric.Line([startX * scale, startZ * scale - (Length / 2), endX * scale, endZ * scale - (Length / 2)],
						{
							stroke: '#000000', 
							id: data.id, 
							strokeWidth: Length,
							hasControls: false, 
							memType: data.type, 
							mode: data.type, 
							uid: data.id
						});
			canvas.add(line);
	        stopDraggingElement(line);
		}

		else 
		{
			if (data.x_depth != parseFloat($("#depthdrpdwn").val()))
            	return;
	        var startY=mapCoordinate(data.memberProperties.startPoint.y,"Y",plane)+offSet;
	        var endY=mapCoordinate(data.memberProperties.endPoint.y,"Y",plane)-offSet;
	        var startZ=mapCoordinate(data.memberProperties.startPoint.z,"Z",plane)+offSet;
	        var endZ=mapCoordinate(data.memberProperties.endPoint.z,"Z",plane)-offSet;
			var line = new fabric.Line([startY * scale, startZ * scale - (Length / 2), endY * scale, endZ * scale - (Length / 2)],
								{
									stroke: '#000000', 
									id: data.id, 
									strokeWidth: Length,
									hasControls: false, 
									memType: data.type, 
									mode: data.type, 
									uid: data.id
								});
						
			canvas.add(line);
	        stopDraggingElement(line);
		}

		// data.uid 	= "pgirder_" + data.id;
	}

	main.init();
}