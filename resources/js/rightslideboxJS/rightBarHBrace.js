function keyDownEvent(e) {

	// Allow: backspace, delete, tab, escape, enter and .
	if ($.inArray(e.keyCode, [ 46, 8, 9, 27, 13, 190 ]) !== -1 ||
	// Allow: Ctrl+A, Command+A
	(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
	// Allow: home, end, left, right, down, up
	(e.keyCode >= 35 && e.keyCode <= 40)) {
		// let it happen, don't do anything
		return;
	}
	// Ensure that it is a number and stop the keypress
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57))
			&& (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
}
function AllowNumbersOnly(e) {
	var code = (e.which) ? e.which : e.keyCode;

	if (code > 31 && (code < 48 || code > 57)) {
		e.preventDefault();
	}
}
$.each(wsDropDown.SurfacePreparation, function(index, data) {
	var weldsize = "<option>" + data.SSPC_No + "</option>";
	$(weldsize).appendTo('#hbsurfacePreparation1');

});

$.each(wsDropDown.NoOfCoats, function(index, data) {
	var NoOfCoats = "<option>" + data.Coats + "</option>";
	$(NoOfCoats).appendTo('#hbprimer2,#hbpaint2');

});

$.each(wsDropDown.ZincCoatingThickness, function(index, data) {
	var NoOfCoats = "<option>" + data.ZincCoatingThickness + "</option>";
	$(NoOfCoats).appendTo('#hbgalvanization2');

});

$.each(wsDropDown.FireProofingType, function(index, data) {
	var appendval = "<option>" + data.FireProofingType + "</option>";
	$(appendval).appendTo('#hbfireProofing2');

});
$.each(wsDropDown.FireRating, function(index, data) {
	var appendval = "<option>" + data.FireRating_fra + "</option>";
	$(appendval).appendTo('#hbfireProofing3');

});

