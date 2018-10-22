/**
 * 
 */

var canvas 		= null;
var shape 		= null;
var hbrace  	= null;
var vbrace 		= null;
var truss 		= null;
var paraTruss 	= null;
var trapeTruss 	= null;
var pgirder 	= null;
var bplates 	= null;
var canvEvent 	= null;
var postColumn 	= null;
var boxColumn 	= null;
var iboxColumn 	= null;
var iiboxColumn 	= null;
var iiiboxColumn 	= null;
var infillBeam 	= null;
var cantilBeam 	= null;
var undoAction 	= null;

var gridPlan 	= null;
var gridElev 	= null;

var pan_l 	= 0;
var pan_r 	= 0;

var default_pan_l = 0;
var default_pan_r = 0;

var pan_l_l = 0;
var pan_r_r = 0;

var default_zoom = 0;

var zoom;
var selection_buffer = [];

var zoom_multiplier = 1.5;

var planeValue = 1;
var depthValue = 0;

var plan_depth = null;
var elev_x_depth = null;
var elev_y_depth = null;

var org_scale = 0;

$(document).ready(function() 
{
	initCanvas();

	canvas  	= new fabric.Canvas('canvas', { selection: true, lockRotation: true });
	shape 		= new class_shape();
	hbrace  	= new class_h_Braces(shape);
	vbrace  	= new class_v_Braces(shape);
	truss   	= new class_Truss(shape);
	paraTruss 	= new class_para_Truss(shape);
	trapeTruss 	= new class_trape_Truss(shape);
	pgirder 	= new class_PGirder(shape);
	bplates 	= new class_BPlates(shape);
	canvEvent 	= new class_canvasEvents();
	gridPlan 	= new class_grid_Plan();
	gridElev 	= new class_grid_Elev();
	postColumn 	= new class_post_Column(shape);
	boxColumn 	= new class_box_Column(shape);
	iboxColumn 	= new class_ibox_Column(shape);
	iiboxColumn	= new class_iibox_Column(shape);
	iiiboxColumn= new class_iiibox_Column(shape);
	infillBeam  = new class_infill_Beam();
	cantilBeam 	= new class_cant_Beam();
	defaultBeam 	= new class_place_beam(shape);
	defaultColumn = new class_place_column(shape);

	undoAction = new class_Undo_Redo();
	$(window).on("resize", function()
	{
		initCanvas();
	});

	loadGridToCanvas();
	initEvents();
	initSubmitEvents();
});

function getGUID() {
	var _guid = localStorage.getItem("guid");
	var guid = 0;
	if (_guid) {
		try {
			guid = parseInt(_guid);
		}catch(ex){
			
		}
	}

	return setGUID(guid);
}

function setGUID(_guid) {
	localStorage.setItem("guid", _guid);
	return _guid;
}

function increaseGUID() {
	var _guid = localStorage.getItem("guid");
	var guid = 0;
	if (_guid) {
		try {
			guid = parseInt(_guid);
		} catch (ex) {

		}
	}
	guid ++;
	return setGUID(guid);
}

function loadGridToCanvas(){
	scale = Math.max(80 / gridData.xaxis[gridData.xaxis.length - 1].Dimension, 80 / gridData.yaxis[gridData.yaxis.length - 1].Dimension) * 5;
	org_scale = scale;
	zoom = Math.min(Math.min((canvas.width - 80) / (gridData.xaxis[gridData.xaxis.length - 1].Dimension + gridOffSet * scale) / scale, (canvas.height - 80) / (gridData.yaxis[gridData.yaxis.length - 1].Dimension + gridOffSet * scale) / scale), 1.3);
	default_zoom = zoom;

	default_pan_l = (canvas.width - gridData.xaxis[gridData.xaxis.length - 1].Dimension * scale * zoom - gridOffSet * scale) / 2;
	default_pan_r = (canvas.height - gridData.yaxis[gridData.yaxis.length - 1].Dimension * scale * zoom - gridOffSet * scale) / 2;
	pan_l = default_pan_l;
	
	pan_r = default_pan_r;
	pan_l_l = 0;
	pan_r_r = 0;
	// loadMembersToCanvas("XY","");
	canvas.setZoom(zoom);
	canvas.relativePan(new fabric.Point(default_pan_l, 0));
	canvas.relativePan(new fabric.Point(0, default_pan_r));
	drawGrid( "XY");
}

function initCanvas()
{
	var gaps  = 0;
	var width = $("#expandCanvas").innerWidth() - 70;;
	// var height = $(window).height() - $(".topbar").height() - $(".mp-heading").height() - 20;
	var height = $(window).height() - 217;

	var absolute_width_cm = $("#feet_convert").width();
	var absolute_inch = absolute_width_cm * 2.54;
	var absolute_feet = absolute_width_cm * 30.48;

	if(width < 0)
	{
		width = $(window).width() - 27;
	}

	$("#canvas").css("width", width + "px");
	$("#canvas").attr("width", width + "px");

	$("#canvas").css("height", height + "px");
	$("#canvas").attr("height", height + "px");

	if(canvas)
	{
		canvas.setWidth(width);
		canvas.setHeight(height);
	}

	const originalRender = fabric.Object.prototype.render;

	fabric.Object.prototype.render = function(ctx, noTransform) 
	{
		if (!this.group && !this.isOnScreen()) 
		{
			return
		}
		else if (this.group && !this.group.isOnScreen())
		{
			return;
		}
		return originalRender.call(this, ctx, noTransform);
		// if (!this.isOnScreen())
		// 	return;
		// else 
		// 	originalRender.call(this, ctx, noTransform);
	};
}

