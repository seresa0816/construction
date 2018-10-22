var ParallelTrussModel = function () {
    main = this;
    main.createData = function (data) {
        var returnData = Array();
        mainModel = new ParallelTrussMain().getData(data);
        returnData.push(mainModel);
        ////top Chord/////parallelTruss_sub_top
        subModel = new ParallelTrussSubTop(mainModel['uid'], 0).getData(data);
        returnData.push(subModel);
        ////bottom Chord/////
        subModel = new ParallelTrussSubBottom(mainModel['uid'], 0).getData(data);
        returnData.push(subModel);
        ////vertical/////
        if (data.inclineNum != 0) {
            for (i = 0; i < data.verticals.length; i++) {
                subModel = new ParallelTrussSubVertical(mainModel['uid'], i).getData(data);
                returnData.push(subModel);
            }
        } else {
            ////brace/////
            for (i = 0; i < data.member_truss.inclinedbracings.length; i++) {
                subModel = new ParallelTrussSubBrace(mainModel['uid'], i).getData(data);
                returnData.push(subModel);
            }
        }
        return returnData;
    };
};

var ParallelTrussMain = function () {
    main = this;

    main.model = {
        "Group": "truss",
        "type": "paraTruss",
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
                "Spacing_btw": data.member_truss.verticalSpacing,
                "Count": "4", // check
                "spacing": []           // check
            },
            "non_ConnEnd": "false", // check
            "non_ConnEnd_value": "", // check
            "ft": "", // check
            "in": "", // check
            "fr": "", // check
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

var ParallelTrussSubTop = function (parent_index, index) {
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
            "startPoint": _mp.startPoint,
            "endPoint": _mp.endPoint,
            "profile": "W6X25", // CHECK
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "Camber": "true", // CHECK
            "topChordCamber": "", // CHECK
            "dataSource": _mp.dataSource,
            "splice_count": data.splice_count,
            "splice_data": data.splice_data,
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

var ParallelTrussSubBottom = function (parent_index, index) {
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
            "startPoint": _mp.startPoint,
            "endPoint": _mp.endPoint,
            "profile": "W6X25", // CHECK
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "Camber": "true", // CHECK
            "bottomChordCamber": "", // CHECK
            "dataSource": _mp.dataSource,
            "splice_count": data.splice_count,
            "splice_data": data.splice_data,
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

var ParallelTrussSubVertical = function (parent_index, index) {
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
            "startPoint": _mp.startPoint,
            "endPoint": _mp.endPoint,
            "profile": "W6X25",
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "dataSource": _mp.dataSource,
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

var ParallelTrussSubBrace = function (parent_index, index) {
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
        main.model["pattern"] = main.member_truss.inclinedbracings[index].pattern;
        //
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
            "profile": "W6X25",
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "dataSource": _mp.dataSource,
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


