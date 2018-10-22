
var class_trape_Truss 	= function(parent)
{
	var main 	= this;

	main.mode 		 = "trapeTruss";
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

			main.member_truss = new trapeTrussMember();
			var trussProperties = new_configure.trapeTruss;
			Object.keys(trussProperties.memberProperties).map(function(entry)
			{
				main.member_truss.memberProperties[entry] = $("#trapezoidal #" + trussProperties.memberProperties[entry]).val();
			});

			Object.keys(trussProperties.finishProperties).map(function(entry)
			{
				if (entry != "paintType")
					main.member_truss.finishProperties[entry] = $("#trapezoidal #" + trussProperties.finishProperties[entry]).val();
				else
					main.member_truss.finishProperties[entry] = $("#trapezoidal input[name='" + trussProperties.finishProperties[entry] + "']:checked").val();
			});

			Object.keys(trussProperties.connectionProperties).map(function(entry)
			{
				main.member_truss.connectionProperties[entry] = $("#trapezoidal #" + trussProperties.connectionProperties[entry]).val();
			});

			Object.keys(trussProperties).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
					main.member_truss[entry] = $("#" + trussProperties[entry]).val();
			});

			main.member_truss["inclineNum"] = parseInt($("#pverticalnum").val());
			main.member_truss.type = "trapeTruss";

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
			if (main.member_truss.inclineNum < 1)
			{
				$("#message_area p").html("You can't draw Truss without verticals.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return false;
			}

			main.member_truss.verticals = [];
			main.member_truss.length = convertToUnit(main.member_truss.length_left_ft, main.member_truss.length_left_in, main.member_truss.length_left_fr, "+");
			main.length = main.member_truss.length;

			vertiSpacing = [[0, 0, 0, 0]];
			if (main.member_truss.verticalSpacing != "Equal")
				for (i = 0; i < main.member_truss.inclineNum; i ++)
				{
					var vertical_mem = {};
					vertical_mem.spacing_ft = $("#trachedvertical" + (i + 1) + "ft").val();
					vertical_mem.spacing_in = $("#trachedvertical" + (i + 1) + "in").val();
					vertical_mem.spacing_fr = $("#trachedvertical" + (i + 1) + "fr").val();
					vertical_mem.spacing = convertToUnit(vertical_mem.spacing_ft, vertical_mem.spacing_in, vertical_mem.spacing_fr, "+");
					vertiSpacing.push([vertical_mem.spacing, vertical_mem.spacing_ft, vertical_mem.spacing_in, vertical_mem.spacing_fr]);
				}
			else 
				for (i = 0; i < main.member_truss.inclineNum; i ++)
				{
					var vertical_mem = {};
					vertical_mem.spacing_ft = 0;
					vertical_mem.spacing_in = 0;
					vertical_mem.spacing_fr = 0;
					if (main.member_truss.ridge_pos != "Center")
						vertical_mem.spacing = main.member_truss.length / main.member_truss.inclineNum;
					else 
						vertical_mem.spacing = main.member_truss.length/ 2 / main.member_truss.inclineNum;
					vertiSpacing.push([vertical_mem.spacing, vertical_mem.spacing_ft, vertical_mem.spacing_in, vertical_mem.spacing_fr]);
				}

			main.member_truss.vert_data = vertiSpacing;

			for (i = 0; i < main.member_truss.inclineNum + 1; i ++)
			{
				vertical_mem = {};
				vertical_mem.profile = main.member_truss.verticalMemProfile;
				vertical_mem.orientation = main.member_truss.verticalMemOrientation;
				vertical_mem.materialgrade = main.member_truss.verticalMemGrade;
				if (i == 0)
				{
					vertical_mem.spacing_ft = 0;
					vertical_mem.spacing_in = 0;
					vertical_mem.spacing_fr = 0;
					vertical_mem.spacing = 0;
				}
				else 
				{
					vertical_mem.spacing_ft = vertiSpacing[i-1].spacing_ft;
					vertical_mem.spacing_in = vertiSpacing[i-1].spacing_in;
					vertical_mem.spacing_fr = vertiSpacing[i-1].spacing_fr;
					vertical_mem.spacing = vertiSpacing[i-1].spacing;
				}
				main.member_truss.verticals.push(vertical_mem);
			}

			if (main.member_truss.ridge_pos == "Center")
			{
				main.member_truss.ridge_pos_index = main.member_truss.inclineNum;
				for (i = main.member_truss.inclineNum; i > 0 ; i --)
				{
					main.member_truss.verticals.push(JSON.parse(JSON.stringify(main.member_truss.verticals[i])));
					main.member_truss.vert_data.push(main.member_truss.vert_data[i]);
				}
			}
			else 
			{
				main.member_truss.ridge_pos_index = parseInt(main.member_truss.ridge_pos_str);
			}
			

			main.member_truss.lacingPattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
			if (main.member_truss.lacingPattern == undefined)
			{
				$("#message_area p").html("You can't draw Trapezoidal Truss without brace shape.");
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
				
				// if (i >= parseInt((main.member_truss.verticals.length - 1) / 2))
				if (main.member_truss.verticals.length % 2 == 1 && i >= (main.member_truss.verticals.length + 1) / 2 - 1 && main.member_truss.ridge_pos == "Center")
					brace_mem.pattern = reverseBraceShape(main.member_truss.lacingPattern);
				else 
					brace_mem.pattern = main.member_truss.lacingPattern;
				main.member_truss.inclinedbracings.push(brace_mem);
			}

			main.member_truss.floor = $("#depthdrpdwn").val();
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
		}

		data.left_index = x_index;
		data.top_index = y_index;
	}

	main.draw = function(data, type, color, x_pos, y_pos, plane)
	{
		data.length = convertToUnit(data.length_left_ft, data.length_left_in, data.length_left_fr, "+");
		main.length = data.length;
		
		if(!color)
			color = "#18f4e6";

		y_pos = gridData.zaxis.length - y_pos - 1;

		var objs  	= [];
		var l_width = 3;
		var start_x, start_y, middle_x, start_back_x;

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
			start_back_x = gridData.yaxis[x_pos - 1].Dimension
			start_y = gridData.zaxis[y_pos].Dimension;
		}

		var total_length = 0;
		middle_x = 0;
		// for ( var i = 0; i < parseInt((data.verticals.length + 1) / 2); i ++ )
			// middle_x += data.vert_data[i][0];
		middle_x = convertToUnit(data.ridge_pos_ft, data.ridge_pos_in, data.ridge_pos_fr, "+");

		if (data.ridge_pos == "Center")
		{
			middle_x = data.length / 2;
		}
		middle_x += start_x;

		for ( i = 0; i < data.vert_data.length; i ++ )
			total_length += data.vert_data[i][0];

		var middle_length = 0;
		for (i = 0; i <= data.ridge_pos_index; i ++ )
			middle_length += data.vert_data[i][0];
		console.log(middle_x);
		console.log(middle_length);
		console.log(start_x);
		console.log(data.vert_data);

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

		data.center_height = convertToUnit(data.height_ridge_ft, data.height_ridge_in, data.height_ridge_fr, "+");
		main.drawTopChord(data, start_x, start_y, middle_x, data.center_height, plane);

		data.bottomchord.profile = data.bottomChordProfile;
		data.bottomchord.orientation = data.bottomChordOrientation;
		data.bottomchord.materialgrade = data.bottomChordGrade;

		main.drawBottomChord(data, start_x, start_y, plane, start_back_x);

		main.verticals(data, start_x, start_y, middle_x, plane, data.vert_data.length);
		data.plane = plane;
		data.uid = "trapeTruss_" + (memId);
		// memberList.push(data);
		dataModel.insertData(data); //trapeTruss
		memId++;
		return true;
	}

	main.drawTopChord = function(data, start_x, start_y, middle_x, height, plane)
	{
		data.left_height = convertToUnit(data.height_left_ft, data.height_left_in, data.height_left_fr, "+");
		data.right_height = convertToUnit(data.height_right_ft, data.height_right_in, data.height_right_fr, "+");

		var points = [
					{x: start_x * scale, y: mapCoordinate(start_y + data.left_height, "Z", plane) * scale - main.offSet},
					{x: middle_x * scale, y: mapCoordinate(start_y + height, "Z", plane) * scale},
					{x: (start_x + data.length) * scale, y: mapCoordinate(start_y + data.right_height, "Z", plane) * scale - main.offSet}
				];

		var topChord = new fabric.Polyline(points,
							{
								fill: "transparent",
								stroke: "#18f4e6",
								hasControls: false,
								strokeWidth: main.strokeWidth,
								hasRotatingPoint: false,
								lockRotation: true,
								mode: "trapeTruss",
								memType: "trape_topchord",
								uid: memId
							});
		console.log(topChord);
		if (plane == "YZ")
		{
			data.topchord.startPoint = {x: data.floor, y: data.start_back_x, z: start_y + data.left_height};
			data.topchord.endPoint = {x: data.floor, y: (data.start_back_x + main.length), z: start_y + data.right_height};
			data.topchord.middlePoint = {x: data.floor, y: middle_x, z: start_y + height}
		}
		else 
		{
			data.topchord.startPoint = {x: start_x - gridOffSet, y: data.floor, z: start_y + data.left_height};
			data.topchord.endPoint = {x: (start_x - gridOffSet + main.length), y: data.floor, z: start_y + data.right_height};
			data.topchord.middlePoint = {x: middle_x - gridOffSet, y: data.floor, z: start_y + height}
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
								mode: "trapeTruss",
								memType: "trape_bottomchord",
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
			if ( i <= data.ridge_pos_index - 1)
			{
				h = distanceData[i] / (middle_x - start_x) * (data.center_height - data.left_height);
				next_h = distanceData[i + 1] / (middle_x - start_x) * (data.center_height - data.left_height);

				h += data.left_height;
				next_h += data.left_height;
			}
			else 
			{
				h = (main.length - distanceData[i]) / (start_x + main.length - middle_x) * (data.center_height - data.right_height);
				h += data.right_height;
				if ( i < number - 1)
				{
					next_h = (main.length - distanceData[i+1]) / (start_x + main.length - middle_x) * (data.center_height - data.right_height);
					next_h += data.right_height;
				}
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
						memType: "trape_vertical",
						type: "trape_vertical_" + i,
						mode: "trapeTruss",
						uid: memId
					});

			if (plane == "YZ")
			{
				data.verticals[i].startPoint = {x: data.floor, y: (data.start_back_x + distanceData[i]), z: start_y};
				data.verticals[i].endPoint = {x: data.floor, y: (data.start_back_x + distanceData[i]), z: start_y + h};
			}

			else 
			{
				data.verticals[i].startPoint = {x: data.start_back_x + distanceData[i], y: data.floor, z: start_y};
				data.verticals[i].endPoint = {x: data.start_back_x + distanceData[i], y: data.floor, z: start_y + h};
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
								mode: "trapeTruss",
								memType: "trape_brace",
								type: "trape_brace_" + braceIndex,
								uid: memId
							}));
		var group = new fabric.Group(objs);
		group.mode = "trapeTruss";
		group.memType = "trape_brace";
		group.type = "trape_brace_" + braceIndex;
		group.uid = memId;
		group.lockRotation = true;
		// group.left = range[1] * scale;
		// group.top = mapCoordinate(range[0] + Math.max(range[2], range[4]), "Z", plane) * scale;
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

				end.x = start.x + parseFloat(data.length_left_ft);
				end.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index - 1].Dimension + parseFloat(data.height_right_ft);

				data.shapePoint.push([start.x, parseFloat(data.floor), start.y]);
				data.shapePoint.push([start.x, parseFloat(data.floor), start.y + parseFloat(data.height_left_ft)]);
				data.shapePoint.push([start.x + parseFloat(data.length_left_ft) / 2, parseFloat(data.floor), start.y + parseFloat(data.height_ridge_ft)]);
				data.shapePoint.push([end.x, parseFloat(data.floor), end.y]);
				data.shapePoint.push([end.x, parseFloat(data.floor), start.y]);

			break;

			case "YZ":
				start.x = gridData.yaxis[data.startIndex.x_index - 1].Dimension;
				start.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index - 1].Dimension;

				end.x = start.x + parseFloat(data.length_left_ft);
				end.y = gridData.zaxis[gridData.zaxis.length - data.startIndex.y_index - 1].Dimension + parseFloat(data.height_right_ft);

				data.shapePoint.push([parseFloat(data.floor), start.x, start.y]);
				data.shapePoint.push([parseFloat(data.floor), start.x, start.y + parseFloat(data.height_left_ft)]);
				data.shapePoint.push([parseFloat(data.floor), start.x + parseFloat(data.length_left_ft) / 2, start.y + parseFloat(data.height_ridge_ft)]);
				data.shapePoint.push([parseFloat(data.floor), end.x, end.y]);
				data.shapePoint.push([parseFloat(data.floor), end.x, start.y]);
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
