
var class_grid_beam = function()
{
	var main = this;

	main.mode = "Beam";

	main.isDrawReady = 0;
	main.isOneDrawReady = 0;
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
				$("#message_area p").html("You can't draw Grid Beam on Elevation View.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}

			beam = new beamMember();

			var configure_beam = new_configure.gbeam;

			Object.keys(configure_beam.memberProperties).map(function(entry)
			{
				beam.memberProperties[entry] = $("#" + configure_beam.memberProperties[entry]).val();
			});

			Object.keys(configure_beam.finishProperties).map(function(entry)
			{
				beam.finishProperties[entry] = $("#" + configure_beam.finishProperties[entry]).val();
			});

			Object.keys(configure_beam.connectionProperties).map(function(entry)
			{
				beam.connectionProperties[entry] = $("#" + configure_beam.connectionProperties[entry]).val();
			});
			
			Object.keys(configure_beam).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
					beam[entry] = $("#" + configure_beam[entry]).val();
			});

			var startPoint_x = (evt.e.offsetX - gridOffSet * scale * canvas.getZoom() - pan_l) / canvas.getZoom() / scale;
			var startPoint_y = (evt.e.offsetY - gridOffSet * scale * canvas.getZoom()- pan_r) / canvas.getZoom() /scale;

			x_index = getGridIndex(startPoint_x, "X", "XY") - 1;
			y_index = getGridIndex(startPoint_y, "Y", "XY");

			y_index = gridData.yaxis.length - y_index - 1;

			if (x_index < 0 || x_index >= gridData.xaxis.length - 1)
				return;
			if (y_index < 0 || y_index >= gridData.yaxis.length - 1)
				return;

			beam.memberProperties.startPoint = new point();
			beam.memberProperties.endPoint 	 = new point();

			beam.memberProperties.startPoint.x  = gridData.xaxis[x_index].Dimension;
			beam.memberProperties.startPoint.y  = gridData.yaxis[y_index].Dimension;

			beam.memberProperties.endPoint.x  	= gridData.xaxis[x_index + 1].Dimension;
			beam.memberProperties.endPoint.y 	= gridData.yaxis[y_index + 1].Dimension;

			var floor = $("#depthdrpdwn").val();
			beam.memberProperties.startPoint.z = parseFloat(floor);
			// beam.memberProperties.startPoint.z += parseFloat(beam.tos_ft === "" ? 0 : beam.tos_ft);
			beam.memberProperties.startPoint.z += convertToUnit(beam.tos_ft, beam.tos_in, beam.tos_fr, beam.tos_sign);

			beam.memberProperties.endPoint.z = beam.memberProperties.startPoint.z;

			beam.floor = floor;

			// if ($("#ESConnectiontype").val() == "ES")
			// {
			// 	for ( var i = 1; i <= number_beam; i ++ )
			// 	{
			// 		main.drawShape(main.data, width / (number_beam + 1));
			// 	}
			// }

			main.draw(beam);
		});
	}

	main.draw 		= function(data)
	{
		var l_width = 5;

		var startX 	= mapCoordinate(data.memberProperties.startPoint.x, "X", "XY");
		var endX 	= mapCoordinate(data.memberProperties.endPoint.x, "X", "XY");

		var startY 	= mapCoordinate(data.memberProperties.startPoint.y, "Y", "XY");
		var endY 	= mapCoordinate(data.memberProperties.endPoint.y, "Y", "XY");

		var width  = Math.abs(data.memberProperties.startPoint.x - data.memberProperties.endPoint.x) * scale;
		var height = Math.abs(data.memberProperties.startPoint.y - data.memberProperties.endPoint.y);

		var number_beam = data.iBeamNumber;

		var objs = [];

		var height = Math.abs(endY - startY) * scale;

		var lines = [];

		// lines.push([width , 0, width, height]);
	    // stopDraggingElement(line);
	    if (data.memberProperties.startPoint.x == gridData.xaxis[0].Dimension)
	    {
	    	lines.push([0, 0, 0, height]);
	    }

	    if (data.memberProperties.endPoint.x == gridData.xaxis[gridData.xaxis.length - 1].Dimension)
	    {
	    	lines.push([width, 0, width, height]);
	    }

	    if (data.memberProperties.startPoint.y == gridData.yaxis[0].Dimension)  
    	{
    		lines.push([0, height, width, height]);
	    }

	    if (data.memberProperties.endPoint.y == gridData.yaxis[gridData.yaxis.length - 1].Dimension)
	    {
	    	lines.push([0, 0, width, 0]);
	    }

	    if (lines.length == 0)
	    	return;
	    for ( i = 0 ; i < lines.length; i ++ )
	    {
	    	objs.push(new fabric.Line(lines[i], 
	    	{
	    		stroke 		: '#33adff',
				id 			: data.id,
				strokeWidth : l_width,
				hasControls : false,
				lockMovementX : false,
				lockMovementY : false,
				memType 	: data.type,
				mode 		: data.type,
				uid 		: data.id
	    	}));
	    }

	    var group = new fabric.Group(objs);
	    group.uid 	= main.unique_id++;
	    if (data.memberProperties.endPoint.x == gridData.xaxis[gridData.xaxis.length - 1].Dimension && data.memberProperties.startPoint.y != gridData.yaxis[0].Dimension && data.memberProperties.endPoint.y != gridData.yaxis[gridData.yaxis.length - 1].Dimension) 
		    group.left  = endX * scale;
		else
			group.left  = startX * scale;
	    if (data.memberProperties.startPoint.y == gridData.yaxis[0].Dimension && (data.memberProperties.startPoint.x != gridData.xaxis[0].Dimension && data.memberProperties.endPoint.x != gridData.xaxis[gridData.xaxis.length - 1].Dimension)) 
	    	group.top   = startY * scale;
	    else 
	    	group.top   = endY * scale;
	    group.mode  = "periBeam";
	    group.hasControls 		= false;
		group.hasRotatingPoint 	= false;
		group.lockRotation 		= true;

		data.type  	= main.mode;
		data.mode  	= "periBeam";
        data.color 	= "#33adff";
        data.id 	= "Mem" + memId ++;
        data.uid 	= "periBeam_" + group.uid;

        if (shape.chkPosAvailable(group, group.mode))
	    {
	    	memberList.push(data);
	    	canvas.add(group);
//                dataModel.insertData("gridBeam", data);
	    }
	}

	main.drawElev = function(data, plane)
	{
		var offSet = 0;
		var l_width = 5;
		if (plane == "XZ")
		{
			if (data.memberProperties.startPoint.y != parseFloat($("#depthdrpdwn").val()))
			{
				return;
			}

			var objs = [];

			var startX 	= mapCoordinate(data.memberProperties.startPoint.x, "X", "XZ");
			var endX 	= mapCoordinate(data.memberProperties.endPoint.x, "X", "XZ");

			var startZ=mapCoordinate(data.memberProperties.startPoint.z,"Z",plane)+offSet;
        	var endZ=mapCoordinate(data.memberProperties.endPoint.z,"Z",plane)-offSet;

        	var width = Math.abs(startX - endX) * scale;
        	var number_beam = data.iBeamNumber;

        	var lines = [[width, startZ * scale, width, endZ * scale]];

        	objs.push(new fabric.Line(lines[0], 
	    	{
	    		stroke 		: '#33adff',
				id 			: data.id,
				strokeWidth : l_width,
				hasControls : false,
				lockMovementX : false,
				lockMovementY : false,
				memType 	: data.type,
				mode 		: data.type,
				uid 		: data.id
	    	}));

	    	var group = new fabric.Group(objs);
		    group.uid 	= main.unique_id++;
		    group.left  = startX * scale;
		    group.top   = endZ * scale;
		    group.mode  = "periBeam";
		    group.hasControls 		= false;
			group.hasRotatingPoint 	= false;
			group.lockRotation 		= true;

			canvas.add(group);
		}

		else 
		{
			if (data.memberProperties.startPoint.x != parseFloat($("#depthdrpdwn").val()))
			{
				return;
			}

			var objs = [];

			var startX 	= mapCoordinate(data.memberProperties.startPoint.y, "Y", "YZ");
			var endX 	= mapCoordinate(data.memberProperties.endPoint.y, "Y", "YZ");

			var startZ=mapCoordinate(data.memberProperties.startPoint.z,"Z",plane)+offSet;
        	var endZ=mapCoordinate(data.memberProperties.endPoint.z,"Z",plane)-offSet;

        	var width = Math.abs(startX - endX) * scale;
        	var height = Math.abs(endZ - startZ) * scale;
        	var number_beam = data.iBeamNumber;

        	var lines = [[0, 0, width, height]];

        	objs.push(new fabric.Line(lines[0], 
	    	{
	    		stroke 		: '#33adff',
				id 			: data.id,
				strokeWidth : l_width,
				hasControls : false,
				lockMovementX : false,
				lockMovementY : false,
				memType 	: data.type,
				mode 		: data.type,
				uid 		: data.id
	    	}));

	    	var group = new fabric.Group(objs);
		    group.uid 	= main.unique_id++;
		    group.left  = endX * scale;
		    group.top   = endZ * scale;
		    group.mode  = "periBeam";
		    group.hasControls 		= false;
			group.hasRotatingPoint 	= false;
			group.lockRotation 		= true;

			canvas.add(group);
		}
	}

	main.init();
}