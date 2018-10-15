var class_Undo_Redo = function()
{
	var main 		= this;
	main.buffer 	= [];
	main.redoBuffer = [];

	main.init 		= function()
	{

	}

	main.addAction = function(type)
	{
		var buffer_entry;
		switch(type)
		{
			case "memberPlace":
				buffer_entry = {type: type, data: JSON.parse(JSON.stringify(memberList))};
			break;
			case "editGrid":
				buffer_entry = {type: type, data: JSON.parse(JSON.stringify(gridData))};
			break;
			case "changeDepth":
				buffer_entry = {type: type, depth: depthValue};
			break;
			case "changePlane":
				buffer_entry = {type: type, plane: planeValue, depth: depthValue};
			break;
			case "edit&member":
				buffer_entry = {type: type, member: JSON.parse(JSON.stringify(memberList)), grid: JSON.parse(JSON.stringify(gridData))};
				console.log(buffer_entry);
			break;
		}
		if (main.buffer.length >= 10)
		{
			main.buffer.splice(0, 1);
		}

		if (main.buffer.length == 0)
		{
			$("#btn_undo img").attr("src", "resources/images/redo.png");
		}

		main.buffer.push(buffer_entry);
		if (main.redoBuffer.length != 0)
			main.redoBuffer = [];
	}

	main.undo = function()
	{
		var buffer_entry;
		var lastEntry = main.buffer.length;

		var redo_entry;

		if (lastEntry == 0)
			return;

		shape.shapeDisabled();
		if (canvas.defaultCursor != "default")
			canvas.defaultCursor = 'default';

		switch (main.buffer[lastEntry - 1].type)
		{
			case "memberPlace":
				buffer_entry = {type: "memberPlace", data: JSON.parse(JSON.stringify(memberList))};
			break;
			case "changeDepth":
				buffer_entry = {type: "changeDepth", depth: $("#depthdrpdwn").val()};
			break;
			case "changePlane":
				buffer_entry = {type: "changePlane", plane: $("#viewdrpdwn").val(), depth: $("#depthdrpdwn").val()};
			break;
			case "editGrid":
				buffer_entry = {type: "editGrid", data: JSON.parse(JSON.stringify(gridData))};
			break;
			case "edit&member":
				if (memberList != undefined)
					buffer_entry = {type: "edit&member", member: JSON.parse(JSON.stringify(memberList)), grid: JSON.parse(JSON.stringify(gridData))};
				else 
					buffer_entry = {type: "edit&member", grid: JSON.parse(JSON.stringify(gridData))};
			break;
		}
		if (main.redoBuffer.length >= 10)
		{
			main.redoBuffer.splice(0, 1);
		}
		main.redoBuffer.push(buffer_entry);
		$("#btn_redo img").attr("src", "resources/images/redo.png");
		main.reDraw(main.buffer[lastEntry - 1]);
		main.buffer.splice(lastEntry - 1, 1);
		if (main.buffer.length == 0)
		{
			$("#btn_undo img").attr("src", "resources/images/undo_disabled.png");
		}
	}

	main.redo = function()
	{
		var lastEntry = main.redoBuffer.length;
		if (lastEntry == 0)
			return;

		shape.shapeDisabled();
		if (canvas.defaultCursor != "default")
			canvas.defaultCursor = 'default';

		switch (main.redoBuffer[lastEntry - 1].type)
		{
			case "memberPlace":
				buffer_entry = {type: "memberPlace", data: JSON.parse(JSON.stringify(memberList))};
			break;
			case "changeDepth":
				buffer_entry = {type: "changeDepth", depth: $("#depthdrpdwn").val()};
			break;
			case "changePlane":
				buffer_entry = {type: "changePlane", plane: $("#viewdrpdwn").val(), depth: $("#depthdrpdwn").val()};
			break;
			case "editGrid":
				buffer_entry = {type: "editGrid", data: JSON.parse(JSON.stringify(gridData))};
			break;
			case "edit&member":
				if (memberList != undefined)
					buffer_entry = {type: "edit&member", member: JSON.parse(JSON.stringify(memberList)), grid: JSON.parse(JSON.stringify(gridData))};
				else 
					buffer_entry = {type: "edit&member", grid: JSON.parse(JSON.stringify(gridData))};
			break;
		}

		if (main.buffer.length >= 10)
		{
			main.buffer.splice(0, 1);
		}
		main.buffer.push(buffer_entry);
		$("#btn_undo img").attr("src", "http://d3rqmq0rd8g4st.cloudfront.net/material-style-1.5.2/HTML/assets/images/reset.png");

		main.reDraw(main.redoBuffer[lastEntry - 1]);
		main.redoBuffer.splice(lastEntry - 1, 1);
		if (main.redoBuffer.length == 0)
			$("#btn_redo img").attr("src", "resources/images/redo_disabled.png");
	}

	main.reDraw = function(entry)
	{
		switch (entry.type)
		{
			case "memberPlace":
				memberList = [];
				memberList = entry.data;
				reloadGrid();
			break;
			case "changeDepth":
				$("#depthdrpdwn").val(entry.depth).trigger("change");
				reloadGrid();
			break;
			case "changePlane":
				$("#viewdrpdwn").val(entry.plane).trigger("change");
				$("#depthdrpdwn").val(entry.depth).trigger("change");
				reloadGrid();
			break;
			case "editGrid":
				gridData = entry.data;
				reloadGrid();
			break;
			case "edit&member":
				gridData = entry.grid;
				memberList = entry.member;
				if (memberList == undefined)
					memberList = [];
				reloadGrid();
			break;
		}
	}

	main.init();
}