function initEvents()
{
	var units = 10;

	canvas.on("selection:created", function(evt) 
	{
		var plane;
		switch ($("#viewdrpdwn").val())
		{
			case "1":
				plane = "XY";
			break;
			case "2":
				plane = "XZ";
			break;
			case "3":
				plane = "YZ";
			break;
		}
		var sel_obj = canvas.getActiveObject();
		if (sel_obj) 
		{
			if (evt.e && evt.e.ctrlKey)
			{
				shape.shapeDisabled();
				canvas.discardActiveObject();
				selection_buffer.push(sel_obj);
				group_sel = new fabric.ActiveSelection(selection_buffer, {
					canvas: canvas
				});
				canvas.setActiveObject(group_sel);
				canvas.calcOffset();
				canvas.renderAll();
			}
			sel_obj = canvas.getActiveObject();
			sel_obj.set({lockRotation: true, lockScalingX: true, lockScalingY: true, lockMovementX: true, lockMovementY: true});
		}

		if (sel_obj && !bplates.isDrawReady && !cantilBeam.isDrawReady)
		{
			if (sel_obj._objects && !checkGroup(sel_obj))
			{
				for (var i = 0; i < sel_obj._objects.length; i ++)
				{
					if (sel_obj._objects[i].mode)
					{
						switch (sel_obj._objects[i].mode)
						{
							case "h_brace":
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
								{
									sel_obj._objects[i]._objects[j].set({fill: '#ff0000', stroke: '#ff0000'});
								}
							break;
							case "v_brace":
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
								{
									sel_obj._objects[i]._objects[j].set({fill: '#ff0000', stroke: '#ff0000'});
								}
							break;
							case "Beam":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "periBeam":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "ibeam":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "pgirder":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "cantBeam":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "Column":
								if (sel_obj._objects[i].shapeType != "defaultColumn")
									sel_obj._objects[i].set({stroke: "#ff0000"});
								else 
									sel_obj._objects[i].set({fill: "#ff0000"});
							break;
							case "boxColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
									{
										sel_obj._objects[i]._objects[j].set({fill: '#ff0000', stroke: '#ff0000'});
									}
								else
									sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "builtUpIColumn":
								sel_obj._objects[i].set({fill: "#ff0000"});
							break;
							case "builtUpCRColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
										sel_obj._objects[i]._objects[j].set({stroke: "#ff0000"});
								else
									sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "builtUpCHColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
										sel_obj._objects[i]._objects[j].set({stroke: "#ff0000"});
								else
									sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "postColumn":
								if (plane == "XY")
								{
									if (sel_obj._objects[i].shapeType != "defaultColumn" && sel_obj._objects[i].shapeType != "double") 
									{
										sel_obj._objects[i].set({stroke: "#ff0000"});
									}
									else if (sel_obj._objects[i].shapeType == "defaultColumn")
									{
										sel_obj._objects[i].set({fill: "#ff0000"});
									}
									else if (sel_obj._objects[i].shapeType == "double")
									{
										for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
											sel_obj._objects[i]._objects[j].set({stroke: "#ff0000"});
									}
								}
								else
									sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "pourStop":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
						}
					}
				}
				canvas.renderAll();
			}
			else if (sel_obj._objects && checkGroup(sel_obj) && sel_obj.type == "new_group")
			{
				if (plane != "XY" && (sel_obj.mode == "boxColumn" || sel_obj.mode == "builtUpCRColumn" || sel_obj.mode == "builtUpCHColumn" || sel_obj.mode == "postColumn"))
				{
					for (var i = 0; i < sel_obj._objects.length; i ++)
						sel_obj._objects[i].set({stroke: "#ff0000"});
				}
				else 
				{
					for (var i = 0; i < sel_obj._objects.length; i ++)
					{
						for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
							sel_obj._objects[i]._objects[j].set({stroke: "#ff0000"});
					}
				}
			}
			else if (checkGroup(sel_obj))
			{
				if (plane != "XY" && (sel_obj.mode == "boxColumn" || sel_obj.mode == "builtUpCRColumn" || sel_obj.mode == "builtUpCHColumn" || sel_obj.mode == "postColumn"))
				{
					sel_obj.set({stroke: "#ff0000"});
				}
				else
				{
					for (var i = 0; i < sel_obj._objects.length; i ++)
						sel_obj._objects[i].set({stroke: "#ff0000"});
				}
				canvas.renderAll();
			}
			else if (!sel_obj._objects)
			{
				switch (sel_obj.mode)
				{
					case "Beam":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "periBeam":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "ibeam":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "pgirder":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "cantBeam":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "Column":
						if (sel_obj.shapeType != "defaultColumn")
							sel_obj.set({stroke: "#ff0000"});
						else 
							sel_obj.set({fill: "#ff0000"});
					break;
					case "builtUpIColumn":
						sel_obj.set({fill: "#ff0000"});
					break;
					case "postColumn":
						if (sel_obj.shapeType != "defaultColumn")
							sel_obj.set({stroke: "#ff0000"});
						else 
							sel_obj.set({fill: "#ff0000"});
					break;
					case "pourStop":
						sel_obj.set({stroke: "#ff0000"});
					break;
				}
				canvas.renderAll();
			}
		}

		if (bplates.isDrawReady && (sel_obj.mode == "Beam" || sel_obj.mode == "periBeam" || sel_obj.mode == "ibeam" || sel_obj.mode == "pgirder" || sel_obj.mode == "cantBeam"))
		{
			for ( var i = 0; i < memberList.length; i ++ )
			{
				if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
				{
					undoAction.addAction("memberPlace");
					bplates.drawPourStop(memberList[i], bplates.pourStop);
				}
			}
		}

		else if (cantilBeam.isDrawReady && cantilBeam.connectionType == "column" && checkColumn(sel_obj))
		{
			for (var i = 0; i < memberList.length; i ++ )
			{
				if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
				{
					cantilBeam.drawCantBeam(memberList[i], cantilBeam.cantBeam);
				}
			}
		}
		else if (cantilBeam.isDrawReady && cantilBeam.connectionType == "beam" && checkBeam(sel_obj))
		{
			for (var i = 0; i < memberList.length; i ++ )
			{
				if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
				{
					cantilBeam.drawCantBeam(memberList[i], cantilBeam.cantBeam);
				}
			}
		}
	});

	canvas.on("selection:updated", function(evt) 
	{
		var desel_obj = evt.deselected[0];
		backToColor(desel_obj);
		var plane;
		switch ($("#viewdrpdwn").val())
		{
			case "1":
				plane = "XY";
			break;
			case "2":
				plane = "XZ";
			break;
			case "3":
				plane = "YZ";
			break;
		}
		var sel_obj = canvas.getActiveObject();
		if (sel_obj) 
		{
			if (evt.e && evt.e.ctrlKey)
			{
				shape.shapeDisabled();
				canvas.discardActiveObject();
				if (sel_obj.mode == "gridLine")
				{
					return false;
				}
				selection_buffer.push(sel_obj);
				group_sel = new fabric.ActiveSelection(selection_buffer, {
					canvas: canvas
				});
				canvas.setActiveObject(group_sel);
				canvas.calcOffset();
				canvas.renderAll();
			}
			sel_obj = canvas.getActiveObject();
			sel_obj.set({lockRotation: true, lockScalingX: true, lockScalingY: true, lockMovementX: true, lockMovementY: true});
		}

		if (sel_obj && !bplates.isDrawReady && !cantilBeam.isDrawReady)
		{
			if (sel_obj._objects && !checkGroup(sel_obj))
			{
				for (var i = 0; i < sel_obj._objects.length; i ++)
				{
					if (sel_obj._objects[i].mode)
					{
						switch (sel_obj._objects[i].mode)
						{
							case "h_brace":
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
								{
									sel_obj._objects[i]._objects[j].set({fill: '#ff0000', stroke: '#ff0000'});
								}
							break;
							case "v_brace":
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
								{
									sel_obj._objects[i]._objects[j].set({fill: '#ff0000', stroke: '#ff0000'});
								}
							break;
							case "Beam":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "periBeam":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "ibeam":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "pgirder":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "cantBeam":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "Column":
								if (sel_obj._objects[i].shapeType != "defaultColumn" || plane != "XY")
									sel_obj._objects[i].set({stroke: "#ff0000"});
								else 
									sel_obj._objects[i].set({fill: "#ff0000"});
							break;
							case "boxColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
									{
										sel_obj._objects[i]._objects[j].set({fill: '#ff0000', stroke: '#ff0000'});
									}
								else
									sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "builtUpIColumn":
								sel_obj._objects[i].set({fill: "#ff0000"});
							break;
							case "builtUpCRColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
										sel_obj._objects[i]._objects[j].set({stroke: "#ff0000"});
								else
									sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "builtUpCHColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
										sel_obj._objects[i]._objects[j].set({stroke: "#ff0000"});
								else
									sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "postColumn":
								if (plane == "XY")
								{
									if (sel_obj._objects[i].shapeType != "defaultColumn" && sel_obj._objects[i].shapeType != "double") 
									{
										sel_obj._objects[i].set({stroke: "#ff0000"});
									}
									else if (sel_obj._objects[i].shapeType == "defaultColumn")
									{
										sel_obj._objects[i].set({fill: "#ff0000"});
									}
									else if (sel_obj._objects[i].shapeType == "double")
									{
										for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
											sel_obj._objects[i]._objects[j].set({stroke: "#ff0000"});
									}
								}
								else
									sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
							case "pourStop":
								sel_obj._objects[i].set({stroke: "#ff0000"});
							break;
						}
					}
				}
				canvas.renderAll();
			}
			else if (sel_obj._objects && checkGroup(sel_obj) && sel_obj.type == "new_group")
			{
				if (plane != "XY" && (sel_obj.mode == "boxColumn" || sel_obj.mode == "builtUpCRColumn" || sel_obj.mode == "builtUpCHColumn" || sel_obj.mode == "postColumn"))
				{
					for (var i = 0; i < sel_obj._objects.length; i ++)
						sel_obj._objects[i].set({stroke: "#ff0000"});
				}
				else 
				{
					for (var i = 0; i < sel_obj._objects.length; i ++)
					{
						for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
							sel_obj._objects[i]._objects[j].set({stroke: "#ff0000"});
					}
				}
			}
			else if (checkGroup(sel_obj))
			{
				if (plane != "XY" && (sel_obj.mode == "boxColumn" || sel_obj.mode == "builtUpCRColumn" || sel_obj.mode == "builtUpCHColumn" || sel_obj.mode == "postColumn"))
				{
					sel_obj.set({stroke: "#ff0000"});
				}
				else
				{
					for (var i = 0; i < sel_obj._objects.length; i ++)
						sel_obj._objects[i].set({stroke: "#ff0000"});
				}
				canvas.renderAll();
			}
			else if (!sel_obj._objects)
			{
				switch (sel_obj.mode)
				{
					case "Beam":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "periBeam":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "ibeam":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "pgirder":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "cantBeam":
						sel_obj.set({stroke: "#ff0000"});
					break;
					case "Column":
						if (sel_obj.shapeType != "defaultColumn")
							sel_obj.set({stroke: "#ff0000"});
						else 
							sel_obj.set({fill: "#ff0000"});
					break;
					case "builtUpIColumn":
						sel_obj.set({fill: "#ff0000"});
					break;
					case "postColumn":
						if (sel_obj.shapeType != "defaultColumn")
							sel_obj.set({stroke: "#ff0000"});
						else 
							sel_obj.set({fill: "#ff0000"});
					break;
					case "pourStop":
						sel_obj.set({stroke: "#ff0000"});
					break;
				}
				canvas.renderAll();
			}
		}

		if (bplates.isDrawReady && (sel_obj.mode == "Beam" || sel_obj.mode == "periBeam" || sel_obj.mode == "ibeam" || sel_obj.mode == "pgirder"))
		{
			for ( var i = 0; i < memberList.length; i ++ )
			{
				if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
				{
					undoAction.addAction("memberPlace");
					bplates.drawPourStop(memberList[i], bplates.pourStop);
				}
			}
		}
		else if (cantilBeam.isDrawReady && cantilBeam.connectionType == "column" && checkColumn(sel_obj))
		{
			for (var i = 0; i < memberList.length; i ++ )
			{
				if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
				{
					cantilBeam.drawCantBeam(memberList[i], cantilBeam.cantBeam);
				}
			}
		}
		else if (cantilBeam.isDrawReady && cantilBeam.connectionType == "beam" && checkBeam(sel_obj))
		{
			for (var i = 0; i < memberList.length; i ++ )
			{
				if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
				{
					cantilBeam.drawCantBeam(memberList[i], cantilBeam.cantBeam);
				}
			}
		}
	});

	canvas.on("before:selection:cleared", function(e)
	{
		var plane;
		switch ($("#viewdrpdwn").val())
		{
			case "1":
				plane = "XY";
			break;
			case "2":
				plane = "XZ";
			break;
			case "3":
				plane = "YZ";
			break;
		}
		var sel_obj = canvas.getActiveObject();
		backToColor(sel_obj);
	});

	canvas.on("selection:cleared", function(e)
	{
		var sel_obj = canvas.getActiveObject();
		backToColor(sel_obj);
	});

	function backToColor(sel_obj)
	{
		var plane;
		switch ($("#viewdrpdwn").val())
		{
			case "1":
				plane = "XY";
			break;
			case "2":
				plane = "XZ";
			break;
			case "3":
				plane = "YZ";
			break;
		}
		if (sel_obj)
		{
			if (sel_obj._objects && !checkGroup(sel_obj))
			{
				for (var i = 0; i < sel_obj._objects.length; i ++)
				{
					if (sel_obj._objects[i].mode)
					{
						switch (sel_obj._objects[i].mode)
						{
							case "h_brace":
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
								{
									sel_obj._objects[i]._objects[j].set({fill: '#222ee2', stroke: '#222ee2'});
								}
							break;
							case "v_brace":
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
								{
									sel_obj._objects[i]._objects[j].set({fill: '#e510cc', stroke: '#e510cc'});
								}
							break;
							case "Beam":
								sel_obj._objects[i].set({stroke: "#000000"});
							break;
							case "periBeam":
								sel_obj._objects[i].set({stroke: "#000000"});
							break;
							case "ibeam":
								sel_obj._objects[i].set({stroke: "#000000"});
							break;
							case "pgirder":
								sel_obj._objects[i].set({stroke: "#000000"});
							break;
							case "cantBeam":
								sel_obj._objects[i].set({stroke: "#000000"});
							break;
							case "Column":
								if (sel_obj._objects[i].shapeType != "defaultColumn")
									sel_obj._objects[i].set({stroke: "#68f441"});
								else 
									sel_obj._objects[i].set({fill: "#68f441"});
							break;
							case "boxColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
									{
										sel_obj._objects[i]._objects[j].set({fill: '#68f441', stroke: '#68f441'});
									}
								else 
									sel_obj._objects[i].set({stroke: "#68f441"})
							break;
							case "builtUpIColumn":
								sel_obj._objects[i].set({fill: "#68f441"});
							break;
							case "builtUpCRColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
										sel_obj._objects[i]._objects[j].set({stroke: "#68f441"});
								else
									sel_obj._objects[i].set({stroke: "#68f441"});
							break;
							case "builtUpCHColumn":
								if (plane == "XY")
									for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
										sel_obj._objects[i]._objects[j].set({stroke: "#68f441"});
								else
									sel_obj._objects[i].set({stroke: "#68f441"});
							break;
							case "postColumn":
								if (plane == "XY")
								{
									if (sel_obj._objects[i].shapeType != "defaultColumn" && sel_obj._objects[i].shapeType != "double")
										sel_obj._objects[i].set({stroke: "#68f441"});
									else if (sel_obj._objects[i].shapeType == "defaultColumn")
										sel_obj._objects[i].set({fill: "#68f441"});
									else 
									{
										for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
											sel_obj._objects[i]._objects[j].set({stroke: "#68f441"});
									}
								}
								else
								{
									sel_obj._objects[i].set({stroke: "#68f441"});
								}
							break;
							case "pourStop":
								sel_obj._objects[i].set({stroke: "#ffa500"});
							break;
						}
					}
				}
				canvas.renderAll();
			}
			else if (sel_obj._objects && checkGroup(sel_obj) && sel_obj.type == "new_group")
			{
				switch(sel_obj.mode)
				{
					case "h_brace":
						for (var i = 0; i < sel_obj._objects.length; i ++)
							for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
								sel_obj._objects[i]._objects[j].set({stroke: "#222ee2"});
					break;
					case "v_brace":
						for (var i = 0; i < sel_obj._objects.length; i ++)
							for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
								sel_obj._objects[i]._objects[j].set({stroke: "#e510cc"});
					break;
					case "boxColumn":
						if (plane == "XY")
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
									sel_obj._objects[i]._objects[j].set({stroke: "#68f441"});
						}
						else
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								sel_obj._objects[i].set({stroke: "#68f441"});
						}
					break;
					case "builtUpCRColumn":
						if (plane == "XY")
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
									sel_obj._objects[i]._objects[j].set({stroke: "#68f441"});
						}
						else
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								sel_obj._objects[i].set({stroke: "#68f441"});
						}
					break;
					case "builtUpCHColumn":
						if (plane == "XY")
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								for (var j = 0; j < sel_obj._objects[i]._objects.length; j ++)
									sel_obj._objects[i]._objects[j].set({stroke: "#68f441"});
						}
						else
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								sel_obj._objects[i].set({stroke: "#68f441"});
						}
					break;
				}
				canvas.renderAll();
			}
			else if (checkGroup(sel_obj))
			{
				switch(sel_obj.mode)
				{
					case "h_brace":
						for (var i = 0; i < sel_obj._objects.length; i ++)
							sel_obj._objects[i].set({stroke: "#222ee2"});
					break;
					case "v_brace":
						for (var i = 0; i < sel_obj._objects.length; i ++)
							sel_obj._objects[i].set({stroke: "#e510cc"});
					break;
					case "boxColumn":
						if (plane == "XY")
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								sel_obj._objects[i].set({stroke: "#68f441"});
						}
						else
						{
							sel_obj.set({stroke: "#68f441"});
						}
					break;
					case "builtUpCRColumn":
						if (plane == "XY")
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								sel_obj._objects[i].set({stroke: "#68f441"});
						}
						else
						{
							sel_obj.set({stroke: "#68f441"});
						}
					break;
					case "builtUpCHColumn":
						if (plane == "XY")
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								sel_obj._objects[i].set({stroke: "#68f441"});
						}
						else
						{
							sel_obj.set({stroke: "#68f441"});
						}
					break;
					case "postColumn":
						if (plane == "XY")
						{
							for (var i = 0; i < sel_obj._objects.length; i ++)
								sel_obj._objects[i].set({stroke: "#68f441"});
						}
						else
						{
							sel_obj.set({stroke: "#68f441"});
						}
					break;
				}
				canvas.renderAll();
			}
			else if (!sel_obj._objects)
			{
				switch (sel_obj.mode)
				{
					case "Beam":
						sel_obj.set({stroke: "#000000"});
					break;
					case "periBeam":
						sel_obj.set({stroke: "#000000"});
					break;
					case "ibeam":
						sel_obj.set({stroke: "#000000"});
					break;
					case "pgirder":
						sel_obj.set({stroke: "#000000"});
					break;
					case "cantBeam":
						sel_obj.set({stroke: "#000000"});
					break;
					case "Column":
						if (plane == "XY")
						{
							if (sel_obj.shapeType != "defaultColumn")
								sel_obj.set({stroke: "#68f441"});
							else 
								sel_obj.set({fill: "#68f441"});
						}
						else
						{
							sel_obj.set({stroke: "#68f441"});
						}
					break;
					case "builtUpIColumn":
						if (plane == "XY")
							sel_obj.set({fill: "#68f441"});
						else
							sel_obj.set({stroke: "#68f441"});
					break;
					case "postColumn":
						if (plane == "XY")
						{
							if (sel_obj.shapeType != "defaultColumn")
								sel_obj.set({stroke: "#68f441"});
							else 
								sel_obj.set({fill: "#68f441"});
						}
						else
						{
							sel_obj.set({stroke: "#68f441"});
						}
					break;
					case "pourStop":
						sel_obj.set({stroke: "#ffa500"});
					break;
				}
				canvas.renderAll();
			}
		}
	}

	canvas.on("mouse:down", function(evt)
	{
		if (!evt.e || !evt.e.ctrlKey)
			selection_buffer = [];
	});

	$("#btn_undo").click(function()
	{
		undoAction.undo();
	});

	$("#btn_redo").click(function()
	{
		undoAction.redo();
	})

	$("#btn_select").click(function()
	{
		shape.shapeDisabled();
		canvas.defaultCursor = 'default';
		canvEvent.contextmenu.clipboard = null;
		canvas.discardActiveObject();
		canvas.renderAll(); 
	});

	var flag_pan;

	$("#btn_reset").click(function()
	{
		var current_zoom = canvas.getZoom();
		canvas.setZoom(default_zoom);

		canvas.absolutePan(new fabric.Point(0, 0));
		canvas.relativePan(new fabric.Point(default_pan_l, 0));
		canvas.relativePan(new fabric.Point(0, default_pan_r));
		pan_l_l = 0;
		pan_l = default_pan_l;
		pan_r = default_pan_r;
		pan_r_r = 0;
		reloadGrid();
	})

	$("#btn_left").mousedown(function()
	{
		flag_pan = setInterval(movePan, 300, 1);
	});

	$("#btn_right").mousedown(function()
	{
		flag_pan = setInterval(movePan, 300, 2);
	});

	$("#btn_up").mousedown(function()
	{
		flag_pan = setInterval(movePan, 300, 3);
	});

	$("#btn_down").mousedown(function()
	{
		flag_pan = setInterval(movePan, 300, 4);
	});

	$("#btn_left").click(function()
	{
		movePan(1);
	});

	$("#btn_right").click(function()
	{
		movePan(2);
	});

	$("#btn_up").click(function()
	{
		movePan(3);
	});

	$("#btn_down").click(function()
	{
		movePan(4);
	});

	$("#btn_left").mouseup(function()
	{
		clearInterval(flag_pan);
	});

	$("#btn_right").mouseup(function()
	{
		clearInterval(flag_pan);
	});

	$("#btn_up").mouseup(function()
	{
		clearInterval(flag_pan);
	});

	$("#btn_down").mouseup(function()
	{
		clearInterval(flag_pan);
	});

	function movePan(flag)
	{
		switch(flag)
		{
			case 1:
				pan_l += units;
				pan_l_l += units / canvas.getZoom() * default_zoom;
				canvas.relativePan(new fabric.Point(units, 0));
			break;
			case 2:
				pan_l -= units;
				pan_l_l -= units / canvas.getZoom() * default_zoom;
				canvas.relativePan(new fabric.Point(-units, 0));
			break;
			case 3:
				pan_r += units;
				pan_r_r += units / canvas.getZoom() * default_zoom;
				canvas.relativePan(new fabric.Point(0, units));
			break;
			case 4:
				pan_r -= units;
				pan_r_r -= units / canvas.getZoom() * default_zoom;
				canvas.relativePan(new fabric.Point(0, -units));
			break;
		}
	}

	var flag_zoomin;

	$("#btn_zoomin").mousedown(function()
	{
		flag_zoomin = setInterval(zoom, 300, 0);
	});

	$("#btn_zoomin").mouseup(function()
	{
		clearInterval(flag_zoomin);
	});

	$("#btn_zoomin").click(function()
	{
		var sel_obj = canvas.getActiveObject();
		if (sel_obj)
			fillZoom();
		else
			zoom(0)
	});

	$("#btn_zoomout").mousedown(function()
	{
		flag_zoomin = setInterval(zoom, 300, 1);
	});

	$("#btn_zoomout").mouseup(function()
	{
		clearInterval(flag_zoomin);
	});

	$("#btn_zoomout").click(function()
	{
		zoom(1);
	});

	function zoom(flag)
	{
		if (flag == 0)
		{
			canvas.setZoom(canvas.getZoom() * zoom_multiplier);
			pan_l *= zoom_multiplier;
			pan_r *= zoom_multiplier;
			refreshGrid();
			// reSelect();
			// reloadGrid();
			// deselect();
		}
		else
		{
			canvas.setZoom(canvas.getZoom() / zoom_multiplier);
			pan_l /= zoom_multiplier;
			pan_r /= zoom_multiplier;
			refreshGrid();
			// reSelect();
			// reloadGrid();
			// deselect();
		}
	}

	$(document).mouseup(function()
	{
		clearInterval(flag_pan);
		clearInterval(flag_zoomin);
	});
}

