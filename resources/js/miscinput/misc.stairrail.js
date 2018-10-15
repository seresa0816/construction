var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;
var stairRailtable = "";

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var HSS_Profile = [];
var HSS_MaterialGrade = [];
var HSS_MaterialGrade2 = [];

var L_Profile = [];
var L2_Profile = [];
var L_MaterialGrade = [];

var PIPE_Profile = [];
var PIPE_MaterialGrade = [];

var WT_Profile = [];

var shape = "shapes",
		profile1 = "stairrailprofile",
		profile2 = "stairrailpostprofile",
		grade = "grade",
		endreturntype = "", 
		quantity = "quantity",
		feet = "feet",
		inches = "Inch",
		fraction = "fr_fra",
		fractiondecimal = "fr",  
		handraillength = "stairraillength",
		postspacinglength = "postspacinglength",
		connectiontype = "connectiontype",
		connectingmember = "connectingmember",
		clipangleprofile = "clipangleprofile",
		platethickness = "platethickness",
		plateThicknessfraction = "tp_fra",
		plateThicknessdecimal = "tp",	
		weldtype = "wtype",	
		weldsize = "weldsize",
		weldsizefraction = "weld_fra",
		weldsizedecimal = "weld",
		boltgrade = "BoGr",
		boltdia = "boltdia",
		boltdiafraction = "d1_fra",
		boltdiadecimal = "d1",
		noofbolts="N",
		referencedrawing = "referencedrawing",
		memberweightlbs = "memberweightlbs",
		memberweightstons = "memberweightstons";

