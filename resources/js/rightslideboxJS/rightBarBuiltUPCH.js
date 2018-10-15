$(document).ready(function(){
	
  if(wsPlateGrade != null){
  	var profileshgrade = wsPlateGrade.MemberGrades.Channels;
  	
  	if(profileshgrade != null){
  		 $('#modalcolumn1grade').val(plateGrades);
       }	
		
	   $(".allownumericwithdecimal").on("keypress keyup blur",function (event) {
     //this.value = this.value.replace(/[^0-9\.]/g,'');
			$(this).val($(this).val().replace(/[^0-9\.]/g,''));
			if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
				event.preventDefault();
				}
		});
 
	getBasePlateConnectionMark();
	// getSpliceConnectionMark();
	getCapPlateConnectionMark();
  }
   
});

 $("#rtbucweldtype").change(function(){
        var weldType = $("#rtbucweldtype option:selected").val();
      if(weldType==="CJP"){
      $("#rtbucweldsize").attr("disabled", true);
      $("#rtbucweldsize").prop('selectedIndex', 0);
      $("#rtbucweldsize").removeClass("importantRed");
       }else
         {
      $("#rtbucweldsize").attr("disabled", false);
      $("#rtbucweldsize").addClass("importantRed");
       }
    });

	$("#modalcolumn1profile2").change(function(){
		getGradeOnProfileChange();
		//getProfileConnectionMark();
		getBasePlateConnectionMark();
		// getSpliceConnectionMark();
		getCapPlateConnectionMark();
	});

  function getGradeOnProfileChange(){
	  var profilename = "C";
		 getProfileGrades(profilename);
		
		 $.each(profileGrades, function(index,data) {   
			  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
			 
	           $(grades).appendTo('#modalcolumn1grade'); 
	           
	           
			   
			});
  }

