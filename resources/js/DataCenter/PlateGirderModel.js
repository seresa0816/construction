/* global arr_data_class, arr_data_model, dataModel */

var PlateGirderModel = function () {
    var mainModel;
    this.createData = function (data) {
        var returnData = Array();
        mainModel = new arr_data_class["plateGirder_main"]().getData(data);
        returnData.push(mainModel);
        return returnData;
    };
};

var PlateGirderMain = function () {
    this.model = clone(arr_data_model["plateGirder_main"]);
    this.getData = function (data) {
        console.log(data);
        dataModel.uid++;
        this.model["uid"] = dataModel.uid;
        this.setMemberProperties(data);
        this.setFinishProperties(data);
        this.setConnectionProperties(data);
        return this.model;
    };

    this.setMemberProperties = function (data) {

        _mp = data.memberProperties;
        mp = {
            "startPoint": _mp.startPoint,
            "endPoint": _mp.endPoint,
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "memberType": _mp.memberType,
            "dataSource": _mp.dataSource,
            "profile": {
                "topFlThick_in": data.topFlangeThick_in,
                "topFlThick_fr": data.topFlangeThick_fr,
                "topFlWidth_ft": data.topFlangeWidth_fr,
                "topFlWidth_in": data.topFlangeWidth_in,
                "topFlWidth_ft": data.topFlangeWidth_ft,
                "botFlThick_in": data.bottomFlangeThick_in,
                "botFlThick_fr": data.bottomFlangeThick_fr,
                "botFlWidth_ft": data.bottomFlangeWidth_ft,
                "botFlWidth_in": data.bottomFlangeWidth_in,
                "botFlWidth_fr": data.bottomFlangeWidth_fr,
                "webPlThick_in": data.webPlateThick_in,
                "webPlThick_fr": data.webPlateThick_fr,
                "webPlWidth_ft": data.webPlateThick_ft,
                "webPlWidth_in": data.webPlateWidth_in,
                "webPlWidth_fr": data.webPlateWidth_fr,
            },
            "topFl_w_type": "Fillet", // check
            "topFl_w_size": "3/16", // check
            "botFl_w_type": "Fillet", // check
            "botFl_w_size": "1/8", // check
            "splice_count": "1", // check
            "splice_data": [{// check
                    "sign": "", // check
                    "SPosition1_ft": "45", // check
                    "SPosition1_in": "0", // check
                    "SPosition1_fr": "0", // check
                    "topFlThick_in": "3", // check
                    "topFlThick_fr": "0", // check
                    "topFlWidth_ft": "5", // check
                    "topFlWidth_in": "0", // check
                    "topFlWidth_fr": "0", // check
                    "botFlThick_in": "3", // check
                    "botFlThick_fr": "0", // check
                    "botFlWidth_ft": "5", // check
                    "botFlWidth_in": "0", // check
                    "botFlWidth_fr": "0", // check
                    "webPlThick_in": "1", // check
                    "webPlThick_fr": "0", // check
                    "webPlWidth_ft": "2", // check
                    "webPlWidth_in": "0", // check
                    "webPlWidth_fr": "0"    // check
                }],

            "alignment": data.alignment,
            "tos": {
                "sign": data.tos_sign,
                "ft": data.tos_ft,
                "in": data.tos_in,
                "fr": data.tos_fr
            }, "dataSource": _mp.dataSource,
            "ffl": {
                "sign": data.ffl_sign, // checkd
                "ft": data.ffl_ft, // check
                "in": data.ffl_in, // check
                "fr": data.ffl_fr //check
            },
            "tos_1": {
                "sign": data.tos_sign1,
                "ft": data.tos_ft1,
                "in": data.tos_in1,
                "fr": data.tos_fr1
            },
            "ffl_1": {
                "sign": data.tos_sign2, //check
                "ft": data.tos_ft2, //check
                "in": data.tos_in2, // check
                "fr": data.tos_fr2 //check
            },
            "skewLeftEnd_offset": {
                "along-x": {
                    "tos_sign": "+", // check
                    "tos_ft": "0", // check
                    "tos_in": "0", // check
                    "tos_fr": "0"    // check
                },
                "along-y": {
                    "tos_sign": "+", // check
                    "tos_ft": "0", // check
                    "tos_in": "0", // check
                    "tos_fr": "0"     // check
                }
            },
            "skewRightEnd_offset": {
                "along-x": {
                    "tos_sign": "+", // check
                    "tos_ft": "0", // check
                    "tos_in": "0", // check
                    "tos_fr": "0"    // check
                },
                "along-y": {
                    "tos_sign": "+", // check
                    "tos_ft": "0", // check
                    "tos_in": "0", // check
                    "tos_fr": "0"    // check
                }
            },

            "camberReq": data.camberReq,
            "camber_in": data.camber_in,
            "StudReq": data.isshearStudRequired,
            "StudDia_in": data.shearStudDia_in,
            "StudLength_in": data.shearStudLength_in,
            "StudCount": data.shearStudCount,
            "StiffReq": data.isStiffenerRequired,
            "stiffPlGrade": data.stiffPlateGrade,
            "stiffPlThick_in": data.stiffPlateThick_in,
            "stiffPlCount": data.stiffPlateCount,
            "stiffW_type": data.stiffWeldSize,
            "stiffW_size": data.stiffWeldType,
            "frameNo": data.frameNO,
            "frameCMethod": data.frameCMethod,
            "referenceDrawing": _mp.referenceDrawing
        };
        this.model["memberProperties"] = mp;
    };
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
            "ZincThick": _fp.galvZincCoatThickness, // check
            "fProofType": _fp.fireProofType,
            "fRating": _fp.fireRating,
            "aessCat": _fp.aessCat
        };
        this.model["finishProperties"] = fp;
    };
    this.setConnectionProperties = function (data) {
        _cp = data.connectionProperties;
        cp = {
            "CMark_LHS": _cp.connMark_LHS,
            "CMark_RHS": _cp.connMark_RHS,
            "CType_LHS": _cp.connType_LHS,
            "CType_RHS": _cp.connType_RHS,
            "Support_LHS": _cp.connSupportMethod_LHS,
            "Support_RHS": _cp.connSupportMethod_RHS,
            "Supported_LHS": _cp.connSupportedMethod_LHS,
            "Supported_RHS": _cp.connSupportedMethod_RHS,
            "splice_CMark": _cp.connMark_Splice,
            "shearLoad_LHS": _cp.shearLoad_LHS,
            "shearLoad_RHS": _cp.shearLoad_RHS,
            "axialLoad_LHS": _cp.axialLoad_LHS,
            "axialLoad_RHS": _cp.axialLoad_RHS,
            "mommentLoad_LHS": _cp.mommentLoad_LHS,
            "mommentLoad_RHS": _cp.mommentLoad_RHS
        };
        this.model["connectionProperties"] = cp;
    };
};

arr_data_class["plateGirder"] = PlateGirderModel;
arr_data_class["plateGirder_main"] = PlateGirderMain;
arr_data_model["plateGirder_main"] = {
    "Group": "Beam",
    "type": "pgirder",
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
};