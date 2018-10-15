var GridBeamModel = function () {
    var mainModel;
    this.createData = function (data) {
        var returnData = Array();
        mainModel = new arr_data_class["gridBeam_main"]().getData(data);
        returnData.push(mainModel);
        return returnData;
    }
}

var GridBeamMain = function () {
    this.model = clone(arr_data_model["gridBeam_main"]);
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
            "startPoint": {
                "x": 240,
                "y": 0,
                "z": 0
            },
            "endPoint": {
                "x": 360,
                "y": 0,
                "z": 0
            },
            "profile": "W5X16",
            "depthvalue": "",
            "orientation": "0",
            "materialGrade": "A572-GR.42",
            "memberType": "Gravity",
            "dataSource": "",
            "alignment": "Straight",
            "tos": {
                "sign": "+",
                "ft": "0",
                "in": "0",
                "fr": "0"
            },
            "ffl": {
                "sign": "+",
                "in": "0",
                "fr": "0"
            },
            "tos_1": {
                "sign": "+",
                "ft": "0",
                "in": "0",
                "fr": "0"
            },
            "ffl_1": {
                "sign": "+",
                "in": "0",
                "fr": "0"
            },
            "skewLeftEnd_offset": {
                "along-x": {
                    "tos_sign": "+",
                    "tos_ft": "0",
                    "tos_in": "0",
                    "tos_fr": "0"
                },
                "along-y": {
                    "tos_sign": "+",
                    "tos_ft": "0",
                    "tos_in": "0",
                    "tos_fr": "0"
                }
            },
            "skewRightEnd_offset": {
                "along-x": {
                    "tos_sign": "+",
                    "tos_ft": "0",
                    "tos_in": "0",
                    "tos_fr": "0"
                },
                "along-y": {
                    "tos_sign": "+",
                    "tos_ft": "0",
                    "tos_in": "0",
                    "tos_fr": "0"
                }
            },
            "splice_count": "1",
            "splice_data": [{
                    "ft": "10",
                    "in": "0",
                    "fr": "0",
                    "profile": "W5X19"
                }],
            "camberReq": "off",
            "camber_in": "",
            "StudReq": "off",
            "StudDia_in": "",
            "StudLength_in": "",
            "StudCount": "",
            "StiffReq": "off",
            "stiffPlGrade": "A36",
            "stiffPlThick_in": "",
            "stiffPlCount": "",
            "stiffW_type": "",
            "stiffW_size": "",
            "frameNo": "",
            "frameCMethod": "",
            "referenceDrawing": ""
        }
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
            "CMark_LHS": null,
            "CMark_RHS": null,
            "CType_LHS": null,
            "CType_RHS": null,
            "Support_LHS": null,
            "Support_RHS": null,
            "Supported_LHS": null,
            "Supported_RHS": null,
            "splice_CMark": null,
            "shearLoad_LHS": "",
            "shearLoad_RHS": "",
            "axialLoad_LHS": "",
            "axialLoad_RHS": "",
            "mommentLoad_LHS": "",
            "mommentLoad_RHS": ""
        };
        this.model["finishProperties"] = cp;
    }
}

arr_data_class["gridBeam"] = GridBeamModel;
arr_data_class["gridBeam_main"] = GridBeamMain;

arr_data_model["gridBeam_main"] = {
    "Group": "Beam",
    "type": "gridBeam",
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