var PourStopModel = function () {
    main = this;
    main.createData = function (data) {
        var returnData = Array();
        mainModel = new PourStopMain().getData(data);
        returnData.push(mainModel);
        return returnData;
    };
};

var PourStopMain = function () {
    main = this;

    main.model = {
        "Group": "Beam",
        "Type": "pourStop",
        "3rPartyID": {
            "Tekla": "",
            "Revit": "",
            "SDS/2": ""
        },
        "uid": increaseJsonUid(),
        "tmpBeam_uid": "",
    };

    main.getData = function (data) {
        //
        main.model["tmpBeam_uid"] = ""; // check
        //
        main.setMemberProperties(data);
        main.setFinishProperties(data);
        main.setConnectionProperties(data);
        return main.model;
    };

    main.setMemberProperties = function (data) {

        _mp = data.memberProperties;
        mp = {
            "startPoint": {
                "x": 72,
                "y": 144,
                "z": 0
            },
            "endPoint": {
                "x": 144,
                "y": 144,
                "z": 0
            },
            "material": "Bent Plate",
            "angle": {
                "profile": ""
            },
            "plate": {
                "PlThick_in": "7/16",
                "ver_LegLength_in": "0",
                "ver_LegLength_fr": "0",
                "EOS_ft": "3",
                "EOS_in": "0",
                "EOS_fr": "0"
            },
            "orientation": "left",
            "materialGrade": "A529-GR.55",
            "dataSource": "",
            "pourposition": "fulllength",
            "position_ft": "",
            "position_in": "0",
            "position_fr": "0",
            "length_ft": "",
            "length_in": "0",
            "length_fr": "0",
            "StudReq": "off",
            "StudDia_in": "",
            "StudLength_in": "",
            "StudCount": "",
            "OL_Length_in": "1 1/4",
            "beamCType": "Welded",
            "weld": {
                "w_type": "Stitch Weld",
                "w_size": "7/8",
                "w_Length_ft": "1",
                "w_Length_in": "0",
                "w_Length_fr": "0",
                "pitch_ft": "1",
                "pitch_in": "0",
                "pitch_fr": "0"
            },
            "bolt": {
                "Dia_in": "",
                "Grade": "",
                "Row": "",
                "Spacing_ft": "",
                "Spacing_in": "0",
                "Spacing_fr": "0"
            },
            "referenceDrawing": "",
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
            // "bPlCMark": _cp.basePlateConnMark,
            // "sPlCMark": _cp.splice_plateConnMark,
            // "s_shearLoad": _cp.splice_shearLoad,
            // "s_axialLoad": _cp.splice_axialLoad,
            // "s_momentLoad": _cp.splice_momentLoad,
            // "cap_check": _cp.cap_check,
            // "cap_PlCMark": _cp.cap_plateConnMark,
            // "cap_shearLoad": _cp.cap_shearLoad,
            // "cap_axialLoad": _cp.cap_axialLoad,
            // "cap_momentLoad": _cp.cap_momentLoad
        };
        main.model["connectionProperties"] = cp;
    };
};