$(document).ready(function(){
				
		stairRailtable = $('#tableStairrails').DataTable({	 	       		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: false,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[100], [100]],		     
		     "ordering": false
	    });
		 
		jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');
		
		L_Profile = getProfiles("L");
		L2_Profile	= getProfiles("2L");	
		WT_Profile = getProfiles("WT");	
		
		$("#ConnectionTypeHandR").trigger("change");
		
		$(".select2").select2();
	
		//Checkbox Selection
		$("#checkAll").click(function() 
		{
            $(this).closest("table").find("td input:checkbox").prop("checked", this.checked);            
            
        });
		        
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
            $(".memtype-rightedit").show();
            $(".editmemtype .rightFloat").show();
        });
        
        //Add Value
        $(".anv-btn").on('click', function(){
            $(".memtype-rightedit").show();
            $(".right").hide();
            $(".left").hide();
        });
});    

		$("#ConnectionTypeHandR").change( function(){
	       if($('#ConnectionTypeHandR').val()=='connectionTypeHRCA' || $('#ConnectionTypeHandR').val()=='connectionTypeHRWT'){
	             $(".fieldsHRCA").show(); 
	             $(".fieldsHRDW").hide();
	             $(".fieldsHREP").hide();
	             
	             resetDrodown('drpClipAngleProfile');
	             if( $('#ConnectionTypeHandR').val() == "connectionTypeHRCA")
	             {
	            	fillProfileDropdownList('drpClipAngleProfile',L_Profile);
	             	fillProfileDropdownList('drpClipAngleProfile',L2_Profile);
	             }
	             else if($('#ConnectionTypeHandR').val() == "connectionTypeHRWT")
	             {
	            	 fillProfileDropdownList('drpClipAngleProfile',WT_Profile);
	             }	             	             
	        }             
	    else if($('#ConnectionTypeHandR').val()=='connectionTypeHRDW'){
	    		$(".fieldsHRCA").hide();
	    		$(".fieldsHRDW").show();
	    		$(".fieldsHREP").hide();

	      }
	      else if($('#ConnectionTypeHandR').val()=='connectionTypeHREP'){
	           $(".fieldsHRCA").hide();
	           $(".fieldsHRDW").hide();
	           $(".fieldsHREP").show();
	      }
	     });
		
        //Shape Dropdown Change Event
       $("#drpShape").change(function() 
   	   {             	
    	  resetDrodown('drpStairRailProfile');
 		  resetDrodown('drpStairRailPostProfile');
 				        	
 		  resetDrodown('drpMaterialGrade');
 			
 		  if($("#drpShape").val() != "")
 		  {
 			  if($("#drpShape").val() == "HSS")
 			   {
 				  if(HSS_Profile.length == 0 || HSS_MaterialGrade.length == 0 || HSS_MaterialGrade2.length ==0)
 				  {
 					  HSS_Profile = getProfiles($("#drpShape").val());
 					  HSS_MaterialGrade  = getMaterialGrade("HSS_Rect.");
 					  HSS_MaterialGrade2  = getMaterialGrade("HSS_Round");
 	       		  }
 				  fillProfileDropdownList('drpStairRailProfile',HSS_Profile);
 				  fillProfileDropdownList('drpStairRailPostProfile',HSS_Profile);
 				  
 	        	  fillMaterialGradeDropdownList('drpMaterialGrade',HSS_MaterialGrade);
 	        	  fillMaterialGradeDropdownList('drpMaterialGrade',HSS_MaterialGrade2);
 	        	
 				}
 				else if($("#drpShape").val() == "L")
 				{
 					 if(L_Profile.length == 0 || L_MaterialGrade.length == 0)
 	        		 {
 						 L_Profile = getProfiles($("#drpShape").val());
 						 L_MaterialGrade  = getMaterialGrade($("#drpShape").val());
 	        		 }
 	        		 fillProfileDropdownList('drpStairRailProfile',L_Profile);
 	        		 fillProfileDropdownList('drpStairRailPostProfile',L_Profile);
 	        		 
 	        		 fillMaterialGradeDropdownList('drpMaterialGrade',L_MaterialGrade);
 	        		 
 				}
 				else if($("#drpShape").val() == "PIPE")
 				{
 					 if(PIPE_Profile.length == 0 || PIPE_MaterialGrade.length == 0)
 	        		 {
 						 PIPE_Profile = getProfiles($("#drpShape").val());
 						 PIPE_MaterialGrade  = getMaterialGrade($("#drpShape").val());
 	        		 }
 	        		 fillProfileDropdownList('drpStairRailProfile',PIPE_Profile);
 	        		 fillProfileDropdownList('drpStairRailPostProfile',PIPE_Profile);
 	        		 
 	        		 fillMaterialGradeDropdownList('drpMaterialGrade',PIPE_MaterialGrade);
 	        		 
 				}
 	
 		    }
       	
       });
       
       
       
       
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableStairrails tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				   rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;
		        			        	
		        	var $tds = $(this).find('td'),                    
				        	Shape = $tds.eq(2).text(),
			                StairRailProfile = $tds.eq(3).text(),
			                StairRailPostProfile = $tds.eq(4).text(),
			                MaterialGrade = $tds.eq(5).text(),
			                StairRailLength = $tds.eq(6).text(),
			                PostSpacingLength = $tds.eq(7).text(),
			                Quantity = $tds.eq(8).text(),	
			                MemberWeightlbs = $tds.eq(9).text(),
					        MemberWeightTons = $tds.eq(10).text(), 					      					        
					        ConnectionType = $tds.eq(11).text(),
					        ConnectionMemberProfile = $tds.eq(12).text(),	
					        BoltGrade = $tds.eq(13).text(),
					        BoltDia = $tds.eq(14).text(),                
					        NoOfBoltRows = $tds.eq(15).text(),
					        WeldType = $tds.eq(16).text(),
					        WeldSize = $tds.eq(17).text(), 
					        ReferenceDrawing = $tds.eq(18).text(), 
					        StairRailLengthInFeet = $tds.eq(19).text(),
					        StairRailLengthInInch = $tds.eq(20).text() == "" ? "0" : $tds.eq(20).text(),                    
					        StairRailLengthInFraction = $tds.eq(21).text() == "" ? "0" : $tds.eq(21).text(),
		                    PostSpacingInFeet = $tds.eq(22).text(),                    
		                    PostSpacingInInch = $tds.eq(23).text() == "" ? "0" : $tds.eq(23).text(),
		                    PostSpacingInFraction = $tds.eq(24).text() == "" ? "0" : $tds.eq(24).text();
		        	
		        	
		        	$('#drpShape').val(getOptId('drpShape', Shape));		        	
		        	$("#drpShape").trigger("change");
		        	
		        	$('#drpStairRailProfile').val(getOptId('drpStairRailProfile', StairRailProfile)).change();		        	
		        	$('#drpStairRailPostProfile').val(getOptId('drpStairRailPostProfile', StairRailPostProfile)).change();
		        
		        	
		        	$('#drpMaterialGrade').val(MaterialGrade).trigger('change');
		        	$('#txtQuantity').val(Quantity);
		        	
		        	$('#txtStairRailLengthInFeet').val(StairRailLengthInFeet);
		        	
		        	$('#drpStairRailLengthInInch').val(getOptId('drpStairRailLengthInInch', StairRailLengthInInch));
		        	$('#drpStairRailLengthInFraction').val(getOptId('drpStairRailLengthInFraction', StairRailLengthInFraction));
		        	
		        	$('#txtPostSpacingLengthInFeet').val(PostSpacingInFeet);
		        	
		        	$('#drpPostSpacingLengthInInch').val(getOptId('drpPostSpacingLengthInInch', PostSpacingInInch));		        	
		        	$('#drpPostSpacingLengthInFraction').val(getOptId('drpPostSpacingLengthInFraction', PostSpacingInFraction));
		        
		        	
		        	$('#ConnectionTypeHandR').val(getOptId('ConnectionTypeHandR', ConnectionType));		        	
		        	$("#ConnectionTypeHandR").trigger("change");
		        	
		        	if(ConnectionType == "Clip Angle" || ConnectionType == "WT")
		        	{
			        	
			        	$('#drpClipAngleProfile').val(getOptId('drpClipAngleProfile', ConnectionMemberProfile)).change();
			        	$('#drpClipAngleBoltGrade').val(getOptId('drpClipAngleBoltGrade', BoltGrade)).change();
			        	$('#drpClipAngleNoOfBoltRows').val(getOptId('drpClipAngleNoOfBoltRows', NoOfBoltRows));
			        	
			        	$('#drpClipAngleBoltDia').val(getOptId('drpClipAngleBoltDia', BoltDia.replace('"','')));
			        	$('#drpClipAngleWeldType').val(getOptId('drpClipAngleWeldType', WeldType));
			        	$("#drpClipAngleWeldType").trigger("change");
			        	
			        	$('#drpClipAngleWeldSize').val(getOptId('drpClipAngleWeldSize', WeldSize.replace('"',''))).change();
			        	
		        	}
		        	else if(ConnectionType == "Directly Welded")
		        	{
		        		$('#drpDirectlyWeldedWeldType').val(getOptId('drpDirectlyWeldedWeldType', WeldType));
			        	$("#drpDirectlyWeldedWeldType").trigger("change");
			        	
			        	$('#drpDirectlyWeldedWeldSize').val(getOptId('drpDirectlyWeldedWeldSize', WeldSize.replace('"',''))).change();
			        	
		        	}
		        	
		        	else if(ConnectionType == "End Plate")
		        	{
		        		
		        		$('#drpEndPlateThickness').val(getOptId('drpEndPlateThickness', ConnectionMemberProfile.replace("PL","").replace('"X3 1/2"',''))).change();
			        	$('#drpEndPlateBoltGrade').val(getOptId('drpEndPlateBoltGrade', BoltGrade)).change();
			        	$('#drpEndPlateNoOfBoltRows').val(getOptId('drpEndPlateNoOfBoltRows', NoOfBoltRows));
			        	
			        	$('#drpEndPlateBoltDia').val(getOptId('drpEndPlateBoltDia', BoltDia.replace('"','')));
			        	$('#drpEndPlateWeldType').val(getOptId('drpEndPlateWeldType', WeldType));
			        	$("#drpEndPlateWeldType").trigger("change");
			        	
			        	$('#drpEndPlateWeldSize').val(getOptId('drpEndPlateWeldSize', WeldSize.replace('"',''))).change();
			        			        		
		        	}
		        			        	
		        	var drawings = ReferenceDrawing.split(",");	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");	
		        	
		        }
		    });
			
		}
		
				
		//Clear All Controls Data
        function clearFields() {
        	
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmEndType').removeClass('submitted');        	
        	$('#frmDirectlyWelded').removeClass('submitted');        	
        	$('#frmClipAngle').removeClass('submitted');
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmEndType');
        	clearFormFields('frmDirectlyWelded');
        	clearFormFields('frmClipAngle');        	
        	$(".defaultValueZero").val(0);  
        	                  	
        	$("#drpShape").trigger("change");
        	$("#ConnectionTypeHandR").val("connectionTypeHRCA");
        	$("#ConnectionTypeHandR").trigger("change");
        	        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	
        	$('#drpEndPlateBoltGrade').val(getOptId('drpEndPlateBoltGrade', BoGrGp)).change();
       	    $('#drpEndPlateBoltDia').val(BoltDiaGP);
       	    
       	    $('#drpClipAngleBoltGrade').val(getOptId('drpClipAngleBoltGrade', BoGrGp)).change();
    	    $('#drpClipAngleBoltDia').val(BoltDiaGP);
        	
        	$('.addTR').text("Add");
        	isEdit = false;
        	Selected = [];
        	
        }
        
        //Validate Fields before saving
        function validateForm()
        {
        	        	
        	var connectionFormId;        	
        	
        	$('#frmMain').addClass('submitted'); 
        	
        	if( $('#ConnectionTypeHandR').val()=='connectionTypeHRCA' || $('#ConnectionTypeHandR').val()=='connectionTypeHRWT')
        	{
        		$('#frmClipAngle').addClass('submitted'); 
        		connectionFormId= "frmClipAngle";
        		
        		$('#frmEndType').removeClass('submitted'); 
        		$('#frmDirectlyWelded').removeClass('submitted'); 
        		
        	}
        	else if($('#ConnectionTypeHandR').val()=='connectionTypeHRDW')
        	{
        		
        		$('#frmDirectlyWelded').addClass('submitted'); 
        		connectionFormId= "frmDirectlyWelded";
        		
        		$('#frmEndType').removeClass('submitted'); 
        		$('#frmClipAngle').removeClass('submitted'); 
        		
        	}
        	else if($('#ConnectionTypeHandR').val()=='connectionTypeHREP')
        	{
        		
        		$('#frmEndType').addClass('submitted'); 
        		connectionFormId= "frmEndType";
        		
        		$('#frmDirectlyWelded').removeClass('submitted'); 
        		$('#frmClipAngle').removeClass('submitted'); 
        		
        	}
        	var validated = true;
        	$('#frmMain').find(':input').each(function(){   
        		
           		var id  = $(this).prop('id');
           		if(id!="")
           		{
	           		var Value =  $('#' + id).val();   		
	           		var requ = $(this).prop('required');	
	           		   		
	           		if(Value == "" && requ == true)  
	           		{	           			
	           			validated = false;
	           		}
           		}
           	});
        	if(validated == true)
        	{
       		       			
        		var StairRailLenght = $("#txtStairRailLengthInFeet").val();
            	var StairRailInch = $("#drpStairRailLengthInInch").find("option:selected").text();
            	var StairRailFraction = $("#drpStairRailLengthInFraction").find("option:selected").text();
        	
            	var StairRailvalidated = validateLength(StairRailLenght,StairRailInch,StairRailFraction,"Stairrial Length");
            	
            	var PostSpaceLenght = $("#txtPostSpacingLengthInFeet").val();
            	var PostSpaceInch = $("#drpPostSpacingLengthInInch").find("option:selected").text();
            	var PostSpaceFraction = $("#drpPostSpacingLengthInFraction").find("option:selected").text();
        	
            	var PostSpacevalidated = validateLength(StairRailLenght,StairRailInch,StairRailFraction,"Post Spacing Length");
            	
            	if(StairRailvalidated == false || PostSpacevalidated == false )
            		validated = false;
            	
            	var TotalStairRailLenght = parseFloat(StairRailLenght) * 12 + parseFloat(StairRailInch) + parseFloat($("#drpStairRailLengthInFraction").val());     			
    			var TotalPostSpaceLenght= parseFloat(PostSpaceLenght)* 12  + parseFloat(PostSpaceInch) + parseFloat($("#drpPostSpacingLengthInFraction").val());
    		        			
        		var valid = validateStairPostSpaceLenght(TotalStairRailLenght,TotalPostSpaceLenght, 'Stairrail length should be greater than post spacing length');  
            	if(valid == false)
            		validated = false;
        	}
        	
        	$('#'+connectionFormId).find(':input').each(function(){   		
           		
           		var id  = $(this).prop('id');
           		if(id!="")
           		{
	           		var Value =  $('#' + id).val();   		
	           		var requ = $(this).prop('required');
	           		var elemetvisible = $('#' + id).is(':visible');
	           		
	           		if(Value == "" && requ == true && elemetvisible == true)
	           		{
	           			validated = false;
	           		}
           		}           		
           	});  
        	
        	$('[data-required]').each(function() {                		
             	 if (!$(this).val()) 
             	 {
             		 var id = $(this).attr('id') + 1;
             		
             		    if ($(this).data('select2') && $('#' + id).is(':visible')) 
             		    {
             		    	$("#"+id).addClass('error'); 
             		    	validated = false;
             		    }
             		  }
             	});
        	return validated;
        	
        }
        
        //Bind Data to Table
        function bindTable()
        {
        	var RowNoForAddEdit;
        	
        	if(isEdit == true)
        	{
        		RowNoForAddEdit = editRowNo;
        	}
        	else
        	{        		
        		RowNo = RowNo + 1;        		
        		RowNoForAddEdit = RowNo;
        	}   	
        	
        	var Shape = $("#drpShape").find("option:selected").text(); 
        	var StairRailProfile = $("#drpStairRailProfile").find("option:selected").text(); 
        	var StairRailPostProfile = $("#drpStairRailPostProfile").find("option:selected").text();         	
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text();         	
        	var EndReturnType = $("#drpEndReturnType").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();
        	
        	var StairRailLenght_Feet = $("#txtStairRailLengthInFeet").val();        	
        	var StairRailLenght_Inch = $("#drpStairRailLengthInInch").find("option:selected").text();        	
        	var StairRailLenght_Fraction = $("#drpStairRailLengthInFraction").find("option:selected").text();
        	
        	var StairRailLenght = feetInchFormater(StairRailLenght_Feet , StairRailLenght_Inch ,StairRailLenght_Fraction);
        	
        	var PostSpacingLenght_Feet = $("#txtPostSpacingLengthInFeet").val();        	
        	var PostSpacingLenght_Inch = $("#drpPostSpacingLengthInInch").find("option:selected").text();        	
        	var PostSpacingLenght_Fraction = $("#drpPostSpacingLengthInFraction").find("option:selected").text();
        	
        	var PostSpacingLenght = feetInchFormater(PostSpacingLenght_Feet,PostSpacingLenght_Inch,PostSpacingLenght_Fraction);
        	
        	var ConnectionType = $("#ConnectionTypeHandR").find("option:selected").text();
        	
        	var ConnectionProfile = "",  ConnectionWeldType= "" , 
        		ConnectionWeldSize = "", ConnectionBoltGrade="", 
        		ConnectionBoltDia = "",ConnectionNoOfBolts = "" ;
        	
        	var Clip_Angle_Profile="", Plate_Thickness_Fra = "", Plate_Thickness_Dec = "", BoltDiaDecimal = "", WeldSizeDecimal = "";
        	        	
        	if(ConnectionType == "Clip Angle" || ConnectionType == "WT")
        	{
        	
        		ConnectionProfile = $("#drpClipAngleProfile").find("option:selected").text();   
        		Clip_Angle_Profile = ConnectionProfile;
        		
        		ConnectionWeldType = $("#drpClipAngleWeldType").find("option:selected").text();        		
        		ConnectionWeldSize = $("#drpClipAngleWeldSize").val() == "" ? "" : $("#drpClipAngleWeldSize").find("option:selected").text() + '"';
        		
        		ConnectionBoltGrade = $("#drpClipAngleBoltGrade").find("option:selected").text();        		
        		ConnectionBoltDia = $("#drpClipAngleBoltDia").find("option:selected").text() + '"'; 
        		
        		BoltDiaDecimal = $("#drpClipAngleBoltDia").val();
        		ConnectionNoOfBolts = $("#drpClipAngleNoOfBoltRows").find("option:selected").text();        		
        	}
        	else if(ConnectionType == "Directly Welded")
        	{
        		ConnectionWeldType = $("#drpDirectlyWeldedWeldType").find("option:selected").text();        		
        		ConnectionWeldSize = $("#drpDirectlyWeldedWeldSize").val() == "" ? "" : $("#drpDirectlyWeldedWeldSize").find("option:selected").text() +'"';
        		
        		WeldSizeDecimal = $("#drpDirectlyWeldedWeldSize").val();
        	}
        	
        	else if(ConnectionType == "End Plate")
        	{
        		ConnectionProfile = "PL" + $("#drpEndPlateThickness").find("option:selected").text() + '"X3 1/2"';  
        		Plate_Thickness_Fra = $("#drpEndPlateThickness").find("option:selected").text();
        		Plate_Thickness_Dec = $("#drpEndPlateThickness").val();
        		
        		ConnectionWeldType = $("#drpEndPlateWeldType").find("option:selected").text();   
        		ConnectionWeldSize = $("#drpEndPlateWeldSize").val() == "" ? "" : $("#drpEndPlateWeldSize").find("option:selected").text() +'"'; 
        		
        		ConnectionBoltGrade = $("#drpEndPlateBoltGrade").find("option:selected").text();        		
        		ConnectionBoltDia = $("#drpEndPlateBoltDia").find("option:selected").text() + '"';        		
        		ConnectionNoOfBolts = $("#drpEndPlateNoOfBoltRows").find("option:selected").text();
        		
        	}
        	
        	var RefernceDrawing =  $("#drpReferenceDrawing").val();
        	
        	//--------------------------------- Caluclation ----------------------------------
        	
        	var StairRailProfileWeight =  $("#drpStairRailProfile").val().split(",");
        	
        	var HandFeetVal = StairRailLenght_Feet * 12;
        	var HandInchVal = $("#drpStairRailLengthInInch").val();
        	var HandFractionVal = $("#drpStairRailLengthInFraction").val();
        	
        	var Total_StairRailLength = parseFloat(HandFeetVal) + parseFloat(HandInchVal) + parseFloat(HandFractionVal);
        	
        	var PostSpacingFeetVal = PostSpacingLenght_Feet * 12;
        	var PostSpacingInchVal = $("#drpPostSpacingLengthInInch").val();
        	var PostSpacingFractionVal = $("#drpPostSpacingLengthInFraction").val();
        	
        	var Total_PostSpacingLength = parseFloat(PostSpacingFeetVal) + parseFloat(PostSpacingInchVal) + parseFloat(PostSpacingFractionVal);
        	
        	var NoOfPosts = 0;
        	
        	var HorizontalWeight = (parseFloat(StairRailProfileWeight[0]) * parseFloat(Total_StairRailLength) * 2)/12;
        	
        	if(Total_StairRailLength == Total_PostSpacingLength)
        	{
        		NoOfPosts = 2;
        	}
        	else
        	{
        		NoOfPosts = parseInt(Total_StairRailLength/Total_PostSpacingLength) + 1;
        		
        	}
        	
        	var StairRailPostProfileWeight =  $("#drpStairRailPostProfile").val().split(",");        	
        	var WeightOfOneVerticalPost = parseFloat(StairRailPostProfileWeight[0]) * 3.5;
        	
        	var TotalWeightOfVerticalPost = parseFloat(WeightOfOneVerticalPost  * NoOfPosts);       	
        	        	
        	var MemberWeight_Lbs = (HorizontalWeight + TotalWeightOfVerticalPost) *  parseInt(Quantity);
        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000;       	        	
        	
        	//--------------------------------- End Caluclation ----------------------------------
        	
        	
        	
        	if(isEdit == true)
        	{
        		$('#tableStairrails').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit, Shape,
            			 StairRailProfile,StairRailPostProfile,  MaterialGrade,
            			 StairRailLenght, PostSpacingLenght, Quantity,
            			 MemberWeight_Lbs.toFixed(3), MemberWeight_Tons.toFixed(3),            			          			 
            			 ConnectionType,ConnectionProfile,ConnectionBoltGrade, ConnectionBoltDia,           			 
            			 ConnectionNoOfBolts, ConnectionWeldType, ConnectionWeldSize,
            			 RefernceDrawing,StairRailLenght_Feet,            			 
            			 StairRailLenght_Inch,StairRailLenght_Fraction,PostSpacingLenght_Feet,
            			 PostSpacingLenght_Inch,PostSpacingLenght_Fraction,
            			 Clip_Angle_Profile,
             			 Plate_Thickness_Fra,
             			 Plate_Thickness_Dec,             			 
             			 WeldSizeDecimal,
             			 BoltDiaDecimal], document.getElementById("row" + editRowNo));
        	
        	}
        	else
        	{
        	var DataRow = '<tr id="row' + RowNoForAddEdit +'"><td class="text-center">'+
								'<label class="custom-control custom-checkbox" >'+
								'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
								'<span class="custom-control-indicator"></span>'+
								'<span class="custom-control-description labelblk"></span></label>'+
							  '</td>' +
					          '<td>'+ RowNoForAddEdit + '</td>' +
					          '<td>'+ Shape + '</td>' +
					          '<td>'+ StairRailProfile + '</td>'+
					          '<td>'+ StairRailPostProfile + '</td>'+
					          '<td>'+ MaterialGrade + '</td>'+
					          '<td>'+ StairRailLenght + '</td>'+
					          '<td>'+ PostSpacingLenght + '</td>'+					          
					          '<td>'+ Quantity + '</td>'+					          
					          '<td>'+ MemberWeight_Lbs.toFixed(3) +'</td>' + 
							  '<td>'+ MemberWeight_Tons.toFixed(3) +'</td>'+
					          '<td>'+ ConnectionType + '</td>'+					          
					          '<td>'+ ConnectionProfile + '</td>'+
					          '<td>'+ ConnectionBoltGrade + '</td>'+					          
					          '<td>'+ ConnectionBoltDia + '</td>' +				          
					    	  '<td>'+ ConnectionNoOfBolts + '</td>' +
							  '<td>'+ ConnectionWeldType + '</td>' +
							  '<td>'+ ConnectionWeldSize + '</td>' + 
							  '<td>'+ RefernceDrawing + '</td>' + 
							  '<td style="display:none;">'+ StairRailLenght_Feet + '</td>' + 
							  '<td style="display:none;">'+ StairRailLenght_Inch + '</td>' + 
							  '<td style="display:none;">'+ StairRailLenght_Fraction + '</td>' + 
							 
							  '<td style="display:none;">'+ PostSpacingLenght_Feet + '</td>' + 
							  '<td style="display:none;">'+ PostSpacingLenght_Inch + '</td>' + 
							  '<td style="display:none;">'+ PostSpacingLenght_Fraction + '</td>' + 	
							  
							  '<td style="display:none;">'+ Clip_Angle_Profile + '</td>' + 
							  '<td style="display:none;">'+ Plate_Thickness_Fra + '</td>' + 
							  '<td style="display:none;">'+ Plate_Thickness_Dec + '</td>' + 
							  '<td style="display:none;">'+ WeldSizeDecimal + '</td>' + 
							  '<td style="display:none;">'+ BoltDiaDecimal + '</td>' + 
						  '</tr>' ;
        	
        	stairRailtable.row.add($(DataRow)).draw(false); 
        	}
        	
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var StairRails = [];
        	
        	var table = $("#tableStairrails tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),                    
			                Shape = $tds.eq(2).text(),
			                StairRailProfile = $tds.eq(3).text(),
			                StairRailPostProfile = $tds.eq(4).text(),
			                MaterialGrade = $tds.eq(5).text(),
			                StairRailLength = $tds.eq(6).text(),
			                PostSpacingLength = $tds.eq(7).text(),
			                Quantity = $tds.eq(8).text(),	
			                MemberWeightlbs = $tds.eq(9).text(),
					        MemberWeightTons = $tds.eq(10).text(),  					      
					        ConnectionType = $tds.eq(11).text(),
					        ConnectionMemberProfile = $tds.eq(12).text(),	
					        BoltGrade = $tds.eq(13).text(),
					        BoltDia = $tds.eq(14).text(),                
					        NoOfBoltRows = $tds.eq(15).text(),
					        WeldType = $tds.eq(16).text(),
					        WeldSize = $tds.eq(17).text(), 
					        ReferenceDrawing = $tds.eq(18).text(), 
					        StairRailLengthInFeet = $tds.eq(19).text(),
					        StairRailLengthInInch = $tds.eq(20).text(),                    
					        StairRailLengthInFraction = $tds.eq(21).text(),
		                    PostSpacingInFeet = $tds.eq(22).text(),                    
		                    PostSpacingInInch = $tds.eq(23).text(),
		                    PostSpacingInFraction = $tds.eq(24).text(),
		                    
		                    ClipangleProfile = $tds.eq(25).text(),
		                    PlateThicknessF = $tds.eq(26).text(),
		                    PlateThicknessD = $tds.eq(27).text(),
		                    WeldSizeDecimal = $tds.eq(28).text(),
		                    BoltDiaDecimal = $tds.eq(29).text();
                
                if(ConnectionType == "End Plate")
            	{
                	ConnectionMemberProfile = ConnectionMemberProfile.replace("PL","").replace('"X3 1/2"',''); //"PL" + $("#drpEndPlateThickness").find("option:selected").text() + ; 
            	}
               
               var StairRailArray = {            		   
				            		   [shape]: Shape,			                        
				                       [profile1]:StairRailProfile,
				                       [profile2]:StairRailPostProfile,			                        
				                       [grade]:MaterialGrade,				                       
				                       [handraillength] : {[feet]:StairRailLengthInFeet, 
							 		    		 			 [inches]:StairRailLengthInInch, 
							 		    		 			 [fraction]:StairRailLengthInFraction,
							 		    		 			 [fractiondecimal]: eval(StairRailLengthInFraction)},
				                       
							 		    [postspacinglength] : {[feet]:PostSpacingInFeet, 
								 		    		 			 [inches]:PostSpacingInInch, 
								 		    		 			 [fraction]:PostSpacingInFraction,
								 		    		 			 [fractiondecimal]: eval(PostSpacingInFraction)},							 		    		 			 
				                       		                        
				                       [quantity] : Quantity,			                        
				                       [memberweightlbs] : MemberWeightlbs,
				                       [memberweightstons] : MemberWeightTons,
				                       [connectiontype] : ConnectionType,
				                       [connectingmember] : ConnectionMemberProfile,			                        
				                       [boltgrade] : BoltGrade,				                       
				                       [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
											 			 [boltdiadecimal]:BoltDiaDecimal},   						 
				                       		                        
				                       [noofbolts] : NoOfBoltRows,			                        
				                       [weldtype] : WeldType,				                       
				                       [weldsize] : {[weldsizefraction]: WeldSize.replace('"',''), 
										   			   [weldsizedecimal]: WeldSizeDecimal},										   			   
									   [clipangleprofile]: ClipangleProfile,										
									   [platethickness]:{[plateThicknessfraction]:PlateThicknessF, 
									 			           [plateThicknessdecimal]:PlateThicknessD}, 									 			           
				                       [referencedrawing] : ReferenceDrawing
			                        }                 
               StairRails.push(StairRailArray);
            });
                        
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',
			    data: { miscsteelgroup:"StairRails",
			    	    miscsteeljson:JSON.stringify({"StairRails":StairRails})
			    	  },			    	
				success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
            });
        	
        }        
     
         
		 $("#drpClipAngleWeldType").change( function(){
	           if($('#drpClipAngleWeldType').val()=='CJP'){
	                $("#divWeldSize").hide(); 
	                $("#drpClipAngleWeldSize").val('');
	           }
	           else {
	           	 $("#divWeldSize").show();
	           }
	           
	       });
		 
		 $("#drpDirectlyWeldedWeldType").change( function(){
	           if($('#drpDirectlyWeldedWeldType').val()=='CJP'){
	                $("#divDirectlyWeldedWeldSize").hide(); 
	                $("#drpDirectlyWeldedWeldSize").val('');
	           }
	           else {
	           	 $("#divDirectlyWeldedWeldSize").show();
	           }
	           
	       });
		 
		 $("#drpEndPlateWeldType").change( function(){
	           if($('#drpEndPlateWeldType').val()=='CJP'){
	                $("#divEndPlateWeldSize").hide(); 
	                $("#drpEndPlateWeldSize").val('');
	           }
	           else {
	           	 $("#divEndPlateWeldSize").show();
	           }
	           
	       });
