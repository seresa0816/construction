var BoxColumnModel = function () {
    main = this;
    main.createData = function (data) {
        var returnData = Array();
        mainModel = new BoxColumnMain().getData(data);
        returnData.push(mainModel);
        return returnData;
    };
};

var BoxColumnMain = function () {
    main = this;

    main.model = {
        "Group": "Beam",
        "type": "boxColumn",
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
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "memberType": _mp.memberType,
            "dataSource": _mp.dataSource,
            "profile": {
                "depth_a_ft": data.depth_a_ft,
                "depth_a_in": data.depth_a_in,
                "depth_a_fr": data.depth_a_fr,
                "width_b_ft": data.width_b_ft,
                "width_b_in": data.width_b_in,
                "width_b_fr": data.width_b_fr,
                "thick_c_in": data.thick_c_in,
                "thick_c_fr": data.thick_c_fr,
                "thick_d_in": data.thick_d_in,
                "thick_d_fr": data.thick_d_fr,
            },
            "elevation": {
                "baseEl_sign": data.baseElevation_sign,
                "baseEl_ft": data.baseElevation_ft,
                "baseEl_in": data.baseElevation_in,
                "baseEl_fr": data.baseElevation_fr,
                "topEl_sign": data.topElevation_sign,
                "topEl_ft": data.topElevation_ft,
                "topEl_in": data.topElevation_in,
                "topEl_fr": data.topElevation_fr
            },
            "w_type": data.weld_type,
            "w_size": data.weld_size,
            "cjp_weld": data.cjp_weld,
            "length_in": "0", // check
            "length__fr": "0", // check 
            "splice_data": data.splice_data, // check 
            "referenceDrawing": _mp.referenceDrawing // check 
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
        main.model["connectionProperties"] = cp;
    };
};