function keyDownEvent(e){
   	
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13,  190]) !== -1 ||
         // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
         // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
}
$.each(wsDropDown.SurfacePreparation, function(index,data) {   
		  var surfacepreparation = "<option>"+data.SSPC_No+"</option>";
		  $(surfacepreparation).appendTo('#busurfacePreparation1'); 
		   
		});
	  $.each(wsDropDown.FireProofingType, function(index,data) {   
		  var fireproofingtype = "<option>"+data.FireProofingType+"</option>";
		  $(fireproofingtype).appendTo('#chfireProofing2'); 
		   
		});
	  $.each(wsDropDown.FireRating, function(index,data) {   
		  var firerating = "<option>"+data.FireRating_fra+"</option>";
		  $(firerating).appendTo('#chfireProofing3'); 
		 
		});
	  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
		  var zinccoatingthickness = "<option>"+data.ZincCoatingThickness+"</option>";
		  $(zinccoatingthickness).appendTo('#chgalvanization2'); 
		   
		});
		 $.each(wsDropDown.NoOfCoats, function(index,data) {   
		  var noofcoats = "<option>"+data.Coats+"</option>";
		  $(noofcoats).appendTo('#chprimer2'); 
		 $(noofcoats).appendTo('#chpaint2'); 
		   
		});
			  $.each(wsDropDown.AESSCategory, function(index,data) {   
		  var AESScategory="<option>"+data.AESS+"</option>";
        $(AESScategory).appendTo('#chaess1'); 
       	        		   
		});
			  
			  if(wsFinish != null){
				      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
			    console.log(usedfinish);
			    
			     var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
			 	   var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
			 	   var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
			 	      
			 	      if(paintValue != null){
			 	      $('#chprimer1').val(paintValue);
			 	      document.getElementById("chprimer1").setAttribute("disabled", false);
			 	      }
			 	      if(noOfCoatsprimer != null){
			 	         var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
			 	         $('select[name^="#chprimer2"] option[value=noOfCts]').attr("selected","selected");

			 	      }
			 	   
			 	     $('#chkprimer').change(function() {
			 	        if($(this).prop("checked") == true){
			 	            $('#chprimer1, #chprimer2').attr('disabled', false);
			 	           if(primerperiSPreparation != null){
			 	    		  $('#busurfacePreparation1').val(primerperiSPreparation);
			 	    	  }
			 	        } else {
			 	            $('#chprimer1, #chprimer2').attr('disabled', true);

			 	        }
			 	    });
			  if(usedfinish == "Primer"){
			    	 $('#chkprimer').prop('checked', true);
			    	  $('#chknopaint').attr('checked', true);
			    	 $('#chprimer1,#chprimer2').attr('disabled', false);	
			    	 if(primerperiSPreparation != null){
			    		  $('#busurfacePreparation1').val(primerperiSPreparation);
			    	  }
				    } 

			    var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
			    if(usedfinish != "Galvanizing" &&  SPreparation != null){
			    	 $('#chkprimer').prop('checked', true);
			    	  $('#chknopaint').attr('checked', true);
			    	 $('#chprimer1,#chprimer2').attr('disabled', false);	
			    	 if(primerperiSPreparation != null){
			    		  $('#csurfacePreparation1').val(primerperiSPreparation);
			    	  }
			    }
			      var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
			      var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
			      var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
			       if(paintValue != null){
			       $('#chpaint1').val(paintValue);
			       document.getElementById("chpaint1").setAttribute("disabled", false);
			       }
			       
			       if(noOfCoatspaint != null){
			          var noOfCts="<option value>"+noOfCoatspaint+"</option>";
			          $('select[name^="#chpaint2"] option[value=noOfCts]').attr("selected","selected");
			       }
			       $('#chkpaint').change(function() {
			           if($(this).prop("checked") == true){
			               $('#chpaint1, #chpaint2').attr('disabled', false);
			               if(paintperiSPreparation != null){
					    		  $('#busurfacePreparation1').val(paintperiSPreparation);
					    	  }
			           } else {
			               $('#chpaint1, #chpaint2').attr('disabled', true);
			           }
			           if($('#chkprimer').prop("checked") == true){
			               $('#chkprimer').removeAttr("disabled");
			           } else {
			               $('#chkprimer').removeAttr("disabled");
			           }
			           $('#chgalvanization2').attr('disabled', true);
			       });
			       if(usedfinish == "Paint"){
				    	  $('#chkpaint').attr('checked', true);
				    	  $('#chpaint1, #chpaint2').attr('disabled', false);
				    	  if(paintperiSPreparation != null){
				    		  $('#busurfacePreparation1').val(paintperiSPreparation);
				    	  }
				      }
			  
			 			  
			 var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
			 var	category = wsFinish.Finish.AESS.Category;
			 	   
			 if(category != null){   
			 	      var aess="<option value>"+category+"</option>";
			 		   $('select[name^="#chaess1"] option[value=aess]').attr("selected","selected");
			 }
			 $('#chkaess').change(function() {
			        if($(this).prop("checked") == true){
			            $('#chaess1').attr('disabled', false);
			            if(aessperiSPreparation != null){
			      		  $('#busurfacePreparation1').val(aessperiSPreparation);
			      	  }
			        } else {
			            $('#chaess1').attr('disabled', true);
			        }
			        if($('#chkprimer').prop("checked") == true){
			            $('#chkprimer').removeAttr("disabled");
			        } else {
			            $('#chkprimer').removeAttr("disabled");
			        }
			        $('#chpaint1, #chpaint2, #chgalvanization2, #chfireProofing2, #chfireProofing3').attr('disabled', true); 
			    });
			  if(usedfinish == "AESS"){
		    	  $('#chkaess').attr('checked', true);
		    	  $('#chaess1').attr('disabled', false);
		    	  if(aessperiSPreparation != null){
		    		  $('#busurfacePreparation1').val(aessperiSPreparation);
		    	  }
		      }
			  	   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
			  	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
			  	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
			 	   
				 	      
			 	      if(fireRating != null){
			 	      var fireRatingval="<option value>"+fireRating+"</option>";
			 	      $('select[name^="#chfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
			 	      }
			 	      if(fireProofingType != null){
			 	         var fireProofing="<option value>"+fireProofingType+"</option>";
			 	         $('select[name^="#chfireProofing3"] option[value=fireProofing]').attr("selected","selected");
			 	      }
			 	     $('#chkfireproofing').change(function() {
			 	        if($(this).prop("checked") == true){
			 	            $('#chfireProofing2, #chfireProofing3').attr('disabled', false);
			 	           if(fpperiSPreparation != null){
					       		$('#busurfacePreparation1').val(fpperiSPreparation);
					       	}
			 	        } else {
			 	            $('#chfireProofing2, #chfireProofing3').attr('disabled', true);
			 	        }  
			 	        if($('#chkprimer').prop("checked") == true){
			 	            $('#chkprimer').removeAttr("disabled");
			 	        } else {
			 	            $('#chkprimer').removeAttr("disabled");
			 	        }
			 	        $('#chpaint1, #chpaint2, #chgalvanization2, #chaess1').attr('disabled', true);  
			 	        // $('#chkprimer').removeAttr("disabled");
			 	    });
				      if(usedfinish == "Fire proofing"){
				       	  $('#chkfireproofing').attr('checked',true);
				       	  $('#chfireProofing2, #chfireProofing3').attr('disabled', false);
				       	
					    }
			 	   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
			 	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
			 	      if(zincCoatingThickness != null){
			 	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
			 	      $('select[name^="#chgalvanization2"] option[value=zincCoating]').attr("selected","selected");
			 	      }
			 	     $('#chkgalvanize').change(function() {
			 	        if($(this).prop("checked") == true){
			 	            $('#chgalvanization2').attr('disabled', false);
			 	           if(galperiSPreparation != null){
					     	 	 $('#busurfacePreparation1').val(galperiSPreparation);
					     	 	   } 
			 	        } else {
			 	            $('#chgalvanization2').attr('disabled', true);
			 	        }
			 	        if($('#chkprimer').prop("checked") == true){
			 	            $('#chkprimer').prop('checked', false);
			 	            $('#chkprimer').attr('disabled', true);
			 	        } 
			 	        else {
			 	            $('#chkprimer').prop('checked', false);
			 	            $('#chkprimer').attr('disabled', true);
			 	        }
			 	        $('#chprimer1, #chprimer2, #chpaint1, #chpaint2, #chfireProofing2, #chfireProofing3, #chaess1').attr('disabled', true);
			 	        // $("#chkprimer").attr('disabled', 'disabled');
			 	    });
			 	     if(usedfinish == "Galvanizing"){
				    	  $('#chkgalvanize').attr('checked', true);
				    	  $('#chgalvanization2').attr('disabled', false);
				    	  $('#chkprimer').prop('checked', false);
				            $('#chkprimer').attr('disabled', true);
				            if(galperiSPreparation != null){
				     	 	 $('#busurfacePreparation1').val(galperiSPreparation);
				     	 	   }  
				      }
			 	   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
			 	  $('#chknopaint').change(function() {
			 	        if($('#chkprimer').prop("checked") == true){
			 	            $('#chkprimer').attr('disabled', false);
			 	           if(nopperiSPreparation != null){
			 		 			 $('#busurfacePreparation1').val(nopperiSPreparation);
			 		 		 	   }
			 	        } else {
			 	            $('#chkprimer').attr('disabled', false);
			 	        }
			 	        if($('#chkprimer').prop("checked") == true){
			 	            $('#chkprimer').removeAttr("disabled");
			 	        } else {
			 	            $('#chkprimer').removeAttr("disabled");
			 	        }
			 	        $('#chpaint1, #chpaint2, #chgalvanization2, #chfireProofing2, #chfireProofing3, #chaess1').attr('disabled', true);
			 	    });
				 	  if(usedfinish == "NoPaint"){
			 		  $('#chknopaint').attr('checked', true);
			 		
			 	  }
			  }   

 $.each( wsDropDown.ChannelProfile, function(key, value) {
					         

					         var profiles="<option>"+value.Profile+"</option>";

					               $(profiles).appendTo('#modalcolumn1profile2,#columnmodal1profile,#columnmodal1profile1'); 
					               
					           
					       });

 
					    $.each(wsDropDown.Fraction, function(index,data) {   
				  			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc1baseelevationfr');
				  			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc1topelevationfr');
				  			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc1spliceel1fr');
				  			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc1spliceel2fr');
				  			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc1platewidthfr');
				  			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc1platelengthfr');
				  			
				  			
				   		   
				   		});
				  		  
				  		  $('#bc1baseelevationfr').val("0");
				  		  $('#bc1topelevationfr').val("0");
				  		  $('#bc1spliceel1fr').val("0");
				  		  $('#bc1spliceel2fr').val("0");
				  		  $('#bc1platewidthfr').val("0");
				  		  $('#bc1platelengthfr').val("0");
				  		
				  		    
				  		  
				  		$.each(wsDropDown.Inch, function(index,data) {   
				  			
				  			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc1baseelevationin');
				  			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc1topelevationin');

				  			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc1spliceel1in');
				  			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc1spliceel2in');
				  			  $('<option>').val(data.Incs).text(data.Inch).appendTo('#bc1platewidthin');
				  			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc1platelengthin');
				  			
				  			  
				   		});
				  		 $('#bc1baseelevationin').val("0");
				  		 $('#bc1topelevationin').val("0");
				  		 $('#bc1spliceel1in').val("0");
				  		 $('#bc1spliceel2in').val("0");
				  			    $('#bc1platewidthin').val("0");
				  			    $('#bc1platelengthin').val("0");
				  			  

				       	  $.each(wsDropDown.WeldType, function(index,data) {   
				       		  var weldtype = "<option>"+data.wtype+"</option>";
				       		  $(weldtype).appendTo('#columnmodal1weldtype1,#columnmodal1weldtype'); 
				       		   
				       		});
				       	  $.each(wsDropDown.WeldSize, function(index,data) {   
				       		  var weldsize = "<option>"+data.weld_fra+"</option>";
				       		  $(weldsize).appendTo('#columnmodal1weldsize1,#columnmodal1weldsize'); 
				       		   
				       		});
				       	  $.each(wsDropDown.SurfacePreparation, function(index,data) {   
				       		  var surfacepreparation = "<option>"+data.SSPC_No+"</option>";
				       		  $(surfacepreparation).appendTo('#chsurfacePreparation1,#chgalvanization1,#chfireProofing1'); 
				       		   
				       		});
				       	  $.each(wsDropDown.FireProofingType, function(index,data) {   
				       		  var fireproofingtype = "<option>"+data.FireProofingType+"</option>";
				       		  $(fireproofingtype).appendTo('#chfireProofing2'); 
				       		   
				       		});
				       	  $.each(wsDropDown.FireRating, function(index,data) {   
				       		  var firerating = "<option>"+data.FireRating_fra+"</option>";
				       		  $(firerating).appendTo('#chfireProofing3'); 
				       		   
				       		});
				       	  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
				       		  var zinccoatingthickness = "<option>"+data.ZincCoatingThickness+"</option>";
				       		  $(zinccoatingthickness).appendTo('#chgalvanization2'); 
				       		   
				       		});
				       	  $.each(wsDropDown.NoOfCoats, function(index,data) {   
				       		  var noofcoats = "<option>"+data.Coats+"</option>";
				       		  $(noofcoats).appendTo('#bcprimer2'); 
				       		   
				       		});
				       	  $.each(wsDropDown.NoOfCoats, function(index,data) {   
				       		  var noofcoats = "<option>"+data.Coats+"</option>";
				       		  $(noofcoats).appendTo('#chprimer2,#chpaint2'); 
				       		   
				       		});
				       	  
				       	  
				   		       	  
				       	  /* $.each(wsDropDown.MaterialGrade, function(index,data) {   
				       		  var grades="<option>"+data.MaterialGrade+"</option>";
				                  $(grades).appendTo('#moadalcolumn1grade'); 
				       		   
				       		});
				       	  
 */				       	  
				       	  
				   	 var builtup = "<option>"+"Built-Up Column"+"</option>"
		                $(builtup).appendTo('#columntype').prop('selected', true); 
				   	 
				       	  $.each(wsDropDown.PlateGrade, function(index,data) {   
				     		  var plategrade="<option>"+data.MaterialGrade+"</option>";
				                $(plategrade).appendTo('#bc1plategrade'); 
				               	        		   
				     		});
				     	  $.each(wsDropDown.PlateThickness, function(index,data) {   
				     		  var platethickness="<option>"+data.tp_fra+"</option>";
				                $(platethickness).appendTo('#bc1platethickness'); 
				               	        		   
				     		});
				       	  $.each(wsDropDown.DataSource, function(index,data) {   
				       		  var datasource="<option>"+data.DataSource+"</option>";
				                  $(datasource).appendTo('#bc1datasource'); 
				       		   
				       		});
				       	  $.each(wsDropDown.SpliceCount, function(index,data) {   
				       		  var splicecount="<option>"+data.Count+"</option>";
				                  $(splicecount).appendTo('#splicecount'); 
				       		   
				       		});
				       	 
				       	  $.each(wsDropDown.AESSCategory, function(index,data) {   
				       		  var AESScategory="<option>"+data.AESS+"</option>";
				                  $(AESScategory).appendTo('#chaess1'); 
				                 	        		   
				       		});
				       	 $.each(RefDwgNumFiles, function(index,data) { 
				     		
				     		var referencenum="<option>"+data+"</option>";
				     		
				             $(referencenum).appendTo('#bc1referencenumber1'); 
				             
				     		});
				       	$.each(wsDropDown.ConnectionBetweenChannels, function(index,data) {   
				     		  var spacingch="<option value=\""+data.Conn_Channels+"\">"+data.Conn_Channels+"</option>";
				                $(spacingch).appendTo('#ddlbuiltup1'); 
				               	        		   
				     		});
				    	 $.each(wsDropDown.SpacingBetweenChanels, function(index,data) {   
				     		  var zinccoatingthickness = "<option>"+data.SpacingChannels_fra+"</option>";
				     		  $(zinccoatingthickness).appendTo('#spacingbtwchannel'); 
				     		   
				     		});

    $("#bc1splicecount").change( function(){
    	 getSpliceConnectionMark();
        
    });


  //Populate base plate drop down
  
  function getBasePlateConnectionMark(){
  $('#bc1bpcm').empty();
  var filtered = $.grep(connectionObjList, function (el) {
	   if((el.post == "Column" )&& (el.profile == "Built-Up Member") && (el.type.toLowerCase().indexOf("base")>=0) && (el.baseplate.toLowerCase().indexOf("base")>=0))
	  {
       	return el.profile;
       	
       }
   }); 	
   
   $.each(filtered, function(key, value) {
	       var ConnectionMark="<option>"+value.connectionMark+"</option>";
	      
	         $(ConnectionMark).appendTo('#bc1bpcm'); 
	        
	   }); 
  }
   //Populate cap plate drop down
  function getCapPlateConnectionMark(){
  // $('#chkcapplate').change(function() {
	 // var profilename=$("#modalcolumn1profile2").find('option:selected').text();
	  $('#chks1Cap1').empty();
	  
	  // if( $('#chks1Cap1').is(':enabled')){
		 
		   var filtered1 = $.grep(connectionObjList, function (el) {
			   
			   if((el.post == "Column" )&&(el.profile == "Built-Up Member") && (el.type.toLowerCase().indexOf("base")>=0 )&& (el.baseplate.toLowerCase().indexOf("cap")>=0))
			  {
		        	return el.profile;
		        	
		        }
		    });
		   
		    $.each(filtered1, function(key, value) {
			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
			         $(ConnectionMark).appendTo('#chks1Cap1'); 
			        
			   });   
	   
  }
	
  //populate splice drop down

   function getSpliceConnectionMark(){
		 $('#bc1spcm').empty();
			// var profilename = $("#modalcolumn1profile2").val();	
				//var spliceprofile = $("#spliceel1profile").val();
				var spliceCount=parseInt($('#bc1splicecount').val() );
				if((spliceCount)>0){
					  var cmsplice = $.grep(connectionObjList, function (el2) {
						     
							  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingsplice")>=0){
								  		
					        	return el2.connectionMark;
					        }
							  });
						  
					
					  $.each(cmsplice, function(key, value) {
					        var ConnectionMark="<option value=\""+value.connectionMark+"\">"+value.connectionMark+"</option>";
					       $(ConnectionMark).appendTo('#bc1spcm'); 
					   }); 
					  var cmsplice = $.grep(connectionObjList, function (el2) {
						     
						  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingend")>=0){
							  	
				        	return el2.connectionMark;
				        }
						  });
					  
				    	
				    
				
				  $.each(cmsplice, function(key, value) {
				        var ConnectionMark="<option value=\""+value.connectionMark+"\">"+value.connectionMark+"</option>";
				       $(ConnectionMark).appendTo('#bc1spcm'); 
				   }); 
				  var cmsplice = $.grep(connectionObjList, function (el2) {
					     
					  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingdirectly")>=0){
						  		
			      	return el2.connectionMark;
			      }
					  });
				  
			
			$.each(cmsplice, function(key, value) {
			      var ConnectionMark="<option value=\""+value.connectionMark+"\">"+value.connectionMark+"</option>";
			     $(ConnectionMark).appendTo('#bc1spcm'); 
			 }); 
					}
						
		  }	
   
   $("#splicecount").change( function(){
		  $('#spliceRows').empty();
	var spliceCount=parseInt($('#splicecount').val() );

	for(var i=1;i<=spliceCount;i++) {
	var html=`  <div class="row">
	                                <div class="col-lg-8 col-lg-8 padding10">
	                                    <label class="labelBlack control-label">Splice EL`+i+`</label>
	                                    <div class="row">
	                                        <div class="col-lg-2 col-md-2 p-r-5">
	                                            <Select class="form-control" id="splicee`+i+`posneg">
	                                                <option value="" Selected="Select">+</option>
	                                                <option value="">-</option>
	                                            </Select>
	                                        </div>
	                                        <div class="col-lg-3 col-md-3 padding5">
	                                            <input type="text" class="form-control per70" id="splicePositionLeftEndFt`+i+`" onkeypress = "return AllowNumbersOnly(event)">
	                                            <div class="txt-right">
	                                                ft
	                                            </div>
	                                        </div>
	                                        <div class="col-lg-3 col-md-3 padding5">
	                                            <Select class="form-control per70 splicein" id="splicePositionLeftEndIn`+i+`">
	                                            </Select>
	                                            <div class="txt-right">
	                                                in
	                                            </div>
	                                        </div>
	                                        <div class="col-lg-3 col-md-3 p-l-5">
	                                            <Select class="form-control per70 splicefr" id="splicePositionLeftEndFr`+i+`">
	                                            </Select>
	                                            <div class="txt-right">
	                                                fr
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div class="col-lg-3 col-md-3 padding10">
	                                    <label class="labelBlack control-label">Profile</label>
	                                    <Select class="form-control spliceprofile" id="spliceel`+i+`profile">
	                                        
	                                    </Select>
	                                </div>
	                            </div>`;
	                            $('#spliceRows').append(html);
	        }

	        // Add drop Down values 
	        $.each(wsDropDown.Inch, function(index,data) {   

	        $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein');        

	        });



	        $.each(wsDropDown.Fraction, function(index,data) {   
	        $('<option>').val(data.fr).text(data.fr_fra).appendTo('.splicefr');
	        });

	          $.each(wsDropDown.ChannelProfile, function(index,data) {   
	            $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofile');
	           
	            });
	          var profilename=$("#modalcolumn1profile2").find('option:selected').text();
			    var profiles="<option>"+profilename+"</option>";
			    $(profiles).appendTo('.spliceprofile').prop('selected', true); 
	        });
   
   
   
  // JQuery Code
   $(".referenceSelect").select2({
       placeholder: "Select"
   });
  $(".bc1select1").select2({
        placeholder: "Select"
    });
    $(".bc1select2").select2({
        placeholder: "Select"
    });
   
    $(function() {
      $('.chosen-select').chosen();
      $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });			   

	$('#chkcapplate').change(function() {
		if($(this).prop("checked") == true){
			$('#chks1Cap1, #chks1Cap2, #chks1Cap3, #chks1Cap4').attr('disabled', false);
		} 
		else {
			$('#chks1Cap1, #chks1Cap2, #chks1Cap3, #chks1Cap4').attr('disabled', true);
		}
	});
	 $("#columnmodal1weldtype").change(function() {  
  	    if ( $("#columnmodal1weldtype").val()=="CJP") {
  	 	   $("#columnmodal1weldsize").attr("disabled", true);
  	 	   $("#columnmodal1weldsize").prop('required',false);
  	 	 $("#columnmodal1weldsize").prop('selectedIndex', 0);
  	 	$("#columnmodal1weldsize").removeClass("importantRed");
  	 	}else {
  	 		  $("#columnmodal1weldsize").attr("disabled", false);
  	 		  $("#columnmodal1weldsize").prop('required',true);
  	 		$("#columnmodal1weldsize").addClass("importantRed");
  	 	}

  	 	});
  	$("#columnmodal1weldtype1").change(function() {  
 	    if ( $("#columnmodal1weldtype1").val()=="CJP") {
 	 	   $("#columnmodal1weldsize1").attr("disabled", true);
 	 	   $("#columnmodal1weldsize1").prop('required',false);
 	 	  $("#columnmodal1weldsize1").prop('selectedIndex', 0);
 	 	$("#columnmodal1weldsize1").removeClass("importantRed");
 	 	}else {
 	 		  $("#columnmodal1weldsize1").attr("disabled", false);
 	 		  $("#columnmodal1weldsize1").prop('required',true);
 	 		$("#columnmodal1weldsize1").addClass("importantRed");
 	 	}

 	 	});
  	$("#ddlbuiltup1").change( function(){
        if($('#ddlbuiltup1').val()=='Directly welded'){
            $("#edw").show();
            $("#ewsp").hide();
            $("#esinglewsp").hide();                    
        }
        else if($('#ddlbuiltup1').val()=='Stiffener Plate'){
             $("#edw").hide();
            $("#ewsp").show();
            $("#esinglewsp").show();
        }                    
    });
    $("#modalcolumn1profile2").change(function(){
        $('#spliceRows').empty();
    });
    $("#modalcolumn1profile2").change(function(){
		$("#columnchannelprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
		});
	$("#modalcolumn1grade").change(function(){
		$("#columnchannelgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
		});
	$("#columnmodal1weldtype").change(function(){
		$("#columnmodal1weldtype").removeClass("importantRed");
		});
	$("#columnmodal1weldsize").change(function(){
		$("#columnmodal1weldsize").removeClass("importantRed");
		});
	$("#spacingbtwchannel").change(function(){
		$("#spacingbtwchannel").removeClass("importantRed");
		});
	$("#bc1platethickness").change(function(){
		$("#bc1platethickness").removeClass("importantRed");
		});
	$("#columnmodal1weldtype1").change(function(){
		$("#columnmodal1weldtype1").removeClass("importantRed");
		});
	$("#columnmodal1weldsize1").change(function(){
		$("#columnmodal1weldsize1").removeClass("importantRed");
		});
	$("#bc1baseelevationft").keyup(function(e){
		$("#bc1baseelevationft").removeClass("importantRed");
		});
	$("#bc1topelevationft").keyup(function(e){
		$("#bc1topelevationft").removeClass("importantRed");
		});
	$("#bc1count").keyup(function(e){
		$("#bc1count").removeClass("importantRed");
		});
	$("#bc1platelengthft").keyup(function(e){
		$("#bc1platelengthft").removeClass("importantRed");
		});