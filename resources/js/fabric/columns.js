/**
 * 
 */
function placeDefaultColumns(columnObj,plane){
    undoAction.addAction("memberPlace");

    for(var x =0;x<gridData.xaxis.length;x++)
    {
        for(var y =0;y<gridData.yaxis.length;y++)
        {
            var column = new columnMember();
            var configure_column = new_configure.column;
            Object.keys(configure_column.memberProperties).map(function(entry)
            {
                column.memberProperties[entry] = columnObj.memberProperties[entry];
            });

            Object.keys(configure_column.finishProperties).map(function(entry)
            {
                if (entry != "paintType")
                    column.finishProperties[entry] = columnObj.finishProperties[entry];
                else 
                    column.finishProperties[entry] = $("input[name='" + columnObj.finishProperties[entry] + "']:checked").val();
            });

            Object.keys(configure_column.connectionProperties).map(function(entry)
            {
                column.connectionProperties[entry] = columnObj.connectionProperties[entry];
            });
            
            Object.keys(configure_column).map(function(entry) 
            {
                if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
                {
                    column[entry] = columnObj[entry];
                }
            });

            column.splice_data = [];

            var splice_count = parseInt(column["splice_count"].replace("sc", ""));
            for (var i = 0; i < splice_count; i ++) {
                var splice = new spliceProperties();
                splice.sign = $("#splice" + (i + 1) + "PosNeg").val();
                splice.elevation_ft = $("#splice" + (i + 1) + "Ft").val();
                splice.elevation_in = $("#splice" + (i + 1) + "In").val();
                splice.elevation_fr = $("#splice" + (i + 1) + "Fr").val();
                splice.profile = $("#splice" + (i + 1) + "Profile").val();
                column.splice_data.push(splice);
            }
            
            column.name =   columnObj.name;
            column.type =   columnObj.type;
            column.id ="Mem"+memId++;
            column.memberProperties.profile = columnObj.memberProperties.profile;
            column.memberProperties.startPoint.x = parseFloat(gridData.xaxis[x].Dimension);
            column.memberProperties.startPoint.y = parseFloat(gridData.yaxis[y].Dimension);
            column.memberProperties.startPoint.z = parseFloat(columnObj.memberProperties.startPoint.z);
            column.memberProperties.endPoint.x = parseFloat(gridData.xaxis[x].Dimension);
            column.memberProperties.endPoint.y = parseFloat(gridData.yaxis[y].Dimension);
            column.memberProperties.endPoint.z = parseFloat(columnObj.memberProperties.endPoint.z);
            column.floor = parseFloat(columnObj.floor);
            column.x_depth = gridData.xaxis[x].Dimension;
            column.y_depth = gridData.yaxis[y].Dimension;
            placeColumn(column,plane);
            column.uid = "Column_" + column.id;
            // memberList.push(column);
            dataModel.insertData(column); //regularColumn
        }
    }
}
function placeColumn(columnObj,plane){

    columnObj.memberProperties.startPoint.z = convertToUnit(columnObj.baseElevation_ft, columnObj.baseElevation_in, columnObj.baseElevation_fr, columnObj.baseElevation_sign);
    columnObj.memberProperties.endPoint.z = convertToUnit(columnObj.topElevation_ft, columnObj.topElevation_in, columnObj.topElevation_fr, columnObj.topElevation_sign);

    if (columnObj.originPoint == undefined)
    {
        columnObj.originPoint = {x: 0, y: 0};
        columnObj.originPoint.x = columnObj.memberProperties.startPoint.x;
        columnObj.originPoint.y = columnObj.memberProperties.startPoint.y;
    }

    var offset_x = convertToUnit(columnObj.col_offsetx_ft, columnObj.col_offsetx_in, columnObj.col_offsetx_fr, columnObj.col_offsetx_sign);
    columnObj.memberProperties.startPoint.x = columnObj.originPoint.x + offset_x;
    columnObj.memberProperties.endPoint.x = columnObj.originPoint.x + offset_x;
    
    var offset_y = convertToUnit(columnObj.col_offsety_ft, columnObj.col_offsety_in, columnObj.col_offsety_fr, columnObj.col_offsety_sign);
    
    columnObj.memberProperties.startPoint.y = columnObj.originPoint.y + offset_y;
    columnObj.memberProperties.endPoint.y = columnObj.originPoint.y + offset_y;
    
    var metric;

    if (canvas.getZoom() / default_zoom > 4)
        metric = 4;
    else if (canvas.getZoom() / default_zoom < 0.25)
        metric = 0.25;
    else metric = 1;

    // var Length = 1 * scale;
    var Length = 5;
    // if (metric == 4)
    // {
    //     Length = 1 * 4 * default_zoom / canvas.getZoom();
    // }

    if(plane=="XY"){
  
        var index = 0;
        for (i = 0; i < gridData.zaxis.length; i ++)
        {
            if (gridData.zaxis[i].Dimension == parseFloat($("#depthdrpdwn").val()))
            {
                index = i;
                break;
            }
        }
        if ((columnObj.memberProperties.startPoint.z >= parseFloat($("#depthdrpdwn").val()) && columnObj.memberProperties.startPoint.z <= gridData.zaxis[index + 1].Dimension) || (columnObj.memberProperties.startPoint.z <= parseFloat($("#depthdrpdwn").val()) && parseFloat($("#depthdrpdwn").val()) <= columnObj.memberProperties.endPoint.z))
        {

        }
        else 
        {
            return;
        }
        var pointX = mapCoordinate(columnObj.memberProperties.startPoint.x, "X", plane) * scale;
        var pointY= mapCoordinate(columnObj.memberProperties.startPoint.y,"Y",plane)*scale;
        var line;
        
        if (columnObj.memberProperties.profile.startsWith("HSS") && columnObj.memberProperties.profile.match(/X/gi).length == 2)
        {
            line = new fabric.Rect(
            {
                width: Length * 2, 
                height: Length * 2,
                rx: Length / 2, 
                ry: Length / 2,
                stroke: '#68f441',
                strokeWidth: 2,
                hasRotatingPoint: false,
                lockRotation: true,
                fill: "white",
                shapeType: "roundRect",
                defaultX: pointX,
                defaultY: pointY
            });

            line.left = pointX - Length;
            line.top = pointY - Length;
        }
        else if (columnObj.memberProperties.profile.startsWith("HSS") && columnObj.memberProperties.profile.match(/X/gi).length == 1)
        {
            line = new fabric.Circle(
            {
                radius: Length,
                fill: "white",
                stroke: "#68f441",
                left: pointX,
                top: pointY,
                strokeWidth: 2,
                hasRotatingPoint: false,
                lockRotation: true,
                shapeType: "circle",
                defaultX: pointX,
                defaultY: pointY
            });
        }
        else if (columnObj.memberProperties.profile.startsWith("L"))
        {
            var lineData = [
                {x: pointX - Length, y: pointY - Length},
                {x: pointX - Length, y: pointY + Length},
                {x: pointX + Length, y: pointY + Length}
            ];

            line = new fabric.Polyline(lineData, 
                            {
                                stroke: '#68f441',
                                fill: "white",
                                hasControls: false,
                                strokeWidth: 2,
                                hasRotatingPoint : false,
                                lockRotation: true,
                                defaultX: pointX,
                                defaultY: pointY
                            }, false);
        }
        else if (columnObj.memberProperties.profile.startsWith("2L"))
        {
            var lineData = [
                {x: pointX - 2 * Length, y: pointY + Length},
                {x: pointX, y: pointY + Length},
                {x: pointX, y: pointY - Length},
                {x: pointX, y: pointY - Length},
                {x: pointX, y: pointY + Length},
                {x: pointX + 2 * Length, y: pointY + Length}
            ];

            line = new fabric.Polyline(lineData, 
                            {
                                stroke: '#68f441',
                                fill: "white",
                                hasControls: false,
                                strokeWidth: 2,
                                hasRotatingPoint : false,
                                lockRotation: true,
                                defaultX: pointX,
                                defaultY: pointY
                            }, false);
        }
        else if (columnObj.memberProperties.profile.startsWith("W"))
        {
            var lineData = [ 
                { x: pointX+Length*1/3, y: pointY},
                { x: pointX+Length*1/3, y: (pointY+(Length*1/3))},
                { x: (pointX+Length), y: (pointY+(Length*1/3))},
                { x: (pointX+Length), y: (pointY+Length)},
                { x: (pointX-Length), y: (pointY+Length)},
                { x: (pointX-Length), y: (pointY+(Length*1/3))},
                { x: (pointX-(Length*1/3)), y: (pointY+(Length*1/3))},
                { x: (pointX-(Length*1/3)), y: (pointY-(Length*1/3))},
                { x: (pointX-Length), y: (pointY-(Length*1/3))},
                { x: (pointX-Length), y: (pointY-Length)},
                { x: (pointX+Length), y: (pointY-Length)},
                { x: (pointX+Length), y: (pointY-(Length*1/3))},
                { x: (pointX+(Length*1/3)), y: (pointY-(Length*1/3))},
                { x: (pointX+(Length*1/3)), y: pointY}
            ];

            line = new fabric.Polyline(lineData, 
                            {
                                fill: '#68f441',
                                hasControls: false,
                                strokeWidth: Length,
                                hasRotatingPoint : false,
                                lockRotation: true,
                                defaultX: pointX,
                                defaultY: pointY,
                                shapeType: "defaultColumn"
                            }, false);
        }

        line.uid  = columnObj.id;
        line.type = "Column";
        line.mode = "Column";
        line.memType = "column";

        line.set({'angle': parseFloat(columnObj.memberProperties.orientation)});
        line.setCoords();

        line.setPositionByOrigin({x: pointX, y: pointY}, 'center', 'center');

        if (shape.chkPosAvailable(line, line.mode))
        {
            canvas.add(line);
            stopDraggingElement(line);
        }
    }
    else if (plane == "XZ"){
        if (columnObj.y_depth != $("#depthdrpdwn").val())
            return;
              
        var pointX = mapCoordinate(columnObj.memberProperties.startPoint.x, "X", plane) * scale;
        var pointStartZ = mapCoordinate(columnObj.memberProperties.startPoint.z, "Z", plane) * scale;
        var pointEndZ = mapCoordinate(columnObj.memberProperties.endPoint.z, "Z", plane) * scale;
        
        var line = new fabric.Line([pointX - Length / 2, pointStartZ, pointX - Length / 2, pointEndZ],
            {
                stroke: '#68f441',
                strokeWidth: Length,
                hasControls:false,
                id: columnObj.id, 
                memType:"column", 
                mode: "Column", 
                uid: columnObj.id
            });

        canvas.add(line);
        stopDraggingElement(line);
    }
    else if (plane=="YZ"){
        if (columnObj.x_depth != $("#depthdrpdwn").val())
            return;

        var pointY= mapCoordinate(columnObj.memberProperties.startPoint.y,"Y",plane)*scale;
        var pointStartZ=mapCoordinate(columnObj.memberProperties.startPoint.z,"Z",plane)*scale;
        var pointEndZ= mapCoordinate(columnObj.memberProperties.endPoint.z,"Z",plane)*scale;
      
        var line = new fabric.Line([pointY - Length / 2,pointStartZ,pointY - Length / 2,pointEndZ  ],
            { 
                stroke: '#68f441',
                strokeWidth: Length,
                hasControls: false,
                id: columnObj.id,
                memType: "column", 
                mode: "Column", 
                uid: columnObj.id
            });
                    
        canvas.add(line);
        stopDraggingElement(line);
    }
}

