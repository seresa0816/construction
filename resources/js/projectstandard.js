
$('#surfacepreparation,#ddlGSurface,#ddlFSurface').val('SP3');
var dynamicChoosenValuelength=0;

$("#newrow").hide();
		$(".case").change(function() {
			if ($('.case:checkbox:checked').length == 0) {
				$("#GALZinc").attr("disabled", true);
				$("#GALSurface").attr("disabled", true);
			} else {
				$("#GALZinc").removeAttr("disabled");
				$("#GALSurface").removeAttr("disabled");
			}
		});

		$(".case1").change(function() {
			if ($('.case1:checkbox:checked').length == 0) {
				$("#FireZinc").attr("disabled", true);
				$("#FireSurface").attr("disabled", true);
			} else {
				$("#FireZinc").removeAttr("disabled");
				$("#FireSurface").removeAttr("disabled");
			}
		});

		$(".case2").change(function() {

			if ($('.case2:checkbox:checked').length == 0) {
				$("#primertxt1").attr("disabled", true);
				$("#primertxt2").attr("disabled", true);
			} else {
				$("#primertxt1").removeAttr("disabled");
				$("#primertxt2").removeAttr("disabled");
			}
		});

		$(".case3").change(function() {
			if ($('.case3:checkbox:checked').length == 0) {
				$("#painttxt1").attr("disabled", true);
				$("#painttxt2").attr("disabled", true);
				$("#addbtn").attr("disabled", true);
			} else {
				$("#painttxt1").removeAttr("disabled");
				$("#painttxt2").removeAttr("disabled");
				$("#addbtn").removeAttr("disabled");
			}
		});

		$("#lega11").change(function() {
			if ($('#lega11:checkbox:checked').length == 0) {
				$("#lega1btn1,#lega1btn2,#lega1btn3,#lega1btn4").attr("disabled", true);
				
			} else {
				$("#lega1btn1,#lega1btn2,#lega1btn3,#lega1btn4").removeAttr("disabled");
			
			}
		});

		$("#permit1").change(function() {
			if ($('#permit1:checkbox:checked').length == 0) {
				$("#permitbtn1,#permitbtn2,#permitbtn3,#permitbtn4").attr("disabled", true);
				
			} else {
				$("#permitbtn1,#permitbtn2,#permitbtn3,#permitbtn4").removeAttr("disabled");
				
			}
		});

		$("#singlepilot1").change(function() {
			if ($('#singlepilot1:checkbox:checked').length == 0) {
				$(".txtsinglepilot").attr("disabled", true);
				
			} else {
				$(".txtsinglepilot").removeAttr("disabled");
				
			}
		});

		$("#double1").change(function() {
			if ($('#double1:checkbox:checked').length == 0) {
				$("#doublebtn1,#doublebtn2,#doublebtn3,#doublebtn4").attr("disabled", true);
			
			} else {
				$("#doublebtn1,#doublebtn2,#doublebtn3,#doublebtn4").removeAttr("disabled");
				
			}
		});

		$("#barge1").change(function() {
			if ($('#barge1:checkbox:checked').length == 0) {
				$("#bargebtn1").attr("disabled", true);
				$("#bargebtn2").attr("disabled", true);
				$("#bargebtn3").attr("disabled", true);
				$("#bargebtn4").attr("disabled", true);
			} else {
				$("#bargebtn1").removeAttr("disabled");
				$("#bargebtn2").removeAttr("disabled");
				$("#bargebtn3").removeAttr("disabled");
				$("#bargebtn4").removeAttr("disabled");
			}
		});

		$("#rail1").change(function() {
			if ($('#rail1:checkbox:checked').length == 0) {
				$("#railbtn1").attr("disabled", true);
				$("#railbtn2").attr("disabled", true);
				$("#railbtn3").attr("disabled", true);
				$("#railbtn4").attr("disabled", true);
			} else {
				$("#railbtn1").removeAttr("disabled");
				$("#railbtn2").removeAttr("disabled");
				$("#railbtn3").removeAttr("disabled");
				$("#railbtn4").removeAttr("disabled");
			}
		});

		$("#byTruck").change(function() {
			if ($('#byTruck:checkbox:checked').length == 0) {
				$('#lega11,#permit1,#singlepilot1,#double1').prop('checked', false);
				$("#lega11").attr("disabled", true);
				$("#permit1").attr("disabled", true);
				$("#singlepilot1").attr("disabled", true);
				$("#double1").attr("disabled", true);
				 $(".txtlegal").attr("disabled", true);
				 $(".txtpermit1").attr("disabled", true);
				 $(".txtsinglepilot").attr("disabled", true);
				 $(".txtdouble1").attr("disabled", true);
  				  
			} else {
				$("#lega11").removeAttr("disabled");
				$("#permit1").removeAttr("disabled");
				$("#singlepilot1").removeAttr("disabled");
				$("#double1").removeAttr("disabled");
			}
		});

		$('#firstdivision').show();
		$('#thirddivision').hide();
		$('#fourthdivision').hide();
		$('#fivthdivision').hide();
		$('#seconddivision').hide();

		function showfirstdiv() {

			$('#firstdivision').show();
			$('#thirddivision').hide();
			$('#fourthdivision').hide();
			$('#fivthdivision').hide();
			$('#seconddivision').hide();

		}


		$("#close1").click(function() {
			$("#newrow").hide();
		});


  $("#outSourceMulti1,#outSourceMulti1,#outSourceMulti2,#outSourceMulti3,#outSourceMulti4,#outSourceMulti5,#outSourceMulti6,#outSourceMulti7,#outSourceMulti8,#outSourceMulti9").multiselect(); 
  $('#inHouseMulti1,#inHouseMulti2,#inHouseMulti3,#inHouseMulti4,#inHouseMulti5,#inHouseMulti6,#inHouseMulti7,#inHouseMulti8').multiselect(); 
  $("#outSourceMulti1,#outSourceMulti1,#outSourceMulti2,#outSourceMulti3,#outSourceMulti4,#outSourceMulti5,#outSourceMulti6,#outSourceMulti7,#outSourceMulti8,#outSourceMulti9").multiselect("disable");
  $('#inHouseMulti1,#inHouseMulti2,#inHouseMulti3,#inHouseMulti4,#inHouseMulti5,#inHouseMulti6,#inHouseMulti7,#inHouseMulti8').multiselect("disable");



  function GetSelectedTextValue(selectedObject) {
  	var obj = selectedObject.value;
  	var id = selectedObject.id.replace('inHouse', '');

  	var houseMulti = 'inHouseMulti' + id;

  	var outSource = 'outSource' + id;
  	var outSourceMulti = 'outSourceMulti' + id;
  	var error = 'erroro' + id;
  	if (selectedObject.checked) {
  		$("#" + houseMulti).multiselect("enable");
  		 $("#"+outSource).prop('checked',false);
  		$("#" + outSourceMulti).multiselect("disable");	
  		$("#" + error).hide();
  	} 
  	else {
  		$("#" + houseMulti).multiselect("disable");
  		$("#errorh"+id).hide();
  				
  	}

  }


  function GetSelectedTextValueOutsource(selectedObject) {
  	
  	var obj = selectedObject.value;
  	var id = selectedObject.id.replace('outSource', '');
  	var error = 'errorh' + id;
  	var outSourceMulti = 'outSourceMulti' + id;
  	var outSource = 'outSource' + id;
  	var houseMulti = 'inHouseMulti' + id;
  	var inhouse = 'inHouse' + id;

  	if (selectedObject.checked) {
  		
  		 $("#"+inhouse).prop('checked',false);
  		$("#" + outSourceMulti).multiselect("enable");			
  		$("select.inHouseMulti1").multiselect("deselectAll", false);
  		$("#" + houseMulti).multiselect("disable");	
  		$("#"+error).hide();
  	} 
  	else{
  		$("#" + outSourceMulti).multiselect("disable");			
  		$("#erroro"+id).hide();
  		
  	}

  }

