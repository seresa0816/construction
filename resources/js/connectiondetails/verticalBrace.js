/**

 * 
 */


  $(".select2").select2(); 
    
  var connectionmarkedit="";
  var connectionmarkvalues=[];
    
    function connectionmarkToJSON(tableID) {
		var tableData = [];
		connectionmarkvalues=[];
		var table = document.getElementById(tableID);
		var rowCount = document.getElementById(tableID).rows.length;
		for (var i = 1; i < rowCount; i++) {
			connectionmarkvalues.push($(table.rows.item(i).cells[2]).text());
		}
		return tableData;
	} 


  var $row ="";
  
	  $(".action-icons .add").on('click', function(){
	        $(".right").show();
	        $(".left").hide();
	        $("#adddata").show();
	        $("#update").hide();
	        $(".memtype-rightedit").show();
	        $(".editmemtype .rightFloat").show();  
	        $(".BoltDetails,.ClipAngleLength,#conmark,#beamprofile,#clipanglesz,#btocClip1,#btocClip2,.WeldDetails").val('').trigger("change");  
	
	      $('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
	      $('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
		  	
	  });
	  
	  
	    /* checking for required filed */
		$("#adddata").on('click', function(){
				
			//add validateLength2,3,4
			if (validateForm() && validateLength1() && validateLength2() && validateLength3() && checkconnectioncodeForuniquiness()) {
				addconnectionmark();
				
			}     	         	            	 
		
	    });
	  
	  
	  
	  
	  $("#update").on('click', function(){
			//add validateLength2,3,4
	  	if (validateForm() && validateLength1() && validateLength2() && validateLength3() && checkconnectioncodeForuniquiness()) {

			if (connectionmarkedit==$("#conmark").val()) {
		  		  finalupdate();
		  		     
				} else {
					 updateconnectionmark();
				}
  		}  
	    });
	  
	  
	  // VBrace
	    $("#gtobboltdetailsV").hide();
	    $("#Vep").hide();
	      
	    // VBrace - Gusset to Column
	    $("#gtocWeldDetailsDIV").show();
	    $(".vGtoCweldlength").hide();
	    $("#showonGtoCDW").hide();
	    $(".gtocShopWelded").hide();
	  
	     
  function validateSelect2Fields(){
	  if (!$('#boltgageBeam').val()) {
			$('#boltgageDivBeam .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }
	  
	  if (!$('#braceProfile').val()) {
			$('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#GussetPlateThickness').val()) {
			$('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  
	  if (!$('#boltgrade').val()) {
			$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#boltdia').val()) {
			$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#noofboltrwClaw').val()) {
			$('#noofboltrwClawDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  if (!$('#noofboltrw').val()) {
			$('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#boltspc').val()) {
			$('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  
	  if (!$('#edgedistance').val()) {
			$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#thisdisable').val()) {
			$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#clipangletxt1').val()) {
			$('#clipangletxtDiv1 .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#boltgradeM').val()) {
			$('#boltgradeMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#boltdiaM').val()) {
			$('#boltdiaMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  
	  if (!$('#noofboltrwM').val()) {
			$('#noofboltrwMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#boltspcM').val()) {
			$('#boltspcMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#edgedistanceM').val()) {
			$('#edgedistanceMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#btoeWeldDetailsV').val()) {
			$('#btoeWeldDetailsVDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#clipangletxt2').val()) {
			$('#clipangletxtDiv2 .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  
	  if (!$('#boltgradeL').val()) {
			$('#boltgradeLDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#boltdaimeterL').val()) {
			$('#boltdaimeterLDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#boltspcYcol').val()) {
			$('#bsYdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	  
	  if (!$('#boltspacingL').val()) {
			$('#boltspacingLDIv .select2-container--default .select2-selection--single').css("border-color","");
			
		}
	  
	  if (!$('#boltspcXcol').val()) {
			$('#bsXdiv .select2-container--default .select2-selection--single').css("border-color","");
			
		}
	  
	  if (!$('#edgedistanceL').val()) {
			$('#edgedistanceLDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}
	  
	  if (!$('#boltgageColumn').val()) {
			$('#boltgageColumnDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}
	  
	  if (!$('#thisdisable2').val()) {
 			$('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}
	  if (!$('#stabilizerPT').val()) {
			$('#stabilizerPTDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}
	  if (!$('#stabilizerWSize').val()) {
			$('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}
	  
	 	  
  }	    
	
    function validateForm() {
    	
    	validateSelect2Fields();
    	
    	  
  	
    	
    	
    	$('#formContractVerticalBrace').addClass('submitted');
    	var validated = true;
    	/* checking for required filed */
    	$('#formContractVerticalBrace').find(':input').each(function(){   
       		var id  = $(this).prop('id');
       		if(id!="")
       		{
           		var Value =  $('#' + id).val();   		
           		var requ = $(this).prop('required');	
           	 var elemetvisible = $('#' + id).is(':visible');
           	 if(Value == "" && requ == true && elemetvisible)     
                 validated = false;	
       		}
       	});
    	 return validated;
    }

    
    //Brace to Gusset Connection
    function validateLength1(){
    	var validated = true;
    	var Lenght = $("#weldlength").val();
    	var Inch = $("#inch").find("option:selected").text();
    	var Fraction = $("#fraction").find("option:selected").text();
		validated = validateLength(Lenght,Inch,Fraction,"Length");
		return validated;
    }
    
    
    //Gusset to Beam Connection
    function validateLength2(){
    	var validated = true;
    	var Lenght = $("#weldlengthM").val();
    	var Inch = $("#inchM").find("option:selected").text();
    	var Fraction = $("#fractionM").find("option:selected").text();
		validated = validateLength(Lenght,Inch,Fraction,"Length");
		return validated;
    }
    
    //Gusset to Column Connection
    function validateLength3(){
    	var validated = true;
    	var Lenght = $("#shearPLft").val();
    	var Inch = $("#shearPLin").find("option:selected").text();
    	var Fraction = $("#shearPLfr").find("option:selected").text();
		validated = validateLength(Lenght,Inch,Fraction,"Length");
		return validated;
    }
    
    
    $("#braceShapeH").change( function(){
      resetDrodown("braceProfile");
	  var dropdownList = getProfiles($("#braceShapeH").val());
	   fillProfileDropdownList("braceProfile", dropdownList)
	   });
    
    //Brace to Gusset Connection main validation
    
       $("#braceShapeH").change( function(){
    	   $("#VBtoGMethod_FB_FW").val("");
    	   $("#VBtoGMethod_FB").val("");
    	   $("#boltdetailsH,#welddetailsH,#bracetogussetWL").hide();
 	   	   $(".Boltdetails,.welddetailsH,.bracetogussetWL,#clawAngleH").val("").trigger("change");
    	   
       });
    
    $("#braceShapeH,#VBtoGMethod_FB_FW,#VBtoGMethod_FB").change( function(){
    	 $("#ddlcjp").val(''); 
     if ($("#braceShapeH").val()=="W") {
  		   $("#VBtoGMethod_FBdv").show();
  	       $("#VBtoGMethod_FB_FWdv").hide();
  	       $("#VBtoGMethod_FB_FW").val("");
  	       $("#noselect1").hide();
  		  if ($("#VBtoGMethod_FB").val()) {
		
  			  if($('#VBtoGMethod_FB').val()=='Field Bolted'){ 
  	    	
  	    	 $("#boltdetailsH").show();
  	    	  getboltdetails(); 
  	         $("#clawAngleH").show();
  	   	     $("#welddetailsH,#bracetogussetWL").hide();
  	   	     $(".welddetailsH,.bracetogussetWL").val("").trigger("change");
  	     }
  	     else{
  	    	 
  	    	$("#boltdetailsH,#welddetailsH,#bracetogussetWL").hide();	
  	    	 
  	     }
  		  }else{
  			$("#boltdetailsH,#welddetailsH,#bracetogussetWL").hide();
  		  }
  		
  	} 
  	  
  	 else if (!$("#braceShapeH").val()) {
  		 $("#noselect1").show();
  		 $("#VBtoGMethod_FB_FWdv,#VBtoGMethod_FBdv").hide();
  		 
  		  $("#boltdetailsH,#welddetailsH,#bracetogussetWL").hide();
	   	  $(".Boltdetails,.welddetailsH,.bracetogussetWL,#clawAngleH").val("").trigger("change");
  		 
  	 }
  	  
  		  else {
  		 $("#VBtoGMethod_FB_FWdv").show();
  		 $("#VBtoGMethod_FBdv").hide(); 
  		 $("#noselect1").hide();
  		 $("#VBtoGMethod_FB").val("");
  		 if ($("#VBtoGMethod_FB_FW").val()) {
  		  if($('#VBtoGMethod_FB_FW').val()=='Field Bolted'){ 		
  			 $("#boltdetailsH").show();
  			 getboltdetails(); 
  		    $("#clawAngleH").hide();
    	    $("#clawAngleH").val("").trigger("change");
    		 $("#welddetailsH,#bracetogussetWL").hide();
    		  $(".welddetailsH,#clawAngleH").val("").trigger("change");
    		
  		  }
  		  else if($('#VBtoGMethod_FB_FW').val()=='Field Welded'){ 
  			 $("#boltdetailsH,#clawAngleH").hide();
   		     $("#welddetailsH,#bracetogussetWL").show();
   	         getWelddetails();
   		     $(".Boltdetails,#clawAngleH").val("").trigger("change");
   		     $("#inch,#fraction").val("0").trigger("change"); 
   		    
		}else{
			$("#boltdetailsH,#welddetailsH,#bracetogussetWL").hide();	
			
		}
  		 }
  		else{
  			$("#boltdetailsH,#welddetailsH,#bracetogussetWL").hide();
  		  }
  	}
     removeRedBoarder();  
  });
    
    
    
    //Gusset to Beam Connection main validation

        $("#connectionTypeV,#v2BtoGMethod_FB,#v2BtoGMethod_FB_FW").change( function(){
        	 $("#clipangletxt1,#osltxt1,#boltgageBeam ,#ddlcjpM,#GussetendPlateThickness").val("");
        	 $("#clipangletxtDiv1,#osltxtDiv1,#GussetendPlateThicknessDIV").hide();
        	 if ($('#connectionTypeV').val()) {
        		  if($('#connectionTypeV').val()=='End Plate'||$('#connectionTypeV').val()=='Clip Angle'){ 
        			 
        			  if ($('#connectionTypeV').val()=='Clip Angle') {
        				  $("#clipangletxtDiv1,#osltxtDiv1").show();
        				  $('#clipangletxt1').val(ClipAngleSizeGp).trigger("change"); 
					} if ($('#connectionTypeV').val()=='End Plate') {
      				  $("#GussetendPlateThicknessDIV").show();
    				}
                    $("#v2BtoGMethod_FB").show();
                    
                    $("#v2BtoGMethod_FB_FW,#boltgageDivBeam").hide();
                   if ($('#v2BtoGMethod_FB').val()) {
                	   if ($("#v2BtoGMethod_FB_FW").val()) {
						 $("#v2BtoGMethod_FB_FW").val("").trigger("change");
                	   }
                    if($('#v2BtoGMethod_FB').val()=='Field Bolted'){ 
                    	$("#gtobboltdetailsV,#btoeWeldDetailsV,#boltgageDivBeam").show();
                    	
                    	$("#boltgageBeam").val(GageGP).trigger("change");
                 	    getboltdetails2(); 
                 	    getWelddetails2();
                        $(".weldLengthV").hide(); 
                        $(".weldLengthV").val("").trigger("change");
                    }
                    else{
                 	   $("#gtobboltdetailsV,#btoeWeldDetailsV,.weldLengthV").hide();
                    }
               	} else{
              	   $("#gtobboltdetailsV,#btoeWeldDetailsV,.weldLengthV").hide();
                }
                    
                    $("#gussettocolumnhide").show();
                 }
                 else if($('#connectionTypeV').val()=='Directly Welded'||$('#connectionTypeV').val()=='Chevron'){ 
                 	  $("#v2BtoGMethod_FB").hide();
                       $("#v2BtoGMethod_FB_FW").show();
                 	  if($('#v2BtoGMethod_FB_FW').val()=='Field Welded'||$('#v2BtoGMethod_FB_FW').val()=='Shop Welded'){ 
                 		  $("#gtobboltdetailsV").hide();
                 		  $("#btoeWeldDetailsV,.weldLengthV").show(); 
                 		   getWelddetails2();
                 		  $(".gtobboltdetailsV").val("").trigger("change");
                 		  $("#inchM,#fractionM").val("0").trigger("change"); 
                       }  else{
                    	   $("#gtobboltdetailsV,#btoeWeldDetailsV,.weldLengthV").hide();
                       }
                 	  $("#gussettocolumnhide").show();
                 	  if($('#connectionTypeV').val()=='Chevron'){
                 		  $("#gussettocolumnhide").hide();
                 		  $(".GtoC,#btocClip1,#btocClip2").val("").trigger("change");
                 		  console.log('pp');
                 		  
                 	  }
                 } 
                 $("#noselect2").hide();
				
			} else {
				  $("#v2BtoGMethod_FB,#v2BtoGMethod_FB_FW").hide();
                  $("#noselect2").show();
                  $("#gtobboltdetailsV,#btoeWeldDetailsV,.weldLengthV").hide();
			}
        	
            
        	 removeRedBoarder();              
        });
  
    
    //Gusset to Column Connection main validation
        
	     $("#ddlGtoC,#Method_FB,#Method_FB_FW,#Method_FW_FW").change( function(){
	    	 $("#clipangletxtDiv2,#osltxtDiv2,#noofboltColumnsDIV,#GussettoColPlateThicknessDIV").hide();
	    	 $("#noselect3").hide();
	    	 $("#clipangletxt2,#osltxt2,#boltspcYcol,#boltspcXcol,#boltgageColumn").val("").trigger("change");
	    	 $("#showSP,.vGtoCweldlength,#stabilizerplate").hide();
	    	 $("#Method_FB_FWdv,#Method_FW_FWdv,#boltgageDivColumn,#clipmethoddiv1,#clipmethoddiv2").hide();
	    	  $("#bsYdiv,#bsXdiv").hide();
	    	  $("#ddlcjp2").val(''); 
	    	 if($('#ddlGtoC').val()=='Conventional Shear Plate'||$('#ddlGtoC').val()=='Extended Shear Plate'){
	    		   $("#Method_FBdv,#Method_FW_FWdv").hide();
	               $("#Method_FB_FWdv,#GussettoColPlateThicknessDIV").show();
	               $("#noselect3").hide();
	               $("#Method_FW_FW,#Method_FB").val("");
	               if ($('#Method_FB_FW').val()=='Field Bolted') {
	            	 $("#boltspacingLDIv").show();
	               $("#gtocBoltDetails").show();
	               $("#gtocWeldDetailsDIV").show();
	               getboltdetails3();
	               getWelddetails3();
	               $(".vGtoCweldlength").hide();
	               $(".vGtoCweldlength,#boltspacingL").val("").trigger("change");
	               if ($('#ddlGtoC').val()=='Conventional Shear Plate'||$('#ddlGtoC').val()=='Extended Shear Plate') {
	            	   $("#bsYdiv,#bsXdiv").show();
	            	   $("#boltspacingLDIv").hide();
	            	   $("#noofboltColumnsDIV").show(); 
	            	   $("#boltspcYcol,#boltspcXcol").val(BspacingGP).trigger("change");
				}
	             
	               }
	               else  if ($('#Method_FB_FW').val()=='Field Welded') {
	            	   $("#noselect3").hide();
	            	   $("#gtocBoltDetails").hide();
	            	   $(".gtocBoltDetails").val("").trigger("change");
		               $("#gtocWeldDetailsDIV").show();
		     
		                getWelddetails3();
		               $(".vGtoCweldlength").show();
		               $("#shearPLin,#shearPLfr").val("0").trigger("change");
		            
				}else{
					  $("#gtocBoltDetails,#gtocWeldDetailsDIV,#showSP,.vGtoCweldlength,#stabilizerplate").hide();
					
				}
	               if ($('#ddlGtoC').val()=='Extended Shear Plate' && $('#Method_FB_FW').val()) {
	            	   $("#stabilizerplate").show();
		        }
	               else {
	            	   $("#stabilizerplate").hide();
		               $("#showSP").hide();
		               $(".showSP").val("").trigger("change");
		               $("#stabilizerWSize").val("").trigger("change");
				}
	               
	               
	    	 }else if ($('#ddlGtoC').val()=='Clip Angle') {
	    		 $("#clipangletxtDiv2,#osltxtDiv2").show();
	    		 $('#clipmethoddiv1,#clipmethoddiv2').show();
	    		 $('#Method_FBdv').hide();
	    		  $("#noofboltColumnsDIV").hide();
	    		  $('#clipangletxt2').val(ClipAngleSizeGp).trigger("change"); 
	    		 var SupportSide= $('#btocClip1').val();
	    		 var SupportedSide= $('#btocClip2').val();
	    		  $('#btocClip1').val(SupportSide).trigger("change"); 
	    		  $('#btocClip2').val(SupportedSide).trigger("change"); 
			}
	    	 
	    	 else if ($('#ddlGtoC').val()=='Directly Welded') {
	    		   $("#Method_FBdv").hide();
	    		   $("#noselect3").hide();
	               $("#Method_FW_FWdv").show();
	               $("#Method_FB_FWdv").hide();
	               $("#Method_FB,#Method_FB_FW").val("");
	               if ($('#Method_FW_FW').val()=='Shop Welded'||$('#Method_FW_FW').val()=='Field Welded') {
	            	 
	               $("#gtocBoltDetails").hide();
	               $("#gtocWeldDetailsDIV").show();
	                getWelddetails3();
	               $(".vGtoCweldlength").show();
	               $("#stabilizerplate").hide();
	               $("#showSP").hide();
	               $(".showSP,.gtocBoltDetails").val("").trigger("change");
	               $("#shearPLin,#shearPLfr").val("0").trigger("change");
	               }else{
	            	   $("#gtocBoltDetails,#gtocWeldDetailsDIV,#showSP,.vGtoCweldlength,#stabilizerplate").hide();
	               }
			
	    	 } else if ($('#ddlGtoC').val()=='End Plate') {
	    		  $("#noselect3").hide();
	    		  $("#noofboltColumnsDIV").hide();
	    		    $("#Method_FBdv,#GussettoColPlateThicknessDIV").show();
	    		    $("#Method_FW_FWdv").hide();
	                $("#Method_FB_FWdv").hide();
	                $("#Method_FW_FW,#Method_FB_FW").val("");
	                if ($('#Method_FB').val()=='Field Bolted') {
	                $("#boltspacingLDIv").show();
	    		    $("#gtocBoltDetails,#boltgageDivColumn").show();
	    		    $("#boltgageColumn").val(GageGP).trigger("change");
	                $("#gtocWeldDetailsDIV").show();
	                getboltdetails3();
		            getWelddetails3();
	               $(".vGtoCweldlength").hide();
	               $("#stabilizerplate").hide();
	               $("#showSP").hide();
	               $("#boltgageColumn").val(GageGP).trigger("change");
	               $(".showSP,#stabilizerplate,vGtoCweldlength,#noofboltColumns").val("").trigger("change");
	                }
	               else{
	            	   $("#gtocBoltDetails,#gtocWeldDetailsDIV,#showSP,.vGtoCweldlength,#stabilizerplate").hide();
	               }
				
			}else{
				  $("#gtocBoltDetails,#gtocWeldDetailsDIV,#showSP,.vGtoCweldlength,#stabilizerplate").hide();
				  $("#noselect3").show();
				  $("#Method_FB_FWdv,#Method_FBdv,#Method_FW_FWdv").hide();
				
			}
	     });
	     
	     $("#spYesNo").change( function(){
	    	
	    	 if ($('#spYesNo').val()=='No'|| !$('#spYesNo').val()) {	    		
	    		 $("#showSP").hide();  
	    		   $(".showSP").val("").trigger("change");    
	    		   $("#stabilizerWSize").val("").trigger("change");
			}else if ($('#spYesNo').val()=='Yes') {	    	
			   $("#showSP").show();	       
			   $("#stabilizerWSize").val(MinPTFromGP).trigger("change");
			}
	    	 removeRedBoarder();
	     });
    

	     
	    
	     
	     
	      function addorupdate() {
		  	  
		  	  
		  	  var connectionjson=	tableToJSON('table') ;
		  		$.ajax({
		   		   type : 'POST',
		   	          url: "/bimspring/saveConnectionsDetails",	          
		   	          data : {connectiongrouptype:"VerticalBrace",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
		   	       success : function(data, success) {  	
		   	    	 if (data=="error") {
		            	  showalertsession("Select Project Again")
							
		            	  window.location='projectlist';
						}
			          },error: function (error) {
						if(error.status == 401){
							window.location.href = 'logout';
						}else{
							alert('Sorry! Your session has expired Please select Project again');
							window.location.href='dashboard';
						}
			          }
		   	          }); 
		  	
		  }    
	      
	      
	      
 	
 	  
    function  getboltdetails(){
 	   $("#boltgrade").val(BoGrGp).trigger("change");  
 	   $("#boltdia").val(BoltDiaGP).trigger("change");  
 	   $("#boltspc").val(BspacingGP).trigger("change");  
 	   $("#edgedistance").val(EDistandanceGP).trigger("change");  
 	   $("#boltgage").val(GageGP).trigger("change");  
 	   
     }
    
    function  getWelddetails(){	   
 	  
       $("#ddlcjp").val(WeldTypeDefaultValue).trigger("change");   
 	   $("#thisdisable").val(weldSizeGP).trigger("change"); 
 	   if ( $("#ddlcjp").val()=="CJP") {
 		   $("#thisdisable").val("").trigger("change"); 
 		   $("#thisdisable").attr("disabled", true);
 		   $("#thisdisable").prop('required',false);
 		  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
	 		
 		}else {
 			  $("#thisdisable").attr("disabled", false);
 			  $("#thisdisable").prop('required',true);
 		}		   
     }
    
 	$("#ddlcjp").change(function() {
    if ( $("#ddlcjp").val()=="CJP") {
 	   $("#thisdisable").val("").trigger("change"); 
 	   $("#thisdisable").attr("disabled", true);
 	   $("#thisdisable").prop('required',false);
 	  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
		
 	}else {
 		  $("#thisdisable").attr("disabled", false);
 		  $("#thisdisable").prop('required',true);
 	}

 	});
 	
 	
 	
 	 function  getboltdetails2(){
	 	   $("#boltgradeM").val(BoGrGp).trigger("change");  
	 	   $("#boltdiaM").val(BoltDiaGP).trigger("change");  
	 	   $("#boltspcM").val(BspacingGP).trigger("change");  
	 	   $("#edgedistanceM").val(EDistandanceGP).trigger("change");  
	 	 
	 	   
	     }
	    
	    function  getWelddetails2(){
	    	$("#ddlcjpM").val(WeldTypeDefaultValue).trigger("change");  
	    	$("#thisdisableM").val(weldSizeGP).trigger("change"); 
	 	   if ( $("#ddlcjpM").val()=="CJP") {
	 		   $("#thisdisableM").val("").trigger("change"); 
	 		   $("#thisdisableM").attr("disabled", true);
	 		   $("#thisdisableM").prop('required',false);
	 		  $('#thisdisableMDIV .select2-container--default .select2-selection--single').css("border-color","");
		 		
	 		}else {
	 			  $("#thisdisableM").attr("disabled", false);
	 			  $("#thisdisableM").prop('required',true);
	 		}		   
	     }
	    
	 	$("#ddlcjp").change(function() {  
	 		
	    if ( $("#ddlcjp").val()=="CJP") {		    	
	 	   $("#thisdisable").val("").trigger("change"); 
	 	   $("#thisdisable").attr("disabled", true);
	 	   $("#thisdisable").prop('required',false);
	 	  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
			 
	 	}else {
	 		  $("#thisdisable").attr("disabled", false);
	 		  $("#thisdisable").prop('required',true);
	 	}

	 	});
	 	
	 	
		$("#ddlcjpM").change(function() { 
			
	 		 if ( $("#ddlcjpM").val()=="CJP") {
		 		   $("#thisdisableM").val("").trigger("change"); 
		 		   $("#thisdisableM").attr("disabled", true);
		 		   $("#thisdisableM").prop('required',false);
		 		  $('#thisdisableMDIV .select2-container--default .select2-selection--single').css("border-color","");
		 		 
		 		}else {
		 			  $("#thisdisableM").attr("disabled", false);
		 			  $("#thisdisableM").prop('required',true);
		 		}	

	 	});
 	  

	 	 function  getboltdetails3(){
		 	   $("#boltgradeL").val(BoGrGp).trigger("change");  
		 	   $("#boltdaimeterL").val(BoltDiaGP).trigger("change");  
		 	   $("#boltspacingL").val(BspacingGP).trigger("change");  
		 	   $("#edgedistanceL").val(EDistandanceGP).trigger("change");  
		 	 
		 	   
		     }
		    
		    function  getWelddetails3(){
		 	
		 	  $("#ddlcjp2").val(WeldTypeDefaultValue).trigger("change");  
		 	   $("#thisdisable2").val(weldSizeGP).trigger("change"); 
		 	   if ( $("#ddlcjp2").val()=="CJP") {
		 		   $("#thisdisable2").val("").trigger("change"); 
		 		   $("#thisdisable2").attr("disabled", true);
		 		   $("#thisdisable2").prop('required',false);
		 		  $('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","");
		 		 
		 		}else {
		 			  $("#thisdisable2").attr("disabled", false);
		 			  $("#thisdisable2").prop('required',true);
		 		}		   
		     }
		 
		 	
			$("#ddlcjp2").change(function() {  
		 		 if ( $("#ddlcjp2").val()=="CJP") {
			 		   $("#thisdisable2").val("").trigger("change"); 
			 		   $("#thisdisable2").attr("disabled", true);
			 		   $("#thisdisable2").prop('required',false);
			 		  $('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","");
				 		
			 		}else {
			 			  $("#thisdisable2").attr("disabled", false);
			 			  $("#thisdisable2").prop('required',true);
			 		}	

		 	});
 	
			
			   $(".add,.anv-btn").on('click', function(){
				   $(".right").show();
	 		        $(".left").hide();
	 		        $("#adddata").show();
	 		        $("#update").hide();
	 		        $(".memtype-rightedit").show();
	 		        $(".editmemtype .rightFloat").show();
	 		   
				   $(".form-control,.select2").val("").trigger("change"); 
			      $("#showSP,#btoeWeldDetailsV,#gtobboltdetailsV,#bracetogussetWL,#boltdetailsH,#welddetailsH,#gtocBoltDetails,#gtocWeldDetailsDIV,#stabilizerplate").hide();
			      $("#GussetPlateThickness").val(MinPTFromGP).trigger("change"); 
			      listvalues = [];
			 	 $(".contxt").each(function(){			
			 			listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
			 			
			 		});
			 	  $('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
				  	
			   });
			   			

			  
				   if (Page && Page.length !== 0) {
				   	    $("#add-new-value").hide();
				        $(".memtype-table").show();
				   	  
				   	  
				   	  $.each(Page, function(key,value) {
				   		   var BtoGConJS =value[BracetoGussetConnection];
				   		   var Bprofile=BtoGConJS[BraceProfileInOuter];	
				   		  var gussetThicknessJs=BtoGConJS[GussetThicknessInOuter];	
				   		   var NBRclaw=BtoGConJS[NoofBoltRowsforClawAnlge];	
				   		   var weldDetailsBracetoG=BtoGConJS[WeldLengthDetails];	
				   		   var weldlengthBracetoG= feetInchFormater(weldDetailsBracetoG[Length],weldDetailsBracetoG[Length_in],weldDetailsBracetoG[Length_fr_fra]);
				   	        
				   		   
				   		  var GtoBConJS =value[GussettoBeamConnection];
				   		   var GtoBBprofile=BtoGConJS[BraceProfileInOuter];	
				   		  
				   		   var GtoBweldDetailsBracetoG=GtoBConJS[WeldLengthDetails];	
				   		   var GtoBweldlengthBracetoG= feetInchFormater(GtoBweldDetailsBracetoG[GtoBLength],GtoBweldDetailsBracetoG[Length_in],GtoBweldDetailsBracetoG[Length_fr_fra]);
				   	      
				   		 
				   			  if (!weldDetailsBracetoG[Length]) {
				   				weldlengthBracetoG="";

				   				} 
				   			 if (!GtoBweldDetailsBracetoG[GtoBLength]) {
				   				GtoBweldlengthBracetoG="";

					   				} 
				   			 
				   		   var GtoColConJS =value[GussettoColumnConnection];
				   		   var GtoColBprofile=BtoGConJS[BraceProfileInOuter];	
				   		   
				   		  var boltX1=GtoColConJS["BoltSpacingX"];
				   		 var boltY1=GtoColConJS["BoltSpacingy"];
				   		  
				   		   var GtoColweldDetailsBracetoG=GtoColConJS[WeldLengthDetails];	
				   		   var GtoColweldlengthBracetoG= feetInchFormater(GtoColweldDetailsBracetoG[GtoBLength],GtoColweldDetailsBracetoG[Length_in],GtoColweldDetailsBracetoG[Length_fr_fra]);
				   	       if (!GtoColweldDetailsBracetoG[GtoBLength]) {
				   	    	     GtoColweldlengthBracetoG="";
		                  	} 
				   	       
				   	    var GtoColweldWidthDetails=GtoColConJS['WeldWidthDetails'];	
				   		   var GtoColweldWidthBracetoG= feetInchFormater(GtoColweldWidthDetails[GtoBLength],GtoColweldWidthDetails[Length_in],GtoColweldWidthDetails[Length_fr_fra]);
				   	       if (!GtoColweldWidthDetails[GtoBLength]) {
				   	    	GtoColweldWidthBracetoG="";
		                  	} 
				   			 
				   	    var GtoColwStabilizerPlate=GtoColConJS[StabilizerPlateDetails];	
				   	    
				   	 var clipAngle1=GtoBConJS["ClipAngle"];
				   	 var osl1=GtoBConJS["OSL"];
					
				   	    
				   	 var clipAngle2=GtoColConJS["ClipAngle"];
				   	 var osl2=GtoColConJS["OSL"];
				     var GtoBConJSplate=GtoBConJS["EndPlateThickness"];
					 var GtoColConJSplate=GtoColConJS["PlateThickness"];
						
				 	    
				   	 $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+BtoGConJS[BraceShape]+'</td><td>'+Bprofile[BraceProfileKeyN]+'</td><td>'+getformateforrepresentation(gussetThicknessJs[PlateThickness_fra])+'<input type="hidden" value='+gussetThicknessJs[PlateThickness]+'></td><td>'+BtoGConJS[BracetoGussetConnectionMethod]+'</td><td>'+BtoGConJS[BoltGrade]+'</td><td>'+getformateforrepresentation(BtoGConJS[BoltDia_fra])+'<input type="hidden" value='+BtoGConJS[BoltDia]+'></td><td>'+BtoGConJS[BoltRows]+'</td><td>'+NBRclaw[BoltRows]+'</td><td>'+getformateforrepresentation(BtoGConJS[BoltSpacing_fra])+'<input type="hidden" value='+BtoGConJS[BoltSpacing]+'></td><td>'+getformateforrepresentation(BtoGConJS[EdgeDistance_fra])+'<input type="hidden" value='+BtoGConJS[EdgeDistance]+'></td><td>'+BtoGConJS[WeldType]+'</td><td>'+getformateforrepresentation(BtoGConJS[WeldSize_fra])+'<input type="hidden" value='+BtoGConJS[WeldSize]+'></td><td>'+weldlengthBracetoG+'<input type="hidden" class="inchH"  value='+weldDetailsBracetoG[Length_in]+'><input type="hidden" class="lengH"  value='+weldDetailsBracetoG[Length]+'><input type="hidden" class="fracH"  value='+weldDetailsBracetoG[Length_fr]+'><input type="hidden" class="fracHFrac"  value='+weldDetailsBracetoG[Length_fr_fra]+'></td><td>'+GtoBConJS[VB_GussetToBeam_ConnectionMethodKeyN]+'</td><td>'+GtoBConJS[GussettoBeamConnectionMethod]+'</td><td>'+getformateforrepresentation(GtoBConJSplate[PlateThickness_fra])+'<input type="hidden" value='+GtoBConJSplate[PlateThickness]+'></td><td>'+clipAngle1["Profile"]+'</td><td>'+osl1+'</td><td>'+GtoBConJS[BoltGrade]+'</td><td>'+getformateforrepresentation(GtoBConJS[BoltDia_fra])+'<input type="hidden" value='+GtoBConJS[BoltDia]+'></td><td>'+getformateforrepresentation(GtoBConJS[BoltGagefraction])+'<input type="hidden" value='+GtoBConJS[BoltGagedecimal]+'></td><td>'+GtoBConJS[BoltRows]+'</td><td>'+getformateforrepresentation(GtoBConJS[BoltSpacing_fra])+'<input type="hidden" value='+GtoBConJS[BoltSpacing]+'></td><td>'+getformateforrepresentation(GtoBConJS[EdgeDistance_fra])+'<input type="hidden" value='+GtoBConJS[EdgeDistance]+'></td><td>'+GtoBConJS[WeldType]+'</td><td>'+getformateforrepresentation(GtoBConJS[WeldSize_fra])+'<input type="hidden" value='+GtoBConJS[WeldSize]+'></td><td>'+GtoBweldlengthBracetoG+'<input type="hidden" class="inchH"  value='+GtoBweldDetailsBracetoG[Length_in]+'><input type="hidden" class="lengH"  value='+GtoBweldDetailsBracetoG[GtoBLength]+'><input type="hidden" class="fracH"  value='+GtoBweldDetailsBracetoG[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+GtoBweldDetailsBracetoG[Length_fr_fra]+'" /></td><td>'+GtoColConJS[VB_GussetToColumnKeyN]+'</td><td>'+GtoColConJS[GussettoColumnConnectionMethod]+'</td><td>'+GtoColConJS["ConnectionMethodSupport"]+'</td><td>'+GtoColConJS["ConnectionMethodSupported"]+'</td>	 <td>'+getformateforrepresentation(GtoColConJSplate[PlateThickness_fra])+'<input type="hidden" value='+GtoColConJSplate[PlateThickness]+'></td><td>'+clipAngle2["Profile"]+'</td><td>'+osl2+'</td><td>'+GtoColConJS[BoltGrade]+'</td><td>'+getformateforrepresentation(GtoColConJS[BoltDia_fra])+'<input type="hidden" value='+GtoColConJS[BoltDia]+'></td><td>'+getformateforrepresentation(GtoColConJS[BoltGagefraction])+'<input type="hidden" value='+GtoColConJS[BoltGagedecimal]+'></td><td>'+GtoColConJS[BoltRows]+'</td><td>'+GtoColConJS[NoOfBoltColumnsKeyN]+'</td><td>'+getformateforrepresentation(GtoColConJS[BoltSpacing_fra])+'<input type="hidden" value='+GtoColConJS[BoltSpacing]+'></td><td>'+getformateforrepresentation(GtoColConJS[EdgeDistance_fra])+'<input type="hidden" value='+GtoColConJS[EdgeDistance]+'></td><td>'+getformateforrepresentation(boltX1[BoltSpacing_fra])+'<input type="hidden" value='+boltX1[BoltSpacing]+'></td><td>'+getformateforrepresentation(boltY1[BoltSpacing_fra])+'<input type="hidden" value='+boltY1[BoltSpacing]+'></td><td>'+GtoColConJS[WeldType]+'</td><td>'+getformateforrepresentation(GtoColConJS[WeldSize_fra])+'<input type="hidden" value='+GtoColConJS[WeldSize]+'></td><td>'+GtoColweldlengthBracetoG+'<input type="hidden" class="inchH"  value='+GtoColweldDetailsBracetoG[Length_in]+'><input type="hidden" class="lengH"  value='+GtoColweldDetailsBracetoG[GtoBLength]+'><input type="hidden" class="fracH"  value='+GtoColweldDetailsBracetoG[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+GtoColweldDetailsBracetoG[Length_fr_fra]+'" /></td> <td>'+GtoColweldWidthBracetoG+'<input type="hidden" class="inchH"  value='+GtoColweldWidthDetails[Length_in]+'><input type="hidden" class="lengH"  value='+GtoColweldWidthDetails[GtoBLength]+'><input type="hidden" class="fracH"  value='+GtoColweldWidthDetails[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+GtoColweldWidthDetails[Length_fr_fra]+'" /></td><td>'+getformateforrepresentation(GtoColwStabilizerPlate[PlateThickness_fra])+'<input type="hidden" value='+GtoColwStabilizerPlate[PlateThickness]+'></td> <td>'+GtoColwStabilizerPlate[WeldType]+'</td><td>'+getformateforrepresentation(GtoColwStabilizerPlate[WeldSize_fra])+'<input type="hidden" value='+GtoColwStabilizerPlate[WeldSize]+'><td></tr>'); 			
							


					});
				   }
				
		
				
			
			$("#stabilizerWType").change(function() {  
		 		 if ( $("#stabilizerWType").val()=="CJP") {
			 		   $("#stabilizerWSize").val("").trigger("change"); 
			 		   $("#stabilizerWSize").attr("disabled", true);
			 		   $("#stabilizerWSize").prop('required',false);
			 		}else {
			 			  $("#stabilizerWSize").attr("disabled", false);
			 			  $("#stabilizerWSize").prop('required',true);
			 		}	

		 	});
			
			
			  $("#edit").click(function(){
			    	var i=0;
			    	
			    	$(".cci-select").each(function(){
			        	
			    		if($(this).prop('checked')==true){
			    			i=i+1;
			    		 $row = $(this).closest("tr");       // Finds the closest row <tr> 
			    		  
			    			}
			    		
					});
			    	
			    	if (i==1) {
			    		$(".right").show();
			    	    $(".left").hide();
			    	    $(".memtype-rightedit").show();
			    		$(".editmemtype .rightFloat").show(); 
			    		$("#adddata").hide();
			    	    $("#update").show();
			    	    
			    	    $(".contxt").each(function(){			
			 				listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
			 				
			 			});
			 		  listvalues = jQuery.grep(listvalues, function(value) {
			 			  return value != $row.find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase();
			 			});
			    	    
			    	    $("#braceShapeH").val($row.find("td:nth-child(4)").text()).trigger("change");
			    	        if ($row.find("td:nth-child(4)").text()=="W") {	
			    	        	$("#VBtoGMethod_FBdv").show();
			    	        	$("#VBtoGMethod_FB").val($row.find("td:nth-child(7)").text()).trigger("change");
			    	        	$("#VBtoGMethod_FB_FWdv").hide();
			    	       	} else {
			    	       		$("#VBtoGMethod_FB_FWdv").show();
			    	        	$("#VBtoGMethod_FB_FW").val($row.find("td:nth-child(7)").text()).trigger("change");
			    	        	$("#VBtoGMethod_FBdv").hide();
					    	}
			    	        
			    	        $("#connectionTypeV").val($row.find("td:nth-child(17)").text()).trigger("change");
			    	       
			    	        
					   	    if($row.find("td:nth-child(17)").text()=='End Plate'||$row.find("td:nth-child(17)").text()=='Clip Angle'){ 
					             
					          $("#v2BtoGMethod_FB").val($row.find("td:nth-child(18)").text()).trigger("change");
					              
					         }
					         else if($row.find("td:nth-child(17)").text()=='Directly Welded'|$row.find("td:nth-child(17)").text()=='Chevron'){ 
					            	
					            $("#v2BtoGMethod_FB_FW").val($row.find("td:nth-child(18)").text()).trigger("change");
					            	  
					            } 
					   	 
					     	
					     	
					   	       
					       
					         
					  connectionmarkedit=$row.find("td:nth-child(3)").text();
					  $("#conmark").val($row.find("td:nth-child(3)").text()).trigger("change");   	
			    	  $("#braceProfile").val($row.find("td:nth-child(5)").text()).trigger("change");
			    	  $("#GussetPlateThickness").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");
			    	  $("#connectionMethodH").val($row.find("td:nth-child(7)").text()).trigger("change");
			    	  $("#boltgrade").val($row.find("td:nth-child(8)").text()).trigger("change");
			    	  $("#boltdia").val($row.find("td:nth-child(9)").find('input').val()).trigger("change");
			    	  $("#noofboltrw").val($row.find("td:nth-child(10)").text()).trigger("change");
			    	  $("#noofboltrwClaw").val($row.find("td:nth-child(11)").text()).trigger("change");
			    	  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
			    	  $("#edgedistance").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
			    	  $("#ddlcjp").val($row.find("td:nth-child(14)").text()).trigger("change");
			    	  $("#thisdisable").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");   
			    	  $("#weldlength").val($row.find("td:nth-child(16)").find('.lengH').val()).trigger("change");
			    	  $("#inch").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
			    	  $("#fraction").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change"); 
			    	  
			    	  $("#boltgradeM").val($row.find("td:nth-child(22)").text()).trigger("change");
			     	  $("#boltdiaM").val($row.find("td:nth-child(23)").find('input').val()).trigger("change");
			    	  $("#boltgageBeam").val($row.find("td:nth-child(24)").find('input').val()).trigger("change");
                      $("#noofboltrwM").val($row.find("td:nth-child(25)").text()).trigger("change");
			    	  $("#boltspcM").val($row.find("td:nth-child(26)").find('input').val()).trigger("change");
			    	  $("#edgedistanceM").val($row.find("td:nth-child(27)").find('input').val()).trigger("change");
			    	  $("#ddlcjpM").val($row.find("td:nth-child(28)").text()).trigger("change");
			    	  $("#thisdisableM").val($row.find("td:nth-child(29)").find('input').val()).trigger("change");   
			    	  $("#weldlengthM").val($row.find("td:nth-child(30)").find('.lengH').val()).trigger("change");
			    	  $("#inchM").val($row.find("td:nth-child(30)").find('.inchH').val()).trigger("change");   
			    	  $("#fractionM").val($row.find("td:nth-child(30)").find('.fracH').val()).trigger("change");   
			    	  
			    	  $("#ddlGtoC").val($row.find("td:nth-child(31)").text()).trigger("change");
			    	   
			    	  $("#btocClip1").val($row.find("td:nth-child(33)").text()).trigger("change");
			    	  $("#btocClip2").val($row.find("td:nth-child(34)").text()).trigger("change");
			    	  $("#GussettoColPlateThickness").val($row.find("td:nth-child(35)").find('input').val()).trigger("change");
				    	
			    	  
			    	  
			    	  $("#clipangletxt1").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
			    	  $("#osltxt1").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change"); 
			    	
			    	  
			   	
			    	   if($row.find("td:nth-child(31)").text()=='Conventional Shear Plate'|| $row.find("td:nth-child(31)").text()=='Extended Shear Plate'){
				        	 $("#Method_FB_FWdv").show();
				        	 $("#Method_FW_FWdv").hide();
				        	 $("#Method_FBdv").hide();
				        	 $("#Method_FB_FW").val($row.find("td:nth-child(32)").text()).trigger("change");
				        	 if ($row.find("td:nth-child(31)").text()=='Conventional Shear Plate') {
				        		  $("#bsYdiv,#bsXdiv").show();
							}
				            
				    	 }
				    	 else if ($row.find("td:nth-child(31)").text()=='Directly Welded') {
				    		 $("#Method_FB_FWdv").hide();
				    		 $("#Method_FW_FWdv").show();
				    		 $("#Method_FBdv").hide();
				    		 $("#Method_FW_FW").val($row.find("td:nth-child(32)").text()).trigger("change");
				             
						}else{
							 $("#Method_FB_FWdv").hide();
				    		 $("#Method_FW_FWdv").hide();
				    		 $("#Method_FBdv").show();
							 $("#Method_FB").val($row.find("td:nth-child(32)").text()).trigger("change");
						
				       
						}
			    	   
			    	   
			    	     $("#boltgradeL").val($row.find("td:nth-child(38)").text()).trigger("change");
				     	  $("#boltdaimeterL").val($row.find("td:nth-child(39)").find('input').val()).trigger("change");
				    	  $("#boltgageColumn").val($row.find("td:nth-child(40)").find('input').val()).trigger("change");
	                      $("#noofboltrwL").val($row.find("td:nth-child(41)").text()).trigger("change");
				    	  $("#noofboltColumns").val($row.find("td:nth-child(42)").text()).trigger("change");
				    	  $("#boltspacingL").val($row.find("td:nth-child(43)").find('input').val()).trigger("change");
				    	  $("#edgedistanceL").val($row.find("td:nth-child(44)").find('input').val()).trigger("change");
				    	  $("#boltspcXcol").val($row.find("td:nth-child(45)").find('input').val()).trigger("change");
				    	  $("#boltspcYcol").val($row.find("td:nth-child(46)").find('input').val()).trigger("change");
				    	  $("#ddlcjp2").val($row.find("td:nth-child(47)").text()).trigger("change");
					    
				    	
					      
			    	   
					 $("#GussetendPlateThickness").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");  
			    	 $("#clipangletxt1").val($row.find("td:nth-child(20)").text()).trigger("change");   
			    	 $("#osltxt1").val($row.find("td:nth-child(21)").text()).trigger("change"); 
			    	  
			    	 $("#clipangletxt2").val($row.find("td:nth-child(36)").text()).trigger("change");   
			    	 $("#osltxt2").val($row.find("td:nth-child(37)").text()).trigger("change"); 
			    	 $("#thisdisable2").val($row.find("td:nth-child(48)").find('input').val()).trigger("change"); 
			    	  $("#shearPLft").val($row.find("td:nth-child(49)").find('.lengH').val()).trigger("change");
			    	  $("#shearPLin").val($row.find("td:nth-child(49)").find('.inchH').val()).trigger("change");   
			    	  $("#shearPLfr").val($row.find("td:nth-child(49)").find('.fracH').val()).trigger("change");   
			    	  $("#weldWidth").val($row.find("td:nth-child(50)").find('.lengH').val()).trigger("change");
			    	  $("#Widthin").val($row.find("td:nth-child(50)").find('.inchH').val()).trigger("change");   
			    	  $("#Widthfr").val($row.find("td:nth-child(50)").find('.fracH').val()).trigger("change");   
			    	  if ($row.find("td:nth-child(51)").find('input').val()!="undefined" && $row.find("td:nth-child(51)").find('input').val()!="" &&$row.find("td:nth-child(51)").find('input').val()!="null") {
			    		  $("#stabilizerplate,#showSP").show();	 
			    	      $("#spYesNo").val("Yes").trigger("change"); 
			    		  $("#stabilizerPT").val($row.find("td:nth-child(51)").find('input').val()).trigger("change");
			    		  $("#stabilizerWType").val($row.find("td:nth-child(52)").text()).trigger("change");
			    		  $("#stabilizerWSize").val($row.find("td:nth-child(53)").find('input').val()).trigger("change");  
						
					    }else{
					    	 $("#spYesNo").val("No").trigger("change"); 
						 $("#stabilizerplate,#showSP").hide();	 
					  }
			    	 
			    	}
			    	
			    });
			  
			  
		  
			  $("#recall").click(function(){

				  var rowCount = $('#table tr').length;
					
					if (rowCount > 1) {
			 		 $row=$('#table tr:last');
			 		   $("#braceShapeH").val($row.find("td:nth-child(4)").text()).trigger("change");
		    	        if ($row.find("td:nth-child(4)").text()=="W") {	
		    	        	$("#VBtoGMethod_FBdv").show();
		    	        	$("#VBtoGMethod_FB").val($row.find("td:nth-child(7)").text()).trigger("change");
		    	        	$("#VBtoGMethod_FB_FWdv").hide();
		    	       	} else {
		    	       		$("#VBtoGMethod_FB_FWdv").show();
		    	        	$("#VBtoGMethod_FB_FW").val($row.find("td:nth-child(7)").text()).trigger("change");
		    	        	$("#VBtoGMethod_FBdv").hide();
				    	}
		    	        
		    	        $("#connectionTypeV").val($row.find("td:nth-child(17)").text()).trigger("change");
		    	       
		    	        
				   	    if($row.find("td:nth-child(17)").text()=='End Plate'||$row.find("td:nth-child(17)").text()=='Clip Angle'){ 
				             
				          $("#v2BtoGMethod_FB").val($row.find("td:nth-child(18)").text()).trigger("change");
				              
				         }
				         else if($row.find("td:nth-child(17)").text()=='Directly Welded'|$row.find("td:nth-child(17)").text()=='Chevron'){ 
				            	
				            $("#v2BtoGMethod_FB_FW").val($row.find("td:nth-child(18)").text()).trigger("change");
				            	  
				            } 
				   	 
				     	
				     	
				   	       
				       
				         
				  connectionmarkedit=$row.find("td:nth-child(3)").text();
				  $("#conmark").val($row.find("td:nth-child(3)").text()).trigger("change");   	
		    	  $("#braceProfile").val($row.find("td:nth-child(5)").text()).trigger("change");
		    	  $("#GussetPlateThickness").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");
		    	  $("#connectionMethodH").val($row.find("td:nth-child(7)").text()).trigger("change");
		    	  $("#boltgrade").val($row.find("td:nth-child(8)").text()).trigger("change");
		    	  $("#boltdia").val($row.find("td:nth-child(9)").find('input').val()).trigger("change");
		    	  $("#noofboltrw").val($row.find("td:nth-child(10)").text()).trigger("change");
		    	  $("#noofboltrwClaw").val($row.find("td:nth-child(11)").text()).trigger("change");
		    	  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
		    	  $("#edgedistance").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
		    	  $("#ddlcjp").val($row.find("td:nth-child(14)").text()).trigger("change");
		    	  $("#thisdisable").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");   
		    	  $("#weldlength").val($row.find("td:nth-child(16)").find('.lengH').val()).trigger("change");
		    	  $("#inch").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
		    	  $("#fraction").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change"); 
		    	  
		    	  $("#boltgradeM").val($row.find("td:nth-child(22)").text()).trigger("change");
		     	  $("#boltdiaM").val($row.find("td:nth-child(23)").find('input').val()).trigger("change");
		    	  $("#boltgageBeam").val($row.find("td:nth-child(24)").find('input').val()).trigger("change");
                 $("#noofboltrwM").val($row.find("td:nth-child(25)").text()).trigger("change");
		    	  $("#boltspcM").val($row.find("td:nth-child(26)").find('input').val()).trigger("change");
		    	  $("#edgedistanceM").val($row.find("td:nth-child(27)").find('input').val()).trigger("change");
		    	  $("#ddlcjpM").val($row.find("td:nth-child(28)").text()).trigger("change");
		    	  $("#thisdisableM").val($row.find("td:nth-child(29)").find('input').val()).trigger("change");   
		    	  $("#weldlengthM").val($row.find("td:nth-child(30)").find('.lengH').val()).trigger("change");
		    	  $("#inchM").val($row.find("td:nth-child(30)").find('.inchH').val()).trigger("change");   
		    	  $("#fractionM").val($row.find("td:nth-child(30)").find('.fracH').val()).trigger("change");   
		    	  
		    	  $("#ddlGtoC").val($row.find("td:nth-child(31)").text()).trigger("change");
		    	   
		    	  $("#btocClip1").val($row.find("td:nth-child(33)").text()).trigger("change");
		    	  $("#btocClip2").val($row.find("td:nth-child(34)").text()).trigger("change");
		    	  $("#GussettoColPlateThickness").val($row.find("td:nth-child(35)").find('input').val()).trigger("change");
			    	
		    	  
		    	  
		    	  $("#clipangletxt1").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
		    	  $("#osltxt1").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change"); 
		    	
		    	  
		   	
		    	   if($row.find("td:nth-child(31)").text()=='Conventional Shear Plate'|| $row.find("td:nth-child(31)").text()=='Extended Shear Plate'){
			        	 $("#Method_FB_FWdv").show();
			        	 $("#Method_FW_FWdv").hide();
			        	 $("#Method_FBdv").hide();
			        	 $("#Method_FB_FW").val($row.find("td:nth-child(32)").text()).trigger("change");
			        	 if ($row.find("td:nth-child(31)").text()=='Conventional Shear Plate') {
			        		  $("#bsYdiv,#bsXdiv").show();
						}
			            
			    	 }
			    	 else if ($row.find("td:nth-child(31)").text()=='Directly Welded') {
			    		 $("#Method_FB_FWdv").hide();
			    		 $("#Method_FW_FWdv").show();
			    		 $("#Method_FBdv").hide();
			    		 $("#Method_FW_FW").val($row.find("td:nth-child(32)").text()).trigger("change");
			             
					}else{
						 $("#Method_FB_FWdv").hide();
			    		 $("#Method_FW_FWdv").hide();
			    		 $("#Method_FBdv").show();
						 $("#Method_FB").val($row.find("td:nth-child(32)").text()).trigger("change");
					
			       
					}
		    	   
		    	   
		    	     $("#boltgradeL").val($row.find("td:nth-child(38)").text()).trigger("change");
			     	  $("#boltdaimeterL").val($row.find("td:nth-child(39)").find('input').val()).trigger("change");
			    	  $("#boltgageColumn").val($row.find("td:nth-child(40)").find('input').val()).trigger("change");
                     $("#noofboltrwL").val($row.find("td:nth-child(41)").text()).trigger("change");
			    	  $("#noofboltColumns").val($row.find("td:nth-child(42)").text()).trigger("change");
			    	  $("#boltspacingL").val($row.find("td:nth-child(43)").find('input').val()).trigger("change");
			    	  $("#edgedistanceL").val($row.find("td:nth-child(44)").find('input').val()).trigger("change");
			    	  $("#boltspcXcol").val($row.find("td:nth-child(45)").find('input').val()).trigger("change");
			    	  $("#boltspcYcol").val($row.find("td:nth-child(46)").find('input').val()).trigger("change");
			    	  $("#ddlcjp2").val($row.find("td:nth-child(47)").text()).trigger("change");
				    
			    	
				      
		    	   
				 $("#GussetendPlateThickness").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");  
		    	 $("#clipangletxt1").val($row.find("td:nth-child(20)").text()).trigger("change");   
		    	 $("#osltxt1").val($row.find("td:nth-child(21)").text()).trigger("change"); 
		    	  
		    	 $("#clipangletxt2").val($row.find("td:nth-child(36)").text()).trigger("change");   
		    	 $("#osltxt2").val($row.find("td:nth-child(37)").text()).trigger("change"); 
		    	 $("#thisdisable2").val($row.find("td:nth-child(48)").find('input').val()).trigger("change"); 
		    	  $("#shearPLft").val($row.find("td:nth-child(49)").find('.lengH').val()).trigger("change");
		    	  $("#shearPLin").val($row.find("td:nth-child(49)").find('.inchH').val()).trigger("change");   
		    	  $("#shearPLfr").val($row.find("td:nth-child(49)").find('.fracH').val()).trigger("change");   
		    	  $("#weldWidth").val($row.find("td:nth-child(50)").find('.lengH').val()).trigger("change");
		    	  $("#Widthin").val($row.find("td:nth-child(50)").find('.inchH').val()).trigger("change");   
		    	  $("#Widthfr").val($row.find("td:nth-child(50)").find('.fracH').val()).trigger("change");   
		    	  if ($row.find("td:nth-child(51)").find('input').val()!="undefined" && $row.find("td:nth-child(51)").find('input').val()!="" &&$row.find("td:nth-child(51)").find('input').val()!="null") {
		    		  $("#stabilizerplate,#showSP").show();	 
		    	      $("#spYesNo").val("Yes").trigger("change"); 
		    		  $("#stabilizerPT").val($row.find("td:nth-child(51)").find('input').val()).trigger("change");
		    		  $("#stabilizerWType").val($row.find("td:nth-child(52)").text()).trigger("change");
		    		  $("#stabilizerWSize").val($row.find("td:nth-child(53)").find('input').val()).trigger("change");  
					
				    }else{
				    	 $("#spYesNo").val("No").trigger("change"); 
					 $("#stabilizerplate,#showSP").hide();	 
				  }
	    	 
					}
			 }); 
			  

		 	    $("#btnDeleteRows").click(function(){	
		 	    	$(".cci-select").each(function(index, Element){
		 	    		if($(this).prop('checked')==true){
		 	    			var index = listvalues.indexOf($(this).closest("tr").find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase());
		 	    			
		 	    			if (index > -1) {
		 	    				
		 	    				listvalues.splice(index, 1);
		 	    			}
		 	    			   
		 	    		$(this).closest("tr").remove();
		 	    	
		 	    		
		 	    		}
		 	    		var rowCount = $('#table tr').length;
		 	    		if (rowCount==2) {
		 	    			 $("#add-new-value").show();
		 	    		     $(".memtype-table").hide();
		 	    		}
		 	    	
		 	    	});
		 	    	$("#deleteModal").hide();	
		 	    	addorupdate();
	    	    	
		 	    });

		 	    $("#btncloseRows").click(function(){	
		 	    	 $("#deleteModal").hide();
		 	    	
		 	    });
		 	    
		 	    

	    	 	  function addconnectionmark() {
	    	 		 $('#thisdisableMDIVRedbodr .select2-container--default .select2-selection--single').css("border-color","");
	    			  connectionmarkvalues=[];
	    			  connectionjson=connectionmarkToJSON('table') ;
	    			  
	    			  connectionmarkvalues.push($('#conmark').val());
	    			 
	    				$.ajax({
	    		 		   type : 'POST',
	    		 	          url: "/bimspring/saveConnectionMarks",	          
	    		 	          data : {connectiongrouptype:"VerticalBrace",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
	    		 	          success : function(data, success) {
	    		 	        	var status=data;
	    		 	        	
	    		 	        	  if (status=="false") {
	    		 	        		
	    			 	       		 $('#alert_model_placeholder').append
	    			 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
	    			 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	    			 		                '</div>')         
	    			 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
	    			 		             	$("#alertdiv").remove();
	    			
	    			 		         }, 2500);
	    			 	      
	    			 	       		
	    						}
	    		 	        	  else{
	    		 	        		 listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	    		 	   			 $(".add-new-value").hide();
	    		 	   	         $(".memtype-table").show();
	    		 	   	         $(".left").show();
	    		 	   	         $(".editmemtype .rightFloat").hide();
	    		 	   	            
	    		 	   	             var boltdia= $("#boltdia option:selected").text()+ '"';
	    		 	    	         var boltdiaM= $("#boltdiaM option:selected").text();
	    		 	    	         var GussetPlateThickness=  $("#GussetPlateThickness option:selected").text()+ '"';
	    		 	    	         var weldsize= $("#thisdisable option:selected").text()+ '"';
	    		 	    	         var weldsizeM= $("#thisdisableM option:selected").text()+ '"';
	    		 	    	         var edgedistance=$("#edgedistance option:selected").text()+ '"';
	    		 	    	         var boltspc=$("#boltspc option:selected").text()+ '"';
	    		 	    	         var boltspcM=$("#boltspcM option:selected").text()+ '"';
	    		 	    	         var weldlength=feetInchFormater($('#weldlength').val(),$('#inch').val(),$("#fraction option:selected").text());
	    		 	    	         var noofboltrwClaw=$("#noofboltrwClaw option:selected").text();
	    		 	    	         var edgedistanceM=$("#edgedistanceM option:selected").text();
	    		 	    	         var weldlengthM=feetInchFormater($('#weldlengthM').val(),$('#inchM').val(),$("#fractionM option:selected").text());
	    		 	    	         var weldlength2=feetInchFormater($('#shearPLft').val(),$('#shearPLin').val(),$("#shearPLfr option:selected").text());
	    		 	    	    
	    		 	   	         if (!$("#shearPLft").val()) {
	    		 	   	        	 weldlength2="";
	    		 	               }
	    		 	   	         
	    		 	   	         if (!$("#edgedistanceM").val()) {
	    		 	   	        	 edgedistanceM="";
	    		 	   			}
	    		 	   	         
	    		 	   	         
	    		 	   	         if (!$("#boltspcM").val()) {
	    		 	   	        	 boltspcM="";
	    		 	   			}
	    		 	   	         if (!$("#boltdiaM").val()) {
	    		 	   	        	 boltdiaM="";
	    		 	   			}
	    		 	   	         if (!$("#boltdia").val()) {
	    		 	   	        	 boltdia="";
	    		 	   			}
	    		 	   	         if (!$("#GussetPlateThickness").val()) {
	    		 	   	        	 GussetPlateThickness="";
	    		 	   			}
	    		 	   	         if (!$("#thisdisable").val()) {
	    		 	   	        	 weldsize="";
	    		 	   			}
	    		 	   	         if (!$("#thisdisableM").val()) {
	    		 	   	        	 weldsizeM="";
	    		 	   			}
	    		 	   	         
	    		 	   	         if (!$("#boltspc").val()) {
	    		 	   	        	 boltspc="";
	    		 	   			}
	    		 	   	         if (!$("#edgedistance").val()) {
	    		 	   	        	 edgedistance="";
	    		 	   			}
	    		 	   	         if (!$("#weldlength").val()) {
	    		 	   	        	 weldlength="";
	    		 	   			}
	    		 	   	         if (!$("#weldlengthM").val()) {
	    		 	   	        	 weldlengthM="";
	    		 	   			}
	    		 	   	         
	    		 	   	         if (!$("#noofboltrwClaw").val()) {
	    		 	   	        	 noofboltrwClaw="";

	    		 	   			}
	    		 	     
	    		 	   	         var boltdaimeterL = $('#boltdaimeterL option:selected').text();
	    		 	   		       if (!$("#boltdaimeterL").val()) {
	    		 	   		    	   boltdaimeterL="";
	    		 	   				}
	    		 	   		       
	    		 	   		    var boltgageBeam = $('#boltgageBeam option:selected').text();
    		 	   		          if (!$("#boltgageBeam").val()) {
    		 	   		            	boltgageBeam="";
    		 	   			      	}
	    		 	   		   
    		 	   		      
  	    		 	   		    var boltgageColumn = $('#boltgageColumn option:selected').text();
      		 	   		          if (!$("#boltgageColumn").val()) {
      		 	   		             boltgageColumn="";
      		 	   			      	}
	    		 	   		       var boltspacingL= $('#boltspacingL option:selected').text();
	    		 	   		         if (!$("#boltspacingL").val()) {
	    		 	   		        	 boltspacingL="";
	    		 	   				}
	    		 	   		       
	    		 	   		       var edgedistanceL= $('#edgedistanceL option:selected').text();
	    		 	   		         if (!$("#edgedistanceL").val()) {
	    		 	   		        	 edgedistanceL="";
	    		 	   				}
	    		 	   		       
	    		 	   		       var weldsizeL= $('#thisdisable2 option:selected').text();
	    		 	   		         if (!$("#thisdisable2").val()) {
	    		 	   		        	 weldsizeL="";
	    		 	   				}
	    		 	   		         
	    		 	   		         
	    		 	   		         
	    		 	   		       var stabilizerPT= $('#stabilizerPT option:selected').text();
	    		 	   		         if (!$("#stabilizerPT").val()) {
	    		 	   		        	 stabilizerPT="";
	    		 	   				}
	    		 	   		     
	    		 	   		       var stabilizerWSize= $('#stabilizerWSize option:selected').text();
	    		 	   		         if (!$("#stabilizerWSize").val()) {
	    		 	   		        	 stabilizerWSize="";
	    		 	   				}
	    		 	   		
	    		 	   		         var BracetoGussetmethodV="";
	    		 	   		   	    if ($("#braceShapeH").val()=="W") {		    		
	    		 	   		   		BracetoGussetmethodV= $("#VBtoGMethod_FB").val();		    		
	    		 	   		    	} else {
	    		 	   		    	BracetoGussetmethodV= $("#VBtoGMethod_FB_FW").val();
	    		 	   		    	}
	    		 	   		   	    
	    		 	   		   	    
	    		 	   		   	       var GussettoBeamConnection="";
	    		 	   		   	    
	    		 	   		   	       if($('#connectionTypeV').val()=='End Plate'||$('#connectionTypeV').val()=='Clip Angle'){ 
	    		 	   		             
	    		 	   		               GussettoBeamConnection=$("#v2BtoGMethod_FB").val();
	    		 	   		              
	    		 	   		            }
	    		 	   		            else if($('#connectionTypeV').val()=='Directly Welded'||$('#connectionTypeV').val()=='Chevron'){ 
	    		 	   		            	
	    		 	   		            	 GussettoBeamConnection= $("#v2BtoGMethod_FB_FW").val();
	    		 	   		            	  
	    		 	   		            } 
	    		 	   		   	    
	    		 	   		   	    
	    		 	   		   	    
	    		 	   		   	    var GussettoColumnConnectionMethod="";
	    		 	   		         
	    		 	   		         if($('#ddlGtoC').val()=='Conventional Shear Plate'||$('#ddlGtoC').val()=='Extended Shear Plate'){
	    		 	   		        	
	    		 	   		        	 GussettoColumnConnectionMethod= $("#Method_FB_FW").val();
	    		 	   		        	if ($('#ddlGtoC').val()=='Conventional Shear Plate') {
	    					        		 $("#bsYdiv,#bsXdiv").show();
	    								}
	    		 	   		    	 }
	    		 	   		    	 else if ($('#ddlGtoC').val()=='Directly Welded') {
	    		 	   		    		
	    		 	   		    		 GussettoColumnConnectionMethod= $("#Method_FW_FW").val();
	    		 	   		             
	    		 	   				}else{
	    		 	   					 GussettoColumnConnectionMethod= $("#Method_FB").val();
	    		 	   		       
	    		 	   				}
	    		 	   		          var boltspcXcol=$("#boltspcXcol option:selected").text()+ '"';
			    		 	   	         if (!$("#boltspcXcol").val()) {
			    		 	   	        	boltspcXcol="";
			    		 	   			}
			    		 	   		      
			    		 	   	         var boltspcYcol=$("#boltspcYcol option:selected").text()+ '"';
		    		 	   	             if (!$("#boltspcYcol").val()) {
		    		 	   	            	boltspcYcol="";
		    		 	   			      }
		    		 	   	             var endPlateThickness=$("#GussetendPlateThickness option:selected").text()+ '"';
		    		 	   	             if (!$("#GussetendPlateThickness").val()) {
		    		 	   	             	endPlateThickness="";
		    		 	   		        	}
		    		 	   	             var GussettoColPlateThickness=$("#GussettoColPlateThickness option:selected").text()+ '"';
	    		 	   	                if (!$("#GussettoColPlateThickness").val()) {
	    		 	   	        	        GussettoColPlateThickness="";
	    		 	   		            	}
	    		 	   	            var weldWidth=feetInchFormater($('#weldWidth').val(),$('#Widthin').val(),$("#Widthfr option:selected").text());
		    		 	    	     if (!$("#weldWidth").val()) {
	    		 	   	               weldWidth="";
		 	   		            	}
		    		 	    	    
	    		 	   	        $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#braceShapeH').val()+'</td><td>'+$('#braceProfile').val()+'</td><td>'+GussetPlateThickness+'<input type="hidden" value='+$('#GussetPlateThickness').val()+'></td><td>'+BracetoGussetmethodV+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+$('#noofboltrwClaw').val()+'</td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+weldlength+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#weldlength').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'><input type="hidden" class="fracHFrac"  value="'+$('#fraction option:selected').text()+ '" /></td><td>'+$('#connectionTypeV').val()+'</td><td>'+GussettoBeamConnection+'</td><td>'+endPlateThickness+'<input type="hidden" value='+$('#GussetendPlateThickness').val()+'></td><td>'+$('#clipangletxt1').val()+'</td><td>'+$('#osltxt1').val()+'</td><td>'+$('#boltgradeM').val()+'</td><td>'+boltdiaM+'<input type="hidden" value='+$('#boltdiaM').val()+'></td><td>'+boltgageBeam+'<input type="hidden" value='+$('#boltgageBeam').val()+'></td><td>'+$('#noofboltrwM').val()+'</td><td>'+boltspcM+'<input type="hidden" value='+$('#boltspcM').val()+'></td><td>'+edgedistanceM+'<input type="hidden" value='+$('#edgedistanceM').val()+'></td><td>'+$('#ddlcjpM').val()+'</td><td>'+weldsizeM+'<input type="hidden" value='+$('#thisdisableM').val()+'></td><td>'+weldlengthM+'<input type="hidden" class="inchH"  value='+$('#inchM').val()+'><input type="hidden" class="lengH"  value='+$('#weldlengthM').val()+'><input type="hidden" class="fracH"  value='+$('#fractionM').val()+'><input type="hidden" class="fracHFrac"   value="'+$('#fractionM option:selected').text()+ '" /></td> <td>'+$('#ddlGtoC').val()+'</td><td>'+GussettoColumnConnectionMethod+'</td><td>'+$('#btocClip1').val()+'</td><td>'+$('#btocClip2').val()+'</td><td>'+GussettoColPlateThickness+'<input type="hidden" value='+$('#GussettoColPlateThickness').val()+'></td><td>'+$('#clipangletxt2').val()+'</td><td>'+$('#osltxt2').val()+'</td><td>'+$('#boltgradeL').val()+'</td><td>'+boltdaimeterL+'<input type="hidden" value='+$('#boltdaimeterL').val()+'></td><td>'+boltgageColumn+'<input type="hidden" value='+$('#boltgageColumn').val()+'></td><td>'+$('#noofboltrwL').val()+'</td><td>'+$('#noofboltColumns').val()+'</td><td>'+boltspacingL+'<input type="hidden" value='+$('#boltspacingL').val()+'></td><td>'+edgedistanceL+'<input type="hidden" value='+$('#edgedistanceL').val()+'></td><td>'+boltspcXcol+'<input type="hidden" value='+$('#boltspcXcol').val()+'></td><td>'+boltspcYcol+'<input type="hidden" value='+$('#boltspcYcol').val()+'></td><td>'+$('#ddlcjp2').val()+'</td><td>'+weldsizeL+'<input type="hidden" value='+$('#thisdisable2').val()+'></td><td>'+weldlength2+'<input type="hidden" class="inchH"  value='+$('#shearPLin').val()+'><input type="hidden" class="lengH"  value='+$('#shearPLft').val()+'><input type="hidden" class="fracH"  value='+$('#shearPLfr').val()+'><input type="hidden" class="fracHFrac" value="'+$('#shearPLfr option:selected').text()+ '" /></td><td>'+weldWidth+'<input type="hidden" class="inchH"  value='+$('#Widthin').val()+'><input type="hidden" class="lengH"  value='+$('#weldWidth').val()+'><input type="hidden" class="fracH"  value='+$('#Widthfr').val()+'><input type="hidden" class="fracHFrac" value="'+$('#Widthfr option:selected').text()+ '" /></td><td>'+stabilizerPT+'<input type="hidden" value='+$('#stabilizerPT').val()+'></td> <td>'+$('#stabilizerWType').val()+'</td><td>'+stabilizerWSize+'<input type="hidden" value='+$('#stabilizerWSize').val()+'></td></tr>');
	    		 	       addorupdate();
	    		 	    	showalertSuccess('Added successfully');
	    		 	        		  
	    		 	        	  }
	    		 	        	  
	    		 	          },error: function (error) {
								if(error.status == 401){
									window.location.href = 'logout';
								}else{
									alert('Sorry! Your session has expired Please select Project again');
									window.location.href='dashboard';
								}
	    			          }
	    		 	          }); 
	    				
	    			
	    		}   
	    	   
	    	   
	    	   
	    	  	 
   	   		   function updateconnectionmark() {
   	   			  connectionmarkvalues=[];
   	   			 var deleteconmarkval=[];
   	   			  connectionmarkvalues.push($('#conmark').val());
   	   			  deleteconmarkval.push(connectionmarkedit);
   	   			  
   	   				$.ajax({
   	   					 type : 'POST',
   	   		 	          url: "/bimspring/saveConnectionMarks",	          
   	   		 	          data : {connectiongrouptype:"VerticalBrace",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
   	   		 	          success : function(data, success) {
   	   		 	        	var status=data;
   	   		 	        	
   	   		 	        	  if (status=="false") {
   	   				 	        		
   	   					 	       		 $('#alert_model_placeholder').append
   	   					 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
   	   					 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
   	   					 		                '</div>')         
   	   					 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
   	   					 		             	$("#alertdiv").remove();
   	   					
   	   					 		         }, 2500);
   	   					 	      
   	   					 	       		
   	   								}else{
   	   				        	  $.ajax({
   	   								   type : 'POST',
   	   							          url: "/bimspring/deleteconnectionmark",	          
   	   							           data : {connectiongrouptype:"VerticalBrace",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
   	   								       
   	   							          success : function(data, success) {
   	   							        	  
   	   							        	  finalupdate();
   	   							         },error: function (error) {
											if(error.status == 401){
												window.location.href = 'logout';
											}else{
												
   	   							        	 $('#alert_model_placeholder').append
   	   							 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
   	   							 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
   	   							 		                '</div>')         
   	   							 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
   	   							 		             	$("#alertdiv").remove();
   	   							
														}, 2500);
													}
   	   							          }
   	   							          }); 
   	   				        	  
   	   								}
   	   				         },error: function (error) {
								if(error.status == 401){
									window.location.href = 'logout';
								}else{
									alert('Sorry! Your session has expired Please select Project again');
									window.location.href='dashboard';
								}
   	   				          }
   	   				          }); 
   	   				 
   	   				}
   	    	      	    	
	    	      	    	 	
   	 	
$("#btnDeleteRows").click(function(){	
connectionmarkvalues=[];
connectionmarkToJSON('table') ;
deleteconnectionmarks("VerticalBrace")

	    	   	
	    	   	
});    	   	 	 	
	    	 	
	    	 	
	    	 	
	    	 	
function finalupdate(){ 
	                  $row.find("td:nth-child(61)").remove();
                	  $row.find("td:nth-child(60)").remove();
                	  $row.find("td:nth-child(59)").remove();
                	  $row.find("td:nth-child(58)").remove();
					  $row.find("td:nth-child(57)").remove();
					  $row.find("td:nth-child(56)").remove();
					  $row.find("td:nth-child(55)").remove();
					  $row.find("td:nth-child(54)").remove();
					  $row.find("td:nth-child(53)").remove();
					  $row.find("td:nth-child(52)").remove();
					  $row.find("td:nth-child(51)").remove();
					  $row.find("td:nth-child(50)").remove();
					  $row.find("td:nth-child(49)").remove();
					  $row.find("td:nth-child(48)").remove();
					  $row.find("td:nth-child(47)").remove();
					  $row.find("td:nth-child(46)").remove();
 	                  $row.find("td:nth-child(45)").remove();
                      $row.find("td:nth-child(44)").remove();
	                  $row.find("td:nth-child(43)").remove();
	                  $row.find("td:nth-child(42)").remove();
	        	  	  $row.find("td:nth-child(41)").remove();
	        		  $row.find("td:nth-child(40)").remove();
	        		  $row.find("td:nth-child(39)").remove();
	        		  $row.find("td:nth-child(38)").remove();
	        		  $row.find("td:nth-child(37)").remove();
	        		  $row.find("td:nth-child(36)").remove();
	        		  $row.find("td:nth-child(35)").remove();
	        		  $row.find("td:nth-child(34)").remove();
	        		  $row.find("td:nth-child(33)").remove();
	        		  $row.find("td:nth-child(32)").remove();
	        		  $row.find("td:nth-child(31)").remove();
	        		  $row.find("td:nth-child(30)").remove();
	        	  	  $row.find("td:nth-child(29)").remove();
	        	  	  $row.find("td:nth-child(28)").remove();
	        	  	  $row.find("td:nth-child(27)").remove();
	        		  $row.find("td:nth-child(26)").remove();
	        	      $row.find("td:nth-child(25)").remove();
	        	      $row.find("td:nth-child(24)").remove();
	        	      $row.find("td:nth-child(23)").remove();
	        	      $row.find("td:nth-child(22)").remove();
	        	      $row.find("td:nth-child(21)").remove();
	        	      $row.find("td:nth-child(20)").remove();
	        	      $row.find("td:nth-child(19)").remove();
	        	      $row.find("td:nth-child(18)").remove();
	        	      $row.find("td:nth-child(17)").remove();
	        	      $row.find("td:nth-child(16)").remove();
	        		  $row.find("td:nth-child(15)").remove();
	            	  $row.find("td:nth-child(14)").remove();
	            	  $row.find("td:nth-child(13)").remove();
	            	  $row.find("td:nth-child(12)").remove();
	            	  $row.find("td:nth-child(11)").remove();
	            	  $row.find("td:nth-child(10)").remove();
	            	  $row.find("td:nth-child(9)").remove();
	            	  $row.find("td:nth-child(8)").remove();
	            	  $row.find("td:nth-child(7)").remove();
	            	  $row.find("td:nth-child(6)").remove();
	            	  $row.find("td:nth-child(5)").remove();
	            	  $row.find("td:nth-child(4)").remove();
	            	  $row.find("td:nth-child(3)").remove();
	            	  $row.find("td:nth-child(2)").remove();
	            	  $row.find("td:nth-child(1)").remove();
	            	
	            		listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	        			 $(".add-new-value").hide();
	        	         $(".memtype-table").show();
	        	         $(".left").show();
	        	         $(".editmemtype .rightFloat").hide();
	        	   
	        	         var boltdia= $("#boltdia option:selected").text()+ '"';
	 	    	         var boltdiaM= $("#boltdiaM option:selected").text();
	 	    	         var GussetPlateThickness=  $("#GussetPlateThickness option:selected").text()+ '"';
	 	    	         var weldsize= $("#thisdisable option:selected").text()+ '"';
	 	    	         var weldsizeM= $("#thisdisableM option:selected").text()+ '"';
	 	    	         var edgedistance=$("#edgedistance option:selected").text()+ '"';
	 	    	         var boltspc=$("#boltspc option:selected").text()+ '"';
	 	    	         var boltspcM=$("#boltspcM option:selected").text()+ '"';
	 	    	         var weldlength=feetInchFormater($('#weldlength').val(),$('#inch').val(),$("#fraction option:selected").text());
	 	    	         var noofboltrwClaw=$("#noofboltrwClaw option:selected").text();
	 	    	         var edgedistanceM=$("#edgedistanceM option:selected").text();
	 	    	         var weldlengthM=feetInchFormater($('#weldlengthM').val(),$('#inchM').val(),$("#fractionM option:selected").text());
	 	    	         var weldlength2=feetInchFormater($('#shearPLft').val(),$('#shearPLin').val(),$("#shearPLfr option:selected").text());
	 	    	    
	 	   	         if (!$("#shearPLft").val()) {
	 	   	        	 weldlength2="";
	 	               }
	 	   	         
	 	   	         if (!$("#edgedistanceM").val()) {
	 	   	        	 edgedistanceM="";
	 	   			}
	 	   	         
	 	   	         
	 	   	         if (!$("#boltspcM").val()) {
	 	   	        	 boltspcM="";
	 	   			}
	 	   	         if (!$("#boltdiaM").val()) {
	 	   	        	 boltdiaM="";
	 	   			}
	 	   	         if (!$("#boltdia").val()) {
	 	   	        	 boltdia="";
	 	   			}
	 	   	         if (!$("#GussetPlateThickness").val()) {
	 	   	        	 GussetPlateThickness="";
	 	   			}
	 	   	         if (!$("#thisdisable").val()) {
	 	   	        	 weldsize="";
	 	   			}
	 	   	         if (!$("#thisdisableM").val()) {
	 	   	        	 weldsizeM="";
	 	   			}
	 	   	         
	 	   	         if (!$("#boltspc").val()) {
	 	   	        	 boltspc="";
	 	   			}
	 	   	         if (!$("#edgedistance").val()) {
	 	   	        	 edgedistance="";
	 	   			}
	 	   	         if (!$("#weldlength").val()) {
	 	   	        	 weldlength="";
	 	   			}
	 	   	         if (!$("#weldlengthM").val()) {
	 	   	        	 weldlengthM="";
	 	   			}
	 	   	         
	 	   	         if (!$("#noofboltrwClaw").val()) {
	 	   	        	 noofboltrwClaw="";

	 	   			}
	 	     
	 	   	         var boltdaimeterL = $('#boltdaimeterL option:selected').text();
	 	   		       if (!$("#boltdaimeterL").val()) {
	 	   		    	   boltdaimeterL="";
	 	   				}
	 	   		       
	 	   		    var boltgageBeam = $('#boltgageBeam option:selected').text();
 	   		          if (!$("#boltgageBeam").val()) {
 	   		            	boltgageBeam="";
 	   			      	}
	 	   		   
 	   		      
		 	   		    var boltgageColumn = $('#boltgageColumn option:selected').text();
	 	   		          if (!$("#boltgageColumn").val()) {
	 	   		             boltgageColumn="";
	 	   			      	}
	 	   		       var boltspacingL= $('#boltspacingL option:selected').text();
	 	   		         if (!$("#boltspacingL").val()) {
	 	   		        	 boltspacingL="";
	 	   				}
	 	   		       
	 	   		       var edgedistanceL= $('#edgedistanceL option:selected').text();
	 	   		         if (!$("#edgedistanceL").val()) {
	 	   		        	 edgedistanceL="";
	 	   				}
	 	   		       
	 	   		       var weldsizeL= $('#thisdisable2 option:selected').text();
	 	   		         if (!$("#thisdisable2").val()) {
	 	   		        	 weldsizeL="";
	 	   				}
	 	   		         
	 	   		         
	 	   		         
	 	   		       var stabilizerPT= $('#stabilizerPT option:selected').text();
	 	   		         if (!$("#stabilizerPT").val()) {
	 	   		        	 stabilizerPT="";
	 	   				}
	 	   		     
	 	   		       var stabilizerWSize= $('#stabilizerWSize option:selected').text();
	 	   		         if (!$("#stabilizerWSize").val()) {
	 	   		        	 stabilizerWSize="";
	 	   				}
	 	   		
	 	   		         var BracetoGussetmethodV="";
	 	   		   	    if ($("#braceShapeH").val()=="W") {		    		
	 	   		   		BracetoGussetmethodV= $("#VBtoGMethod_FB").val();		    		
	 	   		    	} else {
	 	   		    	BracetoGussetmethodV= $("#VBtoGMethod_FB_FW").val();
	 	   		    	}
	 	   		   	    
	 	   		   	    
	 	   		   	       var GussettoBeamConnection="";
	 	   		   	    
	 	   		   	       if($('#connectionTypeV').val()=='End Plate'||$('#connectionTypeV').val()=='Clip Angle'){ 
	 	   		             
	 	   		               GussettoBeamConnection=$("#v2BtoGMethod_FB").val();
	 	   		              
	 	   		            }
	 	   		            else if($('#connectionTypeV').val()=='Directly Welded'||$('#connectionTypeV').val()=='Chevron'){ 
	 	   		            	
	 	   		            	 GussettoBeamConnection= $("#v2BtoGMethod_FB_FW").val();
	 	   		            	  
	 	   		            } 
	 	   		   	    
	 	   		   	    
	 	   		   	    
	 	   		   	    var GussettoColumnConnectionMethod="";
	 	   		         
	 	   		         if($('#ddlGtoC').val()=='Conventional Shear Plate'||$('#ddlGtoC').val()=='Extended Shear Plate'){
	 	   		        	
	 	   		        	 GussettoColumnConnectionMethod= $("#Method_FB_FW").val();
	 	   		        	if ($('#ddlGtoC').val()=='Conventional Shear Plate') {
				        		 $("#bsYdiv,#bsXdiv").show();
							}
	 	   		    	 }
	 	   		    	 else if ($('#ddlGtoC').val()=='Directly Welded') {
	 	   		    		
	 	   		    		 GussettoColumnConnectionMethod= $("#Method_FW_FW").val();
	 	   		             
	 	   				}else{
	 	   					 GussettoColumnConnectionMethod= $("#Method_FB").val();
	 	   		       
	 	   				}
	 	   		          var boltspcXcol=$("#boltspcXcol option:selected").text()+ '"';
    		 	   	         if (!$("#boltspcXcol").val()) {
    		 	   	        	boltspcXcol="";
    		 	   			}
    		 	   		      
    		 	   	         var boltspcYcol=$("#boltspcYcol option:selected").text()+ '"';
		 	   	             if (!$("#boltspcYcol").val()) {
		 	   	            	boltspcYcol="";
		 	   			      }
		 	   	             var endPlateThickness=$("#GussetendPlateThickness option:selected").text()+ '"';
		 	   	             if (!$("#GussetendPlateThickness").val()) {
		 	   	             	endPlateThickness="";
		 	   		        	}
		 	   	             var GussettoColPlateThickness=$("#GussettoColPlateThickness option:selected").text()+ '"';
	 	   	                if (!$("#GussettoColPlateThickness").val()) {
	 	   	        	        GussettoColPlateThickness="";
	 	   		            	}
	 	   	            var weldWidth=feetInchFormater($('#weldWidth').val(),$('#Widthin').val(),$("#Widthfr option:selected").text());
		 	    	     if (!$("#weldWidth").val()) {
	 	   	               weldWidth="";
	   		            	}
		 	    	     if ($("#connectionTypeV").val()=="Chevron") {
		 	    	    	$("#btocClip1,#btocClip2").val('');
						}
		 	    		$row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input checked id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#braceShapeH').val()+'</td><td>'+$('#braceProfile').val()+'</td><td>'+GussetPlateThickness+'<input type="hidden" value='+$('#GussetPlateThickness').val()+'></td><td>'+BracetoGussetmethodV+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+$('#noofboltrwClaw').val()+'</td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+weldlength+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#weldlength').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'><input type="hidden" class="fracHFrac"  value="'+$('#fraction option:selected').text()+ '" /></td><td>'+$('#connectionTypeV').val()+'</td><td>'+GussettoBeamConnection+'</td><td>'+endPlateThickness+'<input type="hidden" value='+$('#GussetendPlateThickness').val()+'></td><td>'+$('#clipangletxt1').val()+'</td><td>'+$('#osltxt1').val()+'</td><td>'+$('#boltgradeM').val()+'</td><td>'+boltdiaM+'<input type="hidden" value='+$('#boltdiaM').val()+'></td><td>'+boltgageBeam+'<input type="hidden" value='+$('#boltgageBeam').val()+'></td><td>'+$('#noofboltrwM').val()+'</td><td>'+boltspcM+'<input type="hidden" value='+$('#boltspcM').val()+'></td><td>'+edgedistanceM+'<input type="hidden" value='+$('#edgedistanceM').val()+'></td><td>'+$('#ddlcjpM').val()+'</td><td>'+weldsizeM+'<input type="hidden" value='+$('#thisdisableM').val()+'></td><td>'+weldlengthM+'<input type="hidden" class="inchH"  value='+$('#inchM').val()+'><input type="hidden" class="lengH"  value='+$('#weldlengthM').val()+'><input type="hidden" class="fracH"  value='+$('#fractionM').val()+'><input type="hidden" class="fracHFrac"   value="'+$('#fractionM option:selected').text()+ '" /></td> <td>'+$('#ddlGtoC').val()+'</td><td>'+GussettoColumnConnectionMethod+'</td><td>'+$('#btocClip1').val()+'</td><td>'+$('#btocClip2').val()+'</td><td>'+GussettoColPlateThickness+'<input type="hidden" value='+$('#GussettoColPlateThickness').val()+'></td><td>'+$('#clipangletxt2').val()+'</td><td>'+$('#osltxt2').val()+'</td><td>'+$('#boltgradeL').val()+'</td><td>'+boltdaimeterL+'<input type="hidden" value='+$('#boltdaimeterL').val()+'></td><td>'+boltgageColumn+'<input type="hidden" value='+$('#boltgageColumn').val()+'></td><td>'+$('#noofboltrwL').val()+'</td><td>'+$('#noofboltColumns').val()+'</td><td>'+boltspacingL+'<input type="hidden" value='+$('#boltspacingL').val()+'></td><td>'+edgedistanceL+'<input type="hidden" value='+$('#edgedistanceL').val()+'></td><td>'+boltspcXcol+'<input type="hidden" value='+$('#boltspcXcol').val()+'></td><td>'+boltspcYcol+'<input type="hidden" value='+$('#boltspcYcol').val()+'></td><td>'+$('#ddlcjp2').val()+'</td><td>'+weldsizeL+'<input type="hidden" value='+$('#thisdisable2').val()+'></td><td>'+weldlength2+'<input type="hidden" class="inchH"  value='+$('#shearPLin').val()+'><input type="hidden" class="lengH"  value='+$('#shearPLft').val()+'><input type="hidden" class="fracH"  value='+$('#shearPLfr').val()+'><input type="hidden" class="fracHFrac" value="'+$('#shearPLfr option:selected').text()+ '" /></td><td>'+weldWidth+'<input type="hidden" class="inchH"  value='+$('#Widthin').val()+'><input type="hidden" class="lengH"  value='+$('#weldWidth').val()+'><input type="hidden" class="fracH"  value='+$('#Widthfr').val()+'><input type="hidden" class="fracHFrac" value="'+$('#Widthfr option:selected').text()+ '" /></td><td>'+stabilizerPT+'<input type="hidden" value='+$('#stabilizerPT').val()+'></td> <td>'+$('#stabilizerWType').val()+'</td><td>'+stabilizerWSize+'<input type="hidden" value='+$('#stabilizerWSize').val()+'></td>');
		    		 	   
		 	    
	 	   		  
                   addorupdate();
	          		  	 	
}	    


$("#btocClip1, #btocClip2").change( function(){
	  $("#ddlcjp2").val(WeldTypeDefaultValue).trigger("change");  
	   $("#thisdisable2").val(weldSizeGP).trigger("change"); 
	 $('#Method_FBdv,#noselect3,.vGtoCweldlength').hide();
	  $("#boltgageColumn").val('').trigger("change");
    if(($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Shop Welded')){ 
    	 $("#gtocBoltDetails,#boltgageDivColumn").show();  
    	  $("#boltgageColumn").val(GageGP).trigger("change");
      	$("#gtocWeldDetailsDIV").show();
      	  getWelddetails(); 
      	  getboltdetails3();
      
    }
    else if($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Field Welded'){  
    	 $("#gtocBoltDetails,#boltgageDivColumn").show();  
    	  $("#boltgageColumn").val(GageGP).trigger("change");
     	$("#gtocWeldDetailsDIV").show();
     	  getWelddetails();  
    } 
    else if($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Field Bolted'||($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Shop Bolted')){  
    	 $("#gtocBoltDetails,#boltgageDivColumn").show();
    	  $("#boltgageColumn").val(GageGP).trigger("change");
          getboltdetails3();
          $("#gtocWeldDetailsDIV").hide();
         $(".vGtoCweldlength").hide();
    }      
    else if(($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Shop Welded')){ 
    	   $("#gtocBoltDetails").hide();
           $("#gtocWeldDetailsDIV").show();
            getWelddetails3();
           $(".vGtoCweldlength").show();
           $("#stabilizerplate").hide();
           $("#showSP").hide();
           $(".showSP,.gtocBoltDetails").val("").trigger("change");
           $("#shearPLin,#shearPLfr,#inch3,#fraction3").val("0").trigger("change");
    }
    else if($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Field Welded'){ 
    	   $("#gtocBoltDetails").hide();
           $("#gtocWeldDetailsDIV").show();
            getWelddetails3();
           $(".vGtoCweldlength").show();
           $("#stabilizerplate").hide();
           $("#showSP").hide();
           $(".showSP,.gtocBoltDetails").val("").trigger("change");
           $("#shearPLin,#shearPLfr,#inch3,#fraction3").val("0").trigger("change");
    	
    } 
    else if(($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Field Bolted')||($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Shop Bolted')){ 
    	$("#gtocBoltDetails,#boltgageDivColumn").show();  
    	$("#boltgageColumn").val(GageGP).trigger("change");
        getboltdetails3();
     	$("#gtocWeldDetailsDIV").show();
     	  getWelddetails();  
    	 
    }  else{
    	 $("#gtocWeldDetailsDIV,#gtocBoltDetails,#boltgageDivColumn").hide();
   } 
    removeRedBoarder();
});




$("#clipangletxtDiv1,#osltxtDiv1,#clipangletxtDiv2,#osltxtDiv2").hide();

function showalertsession(text) {        	
    $('#alert_placeholder').append
    ('<div class="alert alert-success" id="alertdiv"> <i class="fa fa-check-circle"></i> ' + text + 
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
            '</div>')       
     	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
         	$("#alertdiv").remove();

     }, 1000);
   
   }



$("#braceProfile").change( function(){
	if (!$('#braceProfile').val()) {
		$('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#GussetPlateThickness").change( function(){
	if (!$('#GussetPlateThickness').val()) {
		$('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltgrade").change( function(){
	if (!$('#boltgrade').val()) {
		$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltdia").change( function(){
	if (!$('#boltdia').val()) {
		$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#noofboltrwClaw").change( function(){
	if (!$('#noofboltrwClaw').val()) {
		$('#noofboltrwClawDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofboltrwClawDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#boltspc").change( function(){
	if (!$('#boltspc').val()) {
		$('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#edgedistance").change( function(){
	if (!$('#edgedistance').val()) {
		$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#thisdisable").change( function(){
	if (!$('#thisdisable').val()) {
		$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#clipangletxt1").change( function(){
	if (!$('#clipangletxt1').val()) {
		$('#clipangletxtDiv1 .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#clipangletxtDiv1 .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltgradeM").change( function(){
	if (!$('#boltgradeM').val()) {
		$('#boltgradeMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgradeMDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltdiaM").change( function(){
	if (!$('#boltdiaM').val()) {
		$('#boltdiaMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltdiaMDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#noofboltrwM").change( function(){
	if (!$('#noofboltrwM').val()) {
		$('#noofboltrwMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofboltrwMDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#boltspcM").change( function(){
	if (!$('#boltspcM').val()) {
		$('#boltspcMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcMDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#edgedistanceM").change( function(){
	if (!$('#edgedistanceM').val()) {
		$('#edgedistanceMDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#edgedistanceMDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#btoeWeldDetailsV").change( function(){
	if (!$('#btoeWeldDetailsV').val()) {
		$('#btoeWeldDetailsVDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#btoeWeldDetailsVDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#clipangletxt2").change( function(){
	if (!$('#clipangletxt2').val()) {
		$('#clipangletxtDiv2 .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#clipangletxtDiv2 .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltgradeL").change( function(){
	if (!$('#boltgradeL').val()) {
		$('#boltgradeLDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgradeLDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#boltdaimeterL").change( function(){
	if (!$('#boltdaimeterL').val()) {
		$('#boltdaimeterLDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltdaimeterLDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltspcYcol").change( function(){
	if (!$('#boltspcYcol').val()) {
		$('#bsYdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#bsYdiv .select2-container--default .select2-selection--single').css("border-color","");
	}
});


$("#boltspacingL").change( function(){
	if (!$('#boltspacingL').val()) {
		$('#boltspacingLDIv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspacingLDIv .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltspcXcol").change( function(){
	if (!$('#boltspcXcol').val()) {
		$('#bsXdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#bsXdiv .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#edgedistanceL").change( function(){
	if (!$('#edgedistanceL').val()) {
		$('#edgedistanceLDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#edgedistanceLDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltgageColumn").change( function(){
	if (!$('#boltgageColumn').val()) {
		$('#boltgageColumnDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgageColumnDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});


$("#thisdisable2").change( function(){
	if (!$('#thisdisable2').val()) {
		$('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#stabilizerPT").change( function(){
	if (!$('#stabilizerPT').val()) {
		$('#stabilizerPTDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#stabilizerPTDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});


$("#stabilizerWSize").change( function(){
	if (!$('#stabilizerWSize').val()) {
		$('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#noofboltrw").change( function(){
	if (!$('#noofboltrw').val()) {
		$('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});   


$("#boltgageBeam").change( function(){
	if (!$('#boltgageBeam').val()) {
		$('#boltgageDivBeam .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgageDivBeam .select2-container--default .select2-selection--single').css("border-color","");
	}
});  

$("#thisdisableM").change( function(){
	if (!$('#thisdisableM').val()) {
		$('#thisdisableMDIVRedbodr .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		
		  $('#thisdisableMDIVRedbodr .select2-container--default .select2-selection--single').css("border-color","");
	}
});  




function removeRedBoarder() {
	  $('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
	  $('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
      $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
      $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
      $('#noofboltrwClawDIV .select2-container--default .select2-selection--single').css("border-color","");
      $('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","");
      $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
      $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#clipangletxtDiv1 .select2-container--default .select2-selection--single').css("border-color","");

	  $('#boltgradeMDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#boltdiaMDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#noofboltrwMDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#boltspcMDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#edgedistanceMDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#btoeWeldDetailsVDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#clipangletxtDiv2 .select2-container--default .select2-selection--single').css("border-color","");

	  $('#boltgradeLDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#boltdaimeterLDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#bsYdiv .select2-container--default .select2-selection--single').css("border-color","");

	  $('#boltspacingLDIv .select2-container--default .select2-selection--single').css("border-color","");

	  $('#bsXdiv .select2-container--default .select2-selection--single').css("border-color","");

	  $('#edgedistanceLDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#boltgageColumnDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#stabilizerPTDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","");

	  $('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
	
}

		
	






		 	    