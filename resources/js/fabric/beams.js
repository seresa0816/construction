function placeGridBeams(beamObj,plane){
    undoAction.addAction("memberPlace");
    for(var x=1;x<gridData.xaxis.length-1;x++){
        for(var y=0;y<gridData.yaxis.length-1;y++){
              
            var beam =new beamMember();

            var configure = new_configure.gbeam;
            Object.keys(configure.memberProperties).map(function(entry)
            {
                beam.memberProperties[entry] = beamObj.memberProperties[entry];
            });

            Object.keys(configure.finishProperties).map(function(entry)
            {
                beam.finishProperties[entry] = beamObj.finishProperties[entry];
            });

            Object.keys(configure.connectionProperties).map(function(entry)
            {
                beam.connectionProperties[entry] = beamObj.connectionProperties[entry];
            });
            
            Object.keys(configure).map(function(entry) 
            {
                if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
                {
                    beam[entry] = beamObj[entry];
                }
            });
            
            beam.name=beamObj.name;
            beam.type=beamObj.type;
            beam.id="Mem"+memId++;
            beam.memberProperties.profile=beamObj.memberProperties.profile;
            
            beam.memberProperties.startPoint.x=parseFloat(gridData.xaxis[x].Dimension);
            beam.memberProperties.startPoint.y=parseFloat(gridData.yaxis[y].Dimension);
            var height = convertToUnit(beam.tos_ft, beam.tos_in, beam.tos_fr, beam.tos_sign);

            beam.memberProperties.startPoint.z = height;
            
            beam.memberProperties.endPoint.x=parseFloat(gridData.xaxis[x].Dimension);
            beam.memberProperties.endPoint.y=parseFloat(gridData.yaxis[y+1].Dimension);
            beam.memberProperties.endPoint.z = height;
            beam.floor = beamObj.floor;
            beam.x_depth = gridData.xaxis[x].Dimension;
            beam.y_depth = gridData.yaxis[y].Dimension;
            if (checkExistMember(beam))
                continue;

            placeBeam(beam,plane);
            beam.uid = "Beam_" + beam.id;
            memberList.push(beam);
        }
    }
    
     for(var y=1;y<gridData.yaxis.length-1;y++)
     {
        for(var x=0;x<gridData.xaxis.length-1;x++)
        {
            var beam =new beamMember();

            var configure = new_configure.gbeam;
            Object.keys(configure.memberProperties).map(function(entry)
            {
                beam.memberProperties[entry] = beamObj.memberProperties[entry];
            });

            Object.keys(configure.finishProperties).map(function(entry)
            {
                beam.finishProperties[entry] = beamObj.finishProperties[entry];
            });

            Object.keys(configure.connectionProperties).map(function(entry)
            {
                beam.connectionProperties[entry] = beamObj.connectionProperties[entry];
            });
            
            Object.keys(configure).map(function(entry) 
            {
                if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
                {
                    beam[entry] = beamObj[entry];
                }
            });
            
            beam.name=beamObj.name;
            beam.type=beamObj.type;
            beam.id="Mem"+memId++;
            beam.memberProperties.profile=beamObj.memberProperties.profile;
            
            beam.memberProperties.startPoint.x=parseFloat(gridData.xaxis[x].Dimension);
            beam.memberProperties.startPoint.y=parseFloat(gridData.yaxis[y].Dimension);
            var height = convertToUnit(beam.tos_ft, beam.tos_in, beam.tos_fr, beam.tos_sign);

            beam.memberProperties.startPoint.z = height;
            
            beam.memberProperties.endPoint.x=parseFloat(gridData.xaxis[x+1].Dimension);
            beam.memberProperties.endPoint.y=parseFloat(gridData.yaxis[y].Dimension);
            beam.memberProperties.endPoint.z = height;
            // console.log(beam);
            beam.floor = beamObj.floor;
            beam.x_depth = gridData.xaxis[x].Dimension;
            beam.y_depth = gridData.yaxis[y].Dimension;

            if (checkExistMember(beam))
                continue;

            placeBeam(beam,plane);
            beam.uid = "Beam_" + beam.id;
            memberList.push(beam);
        }
    }
}

