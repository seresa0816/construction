
var class_v_Braces 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "v_brace";
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

		main.member_v_brace = new VBrace();

		main.initEvent();
	}

	main.initEvent = function()
	{
		canvas.on("mouse:down", function(evt)
		{
			if(!main.isDrawReady)
				return;

			if($("#viewdrpdwn").val() == 1)
			{
				$("#message_area p").html("You can't draw V Braces on Plan View.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}

			main.member_v_brace = new VBrace();
			var vbraceProperties = new_configure.vbrace;
			Object.keys(vbraceProperties.memberProperties).map(function(entry)
			{
				main.member_v_brace.memberProperties[entry] = $("#vBraceModal #" + vbraceProperties.memberProperties[entry]).val();
			});

			Object.keys(vbraceProperties.finishProperties).map(function(entry)
			{
				if (entry != "paintType" && entry != "primerCheck")
					main.member_v_brace.finishProperties[entry] = $("#vBraceModal #" + vbraceProperties.finishProperties[entry]).val();
				else if (entry == "primerCheck")
					main.member_v_brace.finishProperties[entry] = $("#vBraceModal #" + vbraceProperties.finishProperties[entry]).prop("checked");
				else 
					main.member_v_brace.finishProperties[entry] = $("#vBraceModal input[name='" + vbraceProperties.finishProperties[entry] + "']:checked").val();
			});

			Object.keys(vbraceProperties.connectionProperties).map(function(entry)
			{
				main.member_v_brace.connectionProperties[entry] = $("#vBraceModal #" + vbraceProperties.connectionProperties[entry]).val();
				var num_dot = $("#vBraceShapes").find(":selected").attr("ctbg");
				var num_brace = $("#vBraceShapes").find(":selected").attr("ctbd");
				main.member_v_brace.connectionProperties.dot = num_dot;
				main.member_v_brace.connectionProperties.brace = num_brace;

				if ($("#rdinclinedlacing1").prop("checked"))
				{
					main.member_v_brace.connectionProperties.connectionGiven = true;
					main.member_v_brace.connectionProperties.connectionDesign = false;
					main.member_v_brace.connectionProperties.connGivenMark = [];

					for (var i = 0; i < num_dot; i ++)
					{
						var tmp_data = {};
						tmp_data = 
						{
							mark 		: $("#vBraceMark" + (i + 1)).val(),
							gusset 		: $("#vBraceMethodGusset" + (i + 1)).val(),
							beam 		: $("#vBraceTypeBeam" + (i + 1)).val(),
							gussetBeam 	: $("#vBraceMethodBeam" + (i + 1)).val()
						}

						main.member_v_brace.connectionProperties.connGivenMark.push(tmp_data);
					}
				}
				else 
				{
					main.member_v_brace.connectionProperties.connectionGiven = false;
					main.member_v_brace.connectionProperties.connectionDesign = true;
					main.member_v_brace.connectionProperties.ctbdLoad = [];

					for (var i = 0; i < num_brace; i ++)
					{
						var tmp_data = {};
						tmp_data = 
						{
							axial: $("#vaxialload" + (i + 1)).val()
						}

						main.member_v_brace.connectionProperties.ctbdLoad.push(tmp_data);
					}
				}
			});

			Object.keys(vbraceProperties).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
				{
					main.member_v_brace[entry] = $("#" + vbraceProperties[entry]).val();

					if ($("#" + vbraceProperties[entry]).is(":checkbox"))
					{
						if ($("#" + vbraceProperties[entry]).prop("checked"))
						{
							main.member_v_brace[entry] = "on";
						}
						else 
						{
							main.member_v_brace[entry] = "off";
						}
					}
				}
			});

			var pointer = canvas.getPointer(evt.e);
			
			main.drawShape(main.member_v_brace, main.s_type, "#e510cc", pointer.x, pointer.y);
		});
	}

	main.drawShape = function(data, type, color, x, y)
	{

		var click_pos = {x: x / scale, y: y / scale};
		var horiBeam = getNearestBeam(click_pos, "Y");
		var vertCol = getNearestColumn(click_pos.x, click_pos.y);

		if (vertCol == -1)
			return;

		if (vertCol != -1)
		{
			for (var i = 0; i < memberList.length; i ++)
			{
				if (memberList[i].uid == vertCol.first.mode + "_" + vertCol.first.uid)
					data.leftCol_uid = vertCol.first.mode + "_" + vertCol.first.uid;
				if (memberList[i].uid == vertCol.second.mode + "_" + vertCol.second.uid)
					data.rightCol_uid = vertCol.second.mode + "_" + vertCol.second.uid;
			}
		}

		if (horiBeam != -1)
		{
			for (var i = 0; i < memberList.length; i ++)
			{
				if (memberList[i].uid == horiBeam.first.mode + "_" + horiBeam.first.uid)
				{
					data.bottomBeam_uid = horiBeam.first.mode + "_" + horiBeam.first.uid;
				}
				if (memberList[i].uid == horiBeam.second.mode + "_" + horiBeam.second.uid)
					data.topBeam_uid = horiBeam.second.mode + "_" + horiBeam.second.uid;
			}
		}

		switch($("#viewdrpdwn").val())
		{
			case "2":
				var x_index = getGridIndex(x/scale, "X", "XZ");
				var y_index = getGridIndex(y/scale, "Z", "XZ");
				if ( x_index == -1 || y_index == -1)
					return;
				if (horiBeam != -1)
				{
					undoAction.addAction("memberPlace");
					data.snapColumn = false;
					main.draw(data, type, color, x_index, y_index, "XZ", false);
				}
				else
				{
					var tmp_topBeam = getNearestTopBeam(click_pos, "Y");
					if (tmp_topBeam == -1)
						return;
					data.tmp_beam = tmp_topBeam;
					data.snapColumn = true;
					main.draw(data, type, color, x_index, y_index, "XZ", data.snapColumn);
				}
			break;

			case "3":
				var x_index = getGridIndex(x/scale, "Y", "YZ");
				var y_index = getGridIndex(y/scale, "Z", "YZ");
				if( x_index == -1 || y_index == -1)
					return;
				if (horiBeam != -1)
				{
					undoAction.addAction("memberPlace");
					data.snapColumn = false;
					main.draw(data, type, color, x_index, y_index, "YZ", false);
				}
				else
				{
					var tmp_topBeam = getNearestTopBeam(click_pos, "Y");
					if (tmp_topBeam == -1)
						return;
					data.tmp_beam = tmp_topBeam;
					data.snapColumn = true;
					main.draw(data, type, color, x_index, y_index, "YZ", data.snapColumn);
				}
			break;
		}
	}

	main.draw 		= function(data, type, color, x_pos, y_pos, plane, snapColumn)
	{
		if(!color)
			color = "#e510cc";

		var lines 	= [];
		var objs  	= [];
		var l_width = 2;

		var metric;

		var offset_space = 3;

		if (canvas.getZoom() / default_zoom > 4)
	        metric = 4;
	    else if (canvas.getZoom() / default_zoom < 0.25)
	        metric = 0.25;
	    else metric = 1;

	    // if (metric == 4)
	    // {
	    //     l_width = 2 * 4 * default_zoom / canvas.getZoom();
	    // }

	    switch (plane)
		{
			case "XZ":
				main.grid_w = (parseInt(gridData.xaxis[x_pos].Dimension) - parseInt(gridData.xaxis[x_pos-1].Dimension)) * scale;
				main.grid_h = (parseInt(gridData.zaxis[gridData.zaxis.length - y_pos].Dimension) - parseInt(gridData.zaxis[gridData.zaxis.length - y_pos - 1].Dimension)) * scale;
			break;

			case "YZ":
				main.grid_w = (parseInt(gridData.yaxis[x_pos].Dimension) - parseInt(gridData.yaxis[x_pos - 1].Dimension)) * scale;
				main.grid_h = (parseInt(gridData.zaxis[gridData.zaxis.length - y_pos].Dimension) - parseInt(gridData.zaxis[gridData.zaxis.length - y_pos - 1].Dimension)) * scale;
			break
		}

		var top_left, top_right, bottom_left, bottom_right, left_top, left_bottom, right_top, right_bottom;

		var t1, t2, t3, t4;

		var Top_left_x, Top_left_y, Bottom_left_x, Bottom_left_y, Top_right_x, Top_right_y, Bottom_right_x, Bottom_right_y;
		var top_depth = bottom_depth = 0;

		if (plane == "XZ" && !snapColumn)
		{
			for (var i = 0; i < memberList.length; i ++)
			{
				if (memberList[i].uid == data.topBeam_uid)
					data.topBeam = memberList[i];
				else if (memberList[i].uid == data.bottomBeam_uid)
					data.bottomBeam = memberList[i];
				else if (memberList[i].uid == data.leftCol_uid)
					data.leftCol = memberList[i];
				else if (memberList[i].uid == data.rightCol_uid)
					data.rightCol = memberList[i];
			}

			top_left = {x: data.topBeam.memberProperties.startPoint.x, y: data.topBeam.memberProperties.startPoint.z};
			top_right = {x: data.topBeam.memberProperties.endPoint.x, y: data.topBeam.memberProperties.endPoint.z};

			bottom_left = {x: data.bottomBeam.memberProperties.startPoint.x, y: data.bottomBeam.memberProperties.startPoint.z};
			bottom_right = {x: data.bottomBeam.memberProperties.endPoint.x, y: data.bottomBeam.memberProperties.endPoint.z};

			if (data.topBeam.depthvalue != undefined)
				top_depth = parseFloat(data.topBeam.depthvalue);

			if (data.bottomBeam.depthvalue != undefined)
				bottom_depth = parseFloat(data.bottomBeam.depthvalue);

			left_top = {x: data.leftCol.memberProperties.endPoint.x, y: data.leftCol.memberProperties.endPoint.z};
			left_bottom = {x: data.leftCol.memberProperties.startPoint.x, y: data.leftCol.memberProperties.startPoint.z};

			right_top = {x: data.rightCol.memberProperties.endPoint.x, y: data.rightCol.memberProperties.endPoint.z};
			right_bottom = {x: data.rightCol.memberProperties.startPoint.x, y: data.rightCol.memberProperties.startPoint.z};

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
			else if (isInLine(right_top, top_right, top_right))
				t4 = {x: right_top.x, y: right_top.y};
			else 
				return;

			Top_left_x = mapCoordinate(t1.x, "X", "XZ");
			Top_left_y = mapCoordinate(t1.y, "Z", "XZ");

			Bottom_left_x = mapCoordinate(t2.x, "X", "XZ");
			Bottom_left_y = mapCoordinate(t2.y, "Z", "XZ");

			Top_right_x = mapCoordinate(t4.x, "X", "XZ");
			Top_right_y = mapCoordinate(t4.y, "Z", "XZ");

			Bottom_right_x = mapCoordinate(t3.x, "X", "XZ");
			Bottom_right_y = mapCoordinate(t3.y, "Z", "XZ");

			data.memberProperties.startPoint.x = t2.x;
			data.memberProperties.startPoint.z = t2.y;

			data.memberProperties.endPoint.x = t4.x;
			data.memberProperties.endPoint.z = t4.y;

			data.memberProperties.startPoint.y = data.memberProperties.endPoint.y = parseFloat($("#depthdrpdwn").val());
		}
		else if (plane == "XZ" && snapColumn)
		{
			var tmpBeam;
			for (var i = 0; i < memberList.length; i ++) 
			{
				if (memberList[i].uid == data.tmp_beam.mode + "_" + data.tmp_beam.uid)
				{
					tmpBeam = memberList[i];
				}
			}

			for (var i = 0; i < memberList.length; i ++)
			{
				if (memberList[i].uid == data.leftCol_uid)
					data.leftCol = memberList[i];
				else if (memberList[i].uid == data.rightCol_uid)
					data.rightCol = memberList[i];
			}

			top_left = {x: tmpBeam.memberProperties.startPoint.x, y: tmpBeam.memberProperties.startPoint.z};
			top_right = {x: tmpBeam.memberProperties.endPoint.x, y: tmpBeam.memberProperties.endPoint.z};

			if (tmpBeam.depthvalue != undefined)
				top_depth = parseFloat(tmpBeam.depthvalue);

			left_top = {x: data.leftCol.memberProperties.endPoint.x, y: data.leftCol.memberProperties.endPoint.z};
			left_bottom = {x: data.leftCol.memberProperties.startPoint.x, y: data.leftCol.memberProperties.startPoint.z};

			right_top = {x: data.rightCol.memberProperties.endPoint.x, y: data.rightCol.memberProperties.endPoint.z};
			right_bottom = {x: data.rightCol.memberProperties.startPoint.x, y: data.rightCol.memberProperties.startPoint.z};

			if (isInLine(top_left, left_top, left_bottom))
				t1 = {x: top_left.x, y: top_left.y};
			else if (isInLine(left_top, top_left, top_right))
				t1 = {x: left_top.x, y: left_top.y};
			else 
				return;

			if (isInLine(top_right, right_top, right_bottom))
				t4 = {x: top_right.x, y: top_right.y};
			else if (isInLine(right_top, top_right, top_right))
				t4 = {x: right_top.x, y: right_top.y};
			else 
				return;

			t2 = left_bottom;
			t3 = right_bottom;

			Top_left_x = mapCoordinate(t1.x, "X", "XZ");
			Top_left_y = mapCoordinate(t1.y, "Z", "XZ");

			Bottom_left_x = mapCoordinate(t2.x, "X", "XZ");
			Bottom_left_y = mapCoordinate(t2.y, "Z", "XZ");

			Top_right_x = mapCoordinate(t4.x, "X", "XZ");
			Top_right_y = mapCoordinate(t4.y, "Z", "XZ");

			Bottom_right_x = mapCoordinate(t3.x, "X", "XZ");
			Bottom_right_y = mapCoordinate(t3.y, "Z", "XZ");

			data.memberProperties.startPoint.x = t2.x;
			data.memberProperties.startPoint.z = t2.y;

			data.memberProperties.endPoint.x = t4.x;
			data.memberProperties.endPoint.z = t4.y;

			data.memberProperties.startPoint.y = data.memberProperties.endPoint.y = parseFloat($("#depthdrpdwn").val());

		}
		else if (plane == "YZ" && !snapColumn)
		{
			for (var i = 0; i < memberList.length; i ++)
			{
				if (memberList[i].uid == data.topBeam_uid)
					data.topBeam = memberList[i];
				else if (memberList[i].uid == data.bottomBeam_uid)
					data.bottomBeam = memberList[i];
				else if (memberList[i].uid == data.leftCol_uid)
					data.leftCol = memberList[i];
				else if (memberList[i].uid == data.rightCol_uid)
					data.rightCol = memberList[i];
			}
			top_left = {x: data.topBeam.memberProperties.startPoint.y, y: data.topBeam.memberProperties.startPoint.z};
			top_right = {x: data.topBeam.memberProperties.endPoint.y, y: data.topBeam.memberProperties.endPoint.z};
				
			bottom_left = {x: data.bottomBeam.memberProperties.startPoint.y, y: data.bottomBeam.memberProperties.startPoint.z};
			bottom_right = {x: data.bottomBeam.memberProperties.endPoint.y, y: data.bottomBeam.memberProperties.endPoint.z};

			if (data.topBeam.depthvalue != undefined)
				top_depth = parseFloat(data.topBeam.depthvalue);
			if (data.bottomBeam.depthvalue != undefined)
				bottom_depth = parseFloat(data.bottomBeam.depthvalue);

			left_top = {x: data.leftCol.memberProperties.endPoint.y, y: data.leftCol.memberProperties.endPoint.z};
			left_bottom = {x: data.leftCol.memberProperties.startPoint.y, y: data.leftCol.memberProperties.startPoint.z};

			right_top = {x: data.rightCol.memberProperties.endPoint.y, y: data.rightCol.memberProperties.endPoint.z};
			right_bottom = {x: data.rightCol.memberProperties.startPoint.y, y: data.rightCol.memberProperties.startPoint.z};

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
			else if (isInLine(right_top, top_right, top_right))
				t4 = {x: right_top.x, y: right_top.y};
			else 
				return;

			Top_left_x = mapCoordinate(t1.x, "Y", "YZ");
			Top_left_y = mapCoordinate(t1.y, "Z", "YZ");

			Bottom_left_x = mapCoordinate(t2.x, "Y", "YZ");
			Bottom_left_y = mapCoordinate(t2.y, "Z", "YZ");

			Top_right_x = mapCoordinate(t4.x, "Y", "YZ");
			Top_right_y = mapCoordinate(t4.y, "Z", "YZ");

			Bottom_right_x = mapCoordinate(t3.x, "Y", "YZ");
			Bottom_right_y = mapCoordinate(t3.y, "Z", "YZ");

			data.memberProperties.startPoint.y = t2.x;
			data.memberProperties.startPoint.z = t2.y;

			data.memberProperties.endPoint.y = t4.x;
			data.memberProperties.endPoint.z = t4.y;

			data.memberProperties.startPoint.x = data.memberProperties.endPoint.x = parseFloat($("#depthdrpdwn").val());
		}
		else if (plane == "YZ" && snapColumn)
		{
			var tmpBeam;
			if(data.tmp_beam == undefined)
				return;
			for (var i = 0; i < memberList.length; i ++) 
			{
				if (memberList[i].uid == data.tmp_beam.mode + "_" + data.tmp_beam.uid)
				{
					tmpBeam = memberList[i];
				}
			}
			for (var i = 0; i < memberList.length; i ++)
			{
				if (memberList[i].uid == data.leftCol_uid)
					data.leftCol = memberList[i];
				else if (memberList[i].uid == data.rightCol_uid)
					data.rightCol = memberList[i];
			}
			top_left 	= {x: tmpBeam.memberProperties.startPoint.y, y: tmpBeam.memberProperties.startPoint.z};
			top_right 	= {x: tmpBeam.memberProperties.endPoint.y, y: tmpBeam.memberProperties.endPoint.z};

			if (tmpBeam.depthvalue != undefined)
				top_depth = parseFloat(tmpBeam.depthvalue);
				
			left_top 	= {x: data.leftCol.memberProperties.endPoint.y, y: data.leftCol.memberProperties.endPoint.z};
			left_bottom = {x: data.leftCol.memberProperties.startPoint.y, y: data.leftCol.memberProperties.startPoint.z};

			right_top 	 = {x: data.rightCol.memberProperties.endPoint.y, y: data.rightCol.memberProperties.endPoint.z};
			right_bottom = {x: data.rightCol.memberProperties.startPoint.y, y: data.rightCol.memberProperties.startPoint.z};

			if (isInLine(top_left, left_top, left_bottom))
				t1 = {x: top_left.x, y: top_left.y};
			else if (isInLine(left_top, top_left, top_right))
				t1 = {x: left_top.x, y: left_top.y};
			else 
				return;

			if (isInLine(top_right, right_top, right_bottom))
				t4 = {x: top_right.x, y: top_right.y};
			else if (isInLine(right_top, top_right, top_right))
				t4 = {x: right_top.x, y: right_top.y};
			else 
				return;

			t2 = left_bottom;
			t3 = right_bottom;

			Top_left_x = mapCoordinate(t1.x, "Y", "YZ");
			Top_left_y = mapCoordinate(t1.y, "Z", "YZ");

			Bottom_left_x = mapCoordinate(t2.x, "Y", "YZ");
			Bottom_left_y = mapCoordinate(t2.y, "Z", "YZ");

			Top_right_x = mapCoordinate(t4.x, "Y", "YZ");
			Top_right_y = mapCoordinate(t4.y, "Z", "YZ");

			Bottom_right_x = mapCoordinate(t3.x, "Y", "YZ");
			Bottom_right_y = mapCoordinate(t3.y, "Z", "YZ");

			data.memberProperties.startPoint.y = t2.x;
			data.memberProperties.startPoint.z = t2.y;

			data.memberProperties.endPoint.y = t4.x;
			data.memberProperties.endPoint.z = t4.y;

			data.memberProperties.startPoint.x = data.memberProperties.endPoint.x = parseFloat($("#depthdrpdwn").val());
		}

		var tmp_data = [];

		switch(type)
		{
			case "vfs" :
				lines = [[Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space, Top_right_x * scale - offset_space, Top_right_y * scale + offset_space]];
				tmp_data.push([t2.x, t2.y - bottom_depth / 2]);
				tmp_data.push([t4.x, t4.y - top_depth / 2]);
			break;

			case "vbs" :
				lines = [[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]];
				tmp_data.push([t1.x, t1.y - top_depth / 2]);
				tmp_data.push([t3.x, t3.y - bottom_depth / 2]);
			break;

			case "vvs" :
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, (Bottom_left_x + Bottom_right_x) / 2 * scale, (Bottom_left_y + Bottom_right_y) / 2 * scale - offset_space],
						 	[(Bottom_left_x + Bottom_right_x) / 2 * scale, (Bottom_left_y + Bottom_right_y) / 2 * scale - offset_space, Top_right_x * scale - offset_space, Top_right_y * scale + offset_space]
						];
				tmp_data.push([t1.x, t1.y - top_depth / 2]);
				tmp_data.push([(t2.x + t3.x) / 2, (t2.y + t3.y) / 2 - bottom_depth / 2]);
				tmp_data.push([t4.x, t4.y - top_depth / 2]);
			break;

			case "vas" :
				lines = [
							[Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space, (Top_left_x + Top_right_x) / 2 * scale, (Top_left_y + Top_right_y) / 2 * scale + offset_space], 
						 	[(Top_left_x + Top_right_x) / 2 * scale, (Top_left_y + Top_right_y) / 2 * scale + offset_space, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]
						];
				tmp_data.push([t2.x, t2.y - bottom_depth / 2]);
				tmp_data.push([(t1.x + t4.x) / 2, (t1.y + t4.y) / 2 - top_depth / 2]);
				tmp_data.push([t3.x, t3.y - bottom_depth / 2]);
			break;

			case "vws" :
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, (Bottom_left_x * 2 + Bottom_right_x) / 3 * scale, (Bottom_left_y * 2 + Bottom_right_y) / 3 * scale - offset_space], 
						 	[(Bottom_left_x * 2 + Bottom_right_x) / 3 * scale, (Bottom_left_y * 2 + Bottom_right_y) / 3 * scale - offset_space, (Top_left_x + Top_right_x) / 2 * scale, (Top_left_y + Top_right_y) / 2 * scale + offset_space], 
						 	[(Top_left_x + Top_right_x) / 2 * scale, (Top_left_y + Top_right_y) / 2 * scale + offset_space, (Bottom_left_x + Bottom_right_x * 2) / 3 * scale, (Bottom_left_y + Bottom_right_y * 2) / 3 * scale - offset_space], 
						 	[(Bottom_left_x + Bottom_right_x * 2) / 3 * scale, (Bottom_left_y + Bottom_right_y * 2) / 3 * scale - offset_space, Top_right_x * scale - offset_space, Top_right_y * scale + offset_space]
						];
				tmp_data.push([t1.x, t1.y - top_depth / 2]);
				tmp_data.push([(t2.x * 2 + t3.x) / 3, (t2.y * 2 + t3.y) / 3 - bottom_depth / 2]);
				tmp_data.push([(t1.x + t4.x) / 2, (t1.y + t4.y) / 2 - top_depth / 2]);
				tmp_data.push([(t2.x + t3.x * 2) / 3, (t2.y + t3.y * 2) / 3 - bottom_depth / 2]);
				tmp_data.push([t4.x, t4.y - top_depth / 2]);
			break;

			case "vxs" :
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space],
							[Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space, Top_right_x * scale - offset_space, Top_right_y * scale + offset_space]
						];
				tmp_data.push([t1.x, t1.y - top_depth / 2]);
				tmp_data.push([t2.x, t2.y - bottom_depth / 2]);
				tmp_data.push([t4.x, t4.y - top_depth / 2]);
				tmp_data.push([t3.x, t3.y - bottom_depth / 2]);
				var intersection_point = main.intersect(t1, t3, t2, t4);
				tmp_data.push([intersection_point.x, intersection_point.y]);
			break;

			case "vms" :
				lines = [
							[Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space, (Top_left_x * 2 + Top_right_x) / 3 * scale, (Top_left_y * 2 + Top_right_y) / 3 * scale + offset_space],
							[(Top_left_x * 2 + Top_right_x) / 3 * scale, (Top_left_y * 2 + Top_right_y) / 3 * scale + offset_space, (Bottom_left_x + Bottom_right_x) / 2 * scale, (Bottom_left_y + Bottom_right_y) / 2 * scale - offset_space],
							[(Bottom_left_x + Bottom_right_x) / 2 * scale, (Bottom_left_y + Bottom_right_y) / 2 * scale - offset_space, (Top_left_x + Top_right_x * 2) / 3 * scale, (Top_left_y + Top_right_y * 2) / 3 * scale + offset_space],
							[(Top_left_x + Top_right_x * 2) / 3 * scale, (Top_left_y + Top_right_y * 2) / 3 * scale + offset_space, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]
						];
				tmp_data.push([t2.x, t2.y - bottom_depth / 2]);
				tmp_data.push([(t1.x * 2 + t4.x) / 3, (t1.y * 2 + t4.y) / 3 - top_depth / 2]);
				tmp_data.push([(t2.x + t3.x) / 2, (t2.y + t3.y) / 2 - bottom_depth / 2]);
				tmp_data.push([(t1.x + t4.x * 2) / 3, (t1.y + t4.y * 2) / 3 - top_depth / 2]);
				tmp_data.push([t3.x, t3.y - bottom_depth / 2]);
			break;

			case "vps" :
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, (Top_right_x + Bottom_right_x) / 2 * scale - offset_space, (Top_right_y + Bottom_right_y) / 2 * scale],
							[(Top_right_x + Bottom_right_x) / 2 * scale - offset_space, (Top_right_y + Bottom_right_y) / 2 * scale, Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space]
						];
				tmp_data.push([t1.x, t1.y - top_depth / 2]);
				tmp_data.push([(t4.x + t3.x) / 2, (t4.y + t3.y) / 2]);
				tmp_data.push([t2.x, t2.y - bottom_depth / 2]);
			break;

			case "vds" :
				lines = [
							[Top_right_x * scale - offset_space, Top_right_y * scale + offset_space, (Top_left_x + Bottom_left_x) / 2 * scale + offset_space, (Top_left_y + Bottom_left_y) / 2 * scale],
							[(Top_left_x + Bottom_left_x) / 2 * scale + offset_space, (Top_left_y + Bottom_left_y) / 2 * scale, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]
						];
				tmp_data.push([t4.x, t4.y - top_depth / 2]);
				tmp_data.push([(t1.x + t2.x) / 2, (t1.y + t2.y) / 2]);
				tmp_data.push([t3.x, t3.y - bottom_depth / 2]);
			break;

			case "ves" :
				lines = [
							[Top_right_x * scale - offset_space, Top_right_y * scale + offset_space, (Top_left_x * 2 + Bottom_left_x) / 3 * scale + offset_space, (Top_left_y * 2 + Bottom_left_y) / 3 * scale],
							[(Top_left_x * 2 + Bottom_left_x) / 3 * scale + offset_space, (Top_left_y * 2 + Bottom_left_y) / 3 * scale, (Top_right_x + Bottom_right_x) / 2 * scale - offset_space, (Top_right_y + Bottom_right_y) / 2 * scale],
							[(Top_right_x + Bottom_right_x) / 2 * scale - offset_space, (Top_right_y + Bottom_right_y) / 2 * scale, (Top_left_x + Bottom_left_x * 2) / 3 * scale + offset_space, (Top_left_y + Bottom_left_y * 2) / 3 * scale],
							[(Top_left_x + Bottom_left_x * 2) / 3 * scale + offset_space, (Top_left_y + Bottom_left_y * 2) / 3 * scale, Bottom_right_x * scale - offset_space, Bottom_right_y * scale - offset_space]
						];
				tmp_data.push([t4.x, t4.y - top_depth / 2]);
				tmp_data.push([(t1.x * 2 + t2.x) / 3, (t1.y * 2 + t2.y) / 3]);
				tmp_data.push([(t4.x + t3.x) / 2, (t4.y + t3.y) / 2]);
				tmp_data.push([(t1.x + t2.x * 2) / 3, (t1.y + t2.y * 2) / 3]);
				tmp_data.push([t3.x, t3.y - bottom_depth]);
			break;

			case "vves":
				lines = [
							[Top_left_x * scale + offset_space, Top_left_y * scale + offset_space, (Top_right_x * 2 + Bottom_right_x) / 3 * scale - offset_space, (Top_right_y * 2 + Bottom_right_y) / 3 * scale],
							[(Top_right_x * 2 + Bottom_right_x) / 3 * scale - offset_space, (Top_right_y * 2 + Bottom_right_y) / 3 * scale, (Top_left_x + Bottom_left_x) / 2 * scale + offset_space, (Top_left_y + Bottom_left_y) / 2 * scale], 
							[(Top_left_x + Bottom_left_x) / 2 * scale + offset_space, (Top_left_y + Bottom_left_y) / 2 * scale, (Top_right_x + Bottom_right_x * 2) / 3 * scale - offset_space, (Top_right_y + Bottom_right_y * 2) / 3 * scale],
							[(Top_right_x + Bottom_right_x * 2) / 3 * scale - offset_space, (Top_right_y + Bottom_right_y * 2) / 3 * scale, Bottom_left_x * scale + offset_space, Bottom_left_y * scale - offset_space]
						]
				tmp_data.push([t1.x, t1.y - top_depth / 2]);
				tmp_data.push([(t4.x * 2 + t3.x) / 3, (t4.y * 2 + t3.y) / 3]);
				tmp_data.push([(t1.x + t2.x) / 2, (t1.y + t2.y) / 2]);
				tmp_data.push([(t4.x + t3.x * 2) / 3, (t4.y + t3.y * 2) / 3]);
				tmp_data.push([t2.x, t2.y - bottom_depth / 2]);
			break;
		}

		for(var i = 0; i < lines.length; i ++)
		{
			objs.push(new fabric.Line(lines[i], 
			{
				fill 	: color,
				stroke 	: color,
				originX : 'center',
				originY : 'center',
				hasControls: false,
				strokeWidth: l_width
			}));
		}

		var group = new fabric.Group(objs);

		if (data.uid == undefined)
			group.uid  = main.unique_id ++;
		else
			group.uid = data.uid.replace("v_brace_", "");
		group.mode = main.mode;
		group.hasControls = false;

		data.name  = "type";
        data.type  = main.mode;
        data.mode  = type;
        data.color = color;
        data.id 	 = "Mem" + memId ++;
        data.uid 	= "v_brace_" + group.uid;

        data.startIndex.x_index = x_pos;
        data.startIndex.y_index = y_pos;

        data.plane = plane;
        data.floor = $("#depthdrpdwn").val();

        if(main.parent.chkPosAvailable(group, main.mode))
		{
			canvas.add(group);
			stopDraggingElement(group);

			main.buildShapeData(data, plane, tmp_data, top_depth, bottom_depth);
			if (data.topBeam)
				delete data.topBeam;
			if (data.bottomBeam)
				delete data.bottomBeam;
			if (data.rightCol)
				delete data.rightCol;
			if (data.leftCol)
				delete data.leftCol;
			memberList.push(data);
		}
	}

	main.placeVBrace = function(item)
	{
		main.draw(item, item.braceShape, item.color, item.startIndex.x_index, item.startIndex.y_index, item.plane, item.snapColumn);
	}

	main.showHideItems = function(show)
	{
		main.parent.showHideItems(show, main.mode);
	}

	main.buildShapeData = function(data, plane, tmp_data, top_depth, bottom_depth)
	{
		data.shapePoint = [];
		if (plane == "XZ")
		{
			for (var i = 0; i < tmp_data.length; i ++)
			{
				if (data.braceShape != "vxs")
					data.shapePoint.push([tmp_data[i][0], data.floor, tmp_data[i][1]]);
				else 
					data.shapePoint.push([tmp_data[i][0], data.floor, tmp_data[i][1] + (bottom_depth - top_depth) / 4]);
			}
		}
		else 
		{
			for (var i = 0; i < tmp_data.length; i ++)
			{
				if (data.braceShape != "vxs")
					data.shapePoint.push([data.floor, tmp_data[i][0], tmp_data[i][1]]);
				else 
					data.shapePoint.push([data.floor, tmp_data[i][0], tmp_data[i][1] + (bottom_depth - top_depth) / 4]);
			}
		}
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
