////Scale = 1ft = 10 pixels
var scale = 5;
var memId=1;
var gridOffSet = 30;
var maxV = 0;
var maxH = 0;
var minV = 0;
var minH = 0;
var memberList =[]
var sel_uid_buffer = [];

function stopDraggingElement(element) {
    element.lockMovementX = true;
    element.lockMovementY = true;
  }

function mapCoordinate(point,axis,plan){
 
    if(plan=="XY"){
        if(axis=="X"){
          
            return point+gridOffSet;
        }
        else if (axis=="Y"){
            return (maxV-point)-gridOffSet;
        }
    }
    else if (plan=="XZ"){
        if(axis=="X"){
            return point+gridOffSet;
        }
        else if (axis=="Z"){
            return (maxV-point)-gridOffSet;
        }
    }
    else if (plan=="YZ"){
       
        if(axis=="Y"){
             return point+gridOffSet;
        }
        else if (axis=="Z"){
            return (maxV-point)-gridOffSet;
        }
    }
}

function mapCoordinateInverse(point,axis,plan){
    if(plan=="XY"){
        if(axis=="X"){
            return point-gridOffSet;
        }
        else if (axis=="Y"){
            return (maxV-point)-gridOffSet;
        }
    }
    else if (plan=="XZ"){
        if(axis=="X"){
            return point+gridOffSet;
        }
        else if (axis=="Z"){
            return (maxV-point)-gridOffSet;
        }
    }
    else if (plan=="YZ"){
       
        if(axis=="Y"){
             return (maxH-point)-gridOffSet;
        }
        else if (axis=="Z"){
            return (maxV-point)-gridOffSet;
        }
    }
}

function fractionToFeet(str)
{
    var inch = 0;
    if (str == "0")
        return 0;
    var string = str.split("/");
    
    if ( string[0] == "0" )
        return 0;

    inch = parseInt(string[0]) / parseInt(string[1]);

    return inch * 0.0833;
}

function fractionToInch(str)
{
    var inch = 0;
    if (str == "0")
        return 0;
    var string = str.split("/");
    
    if ( string[0] == "0" )
        return 0;

    inch = parseFloat(string[0]) / parseFloat(string[1]);

    return inch;
}

function convertFeet(ft, inch, fr)
{
    var rlt = 0;
    if (ft != undefined && ft != "")
        rlt += parseFloat(ft);
    else 
        rlt += 0;

    if (inch != undefined && inch != "" && inch != "select")
        rlt += parseFloat(inch) * 0.0833;
    else 
        rlt += 0;

    if (fr != undefined && fr != "" && fr != "select")
        rlt += fractionToFeet(fr);
    else
        rlt += 0;

    return rlt;
}

function convertInch(ft, inch, fr)
{
    var rlt = 0;
    if (ft != undefined && ft != "")
        rlt += parseInt(ft) * 12;
    else 
        rlt += 0;

    if (inch != undefined && inch != "" && inch != "select")
        rlt += parseInt(inch);
    else 
        rlt += 0;
    if (fr != undefined && fr != "" && fr != "select")
        rlt += parseFloat(fr);
    else
        rlt += 0;
    return rlt;
}

function convertToUnit(ft, inch, fr, sign)
{
    if (sign == undefined)
        sign = "+";
    var rlt = 0;
    if (sign == "+")
        rlt = convertInch(ft, inch, fr);
    else
        rlt = (-1) * convertInch(ft, inch, fr);
    return rlt;
}

function cloneObject(newObj, origin)
{
    Object.keys(origin.memberProperties).map(function(entry)
    {
        newObj.memberProperties[entry] = origin.memberProperties[entry];
    });

    Object.keys(origin.finishProperties).map(function(entry)
    {
        newObj.finishProperties[entry] = origin.finishProperties[entry];
    });

    Object.keys(origin.connectionProperties).map(function(entry)
    {
        newObj.connectionProperties[entry] = origin.connectionProperties[entry];
    });
    
    Object.keys(origin).map(function(entry) 
    {
        if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
        {
            newObj[entry] = origin[entry];
        }
    });

    return newObj;
}

