
var class_infill_Beam = function()
{
	var main = this;

	main.mode = "ibeam";

	main.isDrawReady = 0;
	// main.unique_id = 0;

	main.data = {};

	main.init 		= function()
	{
		main.initEvent();
	}

	main.initEvent 	= function()
	{
		canvas.on("mouse:down", function(evt)
		{
			if (!main.isDrawReady)
				return;

			if ($("#viewdrpdwn").val() != 1)
			{
				$("#message_area p").html("You can't draw Infill Beam on Elevation View.");
				$("#message_area").fadeIn();

				setTimeout(function()
				{
					$("#message_area").fadeOut();
				}, 3000);
				return;
			}

			if ($("#noofbeams1").val() == "/option")
				return;
			var numberBeam = parseInt($("#noofbeams1").val());

			var pointer = canvas.getPointer(evt.e);
			var x_pos = pointer.x / scale;
			var y_pos = pointer.y / scale;

			var start_x = getGridIndex(x_pos, "X", "XY");
			var start_y = getGridIndex(y_pos, "Y", "XY");

			var click_pos = {x: pointer.x / scale, y: pointer.y /scale};

			// console.log(getNearestBeam(click_pos, "Y"));
			// console.log(getNearestBeam(click_pos, "X"));

			start_y = gridData.yaxis.length - start_y - 1;
			start_x -= 1;

			if (start_x < 0 || start_x > gridData.xaxis.length - 1)
				return;

			if (start_y < 0 || start_y > gridData.yaxis.length - 1)
				return;

			var direction = $("#infillbeamreferencedirection").val();

			var startPoint_x = gridData.xaxis[start_x].Dimension;
			var endPoint_x = gridData.xaxis[start_x + 1].Dimension;

			var startPoint_y = gridData.yaxis[start_y].Dimension;
			var endPoint_y = gridData.yaxis[start_y + 1].Dimension;

			var nearBeam = -1;
			var tos = 0;
				tos = parseInt($("#itosft").val());
				tos += parseInt($("#itosin").val()) * 0.0833;
				tos += fractionToFeet($("#itosfr").val());

				// tos = ($("#plusminus").val() === "+" ? 1 : -1) * height;
				tos = convertToUnit($("#itosft").val(), $("#itosin").val(), $("#itosfr").val(), $("#plusminus").val());
			if (direction == "X")
			{
				nearBeam = getNearestBeam(click_pos, "Y", tos);
			}
			else {
				nearBeam = getNearestBeam(click_pos, "X", tos);
			}
			
			if (nearBeam == -1)
				return;
			else 
			{
				for (i = 0; i < memberList.length; i ++)
				{
					if (memberList[i].uid == nearBeam.first.mode + "_" + nearBeam.first.uid)
					{
						startPoint_left_x = memberList[i].memberProperties.startPoint.x;
						startPoint_left_y = memberList[i].memberProperties.startPoint.y;

						startPoint_right_x = memberList[i].memberProperties.endPoint.x;
						startPoint_right_y = memberList[i].memberProperties.endPoint.y;
					}

					if (memberList[i].uid == nearBeam.second.mode + "_" + nearBeam.second.uid)
					{
						endPoint_left_x = memberList[i].memberProperties.startPoint.x;
						endPoint_left_y = memberList[i].memberProperties.startPoint.y;

						endPoint_right_x = memberList[i].memberProperties.endPoint.x;
						endPoint_right_y = memberList[i].memberProperties.endPoint.y;
					}
				}
			}

			if (direction == "X")
			{
				if (startPoint_left_x == endPoint_left_x && startPoint_right_x == endPoint_right_x)
				{

				}
				else 
					return;
			}
			else 
			{
				if (startPoint_left_y == endPoint_left_y && startPoint_right_y == endPoint_right_y)
				{

				}
				else 
					return;
			}

			var width = endPoint_right_x - startPoint_left_x;
			var height = endPoint_right_y - startPoint_left_y;

			var distanceData = [];
			
			if ($("#ESConnectiontype").val() == "ES") {
				for ( var i = 0; i < numberBeam; i ++ ) {
					if (direction == "X")
						distanceData.push(width / (numberBeam + 1) * (i + 1));
					else 
						distanceData.push(height / (numberBeam + 1) * (i + 1));
				}
			}
			else {
				for ( var i = 0; i < numberBeam; i ++ ) {
					var tmp_distance = 0;
					tmp_distance = convertToUnit($("#ispacing" + (i + 1) + "ft").val(), $("#ispacing" + (i + 1) + "in").val(), $("#ispacing" + (i + 1) + "fr").val(), "+");
					if ( i == 0)
						distanceData.push(tmp_distance);
					else
						distanceData.push(tmp_distance + distanceData[i - 1]);
				}
			}

			undoAction.addAction("memberPlace");

			for ( var i = 0; i < numberBeam; i ++ ) 
			{
				beam = new beamMember();

				var configure_beam = new_configure.ibeam;

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

				beam.floor = $("#depthdrpdwn").val();
				
				beam.height = convertToUnit($("#itosft").val(), $("#itosin").val(), $("#itosfr").val(), $("#plusminus").val());

				if (direction == "X")
				{
					if (distanceData[distanceData.length - 1] > width)
					{
						$("#message_area p").html("You can't draw Infill Beam with selected length.");
						$("#message_area").fadeIn();

						setTimeout(function()
						{
							$("#message_area").fadeOut();
						}, 3000);
						return;
					}
					beam.memberProperties.startPoint.x = startPoint_left_x + distanceData[i];
					beam.memberProperties.startPoint.y = getNewYPoint(distanceData[i], startPoint_left_x, startPoint_right_x, startPoint_left_y, startPoint_right_y);
					beam.memberProperties.endPoint.x = endPoint_left_x + distanceData[i];
					beam.memberProperties.endPoint.y = getNewYPoint(distanceData[i], endPoint_left_x, endPoint_right_x, endPoint_left_y, endPoint_right_y);
				}

				else 
				{
					if (distanceData[distanceData.length - 1] > height)
					{
						$("#message_area p").html("You can't draw Infill Beam with selected length.");
						$("#message_area").fadeIn();

						setTimeout(function()
						{
							$("#message_area").fadeOut();
						}, 3000);
						return;
					}
					beam.memberProperties.startPoint.x = getNewXPoint(distanceData[i], startPoint_left_x, startPoint_right_x, startPoint_left_y, startPoint_right_y);
					beam.memberProperties.startPoint.y = startPoint_left_y + distanceData[i];
					beam.memberProperties.endPoint.x = getNewXPoint(distanceData[i], endPoint_left_x, endPoint_right_x, endPoint_left_y, endPoint_right_y);
					beam.memberProperties.endPoint.y = startPoint_left_y + distanceData[i];
				}
				beam.memberProperties.startPoint.z = beam.height;
				beam.memberProperties.endPoint.z = beam.height;
				beam.id = increaseGUID();//"Mem"+memId++;
				beam.uid = "ibeam_" + beam.id;
				beam.type = "ibeam";
				beam.mode = "ibeam";

				beam.x_depth = startPoint_left_x;
				beam.y_depth = startPoint_left_y;

				// memberList.push(beam);
				dataModel.insertData(beam);
				main.drawPlan(beam, "XY");
			}
		});
	}

	main.drawPlan	= function(beamObj, plane)
	{
		beamObj.memberProperties.startPoint.z =  beamObj.memberProperties.endPoint.z = parseFloat(beamObj.floor);

	    height = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, "+");
	    beamObj.memberProperties.startPoint.z  = height;
	    beamObj.memberProperties.endPoint.z    = height;
	    if (beamObj.origin == undefined)
	    {
	        beamObj.origin = new Object();
	        beamObj.origin.start_x = beamObj.memberProperties.startPoint.x;
	        beamObj.origin.start_y = beamObj.memberProperties.startPoint.y;
	        beamObj.origin.start_z = beamObj.memberProperties.startPoint.z;

	        beamObj.origin.end_x = beamObj.memberProperties.endPoint.x;
	        beamObj.origin.end_y = beamObj.memberProperties.endPoint.y;
	        beamObj.origin.end_z = beamObj.memberProperties.endPoint.z;
	    }

	    if (beamObj.alignment == "Sloped")
	    {
	        beamObj.memberProperties.startPoint.z = convertToUnit(beamObj.tos_ft1, beamObj.tos_in1, beamObj.tos_fr1, beamObj.tos_sign1);

	        beamObj.memberProperties.endPoint.z = convertToUnit(beamObj.tos_ft2, beamObj.tos_in2, beamObj.tos_fr2, beamObj.tos_sign2);
	    }
	    else if (beamObj.alignment == "Skewed")
	    {

		    beamObj.memberProperties.startPoint.x = beamObj.origin.start_x + convertToUnit(beamObj.left_x_ft, beamObj.left_x_in, beamObj.left_x_fr, beamObj.left_x_sign);
		    beamObj.memberProperties.startPoint.y = beamObj.origin.start_y + convertToUnit(beamObj.left_y_ft, beamObj.left_y_in, beamObj.left_y_fr, beamObj.left_y_sign);
		    beamObj.memberProperties.endPoint.x = beamObj.origin.end_x + convertToUnit(beamObj.right_x_ft, beamObj.right_x_in, beamObj.right_x_fr, beamObj.right_x_sign);
		    beamObj.memberProperties.endPoint.y = beamObj.origin.end_y + convertToUnit(beamObj.right_y_ft, beamObj.right_y_in, beamObj.right_y_fr, beamObj.right_y_sign);
		}
		else if (beamObj.alignment == "Sloped & Skewed")
	    {
	        beamObj.memberProperties.startPoint.x = beamObj.origin.start_x + convertToUnit(beamObj.left_x_ft, beamObj.left_x_in, beamObj.left_x_fr, beamObj.left_x_sign);
	        beamObj.memberProperties.startPoint.y = beamObj.origin.start_y + convertToUnit(beamObj.left_y_ft, beamObj.left_y_in, beamObj.left_y_fr, beamObj.left_y_sign);
	        beamObj.memberProperties.endPoint.x = beamObj.origin.end_x + convertToUnit(beamObj.right_x_ft, beamObj.right_x_in, beamObj.right_x_fr, beamObj.right_x_sign);
	        beamObj.memberProperties.endPoint.y = beamObj.origin.end_y + convertToUnit(beamObj.right_y_ft, beamObj.right_y_in, beamObj.right_y_fr, beamObj.right_y_sign);
	        beamObj.memberProperties.startPoint.z = convertToUnit(beamObj.tos_ft1, beamObj.tos_in1, beamObj.tos_fr1, beamObj.tos_sign1);
	        beamObj.memberProperties.endPoint.z = convertToUnit(beamObj.tos_ft2, beamObj.tos_in2, beamObj.tos_fr2, beamObj.tos_sign2);
	    }
	    else 
	    {
	    	beamObj.memberProperties.startPoint.x = beamObj.origin.start_x;
	        beamObj.memberProperties.startPoint.y = beamObj.origin.start_y;

	        beamObj.memberProperties.endPoint.x = beamObj.origin.end_x;
	        beamObj.memberProperties.endPoint.y = beamObj.origin.end_y;

	        beamObj.tos_ft1 = beamObj.tos_ft;
	        beamObj.tos_in1 = beamObj.tos_in;
	        beamObj.tos_fr1 = beamObj.tos_fr;

	        beamObj.tos_ft2 = beamObj.tos_ft;
	        beamObj.tos_in2 = beamObj.tos_in;
	        beamObj.tos_fr2 = beamObj.tos_fr;

	        beamObj.tos_sign1 = beamObj.tos_sign
	        beamObj.tos_sign2 = beamObj.tos_sign;
	    }

		var offSet = 0;
		var Length = 5;
		var metric;

	    if (canvas.getZoom() / default_zoom > 4)
	        metric = 4;
	    else if (canvas.getZoom() / default_zoom < 0.25)
	        metric = 0.25;
	    else metric = 1;

	    if (metric == 4)
	    {
	        Length = 5 * 4 * default_zoom / canvas.getZoom();
	    }

		beamObj.uid = "ibeam_" + beamObj.id;
		beamObj.type = "ibeam";
		beamObj.mode = "ibeam";

		var startX=mapCoordinate(beamObj.memberProperties.startPoint.x,"X",plane)+offSet;
        var endX=mapCoordinate(beamObj.memberProperties.endPoint.x,"X",plane)-offSet;
        var startY=mapCoordinate(beamObj.memberProperties.startPoint.y,"Y",plane)+offSet;
        var endY=mapCoordinate(beamObj.memberProperties.endPoint.y,"Y",plane)-offSet;
        
        var line;
        if (startY == endY)
        	line = new fabric.Line([startX*scale,startY*scale - Length / 2,endX*scale,endY*scale - Length /2  ],
				{
					stroke: '#000000',
					id: beamObj.id, 
					strokeWidth: Length,
					hasControls:false,
					lockMovementX:false,
					lockMovementY:false, 
					memType: beamObj.type, 
					mode: beamObj.type, 
					uid:beamObj.id
				});
        else 
        	line = new fabric.Line([startX*scale - Length / 2,startY*scale,endX*scale - Length /2,endY*scale  ],
				{
					stroke: '#000000',
					id: beamObj.id, 
					strokeWidth: Length,
					hasControls: false,
					lockMovementX: false,
					lockMovementY: false, 
					memType: beamObj.type, 
					mode: beamObj.type, 
					uid: beamObj.id
				});

        beamObj.floor = 0;
        for (var i = 0; i < gridData.zaxis.length; i ++)
        {
        	if (beamObj.memberProperties.startPoint.z >= (gridData.zaxis[i].Dimension - 24) && beamObj.memberProperties.startPoint.z <= (gridData.zaxis[i].Dimension + 24))
        	{
        		beamObj.floor = gridData.zaxis[i].Dimension;
        		break;
        	}
        }
        if (beamObj.floor == parseFloat($("#depthdrpdwn").val()))
        {
        	if (!checkExistMember(beamObj))
        	{
        		// memberList.push(beamObj);
				dataModel.insertData(beamObj); //infillBeam
				canvas.add(line);
				stopDraggingElement(line);
			}
		}
	}

	main.drawElev = function(data, plane)
	{
		
	}

	main.init();
}