var class_iiibox_Column 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "builtUpCHColumn";
	main.parent  	 = parent;

	main.isDrawReady = 0;

	main.unique_id 	 = 0;

	main.grid_w 	 = 0;
	main.grid_h 	 = 0;

	main.member_boxColumn = new builtUpCH();

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

			main.member_boxColumn = new builtUpCH();

			var boxProperties = new_configure.builtupPlate;
			Object.keys(boxProperties.memberProperties).map(function(entry)
			{
				main.member_boxColumn.memberProperties[entry] = $("#builtupcolumnModal1 #" + boxProperties.memberProperties[entry]).val();
			});

			Object.keys(boxProperties.finishProperties).map(function(entry)
			{
				if (entry != "paintType" && entry != "primerCheck")
					main.member_boxColumn.finishProperties[entry] = $("#builtupcolumnModal1 #" + boxProperties.finishProperties[entry]).val();
				else if (entry == "primerCheck")
					main.member_boxColumn.finishProperties[entry] = $("#builtupcolumnModal1 #" + boxProperties.finishProperties[entry]).prop("checked");
				else
					main.member_boxColumn.finishProperties[entry] = $("input[name='" + boxProperties.finishProperties[entry] + "']:checked").val();
			});

			Object.keys(boxProperties.connectionProperties).map(function(entry)
			{
				if (entry == "cap_check")
					main.member_boxColumn.connectionProperties[entry] = $("#builtupcolumnModal1 #" + boxProperties.connectionProperties[entry]).prop("checked");
				else
					main.member_boxColumn.connectionProperties[entry] = $("#builtupcolumnModal1 #" + boxProperties.connectionProperties[entry]).val();
			});

			Object.keys(boxProperties).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
				{
					main.member_boxColumn[entry] = $("#" + boxProperties[entry]).val();
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

			main.member_boxColumn.splice_data = [];

            var splice_count = parseInt(main.member_boxColumn["splice_count"]);
            for (var i = 0; i < splice_count; i ++) {
                var splice = new spliceProperties();
                splice.sign = $("#builtupcolumnModal1 #splicee" + (i + 1) + "posneg").val();
                splice.elevation_ft = $("#builtupcolumnModal1 #splicePositionLeftEndFt" + (i + 1)).val();
                splice.elevation_in = $("#builtupcolumnModal1 #splicePositionLeftEndIn" + (i + 1)).val();
                splice.elevation_fr = $("#builtupcolumnModal1 #splicePositionLeftEndFr" + (i + 1)).val();
                splice.profile = $("#builtupcolumnModal1 #spliceel" + (i + 1) + "profile").val();
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
			main.member_boxColumn.uid = "builtUpCHColumn_" + main.member_boxColumn.id;
			main.member_boxColumn.type = "builtUpCHColumn";
			main.member_boxColumn.floor = parseFloat($("#depthdrpdwn").val());
			if (main.drawShape(main.member_boxColumn, main.s_type, "#e72f5f", main.member_boxColumn.memberProperties.startPoint.x, main.member_boxColumn.memberProperties.startPoint.y))
			{
				
				undoAction.addAction("memberPlace");
				memberList.push(main.member_boxColumn);
				//console.log(memberList);
				dataModel.insertData("channelColumn", main.member_boxColumn);
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
		var metric;

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
            [-Length, -Length, Length, -Length],
            [-Length, -Length, -Length, -Length * 0.4],
            [-Length, -Length * 0.4, -Length * 1.4, -Length * 0.5],
            [-Length * 1.4, -Length * 0.4, -Length * 1.4, Length * 0.4],
            [-Length * 1.4, Length * 0.4, -Length, Length * 0.4],
            [-Length, Length * 0.4, -Length, Length],
            [-Length, Length, Length, Length],
            [Length, Length, Length, Length * 0.4],
            [Length, Length * 0.4, Length * 1.4, Length * 0.4],
            [Length * 1.4, Length * 0.4, Length * 1.4, -Length * 0.4],
            [Length * 1.4, -Length * 0.4, Length, -Length * 0.4],
            [Length, -Length * 0.4, Length, -Length]
        ];
        
        for ( var i = 0; i < lineData.length; i ++ )
        {
	        objs.push(new fabric.Line(lineData[i], 
			{
				stroke: '#68f441',
				hasControls: false,
				strokeWidth: Length * 0.4,
				hasRotatingPoint : false,
				lockRotation: true,
				memType 	: data.type,
				mode 		: data.type,
				uid 		: data.id
			}));
	    }

	    var group = new fabric.Group(objs);

		group.uid  = data.id;
		group.left = pointX * scale + gridOffSet * scale - Length * 1.4;
		group.top = mapCoordinate(pointY, "Y", "XY") * scale - Length * 1.4;
		group.type = main.mode;
		group.mode = main.mode;
		group.defaultX = group.left + Length * 1.4;
		group.defaultY = group.top + Length * 1.4;

		group.set({'angle': parseInt(data.memberProperties.orientation)});
		group.setPositionByOrigin({x: group.left + Length * 1.4, y: group.top + Length * 1.4}, 'center', 'center');

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