function getMemberMatchedObj(obj)
{
    for ( var i = 0; i < memberList.length; i ++ )
        if (memberList[i].uid == obj.mode + "_" + obj.uid)
            return memberList[i];
}

function getNearestBeam(pos, direction)
{
    var maxH = 99999;
    var maxV = 99999;
    var x_index = nearestGrid("X", pos.x);
    var y_index = nearestGrid("Y", pos.y);
    if (gridData.xaxis[x_index].Dimension >= pos.x)
        x_index -= 1;
    if (mapCoordinate(gridData.yaxis[y_index].Dimension, "Y", "XY") <= pos.y)
        y_index -= 1;

    if (x_index < 0 || y_index < 0)
        return -1;

    var mode = "";
    var uid = "";

    var rlt = {first: {}, second: {}};
    switch (direction)
    {
        case "X":

            for ( i = 0; i < canvas._objects.length; i ++ )
            {
                if (canvas._objects[i].mode == "Beam" || canvas._objects[i].mode == "periBeam" || canvas._objects[i].mode == "ibeam" || canvas._objects[i].mode == "pgirder")
                {
                    if (pos.x * scale > canvas._objects[i].x1 && (pos.x * scale - canvas._objects[i].x1) < maxH && (canvas._objects[i].y1 - pos.y * scale) * (canvas._objects[i].y2 - pos.y * scale) <= 0)
                    {
                        maxH = pos.x * scale - canvas._objects[i].x1;
                        mode = canvas._objects[i].mode;
                        uid = canvas._objects[i].uid;
                    }
                }
            }
            if (maxH == 99999)
                return -1;

            rlt.first.mode = mode;
            rlt.first.uid = uid;

            maxH = 99999;
            mode = "";
            uid = "";

            for ( i = 0; i < canvas._objects.length; i ++ )
            {
                if (canvas._objects[i].mode == "Beam" || canvas._objects[i].mode == "periBeam" || canvas._objects[i].mode == "ibeam" || canvas._objects[i].mode == "pgirder")
                {
                    if (pos.x * scale < canvas._objects[i].x1 && (canvas._objects[i].x1 - pos.x * scale) < maxH && (canvas._objects[i].y1 - pos.y * scale) * (canvas._objects[i].y2 - pos.y * scale) <= 0)
                    {
                        maxH = canvas._objects[i].x1 - pos.x * scale;
                        mode = canvas._objects[i].mode;
                        uid = canvas._objects[i].uid;
                    }
                }
            }

            if (maxH == 99999)
                return -1;
            rlt.second.mode = mode;
            rlt.second.uid = uid;

        break;

        case "Y":
            for ( i = 0; i< canvas._objects.length; i ++ )
            {
                if (canvas._objects[i].mode == "Beam" || canvas._objects[i].mode == "periBeam" || canvas._objects[i].mode == "ibeam" || canvas._objects[i].mode == "pgirder")
                {
                    if (pos.y * scale < canvas._objects[i].y1 && (canvas._objects[i].y1 - pos.y * scale) < maxV && (canvas._objects[i].x1 - pos.x * scale) * (canvas._objects[i].x2 - pos.x * scale) <= 0)
                    {
                        maxV = canvas._objects[i].y1 - pos.y * scale;
                        mode = canvas._objects[i].mode;
                        uid = canvas._objects[i].uid;
                    }
                }
            }

            if (maxV == 99999)
                return -1;

            rlt.first.mode = mode;
            rlt.first.uid = uid;

            maxV = 99999;
            mode = "";
            uid = "";

            for (i = 0; i < canvas._objects.length; i ++)
            {
                if (canvas._objects[i].mode == "Beam" || canvas._objects[i].mode == "periBeam" || canvas._objects[i].mode == "ibeam" || canvas._objects[i].mode == "pgirder")
                {
                    if (pos.y * scale > canvas._objects[i].y1 && (pos.y * scale- canvas._objects[i].y1) < maxV && (canvas._objects[i].x1 - pos.x * scale) * (canvas._objects[i].x2 - pos.x * scale) <= 0)
                    {
                        maxV = pos.y * scale- canvas._objects[i].y1;
                        mode = canvas._objects[i].mode;
                        uid = canvas._objects[i].uid;
                    }
                }
            }

            if (maxV == 99999)
                return -1;

            rlt.second.mode = mode;
            rlt.second.uid = uid;
        break;
    }
    
    return rlt;
}

