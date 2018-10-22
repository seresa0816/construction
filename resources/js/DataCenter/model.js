var arr_data = new Array();

var arr_data_model = new Array();
var arr_data_class = new Array();


var dataModel = function () {
    var main = this;
    main.uid = getJsonUid();
    main.insertData = function (data) {
        try {
            var data_mode = (data.mode) ? data.mode : 'blank';
            var data_type = (data.type) ? data.type : 'blank';
            var modelName = modelNameMap[data_mode][data_type];
        } catch (ex) {

        }
        console.trace();
        console.log("mode: '" + data_mode + "' type: '" + data_type + "'");

        if (modelName) {
            new_data = new arr_data_class[modelName]().createData(data);
            arr_data = arr_data.concat(new_data);
            data.json_uid = main.uid;
            setJsonUid(main.uid);
        }
        memberlist.push(data);
    };
}();

modelNameMap['blank']['blank'] = "";

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
        download("JsonData_step_" + dataModel.uid + ".txt", JSON.stringify(arr_data));
        return false;
    });
});