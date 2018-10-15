

function point(){
    this.x=0;
    this.y=0;
    this.z=0;
}

// Commmon Member Properties
function memberProperties()
{
    this.startPoint =new point();
    this.endPoint =new point();
    this.profile="";
    this.orientation="";
    this.materialGrade="";
    this.memberType=""
    this.memberSubType="";
    this.dataSource="";
    this.referenceDrawing = [];

    this.startPoint_in = new point();
    this.endPoint_in = new point();

}
//Common Finish Properties
function finishProperties(){

    this.surfacePreparation="";
    this.primerName="";
    this.primerCoats="";

    this.paintType="";

    this.paintName="";
    this.paintCoats="";
    this.galvZincCoatThickness="";
    this.fireProofType="";
    this.fireRating="";
    this.aessCat="";
}
//Common Connection Properties
function connectionProperties(){
    
}

function spliceProperties() {
    this.sign = "-";
    this.elevation_ft = "";
    this.elevation_in = "";
    this.elevation_fr = "";
    this.profile = "";
}

function columnMember(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    // Properties of column
    this.baseElevation_sign="";
    this.baseElevation_ft="";
    this.baseElevation_in="";
    this.baseElevation_fr="";

    this.topElevation_sign="";
    this.topElevation_ft="";
    this.topElevation_in="";
    this.topElevation_fr="";

    this.isDoublerPlateRequired="";
    this.plateGrade="";
    this.plateThickness="";
    this.count="";
    this.plateLength_ft="";
    this.plateLength_in="";
    this.plateLength_fr="";
    this.plateWidth_ft="";
    this.plateWidth_in="";
    this.plateWidth_fr="";
    this.plateWeldType="";
    this.plateWeldSize_in="";

    this.floor = 0;
    this.x_depth = 0;
    this.y_depth = 0;
}


function PostColumn(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of post
    this.baseElevation_sign="";
    this.baseElevation_ft="";
    this.baseElevation_in="";
    this.baseElevation_fr="";
    this.floor = 0;

    this.topElevation_sign="";
    this.topElevation_ft="";
    this.topElevation_in="";
    this.topElevation_fr="";

    this.loc_X="";
    this.loc_Y="";
    this.xDirection_sign="";
    this.xDirection_ft="";
    this.xDirection_in="";
    this.xDirection_fr="";

    this.yDirection_sign="";
    this.yDirection_ft="";
    this.yDirection_in="";
    this.yDirection_fr="";

    
}

function BoxColumn(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    // Properties of boxColumn

    this.floor = 0;
    this.x_depth = 0;
    this.y_depth = 0;
}

function iBoxColumn(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    // Properties of boxColumn

    this.floor = 0;
    this.x_depth = 0;
    this.y_depth = 0;
}

function builtUpI(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of built UP I
    this.floor = 0;
    this.x_depth = 0;
    this.y_depth = 0;
}

function builtUpCR(){
    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of built UP CR
    this.floor = 0;
    this.x_depth = 0;
    this.y_depth = 0;

}

function builtUpCH(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of built UP CH
    this.floor = 0;
    this.x_depth = 0;
    this.y_depth = 0;
}


function beamMember(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of Beam
    this.tos_ft=0;
    this.tos_in="";
    this.tos_fr="";
    this.ffl_ft="";
    this.ffl_in="";
    this.ffl_fr="";

    this.tos_ft1 = 0;
    this.tos_ft2 = 0;

    this.left_x = 0;
    this.left_y = 0;
    this.right_x = 0;
    this.right_y = 0;
    this.camberRequired="";
    this.camber_in="";
    this.isshearStudRequired="";
    this.shearStudDia_in="";
    this.shearStudLength_in="";
    this.shearStudCount="";
    this.isStiffenerRequired="";
    this.stiffPlateGrade="";
    this.stiffPlateThick_in="";
    this.stiffPlateCount="";
    this.stiffWeldType="";
    this.stiffWeldSize="";
    this.frameNO="";
    this.frameConnectionMethod="";

    this.name   = "";
    this.type   = "";
    this.id     = "";
}