function getNearestTopBeam(pos, direction)
{
    var maxH = 99999;
    var maxV = 99999;
    var x_index = nearestGrid("X", pos.x);
    var y_index = nearestGrid("Y", pos.y);
    if (gridData.xaxis[x_index].Dimension >= pos.x)
        x_index -= 1;
    if (mapCoordinate(gridData.yaxis[y_index].Dimension, "Y", "XY") <= pos.y)
        y_index -= 1;

    if (x_index < 0 || y_index < 0)
        return -1;

    var mode = "";
    var uid = "";

    var rlt = {};
    switch (direction)
    {
        case "X":

            maxH = 99999;
            mode = "";
            uid = "";

            for ( i = 0; i < canvas._objects.length; i ++ )
            {
                if (canvas._objects[i].mode == "Beam" || canvas._objects[i].mode == "periBeam" || canvas._objects[i].mode == "ibeam" || canvas._objects[i].mode == "pgirder")
                {
                    if (pos.x * scale < canvas._objects[i].x1 && (canvas._objects[i].x1 - pos.x * scale) < maxH && (canvas._objects[i].y1 - pos.y * scale) * (canvas._objects[i].y2 - pos.y * scale) <= 0)
                    {
                        maxH = canvas._objects[i].x1 - pos.x * scale;
                        mode = canvas._objects[i].mode;
                        uid = canvas._objects[i].uid;
                    }
                }
            }

            if (maxH == 99999)
                return -1;
            rlt.mode = mode;
            rlt.uid = uid;

        break;

        case "Y":
            
            maxV = 99999;
            mode = "";
            uid = "";

            for (i = 0; i < canvas._objects.length; i ++)
            {
                if (canvas._objects[i].mode == "Beam" || canvas._objects[i].mode == "periBeam" || canvas._objects[i].mode == "ibeam" || canvas._objects[i].mode == "pgirder")
                {
                    if (pos.y * scale > canvas._objects[i].y1 && (pos.y * scale- canvas._objects[i].y1) < maxV && (canvas._objects[i].x1 - pos.x * scale) * (canvas._objects[i].x2 - pos.x * scale) <= 0)
                    {
                        maxV = pos.y * scale- canvas._objects[i].y1;
                        mode = canvas._objects[i].mode;
                        uid = canvas._objects[i].uid;
                    }
                }
            }

            if (maxV == 99999)
                return -1;

            rlt.mode = mode;
            rlt.uid = uid;
        break;
    }
    
    return rlt;
}

function getNearestRec(pos_x, pos_y)
{
    var max = 99999;
    var mode = "";
    var distance = 0;
    var distanceBeamFromPoint = [];

    for ( i = 0; i < canvas._objects.length; i ++ )
    {
        if (!includeBeam(canvas._objects[i].mode))
            continue;
        distance = getDistance(pos_x * scale, pos_y * scale, canvas._objects[i]);
        index = i;
        distanceBeamFromPoint.push({distance: distance, index: i});
    }

    distanceBeamFromPoint.sort(function(a, b) 
    {
        return a.distance - b.distance;
    });

    var vertex_array = [];
    for (i = 0; i < 4; i ++)
    {
        if (!containsPoints(vertex_array, canvas._objects[distanceBeamFromPoint[i].index].x1, canvas._objects[distanceBeamFromPoint[i].index].y1))
        {
            vertex_array.push({x: canvas._objects[distanceBeamFromPoint[i].index].x1, y: canvas._objects[distanceBeamFromPoint[i].index].y1});
        }

        if (!containsPoints(vertex_array, canvas._objects[distanceBeamFromPoint[i].index].x2, canvas._objects[distanceBeamFromPoint[i].index].y2))
        {
            vertex_array.push({x: canvas._objects[distanceBeamFromPoint[i].index].x2, y: canvas._objects[distanceBeamFromPoint[i].index].y2});
        }
    }

    if (vertex_array.length == 4)
    {
        
    }
}

