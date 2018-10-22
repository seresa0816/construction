var PitchTrussModel = function () {
    main = this;
    main.createData = function (data) {
        var returnData = Array();
        mainModel = new PitchTrussMain().getData(data);
        returnData.push(mainModel);
        ////top Chord/////pitchTruss_sub_top
        subModel = new PitchTrussSubTop(mainModel['uid'], 0).getData(data);
        returnData.push(subModel);
        ////bottom Chord/////
        subModel = new PitchTrussSubBottom(mainModel['uid'], 0).getData(data);
        returnData.push(subModel);
        ////vertical/////
        if (data.inclineNum != 0) {
            for (i = 0; i < data.verticals.length; i++) {
                subModel = new PitchTrussSubVertical(mainModel['uid'], i).getData(data);
                returnData.push(subModel);
            }
        } else {
            ////brace/////
            for (i = 0; i < data.inclinedbracings.length; i++) {
                subModel = new PitchTrussSubBrace(mainModel['uid'], i).getData(data);
                returnData.push(subModel);
            }
        }
        return returnData;
    };
};

var PitchTrussMain = function () {
    main = this;

    main.model = {
        "Group": "truss",
        "type": "Pitched Truss",
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

        vartical_space_data = new Array();

        if (data.verticals) {
            data.verticals.forEach(element => {
                vartical_space_data.push({
                    "spacing_ft": element.spacing_ft,
                    "spacing_in": element.spacing_in,
                    "spacing_fr": element.spacing_fr,
                });
            });
        }

        mp = {
            "Ridge": {
                "position": data.ridge_pos,
                "position_ft": data.ridge_pos_ft,
                "position_in": data.ridge_pos_in,
                "position_fr": data.ridge_pos_fr
            },
            "height_left_ft": data.height_left_ft,
            "height_left_in": data.height_left_in,
            "height_left_fr": data.height_left_fr,
            "height_right_ft": data.height_right_ft,
            "height_right_in": data.height_right_in,
            "height_right_fr": data.height_right_fr,
            "height_ridge_ft": data.height_ridge_ft,
            "height_ridge_in": data.height_ridge_in,
            "height_ridge_fr": data.height_ridge_fr,
            "length_ft": data.length_ft,
            "length_in": data.length_in,
            "length_fr": data.length_fr,
            "dataSource": data.memberProperties.dataSource,
            "slopingChord": data.slopingChord,
            "verticals": {
                "Spacing_btw": data.verticalSpacing,
                "Count": data.verticalCount,
                "spacing": vartical_space_data           // check
            },
            "non_ConnEnd": "false", // check
            "non_ConnEnd_value": "", // check
            "ft": data.connected_ft,
            "in": data.connected_in,
            "fr": data.connected_fr,
            "referenceDrawing": _mp.referenceDrawing           // check
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
            "ZincThick": _fp.galvZincCoatThickness,
            "fProofType": _fp.fireProofType,
            "fRating": _fp.fireRating,
            "aessCat": _fp.aessCat
        };
        main.model["finishProperties"] = fp;
    };
    main.setConnectionProperties = function (data) {
        _cp = data.connectionProperties;
        cp = {
            "Type": "Connections Given", //check
            "ConnGiven": [{
                "CMark_1": null, //check
                "CType_1": null, //check
                "CMethod_1": null, //check
                "CMark_2": null, //check
                "CType_2": null, //check
                "CMethod_2": null, //check
                "CMark_3": null, //check
                "CType_3": null, //check
                "CMethod_3": null //check
            }],
            "ConnDesign": [] //check
        };
        main.model["connectionProperties"] = cp;
    };
};

var PitchTrussSubTop = function (parent_index, index) {
    main = this;
    main.index = index;
    main.model = {
        "type": "topchord",
        "parent_member_id": parent_index,
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
            "startPoint": data.topchord.startPoint,
            "middlePoint": data.topchord.middlePoint,
            "endPoint": data.topchord.endPoint,
            "profile": data.topchord.profile,
            "orientation": data.topchord.orientation,
            "materialGrade": data.topchord.materialGrade,
            "dataSource": "", // check 
            "splice_count": data.topchord.splice_count,
            "splice_data": data.topchord.splice_data,
            "referenceDrawing": "", // check
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
            "ZincThick": _fp.galvZincCoatThickness,
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
            "CMethod_LHS": null, // CHECK
            "CMethod_RHS": null, // CHECK
            "shearLoad_LHS": _cp.shearLoad_LHS,
            "shearLoad_RHS": _cp.shearLoad_RHS,
            "axialLoad_LHS": _cp.axialLoad_LHS,
            "axialLoad_RHS": _cp.axialLoad_RHS,
            "sPl_CMark": _cp.connMark_Splice,
            "s_shearLoad": _cp.splice_shearLoad

        };
        main.model["connectionProperties"] = cp;
    };
};