function fillZoom()
{
	var sel_obj = canvas.getActiveObject();
	var min_left = 99999;
	var max_left = -99999;

	var min_top = 99999;
	var max_top = -99999;
	if (sel_obj._objects && !checkGroup(sel_obj))
		for (var i = 0; i < sel_obj._objects.length; i ++)
		{
			if (sel_obj._objects[i].mode != "gridLine" && sel_obj._objects[i].mode != "axisLabel")
			{
				if (sel_obj._objects[i].left + sel_obj.left +  sel_obj.width / 2< min_left) 
				{
					min_left = sel_obj._objects[i].left + sel_obj.left +  sel_obj.width / 2;
				}
				if (sel_obj._objects[i].left + sel_obj._objects[i].width + sel_obj.left +  sel_obj.width / 2 > max_left)
				{
					max_left = sel_obj._objects[i].left + sel_obj._objects[i].width + sel_obj.left +  sel_obj.width / 2;
				}

				if (sel_obj._objects[i].top + sel_obj.top + sel_obj.height / 2 < min_top) 
				{
					min_top = sel_obj._objects[i].top + sel_obj.top + sel_obj.height / 2;
				}

				if (sel_obj._objects[i].top + sel_obj._objects[i].height + sel_obj.top + sel_obj.height / 2 > max_top)
				{
					max_top = sel_obj._objects[i].top + sel_obj._objects[i].height + sel_obj.top + sel_obj.height / 2;
				}
			}
		}
	else if (sel_obj)
	{
		if (sel_obj.mode == "gridLine" || sel_obj.mode == "axisLabel")
			return;
		min_left = sel_obj.left;
		max_left = sel_obj.left + sel_obj.width;

		min_top = sel_obj.top;
		max_top = sel_obj.top + sel_obj.height;
	}
	else if (!sel_obj)
		return;
	var width = max_left - min_left;
	var height = max_top - min_top;
	var zoom;
	if (width == 0 && height == 0)
		return;
	else if (width == 0 && height != 0)
		zoom = (canvas.height - 60) / height;
	else if (width != 0 && height == 0)
		zoom = (canvas.width - 80) / width;
	else
		zoom = Math.min((canvas.width - 80) / width, (canvas.height - 60) / height);
	
	var centerPoint = new fabric.Point(canvas.width / 2, canvas.height / 2);
	
	var inverted = fabric.util.invertTransform(canvas.viewportTransform);
	var centerCanPoint = fabric.util.transformPoint(centerPoint, inverted);

	var pointer = fabric.util.transformPoint(new fabric.Point(min_left + width / 2, min_top + height / 2), canvas.viewportTransform);
	canvas.zoomToPoint(pointer, zoom);

	canvas.relativePan({x: (canvas.width - 80) / 2 - pointer.x, y: (canvas.height) / 2 - pointer.y});
	refreshGrid();
	// reSelect();
	// reloadGrid();
	// deselect();
}

function refreshGrid()
{
	var objects = canvas.getObjects();
	for (var i = objects.length - 1; i >= 0; i --)
	{
		if (objects[i].mode == "axisLabel")
		{
			canvas.remove(objects[i]);
		}
	}

	if ($("#viewdrpdwn").val() == 1)
		drawGrid("XY", true);
	else if ($("#viewdrpdwn").val() == 2)
		drawGrid("XZ", true);
	else 
		drawGrid("YZ", true);
}

