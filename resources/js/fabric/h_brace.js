
var class_h_Braces 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "h_brace";
	main.parent  	 = parent;

	main.isDrawReady = 0;
	main.s_type 	 = null;
	main.itemArr 	 = [];

	main.prev_x 	 = 0;
	main.prev_y 	 = 0;
	main.unique_id 	 = 0;

	main.grid_w 	 = 0;
	main.grid_h 	 = 0;

	main.init 	= function()
	{
		main.grid_w  = main.parent.grid_w;
		main.grid_h  = main.parent.grid_h;

		// main.member_h_brace = new HBrace();

		main.initEvent();
	}

	main.initEvent = function()
	{
		canvas.on("mouse:down", function(evt)
		{
			if(!main.isDrawReady)
				return;
			// console.log(evt);

			if($("#viewdrpdwn").val() != 1)
			{
				$("#message_area p").html("You can't draw H Braces on Elavation View.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}

			var pointer = canvas.getPointer(evt.e);

			var x = evt.e.offsetX;
			var y = evt.e.offsetY;

			main.member_h_brace = new HBrace();

			var hbraceProperties = new_configure.hbrace;
			Object.keys(hbraceProperties.memberProperties).map(function(entry)
			{
				main.member_h_brace.memberProperties[entry] = $("#hBraceModal #" + hbraceProperties.memberProperties[entry]).val();
			});

			Object.keys(hbraceProperties.finishProperties).map(function(entry)
			{
				if (entry != "paintType" && entry != "primerCheck")
					main.member_h_brace.finishProperties[entry] = $("#hBraceModal #" + hbraceProperties.finishProperties[entry]).val();
				else if (entry == "primerCheck")
					main.member_h_brace.finishProperties[entry] = $("#hBraceModal #" + hbraceProperties.finishProperties[entry]).prop("checked");
				else
					main.member_h_brace.finishProperties[entry] = $("#hBraceModal input[name='" + hbraceProperties.finishProperties[entry] + "']:checked").val();
			});

			Object.keys(hbraceProperties.connectionProperties).map(function(entry)
			{
				// main.member_h_brace.connectionProperties[entry] = $("#hBraceModal #" + hbraceProperties.connectionProperties[entry]).val();
				var num_dot = parseInt($("#hBraceShapes").find(":selected").attr("ctbg"));
				var num_brace = parseInt($("#hBraceShapes").find(":selected").attr("ctbd"));
				main.member_h_brace.connectionProperties.dot = num_dot;
				main.member_h_brace.connectionProperties.brace = num_brace;

				if ($("#rdinclinedlacing1").prop("checked")) 
				{
					main.member_h_brace.connectionProperties.connectionGiven = true;
					main.member_h_brace.connectionProperties.connectionDesign = false;
					main.member_h_brace.connectionProperties.connGivenMark = [];

					for (var i = 0; i < num_dot; i ++)
					{
						var tmp_data = {};
						tmp_data = 
						{
							mark 		: $("#hBraceMark" + (i + 1)).val(),
							gusset 		: $("#hBraceMethodGusset" + (i + 1)).val(),
							beam 		: $("#hBraceTypeBeam" + (i + 1)).val(),
							gussetBeam 	: $("#hBraceMethodBeam" + (i + 1)).val()
						}

						main.member_h_brace.connectionProperties.connGivenMark.push(tmp_data);
					}
				}
				else 
				{
					main.member_h_brace.connectionProperties.ctbdLoad = [];
					main.member_h_brace.connectionProperties.connectionGiven = false;
					main.member_h_brace.connectionProperties.connectionDesign = true;

					for (var i= 0; i < num_brace; i ++)
					{
						var tmp_data = {};
						tmp_data = 
						{
							axial: $("#vaxialload" + (i + 1)).val()
						}
						main.member_h_brace.connectionProperties.ctbdLoad.push(tmp_data);
					}
				}
			});

			Object.keys(hbraceProperties).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
				{
					main.member_h_brace[entry] = $("#" + hbraceProperties[entry]).val();

					if ($("#" + hbraceProperties[entry]).is(":checkbox"))
					{
						if ($("#" + hbraceProperties[entry]).prop("checked"))
						{
							main.member_h_brace[entry] = "on";
						}
						else 
						{
							main.member_h_brace[entry] = "off";
						}
					}
				}
			});

			var start_x = (evt.e.offsetX - gridOffSet * scale * canvas.getZoom() - pan_l) / canvas.getZoom() / scale;
			var start_y = (evt.e.offsetY - gridOffSet * scale * canvas.getZoom()- pan_r) / canvas.getZoom() /scale;

			undoAction.addAction("memberPlace");

			main.drawShape(main.member_h_brace, main.s_type, "#222ee2", pointer.x, pointer.y);
		});
	}

	main.drawShape = function(data, type, color, x, y)
	{
		var floor = parseFloat($("#depthdrpdwn").val());
		var click_pos = {x: x / scale, y: y / scale};

		var horiBeam = getNearestBeam(click_pos, "Y", floor);
		var vertBeam = getNearestBeam(click_pos, "X", floor);

		// data.snapBeam = {hori: horiBeam, vert: vertBeam};
		if (horiBeam == -1)
			return;
		if (vertBeam == -1)
			return;

		for (var i = 0 ; i < memberList.length; i ++)
		{
			if (memberList[i].uid == horiBeam.first.mode + "_" + horiBeam.first.uid)
			{
				// data.bottomBeam = memberList[i];
				data.bottom_uid = memberList[i].uid;
			}
			if (memberList[i].uid == horiBeam.second.mode + "_" + horiBeam.second.uid)
			{
				// data.topBeam = memberList[i];
				data.top_uid = memberList[i].uid;
			}

			if (memberList[i].uid == vertBeam.first.mode + "_" + vertBeam.first.uid)
			{
				// data.leftBeam = memberList[i];
				data.left_uid = memberList[i].uid;
			}
			if (memberList[i].uid == vertBeam.second.mode + "_" + vertBeam.second.uid)
			{
				// data.rightBeam = memberList[i];
				data.right_uid = memberList[i].uid;
			}
		}

		var x_index = getGridIndex(x / scale, "X", "XY");
		var y_index = getGridIndex(y / scale, "X", "XY");
		
		x_index -= 1;
		y_index = gridData.yaxis.length - y_index - 1;

		data.startIndex.x_index = x_index;
		data.startIndex.y_index = y_index;
		data.startIndex.z_index = parseFloat($("#depthdrpdwn").val());

		var height = convertToUnit(data.Loc_ft, data.Loc_in, data.Loc_fr, "+");

		data.memberProperties.startPoint.z = parseFloat($("#depthdrpdwn").val()) - height;
		data.memberProperties.endPoint.z = parseFloat($("#depthdrpdwn").val()) - height;
		
		main.draw(data, type, color);
	}

	main.draw = function(data, type, color)
	{
		if(!color)
			color = "#222ee2";

		var height = convertToUnit(data.Loc_ft, data.Loc_in, data.Loc_fr, "+");

		data.memberProperties.startPoint.z = parseFloat($("#depthdrpdwn").val()) - height;
		data.memberProperties.endPoint.z = parseFloat($("#depthdrpdwn").val()) - height;

		var lines 	= [];
		var objs  	= [];
		var l_width = 2;
		var beam_stroke = 5;
		data.shapePoint = [];

		var offset_space= 3;

		var metric;

	    if (canvas.getZoom() / default_zoom > 4)
	        metric = 4;
	    else if (canvas.getZoom() / default_zoom < 0.25)
	        metric = 0.25;
	    else metric = 1;

	    // if (metric == 4)
	    // {
	    //     l_width = 2 * 4 * default_zoom / canvas.getZoom();
	    //     offset_space = 3 * 4 * default_zoom / canvas.getZoom();
	    // }

		var x_index = data.startIndex.x_index;
		var y_index = data.startIndex.y_index;

		var top_left, top_right, bottom_left, bottom_right, left_top, left_bottom, right_top, right_bottom;

		var t1, t2, t3, t4;

		for (var i = 0; i < memberList.length; i ++)
		{
			if (memberList[i].uid == data.top_uid)
				data.topBeam = memberList[i];
			if (memberList[i].uid == data.bottom_uid)
				data.bottomBeam = memberList[i];
			if (memberList[i].uid == data.right_uid)
				data.rightBeam = memberList[i];
			if (memberList[i].uid == data.left_uid)
				data.leftBeam = memberList[i];
		}

		if (data.topBeam == undefined || data.bottomBeam == undefined || data.rightBeam == undefined || data.leftBeam == undefined)
			return;

		top_left = {x: data.topBeam.memberProperties.startPoint.x, y: data.topBeam.memberProperties.startPoint.y};
		top_right = {x: data.topBeam.memberProperties.endPoint.x, y: data.topBeam.memberProperties.endPoint.y};
			
		bottom_left = {x: data.bottomBeam.memberProperties.startPoint.x, y: data.bottomBeam.memberProperties.startPoint.y};
		bottom_right = {x: data.bottomBeam.memberProperties.endPoint.x, y: data.bottomBeam.memberProperties.endPoint.y};

		left_top = {x: data.leftBeam.memberProperties.endPoint.x, y: data.leftBeam.memberProperties.endPoint.y};
		left_bottom = {x: data.leftBeam.memberProperties.startPoint.x, y: data.leftBeam.memberProperties.startPoint.y};

		right_top = {x: data.rightBeam.memberProperties.endPoint.x, y: data.rightBeam.memberProperties.endPoint.y};
		right_bottom = {x: data.rightBeam.memberProperties.startPoint.x, y: data.rightBeam.memberProperties.startPoint.y};

		if (isInLine(top_left, left_top, left_bottom))
			t1 = {x: top_left.x, y: top_left.y};
		else if (isInLine(left_top, top_left, top_right))
			t1 = {x: left_top.x, y: left_top.y};
		else 
			return;

		if (isInLine(bottom_left, left_top, left_bottom))
			t2 = {x: bottom_left.x, y: bottom_left.y};
		else if (isInLine(left_bottom, bottom_left, bottom_right))
			t2 = {x: left_bottom.x, y: left_bottom.y};
		else 
			return;

		if (isInLine(bottom_right, right_top, right_bottom))
			t3 = {x: bottom_right.x, y: bottom_right.y};
		else if (isInLine(right_bottom, bottom_left, bottom_right))
			t3 = {x: right_bottom.x, y: right_bottom.y};
		else
			return;

		if (isInLine(top_right, right_top, right_bottom))
			t4 = {x: top_right.x, y: top_right.y};
		else if (isInLine(right_top, top_left, top_right))
			t4 = {x: right_top.x, y: right_top.y};
		else 
			return;

		data.memberProperties.startPoint.x = t2.x;
		data.memberProperties.startPoint.y = t2.y;

		data.memberProperties.endPoint.x = t4.x;
		data.memberProperties.endPoint.y = t4.y;

		main.grid_w = Math.abs(data.memberProperties.startPoint.x - data.memberProperties.endPoint.x) * scale - beam_stroke - l_width;
		main.grid_h = Math.abs(data.memberProperties.startPoint.y - data.memberProperties.endPoint.y) * scale - beam_stroke - l_width;

		var pointZ = data.memberProperties.startPoint.z;

		var Top_left_x = mapCoordinate(t1.x, "X", "XY");
		var Top_left_y = mapCoordinate(t1.y, "Y", "XY");

		var Bottom_left_x = mapCoordinate(t2.x, "X", "XY");
		var Bottom_left_y = mapCoordinate(t2.y, "Y", "XY");

		var Top_right_x = mapCoordinate(t4.x, "X", "XY");
		var Top_right_y = mapCoordinate(t4.y, "Y", "XY");

		var Bottom_right_x = mapCoordinate(t3.x, "X", "XY");
		var Bottom_right_y = mapCoordinate(t3.y, "Y", "XY");

		switch(type)
		{
			case "hfs" :
				lines = [[Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space, Top_right_x * scale - offset_space, Top_right_y * scale + offset_space]];
				data.shapePoint.push([t2.x, t2.y, pointZ]);
				data.shapePoint.push([t4.x, t4.y, pointZ]);
			break;

			case "hbs" :
				lines = [[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]];
				data.shapePoint.push([t1.x, t1.y, pointZ]);
				data.shapePoint.push([t3.x, t3.y, pointZ]);
			break;

			case "hvs" :
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, (Bottom_left_x + Bottom_right_x) / 2 * scale, (Bottom_left_y + Bottom_right_y) / 2 * scale - offset_space],
						 	[(Bottom_left_x + Bottom_right_x) / 2 * scale, (Bottom_left_y + Bottom_right_y) / 2 * scale - offset_space, Top_right_x * scale - offset_space, Top_right_y * scale + offset_space]
						];
				data.shapePoint.push([t1.x, t1.y, pointZ]);
				data.shapePoint.push([(t2.x + t3.x) / 2, (t2.y + t3.y) / 2, pointZ]);
				data.shapePoint.push([t4.x, t4.y, pointZ]);
			break;

			case "has" :
				lines = [
							[Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space, (Top_left_x + Top_right_x) / 2 * scale, (Top_left_y + Top_right_y) / 2 * scale + offset_space], 
						 	[(Top_left_x + Top_right_x) / 2 * scale, (Top_left_y + Top_right_y) / 2 * scale + offset_space, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]
						];
				data.shapePoint.push([t2.x, t2.y, pointZ]);
				data.shapePoint.push([(t1.x + t4.x) / 2, (t1.y + t4.y) / 2, pointZ]);
				data.shapePoint.push([t3.x, t3.y, pointZ]);
			break;

			case "hws" :
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, (Bottom_left_x * 2 + Bottom_right_x) / 3 * scale, (Bottom_left_y * 2 + Bottom_right_y) / 3 * scale - offset_space], 
						 	[(Bottom_left_x * 2 + Bottom_right_x) / 3 * scale, (Bottom_left_y * 2 + Bottom_right_y) / 3 * scale - offset_space, (Top_left_x + Top_right_x) / 2 * scale, (Top_left_y + Top_right_y) / 2 * scale + offset_space], 
						 	[(Top_left_x + Top_right_x) / 2 * scale, (Top_left_y + Top_right_y) / 2 * scale + offset_space, (Bottom_left_x + Bottom_right_x * 2) / 3 * scale, (Bottom_left_y + Bottom_right_y * 2) / 3 * scale - offset_space], 
						 	[(Bottom_left_x + Bottom_right_x * 2) / 3 * scale, (Bottom_left_y + Bottom_right_y * 2) / 3 * scale - offset_space, Top_right_x * scale - offset_space, Top_right_y * scale + offset_space]
						];
				data.shapePoint.push([t1.x, t1.y, pointZ]);
				data.shapePoint.push([(t2.x * 2 + t3.x) / 3, (t2.y * 2 + t3.y) / 3, pointZ]);
				data.shapePoint.push([(t1.x + t4.x) / 2, (t1.y + t4.y) / 2, pointZ]);
				data.shapePoint.push([(t2.x + t3.x * 2) / 3, (t2.y + t3.y * 2) / 3, pointZ]);
				data.shapePoint.push([t4.x, t4.y, pointZ]);
			break;

			case "hxs" :
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space],
							[Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space, Top_right_x * scale - offset_space, Top_right_y * scale + offset_space]
						];

				data.shapePoint.push([t1.x, t1.y, pointZ]);
				data.shapePoint.push([t2.x, t2.y, pointZ]);
				data.shapePoint.push([t4.x, t4.y, pointZ]);
				data.shapePoint.push([t3.x, t3.y, pointZ]);
				var intersection_point = main.intersect(t1, t3, t2, t4);
				data.shapePoint.push([intersection_point.x, intersection_point.y, pointZ]);
			break;

			case "hms" :
				lines = [
							[Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space, (Top_left_x * 2 + Top_right_x) / 3 * scale, (Top_left_y * 2 + Top_right_y) / 3 * scale + offset_space],
							[(Top_left_x * 2 + Top_right_x) / 3 * scale, (Top_left_y * 2 + Top_right_y) / 3 * scale + offset_space, (Bottom_left_x + Bottom_right_x) / 2 * scale, (Bottom_left_y + Bottom_right_y) / 2 * scale - offset_space],
							[(Bottom_left_x + Bottom_right_x) / 2 * scale, (Bottom_left_y + Bottom_right_y) / 2 * scale - offset_space, (Top_left_x + Top_right_x * 2) / 3 * scale, (Top_left_y + Top_right_y * 2) / 3 * scale + offset_space],
							[(Top_left_x + Top_right_x * 2) / 3 * scale, (Top_left_y + Top_right_y * 2) / 3 * scale + offset_space, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]
						];
				data.shapePoint.push([t2.x, t2.y, pointZ]);
				data.shapePoint.push([(t1.x * 2 + t4.x) / 3, (t1.y * 2 + t4.y) / 3, pointZ]);
				data.shapePoint.push([(t2.x + t3.x) / 2, (t2.y + t3.y) / 2, pointZ]);
				data.shapePoint.push([(t1.x + t4.x * 2) / 3, (t1.y + t4.y * 2) / 3, pointZ]);
				data.shapePoint.push([t3.x, t3.y, pointZ]);
			break;

			case "hps" :
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, (Top_right_x + Bottom_right_x) / 2 * scale - offset_space, (Top_right_y + Bottom_right_y) / 2 * scale],
							[(Top_right_x + Bottom_right_x) / 2 * scale - offset_space, (Top_right_y + Bottom_right_y) / 2 * scale, Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space]
						];
				data.shapePoint.push([t1.x, t1.y, pointZ]);
				data.shapePoint.push([(t3.x + t4.x) / 2, (t3.y + t4.y) / 2, pointZ]);
				data.shapePoint.push([t2.x, t2.y, pointZ]);
			break;

			case "hds" :
				lines = [
							[Top_right_x * scale - offset_space, Top_right_y * scale + offset_space, (Top_left_x + Bottom_left_x) / 2 * scale + offset_space, (Top_left_y + Bottom_left_y) / 2 * scale],
							[(Top_left_x + Bottom_left_x) / 2 * scale + offset_space, (Top_left_y + Bottom_left_y) / 2 * scale, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]
						];

				data.shapePoint.push([t4.x, t4.y, pointZ]);
				data.shapePoint.push([(t1.x + t2.x) / 2, (t1.y + t2.y) / 2, pointZ]);
				data.shapePoint.push([t3.x, t3.y, pointZ]);
			break;

			case "hes" :
				lines = [
							[Top_right_x * scale - offset_space, Top_right_y * scale + offset_space, (Top_left_x * 2 + Bottom_left_x) / 3 * scale + offset_space, (Top_left_y * 2 + Bottom_left_y) / 3 * scale],
							[(Top_left_x * 2 + Bottom_left_x) / 3 * scale + offset_space, (Top_left_y * 2 + Bottom_left_y) / 3 * scale, (Top_right_x + Bottom_right_x) / 2 * scale - offset_space, (Top_right_y + Bottom_right_y) / 2 * scale],
							[(Top_right_x + Bottom_right_x) / 2 * scale - offset_space, (Top_right_y + Bottom_right_y) / 2 * scale, (Top_left_x + Bottom_left_x * 2) / 3 * scale + offset_space, (Top_left_y + Bottom_left_y * 2) / 3 * scale],
							[(Top_left_x + Bottom_left_x * 2) / 3 * scale + offset_space, (Top_left_y + Bottom_left_y * 2) / 3 * scale, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]
						];

				data.shapePoint.push([t4.x, t4.y, pointZ]);
				data.shapePoint.push([(t1.x * 2 + t2.x) / 3, (t1.y * 2 + t2.y) / 3, pointZ]);
				data.shapePoint.push([(t4.x + t3.x) / 2, (t4.y + t3.y) / 2, pointZ]);
				data.shapePoint.push([(t1.x + t2.x * 2) / 3, (t1.y + t2.y * 2) / 3, pointZ]);
				data.shapePoint.push([t3.x, t3.y, pointZ]);
			break;

			case "hves":
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, (Top_right_x * 2 + Bottom_right_x) / 3 * scale - offset_space, (Top_right_y * 2 + Bottom_right_y) / 3 * scale],
							[(Top_right_x * 2 + Bottom_right_x) / 3 * scale - offset_space, (Top_right_y * 2 + Bottom_right_y) / 3 * scale, (Top_left_x + Bottom_left_x) / 2 * scale + offset_space, (Top_left_y + Bottom_left_y) / 2 * scale], 
							[(Top_left_x + Bottom_left_x) / 2 * scale + offset_space, (Top_left_y + Bottom_left_y) / 2 * scale, (Top_right_x + Bottom_right_x * 2) / 3 * scale - offset_space, (Top_right_y + Bottom_right_y * 2) / 3 * scale],
							[(Top_right_x + Bottom_right_x * 2) / 3 * scale - offset_space, (Top_right_y + Bottom_right_y * 2) / 3 * scale, Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space]
						]

				data.shapePoint.push([t1.x, t1.y, pointZ]);
				data.shapePoint.push([(t4.x * 2 + t3.x) / 3, (t4.y * 2 + t3.y) / 3, pointZ]);
				data.shapePoint.push([(t1.x + t2.x) / 2, (t1.y + t2.y) / 2, pointZ]);
				data.shapePoint.push([(t4.x + t3.x * 2) / 3, (t4.y + t3.y * 2) / 3, pointZ]);
				data.shapePoint.push([t2.x, t2.y, pointZ]);
			break;
		}

		// main.convertYpos(data.shapePoint, data.memberProperties.startPoint.x, data.memberProperties.startPoint.y, main.grid_h / scale);

		for(var i = 0; i < lines.length; i ++)
		{
			objs.push(new fabric.Line(lines[i], 
			{
				fill 	: color,
				stroke 	: color,
				originX : 'center',
				originY : 'center',
				hasControls: false,
				strokeWidth: l_width,
				hasRotatingPoint : false,
				lockRotation: true
			}));
		}

		var group = new fabric.Group(objs);

		if (data.uid == undefined)
			group.uid  = main.unique_id ++;
		else 
			group.uid = data.uid.replace("h_brace_", "");
		group.mode = main.mode;
		group.hasControls = false;
		group.hasRotatingPoint = false;
		group.lockRotation = true;

		data.name  	= "type";
        data.type  	= main.mode;
        data.mode  	= type;
        data.color 	= color;
        data.id 	= "Mem" + memId ++;
        data.uid 	= "h_brace_" + group.uid;

        data.floor = $("#depthdrpdwn").val();

        data.top_uid = data.topBeam.uid;
        data.bottom_uid = data.bottomBeam.uid;
        data.right_uid = data.rightBeam.uid;
        data.left_uid = data.leftBeam.uid;

        delete(data.topBeam);
        delete(data.bottomBeam);
        delete(data.rightBeam);
        delete(data.leftBeam);

		if(main.parent.chkPosAvailable(group, main.mode))
		{
			memberList.push(data);
			canvas.add(group);
			stopDraggingElement(group);
                        dataModel.insertData("h_brace", data);
		}
	}

	main.convertYpos = function (data, startX, startY, height) 
	{
		for ( var i = 0; i < data.length; i ++ )
		{
			data[i][0] = startX + data[i][0];
			data[i][1] = startY + height - data[i][1];
		}
	}

	main.placeHBrace = function(item)
	{
		item.type = item.braceShape;
		main.draw(item, item.braceShape, item.color);
	}

	main.showHideItems = function(show)
	{
		main.parent.showHideItems(show, main.mode);
	}

	main.intersect 		= function(t1, t2, t3, t4)
	{
		var x, y;
		var tmp = (t1.x - t2.x) * (t3.y - t4.y) - (t1.y - t2.y) * (t3.x - t4.x);
		var x = ((t1.x * t2.y - t1.y * t2.x) * (t3.x - t4.x) - (t1.x - t2.x) * (t3.x * t4.y - t3.y * t4.x)) / tmp;
		var y = ((t1.x * t2.y - t1.y * t2.x) * (t3.y - t4.y) - (t1.y - t2.y) * (t3.x * t4.y - t3.y * t4.x)) / tmp;
		return {x: x, y: y};
	}

	main.init();
}