$.each(wsDropDown.AESSCategory, function(index, data) {
	var appendval = "<option>" + data.AESS + "</option>";
	$(appendval).appendTo('#hbaess1');

});
if(wsFinish != null){
    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
console.log(usedfinish);

var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
 
 if(paintValue != null){
 $('#hbprimer1').val(paintValue);
 document.getElementById("hbprimer1").setAttribute("disabled", false);
 }
 if(noOfCoatsprimer != null){
    var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
    $('select[name^="#hbprimer2"] option[value=noOfCts]').attr("selected","selected");

 }

$('#chkprimer').change(function() {
   if($(this).prop("checked") == true){
       $('#hbprimer1, #hbprimer2').attr('disabled', false);
      if(primerperiSPreparation != null){
		  $('#hbsurfacePreparation1').val(primerperiSPreparation);
	  }
   } else {
       $('#hbprimer1, #hbprimer2').attr('disabled', true);

   }
});
if(usedfinish == "Primer"){
$('#chkprimer').prop('checked', true);
$('#chknopaint').attr('checked', true);
$('#hbprimer1,#hbprimer2').attr('disabled', false);	
if(primerperiSPreparation != null){
	  $('#hbsurfacePreparation1').val(primerperiSPreparation);
}
} 

var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
if(usedfinish != "Galvanizing" &&  SPreparation != null){
	 $('#chkprimer').prop('checked', true);
	  $('#chknopaint').attr('checked', true);
	 $('#hbprimer1,#hbprimer2').attr('disabled', false);	
	 if(primerperiSPreparation != null){
		  $('#hbsurfacePreparation1').val(primerperiSPreparation);
	  }
}

var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
if(paintValue != null){
$('#hbpaint1').val(paintValue);
document.getElementById("hbpaint1").setAttribute("disabled", false);
}

if(noOfCoatspaint != null){
var noOfCts="<option value>"+noOfCoatspaint+"</option>";
$('select[name^="#hbpaint2"] option[value=noOfCts]').attr("selected","selected");
}
$('#chkpaint').change(function() {
 if($(this).prop("checked") == true){
     $('#hbpaint1, #hbpaint2').attr('disabled', false);
     if(paintperiSPreparation != null){
	    		  $('#hbsurfacePreparation1').val(paintperiSPreparation);
	    	  }
 } else {
     $('#hbpaint1, #hbpaint2').attr('disabled', true);
 }
 if($('#chkprimer').prop("checked") == true){
     $('#chkprimer').removeAttr("disabled");
 } else {
     $('#chkprimer').removeAttr("disabled");
 }
 $('#hbgalvanization2').attr('disabled', true);
});
if(usedfinish == "Paint"){
  	  $('#chkpaint').attr('checked', true);
  	  $('#hbpaint1, #hbpaint2').attr('disabled', false);
  	  if(paintperiSPreparation != null){
  		  $('#hbsurfacePreparation1').val(paintperiSPreparation);
  	  }
    }

var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
var	category = wsFinish.Finish.AESS.Category;
 
if(category != null){   
    var aess="<option value>"+category+"</option>";
	   $('select[name^="#hbaess1"] option[value=aess]').attr("selected","selected");
}
$('#chkaess').change(function() {
if($(this).prop("checked") == true){
  $('#hbaess1').attr('disabled', false);
  if(aessperiSPreparation != null){
		  $('#hbsurfacePreparation1').val(aessperiSPreparation);
	  }
} else {
  $('#hbaess1').attr('disabled', true);
}
if($('#chkprimer').prop("checked") == true){
  $('#chkprimer').removeAttr("disabled");
} else {
  $('#chkprimer').removeAttr("disabled");
}
$('#hbpaint1, #hbpaint2, #hbgalvanization2, #hbfireProofing2, #hbfireProofing3').attr('disabled', true); 
});
if(usedfinish == "AESS"){
$('#chkaess').attr('checked', true);
$('#hbaess1').attr('disabled', false);
if(aessperiSPreparation != null){
	  $('#hbsurfacePreparation1').val(aessperiSPreparation);
}
}
 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
 
	      
    if(fireRating != null){
    var fireRatingval="<option value>"+fireRating+"</option>";
    $('select[name^="#hbfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
    }
    if(fireProofingType != null){
       var fireProofing="<option value>"+fireProofingType+"</option>";
       $('select[name^="#hbfireProofing3"] option[value=fireProofing]').attr("selected","selected");
    }
   $('#chkfireproofing').change(function() {
      if($(this).prop("checked") == true){
          $('#hbfireProofing2, #hbfireProofing3').attr('disabled', false);
         if(fpperiSPreparation != null){
	       		$('#hbsurfacePreparation1').val(fpperiSPreparation);
	       	}
      } else {
          $('#hbfireProofing2, #hbfireProofing3').attr('disabled', true);
      }  
      if($('#chkprimer').prop("checked") == true){
          $('#chkprimer').removeAttr("disabled");
      } else {
          $('#chkprimer').removeAttr("disabled");
      }
      $('#hbpaint1, #hbpaint2, #hbgalvanization2, #hbaess1').attr('disabled', true);  
      // $('#chkprimer').removeAttr("disabled");
  });
    if(usedfinish == "Fire proofing"){
     	  $('#chkfireproofing').attr('checked',true);
     	  $('#hbfireProofing2, #hbfireProofing3').attr('disabled', false);
     	
	    }
 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
    if(zincCoatingThickness != null){
    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
    $('select[name^="#hbgalvanization2"] option[value=zincCoating]').attr("selected","selected");
    }
   $('#chkgalvanize').change(function() {
      if($(this).prop("checked") == true){
          $('#hbgalvanization2').attr('disabled', false);
         if(galperiSPreparation != null){
	     	 	 $('#hbsurfacePreparation1').val(galperiSPreparation);
	     	 	   } 
      } else {
          $('#hbgalvanization2').attr('disabled', true);
      }
      if($('#chkprimer').prop("checked") == true){
          $('#chkprimer').prop('checked', false);
          $('#chkprimer').attr('disabled', true);
      } 
      else {
          $('#chkprimer').prop('checked', false);
          $('#chkprimer').attr('disabled', true);
      }
      $('#hbprimer1, #hbprimer2, #hbpaint1, #hbpaint2, #hbfireProofing2, #hbfireProofing3, #hbaess1').attr('disabled', true);
      // $("#chkprimer").attr('disabled', 'disabled');
  });
   if(usedfinish == "Galvanizing"){
  	  $('#chkgalvanize').attr('checked', true);
  	  $('#hbgalvanization2').attr('disabled', false);
  	  $('#chkprimer').prop('checked', false);
          $('#chkprimer').attr('disabled', true);
          if(galperiSPreparation != null){
   	 	 $('#hbsurfacePreparation1').val(galperiSPreparation);
   	 	   }  
    }
 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
$('#chknopaint').change(function() {
      if($('#chkprimer').prop("checked") == true){
          $('#chkprimer').attr('disabled', false);
         if(nopperiSPreparation != null){
	 			 $('#hbsurfacePreparation1').val(nopperiSPreparation);
	 		 	   }
      } else {
          $('#chkprimer').attr('disabled', false);
      }
      if($('#chkprimer').prop("checked") == true){
          $('#chkprimer').removeAttr("disabled");
      } else {
          $('#chkprimer').removeAttr("disabled");
      }
      $('#hbpaint1, #hbpaint2, #hbgalvanization2, #hbfireProofing2, #hbfireProofing3, #hbaess1').attr('disabled', true);
  });
	  if(usedfinish == "NoPaint"){
	  $('#chknopaint').attr('checked', true);
	
}
}

$.each(wsDropDown.HBProfile, function(key, value) {

	var profiles = "<option>" + value.Profile + "</option>";

	$(profiles).appendTo('#hBraceProfile');

});

$.each(wsDropDown.Fraction,
		function(index, data) {

			$('<option>').val(data.fr).text(data.fr_fra).appendTo(
					'#hBraceLocation_fr');

		});

$('#hBraceLocation_fr').val("0");

$.each(wsDropDown.Inch,
		function(index, data) {

			$('<option>').val(data.Inch).text(data.Inch).appendTo(
					'#hBraceLocation_in');

		});

$('#hBraceLocation_in').val("0");

$.each(wsDropDown.DataSource, function(index, data) {
	var datasource = "<option>" + data.DataSource + "</option>";
	$(datasource).appendTo('#hBraceDataSource');

});

$.each(RefDwgNumFiles, function(index, data) {

	var referencenum = "<option>" + data + "</option>";

	$(referencenum).appendTo('#hBraceRefNum');

});
function getGradeOnProfileChange() {
	var profilename = $(hBraceProfile).val();
	$('#hBraceMaterialGrade').empty();
	getProfileGrades(profilename);
	$.each(profileGrades, function(index, data) {
		var grades = "<option value=\"" + data.Grade + "\">" + data.Grade
				+ "</option>";

		$(grades).appendTo('#hBraceMaterialGrade');

	});
	var res = profilename.charAt(0);
	if (wsPlateGrade != '') {
		var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		var cmcgrade = wsPlateGrade.MemberGrades.Angles;
		if (res == "W") {
			if (profileshgrade != null) {
				$('#hBraceMaterialGrade').val(profileshgrade);
			}
		} else if (res == "H") {
			if (hssgrade != '') {
				$('#hBraceMaterialGrade').val(hssgrade);
			}
		} else {
			if (cmcgrade != '') {
				$('#hBraceMaterialGrade').val(cmcgrade);
			}
		}
	}
}
function getProfileConnectionMark() {
	$('#hBraceMark1').empty();
	$('#hBraceMark2').empty();
	$('#hBraceMark3').empty();
	$('#hBraceMark4').empty();
	$('#hBraceMark5').empty();

	var profilename = $(hBraceProfile).val();
	$('#hBraceMark1').empty();

	var filtered = $.grep(connectionObjList, function(el) {
		if (profilename.indexOf(el.profile) >= 0
				&& el.type.toLowerCase().indexOf("horizontal") >= 0) {
			return el.profile;
		}
	});
	$.each(filtered, function(key, value) {
		var ConnectionMark = "<option>" + value.connectionMark + "</option>";
		$(ConnectionMark).appendTo('#hBraceMark1');
		$(ConnectionMark).appendTo('#hBraceMark2');
		$(ConnectionMark).appendTo('#hBraceMark3');
		$(ConnectionMark).appendTo('#hBraceMark4');
		$(ConnectionMark).appendTo('#hBraceMark5');

	});
	$('#hBraceMethodGusset1').empty();
	$('#hBraceMethodGusset2').empty();
	$('#hBraceMethodGusset3').empty();
	$('#hBraceMethodGusset4').empty();
	$('#hBraceMethodGusset5').empty();

	var connectionmark = $("#hBraceMark1").val();
	if (connectionmark != null) {
		var btogusset = $.grep(connectionObjList, function(el) {

			if (el.connectionMark != null
					&& (connectionmark.indexOf(el.connectionMark) >= 0)) {

				return el.bracetogusset;

			}
		});

		$.each(btogusset, function(key, value) {
			var supportbeam = "<option>" + value.bracetogusset + "</option>";
			$(supportbeam).appendTo('#hBraceMethodGusset1');
			$(supportbeam).appendTo('#hBraceMethodGusset2');
			$(supportbeam).appendTo('#hBraceMethodGusset3');
			$(supportbeam).appendTo('#hBraceMethodGusset4');
			$(supportbeam).appendTo('#hBraceMethodGusset5');

		});
		$('#hBraceTypeBeam1').empty();
		$('#hBraceTypeBeam2').empty();
		$('#hBraceTypeBeam3').empty();
		$('#hBraceTypeBeam4').empty();
		$('#hBraceTypeBeam5').empty();

		var conntype = $.grep(connectionObjList, function(el) {

			if (el.connectionMark != null
					&& (connectionmark.indexOf(el.connectionMark) >= 0)) {

				return el.conntype;

			}
		});

		$.each(conntype, function(key, value) {
			var supportbeam = "<option>" + value.conntype + "</option>";
			$(supportbeam).appendTo('#hBraceTypeBeam1');
			$(supportbeam).appendTo('#hBraceTypeBeam2');
			$(supportbeam).appendTo('#hBraceTypeBeam3');
			$(supportbeam).appendTo('#hBraceTypeBeam4');
			$(supportbeam).appendTo('#hBraceTypeBeam5');

		});
		$('#hBraceMethodBeam1').empty();
		$('#hBraceMethodBeam2').empty();
		$('#hBraceMethodBeam3').empty();
		$('#hBraceMethodBeam4').empty();
		$('#hBraceMethodBeam5').empty();

		var gtobeam = $.grep(connectionObjList, function(el) {

			if (el.connectionMark != null
					&& (connectionmark.indexOf(el.connectionMark) >= 0)) {

				return el.gussettobeam;

			}
		});

		$.each(gtobeam, function(key, value) {
			var supportbeam = "<option>" + value.gussettobeam + "</option>";
			$(supportbeam).appendTo('#hBraceMethodBeam1');
			$(supportbeam).appendTo('#hBraceMethodBeam2');
			$(supportbeam).appendTo('#hBraceMethodBeam3');
			$(supportbeam).appendTo('#hBraceMethodBeam4');
			$(supportbeam).appendTo('#hBraceMethodBeam5');
		});
	}
}
$("#hBraceProfile").change(function() {
	getGradeOnProfileChange();
	getProfileConnectionMark();
});

// JQuery Code
$(".referenceSelect").select2({
    placeholder: "Select"
});
$(".hbselect1").select2({
	placeholder : "Select"
});
$(".hbselect2").select2({
	placeholder : "Select"
});

/*$('#chkprimer').change(function() {
	if ($(this).prop("checked") == true) {
		$('#hbprimer1, #hbprimer2').attr('disabled', false);
	} else {
		$('#hbprimer1, #hbprimer2').attr('disabled', true);

	}
});
$('#chknopaint')
		.change(
				function() {
					if ($('#chkprimer').prop("checked") == true) {
						$('#chkprimer').attr('disabled', false);
					} else {
						$('#chkprimer').attr('disabled', false);
					}
					if ($('#chkprimer').prop("checked") == true) {
						$('#chkprimer').removeAttr("disabled");
					} else {
						$('#chkprimer').removeAttr("disabled");
					}
					$(
							'#hbpaint1, #hbpaint2, #hbgalvanization2, #hbfireProofing2, #hbfireProofing3, #hbaess1')
							.attr('disabled', true);
				});
$('#chkpaint').change(function() {
	if ($(this).prop("checked") == true) {
		$('#hbpaint1, #hbpaint2').attr('disabled', false);
	} else {
		$('#hbpaint1, #hbpaint2').attr('disabled', true);
	}
	if ($('#chkprimer').prop("checked") == true) {
		$('#chkprimer').removeAttr("disabled");
	} else {
		$('#chkprimer').removeAttr("disabled");
	}
	$('#hbgalvanization2').attr('disabled', true);
});
$('#chkgalvanize')
		.change(
				function() {
					if ($(this).prop("checked") == true) {
						$('#hbgalvanization2').attr('disabled', false);
					} else {
						$('#hbgalvanization2').attr('disabled', true);
					}
					if ($('#chkprimer').prop("checked") == true) {
						$('#chkprimer').prop('checked', false);
						$('#chkprimer').attr('disabled', true);
					} else {
						$('#chkprimer').prop('checked', false);
						$('#chkprimer').attr('disabled', true);
					}
					$(
							'#hbprimer1, #hbprimer2, #hbpaint1, #hbpaint2, #hbfireProofing2, #hbfireProofing3, #hbaess1')
							.attr('disabled', true);
					// $("#chkprimer").attr('disabled', 'disabled');
				});
$('#chkfireproofing')
		.change(
				function() {
					if ($(this).prop("checked") == true) {
						$('#hbfireProofing2, #hbfireProofing3').attr(
								'disabled', false);
					} else {
						$('#hbfireProofing2, #hbfireProofing3').attr(
								'disabled', true);
					}
					if ($('#chkprimer').prop("checked") == true) {
						$('#chkprimer').removeAttr("disabled");
					} else {
						$('#chkprimer').removeAttr("disabled");
					}
					$('#hbpaint1, #hbpaint2, #hbgalvanization2, #hbaess1')
							.attr('disabled', true);
					// $('#chkprimer').removeAttr("disabled");
				});
$('#chkaess')
		.change(
				function() {
					if ($(this).prop("checked") == true) {
						$('#hbaess1').attr('disabled', false);
					} else {
						$('#hbaess1').attr('disabled', true);
					}
					if ($('#chkprimer').prop("checked") == true) {
						$('#chkprimer').removeAttr("disabled");
					} else {
						$('#chkprimer').removeAttr("disabled");
					}
					$(
							'#hbpaint1, #hbpaint2, #hbgalvanization2, #hbfireProofing2, #hbfireProofing3')
							.attr('disabled', true);
				});*/

$(".hideAll").hide();
$("#hBraceShapes").change(function() {
	$('#showcg').empty();
	$('#showcd').empty();
	var connectionvalue = $('option:selected', this).attr(
			'ctbg');
	var ctbgval = $('#hBraceShapes').val();
	var ctbdval = $('option:selected', this).attr('ctbd');
	if (ctbgval == "hfs") {
		var html = ' <div class="row m-b-10">'+ 
					'<div class="col-lg-12 col-md-12 ">'+ 
						'<div class="row pShape1">'
							+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
							+ '<div class="col-md-2 padding5">'
							+ '<label class="labelBlack control-label">Connection Mark</label>'
							+ '</div>'
							+ '<div class="col-md-3 padding5">'
							+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
							+ '</div>'
							+ '<div class="col-md-3 padding5">'
							+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
							+ '</div>'
							+ '<div class="col-md-3 padding5">'
							+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
							+ '</div>'
					    + '</div>'
						+ ' <div class="row m-b-10">'
							+ '<div class="col-lg-1 col-md-1 ">'
							+ '<label class=" numbubble">1</label>'
							+ ' </div>'
							+
							'<div class="col-lg-2 col-md-2 padding5">'
							+ '<select class="form-control" id="hBraceMark1">'
							+ '</select>'
							+ '</div>'
							+ '<div class="col-lg-3 col-md-3 padding5">'
							+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
							+ '</select>'
							+ '</div>'
							+ '<div class="col-lg-3 col-md-3 padding5">'
							+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
							+ '</select>'
							+ '</div>'
							+ '<div class="col-lg-3 col-md-3 p-l-5">'
							+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
							+ '</select>'
							+ '</div>'
						+ ' </div>'
						+ ' <div class="row m-b-10">'
							+ '<div class="col-lg-1 col-md-1 ">'
							+ '<label class=" numbubble">2</label>'
							+ ' </div>'
							+
							'<div class="col-lg-2 col-md-2 padding5">'
							+ '<select class="form-control" id="hBraceMark2">'
							+ '</select>'
							+ '</div>'
							+ '<div class="col-lg-3 col-md-3 padding5">'
							+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
							+ '</select>'
							+ '</div>'
							+ '<div class="col-lg-3 col-md-3 padding5">'
							+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
							+ '</select>'
							+ '</div>'
							+ '<div class="col-lg-3 col-md-3 p-l-5">'
							+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
							+ '</select>' 
							+ '</div>' 
						+ ' </div>'
					
						+ ' </div>'
					+ ' </div>' +
					
				' <div class="row m-b-10">'+
                    '<div class="col-lg-12 col-md-12 ">'+
                        '<div class="row pShape1 hideAll m-b-10">'+
                            '<div class="col-lg-12 col-md-12 text-center">'+
                                '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/forward+slash.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/forward+slash.png">'+
                            '</div>'+
                        '</div>'+
					' </div>' + 
				  ' </div>'
		$('#showcg').append(html);
	
			var html1 = '<div class="row">'
					+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
					+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
					+ '<div class="col-lg-3 col-md-3 "></div>'
					+ '<div class="col-md-6 ">'
					+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
					+ '</div>'
					+ '</div>'
					+ '<div class="row pShape1 pShape2 hideAll">'
					+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
					+ '<div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ '</div>'
					+ '<div class="col-lg-7 col-md-7 m-l-20">'
					+ '<input type="text" class="form-control per70" id="vaxialload1">'
					+ '<div class="txt-right">'
					+ ' Kips'
					+ '</div>'
					+ '</div>'
					+ '</div>'
					+ '</div>'
					+ ' </div>'
					+ ' </div>'
					+ '<div class="col-lg-6 col-md-6 m-b-10">'
					+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
					+ '<div class="row pShape1 hideAll m-b-10">'
					+ '<div class="col-lg-12 col-md-12 text-center">'
					+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/1.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/1.png">'
					+ '</div>' + '</div>' + '</div>' + '</div>'
			$('#showcd').append(html1);
		
			/*var html1 = '<div class="row">'
					+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
					+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
					+ '<div class="col-lg-3 col-md-3 "></div>'
					+ '<div class="col-md-6 ">'
					+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
					+ '</div>'
					+ '</div>'
					+ '<div class="row pShape1 pShape2 hideAll">'
					+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
					+ '<div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ '</div>'
					+ '<div class="col-lg-7 col-md-7 m-l-20">'
					+ '<input type="text" class="form-control per70" id="vaxialload1">'
					+ '<div class="txt-right">'
					+ ' Kips'
					+ '</div>'
					+ '</div>'
					+ '</div>'
					+ '</div>'
					+ ' </div>'
					+ '</div>'
					+

					'<div class="col-lg-6 col-md-6 m-b-10">'
					+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
					+ ' <div class="row pShape2 hideAll m-b-10">'
					+ '<div class="col-lg-12 col-md-12 text-center">'
					+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/2.png">'
					+ ' </div>' + '</div>' + '</div>'
			$('#showcd').append(html1);*/
		
	}

	else if (ctbgval == "hbs") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
		
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/backward+slash.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/backward+slash.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/2.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 
	
	else if (ctbgval == "hxs") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="hBraceMark4">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceMethodGusset4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceTypeBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="hBraceMethodBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
	+ ' <div class="row m-b-10">'
	+ '<div class="col-lg-1 col-md-1 ">'
	+ '<label class=" numbubble">5</label>'
	+ ' </div>'
	+
	'<div class="col-lg-2 col-md-2 padding5">'
	+ '<select class="form-control" id="hBraceMark5">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceMethodGusset5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceTypeBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 p-l-5">'
	+ '<select class="form-control" id="hBraceMethodBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/X.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/X.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/3.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/3.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 
	
	else if (ctbgval == "hvs") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>' 
			+ '</div>' 
		+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V1.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V1.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/4.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/4.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 			
	else if (ctbgval == "has") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>' 
			+ '</div>' 
		+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V2.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/5.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/5.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 			
	
	else if (ctbgval == "hds") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>' 
			+ '</div>' 
		+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V3.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V3.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/6.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/6.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 	
	else if (ctbgval == "hps") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>' 
			+ '</div>' 
		+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V4.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V4.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/7.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/7.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 	
	
	else if (ctbgval == "hws") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="hBraceMark4">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceMethodGusset4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceTypeBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="hBraceMethodBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
	+ ' <div class="row m-b-10">'
	+ '<div class="col-lg-1 col-md-1 ">'
	+ '<label class=" numbubble">5</label>'
	+ ' </div>'
	+
	'<div class="col-lg-2 col-md-2 padding5">'
	+ '<select class="form-control" id="hBraceMark5">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceMethodGusset5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceTypeBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 p-l-5">'
	+ '<select class="form-control" id="hBraceMethodBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">3</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload3">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload4">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/8.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/8.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 
	
	else if (ctbgval == "hms") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="hBraceMark4">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceMethodGusset4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceTypeBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="hBraceMethodBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
	+ ' <div class="row m-b-10">'
	+ '<div class="col-lg-1 col-md-1 ">'
	+ '<label class=" numbubble">5</label>'
	+ ' </div>'
	+
	'<div class="col-lg-2 col-md-2 padding5">'
	+ '<select class="form-control" id="hBraceMark5">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceMethodGusset5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceTypeBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 p-l-5">'
	+ '<select class="form-control" id="hBraceMethodBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/M.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/M.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">3</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload3">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload4">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/9.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/9.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 
	
	else if (ctbgval == "hes") {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="hBraceMark4">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceMethodGusset4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceTypeBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="hBraceMethodBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
	+ ' <div class="row m-b-10">'
	+ '<div class="col-lg-1 col-md-1 ">'
	+ '<label class=" numbubble">5</label>'
	+ ' </div>'
	+
	'<div class="col-lg-2 col-md-2 padding5">'
	+ '<select class="form-control" id="hBraceMark5">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceMethodGusset5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceTypeBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 p-l-5">'
	+ '<select class="form-control" id="hBraceMethodBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W1.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W1.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">3</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload3">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload4">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/10.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/10.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 
	
	else {
		var html = ' <div class="row m-b-10">'+ 
		'<div class="col-lg-12 col-md-12 ">'+ 
			'<div class="row pShape1">'
				+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
				+ '<div class="col-md-2 padding5">'
				+ '<label class="labelBlack control-label">Connection Mark</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
				+ '</div>'
				+ '<div class="col-md-3 padding5">'
				+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
				+ '</div>'
		    + '</div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">1</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark1">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam1" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="hBraceMark2">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceMethodGusset2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="hBraceTypeBeam2" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="hBraceMethodBeam2" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="hBraceMark3">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceMethodGusset3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="hBraceTypeBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="hBraceMethodBeam3" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="hBraceMark4">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceMethodGusset4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="hBraceTypeBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="hBraceMethodBeam4" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
	+ ' <div class="row m-b-10">'
	+ '<div class="col-lg-1 col-md-1 ">'
	+ '<label class=" numbubble">5</label>'
	+ ' </div>'
	+
	'<div class="col-lg-2 col-md-2 padding5">'
	+ '<select class="form-control" id="hBraceMark5">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceMethodGusset5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 padding5">'
	+ '<select class="form-control" id="hBraceTypeBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-lg-3 col-md-3 p-l-5">'
	+ '<select class="form-control" id="hBraceMethodBeam5" disabled="true">'
	+ '</select>'
	+ '</div>'
+ ' </div>'
			+ ' </div>'
		+ ' </div>' +
		
	' <div class="row m-b-10">'+
        '<div class="col-lg-12 col-md-12 ">'+
            '<div class="row pShape1 hideAll m-b-10">'+
                '<div class="col-lg-12 col-md-12 text-center">'+
                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W2.png">'+
                '</div>'+
            '</div>'+
		' </div>' + 
	  ' </div>'
$('#showcg').append(html);

var html1 = '<div class="row">'
		+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
		+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">1</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload1">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">2</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload2">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">3</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload3">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="col-lg-3 col-md-3 "></div>'
		+ '<div class="col-md-6 ">'
		+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
		+ '</div>'
		+ '</div>'
		+ '<div class="row pShape1 pShape2 hideAll">'
		+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
		+ '<div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">4</label>'
		+ '</div>'
		+ '<div class="col-lg-7 col-md-7 m-l-20">'
		+ '<input type="text" class="form-control per70" id="vaxialload4">'
		+ '<div class="txt-right">'
		+ ' Kips'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		
		
		+ ' </div>'
		+ ' </div>'
		+ '<div class="col-lg-6 col-md-6 m-b-10">'
		+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
		+ '<div class="row pShape1 hideAll m-b-10">'
		+ '<div class="col-lg-12 col-md-12 text-center">'
		+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/11.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/11.png">'
		+ '</div>' + '</div>' + '</div>' + '</div>'
$('#showcd').append(html1);
		} 
	$('#hBraceMark1').empty();
	var profilename = $("#hBraceProfile").val();
	var filtered = $.grep(connectionObjList,
			function(el) {
				if (profilename.indexOf(el.profile) >= 0
						&& el.type.toLowerCase().indexOf(
								"horizontal") >= 0) {
					return el.profile;
				}
			});
	$.each(filtered, function(key, value) {

		var ConnectionMark = "<option>" + value.connectionMark
				+ "</option>";
		$(ConnectionMark).appendTo('#hBraceMark1');
		$(ConnectionMark).appendTo('#hBraceMark2');
		$(ConnectionMark).appendTo('#hBraceMark3');
		$(ConnectionMark).appendTo('#hBraceMark4');
		$(ConnectionMark).appendTo('#hBraceMark5');

	});
	$('#hBraceMethodGusset1').empty();
	$('#hBraceMethodGusset2').empty();
	$('#hBraceMethodGusset3').empty();
	$('#hBraceMethodGusset4').empty();
	$('#hBraceMethodGusset5').empty();

	var connectionmark = $("#hBraceMark1").val();
	if (connectionmark != null) {
		var btogusset = $.grep(connectionObjList, function(el) {

			if (el.connectionMark != null
					&& (connectionmark
							.indexOf(el.connectionMark) >= 0)) {

				return el.bracetogusset;

			}
		});

		$.each(btogusset, function(key, value) {
			var supportbeam = "<option>" + value.bracetogusset
					+ "</option>";
			$(supportbeam).appendTo('#hBraceMethodGusset1');
			$(supportbeam).appendTo('#hBraceMethodGusset2');
			$(supportbeam).appendTo('#hBraceMethodGusset3');
			$(supportbeam).appendTo('#hBraceMethodGusset4');
			$(supportbeam).appendTo('#hBraceMethodGusset5');

		});
		$('#hBraceTypeBeam1').empty();
		$('#hBraceTypeBeam2').empty();
		$('#hBraceTypeBeam3').empty();
		$('#hBraceTypeBeam4').empty();
		$('#hBraceTypeBeam5').empty();

		var conntype = $.grep(connectionObjList, function(el) {

			if (el.connectionMark != null
					&& (connectionmark
							.indexOf(el.connectionMark) >= 0)) {

				return el.conntype;

			}
		});

		$.each(conntype, function(key, value) {
			var supportbeam = "<option>" + value.conntype
					+ "</option>";
			$(supportbeam).appendTo('#hBraceTypeBeam1');
			$(supportbeam).appendTo('#hBraceTypeBeam2');
			$(supportbeam).appendTo('#hBraceTypeBeam3');
			$(supportbeam).appendTo('#hBraceTypeBeam4');
			$(supportbeam).appendTo('#hBraceTypeBeam5');

		});
		$('#hBraceMethodBeam1').empty();
		$('#hBraceMethodBeam2').empty();
		$('#hBraceMethodBeam3').empty();
		$('#hBraceMethodBeam4').empty();
		$('#hBraceMethodBeam5').empty();

		var gtobeam = $.grep(connectionObjList, function(el) {

			if (el.connectionMark != null
					&& (connectionmark
							.indexOf(el.connectionMark) >= 0)) {

				return el.gussettobeam;

			}
		});

		$.each(gtobeam, function(key, value) {
			var supportbeam = "<option>" + value.gussettobeam
					+ "</option>";
			$(supportbeam).appendTo('#hBraceMethodBeam1');
			$(supportbeam).appendTo('#hBraceMethodBeam2');
			$(supportbeam).appendTo('#hBraceMethodBeam3');
			$(supportbeam).appendTo('#hBraceMethodBeam4');
			$(supportbeam).appendTo('#hBraceMethodBeam5');

		});
}
	$("#hBraceMark1").change(function() { 
		var connectionmark = $("#hBraceMark1").val();
		if (connectionmark != null) {
			$('#hBraceMethodGusset1').empty();
			var btogusset = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.bracetogusset;
					alert(connectionmark);
				}
			});
			$.each(btogusset, function(key, value) {
				var supportbeam = "<option>" + value.bracetogusset
						+ "</option>";
				$(supportbeam).appendTo('#hBraceMethodGusset1');
			});
			$('#hBraceTypeBeam1').empty();
			var conntype = $.grep(connectionObjList, function(el) {

				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.conntype;

				}
			});
			$.each(conntype, function(key, value) {
				var supportbeam = "<option>" + value.conntype
						+ "</option>";
				$(supportbeam).appendTo('#hBraceTypeBeam1');
			});
			$('#hBraceMethodBeam1').empty();
			var gtobeam = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {
					return el.gussettobeam;
				}
			});
			$.each(gtobeam, function(key, value) {
				var supportbeam = "<option>" + value.gussettobeam + "</option>";
				$(supportbeam).appendTo('#hBraceMethodBeam1');
				
			});
	}
		
	});
	$("#hBraceMark2").change(function() { 
		var connectionmark = $("#hBraceMark2").val();
		if (connectionmark != null) {
			$('#hBraceMethodGusset2').empty();
			var btogusset = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.bracetogusset;
					alert(connectionmark);
				}
			});
			$.each(btogusset, function(key, value) {
				var supportbeam = "<option>" + value.bracetogusset
						+ "</option>";
				$(supportbeam).appendTo('#hBraceMethodGusset2');
			});
			$('#hBraceTypeBeam2').empty();
			var conntype = $.grep(connectionObjList, function(el) {

				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.conntype;

				}
			});
			$.each(conntype, function(key, value) {
				var supportbeam = "<option>" + value.conntype
						+ "</option>";
				$(supportbeam).appendTo('#hBraceTypeBeam2');
			});
			$('#hBraceMethodBeam2').empty();
			var gtobeam = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {
					return el.gussettobeam;
				}
			});
			$.each(gtobeam, function(key, value) {
				var supportbeam = "<option>" + value.gussettobeam + "</option>";
				$(supportbeam).appendTo('#hBraceMethodBeam2');
				
			});
	}
		
	});
	$("#hBraceMark3").change(function() { 
		var connectionmark = $("#hBraceMark3").val();
		if (connectionmark != null) {
			$('#hBraceMethodGusset3').empty();
			var btogusset = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.bracetogusset;
					alert(connectionmark);
				}
			});
			$.each(btogusset, function(key, value) {
				var supportbeam = "<option>" + value.bracetogusset
						+ "</option>";
				$(supportbeam).appendTo('#hBraceMethodGusset3');
			});
			$('#hBraceTypeBeam3').empty();
			var conntype = $.grep(connectionObjList, function(el) {

				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.conntype;

				}
			});
			$.each(conntype, function(key, value) {
				var supportbeam = "<option>" + value.conntype
						+ "</option>";
				$(supportbeam).appendTo('#hBraceTypeBeam3');
			});
			$('#hBraceMethodBeam3').empty();
			var gtobeam = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {
					return el.gussettobeam;
				}
			});
			$.each(gtobeam, function(key, value) {
				var supportbeam = "<option>" + value.gussettobeam + "</option>";
				$(supportbeam).appendTo('#hBraceMethodBeam3');
				
			});
	}
		
	});
	$("#hBraceMark4").change(function() { 
		var connectionmark = $("#hBraceMark4").val();
		if (connectionmark != null) {
			$('#hBraceMethodGusset4').empty();
			var btogusset = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.bracetogusset;
					alert(connectionmark);
				}
			});
			$.each(btogusset, function(key, value) {
				var supportbeam = "<option>" + value.bracetogusset
						+ "</option>";
				$(supportbeam).appendTo('#hBraceMethodGusset4');
			});
			$('#hBraceTypeBeam4').empty();
			var conntype = $.grep(connectionObjList, function(el) {

				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.conntype;

				}
			});
			$.each(conntype, function(key, value) {
				var supportbeam = "<option>" + value.conntype
						+ "</option>";
				$(supportbeam).appendTo('#hBraceTypeBeam4');
			});
			$('#hBraceMethodBeam4').empty();
			var gtobeam = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {
					return el.gussettobeam;
				}
			});
			$.each(gtobeam, function(key, value) {
				var supportbeam = "<option>" + value.gussettobeam + "</option>";
				$(supportbeam).appendTo('#hBraceMethodBeam4');
				
			});
	}
		
	});
	$("#hBraceMark5").change(function() { 
		var connectionmark = $("#hBraceMark5").val();
		if (connectionmark != null) {
			$('#hBraceMethodGusset5').empty();
			var btogusset = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.bracetogusset;
					alert(connectionmark);
				}
			});
			$.each(btogusset, function(key, value) {
				var supportbeam = "<option>" + value.bracetogusset
						+ "</option>";
				$(supportbeam).appendTo('#hBraceMethodGusset5');
			});
			$('#hBraceTypeBeam5').empty();
			var conntype = $.grep(connectionObjList, function(el) {

				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.conntype;

				}
			});
			$.each(conntype, function(key, value) {
				var supportbeam = "<option>" + value.conntype
						+ "</option>";
				$(supportbeam).appendTo('#hBraceTypeBeam5');
			});
			$('#hBraceMethodBeam5').empty();
			var gtobeam = $.grep(connectionObjList, function(el) {
				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {
					return el.gussettobeam;
				}
			});
			$.each(gtobeam, function(key, value) {
				var supportbeam = "<option>" + value.gussettobeam + "</option>";
				$(supportbeam).appendTo('#hBraceMethodBeam5');
				
			});
	}
		
	});
});

function show1() {
	document.getElementById('showcg').style.display = 'block';
	document.getElementById('showcd').style.display = 'none';
}
function show2() {
	document.getElementById('showcd').style.display = 'block';
	document.getElementById('showcg').style.display = 'none';
}
$(function() {
	$('.chosen-select').chosen();
	$('.chosen-select-deselect').chosen({
		allow_single_deselect : true
	});
});
$("#hBraceProfile").change(function(){
	$("#hbprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
	});
$("#hBraceMaterialGrade").change(function(){
	$("#hbgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
	});
$("#hBraceLocation").keyup(function(e){
	$("#hBraceLocation").removeClass("importantRed");
	});
$("#hBraceShapes").change(function(){
	$("#hBraceShapes").removeClass("importantRed");
	});