function initSubmitEvents()
{
	$("#finishbtndd").click(function()
	{
		console.log(JSON.stringify(memberList));
	})
	$(document).on("click", "#peri .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		if ($("#viewdrpdwn").val() != 1)
		{
			$("#peri .modalcancel").click();
			$("#message_area p").html("You can't draw Perimeter Beams on Elevation View.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return;
		}
		
		var beam = new beamMember();
		beam.type = "periBeam";

		var depth = 0;

		shape.shapeDisabled();

		var configure_beam = new_configure.peribeam;

		Object.keys(configure_beam.memberProperties).map(function(entry)
		{
			beam.memberProperties[entry] = $("#" + configure_beam.memberProperties[entry]).val();
		});

		Object.keys(configure_beam.finishProperties).map(function(entry)
		{
			if (entry != "paintType" && entry != "primerCheck")
				beam.finishProperties[entry] = $("#" + configure_beam.finishProperties[entry]).val();
			else if (entry == "primerCheck")
			{
				beam.finishProperties[entry] = $("#" + configure_beam.finishProperties[entry]).prop("checked");
			}
			else 
				beam.finishProperties[entry] = $("input[name='" + configure_beam.finishProperties[entry] + "']:checked").val();
		});

		Object.keys(configure_beam.connectionProperties).map(function(entry)
		{
			beam.connectionProperties[entry] = $("#" + configure_beam.connectionProperties[entry]).val();
		});
		
		Object.keys(configure_beam).map(function(entry) 
		{
			if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
			{
				beam[entry] = $("#" + configure_beam[entry]).val();
			
				if ($("#" + configure_beam[entry]).is(":checkbox"))
				{
					if ($("#" + configure_beam[entry]).prop("checked"))
					{
						beam[entry] = "on";
					}
					else 
					{
						beam[entry] = "off";
					}
				}
			}
		});

		if ($("#viewdrpdwn").val() == 1)
		{
			if ($("#MassPlacement:checked").length > 0)
			{
				beam.memberProperties.startPoint.z 	= convertToUnit($("#pbtosft").val(), $("#pbtosin").val(), $("#pbtosfr").val(), $("#plusminus").val());
				beam.memberProperties.endPoint. z 	= convertToUnit($("#pbtosft").val(), $("#pbtosin").val(), $("#pbtosfr").val(), $("#plusminus").val());
				beam.floor = $("#depthdrpdwn").val();
				placePeripheralBeams(beam,"XY");
			}
			else
			{
				defaultBeam.isDrawReady = 1;
				beam.memberProperties.startPoint.z 	= convertToUnit($("#pbtosft").val(), $("#pbtosin").val(), $("#pbtosfr").val(), $("#plusminus").val());
				beam.memberProperties.endPoint. z 	= convertToUnit($("#pbtosft").val(), $("#pbtosin").val(), $("#pbtosfr").val(), $("#plusminus").val());
				beam.floor = $("#depthdrpdwn").val();
				defaultBeam.tmpData = beam;
				canvas.defaultCursor = 'pointer';
			}
		}
		// peri_beam.isOneDrawReady = 1;
		$("#peri .modalcancel").click();
		reloadGrid();
		return;
	});

	$(document).on("click", "#gbeam .modalapply", function()
	{	
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		var beam = new beamMember();
		beam.type = "Beam";

		if ($("#viewdrpdwn").val() != 1)
		{
			$("#gbeam .modalcancel").click();
			$("#message_area p").html("You can't draw Grid Beams on Elevation View.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return;
		}

		var configure_beam = new_configure.gbeam;

		Object.keys(configure_beam.memberProperties).map(function(entry)
		{
			beam.memberProperties[entry] = $("#" + configure_beam.memberProperties[entry]).val();
		});

		Object.keys(configure_beam.finishProperties).map(function(entry)
		{
			if (entry != "paintType" && entry != "primerCheck")
				beam.finishProperties[entry] = $("#" + configure_beam.finishProperties[entry]).val();
			else if (entry == "primerCheck")
				beam.finishProperties[entry] = $("#" + configure_beam.finishProperties[entry]).prop("checked");
			else
				beam.finishProperties[entry] = $("input[name='" + configure_beam.finishProperties[entry] + "']:checked").val();
		});

		Object.keys(configure_beam.connectionProperties).map(function(entry)
		{
			beam.connectionProperties[entry] = $("#" + configure_beam.connectionProperties[entry]).val();
		});
		
		Object.keys(configure_beam).map(function(entry) 
		{
			if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
			{
				beam[entry] = $("#" + configure_beam[entry]).val();

				if ($("#" + configure_beam[entry]).is(":checkbox"))
				{
					if ($("#" + configure_beam[entry]).prop("checked"))
					{
						beam[entry] = "on";
					}
					else 
					{
						beam[entry] = "off";
					}
				}
			}
		});

		var depth = $("#depthdrpdwn").val();

		shape.shapeDisabled();

		beam.name = "GridBeam";
		beam.type = "Beam";
		beam.floor = $("#depthdrpdwn").val();

		var height = convertToUnit($('#gBeamTOS').val(), $('#gBeamTOS_in').val(), $('#gBeamTOS_fr').val(), $('#plusminus').val());
		
		if ($("#viewdrpdwn").val() == 1)
		{
			
			if ($("#MassPlacement:checked").length > 0)
			{
				beam.memberProperties.startPoint.z 	= height;
				beam.memberProperties.endPoint.z 	= height;
				placeGridBeams(beam,"XY");
			}
			else
			{
				defaultBeam.isDrawReady = 1;
				beam.memberProperties.startPoint.z 	= height;
				beam.memberProperties.endPoint.z 	= height;
				beam.floor = $("#depthdrpdwn").val();
				defaultBeam.tmpData = beam;
				canvas.defaultCursor = 'pointer';
			}
		}
		$("#gbeam .modalcancel").click();
		reloadGrid();
	});

	$(document).on("click", "#ibeam .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();

		infillBeam.isDrawReady = 1;
		canvas.defaultCursor = 'pointer';
		
		$("#ibeam .modalcancel").click();
	})

	$(document).on('click', '#hBraceModal .modalapply', function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();

		hbrace.isDrawReady = 1;

		hbrace.s_type = $("#hBraceShapes").val();
		canvas.defaultCursor = 'pointer';

		$("#hBraceModal .modalcancel").click();
	});

	$(document).on('click', '#vBraceModal .modalapply', function() 
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();

		vbrace.isDrawReady = 1;
		vbrace.s_type = $("#vBraceShapes").val();

		canvas.defaultCursor = 'pointer';

		$("#vBraceModal .modalcancel").click();
	});

	$(document).on('click', '#pitched .modalapply', function() 
	{
		shape.shapeDisabled();
		truss.isDrawReady = 1;

		canvas.defaultCursor = 'pointer';

		$("#pitched .modalcancel").click();
	});

	$(document).on('click', '#parallel .modalapply', function() 
	{
		shape.shapeDisabled();
		paraTruss.isDrawReady = 1;

		canvas.defaultCursor = 'pointer';

		$("#parallel .modalcancel").click();
	});

	$(document).on('click', '#trapezoidal .modalapply', function() 
	{
		shape.shapeDisabled();
		trapeTruss.isDrawReady = 1;

		canvas.defaultCursor = 'pointer';

		$("#trapezoidal .modalcancel").click();
	});

	$(document).on('click', '#pourstopModal .modalapply', function() 
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		var size  = gridData.xaxis[1]["Dimension"] * scale;
		
		shape.shapeDisabled();

		// bplates.drawShape(sPos, ePos, data);
		bplates.isDrawReady = 1;
		canvas.defaultCursor = 'pointer';
		bplates.pourStop = new pourStop();
		var pourstopProperties = new_configure.pourstop;
		Object.keys(pourstopProperties.memberProperties).map(function(entry)
		{
			bplates.pourStop.memberProperties[entry] = $("#pourstopModal #" + pourstopProperties.memberProperties[entry]).val();
		});

		Object.keys(pourstopProperties.finishProperties).map(function(entry)
		{
			if (entry != "paintType" && entry != "primerCheck")
				bplates.pourStop.finishProperties[entry] = $("#pourstopModal #" + pourstopProperties.finishProperties[entry]).val();
			else if (entry == "primerCheck")
				bplates.pourStop.finishProperties[entry] = $("#pourstopModal #" + pourstopProperties.finishProperties[entry]).prop("checked");
			else
				bplates.pourStop.finishProperties[entry] = $("#pourstopModal input[name='" + pourstopProperties.finishProperties[entry] + "']:checked").val();
		});

		Object.keys(pourstopProperties).map(function(entry) 
		{
			if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
				bplates.pourStop[entry] = $("#" + pourstopProperties[entry]).val();
		});

		if ($("#pourstop1").is(":checked"))
		{
			bplates.pourStop.memberProperties.orientation = "left";
		}
		else 
		{
			bplates.pourStop.memberProperties.orientation = "right";
		}

		if ($("#psmswitch").prop("checked"))
		{
			bplates.pourStop.isShearStudAttached = "on";
		}
		else
		{
			bplates.pourStop.isShearStudAttached = "off";
		}

		$("#pourstopModal .modalcancel").click();
	});

	$(document).on("click", "#plategirderModal .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();

		pgirder.isDrawReady = 1;
		canvas.defaultCursor = 'pointer';
		$("#plategirderModal .modalcancel").click();
	});

	$(document).on("click", "#cbeam .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();

		cantilBeam.isDrawReady = 1;
		if ($("#spliceConnectiontype").val() == "column")
		{
			cantilBeam.connectionType = "column";
		}
		else 
		{
			cantilBeam.connectionType = "beam";
		}
		canvas.defaultCursor = 'pointer';
		cantilBeam.cantBeam = new cantileverBeam();
		var cantilBeamProperties = new_configure.cantileverBeam;
		Object.keys(cantilBeamProperties.memberProperties).map(function(entry)
		{
			cantilBeam.cantBeam.memberProperties[entry] = $("#" + cantilBeamProperties.memberProperties[entry]).val();
		});

		Object.keys(cantilBeamProperties.finishProperties).map(function(entry)
		{
			if (entry != "paintType" && entry != "primerCheck")
				cantilBeam.cantBeam.finishProperties[entry] = $("#" + cantilBeamProperties.finishProperties[entry]).val();
			else if (entry == "primerCheck")
				cantilBeam.cantBeam.finishProperties[entry] = $("#" + cantilBeamProperties.finishProperties[entry]).prop("checked");
			else
				cantilBeam.cantBeam.finishProperties[entry] = $("input[name='" + cantilBeamProperties.finishProperties[entry] + "']:checked").val();
		});

		Object.keys(cantilBeamProperties.connectionProperties).map(function(entry)
		{
			cantilBeam.cantBeam.connectionProperties[entry] = $("#" + cantilBeamProperties.connectionProperties[entry]).val();
		});

		Object.keys(cantilBeamProperties).map(function(entry) 
		{
			if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
			{
				cantilBeam.cantBeam[entry] = $("#" + cantilBeamProperties[entry]).val();
				if ($("#" + cantilBeamProperties[entry]).is(":checkbox"))
				{
					if ($("#" + cantilBeamProperties[entry]).prop("checked"))
					{
						cantilBeam.cantBeam[entry] = "on";
					}
					else 
					{
						cantilBeam.cantBeam[entry] = "off";
					}
				}
			}
		});
		$("#cbeam .modalcancel").click();
	});

	$(document).on("click", "#gridModal .modalapply", function()
	{
		shape.shapeDisabled();
		if ($("#distanceFrom").val() == undefined || $("#distanceFrom").val() < 0)
		{
			alert("Invalid distance");
			return false;
		}
		if (($("#axisLabel").val() == undefined || $("#axisLabel").val() == "") && gridPlan.insertReady)
		{
			alert("Invalid label");
			return false;
		}
		gridPlan.isDrawReady 	= 1;
		gridPlan.label 			= $("#axisLabel").val();
		gridPlan.distance_ft 		= $("#distanceFrom").val();
		gridPlan.distance_in 		= $("#distanceFrom_in").val();
		gridPlan.distance_fr 		= $("#distanceFrom_fr").val();
		
		gridPlan.move 			= $("#includingMoveGrid").is(":checked");
		gridPlan.negative 		= $("#distanceNegative").val();

		if (gridPlan.insertReady)
			gridPlan.drawShape("#e72f5f", gridPlan.position_index, gridPlan.label, gridPlan.move, gridPlan.negative);
		else 
			gridPlan.drawMove("#e72f5f", gridPlan.position_index, gridPlan.label, gridPlan.negative);

		$("#gridModal .modalcancel").click();
	});

	$(document).on("click", "#floorModal .modalapply", function()
	{
		shape.shapeDisabled();
		if ($("#distanceFromElev").val() == undefined || $("#distanceFromElev").val() < 0)
		{
			alert("Invalid distance");
			return false;
		}

		if (($("#axisLabel").val() == undefined || $("#axisLabel").val() == "") && gridElev.insertReady)
		{
			alert("Invalid label");
			return false;
		}

		gridElev.isDrawReady = 1;
		gridElev.label 		 = $("#axisLabel").val();

		gridElev.distance_ft = $("#distanceFromElev").val();
		gridElev.distance_in = $("#distanceFromElev_in").val();
		gridElev.distance_fr = $("#distanceFromElev_fr").val();
		gridElev.distance 	 = convertToUnit(gridElev.distance_ft, gridElev.distance_in, gridElev.distance_fr, $("#distanceElevNegative").val());
		gridElev.move 		 = $("#includingMoveFloor").is(":checked");
		gridElev.negative 	 = $("#distanceElevNegative").val();
		if (gridElev.insertReady)
			gridElev.drawShape("#e72f5f", gridElev.position_index, gridElev.distance, gridElev.label, gridElev.move, gridElev.negative);
		else 
			gridElev.drawMove("#e72f5f", gridElev.position_index, gridElev.distance, gridElev.negative);

		$("#floorModal .modalcancel").click();
	})

	$(document).on("click", "#copyFloor", function()
	{
		undoAction.addAction("memberPlace");
		var from_floor 			= parseFloat($("#from_copy").val());
		var from_paste_floor 	= parseFloat($("#from_paste").val());
		var to_paste_floor 		= parseFloat($("#to_paste").val());
		for (var i = memberList.length - 1; i >= 0 ; i --)
		{
			if (checkColumnMember(memberList[i]))
				continue;
			if (memberList[i].floor != undefined && memberList[i].floor == from_floor)
			{
				var from, to;
				for ( var j = 0; j < gridData.zaxis.length; j ++ )
				{
					if (gridData.zaxis[j].Dimension == from_paste_floor)
						from = j;
					if (gridData.zaxis[j].Dimension == to_paste_floor)
						to = j;
				}
				for (var j = from; j <= to; j ++ )
				{
					var newMember = JSON.parse(JSON.stringify(memberList[i]));
					newMember.floor = gridData.zaxis[j].Dimension;
					newMember.id = "Mem" + memId ++;
					newMember.uid = newMember.type + "_" + newMember.id;
					if (newMember.tos_ft != undefined)
					{
						var floor_str = reverseFromUnit(newMember.floor - from_floor + convertToUnit(newMember.tos_ft, newMember.tos_in, newMember.tos_fr, newMember.tos_sign));
						newMember.tos_ft = floor_str.ft;
						newMember.tos_in = floor_str.in;
						newMember.tos_fr = floor_str.fr;
						newMember.tos_sign = "+";
						// newMember.origin = undefined;
						newMember.memberProperties.startPoint.z = convertToUnit(floor_str.ft, floor_str.in, floor_str.fr, "+");
						newMember.memberProperties.endPoint.z = convertToUnit(floor_str.ft, floor_str.in, floor_str.fr, "+");
						if (checkExistMember(newMember))
							continue;
					}
					// memberList.push(newMember);
					dataModel.insertData(newMember);
				}
			}
		}
		$("#message_area p").html("" + $("#from_copy option:selected").text() + " was copied to " + $("#from_paste option:selected").text() + " and " + $("#to_paste option:selected").text() + ".");
		$("#message_area").fadeIn();

		setTimeout(function()
		{
			$("#message_area").fadeOut();
		}, 3000);
		return;
	});

	$("#gridModal #gridAxis").change(function() 
	{
		undoAction.addAction("editGrid");
		gridPlan.axis = $("#gridAxis").val();
		$("#axisText").html($("#gridAxis").val());
	});

	$(document).on("click", "#columnModal .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();
		var column = new columnMember();
		$("#columnModal .modalcancel").click();

		if ($("#viewdrpdwn").val() == 1)
		{
			var configure_column = new_configure.column;

			Object.keys(configure_column.memberProperties).map(function(entry)
			{
				column.memberProperties[entry] = $("#" + configure_column.memberProperties[entry]).val();
			});

			Object.keys(configure_column.finishProperties).map(function(entry)
			{
				if (entry != "paintType" && entry != "primerCheck")
					column.finishProperties[entry] = $("#" + configure_column.finishProperties[entry]).val();
				else if (entry == "primerCheck")
					column.finishProperties[entry] = $("#" + configure_column.finishProperties[entry]).prop("checked");
				else
				{
					column.finishProperties[entry] = $("input[name='" + configure_column.finishProperties[entry] + "']:checked").val();
				}
			});

			Object.keys(configure_column.connectionProperties).map(function(entry)
			{
				if (entry == "cap_check")
					column.connectionProperties[entry] = $("#" + configure_column.connectionProperties[entry]).prop("checked");
				else
					column.connectionProperties[entry] = $("#" + configure_column.connectionProperties[entry]).val();
			});
			
			Object.keys(configure_column).map(function(entry) 
			{
				if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
				{
					if ($("#" + configure_column[entry]).is(":checkbox"))
					{
						if ($("#" + configure_column[entry]).prop("checked"))
							column[entry] = "on";
						else
							column[entry] = "off";
					}
					else
						column[entry] = $("#" + configure_column[entry]).val();
				}
			});
			column.name="Column";
			column.type="Column";
			for ( var i = 0; i < gridData.zaxis; i ++)
			{
				if (gridData.memberProperties.zaxis[i].Label == $("#depthdrpdwn").val())
				{
					column.memberProperties.startPoint.z = gridData.zaxis[i].Dimension;
					column.memberProperties.endPoint.z = gridData.zaxis[i].Dimension;
				}
			}

			column.memberProperties.startPoint.z = convertToUnit($("#colBottomEleTxt").val(), $("#colBottom_in").val(), $("#colBottom_fr").val(), $("#colBottomNegative").val());

			column.memberProperties.endPoint.z = convertToUnit($("#colTopEleTxt").val(), $("#colTop_in").val(), $("#colTop_fr").val(), $("#colTopNegative").val());

			column.floor = $('#depthdrpdwn').val();
			
			if ($("#MassPlacement:checked").length > 0)
			{
				placeDefaultColumns(column,"XY");
			}
			else 
			{
				defaultColumn.tmpData = column;
				defaultColumn.isDrawReady = true;
				canvas.defaultCursor = 'pointer';
			}
		}

		else 
		{
			$("#message_area p").html("You can't draw Columns on Elevation View.");
			$("#message_area").fadeIn();

			setTimeout(function()
			{
				$("#message_area").fadeOut();
			}, 3000);
			return;
		}
	});

	$(document).on("click", "#postModal .modalapply", function()
	{
		if (genericValidatorfunction($(this).attr("id")))
		{
			shape.shapeDisabled();
			postColumn.drawPost();
			$("#postModal .modalcancel").click();
		}
	});

	$(document).on("click", "#boxcolumnModal .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();
		boxColumn.isDrawReady = 1;
		canvas.defaultCursor = 'pointer';
		$("#boxcolumnModal .modalcancel").click();
	});

	$(document).on("click", "#builtupcolumnModal2 .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();
		iboxColumn.isDrawReady = 1;
		canvas.defaultCursor = 'pointer';
		$("#builtupcolumnModal2 .modalcancel").click();
	})

	$(document).on("click", "#builtupcolumnModal3 .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();
		iiboxColumn.isDrawReady = 1;
		canvas.defaultCursor = 'pointer';
		$("#builtupcolumnModal3 .modalcancel").click();
	});

	$(document).on("click", "#builtupcolumnModal1 .modalapply", function()
	{
		if (!genericValidatorfunction($(this).attr("id")))
			return false;
		shape.shapeDisabled();
		iiiboxColumn.isDrawReady = 1;
		canvas.defaultCursor = 'pointer';
		$("#builtupcolumnModal1 .modalcancel").click();
	})

	$(document).on("click", ".modalcancel", function()
	{
		$("#hiddenSlide").click();
	});

	$(document).on("click", "#hiddenSlide", function()
	{
		$("#rightFloat").html("");
	})

	$(document).on("click", ".qckModifyBtn", function()
	{
		undoAction.addAction("memberPlace");
		var memID =$("#memID").val();
		var memType = $("#memType").val();
		var member = memberList[parseInt(memID)];
		if (memID.split(",").length > 1)
		{
			applyGroup(memID.split(","), $(this).attr("id"));
			return;
		}

		if (!genericValidatorfunction($(this).attr("id")))
			return false;

		var configure = new_configure[memType];
		if (configure == undefined)
			return;
		Object.keys(configure.memberProperties).map(function(entry)
		{
			memberList[parseInt(memID)].memberProperties[entry] = $("#" + configure.memberProperties[entry]).val();
		});

		Object.keys(configure.finishProperties).map(function(entry)
		{
			if (entry != "paintType" && entry != "primerCheck")
				memberList[parseInt(memID)].finishProperties[entry] = $("#" + configure.finishProperties[entry]).val();
			else if (entry == "primerCheck")
				memberList[parseInt(memID)].finishProperties[entry] = $("#" + configure.finishProperties[entry]).prop("checked");
			else
				memberList[parseInt(memID)].finishProperties[entry] = $("input[name='" + configure.finishProperties[entry] + "']:checked").val();
		});

		if (memType != "pourstop")
		{
			if (memType == "column" || memType == "box" || memType == "builtup" || memType == "crucified" || memType == "builtupPlate")
			{
				Object.keys(configure.connectionProperties).map(function(entry)
				{
					if (entry == "cap_check")
						memberList[parseInt(memID)].connectionProperties[entry] = $("#" + configure.connectionProperties[entry]).prop("checked");
					else
						memberList[parseInt(memID)].connectionProperties[entry] = $("#" + configure.connectionProperties[entry]).val();
				});
			}
			else
				Object.keys(configure.connectionProperties).map(function(entry)
				{
					memberList[parseInt(memID)].connectionProperties[entry] = $("#" + configure.connectionProperties[entry]).val();
				});
		}
		if (memType == "pourstop")
		{
			if ($("#pourposition").val() != "fulllength")
			{
				var width = convertToUnit($("#leftendpositionft").val(), $("#leftendpositionin").val(), $("#leftendpositionfr").val()) + convertToUnit($("#pourlengthft").val(), $("#pourlengthin").val(), $("#pourlengthfr").val());
				if (memberList[parseInt(memID)].maxWidth != 0 && width > memberList[parseInt(memID)].maxWidth)
				{
					$("#message_area p").html("You can't change Pour Stop on selected Beam.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 2000);
					return;
				}
				else if (memberList[parseInt(memID)].maxHeight != 0 && width > memberList[parseInt(memID)].maxHeight)
				{
					$("#message_area p").html("You can't change Pour Stop on selected Beam.");
					$("#message_area").fadeIn();

					setTimeout(function()
					{
						$("#message_area").fadeOut();
					}, 2000);
					return;
				}
			}
		}
		Object.keys(configure).map(function(entry) 
		{
			if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
			{
				memberList[parseInt(memID)][entry] = $("#" + configure[entry]).val();
				if ($("#" + configure[entry]).is(":checkbox"))
				{
					if ($("#" + configure[entry]).prop("checked"))
						memberList[parseInt(memID)][entry] = "on";
					else
						memberList[parseInt(memID)][entry] = "off";
				}
			}
		});

		if (memType == "peribeam") 
		{
			if ($("#rightFloat #pbeamalignment").val() == "Sloped")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft1").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft2").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin1").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin2").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr1").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr2").val();

				memberList[parseInt(memID)].tos_sign1 = $("#plusminus1").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus2").val();
			}

			else if ($("#rightFloat #pbeamalignment").val() == "Skewed")
			{
				memberList[parseInt(memID)].left_x_ft = $("#pbtosft3").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft4").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin3").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin4").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr3").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr4").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft5").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft6").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin5").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin6").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr5").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr6").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative1").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative2").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative3").val();
			}

			else if ($("#rightFloat #pbeamalignment").val() == "Sloped & Skewed")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft7").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft8").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin7").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin8").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr7").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr8").val();
			
				memberList[parseInt(memID)].tos_sign1 = $("#plusminus7").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus8").val();

				memberList[parseInt(memID)].left_x_ft = $("#pbtosft9").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft10").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin9").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin10").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr9").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr10").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft11").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft12").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin11").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin12").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr11").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr12").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative4").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative5").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative6").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative7").val();
			}
			memberList[parseInt(memID)].splice = {};
		}

		if (memType == "gbeam") 
		{
			if ($("#rightFloat #gbeamalignment").val() == "Sloped")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft1").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft2").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin1").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin2").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr1").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr2").val();
			
				memberList[parseInt(memID)].tos_sign1 = $("#plusminus1").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus2").val();
			}

			else if ($("#rightFloat #gbeamalignment").val() == "Skewed")
			{
				memberList[parseInt(memID)].left_x_ft = $("#pbtosft3").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft4").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin3").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin4").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr3").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr4").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft5").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft6").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin5").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin6").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr5").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr6").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative1").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative2").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative3").val();
			}

			else if ($("#rightFloat #gbeamalignment").val() == "Sloped & Skewed")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft7").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft8").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin7").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin8").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr7").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr8").val();
			
				memberList[parseInt(memID)].tos_sign1 = $("#plusminus7").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus8").val();

				memberList[parseInt(memID)].left_x_ft = $("#pbtosft9").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft10").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin9").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin10").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr9").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr10").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft11").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft12").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin11").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin12").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr11").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr12").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative4").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative5").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative6").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative7").val();
			}
			memberList[parseInt(memID)].splice = {};
		}

		if (memType == "ibeam")
		{
			if ($("#rightFloat #infillbeamalignment").val() == "Sloped")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft1").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft2").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin1").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin2").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr1").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr2").val();
			
				memberList[parseInt(memID)].tos_sign1 = $("#plusminus1").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus2").val();
			}

			else if ($("#rightFloat #infillbeamalignment").val() == "Skewed")
			{
				memberList[parseInt(memID)].left_x_ft = $("#pbtosft3").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft4").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin3").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin4").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr3").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr4").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft5").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft6").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin5").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin6").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr5").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr6").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative1").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative2").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative3").val();
			}

			else if ($("#rightFloat #infillbeamalignment").val() == "Sloped & Skewed")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft7").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft8").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin7").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin8").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr7").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr8").val();
			
				memberList[parseInt(memID)].tos_sign1 = $("#plusminus7").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus8").val();

				memberList[parseInt(memID)].left_x_ft = $("#pbtosft9").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft10").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin9").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin10").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr9").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr10").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft11").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft12").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin11").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin12").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr11").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr12").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative4").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative5").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative6").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative7").val();
			}
		}

		if (memType == "pgirder")
		{
			if ($("#rightFloat #plategrideralignment").val() == "Sloped")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft1").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft2").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin1").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin2").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr1").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr2").val();
			
				memberList[parseInt(memID)].tos_sign1 = $("#plusminus1").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus2").val();
			}

			else if ($("#rightFloat #plategrideralignment").val() == "Skewed")
			{
				memberList[parseInt(memID)].left_x_ft = $("#pbtosft3").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft4").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin3").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin4").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr3").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr4").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft5").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft6").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin5").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin6").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr5").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr6").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative1").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative2").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative3").val();
			}

			else if ($("#rightFloat #plategrideralignment").val() == "Sloped & Skewed")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft7").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft8").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin7").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin8").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr7").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr8").val();
			
				memberList[parseInt(memID)].tos_sign1 = $("#plusminus7").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus8").val();

				memberList[parseInt(memID)].left_x_ft = $("#pbtosft9").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft10").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin9").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin10").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr9").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr10").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft11").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft12").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin11").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin12").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr11").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr12").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative4").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative5").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative6").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative7").val();
			}
		}

		if (memType == "cantileverBeam") 
		{
			if ($("#rightFloat #clbeamalignment").val() == "Sloped")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft1").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft2").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin1").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin2").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr1").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr2").val();

				memberList[parseInt(memID)].tos_sign1 = $("#plusminus1").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus2").val();
			}

			else if ($("#rightFloat #clbeamalignment").val() == "Skewed")
			{
				memberList[parseInt(memID)].left_x_ft = $("#pbtosft3").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft4").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin3").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin4").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr3").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr4").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft5").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft6").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin5").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin6").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr5").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr6").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative1").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative2").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative3").val();
			}

			else if ($("#rightFloat #clbeamalignment").val() == "Sloped & Skewed")
			{
				memberList[parseInt(memID)].tos_ft1 = $("#pbtosft7").val();
				memberList[parseInt(memID)].tos_ft2 = $("#pbtosft8").val();
				memberList[parseInt(memID)].tos_in1 = $("#pbtosin7").val();
				memberList[parseInt(memID)].tos_in2 = $("#pbtosin8").val();
				memberList[parseInt(memID)].tos_fr1 = $("#pbtosfr7").val();
				memberList[parseInt(memID)].tos_fr2 = $("#pbtosfr8").val();
			
				memberList[parseInt(memID)].tos_sign1 = $("#plusminus7").val();
				memberList[parseInt(memID)].tos_sign2 = $("#plusminus8").val();

				memberList[parseInt(memID)].left_x_ft = $("#pbtosft9").val();
				memberList[parseInt(memID)].left_y_ft = $("#pbtosft10").val();
				memberList[parseInt(memID)].left_x_in = $("#pbtosin9").val();
				memberList[parseInt(memID)].left_y_in = $("#pbtosin10").val();
				memberList[parseInt(memID)].left_x_fr = $("#pbtosfr9").val();
				memberList[parseInt(memID)].left_y_fr = $("#pbtosfr10").val();

				memberList[parseInt(memID)].right_x_ft = $("#pbtosft11").val();
				memberList[parseInt(memID)].right_y_ft = $("#pbtosft12").val();
				memberList[parseInt(memID)].right_x_in = $("#pbtosin11").val();
				memberList[parseInt(memID)].right_y_in = $("#pbtosin12").val();
				memberList[parseInt(memID)].right_x_fr = $("#pbtosfr11").val();
				memberList[parseInt(memID)].right_y_fr = $("#pbtosfr12").val();

				memberList[parseInt(memID)].left_x_sign = $("#colTopNegative4").val();
				memberList[parseInt(memID)].left_y_sign = $("#colTopNegative5").val();

				memberList[parseInt(memID)].right_x_sign = $("#colTopNegative6").val();
				memberList[parseInt(memID)].right_y_sign = $("#colTopNegative7").val();
			}
			memberList[parseInt(memID)].splice = {};
		}

		if (memType == "column")
		{
			var splice_count = parseInt(memberList[[parseInt(memID)]]["splice_count"].replace("sc", ""));
			memberList[[parseInt(memID)]].splice_data = [];
			for (var i = 0; i < splice_count; i ++) {
                var splice = new spliceProperties();
                splice.sign = $("#splice" + (i + 1) + "PosNeg").val();
                splice.elevation_ft = $("#splice" + (i + 1) + "Ft").val();
                splice.elevation_in = $("#splice" + (i + 1) + "In").val();
                splice.elevation_fr = $("#splice" + (i + 1) + "Fr").val();
                splice.profile = $("#splice" + (i + 1) + "Profile").val();
                memberList[[parseInt(memID)]].splice_data.push(splice);
            }
		}

		else if (memType == "box")
		{
			var splice_count = parseInt(memberList[[parseInt(memID)]]["splice_count"].replace("sc", ""));
			memberList[[parseInt(memID)]].splice_data = [];
			for (var i = 0; i < splice_count; i ++) {
                var splice = new spliceProperties();
                splice.sign = $("#splice" + (i + 1) + "PosNeg").val();
				splice.elevation_ft = $("#splice" + (i + 1) + "Ft").val();
				splice.elevation_in = $("#splice" + (i + 1) + "In").val();
				splice.elevation_fr = $("#splice" + (i + 1) + "Fr").val();
				splice.depth_a_ft = $("#splice" + (i + 1) + "DepthAFt").val();
				splice.depth_a_in = $("#splice" + (i + 1) + "DepthAIn").val();
				splice.depth_a_fr = $("#splice" + (i + 1) + "DepthAFr").val();
				splice.width_b_ft = $("#splice" + (i + 1) + "WidthBFt").val();
				splice.width_b_in = $("#splice" + (i + 1) + "WidthBIn").val();
				splice.width_b_fr = $("#splice" + (i + 1) + "WidthBFr").val();
				splice.thick_c_in = $("#splice" + (i + 1) + "ThicknessCIn").val();
				splice.thick_c_fr = $("#splice" + (i + 1) + "ThicknessCFr").val();
				splice.thick_d_in = $("#splice" + (i + 1) + "ThicknessDIn").val();
				splice.thick_d_fr = $("#splice" + (i + 1) + "ThicknessDFr").val();
				memberList[[parseInt(memID)]].splice_data.push(splice);
            }
		}

		else if (memType == "builtup")
		{
			var splice_count = parseInt(memberList[[parseInt(memID)]]["splice_count"].replace("sc", ""));
			memberList[[parseInt(memID)]].splice_data = [];
			for (var i = 0; i < splice_count; i ++) {
                var splice = new spliceProperties();
                splice.sign = $("#splice" + (i + 1) + "PosNeg").val();
				splice.elevation_ft = $("#splice" + (i + 1) + "Ft").val();
				splice.elevation_in = $("#splice" + (i + 1) + "In").val();
				splice.elevation_fr = $("#splice" + (i + 1) + "Fr").val();

				splice.topFlangeThick_in = $("#splice" + (i + 1) + "TFPlateThicknessIn").val();
				splice.topFlangeThick_fr = $("#splice" + (i + 1) + "TFPlateThicknessFr").val();

				splice.topFlangeWidth_ft = $("#splice" + (i + 1) + "TFPlateWidthFt").val();
				splice.topFlangeWidth_in = $("#splice" + (i + 1) + "TFPlateWidthIn").val();
				splice.topFlangeWidth_fr = $("#splice" + (i + 1) + "TFPlateWidthFr").val();

				splice.bottomFlangeThick_in = $("#splice" + (i + 1) + "BFPlateThicknessIn").val();
				splice.bottomFlangeThick_fr = $("#splice" + (i + 1) + "BFPlateThicknessFr").val();

				splice.bottomFlangeWidth_ft = $("#splice" + (i + 1) + "BFPlateWidthFt").val();
				splice.bottomFlangeWidth_in = $("#splice" + (i + 1) + "BFPlateWidthIn").val();
				splice.bottomFlangeWidth_fr = $("#splice" + (i + 1) + "BFPlateWidthFr").val();

				splice.webPlateThick_in = $("#splice" + (i + 1) + "WebPlateThicknessIn").val();
				splice.webPlateThick_fr = $("#splice" + (i + 1) + "WebPlateThicknessFr").val();

				splice.webPlateWidth_ft = $("#splice" + (i + 1) + "WebPlateWidthFt").val();
				splice.webPlateWidth_in = $("#splice" + (i + 1) + "WebPlateWidthIn").val();
				splice.webPlateWidth_fr = $("#splice" + (i + 1) + "WebPlateWidthFr").val();

				memberList[[parseInt(memID)]].splice_data.push(splice);
            }
		}

		else if (memType == "crucified")
		{
			var splice_count = parseInt(memberList[[parseInt(memID)]]["splice_count"].replace("sc", ""));
			memberList[[parseInt(memID)]].splice_data = [];
			for (var i = 0; i < splice_count; i ++) {
                var splice = new spliceProperties();
                splice.sign = $("#splice" + (i + 1) + "PosNeg").val();
                splice.elevation_ft = $("#splice" + (i + 1) + "Ft").val();
                splice.elevation_in = $("#splice" + (i + 1) + "In").val();
                splice.elevation_fr = $("#splice" + (i + 1) + "Fr").val();
                splice.profile = $("#splice" + (i + 1) + "WProfile").val();

				memberList[[parseInt(memID)]].splice_data.push(splice);
            }
		}

		else if (memType == "builtupPlate")
		{
			var splice_count = parseInt(memberList[[parseInt(memID)]]["splice_count"].replace("sc", ""));
			memberList[[parseInt(memID)]].splice_data = [];
			for (var i = 0; i < splice_count; i ++) {
                var splice = new spliceProperties();
                splice.sign = $("#rightFloat #splice" + (i + 1) + "PosNeg").val();
                splice.elevation_ft = $("#rightFloat #splice" + (i + 1) + "Ft").val();
                splice.elevation_in = $("#rightFloat #splice" + (i + 1) + "In").val();
                splice.elevation_fr = $("#rightFloat #splice" + (i + 1) + "Fr").val();
                splice.profile = $("#rightFloat #splice" + (i + 1) + "WProfile").val();

				memberList[[parseInt(memID)]].splice_data.push(splice);
            }
		}

		else if (memType == "pourstop")
		{
			if ($("#pourstop2").is(":checked"))
			{
				memberList[[parseInt(memID)]].memberProperties.orientation = "right";
			}
			else 
			{
				memberList[[parseInt(memID)]].memberProperties.orientation = "left";
			}
		}

		else if (memType == "truss")
		{
			var data = memberList[parseInt(memID)];
			memberList[parseInt(memID)].length = convertToUnit(data.length_ft, data.length_in, data.length_fr, "+");
			memberList[parseInt(memID)].height = convertToUnit(data.height_ridge_ft, data.height_ridge_in, data.height_ridge_fr, "+");

			var splice_count = parseInt(data["splice_count"]);
			memberList[parseInt(memID)].splice_data = [];

			for ( var i = 0; i < splice_count; i ++ ) 
			{
				var splice = {};
				splice.left_ft = $("#splicePosition" + (i + 1) + "LeftEndFt").val();
				splice.left_in = $("#splicePosition" + (i + 1) + "LeftEndIn").val();
				splice.left_fr = $("#splicePosition" + (i + 1) + "LeftEndFr").val();
				splice.topChordProfile = $("#trapTopChordProfile" + (i + 1)).val();
				splice.bottomChordProfile = $("#trapBottomChordProfile" + (i + 1)).val();

				memberList[parseInt(memID)].splice_data.push(splice);
			}

			memberList[parseInt(memID)].verticals = [];
			memberList[parseInt(memID)].inclineNum = parseInt($("#pverticalnum").val());
			memberList[parseInt(memID)].vert_data = [];
			for (i = 0; i < memberList[parseInt(memID)].inclineNum; i ++)
			{
				var vertical_mem = {};
				vertical_mem.profile = memberList[parseInt(memID)].verticalMemProfile;
				vertical_mem.orientation = memberList[parseInt(memID)].verticalMemOrientation;
				vertical_mem.materialgrade = memberList[parseInt(memID)].verticalMemGrade;
				if (memberList[parseInt(memID)].verticalSpacing == "Equal")
				{
					if (memberList[parseInt(memID)].ridge_pos != "Center")
						memberList[parseInt(memID)].vert_data.push([memberList[parseInt(memID)].length / (memberList[parseInt(memID)].inclineNum + 1), 0, 0, 0]);
					else 
						memberList[parseInt(memID)].vert_data.push([memberList[parseInt(memID)].length / 2 / memberList[parseInt(memID)].inclineNum, 0, 0, 0]);
					vertical_mem.spacing_ft = 0;
					vertical_mem.spacing_in = 0;
					vertical_mem.spacing_fr = 0;
				}
				else 
				{
					var ft = $("#pitchedvertical" + (i + 1) + "ft").val();
					var inch = $("#pitchedvertical" + (i + 1) + "in").val();
					var fr = $("#pitchedvertical" + (i + 1) + "fr").val();
					memberList[parseInt(memID)].vert_data.push([convertToUnit(ft, inch, fr, "+"), ft, inch, fr]);
					vertical_mem.spacing_ft = ft;
					vertical_mem.spacing_in = inch;
					vertical_mem.spacing_fr = fr;
				}
				memberList[parseInt(memID)].verticals.push(vertical_mem);
			}

			memberList[parseInt(memID)].lacingPattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
			memberList[parseInt(memID)].inclinedbracings = [];

			if (memberList[parseInt(memID)].ridge_pos == "Center")
			{
				memberList[parseInt(memID)].ridge_pos_index = memberList[parseInt(memID)].inclineNum;
				for (i = memberList[parseInt(memID)].inclineNum - 1; i > 0; i --)
				{
					memberList[parseInt(memID)].verticals.push(memberList[parseInt(memID)].verticals[i]);
					memberList[parseInt(memID)].vert_data.push(memberList[parseInt(memID)].vert_data[i]);
				}
			}
			else 
			{
				memberList[parseInt(memID)].ridge_pos_index = parseInt(memberList[parseInt(memID)].ridge_pos_indexstr);
			}

			for ( var i = 0; i < memberList[parseInt(memID)].verticals.length - 1; i ++ )
			{
				var brace_mem = {};
				brace_mem.profile = memberList[parseInt(memID)].lacingProfile;
				brace_mem.orientation = memberList[parseInt(memID)].lacingOrientation;
				brace_mem.materialgrade = memberList[parseInt(memID)].lacingGrade;

				if (memberList[parseInt(memID)].verticals.length % 2 == 1 && i >= (memberList[parseInt(memID)].verticals.length + 1) / 2 - 1 && memberList[parseInt(memID)].ridge_pos == "Center")
					brace_mem.pattern = truss.reverseShape(memberList[parseInt(memID)].lacingPattern);
				else 
					brace_mem.pattern = memberList[parseInt(memID)].lacingPattern;
				memberList[parseInt(memID)].inclinedbracings.push(brace_mem);
			}
		}

		else if (memType == "trapeTruss")
		{
			var data = memberList[parseInt(memID)];
			memberList[parseInt(memID)].length = convertToUnit(data.length_left_ft, data.length_left_in, data.length_left_fr, "+");
			memberList[parseInt(memID)].center_height = convertToUnit(data.height_ridge_ft, data.height_ridge_in, data.height_ridge_fr, "+");

			var splice_count = parseInt(data["splice_count"]);
			memberList[parseInt(memID)].splice_data = [];

			for ( var i = 0; i < splice_count; i ++ ) 
			{
				var splice = {};
				splice.left_ft = $("#splicePosition" + (i + 1) + "LeftEndFt").val();
				splice.left_in = $("#splicePosition" + (i + 1) + "LeftEndIn").val();
				splice.left_fr = $("#splicePosition" + (i + 1) + "LeftEndFr").val();
				splice.topChordProfile = $("#trapTopChordProfile" + (i + 1)).val();
				splice.bottomChordProfile = $("#trapBottomChordProfile" + (i + 1)).val();

				memberList[parseInt(memID)].splice_data.push(splice);
			}

			memberList[parseInt(memID)].verticals = [];
			memberList[parseInt(memID)].inclineNum = parseInt($("#pverticalnum").val());
			memberList[parseInt(memID)].vert_data = [[0, 0, 0, 0]];
			memberList[parseInt(memID)].verticals = [
														{
															profile: memberList[parseInt(memID)].verticalMemProfile,
															orientation: memberList[parseInt(memID)].verticalMemProfile,
															materialgrade: memberList[parseInt(memID)].verticalMemGrade,
															spacing_ft: 0,
															spacing_in: 0,
															spacing_fr: 0
														}
													]
			for (i = 0; i < memberList[parseInt(memID)].inclineNum; i ++)
			{
				var vertical_mem = {};
				vertical_mem.profile = memberList[parseInt(memID)].verticalMemProfile;
				vertical_mem.orientation = memberList[parseInt(memID)].verticalMemOrientation;
				vertical_mem.materialgrade = memberList[parseInt(memID)].verticalMemGrade;
				if (memberList[parseInt(memID)].verticalSpacing == "Equal")
				{
					if (memberList[parseInt(memID)].ridge_pos != "Center")
						memberList[parseInt(memID)].vert_data.push([memberList[parseInt(memID)].length / (memberList[parseInt(memID)].inclineNum), 0, 0, 0]);
					else 
						memberList[parseInt(memID)].vert_data.push([memberList[parseInt(memID)].length / 2 / memberList[parseInt(memID)].inclineNum, 0, 0, 0]);
					vertical_mem.spacing_ft = 0;
					vertical_mem.spacing_in = 0;
					vertical_mem.spacing_fr = 0;
				}
				else 
				{
					var ft = $("#pitchedvertical" + (i + 1) + "ft").val();
					var inch = $("#pitchedvertical" + (i + 1) + "in").val();
					var fr = $("#pitchedvertical" + (i + 1) + "fr").val();
					memberList[parseInt(memID)].vert_data.push([convertToUnit(ft, inch, fr, "+"), ft, inch, fr]);
					vertical_mem.spacing_ft = ft;
					vertical_mem.spacing_in = inch;
					vertical_mem.spacing_fr = fr;
				}
				memberList[parseInt(memID)].verticals.push(vertical_mem);
			}

			memberList[parseInt(memID)].lacingPattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
			memberList[parseInt(memID)].inclinedbracings = [];

			if (memberList[parseInt(memID)].ridge_pos == "Center")
			{
				memberList[parseInt(memID)].ridge_pos_index = memberList[parseInt(memID)].inclineNum;
				for (i = memberList[parseInt(memID)].inclineNum; i > 0; i --)
				{
					memberList[parseInt(memID)].verticals.push(memberList[parseInt(memID)].verticals[i]);
					memberList[parseInt(memID)].vert_data.push(memberList[parseInt(memID)].vert_data[i]);
				}
			}
			else 
			{
				memberList[parseInt(memID)].ridge_pos_index = parseInt(memberList[parseInt(memID)].ridge_pos_indexstr);
			}

			for ( var i = 0; i < memberList[parseInt(memID)].verticals.length - 1; i ++ )
			{
				var brace_mem = {};
				brace_mem.profile = memberList[parseInt(memID)].lacingProfile;
				brace_mem.orientation = memberList[parseInt(memID)].lacingOrientation;
				brace_mem.materialgrade = memberList[parseInt(memID)].lacingGrade;

				if (i % 2 == 1)
					brace_mem.pattern = reverseBraceShape(memberList[parseInt(memID)].lacingPattern);
				else 
					brace_mem.pattern = memberList[parseInt(memID)].lacingPattern;
				memberList[parseInt(memID)].inclinedbracings.push(brace_mem);
			}
		}

		else if (memType == "paraTruss")
		{
			var data = memberList[parseInt(memID)];
			memberList[parseInt(memID)].length = convertToUnit(data.length_ft, data.length_in, data.length_fr, "+");
			memberList[parseInt(memID)].left_height = convertToUnit(data.height_left_ft, data.height_left_in, data.height_left_fr, "+");
			memberList[parseInt(memID)].right_height = convertToUnit(data.height_right_ft, data.height_right_in, data.height_right_fr, "+");

			var splice_count = parseInt(data["splice_count"]);
			memberList[parseInt(memID)].splice_data = [];

			for ( var i = 0; i < splice_count; i ++ ) 
			{
				var splice = {};
				splice.left_ft = $("#splicePosition" + (i + 1) + "LeftEndFt").val();
				splice.left_in = $("#splicePosition" + (i + 1) + "LeftEndIn").val();
				splice.left_fr = $("#splicePosition" + (i + 1) + "LeftEndFr").val();
				splice.topChordProfile = $("#paraTopChordProfile" + (i + 1)).val();
				splice.bottomChordProfile = $("#paraBottomChordProfile" + (i + 1)).val();

				memberList[parseInt(memID)].splice_data.push(splice);
			}

			memberList[parseInt(memID)].verticals = [];
			memberList[parseInt(memID)].inclineNum = parseInt($("#verticalnumt1").val());
			var vertiSpacing = [];
			if (memberList[parseInt(memID)].verticalSpacing == "unequal")
			{
				for ( var i = 0 ; i < memberList[parseInt(memID)].inclineNum; i ++ )
				{
					var ft = $("#parallels" + (i + 1) + "ft").val();
					var inch = $("#parallels" + (i + 1) + "in").val();

					var fr = $("#parallels" + (i + 1) + "fr").val();
					vertiSpacing.push([convertToUnit(ft, inch, fr), ft, inch, fr]);
				}
			}
			else 
			{
				for (i = 0; i < memberList[parseInt(memID)].inclineNum; i ++ )
				{
					var ft = 0;
					var inch = 0;
					var fr = 0;
					vertiSpacing.push([memberList[parseInt(memID)].length / (memberList[parseInt(memID)].inclineNum + 1), ft, inch, fr]);
				}
			}

			memberList[parseInt(memID)].verticals = [];
			for (i = 0; i < memberList[parseInt(memID)].inclineNum; i ++)
			{
				var vertical_mem = {};
				vertical_mem.profile = memberList[parseInt(memID)].verticalMemProfile;
				vertical_mem.orientation = memberList[parseInt(memID)].verticalMemOrientation;
				vertical_mem.materialgrade = memberList[parseInt(memID)].verticalMemGrade;
				vertical_mem.spacing_ft = vertiSpacing[i][1];
				vertical_mem.spacing_in = vertiSpacing[i][2];
				vertical_mem.spacing_fr = vertiSpacing[i][3];
				memberList[parseInt(memID)].verticals.push(vertical_mem);
			}

			memberList[parseInt(memID)].inclinedbracings = [];
			memberList[parseInt(memID)].lacingPattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
			for (i = 0; i < memberList[parseInt(memID)].inclineNum + 1; i ++)
			{
				var brace_mem = {};
				brace_mem.profile = memberList[parseInt(memID)].lacingProfile;
				brace_mem.orientation = memberList[parseInt(memID)].lacingOrientation;
				brace_mem.materialgrade = memberList[parseInt(memID)].lacingGrade;
				
				if (memberList[parseInt(memID)].verticalSpacing == "equal" && (memberList[parseInt(memID)].inclineNum + 1) % 2 == 0 && i >= (memberList[parseInt(memID)].inclineNum + 1) / 2)
					brace_mem.pattern = reverseBraceShape(memberList[parseInt(memID)].lacingPattern);
				else 
					brace_mem.pattern = memberList[parseInt(memID)].lacingPattern;
				memberList[parseInt(memID)].inclinedbracings.push(brace_mem);
			}

			if (memberList[parseInt(memID)].alignment == "Straight")
			{
				var tos = convertToUnit(memberList[parseInt(memID)].tos_chord_ft, memberList[parseInt(memID)].tos_chord_in, memberList[parseInt(memID)].tos_chord_fr, memberList[parseInt(memID)].tos_chord_sign);
				if (tos != 0)
				{
					memberList[parseInt(memID)].top_y = tos;
					memberList[parseInt(memID)].right_top = tos;
				}
			}
			else if (memberList[parseInt(memID)].alignment == "Sloped")
			{
				var tos = convertToUnit(memberList[parseInt(memID)].left_top_offset_ft, memberList[parseInt(memID)].left_top_offset_in, memberList[parseInt(memID)].left_top_offset_fr, memberList[parseInt(memID)].left_top_offset_sign);
				if (tos != 0)
					memberList[parseInt(memID)].top_y = tos;

				var tos_right = convertToUnit(memberList[parseInt(memID)].right_top_offset_fr, memberList[parseInt(memID)].right_top_offset_in, memberList[parseInt(memID)].right_top_offset_fr, memberList[parseInt(memID)].right_top_offset_sign);
				if (tos_right != 0)
					memberList[parseInt(memID)].right_top = tos_right;
			}

			memberList[parseInt(memID)].vert_data = vertiSpacing;
		}

		else if (memType == "gbeam" || memType == "peribeam")
		{
			var splice_count = parseInt($("#usplicecount").val());
			memberList[parseInt(memID)].splice_data = [];
			var tmp_splice = [];
			var total_splice = 0;
			for (i = 0; i < splice_count; i ++)
			{
				var splice = {};
				splice.ft = $("#splicePositionLeftEndFt" + (i + 1)).val();
				splice.in = $("#splicePositionLeftEndIn" + (i + 1)).val();
				splice.fr = $("#splicePositionLeftEndFr" + (i + 1)).val();
				splice.profile = $("#parallelmodalprofile" + (i + 1)).val();
				total_splice = convertToUnit(splice.ft, splice.in, splice.fr, "+");
				if (i > 0)
				{
					if (convertToUnit(splice.ft, splice.in, splice.fr, "+") < convertToUnit(tmp_splice[i - 1].ft, tmp_splice[i - 1].in, tmp_splice[i - 1].fr, "+"))
					{
						$("#message_area p").html("You can't set current splice data.");
						$("#message_area").fadeIn();

						setTimeout(function()
						{
							$("#message_area").fadeOut();
						}, 3000);
						return;
					}
				}
				tmp_splice.push(splice);
			}

			var memberLength = Math.sqrt((memberList[parseInt(memID)].memberProperties.startPoint.x - memberList[parseInt(memID)].memberProperties.endPoint.x) * (memberList[parseInt(memID)].memberProperties.startPoint.x - memberList[parseInt(memID)].memberProperties.endPoint.x) + (memberList[parseInt(memID)].memberProperties.startPoint.y - memberList[parseInt(memID)].memberProperties.endPoint.y) * (memberList[parseInt(memID)].memberProperties.startPoint.y - memberList[parseInt(memID)].memberProperties.endPoint.y));
			if (memberLength < total_splice)
			{
				$("#message_area p").html("You can't set current splice data.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}
			else 
			{
				memberList[parseInt(memID)].splice_data = tmp_splice;
			}
		}
		else if (memType == "pgirder")
		{
			var splice_count = parseInt($("#usplicecount").val());
			memberList[parseInt(memID)].splice_data = [];
			var tmp_splice = [];
			var total_splice = 0;
			for (i = 0; i < splice_count; i ++)
			{
				var splice = {};
				splice.ft = $("#splicePositionLeftEndFt" + (i + 1)).val();
				splice.in = $("#splicePositionLeftEndIn" + (i + 1)).val();
				splice.fr = $("#splicePositionLeftEndFr" + (i + 1)).val();
				splice.profile = $("#parallelmodalprofile" + (i + 1)).val();
				splice.top_thick_in = $("#splicePositionTopThicknessIn" + (i + 1)).val();
				splice.top_thick_fr = $("#splicePositionTopThicknessFr" + (i + 1)).val();
				splice.top_width_ft = $("#splicePositionTopWidthft" + (i + 1)).val();
				splice.top_width_in = $("#splicePositionTopWidthIn" + (i + 1)).val();
				splice.top_width_fr = $("#splicePositionTopWidthFr" + (i + 1)).val();

				splice.bottom_thick_in = $("#splicePositionBottomThicknessIn" + (i + 1)).val();
				splice.bottom_thick_fr = $("#splicePositionBottomThicknessFr" + (i + 1)).val();
				splice.bottom_width_ft = $("#splicePositionBottomWidthft" + (i + 1)).val();
				splice.bottom_width_in = $("#splicePositionBottomWidthIn" + (i + 1)).val();
				splice.bottom_width_fr = $("#splicePositionBottomWidthFr" + (i + 1)).val();

				splice.web_thick_in = $("#splicePositionWebThicknessIn" + (i + 1)).val();
				splice.web_thick_fr = $("#splicePositionWebThicknessFr" + (i + 1)).val();
				splice.web_width_ft = $("#splicePositionWebWidthft" + (i + 1)).val();
				splice.web_width_in = $("#splicePositionWebWidthIn" + (i + 1)).val();
				splice.web_width_fr = $("#splicePositionWebWidthFr" + (i + 1)).val();
				total_splice = convertToUnit(splice.ft, splice.in, splice.fr, "+");

				if (i > 0)
				{
					if (convertToUnit(splice.ft, splice.in, splice.fr, "+") < convertToUnit(tmp_splice[i - 1].ft, tmp_splice[i - 1].in, tmp_splice[i - 1].fr, "+"))
					{
						$("#message_area p").html("You can't set current splice data.");
						$("#message_area").fadeIn();

						setTimeout(function()
						{
							$("#message_area").fadeOut();
						}, 3000);
						return;
					}
				}
				tmp_splice.push(splice);
			}

			var memberLength = Math.sqrt((memberList[parseInt(memID)].memberProperties.startPoint.x - memberList[parseInt(memID)].memberProperties.endPoint.x) * (memberList[parseInt(memID)].memberProperties.startPoint.x - memberList[parseInt(memID)].memberProperties.endPoint.x) + (memberList[parseInt(memID)].memberProperties.startPoint.y - memberList[parseInt(memID)].memberProperties.endPoint.y) * (memberList[parseInt(memID)].memberProperties.startPoint.y - memberList[parseInt(memID)].memberProperties.endPoint.y));
			if (memberLength < total_splice)
			{
				$("#message_area p").html("You can't set current splice data.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}
			else 
			{
				memberList[parseInt(memID)].splice_data = tmp_splice;
			}
		}

		$("#hiddenSlide").click();
		$("#rightFloat").html('');

		reloadGrid();
	});

	$(document).on('click', "#rightGrid #qckModifyBtn", function()
	{
		undoAction.addAction("editGrid");
		switch ($("#direction").val())
		{
			case "hori":
				var label = $("#gridLabel").val();
				var index = parseInt($("#index").val());
				gridData.yaxis[index].Label = label;
			break;
			case "vert":
				var label = $("#gridLabel").val();
				var index = parseInt($("#index").val());
				gridData.xaxis[index].Label = label;
			break;
		}
		$("#hiddenSlide").click();
		$("#rightFloat").html('');

		reloadGrid();
	})
}

function applyGroup(str, shape_id)
{
	var index_arr = [];
	for (i = 0; i < str.length; i ++)
	{
		index_arr.push(parseInt(str[i]));
	}

	var memType = $("#memType").val();
	if (!genericValidatorfunction(shape_id))
		return false;
	var configure = new_configure[memType];
	if (configure == undefined)
		return;
	Object.keys(configure.memberProperties).map(function(entry)
	{
		for (i = 0; i < index_arr.length; i ++)
		{
			if (!checkNotChanged($("#" + configure.memberProperties[entry]).val()))
				memberList[index_arr[i]].memberProperties[entry] = $("#" + configure.memberProperties[entry]).val();
		}
	});
	if (memType != "pourstop")
	{
		Object.keys(configure.connectionProperties).map(function(entry)
		{
			for (i = 0; i < index_arr.length; i ++)
			{
				if (!checkNotChanged($("#" + configure.connectionProperties[entry]).val()))
					memberList[index_arr[i]].connectionProperties[entry] = $("#" + configure.connectionProperties[entry]).val();
			}
		});
	}
	Object.keys(configure.finishProperties).map(function(entry)
	{
		for (i = 0; i < index_arr.length; i ++)
		{
			if (entry != "paintType" && entry != "primerCheck")
				memberList[index_arr[i]].finishProperties[entry] = $("#" + configure.finishProperties[entry]).val();
			else if (entry == "primerCheck")
				memberList[index_arr[i]].finishProperties[entry] = $("#" + configure.finishProperties[entry]).prop("checked");
			else
				memberList[index_arr[i]].finishProperties[entry] = $("input[name='" + configure.finishProperties[entry] + "']:checked").val();
		}
	});
	Object.keys(configure).map(function(entry)
	{
		for (i = 0; i < index_arr.length; i ++)
		{
			if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
			{
				if (!checkNotChanged($("#" + configure[entry]).val()))
					memberList[index_arr[i]][entry] = $("#" + configure[entry]).val();
				if ($("#" + configure[entry]).is(":checkbox"))
				{
					if ($("#" + configure[entry]).prop("checked"))
						memberList[index_arr[i]][entry] = "on";
					else
						memberList[index_arr[i]][entry] = "off";
				}
			}
		}
	});

	if (memType == "pourstop")
	{
		if ($("#pourstop2").is(":checked"))
		{
			for (var i = 0; i < index_arr.length; i ++)
				memberList[index_arr[i]].memberProperties.orientation = "right";
		}
		else 
		{
			for (var i = 0; i < index_arr.length; i ++)
				memberList[index_arr[i]].memberProperties.orientation = "left";
		}
	}

	if (memType == "gbeam")
	{
		for (i = 0; i < index_arr.length; i ++)
		{
			if ($("#gbeamalignment").val() == "Skewed")
			{
				Object.keys(skew_slop_option.skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.skew[entry]).val();
					else if ($("#" + skew_slop_option.skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.skew[entry]).val());
				});
			}
			else if ($("#gbeamalignment").val() == "Sloped")
			{
				Object.keys(skew_slop_option.slop).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop[entry]).val();
					else if ($("#" + skew_slop_option.slop[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop[entry]).val());
				});
			}
			else if ($("#gbeamalignment").val() == "Sloped & Skewed")
			{
				Object.keys(skew_slop_option.slop_skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop_skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop_skew[entry]).val();
					else if ($("#" + skew_slop_option.slop_skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop_skew[entry]).val());
				});
			}
		}
	}
	else if (memType == "peribeam")
	{
		for (i = 0; i < index_arr.length; i ++)
		{
			if ($("#pbeamalignment").val() == "Skewed")
			{
				Object.keys(skew_slop_option.skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.skew[entry]).val();
					else if ($("#" + skew_slop_option.skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.skew[entry]).val());
				});
			}
			else if ($("#pbeamalignment").val() == "Sloped")
			{
				Object.keys(skew_slop_option.slop).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop[entry]).val();
					else if ($("#" + skew_slop_option.slop[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop[entry]).val());
				});
			}
			else if ($("#pbeamalignment").val() == "Sloped & Skewed")
			{
				Object.keys(skew_slop_option.slop_skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop_skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop_skew[entry]).val();
					else if ($("#" + skew_slop_option.slop_skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop_skew[entry]).val());
				});
			}
		}
	}
	else if (memType == "ibeam")
	{
		for (i = 0; i < index_arr.length; i ++)
		{
			if ($("#infillbeamalignment").val() == "Skewed")
			{
				Object.keys(skew_slop_option.skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.skew[entry]).val();
					else if ($("#" + skew_slop_option.skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.skew[entry]).val());
				});
			}
			else if ($("#infillbeamalignment").val() == "Sloped")
			{
				Object.keys(skew_slop_option.slop).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop[entry]).val();
					else if ($("#" + skew_slop_option.slop[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop[entry]).val());
				});
			}
			else if ($("#infillbeamalignment").val() == "Sloped & Skewed")
			{
				Object.keys(skew_slop_option.slop_skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop_skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop_skew[entry]).val();
					else if ($("#" + skew_slop_option.slop_skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop_skew[entry]).val());
				});
			}
		}
	}
	else if (memType == "pgirder")
	{
		for (i = 0; i < index_arr.length; i ++)
		{
			if ($("#plategrideralignment").val() == "Skewed")
			{
				Object.keys(skew_slop_option.skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.skew[entry]).val();
					else if ($("#" + skew_slop_option.skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.skew[entry]).val());
				});
			}
			else if ($("#plategrideralignment").val() == "Sloped")
			{
				Object.keys(skew_slop_option.slop).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop[entry]).val();
					else if ($("#" + skew_slop_option.slop[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop[entry]).val());
				});
			}
			else if ($("#plategrideralignment").val() == "Sloped & Skewed")
			{
				Object.keys(skew_slop_option.slop_skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop_skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop_skew[entry]).val();
					else if ($("#" + skew_slop_option.slop_skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop_skew[entry]).val());
				});
			}
		}
	}
	else if (memType == "cantileverBeam")
	{
		for (i = 0; i < index_arr.length; i ++)
		{
			if ($("#clbeamalignment").val() == "Skewed")
			{
				Object.keys(skew_slop_option.skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.skew[entry]).val();
					else if ($("#" + skew_slop_option.skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.skew[entry]).val());
				});
			}
			else if ($("#clbeamalignment").val() == "Sloped")
			{
				Object.keys(skew_slop_option.slop).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop[entry]).val();
					else if ($("#" + skew_slop_option.slop[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop[entry]).val());
				});
			}
			else if ($("#clbeamalignment").val() == "Sloped & Skewed")
			{
				Object.keys(skew_slop_option.slop_skew).map(function(entry)
				{
					if (isNaN(parseFloat($("#" + skew_slop_option.slop_skew[entry]).val())))
						memberList[index_arr[i]][entry] = $("#" + skew_slop_option.slop_skew[entry]).val();
					else if ($("#" + skew_slop_option.slop_skew[entry]).val() != "")
						memberList[index_arr[i]][entry] = parseFloat($("#" + skew_slop_option.slop_skew[entry]).val());
				});
			}
		}
	}

	$("#hiddenSlide").click();
	$("#rightFloat").html('');

	reloadGrid();
}

