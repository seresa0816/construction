	function pitchedRightBottomMandatoryValidation(event){
	    		if(($('#pitchedprofile1,#pitchedgrade1').prop('selectedIndex')) == 0) {
	    			event.preventDefault();
	    			
	    			}
	    }  	
		$.each(wsDropDown.NoOfCoats, function(index,data) {   
          		  var NoOfCoats = "<option>"+data.Coats+"</option>";
          		  $(NoOfCoats).appendTo('#pitprimer2,#pitpaint2'); 
          		   
          		});		
$.each(wsDropDown.SurfacePreparation, function(index,data) {   
       		  var weldsize = "<option value=\""+data.SSPC_No+"\">"+data.SSPC_No+"</option>";
       		  $(weldsize).appendTo('#pitsurfacePreparation1'); 
       		   
       		});		
$.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
	  var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
	  $(NoOfCoats).appendTo('#pitgalvanization2'); 
	
	   
	});	
	
	 
$.each(wsDropDown.FireProofingType, function(index,data) {   
	  var appendval = "<option>"+data.FireProofingType+"</option>";
	  $(appendval).appendTo('#pitfireProofing2'); 
	   
	});	
$.each(wsDropDown.FireRating, function(index,data) {   
	  var appendval = "<option>"+data.FireRating_fra+"</option>";
	  $(appendval).appendTo('#pitfireProofing3'); 
	
	  
	});	
	  

$.each(wsDropDown.AESSCategory, function(index,data) {   
		  var appendval = "<option>"+data.AESS+"</option>";
		  $(appendval).appendTo('#pitaess1'); 
		   
		});
	

