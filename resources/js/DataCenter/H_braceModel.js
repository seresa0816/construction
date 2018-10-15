var H_braceModel = function () {
    this.createData = function (data) {
        var returnData = Array();
        mainModel = new arr_data_class["h_brace_main"]().getData(data);
        returnData.push(mainModel);
        for (i = 0; i < data.shapePoint.length; i++) {
            subModel = new arr_data_class["h_brace_sub"]().getData(data, mainModel['uid'], i);
            returnData.push(subModel);
        }

        return returnData;
    }
}

var H_braceMain = function () {
    this.model = clone(arr_data_model["h_brace_main"]);
    this.getData = function (data) {
        dataModel.uid++;
        this.model["uid"] = dataModel.uid;
        this.model["profile"] = data.memberProperties.profile;
        this.model["orientation"] = data.memberProperties.orientation;
        this.model["materialGrade"] = data.memberProperties.materialGrade;
        this.model["LocTOS_sign"] = data.Loc_sign;
        this.model["LocTOS_ft"] = data.Loc_ft;
        this.model["LocTOS_in"] = data.Loc_in;
        this.model["LocTOS_fr"] = data.Loc_fr;
        this.model["dataSource"] = data.memberProperties.dataSource;
        this.model["referenceDrawing"] = data.memberProperties.referenceDrawing;

//        this.setMemberProperties(data);
        this.setFinishProperties(data);
        this.setConnectionProperties(data);
        return this.model;
    }

    this.setMemberProperties = function (data) {
        _mp = data.memberProperties;
        mp = {
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
            "ZincThick": _fp.galvZincCoatThickness,
            "fProofType": _fp.fireProofType,
            "fRating": _fp.fireRating,
            "aessCat": _fp.aessCat
        };
        this.model["finishProperties"] = fp;
    }
    this.setConnectionProperties = function (data) {
        _cp = data.connectionProperties;
        cp = {
            "Type": "Connections Given", // check
            "ConnGiven": [{
                    "CMark": null, //check
                    "brace_CMethod": null, //check
                    "G_Beam_CType": null, //check
                    "G_Beam_CMethod": null           //check
                }, {
                    "CMark": null, //check
                    "brace_CMethod": null, //check
                    "G_Beam_CType": null, //check
                    "G_Beam_CMethod": null           //check
                }, {
                    "CMark": null, //check
                    "brace_CMethod": null, //check
                    "G_Beam_CType": null, //check
                    "G_Beam_CMethod": null           //check
                }, {
                    "CMark": null, //check
                    "brace_CMethod": null, //check
                    "G_Beam_CType": null, //check
                    "G_Beam_CMethod": null           //check
                }, {
                    "CMark": null, //check
                    "brace_CMethod": null, //check
                    "G_Beam_CType": null, //check
                    "G_Beam_CMethod": null           //check
                }],
            "ConnDesign": _cp.connectionDesign
        };
        this.model["connectionProperties"] = cp;
    }
}

var H_braceSub = function () {
    this.index = 0;
    this.model = clone(arr_data_model["h_brace_sub"]);
    this.getData = function (data, parent_index, index) {
        dataModel.uid++;
        this.model["uid"] = dataModel.uid;
        this.model["parent_member_id"] = parent_index;
        this.index = index;
        //
        this.model["braceShape"] = data.braceShape;
        //
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
            "profile": _mp.profile,
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "dataSource": _mp.dataSource,
            "referenceDrawing": _mp.referenceDrawing
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
            "ZincThick": _fp.galvZincCoatThickness,
            "fProofType": _fp.fireProofType,
            "fRating": _fp.fireRating,
            "aessCat": _fp.aessCat
        };
        this.model["finishProperties"] = fp;
    }
    this.setConnectionProperties = function (data) {
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
        this.model["connectionProperties"] = cp;
    }
}

arr_data_class["h_brace"] = H_braceModel;
arr_data_class["h_brace_main"] = H_braceMain;
arr_data_class["h_brace_sub"] = H_braceSub;
arr_data_model["h_brace_main"] = {
    "Group": "Brace",
    "type": "h_brace",
    "3rPartyID": {
        "Tekla": "",
        "Revit": "",
        "SDS/2": ""
    },
    "uid": "h1",
    "profile": "L2X2X3/16",
    "orientation": "",
    "materialGrade": "A572-GR.50",
    "LocTOS_sign": "",
    "LocTOS_ft": "3",
    "LocTOS_in": "0",
    "LocTOS_fr": "0",
    "dataSource": "2D Design Drawings",
    "referenceDrawing": "",
    "finishProperties": {

    },
    "connectionProperties": {

    }
};
arr_data_model["h_brace_sub"] = {
    "type": "h_brace",
    "parent_member_id": "h1",
    "uid": "01",
    "braceShape": "hxs",
    "memberProperties": {

    },
    "finishProperties": {

    },
    "connectionProperties": {

    }
};