function intersectObject()
{

}

function containsPoints(arr, pointX, pointY)
{
    var flg = false;

    for (i = 0; i < arr.length; i ++)
    {
        if (Math.abs(arr[i].x - pointX) <= 2.5 && Math.abs(arr[i].y - pointY) <= 2.5)
        {
            flg = true;
            break;
        }
    }
    return flg;
}

function getDistance(pointX, pointY, object)
{
    var intersectPoint = {x: 0, y: 0};
    var line = representLine(object);

    var distance = 0;

    intersectPoint.x = (line.b * (line.b * pointX - line.a * pointY) - line.a * line.c) / (line.a * line.a + line.b * line.b);
    intersectPoint.y = (line.a * (-line.b * pointX + line.a * pointY) - line.b * line.c) / (line.a * line.a + line.b * line.b);

    if ((intersectPoint.x - object.x1) * (intersectPoint.x - object.x2) > 0)
    {
        distance = 999999;
    }
    else 
    {
        distance = Math.abs(pointX * line.a + pointY * line.b + line.c) / Math.sqrt(line.a * line.a + line.b * line.b);
    }

    return distance;
}

function representLine(object)
{
    var a = 0,
        b = 0,
        c = 0;
    if (object.x2 == object.x1)
    {
        b = 0;
        a = 1;
        c = -1 * object.x1;
    }

    else if (object.y2 == object.y1)
    {
        a = 0;
        b = 1;
        c = -1 * object.y2;
    }

    else 
    {
        b = -1;
        a = (object.y2 - object.y1) / (object.x2 - object.x1);
        c = (object.x1 * object.y2 - object.x2 * object.y1) / (object.x1 - object.x2);
    }

    return {a: a, b: b, c: c};
}

function includeBeam(mode)
{
    var flg = false;
    if (mode == "Beam" || mode == "periBeam" || mode == "ibeam" || mode == "pgirder")
        flg = true;
    return flg;
}

function nearestBeam(direction, pos_x, pos_y)
{
    var max = 99999;
    var mode = "";
    var uid = "";
    pos_x += gridOffSet;
    pos_y += gridOffSet;
    if (direction == "X")
    {
        for (i = 0; i < canvas._objects.length; i ++)
        {
            if (canvas._objects[i].mode == "Beam" || canvas._objects[i].mode == "periBeam" || canvas._objects[i].mode == "ibeam" || canvas._objects[i].mode == "pgirder")
            {
                if (canvas._objects[i].y1 == canvas._objects[i].y2)
                {
                    if (pos_x * scale >= canvas._objects[i].x1 && pos_x * scale <= canvas._objects[i].x2)
                    {
                        if (Math.abs(pos_y * scale - canvas._objects[i].y1) < max)
                        {
                            max = Math.abs(pos_y * scale- canvas._objects[i].y1);
                            mode = canvas._objects[i].mode;
                            uid = canvas._objects[i].uid;
                        }
                    }
                }
            }
        }
    }
    else
    {
        for (i = 0; i < canvas._objects.length; i ++)
        {
            if (canvas._objects[i].mode == "Beam" || canvas._objects[i].mode == "periBeam" || canvas._objects[i].mode == "ibeam" || canvas._objects[i].mode == "pgirder")
            {
                if (canvas._objects[i].x1 == canvas._objects[i].x2)
                {
                    if ((pos_y * scale - canvas._objects[i].y1) * (pos_y * scale - canvas._objects[i].y2) <= 0)
                    {
                        if (Math.abs(pos_x * scale - canvas._objects[i].x1) < max)
                        {
                            max =  Math.abs(pos_x * scale - canvas._objects[i].x1);
                            mode = canvas._objects[i].mode;
                            uid = canvas._objects[i].uid;
                        }
                    }
                }
            }
        }
    }

    for (i = 0; i < memberList.length; i ++)
    {
        if (memberList[i].uid == mode + "_" + uid)
            return memberList[i];
    }
}

