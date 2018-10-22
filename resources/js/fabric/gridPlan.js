var class_grid_Plan 	= function(parent)
{
	var main 			= this;

	main.mode 			= "grid_plan";
	main.parent 		= parent;

	main.isDrawReady 	= 0;
	main.insertReady	= 0;

	// main.unique_id 		= 0;

	main.grid_w 		= 0;
	main.grid_h			= 0;
	main.distance		= 0;
	main.label 			= "";
	main.distance 	 	= 0;
	main.distance_ft 	= 0;
	main.distance_in 	= 0;
	main.distance_fr 	= 0;

	main.axis 	 		= "";

	main.init 			= function()
	{
		main.initEvent();
	}

	main.initEvent 		= function()
	{
		
	}

	main.drawShape 		= function(color, index, label, moveFLag, negative)
	{
		var distance = convertToUnit(main.distance_ft, main.distance_in, main.distance_fr, negative);
		if (main.axis == "x")
		{
			var x_index = index + 1;
			if (!moveFLag && x_index != gridData.xaxis.length)
			{
				if (distance > gridData.xaxis[x_index].Dimension - gridData.xaxis[x_index - 1].Dimension)
				{
					$("#message_area p").html("You can't insert grid as the dimension entered is incorrect.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 3000);
					return;
				}
			}
			undoAction.addAction("edit&member");
			if (distance > 0)
			{
				gridData.xaxis.splice(x_index, 0, {Label: label, Dimension: parseFloat(gridData.xaxis[x_index - 1].Dimension) + distance});
			}
			else if (distance < 0 && x_index > 0)
			{
				gridData.xaxis.splice(x_index - 1, 0, {Label: label, Dimension: parseFloat(gridData.xaxis[x_index - 1].Dimension) + distance});
				distance = gridData.xaxis[x_index].Dimension - gridData.xaxis[x_index - 1].Dimension + distance;
			}
			else if (distance < 0 && x_index == 0)
			{
				gridData.xaxis.splice(0, 0, {Label: label, Dimension: parseFloat(gridData.xaxis[x_index - 1].Dimension) + distance});
				x_index = 0;
				distance = gridData.xaxis[1].Dimension - gridData.xaxis[0] + distance;
			}

			if (moveFLag)
				for ( var i = x_index + 1; i < gridData.xaxis.length; i ++ )
				{
					gridData.xaxis[i].Dimension += distance;
				}

			for ( var i = 0 ; i < memberList.length; i ++ )
			{
				if (memberList[i].memberProperties.startPoint.x && memberList[i].memberProperties.startPoint.x > gridData.xaxis[x_index].Dimension)
				{
					if (moveFLag) 
					{
						memberList[i].memberProperties.startPoint.x += distance;
						memberList[i].memberProperties.endPoint.x += distance;
						if (memberList[i].originPoint != undefined)
							memberList[i].originPoint = undefined;
						if (memberList[i].origin != undefined)
							memberList[i].origin = undefined;
					}
				}

				if (memberList[i].memberProperties.startPoint.x && memberList[i].memberProperties.startPoint.x < gridData.xaxis[x_index].Dimension && memberList[i].memberProperties.startPoint.x >= gridData.xaxis[x_index - 1].Dimension)
				{
					if (memberList[i].memberProperties.endPoint.x != memberList[i].memberProperties.startPoint.x && moveFLag)
					{
						memberList[i].memberProperties.endPoint.x = memberList[i].memberProperties.startPoint.x + distance;
						if (memberList[i].originPoint != undefined)
							memberList[i].originPoint = undefined;
						if (memberList[i].origin != undefined)
							memberList[i].origin = undefined;
					}
				}

				if (memberList[i].x_depth && gridData.xaxis[x_index + 1] && memberList[i].x_depth > gridData.xaxis[x_index + 1].Dimension)
				{
					if (moveFLag)
					{
						memberList[i].x_depth += distance;
						if (memberList[i].originPoint != undefined)
							memberList[i].originPoint = undefined;
						if (memberList[i].origin != undefined)
							memberList[i].origin = undefined;
					}
				}
			}

			updateMemberList(x_index, "x");
			main.updateLabel(x_index, gridData.xaxis);
			reloadGrid();
		}

		else if (main.axis == "y")
		{
			console.log(distance);
			// var y_index = getGridIndex(y/scale, "Y", "XY");
			var yLength = gridData.yaxis.length;
			var y_index = yLength - index - 1;

			if (!moveFLag && y_index != 0)
			{
				if (distance > gridData.yaxis[yLength - y_index].Dimension - gridData.yaxis[yLength - y_index - 1].Dimension)
				{
					$("#message_area p").html("You can't insert grid as the dimension entered is incorrect.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 3000);
					return;
				}
			}

			undoAction.addAction("edit&member");
			if (distance > 0) 
			{
				gridData.yaxis.splice(yLength - y_index, 0, {Label: label, Dimension: parseFloat(gridData.yaxis[yLength - 1 - y_index].Dimension) + distance});
			}
			else if (distance < 0 && yLength - y_index > 0)
			{
				gridData.yaxis.splice(yLength - y_index - 1, 0, {Label: label, Dimension: parseFloat(gridData.yaxis[yLength - 1 - y_index].Dimension) + distance});
				distance = gridData.yaxis[yLength - y_index].Dimension - gridData.yaxis[yLength - y_index - 1].Dimension + distance;
			}
			else 
				gridData.yaxis.splice(yLength - y_index, 0, {Label: label, Dimension: parseFloat(gridData.yaxis[yLength - 1 - y_index].Dimension) + distance});

			if (moveFLag)
				for ( i = yLength; i > yLength - y_index; i-- )
				{
					gridData.yaxis[i].Dimension += distance;
				}

			y_index = yLength - y_index;

			for ( i = 0; i < memberList.length; i ++ )
			{
				if (memberList[i].memberProperties.startPoint.y && memberList[i].memberProperties.startPoint.y > gridData.yaxis[y_index - 1].Dimension)
				{
					if (moveFLag)
					{
						memberList[i].memberProperties.startPoint.y += distance;
						memberList[i].memberProperties.endPoint.y += distance;
						if (memberList[i].originPoint != undefined)
							memberList[i].originPoint = undefined;
						if (memberList[i].origin != undefined)
							memberList[i].origin = undefined;
					}
				}

				if (memberList[i].memberProperties.startPoint.y && memberList[i].memberProperties.startPoint.y < gridData.yaxis[y_index].Dimension && memberList[i].memberProperties.startPoint.y >= gridData.yaxis[y_index - 1].Dimension)
				{
					if (memberList[i].memberProperties.endPoint.y != memberList[i].memberProperties.startPoint.y && moveFLag )
					{
						memberList[i].memberProperties.endPoint.y = memberList[i].memberProperties.startPoint.y + distance;
						if (memberList[i].originPoint != undefined)
							memberList[i].originPoint = undefined;
						if (memberList[i].origin != undefined)
							memberList[i].origin = undefined;
					}
				}

				if (memberList[i].y_depth && gridData.yaxis[y_index + 1] && memberList[i].y_depth > gridData.yaxis[y_index - 1].Dimension)
				{
					if (moveFLag)
					{
						memberList[i].y_depth += distance;
						if (memberList[i].originPoint != undefined)
							memberList[i].originPoint = undefined;
						if (memberList[i].origin != undefined)
							memberList[i].origin = undefined;
					}
				}
			}
			updateMemberList(index, "Y");
			main.updateLabel(y_index, gridData.yaxis);
			reloadGrid();
		}
	}

	main.drawMove 		= function(color, index, label, negative)
	{
		distance = convertToUnit(main.distance_ft, main.distance_in, main.distance_fr, "+");
		if (main.axis == "x")
		{
			// var x_index = getGridIndex(x/scale, "X", "XY");
			var x_index = index;
			console.log(negative);
			if (negative == "+") 
			{
				if (distance > (gridData.xaxis[x_index + 1].Dimension - gridData.xaxis[x_index].Dimension
					))
				{
					$("#message_area p").html("You can't move grid as the dimension entered is incorrect.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 3000);
					return;
				}
			}

			else 
			{
				if (distance > (gridData.xaxis[x_index].Dimension - gridData.xaxis[x_index - 1].Dimension))
				{
					$("#message_area p").html("You can't move grid as the dimension entered is incorrect.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 3000);
					return;
				}
				else 
				{
					distance = -1 * distance;
				}
			}
			undoAction.addAction("edit&member");

			var origin_pos = gridData.xaxis[index].Dimension;

			gridData.xaxis[index].Dimension += distance;

			main.updateLabel(index, gridData.xaxis);

			for ( var i = 0 ; i < memberList.length; i ++ )
			{
				if (memberList[i].memberProperties.startPoint.x == origin_pos) 
				{
					memberList[i].memberProperties.startPoint.x = gridData.xaxis[index].Dimension;
					if (memberList[i].originPoint != undefined)
						memberList[i].originPoint = undefined;
					if (memberList[i].origin != undefined)
							memberList[i].origin = undefined;
				}

				if (memberList[i].memberProperties.endPoint.x == origin_pos)
				{
					memberList[i].memberProperties.endPoint.x = gridData.xaxis[index].Dimension;
					if (memberList[i].originPoint != undefined)
						memberList[i].originPoint = undefined;
					if (memberList[i].origin != undefined)
							memberList[i].origin = undefined;
				}
				if (memberList[i].x_depth && memberList[i].x_depth == origin_pos)
				{
					memberList[i].x_depth = gridData.xaxis[index].Dimension;
				}
			}

			updateMemberList(x_index, "x");
			reloadGrid();
		}

		else 
		{
			var yLength = gridData.yaxis.length;
			var y_index = index;

			if (negative == "+") 
			{
				if (distance > (gridData.yaxis[y_index + 1].Dimension - gridData.yaxis[y_index].Dimension
					))
				{
					$("#message_area p").html("You can't move grid as the dimension entered is incorrect.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 3000);
					return;
				}
			}

			else 
			{
				if (distance > (gridData.yaxis[y_index].Dimension - gridData.yaxis[y_index - 1].Dimension))
				{
					$("#message_area p").html("You can't move grid as the dimension entered is incorrect.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 3000);
					return;
				}
				else 
				{
					distance = -1 * distance;
				}
			}
			undoAction.addAction("edit&member");

			var origin_pos = gridData.yaxis[y_index].Dimension;
			
			gridData.yaxis[y_index].Dimension += distance;

			main.updateLabel(y_index, gridData.yaxis);

			// y_index = yLength - 1 - y_index;
			for ( var i = 0 ; i < memberList.length; i ++ )
			{
				if (memberList[i].memberProperties.startPoint.y == origin_pos)
				{
					memberList[i].memberProperties.startPoint.y = gridData.yaxis[y_index].Dimension;
					if (memberList[i].originPoint != undefined)
						memberList[i].originPoint = undefined;
					if (memberList[i].origin != undefined)
						memberList[i].origin = undefined;
				}
				if (memberList[i].memberProperties.endPoint.y == origin_pos)
				{
					memberList[i].memberProperties.endPoint.y = gridData.yaxis[y_index].Dimension;
					if (memberList[i].originPoint != undefined)
						memberList[i].originPoint = undefined;
					if (memberList[i].origin != undefined)
						memberList[i].origin = undefined;
				}
				if (memberList[i].y_depth && memberList[i].y_depth == origin_pos)
				{
					memberList[i].y_depth = gridData.yaxis[y_index].Dimension;
				}
			}

			// updateMemberList(y_index, "y");
			reloadGrid();

		}
	}

	main.remove = function(direction, index)
	{
		undoAction.addAction("edit&member");
		if (direction == "vert")
		{
			for ( i = memberList.length - 1; i >= 0; i -- )
			{
				if (memberList[i].memberProperties.startPoint.x == gridData.xaxis[index].Dimension)
				{
					// memberList.splice(i, 1);
					dataModel.removeData(i, 1);
				}
				else if (memberList[i].x_depth && memberList[i].x_depth == gridData.xaxis[index].Dimension)
				{
					if (memberList[i].memberProperties.startPoint.x != memberList[i].memberProperties.endPoint.x && memberList[i].memberProperties.endPoint.x == memberList[i].memberProperties.startPoint.x + (gridData.xaxis[index + 1].Dimension - gridData.xaxis[index
						].Dimension))
					{
						// memberList.splice(i, 1);
						dataModel.removeData(i, 1);
					}
				}
				else if (memberList[i].startIndex && memberList[i].startIndex.x_index == index && memberList.type != 'h_brace')
				{
					// memberList.splice(i, 1);
					dataModel.removeData(i, 1);
				}
				else if (memberList[i].startIndex && memberList[i].startIndex.x_index == index)
				{
					if (memberList[i].type == 'h_brace')
					{
						// memberList.splice(i, 1);
						dataModel.removeData(i, 1);
					}
				}
				else if (memberList[i].x_depth == gridData.xaxis[index].Dimension)
				{
					if (memberList[i].memberProperties.startPoint.x == memberList[i].memberProperties.endPoint.x)
					{
						// memberList.splice(i, 1);
						dataModel.removeData(i, 1);
					}
				}
			}
			
			for ( i = memberList.length - 1; i >= 0; i -- )
			{
				if (memberList[i].memberProperties.startPoint.x == gridData.xaxis[index].Dimension && memberList[i].type != 'h_brace')
				{
					memberList[i].memberProperties.startPoint.x = gridData.xaxis[index - 1].Dimension;
				}
				if (memberList[i].x_depth && memberList[i].x_depth == gridData.xaxis[index].Dimension)
				{
					memberList[i].x_depth = gridData.xaxis[index - 1].Dimension;
				}
				if (memberList[i].startIndex && memberList[i].startIndex.x_index >= (index))
				{
					if (memberList[i].type == 'h_brace')
					{
						memberList[i].startIndex.x_index -= 1;
					}
				}
			}
			gridData.xaxis.splice(index, 1);
			main.updateLabel(index, gridData.xaxis);
			reloadGrid();
		}

		else if (direction == "hori")
		{
			var yLength = gridData.yaxis.length;
			var orgIndex = index;
			index = yLength - index - 1;
			console.log(gridData.yaxis[orgIndex].Dimension);
			for ( i = memberList.length - 1; i >= 0; i -- )
			{
				if (memberList[i].memberProperties.startPoint.y == gridData.yaxis[orgIndex].Dimension)
				{
					// memberList.splice(i, 1);
					dataModel.removeData(i, 1);
				}
				else if (memberList[i].y_depth && memberList[i].y_depth == gridData.yaxis[orgIndex].Dimension)
				{
					if (memberList[i].memberProperties.startPoint.y != memberList[i].memberProperties.endPoint.y && memberList[i].memberProperties.endPoint.y == memberList[i].memberProperties.startPoint.y + (gridData.yaxis[orgIndex + 1].Dimension - gridData.yaxis[orgIndex].Dimension))
					{
						// memberList.splice(i, 1);
						dataModel.removeData(i, 1);
					}
				}
				else if (memberList[i].startIndex && memberList[i].startIndex.y_index == orgIndex)
				{
					if (memberList[i].type == 'h_brace')
					{
						// memberList.splice(i, 1);
						dataModel.removeData(i, 1);
					}
				}
				else if (memberList[i].y_depth && memberList[i].y_depth == gridData.yaxis[orgIndex].Dimension)
				{
					if (memberList[i].memberProperties.startPoint.y == memberList[i].memberProperties.endPoint.y)
					{
						// memberList.splice(i, 1);
						dataModel.removeData(i, 1);
					}
				}
			}

			for ( i = memberList.length - 1; i >= 0; i -- )
			{
				if (memberList[i].memberProperties.endPoint.y == gridData.yaxis[orgIndex + 1].Dimension)
				{
					if (memberList[i].memberProperties.startPoint.y != memberList[i].memberProperties.endPoint.y)
						memberList[i].memberProperties.startPoint.y = gridData.yaxis[orgIndex - 1].Dimension;
				}
				if (memberList[i].y_depth && memberList[i].y_depth == gridData.yaxis[index].Dimension)
				{
					
				}
				if (memberList[i].startIndex && memberList[i].startIndex.y_index >= (yLength - index - 1))
				{
					if (memberList[i].type == 'h_brace')
					{
						memberList[i].startIndex.y_index -= 1;
					}
				}
			}
			gridData.yaxis.splice(orgIndex, 1);
			main.updateLabel(orgIndex, gridData.yaxis)
			reloadGrid();
		}
	}

	main.updateLabel = function(index, data)
	{
		for (i = 1; i < data.length; i ++)
		{
			var dimension_str = reverseLabelFromUnit(data[i].Dimension);

			data[i].dimension_ft = dimension_str.ft;
			data[i].dimension_in = dimension_str.in;
			data[i].dimension_fra = dimension_str.fr;

			var g_dimension_str = reverseLabelFromUnit(data[i].Dimension - data[i - 1].Dimension);
			data[i].g_dimension_ft = g_dimension_str.ft;
			data[i].g_dimension_in = g_dimension_str.in;
			data[i].g_dimension_fra = g_dimension_str.fr;
		}
	}

	main.init();
}