var class_place_column   = function(parent)
{
    var main    = this;

    main.mode        = "Column";
    main.parent      = parent;

    main.isDrawReady = 0;

    main.unique_id   = 0;

    main.grid_w      = 0;
    main.grid_h      = 0;
    main.tmpData     = {};

    main.init   = function()
    {
        main.grid_w  = main.parent.grid_w;
        main.grid_h  = main.parent.grid_h;

        main.initEvent();
    }

    main.initEvent = function()
    {
        canvas.on("mouse:down", function(evt)
        {
            if(!main.isDrawReady)
                return;

            if($("#viewdrpdwn").val() != 1)
            {
                $("#message_area p").html("You can't draw Columns on Elavation View.");
                $("#message_area").fadeIn();

                setTimeout(function()
                {
                    $("#message_area").fadeOut();
                }, 3000);
                return;
            }

            var column = new columnMember();

            var pointer = canvas.getPointer(evt.e);

            var plane = "XY";

            x_pos = pointer.x / scale - gridOffSet;
            y_pos = pointer.y / scale - gridOffSet;

            x_index = getGridIndex(x_pos, "X", "XY");
            y_index = getGridIndex(y_pos, "Y", "XY");

            if (x_index < 0 || x_index >= gridData.xaxis.length)
                return;

            if (Math.abs(gridData.xaxis[x_index - 1].Dimension - x_pos) > Math.abs(gridData.xaxis[x_index].Dimension - x_pos))
                x_index += 1;
            if (Math.abs(gridData.yaxis[y_index - 1].Dimension - y_pos) > Math.abs(gridData.yaxis[y_index].Dimension - y_pos))
                y_index += 1;

            y_index = gridData.yaxis.length - y_index;
            if(y_index < 0 || y_index >= gridData.yaxis.length)
                return;

            x_index = nearestGrid("X", x_pos);
            y_index = nearestGrid("Y", y_pos);
            
            var column = new columnMember();
            var configure_column = new_configure.column;
            Object.keys(configure_column.memberProperties).map(function(entry)
            {
                column.memberProperties[entry] = main.tmpData.memberProperties[entry];
            });

            Object.keys(configure_column.finishProperties).map(function(entry)
            {
                if (entry != "paintType")
                    column.finishProperties[entry] = main.tmpData.finishProperties[entry];
                else 
                {
                    column.finishProperties[entry] = main.tmpData.finishProperties[entry];
                }
            });

            Object.keys(configure_column.connectionProperties).map(function(entry)
            {
                column.connectionProperties[entry] = main.tmpData.connectionProperties[entry];
            });
            
            Object.keys(configure_column).map(function(entry) 
            {
                if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
                {
                    column[entry] = main.tmpData[entry];
                }
            });

            column.splice_data = [];

            var splice_count = parseInt(column["splice_count"].replace("sc", ""));
            for (var i = 0; i < splice_count; i ++) {
                var splice = new spliceProperties();
                splice.sign = $("#splice" + (i + 1) + "PosNeg").val();
                splice.elevation_ft = $("#splice" + (i + 1) + "Ft").val();
                splice.elevation_in = $("#splice" + (i + 1) + "In").val();
                splice.elevation_fr = $("#splice" + (i + 1) + "Fr").val();
                splice.profile = $("#splice" + (i + 1) + "Profile").val();
                column.splice_data.push(splice);
            }
            
            column.name =   main.tmpData.name;
            column.type =   main.tmpData.type;
            column.id   ="Mem"+memId++;
            column.memberProperties.profile=main.tmpData.memberProperties.profile;
            column.memberProperties.startPoint.z=parseFloat(main.tmpData.memberProperties.startPoint.z);
            column.memberProperties.endPoint.z=parseFloat(main.tmpData.memberProperties.endPoint.z);
            column.floor = parseFloat(main.tmpData.floor);
            column.x_depth = gridData.xaxis[x_index].Dimension;
            column.y_depth = gridData.yaxis[y_index].Dimension;
            
            column.memberProperties.startPoint.x = gridData.xaxis[x_index].Dimension;
            column.memberProperties.startPoint.y = gridData.yaxis[y_index].Dimension;
            column.memberProperties.endPoint.x = gridData.xaxis[x_index].Dimension;
            column.memberProperties.endPoint.y = gridData.yaxis[y_index].Dimension;

            placeColumn(column,plane);
            column.uid = "Column_" + column.id;
            undoAction.addAction("memberPlace");
            // memberList.push(column);
            dataModel.insertData(column);
        });
    }

    main.init();
}