var arr_data = new Array();

var modelClassMap = {
    /** Column */
    "Column": RegularColumnModel,
    /* Column -> Built-Up Column */
    "boxColumn": BoxColumnModel,
    "builtUpIColumn": IColumnModel,
    "builtUpCRColumn": CruciColumnModel,
    "builtUpCHColumn": ChannelColumnModel,
    /* Column -> Post */
    "postColumn": PostColumnModel,

    /** Beam */
    "periBeam": PeriBeamModel,
    "Beam": GridBeamModel,
    "ibeam": InfillBeamModel,
    "cantBeam": CanteBeamModel,
    "pgirder": PlateGirderModel,

    /** H Braces */
    "h_brace": H_braceModel,
    /** V Braces */
    "v_brace": V_braceModel,

    /** Planar Truss */
    "paraTruss": ParallelTrussModel,
    "trapeTruss": TrapeTrussModel,
    "truss": PitchTrussModel,

    /** Pour Stop */
    "pourStop": PourStopModel // it's not implemented yet.
};

function DataModel() {
    var main = this;

    main.makeData = function (index) {
        data = memberList[index];
        try {
            var data_type = (data.type) ? data.type : 'blank';
            var modelClass = modelClassMap[data_type];
        } catch (ex) {

        }
        console.log("type: '" + data_type + "'");
        console.log("data: \n" + JSON.stringify(data, null, 4));

        if (modelClass) {
            new_data = new modelClass().createData(data);
            console.log("json_data: \n" + JSON.stringify(new_data, null, 4));
            arr_data = arr_data.concat(new_data);
            // set json_uid
            memberList[index].json_uid = new_data[0]["uid"];
        }
    }

    main.insertData = function (data) {
        memberList.push(data);
        main.makeData(memberList.length -1);
    };

    main.removeData = function (index, count) {
        var splicedData = memberList.splice(index, count);
        splicedData.forEach(element => {
            if (element.json_uid) {
                for (var i = arr_data.length - 1; i >= 0; i--) {
                    if (element.json_uid == arr_data[i]["uid"] || element.json_uid == arr_data[i]["parent_member_id"]) {
                        arr_data.splice(i, 1);
                    }
                }
            }
        });
    }

    main.updateData = function (index) {
        var json_uid = memberList[index].json_uid;
        if (json_uid){
            for (var i = arr_data.length - 1; i >= 0; i--) {
                if (json_uid == arr_data[i]["uid"] || json_uid == arr_data[i]["parent_member_id"]) {
                    arr_data.splice(i, 1);
                }
            }
        }
        main.makeData(index);
    }
}

var dataModel = new DataModel();

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

function increaseJsonUid() {
    json_uid = getJsonUid() + 1;
    setJsonUid(json_uid);
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