function ibeam(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of Beam
    this.direction = "";
    this.tos_ft="";
    this.tos_in="";
    this.tos_fr="";
    this.ffl_ft="";
    this.ffl_in="";
    this.ffl_fr="";

    this.tos_ft1 = 0;
    this.tos_ft2 = 0;

    this.left_x = 0;
    this.left_y = 0;
    this.right_x = 0;
    this.right_y = 0;
    this.camberRequired="";
    this.camber_in="";
    this.isshearStudRequired="";
    this.shearStudDia_in="";
    this.shearStudLength_in="";
    this.shearStudCount="";
    this.isStiffenerRequired="";
    this.stiffPlateGrade="";
    this.stiffPlateThick_in="";
    this.stiffPlateCount="";
    this.stiffWeldType="";
    this.stiffWeldSize="";
    this.frameNO="";
    this.frameConnectionMethod="";

    this.name   = "";
    this.type   = "";
    this.id     = "";
}

function cbeam(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of Beam
    this.tos_ft="";
    this.tos_in="";
    this.tos_fr="";
    this.ffl_ft="";
    this.ffl_in="";
    this.ffl_fr="";
    this.camberRequired="";
    this.camber_in="";
    this.isshearStudRequired="";
    this.shearStudDia_in="";
    this.shearStudLength_in="";
    this.shearStudCount="";
    this.isStiffenerRequired="";
    this.stiffPlateGrade="";
    this.stiffPlateThick_in="";
    this.stiffPlateCount="";
    this.stiffWeldType="";
    this.stiffWeldSize="";
    this.frameNO="";
    this.frameConnectionMethod="";

    this.name   = "";
    this.type   = "";
    this.id     = "";

    this.floor = 0;
    this.x_depth = 0;
    this.y_depth = 0;
}

function plateGirder(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of plate girder
    
    this.tos_ft1 = 0;
    this.tos_ft2 = 0;

    this.left_x = 0;
    this.left_y = 0;
    this.right_x = 0;
    this.right_y = 0;
}

function cantileverBeam(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of plate girder
    this.camber="";
    this.weldType_topFlange="";
    this.weldSize_topFlange="";
    this.weldType_bottomFlange="";
    this.weldSize_bottomFlange="";

    this.tos_ft="";
    this.tos_in="";
    this.tos_fr="";
    this.ffl_ft="";
    this.ffl_in="";
    this.ffl_fr="";

    this.isshearStudRequired="";
    this.shearStudDia_in="";
    this.shearStudLength_in="";
    this.shearStudCount="";
}

function index() 
{
    this.x_index = 0;
    this.y_index = 0;
    this.z_index = 0;
}

function HBrace(){
    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    this.startIndex = new index();
    this.name = "";

    //Properties of Horizontal Brace
    this.braceShape="";
    this.Loc_sign="";
    this.Loc_ft="";
    this.Loc_in="";
    this.Loc_fr="";

    this.floor  = "";
    this.type   = "";
    this.mode   = "";
    this.color  = "";
    this.id     = "";

    this.shapeIndex = 0;

    this.shapePoint = [];
}

function VBrace()
{
    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    //Properties of vertical Brace
    this.braceShape="";

    this.plan       = "";
    this.floor      = "";
    this.startIndex = new index();

    this.type   = "";
    this.mode   = "";
    this.color  = "";
    this.id     = "";

    this.elevEnabled = 1;

    this.shapePoint = [];
}

function topchord()
{
    this.profile = "";
    this.orientation = "";
    this.materialgrade = "";
}

function bottomchord()
{
    this.profile = "";
    this.orientation = "";
    this.materialGrade = "";
}