function placePeripheralBeams(beamObj,plane){
    undoAction.addAction("memberPlace");
    for(var y=1;y<gridData.yaxis.length;y++)
    {
        
        var beamAtLeft =new beamMember();

        var configure = new_configure.peribeam;
        Object.keys(configure.memberProperties).map(function(entry)
        {
            beamAtLeft.memberProperties[entry] = beamObj.memberProperties[entry];
        });

        Object.keys(configure.finishProperties).map(function(entry)
        {
            beamAtLeft.finishProperties[entry] = beamObj.finishProperties[entry];
        });

        Object.keys(configure.connectionProperties).map(function(entry)
        {
            beamAtLeft.connectionProperties[entry] = beamObj.connectionProperties[entry];
        });
        
        Object.keys(configure).map(function(entry) 
        {
            if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
            {
                beamAtLeft[entry] = beamObj[entry];
            }
        });
        
        beamAtLeft.name=beamObj.name;
        beamAtLeft.type=beamObj.type;
        beamAtLeft.id="Mem"+memId++;
        beamAtLeft.memberProperties.profile=beamObj.memberProperties.profile;
        
        beamAtLeft.memberProperties.startPoint.x=parseFloat(gridData.xaxis[0].Dimension);
        beamAtLeft.memberProperties.startPoint.y=parseFloat(gridData.yaxis[y-1].Dimension);
        beamAtLeft.memberProperties.startPoint.z=beamObj.memberProperties.startPoint.z;
        
        beamAtLeft.memberProperties.endPoint.x=parseFloat(gridData.xaxis[0].Dimension);
        beamAtLeft.memberProperties.endPoint.y=parseFloat(gridData.yaxis[y].Dimension);
        beamAtLeft.memberProperties.endPoint.z=beamObj.memberProperties.endPoint.z;
        beamAtLeft.uid = "periBeam_" + beamAtLeft.id;
        beamAtLeft.floor = beamObj.floor;
        beamAtLeft.x_depth = gridData.xaxis[0].Dimension;
        beamAtLeft.y_depth = gridData.yaxis[y - 1].Dimension;

        beamAtLeft.memberProperties.startPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);
        beamAtLeft.memberProperties.endPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);

        if (!checkExistMember(beamAtLeft))
        {
            placeBeam(beamAtLeft,plane);
            memberList.push(beamAtLeft);
        }
        
        var beamAtRight =new beamMember();

        var configure = new_configure.peribeam;
        Object.keys(configure.memberProperties).map(function(entry)
        {
            beamAtRight.memberProperties[entry] = beamObj.memberProperties[entry];
        });

        Object.keys(configure.finishProperties).map(function(entry)
        {
            beamAtRight.finishProperties[entry] = beamObj.finishProperties[entry];
        });

        Object.keys(configure.connectionProperties).map(function(entry)
        {
            beamAtRight.connectionProperties[entry] = beamObj.connectionProperties[entry];
        });
        
        Object.keys(configure).map(function(entry) 
        {
            if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
            {
                beamAtRight[entry] = beamObj[entry];
            }
        });
        
        beamAtRight.name = beamObj.name;
        beamAtRight.type = beamObj.type;
        beamAtRight.id   ="Mem"+memId++;
        beamAtRight.memberProperties.profile = beamObj.memberProperties.profile;
        
        beamAtRight.memberProperties.startPoint.x = parseFloat(gridData.xaxis[gridData.xaxis.length-1].Dimension);        						
        beamAtRight.memberProperties.startPoint.y = parseFloat(gridData.yaxis[y-1].Dimension);
        beamAtRight.memberProperties.startPoint.z = beamObj.memberProperties.startPoint.z;
        
        beamAtRight.memberProperties.endPoint.x = parseFloat(gridData.xaxis[gridData.xaxis.length-1].Dimension);
        beamAtRight.memberProperties.endPoint.y = parseFloat(gridData.yaxis[y].Dimension);
        beamAtRight.memberProperties.endPoint.z = beamObj.memberProperties.endPoint.z;
        beamAtRight.floor = beamObj.floor;
        beamAtRight.x_depth = gridData.xaxis[gridData.xaxis.length - 1].Dimension;
        beamAtRight.y_depth = gridData.yaxis[y - 1].Dimension;
        beamAtRight.uid = "periBeam_" + beamAtRight.id;
        beamAtRight.memberProperties.startPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);
        beamAtRight.memberProperties.endPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);

        if (!checkExistMember(beamAtRight))
        {
            placeBeam(beamAtRight,plane);
            memberList.push(beamAtRight);
        }
        
    }
    
    for(var x=1;x<gridData.xaxis.length;x++)
    {
        
        var beamAtBottom =new beamMember();

        var configure = new_configure.peribeam;
        Object.keys(configure.memberProperties).map(function(entry)
        {
            beamAtBottom.memberProperties[entry] = beamObj.memberProperties[entry];
        });

        Object.keys(configure.finishProperties).map(function(entry)
        {
            beamAtBottom.finishProperties[entry] = beamObj.finishProperties[entry];
        });

        Object.keys(configure.connectionProperties).map(function(entry)
        {
            beamAtBottom.connectionProperties[entry] = beamObj.connectionProperties[entry];
        });
        
        Object.keys(configure).map(function(entry) 
        {
            if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
            {
                beamAtBottom[entry] = beamObj[entry];
            }
        });
        
        beamAtBottom.name   =beamObj.name;
        beamAtBottom.type   =beamObj.type;
        beamAtBottom.id     ="Mem"+memId++;
        beamAtBottom.memberProperties.profile = beamObj.memberProperties.profile;
        
        beamAtBottom.memberProperties.startPoint.x = parseFloat(gridData.xaxis[x-1].Dimension);
        beamAtBottom.memberProperties.startPoint.y = parseFloat(gridData.yaxis[0].Dimension);
        beamAtBottom.memberProperties.startPoint.z = beamObj.memberProperties.startPoint.z;
        
        beamAtBottom.memberProperties.endPoint.x=parseFloat(gridData.xaxis[x].Dimension);
        beamAtBottom.memberProperties.endPoint.y=parseFloat(gridData.yaxis[0].Dimension);
        beamAtBottom.memberProperties.endPoint.z=beamObj.memberProperties.endPoint.z;
        beamAtBottom.floor = beamObj.floor;
        beamAtBottom.x_depth = gridData.xaxis[x - 1].Dimension;
        beamAtBottom.y_depth = gridData.yaxis[0].Dimension;
        // console.log(beamAtBottom);
        beamAtBottom.uid = "periBeam_" + beamAtBottom.id;
        beamAtBottom.memberProperties.startPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);
        beamAtBottom.memberProperties.endPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);

        if (!checkExistMember(beamAtBottom))
        {
            placeBeam(beamAtBottom,plane);
            memberList.push(beamAtBottom);
        }
        
        var beamAtTop =new beamMember();

        var configure = new_configure.peribeam;
        Object.keys(configure.memberProperties).map(function(entry)
        {
            beamAtTop.memberProperties[entry] = beamObj.memberProperties[entry];
        });

        Object.keys(configure.finishProperties).map(function(entry)
        {
            beamAtTop.finishProperties[entry] = beamObj.finishProperties[entry];
        });

        Object.keys(configure.connectionProperties).map(function(entry)
        {
            beamAtTop.connectionProperties[entry] = beamObj.connectionProperties[entry];
        });
        
        Object.keys(configure).map(function(entry) 
        {
            if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
            {
                beamAtTop[entry] = beamObj[entry];
            }
        });
        
        beamAtTop.name  = beamObj.name;
        beamAtTop.type  = beamObj.type;
        beamAtTop.id    = "Mem"+memId++;
        beamAtTop.memberProperties.profile = beamObj.memberProperties.profile;
        
        beamAtTop.memberProperties.startPoint.x = parseFloat(gridData.xaxis[x-1].Dimension);
        beamAtTop.memberProperties.startPoint.y = parseFloat(gridData.yaxis[gridData.yaxis.length-1].Dimension);
        beamAtTop.memberProperties.startPoint.z = beamObj.memberProperties.startPoint.z;
        
        beamAtTop.memberProperties.endPoint.x=parseFloat(gridData.xaxis[x].Dimension);
        beamAtTop.memberProperties.endPoint.y=parseFloat(gridData.yaxis[gridData.yaxis.length-1].Dimension);
        beamAtTop.memberProperties.endPoint.z=beamObj.memberProperties.endPoint.z;
        beamAtTop.floor = beamObj.floor;
        // console.log(beamAtTop);
        beamAtTop.x_depth = gridData.xaxis[x - 1].Dimension;
        beamAtTop.y_depth = gridData.yaxis[gridData.yaxis.length - 1].Dimension;
        beamAtTop.uid = "periBeam_" + beamAtTop.id;
        beamAtTop.memberProperties.startPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);
        beamAtTop.memberProperties.endPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);

        if (!checkExistMember(beamAtTop))
        {
            placeBeam(beamAtTop,plane);
            memberList.push(beamAtTop);
        }
    }
}


