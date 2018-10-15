
    var new_configure = {
        hbrace: {
            memberProperties: {profile: "hBraceProfile", materialGrade: "hBraceMaterialGrade", dataSource: "hBraceDataSource", referenceDrawing: "hBraceRefNum"},
            finishProperties: 
            {
                  surfacePreparation: "hbsurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "hbprimer1", 
                  primerCoats: "hbprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "surfaceprecb",
                  paintName: "hbpaint1", 
                  paintCoats: "hbpaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "hbgalvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "hbfireProofing2", 
                  fireRating: "hbfireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "hbaess1",
                  paintType: "rdhb"
            },
            connectionProperties: {connMark_LHS: "hBraceMark", axialLoad_LHS: "hBraceAxial"},
            Loc_sign: "hBraceLocationNegative", 
            Loc_ft: "hBraceLocation", 
            Loc_in: "hBraceLocation_in", 
            Loc_fr: "hBraceLocation_fr", 
            braceShape: "hBraceShapes"
        },
        vbrace: {
            memberProperties: {profile: "vBraceProfile", materialGrade: "vBraceMaterialGrade", dataSource: "vBraceDataSource", referenceDrawing: "vBraceRefNum"},
            finishProperties: 
            {
                  surfacePreparation: "vbsurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "vbprimer1", 
                  primerCoats: "vbprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "paintCheck",
                  paintName: "vbpaint1", 
                  paintCoats: "vbpaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "vbgalvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "vbfireProofing2", 
                  fireRating: "vbfireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "vbaess2",
                  paintType: "rdvb"
            },
            connectionProperties: {connMark_LHS: "vBraceMark", axialLoad_LHS: "vBraceAxial"},
            braceShape: "vBraceShapes"
        },
        truss: {
            memberProperties: {profile: "pitchedprofile", orientation: "pitchedorientation", materialGrade: "pitchedgrade", referenceDrawing: "pitchrefnum"},
            finishProperties: 
            {
                  surfacePreparation: "pitsurfacePreparation1",
                  primerCheck: "chkprimer", 
                  primerName: "pitprimer1", 
                  primerCoats: "pitprimer2", 
                  paintType: "rdhb", 
                  paintName: "pitpaint1", 
                  paintCoats: "pitpaint2", 
                  galvZincCoatThickness: "pitgalvanization2", 
                  fireProofType: "pitfireProofing2", 
                  fireRating: "pitfireProofing3", 
                  aessCat: "pitaess1"
            },
            connectionProperties: {connMark_LHS: "pitchconmark1", connMark_RHS: "pitchconmark2", shearLoad_LHS: "pitchshearload1", shearLoad_RHS: "pitchshearload2", axialLoad_LHS: "pitchaxialload1", axialLoad_RHS: "pitchaxialload2"},
            topChordProfile: "pitchedprofile",
            topChordOrientation: "pitchedorientation",
            topChordGrade: "pitchedgrade",
            bottomChordProfile: "pitchedprofile1",
            bottomChordOrientation: "pitchedorientation1",
            bottomChordGrade: "pitchedgrade1",
            height_ridge_ft: "pitchtheightft",
            height_ridge_in: "pitchtheightin",
            height_ridge_fr: "pitchtheightfr",
            length_ft: "pitchtlengthft",
            length_in: "pitchtlengthin",
            length_fr: "pitchtlengthfr",
            ridge_pos: "positionofridge",
            ridge_pos_ft: "RidgepointFromLendft",
            ridge_pos_in: "RidgepointFromLendin",
            ridge_pos_fr: "RidgepointFromLendfr",
            ridge_pos_indexstr: "ridgevertical1",
            verticalMemProfile: "pitchedprofile2",
            verticalMemOrientation: "pitchmemorientation",
            verticalMemGrade: "pitchedgrade2",
            verticalSpacing: "pt1verticals",
            verticalCount: "pverticalnum",
            spacing1_left_ft: "pitchedvertical1ft",
            spacing1_left_in: "pitchedvertical1in",
            spacing1_left_fr: "pitchedvertical1fr",
            spacing2_left_ft: "pitchedvertical2ft",
            spacing2_left_in: "pitchedvertical2in",
            spacing2_left_fr: "pitchedvertical2fr",
            lacingProfile: "pitchedprofile3",
            lacingOrientation: "pitchmemorientation2",
            lacingGrade: "pitchedgrade3",
            lacingPattern: "pitchedInclinedshapes",
            lacingPattern_id: "shapeicons",
            isLacingNotConnected: "surfaceprecb",
            connected_ft: "pitinclined",
            connected_in: "pitinclined1",
            connected_fr: "pitinclined2",
            splice_count: "tpitsplicecount"
        },
        paraTruss: {
            memberProperties: {profile: "parallelmodalprofile", orientation: "parallelorientation", materialGrade: "parallelgrade", referenceDrawing: "parallelreferencenum"},
            finishProperties: 
            {
                  surfacePreparation: "paralsurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "paralprimer1", 
                  primerCoats: "paralprimer2", 
                  paintType: "rdhb", 
                  paintName: "paralpaint1", 
                  paintCoats: "paralpaint2", 
                  galvZincCoatThickness: "paralgalvanization2", 
                  fireProofType: "paralfireProofing2", 
                  fireRating: "paralfireProofing3", 
                  aessCat: "paralaess1"
            },
            connectionProperties: {connMark_LHS: "parallelconmark1", connMark_RHS: "parallelconmark3", shearLoad_LHS: "parallelsload1", shearLoad_RHS: "parallelsload3", axialLoad_LHS: "parallelaload1", axialLoad_RHS: "parallelaload3"},
            traceCamber: "tracamber",
            traceCamber1: "tracamber1",
            pezCamber: "pezcamber",
            pezCamber: "pezcamber1",
            topChordProfile: "parallelmodalprofile",
            topChordOrientation: "parallelorientation",
            topChordGrade: "parallelgrade",
            bottomChordProfile: "parallelmodalprofile1",
            bottomChordOrientation: "parallelmemorientation",
            bottomChordGrade: "parallelgrade1",
            height_left_ft: "paralleltrusslft",
            height_left_in: "paralleltrusslin",
            height_left_fr: "paralleltrusslfr",
            height_right_ft: "paralleltrussrft",
            height_right_in: "paralleltrussrin",
            height_right_fr: "paralleltrussrfr",
            length_ft: "paralleltrusslenft",
            length_in: "paralleltrusslenin",
            length_fr: "paralleltrusslenfr",
            ridge_pos: "positionofridge",
            ridge_pos_ft: "RidgepointFromLendft",
            ridge_pos_in: "RidgepointFromLendin",
            ridge_pos_fr: "RidgepointFromLendfr",
            trussSpliceCount: "splicecount",
            slopingChord: "parallelslopchord",
            splice_count: "splicecount",
            splice_left_ft: "parallelsp1ft",
            splice_left_in: "parallelsp1in",
            splice_left_fr: "parallelsp1fr",
            splice1_left_ft: "parallelsp2ft",
            splice1_left_in: "parallelsp2in",
            splice1_left_fr: "parallelsp2fr",
            verticalMemProfile: "parallelmodalprofile2",
            verticalMemOrientation: "parallelmemorientation2",
            verticalMemGrade: "parallelgrade2",
            verticalSpacing: "t1verticals",
            verticalCount: "verticalnumt1",
            spacing1_left_ft: "parallels1ft",
            spacing1_left_in: "parallels1in",
            spacing1_left_fr: "parallels1fr",
            spacing2_left_ft: "parallels2ft",
            spacing2_left_in: "parallels1in",
            spacing2_left_fr: "parallels1fr",
            lacingProfile: "parallelmodalprofile3",
            lacingOrientation: "parallelmodalorientation3",
            lacingGrade: "parallelgrade3",
            lacingPattern_id: "shapeicons",
            isLacingNotConnected: "surfaceprecb",
            connected_ft: "parainclined",
            connected_in: "parainclined1",
            connected_fr: "parainclined2",
            alignment: "ddlTrussAlignment",
            tos_chord_sign: "colTopNegative",
            tos_chord_ft: "pbtosft",
            tos_chord_in: "pbtosin",
            tos_chord_fr: "pbtosfr",
            left_top_offset_sign: "colTopNegative1",
            left_top_offset_ft: "pbtos1ft",
            left_top_offset_in: "pbtos1in",
            left_top_offset_fr: "pbtos1fr",
            right_top_offset_sign: "colTopNegative2",
            right_top_offset_ft: "pbtos2ft",
            right_top_offset_in: "pbtos2in",
            right_top_offset_fr: "pbtos2fr"
        },
        trapeTruss: {
            memberProperties: {profile: "trapezoidalprofile", orientation: "topChordMemberprofile", materialGrade: "topChordMaterialGrade", referenceDrawing: "TrapezoidalRefNumber"},
            finishProperties: 
            {
                  surfacePreparation: "trasurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "traprimer1", 
                  primerCoats: "traprimer2", 
                  paintType: "rdhb", 
                  paintName: "trapaint1", 
                  paintCoats: "trapaint2", 
                  galvZincCoatThickness: "tragalvanization2", 
                  fireProofType: "trafireProofing2", 
                  fireRating: "trafireProofing3", 
                  aessCat: "traaess1"
            },
            connectionProperties: {connMark_LHS: "leftConnectionMark", connMark_RHS: "connectionMark1", shearLoad_LHS: "leftShearLoad", shearLoad_RHS: "shearLoad1", axialLoad_LHS: "leftAxialLoad", axialLoad_RHS: "axialLoad1"},
            traceCamber: "tracamber",
            traceCamber1: "tracamber1",
            pezCamber: "pezcamber",
            pezCamber: "pezcamber1",
            topChordProfile: "trapezoidalprofile",
            topChordOrientation: "topChordMemberprofile",
            topChordGrade: "topChordMaterialGrade",
            bottomChordProfile: "trapezoidalprofile1",
            bottomChordOrientation: "bottomChordMemberprofile",
            bottomChordGrade: "bottomChordMaterialGrade",
            ridge_pos: "positionofridge",
            ridge_pos_ft: "RidgepointFromLendft",
            ridge_pos_in: "RidgepointFromLendin",
            ridge_pos_fr: "RidgepointFromLendfr",
            ridge_pos_str: "ridgevertical1",
            height_left_ft: "trapezoidalHeightOfTrussLeftInFt",
            height_left_in: "trapezoidalHeightOfTrussLeftInIn",
            height_left_fr: "trapezoidalHeightOfTrussLeftInFr",
            height_right_ft: "trapezoidalHeightOfTrussRightInFt",
            height_right_in: "trapezoidalHeightOfTrussRightInIn",
            height_right_fr: "trapezoidalHeightOfTrussRightInFr",
            length_left_ft: "trapezoidalTrussLenInFt",
            length_left_in: "trapezoidalTrussLenInIn",
            length_left_fr: "trapezoidalTrussLenInFr",
            height_ridge_ft: "trapezoidalHeightAtRidgeInFt",
            height_ridge_in: "trapezoidalHeightAtRidgeInIn",
            height_ridge_fr: "trapezoidalHeightAtRidgeInFr",
            splice_count: "trapezoidalSpliceCount",
            splice_left_ft: "splicePosition1LeftEndFt",
            splice_left_in: "splicePosition1LeftEndIn",
            splice_left_fr: "splicePosition1LeftEndFr",
            splice1_left_ft: "splicePosition2LeftEndFt",
            splice1_left_in: "splicePosition2LeftEndIn",
            splice1_left_fr: "splicePosition2LeftEndFr",
            verticalMemProfile: "trapezoidalprofile2",
            verticalMemOrientation: "verticalMemberorientation",
            verticalMemGrade: "verticalMaterialGrade",
            verticalSpacing: "pt1verticals",
            verticalCount: "pverticalnum",
            spacing1_left_ft: "spacing1LeftEndFt",
            spacing1_left_in: "spacing1LeftEndIn",
            spacing1_left_fr: "spacing1LeftEndFr",
            spacing2_left_ft: "spacing2LeftEndFt",
            spacing2_left_in: "spacing2LeftEndIn",
            spacing2_left_fr: "spacing2LeftEndFr",
            lacingProfile: "trapezoidalprofile3",
            lacingOrientation: "inclinedMemberOrientation",
            lacingGrade: "inclinedMaterialGrade",
            lacingPattern: "inclinedBracingPattern",
            lacingPattern_id : "shapeicons",
            isLacingNotConnected: "surfaceprecb",
            connected_ft: "trainclined",
            connected_in: "trainclined1",
            connected_fr: "trainclined2"
        },
       pourstop: {
            memberProperties: 
            {
                  profile: "pourstopprofile", 
                  material: "psMaterial",
                  materialGrade: "pourstopgrade", 
                  referenceDrawing: "pourStopRefDrawingNo", 
                  orientation: "pourstop1"
            },
            finishProperties: 
            {
                  surfacePreparation: "pssurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "psprimer1", 
                  primerCoats: "psprimer2", 
                  noPaint: "chknopaint",
                  paint: "chkpaint",
                  paintName: "pspaint1", 
                  paintCoats: "pspaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "psgalvanization1", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "psfireProofing2", 
                  fireRating: "psfireProofing1", 
                  aessCheck: "chkaess",
                  aessCat: "psaess1",
                  paintType: "rdps"
            },
            angleprofile: "pourstopprofile",
            pourposition: "pourposition",
            position_ft: "leftendpositionft",
            position_in: "leftendpositionin",
            position_fr: "leftendpositionfr",
            length_ft: "pourlengthft",
            length_in: "pourlengthin",
            length_fr: "pourlengthfr",
            plateThick_in: "pourstopthickness",
            verticalLegLength_in: "pourstopLegLengthIn",
            verticalLegLength_fr: "pourstopLegLengthFr",
            EOS_ft: "slabEdgeFt",
            EOS_in: "slabEdgeIn",
            EOS_fr: "slabEdgeFr",
            beamConnectionType: "pourStopBeamConn",
            overLapLength_in: "overlapLength",
            isShearStudAttached: "psmswitch",
            shearStudDia_in: "switchdia",
            shearStudLength_in: "switchlength1",
            shearStudCount: "switchcount",
            weldType: "psWeldtype",
            weldSize: "weldSize",
            weldLength_ft: "weldLengthFt",
            weldLength_in: "weldLengthIn",
            weldLength_fr: "weldLengthFr",
            pitch_ft: "pitchFt",
            pitch_in: "pitchIn",
            pitch_fr: "pitchFr",
            boltDia_in: "boltDia",
            boltGrade: "boltGrade",
            boltRow: "boltrows",
            boltSpacing_ft: "boltSpacingFt",
            boltSpacing_in: "boltSpacingIn",
            boltSpacing_fr: "boltSpacingFr"
        },
        gbeam: {
            memberProperties: {profile: "gBeamProfile", orientation: "gBeamOrientation", materialGrade: "gBeamMaterialGrade", referenceDrawing: "gBeamRefNum", memberType: "gBeamType", datasource: "gBeamDataSource"},
            finishProperties: 
            {
                  surfacePreparation: "gsurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "gprimer1", 
                  primerCoats: "gprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint", 
                  paintName: "gpaint1", 
                  paintCoats: "gpaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "ggalvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "gfireProofing2", 
                  fireRating: "gfireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "gaess1",
                  paintType: "rdhb"
            },
            connectionProperties: 
            {
                  connMark_LHS: "gBeamLeftConnMark", 
                  connMark_RHS: "gBeamRightConnMark", 
                  connType_LHS: "gBeamLeftConnType",
                  connType_RHS: "gBeamRightConnType",
                  connSupportMethod_LHS: "gBeamLeftConnMethod",
                  connSupportMethod_RHS: "gBeamRightConnMethod",
                  connSupportedMethod_LHS: "gBeamLeftConnMethod1",
                  connSupportedMethod_RHS: "gBeamRightConnMethod1",
                  shearLoad_LHS: "gBeamLeftShear", 
                  shearLoad_RHS: "gBeamRightShear", 
                  axialLoad_LHS: "gBeamLeftAxial", 
                  axialLoad_RHS: "gBeamRightAxial", 
                  mommentLoad_LHS: "gBeamLeftMoment", 
                  mommentLoad_RHS: "gBeamRightMoment",
                  connMark_Splice: "spliceconnectionmark"
            },
            alignment: "gbeamalignment",
            tos_sign: "plusminus",
            tos_ft: "gBeamTOS",
            tos_in: "gBeamTOS_in",
            tos_fr: "gBeamTOS_fr",
            ffl_in: "gBeamTOSFFL_in",
            ffl_fr: "gBeamTOSFFL_fr",
            splice_count: "usplicecount",
            camberRequired: "pcamber",
            camber_in: "gcamber1",
            isshearStudRequired: "gshear",
            shearStudDia_in: "gshear1",
            shearStudLength_in: "gshear2",
            shearStudCount: "gshear3",
            isStiffenerRequired: "pshear",
            stiffPlateGrade: "gspshear1",
            stiffPlateThick_in: "gspshear2",
            stiffPlateCount: "gspshear3",
            stiffWeldType: "gspshear4",
            stiffWeldSize: "gspshear5",
            frameNO: "gBeamFrame",
            depthvalue: "gBeamdepthForGivenProfile",
            frameConnectionMethod: "gbfconnectionmethod"
        },
        peribeam: {
            memberProperties: {profile: "peribeamprofile", orientation: "gBeamOrientation", materialGrade: "peribeamgrade", referenceDrawing: "pbreferencenum", memberType: "peribeamtype", dataSource: "pbeamdatasource"},
            finishProperties: 
            {
                  surfacePreparation: "perisurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "periprimer1", 
                  primerCoats: "periprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint", 
                  paintName: "peripaint1", 
                  paintCoats: "peripaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "perigalvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "perifireProofing2", 
                  fireRating: "perifireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "periaess1",
                  paintType: "rdhb"
            },
            connectionProperties: 
            {
                  connMark_LHS: "pbconmark1", 
                  connMark_RHS: "pbconmark2", 
                  connType_LHS: "gBeamLeftConnType",
                  connType_RHS: "gBeamRightConnType",
                  connSupportMethod_LHS: "gBeamLeftConnMethod",
                  connSupportMethod_RHS: "gBeamRightConnMethod",
                  connSupportedMethod_LHS: "gBeamLeftConnMethod1",
                  connSupportedMethod_RHS: "gBeamRightConnMethod1",
                  shearLoad_LHS: "pbshearload1", 
                  shearLoad_RHS: "pbshearload2", 
                  axialLoad_LHS: "pbaxialload1", 
                  axialLoad_RHS: "pbaxialload2", 
                  mommentLoad_LHS: "pbmomentload1", 
                  mommentLoad_RHS: "pbmomentload2",
                  connMark_Splice: "spliceconnectionmark"
            },
            alignment: "pbeamalignment",
            tos_sign: "plusminus",
            tos_ft: "pbtosft",
            tos_in: "pbtosin",
            tos_fr: "pbtosfr",
            ffl_in: "peribeamffl_in",
            ffl_fr: "peribeamffl_fra",
            camberRequired: "pcamber",
            camber_in: "pcamber1",
            splice_count: "usplicecount",
            isshearStudRequired: "pshear",
            shearStudDia_in: "psheardia",
            shearStudLength_in: "pshearlen",
            shearStudCount: "pshear3",
            isStiffenerRequired: "pstiffenerplate",
            stiffPlateGrade: "splshear3",
            stiffPlateThick_in: "splshear2",
            stiffPlateCount: "splshear1",
            stiffWeldType: "splshear4",
            stiffWeldSize: "splshear5",
            frameNO: "periBeamFrame",
            depthvalue: "peridepthForGivenProfile",
            frameConnectionMethod: "periBeamConnMethod"
        },
        ibeam: {
            memberProperties: {profile: "infillbeamprofile", orientation: "infillbeamorientation", materialGrade: "infillbeamgrade", referenceDrawing: "infillreference", memberType: "infillbeamtype", dataSource: "infilldatasource"},
            finishProperties: 
            {
                  surfacePreparation: "infilsurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "infilprimer1", 
                  primerCoats: "infilprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint",
                  paintName: "infilpaint1", 
                  paintCoats: "infilpaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "infilgalvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "infilfireProofing2", 
                  fireRating: "infilfireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "infilaess1",
                  paintType: "rdhb"
            },
            connectionProperties: 
            {
                  connMark_LHS: "iconnectionmark1", 
                  connMark_RHS: "iconnectionmark2", 
                  connType_LHS: "iconnectiontype1",
                  connType_RHS: "iconnectiontype2",
                  connSupportMethod_LHS: "icmss1",
                  connSupportMethod_RHS: "icmss2",
                  connSupportedMethod_LHS: "icmss3",
                  connSupportedMethod_RHS: "icmss4",
                  shearLoad_LHS: "ishearload1", 
                  shearLoad_RHS: "ishearload2", 
                  axialLoad_LHS: "iaxialload1", 
                  axialLoad_RHS: "iaxialload2", 
                  mommentLoad_LHS: "imomentload1", 
                  mommentLoad_RHS: "imomentload2"
            },
            spacing1_ref: "ispacing1ft",
            spacing1_ref_in: "ispacing1in",
            spacing1_ref_fr: "ispacing1fr",
            alignment: "infillbeamalignment",
            tos_ft: "itosft",
            tos_in: "itosin",
            tos_fr: "itosfr",
            ffl_in: "ifflin",
            ffl_fr: "ifflfr",
            camberRequired: "icamber",
            camber_in: "icamber1",
            isshearStudRequired: "ishear",
            shearStudDia_in: "ishear1",
            shearStudLength_in: "ishear2",
            shearStudCount: "ishear3",
            isStiffenerRequired: "istiffenerplate",
            stiffPlateGrade: "ispshear3",
            stiffPlateThick_in: "ispshear2",
            stiffPlateCount: "ispshear1",
            stiffWeldType: "ispshear4",
            stiffWeldSize: "ispshear5",
            frameNO: "iframeNo",
            depthvalue: "infillbeamdepthForGivenProfile",
            frameConnectionMethod: "iframeconnection"
        },
        cantileverBeam: {
            memberProperties: 
            {
                  profile: "cantileverbeamprofile", 
                  orientation: "clbeamorientation", 
                  materialGrade: "cantilevermaterialgrade", 
                  referenceDrawing: "clreferencenumber_chosen", 
                  memberType: "clbeamtype", 
                  dataSource: "cldatasource"
            },
            finishProperties: 
            {
                  surfacePreparation: "cansurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "canprimer1", 
                  primerCoats: "canprimer2", 
                  paintType: "rdhb", 
                  paintName: "canpaint1", 
                  paintCoats: "canpaint2", 
                  galvZincCoatThickness: "cangalvanization2", 
                  fireProofType: "canfireProofing2", 
                  fireRating: "canfireProofing3", 
                  aessCat: "canaess1"
            },
            connectionProperties: 
            {
                  connMark_LHS: "clconnectionmark1", 
                  connMark_RHS: "clconnectionmark2", 
                  connType_LHS: "clconnectiontype1",
                  connType_RHS: "clconnectiontype2",
                  connSupportMethod_LHS: "clconnectionmss1",
                  connSupportMethod_RHS: "clconnectionmss2",
                  connSupportedMethod_LHS: "clconnectionmss3",
                  connSupportedMethod_RHS: "clconnectionmss4",
                  shearLoad_LHS: "clshearload1", 
                  shearLoad_RHS: "clshearload2", 
                  axialLoad_LHS: "claxialload1", 
                  axialLoad_RHS: "claxialload2", 
                  mommentLoad_LHS: "clmomentload1", 
                  mommentLoad_RHS: "clmomentload2"
            },
            connectionType: "spliceConnectiontype",
            alignment: "clbeamalignment",
            distFrom_ft: "distRefgridft1",
            distFrom_in: "distRefgridin1",
            distFrom_fr: "distRefgridfr1",
            length_ft: "lengthofbeamft",
            length_in: "lengthofbeamin",
            length_fr: "lengthofbeamfr",
            direction: "beamparallelto",
            tos_sign: "plusminus",
            tos_ft: "clbtosft",
            tos_in: "clbtosin",
            tos_fr: "clbtosfr",
            ffl_sign: "plusminusffl",
            ffl_in: "clbfflin",
            ffl_fr: "clbfflfr",
            isshearStudRequired: "cshear",
            shearStudDia_in: "cshear1",
            shearStudLength_in: "cshear2",
            shearStudCount: "cshear3",
            isStiffenerRequired: "stiffnerplate",
            stiffPlateGrade: "caspshear3",
            stiffPlateThick_in: "caspshear2",
            stiffPlateCount: "caspshear1",
            stiffWeldType: "caspshear4",
            stiffWeldSize: "caspshear5",
            frameNO: "caBeamframe",
            depthvalue: "cantileverbeamdepthForGivenProfile",
            frameConnectionMethod: "caBeamConnMethod"
        },
        pgirder: {
            memberProperties: {materialGrade: "plategridergrade", referenceDrawing: "pgRefNum"},
            finishProperties: 
            {
                  surfacePreparation: "pgsurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "pgprimer1", 
                  primerCoats: "pgprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint",
                  paintName: "pgpaint1", 
                  paintCoats: "pgpaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "pggalvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "pgfireProofing2", 
                  fireRating: "pgfireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "pgaess1",
                  paintType: "rdpg"
            },
            connectionProperties: 
            {
                  connMark_LHS: "pgconmark1", 
                  connMark_RHS: "pgconmark2", 
                  connType_LHS: "pgcontype1",
                  connType_RHS: "pgcontype2",
                  connSupportMethod_LHS: "pgcmss1",
                  connSupportMethod_RHS: "pgcmss3",
                  connSupportedMethod_LHS: "pgcmss2",
                  connSupportedMethod_RHS: "pgcmss4",
                  shearLoad_LHS: "pgshearload1", 
                  shearLoad_RHS: "pgshearload2", 
                  axialLoad_LHS: "pgaxialload1", 
                  axialLoad_RHS: "pgaxialload2",
                  connMark_Splice: "spliceconnectionmark"
            },
            alignment: "plategrideralignment",
            topFlangeThick_in: "pgtfptin",
            topFlangeThick_fr: "pgtfptfr",
            topFlangeWidth_ft: "pgtfpwft",
            topFlangeWidth_in: "pgtfpwin",
            topFlangeWidth_fr: "pgtfpwfr",
            bottomFlangeThick_in: "pgbfptin",
            bottomFlangeThick_fr: "pgbfptfr",
            bottomFlangeWidth_ft: "pgbfpwft",
            bottomFlangeWidth_in: "pgbfpwin",
            bottomFlangeWidth_fr: "pgbfpwfr",
            webPlateThick_in: "pgwptin",
            webPlateThick_fr: "pgwptfr",
            webPlateWidth_ft: "pgwpwft",
            webPlateWidth_in: "pgwpwin",
            webPlateWidth_fr: "pgwpwfr",
            camber: "plategridercamber",
            weldType_topFlange: "plategriderwebtype1",
            weldSize_topFlange: "plategriderwebsize1",
            weldType_bottomFlange: "plategriderwebtype2",
            weldSize_bottomFlange: "plategriderwebsize2",
            tos_sign: "plusminus",
            tos_ft: "pgtosft",
            tos_in: "pgtosin",
            tos_fr: "pgtosfr",
            ffl_in: "pgfflin",
            ffl_fr: "pgfflfr",
            isshearStudRequired: "surfaceprecb",
            shearStudDia_in: "pgdia",
            shearStudLength_in: "pglength1",
            shearStudCount: "pgcount",
            depthvalue: "plategriderdepthForGivenProfile",
            splice_count: "usplicecount"
        },
        column: {
            memberProperties: 
            {
                  profile: "columnprofile", 
                  orientation: "corientation", 
                  materialGrade: "columngrade", 
                  referenceDrawing: "colRefNum", 
                  memberType: "columntype", 
                  dataSource: "datasource"
            },
            finishProperties: 
            {
                  surfacePreparation: "csurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "cprimer1", 
                  primerCoats: "cprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint",
                  paintName: "cpaint1", 
                  paintCoats: "cpaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "cgalvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "cfireProofing2", 
                  fireRating: "cfireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "caess1",
                  paintType: "ecol1"
            },
            connectionProperties: 
            {
                  basePlateConnMark: "cbpcmark", 
                  splice_plateConnMark: "cspcmark", 
                  splice_shearLoad: "cshearload", 
                  splice_axialLoad: "caxialload",
                  splice_momentLoad: "cmomentload",
                  cap_check: "chkcapplate", 
                  cap_plateConnMark: "chkCap1",
                  cap_shearLoad: "chkCap2",
                  cap_axialLoad: "chkCap3",
                  cap_momentLoad: "chkCap4"
            },
            baseElevation_sign: "colBottomNegative",
            baseElevation_ft: "colBottomEleTxt",
            baseElevation_in: "colBottom_in",
            baseElevation_fr: "colBottom_fr",
            topElevation_sign: "colTopNegative",
            topElevation_ft: "colTopEleTxt",
            topElevation_in: "colTop_in",
            topElevation_fr: "colTop_fr",
            splice_count: "splicecount",
            col_offsetx_sign: "xdir1",
            col_offsetx_ft: "xdir2",
            col_offsetx_in: "xdir3",
            col_offsetx_fr: "xdir4",
            col_offsety_sign: "ydir1",
            col_offsety_ft: "ydir2",
            col_offsety_in: "ydir3",
            col_offsety_fr: "ydir4",
            isDoublerPlateRequired: "stiffnerplate1",
            plateGrade: "plategirder1",
            plateThickness: "platethickness1",
            count: "columncount",
            plateLength_ft: "columnspacing1",
            plateLength_in: "platelength_in",
            plateLength_fr: "platelength_fra",
            plateWidth_ft: "cplatewidth1",
            plateWidth_in: "platewidth_in",
            plateWidth_fr: "platewidth_fra",
            plateWeldType: "weldtype1",
            plateWeldSize_in: "plateweldthickness_in"
        },
        post: {
            memberProperties: {profile: "postProfile", orientation: "postOrientation", materialGrade: "postGrade", referenceDrawing: "postReferenceNum"},
            finishProperties: 
            {
                  surfacePreparation: "losurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "loprimer1", 
                  primerCoats: "loprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint",
                  paintName: "lopaint1", 
                  paintCoats: "lopaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "logalvanization1", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "lofireProofing2", 
                  fireRating: "lofireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "loaess1",
                  paintType: "rdcolp"
            },
            connectionProperties: 
            {
                  basePlateConnMark: "postbpcm", 
                  cap_check: "chkcapplate", 
                  cap_plateConnMark: "chkp3Cap1",
                  cap_shearLoad: "chkp3Cap2",
                  cap_axialLoad: "chkp3Cap3",
                  cap_momentLoad: "chkp3Cap4"
            },
            baseElevation_sign: "postBottomElevation",
            baseElevation_ft: "postBottomElevationFt",
            baseElevation_in: "postBottomElevationIn",
            baseElevation_fr: "postBottomElevationFr",
            topElevation_sign: "postTopElevation",
            topElevation_ft: "postTopElevationFt",
            topElevation_in: "postTopElevationIn",
            topElevation_fr: "postTopElevationFr",
            loc_X: "gridLocX",
            loc_Y: "gridLocY",
            xDirection_sign: "xDirection",
            xDirection_ft: "xDirectionFt",
            xDirection_in: "xDirectionIn",
            xDirection_fr: "xDirectionFr",
            yDirection_sign: "yDirection",
            yDirection_ft: "yDirectionFt",
            yDirection_in: "yDirectionIn",
            yDirection_fr: "yDirectionFr"
        },
        box: {
            memberProperties: {profile: "colProfileTxt", orientation: "bc4orientation", materialGrade: "boxcolumngrade", referenceDrawing: "bc4referencenumber", memberType: "bc4columntype", dataSource: "bc4datasource"},
            finishProperties: 
            {
                  surfacePreparation: "bcsurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "bcprimer1", 
                  primerCoats: "bcprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint",
                  paintName: "bcpaint1", 
                  paintCoats: "bcpaint2", 
                  galvanization: "chkgalvanize",
                  galvanizationSurf: "bcgalvanization1",
                  galvZincCoatThickness: "bcgalvanization2",
                  fireProofCheck: "chkfireproofing",
                  fireProofSurf: "bcfireProofing1",
                  fireProofType: "bcfireProofing2", 
                  fireRating: "bcfireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "bcaess1",
                  paintType: "bucm4"
            },
            connectionProperties: 
            {
                  basePlateConnMark: "bc4bpcm", 
                  splice_plateConnMark: "bc4spcm", 
                  splice_shearLoad: "bc4shearload1", 
                  splice_axialLoad: "bc4axialload1",
                  splice_momentLoad: "bc4momentload1",
                  cap_check: "chkcapplate", 
                  cap_plateConnMark: "chkboxCap1",
                  cap_shearLoad: "chkboxCap2",
                  cap_axialLoad: "chkboxCap3",
                  cap_momentLoad: "chkboxCap4"
            },
            depth_a_ft: "bc4depthaft",
            depth_a_in: "bc4depthain",
            depth_a_fr: "bc4depthafr",
            width_b_ft: "bc4widthbft",
            width_b_in: "bc4widthbin",
            width_b_fr: "bc4widthbfr",
            thick_c_in: "bc4thicknesscin",
            thick_c_fr: "bc4thicknesscfr",
            thick_d_in: "bc4thicknessdin",
            thick_d_fr: "bc4thicknessdfr",
            splice_count: "c4boxsplicecount",
            weld_type: "boxcolumnweld",
            weld_size: "fillet",
            cjp_weld: "surfaceprecb1",
            plus_depth_in: "mchkboxcol1",
            plus_depth_fr: "mchkboxcol2",
            baseElevation_sign: "bc4bcbelevation",
            baseElevation_ft: "bc4bcbelevationft",
            baseElevation_in: "bc4bcbelevationin",
            baseElevation_fr: "bc4bcbelevationfr",
            topElevation_sign: "bc4bctelevation",
            topElevation_ft: "bc4bctelevationft",
            topElevation_in: "bc4bctelevationin",
            topElevation_fr: "bc4bctelevationfr"
        },
        builtup: {
            memberProperties: {profile: "colProfileTxt", orientation: "bc2orientation", materialGrade: "columnmodal2grade", referenceDrawing: "bc2referencenumber", memberType: "bc2columntype", dataSource: "bc2datasource"},
            finishProperties: 
            {
                  surfacePreparation: "bs2surfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "bs2primer1", 
                  primerCoats: "bs2primer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint",
                  paintName: "bs2paint1", 
                  paintCoats: "bs2paint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "bs2galvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "bs2fireProofing2", 
                  fireRating: "bs2fireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "bs2aess1",
                  paintType: "bucm2"
            },
            connectionProperties: 
            {
                  basePlateConnMark: "bc2bpcm", 
                  splice_plateConnMark: "bc2spcm", 
                  splice_shearLoad: "bc2shearload1", 
                  splice_axialLoad: "bc2axialload1",
                  splice_momentLoad: "bc2momentload1",
                  cap_check: "chkcapplate", 
                  cap_plateConnMark: "chks2Cap1",
                  cap_shearLoad: "chks2Cap2",
                  cap_axialLoad: "chks2Cap3",
                  cap_momentLoad: "chks2Cap4"
            },
            topthick_in: "bc2tfpthicknessin",
            topthick_fr: "bc2tfpthicknessfr",
            topwidth_ft: "bc2tfpwidthft",
            topwidth_in: "bc2tfpwidthin",
            topwidth_fr: "bc2tfpwidthfr",
            botthick_in: "bc2bfpthicknessin",
            botthick_fr: "bc2bfpthicknessfr",
            botwidth_ft: "bc2tfpwidthft",
            botwidth_in: "bc2tfpwidthin",
            botwidth_fr: "bc2tfpwidthfr",
            webthick_in: "bc2wpthicknessin",
            webthick_fr: "bc2wpthicknessfr",
            webwidth_ft: "bc2wpwidthft",
            webwidth_in: "bc2wpwidthin",
            webwidth_fr: "bc2wpwidthfr",
            weld_toptype: "columnmodal2weldtype",
            weld_topsize: "columnmodalweldsize",
            weld_bottype: "bc2weldtype",
            weld_botsize: "bc2weldsizein",
            splice_count: "boxsplicecount",
            baseElevation_sign: "bc2cbelevation",
            baseElevation_ft: "bc2cbelevationft",
            baseElevation_in: "bc2cbelevationin",
            baseElevation_fr: "bc2cbelevationfr",
            topElevation_sign: "bc2ctelevation",
            topElevation_ft: "bc2ctelevationft",
            topElevation_in: "bc2ctelevationin",
            topElevation_fr: "bc2ctelevationfr"
        },
        crucified: {
            memberProperties: {profile: "columnmodal3profile1", orientation: "bc3orientation", materialGrade: "gradecolumnmodal3", referenceDrawing: "bc3referencenumber", memberType: "bc3columntype", dataSource: "bc3datasource"},
            finishProperties: 
            {
                  surfacePreparation: "bc3surfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "bc3primer1", 
                  primerCoats: "bc3primer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint",
                  paintName: "bc3paint1", 
                  paintCoats: "bc3paint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "bc3galvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "bc3fireProofing2", 
                  fireRating: "bc3fireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "bc3aess1",
                  paintType: "bucm3"
            },
            connectionProperties: 
            {
                  basePlateConnMark: "bc3bpcm", 
                  splice_plateConnMark: "bc3spcm", 
                  splice_shearLoad: "bc3shearload1", 
                  splice_axialLoad: "bc3axialload1",
                  splice_momentLoad: "bc3momentload1",
                  cap_check: "chkcapplate", 
                  cap_plateConnMark: "chks3Cap1",
                  cap_shearLoad: "chks3Cap2",
                  cap_axialLoad: "chks3Cap3",
                  cap_momentLoad: "chks3Cap4"
            },
            baseElevation_sign: "bc3cbelevation",
            baseElevation_ft: "bc3cbelevationft",
            baseElevation_in: "bc3cbelevationin",
            baseElevation_fr: "bc3cbelevationfr",
            topElevation_sign: "bc3ctelevation",
            topElevation_ft: "bc3ctelevationft",
            topElevation_in: "bc3ctelevationin",
            topElevation_fr: "bc3ctelevationfr",
            splice_count: "splicecount",
            wt_profile: "columnmodal3profile4",
            wt_grade: "columnmodal3grade2",
            wt_count: "bc3count",
            wt_length_ft: "bc3wtlengthft",
            wt_length_in: "bc3wtlengthin",
            wt_length_fr: "bc3wtlengthfr",
            weld_type: "columnmodal3weldtype",
            weld_size: "columnmodal3weldsize"
        },
        builtupPlate: {
            memberProperties: {profile: "modalcolumn1profile2", orientation: "bc1orientation", materialGrade: "modalcolumn1grade", referenceDrawing: "bc1referencenumber", memberType: "bc1columntype", dataSource: "bc1datasource"},
            finishProperties: 
            {
                  surfacePreparation: "busurfacePreparation1", 
                  primerCheck: "chkprimer",
                  primerName: "chprimer1", 
                  primerCoats: "chprimer2", 
                  noPaint: "chknopaint",
                  paintCheck: "chkpaint",
                  paintName: "chpaint1", 
                  paintCoats: "chpaint2", 
                  galvanization: "chkgalvanize",
                  galvZincCoatThickness: "chgalvanization2", 
                  fireProofCheck: "chkfireproofing",
                  fireProofType: "chfireProofing2", 
                  fireRating: "chfireProofing3", 
                  aessCheck: "chkaess",
                  aessCat: "chaess1",
                  paintType: "bucm1"
            },
            connectionProperties: 
            {
                  basePlateConnMark: "bc1bpcm", 
                  splice_plateConnMark: "bc1spcm", 
                  splice_shearLoad: "bc1shearload1", 
                  splice_axialLoad: "bc1axialload1",
                  splice_momentLoad: "bc1momentload1",
                  cap_check: "chkcapplate", 
                  cap_plateConnMark: "chks1Cap1",
                  cap_shearLoad: "chks1Cap2",
                  cap_axialLoad: "chks1Cap3",
                  cap_momentLoad: "chks1Cap4"
            },
            baseElevation_sign: "bc1baseelevation",
            baseElevation_ft: "bc1baseelevationft",
            baseElevation_in: "bc1baseelevationin",
            baseElevation_fr: "bc1baseelevationfr",
            topElevation_sign: "bc1topelevation",
            topElevation_ft: "bc1topelevationft",
            topElevation_in: "bc1topelevationin",
            topElevation_fr: "bc1topelevationfr",
            splice_count: "splicecount",
            connect_channel: "ddlbuiltup1",
            spacing_channel: "spacingbtwchannel",
            plategrade: "bc1plategrade",
            platethickness: "bc1platethickness",
            count: "bc1count",
            platewidth_ft: "bc1platewidthft",
            platewidth_in: "bc1platewidthin",
            platewidth_fr: "bc1platewidthfr",
            platelength_ft: "bc1platelengthft",
            platelength_in: "bc1platelengthin",
            platelength_fr: "bc1platelengthfr",
            stiff_weldtype: "columnmodal1weldtype1",
            stiff_weldsize: "columnmodal1weldsize1",
            weld_type: "columnmodal1weldtype",
            weld_size: "columnmodal1weldsize"
        }
    }

    var skew_slop_option = {
      skew: {
            "left_x_ft": "pbtosft3",
            "left_x_in": "pbtosin3",
            "left_x_fr": "pbtosfr3",
            "left_y_ft": "pbtosft4",
            "left_y_in": "pbtosin4",
            "left_y_fr": "pbtosfr4",
            "right_x_ft": "pbtosft5",
            "right_x_in": "pbtosin5",
            "right_x_fr": "pbtosfr5",
            "right_y_ft": "pbtosft6",
            "right_y_in": "pbtosin6",
            "right_y_fr": "pbtosfr6",
            "left_x_sign": "colTopNegative",
            "left_y_sign": "colTopNegative1",
            "right_x_sign": "colTopNegative2",
            "right_y_sign": "colTopNegative3"
      },
      slop: {
            "tos_ft1": "pbtosft1",
            "tos_in1": "pbtosin1",
            "tos_fr1": "pbtosfr1",
            "tos_ft2": "pbtosft2",
            "tos_in2": "pbtosin2",
            "tos_fr2": "pbtosfr2",
            "tos_sign1": "plusminus1",
            "tos_sign2": "plusminus2"
      },
      slop_skew: {
            "tos_ft1": "pbtosft7",
            "tos_in1": "pbtosin7",
            "tos_fr1": "pbtosfr7",
            "tos_ft2": "pbtosft8",
            "tos_in2": "pbtosin8",
            "tos_fr2": "pbtosfr8",
            "tos_sign1": "plusminus7",
            "tos_sign2": "plusminus8",
            "left_x_ft": "pbtosft9",
            "left_x_in": "pbtosin9",
            "left_x_fr": "pbtosfr9",
            "left_y_ft": "pbtosft10",
            "left_y_in": "pbtosin10",
            "left_y_fr": "pbtosfr10",
            "right_x_ft": "pbtosft11",
            "right_x_in": "pbtosin11",
            "right_x_fr": "pbtosfr11",
            "right_y_ft": "pbtosft12",
            "right_y_in": "pbtosin12",
            "right_y_fr": "pbtosfr12",
            "left_x_sign": "colTopNegative4",
            "left_y_sign": "colTopNegative5",
            "right_x_sign": "colTopNegative6",
            "right_y_sign": "colTopNegative7"
      }
    }

        $(document).ready(function() {

            // builtup's
			$("#wsp").hide();
            $(function(){
                $("#ddlbuiltup1").change( function(){
                    if($('#ddlbuiltup1').val()=='dw'){
                        $("#dw").show();
                        $("#wsp").hide();
                        $("#singlewsp").hide();                    
                    }
                    else if($('#ddlbuiltup1').val()=='wsp'){
                         $("#dw").hide();
                        $("#wsp").show();
                        $("#singlewsp").show();
                    }                    
                });
            });
            $(function(){
                $("#eddlbuiltup1").change( function(){
                    if($('#eddlbuiltup1').val()=='edw'){
                        $("#edw").show();
                        $("#ewsp").hide();
                        $("#esinglewsp").hide();                    
                    }
                    else if($('#eddlbuiltup1').val()=='ewsp'){
                         $("#edw").hide();
                        $("#ewsp").show();
                        $("#esinglewsp").show();
                    }                    
                });
            });
            // hide scroll wrapper
          function setHeight() {
            windowHeight = $(window).innerHeight();
            // $('#expandCanvas').css('min-height', windowHeight);
            $('#expandCanvas') .css({'height': (($(window).height()) - 217)+'px'});
          };
          setHeight();
          
          $(window).resize(function() {
            setHeight(); 
          });
        });
        $(document).ready(function() {
          function setHeight() {
            windowHeight = $(window).innerHeight();
            // $('#expandCanvas').css('min-height', windowHeight);
            $('.rightFloat') .css({'height': (($(window).height()) - 260)+'px'});
          };
          setHeight();
          
          $(window).resize(function() {
            setHeight();
          });
        });


        jQuery(document).ready(function() {

            // $('#mp-content').css({ height: $(window).innerHeight() });
            // right click
            // $(document).bind("contextmenu",function(e){
            //   e.preventDefault();
            //   console.log(e.pageX + "," + e.pageY);
            //   $("#cntnr").css("left",e.pageX);
            //   $("#cntnr").css("top",e.pageY);
            //  // $("#cntnr").hide(100);        
            //   $("#cntnr").fadeIn(200,startFocusOut());      
            // });

            // function startFocusOut(){
            //   $(document).on("click",function(){
            //   $("#cntnr").hide();        
             
            //   });
            // }

            // show sub-menu
            $('.boxColumn').mouseover(function() {
                $('#shapes').show();
            });
            $('.boxColumn').mouseleave(function(){
                $('#shapes').hide();
            });
            
            // Button Click off for icon menu
            $("#items > li").click(function(){
            $("#op").text("You have selected "+$(this).text());
            });

            $('#main-propertyColumn').on('click', function() { 
              $(this).disabled('onclick'); 
            });

            $('#main-propertyBeam').on('click', function() { 
              $(this).disabled('onclick'); 
            });

            $('#main-propertyTrusses').on('click', function() { 
              $(this).disabled('onclick'); 
            });

            $('#main-propertyBuiltup').on('click', function() { 
              $(this).disabled('onclick'); 
            });

            //Multi select dropdown
            $(".chosen-select").chosen({
                no_results_text: "Oops, nothing found!"
                  
            });
            $(document).on("click", ".slide-rightbar.right", function(){
                $(".right").hide();
                $(".left").show();
                $(".editperipheral .rightFloat").hide();
            });
            $(document).on("click", ".slide-rightbar.left", function(){
                $(".left").hide();
                $(".right").show();
                $(".editperipheral .rightFloat").show();
            });
            $(document).on("click", ".editcolumn .right", function(){
                $(".right").hide();
                $(".left").show();
                $(".editcolumn .rightFloat").hide();
            });
            $(document).on("click", ".editcolumn .left", function(){
                $(".left").hide();
                $(".right").show();
                $(".editcolumn .rightFloat").show();
            });
            $(document).on("click", ".editPostColumn .right", function(){
                $(".right").hide();
                $(".left").show();
                $(".editPostColumn .rightFloat").hide();
            });
            $(document).on("click", ".editPostColumn .left", function(){
                $(".left").hide();
                $(".right").show();
                $(".editPostColumn .rightFloat").show();
            });
            $(document).on("click", ".rightFloatDiv .right", function(){
                $(".right").hide();
                $(".left").show();
                $(".rightFloatDiv .rightFloat").hide();
            });
            $(document).on("click", ".editHbrace .left", function(){
                $(".left").hide();
                $(".right").show();
                $(".editHbrace .rightFloat").show();
            });
            $(document).on("click", ".editHbrace .right", function(){
                $(".right").hide();
                $(".left").show();
                $(".editHbrace .rightFloat").hide();
            });
            $(document).on("click", ".editVbrace .right", function(){
                $(".right").hide();
                $(".left").show();
                $(".editVbrace .rightFloat").hide();
            });
            $(document).on("click", ".editVbrace .left", function(){
                $(".left").hide();
                $(".right").show();
                $(".editVbrace .rightFloat").show();
            });
            $(document).on("click", ".editPourstop .right", function(){
                $(".right").hide();
                $(".left").show();
                $(".editPourstop .rightFloat").hide();
            });
            $(document).on("click", ".editPourstop .left", function(){
                $(".left").hide();
                $(".right").show();
                $(".editPourstop .rightFloat").show();
            });
            $(document).on("click", ".editPlategirder .right", function(){
                $(".right").hide();
                $(".left").show();
                $(".editPlategirder .rightFloat").hide();
            });
            $(document).on("click", ".editPlategirder .left", function(){
                $(".left").hide();
                $(".right").show();
                $(".editPlategirder .rightFloat").show();
            });
            $(".editBoxcolumn .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBoxcolumn .rightFloat").hide();
            });
            $(".editBoxcolumn .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBoxcolumn .rightFloat").show();
            });
            $(".editBuiltup2 .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBuiltup2 .rightFloat").hide();
            });
            $(".editBuiltup2 .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBuiltup2 .rightFloat").show();
            });
            $(".editBuiltup3 .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBuiltup3 .rightFloat").hide();
            });
            $(".editBuiltup3 .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBuiltup3 .rightFloat").show();
            });
            $(".editBuiltup4 .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBuiltup4 .rightFloat").hide();
            });
            $(".editBuiltup4 .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBuiltup4 .rightFloat").show();
            });
			$(".editBuiltup4 .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBuiltup4 .rightFloat").hide();
            });
            $(".editBuiltup4 .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBuiltup4 .rightFloat").show();
            });
			
			$(".editinfill.right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editinfill .rightFloat").hide();
            });
            $(".editinfill .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editinfill .rightFloat").show();
            });

            // Edit FM -column
            $(".ecsplice1").hide();
            $(".ecsplice2").hide();
            $(function(){
                $("#ecsplicecount").change( function(){
                    if($('#ecsplicecount').val()=='ecsc0'){
                        $(".ecsplice1").hide();
                        $(".ecsplice2").hide();
                    }
                    else if($('#ecsplicecount').val()=='ecsc1'){
                        $(".ecsplice1").show();
                        $(".ecsplice2").hide();
                    }
                    else if ($('#ecsplicecount').val()=='ecsc2'){
                        $(".ecsplice1").show();
                        $(".ecsplice2").show();
                    }
                });
            });           

            // splice count -columnmodal
            $(".splice1").hide();
            $(".splice2").hide();
            $(function(){
                $("#splicecount").change( function(){
                    if($('#splicecount').val()=='sc0'){
                        $(".splice1").hide();
                        $(".splice2").hide();
                    }
                    else if($('#splicecount').val()=='sc1'){
                        $(".splice1").show();
                        $(".splice2").hide();
                    }
                    else if ($('#splicecount').val()=='sc2'){
                        $(".splice1").show();
                        $(".splice2").show();
                    }
                });
            });
			// splice count -built-up1 modal
			$(".b1splice1").hide();
            $(".b1splice2").hide();
            $(function(){
                $("#b1splicecount").change( function(){
                    if($('#b1splicecount').val()=='b1sc0'){
                        $(".b1splice1").hide();
                        $(".b1splice2").hide();
                    }
                    else if($('#b1splicecount').val()=='b1sc1'){
                        $(".b1splice1").show();
                        $(".b1splice2").hide();
                    }
                    else if ($('#b1splicecount').val()=='b1sc2'){
                        $(".b1splice1").show();
                        $(".b1splice2").show();
                    }
                });
            });
			
			// splice count -built-up2 modal
            $(".boxsplice1").hide();
            $(".boxsplice2").hide();
            $(function(){
                $("#boxsplicecount").change( function(){
                    if($('#boxsplicecount').val()=='box0'){
                        $(".boxsplice1").hide();
                        $(".boxsplice2").hide();
                    }
                    else if($('#boxsplicecount').val()=='box1'){
                        $(".boxsplice1").show();
                        $(".boxsplice2").hide();
                    }
                    else if ($('#boxsplicecount').val()=='box2'){
                        $(".boxsplice1").show();
                        $(".boxsplice2").show();
                    }
                });
            });

            // splice count - built-up3 modal
            $(function(){
                $("#b3splicecount").change( function(){
                    if($('#b3splicecount').val()=='b3sc0'){
                        $(".b3splice1").hide();
                        $(".b3splice2").hide();
                    }
                    else if($('#b3splicecount').val()=='b3sc1'){
                        $(".b3splice1").show();
                        $(".b3splice2").hide();
                    }
                    else if ($('#b3splicecount').val()=='b3sc2'){
                        $(".b3splice1").show();
                        $(".b3splice2").show();
                    }
                });
            });
             // splice count - boxmodal
            $("#boxProfile1").hide();
            $(".c4boxsplice2").hide();
            $("#boxProfile2").hide();
            $(".c4boxsplice1").hide();
            $(function(){
                $("#c4boxsplicecount").change( function(){
                    if($('#c4boxsplicecount').val()=='c4box0'){
                        $(".c4boxsplice1").hide();
                        $("#boxProfile1").hide();
                        $(".c4boxsplice2").hide();
                        $("#boxProfile2").hide();
                        $("#Boxdiag2").hide();

                    }
                    else if($('#c4boxsplicecount').val()=='c4box1'){
                        $(".c4boxsplice1").show();
                        $("#boxProfile1").show();
                        $(".c4boxsplice2").hide();
                        $("#boxProfile2").hide();
                        $("#Boxdiag2").show();
                    }
                    else if ($('#c4boxsplicecount').val()=='c4box2'){
                        $(".c4boxsplice1").show();
                        $("#boxProfile1").show();
                        $(".c4boxsplice2").show();
                        $("#boxProfile2").show();
                        $("#Boxdiag2").show();
                    }
                });
            });
            // splice count - editBoxmodal
            
            $(function(){
                $("#ec4boxsplicecount").change( function(){
                    if($('#ec4boxsplicecount').val()=='ec4box0'){
                        $(".ec4boxsplice1").hide();
                        $("#eboxProfile1").hide();
                        
                        $(".ec4boxsplice2").hide();
                        $("#eboxProfile2").hide();
                        $("#eBdiag2").hide();
                    }
                    else if($('#ec4boxsplicecount').val()=='ec4box1'){
                        $(".ec4boxsplice1").show();
                        $("#eboxProfile1").show();
                        $(".ec4boxsplice2").hide();
                        $("#eboxProfile2").hide();
                        $("#eBdiag2").show();
                    }
                    else if ($('#ec4boxsplicecount').val()=='ec4box2'){
                        $(".ec4boxsplice1").show();
                        $("#eboxProfile1").show();
                        $(".ec4boxsplice2").show();
                        $("#eboxProfile2").show();
                        $("#eBdiag2").show();
                    }
                });
            });
            // splice count -editBuiltup2(I) modal
            $(".isplice1").hide();
            $(".isplice2").hide();
            $(function(){
                $("#isplicecount").change( function(){
                    if($('#isplicecount').val()=='i0'){
                        $(".isplice1").hide();
                        $(".isplice2").hide();
                    }
                    else if($('#isplicecount').val()=='i1'){
                        $(".isplice1").show();
                        $(".isplice2").hide();
                    }
                    else if ($('#isplicecount').val()=='i2'){
                        $(".isplice1").show();
                        $(".isplice2").show();
                    }
                });
            });
            // splice count -editBuiltup3(X) modal
            $(".sXsplice1").hide();
            $(".sXsplice2").hide();
            $(function(){
                $("#cXsplicecount").change( function(){
                    if($('#cXsplicecount').val()=='sX0'){
                        $(".sXsplice1").hide();
                        $(".sXsplice2").hide();
                    }
                    else if($('#cXsplicecount').val()=='sX1'){
                        $(".sXsplice1").show();
                        $(".sXsplice2").hide();
                    }
                    else if ($('#cXsplicecount').val()=='sX2'){
                        $(".sXsplice1").show();
                        $(".sXsplice2").show();
                    }
                });
            });
            // splice count -editBuiltup4(Channel) modal
            $(function(){
                $("#chsplicecount").change( function(){
                    if($('#chsplicecount').val()=='ch0'){
                        $(".chsplice1").hide();
                        $(".chsplice2").hide();
                    }
                    else if($('#chsplicecount').val()=='ch1'){
                        $(".chsplice1").show();
                        $(".chsplice2").hide();
                    }
                    else if ($('#chsplicecount').val()=='ch2'){
                        $(".chsplice1").show();
                        $(".chsplice2").show();
                    }
                });
            });
            // splice count - editcolumn
            $(function(){
                $("#esplicecount").change( function(){
                    if($('#esplicecount').val()=='esc0'){
                        $(".esplice1").hide();
                        $(".esplice2").hide();
                    }
                    else if($('#esplicecount').val()=='esc1'){
                        $(".esplice1").show();
                        $(".esplice2").hide();
                    }
                    else if ($('#esplicecount').val()=='esc2'){
                        $(".esplice1").show();
                        $(".esplice2").show();
                    }
                });
            });
            //PourStop Material
            $(".showBent").hide();
            $(function(){
                $("#psMaterial").change( function(){
                    if($('#psMaterial').val()=='valA'){
                        $(".showAngle").show();
                        $(".showBent").hide();
                    }
                    else if ($('#psMaterial').val()=='valB'){
                        $(".showAngle").hide();
                        $(".showBent").show();
                    }
                });
            });
            //editPourStop Material
            $(".eshowBent").hide();
            $(function(){
                $("#epsMaterial").change( function(){
                    if($('#epsMaterial').val()=='evalA'){
                        $(".eshowAngle").show();
                        $(".eshowBent").hide();
                    }
                    else if ($('#epsMaterial').val()=='evalB'){
                        $(".eshowAngle").hide();
                        $(".eshowBent").show();
                    }
                });
            });

			// splice count pit
            $(".pitXsplice1").hide();
            $(".pitXsplice2").hide();
            $(function(){
                $("#pitsplicecount").change( function(){
                    if($('#pitsplicecount').val()=='pitX0'){
                        $(".pitXsplice1").hide();
                        $(".pitXsplice2").hide();
                    }
                    else if($('#pitsplicecount').val()=='pitX1'){
                        $(".pitXsplice1").show();
                        $(".pitXsplice2").hide();
                    }
                    else if ($('#pitsplicecount').val()=='pitX2'){
                        $(".pitXsplice1").show();
                        $(".pitXsplice2").show();
                    }
                });
            });
			
            $(".tpitXsplice1").hide();
            $(".tpitXsplice2").hide();
            $(function(){
                $("#tpitsplicecount").change( function(){
                    if($('#tpitsplicecount').val()=='tpitX0'){
                        $(".tpitXsplice1").hide();
                        $(".tpitXsplice2").hide();
                    }
                    else if($('#tpitsplicecount').val()=='tpitX1'){
                        $(".tpitXsplice1").show();
                        $(".tpitXsplice2").hide();
                    }
                    else if ($('#tpitsplicecount').val()=='tpitX2'){
                        $(".tpitXsplice1").show();
                        $(".tpitXsplice2").show();
                    }
                });
            });
            // Spacing b/w Verticals Pitched-Trusses
            $(".pshowtv1").hide();
            $(".pshowtv2").hide();
            $(function(){
                $("#pt1verticals").change( function(){
                    if($('#pt1verticals').val()=='ptES'){
                        $(".pshowtv1").hide();
                        $(".pshowtv2").hide();
                    }
                    else if($('#pt1verticals').val()=='ptUE'){
                        $(".pshowtv1").show();
                        $(".pshowtv2").hide();
                    }
                });
            });
            $(function(){
                $("#pverticalnum").change( function(){
                    if($('#pverticalnum').val()=='ptv1'){
                        $(".pshowtv1").show();
                        $(".pshowtv2").hide();
                    }
                    else if($('#pverticalnum').val()=='ptv2'){
                        $(".pshowtv1").show();
                        $(".pshowtv2").show();
                    }
                });
            });
			// splice count tra
            $(".traXsplice1").hide();
            $(".traXsplice2").hide();
            $(function(){
                $("#tracXsplicecount").change( function(){
                    if($('#tracXsplicecount').val()=='traX0'){
                        $(".traXsplice1").hide();
                        $(".traXsplice2").hide();
                    }
                    else if($('#tracXsplicecount').val()=='traX1'){
                        $(".traXsplice1").show();
                        $(".traXsplice2").hide();
                    }
                    else if ($('#tracXsplicecount').val()=='traX2'){
                        $(".traXsplice1").show();
                        $(".traXsplice2").show();
                    }
                });
            });
            //Trapizol Spacing b/w Verticals
            $(".t2trashowtv1").hide();
            $(".t2trashowtv2").hide();
            $(function(){
                $("#tra1verticals").change( function(){
                    if($('#tra1verticals').val()=='tra2ES'){
                        $(".trashowtv1").hide();
                        $(".trashowtv2").hide();
                    }
                    else if($('#tra1verticals').val()=='tra2UE'){
                        $(".trashowtv1").show();
                        $(".trashowtv2").hide();
                    }
                });
            });
            $(function(){
                $("#t2verticalnumt1").change( function(){
                    if($('#t2verticalnumt1').val()=='t2tratv1'){
                        $(".t2trashowtv1").show();
                        $(".t2trashowtv2").hide();
                    }
                    else if($('#t2verticalnumt1').val()=='t2tratv2'){
                        $(".t2trashowtv1").show();
                        $(".t2trashowtv2").show();
                    }
                });
            });
			// splice count infill
            $(".infillXsplice1").hide();
            $(".infillXsplice2").hide();
            $(function(){
                $("#infillcXsplicecount").change( function(){
                    if($('#infillcXsplicecount').val()=='infillX0'){
                        $(".sXsplice1").hide();
                        $(".sXsplice2").hide();
                    }
                    else if($('#infillcXsplicecount').val()=='infillX1'){
                        $(".infillXsplice1").show();
                        $(".infillXsplice2").hide();
                    }
                    else if ($('#tracXsplicecount').val()=='infillX2'){
                        $(".infillXsplice1").show();
                        $(".infillXsplice2").show();
                    }
                });
            });
            // splice count Trusses1
            $(".chordXsplice1").hide();
            $(".chordXsplice2").hide();
            $(function(){
                $("#chordcXsplicecount").change( function(){
                    if($('#chordcXsplicecount').val()=='chordX0'){
                        $(".chordXsplice1").hide();
                        $(".chordXsplice2").hide();
                    }
                    else if($('#chordcXsplicecount').val()=='chordX1'){
                        $(".chordXsplice1").show();
                        $(".chordXsplice2").hide();
                    }
                    else if ($('#chordcXsplicecount').val()=='chordX2'){
                        $(".chordXsplice1").show();
                        $(".chordXsplice2").show();
                    }
                });
            });
            // Spacing b/w Verticals Trusses1
            $(".showtv1").hide();
            $(".showtv2").hide();
            $(function(){
                $("#t1verticals").change( function(){
                    if($('#t1verticals').val()=='t1ES'){
                        $(".showtv1").hide();
                        $(".showtv2").hide();
                    }
                    else if($('#t1verticals').val()=='t1UE'){
                        $(".showtv1").show();
                        $(".showtv2").hide();
                    }
                });
            });
            $(function(){
                $("#verticalnumt1").change( function(){
                    if($('#verticalnumt1').val()=='tv1'){
                        $(".showtv1").show();
                        $(".showtv2").hide();
                    }
                    else if($('#verticalnumt1').val()=='tv2'){
                        $(".showtv1").show();
                        $(".showtv2").show();
                    }
                });
            });
         // infill position
            $(".inXsplice2").hide();
            $(function(){
                $("#incXsplicecount").change( function(){
                    if($('#incXsplicecount').val()=='inX1'){
                        $(".inXsplice1").show();
                        $(".inXsplice2").hide();
                    }
                    else if ($('#incXsplicecount').val()=='inX2'){
                        $(".inXsplice1").show();
                        $(".inXsplice2").show();
                    }
                });
            });
			
			//Infill position
         $(function(){
            $("#ESConnectiontype").change(function(){
                if($('#ESConnectiontype').val()=='ES'){
                     $(".fieldsFW").show();
                     $(".fieldsFB").hide();
                     $(".inXsplice1").hide();
                     $(".inXsplice2").hide();
                }
                else if($('#ESConnectiontype').val()=='UES'){
                    $(".fieldsFW").hide();
                    $(".fieldsFB").show();
                    $(".inXsplice1").show();
                }
                
            });
        });

         //editPourStop Weld/Bolt details
        $(".eshowpsbolt").hide();
            $(function(){
                $("#epousrstopWB").change( function(){
                    if($('#epousrstopWB').val()=='epsWelded'){
                        $(".eshowpsweld").show();
                        $(".eshowpsbolt").hide();
                    }
                    else if($('#epousrstopWB').val()=='epsBolted'){
                        $(".eshowpsbolt").show();
                        $(".eshowpsweld").hide();
                    }
                });
            });
            $(function(){
            $("#epsWeldtype").change(function(){
                if($('#epsWeldtype').val()=='eweldtype1'){
                     $(".ehidewt2").show();
                }
                else 
                    $(".ehidewt2").hide();
                    
            });
        });

        //PourStop Weld/Bolt details
        $(".showpsbolt").hide();
            $(function(){
                $("#pousrstopWB").change( function(){
                    if($('#pousrstopWB').val()=='psWelded'){
                        $(".showpsweld").show();
                        $(".showpsbolt").hide();
                    }
                    else if($('#pousrstopWB').val()=='psBolted'){
                        $(".showpsbolt").show();
                        $(".showpsweld").hide();
                    }
                });
            });

        $(function(){
            $("#psWeldtype").change(function(){
                if($('#psWeldtype').val()=='weldtype1'){
                     $(".hidewt2").show();
                }
                else 
                    $(".hidewt2").hide();
                    
            });
        });
		
		
		
		
		
		
		
		
		
		
		
		
            // Connection details - Pitched Models
			$(".pshape2").hide();
			$(".pshape3").hide();
			$(".pshape4").hide();
			$(".pshape5").hide();
			$(".pshape6").hide();
            $(function(){
                $("#pshapes").change(function(){
                    if($('#pbshapes').val()=='pfs'){
                        $(".pshape1").show();
                        $(".pshape2").hide();
                        $(".pshape3").hide();
                        $(".pshape4").hide();
                        $(".pshape5").hide();
                        $(".pshape6").hide();
                        
                    }
                    else if($('#pshapes').val()=='pbs'){
                        $(".pshape1").hide();
                        $(".pshape2").show();
                        $(".pshape3").hide();
                        $(".pshape4").hide();
                        $(".pshape5").hide();
                        $(".pshape6").hide();
                    }
                    else if($('#pshapes').val()=='pas'){
                        $(".pshape1").hide();
                        $(".pshape2").hide();
                        $(".pshape3").show();
                        $(".pshape4").hide();
                        $(".pshape5").hide();
                        $(".pshape6").hide();
                    }
                    else if($('#pshapes').val()=='pvs'){
                        $(".pshape1").hide();
                        $(".pshape2").hide();
                        $(".pshape3").hide();
                        $(".pshape4").show();
                        $(".pshape5").hide();
                        $(".pshape6").hide();
                    }
                    else if($('#pshapes').val()=='pxs'){
                        $(".pshape1").hide();
                        $(".pshape2").hide();
                        $(".pshape3").hide();
                        $(".pshape4").hide();
                        $(".pshape5").show();
                        $(".pshape6").hide();
                    }
                    else if($('#pshapes').val()=='pws'){
                        $(".pshape1").hide();
                        $(".pshape2").hide();
                        $(".pshape3").hide();
                        $(".pshape4").hide();
                        $(".pshape5").hide();
                        $(".pshape6").show();
                    }
                    
                });
            });
			
			
			
			
			
			
			
			 // Connection details - trapezoidal Models
			$(".trashape2").hide();
			$(".trashape3").hide();
			$(".trashape4").hide();
			$(".trashape5").hide();
			$(".trashape6").hide();
            $(function(){
                $("#trashapes").change(function(){
                    if($('#pbshapes').val()=='trafs'){
                        $(".trashape1").show();
                        $(".trashape2").hide();
                        $(".trashape3").hide();
                        $(".trashape4").hide();
                        $(".trashape5").hide();
                        $(".trashape6").hide();
                        
                    }
                    else if($('#trashapes').val()=='trabs'){
                        $(".trashape1").hide();
                        $(".trashape2").show();
                        $(".trashape3").hide();
                        $(".trashape4").hide();
                        $(".trashape5").hide();
                        $(".trashape6").hide();
                    }
                    else if($('#trashapes').val()=='traas'){
                        $(".trashape1").hide();
                        $(".trashape2").hide();
                        $(".trashape3").show();
                        $(".trashape4").hide();
                        $(".trashape5").hide();
                        $(".trashape6").hide();
                    }
                    else if($('#trashapes').val()=='travs'){
                        $(".trashape1").hide();
                        $(".trashape2").hide();
                        $(".trashape3").hide();
                        $(".trashape4").show();
                        $(".trashape5").hide();
                        $(".trashape6").hide();
                    }
                    else if($('#trashapes').val()=='traxs'){
                        $(".trashape1").hide();
                        $(".trashape2").hide();
                        $(".trashape3").hide();
                        $(".trashape4").hide();
                        $(".trashape5").show();
                        $(".trashape6").hide();
                    }
                    else if($('#trashapes').val()=='traws'){
                        $(".trashape1").hide();
                        $(".trashape2").hide();
                        $(".trashape3").hide();
                        $(".trashape4").hide();
                        $(".trashape5").hide();
                        $(".trashape6").show();
                    }
                    
                });
            });
			
			
           
        
		
			
            // Connection details - Hbrace
            $(function(){
                $("#hbshapes").change( function(){
                    if($('#hbshapes').val()=='hfs'){
                        $(".Hshape1").show();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                        
                    }
                    else if($('#hbshapes').val()=='hbs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").show();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#hbshapes').val()=='has'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").show();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#hbshapes').val()=='hvs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").show();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#hbshapes').val()=='hxs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").show();
                        $(".Hshape6").hide();
                    }
                    else if($('#hbshapes').val()=='hws'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").show();
                    }
                    
                });
            });

            $(function(){
                $("#ehbshapes").change( function(){
                    if($('#ehbshapes').val()=='ehfs'){
                        $(".Hshape1").show();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                        
                    }
                    else if($('#ehbshapes').val()=='ehbs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").show();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#ehbshapes').val()=='ehas'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").show();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#ehbshapes').val()=='ehvs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").show();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#ehbshapes').val()=='ehxs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").show();
                        $(".Hshape6").hide();
                    }
                    else if($('#ehbshapes').val()=='ehws'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").show();
                    }
                    
                });
            });

            // Connection details - Vbrace
			$(".Vshape2").hide();
			$(".Vshape3").hide();
			$(".Vshape4").hide();
			$(".Vshape5").hide();
			$(".Vshape6").hide();
            $(function(){
                $("#vbshapes").change(function(){
                    if($('#vbshapes').val()=='vfs'){
                        $(".Vshape1").show();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                        
                    }
                    else if($('#vbshapes').val()=='vbs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").show();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#vbshapes').val()=='vas'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").show();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#vbshapes').val()=='vvs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").show();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#vbshapes').val()=='vxs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").show();
                        $(".Vshape6").hide();
                    }
                    else if($('#vbshapes').val()=='vws'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").show();
                    }
                    
                });
            });
            $(function(){
                $("#evbshapes").change(function(){
                    if($('#evbshapes').val()=='evfs'){
                        $(".Vshape1").show();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                        
                    }
                    else if($('#evbshapes').val()=='evbs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").show();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#evbshapes').val()=='evas'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").show();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#evbshapes').val()=='evvs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").show();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#evbshapes').val()=='evxs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").show();
                        $(".Vshape6").hide();
                    }
                    else if($('#evbshapes').val()=='evws'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").show();
                    }
                    
                });
            });
        });
		
		
		
		
		


function showContent(selectObject) {
    // selectObject is a select element which is passed by using "this" argument
    // didn't check for value or object, so it is not flexible
    var selectedIndex = selectObject.selectedIndex;
    var tmpElem
    // skip the 0 index because it has no associated block to display
    for (var i=1; i<selectObject.options.length; i++) {
      tmpElem = document.getElementById(selectObject.options[i].value);
      if (i==selectedIndex) {  // show the element
        tmpElem.className = tmpElem.className.replace("hideContent", "showContent")
      }
      else {  // hide it
        tmpElem.className = tmpElem.className.replace("showContent", "hideContent")
      }
    }
  }


    