var ChannelColumnModel = function () {
    main = this;
    main.createData = function (data) {
        var returnData = Array();
        mainModel = new ChannelColumnMain().getData(data);
        returnData.push(mainModel);
        return returnData;
    }
}

var ChannelColumnMain = function () {
    main = this;

    main.model = {
        "Group": "Beam",
        "type": "builtUpCHColumn",
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
                    "El_ft": element.elevation_ft,
                    "El_in": element.elevation_in,
                    "El_fr": element.elevation_fr,
                    "profile": element.profile
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
            "profile": _mp.profile,
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
            "connect_channel": data.connect_channel,
            "spacing_channel": data.spacing_channel,
            "pl_grade": data.plategrade,
            "pl_thick": data.platethickness,
            "count": data.count,
            "pl_width_ft": data.platewidth_ft,
            "pl_width_in": data.platewidth_in,
            "pl_width_fr": data.platewidth_fr,
            "pl_length_ft": data.platelength_ft,
            "pl_length_in": data.platelength_in,
            "pl_length_fr": data.platelength_fr,
            "stiff_wtype": data.stiff_weldtype,
            "stiff_wsize": data.stiff_weldsize,
            "w_type": data.weld_type,
            "w_size": data.weld_size,
            "splice_count": data.splice_count, 
            "splice_data": splice_data, 
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