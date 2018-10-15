var class_ibox_Column 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "builtUpIColumn";
	main.parent  	 = parent;

	main.isDrawReady = 0;

	main.unique_id 	 = 0;

	main.grid_w 	 = 0;
	main.grid_h 	 = 0;

	main.member_boxColumn = new builtUpI();

	main.init 	= function()
	{
		main.grid_w  = main.parent.grid_w;
		main.grid_h  = main.parent.grid_h;

		main.initEvent();
	}

	main.initEvent = function()
	{
		canvas.on("mouse:down", function(evt)
		{
			if(!main.isDrawReady)
				return;

			if($("#viewdrpdwn").val() != 1)
			{
				$("#message_area p").html("You can't draw Box Columns on Elavation View.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}

			main.member_boxColumn = new builtUpI();

			var boxProperties = new_configure.builtup;
			Object.keys(boxProperties.memberProperties).map(function(entry)
			{
				main.member_boxColumn.memberProperties[entry] = $("#builtupcolumnModal2 #" + boxProperties.memberProperties[entry]).val();
			});

			Object.keys(boxProperties.finishProperties).map(function(entry)
			{
				if (entry != "paintType" && entry != "primerCheck")
					main.member_boxColumn.finishProperties[entry] = $("#builtupcolumnModal2 #" + boxProperties.finishProperties[entry]).val();
				else if (entry == "primerCheck")
					main.member_boxColumn.finishProperties[entry] = $("#builtupcolumnModal2 #" + boxProperties.finishProperties[entry]).prop("checked");
				else
					main.member_boxColumn.finishProperties[entry] = $("input[name='" + boxProperties.finishProperties[entry] + "']:checked").val();
			});

			Object.keys(boxProperties.connectionProperties).map(function(entry)
			{
				if (entry == "cap_check")
					main.member_boxColumn.connectionProperties[entry] = $("#builtupcolumnModal2 #" + boxProperties.connectionProperties[entry]).prop("checked");
				else
					main.member_boxColumn.connectionProperties[entry] = $("#builtupcolumnModal2 #" + boxProperties.connectionProperties[entry]).val();
			});

			Object.keys(boxProperties).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
				{
					main.member_boxColumn[entry] = $("#" + boxProperties[entry]).val();
					if (entry == "botthick_fr")
					{
						console.log($("#" + boxProperties[entry]).val());
						console.log($("#" + boxProperties[entry])[0].value)
					}
					if ($("#" + boxProperties[entry]).is(":checkbox"))
					{
						if ($("#" + boxProperties[entry]).prop("checked"))
						{
							main.member_boxColumn[entry] = "on";
						}
						else 
						{
							main.member_boxColumn[entry] = "off";
						}
					}
				}
			});

			var splice_count = parseInt(main.member_boxColumn["splice_count"]);
			main.member_boxColumn.splice_data = [];
			for ( var i = 0; i < splice_count; i ++ ) 
			{
				var splice = {};
				splice.sign = $("#builtupcolumnModal2 #splice" + (i + 1) + "PosNeg").val();
				splice.elevation_ft = $("#builtupcolumnModal2 #splice" + (i + 1) + "Ft").val();
				splice.elevation_in = $("#builtupcolumnModal2 #splice" + (i + 1) + "In").val();
				splice.elevation_fr = $("#builtupcolumnModal2 #splice" + (i + 1) + "Fr").val();

				splice.topthick_in = $("#builtupcolumnModal2 #splice" + (i + 1) + "TFPlateThicknessIn").val();
				splice.topthick_fr = $("#builtupcolumnModal2 #splice" + (i + 1) + "TFPlateThicknessFr").val();

				splice.topwidth_ft = $("#builtupcolumnModal2 #splice" + (i + 1) + "TFPlateWidthFt").val();
				splice.topwidth_in = $("#builtupcolumnModal2 #splice" + (i + 1) + "TFPlateWidthIn").val();
				splice.topwidth_fr = $("#builtupcolumnModal2 #splice" + (i + 1) + "TFPlateWidthFr").val();

				splice.botthick_in = $("#builtupcolumnModal2 #splice" + (i + 1) + "BFPlateThicknessIn").val();
				splice.botthick_fr = $("#builtupcolumnModal2 #splice" + (i + 1) + "BFPlateThicknessFr").val();

				splice.botwidth_ft = $("#builtupcolumnModal2 #splice" + (i + 1) + "BFPlateWidthFt").val();
				splice.botwidth_in = $("#builtupcolumnModal2 #splice" + (i + 1) + "BFPlateWidthIn").val();
				splice.botwidth_fr = $("#builtupcolumnModal2 #splice" + (i + 1) + "BFPlateWidthFr").val();

				splice.webthick_in = $("#builtupcolumnModal2 #splice" + (i + 1) + "WebPlateThicknessIn").val();
				splice.webthick_fr = $("#builtupcolumnModal2 #splice" + (i + 1) + "WebPlateThicknessFr").val();

				splice.webwidth_ft = $("#builtupcolumnModal2 #splice" + (i + 1) + "WebPlateWidthFt").val();
				splice.webwidth_in = $("#builtupcolumnModal2 #splice" + (i + 1) + "WebPlateWidthIn").val();
				splice.webwidth_fr = $("#builtupcolumnModal2 #splice" + (i + 1) + "WebPlateWidthFr").val();

				main.member_boxColumn.splice_data.push(splice);
			}

			main.member_boxColumn.baseElevation_ft = main.member_boxColumn.baseElevation_ft ? main.member_boxColumn.baseElevation_ft : 0;
			main.member_boxColumn.topElevation_ft  = main.member_boxColumn.topElevation_ft ? main.member_boxColumn.topElevation_ft : 0;

			var pointer = canvas.getPointer(evt.e);

			x_pos = pointer.x / scale;
			y_pos = pointer.y / scale;

			x_index = getGridIndex(x_pos, "X", "XY");
			y_index = getGridIndex(y_pos, "Y", "XY");

			if (x_pos < 0)
				x_index = 1;
			if (x_pos > gridData.xaxis[gridData.xaxis.length - 1].Dimension)
				x_index = gridData.xaxis.length - 1;

			if (y_pos < 0)
				y_index = 1;
			if (y_pos > gridData.yaxis[gridData.yaxis.length - 1].Dimension)
				y_index = gridData.yaxis.length - 1;

			if (Math.abs(gridData.xaxis[x_index - 1].Dimension - x_pos) > Math.abs(gridData.xaxis[x_index].Dimension - x_pos))
				x_index += 1;
			if (Math.abs(gridData.yaxis[y_index - 1].Dimension - y_pos) > Math.abs(gridData.yaxis[y_index].Dimension - y_pos))
				y_index += 1;

			y_index = gridData.yaxis.length - y_index;
			if(y_index < 0 || y_index >= gridData.yaxis.length)
				return;
			
			main.member_boxColumn.memberProperties.startPoint.x = gridData.xaxis[x_index - 1].Dimension;
			main.member_boxColumn.memberProperties.startPoint.y = gridData.yaxis[y_index].Dimension;
			main.member_boxColumn.memberProperties.endPoint.x = gridData.xaxis[x_index - 1].Dimension;
			main.member_boxColumn.memberProperties.endPoint.y = gridData.yaxis[y_index].Dimension;

			main.member_boxColumn.memberProperties.startPoint.z = convertToUnit(main.member_boxColumn.baseElevation_ft, main.member_boxColumn.baseElevation_in, main.member_boxColumn.baseElevation_fr, main.member_boxColumn.baseElevation_sign);
			main.member_boxColumn.memberProperties.endPoint.z = convertToUnit(main.member_boxColumn.topElevation_ft, main.member_boxColumn.topElevation_in, main.member_boxColumn.topElevation_fr, main.member_boxColumn.topElevation_sign);
			main.member_boxColumn.id = main.unique_id ++
			main.member_boxColumn.uid = "builtUpIColumn_" + main.member_boxColumn.id;
			main.member_boxColumn.type = "builtUpIColumn";
			main.member_boxColumn.floor = parseFloat($("#depthdrpdwn").val());
			if (main.drawShape(main.member_boxColumn, main.member_boxColumn.uid, "#e72f5f", main.member_boxColumn.memberProperties.startPoint.x, main.member_boxColumn.memberProperties.startPoint.y))
			{
				undoAction.addAction("memberPlace");
				memberList.push(main.member_boxColumn);
				dataModel.insertData("iColumn", main.member_boxColumn);
				
			}

		});
	}

	main.drawShape = function(data, type, color, pointX, pointY)
	{
		if (!color)
			color = 'black';
		var lines = [];
		var objs = [];
		var Length = 5;
		// var lineData = [ 
  //           { x: Length*1/3, y: 0},
  //           { x: Length*1/3, y: (0+(Length*1/3))},
  //           { x: (0+Length), y: (0+(Length*1/3))},
  //           { x: (0+Length), y: (0+Length)},
  //           { x: (0-Length), y: (0+Length)},
  //           { x: (0-Length), y: (0+(Length*1/3))},
  //           { x: (0-(Length*1/3)), y: (0+(Length*1/3))},
  //           { x: (0-(Length*1/3)), y: (0-(Length*1/3))},
  //           { x: (0-Length), y: (0-(Length*1/3))},
  //           { x: (0-Length), y: (0-Length)},
  //           { x: (0+Length), y: (0-Length)},
  //           { x: (0+Length), y: (0-(Length*1/3))},
  //           { x: (0+(Length*1/3)), y: (0-(Length*1/3))},
  //           { x: (0+(Length*1/3)), y: 0}
  //       ];
  		var pointX = mapCoordinate(data.memberProperties.startPoint.x, "X", "XY") * scale;
        var pointY= mapCoordinate(data.memberProperties.startPoint.y,"Y","XY")*scale;

     //    var metric;

	    // if (canvas.getZoom() / default_zoom > 4)
	    //     metric = 4;
	    // else if (canvas.getZoom() / default_zoom < 0.25)
	    //     metric = 0.25;
	    // else metric = 1;

	    // if (metric == 4)
	    // {
	    //     Length = 5 * 4 * default_zoom / canvas.getZoom();
	    // }

  		var lineData = [ 
            { x: pointX+Length*1/3, y: pointY},
            { x: pointX+Length*1/3, y: (pointY+(Length*1/3))},
            { x: (pointX+Length), y: (pointY+(Length*1/3))},
            { x: (pointX+Length), y: (pointY+Length)},
            { x: (pointX-Length), y: (pointY+Length)},
            { x: (pointX-Length), y: (pointY+(Length*1/3))},
            { x: (pointX-(Length*1/3)), y: (pointY+(Length*1/3))},
            { x: (pointX-(Length*1/3)), y: (pointY-(Length*1/3))},
            { x: (pointX-Length), y: (pointY-(Length*1/3))},
            { x: (pointX-Length), y: (pointY-Length)},
            { x: (pointX+Length), y: (pointY-Length)},
            { x: (pointX+Length), y: (pointY-(Length*1/3))},
            { x: (pointX+(Length*1/3)), y: (pointY-(Length*1/3))},
            { x: (pointX+(Length*1/3)), y: pointY}
        ];
        
        var group = new fabric.Polyline(lineData, 
		{
			fill: '#68f441',
			hasControls: false,
			strokeWidth: Length,
			hasRotatingPoint : false,
			lockRotation: true
		});

		group.uid  = data.id;
		group.type = main.mode;
		group.mode = main.mode;
		group.defaultX = pointX;
		group.defaultY = pointY;

		group.set({'angle': parseInt(data.memberProperties.orientation)});
		group.setPositionByOrigin({x: pointX, y: pointY}, 'center', 'center');

		if (main.parent.chkPosAvailable(group, group.mode))
		{
			canvas.add(group);
			stopDraggingElement(group);
			return true;
		}
		return false;
	}

	main.drawOnElev = function(data, plane)
	{
		var lineData, pointX, pointStartZ, pointEndZ, objs = [];
		var offset = 2;
		if (plane == "XZ")
		{
			pointY = data.memberProperties.endPoint.y;
			if (pointY != $("#depthdrpdwn").val())
				return;
			pointX 		= mapCoordinate(data.memberProperties.startPoint.x,"X",plane) * scale - 2.5;
			pointStartZ	= mapCoordinate(data.memberProperties.startPoint.z,"Z",plane) * scale;
        	pointEndZ	= mapCoordinate(data.memberProperties.endPoint.z,"Z",plane) * scale;
			var line = new fabric.Line([pointX, pointStartZ, pointX, pointEndZ],
							{
								stroke: '#68f441',
								strokeWidth: 5,
								hasControls: false,
				            	id: data.id,
				            	type:main.mode, 
				            	mode: main.mode, 
				            	uid: data.id
				            });
			canvas.add(line);
	    	stopDraggingElement(line);
		}
		else
		{
			pointY = data.memberProperties.startPoint.y;
			if (data.memberProperties.startPoint.x != $("#depthdrpdwn").val())
				return;
			var pointY= mapCoordinate(data.memberProperties.startPoint.y, "Y", plane) * scale - 2.5;
			var pointStartZ=mapCoordinate(data.memberProperties.startPoint.z,"Z",plane) * scale;
        	var pointEndZ= mapCoordinate(data.memberProperties.endPoint.z,"Z",plane) * scale;
      
        	var line = new fabric.Line([pointY, pointStartZ, pointY, pointEndZ],
							{
								stroke: '#68f441',
								strokeWidth: 5,
								hasControls: false,
				            	id: data.id,
				            	type: main.mode, 
				            	mode: main.mode, 
				            	uid: data.id
				            });
					
			canvas.add(line);
	        stopDraggingElement(line);
		}
	}

	main.draw = function(data, plane)
	{
		var to_height, from_height;
		to_height = convertToUnit(data.topElevation_ft, data.topElevation_in, data.topElevation_fr, data.topElevation_sign);
		from_height = convertToUnit(data.baseElevation_ft, data.baseElevation_in, data.baseElevation_fr, data.baseElevation_sign);
		data.memberProperties.startPoint.z = from_height;
		data.memberProperties.endPoint.z = to_height;

		if (data.originPoint == undefined)
	    {
	        data.originPoint = {x: 0, y: 0};
	        data.originPoint.x = data.memberProperties.startPoint.x;
	        data.originPoint.y = data.memberProperties.startPoint.y;
	    }

	    var offset_x = convertToUnit(data.col_offsetx_ft, data.col_offsetx_in, data.col_offsetx_fr);
	    if (data.col_offsetx_sign != "-")
	    {
	        data.memberProperties.startPoint.x = data.originPoint.x + offset_x;
	        data.memberProperties.endPoint.x = data.originPoint.x + offset_x;
	    }
	    else 
	    {
	    	data.memberProperties.startPoint.x = data.originPoint.x - offset_x;
	        data.memberProperties.endPoint.x = data.originPoint.x - offset_x;
	    }

	    var offset_y = convertToUnit(data.col_offsety_ft, data.col_offsety_in, data.col_offsety_fr);
	    if (data.col_offsety_sign != "-")
	    {
	        data.memberProperties.startPoint.y = data.originPoint.y + offset_y;
	        data.memberProperties.endPoint.y = data.originPoint.y + offset_y;
	    }
	    else 
	    {
	    	data.memberProperties.startPoint.y = data.originPoint.y - offset_y;
	        data.memberProperties.endPoint.y = data.originPoint.y - offset_y;
	    }


		if (plane != "XY")
		{
			main.drawOnElev(data, plane);
		}
		else 
		{
			main.drawShape(data, "", "#68f441", data.memberProperties.startPoint.x, data.memberProperties.startPoint.y);
		}
	}

	main.init();
}