// Method for loading existing 	members to canvas from DB
function loadMembersToCanvas(plane,depth){

	console.log("loading Existing Members to canvas")
	floor = parseFloat($("#depthdrpdwn").val());
	if (memberList == undefined || memberList.length == 0)
		return;
	
	for (var index = memberList.length - 1; index >= 0; index --)
	{
		if(memberList[index].type=="Beam"){
        	if ($("#viewdrpdwn").val() == 1)
        	{
        		if (memberList[index].floor == floor)
        			placeBeam(memberList[index],plane);
        	}
        	else 
            	placeBeam(memberList[index],plane);
        }
        else if (memberList[index].type == "periBeam")
        {
        	if ($("#viewdrpdwn").val() == 1)
        	{
        		if (memberList[index].floor == floor)
        		{
        			placeBeam(memberList[index], plane);
        		}
        	}
        	else 
        	{
        		placeBeam(memberList[index], plane);
        	}
        }
        else if (memberList[index].type == "ibeam")
        {
        	if ($("#viewdrpdwn").val() == 1)
        	{
        		if (memberList[index].floor == floor) 
        		{
    				infillBeam.drawPlan(memberList[index], "XY");
    				memberList.splice(index, 1);
        		}
        	}
        	else 
        	{
        		placeBeam(memberList[index], plane);
        	}
        }
        else if (memberList[index].type == "pgirder")
        {
        	if ($("#viewdrpdwn").val() == 1)
        	{
        		if (memberList[index].floor == floor)
        		{
        			pgirder.draw(memberList[index]);
        			memberList.splice(index, 1);
        		}
        	}
        	else 
        	{
        		pgirder.drawElev(memberList[index], plane);
        	}
        }
        else if (memberList[index].type == "cantBeam")
        {
        	if ($("#viewdrpdwn").val() == 1)
        	{
        		if (memberList[index].floor == floor)
        		{
        			cantilBeam.draw(memberList[index]);
        			memberList.splice(index, 1);
        		}
        	}
        	else 
        	{
        		cantilBeam.drawElev(memberList[index], plane);
        	}
        }
	}
	
	for (var index = memberList.length - 1; index >= 0; index --)
    {
    	if (!memberList[index])
    		continue;
        
        if (memberList[index].type == "h_brace")
        {
        	if(plane=="XY" && memberList[index].floor == floor) 
            {
            	hbrace.placeHBrace(memberList[index]);
            	memberList.splice(index,1);
            }
        }
        else if(memberList[index].type=="v_brace")
        {
            if ((plane == "YZ" || plane == "XZ") && memberList[index].plane == plane && memberList[index].floor == floor)
            {
            	vbrace.placeVBrace(memberList[index]);
                memberList.splice(index,1);
            }
        }
        else if (memberList[index].type == "truss") 
        {
        	if ((plane=="YZ" || plane=="XZ") && memberList[index].plane == plane && memberList[index].floor == floor)
        	{
        		if (truss.draw(memberList[index],"", "", memberList[index].left_index, memberList[index].top_index, plane))
                	memberList.splice(index,1);
        	}
        	else if (plane == "XY")
        		truss.drawPlane(memberList[index], plane);
        }
        else if (memberList[index].type == "paraTruss")
        {
        	if ((plane=="YZ" || plane=="XZ") && memberList[index].plane == plane && memberList[index].floor == floor)
        	{
        		if (paraTruss.draw(memberList[index],"", "", memberList[index].left_x, memberList[index].top_y, plane))
                	memberList.splice(index,1);
        	}
        	else if (plane == "XY")
        		paraTruss.drawPlane(memberList[index], plane);
        }
        else if (memberList[index].type == "trapeTruss")
        {
        	if ((plane=="YZ" || plane=="XZ") && memberList[index].plane == plane && memberList[index].floor == floor)
        	{
        		if (trapeTruss.draw(memberList[index],"", "", memberList[index].left_index, memberList[index].top_index, plane))
                	memberList.splice(index,1);
        	}
        	else if (plane == "XY")
        		trapeTruss.drawPlane(memberList[index], plane);
        }
        else if (memberList[index].type == "pourStop")
        {
        	if (plane == "XY" && floor == memberList[index].floor)
        	{
        		bplates.drawShape(memberList[index]);
    		}
    		else if (plane == "YZ" || plane == "XZ")
    		{
    			bplates.drawElev(memberList[index], plane);
    		}
        }
    }

    for (var index = memberList.length - 1; index >= 0; index --)
	{
		if(memberList[index].type=="Column")
        {
        	if (plane == "XY" && memberList[index].memberProperties.endPoint.z < floor)
        		continue;
        	placeColumn(memberList[index],plane);
        }
        else if (memberList[index].type == "postColumn")
        {
        	// if (plane == "XY" && memberList[index].floor != floor)
        	// 	continue;
        	postColumn.draw(memberList[index], plane);
        }
        else if (memberList[index].type == "boxColumn")
        {
        	if (plane == "XY" && memberList[index].floor != floor && memberList[index].memberProperties.endPoint.z < floor)
        		continue;
        	boxColumn.draw(memberList[index], plane);
        }
        else if (memberList[index].type == "builtUpIColumn")
        {
        	if (plane == "XY" && memberList[index].floor != floor && memberList[index].memberProperties.endPoint.z < floor)
        		continue;
        	iboxColumn.draw(memberList[index], plane);
        }
        else if (memberList[index].type == "builtUpCRColumn")
        {
        	if (plane == "XY" && memberList[index].floor != floor && memberList[index].memberProperties.endPoint.z < floor)
        		continue;
        	iiboxColumn.draw(memberList[index], plane);
        }
        else if (memberList[index].type == "builtUpCHColumn")
        {
        	if (plane == "XY" && memberList[index].floor != floor && memberList[index].memberProperties.endPoint.z < floor)
        		continue;
        	iiiboxColumn.draw(memberList[index], plane);
        }
	}
}

