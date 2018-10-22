
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

	$.each(wsDropDown.PlateGrade, function(index,data) {   
	var plategrade="<option  value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
	$(plategrade).appendTo('#columnmodal2grade'); 

	});
	if(wsPlateGrade != null){
	var plateGrades = wsPlateGrade.MemberGrades.Plates;
	if(plateGrades != ''){
	$('#columnmodal2grade').val(plateGrades);

	}

	}
	$.each(wsDropDown.SurfacePreparation, function(index,data) {   
	var surfacepreparation = "<option>"+data.SSPC_No+"</option>";
	$(surfacepreparation).appendTo('#bs2surfacePreparation1'); 

	});
	$.each(wsDropDown.FireProofingType, function(index,data) {   
	var fireproofingtype = "<option>"+data.FireProofingType+"</option>";
	$(fireproofingtype).appendTo('#bs2fireProofing2'); 

	});
	$.each(wsDropDown.FireRating, function(index,data) {   
	var firerating = "<option>"+data.FireRating_fra+"</option>";
	$(firerating).appendTo('#bs2fireProofing3'); 

	});
	$.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
	var zinccoatingthickness = "<option>"+data.ZincCoatingThickness+"</option>";
	$(zinccoatingthickness).appendTo('#bs2galvanization2'); 

	});
	$.each(wsDropDown.NoOfCoats, function(index,data) {   
	var noofcoats = "<option>"+data.Coats+"</option>";
	$(noofcoats).appendTo('#bs2paint2,#bs2primer2'); 
	$(noofcoats).appendTo('#bs2paint3,#bs2primer3'); 
	});
	$.each(wsDropDown.AESSCategory, function(index,data) {   
	var AESScategory="<option>"+data.AESS+"</option>";
	$(AESScategory).appendTo('#bs2aess1'); 

	});
	 if(wsFinish != null){
	      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	      var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
		   var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
		   var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
		      
		      if(paintValue != null){
		      $('#bs2primer1').val(paintValue);
		      document.getElementById("bs2primer1").setAttribute("disabled", false);
		      }
		      if(noOfCoatsprimer != null){
		         var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
		         $('select[name^="#bs2primer2"] option[value=noOfCts]').attr("selected","selected");

		      }
		      $('#chkprimer').change(function() {
		          if($(this).prop("checked") == true){
		              $('#bs2primer1, #bs2primer2').attr('disabled', false);
		              if(primerperiSPreparation != null){
		           		  $('#bs2surfacePreparation1').val(primerperiSPreparation);
		           	  }
		          } else {
		              $('#bs2primer1, #bs2primer2').attr('disabled', true);
		          }
		      });
	   
	 if(usedfinish == "Primer"){
	   	 $('#chkprimer').prop('checked', true);
	   	  $('#chknopaint').attr('checked', true);
	   	 $('#bs2primer1,#bs2primer2').attr('disabled', false);	
	   	 if(primerperiSPreparation != null){
	   		  $('#bs2surfacePreparation1').val(primerperiSPreparation);
	   	  }
		    } 
	 
	 var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
	    if(usedfinish != "Galvanizing" &&  SPreparation != null){
	    	 $('#chkprimer').prop('checked', true);
	    	  $('#chknopaint').attr('checked', true);
	    	 $('#cprimer1,#cprimer2').attr('disabled', false);	
	    	 if(primerperiSPreparation != null){
	    		  $('#bs2surfacePreparation1').val(primerperiSPreparation);
	    	  }
	    }
     var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
     var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
     var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
      if(paintValue != null){
      $('#bs2paint1').val(paintValue);
      document.getElementById("bs2paint1").setAttribute("disabled", false);
      }
      
      if(noOfCoatspaint != null){
         var noOfCts="<option value>"+noOfCoatspaint+"</option>";
         $('select[name^="#bs2paint2"] option[value=noOfCts]').attr("selected","selected");
      }
      $('#chkpaint').change(function() {
          if($(this).prop("checked") == true){
              $('#bs2paint1, #bs2paint2').attr('disabled', false);
              if(paintperiSPreparation != null){
	    		  $('#bs2surfacePreparation1').val(paintperiSPreparation);
	    	  }
          } else {
              $('#bs2paint1, #bs2paint2').attr('disabled', true);
          }
          if($('#chkprimer').prop("checked") == true){
              $('#chkprimer').removeAttr("disabled");
          } else {
              $('#chkprimer').removeAttr("disabled");
          }
          $('#bs2galvanization2').attr('disabled', true);
      });
      if(usedfinish == "Paint"){
	    	  $('#chkpaint').attr('checked', true);
	    	  $('#bs2paint1, #bs2paint2').attr('disabled', false);
	    	  if(paintperiSPreparation != null){
	    		  $('#bs2surfacePreparation1').val(paintperiSPreparation);
	    	  }
	      }
 
	 
 
var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
var	category = wsFinish.Finish.AESS.Category;
	   
if(category != null){   
	      var aess="<option value>"+category+"</option>";
		   $('select[name^="#bs2aess1"] option[value=aess]').attr("selected","selected");
}
$('#chkaess').change(function() {
    if($(this).prop("checked") == true){
        $('#bs2aess1').attr('disabled', false);
        if(aessperiSPreparation != null){
  		  $('#bs2surfacePreparation1').val(aessperiSPreparation);
  	  }
    } else {
        $('#bs2aess1').attr('disabled', true);
    }
    if($('#chkprimer').prop("checked") == true){
        $('#chkprimer').removeAttr("disabled");
    } else {
        $('#chkprimer').removeAttr("disabled");
    }
    $('#bs2paint1, #bs2paint2, #bs2galvanization2, #bs2fireProofing2, #bs2fireProofing3').attr('disabled', true); 
});
 if(usedfinish == "AESS"){
	  $('#chkaess').attr('checked', true);
	  $('#bs2aess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
		  $('#bs2surfacePreparation1').val(aessperiSPreparation);
	  }
 }
 	   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
 	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
 	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	   
	 	      
	      if(fireRating != null){
	      var fireRatingval="<option value>"+fireRating+"</option>";
	      $('select[name^="#bs2fireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	      }
	      if(fireProofingType != null){
	         var fireProofing="<option value>"+fireProofingType+"</option>";
	         $('select[name^="#bs2fireProofing3"] option[value=fireProofing]').attr("selected","selected");
	      }
	      $('#chkfireproofing').change(function() {
	          if($(this).prop("checked") == true){
	              $('#bs2fireProofing2, #bs2fireProofing3').attr('disabled', false);
	              if(fpperiSPreparation != null){
	  	       		$('#bs2surfacePreparation1').val(fpperiSPreparation);
	  	       	}
	          } else {
	              $('#bs2fireProofing2, #bs2fireProofing3').attr('disabled', true);
	          }  
	          if($('#chkprimer').prop("checked") == true){
	              $('#chkprimer').removeAttr("disabled");
	          } else {
	              $('#chkprimer').removeAttr("disabled");
	          }
	          $('#bs2paint1, #bs2paint2, #bs2galvanization2, #bs2aess1').attr('disabled', true);  
	          // $('#chkprimer').removeAttr("disabled");
	      });
	      
	      if(usedfinish == "Fire proofing"){
	       	  $('#chkfireproofing').attr('checked',true);
	       	  $('#bs2fireProofing2, #bs2fireProofing3').attr('disabled', false);
	       	if(fpperiSPreparation != null){
	       		$('#bs2surfacePreparation1').val(fpperiSPreparation);
	       	}
		    }
	   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	      if(zincCoatingThickness != null){
	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	      $('select[name^="#bs2galvanization2"] option[value=zincCoating]').attr("selected","selected");
	      }
	      $('#chkgalvanize').change(function() {
	          if($(this).prop("checked") == true){
	              $('#bs2galvanization2').attr('disabled', false);
	              if(galperiSPreparation != null){
	 	     	 	 $('#bs2surfacePreparation1').val(galperiSPreparation);
	 	     	 	   }  
	          } else {
	              $('#bs2galvanization2').attr('disabled', true);
	          }
	          if($('#chkprimer').prop("checked") == true){
	              $('#chkprimer').prop('checked', false);
	              $('#chkprimer').attr('disabled', true);
	          } 
	          else {
	              $('#chkprimer').prop('checked', false);
	              $('#chkprimer').attr('disabled', true);
	          }
	          $('#bs2primer1, #bs2primer2, #bs2paint1, #bs2paint2, #bs2fireProofing2, #bs2fireProofing3, #bs2aess1').attr('disabled', true);
	          // $("#chkprimer").attr('disabled', 'disabled');
	      });
	     if(usedfinish == "Galvanizing"){
	    	  $('#chkgalvanize').attr('checked', true);
	    	  $('#bs2galvanization2').attr('disabled', false);
	    	  $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	            if(galperiSPreparation != null){
	     	 	 $('#bs2surfacePreparation1').val(galperiSPreparation);
	     	 	   }  
	      }
	   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;

	    $('#chknopaint').change(function() {
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').attr('disabled', false);
	            if(nopperiSPreparation != null){
	   			 $('#bs2surfacePreparation1').val(nopperiSPreparation);
	   		 	   }
	        } else {
	            $('#chkprimer').attr('disabled', false);
	        }
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').removeAttr("disabled");
	        } else {
	            $('#chkprimer').removeAttr("disabled");
	        }
	        $('#bs2paint1, #bs2paint2, #bs2galvanization2, #bs2fireProofing2, #bs2fireProofing3, #bs2aess1').attr('disabled', true);
	    });
	 	  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		 if(nopperiSPreparation != null){
			 $('#bs2surfacePreparation1').val(nopperiSPreparation);
		 	   }
	  }
 }
	$.each(wsDropDown.DataSource, function(index,data) {   
	var datasource="<option>"+data.DataSource+"</option>";
	$(datasource).appendTo('#bc4datasource'); 

	});
	$.each(wsDropDown.WeldType, function(index,data) {   
	var weldtype = "<option>"+data.wtype+"</option>";
	$(weldtype).appendTo('#boxcolumnweld'); 

	});
	$.each(wsDropDown.Fraction, function(index,data) {   
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel2in');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel1in');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#colTop_fr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#colBottom_fr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#colBottom_in');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#colTop_in');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel1fr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel2fr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel2ft');
	$('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('#bc2bfpthicknessfr');

	$('<option>').val(data.Inches).text(data.Inches).appendTo('#platelength_fra');
	$('<option>').val(data.Inches).text(data.Inches).appendTo('#platewidth_fra');


	});

	$('#bc2bfpthicknessfr').val("0");
	$('#cspliceel2in').val("0");
	$('#cspliceel1in').val("0");
	$('#cspliceel2fr').val("0");
	$('#cspliceel1fr').val("0");
	$('#cspliceel1in').val("0");
	$('#colTop_fr').val("0");
	$('#colTop_in').val("0");
	$('#colBottom_fr').val("0");
	$('#colBottom_in').val("0");
	$('#platelength_fra').val("0");
	$('#platewidth_fra').val("0");
	$('#splice1Fr').val("0");
	$('#splice2Fr').val("0");
	$('#splice3Fr').val("0");
	$('#splice4Fr').val("0");
	$('#splice5Fr').val("0");
	$('#splice6Fr').val("0");
	$('#splice7Fr').val("0");
	$('#splice8Fr').val("0");
	$('#splice9Fr').val("0");
	$('#splice10Fr').val("0");

	$.each(wsDropDown.Inch, function(index,data) {   

	$('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2tfpthicknessin');
	$('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2tfpwidthin');

	$('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2wpthicknessin');
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
	$('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2bfpthicknessin');
	$('<option>').val(data.Inch).text(data.Inch).appendTo('#bc2bfpwidthin');
	});

	$('#bc2bfpwidthin').val("0");
	$('#bc2tfpthicknessin').val("0");
	$('#bc2bfpthicknessin').val("0");
	$('#bc2tfpwidthin').val("0");
	$('#bc2wpthicknessin').val("0");
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
	$('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('#bc2tfpthicknessfr');
	$('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('#bc2tfpwidthfr');
	$('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('#bc2wpthicknessfr');
	$('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('#bc2wpwidthfr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2cbelevationfr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2ctelevationfr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2spliceel1fr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2tfpthicknessfrbc1');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2tfpwidthfrbc1');

	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2wpthicknessfrbc1');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2wpwidthfrbc1');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2spliceel2fr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2wpwidthfrbc1');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2spliceel2fr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2tfpthicknessfrbc2');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2tfpwidthfrbc2');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2spliceel2fr');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2tfpthicknessfrbc2');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2tfpwidthfrbc2');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2wpthicknessfrbc2');
	$('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc2wpwidthfrbc2');
	$('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('#bc2bfpwidthfr');

	});

	$('#bc2tfpthicknessfr').val("0");
	$('#bc2tfpwidthfr').val("0");
	$('#bc2wpthicknessfr').val("0");
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
	$('#bc2bfpwidthfr').val("0");

	$.each(wsDropDown.WeldType, function(index,data) {   
	var weldtype = "<option>"+data.wtype+"</option>";
	$(weldtype).appendTo('#columnmodal2weldtype'); 
	$(weldtype).appendTo('#bc2weldtype'); 

	});

	$.each(wsDropDown.WeldSize, function(index,data) {   
	var weldsize = "<option>"+data.weld_fra+"</option>";
	$(weldsize).appendTo('#columnmodalweldsize,#bc2weldsizein'); 
    });


	var builtup = "<option>"+"Built-Up Column"+"</option>"
	$(builtup).appendTo('#bc2columntype').prop('selected', true); 


	$.each(wsDropDown.DataSource, function(index,data) {   
	var datasource="<option>"+data.DataSource+"</option>";
	$(datasource).appendTo('#bc2datasource'); 

	});
	$.each(wsDropDown.SpliceCount, function(index,data) {   
	var splicecount="<option>"+data.Count+"</option>";
	$(splicecount).appendTo('#splicecount'); 

	});


	$.each(wsDropDown.PlateThickness, function(index,data) {   
	var platethickness="<option>"+data.tp_fra+"</option>";
	$(platethickness).appendTo('#platethickness1'); 

	});

	if(RefDwgNumFiles){
	$.each(RefDwgNumFiles, function(index,data) { 

	var referencenum="<option>"+data+"</option>";

	$(referencenum).appendTo('#bc2referencenumber'); 

	}); 
	}






	$( document ).ready(function() {

	getBasePlateConnectionMark();
	getSpliceConnectionMark();
	getCapPlateConnectionMark();

	$("#bc2tfpthicknessin").change(function(){
	var thicknessin = $(this).val();
	var bottomflange ="<option>"+thicknessin+"</option>";
	$(bottomflange).appendTo('#bc2bfpthicknessin').prop('selected', true); 
	});

	$("#bc2tfpthicknessfr").change(function(){

	var thicknessfr = $("#bc2tfpthicknessfr").find('option:selected').text();
	var bottomflangefr ="<option>"+thicknessfr+"</option>";
	$(bottomflangefr).appendTo('#bc2bfpthicknessfr').prop('selected', true); 
	});


	$('#bc2tfpwidthft').keyup(function(e){

	var widthft = $("#bc2tfpwidthft").val()
	$('#bc2bfpwidthft').val(widthft);
	});

	$("#bc2tfpwidthin").change(function(){

	var thicknesswin = $("#bc2tfpwidthin").find('option:selected').text();
	var bottomflangewin ="<option>"+thicknesswin+"</option>";
	$(bottomflangewin).appendTo('#bc2bfpwidthin').prop('selected', true); 
	});

	$("#bc2tfpwidthfr").change(function(){

	var thicknesswfr = $("#bc2tfpwidthfr").find('option:selected').text();
	var bottomflangewfr ="<option>"+thicknesswfr+"</option>";
	$(bottomflangewfr).appendTo('#bc2bfpwidthfr').prop('selected', true); 
	});


	});
	$("#columnmodal2weldtype").change(function() {  
	if ( $("#columnmodal2weldtype").val()=="CJP") {
	$("#columnmodalweldsize").attr("disabled", true);
	$("#columnmodalweldsize").prop('required',false);
	$("#columnmodalweldsize").prop('selectedIndex', 0);
	$("#columnmodalweldsize").removeClass("importantRed");
	}else {
	$("#columnmodalweldsize").attr("disabled", false);
	$("#columnmodalweldsize").prop('required',true);
	$("#columnmodalweldsize").addClass("importantRed");
	}

	});
	$("#bc2weldtype").change(function() {  
	if ( $("#bc2weldtype").val()=="CJP") {
	$("#bc2weldsizein").attr("disabled", true);
	$("#bc2weldsizein").prop('required',false);
	$("#bc2weldsizein").prop('selectedIndex', 0);
	$("#bc2weldsizein").removeClass("importantRed");
	}else {
	$("#bc2weldsizein").attr("disabled", false);
	$("#bc2weldsizein").prop('required',true);
	$("#bc2weldsizein").addClass("importantRed");
	}

	});

	$("#boxsplicecount").change(function() { 
	getSpliceConnectionMark();
	});

	//Populate Base Plate Connection Mark
	function getBasePlateConnectionMark(){
		
	$('#bc2bpcm').empty();
	var basecm = $.grep(connectionObjList, function (el) {
	if((el.post == "Column" )&&(el.profile == "Built-Up Member") && (el.type.toLowerCase().indexOf("base")>=0) && (el.baseplate.toLowerCase().indexOf("base")>=0))
	{
	return el.connectionMark;
	
	}
	});
	$.each(basecm, function(key, value) {
	var ConnectionMark="<option>"+value.connectionMark+"</option>";
	$(ConnectionMark).appendTo('#bc2bpcm'); 

	}); 

	}

	//Populate Splice Connection Mark
	function getSpliceConnectionMark(){

	$('#bc2spcm').empty();
	var spliceCount=parseInt($('#boxsplicecount').val() );
	if((spliceCount)>0){
		  var cmsplice = $.grep(connectionObjList, function (el2) {
			     
				  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingsplice")>=0){
					  		 
		        	return el2.connectionMark;
		        }
				  });
			  
		    	
		    
		  $.each(cmsplice, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		       $(ConnectionMark).appendTo('#bc2spcm'); 
		   }); 
		  var cmsplice = $.grep(connectionObjList, function (el2) {
			     
			  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingend")>=0){
	        	return el2.connectionMark;
	        }
			  });
		  
	    	
	    
	  $.each(cmsplice, function(key, value) {
	       var ConnectionMark="<option>"+value.connectionMark+"</option>";
	       $(ConnectionMark).appendTo('#bc2spcm'); 
	   }); 
	  var cmsplice = $.grep(connectionObjList, function (el2) {
		     
		  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingdirectly")>=0){
			  		
      	return el2.connectionMark;
      }
		  });
	  
  	
  