function Truss(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();
    this.topchord = new topchord();
    this.bottomchord = new bottomchord();
    
    this.plan       = "";
    this.floor      = "";
    this.startIndex = new index();

    this.type   = "";
    this.mode   = "";
    this.color  = "";
    this.id     = "";

    //Properties of truss

    this.topChordProfile="";
    this.topChordOrientation="";
    this.topChordGrade="";
    this.topChordCamber="";

    this.bottomChordProfile="";
    this.bottomChordOrientation="";
    this.bottomChordGrade="";
    this.bottomChordCamber="";

    this.height_left_ft="";
    this.height_left_in="";
    this.height_left_fr="";

    this.height_right_ft="";
    this.height_right_in="";
    this.height_right_fr="";

    this.height_ridge_ft="";
    this.height_ridge_in="";
    this.height_ridge_fr="";

    this.length_ft="";
    this.length_in="";
    this.length_fr="";

    this.slopingChord="";

    this.trussSpliceCount = "";

    this.splice_left_ft="";
    this.splice_left_in="";
    this.splice_left_fr="";
    this.splice2_left_ft="";
    this.splice2_left_in="";
    this.splice2_left_fr="";

    this.verticalMemProfile="";
    this.verticalMemOrientation="";
    this.verticalMemGrade="";
    this.VerticalSpacing="";
    this.VerticalCount="";
    this.spacing1_left_ft="";
    this.spacing1_left_in="";
    this.spacing1_left_fr="";
    this.spacing2_left_ft="";
    this.spacing2_left_in="";
    this.spacing2_left_fr="";

    this.lacingProfile="";
    this.lacingOrientation="";
    this.lacingGrade="";
    this.lacingPattern="";

    this.isLacingNotConnected="";
    this.connected_ft="";
    this.connected_in="";
    this.connected_fr="";
    this.traceCamber = "";
    this.pezCamber = "";
    this.traCamber1 = "";
    this.pezCamber = "";

    this.elevEnabled = 1;

    this.inclineNum = 4;
}

function paraTrussMember(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    this.topchord = new topchord();
    this.bottomchord = new bottomchord();

    this.plan       = "";
    this.floor      = "";
    this.startIndex = new index();

    this.type   = "";
    this.mode   = "";
    this.color  = "";
    this.id     = "";

    //Properties of truss

    this.topChordProfile="";
    this.topChordOrientation="";
    this.topChordGrade="";
    this.topChordCamber="";

    this.bottomChordProfile="";
    this.bottomChordOrientation="";
    this.bottomChordGrade="";
    this.bottomChordCamber="";

    this.height_left_ft="";
    this.height_left_in="";
    this.height_left_fr="";

    this.height_right_ft="";
    this.height_right_in="";
    this.height_right_fr="";

    this.height_ridge_ft="";
    this.height_ridge_in="";
    this.height_ridge_fr="";

    this.length_ft="";
    this.length_in="";
    this.length_fr="";

    this.slopingChord="";

    this.trussSpliceCount = "";

    this.splice_left_ft="";
    this.splice_left_in="";
    this.splice_left_fr="";
    this.splice2_left_ft="";
    this.splice2_left_in="";
    this.splice2_left_fr="";

    this.verticalMemProfile="";
    this.verticalMemOrientation="";
    this.verticalMemGrade="";
    this.VerticalSpacing="";
    this.VerticalCount="";
    this.spacing1_left_ft="";
    this.spacing1_left_in="";
    this.spacing1_left_fr="";
    this.spacing2_left_ft="";
    this.spacing2_left_in="";
    this.spacing2_left_fr="";

    this.lacingProfile="";
    this.lacingOrientation="";
    this.lacingGrade="";
    this.lacingPattern="";

    this.isLacingNotConnected="";
    this.connected_ft="";
    this.connected_in="";
    this.connected_fr="";
    this.traceCamber = "";
    this.pezCamber = "";
    this.traCamber1 = "";
    this.pezCamber = "";

    this.elevEnabled = 1;

    this.inclineNum = 4;

    this.shapePoint = [];
}

