var V_braceModel = function () {
    main.createData = function (data) {
        var returnData = Array();
        mainModel = new V_braceMain().getData(data);
        returnData.push(mainModel);
        for (i = 0; i < data.shapePoint.length; i++) {
            subModel = new V_braceSub(mainModel['uid'], i).getData(data);
            returnData.push(subModel);
        }

        return returnData;
    };
};

var V_braceMain = function () {
    main.model = {
        "Group": "Brace",
        "type": "v_brace",
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
            "profile": data.memberProperties.profile,
            "orientation": data.memberProperties.orientation,
            "materialGrade": data.memberProperties.materialGrade,
            "dataSource": data.memberProperties.dataSource,
            "referenceDrawing": data.memberProperties.referenceDrawing,
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
            "Type": "Connections Given",
            "ConnGiven": [{
                "CMark": null,
                "brace_CMethod": null,
                "G_Beam_CType": null,
                "G_Beam_CMethod": null
            }, {
                "CMark": null,
                "brace_CMethod": null,
                "G_Beam_CType": null,
                "G_Beam_CMethod": null
            }, {
                "CMark": null,
                "brace_CMethod": null,
                "G_Beam_CType": null,
                "G_Beam_CMethod": null
            }, {
                "CMark": null,
                "brace_CMethod": null,
                "G_Beam_CType": null,
                "G_Beam_CMethod": null
            }, {
                "CMark": null,
                "brace_CMethod": null,
                "G_Beam_CType": null,
                "G_Beam_CMethod": null
            }],
            "ConnDesign": []
        };
        main.model["connectionProperties"] = cp;
    };
};

var V_braceSub = function (parent_index, index) {
    main.index = index;
    main.model = {
        "type": "v_brace",
        "parent_member_id": parent_index,
        "uid": increaseJsonUid(),
        "braceShape": "vxs"
    };
    main.getData = function (data) {
        //
        main.model["braceShape"] = data.braceShape;
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
            "profile": _mp.profile,
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
            "Type": "Connections Given",
            "CMark_LHS": null, //check
            "CMark_RHS": null, //check
            "CType_LHS": null, //check
            "CType_RHS": null, //check
            "CMethod_LHS": null, //check
            "CMethod_RHS": null, //check
            "axialLoad": ""           //check
        };
        main.model["connectionProperties"] = cp;
    };
};