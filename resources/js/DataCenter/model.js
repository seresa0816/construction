
var arr_data_model = new Array();
var arr_data_class = new Array();
var arr_data = new Array();

var DataModel = function () {
    this.uid = 0;
//    var modelName = "";
//    var model = new Object();

    this.insertData = function (modelName, data) {
        new_data = new arr_data_class[modelName]().createData(data)
        arr_data = arr_data.concat(new_data);
        console.log(JSON.stringify(arr_data));

//        alart(JSON.stringify(arr_data));
    }
//
//    function setMemberProperties(modelName, data) {
//        arr_data_class[modelName].setMemberProperties(data);
//    }
//
//    function setFinishProperties(modelName, data) {
//        arr_data_class[modelName].setFinishProperties(data);
//    }
//
//    function setConnectionProperties(modelName, data) {
//        arr_data_class[modelName].setConnectionProperties(data);
//    }
//    
//    function convertJson(modelName){
//        
//    }
//    
//    function getData(){
//        return arr_data_class[modelName].getData();
//    }
}
dataModel = new DataModel()

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