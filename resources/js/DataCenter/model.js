var arr_data = new Array();

var arr_data_model = new Array();
var arr_data_class = new Array();


function DataModel() {
    var main = this;
    main.uid = getJsonUid();
    main.insertData = function (data) {
        try {
            // var data_mode = (data.mode) ? data.mode : 'blank';
            var data_type = (data.type) ? data.type : 'blank';
            // var modelName = modelNameMap[data_mode][data_type];
            var modelName = modelNameMap[data_type];
        } catch (ex) {

        }
        // console.log("mode: '" + data_mode + "' type: '" + data_type + "'");
        console.log("type: '" + data_type + "'");
        console.log("data: \n" + JSON.stringify(data, null, 4));

        if (modelName) {
            new_data = new arr_data_class[modelName]().createData(data);
            console.log("json_data: \n" + JSON.stringify(new_data, null, 4));
            arr_data = arr_data.concat(new_data);
            data.json_uid = main.uid;
            setJsonUid(main.uid);
        }
        memberList.push(data);
    };
}

var dataModel = new DataModel();

modelNameMap = {
    /** Column */
    "Column": "regularColumn",
    /* Column -> Built-Up Column */
    "boxColumn": "boxColumn",
    "builtUpIColumn": "iColumn",
    "builtUpCRColumn": "cruciColumn",
    "builtUpCHColumn": "channelColumn",
    /* Column -> Post */
    "postColumn": "postColumn",

    /** Beam */
    "periBeam": "periBeam",
    "Beam": "gridBeam",
    "ibeam": "infillBeam",
    "cantBeam": "canteBeam",
    "pgirder": "plateGirder",

    /** H Braces */
    "h_brace": "h_brace",
    /** V Braces */
    "v_brace": "v_brace",

    /** Planar Truss */
    "paraTruss": "parallelTruss",
    "trapeTruss": "trapeTruss",
    "truss": "pitchTruss",

    /** Pour Stop */
    "pourStop": "pourStop" // it's not implemented yet.
};

// modelNameMap = {
//     "blank": {
//         "blank": "",
//         "Column": "regularColumn",
//         "boxColumn": "boxColumn",
//         "builtUpIColumn": "iColumn",
//         "builtUpCRColumn": "cruciColumn",
//         "builtUpCHColumn": "channelColumn",
//         "postColumn": "postColumn",
//         "Beam": "gridBeam",
//         "periBeam": "periBeam",

//         "paraTruss": "parallelTruss",
//         "trapeTruss": "trapeTruss",
//         "truss": "pitchTruss",

//         "pourStop": "pourStop" // it's not implemented yet.
//     },
//     "ibeam": {
//         "ibeam": "infillBeam",
//     },
//     "cantBeam": {
//         "cantBeam": "canteBeam",
//     },
//     "pgirder": {
//         "pgirder": "plateGirder"
//     },
//     "hxs": {
//         "h_brace": "h_brace"
//     },
//     "vvs": {
//         "v_brace": "v_brace"
//     }
// };

function getJsonUid() {
    var json_uid = localStorage.getItem("json_uid");
    if (json_uid) {
        try {
            return parseInt(json_uid);
        } catch (ex) {

        }
    }
    return 0;
}

function setJsonUid(json_uid) {
    localStorage.setItem("json_uid", json_uid);
}

function clone(obj) {
    if (obj === null || typeof (obj) !== 'object')
        return obj;

    var copy = obj.constructor();

    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }

    return copy;
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$(document).ready(function () {
    $("#showJsonFile").click(function () {
        download("JsonData_last_uid_" + dataModel.uid + ".txt", JSON.stringify(arr_data, null, 4));
        return false;
    });
});