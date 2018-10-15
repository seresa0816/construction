var PostColumnModel = function () {
    var mainModel;
    this.createData = function (data) {
        var returnData = Array();
        mainModel = new arr_data_class["postColumn_main"]().getData(data);
        returnData.push(mainModel);
        return returnData;
    }
}

var PostColumnMain = function () {
    this.model = clone(arr_data_model["postColumn_main"]);
    this.getData = function (data) {
        dataModel.uid++;
        this.model["uid"] = dataModel.uid;
        this.setMemberProperties(data);
        this.setFinishProperties(data);
        this.setConnectionProperties(data);
        return this.model;
    }

    this.setMemberProperties = function (data) {

        _mp = data.memberProperties;
        mp = {
            "startPoint": _mp.startPoint,
            "endPoint": _mp.endPoint,
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "memberType": _mp.memberType,
            "dataSource": _mp.dataSource,
            "profile": _mp.profile,
            "elevation": {
                "baseEl_sign": data.baseElevation_sign,
                "baseEl_ft": data.baseElevation_ft,
                "baseEl_in": data.baseElevation_in,
                "baseEl_fr": data.baseElevation_fr,
                "topEl_sign": data.topElevation_sign,
                "topEl_ft": data.topElevation_ft,
                "topEl_in": data.topElevation_in,
                "topEl_fr": data.topElevation_fr,
            },
            "location": {
                "loc_X": data.loc_X,
                "loc_Y": data.loc_Y,
                "xDir_sign": data.xDirection_sign,
                "xDir_ft": data.xDirection_ft,
                "xDir_in": data.xDirection_in,
                "xDir_fr": data.xDirection_fr,
                "yDir_sign": data.yDirection_sign,
                "yDir_ft": data.yDirection_ft,
                "yDir_in": data.yDirection_in,
                "yDir_fr": data.yDirection_fr,
            },
            "referenceDrawing": _mp.referenceDrawing // check 
        };
        this.model["memberProperties"] = mp;
    }
    this.setFinishProperties = function (data) {

        _fp = data.finishProperties;
        fp = {
            "surPrep": _fp.surfacePreparation,
            "primCheck": _fp.primerCheck,
            "primName": _fp.primerName,
            "primCoats": _fp.primerCoats,
            "surType": _fp.paintType,
            "paintName": _fp.paintName,
            "paintCoats": _fp.paintCoats,
            "ZincThick": null,
            "fProofType": _fp.fireProofType,
            "fRating": _fp.fireRating,
            "aessCat": _fp.aessCat,
        };
        this.model["finishProperties"] = fp;
    }
    this.setConnectionProperties = function (data) {
        _cp = data.connectionProperties;
        cp = {
            "bPlCMark": _cp.basePlateConnMark,
            "cap_check": _cp.cap_check,
            "cap_PlCMark": _cp.cap_plateConnMark,
            "cap_shearLoad": _cp.cap_shearLoad,
            "cap_axialLoad": _cp.cap_axialLoad,
            "cap_momentLoad": _cp.cap_momentLoad
        };
        this.model["connectionProperties"] = cp;
    }
}

arr_data_class["postColumn"] = PostColumnModel;
arr_data_class["postColumn_main"] = PostColumnMain;


arr_data_model["postColumn_main"] = {
    "Group": "Beam",
    "type": "post",
    "3rPartyID": {
        "Tekla": "",
        "Revit": "",
        "SDS/2": ""
    },
    "uid": "",
    "memberProperties": {
    },
    "finishProperties": {
    },
    "connectionProperties": {
    }
}