function hidefirstdiv() {
	
	var checkedinhouse="false";
	var checkedoutSource="false";
	if($("#inHouse1").is(':checked'))
		{
		checkedinhouse="true";  // checked		
	   checkedoutSource="false";
		}
	if($("#outSource1").is(':checked'))
	{
	checkedinhouse="false";  // checked		
   checkedoutSource="true";
	}
	var structuralSteel= { "Structural Steel": [{"In house": checkedinhouse,"Value": $('#inHouseMulti1').val()}, { "Out Source": checkedoutSource,"Value": $('#outSourceMulti1').val()}]};
	 checkedinhouse="false";	
	checkedoutSource="false";

	if($("#inHouse2").is(':checked'))
	{
	checkedinhouse="true";  // checked		
   checkedoutSource="false";
	}
if($("#outSource2").is(':checked'))
{
 checkedinhouse="false";  // checked		
  checkedoutSource="true";
}
	
var miscellaneousSteel= { "Miscellaneous Steel": [{"In house": checkedinhouse,'Value': $('#inHouseMulti2').val()}, { "Out Source": checkedoutSource,"Value": $('#outSourceMulti2').val()}]};
checkedinhouse="false";	
checkedoutSource="false";


if($("#inHouse3").is(':checked'))
{
checkedinhouse="true";  // checked		
checkedoutSource="false";
}
if($("#outSource3").is(':checked'))
{
checkedinhouse="false";  // checked		
checkedoutSource="true";
}

var stairsAndLadders= { "Stairs And Ladders": [{"In house": checkedinhouse,"Value": $('#inHouseMulti3').val()}, { "Out Source": checkedoutSource,"Value": $('#outSourceMulti3').val()}]};
checkedinhouse="false";	
checkedoutSource="false";

if($("#inHouse4").is(':checked'))
{
checkedinhouse="true";  // checked		
checkedoutSource="false";
}
if($("#outSource4").is(':checked'))
{
checkedinhouse="false";  // checked		
checkedoutSource="true";
}

var Joists= { "Joists": [{"In house": checkedinhouse,"Value": $('#inHouseMulti4').val()}, { "Out Source": checkedoutSource,"Value": $('#outSourceMulti4').val()}]};
checkedinhouse="false";	
checkedoutSource="false";

if($("#inHouse5").is(':checked'))
{
checkedinhouse="true";  // checked		
checkedoutSource="false";
}
if($("#outSource5").is(':checked'))
{
checkedinhouse="false";  // checked		
checkedoutSource="true";
}

var Decks= { "Decks": [{"In house": checkedinhouse,"Value": $('#inHouseMulti5').val()}, { "Out Source": checkedoutSource,"Value": $('#outSourceMulti5').val()}]};
checkedinhouse="false";	
checkedoutSource="false";

if($("#inHouse6").is(':checked'))
{
checkedinhouse="true";  // checked		
checkedoutSource="false";
}
if($("#outSource6").is(':checked'))
{
checkedinhouse="false";  // checked		
checkedoutSource="true";
}

var Gratings= { "Gratings": [{"In house": checkedinhouse,"Value": $('#inHouseMulti6').val()}, { "Out Source": checkedoutSource,"Value": $('#outSourceMulti6').val()}]};
checkedinhouse="false";	
checkedoutSource="false";

if($("#inHouse7").is(':checked'))
{
checkedinhouse="true";  // checked		
checkedoutSource="false";
}
if($("#outSource7").is(':checked'))
{
checkedinhouse="false";  // checked		
checkedoutSource="true";
}

var Galvanizing= { 'Galvanizing': [{'In house': checkedinhouse,'Value': $('#inHouseMulti7').val()}, { 'Out Source': checkedoutSource,'Value': $('#outSourceMulti7').val()}]};
checkedinhouse="false";	
checkedoutSource="false";

if($("#inHouse8").is(':checked'))
{
checkedinhouse="true";  // checked		
checkedoutSource="false";
}
if($("#outSource8").is(':checked'))
{
checkedinhouse="false";  // checked		
checkedoutSource="true";
}

var SteelDetailing= { 'Steel Detailing': [{'In house': checkedinhouse,'Value': $('#inHouseMulti8').val()}, { 'Out Source': checkedoutSource,'Value': $('#outSourceMulti8').val()}]};
checkedinhouse="false";	
checkedoutSource="false";

if($("#inHouse9").is(':checked'))
{
checkedinhouse="true";  // checked		
checkedoutSource="false";
}
checkedinhouse="false";	
checkedoutSource="false";
if($("#outSource9").is(':checked'))
{
checkedinhouse="false";  // checked		
checkedoutSource="true";
}

var SteelErection= { 'Steel Erection': [{'In house': checkedinhouse,'Value': $('#inHouseMulti9').val()}, { 'Out Source': checkedoutSource,'Value': $('#outSourceMulti9').val()}]};

var projectstandardsjson= [structuralSteel,miscellaneousSteel,stairsAndLadders,Joists,Decks,Gratings,Galvanizing,SteelDetailing,SteelErection];



	
    $.ajax({
           type : 'POST',
            url: "/bimspring/saveProjectStandards",
           dataType : 'JSON',
           data : {projectstandardsjson:JSON.stringify(projectstandardsjson),stepid:1},
           success : function(data, success) {  
        	
  
     },error: function(error){
    	 if(error.status == 401){
   		  	window.location.href = 'logout';
    	 }
     }
   });

	$('#firstdivision').hide();
	$('#thirddivision').hide();
	$('#fourthdivision').hide();
	$('#fivthdivision').hide();
	$('#seconddivision').show();
	
	 $("#scope1").removeClass("changebtnclr");
	  $("#inclusion1").addClass("changebtnclr");
	
	  $.each(step2, function(key,inclusionlist) {
    	  $.each(inclusionlist, function(key1,inclusionlistval) {
    		  if(inclusionlistval["Column"]=="selected"){
        			   $('#columnCB1').val("selected");
        			   $('#columnCB').removeClass("beforeselectinclusion");
        				  $('#columnCB').addClass("selectinclusion");
        				 
        		   }
    		  if(inclusionlistval["CageLadders"]=="selected"){
   			   $('#CageLaddersCB1').val("selected");
   			   $('#CageLaddersCB').removeClass("beforeselectinclusion");
   				  $('#CageLaddersCB').addClass("selectinclusion");
   				 
   		   }
    		  if(inclusionlistval["Decking"]=="selected"){
      			   $('#DeckingCB1').val("selected");
      			   $('#DeckingCB').removeClass("beforeselectinclusion");
      				  $('#DeckingCB').addClass("selectinclusion");
      				 
      		   }
    		  if(inclusionlistval["PitLadders"]=="selected"){
      			   $('#PitLaddersCB1').val("selected");
      			   $('#PitLaddersCB').removeClass("beforeselectinclusion");
      				  $('#PitLaddersCB').addClass("selectinclusion");
      				 
      		   }
    		  
    		 
        		   
        		   if(inclusionlistval["Beam"]=="selected"){
        			   $('#beamCB1').val("selected");
        			   $('#beamCB').removeClass("beforeselectinclusion");
        			   $('#beamCB').addClass("selectinclusion");
        			  
        		   }

        		   
        		   
        		   if(inclusionlistval["Bent plates"]=="selected"){
        			   $('#bendPlatesCB1').val("selected");
        			   $('#bendPlatesCB').removeClass("beforeselectinclusion");
        				  $('#bendPlatesCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   
        		   if(inclusionlistval["Bollards"]=="selected"){
        			   $('#bollardsCB1').val("selected");
        			   $('#bollardsCB').removeClass("beforeselectinclusion");
        				  $('#bollardsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		  
        		   if(inclusionlistval["Stair"]=="selected"){
        			   $('#newStairsCB1').val("selected");
        			   $('#newStairsCB').removeClass("beforeselectinclusion");
        				  $('#newStairsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["BuiltUp Beams"]=="selected"){
        			   $('#bUBeamsCB1').val("selected");
        			   $('#bUBeamsCB').removeClass("beforeselectinclusion");
        				  $('#bUBeamsCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   
        		   if(inclusionlistval["Carrier Girts"]=="selected"){
        			   $('#cGirtsCB1').val("selected");
        			   $('#cGirtsCB').removeClass("beforeselectinclusion");
        				  $('#cGirtsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   
        		   if(inclusionlistval["Crane Girders"]=="selected"){
        			   $('#cGirdersCB1').val("selected");
        			   $('#cGirdersCB').removeClass("beforeselectinclusion");
        				  $('#cGirdersCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   
        		   if(inclusionlistval["Embeds"]=="selected"){
        			   $('#embedsCB1').val("selected");
        			   $('#embedsCB').removeClass("beforeselectinclusion");
        				  $('#embedsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Frames Posts"]=="selected"){
        			   $('#framesCB1').val("selected");
        			   $('#framesCB').removeClass("beforeselectinclusion");
        				  $('#framesCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["GirtsGirt Posts"]=="selected"){
        			   $('#ggPostsCB1').val("selected");
        			   $('#ggPostsCB').removeClass("beforeselectinclusion");
        				  $('#ggPostsCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["Trolley Beams"]=="selected"){
        			   $('#tmmBeamCB1').val("selected");
        			   $('#tmmBeamCB').removeClass("beforeselectinclusion");
        				  $('#tmmBeamCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["Tillupembeds"]=="selected"){
        			   $('#tuembedsCB1').val("selected");
        			   $('#tuembedsCB').removeClass("beforeselectinclusion");
        				  $('#tuembedsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Hangers"]=="selected"){
        			   $('#hangersCB1').val("selected");
        			   $('#hangersCB').removeClass("beforeselectinclusion");
        				  $('#hangersCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Horzontal Brace"]=="selected"){
        			   $('#hBrace1').val("selected");
        			   $('#hBrace').removeClass("beforeselectinclusion");
        				  $('#hBrace').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["WallRails"]=="selected"){
        			   $('#WallRailsCB1').val("selected");
        			   $('#WallRailsCB').removeClass("beforeselectinclusion");
        				  $('#WallRailsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Knee Brace"]=="selected"){
        			   $('#kBraceCB1').val("selected");
        			   $('#kBraceCB').removeClass("beforeselectinclusion");
        				  $('#kBraceCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   if(inclusionlistval["MonorailsTrolley Beams"]=="selected"){
        			   $('#mmBeamCB1').val("selected");
        			   $('#mmBeamCB').removeClass("beforeselectinclusion");
        				  $('#mmBeamCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["Beams Beam"]=="selected"){
        			   $('#beamsbeamCB1').val("selected");
        			   $('#beamsbeamCB').removeClass("beforeselectinclusion");
        				  $('#beamsbeamCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["baseplate"]=="selected"){
        			   $('#baseplateCB1').val("selected");
        			   $('#baseplateCB').removeClass("beforeselectinclusion");
        				  $('#baseplateCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["girts"]=="selected"){
        			   $('#gPostsCB1').val("selected");
        			   $('#gPostsCB').removeClass("beforeselectinclusion");
        				  $('#gPostsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["BRB"]=="selected"){
        			   $('#BRBCB1').val("selected");
        			   $('#BRBCB').removeClass("beforeselectinclusion");
        				  $('#BRBCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Posts"]=="selected"){
        			   $('#postsCB1').val("selected");
        			   $('#postsCB').removeClass("beforeselectinclusion");
        				  $('#postsCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   if(inclusionlistval["Purlins"]=="selected"){
        			   $('#purlinsCB1').val("selected");
        			   $('#purlinsCB').removeClass("beforeselectinclusion");
        				  $('#purlinsCB').addClass("selectinclusion");
        			   
        		   }
        		   
        		   if(inclusionlistval["Roof top openings(RTUs)"]=="selected"){
        			   $('#rtopenCB1').val("selected");
        			   $('#rtopenCB').removeClass("beforeselectinclusion");
        				  $('#rtopenCB').addClass("selectinclusion");
        			   
        		   }
        		   if(inclusionlistval["Sagrods"]=="selected"){
        			   $('#screenCB1').val("selected");
        			   $('#screenCB').removeClass("beforeselectinclusion");
        				  $('#screenCB').addClass("selectinclusion");
        			   
        		   }
        		   if(inclusionlistval["Screen Walls"]=="selected"){
        			   $('#sargrodsCB1').val("selected");
        			   $('#sargrodsCB').removeClass("beforeselectinclusion");
        				  $('#sargrodsCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["Trusses"]=="selected"){
        			   $('#trussesCB1').val("selected");
        			   $('#trussesCB').removeClass("beforeselectinclusion");
        				  $('#trussesCB').addClass("selectinclusion");
        				 
        		   }
        		 
        		   
        		   
        		   if(inclusionlistval["Vertical Brace"]=="selected"){
        			   $('#vBraceCB1').val("selected");
        			   $('#vBraceCB').removeClass("beforeselectinclusion");
        				  $('#vBraceCB').addClass("selectinclusion");
        			   
        		   }	        		   
        		   
        		   if(inclusionlistval["BuiltUp Columns"]=="selected"){
        			   $('#bUColumsCB1').val("selected");
        			   $('#bUColumsCB').removeClass("beforeselectinclusion");
        				  $('#bUColumsCB').addClass("selectinclusion");
        			   
        		   }
        		   if(inclusionlistval["Trash Gates"]=="selected"){
        			   $('#TrashGatesCB1').val("selected");
        			   $('#TrashGatesCB').removeClass("beforeselectinclusion");
        				  $('#TrashGatesCB').addClass("selectinclusion");
        			   
        		   }
        		   if(inclusionlistval["Anchors"]=="selected"){
        			   $('#AnchorsCB1').val("selected");
        			   $('#AnchorsCB').removeClass("beforeselectinclusion");
        				  $('#AnchorsCB').addClass("selectinclusion");
        			 }
        		   
        		   if(inclusionlistval["Kickers"]=="selected"){
        			   $('#KickersCB1').val("selected");
        			   $('#KickersCB').removeClass("beforeselectinclusion");
        				  $('#KickersCB').addClass("selectinclusion");   
        		   }
        		   if(inclusionlistval["Lintels"]=="selected"){
        			   $('#LintelsCB1').val(inclusionlistval["Lintels"]);
        			   $('#LintelsCB').removeClass("beforeselectinclusion");
        				  $('#LintelsCB').addClass("selectinclusion");  
        		   }
        		   if(inclusionlistval["Loose Angles"]=="selected"){
        			   $('#LooseAnglesCB1').val(inclusionlistval["Loose Angles"]);
        			   $('#LooseAnglesCB').removeClass("beforeselectinclusion");
        				  $('#LooseAnglesCB').addClass("selectinclusion");   
        		   }
        		   if(inclusionlistval["Pour Stopper Angle"]=="selected"){
        			   $('#PourStopperAngleCB1').val(inclusionlistval["Pour Stopper Angle"]);
        			   $('#PourStopperAngleCB').removeClass("beforeselectinclusion");
        				  $('#PourStopperAngleCB').addClass("selectinclusion");  
        		   }
        		   if(inclusionlistval["Edge angle"]=="selected"){
        			   $('#EdgeangleCB1').val(inclusionlistval["Edge angle"]);
        			   $('#EdgeangleCB').removeClass("beforeselectinclusion");
        				  $('#EdgeangleCB').addClass("selectinclusion");  
        		   }
        		   if(inclusionlistval["Stair Rails"]=="selected"){
        			   $('#StairRailsCB1').val(inclusionlistval["Stair Rails"]);
        			   $('#StairRailsCB').removeClass("beforeselectinclusion");
        				  $('#StairRailsCB').addClass("selectinclusion");  
        		   }
        		   if(inclusionlistval["Hand Rails"]=="selected"){
        			   $('#HandRailsCB1').val(inclusionlistval["Hand Rails"]);
        			   $('#HandRailsCB').removeClass("beforeselectinclusion");
        				  $('#HandRailsCB').addClass("selectinclusion"); 
        		   }  
        		   if(inclusionlistval["Ladders"]=="selected"){
        			   $('#LaddersCB1').val(inclusionlistval["Ladders"]);
        			   $('#LaddersCB').removeClass("beforeselectinclusion");
        				  $('#LaddersCB').addClass("selectinclusion");  
        		   }  
        		   
        		   if(inclusionlistval["Gratings"]=="selected"){
        			   $('#GratingsCB1').val(inclusionlistval["Gratings"]);
        			   $('#GratingsCB').removeClass("beforeselectinclusion");
        				  $('#GratingsCB').addClass("selectinclusion");  
        		   }  
        		   if(inclusionlistval["Chekered Plates"]=="selected"){
        			   $('#ChekeredPlatesCB1').val(inclusionlistval["Chekered Plates"]);
        			   $('#ChekeredPlatesCB').removeClass("beforeselectinclusion");
        				  $('#ChekeredPlatesCB').addClass("selectinclusion");   
        		   } 
        		   
        		   if(inclusionlistval["Anchor Bolts"]=="selected"){
        			   $('#AnchorBoltsCB1').val(inclusionlistval["Anchor Bolts"]);
        			   $('#AnchorBoltsCB').removeClass("beforeselectinclusion");
        				  $('#AnchorBoltsCB').addClass("selectinclusion");  
        		   } 
        		   if(inclusionlistval["Ecwo"]=="selected"){
        			   $('#EcwoCB1').val(inclusionlistval["Ecwo"]);
        			   $('#EcwoCB').removeClass("beforeselectinclusion");
        				  $('#EcwoCB').addClass("selectinclusion");   
        		   } 
        		   if(inclusionlistval["Ecw"]=="selected"){
        			   $('#EcwCB1').val(inclusionlistval["Ecw"]);
        			   $('#EcwCB').removeClass("beforeselectinclusion");
        			   $('#EcwCB').addClass("selectinclusion");   
        		   } 
        		   if(inclusionlistval["Stair Design"]=="selected"){
        			   $('#StairdCB1').val(inclusionlistval["Stair Design"]);
        			   $('#StairdCB').removeClass("beforeselectinclusion");
        			   $('#StairdCB').addClass("selectinclusion");   
        		   } 
        		  
        		   if(inclusionlistval["Tilt-Up Panel Embeds"]=="selected"){
        			   $('#TiltUpPanelEmbedsCB1').val(inclusionlistval["Tilt-Up Panel Embeds"]);
        			   $('#TiltUpPanelEmbedsCB').removeClass("beforeselectinclusion");
        			   $('#TiltUpPanelEmbedsCB').addClass("selectinclusion"); 
        				  
        		   } 
        		   if(inclusionlistval["Joist"]=="selected"){
        			   $('#JoistCoordinationsCB1').val("selected");
        			   $('#JoistCoordinationsCB').removeClass("beforeselectinclusion");
        				  $('#JoistCoordinationsCB').addClass("selectinclusion");   
        		   } 
        		   
        		  var dynamicChoosenValue=inclusionlistval["DynamicvaluesForincusion"];
        		   dynamicChoosenValuelength=dynamicChoosenValue.length;
        		  for (var i = 0; i < dynamicChoosenValue.length; i++) {
        			  $("#adddingLabel").append('<button type="button" id="b'+i+'" class="btn btn-success btn-rounded m-l-30 m-r-20 m-b-30 selectinclusion" ondblclick="deselectInclusionbtn(this)"  onclick="selectInclusionbtn(this)">'+dynamicChoosenValue[i]+'</button><a class="fa fa-times close-anchor" id="i'+i+'" onclick="removelable(this)" ></a><input id="t'+i+'" class="inclusionselectclass" type="hidden"  value="selected"/>');
        				
				}
        		 
        		   
        	   });
    	   });
   	     
	 
	    
	

}

function hideseconddiv() {

	var	dynamictxtbox=[];
  
  
  $(".inclusionselectclass").each(function(){
	  dynamictxtbox.push($(this).val());
	});
	
  var projectstandardsjs={"InculsionAndExclusion": [{"Column": $("#columnCB1").val(),"CageLadders":$("#CageLaddersCB1").val(), "PitLadders":$("#PitLaddersCB1").val(), "WallRails":$("#WallRailsCB1").val(),"girts": $("#gPostsCB1").val(),"Stair": $("#newStairsCB1").val(),"WallRails": $("#WallRailsCB1").val(),"Trolley Beams": $("#tmmBeamCB1").val(),"baseplate": $("#baseplateCB1").val(),"Beams Beam": $("#beamsbeamCB1").val(),"Beam": $("#beamCB1").val(),"Horzontal Brace": $("#hBrace1").val(),"Vertical Brace": $("#vBraceCB1").val(),"Knee Brace": $("#kBraceCB1").val(),"Posts": $("#postsCB1").val(),"Hangers": $("#hangersCB1").val(),"GirtsGirt Posts": $("#ggPostsCB1").val(),"MonorailsTrolley Beams": $("#mmBeamCB1").val(),"Trusses": $("#trussesCB1").val(),"BRB": $("#BRBCB1").val(),"Frames Posts": $("#framesCB1").val(),"Screen Walls": $("#screenCB1").val(),"Purlins": $("#purlinsCB1").val(),"Embeds": $("#embedsCB1").val(),"Bent plates": $("#bendPlatesCB1").val(),"Sagrods": $("#sargrodsCB1").val(),"BuiltUp Beams": $("#bUBeamsCB1").val(),"BuiltUp Columns": $('#bUColumsCB1').val(),"Carrier Girts": $('#cGirtsCB1').val(),"Crane Girders":$('#cGirdersCB1').val(),"Roof top openings(RTUs)":$('#cGirdersCB1').val(),"Bollards": $('#bollardsCB1').val(),"Ecwo": $('#EcwoCB1').val(),"Ecw": $('#EcwCB1').val(),"Decking": $('#DeckingCB1').val(),"Trash Gates": $("#TrashGatesCB1").val(), "Anchors": $("#AnchorsCB1").val(), "Kickers": $("#KickersCB1").val(), "Lintels": $("#LintelsCB1").val(), "Loose Angles": $("#LooseAnglesCB1").val(), "Pour Stopper Angle": $("#PourStopperAngleCB1").val(), "Edge angle": $("#EdgeangleCB1").val(), "Stair Rails": $("#StairRailsCB1").val(), "Hand Rails": $("#HandRailsCB1").val(), "Ladders": $("#LaddersCB1").val(), "Gratings": $("#GratingsCB1").val(), "Chekered Plates": $("#ChekeredPlatesCB1").val(), "Anchor Bolts": $("#AnchorBoltsCB1").val(), "Stair Design": $("#StairdCB1").val(), "Joist": $("#JoistCoordinationsCB1").val(), "Tilt-Up Panel Embeds": $("#TiltUpPanelEmbedsCB1").val(),"DynamicvaluesForincusion":dynamictxtbox}]}
     $.ajax({
           type : 'POST',
            url: "/bimspring/saveProjectStandards",
           dataType : 'JSON',
           data : {projectstandardsjson:JSON.stringify(projectstandardsjs),stepid:2},
           success : function(data, success) {           
        	   
             
     },error: function(error){
    	 if(error.status == 401){
    		  	window.location.href = 'logout';
     	 }
     }
   });
	$('#firstdivision').hide();
	$('#thirddivision').show();
	$('#fourthdivision').hide();
	$('#fivthdivision').hide();
	$('#seconddivision').hide();
	$("#inclusion1").removeClass("changebtnclr");
	  $("#shipping1").addClass("changebtnclr");
	
	
	  $.each(step3, function(key,value) {
    	    
   	  $.each(value, function(key1,innervalue) {
   		  
   		  
			  
			  if (key==1) {
        		  
        		  $.each(value, function(rail1,rail1value) {
        			  $.each(rail1value, function(railkey,rail1valueinner) {
        				
            			  if(rail1valueinner["ByRailCheckBox"]=="true"){
            				  $("#rail1").prop('checked',rail1valueinner["ByRailCheckBox"]);
            				  $(".txtrail").removeAttr("disabled");   
            				  
            				  $('#railbtn1').val(rail1valueinner["Maximum Legal Shipping Width"]);
            				  $('#railbtn2').val(rail1valueinner["Maximum Legal Shipping Length"]);
            				  $('#railbtn3').val(rail1valueinner["Maximum Legal Shipping Height"]);
            				  $('#railbtn4').val(rail1valueinner["Maximum Legal Shipping Weight"]);
            			  }
	            			    
            		  });  	   
        		  });
        	  }	
        	  if (key==2) {
        		 
        		  $.each(value, function(barge,bargevalue) {
        			  $.each(bargevalue, function(bargekey,bargevalueinner) {
        				  
        				  
            			  
            			  if(bargevalueinner["BYBargeCheckBox"]=="true"){
            				  $("#barge1").prop('checked',bargevalueinner["BYBargeCheckBox"]);
            				  $(".txtbarge").removeAttr("disabled"); 
            				
            				 
            				  $('#bargebtn1').val(bargevalueinner["Maximum Legal Shipping Width"]);
            				  $('#bargebtn2').val(bargevalueinner["Maximum Legal Shipping Length"]);
            				  $('#bargebtn3').val(bargevalueinner["Maximum Legal Shipping Height"]);
            				  $('#bargebtn4').val(bargevalueinner["Maximum Legal Shipping Weight"]);
            			  } 
            		  });  	   
        		  });
        	  }	
			  
        	 
   		  if (key1==0) {
   			 
   			 
   			  if(innervalue["BYTruckCheckBox"]=="true"){
   				  $("#byTruck").prop('checked',innervalue["BYTruckCheckBox"]);
   				  $("#lega11,#permit1,#singlepilot1,#double1").removeAttr("disabled");
 
   			  }
			}
   		  else if (key1==1) {
   			 
   			  
   			  $.each(innervalue, function(key2,legalLoad) {
   				 
   				  $.each(legalLoad, function(key3,legalLoad1) {
   			   if (key3==0) {
	            			 
	            			 
	            			  
	            			  if(legalLoad1["LegalLoadCheckBox"]=="true"){
	            				  $("#lega11").prop('checked',legalLoad1["LegalLoadCheckBox"]);
	            				  $(".txtlegal").removeAttr("disabled"); 
	            				  
	            				  $('#lega1btn1').val(legalLoad1["Maximum Legal Shipping Width"]);
	            				  $('#lega1btn2').val(legalLoad1["Maximum Legal Shipping Length"]);
	            				  $('#lega1btn3').val(legalLoad1["Maximum Legal Shipping Height"]);
	            				  $('#lega1btn4').val(legalLoad1["Maximum Legal Shipping Weight"]);
	            			  }
	            			  
						}
        				  
        				});	  
   				});		  

			}
else if (key1==2) {
   			 
   			  
	  $.each(innervalue, function(key2,data) {
		 
		  $.each(data, function(key3,permitLoad) {
	   if (key3==0) {
		     if(permitLoad["PermitLoadCheckBox"]=="true"){
   				  
   				  $("#permit1").prop('checked',permitLoad["PermitLoadCheckBox"]);
   				  $(".txtpermit1").removeAttr("disabled"); 
   				  
   				  $('#permitbtn1').val(permitLoad["Maximum Legal Shipping Width"]);
   				  $('#permitbtn2').val(permitLoad["Maximum Legal Shipping Length"]);
   				  $('#permitbtn3').val(permitLoad["Maximum Legal Shipping Height"]);
   				  $('#permitbtn4').val(permitLoad["Maximum Legal Shipping Weight"]);
   			  }
   			  
			}
			  
			});	  
		});	 
   			  
   	}
else if (key1==3) {
	 
	  
	  $.each(innervalue, function(key2,data) {
		 
		  $.each(data, function(key3,singelPilot) {
	   if (key3==0) {
		  
	  
	  
	  if(singelPilot["SingelPilotVehicleCheckBox"]=="true"){
		 $("#singlepilot1").prop('checked',singelPilot["SingelPilotVehicleCheckBox"]);
		 $(".txtsinglepilot").removeAttr("disabled"); 
		  
		    $('#singlepilotbtn1').val(singelPilot["Maximum Legal Shipping Width"]);
		  $('#singlepilotbtn2').val(singelPilot["Maximum Legal Shipping Length"]);
		  $('#singlepilotbtn3').val(singelPilot["Maximum Legal Shipping Height"]);
		  $('#singlepilotbtn4').val(singelPilot["Maximum Legal Shipping Weight"]);
	  }
   			  
			}
			  
			});	  
		});	 
   			  
   	}
   		  
else if (key1==4) {
	  
	  $.each(innervalue, function(key2,data) {
		 
		  $.each(data, function(key3,doublePilot) {
	   if (key3==0) {
		  		 
   			 
   			  
   			  if(doublePilot["DoublePilotVehicleCheckBox"]=="true"){
   				  $("#double1").prop('checked',doublePilot["DoublePilotVehicleCheckBox"]);
   				
   				  $(".txtdouble1").removeAttr("disabled"); 
   				  $('#doublebtn1').val(doublePilot["Maximum Legal Shipping Width"]);
   				  $('#doublebtn2').val(doublePilot["Maximum Legal Shipping Length"]);
   				  $('#doublebtn3').val(doublePilot["Maximum Legal Shipping Height"]);
   				  $('#doublebtn4').val(doublePilot["Maximum Legal Shipping Weight"]);
   			  }
   			  
			}
			  
			});	  
		});	 
   			  
   	}
   	   }); 
     
     }); 
	   
}

function hidethirddiv() {
	var checkBoxvalue="false";
	var legalLoadCheckBox="false";
	var permitLoadCheckBox="false";
	var singelPilotVehicleCheckBox="false";
	var doublePilotVehicleCheckBox="false";
	
	
	
	if($("#byTruck").is(':checked'))
	{
		checkBoxvalue="true";  // checked		
	}
	if($("#lega11").is(':checked'))
	{
		legalLoadCheckBox="true";  // checked		
	}
	if($("#permit1").is(':checked'))
	{
		permitLoadCheckBox="true";  // checked		
	}
	if($("#singlepilot1").is(':checked'))
	{
		singelPilotVehicleCheckBox="true";  // checked		
	}
	if($("#double1").is(':checked'))
	{
		doublePilotVehicleCheckBox="true";  // checked		
	}
	
	var byTruck=[{"BYTruckCheckBox": checkBoxvalue },{"LegalLoad": [{"LegalLoadCheckBox": legalLoadCheckBox,"Maximum Legal Shipping Width": $('#lega1btn1').val(),"Maximum Legal Shipping Length": $('#lega1btn2').val(),"Maximum Legal Shipping Height":$('#lega1btn3').val(),"Maximum Legal Shipping Weight": $('#lega1btn4').val()}]},{"PermitLoad": [{"PermitLoadCheckBox": permitLoadCheckBox,"Maximum Legal Shipping Width": $('#permitbtn1').val(),"Maximum Legal Shipping Length":$('#permitbtn2').val(),"Maximum Legal Shipping Height": $('#permitbtn3').val(),"Maximum Legal Shipping Weight": $('#permitbtn4').val()}]},{"Singel Pilot Vehicle": [{"SingelPilotVehicleCheckBox": singelPilotVehicleCheckBox,"Maximum Legal Shipping Width": $('#singlepilotbtn1').val(),"Maximum Legal Shipping Length": $('#singlepilotbtn2').val(),"Maximum Legal Shipping Height": $('#singlepilotbtn3').val(),"Maximum Legal Shipping Weight": $('#singlepilotbtn4').val()}]},{"Double Pilot Vehicle": [{"DoublePilotVehicleCheckBox": doublePilotVehicleCheckBox,"Maximum Legal Shipping Width": $('#doublebtn1').val(),"Maximum Legal Shipping Length": $('#doublebtn2').val(),"Maximum Legal Shipping Height":$('#doublebtn3').val(),"Maximum Legal Shipping Weight":$('#doublebtn4').val()}]}];
	checkBoxvalue="false";
	if($("#rail1").is(':checked'))
	{
		checkBoxvalue="true";  // checked		
	}
	
	var brRail={"BY Rail": [{"ByRailCheckBox": checkBoxvalue,"Maximum Legal Shipping Width": $('#railbtn1').val(),"Maximum Legal Shipping Length": $('#railbtn2').val(),"Maximum Legal Shipping Height": $('#railbtn3').val(),"Maximum Legal Shipping Weight": $('#railbtn4').val()}]};
	checkBoxvalue="false";
	if($("#barge1").is(':checked'))
	{
		checkBoxvalue="true";  // checked		
	}
	var brBarge={"BY Barge": [{"BYBargeCheckBox": checkBoxvalue,"Maximum Legal Shipping Width": $('#bargebtn1').val(),"Maximum Legal Shipping Length": $('#bargebtn2').val(),"Maximum Legal Shipping Height": $('#bargebtn3').val(),"Maximum Legal Shipping Weight": $('#bargebtn4').val()}]};
	
	
	
var projectstandardsjson3= [byTruck,brRail,brBarge];
	
	
    $.ajax({
           type : 'POST',
            url: "/bimspring/saveProjectStandards",
           dataType : 'JSON',
           data : {projectstandardsjson:JSON.stringify(projectstandardsjson3),stepid:3},
           success : function(data, success) { 
        	 
				  
     },error: function(error){
    	 if(error.status == 401){
    		  	window.location.href = 'logout';
     	 }
     }
   });

    
	$('#firstdivision').hide();
	$('#thirddivision').hide();
	$('#fourthdivision').show();
	$('#fivthdivision').hide();
	$('#seconddivision').hide();
	$("#shipping1").removeClass("changebtnclr");
	 $("#material1").addClass("changebtnclr");
	 var MemberGradeskey = 'Member Grades';
 	  var obj = step4[MemberGradeskey];
 	 if(  obj ) {
		$('#wfgrades').val(obj.WfShapes);
 	   $('#angles').val(obj.Angles);
 	   $('#hssrectagular').val(obj.HssRectagular);
 	   $('#hshape').val(obj.HShape);
 	   $('#channels').val(obj.Channels);
 	   $('#hssround').val(obj.HssRound);
 	   $('#sshape').val(obj.sshape);
 	   $('#plates').val(obj.Plates);
 	   $('#checkered').val(obj.CheckeredPlate);
 	 $('#pipe').val(obj.Pipes);
 	 $('#ASIC').val(obj.ASICEdition);
 	if (obj.ApplyConnection =="yes") {
 		 $("#yes").prop('checked',true);
	}
 	 else{
 		 $("#no").prop('checked',true);
 	 }
	}
	 else{
		$('#wfgrades').val('A992 ');
  	   $('#angles').val('A36 ');
  	   $('#hssrectagular').val('A572 Gr.50');
  	   $('#hshape').val('A572 Gr.50');
  	   $('#channels').val('A36 ');
  	   $('#hssround').val('A500_Ro Gr.B');
  	   $('#sshape').val('A36 ');
  	   $('#plates').val('A36 ');
  	   $('#checkered').val('A36 ');
  	  $('#pipe').val('A36 ');
  
	 }
	
 	   
	
}

function hidefourthddiv() {
	var projectstandardsjson4= {"Member Grades": {"ASICEdition": $('#ASIC').val(),"WfShapes": $('#wfgrades').val(),"Angles": $('#angles').val(),"HssRectagular": $('#hssrectagular').val(),"HShape": $('#hshape').val(),"Channels": $('#channels').val(),"HssRound": $('#hssround').val(),"sshape": $('#sshape').val(),"CheckeredPlate": $('#checkered').val(),"Plates": $('#plates').val(),"Pipes": $('#pipe').val(),"ApplyConnection": $('input[name=applycon]:checked', '#applyconid').val()}}
	
	
	 $.ajax({
           type : 'POST',
            url: "/bimspring/saveProjectStandards",
           dataType : 'JSON',
           data : {projectstandardsjson:JSON.stringify(projectstandardsjson4),stepid:4},
           success : function(data, success) {  
        	   
        	  
     }, error: function(error){
    	 if(error.status == 401){
    		  	window.location.href = 'logout';
     	 }
     }
   });

	$('#firstdivision').hide();
	$('#seconddivision').hide();
	$('#thirddivision').hide();
	$('#fourthdivision').hide();
	$('#fivthdivision').show();
	$("#material1").removeClass("changebtnclr");
	  $("#finish1").addClass("changebtnclr");
	
	
 	  $.each(step5, function(Finishkey,Finishdata) {	
		   
		 
		   $.each(Finishdata, function(key1,innerfinishdata1) {	
			 
				   
				   $.each(innerfinishdata1, function(key3,innerfinishdata2) {
					   $.each(innerfinishdata2, function(key4,finishSp) {
						   
						   
						   if (key3=="Surface Preparation") {
								   
			      				   
					            		  if(finishSp["SurfacePreparationCheckbox"]=="true"){
					            			  $("#surfaceprecb").prop('checked',finishSp["SurfacePreparationCheckbox"]);
					            				 $("#surfacepreparation").removeAttr("disabled"); 
					            				 $("#surfacepreparation").val(finishSp["SurfacePreparationValue"]);
					            				 
					            			  }
					            			  
										}
			      			   
			      			 if (key3=="Primer") {
			      				 
			      				 if(finishSp["PrimerCheckbox"]=="true"){
			      					 $("#chkPrimer").prop('checked',finishSp["PrimerCheckbox"]);
			      					 $(".cmnclssprimer").removeAttr("disabled"); 
		            				
			      				  $("#txtPrimer").val(finishSp["PrimerValue"]);
					             $("#ddlNoOfCoats").val(finishSp["NoofCoatsprimer"]);
			      			 }
					            }
			      			 
			      			 if (key3=="Paint") {
		      				  
				            		  if(finishSp["PaintCheckbox"]=="true"){
				            			  $("#chkPaint").prop('checked',finishSp["PaintCheckbox"]);
				            				 $(".cmnpaintcls").removeAttr("disabled"); 
				            				 var primerValue=finishSp["PaintValue"];
        			      					var NoofCoatsprimer=finishSp["NoofCoatspaint"];
        			      					for (i =0; i < primerValue.length; i++) {
        			      					if(i==0){
        			      						$("#txtPaint").val(primerValue[0]);
					            				 $("#ddlNoOfCoats1").val(NoofCoatsprimer[0]);}
        			      					if(i!=0){
        			      						$(".add-row-below")
												.append(
														'<div class="row newrowscomcss" id="newrow"><div class="col-3"><div class="form-group"><label class="custom-control custom-checkbox" style="margin-top: 9px"><span class="custom-control-description"><p style="color: #455a64;"> </p></span></label></div></div><div class="col-3"><input type="text" id="txtPaint" value='+primerValue[i]+' class="form-control input-sm txtpaint cmnpaintcls" maxlength="35"></div><div class="row"> <div class="col-1"><hr style="width: 40px;margin-top:18px" /> </div></div><div class="col-1.5"><p class="custom-control custom-checkbox custom-control-description" style="margin-top: 9px;color: #455a64; ">No. of Coats</p></div><div class="col-2"><select  id="ddlNoOfCoats1'+i+'" class="labelBlack form-control nocoatspaint cmnpaintcls" name="companyType"  required class="form-control" ><option value="">None</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><div class="col-1"><button type="button" class="btn waves-effect waves-light btn-block btn-success delrow" id="delrow" style="background-color: #26c6da; border-color: #26c6da;">DELETE</button></div></div>');
									
        			      						
        			      					 $("#ddlNoOfCoats1"+i).val(NoofCoatsprimer[i]);
        			      					}
        			      					   
        			      					}
				            				 
				            			  }
				            			  
									}
			      			if (key3=="Galvanization") {
		      				   
				            		  if(finishSp["GalvanizationCheckbox"]=="true"){
				            			  $("#galcb").prop('checked',finishSp["GalvanizationCheckbox"]);
				            				 $(".cmnclssgal").removeAttr("disabled"); 
				            				 $("#ddlGSurface").val(finishSp["Surface Prep"]);
				            				 $("#ddlGZinc").val(finishSp["Zinc Coating Thickness"]);
				            				 
				            			 }
				            			  
									}
			      			if (key3=="Fire Proofing") {
		      				   
				            		  if(finishSp["Fire ProofingCheckbox"]=="true"){
				            			  $("#firecb").prop('checked',finishSp["Fire ProofingCheckbox"]);
				            				 $(".cmnclssfire").removeAttr("disabled"); 
				            				 $("#ddlFSurface").val(finishSp["Surface Prep"]);
				            				 $("#ddlFFire").val(finishSp["Fire Proofing Type"]);
				            				 $("#txtThickness").val(finishSp["Thickness"]);
				            				 
				            			  }
				            			  
									}
			      			if (key3=="Aess") {
			      				
			      			  if(finishSp["AessCheckbox"]=="true"){
				            			  $("#aesscb").prop('checked',finishSp["AessCheckbox"]);
				            				 $("#category1").removeAttr("disabled"); 
				            				 $("#category1").val(finishSp["Category"]);
				            				 
				            			  }
				            			  
									}
			      			 
			          				  
			          				});	
					   
				});
				   
			  
    	   });	
		
	   });	 
	     

}



function finalsavebutton() {
	
	
	var surfacePreparation="false";
	var chkPrimer="false";
	var chkPaint="false";
	var galcb="false";
	var firecb="false";
	var aesscb="false";
	
	if($("#surfaceprecb").is(':checked'))
	{
		surfacePreparation="true";  // checked		
	}
	if($("#chkPrimer").is(':checked'))
	{
		chkPrimer="true";  // checked		
	}
	if($("#chkPaint").is(':checked'))
	{
		chkPaint="true";  // checked		
	}if($("#galcb").is(':checked'))
	{
		galcb="true";  // checked		
	}
	if($("#firecb").is(':checked'))
	{
		firecb="true";  // checked		
	}if($("#aesscb").is(':checked'))
	{
		aesscb="true";  // checked		
	}
	var noOfcoatspaintvalue = [];
	var txtpaintvalue = [];
	
		$(".nocoatspaint").each(function(){
			noOfcoatspaintvalue.push($(this).val());
		});
		
		$(".txtpaint").each(function(){
			txtpaintvalue.push($(this).val());
		});
		
	var projectstandardsjson5= {"Finish": [{"Surface Preparation": [{"SurfacePreparationCheckbox": surfacePreparation,"SurfacePreparationValue": $('#surfacepreparation').val()}]},{"Primer": [{"PrimerCheckbox": chkPrimer,"PrimerValue":$('.txtprimer').val(),"NoofCoatsprimer": $('.noofcoatsprimer').val()}]},{"Paint": [{"PaintCheckbox": chkPaint,"PaintValue":txtpaintvalue,"NoofCoatspaint": noOfcoatspaintvalue}]},{"Galvanization": [{"GalvanizationCheckbox": galcb,"Surface Prep": $('#ddlGSurface').val(),"Zinc Coating Thickness": $('#ddlGZinc').val()}]},{"Fire Proofing": [{"Fire ProofingCheckbox": firecb,"Surface Prep": $('#ddlFSurface').val(),"Fire Proofing Type": $('#ddlFFire').val(),"Thickness": $('#txtThickness').val()}]},{"Aess": [{"AessCheckbox": aesscb,"Category": $('#category1').val()}]}]}
			
			 $.ajax({
		           type : 'POST',
		            url: "/bimspring/saveProjectStandards",
		           dataType : 'JSON',
		           data : {projectstandardsjson:JSON.stringify(projectstandardsjson5),stepid:5},
		           success : function(data, success) {           
		        	 
		     }, error: function(error){
		    	 if(error.status == 401){
		    		  	window.location.href = 'logout';
		     	 }
		     }
		   });
		}



function selectInclusionbtn(getlist){
	  var idselect=getlist.id;
	  $("#"+idselect).removeClass("beforeselectinclusion");
	  $("#"+idselect).addClass("selectinclusion");
	  $("#"+idselect).find('i').addClass('fa fa-check');
	  $("#"+idselect+"1").val("selected");
	 }

function deselectInclusionbtn(beforeselectinclusion){
	  var iddeselect=beforeselectinclusion.id;
	  $("#"+iddeselect).removeClass("selectinclusion");
	  $("#"+iddeselect).addClass("beforeselectinclusion");
	  $("#"+iddeselect).find('i').removeClass('fa fa-check');
	  $("#"+iddeselect+"1").val("notselected");
	  
	 }
	 
	 $("#btnAddNewInclusionlist").click(
			 
	 function() {
		 $("#confirm").show();
	}
	 
	 );
	  var rowmem=dynamicChoosenValuelength+1;
	function appendnewinclusion() {
		
		if($('#addInclusiontxtvalue').val()==""){
			
		}
		else{
			 $("#newincl").show();
		 rowmem = rowmem +1;
		$("#adddingLabel").append('<button type="button"  id="b'+rowmem+'" class="btn btn-success btn-rounded m-l-30 m-r-20 m-b-30 selectinclusion" ondblclick="deselectInclusionbtn(this)"  onclick="selectInclusionbtn(this)"> '+$('#addInclusiontxtvalue').val()+'</button><a class="fa fa-times close-anchor" id="i'+rowmem+'" onclick="removelable(this)" ></a><input id="t'+rowmem+'" class="inclusionselectclass" type="hidden"  value="'+$('#addInclusiontxtvalue').val()+'"/>');
		$('#addInclusiontxtvalue').val('');
		$('#confirm').hide();		

		}
	}	 
	 
	
	function removelable(getthisid){
		
		var getDeletid=getthisid.id.replace('i', '');
		$("#b"+getDeletid).remove();
		$("#i"+getDeletid).remove();
		$("#t"+getDeletid).remove();
		$('#addInclusiontxtvalue').val('');
		$('#confirm').hide();
		
	}
	
	function removerowsIfNotselected(getthisid)
	{
		if($("#"+getthisid.id).is(':checked'))
		{
		 
		}
		else{
			
			 $(".newrowscomcss").remove();
		}
		
	}
	
    function numbersOnly(evt, oKeyEvent) {        
    	 if ((evt.which != 46 || evt.value.indexOf('.') != -1) && (evt.which < 48 || evt.which > 57)) {
 	        //event it's fine

 	    }
 	    var input = evt.value;
 	    if ((input.indexOf('.') != -1) && (input.substring(input.indexOf('.')).length > 2)) {
 	        return false;
 	    }  
    }
    
    
    
    $(window).on('load', function (){	

    	
    	
   	 $.each(step1, function(step1key1,step1data) {
   		
   	 $.each(step1data, function(step1key2,innerstep1data) {
   			 
   			$.each(innerstep1data, function(step1key3,nextinnerstep1data) {
   				
   				if (step1key2=='Structural Steel') {
   					if (step1key3==0) {				
   						if (nextinnerstep1data["In house"]=="true") {
   							$("#inHouse1").prop('checked',nextinnerstep1data["In house"]);
   							$("#inHouseMulti1").multiselect("enable");
   							var a1=nextinnerstep1data["Value"];
   							
   							$("#inHouseMulti1").val(a1);
   							$("#inHouseMulti1").multiselect("refresh");
   						}
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource1").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti1").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   						
   							$("#outSourceMulti1").val(a2);
   							$("#outSourceMulti1").multiselect("refresh");
   							}
   						
   					}
   				}
   				
   				if (step1key2=='Miscellaneous Steel') {
   					if (step1key3==0) {				
   						if (nextinnerstep1data["In house"]=="true") {
   							$("#inHouse2").prop('checked',nextinnerstep1data["In house"]);
   							$("#inHouseMulti2").multiselect("enable");
   							var a1=nextinnerstep1data["Value"];
   							
   							$("#inHouseMulti2").val(a1);
   							$("#inHouseMulti2").multiselect("refresh");
   						}
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource2").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti2").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   						
   							$("#outSourceMulti2").val(a2);
   							$("#outSourceMulti2").multiselect("refresh");
   							}
   						
   					}
   				}
   				
   				if (step1key2=='Stairs And Ladders') {
   					if (step1key3==0) {				
   						if (nextinnerstep1data["In house"]=="true") {
   							$("#inHouse3").prop('checked',nextinnerstep1data["In house"]);
   							$("#inHouseMulti3").multiselect("enable");
   							var a1=nextinnerstep1data["Value"];
   							
   							$("#inHouseMulti3").val(a1);
   							$("#inHouseMulti3").multiselect("refresh");
   						}
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource3").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti3").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   							
   							$("#outSourceMulti3").val(a2);
   							$("#outSourceMulti3").multiselect("refresh");
   							}
   						
   					}
   				}
   				
   				if (step1key2=='Joists') {
   					if (step1key3==0) {				
   						if (nextinnerstep1data["In house"]=="true") {
   							$("#inHouse4").prop('checked',nextinnerstep1data["In house"]);
   							$("#inHouseMulti4").multiselect("enable");
   							var a1=nextinnerstep1data["Value"];
   							
   							$("#inHouseMulti4").val(a1);
   							$("#inHouseMulti4").multiselect("refresh");
   						}
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource4").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti4").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   							 
   							$("#outSourceMulti4").val(a2);
   							$("#outSourceMulti4").multiselect("refresh");
   							}
   						
   					}
   				}
   				
   				if (step1key2=='Decks') {
   					if (step1key3==0) {				
   						if (nextinnerstep1data["In house"]=="true") {
   							$("#inHouse5").prop('checked',nextinnerstep1data["In house"]);
   							$("#inHouseMulti5").multiselect("enable");
   							var a1=nextinnerstep1data["Value"];
   							
   							$("#inHouseMulti5").val(a1);
   							$("#inHouseMulti5").multiselect("refresh");
   						}
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource5").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti5").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   							
   							$("#outSourceMulti5").val(a2);
   							$("#outSourceMulti5").multiselect("refresh");
   							}
   						
   					}
   				}
   				
   				if (step1key2=='Gratings') {
   					if (step1key3==0) {				
   						if (nextinnerstep1data["In house"]=="true") {
   							$("#inHouse6").prop('checked',nextinnerstep1data["In house"]);
   							$("#inHouseMulti6").multiselect("enable");
   							var a1=nextinnerstep1data["Value"];
   							
   							$("#inHouseMulti6").val(a1);
   							$("#inHouseMulti6").multiselect("refresh");
   						}
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource6").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti6").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   						
   							$("#outSourceMulti6").val(a2);
   							$("#outSourceMulti6").multiselect("refresh");
   							}
   						
   					}
   				}
   				
   				if (step1key2=='Galvanizing') {
   					if (step1key3==0) {				
   						if (nextinnerstep1data["In house"]=="true") {
   							$("#inHouse7").prop('checked',nextinnerstep1data["In house"]);
   							$("#inHouseMulti7").multiselect("enable");
   							var a1=nextinnerstep1data["Value"];
   						
   							$("#inHouseMulti7").val(a1);
   							$("#inHouseMulti7").multiselect("refresh");
   						}
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource7").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti7").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   							
   							$("#outSourceMulti7").val(a2);
   							$("#outSourceMulti7").multiselect("refresh");
   							}
   						
   					}
   				}
   				if (step1key2=='Steel Detailing') {
   					if (step1key3==0) {				
   						if (nextinnerstep1data["In house"]=="true") {
   							$("#inHouse8").prop('checked',nextinnerstep1data["In house"]);
   							$("#inHouseMulti8").multiselect("enable");
   							var a1=nextinnerstep1data["Value"];
   							
   							$("#inHouseMulti8").val(a1);
   							$("#inHouseMulti8").multiselect("refresh");
   						}
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource8").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti8").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   							
   							$("#outSourceMulti8").val(a2);
   							$("#outSourceMulti8").multiselect("refresh");
   							}
   						
   					}
   				}
   				
   				if (step1key2=='Steel Erection') {
   					if (step1key3==0) {				
   						
   					}
   					if (step1key3==1) {
   						if(nextinnerstep1data["Out Source"]=="true")
   							{
   							$("#outSource9").prop('checked',nextinnerstep1data["Out Source"]);
   							$("#outSourceMulti9").multiselect("enable");
   							var a2=nextinnerstep1data["Value"];
   							
   							$("#outSourceMulti9").val(a2);
   							$("#outSourceMulti9").multiselect("refresh");
   							}
   						
   					}
   				}
   					
   			 });
   			 
   		 });
   	 });
    	
    	
    });
    
    $(".sow").click(function(){
      	
    	$('#firstdivision').show();
    	$('#seconddivision').hide();
    	$('#thirddivision').hide();
    	$('#fourthdivision').hide();
    	$('#fivthdivision').hide();
    	$(".changebtnclr").removeClass("changebtnclr");
    	$("#scope1").addClass("changebtnclr");
    	 $.each(step1, function(step1key1,step1data) {
      		
         	 $.each(step1data, function(step1key2,innerstep1data) {
         			 
         			$.each(innerstep1data, function(step1key3,nextinnerstep1data) {
         				
         				if (step1key2=='Structural Steel') {
         					if (step1key3==0) {				
         						if (nextinnerstep1data["In house"]=="true") {
         							$("#inHouse1").prop('checked',nextinnerstep1data["In house"]);
         							$("#inHouseMulti1").multiselect("enable");
         							var a1=nextinnerstep1data["Value"];
         							
         							$("#inHouseMulti1").val(a1);
         							$("#inHouseMulti1").multiselect("refresh");
         						}
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource1").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti1").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         						
         							$("#outSourceMulti1").val(a2);
         							$("#outSourceMulti1").multiselect("refresh");
         							}
         						
         					}
         				}
         				
         				if (step1key2=='Miscellaneous Steel') {
         					if (step1key3==0) {				
         						if (nextinnerstep1data["In house"]=="true") {
         							$("#inHouse2").prop('checked',nextinnerstep1data["In house"]);
         							$("#inHouseMulti2").multiselect("enable");
         							var a1=nextinnerstep1data["Value"];
         							
         							$("#inHouseMulti2").val(a1);
         							$("#inHouseMulti2").multiselect("refresh");
         						}
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource2").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti2").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         						
         							$("#outSourceMulti2").val(a2);
         							$("#outSourceMulti2").multiselect("refresh");
         							}
         						
         					}
         				}
         				
         				if (step1key2=='Stairs And Ladders') {
         					if (step1key3==0) {				
         						if (nextinnerstep1data["In house"]=="true") {
         							$("#inHouse3").prop('checked',nextinnerstep1data["In house"]);
         							$("#inHouseMulti3").multiselect("enable");
         							var a1=nextinnerstep1data["Value"];
         							
         							$("#inHouseMulti3").val(a1);
         							$("#inHouseMulti3").multiselect("refresh");
         						}
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource3").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti3").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         							
         							$("#outSourceMulti3").val(a2);
         							$("#outSourceMulti3").multiselect("refresh");
         							}
         						
         					}
         				}
         				
         				if (step1key2=='Joists') {
         					if (step1key3==0) {				
         						if (nextinnerstep1data["In house"]=="true") {
         							$("#inHouse4").prop('checked',nextinnerstep1data["In house"]);
         							$("#inHouseMulti4").multiselect("enable");
         							var a1=nextinnerstep1data["Value"];
         							
         							$("#inHouseMulti4").val(a1);
         							$("#inHouseMulti4").multiselect("refresh");
         						}
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource4").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti4").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         							 
         							$("#outSourceMulti4").val(a2);
         							$("#outSourceMulti4").multiselect("refresh");
         							}
         						
         					}
         				}
         				
         				if (step1key2=='Decks') {
         					if (step1key3==0) {				
         						if (nextinnerstep1data["In house"]=="true") {
         							$("#inHouse5").prop('checked',nextinnerstep1data["In house"]);
         							$("#inHouseMulti5").multiselect("enable");
         							var a1=nextinnerstep1data["Value"];
         							
         							$("#inHouseMulti5").val(a1);
         							$("#inHouseMulti5").multiselect("refresh");
         						}
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource5").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti5").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         							
         							$("#outSourceMulti5").val(a2);
         							$("#outSourceMulti5").multiselect("refresh");
         							}
         						
         					}
         				}
         				
         				if (step1key2=='Gratings') {
         					if (step1key3==0) {				
         						if (nextinnerstep1data["In house"]=="true") {
         							$("#inHouse6").prop('checked',nextinnerstep1data["In house"]);
         							$("#inHouseMulti6").multiselect("enable");
         							var a1=nextinnerstep1data["Value"];
         							
         							$("#inHouseMulti6").val(a1);
         							$("#inHouseMulti6").multiselect("refresh");
         						}
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource6").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti6").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         						
         							$("#outSourceMulti6").val(a2);
         							$("#outSourceMulti6").multiselect("refresh");
         							}
         						
         					}
         				}
         				
         				if (step1key2=='Galvanizing') {
         					if (step1key3==0) {				
         						if (nextinnerstep1data["In house"]=="true") {
         							$("#inHouse7").prop('checked',nextinnerstep1data["In house"]);
         							$("#inHouseMulti7").multiselect("enable");
         							var a1=nextinnerstep1data["Value"];
         						
         							$("#inHouseMulti7").val(a1);
         							$("#inHouseMulti7").multiselect("refresh");
         						}
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource7").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti7").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         							
         							$("#outSourceMulti7").val(a2);
         							$("#outSourceMulti7").multiselect("refresh");
         							}
         						
         					}
         				}
         				if (step1key2=='Steel Detailing') {
         					if (step1key3==0) {				
         						if (nextinnerstep1data["In house"]=="true") {
         							$("#inHouse8").prop('checked',nextinnerstep1data["In house"]);
         							$("#inHouseMulti8").multiselect("enable");
         							var a1=nextinnerstep1data["Value"];
         							
         							$("#inHouseMulti8").val(a1);
         							$("#inHouseMulti8").multiselect("refresh");
         						}
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource8").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti8").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         							
         							$("#outSourceMulti8").val(a2);
         							$("#outSourceMulti8").multiselect("refresh");
         							}
         						
         					}
         				}
         				
         				if (step1key2=='Steel Erection') {
         					if (step1key3==0) {				
         						
         					}
         					if (step1key3==1) {
         						if(nextinnerstep1data["Out Source"]=="true")
         							{
         							$("#outSource9").prop('checked',nextinnerstep1data["Out Source"]);
         							$("#outSourceMulti9").multiselect("enable");
         							var a2=nextinnerstep1data["Value"];
         							
         							$("#outSourceMulti9").val(a2);
         							$("#outSourceMulti9").multiselect("refresh");
         							}
         						
         					}
         				}
         					
         			 });
         			 
         		 });
         	 });
   });
   $(".inc").click(function(){
   	$('#firstdivision').hide();
   	$('#thirddivision').hide();
   	$('#fourthdivision').hide();
   	$('#fivthdivision').hide();
   	$('#seconddivision').show();
   	
 	$(".changebtnclr").removeClass("changebtnclr");
   	  $("#inclusion1").addClass("changebtnclr");
   	
   	
   	
   	  $.each(step2, function(key,inclusionlist) {
    	  $.each(inclusionlist, function(key1,inclusionlistval) {
    		  if(inclusionlistval["Column"]=="selected"){
        			   $('#columnCB1').val("selected");
        			   $('#columnCB').removeClass("beforeselectinclusion");
        				  $('#columnCB').addClass("selectinclusion");
        				 
        		   }
    		  if(inclusionlistval["CageLadders"]=="selected"){
   			   $('#CageLaddersCB1').val("selected");
   			   $('#CageLaddersCB').removeClass("beforeselectinclusion");
   				  $('#CageLaddersCB').addClass("selectinclusion");
   				 
   		   }
    		  if(inclusionlistval["Decking"]=="selected"){
      			   $('#DeckingCB1').val("selected");
      			   $('#DeckingCB').removeClass("beforeselectinclusion");
      				  $('#DeckingCB').addClass("selectinclusion");
      				 
      		   }
    		  if(inclusionlistval["PitLadders"]=="selected"){
      			   $('#PitLaddersCB1').val("selected");
      			   $('#PitLaddersCB').removeClass("beforeselectinclusion");
      				  $('#PitLaddersCB').addClass("selectinclusion");
      				 
      		   }
    		  
    		  if(inclusionlistval["Tilt-Up Panel Embeds"]=="selected"){
   			   $('#TiltUpPanelEmbedsCB1').val(inclusionlistval["Tilt-Up Panel Embeds"]);
   			   $('#TiltUpPanelEmbedsCB').removeClass("beforeselectinclusion");
   			   $('#TiltUpPanelEmbedsCB').addClass("selectinclusion"); 
   				  
   		   } 
        		   
        		   if(inclusionlistval["Beam"]=="selected"){
        			   $('#beamCB1').val("selected");
        			   $('#beamCB').removeClass("beforeselectinclusion");
        			   $('#beamCB').addClass("selectinclusion");
        			  
        		   }

        		   
        		   
        		   if(inclusionlistval["Bent plates"]=="selected"){
        			   $('#bendPlatesCB1').val("selected");
        			   $('#bendPlatesCB').removeClass("beforeselectinclusion");
        				  $('#bendPlatesCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   
        		   if(inclusionlistval["Bollards"]=="selected"){
        			   $('#bollardsCB1').val("selected");
        			   $('#bollardsCB').removeClass("beforeselectinclusion");
        				  $('#bollardsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		  
        		   if(inclusionlistval["Stair"]=="selected"){
        			   $('#newStairsCB1').val("selected");
        			   $('#newStairsCB').removeClass("beforeselectinclusion");
        				  $('#newStairsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["BuiltUp Beams"]=="selected"){
        			   $('#bUBeamsCB1').val("selected");
        			   $('#bUBeamsCB').removeClass("beforeselectinclusion");
        				  $('#bUBeamsCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   
        		   if(inclusionlistval["Carrier Girts"]=="selected"){
        			   $('#cGirtsCB1').val("selected");
        			   $('#cGirtsCB').removeClass("beforeselectinclusion");
        				  $('#cGirtsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   
        		   if(inclusionlistval["Crane Girders"]=="selected"){
        			   $('#cGirdersCB1').val("selected");
        			   $('#cGirdersCB').removeClass("beforeselectinclusion");
        				  $('#cGirdersCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   
        		   if(inclusionlistval["Embeds"]=="selected"){
        			   $('#embedsCB1').val("selected");
        			   $('#embedsCB').removeClass("beforeselectinclusion");
        				  $('#embedsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Frames Posts"]=="selected"){
        			   $('#framesCB1').val("selected");
        			   $('#framesCB').removeClass("beforeselectinclusion");
        				  $('#framesCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["GirtsGirt Posts"]=="selected"){
        			   $('#ggPostsCB1').val("selected");
        			   $('#ggPostsCB').removeClass("beforeselectinclusion");
        				  $('#ggPostsCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["Trolley Beams"]=="selected"){
        			   $('#tmmBeamCB1').val("selected");
        			   $('#tmmBeamCB').removeClass("beforeselectinclusion");
        				  $('#tmmBeamCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["Tillupembeds"]=="selected"){
        			   $('#tuembedsCB1').val("selected");
        			   $('#tuembedsCB').removeClass("beforeselectinclusion");
        				  $('#tuembedsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Hangers"]=="selected"){
        			   $('#hangersCB1').val("selected");
        			   $('#hangersCB').removeClass("beforeselectinclusion");
        				  $('#hangersCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Horzontal Brace"]=="selected"){
        			   $('#hBrace1').val("selected");
        			   $('#hBrace').removeClass("beforeselectinclusion");
        				  $('#hBrace').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["WallRails"]=="selected"){
        			   $('#WallRailsCB1').val("selected");
        			   $('#WallRailsCB').removeClass("beforeselectinclusion");
        				  $('#WallRailsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Knee Brace"]=="selected"){
        			   $('#kBraceCB1').val("selected");
        			   $('#kBraceCB').removeClass("beforeselectinclusion");
        				  $('#kBraceCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   if(inclusionlistval["MonorailsTrolley Beams"]=="selected"){
        			   $('#mmBeamCB1').val("selected");
        			   $('#mmBeamCB').removeClass("beforeselectinclusion");
        				  $('#mmBeamCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["Beams Beam"]=="selected"){
        			   $('#beamsbeamCB1').val("selected");
        			   $('#beamsbeamCB').removeClass("beforeselectinclusion");
        				  $('#beamsbeamCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["baseplate"]=="selected"){
        			   $('#baseplateCB1').val("selected");
        			   $('#baseplateCB').removeClass("beforeselectinclusion");
        				  $('#baseplateCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["girts"]=="selected"){
        			   $('#gPostsCB1').val("selected");
        			   $('#gPostsCB').removeClass("beforeselectinclusion");
        				  $('#gPostsCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["BRB"]=="selected"){
        			   $('#BRBCB1').val("selected");
        			   $('#BRBCB').removeClass("beforeselectinclusion");
        				  $('#BRBCB').addClass("selectinclusion");
        				 
        		   }
        		   
        		   if(inclusionlistval["Posts"]=="selected"){
        			   $('#postsCB1').val("selected");
        			   $('#postsCB').removeClass("beforeselectinclusion");
        				  $('#postsCB').addClass("selectinclusion");
        				
        		   }
        		   
        		   if(inclusionlistval["Purlins"]=="selected"){
        			   $('#purlinsCB1').val("selected");
        			   $('#purlinsCB').removeClass("beforeselectinclusion");
        				  $('#purlinsCB').addClass("selectinclusion");
        			   
        		   }
        		   
        		   if(inclusionlistval["Roof top openings(RTUs)"]=="selected"){
        			   $('#rtopenCB1').val("selected");
        			   $('#rtopenCB').removeClass("beforeselectinclusion");
        				  $('#rtopenCB').addClass("selectinclusion");
        			   
        		   }
        		   if(inclusionlistval["Sagrods"]=="selected"){
        			   $('#screenCB1').val("selected");
        			   $('#screenCB').removeClass("beforeselectinclusion");
        				  $('#screenCB').addClass("selectinclusion");
        			   
        		   }
        		   if(inclusionlistval["Screen Walls"]=="selected"){
        			   $('#sargrodsCB1').val("selected");
        			   $('#sargrodsCB').removeClass("beforeselectinclusion");
        				  $('#sargrodsCB').addClass("selectinclusion");
        				 
        		   }
        		   if(inclusionlistval["Trusses"]=="selected"){
        			   $('#trussesCB1').val("selected");
        			   $('#trussesCB').removeClass("beforeselectinclusion");
        				  $('#trussesCB').addClass("selectinclusion");
        				 
        		   }
        		 
        		   
        		   
        		   if(inclusionlistval["Vertical Brace"]=="selected"){
        			   $('#vBraceCB1').val("selected");
        			   $('#vBraceCB').removeClass("beforeselectinclusion");
        				  $('#vBraceCB').addClass("selectinclusion");
        			   
        		   }	        		   
        		   
        		   if(inclusionlistval["BuiltUp Columns"]=="selected"){
        			   $('#bUColumsCB1').val("selected");
        			   $('#bUColumsCB').removeClass("beforeselectinclusion");
        				  $('#bUColumsCB').addClass("selectinclusion");
        			   
        		   }
        		   if(inclusionlistval["Trash Gates"]=="selected"){
        			   $('#TrashGatesCB1').val("selected");
        			   $('#TrashGatesCB').removeClass("beforeselectinclusion");
        				  $('#TrashGatesCB').addClass("selectinclusion");
        			   
        		   }
        		   if(inclusionlistval["Anchors"]=="selected"){
        			   $('#AnchorsCB1').val("selected");
        			   $('#AnchorsCB').removeClass("beforeselectinclusion");
        				  $('#AnchorsCB').addClass("selectinclusion");
        			 }
        		   
        		   if(inclusionlistval["Kickers"]=="selected"){
        			   $('#KickersCB1').val("selected");
        			   $('#KickersCB').removeClass("beforeselectinclusion");
        				  $('#KickersCB').addClass("selectinclusion");   
        		   }
        		   if(inclusionlistval["Lintels"]=="selected"){
        			   $('#LintelsCB1').val(inclusionlistval["Lintels"]);
        			   $('#LintelsCB').removeClass("beforeselectinclusion");
        				  $('#LintelsCB').addClass("selectinclusion");  
        		   }
        		   if(inclusionlistval["Loose Angles"]=="selected"){
        			   $('#LooseAnglesCB1').val(inclusionlistval["Loose Angles"]);
        			   $('#LooseAnglesCB').removeClass("beforeselectinclusion");
        				  $('#LooseAnglesCB').addClass("selectinclusion");   
        		   }
        		   if(inclusionlistval["Pour Stopper Angle"]=="selected"){
        			   $('#PourStopperAngleCB1').val(inclusionlistval["Pour Stopper Angle"]);
        			   $('#PourStopperAngleCB').removeClass("beforeselectinclusion");
        				  $('#PourStopperAngleCB').addClass("selectinclusion");  
        		   }
        		   if(inclusionlistval["Edge angle"]=="selected"){
        			   $('#EdgeangleCB1').val(inclusionlistval["Edge angle"]);
        			   $('#EdgeangleCB').removeClass("beforeselectinclusion");
        				  $('#EdgeangleCB').addClass("selectinclusion");  
        		   }
        		   if(inclusionlistval["Stair Rails"]=="selected"){
        			   $('#StairRailsCB1').val(inclusionlistval["Stair Rails"]);
        			   $('#StairRailsCB').removeClass("beforeselectinclusion");
        				  $('#StairRailsCB').addClass("selectinclusion");  
        		   }
        		   if(inclusionlistval["Hand Rails"]=="selected"){
        			   $('#HandRailsCB1').val(inclusionlistval["Hand Rails"]);
        			   $('#HandRailsCB').removeClass("beforeselectinclusion");
        				  $('#HandRailsCB').addClass("selectinclusion"); 
        		   }  
        		   if(inclusionlistval["Ladders"]=="selected"){
        			   $('#LaddersCB1').val(inclusionlistval["Ladders"]);
        			   $('#LaddersCB').removeClass("beforeselectinclusion");
        				  $('#LaddersCB').addClass("selectinclusion");  
        		   }  
        		   
        		   if(inclusionlistval["Gratings"]=="selected"){
        			   $('#GratingsCB1').val(inclusionlistval["Gratings"]);
        			   $('#GratingsCB').removeClass("beforeselectinclusion");
        				  $('#GratingsCB').addClass("selectinclusion");  
        		   }  
        		   if(inclusionlistval["Chekered Plates"]=="selected"){
        			   $('#ChekeredPlatesCB1').val(inclusionlistval["Chekered Plates"]);
        			   $('#ChekeredPlatesCB').removeClass("beforeselectinclusion");
        				  $('#ChekeredPlatesCB').addClass("selectinclusion");   
        		   } 
        		   
        		   if(inclusionlistval["Anchor Bolts"]=="selected"){
        			   $('#AnchorBoltsCB1').val(inclusionlistval["Anchor Bolts"]);
        			   $('#AnchorBoltsCB').removeClass("beforeselectinclusion");
        				  $('#AnchorBoltsCB').addClass("selectinclusion");  
        		   } 
        		   if(inclusionlistval["Ecwo"]=="selected"){
        			   $('#EcwoCB1').val(inclusionlistval["Ecwo"]);
        			   $('#EcwoCB').removeClass("beforeselectinclusion");
        				  $('#EcwoCB').addClass("selectinclusion");   
        		   } 
        		   if(inclusionlistval["Ecw"]=="selected"){
        			   $('#EcwCB1').val(inclusionlistval["Ecw"]);
        			   $('#EcwCB').removeClass("beforeselectinclusion");
        			   $('#EcwCB').addClass("selectinclusion");   
        		   } 
        		   if(inclusionlistval["Stair Design"]=="selected"){
        			   $('#StairdCB1').val(inclusionlistval["Stair Design"]);
        			   $('#StairdCB').removeClass("beforeselectinclusion");
        			   $('#StairdCB').addClass("selectinclusion");   
        		   } 
        		  
        		  
        		   if(inclusionlistval["Joist"]=="selected"){
        			   $('#JoistCoordinationsCB1').val("selected");
        			   $('#JoistCoordinationsCB').removeClass("beforeselectinclusion");
        				  $('#JoistCoordinationsCB').addClass("selectinclusion");   
        		   } 
        		   
        		  var dynamicChoosenValue=inclusionlistval["DynamicvaluesForincusion"];
        		   dynamicChoosenValuelength=dynamicChoosenValue.length;
        		  for (var i = 0; i < dynamicChoosenValue.length; i++) {
        			  $("#adddingLabel").append('<button type="button" id="b'+i+'" class="btn btn-success btn-rounded m-l-30 m-r-20 m-b-30 selectinclusion" ondblclick="deselectInclusionbtn(this)"  onclick="selectInclusionbtn(this)">'+dynamicChoosenValue[i]+'</button><a class="fa fa-times close-anchor" id="i'+i+'" onclick="removelable(this)" ></a><input id="t'+i+'" class="inclusionselectclass" type="hidden"  value="selected"/>');
        				
				}
        		  if (dynamicChoosenValue.length>0) {
        			  $("#newincl").show();
				}
        		   
        	   });
    	   });
   	     
   	    
   	    
   });    
   $(".sl").click(function(){
   	$('#firstdivision').hide();
   	$('#thirddivision').show();
   	$('#fourthdivision').hide();
   	$('#fivthdivision').hide();
   	$('#seconddivision').hide();
 	$(".changebtnclr").removeClass("changebtnclr");
   	  $("#shipping1").addClass("changebtnclr");
   	
   	  $.each(step3, function(key,value) {
       	    
      	  $.each(value, function(key1,innervalue) {
      		  
      	 if (key==1) {
           		  
           		  $.each(value, function(rail1,rail1value) {
           			  $.each(rail1value, function(railkey,rail1valueinner) {
           				
               			  if(rail1valueinner["ByRailCheckBox"]=="true"){
               				  $("#rail1").prop('checked',rail1valueinner["ByRailCheckBox"]);
               				  $(".txtrail").removeAttr("disabled");   
               				  
               				  $('#railbtn1').val(rail1valueinner["Maximum Legal Shipping Width"]);
               				  $('#railbtn2').val(rail1valueinner["Maximum Legal Shipping Length"]);
               				  $('#railbtn3').val(rail1valueinner["Maximum Legal Shipping Height"]);
               				  $('#railbtn4').val(rail1valueinner["Maximum Legal Shipping Weight"]);
               			  }
   	            			    
               		  });  	   
           		  });
           	  }	
           	  if (key==2) {
           		 
           		  $.each(value, function(barge,bargevalue) {
           			  $.each(bargevalue, function(bargekey,bargevalueinner) {
           				  
           				  
               			  
               			  if(bargevalueinner["BYBargeCheckBox"]=="true"){
               				  $("#barge1").prop('checked',bargevalueinner["BYBargeCheckBox"]);
               				  $(".txtbarge").removeAttr("disabled"); 
               				
               				 
               				  $('#bargebtn1').val(bargevalueinner["Maximum Legal Shipping Width"]);
               				  $('#bargebtn2').val(bargevalueinner["Maximum Legal Shipping Length"]);
               				  $('#bargebtn3').val(bargevalueinner["Maximum Legal Shipping Height"]);
               				  $('#bargebtn4').val(bargevalueinner["Maximum Legal Shipping Weight"]);
               			  } 
               		  });  	   
           		  });
           	  }	
   			  
           	 
      		  if (key1==0) {
      			 
      			 
      			  if(innervalue["BYTruckCheckBox"]=="true"){
      				  $("#byTruck").prop('checked',innervalue["BYTruckCheckBox"]);
      				  $("#lega11,#permit1,#singlepilot1,#double1").removeAttr("disabled");
    
      			  }
   			}
      		  else if (key1==1) {
      			 
      			  
      			  $.each(innervalue, function(key2,legalLoad) {
      				 
      				  $.each(legalLoad, function(key3,legalLoad1) {
      			   if (key3==0) {
   	            			 
   	            			 
   	            			  
   	            			  if(legalLoad1["LegalLoadCheckBox"]=="true"){
   	            				  $("#lega11").prop('checked',legalLoad1["LegalLoadCheckBox"]);
   	            				  $(".txtlegal").removeAttr("disabled"); 
   	            				  
   	            				  $('#lega1btn1').val(legalLoad1["Maximum Legal Shipping Width"]);
   	            				  $('#lega1btn2').val(legalLoad1["Maximum Legal Shipping Length"]);
   	            				  $('#lega1btn3').val(legalLoad1["Maximum Legal Shipping Height"]);
   	            				  $('#lega1btn4').val(legalLoad1["Maximum Legal Shipping Weight"]);
   	            			  }
   	            			  
   						}
           				  
           				});	  
      				});		  

   			}
   else if (key1==2) {
      			 
      			  
   	  $.each(innervalue, function(key2,data) {
   		 
   		  $.each(data, function(key3,permitLoad) {
   	   if (key3==0) {
   		     if(permitLoad["PermitLoadCheckBox"]=="true"){
      				  
      				  $("#permit1").prop('checked',permitLoad["PermitLoadCheckBox"]);
      				  $(".txtpermit1").removeAttr("disabled"); 
      				  
      				  $('#permitbtn1').val(permitLoad["Maximum Legal Shipping Width"]);
      				  $('#permitbtn2').val(permitLoad["Maximum Legal Shipping Length"]);
      				  $('#permitbtn3').val(permitLoad["Maximum Legal Shipping Height"]);
      				  $('#permitbtn4').val(permitLoad["Maximum Legal Shipping Weight"]);
      			  }
      			  
   			}
   			  
   			});	  
   		});	 
      			  
      	}
   else if (key1==3) {
   	 
   	  
   	  $.each(innervalue, function(key2,data) {
   		 
   		  $.each(data, function(key3,singelPilot) {
   	   if (key3==0) {
   		  
   	  
   	  
   	  if(singelPilot["SingelPilotVehicleCheckBox"]=="true"){
   		 $("#singlepilot1").prop('checked',singelPilot["SingelPilotVehicleCheckBox"]);
   		 $(".txtsinglepilot").removeAttr("disabled"); 
   		  
   		    $('#singlepilotbtn1').val(singelPilot["Maximum Legal Shipping Width"]);
   		  $('#singlepilotbtn2').val(singelPilot["Maximum Legal Shipping Length"]);
   		  $('#singlepilotbtn3').val(singelPilot["Maximum Legal Shipping Height"]);
   		  $('#singlepilotbtn4').val(singelPilot["Maximum Legal Shipping Weight"]);
   	  }
      			  
   			}
   			  
   			});	  
   		});	 
      			  
      	}
      		  
   else if (key1==4) {
   	  
   	  $.each(innervalue, function(key2,data) {
   		 
   		  $.each(data, function(key3,doublePilot) {
   	   if (key3==0) {
   		  		 
      			 
      			  
      			  if(doublePilot["DoublePilotVehicleCheckBox"]=="true"){
      				  $("#double1").prop('checked',doublePilot["DoublePilotVehicleCheckBox"]);
      				
      				  $(".txtdouble1").removeAttr("disabled"); 
      				  $('#doublebtn1').val(doublePilot["Maximum Legal Shipping Width"]);
      				  $('#doublebtn2').val(doublePilot["Maximum Legal Shipping Length"]);
      				  $('#doublebtn3').val(doublePilot["Maximum Legal Shipping Height"]);
      				  $('#doublebtn4').val(doublePilot["Maximum Legal Shipping Weight"]);
      			  }
      			  
   			}
   			  
   			});	  
   		});	 
      			  
      	}
      	   }); 
        
        }); 
   }); 

   $(".mg").click(function(){
   	 
   	$('#firstdivision').hide();
   	$('#thirddivision').hide();
   	$('#fourthdivision').show();
   	$('#fivthdivision').hide();
   	$('#seconddivision').hide();
   	$(".changebtnclr").removeClass("changebtnclr");
   	 $("#material1").addClass("changebtnclr");
   	 var MemberGradeskey = 'Member Grades';
   	  var obj = step4[MemberGradeskey];
 	 if(  obj ) {
 		$('#wfgrades').val(obj.WfShapes);
  	   $('#angles').val(obj.Angles);
  	   $('#hssrectagular').val(obj.HssRectagular);
  	   $('#hshape').val(obj.HShape);
  	   $('#channels').val(obj.Channels);
  	   $('#hssround').val(obj.HssRound);
  	   $('#sshape').val(obj.sshape);
  	   $('#plates').val(obj.Plates);
  	   $('#checkered').val(obj.CheckeredPlate);
  	 $('#pipe').val(obj.Pipes);
  	 $('#ASIC').val(obj.ASICEdition);
  	if (obj.ApplyConnection =="yes") {
  		 $("#yes").prop('checked',true);
 	}
  	 else{
  		 $("#no").prop('checked',true);
  	 }
 	}
 	 else{
 		$('#wfgrades').val('A992 ');
   	   $('#angles').val('A36 ');
   	   $('#hssrectagular').val('A572 Gr.50');
   	   $('#hshape').val('A572 Gr.50');
   	   $('#channels').val('A36 ');
   	   $('#hssround').val('A500_Ro Gr.B');
   	   $('#sshape').val('A36 ');
   	   $('#plates').val('A36 ');
   	   $('#checkered').val('A36 ');
   	  $('#pipe').val('A36 ');
   
 	 }
   	   
   	
   });

   $(".fi").click(function(){

   	$('#firstdivision').hide();
   	$('#seconddivision').hide();
   	$('#thirddivision').hide();
   	$('#fourthdivision').hide();
   	$('#fivthdivision').show();
   	$("#material1").removeClass("changebtnclr");
   	  $("#finish1").addClass("changebtnclr");
   	
   	
    	  $.each(step5, function(Finishkey,Finishdata) {	
   		   
   		 
   		   $.each(Finishdata, function(key1,innerfinishdata1) {	
   			 
   				   
   				   $.each(innerfinishdata1, function(key3,innerfinishdata2) {
   					   $.each(innerfinishdata2, function(key4,finishSp) {
   						   
   						   
   						   if (key3=="Surface Preparation") {
   								   
   			      				   
   					            		  if(finishSp["SurfacePreparationCheckbox"]=="true"){
   					            			  $("#surfaceprecb").prop('checked',finishSp["SurfacePreparationCheckbox"]);
   					            				 $("#surfacepreparation").removeAttr("disabled"); 
   					            				 $("#surfacepreparation").val(finishSp["SurfacePreparationValue"]);
   					            				 
   					            			  }
   					            			  
   										}
   			      			   
   			      			 if (key3=="Primer") {
   			      				 
   			      				 if(finishSp["PrimerCheckbox"]=="true"){
   			      					 $("#chkPrimer").prop('checked',finishSp["PrimerCheckbox"]);
   			      					 $(".cmnclssprimer").removeAttr("disabled"); 
   		            				
   			      				  $("#txtPrimer").val(finishSp["PrimerValue"]);
   					             $("#ddlNoOfCoats").val(finishSp["NoofCoatsprimer"]);
   			      			 }
   					            }
   			      			 
   			      			 if (key3=="Paint") {
   		      				  
   				            		  if(finishSp["PaintCheckbox"]=="true"){
   				            			  $("#chkPaint").prop('checked',finishSp["PaintCheckbox"]);
   				            				 $(".cmnpaintcls").removeAttr("disabled"); 
   				            				 var primerValue=finishSp["PaintValue"];
           			      					var NoofCoatsprimer=finishSp["NoofCoatspaint"];
           			      					for (i =0; i < primerValue.length; i++) {
           			      					if(i==0){
           			      						$("#txtPaint").val(primerValue[0]);
   					            				 $("#ddlNoOfCoats1").val(NoofCoatsprimer[0]);}
           			      					if(i!=0){
           			      						$(".add-row-below")
   												.append(
   														'<div class="row newrowscomcss" id="newrow"><div class="col-3"><div class="form-group"><label class="custom-control custom-checkbox" style="margin-top: 9px"><span class="custom-control-description"><p style="color: #455a64;"> </p></span></label></div></div><div class="col-3"><input type="text" id="txtPaint" value='+primerValue[i]+' class="form-control input-sm txtpaint cmnpaintcls" maxlength="35"></div><div class="row"> <div class="col-1"><hr style="width: 40px;margin-top:18px" /> </div></div><div class="col-1.5"><p class="custom-control custom-checkbox custom-control-description" style="margin-top: 9px;color: #455a64; ">No. of Coats</p></div><div class="col-2"><select  id="ddlNoOfCoats1'+i+'" class="labelBlack form-control nocoatspaint cmnpaintcls" name="companyType"  required class="form-control" ><option value="">None</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><div class="col-1"><button type="button" class="btn waves-effect waves-light btn-block btn-success delrow" id="delrow" style="background-color: #26c6da; border-color: #26c6da;">DELETE</button></div></div>');
   									
           			      						
           			      					 $("#ddlNoOfCoats1"+i).val(NoofCoatsprimer[i]);
           			      					}
           			      					   
           			      					}
   				            				 
   				            			  }
   				            			  
   									}
   			      			if (key3=="Galvanization") {
   		      				   
   				            		  if(finishSp["GalvanizationCheckbox"]=="true"){
   				            			  $("#galcb").prop('checked',finishSp["GalvanizationCheckbox"]);
   				            				 $(".cmnclssgal").removeAttr("disabled"); 
   				            				 $("#ddlGSurface").val(finishSp["Surface Prep"]);
   				            				 $("#ddlGZinc").val(finishSp["Zinc Coating Thickness"]);
   				            				 
   				            			 }
   				            			  
   									}
   			      			if (key3=="Fire Proofing") {
   		      				   
   				            		  if(finishSp["Fire ProofingCheckbox"]=="true"){
   				            			  $("#firecb").prop('checked',finishSp["Fire ProofingCheckbox"]);
   				            				 $(".cmnclssfire").removeAttr("disabled"); 
   				            				 $("#ddlFSurface").val(finishSp["Surface Prep"]);
   				            				 $("#ddlFFire").val(finishSp["Fire Proofing Type"]);
   				            				 $("#txtThickness").val(finishSp["Thickness"]);
   				            				 
   				            			  }
   				            			  
   									}
   			      			if (key3=="Aess") {
   			      				
   			      			  if(finishSp["AessCheckbox"]=="true"){
   				            			  $("#aesscb").prop('checked',finishSp["AessCheckbox"]);
   				            				 $("#category1").removeAttr("disabled"); 
   				            				 $("#category1").val(finishSp["Category"]);
   				            				 
   				            			  }
   				            			  
   									}
   			      			 
   			          				  
   			          				});	
   					   
   				});
   				   
   			  
       	   });	
   		
   	   });
   		
   });
    
   
   $("[name='requireditem']").on("change", function (e) {
	   
	    
	    $('#txtPaint').prop('disabled', true);
	    $('#ddlNoOfCoats1').prop('disabled', true);
	    $('#addbtn').prop('disabled', true);
    	
    	$('#ddlGSurface').prop('disabled', true);
  	    $('#ddlGZinc').prop('disabled', true);
    	
    	
    	$('#ddlFSurface').prop('disabled', true);
  	    $('#ddlFFire').prop('disabled', true);
  	    $('#txtThickness').prop('disabled', true);
  	  
  	  
	    $('#category1').prop('disabled', true);
    	
    	$('#chkPrimer').prop('disabled', false);
    	
	    
	    if(this.value=="paint")
	    {	    	
	    	$('#txtPaint').prop('disabled', false);
		    $('#ddlNoOfCoats1').prop('disabled', false);
		    $('#addbtn').prop('disabled', false);		    
		    
	    	removerowsIfNotselected(this);
	    }
	    else if(this.value=="galvanization")
	    {
	    	
	    	$('#ddlGSurface').prop('disabled', false);
	  	    $('#ddlGZinc').prop('disabled', false);
	  	    
	    	$('#chkPrimer').prop('checked', false);
	    	$('#chkPrimer').prop('disabled', true);
	    	$('#txtPrimer').prop('disabled', true);
	     	$('#ddlNoOfCoats').prop('disabled', true);
	    	
	    }
	    
	    else if(this.value=="fireproffing")
	    {
	    	    	
	    	$('#ddlFSurface').prop('disabled', false);
	  	    $('#ddlFFire').prop('disabled', false);
	  	    $('#txtThickness').prop('disabled', false);
	    	
	    }
	    else if(this.value=="aess")
	    {
	    	$('#category1').prop('disabled', false);
	    }
	    
	});
   
  
   
    