if(wsFinish != null){
    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
console.log(usedfinish);
var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
   
   if(paintValue != null){
   $('#pitprimer1').val(paintValue);
   document.getElementById("pitprimer1").setAttribute("disabled", false);
   }
   if(noOfCoatsprimer != null){
      var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
      $('select[name^="#pitprimer2"] option[value=noOfCts]').attr("selected","selected");

   }

  $('#chkprimer').change(function() {
     if($(this).prop("checked") == true){
         $('#pitprimer1, #pitprimer2').attr('disabled', false);
        if(primerperiSPreparation != null){
 		  $('#pitsurfacePreparation1').val(primerperiSPreparation);
 	  }
     } else {
         $('#pitprimer1, #pitprimer2').attr('disabled', true);

     }
 });
if(usedfinish == "Primer"){
$('#chkprimer').prop('checked', true);
$('#chknopaint').attr('checked', true);
$('#pitprimer1,#pitprimer2').attr('disabled', false);	
if(primerperiSPreparation != null){
	  $('#pitsurfacePreparation1').val(primerperiSPreparation);
}
 } 

var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
if(usedfinish != "Galvanizing" &&  SPreparation != null){
	 $('#chkprimer').prop('checked', true);
	  $('#chknopaint').attr('checked', true);
	 $('#pitprimer1,#pitprimer2').attr('disabled', false);	
	 if(primerperiSPreparation != null){
		  $('#pitsurfacePreparation1').val(primerperiSPreparation);
	  }
}

var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
if(paintValue != null){
$('#pitpaint1').val(paintValue);
document.getElementById("pitpaint1").setAttribute("disabled", false);
}

if(noOfCoatspaint != null){
var noOfCts="<option value>"+noOfCoatspaint+"</option>";
$('select[name^="#pitpaint2"] option[value=noOfCts]').attr("selected","selected");
}
$('#chkpaint').change(function() {
 if($(this).prop("checked") == true){
     $('#pitpaint1, #pitpaint2').attr('disabled', false);
     if(paintperiSPreparation != null){
	    		  $('#pitsurfacePreparation1').val(paintperiSPreparation);
	    	  }
 } else {
     $('#pitpaint1, #pitpaint2').attr('disabled', true);
 }
 if($('#chkprimer').prop("checked") == true){
     $('#chkprimer').removeAttr("disabled");
 } else {
     $('#chkprimer').removeAttr("disabled");
 }
 $('#pitgalvanization2').attr('disabled', true);
});
if(usedfinish == "Paint"){
  	  $('#chkpaint').attr('checked', true);
  	  $('#pitpaint1, #pitpaint2').attr('disabled', false);
  	  if(paintperiSPreparation != null){
  		  $('#pitsurfacePreparation1').val(paintperiSPreparation);
  	  }
    }

 
var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
var	category = wsFinish.Finish.AESS.Category;
 
if(category != null){   
    var aess="<option value>"+category+"</option>";
	   $('select[name^="#pitaess1"] option[value=aess]').attr("selected","selected");
}
$('#chkaess').change(function() {
if($(this).prop("checked") == true){
  $('#pitaess1').attr('disabled', false);
  if(aessperiSPreparation != null){
		  $('#pitsurfacePreparation1').val(aessperiSPreparation);
	  }
} else {
  $('#pitaess1').attr('disabled', true);
}
if($('#chkprimer').prop("checked") == true){
  $('#chkprimer').removeAttr("disabled");
} else {
  $('#chkprimer').removeAttr("disabled");
}
$('#pitpaint1, #pitpaint2, #pitgalvanization2, #pitfireProofing2, #pitfireProofing3').attr('disabled', true); 
});
if(usedfinish == "AESS"){
$('#chkaess').attr('checked', true);
$('#pitaess1').attr('disabled', false);
if(aessperiSPreparation != null){
	  $('#pitsurfacePreparation1').val(aessperiSPreparation);
}
}
 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
 
	      
    if(fireRating != null){
    var fireRatingval="<option value>"+fireRating+"</option>";
    $('select[name^="#pitfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
    }
    if(fireProofingType != null){
       var fireProofing="<option value>"+fireProofingType+"</option>";
       $('select[name^="#pitfireProofing3"] option[value=fireProofing]').attr("selected","selected");
    }
   $('#chkfireproofing').change(function() {
      if($(this).prop("checked") == true){
          $('#pitfireProofing2, #pitfireProofing3').attr('disabled', false);
         if(fpperiSPreparation != null){
	       		$('#pitsurfacePreparation1').val(fpperiSPreparation);
	       	}
      } else {
          $('#pitfireProofing2, #pitfireProofing3').attr('disabled', true);
      }  
      if($('#chkprimer').prop("checked") == true){
          $('#chkprimer').removeAttr("disabled");
      } else {
          $('#chkprimer').removeAttr("disabled");
      }
      $('#pitpaint1, #pitpaint2, #pitgalvanization2, #pitaess1').attr('disabled', true);  
      // $('#chkprimer').removeAttr("disabled");
  });
    if(usedfinish == "Fire proofing"){
     	  $('#chkfireproofing').attr('checked',true);
     	  $('#pitfireProofing2, #pitfireProofing3').attr('disabled', false);
     	
	    }
 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
    if(zincCoatingThickness != null){
    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
    $('select[name^="#pitgalvanization2"] option[value=zincCoating]').attr("selected","selected");
    }
   $('#chkgalvanize').change(function() {
      if($(this).prop("checked") == true){
          $('#pitgalvanization2').attr('disabled', false);
         if(galperiSPreparation != null){
	     	 	 $('#pitsurfacePreparation1').val(galperiSPreparation);
	     	 	   } 
      } else {
          $('#pitgalvanization2').attr('disabled', true);
      }
      if($('#chkprimer').prop("checked") == true){
          $('#chkprimer').prop('checked', false);
          $('#chkprimer').attr('disabled', true);
      } 
      else {
          $('#chkprimer').prop('checked', false);
          $('#chkprimer').attr('disabled', true);
      }
      $('#pitprimer1, #pitprimer2, #pitpaint1, #pitpaint2, #pitfireProofing2, #pitfireProofing3, #pitaess1').attr('disabled', true);
      // $("#chkprimer").attr('disabled', 'disabled');
  });
   if(usedfinish == "Galvanizing"){
  	  $('#chkgalvanize').attr('checked', true);
  	  $('#pitgalvanization2').attr('disabled', false);
  	  $('#chkprimer').prop('checked', false);
          $('#chkprimer').attr('disabled', true);
          if(galperiSPreparation != null){
   	 	 $('#pitsurfacePreparation1').val(galperiSPreparation);
   	 	   }  
    }
 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
$('#chknopaint').change(function() {
      if($('#chkprimer').prop("checked") == true){
          $('#chkprimer').attr('disabled', false);
         if(nopperiSPreparation != null){
	 			 $('#pitsurfacePreparation1').val(nopperiSPreparation);
	 		 	   }
      } else {
          $('#chkprimer').attr('disabled', false);
      }
      if($('#chkprimer').prop("checked") == true){
          $('#chkprimer').removeAttr("disabled");
      } else {
          $('#chkprimer').removeAttr("disabled");
      }
      $('#pitpaint1, #pitpaint2, #pitgalvanization2, #pitfireProofing2, #pitfireProofing3, #pitaess1').attr('disabled', true);
  });
	  if(usedfinish == "NoPaint"){
	  $('#chknopaint').attr('checked', true);
	
}
} 
 
  $.each( wsDropDown.TopBottomChord, function(key, value) {
			 var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#pitchedprofile1'); 

		 });
        
       			  $.each( wsDropDown.BeamOrientation, function(key, value) {
       				 var profiles="<option>"+value.Beam_Orientation+"</option>";
	                   $(profiles).appendTo('#pitchedorientation1'); 
	       
       			 }); 
       			 
       	 /* 
       	   	  $.each(wsDropDown.MaterialGrade, function(index,data) {   
         		  var datasource="<option>"+data.MaterialGrade+"</option>";
                    $(datasource).appendTo('#pitchedgrade1'); 
         		   
         		});*/
				
		
    		  $.each(RefDwgNumFiles, function(index,data) { 
          		
          		var referencenum="<option>"+data+"</option>";
          		
          	     $(referencenum).appendTo('#referencenum'); 
          	     
          		});   
    		  $("#pitchedprofile1").change(function(){
    				var profilename = $(this).val();
    				   $('#pitchedgrade1').empty();
    					 getProfileGrades(profilename);
    					 $.each(profileGrades, function(index,data) {   
    						  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
    						 
    				           $(grades).appendTo('#pitchedgrade1'); 
    				           
    				           
    						   
    						});  
    				   
    				   var res = profilename.charAt(0);
    				   if(wsPlateGrade != ''){
    				     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
    				     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
    				     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
    				     	if(res=="W"){
    				     		if(profileshgrade != null){
    				     			 $('#pitchedgrade1').val(profileshgrade);
    					             
    					           }
    						   }
    				    	else if(res=="H"){
    				     	if(hssgrade != ''){
    				     		 $('#pitchedgrade1').val(hssgrade);
    				          
    				         }
    				     	} 
    				     	else{
    				     		if(anglegrade != ''){
    				     			$('#pitchedgrade1').val(anglegrade);
    					          
    					         }
    				     	}
    				     }
    				   $('#spliceRows').empty();
    					
    					   $('#tpitsplicecount').prop('selectedIndex',0);

    			    
    			    $('#pitchconmark1').empty();
    			    $('#pitchconmark5').empty();
    			    
    			    var filtered = $.grep(connectionObjList, function (el) {
    			    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussend")>=0){
    			        	return el.profile;
    			        }
    			    });
    			   
    			    
    				$.each(filtered, function(key, value) {
    				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
    				         $(ConnectionMark).appendTo('#pitchconmark1'); 
    				         $(ConnectionMark).appendTo('#pitchconmark5'); 
    				   });
    				
    				 $('#pitchconmark2').empty();
    				    $('#pitchconmark6').empty();
    				    
    				    var filtered = $.grep(connectionObjList, function (el) {
    				    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trusssplice")>=0){
    				        	return el.profile;
    				        }
    				    });
    				
    				    
    				  
    					$.each(filtered, function(key, value) {
    					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
    					         $(ConnectionMark).appendTo('#pitchconmark2'); 
    					         $(ConnectionMark).appendTo('#pitchconmark6'); 
    					   });
    						 $('#pitchconmark3').empty();
    	    				    $('#pitchconmark7').empty();
    						 var connectionmark1 = $("#pitchconmark1").val();
    					
    						 
    						 if(connectionmark1 != null){
    						 var conntype = $.grep(connectionObjList, function (el) {
    						        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.trussConn;
    						        }
    						    });
    						 $.each(conntype, function(key, value) {
    							 var supportbeam="<option>"+value.trussConn+"</option>";
    					         $(supportbeam).appendTo('#pitchconmark3'); 
    						     
    						         
    						   });
    						 $('#pitchconmark4').empty();
    						 
    						 var supptype = $.grep(connectionObjList, function (el) {
    							 
    						        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.supportside;
    						        	
    						        }
    						    });
    						 
    						
    						 $.each(supptype, function(key, value) {
    						       var supportbeam="<option>"+value.supportside+"</option>";
    						         $(supportbeam).appendTo('#pitchconmark4'); 
    						        
    						   });
    						 }    
    						 var connectionmark2 = $("#pitchconmark5").val();
    						
    						 if(connectionmark2 != null){
    						 
    						 var conntype = $.grep(connectionObjList, function (el) {
    						        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
    						        	
    						        	return el.trussConn;
    						        }
    						    });
    						
    						 $.each(conntype, function(key, value) {
    						     
    							 var supportbeam="<option>"+value.trussConn+"</option>";
    					         $(supportbeam).appendTo('#pitchconmark7');      
    						      
    						         
    						         
    						   });
    						 
    						 
    						
    						
    						    $('#pitchconmark8').empty();
    						
    						 var supptype = $.grep(connectionObjList, function (el) {
    							 
    						        if(el.connectionMark != null &&  (connectionmark2.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.supportside;
    						        	
    						        }
    						    });
    						 
    						
    						 $.each(supptype, function(key, value) {
    						       var supportbeam="<option>"+value.supportside+"</option>";
    						         $(supportbeam).appendTo('#pitchconmark8'); 
    						        
    						   });
    						
    						 } 
    						
    					});	
    		//	});
    			$("#tpitsplicecount").change(function() {
    	        	
    	            $('#spliceRows').empty();
    	            var spliceCount=parseInt($('#tpitsplicecount').val() );
    	            $('.spliceprofilebottom').empty();
    	         
    	            for(var i=1;i<=spliceCount;i++) {

    	                 var html=`
    	                	   <div class="row nomarginlr">
    	                     <div class="col-lg-5 col-lg-5 padding10 ">
    	                         <label class="labelBlack control-label">Splice Position `+i+` From Left End</label>
    	                         <div class="row">

    	                             <div class="col-lg-4 col-md-4">
    	                                 <input type="text" class="form-control per70" id="splicePosition`+i+`LeftEndFt" onkeypress="return AllowNumbersOnly(event)">
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
    	                     <div class="col-lg-4">
                         <label class="labelBlack control-label">Bottom Chord Profile</label>
                         <select class="form-control spliceprofilebottom" id="trapBottomChordProfile`+i+`">
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
    	                
    	        		  $.each(wsDropDown.TopBottomChord, function(index,data) {   
    		                  	
    	        			  $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofilebottom');
    	        			  
    	        			    
    	                        });
    	        		  var profilename=$("#pitchedprofile1").val();
    	        		  if(profilename !="Select"){
    	    			    var profiles="<option value>"+profilename+"</option>";
    	    			    $(profiles).appendTo('.spliceprofilebottom').prop('selected', true);  
    	        		  }		  
    	        		
    	        });		
    			});
  // JQuery Code
    			$(".referenceSelect").select2({
    		        placeholder: "Select"
    		    });
  $(".pitselect3").select2({
      placeholder: "Select"
  });
  $(".pitselect4").select2({
      placeholder: "Select"
  });
//ref. Drwaing Number
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });

 