function convertValueToLayout(value)
{
    var rlt = "";
    switch (value)
    {
        case "1":
            rlt = "tas";
        break;
        case "2":
            rlt = "tbs";
        break;
        case "4":
            rlt = "tvs";
        break;
        case "5":
            rlt = "tvvs";
        break;
        case "8":
            rlt = "tws";
        break;
        case "9":
            rlt = "tms";
        break;
    }
    return rlt;
}

function layoutToValue(layout)
{
    var rlt = "";
    switch (layout)
    {
        case "tas":
            rlt = "1";
        break;
        case "tbs":
            rlt = "2";
        break;
        case "tvs":
            rlt = "4";
        break;
        case "tvvs":
            rlt = "5";
        break;
        case "tws":
            rlt = "8";
        break;
        case "tms":
            rlt = "9";
        break;
    }
    return rlt;
}

function reverseBraceShape(shape)
{
    {
        switch (shape)
        {
            case "tas":
                return "tbs";
            break;

            case "tbs":
                return "tas";
            break;

            case "tvs":
                return "tvs";
            break;

            case "tvvs":
                return "tvvs";
            break;

            case "tws":
                return "tws";
            break;

            case "tms":
                return "tms";
            break;
        }
    }
}

function reverseFromUnit(val)
{
    var fr_arr = [
                    {str: "0", val: 0},
                    {str: "1/4", val: 0.25},
                    {str: "3/8", val: 0.375},
                    {str: "1/2", val: 0.5},
                    {str: "5/8", val: 0.625},
                    {str: "3/4", val: 0.75},
                    {str: "7/8", val: 0.875}
                ];
    var ft = parseInt(val / 12);

    var inch = parseInt(val) % 12;

    var fraction = val % 1;

    var fr = "";

    // for ( var i = 0; i < fr_arr.length; i ++ )
    //     if (fraction == fr_arr[i].val)
    //     {
    //         fr = fr_arr[i].str;
    //     }
    fr = fraction;



    return {ft: ft, in: inch, fr: fr};
}

function reverseLabelFromUnit(val)
{
    var fr_arr = [
                    {str: "0", val: 0},
                    {str: "1/16", val: 0.0625},
                    {str: "1/8", val: 0.125},
                    {str: "3/16", val: 0.1875},
                    {str: "1/4", val: 0.25},
                    {str: "5/16", val: 0.3125},
                    {str: "3/8", val: 0.375},
                    {str: "7/16", val: 0.4375},
                    {str: "1/2", val: 0.5},
                    {str: "9/16", val: 0.5625},
                    {str: "5/8", val: 0.625},
                    {str: "11/16", val: 0.6875},
                    {str: "3/4", val: 0.75},
                    {str: "13/16", val: 0.8125},
                    {str: "7/8", val: 0.875},
                    {str: "15/16", val: 0.9375},
                ];
    var ft = parseInt(val / 12);

    var inch = parseInt(val) % 12;

    var fraction = val % 1;

    var fr = "";

    for ( var i = 0; i < fr_arr.length; i ++ )
        if (fraction == fr_arr[i].val)
        {
            fr = fr_arr[i].str;
            break;
        }

    return {ft: ft, in: inch, fr: fr};
}

function getNewYPoint(distance, x1, x2, y1, y2)
{
    if (y1 == y2)
        return y1;

    return (y2 * distance + y1 * (x2 - x1 - distance)) / (x2 - x1);
}

function getNewXPoint(distance, x1, x2, y1, y2)
{
    if (x1 == x2)
        return x1;

    return (x2 * distance + x1 * (y2 - y1 - distance)) / (y2 - y1);
}

