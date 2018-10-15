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
    if(wsFinish != null){
        

        var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
        console.log(usedfinish);
        if(usedfinish == "Paint"){
     	  
        var	periSPreparation = wsFinish.Finish.Paint.SSPC_No;
        var  paintValue =  wsFinish.Finish.Paint.PaintValue[0].Painttype;
        var noOfCoats = wsFinish.Finish.Paint.PaintValue[0].NoOfCoatsPaint;
    
    if(periSPreparation != null){
    var surPrep="<option value>"+periSPreparation+"</option>";
    $(surPrep).appendTo('#bc3surfacePreparation1'); 
    }
       
       if(paintValue != null){
       var paintValue="<option value>"+paintValue+"</option>";
       $('#bc3paint1').val(paintValue);
       }
       
       if(noOfCoats != null){
          var noOfCts="<option value>"+noOfCoats+"</option>";
          $(noOfCts).appendTo('#bc3paint2'); 
       }
  
    }
    if(usedfinish == "Primer"){
 	   
 	   	console.log(wsFinish.Finish.Primer.NoOfCoatsPrimer);
 	   	console.log(wsFinish.Finish.Primer.PrimerValue);
 	   	console.log(wsFinish.Finish.Primer.SSPC_No);
 	   	
 	   var	periSPreparation = wsFinish.Finish.Primer.SSPC_No;
 	   var  paintValue =  wsFinish.Finish.Primer.PaintValue;
 	   var noOfCoats = wsFinish.Finish.Primer.NoOfCoatsPrimer;
 	   
 	   if(periSPreparation != null){
 	   var surPrep="<option value>"+periSPreparation+"</option>";
 	   $(surPrep).appendTo('#bc3surfacePreparation1'); 
 	   }
 	      
 	      if(paintValue != null){
 	      var paintValue="<option value>"+paintValue+"</option>";
 	      $('#bc3primer1').val(paintValue);
 	      }
 	      if(noOfCoats != null){
 	         var noOfCts="<option value>"+noOfCoats+"</option>";
 	         $(noOfCts).appendTo('#bc3primer2'); 
 	      }
 	   }
    
    if(usedfinish == "AESS"){
 var	periSPreparation = wsFinish.Finish.AESS.SSPC_No;
 var	category = wsFinish.Finish.AESS.Category;
 	   
 	   
 if(periSPreparation != null){
 	   var surPrep="<option value>"+periSPreparation+"</option>";
 	   $(surPrep).appendTo('#bc3surfacePreparation1'); 
 }

 if(aess != null){   
 	      var aess="<option value>"+category+"</option>";
 		   $(aess).appendTo('#bc3aess1'); 
 }
    }
    
    if(usedfinish == "Fire proofing"){
 	   
 	
 	   var	periSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
 	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
 	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
 	   
 	   if(periSPreparation != null){
 	   var surPrep="<option value>"+periSPreparation+"</option>";
 	   $(surPrep).appendTo('#bc3surfacePreparation1'); 
 	   }
 	      
 	      if(fireRating != null){
 	      var fireRatingval="<option value>"+fireRating+"</option>";
 	      $(fireRatingval).appendTo('#bc3fireProofing3'); 
 	      }
 	      if(fireProofingType != null){
 	         var fireProofing="<option value>"+fireProofingType+"</option>";
 	         $(fireProofing).appendTo('#bc3fireProofing2'); 
 	      }
 	   }
    if(usedfinish == "Galvanization"){
 	   
 	   	console.log(wsFinish.Finish.Galvanization.ZincCoatingThickness);
 	   	console.log(wsFinish.Finish.Galvanization.SSPC_No);
 	   	
 	   var	periSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
 	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
 	   
 	   if(periSPreparation != null){
 	   var surPrep="<option value>"+periSPreparation+"</option>";
 	   $(surPrep).appendTo('#bc3surfacePreparation1'); 
 	   }
 	      
 	      if(zincCoatingThickness != null){
 	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
 	      $(zincCoating).appendTo('#bc3galvanization2'); 
 	      }
 	      
 	   }
    
    if(usedfinish == "NoPaint"){
 	console.log(wsFinish.Finish.NoPaint.SSPC_No);
 	   var	periSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
 	   
 	   if(periSPreparation != null){
 	   var surPrep="<option value>"+periSPreparation+"</option>";
 	   $(surPrep).appendTo('#bc3surfacePreparation1'); 
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
		     	 
		     	
		     	  var builtup = "<option>"+"Built-Up Column"+"</option>"
	                $(builtup).appendTo('#bc3columntype').prop('selected', true); 
		     	
		     	  $.each(wsDropDown.DataSource, function(index,data) {   
		     		  var datasource="<option>"+data.DataSource+"</option>";
		                $(datasource).appendTo('#bc3datasource'); 
		     		   
		     		});
		     	  $.each(wsDropDown.SpliceCount, function(index,data) {   
		     		  var splicecount="<option>"+data.Count+"</option>";
		                $(splicecount).appendTo('#splicecount'); 
		     		   
		     		});
		     	
		     
		     	  $.each(wsDropDown.PlateGrade, function(index,data) {   
		     		  var plategrade="<option>"+data.MaterialGrade+"</option>";
		                $(plategrade).appendTo('#plategirder1'); 
		               	        		   
		     		});
		     	  $.each(wsDropDown.PlateThickness, function(index,data) {   
		     		  var platethickness="<option>"+data.tp_fra+"</option>";
		                $(platethickness).appendTo('#platethickness1'); 
		               	        		   
		     		});
		     	  $.each(wsDropDown.AESSCategory, function(index,data) {   
		     		  var AESScategory="<option>"+data.AESS+"</option>";
		                $(AESScategory).appendTo('#bc3aess1'); 
		               	        		   
		     		});
		     	 $.each(RefDwgNumFiles, function(index,data) { 
		 			
		 			var referencenum="<option>"+data+"</option>";
		 			
		 	         $(referencenum).appendTo('#bc3referencenumber'); 
		 	         
		 			});
     		 $("#columnmodal3weldtype").change(function() {  
 			    if ( $("#columnmodal3weldtype").val()=="CJP") {
 			    	
 			 	   $("#columnmodal3weldsize").val("").trigger("change"); 
 			 	   $("#columnmodal3weldsize").attr("disabled", true);
 			 	   $("#columnmodal3weldsize").prop('required',false);
 			 	}else {
 			 		  $("#columnmodal3weldsize").attr("disabled", false);
 			 		  $("#columnmodal3weldsize").prop('required',true);
 			 	}

 			 	});
     		$( document ).ready(function() {
     			$("#modalcolumn1profile2").change(function(){
     		    getGradeOnProfileChange();
     		    getProfileConnectionMark();
     			});
     		});
     		
     		function getProfileConnectionMark(){
     			 var profilename=$("#columnmodal3profile1").find('option:selected').text();
     			        				
     			   $('#bc3bpcm').empty();
     			    $('#bc3spcm').empty();
     		   var filtered = $.grep(connectionObjList, function (el) {
     		    	if(profilename.indexOf(el.profile) >= 0 && el.type.toLowerCase().indexOf("splice")<0){
     		        	return el.profile;
     		        	
     		        }
     		    });
     		  
     		    console.log(filtered);
     			$.each(filtered, function(key, value) {
     			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
     			         $(ConnectionMark).appendTo('#bc3bpcm'); 
     			        
     			   }); 
     			   var filteredsplice = $.grep(connectionObjList, function (el1) {
     			    	if(profilename.indexOf(el1.profile) >= 0 && el1.type.toLowerCase().indexOf("splice")>=0){
     			        	return el1.profile;
     			        }
     			    });
     			    console.log(filteredsplice);
     				$.each(filteredsplice, function(key, value) {
     				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
     				       $(ConnectionMark).appendTo('#bc3spcm'); 
     				   }); 
     				
     		}
     		  function getGradeOnProfileChange(){
     			 var profilename=$("#columnmodal3profile1").find('option:selected').text();
     			        		     getProfileGrades(profilename);
     		     $('#gradecolumnmodal3').empty();
     		    
     		     $.each(profileGrades, function(index,data) {   
     		        var grades="<option>"+data.Grade+"</option>";
     		             $(grades).appendTo('#gradecolumnmodal3'); 
     		      });
     		    $('#spliceRows').empty();
     			
     			  $("#splicecount").val($("#splicecount option:first").val());
     		  }

 
  
 