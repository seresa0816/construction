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
        main.model["tmpBeam_uid"] = data.tmpBeam_json_uid; // check
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
            "material": _mp.material,
            "angle": {
                "profile": data.angleprofile
            },
            "plate": {
                "PlThick_in": data.plateThick_in,
                "ver_LegLength_in": data.verticalLegLength_in,
                "ver_LegLength_fr": data.verticalLegLength_fr,
                "EOS_ft": data.EOS_ft,
                "EOS_in": data.EOS_in,
                "EOS_fr": data.EOS_fr
            },
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "dataSource": _mp.dataSource,
            "pourposition": data.pourposition,
            "position_ft": data.position_ft,
            "position_in": data.position_in,
            "position_fr": data.position_fr,
            "length_ft": data.length_ft,
            "length_in": data.length_in,
            "length_fr": data.length_fr,
            "StudReq": data.isShearStudAttached, // check
            "StudDia_in": data.shearStudDia_in,
            "StudLength_in": data.shearStudLength_in,
            "StudCount": data.shearStudCount,
            "OL_Length_in": data.overLapLength_in,
            "beamCType": data.beamConnectionType,
            "weld": {
                "w_type": data.weldType,
                "w_size": data.weldSize,
                "w_Length_ft": data.weldLength_ft,
                "w_Length_in": data.weldLength_in,
                "w_Length_fr": data.weldLength_fr,
                "pitch_ft": data.pitch_ft,
                "pitch_in": data.pitch_in,
                "pitch_fr": data.pitch_fr
            },
            "bolt": {
                "Dia_in": data.boltDia_in,
                "Grade": data.boltGrade,
                "Row": data.boltRow,
                "Spacing_ft": data.boltSpacing_ft,
                "Spacing_in": data.boltSpacing_in,
                "Spacing_fr": data.boltSpacing_fr
            },
            "referenceDrawing": _mp.referenceDrawing,
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
            "surType": _fp.paint,
            "paintName": _fp.paintName,
            "paintCoats": _fp.paintCoats,
            "ZincThick": "",    // check
            "fProofType": _fp.fireProofType,
            "fRating": "", // check
            "aessCat": _fp.aessCat
        };
        main.model["finishProperties"] = fp;
    };
    main.setConnectionProperties = function (data) {
        _cp = data.connectionProperties;
        cp = {
        };
        main.model["connectionProperties"] = cp;
    };
};