     $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });
    function AllowDecimalNumbersOnly(e) {
        var code = (e.which) ? e.which : e.keyCode;
        if (code == 46)
            return true;
        if (code > 31 && (code < 48 || code > 57)) {
          e.preventDefault();
        }
      }
    function AllowNumbersOnly(e) {
        var code = (e.which) ? e.which : e.keyCode;
       
        if (code > 31 && (code < 48 || code > 57)) {
          e.preventDefault();
        }
      }
    var profilename = "W";
	 getProfileGrades(profilename);
	 $.each(profileGrades, function(index,data) {   
		  var grades= "<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
		 
          $(grades).appendTo('#gradecolumnmodal3'); 
          $(grades).appendTo('#columnmodal3grade2');
          
		   
		});
    if(wsPlateGrade != null){
    	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
    	
    	 if(profileshgrade != null){
             $('#gradecolumnmodal3').val(profileshgrade);
             $('#columnmodal3grade2').val(profileshgrade);
          
          }
    }
    $.each(wsDropDown.SurfacePreparation, function(index,data) {   
		  var surfacepreparation = "<option>"+data.SSPC_No+"</option>";
		  $(surfacepreparation).appendTo('#bc3surfacePreparation1'); 
		   
		});
	  $.each(wsDropDown.FireProofingType, function(index,data) {   
		  var fireproofingtype = "<option>"+data.FireProofingType+"</option>";
		  $(fireproofingtype).appendTo('#bc3fireProofing2'); 
		   
		});
	  $.each(wsDropDown.FireRating, function(index,data) {   
		  var firerating = "<option>"+data.FireRating_fra+"</option>";
		  $(firerating).appendTo('#bc3fireProofing3'); 
		 
		});
	  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
		  var zinccoatingthickness = "<option>"+data.ZincCoatingThickness+"</option>";
		  $(zinccoatingthickness).appendTo('#bc3galvanization2'); 
		   
		});
	  $.each(wsDropDown.NoOfCoats, function(index,data) {   
		  var noofcoats = "<option>"+data.Coats+"</option>";
		  $(noofcoats).appendTo('#bc3primer2'); 
		 $(noofcoats).appendTo('#bc3paint2'); 
		   
		});
	  $.each(wsDropDown.AESSCategory, function(index,data) {   
 		  var AESScategory="<option>"+data.AESS+"</option>";
            $(AESScategory).appendTo('#bc3aess1'); 
           	        		   
 		});
	  if(wsFinish != null){
	      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	      

		     var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
		   var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
		   var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
		      
		      if(paintValue != null){
		      $('#bc3primer1').val(paintValue);
		      document.getElementById("bc3primer1").setAttribute("disabled", false);
		      }
		      if(noOfCoatsprimer != null){
		         var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
		         $('select[name^="#bc3primer2"] option[value=noOfCts]').attr("selected","selected");

		      }
		   
	   
	 if(usedfinish == "Primer"){
	   	 $('#chkprimer').prop('checked', true);
	   	  $('#chknopaint').attr('checked', true);
	   	 $('#bc3primer1,#bc3primer2').attr('disabled', false);	
	   	 if(primerperiSPreparation != null){
	   		  $('#bc3surfacePreparation1').val(primerperiSPreparation);
	   	  }
		    } 

	      var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
		    if(usedfinish != "Galvanizing" &&  SPreparation != null){
		    	 $('#chkprimer').prop('checked', true);
		    	  $('#chknopaint').attr('checked', true);
		    	 $('#bc3primer1,#bc3primer2').attr('disabled', false);	
		    	 if(primerperiSPreparation != null){
		    		  $('#bc3surfacePreparation1').val(primerperiSPreparation);
		    	  }
		    }
     var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
     var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
     var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
      if(paintValue != null){
      $('#bc3paint1').val(paintValue);
      document.getElementById("bc3paint1").setAttribute("disabled", false);
      }
      
      if(noOfCoatspaint != null){
         var noOfCts="<option value>"+noOfCoatspaint+"</option>";
         $('select[name^="#bc3paint2"] option[value=noOfCts]').attr("selected","selected");
      }
      if(usedfinish == "Paint"){
	    	  $('#chkpaint').attr('checked', true);
	    	  $('#bc3paint1, #bc3paint2').attr('disabled', false);
	    	  if(paintperiSPreparation != null){
	    		  $('#bc3surfacePreparation1').val(paintperiSPreparation);
	    	  }
	      }
  
var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
var	category = wsFinish.Finish.AESS.Category;
	   
if(category != null){   
	      var aess="<option value>"+category+"</option>";
		   $('select[name^="#bc3aess1"] option[value=aess]').attr("selected","selected");
}
 if(usedfinish == "AESS"){
	  $('#chkaess').attr('checked', true);
	  $('#bc3aess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
		  $('#bc3surfacePreparation1').val(aessperiSPreparation);
	  }
 }
 	   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
 	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
 	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	   
	 	      
	      if(fireRating != null){
	      var fireRatingval="<option value>"+fireRating+"</option>";
	      $('select[name^="#bc3fireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	      }
	      if(fireProofingType != null){
	         var fireProofing="<option value>"+fireProofingType+"</option>";
	         $('select[name^="#bc3fireProofing3"] option[value=fireProofing]').attr("selected","selected");
	      }
	     
	      if(usedfinish == "Fire proofing"){
	       	  $('#chkfireproofing').attr('checked',true);
	       	  $('#bc3fireProofing2, #bc3fireProofing3').attr('disabled', false);
	       	if(fpperiSPreparation != null){
	       		$('#bc3surfacePreparation1').val(fpperiSPreparation);
	       	}
		    }
	   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	      if(zincCoatingThickness != null){
	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	      $('select[name^="#bc3galvanization2"] option[value=zincCoating]').attr("selected","selected");
	      }
	     if(usedfinish == "Galvanizing"){
	    	  $('#chkgalvanize').attr('checked', true);
	    	  $('#bc3galvanization2').attr('disabled', false);
	    	  $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	            if(galperiSPreparation != null){
	     	 	 $('#bc3surfacePreparation1').val(galperiSPreparation);
	     	 	   }  
	      }
	   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	 	  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		 if(nopperiSPreparation != null){
			 $('#bc3surfacePreparation1').val(nopperiSPreparation);
		 	   }
	  }
 }
    
  
     $.each( wsDropDown.WFProfile, function(key, value) {
         

         var profiles="<option>"+value.Profile+"</option>";

               $(profiles).appendTo('#columnmodal3profile1'); 
               
           
       });
     

 $.each( wsDropDown.WTProfile, function(key, value) {         

         var profiles="<option>"+value.Profile+"</option>";
       
               $(profiles).appendTo('#columnmodal3profile4'); 
               
           
       });
      $.each(wsDropDown.DataSource, function(index,data) {   
 		  var datasource="<option>"+data.DataSource+"</option>";
            $(datasource).appendTo('#bc4datasource'); 
 		   
 		});
      $.each(wsDropDown.WeldType, function(index,data) {   
 		  var weldtype = "<option>"+data.wtype+"</option>";
 		  $(weldtype).appendTo('#boxcolumnweld'); 
 		   
 		});
     
	  
	$.each(wsDropDown.Inch, function(index,data) {   
		
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc3cbelevationin');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc3ctelevationin');

		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc3wtlengthin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2wpwidthin');
		
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2cbelevationin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2spliceel1in');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2tfpthicknessinbc1');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2tfpwidthinbc1');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2wpthicknessinbc1');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2wpwidthinbc1');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2wpwidthinbc2');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2ctelevationin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2spliceel2in');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2tfpthicknessinbc2');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2tfpwidthinbc2');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2wpthicknessinbc2');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2wpwidthinbc2');
		});
	 $('#bc3cbelevationin').val("0");
	 	 $('#bc3ctelevationin').val("0");
	 	 
	 $('#bc3wtlengthin').val("0");
	 $('#bc2wpwidthin').val("0");
	 $('#bc2cbelevationin').val("0");
	 $('#bc2wpthicknessinbc1').val("0");
		    $('#bc2wpwidthinbc1').val("0");
		    $('#bc2wpwidthinbc2').val("0");
		    $('#bc2spliceel1in').val("0");
		    $('#bc4spliceel2in').val("0");
		    $('#bc2ctelevationin').val("0");
		    $('#bc2tfpthicknessinbc1').val("0");
		    $('#bc2tfpwidthinbc1').val("0");
		    $('#bc2spliceel2in').val("0");
		    $('#bc2tfpthicknessinbc2').val("0");
		    $('#bc2tfpwidthinbc2').val("0");
		    $('#bc2wpthicknessinbc2').val("0");
		    $('#bc2wpwidthinbc2').val("0");
		    
		    $.each(wsDropDown.Fraction, function(index,data) {   
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc3cbelevationfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc3ctelevationfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc3wtlengthfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2wpwidthfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2cbelevationfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2ctelevationfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2spliceel1fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2tfpthicknessfrbc1');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2tfpwidthfrbc1');
				  
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2wpthicknessfrbc1');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2wpwidthfrbc1');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2spliceel2fr');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2wpwidthfrbc1');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2spliceel2fr');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2tfpthicknessfrbc2');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2tfpwidthfrbc2');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2ctelevationfr');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2spliceel2fr');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2tfpthicknessfrbc2');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2tfpwidthfrbc2');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2wpthicknessfrbc2');
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#bc2wpwidthfrbc2');
				  
	 		});
			  
			  $('#bc3cbelevationfr').val("0");
			  $('#bc3ctelevationfr').val("0");
			  $('#bc3wtlengthfr').val("0");
			  $('#bc2wpwidthfr').val("0");
			  $('#bc2cbelevationfr').val("0");
			  $('#bc2ctelevationfr').val("0");
			  $('#bc2spliceel1fr').val("0");
			  $('#bc2wpthicknessfrbc1').val("0");
			    $('#bc2tfpwidthfrbc1').val("0");
			    $('#bc2wpwidthfrbc1').val("0");
			    $('#bc2spliceel2fr').val("0");
			    $('#bc2tfpthicknessfrbc2').val("0");
			    $('#bc2tfpwidthfrbc2').val("0");
			    $('#bc2ctelevationfr').val("0");
			    $('#bc2spliceel2fr').val("0");
			    $('#bc2tfpthicknessfrbc2').val("0");
			    $('#bc2tfpwidthfrbc2').val("0");
			    $('#bc2wpthicknessfrbc2').val("0");
			    $('#bc2wpwidthfrbc2').val("0");
			    
			    $.each(wsDropDown.WeldType, function(index,data) {   
		     		  var weldtype = "<option>"+data.wtype+"</option>";
		     		  $(weldtype).appendTo('#columnmodal3weldtype'); 
		     		 
		     		});
		     	  $.each(wsDropDown.WeldSize, function(index,data) {   
		     		  var weldsize = "<option>"+data.weld_fra+"</option>";
		     		  $(weldsize).appendTo('#columnmodal3weldsize'); 
		     		   
		     		});
			
		     	 
		     	
		     	  var builtup = "<option>"+"Built-Up Column"+"</option>"
	                $(builtup).appendTo('#bc3columntype').prop('selected', true); 
		     	
		     	  $.each(wsDropDown.DataSource, function(index,data) {   
		     		  var datasource="<option>"+data.DataSource+"</option>";
		                $(datasource).appendTo('#bc3datasource'); 
		     		   
		     		});
				     	  $.each(wsDropDown.PlateGrade, function(index,data) {   
		     		  var plategrade="<option>"+data.MaterialGrade+"</option>";
		                $(plategrade).appendTo('#plategirder1'); 
		               	        		   
		     		});
		     	  $.each(wsDropDown.PlateThickness, function(index,data) {   
		     		  var platethickness="<option>"+data.tp_fra+"</option>";
		                $(platethickness).appendTo('#platethickness1'); 
		               	        		   
		     		});
		     	 
		     	  if(RefDwgNumFiles){
		     	 $.each(RefDwgNumFiles, function(index,data) { 
		 			
		 			var referencenum="<option>"+data+"</option>";
		 			
		 	         $(referencenum).appendTo('#bc3referencenumber'); 
		 	         
		 			});
		     	  }
     		 $("#columnmodal3weldtype").change(function() {  
 			    if ( $("#columnmodal3weldtype").val()=="CJP") {
 			    	
 			 	   $("#columnmodal3weldsize").attr("disabled", true);
 			 	   $("#columnmodal3weldsize").prop('required',false);
 			 	 $("#columnmodal3weldsize").prop('selectedIndex', 0);
 				 $("#columnmodal3weldsize").removeClass("importantRed");
 			 	}else {
 			 		  $("#columnmodal3weldsize").attr("disabled", false);
 			 		  $("#columnmodal3weldsize").prop('required',true);
 			 		 $("#columnmodal3weldsize").addClass("importantRed");
 			 	}

 			 	});
  $( document ).ready(function() {
	  getBasePlateConnectionMark();
		getSpliceConnectionMark();
		getCapPlateConnectionMark();
	$("#columnmodal3profile1").change(function(){
		
	    var profilename=$("#columnmodal3profile1").find('option:selected').text();
	    $('#spliceRows').empty();
	    $('#splicecount').prop('selectedIndex',0);
	
		  
	
	});
	$(function(){
        $("#splicecount").change( function(){
        	 getSpliceConnectionMark();
            
        });
    });
  });
  