function trapeTrussMember(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();
    this.connectionProperties=new connectionProperties();

    this.topchord = new topchord();
    this.bottomchord = new bottomchord();

    this.plan       = "";
    this.floor      = "";
    this.startIndex = new index();

    this.type   = "";
    this.mode   = "";
    this.color  = "";
    this.id     = "";

    //Properties of truss

    this.topChordProfile="";
    this.topChordOrientation="";
    this.topChordGrade="";
    this.topChordCamber="";

    this.bottomChordProfile="";
    this.bottomChordOrientation="";
    this.bottomChordGrade="";
    this.bottomChordCamber="";

    this.height_left_ft="";
    this.height_left_in="";
    this.height_left_fr="";

    this.height_right_ft="";
    this.height_right_in="";
    this.height_right_fr="";

    this.height_ridge_ft="";
    this.height_ridge_in="";
    this.height_ridge_fr="";

    this.length_ft="";
    this.length_in="";
    this.length_fr="";

    this.slopingChord="";

    this.trussSpliceCount = "";

    this.splice_left_ft="";
    this.splice_left_in="";
    this.splice_left_fr="";
    this.splice2_left_ft="";
    this.splice2_left_in="";
    this.splice2_left_fr="";

    this.verticalMemProfile="";
    this.verticalMemOrientation="";
    this.verticalMemGrade="";
    this.VerticalSpacing="";
    this.VerticalCount="";
    this.spacing1_left_ft="";
    this.spacing1_left_in="";
    this.spacing1_left_fr="";
    this.spacing2_left_ft="";
    this.spacing2_left_in="";
    this.spacing2_left_fr="";

    this.lacingProfile="";
    this.lacingOrientation="";
    this.lacingGrade="";
    this.lacingPattern="";

    this.isLacingNotConnected="";
    this.connected_ft="";
    this.connected_in="";
    this.connected_fr="";
    this.traceCamber = "";
    this.pezCamber = "";
    this.traCamber1 = "";
    this.pezCamber = "";

    this.elevEnabled = 1;

    this.inclineNum = 4;

    this.shapePoint = [];
}

function pourStop(){

    this.memberProperties =new memberProperties();
    this.finishProperties = new finishProperties();

    this.plan       = "";
    this.floor      = "";
    this.startIndex = new index();

    this.type   = "";
    this.mode   = "";
    this.color  = "";
    this.id     = "";

    //Properties of truss

    this.plateThick_in="";
    this.verticalLegLength_in="";
    this.verticalLegLength_fr="";
    this.EOS_ft="";
    this.EOS_in="";
    this.EOS_fr="";
    this.beamConnectionType="";
    this.overLapLength_in="";
    this.isShearStudAttached="";
    this.shearStudDia_in="";
    this.shearStudLength_in="";
    this.shearStudCount="";

    this.weldType="";
    this.weldSize="";
    this.weldLength_ft="";
    this.weldLength_in="";
    this.weldLength_fr="";
    this.pitch_ft="";
    this.pitch_in="";
    this.pitch_fr="";
    this.boltDia_in="";
    this.boltGrade="";
    this.boltSpacing_ft="";
    this.boltSpacing_in="";
    this.boltSpacing_fr="";

}









// var MemberInfo=[];

// MemberInfo.push(new column);

// MemberInfo.push(new post);
// MemberInfo.push(new boxColumn);
// MemberInfo.push(new builtUpI);
// MemberInfo.push(new builtUpCR);
// MemberInfo.push(new builtUpCH);
// MemberInfo.push(new beam);

// MemberInfo.push(new plateGirder);
// MemberInfo.push(new HBrace);
// MemberInfo.push(new VBrace);
// MemberInfo.push(new Truss);
// MemberInfo.push(new pourStop);

// console.log(JSON.stringify(MemberInfo));