$.each(cmsplice, function(key, value) {
     var ConnectionMark="<option>"+value.connectionMark+"</option>";
     $(ConnectionMark).appendTo('#bc2spcm'); 
 }); 
		}
	
	}

	//Populate Cap Plate Connection Mark  
	function getCapPlateConnectionMark(){

	//	 $('#chkcapplate').change(function() {

	//if( $('#chks2Cap1').is(':enabled')){
	$('#chks2Cap1').empty();

	var capcm = $.grep(connectionObjList, function (el) {
	if((el.post == "Column" )&& (el.profile == "Built-Up Member") && (el.type.toLowerCase().indexOf("base")>=0) && (el.baseplate.toLowerCase().indexOf("cap")>=0))
	{
	return el.connectionMark;

	}
	});

	$.each(capcm, function(key, value) {

	var ConnectionMark="<option>"+value.connectionMark+"</option>";
	$(ConnectionMark).appendTo('#chks2Cap1'); 

	});   
	/* }else{
	$('#chks2Cap1').empty();
	$('#chks2Cap2').val("");
	$('#chks2Cap3').val("");
	$('#chks2Cap4').val("");
	}*/

	// });

	}	
	$("#boxsplicecount").change( function(){
	$('#spliceRows').empty();
	var spliceCount=parseInt($('#boxsplicecount').val() );


	for(var i=1;i<=spliceCount;i++) {

	var html=`<div class="row boxsplice1">
	<div class="col-lg-8 col-lg-8 padding10">
	<label class="labelBlack control-label">Splice EL`+i+`</label>
	<div class="row">
	<div class="col-lg-2 col-md-2 p-r-5">
	<select class="form-control" id="splice`+i+`PosNeg">
	<option value="" selected="select">+</option>

	</select>
	</div>
	<div class="col-lg-3 col-md-3 padding5">
	<input type="text" class="form-control per70 " placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'" id="splice`+i+`Ft" >
	<div class="txt-right">
	ft
	</div>
	</div>
	<div class="col-lg-3 col-md-3 padding5">
	<select class="form-control per70 splicein" id="splice`+i+`In">

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

	</div>
	<div class="row boxsplice1">
	<div class="col-lg-5 col-md-5 padding10">
	<label class="labelBlack control-label ">Top Flange Plate Thickness</label>
	<div class="row ">
	<div class="col-lg-5 col-md-5">
	<select class="form-control per70 spliceinThickness" id="splice`+i+`TFPlateThicknessIn">

	</select>
	<div class="txt-right">
	in
	</div>
	</div>
	<div class="col-lg-5 col-md-5 padding5">
	<select class="form-control per70 splicefrThickness" id="splice`+i+`TFPlateThicknessFr">

	</select>
	<div class="txt-right">
	fr
	</div>
	</div>
	</div>
	</div>

	<div class="col-lg-7 col-md-7 padding10 m-b-10">
	<label class="labelBlack control-label ">Top Flange Plate Width</label>
	<div class="row ">
	<div class="col-lg-4 col-md-4 p-r-5">
	<input type="text" class="form-control per70 splicefeetWidth" placeholder="" id="splice`+i+`TFPlateWidthFt" onkeypress = "return AllowNumbersOnly(event)" placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'">
	<div class="txt-right">
	ft
	</div>
	</div>
	<div class="col-lg-4 col-md-4 padding5">
	<select class="form-control per70 spliceinWidth" id="splice`+i+`TFPlateWidthIn">

	</select>
	<div class="txt-right">
	in
	</div>
	</div>
	<div class="col-lg-4 col-md-4 padding5">
	<select class="form-control per70 splicefrWidth" id="splice`+i+`TFPlateWidthFr">

	</select>
	<div class="txt-right">
	fr
	</div>
	</div>
	</div>
	</div>
	</div>
	<div class="row boxsplice1">
	<div class="col-lg-5 col-md-5 padding10">
	<label class="labelBlack control-label ">Bottom Flange Plate Thickness</label>
	<div class="row ">
	<div class="col-lg-5 col-md-5">
	<select class="form-control per70 spliceinThickness" disabled="true" id="splice`+i+`BFPlateThicknessIn">

	</select>
	<div class="txt-right">
	in
	</div>
	</div>
	<div class="col-lg-5 col-md-5 padding5">
	<select class="form-control per70 splicefrThickness" disabled="true" id="splice`+i+`BFPlateThicknessFr">



	</select>
	<div class="txt-right">
	fr
	</div>
	</div>
	</div>
	</div>

	<div class="col-lg-7 col-md-7 padding10 m-b-10">
	<label class="labelBlack control-label ">Bottom Flange Plate Width</label>
	<div class="row ">
	<div class="col-lg-4 col-md-4 p-r-5">
	<input type="text" class="form-control per70 splicefeetWidth" placeholder="" disabled="true" id="splice`+i+`BFPlateWidthFt" placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'">
	<div class="txt-right">
	ft
	</div>
	</div>
	<div class="col-lg-4 col-md-4 padding5">
	<select class="form-control per70 spliceinWidth" disabled="true" id="splice`+i+`BFPlateWidthIn" >

	</select>
	<div class="txt-right">
	in
	</div>
	</div>
	<div class="col-lg-4 col-md-4 padding5">
	<select class="form-control per70 splicefrWidth" disabled="true" id="splice`+i+`BFPlateWidthFr" >

	</select>
	<div class="txt-right">
	fr
	</div>
	</div>
	</div>
	</div>
	</div>
	<div class="row boxsplice1">
	<div class="col-lg-5 col-md-5 padding10">
	<label class="labelBlack control-label ">Web Plate Thickness</label>
	<div class="row ">
	<div class="col-lg-5 col-md-5">
	<select class="form-control per70 spliceinThicknessWeb" id="splice`+i+`WebPlateThicknessIn">

	</select>
	<div class="txt-right">
	in
	</div>
	</div>
	<div class="col-lg-5 col-md-5 padding5">
	<select class="form-control per70 splicefrThicknessWeb" id="splice`+i+`WebPlateThicknessFr">

	</select>
	<div class="txt-right">
	fr
	</div>
	</div>
	</div>
	</div>

	<div class="col-lg-7 col-md-7 padding10 m-b-10">
	<label class="labelBlack control-label ">Web Plate Width</label>
	<div class="row ">
	<div class="col-lg-4 col-md-4 p-r-5">
	<input type="text" class="form-control per70 splicefeetWidthWeb" placeholder=""  id="splice`+i+`WebPlateWidthFt" onkeypress = "return AllowNumbersOnly(event)" placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'">
	<div class="txt-right">
	ft
	</div>
	</div>
	<div class="col-lg-4 col-md-4 padding5">
	<select class="form-control per70 spliceinWidthWeb" id="splice`+i+`WebPlateWidthIn">

	</select>
	<div class="txt-right">
	in
	</div>
	</div>
	<div class="col-lg-4 col-md-4 padding5">
	<select class="form-control per70 splicefrWidthWeb" id="splice`+i+`WebPlateWidthFr">

	</select>
	<div class="txt-right">
	fr
	</div>
	</div>
	</div>
	</div>
	</div>`;

	$('#spliceRows').append(html);

	}

	// Add drop Down values 
	$.each(wsDropDown.Inch, function(index,data) {   

	$('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein,.spliceinWidth,.spliceinThickness,.spliceinThicknessWeb,.spliceinWidthWeb');        

	});

	$.each(wsDropDown.Fraction, function(index,data) {   
	$('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('.splicefr,.splicefrWidth,.splicefrThickness,.splicefrThicknessWeb,.splicefrWidthWeb');
	});

	var topflangethickness = $("#bc2tfpthicknessin").val();
	$('#splice1TFPlateThicknessIn,#splice2TFPlateThicknessIn,#splice3TFPlateThicknessIn,#splice4TFPlateThicknessIn,#splice5TFPlateThicknessIn,#splice6TFPlateThicknessIn,#splice7TFPlateThicknessIn,#splice8TFPlateThicknessIn,#splice9TFPlateThicknessIn,#splice10TFPlateThicknessIn').val(topflangethickness);
	$('#splice1BFPlateThicknessIn,#splice2BFPlateThicknessIn,#splice3BFPlateThicknessIn,#splice4BFPlateThicknessIn,#splice5BFPlateThicknessIn,#splice6BFPlateThicknessIn,#splice7BFPlateThicknessIn,#splice8BFPlateThicknessIn,#splice9BFPlateThicknessIn,#splice10BFPlateThicknessIn').val(topflangethickness);

	var bottomflangethickness = $("#bc2tfpthicknessfr").val();
	$('#splice1TFPlateThicknessFr,#splice2TFPlateThicknessFr,#splice3TFPlateThicknessFr,#splice4TFPlateThicknessFr,#splice5TFPlateThicknessFr,#splice6TFPlateThicknessFr,#splice7TFPlateThicknessFr,#splice8TFPlateThicknessFr,#splice9TFPlateThicknessFr,#splice10TFPlateThicknessFr').val(bottomflangethickness);
	$('#splice1BFPlateThicknessFr,#splice2BFPlateThicknessFr,#splice3BFPlateThicknessFr,#splice4BFPlateThicknessFr,#splice5BFPlateThicknessFr,#splice6BFPlateThicknessFr,#splice7BFPlateThicknessFr,#splice8BFPlateThicknessFr,#splice9BFPlateThicknessFr,#splice10BFPlateThicknessFr').val(bottomflangethickness);

	var topflangeplatewidthft = $("#bc2tfpwidthft").val();
	$('#splice1TFPlateWidthFt,#splice2TFPlateWidthFt,#splice3TFPlateWidthFt,#splice4TFPlateWidthFt,#splice5TFPlateWidthFt,#splice6TFPlateWidthFt,#splice7TFPlateWidthFt,#splice8TFPlateWidthFt,#splice9TFPlateWidthFt,#splice10TFPlateWidthFt').val(topflangeplatewidthft);
	$('#splice1BFPlateWidthFt,#splice2BFPlateWidthFt,#splice3BFPlateWidthFt,#splice4BFPlateWidthFt,#splice5BFPlateWidthFt,#splice6BFPlateWidthFt,#splice7BFPlateWidthFt,#splice8BFPlateWidthFt,#splice9BFPlateWidthFt,#splice10BFPlateWidthFt').val(topflangeplatewidthft);

	var topflangeplatewidthin = $("#bc2tfpwidthin").val();
	$('#splice1TFPlateWidthIn,#splice2TFPlateWidthIn,#splice3TFPlateWidthIn,#splice4TFPlateWidthIn,#splice5TFPlateWidthIn,#splice6TFPlateWidthIn,#splice7TFPlateWidthIn,#splice8TFPlateWidthIn,#splice9TFPlateWidthIn,#splice10TFPlateWidthIn').val(topflangeplatewidthin);
	$('#splice1BFPlateWidthIn,#splice2BFPlateWidthIn,#splice3BFPlateWidthIn,#splice4BFPlateWidthIn,#splice5BFPlateWidthIn,#splice6BFPlateWidthIn,#splice7BFPlateWidthIn,#splice8BFPlateWidthIn,#splice9BFPlateWidthIn,#splice10BFPlateWidthIn').val(topflangeplatewidthin); 

	var topflangeplatewidthfr = $("#bc2tfpwidthfr").val();
	$('#splice1TFPlateWidthFr,#splice2TFPlateWidthFr,#splice3TFPlateWidthFr,#splice4TFPlateWidthFr,#splice5TFPlateWidthFr,#splice6TFPlateWidthFr,#splice7TFPlateWidthFr,#splice8TFPlateWidthFr,#splice9TFPlateWidthFr,#splice10TFPlateWidthFr').val(topflangeplatewidthfr); 
	$('#splice1BFPlateWidthFr,#splice2BFPlateWidthFr,#splice3BFPlateWidthFr,#splice4BFPlateWidthFr,#splice5BFPlateWidthFr,#splice6BFPlateWidthFr,#splice7BFPlateWidthFr,#splice8BFPlateWidthFr,#splice9BFPlateWidthFr,#splice10BFPlateWidthFr').val(topflangeplatewidthfr);

	var webplatethicknessin = $("#bc2wpthicknessin").val();	
	$('#splice1WebPlateThicknessIn,#splice2WebPlateThicknessIn,#splice3WebPlateThicknessIn,#splice4WebPlateThicknessIn,#splice5WebPlateThicknessIn,#splice6WebPlateThicknessIn,#splice7WebPlateThicknessIn,#splice8WebPlateThicknessIn,#splice9WebPlateThicknessIn,#splice10WebPlateThicknessIn').val(webplatethicknessin);

	var webplatethicknessfr = $("#bc2wpthicknessfr").val();
	$('#splice1WebPlateThicknessFr,#splice2WebPlateThicknessFr,#splice3WebPlateThicknessFr,#splice4WebPlateThicknessFr,#splice5WebPlateThicknessFr,#splice6WebPlateThicknessFr,#splice7WebPlateThicknessFr,#splice8WebPlateThicknessFr,#splice9WebPlateThicknessFr,#splice10WebPlateThicknessFr').val(webplatethicknessfr);

	var webplatewidthft = $("#bc2wpwidthft").val();
	$('#splice1WebPlateWidthFt,#splice2WebPlateWidthFt,#splice3WebPlateWidthFt,#splice4WebPlateWidthFt,#splice5WebPlateWidthFt,#splice6WebPlateWidthFt,#splice7WebPlateWidthFt,#splice8WebPlateWidthFt,#splice9WebPlateWidthFt,#splice10WebPlateWidthFt').val(webplatewidthft);

	var webplatewidthin = $("#bc2wpwidthin").val();
	$('#splice1WebPlateWidthIn,#splice5WebPlateWidthIn,#splice3WebPlateWidthIn,#splice4WebPlateWidthIn,#splice5WebPlateWidthIn,#splice6WebPlateWidthIn,#splice7WebPlateWidthIn,#splice8WebPlateWidthIn,#splice9WebPlateWidthIn,#splice10WebPlateWidthIn').val(webplatewidthin);

	var webplatewidthfr= $("#bc2wpwidthfr").val();
	$('#splice1WebPlateWidthFr,#splice2WebPlateWidthFr,#splice3WebPlateWidthFr,#splice4WebPlateWidthFr,#splice5WebPlateWidthFr,#splice6WebPlateWidthFr,#splice7WebPlateWidthFr,#splice8WebPlateWidthFr,#splice9WebPlateWidthFr,#splice10WebPlateWidthFr').val(webplatewidthfr);

	$("#bc2tfpthicknessin,#bc2tfpthicknessfr,#bc2tfpwidthft,#bc2tfpwidthin,#bc2tfpwidthfr,#bc2wpthicknessin,#bc2wpthicknessfr,#bc2wpwidthft,#bc2wpwidthin,#bc2wpwidthfr").change(function(){
	//$('#spliceRows').empty();
	//$('#boxsplicecount').prop('selectedIndex',0);
	});

	});

	/* $('body').on('change', '#splice1TFPlateThicknessIn', function() {
	    alert("");
	    	
	    });
	 */
	$(".referenceSelect").select2({
        placeholder: "Select"
    });
	$(".bc2select1").select2({
	placeholder: "Select"
	});

	$(function() {
	$('.chosen-select').chosen();
	$('.chosen-select-deselect').chosen({
	allow_single_deselect: true
	});
	});

	$('#chkcapplate').change(function() {
		if($(this).prop("checked") == true){
			$('#chks2Cap1, #chks2Cap2, #chks2Cap3, #chks2Cap4').attr('disabled', false);
		} 
		else {
			$('#chks2Cap1, #chks2Cap2, #chks2Cap3, #chks2Cap4').attr('disabled', true);
		}
	});

	

	
	
	 $('body').on('change', '.spliceinThickness', function() {
		var value1 = $(this).attr('id').split('TFPlateThicknessIn')[0];
        var ID=value1+'BFPlateThicknessIn';
	    $("#"+ID).val($(this).val());
	    });
	 
	 
	 $('body').on('change', '.splicefrThickness', function() {
			var value1 = $(this).attr('id').split('TFPlateThicknessFr')[0];
	        var ID1=value1+'BFPlateThicknessFr';
		    $("#"+ID1).val($(this).val());
		 
		    });
	 
	 
	 $('body').on('change', '.splicefrWidth', function() {
		  var value2 = $(this).attr('id').split('TFPlateWidthFr')[0];
		     var ID2=value2+'BFPlateWidthFr';
			    $("#"+ID2).val($(this).val());
		 
		    });
	 	
	 $('body').on('change', '.spliceinThickness', function() {
			var value1 = $(this).attr('id').split('TFPlateThicknessIn')[0];
	        var ID1=value1+'BFPlateThicknessIn';
		    $("#"+ID1).val($(this).val());
		  });
	 
	 $('body').on('change', '.spliceinWidth', function() {
		 var value2 = $(this).attr('id').split('TFPlateWidthIn')[0];
	     var ID2=value2+'BFPlateWidthIn';
		    $("#"+ID2).val($(this).val());
		  });
	 
	 $('body').on('change', '.splicefrThickness', function() {
				var value1 = $(this).attr('id').split('TFPlateThicknessFr')[0];
		        var ID=value1+'BFPlateThicknessFr';
			    $("#"+ID).val($(this).val());
			    });
		 
		 $('body').on('keyup', '.splicefeetWidth', function() {
				var value1 = $(this).attr('id').split('TFPlateWidthFt')[0];
		        var ID=value1+'BFPlateWidthFt';
			    $("#"+ID).val($(this).val());
			
			    });
		 
		 
	
		 
		 

			$('#bc2wpthicknessin,#bc2wpthicknessfr,#bc2wpwidthin,#bc2wpwidthfr,#bc2tfpthicknessin,#bc2tfpthicknessfr,#bc2tfpwidthft,#bc2tfpwidthin,#bc2tfpwidthfr').change(function() {
			            $(".spliceinThickness").val($("#bc2tfpthicknessin").val());
					    $(".splicefrThickness").val($("#bc2tfpthicknessfr").val());
					    $(".splicefeetWidth").val($("#bc2tfpwidthft").val());
					    $(".spliceinWidth").val($("#bc2tfpwidthin").val());
					    $(".splicefrWidth").val($("#bc2tfpwidthfr").val());
					    
					    
					    $(".spliceinThicknessWeb").val($("#bc2wpthicknessin").val());
					    $(".splicefrThicknessWeb").val($("#bc2wpthicknessfr").val());
					    $(".splicefeetWidthWeb").val($("#bc2wpwidthft").val());
					    $(".spliceinWidthWeb").val($("#bc2wpwidthin").val());
					    $(".splicefrWidthWeb").val($("#bc2wpwidthfr").val());
					    if ($("#boxsplicecount").val()!=0) {
					    	
					    	  $("#error-msg").show();
					    	  
					    	  setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
					             	$("#error-msg").hide();

					         }, 10000);
						}
					   
					  
			});
			
			
			
			
			
			 $('body').on('keyup', '#bc2tfpwidthft,#bc2wpwidthft', function() {
				   $(".spliceinThickness").val($("#bc2tfpthicknessin").val());
				    $(".splicefrThickness").val($("#bc2tfpthicknessfr").val());
				    $(".splicefeetWidth").val($("#bc2tfpwidthft").val());
				    $(".spliceinWidth").val($("#bc2tfpwidthin").val());
				    $(".splicefrWidth").val($("#bc2tfpwidthfr").val());
				     
				    $(".spliceinThicknessWeb").val($("#bc2wpthicknessin").val());
				    $(".splicefrThicknessWeb").val($("#bc2wpthicknessfr").val());
				    $(".splicefeetWidthWeb").val($("#bc2wpwidthft").val());
				    $(".spliceinWidthWeb").val($("#bc2wpwidthin").val());
				    $(".splicefrWidthWeb").val($("#bc2wpwidthfr").val());
				    if ($("#boxsplicecount").val()!=0) {
				    	
				    	  $("#error-msg").show();
				    	  
				    	  setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
				             	$("#error-msg").hide();

				         }, 3500);
					}
			
				    });
			 
			 $("#error-msg").hide();
		 
			 $("#boxcolumngrade").change(function(){
					$("#boxgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
					});
				$("#columnmodal2weldtype").change(function(){
					$("#columnmodal2weldtype").removeClass("importantRed");
					});
				$("#columnmodalweldsize").change(function(){
					$("#columnmodalweldsize").removeClass("importantRed");
					});
				$("#bc2weldtype").change(function(){
					$("#bc2weldtype").removeClass("importantRed");
					});
				$("#bc2weldsizein").change(function(){
					$("#bc2weldsizein").removeClass("importantRed");
					});
				$("#bc2weldtype").change(function(){
					$("#bc2weldtype").removeClass("importantRed");
					});
				$('#bc4depthaft').on('click', function() {
					   if( $('#bc4depthaft').val() == "0") {
					   $('#bc4depthaft').val("");
					   }
				   });
				$('#bc2tfpwidthft').on('click', function() {
					   if( $('#bc2tfpwidthft').val() == "0") {
					   $('#bc2tfpwidthft').val("");
					   }
				   });
				$('#bc2cbelevationft').on('click', function() {
					   if( $('#bc2cbelevationft').val() == "0") {
					   $('#bc2cbelevationft').val("");
					   }
				   });
				$('#bc2ctelevationft').on('click', function() {
					   if( $('#bc2ctelevationft').val() == "0") {
					   $('#bc2ctelevationft').val("");
					   }
				   });
				$('#bc2wpwidthft').on('click', function() {
					   if( $('#bc2wpwidthft').val() == "0") {
					   $('#bc2wpwidthft').val("");
					   }
				   });