$("#loadViewbtn").click(function() 
{
	var selectedView = $("#viewdrpdwn").val();
	console.log("Selected View : "+selectedView);
	if(selectedView==1){
		drawGrid( "XY");
		loadMembersToCanvas("XY","");
	}
	else if(selectedView==2){
		drawGrid( "XZ");
		loadMembersToCanvas("XZ","");
	}
	else if(selectedView==3){
		drawGrid( "YZ");
		loadMembersToCanvas("YZ","");
	}
});

function reloadGrid() 
{
	canvas.clear();
	selection_buffer = [];
	var selectedView = $("#viewdrpdwn").val();
	console.log("Selected View : "+selectedView);
	if(selectedView==1){
		drawGrid( "XY");
		loadMembersToCanvas("XY","");
	}
	else if(selectedView==2){
		drawGrid( "XZ");
		loadMembersToCanvas("XZ","");
	}
	else if(selectedView==3){
		drawGrid( "YZ");
		loadMembersToCanvas("YZ","");
	}
}

$("#depthdrpdwn").change(function(e) 
{
	
	if (e.originalEvent != undefined)
	{
		undoAction.addAction("changeDepth");
	}

	switch ($("#viewdrpdwn").val())
	{
		case "1":
			plan_depth = $("#depthdrpdwn").val();
		break;
		case "2":
			elev_x_depth = $("#depthdrpdwn").val();
		break;
		case "3":
			elev_y_depth = $("#depthdrpdwn").val();
		break;
	}
	var text=$("#depthdrpdwn").find('option:selected').text();
	var value=$("#depthdrpdwn").val();
	depthValue = value;
	reloadGrid();
	canvEvent.contextmenu.clipboard = null
});
	
