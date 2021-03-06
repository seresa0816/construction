var InfillBeamModel = function () {
    main = this;
    main.createData = function (data) {
        var returnData = Array();
        mainModel = new InfillBeamMain().getData(data);
        returnData.push(mainModel);
        return returnData;
    };
};

var InfillBeamMain = function () {
    main = this;

    main.model = {
        "Group": "Beam",
        "type": "infilBeam",
        "3rPartyID": {
            "Tekla": "",
            "Revit": "",
            "SDS/2": ""
        },
        "uid": increaseJsonUid()
    };

    main.getData = function (data) {
        main.setMemberProperties(data);
        main.setFinishProperties(data);
        main.setConnectionProperties(data);
        return main.model;
    };

    main.setMemberProperties = function (data) {

        _mp = data.memberProperties;
        mp = {
            "startPoint": _mp.startPoint,
            "endPoint": _mp.endPoint,
            "profile": _mp.profile,
            //            "depthvalue": data.depthvalue,
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "memberType": _mp.memberType,
            "dataSource": _mp.dataSource,
            "alignment": data.alignment,
            "tos": {
                "sign": data.tos_sign,
                "ft": data.tos_ft,
                "in": data.tos_in,
                "fr": data.tos_fr
            },
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
            // "splice_count": data.splice_count,   // check
            // "splice_data": splice_data,          // check
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
        main.model["memberProperties"] = mp;
    };
    main.setFinishProperties = function (data) {

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
        main.model["finishProperties"] = fp;
    };
    main.setConnectionProperties = function (data) {
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
            "sPl_CMark": _cp.connMark_Splice,
            "shearLoad_LHS": _cp.shearLoad_LHS,
            "shearLoad_RHS": _cp.shearLoad_RHS,
            "axialLoad_LHS": _cp.axialLoad_LHS,
            "axialLoad_RHS": _cp.axialLoad_RHS,
            "mommentLoad_LHS": _cp.mommentLoad_LHS,
            "mommentLoad_RHS": _cp.mommentLoad_RHS
        };
        main.model["connectionProperties"] = cp;
    };
};