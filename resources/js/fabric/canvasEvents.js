
var class_canvasEvents 	= function()
{
	var main 	= this;

	main.contextmenu = null;

	main.scrollStatus = false;

	main.previous = {x: 0, y: 0};

	main.init 	= function()
	{
		main.contextmenu = new class_context();

		main.initEvent();
	}

	main.initEvent = function()
	{
		main.event_contextMenu();
	}

	main.event_contextMenu = function()
	{
		$("#expandCanvas").on("mousedown", function(evt)
		{
			main.contextmenu.hideContext();
			if (evt.button == 1)
			{
				main.scrollStatus = true;
				main.previous.x = evt.offsetX;
				main.previous.y = evt.offsetY;
			}
		});
		$("#expandCanvas").on("mouseup", function(evt)
		{
			if (evt.button == 1) {
				if (main.scrollStatus)
					main.scrollStatus = false;
				return;
			}
		});

		$("#expandCanvas").on("contextmenu", function(evt)
		{
			var mode 	= "global";
			var menu 	= "";
			var sel_obj = canvas.getActiveObject();
			var buffArr = [];

			if(sel_obj && sel_obj._objects && sel_obj._objects.length > 1 && sel_obj.mode == undefined)
			{
				mode = "group";
				for(var i = 0; i < sel_obj._objects.length; i ++)
				{
					if(buffArr.indexOf(sel_obj._objects[i].mode) != -1)
						continue;

					buffArr.push(sel_obj._objects[i].mode);
					switch(sel_obj._objects[i].mode)
					{
						case "h_brace" : 
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Horizontal Brace</dd>";
						break;
						case "v_brace" : 
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Vertical Brace</dd>";
						break;
						case "truss" : 
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Pitched truss</dd>";
						break;
						case "trapeTruss" :
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Trapezoidal truss</dd>";
						break;
						case "paraTruss":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Parallel chord truss</dd>";
						break;
						case "pourStop": 
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>PourStop</dd>";
						break;
						case "Column":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Column</dd>";
						break;
						case "Beam":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Grid Beam</dd>";
						break;
						case "periBeam":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Perimeter Beam</dd>";
						break;
						case "postColumn":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Post Column</dd>";
						break;
						case "boxColumn":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Box Column</dd>";
						break;
						case "builtUpIColumn":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Builtup I Column</dd>";
						break;
						case "builtUpCRColumn":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Cruciform Column</dd>";
						break;
						case "builtUpCHColumn":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Built-Up Column with Double Channel</dd>";
						break;
						case "pgirder":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Plate Girder</dd>";
						break;
						case "gridLine":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Grid Line</dd>";
						break;
						case "ibeam":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Infill Beam</dd>";
						break;
						case "cantBeam":
							menu += "<dd mode='" + sel_obj._objects[i].mode + "'>Cantilever Beam</dd>";
						break;
					}
				}
				// switch(sel_obj.mode)
				// {
				// 	case "truss" :
				// 		menu += "<dd mode='" + sel_obj.mode + "'>Truss</dd>";
				// 	break;
				// 	case "pourStop" : 
				// 		menu += "<dd mode='" + sel_obj.mode + "'>PourStop</dd>";
				// 	break;
				// }

				$("#context_group").html(menu);
			}

			main.contextmenu.showContext({x : evt.pageX, y : evt.pageY}, mode);

			evt.preventDefault();
			evt.stopPropagation();
		});

		$("#expandCanvas").on("mousemove", function(evt)
		{
			if (main.scrollStatus) 
			{
				var x = evt.offsetX - main.previous.x;
				var y = evt.offsetY - main.previous.y;

				if (Math.abs(x) >= Math.abs(y))
				{
					if (x > 0)
						$("#btn_right").click();
					else 
						$("#btn_left").click();
				}

				else 
				{
					if (y > 0)
						$("#btn_down").click();
					else 
						$("#btn_up").click();
				}
				main.previous.x = evt.offsetX;
				main.previous.y = evt.offsetY;
				evt.preventDefault();
				evt.stopPropagation();
			}
			else
				return;
		})
	}

	main.init();
}