function placeBeam(beamObj,plane){
    
    var offSet = 0;
    var Length = 5;
    var height;
    height = 0;
    var metric = 1;
    if (canvas.getZoom() / default_zoom > 4)
        metric = 4;
    else if (canvas.getZoom() / default_zoom < 0.25)
        metric = 0.25;
    else metric = 1;

    // if (metric == 4)
    // {
    //     Length = 5 * 4 * default_zoom / canvas.getZoom();
    // }

    height += convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);

    beamObj.memberProperties.startPoint.z = height;
    beamObj.memberProperties.endPoint.z = height;

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
    beamObj.floor = undefined;
    var diff_tos = 99999;
    for (var i = 0; i < gridData.zaxis.length; i ++)
    {
        if (beamObj.memberProperties.startPoint.z >= (gridData.zaxis[i].Dimension - 24) && (beamObj.memberProperties.startPoint.z <= (gridData.zaxis[i].Dimension + 24)) )
        {
            if (Math.abs(beamObj.memberProperties.startPoint.z - gridData.zaxis[i].Dimension) < diff_tos)
            {
                diff_tos = Math.abs(beamObj.memberProperties.startPoint.z - gridData.zaxis[i].Dimension);
                beamObj.floor = gridData.zaxis[i].Dimension;
            }
        }
    }

    if (beamObj.alignment == "Sloped")
    {
        beamObj.memberProperties.startPoint.z = convertToUnit(beamObj.tos_ft1, beamObj.tos_in1, beamObj.tos_fr1, beamObj.tos_sign1);

        beamObj.memberProperties.endPoint.z = convertToUnit(beamObj.tos_ft2, beamObj.tos_in2, beamObj.tos_fr2, beamObj.tos_sign2);
    }
    else if (beamObj.alignment == "Skewed")
    {
        beamObj.memberProperties.startPoint.x   = beamObj.origin.start_x + convertToUnit(beamObj.left_x_ft, beamObj.left_x_in, beamObj.left_x_fr, beamObj.left_x_sign);
        beamObj.memberProperties.startPoint.y   = beamObj.origin.start_y + convertToUnit(beamObj.left_y_ft, beamObj.left_y_in, beamObj.left_y_fr, beamObj.left_y_sign);
        beamObj.memberProperties.endPoint.x     = beamObj.origin.end_x + convertToUnit(beamObj.right_x_ft, beamObj.right_x_in, beamObj.right_x_fr, beamObj.right_x_sign);
        beamObj.memberProperties.endPoint.y     = beamObj.origin.end_y + convertToUnit(beamObj.right_y_ft, beamObj.right_y_in, beamObj.right_y_fr, beamObj.right_y_sign);
    }
    else if (beamObj.alignment == "Sloped & Skewed")
    {
        beamObj.memberProperties.startPoint.x   = beamObj.origin.start_x + convertToUnit(beamObj.left_x_ft, beamObj.left_x_in, beamObj.left_x_fr, beamObj.left_x_sign);
        beamObj.memberProperties.startPoint.y   = beamObj.origin.start_y + convertToUnit(beamObj.left_y_ft, beamObj.left_y_in, beamObj.left_y_fr, beamObj.left_y_sign);
        beamObj.memberProperties.endPoint.x     = beamObj.origin.end_x + convertToUnit(beamObj.right_x_ft, beamObj.right_x_in, beamObj.right_x_fr, beamObj.right_x_sign);
        beamObj.memberProperties.endPoint.y     = beamObj.origin.end_y + convertToUnit(beamObj.right_y_ft, beamObj.right_y_in, beamObj.right_y_fr, beamObj.right_y_sign);
        beamObj.memberProperties.startPoint.z   = convertToUnit(beamObj.tos_ft1, beamObj.tos_in1, beamObj.tos_fr1, beamObj.tos_sign1);
        beamObj.memberProperties.endPoint.z     = convertToUnit(beamObj.tos_ft2, beamObj.tos_in2, beamObj.tos_fr2, beamObj.tos_sign2);
    }
    else 
    {
        beamObj.memberProperties.startPoint.x = beamObj.origin.start_x;
        beamObj.memberProperties.startPoint.y = beamObj.origin.start_y;
        beamObj.memberProperties.startPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);

        beamObj.memberProperties.endPoint.x = beamObj.origin.end_x;
        beamObj.memberProperties.endPoint.y = beamObj.origin.end_y;
        beamObj.memberProperties.endPoint.z = convertToUnit(beamObj.tos_ft, beamObj.tos_in, beamObj.tos_fr, beamObj.tos_sign);

        beamObj.tos_ft1 = beamObj.tos_ft;
        beamObj.tos_in1 = beamObj.tos_in;
        beamObj.tos_fr1 = beamObj.tos_fr;

        beamObj.tos_ft2 = beamObj.tos_ft;
        beamObj.tos_in2 = beamObj.tos_in;
        beamObj.tos_fr2 = beamObj.tos_fr;

        beamObj.tos_sign1 = beamObj.tos_sign
        beamObj.tos_sign2 = beamObj.tos_sign;
    }

    beamObj.y_depth = beamObj.memberProperties.startPoint.y;
    beamObj.x_depth = beamObj.memberProperties.startPoint.x;

    beamObj.uid = beamObj.type + "_" + beamObj.id;

    if (plane == "XY") {
        var floor = parseFloat($("#depthdrpdwn").val());

        if (beamObj.floor != floor)
            return;

        var startX  = mapCoordinate(beamObj.memberProperties.startPoint.x,"X",plane)+offSet;
        var endX    = mapCoordinate(beamObj.memberProperties.endPoint.x,"X",plane)-offSet;
        var startY  = mapCoordinate(beamObj.memberProperties.startPoint.y,"Y",plane)+offSet;
        var endY    = mapCoordinate(beamObj.memberProperties.endPoint.y,"Y",plane)-offSet;
        
        var line;
        if (startX == endX)
            line = new fabric.Line([startX*scale - Length / 2,startY*scale,endX*scale - Length / 2,endY*scale], 
                {
                    stroke: '#000000',
                    id: beamObj.id, 
                    strokeWidth: Length,
                    hasControls: false,
                    lockMovementX: false,
                    lockMovementY: false, 
                    memType: beamObj.type, 
                    mode: beamObj.type, 
                    uid:beamObj.id, 
                    tos: beamObj.memberProperties.startPoint.z
                });
        else if (startY == endY)
            line = new fabric.Line([startX*scale,startY*scale - Length / 2,endX*scale,endY*scale - Length / 2],
                {
                    stroke: '#000000',
                    id: beamObj.id, 
                    strokeWidth: Length,
                    hasControls: false,
                    lockMovementX: true,
                    lockMovementY: true, 
                    memType: beamObj.type, 
                    mode: beamObj.type, 
                    uid:beamObj.id, 
                    tos: beamObj.memberProperties.startPoint.z
                }); 
		else
        {
            var new_startX, new_startY, new_endX, new_endY;
            if (endX < startX) 
            {
                new_endX = endX * scale + Length / 2;
                new_startX = startX * scale - Length / 2;
            }
            else 
            {
                new_startX = startX * scale + Length / 2;
                new_endX = endX * scale - Length / 2;
            }

            if (endY < startY)
            {
                new_endY = endY * scale + Length / 2;
                new_startY = startY * scale - Length / 2;
            }
            else
            {
                new_endY = endY * scale - Length / 2;
                new_startY = startY * scale + Length / 2;
            }
            line = new fabric.Line([startX*scale - Length / 2,startY*scale - Length / 2,endX*scale - Length / 2,endY*scale - Length / 2],
            // line = new fabric.Line([new_startX, new_startY, new_endX, new_endY],
                {
                    stroke: '#000000',
                    id: beamObj.id, 
                    strokeWidth: Length,
                    hasControls: false,
                    lockMovementX: true,
                    lockMovementY: true, 
                    memType: beamObj.type, 
                    mode: beamObj.type, 
                    uid: beamObj.id, 
                    tos: beamObj.memberProperties.startPoint.z
                });
        }
		
        if (shape.chkPossibleBeam(line))
        {
            canvas.add(line);
    	    stopDraggingElement(line);
        }
    }
    else if(plane=="XZ"){
        if (beamObj.y_depth != parseFloat($("#depthdrpdwn").val()) && beamObj.memberProperties.endPoint.y != parseFloat($("#depthdrpdwn").val()))
            return;

        if (beamObj.type == "ibeam" && beamObj.memberProperties.startPoint.y != beamObj.memberProperties.endPoint.y)
            return;
        var startX  = mapCoordinate(beamObj.memberProperties.startPoint.x,"X",plane) + offSet;
        var endX    = mapCoordinate(beamObj.memberProperties.endPoint.x,"X",plane) - offSet;
        var startZ  = mapCoordinate(beamObj.memberProperties.startPoint.z,"Z",plane) + offSet;
        var endZ    = mapCoordinate(beamObj.memberProperties.endPoint.z,"Z",plane) - offSet;
        var line    = new fabric.Line(
                        [ startX * scale, startZ * scale - Length / 2, endX * scale, endZ * scale - Length / 2 ],
                        { 
                            stroke: '#000000', 
                            id: beamObj.id,
                            strokeWidth: Length,
                            hasControls: false, 
                            memType: beamObj.type, 
                            mode: beamObj.type, 
                            uid: beamObj.id
                        });

        if (startZ != endZ)
            var line = new fabric.Line(
                        [ startX * scale - Length / 2, startZ * scale - Length / 2, endX * scale - Length / 2, endZ * scale - Length / 2 ],
                        { 
                            stroke: '#000000', 
                            id: beamObj.id,
                            strokeWidth: Length,
                            hasControls: false, 
                            memType: beamObj.type, 
                            mode: beamObj.type, 
                            uid: beamObj.id
                        });
		canvas.add(line);
        stopDraggingElement(line);
    }
    else if(plane=="YZ"){
        if (beamObj.x_depth != parseFloat($("#depthdrpdwn").val()) && beamObj.memberProperties.endPoint.x != parseFloat($("#depthdrpdwn").val()))
            return;

        if (beamObj.type == "ibeam" && beamObj.memberProperties.startPoint.x != beamObj.memberProperties.endPoint.x)
            return;
        var startY  = mapCoordinate(beamObj.memberProperties.startPoint.y,"Y",plane) + offSet;
        var endY    = mapCoordinate(beamObj.memberProperties.endPoint.y,"Y",plane) - offSet;
        var startZ  = mapCoordinate(beamObj.memberProperties.startPoint.z,"Z",plane) + offSet;
        var endZ    = mapCoordinate(beamObj.memberProperties.endPoint.z,"Z",plane) - offSet;
        var line    = new fabric.Line(
                        [ startY * scale, startZ * scale - Length / 2, endY * scale, endZ * scale - Length / 2 ],
			            { 
                            stroke: '#000000', 
                            id: beamObj.id, 
                            strokeWidth: Length,
                            hasControls: false, 
                            memType: beamObj.type, 
                            mode: beamObj.type, 
                            uid:beamObj.id
                        });
		if (startZ != endZ)
            var line = new fabric.Line(
                        [ startY * scale - Length / 2, startZ * scale - Length / 2, endY * scale - Length / 2, endZ * scale - Length / 2 ],
                        { 
                            stroke: '#000000', 
                            id: beamObj.id, 
                            strokeWidth: Length,
                            hasControls: false, 
                            memType: beamObj.type, 
                            mode: beamObj.type, 
                            uid:beamObj.id
                        });
		canvas.add(line);
        stopDraggingElement(line);
    }
}


