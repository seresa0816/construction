
var class_Truss 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "truss";
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

			main.member_truss = new Truss();
			var trussProperties = new_configure.truss;
			Object.keys(trussProperties.memberProperties).map(function(entry)
			{
				main.member_truss.memberProperties[entry] = $("#pitched #" + trussProperties.memberProperties[entry]).val();
			});

			Object.keys(trussProperties.finishProperties).map(function(entry)
			{
				if (entry != "paintType")
					main.member_truss.finishProperties[entry] = $("#pitched #" + trussProperties.finishProperties[entry]).val();
				else
					main.member_truss.finishProperties[entry] = $("#pitched input[name='" + trussProperties.finishProperties[entry] + "']:checked").val();
			});

			Object.keys(trussProperties.connectionProperties).map(function(entry)
			{
				main.member_truss.connectionProperties[entry] = $("#pitched #" + trussProperties.connectionProperties[entry]).val();
			});

			Object.keys(trussProperties).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties" && entry != "topchord" && entry != "bottomchord" && entry != "verticals" && entry != "inclinedbracings")
					main.member_truss[entry] = $("#" + trussProperties[entry]).val();
			});

			main.member_truss["inclineNum"] = parseInt($("#pverticalnum").val());
			main.member_truss.type = "truss";

			// main.length = parseInt(main.member_truss.length_ft);
			main.length = convertToUnit(main.member_truss.length_ft, main.member_truss.length_in, main.member_truss.length_fr, "+");
			// main.height = parseInt(main.member_truss.height_ridge_ft);
			main.height = convertToUnit(main.member_truss.height_ridge_ft, main.member_truss.height_ridge_in, main.member_truss.height_ridge_fr, "+");

			main.member_truss.floor = $("#depthdrpdwn").val();

			var splice_count = parseInt(main.member_truss["splice_count"]);
			main.member_truss.splice_data = [];

			for ( var i = 0; i < splice_count; i ++ ) 
			{
				var splice = {};
				splice.left_ft = $("#splicePosition" + (i + 1) + "LeftEndFt").val();
				splice.left_in = $("#splicePosition" + (i + 1) + "LeftEndIn").val();
				splice.left_fr = $("#splicePosition" + (i + 1) + "LeftEndFr").val();
				splice.topChordProfile = $("#trapTopChordProfile" + (i + 1)).val();
				splice.bottomChordProfile = $("#trapBottomChordProfile" + (i + 1)).val();

				main.member_truss.splice_data.push(splice);
			}

			var vertiSpacing = [];

			if (main.member_truss.verticalSpacing != "Equal")
			{
				for ( i = 0; i < main.member_truss.inclineNum; i ++ )
				{
					var ft = $("#pitchedvertical" + (i + 1) + "ft").val();
					var inch = $("#pitchedvertical" + (i + 1) + "in").val();
					var fr = $("#pitchedvertical" + (i + 1) + "fr").val();

					vertiSpacing.push([convertToUnit(ft, inch, fr, "+"), ft, inch, fr]);
				}
			}
			else 
			{
				for ( i = 0; i < main.member_truss.inclineNum; i ++ )
				{
					if (main.member_truss.ridge_pos == "Center")
						vertiSpacing.push([main.length / 2 / main.member_truss.inclineNum, parseInt(main.length / 2 / main.member_truss.inclineNum), 0, 0]);
					else
						vertiSpacing.push([main.length / (main.member_truss.inclineNum + 1), parseInt(main.length / (main.member_truss.inclineNum + 1)), 0, 0]);
				}
			}

			main.member_truss.vert_data = vertiSpacing;

			main.member_truss.verticals = [];
			for (var i = 0; i < main.member_truss.inclineNum; i ++)
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

			if (main.member_truss.ridge_pos == "Center")
			{
				main.member_truss.ridge_pos_index = main.member_truss.inclineNum;
				for (var i = main.member_truss.inclineNum - 1; i > 0; i --)
				{
					main.member_truss.verticals.push(JSON.parse(JSON.stringify(main.member_truss.verticals[i])));
					main.member_truss.vert_data.push(main.member_truss.vert_data[i]);
				}
			}
			else 
			{
				main.member_truss.ridge_pos_index = parseInt(main.member_truss.ridge_pos_indexstr);
			}

			main.member_truss.lacingPattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
			
			if (main.member_truss.lacingPattern == undefined)
			{
				$("#message_area p").html("You can't draw Truss without brace shape.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return false;
			}
			main.member_truss.inclinedbracings = [];
			for ( var i = 0; i < main.member_truss.verticals.length - 1; i ++ )
			{
				var brace_mem = {};
				brace_mem.profile = main.member_truss.lacingProfile;
				brace_mem.orientation = main.member_truss.lacingOrientation;
				brace_mem.materialgrade = main.member_truss.lacingGrade;
				
				if (main.member_truss.verticals.length % 2 == 1 && i >= (main.member_truss.verticals.length + 1) / 2 - 1 && main.member_truss.ridge_pos == "Center")
					brace_mem.pattern = main.reverseShape(main.member_truss.lacingPattern);
				else 
					brace_mem.pattern = main.member_truss.lacingPattern;
				main.member_truss.inclinedbracings.push(brace_mem);
			}

			var pointer = canvas.getPointer(evt.e);
			undoAction.addAction("memberPlace");

			main.drawShape(main.member_truss, main.s_type, "", pointer.x, pointer.y);

			// main.isDrawReady = false;
		})
	}

	main.drawShape = function(data, type, color, x, y)
	{
		
		switch($("#viewdrpdwn").val())
		{
			case "2":
				var x_index = getGridIndex(x/scale, "X", "XZ");
				var y_index = getGridIndex(y/scale, "Z", "XZ");
				if (y / scale < 0)
					y_index = 0;

				if ( x_index == -1 || y_index == -1)
					return;
				if ( x_index >= gridData.xaxis.length - 1)
					return;

				main.draw(data, type, color, x_index, y_index, "XZ");
			break;

			case "3":
				var x_index = getGridIndex(x/scale, "Y", "YZ");
				var y_index = getGridIndex(y/scale, "Z", "YZ");
				if (y / scale < 0)
					y_index = 0;

				if( x_index == -1 || y_index == -1)
					return;

				if ( x_index >= gridData.yaxis.length - 1)
					return;

				main.draw(data, type, color, x_index, y_index, "YZ");
			break;
		};
		data.left_index = x_index;
		data.top_index = y_index;
	}

	main.draw = function(data, type, color, x_pos, y_pos, plane)
	{
		
		if(!color)
			color = "#18f4e6";

		y_pos = gridData.zaxis.length - y_pos - 1;

		var objs  	= [];
		var l_width = 3;
		var start_x, start_y, middle_x;

		var start_back_x;

		if (data.inclineNum == 0) 
		{
			$("#message_area p").html("You can't draw Truss without verticals.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return false;
		}

		if (plane == "XZ")
		{
			start_x = mapCoordinate(gridData.xaxis[x_pos - 1].Dimension, "X", "XZ");
			start_back_x = gridData.xaxis[x_pos - 1].Dimension;
			start_y = gridData.zaxis[y_pos].Dimension;
		}
		else 
		{
			start_x = mapCoordinate(gridData.yaxis[x_pos - 1].Dimension, "Y", "YZ");
			start_back_x = gridData.yaxis[x_pos - 1].Dimension;
			start_y = gridData.zaxis[y_pos].Dimension;
		}

		var total_length = 0;
		middle_x = 0;
		middle_x = convertToUnit(data.ridge_pos_ft, data.ridge_pos_in, data.ridge_pos_fr, "+");

		if (data.ridge_pos == "Center")
		{
			middle_x = main.length / 2;
		}
		middle_x += start_x;

		for ( i = 0; i < data.vert_data.length; i ++ )
			total_length += data.vert_data[i][0];

		var middle_length = 0;
		for (var i = 0; i < data.ridge_pos_index; i ++ )
			middle_length += data.vert_data[i][0];

		if (middle_x != middle_length + start_x)
		{
			$("#message_area p").html("You can't draw Truss as wrong ridge point.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return false;
		}
		if (total_length > main.length)
		{
			$("#message_area p").html("You can't draw Truss as your input length is greater than length of truss.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return false;
		}

		data.topchord.profile = data.topChordProfile;
		data.topchord.orientation = data.topChordOrientation;
		data.topchord.materialgrade = data.topChordGrade;
		data.topchord.splice_count = 0;
		data.start_back_x = start_back_x;

		main.drawTopChord(data, start_x, start_y, middle_x, main.height, plane);

		data.bottomchord.profile = data.bottomChordProfile;
		data.bottomchord.orientation = data.bottomChordOrientation;
		data.bottomchord.materialgrade = data.bottomChordGrade;

		main.drawBottomChord(data, start_x, start_y, plane, start_back_x);

		main.verticals(data, start_x, start_y, middle_x, plane, data.vert_data.length);
		data.plane = plane;
		data.uid = "truss_" + (memId);
		memberList.push(data);
		memId++;
		return true;
	}

	main.drawTopChord = function(data, start_x, start_y, middle_x, height, plane)
	{
		var points = [
						{x: start_x * scale, y: mapCoordinate(start_y, "Z", plane) * scale - main.offSet},
						{x: middle_x * scale, y: mapCoordinate(start_y + height, "Z", plane) * scale},
						{x: (start_x + main.length) * scale, y: mapCoordinate(start_y, "Z", plane) * scale - main.offSet}
					];

		var topChord = new fabric.Polyline(points,
							{
								fill: "transparent",
								stroke: "#18f4e6",
								hasControls: false,
								strokeWidth: main.strokeWidth,
								hasRotatingPoint: false,
								lockRotation: true,
								mode: "truss",
								memType: "pitch_topchord",
								uid: memId
							});
		if (plane == "YZ")
		{
			data.topchord.startPoint = {x: data.floor, y: start_x - gridOffSet, z: start_y};
			data.topchord.endPoint = {x: data.floor, y: (start_x + main.length) - gridOffSet, z: start_y};
			data.topchord.middlePoint = {x: data.floor, y: middle_x - gridOffSet, z: start_y};
		}
		else 
		{
			data.topchord.startPoint = {x: start_x - gridOffSet, y: data.floor, z: start_y};
			data.topchord.endPoint = {x: (start_x + main.length) - gridOffSet, y: data.floor, z: start_y};
			data.topchord.middlePoint = {x: middle_x - gridOffSet, y: data.floor, z: start_y + height};
		}
		canvas.add(topChord);
		stopDraggingElement(topChord);
	}

	main.drawBottomChord = function(data, start_x, start_y, plane, start_back_x)
	{
		var points = [start_x * scale, mapCoordinate(start_y, "Z", plane) * scale - main.offSet, (start_x + main.length) * scale, mapCoordinate(start_y, "Z", plane) * scale - main.offSet];
		var bottomChord = new fabric.Line(points,
							{
								stroke: "#18f4e6",
								hasControls: false,
								strokeWidth: main.strokeWidth,
								hasRotatingPoint: false,
								lockRotation: true,
								mode: "truss",
								memType: "pitch_bottomchord",
								uid: memId
							});
		if (plane == "YZ")
		{
			data.bottomchord.startPoint = {x: data.floor, y: start_back_x, z: start_y};
			data.bottomchord.endPoint = {x: data.floor, y: (start_back_x + main.length), z: start_y};
		}
		else 
		{
			data.bottomchord.startPoint = {x: start_back_x, y: data.floor, z: start_y};
			data.bottomchord.endPoint = {x: (start_back_x + main.length), y: data.floor, z: start_y};
		}
		canvas.add(bottomChord);
		stopDraggingElement(bottomChord);
	}

	main.verticals = function(data, start_x, start_y, middle_x, plane, number)
	{
		var points;
		var verticals;
		
		var distanceData = [data.vert_data[0][0]];
		for ( var i = 1; i < number; i ++ )
		{
			distanceData.push(distanceData[i - 1] + data.vert_data[i][0]);
		}

		var h = 0;

		for ( var i = 0; i < number; i ++ )
		{
			if ( i < data.ridge_pos_index - 1)
			{
				h = distanceData[i] / (middle_x - start_x) * main.height;
				next_h = distanceData[i + 1] / (middle_x - start_x) * main.height;
			}
			else 
			{
				h = (main.length - distanceData[i]) / (start_x + main.length - middle_x) * main.height;
				if ( i < number - 1)
					next_h = (main.length - distanceData[i+1]) / (start_x + main.length - middle_x) * main.height;
			}

			points = [
						(start_x + distanceData[i]) * scale, mapCoordinate(start_y, "Z", plane) * scale,
						(start_x + distanceData[i]) * scale, mapCoordinate(start_y + h, "Z", plane) * scale
					];

			verticals = new fabric.Line(points, 
					{
						stroke: "#18f4e6",
						hasControls: false,
						strokeWidth: main.strokeWidth,
						hasRotatingPoint: false,
						lockRotation: true,
						memType: "pitch_vertical",
						type: "pitch_vertical_" + i,
						mode: "truss",
						uid: memId
					});

			if (plane == "YZ")
			{
				data.verticals[i].startPoint = {x: data.floor, y: (data.start_back_x + distanceData[i]), z: start_y};
				data.verticals[i].endPoint = {x: data.floor, y: (data.start_back_x + distanceData[i]), z: start_y + h};
			}

			else 
			{
				data.verticals[i].startPoint = {x: (data.start_back_x + distanceData[i]), y: data.floor, z: start_y};
				data.verticals[i].endPoint = {x: (data.start_back_x + distanceData[i]), y: data.floor, z: start_y + h};
			}

			if (i < number - 1)
			{
				var	drawBraceRange = [
							start_y,
							start_x + distanceData[i], h, 
							start_x + distanceData[i + 1], next_h,
						];
				// if ((number + 1) % 2 == 0 && i >= (number + 1) / 2 - 1)
				// 	main.drawBrace(data, drawBraceRange, main.reverseShape(data.inclinedbracings[i].pattern), plane, i);
				// else 
					main.drawBrace(data, drawBraceRange, data.inclinedbracings[i].pattern, plane, i);
			}

			canvas.add(verticals);
			stopDraggingElement(verticals);
		}
		
	}

	main.reverseShape = function(shape)
	{
		switch (shape)
		{
			case "tas":
				return "tbs";
			break;

			case "tbs":
				return "tas";
			break;

			case "tvs":
				return "tvs";
			break;

			case "tvvs":
				return "tvvs";
			break;

			case "tws":
				return "tws";
			break;

			case "tms":
				return "tms";
			break;
		}
	}

	main.drawBrace = function(data, range, shape, plane, braceIndex)
	{
		var points = [];
		var tmpShapePoint = [];
		switch (shape)
		{
			case "tas":
				points = [
							[range[1] * scale + main.offSet, mapCoordinate(range[0], "Z", plane) * scale - main.offSet, range[3] * scale - main.offSet, mapCoordinate(range[0] + range[4], "Z", plane) * scale + main.offSet]
						];
				tmpShapePoint = [
									{x: range[1] - gridOffSet, y: range[0]},
									{x: range[3] - gridOffSet, y: range[0] + range[4]}
								];
			break;

			case "tbs":
				points = [
							[range[1] * scale + main.offSet, mapCoordinate(range[0] + range[2], "Z", plane) * scale + main.offSet, range[3] * scale - main.offSet, mapCoordinate(range[0], "Z", plane) * scale - main.offSet]
						];

				tmpShapePoint = [
									{x: range[1] - gridOffSet, y: range[0] + range[2]},
									{x: range[3] - gridOffSet, y: range[0]}
								];
			break;

			case "tcs":
				points = [
							[range[1] * scale + main.offSet, mapCoordinate(range[0], "Z", plane) * scale - main.offSet, range[3] * scale - main.offSet, mapCoordinate(range[0] + range[4], "Z", plane) * scale + main.offSet],
							[range[1] * scale + main.offSet, mapCoordinate(range[0] + range[2], "Z", plane) * scale + main.offSet, range[3] * scale - main.offSet, mapCoordinate(range[0], "Z", plane) * scale - main.offSet]
						];

				tmpShapePoint = [
									{x: range[1] - gridOffSet, y: range[0]},
									{x: range[3] - gridOffSet, y: range[0] + range[4]},
									{x: range[1] - gridOffSet, y: range[0] + range[2]},
									{x: range[3] - gridOffSet, y: range[0]}
								];
			break;

			case "tvs":
				points = [
							[range[1] * scale + main.offSet, mapCoordinate(range[0] + range[2], "Z", plane) * scale + main.offSet, (range[1] + range[3]) / 2 * scale, mapCoordinate(range[0], "Z", plane) * scale - main.offSet],
							[(range[1] + range[3]) / 2 * scale, mapCoordinate(range[0], "Z", plane) * scale - main.offSet, range[3] * scale + main.offSet, mapCoordinate(range[0] + range[4], "Z", plane) * scale - main.offSet]
						];

				tmpShapePoint = [
									{x: range[1] - gridOffSet, y: range[0] + range[2]},
									{x: (range[1] + range[3]) / 2 - gridOffSet, y: range[0]},
									{x: range[3] - gridOffSet, y: range[0] + range[4]}
								];
			break;

			case "tvvs":
				points = [
							[range[1] * scale + main.offSet, mapCoordinate(range[0], "Z", plane) * scale - main.offSet, (range[1] + range[3]) / 2 * scale, mapCoordinate(range[0] +(range[2] + range[4]) / 2, "Z", plane) * scale + main.offSet],
							[(range[1] + range[3]) / 2 * scale, mapCoordinate(range[0] +(range[2] + range[4]) / 2, "Z", plane) * scale + main.offSet, range[3] * scale - main.offSet, mapCoordinate(range[0], "Z", plane) * scale - main.offSet]
						];

				tmpShapePoint = [
									{x: range[1] - gridOffSet, y: range[0]},
									{x: (range[1] + range[3]) / 2 - gridOffSet, y: range[0] + (range[2] + range[4]) / 2},
									{x: range[3] - gridOffSet, y: range[0]}
								];
			break;

			case "tws":
				points = [
							[range[1] * scale + main.offSet, mapCoordinate(range[0] + range[2], "Z", plane) * scale + main.offSet, (range[1] * 3 + range[3]) / 4 * scale, mapCoordinate(range[0], "Z", plane) * scale - main.offSet],
							[(range[1] * 3 + range[3]) / 4 * scale, mapCoordinate(range[0], "Z", plane) * scale - main.offSet, (range[1] + range[3]) / 2 * scale, mapCoordinate(range[0] + (range[2] + range[4]) / 2, "Z", plane) * scale + main.offSet],
							[(range[1] + range[3]) / 2 * scale, mapCoordinate(range[0] + (range[2] + range[4]) / 2, "Z", plane) * scale + main.offSet, (range[1] + range[3] * 3) / 4 * scale, mapCoordinate(range[0], "Z", plane) * scale - main.offSet],
							[(range[1] + range[3] * 3) / 4 * scale, mapCoordinate(range[0], "Z", plane) * scale - main.offSet, range[3] * scale + main.offSet, mapCoordinate(range[0] + range[4], "Z", plane) * scale - main.offSet]
						];

				tmpShapePoint = [
									{x: range[1] - gridOffSet, y: range[0] + range[2]},
									{x: (range[1] * 3 + range[3]) / 4 - gridOffSet, y: range[0]},
									{x: (range[1] + range[3]) / 2 - gridOffSet, y: range[0] + (range[2] + range[4]) / 2},
									{x: (range[1] + range[3] * 3) / 4 - gridOffSet, y: range[0]},
									{x: range[3] - gridOffSet, y: range[0] + range[4]}
								];
			break;

			case "tms":
				points = [
							[range[1] * scale + main.offSet, mapCoordinate(range[0], "Z", plane) * scale - main.offSet, (range[1] * 3 + range[3]) / 4 * scale, mapCoordinate(range[0] + (range[2] * 3 + range[4]) / 4, "Z", plane) * scale + main.offSet],
							[(range[1] * 3 + range[3]) / 4 * scale, mapCoordinate(range[0] + (range[2] * 3 + range[4]) / 4, "Z", plane) * scale + main.offSet, (range[1] + range[3]) / 2 * scale, mapCoordinate(range[0], "Z", plane) * scale - main.offSet],
							[(range[1] + range[3]) / 2 * scale, mapCoordinate(range[0], "Z", plane) * scale - main.offSet, (range[1] + range[3] * 3) / 4 * scale, mapCoordinate(range[0] + (range[2] + range[4] * 3) / 4, "Z", plane) * scale + main.offSet],
							[(range[1] + range[3] * 3) / 4 * scale, mapCoordinate(range[0] + (range[2] + range[4] * 3) / 4, "Z", plane) * scale + main.offSet, range[3] * scale + main.offSet, mapCoordinate(range[0], "Z", plane) * scale - main.offSet]
						];

				tmpShapePoint = [
									{x: range[1] - gridOffSet, y: range[0]},
									{x: (range[1] * 3 + range[3]) / 4 - gridOffSet, y: range[0] + (range[2] * 3 + range[4]) / 4},
									{x: (range[1] + range[3]) / 2 - gridOffSet, y: range[0]},
									{x: (range[1] + range[3] * 3) / 4 - gridOffSet, y: range[0] + (range[2] + range[4] * 3) / 4},
									{x: range[3] - gridOffSet, y: range[0]}
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
								mode: "truss",
								memType: "pitch_brace",
								type: "pitch_brace_" + braceIndex,
								uid: memId
							}));
		var group = new fabric.Group(objs);
		group.mode = "truss";
		group.memType = "pitch_brace";
		group.type = "pitch_brace_" + braceIndex;
		group.uid = memId;
		group.lockRotation = true;
		// group.left = range[1] * scale;
		// group.top = mapCoordinate(range[0] + Math.max(range[2], range[4]), "Z", plane) * scale;
		// data.inclinedbracings[braceIndex].shapePoint = points;
		data.inclinedbracings[braceIndex].shapePoint = main.fixYPos(tmpShapePoint, plane, data.floor);
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
				start.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index - 1].Dimension;

				end.x = start.x + convertToUnit(data.length_ft, data.length_in, data.length_fr, "+");
				end.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index - 1].Dimension;

				data.shapePoint.push([start.x, parseFloat(data.floor), start.y]);
				data.shapePoint.push([start.x + convertToUnit(data.length_ft, data.length_in, data.length_fr, "+") / 2, parseFloat(data.floor), start.y + convertToUnit(data.height_ridge_ft, data.height_ridge_in, data.height_ridge_fr, "+")]);
				data.shapePoint.push([end.x, parseFloat(data.floor), end.y]);
			break;

			case "YZ":
				start.x = gridData.yaxis[data.startIndex.x_index - 1].Dimension;
				start.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index - 1].Dimension;

				end.x = start.x + convertToUnit(data.length_ft, data.length_in, data.length_fr, "+");
				end.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index - 1].Dimension;

				data.shapePoint.push([parseFloat(data.floor), start.x, start.y]);
				data.shapePoint.push([parseFloat(data.floor), start.x + convertToUnit(data.length_ft, data.length_in, data.length_fr, "+") / 2, start.y + convertToUnit(data.height_ridge_ft, data.height_ridge_in, data.height_ridge_fr, "+")]);
				data.shapePoint.push([parseFloat(data.floor), end.x, end.y]);
			break;
		}
	}

	main.drawPlane = function(data, plane)
	{
		var startX = mapCoordinate(data.bottomchord.startPoint.x, "X", "XY") * scale;
		var endX = mapCoordinate(data.bottomchord.endPoint.x, "X", "XY") * scale;
		var startY = mapCoordinate(data.bottomchord.startPoint.y, "Y", "XY") * scale;
		var endY = mapCoordinate(data.bottomchord.endPoint.y, "Y", "XY") * scale;

		var line;

		var Length = 5;
		
		if (data.bottomchord.startPoint.z != $("#depthdrpdwn").val())
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
                    memType: "pitch_bottomchord",
                    mode: "truss", 
                    uid:data.uid.replace("truss_", "")
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
                    memType: "pitch_bottomchord",
                    mode: "truss", 
                    uid:data.uid.replace("truss_", "")
                }); 
		}

		canvas.add(line);
		stopDraggingElement(line);
	}

	main.init();
}
