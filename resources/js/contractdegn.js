$(document).ready(function(){

	//Checkbox Selection
	$("#checkAll").click(function() {
        $(this).closest("table").find("td input:checkbox").prop("checked", this.checked);
    });

    //Multi select dropdown
 /*   $(".chosen-select").chosen({
        no_results_text: "Oops, nothing found!"   
    });*/

    //Toggle Right edit bar
    /*$(".action-icons .edit").on('click', function(){
        $(".right").show();
        $(".left").hide();
        $(".memtype-rightedit").show();
		$(".editmemtype .rightFloat").show();
    });*/
	
	
	function validateLength(feet,inch,fraction,length)
    {
    	var valid = true;
    	if(feet == "0" && inch == "0" && fraction == "0")
    	{
    		valid = false;
        	$('#alert_model_placeholder').append
            ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i> ' + length + ' can not be zero' + 
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                    '</div>')         
             	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
                 	$("#alertdiv").remove();

             }, 10000);
   		}
    	
    	return valid;
    }
    
    function validateSize(inch,fraction,sizename)
    {
    	var valid = true;
    	if(inch == "0" && fraction == "0")
    	{
    		valid = false;
        	$('#alert_model_placeholder').append
            ('<div class="alert alert-danger" id="alertdiv2"> <i class="fa fa-exclamation-triangle"></i> ' + sizename + ' Size can not be zero' + 
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                    '</div>')         
             	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
                 	$("#alertdiv2").remove();

             }, 10000);
   		}
    	
    	return valid;        	
    }
	
    $(".slide-rightbar.right").on('click', function(){
        $(".right").hide();
        $(".left").show();
        $(".editmemtype .rightFloat").hide();
    });
    $(".slide-rightbar.left").on('click', function(){
        $(".right").show();
        $(".left").hide();
        $(".editmemtype .rightFloat").show();
    });
    $(".action-icons .add").on('click', function(){
        $(".right").show();
        $(".left").hide();
        $("#adddata").show();
        $("#update").hide();
        $(".memtype-rightedit").show();
        $(".editmemtype .rightFloat").show();
      
        
    });

    //Add Value
    $(".anv-btn").on('click', function(){
        $(".memtype-rightedit").show();
        $(".right").hide();
        $(".left").hide();
    });
    
    //Add row
    
   /* $(".addTR").on('click', function(){
        $(".add-new-value").hide();
        $(".memtype-table").show();
        $(".left").show();
        $(".editmemtype .rightFloat").hide();
    });
*/
    // note hover
    

    $(".noteHover").hover(function(){
    $('.showNote').show();
    },function(){
        $('.showNote').hide();
    });

    //Beam to Column - ClipAngle


    //Beam to Column - ShearPlate
  

    //Beam to Column - EndPlate
 

    //Beam to Beam - ClipAngle
    $("#btobClipAngleLength").hide();
    $(function(){
        $("#btobClip1, #btobClip2").change( function(){
            if($('#btobClip1').val()=='btobClip1fb' && $('#btobClip2').val()=='btobClip2sw'){ 
                $("#btobBoltDetails").show();
                $("#btobWeldDetails").show();
                $("#btobClipAngleLength").hide();
                // $('#' + $(this).val()).hide();
            }
            else if($('#btobClip1').val()=='btobClip1fb' && $('#btobClip2').val()=='btobClip2fw'){  
                $("#btobBoltDetails").show();
                $("#btobWeldDetails").show();
                $("#btobClipAngleLength").hide();
                // $('#' + $(this).val()).hide();
            } 
            else if($('#btobClip1').val()=='btobClip1fb' && $('#btobClip2').val()=='btobClip2fb'){  
                $("#btobBoltDetails").show();
                $("#btobWeldDetails").hide();
                $("#btobClipAngleLength").hide();
                // $('#' + $(this).val()).hide();
            }      
            else if($('#btobClip1').val()=='btobClip1fw' && $('#btobClip2').val()=='btobClip2sw'){ 
                $("#btobBoltDetails").hide(); 
                $("#btobWeldDetails").show();
                $("#btobClipAngleLength").show();
            }
            else if($('#btobClip1').val()=='btobClip1fw' && $('#btobClip2').val()=='btobClip2fw'){ 
                $("#btobBoltDetails").hide(); 
                $("#btobWeldDetails").show();
                $("#btobClipAngleLength").show();
            } 
            else if($('#btobClip1').val()=='btobClip1fw' && $('#btobClip2').val()=='btobClip2fb'){ 
                $("#btobBoltDetails").show(); 
                $("#btobWeldDetails").show();
                $("#btobClipAngleLength").hide();
            }                
        });
    });
    //Beam to Beam - ShearPlate
    $("#sShearPlateLength").hide();
    $(function(){
        $("#btocShear1, #btocShear2").change( function(){
            if($('#btocShear1').val()=='btocShear1sw' && $('#btocShear2').val()=='btocShear2fw'){  
                $("#btocSBoltDetails").hide();
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").show();
                // $('#' + $(this).val()).hide();
            } 
            else if($('#btocShear1').val()=='btocShear1sw' && $('#btocShear2').val()=='btocShear2fb'){  
                $("#btocSBoltDetails").show();
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").hide();
                // $('#' + $(this).val()).hide();
            }  
            else if($('#btocShear1').val()=='btocShear1sw' && $('#btocShear2').val()=='btocShear2sw'){  
                $("#btocSBoltDetails").hide();
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").show();
                // $('#' + $(this).val()).hide();
            } 
            else if($('#btocShear1').val()=='btocShear1sw' && $('#btocShear2').val()=='btocShear2sb'){  
                $("#btocSBoltDetails").show();
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").hide();
                // $('#' + $(this).val()).hide();
            }    
            else if($('#btocShear1').val()=='btocShear1fw' && $('#btocShear2').val()=='btocShear2fw'){ 
                $("#btocSBoltDetails").hide(); 
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").show();
            } 
            else if($('#btocShear1').val()=='btocShear1fw' && $('#btocShear2').val()=='btocShear2fb'){ 
                $("#btocSBoltDetails").show(); 
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").hide();
            } 
            else if($('#btocShear1').val()=='btocShear1fw' && $('#btocShear2').val()=='btocShear2sw'){ 
                $("#btocSBoltDetails").hide(); 
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").show();
            }
            else if($('#btocShear1').val()=='btocShear1fw' && $('#btocShear2').val()=='btocShear2sb'){ 
                $("#btocSBoltDetails").show(); 
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").hide();
            }                
        });
    });
    //Beam to Beam - EndPlate
    $("#btobEWeldDetails").show();
    $(function(){
        $("#btobEEndPlate").change( function(){
            if($('#btobEEndPlate').val()=='btobEEndPlatefb'){ 
                $("#btobEBoltDetails").show();
                $("#btobEWeldDetails").show();
            }
            else if($('#btobEEndPlate').val()=='btobEEndPlatefw'){  
                $("#btobEBoltDetails").hide();
                $("#btobEWeldDetails").show();
            } 
            
        });
    });
    //Beam to Embed - ClipAngle
    $("#btoeBoltDetails").hide();
    $(function(){
        $("#btoeClip2").change( function(){
            if($('#btoeClip2').val()=='btoeClip2sw'){ 
                $("#btoeBoltDetails").hide();
                $("#btoeWeldDetails").show();
                $("#btoeClipAngleLength").show();
                // $('#' + $(this).val()).hide();
            }
            else if($('#btoeClip2').val()=='btoeClip2fw'){  
                $("#btoeBoltDetails").hide();
                $("#btoeWeldDetails").show();
                $("#btoeClipAngleLength").show();
                // $('#' + $(this).val()).hide();
            } 
            else if($('#btoeClip2').val()=='btoeClip2fb'){  
                $("#btoeBoltDetails").show();
                $("#btoeWeldDetails").show();
                $("#btoeClipAngleLength").hide();
                // $('#' + $(this).val()).hide();
            }                  
        });
    });

    //Beam to Embed - ShearPlate
    $("#btoeBoltDetails").hide();
    $(function(){
        $("#btoeShear2").change( function(){
            if($('#btoeShear2').val()=='btoeShear2sw'){ 
                $("#btoeBoltDetails").hide();
                $("#btoeWeldDetails").show();
                $("#btoeShearPlateLength").show();
                // $('#' + $(this).val()).hide();
            }
            else if($('#btoeShear2').val()=='btoeShear2fw'){  
                $("#btoeBoltDetails").hide();
                $("#btoeWeldDetails").show();
                $("#btoeShearPlateLength").show();
                // $('#' + $(this).val()).hide();
            } 
            else if($('#btoeShear2').val()=='btoeShear2fb'){  
                $("#btoeBoltDetails").show();
                $("#btoeWeldDetails").show();
                $("#btoeShearPlateLength").hide();
                // $('#' + $(this).val()).hide();
            }                  
        });
    });
   
 
    
    
    // Splice Connection Column
    $("#spliceWeldDetails").hide();
    $(function(){
        $("#splice1, #splice2").change( function(){
            if($('#splice1').val()=='splice1fw' && $('#splice2').val()=='splice2fw') { 
                 $("#spliceWeldDetails").show();
                  $("#spliceBoltDetails").hide();
                  $("#showonweld").show();
            }
            else if($('#splice1').val()=='splice1sw' && $('#splice2').val()=='splice2fw'){  
               $("#spliceWeldDetails").show();
                $("#spliceBoltDetails").hide();
                $("#showonweld").show();
            }
             else if($('#splice1').val()=='splice1fb' && $('#splice2').val()=='splice2fw'){  
               $("#spliceWeldDetails").show();
                $("#spliceBoltDetails").show();
                $("#showonweld").hide();
            } 
            else if($('#splice1').val()=='splice1sb' && $('#splice2').val()=='splice2fw'){  
               $("#spliceWeldDetails").show();
                $("#spliceBoltDetails").show();
                $("#showonweld").hide();
            } 
            else if($('#splice1').val()=='splice1sb' && $('#splice2').val()=='splice2fb'){  
               $("#spliceWeldDetails").hide();
                $("#spliceBoltDetails").show();
            } 
            else if($('#splice1').val()=='splice1sw' && $('#splice2').val()=='splice2fb'){  
               $("#spliceWeldDetails").show();
                $("#spliceBoltDetails").show();
                $("#showonweld").hide();
            }  
            else if($('#splice1').val()=='splice1fb' && $('#splice2').val()=='splice2fb'){  
               $("#spliceWeldDetails").hide();
                $("#spliceBoltDetails").show();
            }  
            else if($('#splice1').val()=='splice1fw' && $('#splice2').val()=='splice2fb'){  
               $("#spliceWeldDetails").show();
                $("#spliceBoltDetails").show();
                $("#showonweld").hide();
            }                                 
        });
    });

   


    // Splice EndPlate
    $(function(){
        $("#ddlSpliceEP").change( function(){
            if($('#ddlSpliceEP').val()=='sepCJP'){ 
               $("#sepWeldsize").prop("disabled", true);  
            }
            else {  
               $("#sepWeldsize").prop("disabled", false);
            }                 
        });
    });

 

    //Table Selection
    $(".cci-select").on('click',function(){
        $("table tbody").find('input[name="selectAll"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").css({
                    "background": "#f5f9fd",
                    "color": "#414146"
                });
            }
            else {
                $(this).parents("tr").css({
                    "background": "#ffffff",
                    "color": ""
                });
            }
        });
    });
    $(".cci-all").on('click',function(){
        $("table tbody").find('input[name="selectAll"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").css({
                    "background": "#f5f9fd",
                    "color": "#414146"
                });
            }
            else {
                $(this).parents("tr").css({
                    "background": "#ffffff",
                    "color": ""
                });
            }
        });
    });

    //Cancel Right edit bar
    $(".cancelRFB").on('click', function(){
        $(".memtype-rightedit").hide();
    });

    //Misc Sidebar
    $("[data-collapse-group='miscSide']").click(function () {
        var $this = $(this);
        $("[data-collapse-group='miscSide']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("show").addClass('collapse');
        });
    });
    $("[data-collapse-group='miscSideMat']").click(function () {
        var $this = $(this);
        $("[data-collapse-group='miscSideMat']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("show").addClass('collapse');
        });
    });
    $("[data-collapse-group='miscSideMatSub']").click(function () {
        var $this = $(this);
        $("[data-collapse-group='miscSideMatSub']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("show").addClass('collapse');
        });
    });
    $("[data-collapse-group='miscSideMatSub2']").click(function () {
        var $this = $(this);
        $("[data-collapse-group='miscSideMatSub2']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("show").addClass('collapse');
        });
    });
    $("#misc-accordion li").on('click', function(){
        $("#misc-accordion li").removeClass("active");
        $(this).addClass("active");
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.outer-collapse')) {
            $('.outer-collapse').removeClass('show');        
        }
    });

    //Screen Resolution
    // function resize() {
    //     var screenheight = window.innerHeight;
    //     var offset = document.getElementById('header').offsetHeight;
    //     total = (Number(screenheight) - Number(offset) );
    //     document.getElementById("add-new-value").style.height = (total + "px" );
    // }
    // resize();
  

});