function checkExistMember(obj)
{
    var flag = false;
    for (var i = 0; i < memberList.length; i ++)
    {
        if (memberList[i].uid == obj.uid)
        {
            break;
        }
        if (memberList[i].type == obj.type)
        {
            if (memberList[i].memberProperties.startPoint.x == obj.memberProperties.startPoint.x && memberList[i].memberProperties.startPoint.y == obj.memberProperties.startPoint.y && memberList[i].memberProperties.startPoint.z == obj.memberProperties.startPoint.z)
            {
                if (memberList[i].memberProperties.endPoint.x == obj.memberProperties.endPoint.x && memberList[i].memberProperties.endPoint.y == obj.memberProperties.endPoint.y && memberList[i].memberProperties.endPoint.z == obj.memberProperties.endPoint.z)
                {
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag
}

function checkColumn(obj)
{
    if (obj.mode == "Column" || obj.mode == "boxColumn" || obj.mode == "builtUpIColumn" || obj.mode == "builtUpCRColumn" || obj.mode == "builtUpCHColumn" || obj.mode == "postColumn")
        return true;
    return false;
}

function checkColumnMember(member)
{
    if (member.type == "Column" || member.type == "boxColumn" || member.type == "builtUpIColumn" || member.type == "builtUpCRColumn" || member.type == "builtUpCHColumn" || member.type == "postColumn")
        return true;
    return false;
}

function checkBeam(obj)
{
    if (obj.mode == "Beam" || obj.mode == "periBeam" || obj.mode == "ibeam" || obj.mode == "pgirder" || obj.mode == "cantBeam")
        return true;
    return false;
}

function displayDimension(ft, inch, fr)
{
    var value = "";
    if (ft != "0")
    {
        value += ft + "'-";
    }

    if (inch != "0")
    {
        value += inch;
        if (fr != "0")
            value += " ";
    }
    else if (ft != "0" && fr != "0")
    {
        value += "0 ";
    }

    if (fr != "0")
    {
        value += decimalToFraction(fr) + '"';
    }
    else if (fr == "0" && inch == 0)
    {
        value += '0"';
    }
    else if (fr == "0" && inch != 0 && ft == 0)
    {
        value += '"';
    }

    return value;
}

function decimalToFraction(fr)
{
    var fr_arr = [
                    {str: "0", val: 0},
                    {str: "1/16", val: 0.0625},
                    {str: "1/8", val: 0.125},
                    {str: "3/16", val: 0.1875},
                    {str: "1/4", val: 0.25},
                    {str: "5/16", val: 0.3125},
                    {str: "3/8", val: 0.375},
                    {str: "7/16", val: 0.4375},
                    {str: "1/2", val: 0.5},
                    {str: "9/16", val: 0.5625},
                    {str: "5/8", val: 0.625},
                    {str: "11/16", val: 0.6875},
                    {str: "3/4", val: 0.75},
                    {str: "13/16", val: 0.8125},
                    {str: "7/8", val: 0.875},
                    {str: "15/16", val: 0.9375},
                ];
    var i;
    for (i = 0; i < fr_arr.length; i ++)
    {
        if (fr_arr[i].val == parseFloat(fr))
        {
            return fr_arr[i].str;
        }
    }

    if (i == fr_arr.length)
        return fr;
}

function checkGroup(obj)
{
    if (obj.mode == "h_brace")
        return true;

    if (obj.mode == "v_brace")
        return true;

    if (obj.mode == "boxColumn")
        return true;

    if (obj.mode == "builtUpCRColumn")
        return true;

    if (obj.mode == "builtUpCHColumn")
        return true;

    if (obj.mode == "postColumn" && obj.shapeType == "double")
        return true;
}

function isInLine(point1, point2, point3)
{
    if (point1.x == point2.x && point1.y == point2.y)
        return true;
    if (point1.x == point3.x && point1.y == point3.y)
        return true;

    if (point1.x == point2.x && point2.x == point3.x)
    {
        if ((point2.y - point1.y) * (point3.y - point1.y) <= 0)
            return true;
        else 
            return false;
    }

    else if (point1.y == point2.y && point2.y == point3.y)
    {
        if ((point2.x - point1.x) * (point3.x - point1.x) <= 0)
            return true;
        else 
            return false;
    }

    else 
    {
        if ((point2.x - point1.x) / (point2.y - point1.y) == (point3.x - point1.x) / (point3.y - point1.y))
            if ((point2.x - point1.x) * (point3.x - point1.x) <= 0)
                return true;
            else
                return false;
    }

    return false;
}

function getNearestColumn(pos_x, pos_y)
{
    var maxH = 99999;
    var maxV = 99999;

    var mode = "";
    var uid = "";
    var pos = {x: pos_x, y: pos_y};

    var rlt = {first: {}, second: {}};

    for ( i = 0; i < canvas._objects.length; i ++ )
    {
        if (checkColumn(canvas._objects[i]))
        {
            if (canvas._objects[i].x1 == canvas._objects[i].x2)
            {
                if (pos.x * scale > canvas._objects[i].x1 && (pos.x * scale - canvas._objects[i].x1) < maxH && (canvas._objects[i].y1 - pos.y * scale) * (canvas._objects[i].y2 - pos.y * scale) <= 0)
                {
                    maxH = pos.x * scale - canvas._objects[i].x1;
                    mode = canvas._objects[i].mode;
                    uid = canvas._objects[i].uid;
                }
            }
        }
    }
    if (maxH == 99999)
        return -1;

    rlt.first.mode = mode;
    rlt.first.uid = uid;

    maxH = 99999;
    mode = "";
    uid = "";

    for ( i = 0; i < canvas._objects.length; i ++ )
    {
        if (checkColumn(canvas._objects[i]))
        {
            if (canvas._objects[i].x1 == canvas._objects[i].x2)
            {
                if (pos.x * scale < canvas._objects[i].x1 && (canvas._objects[i].x1 - pos.x * scale) < maxH && (canvas._objects[i].y1 - pos.y * scale) * (canvas._objects[i].y2 - pos.y * scale) <= 0)
                {
                    maxH = canvas._objects[i].x1 - pos.x * scale;
                    mode = canvas._objects[i].mode;
                    uid = canvas._objects[i].uid;
                }
            }
        }
    }

    if (maxH == 99999)
        return -1;
    rlt.second.mode = mode;
    rlt.second.uid = uid;
    
    return rlt;
}

function reSelect() 
{
    sel_uid_buffer = [];
    var sel_obj = canvas.getActiveObject();
    if (!sel_obj)
        return;
    if (!checkGroup(sel_obj) && sel_obj._objects)
    {
        for (var i = 0; i < sel_obj._objects.length; i ++)
        {
            if (sel_obj._objects[i].mode)
                sel_uid_buffer.push(sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid);
        }
    }
    else
    {
        if (sel_obj.mode)
            sel_uid_buffer.push(sel_obj.mode + "_" + sel_obj.uid);
    }
}

function deselect()
{
    canvas.discardActiveObject();
    var tmp_buffer = [];
    canvas.getObjects().map(function(sel_obj) 
    {
        if (sel_obj.mode && sel_obj.uid != undefined)
        {
            for (var i = 0; i < sel_uid_buffer.length; i ++)
            {
                if (sel_uid_buffer[i] == sel_obj.mode + "_" + sel_obj.uid)
                {
                    tmp_buffer.push(sel_obj);
                }
            }
        }
    });
    if (tmp_buffer.length > 0)
    {
        group_sel = new fabric.ActiveSelection(tmp_buffer, {
            canvas: canvas
        });
        canvas.setActiveObject(group_sel);
        canvas.calcOffset();
    }
}

function checkBeamSlop(obj)
{
    if (obj.mode != undefined)
    {
        for (var i = 0; i < memberList.length; i ++)
        {
            if (memberList[i].uid == obj.mode + "_" + obj.uid)
            {
                if (memberList[i].memberProperties.startPoint.z == memberList[i].memberProperties.endPoint.z)
                    return false;
            }
        }
    }
    return true;
}

function checkBeamSkew(obj)
{
    if (obj.mode != undefined)
    {
        for (var i = 0; i < memberList.length; i ++)
        {
            if (memberList[i].uid == obj.mode + "_" + obj.uid)
            {
                if (memberList[i].memberProperties.startPoint.x == memberList[i].memberProperties.endPoint.x || memberList[i].memberProperties.startPoint.y == memberList[i].memberProperties.endPoint.y)
                    return false;
            }
        }
    }
    return true;
}

function checkNotChanged(val)
{
    if (val == "select" || val == "Select" || val == "")
        return true;
    return false;
}