$("#viewdrpdwn").change(function(e) {
  	if (e.originalEvent != undefined)
  		undoAction.addAction("changePlane");
	var selectedView = $("#viewdrpdwn").find('option:selected').text();
	planeValue = $("#viewdrpdwn").val();

	var select = document.getElementById("depthdrpdwn");
	var from_copy = document.getElementById("from_copy");
	var from_paste = document.getElementById("from_paste");
	var to_paste = document.getElementById("to_paste");
	removeOptions(select);
	removeOptions(from_copy);
	removeOptions(from_paste);
	removeOptions(to_paste);
	canvEvent.contextmenu.clipboard = null

	if(selectedView == "Plan View")
	{
		gridData.zaxis.forEach(function(entry) 
		{
		    var option = document.createElement('option');
	        option.text =entry.Label;
	        option.value =entry.Dimension;
	        select.add(option);
	        var from_copyoption = document.createElement('option');
	        from_copyoption.text = entry.Label;
	        from_copyoption.value = entry.Dimension;
	        from_copy.add(from_copyoption);
	        var from_pasteoption = document.createElement('option');
	        from_pasteoption.text = entry.Label;
	        from_pasteoption.value = entry.Dimension;
	        from_paste.add(from_pasteoption);
	        var to_pasteoption = document.createElement('option');
	        to_pasteoption.text =entry.Label;
	        to_pasteoption.value =entry.Dimension;
	        to_paste.add(to_pasteoption);
		});
	}
	else if (selectedView == "Elevation View Along X-Axis")
	{
	  	gridData.yaxis.forEach(function(entry) 
	  	{
		    var option = document.createElement('option');
		        option.text =entry.Label;
		        option.value =entry.Dimension;
		        select.add(option);
		});
	}
	else if (selectedView == "Elevation View Along Y-Axis")
	{
	  	gridData.xaxis.forEach(function(entry) 
	  	{
		    var option = document.createElement('option');
		        option.text =entry.Label;
		        option.value =entry.Dimension;
		        select.add(option);
		});
	}
	if (e.originalEvent != undefined)
	{
		switch($("#viewdrpdwn").val())
		{
			case "1":
				if (plan_depth != null)
					$("#depthdrpdwn").val(plan_depth).trigger("change");
				else
					depthValue = gridData.xaxis[0].Dimension;
			break;
			case "2":
				if (elev_x_depth != null)
					$("#depthdrpdwn").val(elev_x_depth).trigger("change");
				else
					depthValue = gridData.yaxis[0].Dimension;
			break;
			case "3":
				if (elev_y_depth != null)
					$("#depthdrpdwn").val(elev_y_depth).trigger("change");
				else
					depthValue = gridData.zaxis[0].Dimension;
			break;
		}
	}
	shape.shapeDisabled();
	canvas.pointer = "defaultCursor";
	reloadGrid();
	if ($("#viewdrpdwn").val() == 1)
	{
		resetZoom("XY");
	}
	else if ($("#viewdrpdwn").val() == 2)
	{
		resetZoom("XZ");
	}
	else 
	{
		resetZoom("YZ");
	}
}); 

