var class_grid_Elev 	= function(parent)
{
	var main 			= this;

	main.mode 			= "grid_Elev";
	main.parent 		= parent;

	main.isDrawReady 	= 0;
	main.insertReady	= 0;

	main.unique_id 		= 0;

	main.grid_w 		= 0;
	main.grid_h			= 0;
	main.distance		= 0;
	main.label 			= "";

	main.distance 		= 0;
	main.floor 			= 0;

	main.axis 	 		= "";

	main.index 			= 0;
	main.move 			= false;

	main.negative 		= "";

	main.distance_ft 	= "";
	main.distance_in 	= "";
	main.distance_fr 	= "";

	main.init 			= function()
	{
		// main.grid_w 	= main.parent.grid_w;
		// main.grid_h		= main.parent.grid_h;
		// main.axisType 	= main.parent.axisType;

		main.initEvent();
	}

	main.initEvent 		= function()
	{
		// canvas.on("mouse:down", function(evt)
		// {
		// 	if (!main.isDrawReady)
		// 		return;

		// 	if ($("#viewdrpdwn").val() == 1)
		// 	{
		// 		main.isDrawReady = 0;
		// 		return;
		// 	}

		// 	main.floor = $("#gridFloor").val();
		// 	main.label = $("#axisLabel").val();

		// 	for ( var i = 0; i < gridData.zaxis.length; i ++ )
		// 	{
		// 		if (main.floor == gridData.zaxis[i].Dimension)
		// 		{
		// 			main.index = i;
		// 			break;
		// 		}
		// 	}

		// 	if (main.isDrawReady && main.insertReady)
		// 		main.drawShape(color, main.index, main.distance, main.label);
		// 	else if (main.isDrawReady && !main.insertReady)
		// 		main.drawMove(color, main.index, main.distance);

		// });
	}

	main.drawShape = function(color, index, distance, label, moveFlag, negative)
	{
		var origin = gridData.zaxis[index].Dimension;
		if (distance > 0)
			gridData.zaxis.splice(index + 1, 0, {Label: label, Dimension: gridData.zaxis[index].Dimension + distance});
		else if (distance < 0 && index > 0)
		{
			gridData.zaxis.splice(index, 0, {Label: label, Dimension: gridData.zaxis[index].Dimension + distance});
			distance = gridData.zaxis[index].Dimension - gridData.zaxis[index - 1].Dimension + distance;
			index -= 1;
		}
		else if (distance < 0 && index == 0)
		{
			gridData.zaxis.splice(0, 0, {Label: label, Dimension: gridData.zaxis[index].Dimension + distance});
			
		}

		undoAction.addAction("edit&member");
		if (moveFlag)
			for ( var i = index + 2; i < gridData.zaxis.length; i ++ )
			{
				gridData.zaxis[i].Dimension += distance;
			}

		for ( var i = 0; i < memberList.length; i ++ )
		{
			if (memberList[i].floor && memberList[i].floor > origin && moveFlag)
			{
				memberList[i].floor += distance;
			}
			if (memberList[i].elevEnabled)
			{
				if (memberList[i].startIndex && memberList[i].startIndex.y_index > gridData.zaxis.length - index)
				{
					memberList[i].startIndex.y_index += 1;
				}
			}
			if (memberList[i].startIndex && memberList[i].startIndex.z_index > index)
			{
				memberList[i].startIndex.z_index += 1;
			}
		}
		main.updateLabel(gridData.zaxis);

		reloadGrid();
	}

	main.drawMove = function(color, index, distance, negative)
	{
		if (negative == "+")
		{
			if (distance > gridData.zaxis[index + 1].Dimension - gridData.zaxis[index].Dimension)
			{
				$("#message_area p").html("You can't move floor as the dimension entered is incorrect.");
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
			if (distance > gridData.zaxis[index].Dimension - gridData.zaxis[index - 1].Dimension)
			{
				$("#message_area p").html("You can't move floor as the dimension entered is incorrect.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}
			else
				distance = distance * (-1);
		}

		undoAction.addAction("edit&member");
		var origin = gridData.zaxis[index].Dimension;
		gridData.zaxis[index].Dimension += distance;
		for ( var i = 0; i < memberList.length; i ++ )
		{
			if (memberList[i].floor == origin)
				memberList[i].floor += distance;

			if (memberList[i].memberProperties.startPoint.z == origin)
				memberList[i].memberProperties.startPoint.z += distance;

			if (memberList[i].memberProperties.endPoint.z == origin)
				memberList[i].memberProperties.endPoint.z += distance;
		}
		main.updateLabel(gridData.zaxis);
		reloadGrid();
	}

	main.remove = function(type, index)
	{
		var z_length = gridData.zaxis.length;
		if (type == "vert")
		{
			$("#message_area p").html("You can't remove vertical line on Elevation View.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return;
		}

		for ( var i = memberList.length - 1; i >= 0; i -- )
		{
			if (memberList[i].floor && memberList[i].floor == gridData.zaxis[index].Dimension)
			{
				// memberList.splice(i, 1);
				dataModel.removeData(i, 1);
			}
			else if (memberList[i].elevEnabled)
			{
				if (memberList[i].startIndex && memberList[i].startIndex.y_index == index){
					// memberList.splice(i, 1);
					dataModel.removeData(i, 1);
				}
			}
		}

		// for ( var i = gridData.zaxis.length - 1; i >= index + 1; i -- )
		// {
		// 	gridData.zaxis[i].Label = gridData.zaxis[i - 1].Label;
		// 	gridData.zaxis[i].Dimension = gridData.zaxis[i - 1].Dimension;
		// }

		gridData.zaxis.splice(index, 1);


		for ( var i = memberList.length - 1; i >= 0; i -- )
		{
			if (memberList[i].elevEnabled)
			{
				if (memberList[i].startIndex && memberList[i].startIndex.y_index > index)
					memberList[i].startIndex.y_index -= 1;
			}
		}
		main.updateLabel(gridData.zaxis);

		reloadGrid();
	}

	main.updateLabel = function(data)
	{
		for (i = 1; i < data.length; i ++)
		{
			var dimension_str = reverseLabelFromUnit(data[i].Dimension);

			data[i].dimension_ft_tos = dimension_str.ft;
			data[i].dimension_in_tos = dimension_str.in;
			data[i].dimension_fra_tos = dimension_str.fr;

			var g_dimension_str = reverseLabelFromUnit(data[i].Dimension - data[i - 1].Dimension);

			data[i].g_dimension_ft_tos = g_dimension_str.ft;
			data[i].g_dimension_in_tos = g_dimension_str.in;
			data[i].g_dimension_fra_tos = g_dimension_str.fr;
		}
	}

	main.init();
}