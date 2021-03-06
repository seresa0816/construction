var IColumnModel = function () {
    main = this;
    main.createData = function (data) {
        var returnData = Array();
        mainModel = new IColumnMain().getData(data);
        returnData.push(mainModel);
        return returnData;
    }
}

var IColumnMain = function () {
    main = this;

    main.model = {
        "Group": "Beam",
        "type": "builtUpIColumn",
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
    }

    main.setMemberProperties = function (data) {

        _mp = data.memberProperties;

        splice_data = new Array();
        if (data.splice_count) {
            data.splice_data.forEach(element => {
                splice_data.push({
                    "sign": element.sign,
                    "El_ft": element.elevation_ftelevation_ft,
                    "El_in": element.elevation_in,
                    "El_fr": element.elevation_fr,
                    "topthick_in": element.topthick_in,
                    "topthick_fr": element.topthick_fr,
                    "topwidth_in": element.topwidth_in,
                    "topwidth_fr": element.topwidth_ft,
                    "botthick_in": element.botthick_in,
                    "botthick_fr": element.botthick_fr,
                    "botwidth_ft": element.botwidth_ft,
                    "botwidth_in": element.botwidth_in,
                    "botwidth_fr": element.botwidth_fr,
                    "webthick_in": element.webthick_in,
                    "webthick_fr": element.webthick_fr,
                    "webwidth_ft": element.webwidth_ft,
                    "webwidth_in": element.webwidth_in,
                    "webwidth_fr": element.webwidth_fr
                });
            });
        }

        mp = {
            "startPoint": _mp.startPoint,
            "endPoint": _mp.endPoint,
            "orientation": _mp.orientation,
            "materialGrade": _mp.materialGrade,
            "memberType": _mp.memberType,
            "dataSource": _mp.dataSource,
            "profile": {
                "topthick_in": data.topthick_in,
                "topthick_fr": data.topthick_fr,
                "topwidth_ft": data.topwidth_ft,
                "topwidth_in": data.topwidth_in,
                "topwidth_fr": data.topwidth_fr,
                "botthick_in": data.botthick_in,
                "botthick_fr": data.botthick_fr,
                "botwidth_ft": data.botwidth_ft,
                "botwidth_in": data.botwidth_in,
                "botwidth_fr": data.botwidth_fr,
                "webthick_in": data.webthick_in,
                "webthick_fr": data.webthick_fr,
                "webwidth_ft": data.webwidth_ft,
                "webwidth_in": data.webwidth_in,
                "webwidth_fr": data.webwidth_fr,
            },
            "top_w_type": data.weld_toptype,
            "top_w_topsize": data.weld_topsize,
            "bot_w_type": data.weld_bottype,
            "bot_w_size": data.weld_botsize,
            "elevation": {
                "baseEl_sign": data.baseElevation_sign,
                "baseEl_ft": data.baseElevation_ft,
                "baseEl_in": data.baseElevation_in,
                "baseEl_fr": data.baseElevation_fr,
                "topEl_sign": data.topElevation_sign,
                "topEl_ft": data.topElevation_ft,
                "topEl_in": data.topElevation_in,
                "topEl_fr": data.topElevation_fr,
            },
            "splice_count": data.splice_count,
            "splice_data": splice_data, // check 
            "referenceDrawing": _mp.referenceDrawing // check 
        };
        main.model["memberProperties"] = mp;
    }
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
            "ZincThick": null,
            "fProofType": _fp.fireProofType,
            "fRating": _fp.fireRating,
            "aessCat": _fp.aessCat,
        };
        main.model["finishProperties"] = fp;
    }
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
    }
}