var class_place_beam = function()
{
    var main = this;

    main.mode = "Beam";

    main.isDrawReady = 0;
    main.unique_id = 0;

    main.data = {};
    main.tmpData = {};

    main.init       = function()
    {
        main.initEvent();
    }

    main.initEvent  = function()
    {
        canvas.on("mouse:down", function(evt)
        {
            if (!main.isDrawReady)
                return;

            if ($("#viewdrpdwn").val() != 1)
            {
                $("#message_area p").html("You can't draw Beams on Elevation View.");
                $("#message_area").fadeIn();

                setTimeout(function()
                {
                    $("#message_area").fadeOut();
                }, 3000);
                return;
            }

            var pointer = canvas.getPointer(evt.e);

            var startPoint_x = pointer.x / scale - gridOffSet;
            var startPoint_y = pointer.y /scale - gridOffSet;

            x_index = getGridIndex(startPoint_x, "X", "XY") - 1;
            y_index = getGridIndex(startPoint_y, "Y", "XY");

            y_index = gridData.yaxis.length - y_index - 1;

            if (x_index < 0 || x_index >= gridData.xaxis.length - 1)
                return;
            if (y_index < 0 || y_index > gridData.yaxis.length - 1)
                return;

            var maxY = gridData.yaxis[gridData.yaxis.length - 1].Dimension;

            var min = Math.min(
                            startPoint_x - gridData.xaxis[x_index].Dimension,
                            gridData.xaxis[x_index + 1].Dimension - startPoint_x,
                            maxY - gridData.yaxis[y_index].Dimension - startPoint_y,
                            -(maxY - gridData.yaxis[y_index + 1].Dimension - startPoint_y)
                            );

            var start_x, start_y, end_x, end_y;
            

            if (min == maxY - gridData.yaxis[y_index].Dimension - startPoint_y)
            {
                start_x = gridData.xaxis[x_index].Dimension;
                start_y = gridData.yaxis[y_index].Dimension;

                end_x = gridData.xaxis[x_index + 1].Dimension;
                end_y = gridData.yaxis[y_index].Dimension;
            }

            else if (min == -(maxY - gridData.yaxis[y_index + 1].Dimension - startPoint_y))
            {
                start_x = gridData.xaxis[x_index].Dimension;
                start_y = gridData.yaxis[y_index + 1].Dimension;

                end_x = gridData.xaxis[x_index + 1].Dimension;
                end_y = gridData.yaxis[y_index + 1].Dimension;
            }

            else if (min == startPoint_x - gridData.xaxis[x_index].Dimension)
            {
                start_x = gridData.xaxis[x_index].Dimension;
                start_y = gridData.yaxis[y_index].Dimension;

                end_x = gridData.xaxis[x_index].Dimension;
                end_y = gridData.yaxis[y_index + 1].Dimension;
            }

            else if (min == gridData.xaxis[x_index + 1].Dimension - startPoint_x)
            {
                start_x = gridData.xaxis[x_index + 1].Dimension;
                start_y = gridData.yaxis[y_index].Dimension;

                end_x = gridData.xaxis[x_index + 1].Dimension;
                end_y = gridData.yaxis[y_index + 1].Dimension;
            }

            if (start_x == end_x && (start_x == gridData.xaxis[0].Dimension || start_x == gridData.xaxis[gridData.xaxis.length - 1].Dimension))
                main.mode = "periBeam";
            else if (start_y == end_y && (start_y == gridData.yaxis[0].Dimension || start_y == gridData.yaxis[gridData.yaxis.length - 1].Dimension))
                main.mode = "periBeam";
            else
                main.mode = "Beam";

            var beamObj =new beamMember();

            if (main.mode == "periBeam")
            {
                var configure = new_configure.peribeam;
                Object.keys(configure.memberProperties).map(function(entry)
                {
                    beamObj.memberProperties[entry] = main.tmpData.memberProperties[entry];
                });

                Object.keys(configure.finishProperties).map(function(entry)
                {
                    if (entry != "paintType" && entry != "primerCheck")
                        beamObj.finishProperties[entry] = main.tmpData.finishProperties[entry];
                    else if (entry == "primerCheck")
                        beamObj.finishProperties[entry] = main.tmpData.finishProperties[entry];
                    else 
                        beamObj.finishProperties[entry] = main.tmpData.finishProperties[entry];
                });

                Object.keys(configure.connectionProperties).map(function(entry)
                {
                    beamObj.connectionProperties[entry] = main.tmpData.connectionProperties[entry];
                });
                
                Object.keys(configure).map(function(entry) 
                {
                    if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
                    {
                        beamObj[entry] = main.tmpData[entry];
                    }
                });
            }
            else if (main.mode == "Beam")
            {
                var configure = new_configure.gbeam;
                Object.keys(configure.memberProperties).map(function(entry)
                {
                    beamObj.memberProperties[entry] = main.tmpData.memberProperties[entry];
                });

                Object.keys(configure.finishProperties).map(function(entry)
                {
                    if (entry != "paintType" && entry != "primerCheck")
                        beamObj.finishProperties[entry] = main.tmpData.finishProperties[entry];
                    else if (entry == "primerCheck")
                        beamObj.finishProperties[entry] = main.tmpData.finishProperties[entry];
                    else 
                        beamObj.finishProperties[entry] = main.tmpData.finishProperties[entry];
                });

                Object.keys(configure.connectionProperties).map(function(entry)
                {
                    beamObj.connectionProperties[entry] = main.tmpData.connectionProperties[entry];
                });
                
                Object.keys(configure).map(function(entry) 
                {
                    if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
                    {
                        beamObj[entry] = main.tmpData[entry];
                    }
                });
            }

            beamObj.memberProperties.startPoint.x = start_x;
            beamObj.memberProperties.startPoint.y = start_y;

            beamObj.memberProperties.endPoint.x = end_x;
            beamObj.memberProperties.endPoint.y = end_y;

            beamObj.name = main.tmpData.name;
            beamObj.type = main.tmpData.type;
            beamObj.id = "Mem"+memId++;
            beamObj.memberProperties.profile = main.tmpData.memberProperties.profile;
            beamObj.uid = main.mode + "_" + main.tmpData.id;
            beamObj.memberProperties.startPoint.z = convertToUnit(main.tmpData.tos_ft, main.tmpData.tos_in, main.tmpData.tos_fr, main.tmpData.tos_sign);
            beamObj.memberProperties.endPoint.z = convertToUnit(main.tmpData.tos_ft, main.tmpData.tos_in, main.tmpData.tos_fr, main.tmpData.tos_sign);
            beamObj.type = main.mode;

            if (!checkExistMember(beamObj))
            {
                undoAction.addAction("memberPlace");
                placeBeam(beamObj, "XY");
                memberList.push(beamObj);
            }
        });
    }

    main.init();
}