function removeOptions(selectbox)
{
  var i;
  for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
  {
      selectbox.remove(i);
  }
}

function resetZoom(plane)
{

	canvas.setZoom(1);
	canvas.absolutePan({x: 0, y:0});
	if (plane == "XY")
	{
		zoom = Math.min(Math.min((canvas.width - 80) / (gridData.xaxis[gridData.xaxis.length - 1].Dimension + gridOffSet * scale) / scale, (canvas.height - 80) / (gridData.yaxis[gridData.yaxis.length - 1].Dimension + gridOffSet * scale) / scale), 1.3);

		default_zoom = zoom;
		default_pan_l = (canvas.width - gridData.xaxis[gridData.xaxis.length - 1].Dimension * scale * zoom - gridOffSet * scale) / 2;
		default_pan_r = (canvas.height - gridData.yaxis[gridData.yaxis.length - 1].Dimension * scale * zoom - gridOffSet * scale) / 2;

		pan_l = default_pan_l;
		
		pan_r = default_pan_r;
		pan_l_l = 0;
		pan_r_r = 0;
		canvas.setZoom(zoom);
		canvas.relativePan(new fabric.Point(default_pan_l, 0));
		canvas.relativePan(new fabric.Point(0, default_pan_r));
	}
	else if (plane == "XZ")
	{
		zoom = Math.min(Math.min((canvas.width - 80) / (gridData.xaxis[gridData.xaxis.length - 1].Dimension + gridOffSet * scale) / scale, (canvas.height - 80) / (gridData.zaxis[gridData.zaxis.length - 1].Dimension + gridOffSet * scale) / scale), 1.3);

		default_zoom = zoom;
		default_pan_l = (canvas.width - gridData.xaxis[gridData.xaxis.length - 1].Dimension * scale * zoom - gridOffSet * scale) / 2;
		default_pan_r = (canvas.height - gridData.zaxis[gridData.zaxis.length - 1].Dimension * scale * zoom - gridOffSet * scale) / 2;

		pan_l = default_pan_l;
		
		pan_r = default_pan_r;
		pan_l_l = 0;
		pan_r_r = 0;
		canvas.setZoom(zoom);
		canvas.relativePan(new fabric.Point(default_pan_l, 0));
		canvas.relativePan(new fabric.Point(0, default_pan_r));
	}
	else if(plane == "YZ")
	{
		zoom = Math.min(Math.min((canvas.width - 80) / (gridData.yaxis[gridData.yaxis.length - 1].Dimension + gridOffSet * scale) / scale, (canvas.height - 80) / (gridData.zaxis[gridData.zaxis.length - 1].Dimension + gridOffSet * scale) / scale), 1.3);

		default_zoom = zoom;
		default_pan_l = (canvas.width - gridData.yaxis[gridData.yaxis.length - 1].Dimension * scale * zoom - gridOffSet * scale) / 2;
		default_pan_r = (canvas.height - gridData.zaxis[gridData.zaxis.length - 1].Dimension * scale * zoom - gridOffSet * scale) / 2;

		pan_l = default_pan_l;
		
		pan_r = default_pan_r;
		pan_l_l = 0;
		pan_r_r = 0;
		canvas.setZoom(zoom);
		canvas.relativePan(new fabric.Point(default_pan_l, 0));
		canvas.relativePan(new fabric.Point(0, default_pan_r));
	}
}
