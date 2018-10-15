
var class_para_Truss 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "paraTruss";
	main.parent  	 = parent;

	main.unique_id 	 = 0;
	main.grid_w 	 = 0;
	main.grid_h 	 = 0;

	main.prev_x 	 = 0;
	main.prev_y 	 = 0;
	main.length 	 = 0;
	main.height 	 = 0;

	main.isDrawReady = 0;

	main.strokeWidth = 5;

	main.offSet = main.strokeWidth / 2;

	main.init 	= function()
	{
		main.grid_w  = main.parent.grid_w;
		main.grid_h  = main.parent.grid_h;

		main.member_truss = new Truss();

		main.initEvent();
	}

	main.initEvent = function()
	{
		canvas.on("mouse:down", function(evt)
		{
			if (!main.isDrawReady)
				return;
			if ($("#viewdrpdwn").val() == 1)
			{
				$("#message_area p").html("You can't draw Truss on Plan View.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}

			var x = evt.e.offsetX;
			var y = evt.e.offsetY;

			main.member_truss = new paraTrussMember();
			var trussProperties = new_configure.paraTruss;
			Object.keys(trussProperties.memberProperties).map(function(entry)
			{
				main.member_truss.memberProperties[entry] = $("#parallel #" + trussProperties.memberProperties[entry]).val();
			});

			Object.keys(trussProperties.finishProperties).map(function(entry)
			{
				if (entry != "paintType")
					main.member_truss.finishProperties[entry] = $("#parallel #" + trussProperties.finishProperties[entry]).val();
				else
					main.member_truss.finishProperties[entry] = $("#parallel input[name='" + trussProperties.finishProperties[entry] + "']:checked").val();
			});

			Object.keys(trussProperties.connectionProperties).map(function(entry)
			{
				main.member_truss.connectionProperties[entry] = $("#parallel #" + trussProperties.connectionProperties[entry]).val();
			});

			Object.keys(trussProperties).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
					main.member_truss[entry] = $("#" + trussProperties[entry]).val();
			});

			main.member_truss["inclineNum"] = parseInt($("#verticalnumt1").val());
			main.member_truss.type = "paraTruss";

			main.member_truss.left_height = convertToUnit(main.member_truss.height_left_ft, main.member_truss.height_left_in, main.member_truss.height_left_fr, "+");
			main.member_truss.right_height = convertToUnit(main.member_truss.height_right_ft, main.member_truss.height_right_in, main.member_truss.height_right_fr, "+");
			main.member_truss.length = convertToUnit(main.member_truss.length_ft, main.member_truss.length_in, main.member_truss.length_fr, "+");

			main.member_truss.floor = $("#depthdrpdwn").val();
			var splice_count = parseInt(main.member_truss["splice_count"]);
			main.member_truss.splice_data = [];
			for ( var i = 0; i < splice_count; i ++ ) 
			{
				var splice = {};
				splice.left_ft = $("#splicePosition" + (i + 1) + "LeftEndFt").val();
				splice.left_in = $("#splicePosition" + (i + 1) + "LeftEndIn").val();
				splice.left_fr = $("#splicePosition" + (i + 1) + "LeftEndFr").val();
				splice.topChordProfile = $("#paraTopChordProfile" + (i + 1)).val();
				splice.bottomChordProfile = $("#paraBottomChordProfile" + (i + 1)).val();

				main.member_truss.splice_data.push(splice);
			}

			var vertiSpacing = [];
			if (main.member_truss.verticalSpacing == "unequal")
			{
				for ( var i = 0 ; i < main.member_truss.inclineNum; i ++ )
				{
					var ft = $("#parallels" + (i + 1) + "ft").val();
					var inch = $("#parallels" + (i + 1) + "in").val();

					var fr = $("#parallels" + (i + 1) + "fr").val();
					vertiSpacing.push([convertToUnit(ft, inch, fr), ft, inch, fr]);
				}
			}
			else 
			{
				for (i = 0; i < main.member_truss.inclineNum; i ++ )
				{
					var ft = 0;
					var inch = 0;
					var fr = 0;
					vertiSpacing.push([main.member_truss.length / (main.member_truss.inclineNum + 1), ft, inch, fr]);
				}
			}

			main.member_truss.verticals = [];
			for (i = 0; i < main.member_truss.inclineNum; i ++)
			{
				var vertical_mem = {};
				vertical_mem.profile = main.member_truss.verticalMemProfile;
				vertical_mem.orientation = main.member_truss.verticalMemOrientation;
				vertical_mem.materialgrade = main.member_truss.verticalMemGrade;
				vertical_mem.spacing_ft = vertiSpacing[i][1];
				vertical_mem.spacing_in = vertiSpacing[i][2];
				vertical_mem.spacing_fr = vertiSpacing[i][3];
				main.member_truss.verticals.push(vertical_mem);
			}

			main.member_truss.inclinedbracings = [];
			main.member_truss.lacingPattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
			for (i = 0; i < main.member_truss.inclineNum + 1; i ++)
			{
				var brace_mem = {};
				brace_mem.profile = main.member_truss.lacingProfile;
				brace_mem.orientation = main.member_truss.lacingOrientation;
				brace_mem.materialgrade = main.member_truss.lacingGrade;
				
				if (main.member_truss.verticalSpacing == "Equal" && (main.member_truss.inclineNum + 1) % 2 == 0 && i >= (main.member_truss.inclineNum + 1) / 2)
					brace_mem.pattern = reverseBraceShape(main.member_truss.lacingPattern);
				else 
					brace_mem.pattern = main.member_truss.lacingPattern;
				main.member_truss.inclinedbracings.push(brace_mem);
			}
			if (main.member_truss.slopingChord != "Top")
				main.member_truss.slopingChord = "Bottom";

			main.member_truss.vert_data = vertiSpacing;
			var pointer = canvas.getPointer(evt.e);

			undoAction.addAction("memberPlace");

			main.drawShape(main.member_truss, main.s_type, "", pointer.x, pointer.y);
			// main.isDrawReady = false;
		})
	}

	main.drawShape = function(data, type, color, x, y)
	{
		// x 	= (x - gridOffSet * scale * canvas.getZoom() - pan_l) / canvas.getZoom();
		// y 	= (y - gridOffSet * scale * canvas.getZoom()- pan_r) / canvas.getZoom();

		var left_x, top_y;
		var start_back_x;
		switch($("#viewdrpdwn").val())
		{
			case "2":

				var x_index = getGridIndex(x/scale, "X", "XZ");
				var y_index = getGridIndex(y/scale, "Z", "XZ");

				if ( x_index == -1 || y_index == -1)
					return;
				if ( x_index >= gridData.xaxis.length - 1)
					return;

				left_x = mapCoordinate(gridData.xaxis[x_index - 1].Dimension, "X", "XZ");
				start_back_x = gridData.xaxis[x_index - 1].Dimension;
				y_index = gridData.zaxis.length - y_index;

				top_y = gridData.zaxis[y_index].Dimension;
				data.right_top = top_y;
				data.left_x = left_x;
				data.top_y = top_y;
				data.start_back_x = start_back_x;
				main.draw(data, type, color, left_x, top_y, "XZ");
			break;

			case "3":
				var x_index = getGridIndex(x/scale, "Y", "YZ");
				var y_index = getGridIndex(y/scale, "Z", "YZ");

				if( x_index == -1 || y_index == -1)
					return;

				if ( x_index >= gridData.yaxis.length - 1)
					return;

				left_x = mapCoordinate(gridData.yaxis[x_index - 1].Dimension, "Y", "YZ");
				start_back_x = gridData.yaxis[x_index - 1].Dimension;
				y_index = gridData.zaxis.length - y_index;

				top_y = gridData.zaxis[y_index].Dimension;
				data.right_top = top_y;
				data.left_x = left_x;
				data.top_y = top_y;
				data.start_back_x = start_back_x;
				main.draw(data, type, color, left_x, top_y, "YZ");
			break;
		}
	}

	main.draw = function(data, type, color, left_x, top_y, plane)
	{
		if(!color)
			color = "#18f4e6";

		data.topchord.profile = data.topChordProfile;
		data.topchord.orientation = data.topChordOrientation;
		data.topchord.materialgrade = data.topChordGrade;
		data.topchord.splice_count = 0;

		main.drawTopChord(data, left_x, top_y, plane, data.right_top);

		data.bottomchord.profile = data.bottomChordProfile;
		data.bottomchord.orientation = data.bottomChordOrientation;
		data.bottomchord.materialgrade = data.bottomChordGrade;

		main.drawBottomChord(data, left_x, top_y, plane, data.right_top);
		if (data.inclineNum != 0)
			main.drawVerticals(data, left_x, top_y, plane);
		else 
			main.drawSpeciBraces(data, left_x, top_y, plane);
		data.plane = plane;
		data.uid = "paraTruss_" + (memId);
		memberList.push(data);
                dataModel.insertData("parallelTruss", data);
		memId++;
		return true;
	}

	main.drawTopChord = function(data, left_x, top_y, plane, top_y1)
	{
		if (data.slopingChord == "Top")
		{
			var points = [
							left_x * scale, mapCoordinate(top_y, "Z", plane) * scale - main.offSet,  (left_x + data.length) * scale, mapCoordinate(top_y1 + (data.right_height - data.left_height), "Z", plane) * scale - main.offSet
						];

			data.left_top_x = left_x;
			data.left_top_y = top_y;
			data.right_top_x = left_x + data.length;
			data.right_top_y = top_y1 + (data.right_height - data.left_height);
			if (plane == "YZ")
			{
				data.topchord.startPoint = {x: data.floor, y: data.start_back_x, z: top_y};
				data.topchord.endPoint = {x: data.floor, y: data.start_back_x + data.length, z: top_y1 + (data.right_height - data.left_height)};
			}
			else 
			{
				data.topchord.startPoint = {x: data.start_back_x, y: data.floor, z: top_y};
				data.topchord.endPoint = {x: data.start_back_x + data.length, y: data.floor, z: top_y1 + (data.right_height - data.left_height)};
			}
		}
		else 
		{
			var points = [
							left_x * scale, mapCoordinate(top_y, "Z", plane) * scale - main.offSet, (left_x + data.length) * scale, mapCoordinate(top_y1, "Z", plane) * scale - main.offSet
						];

			data.left_top_x = left_x;
			data.left_top_y = top_y;
			data.right_top_x = left_x + data.length;
			data.right_top_y = top_y1;

			if (plane == "YZ")
			{
				data.topchord.startPoint = {x: data.floor, y: data.start_back_x, z: top_y};
				data.topchord.endPoint = {x: data.floor, y: data.start_back_x + data.length, z: top_y1};
			}
			else 
			{
				data.topchord.startPoint = {x: data.start_back_x, y: data.floor, z: top_y};
				data.topchord.endPoint = {x: data.start_back_x + data.length, y: data.floor, z: top_y1};
			}
		}

		var topChord = new fabric.Line(points,
						{
							stroke: "#18f4e6",
							hasControls: false,
							strokeWidth: main.strokeWidth,
							hasRotatingPoint: false,
							lockRotation: true,
							mode: "paraTruss",
							memType: "para_topchord",
							uid: memId
						});
		canvas.add(topChord);
		stopDraggingElement(topChord);
	}

	main.drawBottomChord = function(data, left_x, top_y, plane, top_y1)
	{
		if (data.slopingChord != "Top")
		{
			var points = [
							left_x * scale, mapCoordinate(top_y - data.left_height, "Z", plane) * scale - main.offSet, (left_x + data.length) * scale, mapCoordinate(top_y1 - data.right_height, "Z", plane) * scale - main.offSet
						];

			data.left_bottom_x = left_x;
			data.left_bottom_y = top_y - data.left_height;
			data.right_bottom_x = left_x + data.length;
			data.right_bottom_y = top_y1 - data.right_height;

			if (plane == "YZ")
			{
				data.bottomchord.startPoint = {x: data.floor, y: data.start_back_x, z: top_y - data.left_height};
				data.bottomchord.endPoint = {x: data.floor, y: data.start_back_x + data.length, z: top_y1 - data.right_height};
			}
			else 
			{
				data.bottomchord.startPoint = {x: data.start_back_x, y: data.floor, z: top_y - data.left_height};
				data.bottomchord.endPoint = {x: data.start_back_x + data.length, y: data.floor, z: top_y1 - data.right_height};
			}
		}

		else 
		{
			var points = [
							left_x * scale, mapCoordinate(top_y - data.left_height, "Z", plane) * scale - main.offSet, (left_x + data.length) * scale, mapCoordinate(top_y1 - data.left_height, "Z", plane) * scale - main.offSet
						];

			data.left_bottom_x = left_x;
			data.left_bottom_y = top_y - data.left_height;
			data.right_bottom_x = left_x + data.length;
			data.right_bottom_y = top_y1 - data.left_height;

			if (plane == "YZ")
			{
				data.bottomchord.startPoint = {x: data.floor, y: data.start_back_x, z: top_y - data.left_height};
				data.bottomchord.endPoint = {x: data.floor, y: data.start_back_x + data.length, z: top_y1 - data.left_height};
			}
			else 
			{
				data.bottomchord.startPoint = {x: data.start_back_x, y: data.floor, z: top_y - data.left_height};
				data.bottomchord.endPoint = {x: data.start_back_x + data.length, y: data.floor, z: top_y1 - data.left_height};
			}
		}

		var bottomChord = new fabric.Line(points,
						{
							stroke: "#18f4e6",
							hasControls: false,
							strokeWidth: main.strokeWidth,
							hasRotatingPoint: false,
							lockRotation: true,
							mode: "paraTruss",
							memType: "para_bottomchord",
							uid: memId
						});
		canvas.add(bottomChord);
		stopDraggingElement(bottomChord);
	}

	main.drawVerticals = function(data, left_x, top_y, plane)
	{
		var distanceData = [data.vert_data[0][0]];
		var number = data.vert_data.length;
		var points = [];
		for ( var i = 1; i < number; i ++ )
		{
			distanceData.push(distanceData[i - 1] + data.vert_data[i][0]);
		}

		var top_h = 0,
			top_next_h = 0,
			bottom_h = 0,
			bottom_next_h = 0,

			range_left_x = 0,
			range_right_x = 0;
		var verticals;

		for (i = 0; i <= number; i ++)
		{
			if (i == 0)
			{
				top_h = data.left_top_y;
				top_next_h = (data.left_top_y * (data.length - distanceData[i]) + data.right_top_y * distanceData[i]) / data.length;

				bottom_h = data.left_bottom_y;
				bottom_next_h = (data.left_bottom_y * (data.length - distanceData[i]) + data.right_bottom_y * distanceData[i]) / data.length;

				range_left_x = left_x;
				range_right_x = left_x + distanceData[i];

			}
			else if (i == number)
			{
				top_h = (data.left_top_y * (data.length - distanceData[i - 1]) + data.right_top_y * distanceData[i - 1]) / data.length;
				top_next_h = data.right_top_y;

				bottom_h = (data.left_bottom_y * (data.length - distanceData[i - 1]) + data.right_bottom_y * distanceData[i - 1]) / data.length;
				bottom_next_h = data.right_bottom_y;

				range_left_x = left_x + distanceData[i - 1];
				range_right_x = left_x + data.length;

				points = [
						(left_x + distanceData[i - 1]) * scale, mapCoordinate(top_h, "Z", plane) * scale,
						(left_x + distanceData[i - 1]) * scale, mapCoordinate(bottom_h, "Z", plane) * scale
					];

				verticals = new fabric.Line(points, 
							{
								stroke: "#18f4e6",
								hasControls: false,
								strokeWidth: main.strokeWidth,
								hasRotatingPoint: false,
								lockRotation: true,
								memType: "para_vertical",
								type: "para_vertical_" + i,
								mode: "paraTruss",
								uid: memId
							});

				if (plane == "YZ")
				{
					data.verticals[i - 1].startPoint = {x: data.floor, y: data.start_back_x + distanceData[i - 1], z: top_h};
					data.verticals[i - 1].endPoint = {x: data.floor, y: data.start_back_x + distanceData[i - 1], z: bottom_h};
				}
				else 
				{
					data.verticals[i - 1].startPoint = {x: data.start_back_x + distanceData[i - 1], y: data.floor, z: top_h};
					data.verticals[i - 1].endPoint = {x: data.start_back_x + distanceData[i - 1], y: data.floor, z: bottom_h};
				}

				canvas.add(verticals);
				stopDraggingElement(verticals);
			}
			else
			{ 
				top_h = (data.left_top_y * (data.length - distanceData[i - 1]) + data.right_top_y * distanceData[i - 1]) / data.length;
				top_next_h = (data.left_top_y * (data.length - distanceData[i]) + data.right_top_y * distanceData[i]) / data.length;

				bottom_h = (data.left_bottom_y * (data.length - distanceData[i - 1]) + data.right_bottom_y * distanceData[i - 1]) / data.length;
				bottom_next_h = (data.left_bottom_y * (data.length - distanceData[i]) + data.right_bottom_y * distanceData[i]) / data.length;
				points = [
						(left_x + distanceData[i - 1]) * scale, mapCoordinate(top_h, "Z", plane) * scale,
						(left_x + distanceData[i - 1]) * scale, mapCoordinate(bottom_h, "Z", plane) * scale
					];

				range_left_x = left_x + distanceData[i - 1];
				range_right_x = left_x + distanceData[i];
				verticals = new fabric.Line(points, 
							{
								stroke: "#18f4e6",
								hasControls: false,
								strokeWidth: main.strokeWidth,
								hasRotatingPoint: false,
								lockRotation: true,
								memType: "para_vertical",
								type: "para_vertical_" + i,
								mode: "paraTruss",
								uid: memId
							});

				if (plane == "YZ")
				{
					data.verticals[i - 1].startPoint = {x: data.floor, y: data.start_back_x + distanceData[i - 1], z: top_h};
					data.verticals[i - 1].endPoint = {x: data.floor, y: data.start_back_x + distanceData[i - 1], z: bottom_h};
				}
				else 
				{
					data.verticals[i - 1].startPoint = {x: data.start_back_x + distanceData[i - 1], y: data.floor, z: top_h};
					data.verticals[i - 1].endPoint = {x: data.start_back_x + distanceData[i - 1], y: data.floor, z: bottom_h};
				}
				
				canvas.add(verticals);
				stopDraggingElement(verticals);
			}
			
			main.drawBrace(data, range_left_x, range_right_x, top_h, bottom_h, top_next_h, bottom_next_h, i, plane);
		}
	}

	main.drawBrace = function(data, range_left_x, range_right_x, top_h, bottom_h, top_next_h, bottom_next_h, braceIndex, plane)
	{
		var points = [];
		var tmpShapePoints = [];
		switch (data.inclinedbracings[braceIndex].pattern)
		{
			case "tas":
				points = [
							[range_left_x * scale, mapCoordinate(bottom_h, "Z", plane) * scale, range_right_x * scale - main.offSet, mapCoordinate(top_next_h, "Z", plane) * scale + main.offSet]
						];

				tmpShapePoints = [
									{x: range_left_x - gridOffSet, y: bottom_h},
									{x: range_right_x - gridOffSet, y: top_next_h}
								];
			break;

			case "tbs":
				points = [
							[range_left_x * scale, mapCoordinate(top_h, "Z", plane) * scale, range_right_x * scale - main.offSet, mapCoordinate(bottom_next_h, "Z", plane) * scale - main.offSet]
						];

				tmpShapePoints = [
									{x: range_left_x - gridOffSet, y: top_h},
									{x: range_right_x - gridOffSet, y: bottom_next_h}
								];
			break;

			case "tvs":
				points = [
							[range_left_x * scale + main.offSet, mapCoordinate(top_h, "Z", plane) * scale + main.offSet, (range_left_x + range_right_x) / 2 * scale, mapCoordinate((bottom_h + bottom_next_h) / 2, "Z", plane) * scale],
							[(range_left_x + range_right_x) / 2 * scale, mapCoordinate((bottom_h + bottom_next_h) / 2, "Z", plane) * scale, range_right_x * scale - main.offSet, mapCoordinate(top_next_h, "Z", plane) * scale + main.offSet]
						];

				tmpShapePoints = [
									{x: range_left_x - gridOffSet, y: top_h},
									{x: (range_left_x + range_right_x) / 2 - gridOffSet, y: (bottom_h + bottom_next_h) / 2},
									{x: range_right_x - gridOffSet, y: top_next_h}
								];
			break;

			case "tvvs":
				points = [
							[range_left_x * scale + main.offSet, mapCoordinate(bottom_h, "Z", plane) * scale - main.offSet, (range_left_x + range_right_x) / 2 * scale, mapCoordinate((top_h + top_next_h) / 2, "Z", plane) * scale + main.offSet],
							[(range_left_x + range_right_x) / 2 * scale, mapCoordinate((top_h + top_next_h) / 2, "Z", plane) * scale + main.offSet, range_right_x * scale, mapCoordinate(bottom_next_h, "Z", plane) * scale - main.offSet]
						]

				tmpShapePoints = [
									{x: range_left_x - gridOffSet, y: bottom_h},
									{x: (range_left_x + range_right_x) / 2 - gridOffSet, y: (top_h + top_next_h) / 2},
									{x: range_right_x - gridOffSet, y: bottom_next_h}
								];
			break;

			case "tws":
				points = [
							[range_left_x * scale + main.offSet, mapCoordinate(top_h, "Z", plane) * scale + main.offSet, (range_left_x * 3 + range_right_x) / 4 * scale, mapCoordinate((bottom_h * 3 + bottom_next_h) / 4, "Z", plane) * scale],
							[(range_left_x * 3 + range_right_x) / 4 * scale, mapCoordinate((bottom_h * 3 + bottom_next_h) / 4, "Z", plane) * scale, (range_left_x + range_right_x) / 2 * scale, mapCoordinate((top_h + top_next_h) / 2, "Z", plane) * scale],
							[(range_left_x + range_right_x) / 2 * scale, mapCoordinate((top_h + top_next_h) / 2, "Z", plane) * scale, (range_left_x + range_right_x * 3) / 4 * scale, mapCoordinate((bottom_h + bottom_next_h * 3) / 4, "Z", plane) * scale],
							[(range_left_x + range_right_x * 3) / 4 * scale, mapCoordinate((bottom_h + bottom_next_h * 3) / 4, "Z", plane) * scale, range_right_x * scale - main.offSet, mapCoordinate(top_next_h, "Z", plane) * scale + main.offSet]
						];

				tmpShapePoints = [
									{x: range_left_x - gridOffSet, y: top_h},
									{x: (range_left_x * 3 + range_right_x) / 4 - gridOffSet, y: (bottom_h * 3 + bottom_next_h) / 4},
									{x: (range_left_x + range_right_x) / 2 - gridOffSet, y: (top_h + top_next_h) / 2},
									{x: (range_left_x + range_right_x * 3) / 4 - gridOffSet, y: (bottom_h + bottom_next_h * 3) / 4},
									{x: range_right_x - gridOffSet, y: top_next_h}
								];
			break;

			case "tms":
				points = [
							[range_left_x * scale + main.offSet, mapCoordinate(bottom_h, "Z", plane) * scale - main.offSet, (range_left_x * 3 + range_right_x) / 4 * scale, mapCoordinate((top_h * 3 + top_next_h) / 4, "Z", plane) * scale],
							[(range_left_x * 3 + range_right_x) / 4 * scale, mapCoordinate((top_h * 3 + top_next_h) / 4, "Z", plane) * scale, (range_left_x + range_right_x) / 2 * scale, mapCoordinate((bottom_h + bottom_next_h) / 2, "Z", plane) * scale],
							[(range_left_x + range_right_x) / 2 * scale, mapCoordinate((bottom_h + bottom_next_h) / 2, "Z", plane) * scale, (range_left_x + range_right_x * 3) / 4 * scale, mapCoordinate((top_h + top_next_h * 3) / 4, "Z", plane) * scale],
							[(range_left_x + range_right_x * 3) / 4 * scale, mapCoordinate((top_h + top_next_h * 3) / 4, "Z", plane) * scale, range_right_x * scale - main.offSet, mapCoordinate(bottom_next_h, "Z", plane) * scale - main.offSet]
						];

				tmpShapePoints = [
									{x: range_left_x - gridOffSet, y: bottom_h},
									{x: (range_left_x * 3 + range_right_x) / 4 - gridOffSet, y: (top_h * 3 + top_next_h) / 4},
									{x: (range_left_x + range_right_x) / 2 - gridOffSet, y: (bottom_h + bottom_next_h) / 2},
									{x: (range_left_x + range_right_x * 3) / 4 - gridOffSet, y: (top_h + top_next_h * 3) / 4},
									{x: (range_right_x) - gridOffSet, y: bottom_next_h}
								];
			break;
		}
		var objs = [];
		for ( var i = 0 ; i < points.length; i ++ )
			objs.push(new fabric.Line(points[i], 
							{
								stroke: "#18f4e6",
								hasControls: false,
								strokeWidth: 1,
								hasRotatingPoint: false,
								lockRotation: true,
								mode: "paraTruss",
								memType: "para_brace",
								type: "para_brace_" + braceIndex,
								uid: memId
							}));
		var group = new fabric.Group(objs);
		group.mode = "paraTruss";
		group.memType = "para_brace";
		group.type = "para_brace_" + braceIndex;
		group.uid = memId;
		group.lockRotation = true;
		data.inclinedbracings[braceIndex].shapePoint = main.fixYPos(tmpShapePoints, plane, data.floor);
		canvas.add(group);
		stopDraggingElement(group);
	}

	main.fixYPos = function(shapePoint, plane, height)
	{
		var rlt = [];
		for (var i = 0; i < shapePoint.length; i ++)
		{
			if (plane == "YZ")
			{
				rlt.push({x: height, y: shapePoint[i].x, z: shapePoint[i].y});
			}
			else 
			{
				rlt.push({x: shapePoint[i].x, y: height, z: shapePoint[i].y});
			}
		}
		return rlt;
	}

	main.drawSpeciBraces = function(data, left_x, top_y, plane)
	{
		var inclineNum = parseInt(data.length / data.left_height);

		if (data.length == data.left_height * inclineNum)
			inclineNum -= 1;
		for (i = 0; i < inclineNum; i ++)
		{
			data.vert_data.push([data.left_height, 0, 0, 0]);
		}

		var distanceData = [data.vert_data[0][0]];
		for (i = 1; i < inclineNum; i ++)
			distanceData.push(distanceData[i - 1] + data.vert_data[i][0]);

		data.inclinedbracings = [];
		for (i = 0; i < inclineNum + 1; i ++)
		{
			var brace_mem = {};
				brace_mem.profile = data.lacingProfile;
				brace_mem.orientation = data.lacingOrientation;
				brace_mem.materialgrade = data.lacingGrade;
				
				if (i % 2 == 1)
				{
					brace_mem.pattern = "tbs";
				}
				else 
				{
					brace_mem.pattern = "tas";
				}
				data.inclinedbracings.push(brace_mem);
		}
		var top_h = 0,
			top_next_h = 0,
			bottom_h = 0,
			bottom_next_h = 0,

			range_left_x = 0,
			range_right_x = 0;
		var verticals;

		for (var i = 0; i <= inclineNum; i ++)
		{
			if (i == 0)
			{
				top_h = data.left_top_y;
				top_next_h = (data.left_top_y * (data.length - distanceData[i]) + data.right_top_y * distanceData[i]) / data.length;

				bottom_h = data.left_bottom_y;
				bottom_next_h = (data.left_bottom_y * (data.length - distanceData[i]) + data.right_bottom_y * distanceData[i]) / data.length;

				range_left_x = left_x;
				range_right_x = left_x + distanceData[i];

			}
			else if (i == inclineNum)
			{
				top_h = (data.left_top_y * (data.length - distanceData[i - 1]) + data.right_top_y * distanceData[i - 1]) / data.length;
				top_next_h = data.right_top_y;

				bottom_h = (data.left_bottom_y * (data.length - distanceData[i - 1]) + data.right_bottom_y * distanceData[i - 1]) / data.length;
				bottom_next_h = data.right_bottom_y;

				range_left_x = left_x + distanceData[i - 1];
				range_right_x = left_x + data.length;

				points = [
						(left_x + distanceData[i - 1]) * scale, mapCoordinate(top_h, "Z", plane) * scale,
						(left_x + distanceData[i - 1]) * scale, mapCoordinate(bottom_h, "Z", plane) * scale
					];
			}
			else
			{ 
				top_h = (data.left_top_y * (data.length - distanceData[i - 1]) + data.right_top_y * distanceData[i - 1]) / data.length;
				top_next_h = (data.left_top_y * (data.length - distanceData[i]) + data.right_top_y * distanceData[i]) / data.length;

				bottom_h = (data.left_bottom_y * (data.length - distanceData[i - 1]) + data.right_bottom_y * distanceData[i - 1]) / data.length;
				bottom_next_h = (data.left_bottom_y * (data.length - distanceData[i]) + data.right_bottom_y * distanceData[i]) / data.length;
				points = [
						(left_x + distanceData[i - 1]) * scale, mapCoordinate(top_h, "Z", plane) * scale,
						(left_x + distanceData[i - 1]) * scale, mapCoordinate(bottom_h, "Z", plane) * scale
					];

				range_left_x = left_x + distanceData[i - 1];
				range_right_x = left_x + distanceData[i];
			}
			main.drawBrace(data, range_left_x, range_right_x, top_h, bottom_h, top_next_h, bottom_next_h, i, plane);
		}
	}

	main.placeTruss = function(item)
	{
		// main.drawShape(item.startPoint, item.endPoint, item.color);
		main.draw(item, item.mode, item.color, item.startIndex.x_index, item.startIndex.y_index, item.plane);
	}

	main.showHideItems = function(show)
	{
		main.parent.showHideItems(show, main.mode);
	}

	main.buildShape = function(data, plane)
	{
		var start = {x: 0, y: 0};
		var end = {x: 0, y: 0};
		data.shapePoint = [];
		switch (plane)
		{
			case "XZ":
				start.x = gridData.xaxis[data.startIndex.x_index - 1].Dimension;
				start.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index].Dimension - parseFloat(data.height_left_ft);

				end.x = start.x + parseFloat(data.length_ft);
				end.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index].Dimension;

				data.shapePoint.push([start.x, parseFloat(data.floor), start.y]);
				data.shapePoint.push([start.x, parseFloat(data.floor), end.y]);
				data.shapePoint.push([end.x, parseFloat(data.floor), end.y]);
				data.shapePoint.push([end.x, parseFloat(data.floor), end.y - parseFloat(data.height_right_ft)]);

			break;

			case "YZ":
				start.x = gridData.yaxis[data.startIndex.x_index - 1].Dimension;
				start.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index].Dimension - parseFloat(data.height_left_ft);

				end.x = start.x + parseFloat(data.length_ft);
				end.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index].Dimension;

				data.shapePoint.push([parseFloat(data.floor), start.x, start.y]);
				data.shapePoint.push([parseFloat(data.floor), start.x, end.y]);
				data.shapePoint.push([parseFloat(data.floor), end.x, end.y]);
				data.shapePoint.push([parseFloat(data.floor), end.x, end.y - parseFloat(data.height_right_ft)]);
			break;
		}
	}

	main.drawPlane = function(data, plane)
	{
		var startX = mapCoordinate(data.topchord.startPoint.x, "X", "XY") * scale;
		var endX = mapCoordinate(data.topchord.endPoint.x, "X", "XY") * scale;
		var startY = mapCoordinate(data.topchord.startPoint.y, "Y", "XY") * scale;
		var endY = mapCoordinate(data.topchord.endPoint.y, "Y", "XY") * scale;

		var line;

		var Length = 5;
		
		if (data.topchord.startPoint.z != $("#depthdrpdwn").val())
			return;

		console.log(startX, endX, startY, endY);
		if (startX == endX)
		{
			line = new fabric.Line([startX - Length / 2, startY, endX - Length / 2, endY], 
                {
                    stroke: '#18f4e6',
                    strokeWidth: Length,
                    hasControls: false,
                    lockMovementX: false,
                    lockMovementY: false, 
                    memType: "trape_bottomchord",
                    mode: "trapeTruss", 
                    uid:data.uid.replace("trapeTruss_", "")
                });
		}
		else if (startY == endY)
		{
			line = new fabric.Line([startX, startY - Length / 2, endX, endY - Length / 2],
                {
                    stroke: '#18f4e6',
                    strokeWidth: Length,
                    hasControls: false,
                    lockMovementX: false,
                    lockMovementY: false, 
                    memType: "trape_bottomchord",
                    mode: "trapeTruss", 
                    uid:data.uid.replace("trapeTruss_", "")
                }); 
		}

		canvas.add(line);
		stopDraggingElement(line);
	}

	main.init();
}
