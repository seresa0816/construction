var class_shape = function()
{
	var main = this;

	main.init 	= function()
	{
		main.grid_w  = gridData.xaxis[1]["Dimension"] * scale;
		main.grid_h  = gridData.yaxis[1]["Dimension"] * scale;

		main.initEvent();
	}

	main.initEvent = function()
	{
		canvas.on("selection:created", function()
		{
			var sel_obj = canvas.getActiveObject();
			// main.shapeDisabled();

			main.prev_x = sel_obj.left;
			main.prev_y = sel_obj.top;
			if (sel_obj.mode == "truss")
			{
				sel_obj.set({lockMovementX: true, lockMovementY: true})
			}
		});

		var timer = null;

		canvas.on("mouse:wheel", function(evt) 
		{
			if (timer !== null)
				clearTimeout(timer);

			var delta = evt.e.deltaY;
			var pointer = canvas.getPointer(evt.e);
			var zoom = canvas.getZoom();
			var zoom_point = {x: evt.e.offsetX, y: evt.e.offsetY};
			timer = setTimeout(function(evt)
			{
				if (delta > 0)
					zoom = zoom / zoom_multiplier;
				else
					zoom = zoom * zoom_multiplier;
				canvas.zoomToPoint(zoom_point, zoom);
				refreshGrid();
				// reSelect();
				// reloadGrid();
				// deselect();
			}, 70);
			evt.e.preventDefault();
			evt.e.stopPropagation();
		}, false);

		canvas.on("mouse:down", function(evt)
		{
			var sel_obj = canvas.getActiveObject();
			if (sel_obj && sel_obj._objects && sel_obj._objects.length > 1)
				sel_obj.set({lockMovementX: true, lockMovementY: true});
		});

		canvas.on("object:moving", function()
		{
			main.shapeDisabled();
			var sel_obj = canvas.getActiveObject();
			if (!sel_obj)
				return;

			main.addSnap(sel_obj, sel_obj.mode);

			if(main.chkPosAvailable(sel_obj, sel_obj.mode))
			{
				main.prev_x = sel_obj.left;
				main.prev_y = sel_obj.top;
			}
			else
			{
				sel_obj.left = main.prev_x;
				sel_obj.top  = main.prev_y;
			}
			canvas.renderAll();
		});
	}

	main.shapeDisabled = function()
	{
		hbrace.isDrawReady 		= 0;
		vbrace.isDrawReady 		= 0;
		truss.isDrawReady 		= 0;
		pgirder.isDrawReady 	= 0;
		bplates.isDrawReady 	= 0;
		gridPlan.isDrawReady 	= 0;
		postColumn.isDrawReady 	= 0;
		paraTruss.isDrawReady 	= 0;
		trapeTruss.isDrawReady 	= 0;
		cantilBeam.isDrawReady 	= 0;
		boxColumn.isDrawReady 	= 0;
		iboxColumn.isDrawReady 	= 0;
		defaultBeam.isDrawReady = 0;
		iiboxColumn.isDrawReady 	= 0;
		iiiboxColumn.isDrawReady 	= 0;
		defaultBeam.isDrawReady = 0;
		infillBeam.isDrawReady = 0;
		defaultColumn.isDrawReady = 0;
	}

	main.addSnapPosition = function(obj)
	{
		var left = obj.left - gridOffSet * scale - pan_l;
		var top  = obj.top  - gridOffSet * scale - pan_r;
		var x_index, y_index;

		left = (obj.left - gridOffSet * scale * canvas.getZoom() - pan_l) / canvas.getZoom();
		top  = (obj.top - gridOffSet * scale * canvas.getZoom()- pan_r) / canvas.getZoom();

		switch ($("#viewdrpdwn").val())
		{
			case "1":
				x_index = getGridIndex(left/scale, "X", "XY");
				y_index = getGridIndex(top/scale, "Y", "XY");
				if (x_index > gridData.xaxis.length || x_index < 1)
					return;
				main.addSnapByIndex(obj, x_index, y_index, "XY");
			break;

			case "2":
				x_index = getGridIndex(left/scale, "X", "XY");
				y_index = getGridIndex(top/scale, "Z", "XZ");
				main.addSnapByIndex(obj, x_index, y_index, "XZ");
			break;

			case "3":
				x_index = getGridIndex(left/scale, "Y", "YZ");
				y_index = getGridIndex(top/scale, "Z", "YZ");
				main.addSnapByIndex(obj, x_index, y_index, "YZ");
			break;
		}
	}

	main.addSnapColumnPosition = function(origin, obj)
	{
		var left = obj.left / scale - gridOffSet;
		var top = obj.top / scale - gridOffSet;
		
		x_index = nearestGrid("X", left);
		y_index = nearestGrid("Y", top);

		obj.left = mapCoordinate(gridData.xaxis[x_index].Dimension, "X", "XY") * scale;
		obj.top = mapCoordinate(gridData.yaxis[y_index].Dimension, "Y", "XY") * scale;
		obj.originX = "center";
        obj.originY = "center";
        obj.defaultX = obj.left;
        obj.defaultY = obj.top;

		var matchedMember = getMemberMatchedObj(origin);
		var newMember;
		newMember = JSON.parse(JSON.stringify(matchedMember));
		
		newMember.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
		newMember.memberProperties.endPoint.x = gridData.xaxis[x_index].Dimension;
		newMember.memberProperties.startPoint.y = gridData.yaxis[y_index].Dimension;
		newMember.memberProperties.endPoint.y = gridData.yaxis[y_index].Dimension;
		newMember.x_depth = gridData.xaxis[x_index].Dimension;
		newMember.y_depth = gridData.yaxis[y_index].Dimension;
		newMember.originPoint = undefined;

		obj.id="Mem"+memId++;
		obj.uid = obj.id;
		obj.mode = origin.mode;
		newMember.uid = origin.mode + "_" + obj.id;
		newMember.id = obj.id;
		if (main.chkPosAvailable(obj, obj.mode))
		{
			memberList.push(newMember);
			canvas.add(obj);
			canvas.renderAll();
		}
	}

	main.addSnap = function(origin, obj, mode)
	{
		var left = obj.left - gridOffSet * scale - pan_l;
		var top  = obj.top  - gridOffSet * scale - pan_r;
		var x_index, y_index;
		
		left = obj.left / scale - gridOffSet;
		top  = obj.top / scale - gridOffSet;
		var click_pos = {x: left, y: top};

		var horiBeam = getNearestBeam(click_pos, "Y", floor);
		var vertBeam = getNearestBeam(click_pos, "X", floor);

		if (horiBeam == -1)
			return;
		if (vertBeam == -1)
			return;

		var matchedMember = getMemberMatchedObj(origin);
		var newMember = JSON.parse(JSON.stringify(matchedMember));

		for (var i = 0 ; i < memberList.length; i ++)
		{
			if (memberList[i].uid == horiBeam.first.mode + "_" + horiBeam.first.uid)
				newMember.bottom_uid = horiBeam.first.mode + "_" + horiBeam.first.uid;
			if (memberList[i].uid == horiBeam.second.mode + "_" + horiBeam.second.uid)
				newMember.top_uid = horiBeam.second.mode + "_" + horiBeam.second.uid;

			if (memberList[i].uid == vertBeam.first.mode + "_" + vertBeam.first.uid)
				newMember.left_uid = vertBeam.first.mode + "_" + vertBeam.first.uid;
			if (memberList[i].uid == vertBeam.second.mode + "_" + vertBeam.second.uid)
				newMember.right_uid = vertBeam.second.mode + "_" + vertBeam.second.uid;
		}

		newMember.startIndex.x_index = getGridIndex(left, "X", "XY") - 1;
		newMember.startIndex.y_index = gridData.yaxis.length - getGridIndex(top, "Y", "XY") - 1;

		obj.left = mapCoordinate(gridData.xaxis[newMember.startIndex.x_index].Dimension, "X", "XY") * scale - 1;
		obj.top  = mapCoordinate(gridData.yaxis[newMember.startIndex.y_index + 1].Dimension, "Y", "XY") * scale - 1;

		obj.id 	= "Mem" + memberList.length;
		obj.uid = obj.id;
		newMember.uid = origin.mode + "_" + obj.id;
		newMember.id  = obj.id;

		newMember.id  = "Mem" + memId++;
		newMember.uid = origin.mode + "_" + newMember.id;

		hbrace.placeHBrace(newMember);
		obj = null;
		return;
	}

	main.addSnapElev = function(origin, obj, mode)
	{
		var left = obj.left - gridOffSet * scale - pan_l;
		var top  = obj.top  - gridOffSet * scale - pan_r;
		var x_index, y_index;
		
		left = obj.left / scale - gridOffSet;
		top  = obj.top / scale - gridOffSet;
		var click_pos = {x: left, y: top};

		var horiBeam = getNearestBeam(click_pos, "Y", floor);
		var vertCol = getNearestColumn(left, top);

		var x = left;
		var y = top;

		if (vertCol == -1)
			return;

		var matchedMember = getMemberMatchedObj(origin);
		var newMember = JSON.parse(JSON.stringify(matchedMember));

		if (vertCol != -1)
		{
			for (var i = 0; i < memberList.length; i ++)
			{
				if (memberList[i].uid == vertCol.first.mode + "_" + vertCol.first.uid)
					newMember.leftCol_uid = vertCol.first.mode + "_" + vertCol.first.uid;
				if (memberList[i].uid == vertCol.second.mode + "_" + vertCol.second.uid)
					newMember.rightCol_uid = vertCol.second.mode + "_" + vertCol.second.uid;
			}
		}

		if (horiBeam != -1)
		{
			for (var i = 0; i < memberList.length; i ++)
			{
				if (memberList[i].uid == horiBeam.first.mode + "_" + horiBeam.first.uid)
				{
					newMember.bottomBeam_uid = horiBeam.first.mode + "_" + horiBeam.first.uid;
				}
				if (memberList[i].uid == horiBeam.second.mode + "_" + horiBeam.second.uid)
					newMember.topBeam_uid = horiBeam.second.mode + "_" + horiBeam.second.uid;
			}
		}

		switch ($("#viewdrpdwn").val())
		{
			case "2":
				var x_index = getGridIndex( x, "X", "XZ");
				var y_index = getGridIndex( y, "Z", "XZ");
				if ( x_index == -1 || y_index == -1)
					return;
				newMember.startIndex.x_index = x_index;
				newMember.startIndex.y_index = y_index;
				if (horiBeam != -1)
				{
					newMember.snapColumn = false;
				}
				else 
				{
					var tmp_topBeam = getNearestTopBeam(click_pos, "Y");
					if (tmp_topBeam == -1)
						return;
					newMember.tmp_beam = tmp_topBeam;
					newMember.snapColumn = true;
				}
			break;
			case "3":
				var x_index = getGridIndex( x, "Y", "YZ");
				var y_index = getGridIndex( y, "Z", "YZ");
				if ( x_index == -1 || y_index == -1)
					return;
				newMember.startIndex.x_index = x_index;
				newMember.startIndex.y_index = y_index;
				if (horiBeam != -1)
				{
					newMember.snapColumn = false;
				}
				else
				{
					var tmp_topBeam = getNearestTopBeam(click_pos, "Y");
					if (tmp_topBeam == -1)
						return;
					newMember.tmp_beam = tmp_topBeam;
					newMember.snapColumn = true;
				}

			break;
		}

		// obj.left = mapCoordinate(gridData.xaxis[newMember.startIndex.x_index].Dimension, "X", "XY") * scale - 1;
		// obj.top = mapCoordinate(gridData.yaxis[newMember.startIndex.y_index + 1].Dimension, "Y", "XY") * scale - 1;

		obj.id = "Mem" + memberList.length;
		obj.uid = obj.id;
		newMember.uid = origin.mode + "_" + obj.id;
		newMember.id = obj.id;

		newMember.id = "Mem" + memId++;
		newMember.uid = origin.mode + "_" + newMember.id;
		
		vbrace.placeVBrace(newMember);
		obj = null;
		return;
	}

	main.addSnapColumn = function(origin, obj, mode)
	{
		var x_index, left, top;
		left = obj.left / scale - gridOffSet;
		top = obj.top / scale - gridOffSet;
		if ($("#viewdrpdwn").val() == "2") 
		{
			x_index = nearestGridElev("X", left, "XZ");
			left 	= parseFloat(gridData.xaxis[x_index].Dimension) * scale + gridOffSet * scale - 1;
		}
		else 
		{
			x_index = nearestGridElev("Y", left, "YZ");
			left 	= parseFloat(gridData.yaxis[x_index].Dimension) * scale + gridOffSet * scale - 1;
		}

		obj.left = left;
		obj.top  = origin.top;

		var matchedMember = getMemberMatchedObj(origin);
		var newMember;
		newMember = JSON.parse(JSON.stringify(matchedMember));
		
		if ($("#viewdrpdwn").val() == "2") 
		{
			newMember.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
			newMember.memberProperties.endPoint.x = gridData.xaxis[x_index].Dimension;
		}
		else 
		{
			newMember.memberProperties.startPoint.y = gridData.yaxis[x_index].Dimension;
			newMember.memberProperties.endPoint.y = gridData.yaxis[x_index].Dimension;
		}
		newMember.originPoint = undefined;
		obj.id="Mem"+memId++;
		obj.uid = obj.id;
		newMember.uid = origin.mode + "_" + obj.id;
		newMember.id = obj.id;
		memberList.push(newMember);
	}

	main.addSnapTruss = function(obj)
	{
		var left = (obj.left - gridOffSet * scale * canvas.getZoom() - pan_l) / canvas.getZoom() / scale;
		var top = (obj.top - gridOffSet * scale * canvas.getZoom() - pan_r) / canvas.getZoom() / scale;

		x_index = getGridIndex(left, "X", "XY");
		y_index = getGridIndex(top, "Y", "XY");

		y_index = gridData.yaxis.length - y_index;

		obj.left = mapCoordinate(gridData.xaxis[x_index - 1].Dimension, "X", "XY") * scale;
		obj.top = mapCoordinate(gridData.yaxis[y_index].Dimension, "Y", "XY") * scale;
		canvas.renderAll();
	}

	main.addSnapBeam = function(origin, obj, mode)
	{
		var left = obj.left / scale - gridOffSet;
		var top  = obj.top / scale - gridOffSet;

		x_index = getGridIndex(left, "X", "XY") - 1;
		y_index = getGridIndex(top, "Y", "XY");

		y_index = gridData.yaxis.length - y_index;

		var matchedMember = getMemberMatchedObj(origin);
		var newMember = JSON.parse(JSON.stringify(matchedMember));
		
		if (matchedMember.memberProperties.startPoint.x == matchedMember.memberProperties.endPoint.x) 
		{
			x_index = nearestGrid("X", left);
			if (y_index < 0 || y_index >= gridData.yaxis.length)
				return;
			newMember.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
			newMember.memberProperties.endPoint.x = newMember.memberProperties.startPoint.x;

			newMember.memberProperties.startPoint.y = gridData.yaxis[y_index - 1].Dimension;
			newMember.memberProperties.endPoint.y = gridData.yaxis[y_index].Dimension;

			newMember.x_depth = gridData.xaxis[x_index].Dimension;
			newMember.y_depth = gridData.yaxis[y_index].Dimension;
			obj.left 	= mapCoordinate(gridData.xaxis[x_index].Dimension, "X", "XY") * scale - 2.5;
			obj.top 	= mapCoordinate(gridData.yaxis[y_index].Dimension, "Y", "XY") * scale;

			obj.set({"height": (gridData.yaxis[y_index].Dimension - gridData.yaxis[y_index - 1].Dimension) * scale});
		}
		else if (matchedMember.memberProperties.startPoint.y == matchedMember.memberProperties.endPoint.y)
		{
			y_index = nearestGrid("Y", top);
			if (x_index < 0 || x_index >= gridData.xaxis.length)
				return;
			newMember.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
			newMember.memberProperties.endPoint.x = gridData.xaxis[x_index + 1].Dimension;

			newMember.memberProperties.startPoint.y = gridData.yaxis[y_index].Dimension;
			newMember.memberProperties.endPoint.y = gridData.yaxis[y_index].Dimension;
			newMember.x_depth = gridData.xaxis[x_index + 1].Dimension;
			newMember.y_depth = gridData.yaxis[y_index].Dimension;
			obj.left 	= mapCoordinate(gridData.xaxis[x_index].Dimension, "X", "XY") * scale;
			obj.top 	= mapCoordinate(gridData.yaxis[y_index].Dimension, "Y", "XY") * scale - 2.5;
			obj.set({"width": (gridData.xaxis[x_index + 1].Dimension - gridData.xaxis[x_index].Dimension) * scale});
		}

		delete newMember.origin;
		obj.id 		= "Mem" + memId++;
		obj.uid 	= obj.id;
		if (origin.mode == "periBeam" || origin.mode == "Beam")
		{
			if (newMember.memberProperties.startPoint.x == newMember.memberProperties.endPoint.x && (newMember.memberProperties.startPoint.x == gridData.xaxis[0].Dimension || newMember.memberProperties.startPoint.x == gridData.xaxis[gridData.xaxis.length - 1].Dimension))
			{
				newMember.mode = "periBeam";
				newMember.type = "periBeam";
			}
			else if (newMember.memberProperties.startPoint.y == newMember.memberProperties.endPoint.y && (newMember.memberProperties.startPoint.y == gridData.yaxis[0].Dimension || newMember.memberProperties.startPoint.y == gridData.yaxis[gridData.yaxis.length - 1].Dimension))
			{
				newMember.mode = "periBeam";
				newMember.type = "periBeam";
			}
			else 
			{
				newMember.mode = "Beam";
				newMember.type = "Beam";
			}
		}
		else
		{
			console.log(newMember.mode);
		}
		obj.mode = newMember.mode;
		newMember.uid = newMember.mode + "_" + obj.id;
		newMember.id = obj.id;
		
		if (!checkExistMember(newMember))
			memberList.push(newMember);
	}

	main.addSnapBeamElevation = function(origin, obj, mode, plane)
	{
		var strokeWidth = 5;
		var left = obj.left / scale - gridOffSet;
		var top = obj.top / scale - gridOffSet;

		var z_index = nearestGrid("Z", top);
		var x_index = 0;

		var matchedMember = getMemberMatchedObj(origin);
		var newMember = JSON.parse(JSON.stringify(matchedMember));
		var width = 0;

		switch (plane)
		{
			case "XZ":
				x_index = getGridIndex(left, "X", "XZ") - 1;
				obj.left = mapCoordinate(gridData.xaxis[x_index].Dimension, "X", "XZ") * scale;
				obj.top = mapCoordinate(gridData.zaxis[z_index].Dimension, "Z", "XZ") * scale - strokeWidth / 2;
				width = Math.abs(gridData.xaxis[x_index + 1].Dimension - gridData.xaxis[x_index].Dimension) * scale;
				obj.set({"width": width});

				newMember.floor 	= gridData.zaxis[z_index].Dimension;
				newMember.x_depth 	= gridData.xaxis[x_index].Dimension;
				newMember.tos_ft 	= gridData.zaxis[z_index].dimension_ft_tos;
				newMember.tos_in 	= gridData.zaxis[z_index].dimension_in_tos;
				newMember.tos_fr 	= gridData.zaxis[z_index].dimension_fr_tos;
				newMember.tos_sign 	= "+";
				newMember.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
				newMember.memberProperties.endPoint.x = gridData.xaxis[x_index + 1].Dimension;
				newMember.alignment = "Straight";
			break;

			case "YZ":
				x_index = getGridIndex(left, "Y", "YZ") - 1;
				obj.left = mapCoordinate(gridData.yaxis[x_index].Dimension, "Y", "YZ") * scale;
				obj.top = mapCoordinate(gridData.zaxis[z_index].Dimension, "Z", "YZ") * scale - strokeWidth / 2;
				width = Math.abs(gridData.yaxis[x_index + 1].Dimension - gridData.yaxis[x_index].Dimension) * scale;
				obj.set({"width": width});

				newMember.floor 	= gridData.zaxis[z_index].Dimension;
				newMember.y_depth 	= gridData.yaxis[x_index].Dimension;
				newMember.tos_ft 	= gridData.zaxis[z_index].dimension_ft_tos;
				newMember.tos_in 	= gridData.zaxis[z_index].dimension_in_tos;
				newMember.tos_fr 	= gridData.zaxis[z_index].dimension_fr_tos;
				newMember.tos_sign 	= "+";
				newMember.memberProperties.startPoint.y = gridData.yaxis[x_index].Dimension;
				newMember.memberProperties.endPoint.y = gridData.yaxis[x_index + 1].Dimension;
				newMember.alignment = "Straight";
			break;
		}

		delete newMember.origin;
		obj.id 		="Mem"+memId++;
		obj.uid = obj.id;
		newMember.uid = origin.mode + "_" + obj.id;
		newMember.id = obj.id;
		memberList.push(newMember);
	}

	main.addSnapPourstop = function(origin, obj, mode)
	{
		var left = obj.left / scale - gridOffSet;
		var top  = obj.top / scale - gridOffSet;
		var matchedMember = getMemberMatchedObj(origin);
		var newMember = JSON.parse(JSON.stringify(matchedMember));

		var beam;

		x_index = getGridIndex(left, "X", "XY") - 1;
		y_index = getGridIndex(top, "Y", "XY");

		y_index = gridData.yaxis.length - y_index;
		if (newMember.width == 0)
		{
			beam = nearestBeam("Y", left, top);
		}
		if (newMember.height == 0)
		{
			beam = nearestBeam("X", left, top);
		}

		bplates.isDrawReady = true;
		newMember.id = "Mem" + memId++;
		newMember.uid = origin.mode + "_" + newMember.id;
		bplates.drawPourStop(beam, newMember);
	}

	main.addSnapByIndex = function(obj, x_index, y_index, plane)
	{
		var left, top;
		switch(plane)
		{
			case "XY":
				left 	= parseInt(gridData.xaxis[x_index - 1].Dimension) * scale + gridOffSet * scale;
				top 	= (parseInt(gridData.yaxis[gridData.yaxis.length - 1].Dimension) - parseInt(gridData.yaxis[gridData.yaxis.length - y_index].Dimension)) * scale + gridOffSet * scale;
			break;

			case "XZ":
				left 	= parseInt(gridData.xaxis[x_index - 1].Dimension) * scale + gridOffSet * scale;
				top 	= (parseInt(gridData.zaxis[gridData.zaxis.length - 1].Dimension) - parseInt(gridData.zaxis[gridData.zaxis.length - y_index].Dimension)) * scale + gridOffSet * scale;
			break;

			case "YZ":
				left 	= parseInt(gridData.yaxis[x_index - 1].Dimension) * scale + gridOffSet * scale;
				top 	= (parseInt(gridData.zaxis[gridData.zaxis.length - 1].Dimension) - parseInt(gridData.zaxis[gridData.zaxis.length - y_index].Dimension)) * scale + gridOffSet * scale;
			break;
		}

		obj.left = left;
		obj.top  = top;
		
		canvas.renderAll();

		canvas.add(obj);
		canvas.renderAll();
	}

	main.showHideItems 	= function(show, mode)
	{
		for(var i = 0; i < canvas._objects.length; i ++)
		{
			if(canvas._objects[i].mode != mode)
				continue;

			canvas._objects[i].visible = show;
		}

		canvas.renderAll();
	}

	main.chkPosAvailable = function(obj, mode)
	{
		var left = obj.left;
		var top  = obj.top;

		for(var i = 0; i < canvas._objects.length; i ++)
		{
			if(canvas._objects[i].mode != mode && !(canvas._objects[i].mode != undefined && mode != undefined && canvas._objects[i].mode.toLowerCase().indexOf("column") >= 0 && mode.toLowerCase().indexOf("column") >= 0))
			{
				continue;
			}

			if (canvas._objects[i].mode != undefined && mode != undefined && canvas._objects[i].mode.toLowerCase().indexOf("column") >= 0 && mode.toLowerCase().indexOf("column") >= 0)
			{
				if ((Math.abs(canvas._objects[i].left - obj.left) < 5 * scale && Math.abs(canvas._objects[i].top - obj.top) < 5 * scale) || (Math.abs(canvas._objects[i].defaultX - obj.defaultX) < 5 * scale && Math.abs(canvas._objects[i].defaultY - obj.defaultY) < 5 * scale) || (Math.abs(canvas._objects[i].defaultX - obj.left) < 5 * scale && Math.abs(canvas._objects[i].defaultY - obj.top) < 5 * scale))
				{
					return false;
				}
			}

			if (canvas._objects[i].uid == obj.uid && canvas._objects[i].mode == mode)
				continue;

			if(canvas._objects[i].left == left && canvas._objects[i].top == top)
			{
				return 0;
			}

			if (Math.abs(canvas._objects[i].left - left) < 0.01 && Math.abs(canvas._objects[i].top - top) < 0.01)
				return 0;
		}

		return 1;
	}

	main.drawPossible = function(obj, mode)
	{
		var left = obj.left;
		var top = obj.top;

		var flag = true;
		switch (mode)
		{
			case "h_brace":
				for ( i = 0; i < canvas._objects.length; i ++ )
				{
					if (canvas._objects[i].mode == mode)
					{
						if (canvas._objects[i].left == obj.left)
						{
							flag = false
							break;
						}
					}
				}
			break;

			case "v_brace":
				for ( i = canvas._objects.length - 1; i >= 0; i -- )
				{
					if ( main.overLap(canvas._objects[i], obj) && (canvas._objects[i].mode != "Column") && (canvas._objects[i].mode != "v_brace") && (canvas._objects[i].mode != "gridLine"))
					{
						flag = false;
						break;
					}
				}
			break;

			case "truss":
				for (i = 0; i < canvas._objects.length; i ++)
				{
					if ( main.overLap(canvas._objects[i], obj ) && (canvas._objects[i].mode != "Column"))
					{
						flag = false;
						break;
					}
				}
			break;
		}

		return flag;
	}

	main.overLap = function(firstObj, secondObj)
	{
		var sourceLeft = firstObj.left;
		var source_w = firstObj.width;
		var sourceTop = firstObj.top;
		var source_h = firstObj.height;

		var targetLeft = secondObj.left;
		var target_w = secondObj.width;
		var targetTop = secondObj.top;
		var target_h = secondObj.height;

		if (firstObj.mode != "gridLine")
		{
			return firstObj.intersectsWithObject(secondObj, true, true);
		}
		else 
			return false;
	}

	main.chkPossibleBeam = function(obj)
	{
		var obj_list = canvas._objects;
		for (var i = 0; i < obj_list.length; i ++)
		{
			if (obj_list[i].mode == obj.mode && obj_list[i].x1 == obj.x1 && obj_list[i].x2 == obj.x2 && obj_list[i].y1 == obj.y1 && obj_list[i].y2 == obj.y2 && obj_list[i].tos == obj.tos)
				return false;
		}
		return true;
	}

	main.init();
}