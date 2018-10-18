var class_post_Column 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "postColumn";
	main.parent  	 = parent;

	main.isDrawReady = 0;

	main.unique_id 	 = 0;

	main.grid_w 	 = 0;
	main.grid_h 	 = 0;

	main.member_postColumn = new PostColumn();

	main.init 	= function()
	{
		main.grid_w  = main.parent.grid_w;
		main.grid_h  = main.parent.grid_h;

		main.initEvent();
	}

	main.initEvent = function()
	{
		
	}

	main.drawPost = function()
	{
		if($("#viewdrpdwn").val() != 1)
		{
			$("#message_area p").html("You can't draw Post Columns on Elavation View.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return;
		}

		main.member_postColumn = new PostColumn();

		var postProperties = new_configure.post;
		Object.keys(postProperties.memberProperties).map(function(entry)
		{
			main.member_postColumn.memberProperties[entry] = $("#postModal #" + postProperties.memberProperties[entry]).val();
		});

		Object.keys(postProperties.finishProperties).map(function(entry)
		{
			if (entry != "paintType" && entry != "primerCheck")
					main.member_postColumn.finishProperties[entry] = $("#postModal #" + postProperties.finishProperties[entry]).val();
				else if (entry == "primerCheck")
					main.member_postColumn.finishProperties[entry] = $("#postModal #" + postProperties.finishProperties[entry]).prop("checked");
			else 
				main.member_postColumn.finishProperties[entry] = $("input[name='" + postProperties.finishProperties[entry] + "']:checked").val();
		});

		Object.keys(postProperties.connectionProperties).map(function(entry)
		{
			main.member_postColumn.connectionProperties[entry] = $("#postModal #" + postProperties.connectionProperties[entry]).val();
		});

		Object.keys(postProperties).map(function(entry) 
		{
			if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
			{
				main.member_postColumn[entry] = $("#" + postProperties[entry]).val();
				if ($("#" + postProperties[entry]).is(":checkbox"))
				{
					if ($("#" + postProperties[entry]).prop("checked"))
					{
						main.member_postColumn[entry] = "on";
					}
					else 
					{
						main.member_postColumn[entry] = "off";
					}
				}
			}
		});

		main.member_postColumn.memberProperties.startPoint.x = parseFloat(main.member_postColumn.loc_X);
		main.member_postColumn.memberProperties.startPoint.y = parseFloat(main.member_postColumn.loc_Y);

		main.member_postColumn.memberProperties.startPoint.x += convertToUnit(main.member_postColumn.xDirection_ft, main.member_postColumn.xDirection_in, main.member_postColumn.xDirection_fr, main.member_postColumn.xDirection_sign);
		
		main.member_postColumn.memberProperties.startPoint.y += convertToUnit(main.member_postColumn.yDirection_ft, main.member_postColumn.yDirection_in, main.member_postColumn.yDirection_fr, main.member_postColumn.yDirection_sign);

		main.member_postColumn.memberProperties.startPoint.z = convertToUnit(main.member_postColumn.baseElevation_ft, main.member_postColumn.baseElevation_in, main.member_postColumn.baseElevation_fr, main.member_postColumn.baseElevation_sign)

		main.member_postColumn.memberProperties.endPoint.x = main.member_postColumn.memberProperties.startPoint.x;
		main.member_postColumn.memberProperties.endPoint.y = main.member_postColumn.memberProperties.startPoint.y;
		main.member_postColumn.memberProperties.endPoint.z = convertToUnit(main.member_postColumn.topElevation_ft, main.member_postColumn.topElevation_in, main.member_postColumn.topElevation_fr, main.member_postColumn.topElevation_sign);
		main.member_postColumn.id = increaseGUID();//main.unique_id ++
		main.member_postColumn.uid = "postColumn_" + main.member_postColumn.id;
		main.member_postColumn.type = "postColumn";
		main.member_postColumn.floor = parseFloat($("#depthdrpdwn").val());
		main.drawShape(main.member_postColumn, main.s_type, "#e72f5f", main.member_postColumn.memberProperties.startPoint.x, main.member_postColumn.memberProperties.startPoint.y);
		memberList.push(main.member_postColumn);
		dataModel.insertData("postColumn", main.member_postColumn);
	}

	main.drawShape = function(data, type, color, pointX, pointY)
	{
		if (!color)
			color = 'black';
		var lines = [];
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

		var objs = [];
		pointX = mapCoordinate(pointX, "X", "XY") * scale;
		pointY = mapCoordinate(pointY, "Y", "XY") * scale;

		var index = 0;
        for (i = 0; i < gridData.zaxis.length; i ++)
        {
            if (gridData.zaxis[i].Dimension == parseFloat($("#depthdrpdwn").val()))
            {
                index = i;
                break;
            }
        }

		if ((data.memberProperties.startPoint.z >= parseFloat($("#depthdrpdwn").val()) && data.memberProperties.startPoint.z <= gridData.zaxis[index + 1].Dimension) || (data.memberProperties.startPoint.z <= parseFloat($("#depthdrpdwn").val()) && parseFloat($("#depthdrpdwn").val()) <= data.memberProperties.endPoint.z))
        {

        }
        else 
        {
            return;
        }
        var line, lineData;

        if (data.memberProperties.profile.startsWith("W"))
        {
			lineData = [ 
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

	        line = new fabric.Polyline(lineData, 
                    {
                        fill: '#68f441',
                        hasControls: false,
                        strokeWidth: Length,
                        hasRotatingPoint : false,
                        lockRotation: true,
                        defaultX: pointX,
                        defaultY: pointY,
                        shapeType: "defaultColumn"
                    }, false);
	    }
	    else if (data.memberProperties.profile.startsWith("HSS") && data.memberProperties.profile.match(/X/gi).length == 2)
	    {
	    	line = new fabric.Rect(
            {
                width: Length * 2, 
                height: Length * 2,
                rx: Length / 2, 
                ry: Length / 2,
                stroke: '#68f441',
                strokeWidth: 2,
                hasRotatingPoint: false,
                lockRotation: true,
                fill: "white",
                shapeType: "roundRect",
                defaultX: pointX,
                defaultY: pointY
            });

            line.left = pointX - Length;
            line.top = pointY - Length;
	    }
	    else if (data.memberProperties.profile.startsWith("HSS") && data.memberProperties.profile.match(/X/gi).length == 1)
        {
            line = new fabric.Circle(
            {
                radius: Length,
                fill: "white",
                stroke: "#68f441",
                left: pointX,
                top: pointY,
                strokeWidth: 2,
                hasRotatingPoint: false,
                lockRotation: true,
                shapeType: "circle",
                defaultX: pointX,
                defaultY: pointY
            });
        }
        else if (data.memberProperties.profile.startsWith("L"))
        {
            var lineData = [
                {x: pointX - Length, y: pointY - Length},
                {x: pointX - Length, y: pointY + Length},
                {x: pointX + Length, y: pointY + Length}
            ];

            line = new fabric.Polyline(lineData, 
	            {
	                stroke: '#68f441',
	                fill: "white",
	                hasControls: false,
	                strokeWidth: 4,
	                hasRotatingPoint : false,
	                lockRotation: true,
	                defaultX: pointX,
	                defaultY: pointY
	            }, false);
        }
        else if (data.memberProperties.profile.startsWith("2L"))
        {
            var lineData = [
                {x: pointX - 2 * Length, y: pointY + Length},
                {x: pointX - 2, y: pointY + Length},
                {x: pointX - 2, y: pointY - Length}
            ];
            console.log('here');

            var subline1 = new fabric.Polyline(lineData, 
	            {
	                stroke: '#68f441',
	                fill: "white",
	                hasControls: false,
	                strokeWidth: 4,
	                hasRotatingPoint : false,
	                lockRotation: true,
	                defaultX: pointX,
	                defaultY: pointY
	            }, false);

            var lineData2 = [
                {x: pointX + 2, y: pointY - Length},
                {x: pointX + 2, y: pointY + Length},
                {x: pointX + 2 * Length, y: pointY + Length}
            ];
            var subline2 = new fabric.Polyline(lineData2, 
	            {
	                stroke: '#68f441',
	                fill: "white",
	                hasControls: false,
	                strokeWidth: 4,
	                hasRotatingPoint : false,
	                lockRotation: true,
	                defaultX: pointX,
	                defaultY: pointY
	            }, false);

            var objs = [subline1, subline2];
            var line = new fabric.Group(objs, {
            	hasControls: false,
            	hasRotatingPoint : false,
                lockRotation: true,
                defaultX: pointX,
                defaultY: pointY,
                shapeType: "double"
            })
        }

		line.uid  = data.id;
		line.type = main.mode;
		line.mode = main.mode;
		
        line.set({'angle': parseInt(data.memberProperties.orientation)});
        line.setCoords();
		line.setPositionByOrigin({x: pointX, y: pointY}, 'center', 'center');

		if (shape.chkPosAvailable(line, line.mode))
        {
            canvas.add(line);
            stopDraggingElement(line);
        }
	}

	main.drawOnElev = function(data, plane)
	{
		var lineData, pointX, pointStartZ, pointEndZ, objs = [];
		if (plane == "XZ")
		{
			pointY = data.memberProperties.endPoint.y;
			for (var i = 0; i < gridData.yaxis.length - 1; i ++)
				if (gridData.yaxis[i].Dimension <= pointY && gridData.yaxis[i + 1].Dimension > pointY && gridData.yaxis[i].Dimension == parseFloat($("#depthdrpdwn").val()))
					break;
			if (i == gridData.yaxis.length - 1)
				return;
			pointX 		= mapCoordinate(data.memberProperties.startPoint.x,"X",plane) * scale - 2.5;
			pointStartZ	= mapCoordinate(data.memberProperties.startPoint.z,"Z",plane) * scale;
        	pointEndZ	= mapCoordinate(data.memberProperties.endPoint.z,"Z",plane) * scale;
        	lineData = [
        		[0, pointStartZ, 0, pointEndZ]
        	];
        	for ( var i = 0; i < lineData.length; i ++ )
				objs.push(new fabric.Line(lineData[i], 
				{
					stroke: '#68f441',
					strokeWidth: 5,
					hasControls:false
				}));

			var group = new fabric.Group(objs);

			group.uid = data.id;
			group.left = pointX;
			group.top = pointEndZ;
			group.type = main.mode;
			group.mode = main.mode;
			canvas.add(group);
		}
		else
		{
			for (var i = 0; i < gridData.xaxis.length - 1; i ++)
				if (gridData.xaxis[i].Dimension <= data.memberProperties.startPoint.x && gridData.xaxis[i + 1].Dimension > data.memberProperties.startPoint.x && gridData.xaxis[i].Dimension == parseFloat($("#depthdrpdwn").val()))
					break;
			if (i == gridData.xaxis.length - 1)
				return;
			pointX		= mapCoordinate(data.memberProperties.startPoint.y, "Y", plane) * scale - 2.5;
			pointStartZ = mapCoordinate(data.memberProperties.startPoint.z, "Z", plane) * scale;
			pointEndZ 	= mapCoordinate(data.memberProperties.endPoint.z, "Z", plane) * scale;
			lineData = [
				[0, pointStartZ, 0, pointEndZ]
			];
			for ( var i = 0; i < lineData.length; i ++ )
				objs.push(new fabric.Line(lineData[i], 
				{
					stroke: '#68f441',
					strokeWidth: 5,
					hasControls:false
				}));

			var group = new fabric.Group(objs);

			group.uid = data.id;
			group.left = pointX;
			group.top = pointEndZ;
			group.type = main.mode;
			group.mode = main.mode;
			canvas.add(group);
		}
		stopDraggingElement(group);
	}

	main.draw = function(data, plane)
	{
		var to_height, from_height;
		to_height = convertToUnit(data.topElevation_ft, data.topElevation_in, data.topElevation_fr, data.topElevation_sign);
		from_height = convertToUnit(data.baseElevation_ft, data.baseElevation_in, data.baseElevation_fr, data.baseElevation_sign);
		data.memberProperties.startPoint.z = from_height;
		data.memberProperties.endPoint.z = to_height;

		data.memberProperties.startPoint.x = parseFloat(data.loc_X);
		data.memberProperties.startPoint.y = parseFloat(data.loc_Y);
		
		data.memberProperties.startPoint.x += convertToUnit(data.xDirection_ft, data.xDirection_in, data.xDirection_fr, data.xDirection_sign);
		data.memberProperties.startPoint.y += convertToUnit(data.yDirection_ft, data.yDirection_in, data.yDirection_fr, data.yDirection_sign);
		
		data.memberProperties.endPoint.x = data.memberProperties.startPoint.x;
		data.memberProperties.endPoint.y = data.memberProperties.startPoint.y;
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