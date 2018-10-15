
$(".ShearPlate").hide();
$(".EndPlate").hide();   
$(function(){
    $("#cse").change( function(){
        if($('#cse').val()=='Single Clip Angle' || $('#cse').val()=='Double Angle'){ 
            $(".ClipAngle").show();
            $(".ShearPlate").hide();
            $(".EndPlate").hide();
        }
        else if($('#cse').val()=='Shear Plate'){  
            $(".ClipAngle").hide();
            $(".ShearPlate").show();
            $(".EndPlate").hide();
        } 
        else if($('#cse').val()=='End Plate'){  
            $(".ClipAngle").hide();
            $(".ShearPlate").hide();
            $(".EndPlate").show();
        }      
    });
});
$(function(){
    $("#2cse").change( function(){
        if($('#2cse').val()=='Single Clip Angle' || $('#cse').val()=='Double Angle'){ 
            $(".ClipAngle").show();
            $(".ShearPlate").hide();
            $(".EndPlate").hide();
        }
        else if($('#2cse').val()=='Shear Plate'){  
            $(".ClipAngle").hide();
            $(".ShearPlate").show();
            $(".EndPlate").hide();
        } 
        else if($('#2cse').val()=='End Plate'){  
            $(".ClipAngle").hide();
            $(".ShearPlate").hide();
            $(".EndPlate").show();
        }      
    });
});
// Single Angle connection
// Joint Type
$(".surface").hide();
$(function(){
    $("#jointType").change( function(){
        if($('#jointType').val()=='slipcritical'){ 
            $(".surface").show();
        }
        else {  
            $(".surface").hide();
        } 
       
    });
});
$(".boltpattern").hide();
$(function(){
    $("#support, #supported").change( function(){
        if($('#support').val()=='fb' && $('#supported').val()=='sb'){  
            $(".boltpattern").show();
        } 
        else{  
            $(".boltpattern").hide();
        }              
    });
});
$(".bolteccentricity").hide();
$(".boltdetailed").hide();
$(function(){
    $("#supported").change( function(){
        if($('#supported').val()=='sb'){  
            $(".bolteccentricity").show();
            $(".boltdetailed").show();
            $(".welddetailed").hide();
        } 
        else{  
            $(".bolteccentricity").hide();
            $(".boltdetailed").hide();
            $(".welddetailed").show();
        }              
    });
});
// Weld and Bolt Details - Support
$(".boltdetails").hide();
$(function(){
    $("#support").change( function(){
        if($('#support').val()=='fb'){  
            $(".boltdetails").show();
            $(".welddetails").hide();
        } 
        else if($('#support').val()=='fw'){  
           $(".boltdetails").hide();
           $(".welddetails").show();
        }              
    });
});

// Double Angle connection
// Joint Type
$(".dsurface").hide();
$(function(){
    $("#djointType").change( function(){
        if($('#djointType').val()=='dslipcritical'){ 
            $(".dsurface").show();
        }
        else {  
            $(".dsurface").hide();
        } 
       
    });
});
$(".dboltpattern").hide();
$(function(){
    $("#dsupport, #dsupported").change( function(){
        if($('#dsupport').val()=='dfb' && $('#dsupported').val()=='dsb'){  
            $(".dboltpattern").show();
        } 
        else{  
            $(".dboltpattern").hide();
        }              
    });
});
$(".dbolteccentricity").hide();
$(".dboltdetailed").hide();
$(function(){
    $("#dsupported").change( function(){
        if($('#dsupported').val()=='dsb'){  
            $(".dbolteccentricity").show();
            $(".dboltdetailed").show();
            $(".dwelddetailed").hide();
        } 
        else{  
            $(".dbolteccentricity").hide();
            $(".dboltdetailed").hide();
            $(".dwelddetailed").show();
        }              
    });
});
// Weld and Bolt Details - Support
$(".dboltdetails").hide();
$(function(){
    $("#dsupport").change( function(){
        if($('#dsupport').val()=='dfb'){  
            $(".dboltdetails").show();
            $(".dwelddetails").hide();
        } 
        else if($('#dsupport').val()=='dfw'){  
           $(".dboltdetails").hide();
           $(".dwelddetails").show();
        }              
    });
});
// SpliceConnection.html

$('.tab1HideAllDiv').hide();
$('#flangeweb').show();
$(function(){
    $("#connectiontype").change( function(){
        $('.tab1HideAllDiv').hide();
        if($('#connectiontype').val()=='Flange & Web Splice Plate'){ 
            $('#flangeweb').show();
         }
        else if($('#connectiontype').val()=='Flange Plate'){ 

            $('#flangeplate').show();
        }
        else if($('#connectiontype').val()=='Upper & Lower Shafts directly welded'){ 
            $('#upperlower').show();
        }
        else if($('#connectiontype').val()=='Butt Plate'){ 
            $('#buttplate').show();
        }
    });
});
$('.tab3HideAllDiv').hide();
$('#upperlowertab3').show();
$(function(){
    $("#connectiontypetab3").change( function(){
        $('.tab3HideAllDiv').hide();
        if($('#connectiontypetab3').val()=='Upper & Lower Shafts directly welded'){ 
            $('#upperlowertab3').show();
        }
        else if($('#connectiontypetab3').val()=='Butt Plate'){ 
            $('#buttplatetab3').show();
        }
    });
});
$('.tab4HideAllDiv').hide();
$('#flangewebtab4').show();
$(function(){
    $("#connectiontypetab4").change( function(){
        $('.tab4HideAllDiv').hide();
        if($('#connectiontypetab4').val()=='Flange & Web Splice Plate'){ 
            $('#flangewebtab4').show();
        }
        else if($('#connectiontypetab4').val()=='Web Splice Plate'){ 
            $('#websplicetab4').show();
        }
        else if($('#connectiontypetab4').val()=='Clip Angle'){ 
            $('#clipangletab4').show();
        }
    });
});


