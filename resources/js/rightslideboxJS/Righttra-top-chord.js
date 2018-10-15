  function trapezoidalRightTopMandatoryValidation(event){
	    		if(($('#trapezoidalprofile,#topChordMaterialGrade').prop('selectedIndex')) == 0) {
	    			event.preventDefault();
	    			
	    			}
	    		
	    		if(($('#tracamber').prop("checked") == true) && ($('#tracamber1').prop('selectedIndex') )== 0){
	    			event.preventDefault();
	    		}
	    		  		
	    }  
$.each(wsDropDown.SurfacePreparation, function(index,data) {   
     var weldsize = "<option>"+data.SSPC_No+"</option>";
     $(weldsize).appendTo('#trasurfacePreparation1'); 
      
   }); 
     
  $.each(wsDropDown.NoOfCoats, function(index,data) {   
         var NoOfCoats = "<option>"+data.Coats+"</option>";
         $(NoOfCoats).appendTo('#traprimer2,#trapaint2'); 
          
       });     
  
  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
       var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
       $(NoOfCoats).appendTo('#tragalvanization2'); 
        
     });     

  $.each(wsDropDown.FireProofingType, function(index,data) {   
       var appendval = "<option>"+data.FireProofingType+"</option>";
       $(appendval).appendTo('#trafireProofing2'); 
       $(appendval).appendTo('#trafireProofing1'); 
     }); 
  $.each(wsDropDown.FireRating, function(index,data) {   
     var appendval = "<option>"+data.FireRating_fra+"</option>";
     $(appendval).appendTo('#trafireProofing3'); 
      
   }); 
       
  
  $.each(wsDropDown.AESSCategory, function(index,data) {   
         var appendval = "<option>"+data.AESS+"</option>";
         $(appendval).appendTo('#traaess1'); 
          
       });
  if(wsFinish != null){
	    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	console.log(usedfinish);
	   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
		 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
		 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
		    
		    if(paintValue != null){
		    $('#traprimer1').val(paintValue);
		    document.getElementById("traprimer1").setAttribute("disabled", false);
		    }
		    if(noOfCoatsprimer != null){
		       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
		       $('select[name^="#traprimer2"] option[value=noOfCts]').attr("selected","selected");

		    }
		 
		   $('#chkprimer').change(function() {
		      if($(this).prop("checked") == true){
		          $('#traprimer1, #traprimer2').attr('disabled', false);
		         if(primerperiSPreparation != null){
		  		  $('#trasurfacePreparation1').val(primerperiSPreparation);
		  	  }
		      } else {
		          $('#traprimer1, #traprimer2').attr('disabled', true);

		      }
		  });
		if(usedfinish == "Primer"){
		$('#chkprimer').prop('checked', true);
		$('#chknopaint').attr('checked', true);
		$('#traprimer1,#traprimer2').attr('disabled', false);	
		if(primerperiSPreparation != null){
			  $('#trasurfacePreparation1').val(primerperiSPreparation);
		}
		  } 

	var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
    if(usedfinish != "Galvanizing" &&  SPreparation != null){
    	 $('#chkprimer').prop('checked', true);
    	  $('#chknopaint').attr('checked', true);
    	 $('#traprimer1,#traprimer2').attr('disabled', false);	
    	 if(primerperiSPreparation != null){
    		  $('#trasurfacePreparation1').val(primerperiSPreparation);
    	  }
    }
	var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
	var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
	var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
	if(paintValue != null){
	$('#trapaint1').val(paintValue);
	document.getElementById("trapaint1").setAttribute("disabled", false);
	}

	if(noOfCoatspaint != null){
	var noOfCts="<option value>"+noOfCoatspaint+"</option>";
	$('select[name^="#trapaint2"] option[value=noOfCts]').attr("selected","selected");
	}
	$('#chkpaint').change(function() {
	 if($(this).prop("checked") == true){
	     $('#trapaint1, #trapaint2').attr('disabled', false);
	     if(paintperiSPreparation != null){
		    		  $('#trasurfacePreparation1').val(paintperiSPreparation);
		    	  }
	 } else {
	     $('#trapaint1, #trapaint2').attr('disabled', true);
	 }
	 if($('#chkprimer').prop("checked") == true){
	     $('#chkprimer').removeAttr("disabled");
	 } else {
	     $('#chkprimer').removeAttr("disabled");
	 }
	 $('#tragalvanization2').attr('disabled', true);
	});
	if(usedfinish == "Paint"){
	  	  $('#chkpaint').attr('checked', true);
	  	  $('#trapaint1, #trapaint2').attr('disabled', false);
	  	  if(paintperiSPreparation != null){
	  		  $('#trasurfacePreparation1').val(paintperiSPreparation);
	  	  }
	    }

	
	var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
	var	category = wsFinish.Finish.AESS.Category;
	 
	if(category != null){   
	    var aess="<option value>"+category+"</option>";
		   $('select[name^="#traaess1"] option[value=aess]').attr("selected","selected");
	}
	$('#chkaess').change(function() {
	if($(this).prop("checked") == true){
	  $('#traaess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
			  $('#trasurfacePreparation1').val(aessperiSPreparation);
		  }
	} else {
	  $('#traaess1').attr('disabled', true);
	}
	if($('#chkprimer').prop("checked") == true){
	  $('#chkprimer').removeAttr("disabled");
	} else {
	  $('#chkprimer').removeAttr("disabled");
	}
	$('#trapaint1, #trapaint2, #tragalvanization2, #trafireProofing2, #trafireProofing3').attr('disabled', true); 
	});
	if(usedfinish == "AESS"){
	$('#chkaess').attr('checked', true);
	$('#traaess1').attr('disabled', false);
	if(aessperiSPreparation != null){
		  $('#trasurfacePreparation1').val(aessperiSPreparation);
	}
	}
	 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	 
		      
	    if(fireRating != null){
	    var fireRatingval="<option value>"+fireRating+"</option>";
	    $('select[name^="#trafireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	    }
	    if(fireProofingType != null){
	       var fireProofing="<option value>"+fireProofingType+"</option>";
	       $('select[name^="#trafireProofing3"] option[value=fireProofing]').attr("selected","selected");
	    }
	   $('#chkfireproofing').change(function() {
	      if($(this).prop("checked") == true){
	          $('#trafireProofing2, #trafireProofing3').attr('disabled', false);
	         if(fpperiSPreparation != null){
		       		$('#trasurfacePreparation1').val(fpperiSPreparation);
		       	}
	      } else {
	          $('#trafireProofing2, #trafireProofing3').attr('disabled', true);
	      }  
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#trapaint1, #trapaint2, #tragalvanization2, #traaess1').attr('disabled', true);  
	      // $('#chkprimer').removeAttr("disabled");
	  });
	    if(usedfinish == "Fire proofing"){
	     	  $('#chkfireproofing').attr('checked',true);
	     	  $('#trafireProofing2, #trafireProofing3').attr('disabled', false);
	     	
		    }
	 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	    if(zincCoatingThickness != null){
	    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	    $('select[name^="#tragalvanization2"] option[value=zincCoating]').attr("selected","selected");
	    }
	   $('#chkgalvanize').change(function() {
	      if($(this).prop("checked") == true){
	          $('#tragalvanization2').attr('disabled', false);
	         if(galperiSPreparation != null){
		     	 	 $('#trasurfacePreparation1').val(galperiSPreparation);
		     	 	   } 
	      } else {
	          $('#tragalvanization2').attr('disabled', true);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      } 
	      else {
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      }
	      $('#traprimer1, #traprimer2, #trapaint1, #trapaint2, #trafireProofing2, #trafireProofing3, #traaess1').attr('disabled', true);
	      // $("#chkprimer").attr('disabled', 'disabled');
	  });
	   if(usedfinish == "Galvanizing"){
	  	  $('#chkgalvanize').attr('checked', true);
	  	  $('#tragalvanization2').attr('disabled', false);
	  	  $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	          if(galperiSPreparation != null){
	   	 	 $('#trasurfacePreparation1').val(galperiSPreparation);
	   	 	   }  
	    }
	 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	$('#chknopaint').change(function() {
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').attr('disabled', false);
	         if(nopperiSPreparation != null){
		 			 $('#trasurfacePreparation1').val(nopperiSPreparation);
		 		 	   }
	      } else {
	          $('#chkprimer').attr('disabled', false);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#trapaint1, #trapaint2, #tragalvanization2, #trafireProofing2, #trafireProofing3, #traaess1').attr('disabled', true);
	  });
		  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		
	}
	}
  $.each( wsDropDown.TopBottomChord, function(key, value) {
			 var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#trapezoidalprofile'); 

		 });
        
       			  $.each( wsDropDown.BeamOrientation, function(key, value) {
       				 var profiles="<option>"+value.Beam_Orientation+"</option>";
	                   $(profiles).appendTo('#topChordMemberprofile'); 
	       
       			 }); 
       			 
       	  
       	   	  $.each(wsDropDown.MaterialGrade, function(index,data) {   
         		  var datasource="<option>"+data.MaterialGrade+"</option>";
                    $(datasource).appendTo('#topChordMaterialGrade'); 
         		   
         		});
				
		
    		 $.each(wsDropDown.Camber, function(index,data) {   
    	          var datasource="<option>"+data.Camber_fra+"</option>";
    	                $(datasource).appendTo('#tracamber1'); 
    	           
    	        });
    		  $.each(RefDwgNumFiles, function(index,data) { 
             		
             		var referencenum="<option>"+data+"</option>";
             		
             	     $(referencenum).appendTo('#referencenum'); 
             	     
             		}); 
    				$("#trapezoidalprofile").change(function(){
    				    var profilename=$("#trapezoidalprofile").find('option:selected').text();
    				    $('#spliceRows').empty();
    					
    					  $("#trapezoidalSpliceCount").val($("#splicecount option:first").val());

    					   $('#topChordMaterialGrade').empty();
    					   getProfileGrades(profilename);
    						 $.each(profileGrades, function(index,data) {   
    							  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
    							 
    					           $(grades).appendTo('#topChordMaterialGrade'); 
    					           
    					           
    							   
    							});
    					   var res = profilename.charAt(0);
    					   if(wsPlateGrade != ''){
    					     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
    					     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
    					     	var cmcgrade = wsPlateGrade.MemberGrades.Channels;
    					     	if(res=="W"){
    					     		if(profileshgrade != null){
    					     			  $('#topChordMaterialGrade').val(profileshgrade);
    						           }
    							   }
    					    	else if(res=="H"){
    					     	if(hssgrade != ''){
    					     		  $('#topChordMaterialGrade').val(hssgrade);
    					         }
    					     	} 
    					     	else{
    					     		 if(cmcgrade != ''){
    					     			  $('#topChordMaterialGrade').val(cmcgrade);
    						         } 
    					     	}
    					     }
    				    $('#endConnectionMark').empty();
    				    $('#endConnectionMark1').empty();
    				    
    				    var filtered = $.grep(connectionObjList, function (el) {
    				        if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussend")>=0){
    				        	return el.profile;
    				        }
    				    });
    				 
    					$.each(filtered, function(key, value) {
    					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
    					         $(ConnectionMark).appendTo('#endConnectionMark'); 
    					         $(ConnectionMark).appendTo('#endConnectionMark1'); 
    					   });
    					$('#spliceConnectionMark').empty();
    				    $('#spliceConnectionMark1').empty();
    				    
    				    var filtered = $.grep(connectionObjList, function (el) {
    				    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trusssplice")>=0){
    				        	return el.profile;
    				        }
    				    });
    				  
    				  
    					$.each(filtered, function(key, value) {
    					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
    					         $(ConnectionMark).appendTo('#spliceConnectionMark'); 
    					         $(ConnectionMark).appendTo('#spliceConnectionMark1'); 
    					   });
    						$('#connectiontype').empty();
    					    $('#connectionmethod').empty();
    						 var connectionmark1 = $("#endConnectionMark").val();
    						
    						 if(connectionmark1 != null){
    						 
    						 var conntype = $.grep(connectionObjList, function (el) {
    						        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
    						        	
    						        	return el.trussConn;
    						        }
    						    });
    						 $.each(conntype, function(key, value) {
    							 var supportbeam="<option>"+value.trussConn+"</option>";
    					         $(supportbeam).appendTo('#connectiontype'); 
    						     
    						         
    						   });
    						 
    						 var supptype = $.grep(connectionObjList, function (el) {
    							 
    						        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.supportside;
    						        	
    						        }
    						    });
    						 
    						
    						 $.each(supptype, function(key, value) {
    						       var supportbeam="<option>"+value.supportside+"</option>";
    						         $(supportbeam).appendTo('#connectionmethod'); 
    						        
    						   });
    						
    						 }  
    						 var connectionmark2 = $("#endConnectionMark1").val();
    						
    						 $('#connectiontype1').empty();
    						 
    						 var conntype = $.grep(connectionObjList, function (el) {
    						        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
    						        	
    						        	return el.trussConn;
    						        }
    						    });
    						
    						 $.each(conntype, function(key, value) {
    						     
    							 var supportbeam="<option>"+value.trussConn+"</option>";
    					         $(supportbeam).appendTo('#connectiontype1');      
    						      
    						         
    						         
    						   });
    						 
    						 
    						
    						
    						    $('#connectionmethod1').empty();
    						 
    						 var supptype = $.grep(connectionObjList, function (el) {
    							 
    						        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.supportside;
    						        	
    						        }
    						    });
    						 
    						
    						 $.each(supptype, function(key, value) {
    						       var supportbeam="<option>"+value.supportside+"</option>";
    						         $(supportbeam).appendTo('#connectionmethod1'); 
    						        
    						   });
    						
    						 
    						 
    						
    					});	
    				 
    					
    					  
    			//	});
    		
    		  $("#trapezoidalSpliceCount").change(function() {
  	        	
  	            $('#spliceRows').empty();
  	            var spliceCount=parseInt($('#trapezoidalSpliceCount').val() );
  	            $('.spliceprofile').empty();
  	         
  	            for(var i=1;i<=spliceCount;i++) {

  	                 var html=`
  	                	   <div class="row nomarginlr">
  	                     <div class="col-lg-7 col-lg-7 padding10 ">
  	                         <label class="labelBlack control-label">Splice Position `+i+` From Left End</label>
  	                         <div class="row">

  	                             <div class="col-lg-4 col-md-4">
  	                                 <input type="text" class="form-control per70" id="splicePosition`+i+`LeftEndFt">
  	                                 <div class="txt-right">
  	                                     ft
  	                                 </div>
  	                             </div>
  	                             <div class="col-lg-4 col-md-4 padding5">
  	                                 <select class="form-control per70 splicein" id="splicePosition`+i+`LeftEndIn">
  	                                   
  	                                 </select>
  	                                 <div class="txt-right">
  	                                     in
  	                                 </div>
  	                             </div>
  	                             <div class="col-lg-4 col-md-4 p-l-5">
  	                                 <select class="form-control per70 splicefr" id="splicePosition`+i+`LeftEndFr">
  	                                  
  	                                 </select>
  	                                 <div class="txt-right">
  	                                     fr
  	                                 </div>
  	                             </div>
  	                         </div>
  	                     </div>
  	                     <div class="col-lg-5">
  	                         <label class="labelBlack control-label">Top Chord Profile</label>
  	                         <select class="form-control spliceprofile" name="topprofile" id="trapTopChordProfile`+i+`">
  	                             <option value="Select">Select</option>
  	                        
  	                         </select>
  	                     </div>
  	                     
  	                 </div>
  	               
  	                 `;
  	                 
  	                 $('#spliceRows').append(html);
  	            }
  	            $.each(wsDropDown.Inch, function(index,data) {   
  	        		
  	                $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein');        
  	                
  	                 });

  	                 
  	        	  
  	        		  $.each(wsDropDown.Fraction, function(index,data) {   
  	        			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('.splicefr');
  	                        }); 
  	        		  $.each(wsDropDown.TopBottomChord, function(index,data) {   
  	                  	
  	        			  $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofile');
  	        			  
  	        			    
  	                        });
  	        		
  	        		  var profilename=$("#trapezoidalprofile").val();
  	        		  if(profilename !="Select"){
  	        		  var profiles="<option>"+profilename+"</option>";
  	        		  $(profiles).appendTo('.spliceprofile').prop('selected', true); 
  	        		  }
   	        });

  // JQuery Code

    //ref. Drwaing Number
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });
    $(".referenceSelect").select2({
        placeholder: "Select"
    });
     
	$('#pezcamber').change(function() {
		if($(this).prop("checked") == true){
			$('#tracamber1, #tracamber2').attr('disabled', false);
		} 
		else {
			$('#tracamber1, #tracamber2').attr('disabled', true);
		}
	});
     
 