//Populate base plate drop down
  
  function getBasePlateConnectionMark(){
  //var profilename=$("#columnmodal3profile1").find('option:selected').text();
  $('#bc3bpcm').empty();
  var filtered = $.grep(connectionObjList, function (el) {
	   if((el.post == "Column" )&& (el.profile == "Built-Up Member") && (el.type.toLowerCase().indexOf("base")>=0) && (el.baseplate.toLowerCase().indexOf("base")>=0))
	  {
       	return el.profile;
       	
       }
   }); 	

   $.each(filtered, function(key, value) {
	       var ConnectionMark="<option>"+value.connectionMark+"</option>";
	         $(ConnectionMark).appendTo('#bc3bpcm'); 
	        
	   }); 
  }
   //Populate cap plate drop down
  function getCapPlateConnectionMark(){
  // $('#chkcapplate').change(function() {
	  var profilename=$("#columnmodal3profile1").find('option:selected').text();
	  $('#chks3Cap1').empty();
	  
	  // if( $('#chks3Cap1').is(':enabled')){
		 
		   var filtered1 = $.grep(connectionObjList, function (el) {
	
			   if((el.post == "Column" )&& (el.profile == "Built-Up Member") && (el.type.toLowerCase().indexOf("base")>=0) && (el.baseplate.toLowerCase().indexOf("cap")>=0))
			  {
		        	return el.profile;
		        	
		        }
		    });
		
		    $.each(filtered1, function(key, value) {
			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
			         $(ConnectionMark).appendTo('#chks3Cap1'); 
			        
			   });   
	   }
	

  function getSpliceConnectionMark(){
	 $('#bc3spcm').empty();
	 var profilename = $("#columnmodal3profile1").val();	
		var spliceprofile = $("#splice1WProfile").val();
		var spliceCount=parseInt($('#splicecount').val() );
		if((spliceCount)>0){
			  var cmsplice = $.grep(connectionObjList, function (el2) {
				     
					  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingsplice")>=0){
						  		
			        	return el2.connectionMark;
			        }
					  });
				  
			    	
			    
			
			  $.each(cmsplice, function(key, value) {
			       var ConnectionMark="<option value=\""+value.connectionMark+"\">"+value.connectionMark+"</option>";
			       $(ConnectionMark).appendTo('#bc3spcm'); 
			   }); 
			  var cmsplice = $.grep(connectionObjList, function (el2) {
				     
				  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingend")>=0){
					  		
		        	return el2.connectionMark;
		        }
				  });
			  
		    	
		    
		 
		  $.each(cmsplice, function(key, value) {
		        var ConnectionMark="<option value=\""+value.connectionMark+"\">"+value.connectionMark+"</option>";
		       $(ConnectionMark).appendTo('#bc3spcm'); 
		   }); 
		  var cmsplice = $.grep(connectionObjList, function (el2) {
			     
			  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingdirectly")>=0){
				  		
	      	return el2.connectionMark;
	      }
			  });
		  
	  	
	  
	$.each(cmsplice, function(key, value) {
	     var ConnectionMark="<option value=\""+value.connectionMark+"\">"+value.connectionMark+"</option>";
	     $(ConnectionMark).appendTo('#bc3spcm'); 
	 }); 
			}

		
  }	
  $("#splicecount").change(function() {
      $('#spliceRows').empty();
      var spliceCount=parseInt($('#splicecount').val());

      for(var i=1;i<=spliceCount;i++) {
           var html=`<div class="row">
                  <div class="col-lg-8 col-lg-8 padding10">
                      <label class="labelBlack control-label">Splice EL`+i+`</label>
                      <div class="row">
                          <div class="col-lg-2 col-md-2 p-r-5">
                              <select class="form-control" id="splice`+i+`PosNeg">
                                  <option value="" selected="select">+</option>
                                  <option value="">-</option>
                              </select>
                          </div>
                          <div class="col-lg-3 col-md-3 padding5">
                              <input type="text" class="form-control per70" id="splice`+i+`Ft" onkeypress = "return AllowNumbersOnly(event)">
                              <div class="txt-right">
                                  ft
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-3 padding5">
                              <select class="form-control per70 splicein" id="splice`+i+`In" >
                              </select>
                              <div class="txt-right">
                                  in
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-3 p-l-5">
                              <select class="form-control per70 splicefr" id="splice`+i+`Fr">
                              </select>
                              <div class="txt-right">
                                  fr
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-3 padding10">
                      <label class="labelBlack control-label">WF Profile</label>
                      <select class="form-control spliceprofile" id="splice`+i+`WProfile">
                          <option value="" label="--- Select ---" ></option>
                      </select>
                  </div>
              </div>`

           $('#spliceRows').append(html);
      }
// Add drop Down values 
$.each(wsDropDown.Inch, function(index,data) {   
      
      $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein');        
      
      });


$.each(wsDropDown.Fraction, function(index,data) {   
  $('<option>').val(data.fr).text(data.fr_fra).appendTo('.splicefr');
  });
  
  $.each(wsDropDown.WFProfile, function(index,data) {   
  $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofile');
 
  });
  var profilename=$("#columnmodal3profile1").find('option:selected').text();
    var profiles="<option>"+profilename+"</option>";
    $(profiles).appendTo('.spliceprofile').prop('selected', true); 
  });		 
		// });
		  
     
  $(".referenceSelect").select2({
      placeholder: "Select"
  });
  
  $(".bc3select1").select2({
        placeholder: "Select"
    });
    $(".bc3select2").select2({
        placeholder: "Select"
    });
    $(".bc3select3").select2({
        placeholder: "Select"
    });
    $(".bc3select4").select2({
        placeholder: "Select"
    });
	
	$('#chkcapplate').change(function() {
		if($(this).prop("checked") == true){
			$('#chks3Cap1, #chks3Cap2, #chks3Cap3, #chks3Cap4').attr('disabled', false);
		} 
		else {
			$('#chks3Cap1, #chks3Cap2, #chks3Cap3, #chks3Cap4').attr('disabled', true);
		}
	});
    
    
    
    $(function() {
       $('.chosen-select').chosen();
       $('.chosen-select-deselect').chosen({
           allow_single_deselect: true
       });
   });
    $("#columnmodal3profile1").change(function(){
		$("#columnwprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
		});
    $("#columnmodal3profile4").change(function(){
		$("#columnwtprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
		});
    $("#gradecolumnmodal3").change(function(){
		$("#columnwgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
		});
    $("#columnmodal3grade2").change(function(){
		$("#columnwtgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
		});
    $("#columnmodal3weldtype").change(function(){
		$("#columnmodal3weldtype").removeClass("importantRed");
		});
    $("#columnmodal3weldsize").change(function(){
		$("#columnmodal3weldsize").removeClass("importantRed");
		});
    
	$('#bc3cbelevationft').on('click', function() {
		   if( $('#bc3cbelevationft').val() == "0") {
		   $('#bc3cbelevationft').val("");
		   }
	   });
	$('#bc3ctelevationft').on('click', function() {
		   if( $('#bc3ctelevationft').val() == "0") {
		   $('#bc3ctelevationft').val("");
		   }
	   });
	$('#bc3count').on('click', function() {
		   if( $('#bc3count').val() == "0") {
		   $('#bc3count').val("");
		   }
	   });
	$('#bc3wtlengthft').on('click', function() {
		   if( $('#bc3wtlengthft').val() == "0") {
		   $('#bc3wtlengthft').val("");
		   }
	   });
  
   
 
    