var PitchTrussSubBottom = function (parent_index, index) {
    main = this;

    main.index = index;
    main.model = {
        "type": "bottomchord",
        "parent_member_id": parent_index,
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
            "startPoint": data.bottomchord.startPoint,
            "endPoint": data.bottomchord.endPoint,
            "profile": data.bottomchord.profile,
            "orientation": data.bottomchord.orientation,
            "materialGrade": data.bottomchord.materialGrade,
            "dataSource": "", // check
            "splice_count": "0", // check
            "splice_data": "", // check
            "referenceDrawing": "" // check
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
            "ZincThick": _fp.galvZincCoatThickness,
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
            "CMethod_LHS": null, // CHECK
            "CMethod_RHS": null, // CHECK
            "shearLoad_LHS": _cp.shearLoad_LHS,
            "shearLoad_RHS": _cp.shearLoad_RHS,
            "axialLoad_LHS": _cp.axialLoad_LHS,
            "axialLoad_RHS": _cp.axialLoad_RHS,
            "sPl_CMark": _cp.connMark_Splice,
            "s_shearLoad": _cp.splice_shearLoad
        };
        main.model["connectionProperties"] = cp;
    };
};

var PitchTrussSubVertical = function (parent_index, index) {
    main = this;

    main.index = index;
    main.model = {
        "type": "vertical",
        "parent_member_id": parent_index,
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
            "startPoint": data.verticals[main.index].startPoint,
            "endPoint": data.verticals[main.index].endPoint,
            "profile": data.verticals[main.index].profile,
            "orientation": data.verticals[main.index].orientation,
            "materialGrade": data.verticals[main.index].materialGrade,
            "dataSource": "", // check
            "referenceDrawing": "" // check
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
            "ZincThick": _fp.galvZincCoatThickness,
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
            "CMethod_LHS": null, // CHECK
            "CMethod_RHS": null, // CHECK
            "axialLoad": "" // CHECK
        };
        main.model["connectionProperties"] = cp;
    };
};

var PitchTrussSubBrace = function (parent_index, index) {
    main = this;

    main.index = index;
    main.model = {
        "type": "brace",
        "parent_member_id": parent_index,
        "subtype": "brace" + index,
        "uid": increaseJsonUid(),
        "pattern": "tvvs"
    };
    main.getData = function (data) {
        //
        main.model["pattern"] = data.inclinedbracings[main.index].pattern;
        //
        main.setMemberProperties(data);
        main.setFinishProperties(data);
        main.setConnectionProperties(data);
        return main.model;
    };

    main.setMemberProperties = function (data) {
        _mp = data.memberProperties;
        mp = {
            "startPoint": data.inclinedbracings[main.index].startPoint,
            "endPoint": data.inclinedbracings[main.index].endPoint,
            "profile": data.inclinedbracings[main.index].profile,
            "orientation": data.inclinedbracings[main.index].orientation,
            "materialGrade": data.inclinedbracings[main.index].materialGrade,
            "dataSource": "", // check
            "referenceDrawing": "" // check
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
            "ZincThick": _fp.galvZincCoatThickness,
            "fProofType": _fp.fireProofType,
            "fRating": _fp.fireRating,
            "aessCat": _fp.aessCat
        };
        main.model["finishProperties"] = fp;
    };
    main.setConnectionProperties = function (data) {
        _cp = data.connectionProperties;
        cp = {
            "Type": "Connections Given", // CHECK
            "CMark_LHS": _cp.connMark_LHS,
            "CMark_RHS": _cp.connMark_RHS,
            "CType_LHS": _cp.connType_LHS,
            "CType_RHS": _cp.connType_RHS,
            "CMethod_LHS": null, // CHECK
            "CMethod_RHS": null, // CHECK
            "axialLoad": "" // CHECK
        };
        main.model["connectionProperties"] = cp;
    };
};