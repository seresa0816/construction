var CruciColumnModel = function () {
    var mainModel;
    this.createData = function (data) {
        var returnData = Array();
        mainModel = new arr_data_class["cruciColumn_main"]().getData(data);
        returnData.push(mainModel);
        return returnData;
    }
}

var CruciColumnMain = function () {
    this.model = clone(arr_data_model["cruciColumn_main"]);
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
            "wt_profile": data.wt_profile,
            "wt_grade": data.wt_grade,
            "wt_count": data.wt_count,
            "wt_length_ft": data.wt_length_ft,
            "wt_length_in": data.wt_length_in,
            "wt_length_fr": data.wt_length_fr,
            "w_type": data.weld_type,
            "w_size": data.weld_size,
            "splice_data": data.splice_data, // check 
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
            "sPlCMark": _cp.splice_plateConnMark,
            "s_shearLoad": _cp.splice_shearLoad,
            "s_axialLoad": _cp.splice_axialLoad,
            "s_momentLoad": _cp.splice_momentLoad,
            "cap_check": _cp.cap_check,
            "cap_PlCMark": _cp.cap_plateConnMark,
            "cap_shearLoad": _cp.cap_shearLoad,
            "cap_axialLoad": _cp.cap_axialLoad,
            "cap_momentLoad": _cp.cap_momentLoad
        };
        this.model["connectionProperties"] = cp;
    }
}

arr_data_class["cruciColumn"] = CruciColumnModel;
arr_data_class["cruciColumn_main"] = CruciColumnMain;


arr_data_model["cruciColumn_main"] = {
    "Group": "Beam",
    "type": "builtUpCRColumn",
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