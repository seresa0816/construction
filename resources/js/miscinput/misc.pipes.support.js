var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var miscPipeSupporttable = "";

var C_Profile = [];
var L_Profile = [];
var L2_Profile = [];
var C_MaterialGrade = [];
var L_MaterialGrade = [];

var L2_Profile = [];
var L2_MaterialGrade = [];

var W_Profile = [];
var W_MaterialGrade = [];

var  HSS_Profile = [];
var HSS_MaterialGrade = [];
var HSS_MaterialGrade2 = [];


var horizontalshape = "horizontalshapes",
	horizontalprofile = "horizontalprofile",
	horizontalgrade = "horizontalgrade",
	horizontalquantity = "horizontalquantity",
	
	verticalshape = "verticalshapes",
	verticalprofile = "verticalprofile",
	verticalgrade = "verticalgrade",
	verticalquantity = "verticalquantity",	
	mpsquantity = "mpsquantity";
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr", 
	connectiontype = "connectiontype",
	connectingmember= "connectingmember";
	boltgrade = "BoGr",
	boltdia = "boltdia",
	boltdiafraction = "d1_fra",
	boltdiadecimal = "d1",
	noofbolts="N",
	weldtype = "wtype",	
	weldsize = "weldsize",
	weldsizefraction = "weld_fra",
	weldsizedecimal = "weld",
	referencedrawing = "referencedrawing",
	memberweightlbs = "memberweightlbs",
	memberweightstons = "memberweightstons",	
	horizonatllength = "horizontallength",
	verticallength = "verticallength",
	weldlength = "weldlength"
	platethickness = "platethickness",
	plateThicknessfraction = "tp_fra",
	plateThicknessdecimal = "tp";


$(document).ready(function(){	
	
	miscPipeSupporttable = $('#tbleMiscPipesSupport').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: false,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[500], [500]],		     
	     "ordering": false
    }); 
	
   jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');
		
		$(".select2").select2();
		
		 var LProfile = getProfiles("2L");
				
		 fillProfileDropdownList('drpClipAngleProfile',LProfile);
		
		
		 $('#divPlateThickness').hide();
		
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
        
});    

		//Connection Type Change Event 
		 $("#ddlConnectionTypeMPS").change( function(){
             if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSCA'){
                  $(".fieldsMPSCA").show();
                  $(".fieldsMPSSP").hide();                  
                  $(".fieldsMPSDW").hide();
                 
             }
             else if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSSP' || $('#ddlConnectionTypeMPS').val()=='connectionTypeMPSEP'){
                 $(".fieldsMPSCA").hide();
                 $(".fieldsMPSSP").show();                
                 $(".fieldsMPSDW").hide();
             }             
             else if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSDW'){
                 $(".fieldsMPSCA").hide();
                 $(".fieldsMPSSP").hide();                
                 $(".fieldsMPSDW").show();
             }
             
         });
		 
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tbleMiscPipesSupport tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				  rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;
		        			        	
		        	var  HorizontalMemberShape = $tds.eq(2).text(),
	            	HorizontalMemberProfile = $tds.eq(3).text(),
	            	HorizontalMemberMaterialGrade = $tds.eq(4).text(),
	            	HorizontalMemberLength = $tds.eq(5).text(),
	            	HorizontalMemberQuantity = $tds.eq(6).text(), 
	            	
	            	VerticalMemberShape = $tds.eq(7).text(),
	            	VerticalMemberProfile = $tds.eq(8).text(),
	            	VerticalMemberMaterialGrade = $tds.eq(9).text(),
	            	VerticalMemberLength = $tds.eq(10).text(),
	            	VerticalMemberQuantity = $tds.eq(11).text(), 		                	
	            	MiscPipeQuantity = $tds.eq(12).text(), 
	            	
                    MemberWeightlbs = $tds.eq(13).text(),
                    MemberWeightTons = $tds.eq(14).text(),                    
                    ConnectionType = $tds.eq(15).text(),		                    
                    ConnectingMember = $tds.eq(16).text(),	                
                    BoltGrade = $tds.eq(17).text(),		                   
                    BoltDia = $tds.eq(18).text(),
                    NoOfBolts = $tds.eq(19).text(),		                    
                    WeldType = $tds.eq(20).text(),
                    WeldSize = $tds.eq(21).text(),	
                    RefernceDrawing = $tds.eq(22).text(),
                    
                    HorizontalLenghtInFeet = $tds.eq(23).text(),
                    HorizontalLengthInInch = $tds.eq(24).text() == "" ? "0" : $tds.eq(24).text(),
                    HorizontalLengthInFraction = $tds.eq(25).text() == "" ? "0" : $tds.eq(25).text(), 
                    
                    VerticalLenghtInFeet = $tds.eq(26).text(),
                    VerticalLengthInInch = $tds.eq(27).text() == "" ? "0" : $tds.eq(27).text(),
                    VerticalLengthInFraction = $tds.eq(28).text() == "" ? "0" : $tds.eq(28).text();
                    
                  /*  WeldLengthInFeet = $tds.eq(30).text(),
                    WeldLengthInInch = $tds.eq(31).text() == "" ? "0" : $tds.eq(31).text(),
                    WeldLengthInFraction = $tds.eq(32).text() == "" ? "0" : $tds.eq(32).text();*/
		        	
		        	
		        	 $('#drpHorizontalMemberShape').val(getOptId('drpHorizontalMemberShape', HorizontalMemberShape));		        	
			        	$("#drpHorizontalMemberShape").trigger("change");	
			        	
			        	$('#drpHorizontalMemberProfile').val(getOptId('drpHorizontalMemberProfile', HorizontalMemberProfile)).change();
			        	$('#drpHorizontalMemberMaterialGrade').val(getOptId('drpHorizontalMemberMaterialGrade', HorizontalMemberMaterialGrade)).change();
			        	
			        	$('#txtHorizontalMemberQuantity').val(HorizontalMemberQuantity);		        	
			        	$('#txtHorizontalMemberLengthInFeet').val(HorizontalLenghtInFeet);		        	
			        	$('#drpHorizontalMemberLengthInInch').val(getOptId('drpHorizontalMemberLengthInInch', HorizontalLengthInInch));
			        	$('#drpHorizontalMemberLengthInFraction').val(getOptId('drpHorizontalMemberLengthInFraction', HorizontalLengthInFraction));		        	
			        	
			        	$('#drpVerticalMemberShape').val(getOptId('drpVerticalMemberShape', VerticalMemberShape));		        	
			        	$("#drpVerticalMemberShape").trigger("change");	
			        	
			        	$('#drpVerticalMemberProfile').val(getOptId('drpVerticalMemberProfile', VerticalMemberProfile)).change();
			        	$('#drpVerticalMemberMaterialGrade').val(getOptId('drpVerticalMemberMaterialGrade', VerticalMemberMaterialGrade)).change();
			        	
			        	$('#txtVerticalMemberQuantity').val(VerticalMemberQuantity);		        	
			        	$('#txtVerticalMemberLengthInFeet').val(VerticalLenghtInFeet);		        	
			        	$('#drpVerticalMemberLengthInInch').val(getOptId('drpVerticalMemberLengthInInch', VerticalLengthInInch));
			        	$('#drpVerticalMemberLengthInFraction').val(getOptId('drpVerticalMemberLengthInFraction', VerticalLengthInFraction));
			        	
			        	$('#txtMPSQuantity').val(MiscPipeQuantity);
			        	
		        	
		        	$('#ddlConnectionTypeMPS').val(getOptId('ddlConnectionTypeMPS', ConnectionType));	        	
		        	$("#ddlConnectionTypeMPS").trigger("change");
		        	
		        	
		        	if(ConnectionType == "Clip Angle")
		        	{
		        		
		        		$('#drpClipAngleProfile').val(getOptId('drpClipAngleProfile', ConnectingMember)).change();		        				        				        		
		        		$('#drpClipAngleBoltGrade').val(getOptId('drpClipAngleBoltGrade', BoltGrade)).change();	
		        		$('#drpClipAngleBoltDia').val(getOptId('drpClipAngleBoltDia', BoltDia.replace('"','')));		        		
		        		$('#drpClipAngleNoOfBoltRows').val(getOptId('drpClipAngleNoOfBoltRows', NoOfBolts));		        		
		        		$('#drpClipAngleWeldType').val(getOptId('drpClipAngleWeldType', WeldType));	
		        		$("#drpClipAngleWeldType").trigger("change");
		        		$('#drpClipAngleWeldSize').val(getOptId('drpClipAngleWeldSize', WeldSize.replace('"',''))).change();
			        	
		        	}
		        	else if(ConnectionType == "Shear Plate" || ConnectionType == "End Plate")
		        	{
		        		if(ConnectionType == "End Plate")	
		        			$('#drpShareEndPlateThickness').val(getOptId('drpShareEndPlateThickness', ConnectingMember.replace('"X8 1/2"','').replace("PL",''))).change();
		        		else
		        			$('#drpShareEndPlateThickness').val(getOptId('drpShareEndPlateThickness', ConnectingMember.replace('"X3 1/2"','').replace("PL",''))).change();
			        	
		        		$('#drpShareEndPlateBoltGrade').val(getOptId('drpShareEndPlateBoltGrade', BoltGrade)).change();	
		        		$('#drpShareEndPlateBoltDia').val(getOptId('drpShareEndPlateBoltDia', BoltDia.replace('"','')));		        		
		        		$('#drpShareEndPlateNoOfBoltRows').val(getOptId('drpShareEndPlateNoOfBoltRows', NoOfBolts));		        		
		        		$('#drpShareEndPlateWeldType').val(getOptId('drpShareEndPlateWeldType', WeldType));	
		        		$("#drpShareEndPlateWeldType").trigger("change");
		        		$('#drpShareEndPlateWeldSize').val(getOptId('drpShareEndPlateWeldSize', WeldSize.replace('"',''))).change();
		        		
		        	}		        
		        	else
		        	{
		        				        		
		        		$('#drpDirectlyWeldedWeldType').val(getOptId('drpDirectlyWeldedWeldType', WeldType));
		        		$("#drpDirectlyWeldedWeldType").trigger("change");
		        		$('#drpDirectlyWeldedWeldSize').val(getOptId('drpDirectlyWeldedWeldSize', WeldSize.replace('"',''))).change();		        		
			        	
			        /*	$('#txtDirectlyWeldedLengthInFeet').val(WeldLengthInFeet);			        	
			        	$('#drpDirectlyWeldedLengthInInch').val(getOptId('drpDirectlyWeldedLengthInInch', WeldLengthInInch));	
			        	$('#drpDirectlyWeldedLengthInFraction').val(getOptId('drpDirectlyWeldedLengthInFraction', WeldLengthInFraction));	*/
			        	
		        	}
		        	
		        	var drawings = RefernceDrawing.split(",");	        	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");	
		        	
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmDirectlyWelded').removeClass('submitted');        	
        	$('#frmShearEndPlate').removeClass('submitted'); 
        	$('#frmRefrenceDrawing').removeClass('submitted');  
        	$('#frmClipAngle').removeClass('submitted'); 
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmDirectlyWelded');
        	clearFormFields('frmShearEndPlate');
        	clearFormFields('frmClipAngle');
        	
        	$(".defaultValueZero").val(0);
        	
        	$('#ddlConnectionTypeMPS').val("connectionTypeMPSCA");        	        	
        	$("#ddlConnectionTypeMPS").trigger("change");        	
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	
        	$('#drpClipAngleBoltGrade').val(getOptId('drpClipAngleBoltGrade', BoGrGp)).change();
         	$('#drpClipAngleBoltDia').val(BoltDiaGP);

         	$('#drpShareEndPlateBoltGrade').val(getOptId('drpShareEndPlateBoltGrade', BoGrGp)).change();
         	$('#drpShareEndPlateBoltDia').val(BoltDiaGP);
         	
        	$('.addTR').text("Add");
        	isEdit = false;
        }
        
        //Validate Fields before saving
        function validateForm()
        {
        	        	
        	var connectionTypeFormId;
        	var gussetTypeFormId ="" ;
        	
        	$('#frmMain').addClass('submitted');
        	$('#frmRefrenceDrawing').addClass('submitted');
        	
        	if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSCA'){
        		$('#frmClipAngle').addClass('submitted');
        		$('#frmShearEndPlate').removeClass('submitted');
        		$('#frmDirectlyWelded').removeClass('submitted');
        		connectionTypeFormId = "frmClipAngle";
               
           }
           else if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSSP' || $('#ddlConnectionTypeMPS').val()=='connectionTypeMPSEP'){
        	    $('#frmShearEndPlate').addClass('submitted');
       			$('#frmClipAngle').removeClass('submitted');
       			$('#frmDirectlyWelded').removeClass('submitted');
       			connectionTypeFormId = "frmShearEndPlate";
           }             
           else if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSDW'){
        	   $('#frmDirectlyWelded').addClass('submitted');
        	   $('#frmShearEndPlate').removeClass('submitted');
      		   $('#frmClipAngle').removeClass('submitted');      			
      		   connectionTypeFormId = "frmDirectlyWelded";
           }
        	        	
        	var validated = true;
        	$('#frmMain').find(':input').each(function(){   
        		
           		var id  = $(this).prop('id');
           		if(id!="")
           		{
	           		var Value =  $('#' + id).val();   		
	           		var requ = $(this).prop('required');	
	           		   		
	           		if(Value == "" && requ == true)   		
	           			validated = false;
           		}
           	});
        	if(validated == true)
        	{
       		       			
        		var HirizontalLenghtInFeet = $("#txtHorizontalMemberLengthInFeet").val();
            	var HirizontalLenghtInInch = $("#drpHorizontalMemberLengthInInch").find("option:selected").text();
            	var HirizontalLenghtInFraction = $("#drpHorizontalMemberLengthInFraction").find("option:selected").text();
        	
            	var HirizontalLenghtvalidated = validateLength(HirizontalLenghtInFeet,HirizontalLenghtInInch,HirizontalLenghtInFraction,"Horizontal Length");
            	
            	var VerticalLenghtInFeet = $("#txtVerticalMemberLengthInFeet").val();
            	var VerticalLenghtInInch = $("#drpVerticalMemberLengthInInch").find("option:selected").text();
            	var VerticalLenghtInFraction = $("#drpVerticalMemberLengthInFraction").find("option:selected").text();
        	
            	var VerticalLenghtvalidated = validateLength(VerticalLenghtInFeet,VerticalLenghtInInch,VerticalLenghtInFraction,"Vertical Length");
            	
            	if(HirizontalLenghtvalidated == false || VerticalLenghtvalidated == false)
            		validated = false;
        	}
        	
        	$('#frmRefrenceDrawing').find(':input').each(function(){   
        		
           		var id  = $(this).prop('id');
           		if(id!="")
           		{
	           		var Value =  $('#' + id).val();   		
	           		var requ = $(this).prop('required');	
	           		   		
	           		if(Value == "" && requ == true)   		
	           			validated = false;
           		}
           	});

        	$('#'+connectionTypeFormId).find(':input').each(function(){   		
           		
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
        	
        	/*if(validated ==true && connectionTypeFormId == "frmDirectlyWelded")
    		{
	        	var Lenght = $("#txtDirectlyWeldedLengthInFeet").val();
	        	var Inch = $("#drpDirectlyWeldedLengthInInch").find("option:selected").text();
	        	var Fraction = $("#drpDirectlyWeldedLengthInFraction").find("option:selected").text();
	    	
	        	validated = validateLength(Lenght,Inch,Fraction,"Weld Length");
	        
    		}*/	
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
        	var HorizontalShape  = $("#drpHorizontalMemberShape").find("option:selected").text();  
        	var HorizontalProfile = $("#drpHorizontalMemberProfile").find("option:selected").text();  
        	var HorizontalMaterialGrade = $("#drpHorizontalMemberMaterialGrade").find("option:selected").text(); 
        	var HorizontalQuantity = $("#txtHorizontalMemberQuantity").val();
        	
        	var HorizontalLenghtInFeet = $("#txtHorizontalMemberLengthInFeet").val();
        	var HorizontalLengthInInch = $("#drpHorizontalMemberLengthInInch").find("option:selected").text();
        	var HorizontalLengthInFraction = $("#drpHorizontalMemberLengthInFraction").find("option:selected").text();
        	
        	var HorizontalTotalLength = feetInchFormater(HorizontalLenghtInFeet,HorizontalLengthInInch ,HorizontalLengthInFraction);   
        	
        	var VerticalShape  = $("#drpVerticalMemberShape").find("option:selected").text();  
        	var VerticalProfile = $("#drpVerticalMemberProfile").find("option:selected").text();  
        	var VerticalMaterialGrade = $("#drpVerticalMemberMaterialGrade").find("option:selected").text(); 
        	var VerticalQuantity = $("#txtVerticalMemberQuantity").val();
        	
        	var VerticalLenghtInFeet = $("#txtVerticalMemberLengthInFeet").val();
        	var VerticalLengthInInch = $("#drpVerticalMemberLengthInInch").find("option:selected").text();
        	var VerticalLengthInFraction = $("#drpVerticalMemberLengthInFraction").find("option:selected").text();
        	
        	var VerticalTotalLength = feetInchFormater(VerticalLenghtInFeet,VerticalLengthInInch ,VerticalLengthInFraction);   
        	
        	var MPSQuantity = $("#txtMPSQuantity").val();  
        	
        	var ConnectionType = $("#ddlConnectionTypeMPS").find("option:selected").text();
        	
        	var ConnectingMember = "", PlatethicknessDecimal = "";
        	var WeldType="", WeldSize="", WeldsizeDecimal = "";
        	var BoltGrade="",BoltDia="",NoOfBolts="", BoltDiaDecimal = "" ;
        	/*var WeldLength = "", WeldLengthInFeet = "", WeldLengthInInch="", WeldLengthInFraction="";*/
        	
        	if(ConnectionType == "Clip Angle")
        	{
        		
        		ConnectingMember = $("#drpClipAngleProfile").find("option:selected").text() ;
        		BoltGrade = $("#drpClipAngleBoltGrade").find("option:selected").text() ;
        		BoltDia = $("#drpClipAngleBoltDia").find("option:selected").text() + '"';
        		BoltDiaDecimal = $("#drpClipAngleBoltDia").val();
        		NoOfBolts = $("#drpClipAngleNoOfBoltRows").find("option:selected").text() ;
        		
        		WeldType =  $("#drpClipAngleWeldType").find("option:selected").text() ;
            	WeldSize =  $("#drpClipAngleWeldSize").val() == "" ? "" : $("#drpClipAngleWeldSize").find("option:selected").text() ;
            	
            	WeldsizeDecimal = $("#drpClipAngleWeldSize").val();
        		
        	}
        	else if(ConnectionType == "Shear Plate" || ConnectionType == "End Plate")
        	{
        		if(ConnectionType == "End Plate")
        			ConnectingMember = "PL" + $("#drpShareEndPlateThickness").find("option:selected").text() + '"X8 1/2"'; 
        		else
        			ConnectingMember = "PL"+ $("#drpShareEndPlateThickness").find("option:selected").text() + '"X3 1/2"'; 
        		
        		PlatethicknessDecimal = $("#drpShareEndPlateThickness").val();
        		BoltGrade = $("#drpShareEndPlateBoltGrade").find("option:selected").text() ;
        		BoltDia = $("#drpShareEndPlateBoltDia").find("option:selected").text() + '"';
        		BoltDiaDecimal = $("#drpShareEndPlateBoltDia").val();
        		
        		NoOfBolts = $("#drpShareEndPlateNoOfBoltRows").find("option:selected").text() ;
        		
        		WeldType =  $("#drpShareEndPlateWeldType").find("option:selected").text() ;
            	WeldSize =  $("#drpShareEndPlateWeldSize").val() == "" ? "" : $("#drpShareEndPlateWeldSize").find("option:selected").text() + '"';
            	
            	WeldsizeDecimal = $("#drpShareEndPlateWeldSize").val();
        	}
        	else
        	{
        		WeldType =  $("#drpDirectlyWeldedWeldType").find("option:selected").text() ;
            	WeldSize =  $("#drpDirectlyWeldedWeldSize").val() == "" ? "" : $("#drpDirectlyWeldedWeldSize").find("option:selected").text() + '"' ;
            	
            	WeldsizeDecimal = $("#drpDirectlyWeldedWeldSize").val();
            	
        		/*WeldLengthInFeet =  $("#txtDirectlyWeldedLengthInFeet").val();
           	    WeldLengthInInch =  $("#drpDirectlyWeldedLengthInInch").find("option:selected").text() ;
           	    WeldLengthInFraction =  $("#drpDirectlyWeldedLengthInFraction").find("option:selected").text() ;
           	 
           	   WeldLength = feetInchFormater(WeldLengthInFeet , WeldLengthInInch, WeldLengthInFraction);*/
        		
        	}
        	var ReferenceDrawing = $("#drpReferenceDrawing").val();
        	
        	var HorizontalProfileWeight =  $("#drpHorizontalMemberProfile").val().split(",");
        	var HorizontalLenght = parseFloat($("#txtHorizontalMemberLengthInFeet").val()) * 12 + parseFloat($("#drpHorizontalMemberLengthInInch").val()) + parseFloat($("#drpHorizontalMemberLengthInFraction").val());
        	var HorizontalQuantity = parseInt($("#txtHorizontalMemberQuantity").val());
        	
        	var VerticalProfileWeight =  $("#drpVerticalMemberProfile").val().split(",");
        	var VerticalLenght = parseFloat($("#txtVerticalMemberLengthInFeet").val()) * 12 + parseFloat($("#drpVerticalMemberLengthInInch").val()) + parseFloat($("#drpVerticalMemberLengthInFraction").val());
        	var VerticalQuantity = parseInt($("#txtVerticalMemberQuantity").val());
        	        	
        	var HorizontalWeight = (HorizontalProfileWeight[0] * HorizontalLenght * HorizontalQuantity) / 12;
        	        	
        	var VerticalWeight = (VerticalProfileWeight[0] * VerticalLenght * VerticalQuantity) / 12;
        	
        	var Total_Member_Weight_Lbs = (HorizontalWeight + VerticalWeight) * parseInt($('#txtMPSQuantity').val());
        	
        	var Total_Member_Weight_Tons = Total_Member_Weight_Lbs / 2000; 
        	  	
        	/*var FeetVal = Lenght * 12;
        	var InchVal = $("#drpLengthInInch").val();
        	var FractionVal = $("#drpLengthInFraction").val();
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);
        	        	
        	var ProfileWeight = $("#drpProfile").val().split(','); 
        	var MemberWeight_Lbs = (Total_Length * parseFloat(ProfileWeight[0]))/12;        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000;
        	        	
        	var Quantity = $("#txtQuantity").val();
        	
        	var Total_Member_Weight_Lbs = (MemberWeight_Lbs * parseInt(Quantity));        	
        	var Total_Member_Weight_Tons =(MemberWeight_Tons * parseInt(Quantity));*/
        	
        	
        	if(isEdit == true)
        	{
        		$('#tbleMiscPipesSupport').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit,  HorizontalShape, HorizontalProfile,HorizontalMaterialGrade, HorizontalTotalLength, HorizontalQuantity,
            			 VerticalShape,VerticalProfile,VerticalMaterialGrade,VerticalTotalLength,VerticalQuantity, MPSQuantity,
            			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),            			       			           			 
            			 ConnectionType,  ConnectingMember,
            			 BoltGrade, BoltDia,           			 
            			 NoOfBolts, WeldType, WeldSize,/*WeldLength,*/
            			 ReferenceDrawing,
            			 HorizontalLenghtInFeet,HorizontalLengthInInch,HorizontalLengthInFraction,
            			 VerticalLenghtInFeet,VerticalLengthInInch,VerticalLengthInFraction
            			 ], document.getElementById("row" + editRowNo));
        	
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
	                          '<td>'+ HorizontalShape + '</td>' +
	                          '<td>'+ HorizontalProfile + '</td>'+
	                          '<td>'+ HorizontalMaterialGrade + '</td>'+	                          
	                          '<td>'+ HorizontalTotalLength + '</td>'+
	                          '<td>'+ HorizontalQuantity  + '</td>'+	                          
	                          '<td>'+ VerticalShape + '</td>' +
	                          '<td>'+ VerticalProfile + '</td>'+
	                          '<td>'+ VerticalMaterialGrade + '</td>'+	                          
	                          '<td>'+ VerticalTotalLength + '</td>'+
	                          '<td>'+ VerticalQuantity  + '</td>'+ 
	                          '<td>'+ MPSQuantity  + '</td>'+ 	
	                          '<td>'+ Total_Member_Weight_Lbs.toFixed(3) +'</td>' + 
	      					  '<td>'+ Total_Member_Weight_Tons.toFixed(3) +'</td>'+
	                          '<td>'+ ConnectionType + '</td>'+
	                          '<td>'+ ConnectingMember  + '</td>'+	                          
				        	  '<td>'+ BoltGrade + '</td>' + 
	      					  '<td>'+ BoltDia + '</td>' +
	      					  '<td>'+ NoOfBolts + '</td>' + 
	      					  '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +
	      					  '<td>'+ ReferenceDrawing + '</td>' +  	
	      					  
	      					  '<td style="display:none;">'+ HorizontalLenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ HorizontalLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ HorizontalLengthInFraction + '</td>' +
		      				  
		      				  '<td style="display:none;">'+ VerticalLenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ VerticalLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ VerticalLengthInFraction + '</td>' + 
      					  '</tr>' ;
        		miscPipeSupporttable.row.add($(DataRow)).draw(false);
        	}
        	constructJsonArrayFromTable();
        	
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var MiscPipesSupport = [];
        	
        	var table = $("#tbleMiscPipesSupport tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),                    
			                HorizontalMemberShape = $tds.eq(2).text(),
			            	HorizontalMemberProfile = $tds.eq(3).text(),
			            	HorizontalMemberMaterialGrade = $tds.eq(4).text(),
			            	HorizontalMemberLength = $tds.eq(5).text(),
			            	HorizontalMemberQuantity = $tds.eq(6).text(), 
			            	
			            	VerticalMemberShape = $tds.eq(7).text(),
			            	VerticalMemberProfile = $tds.eq(8).text(),
			            	VerticalMemberMaterialGrade = $tds.eq(9).text(),
			            	VerticalMemberLength = $tds.eq(10).text(),
			            	VerticalMemberQuantity = $tds.eq(11).text(), 		                	
			            	MiscPipeQuantity = $tds.eq(12).text(), 
			            	
		                    MemberWeightlbs = $tds.eq(13).text(),
		                    MemberWeightTons = $tds.eq(14).text(),                    
		                    ConnectionType = $tds.eq(15).text(),		                    
		                    ConnectingMember = $tds.eq(16).text(),	                
		                    BoltGrade = $tds.eq(17).text(),		                   
		                    BoltDia = $tds.eq(18).text(),
		                    NoOfBolts = $tds.eq(19).text(),		                    
		                    WeldType = $tds.eq(20).text(),
		                    WeldSize = $tds.eq(21).text(),	                  
		                                     
		                    RefernceDrawing = $tds.eq(22).text(),
		                    
		                    HorizontalLenghtInFeet = $tds.eq(23).text(),
		                    HorizontalLengthInInch = $tds.eq(24).text(),
		                    HorizontalLengthInFraction = $tds.eq(25).text(), 
		                    
		                    VerticalLenghtInFeet = $tds.eq(26).text(),
		                    VerticalLengthInInch = $tds.eq(27).text(),
		                    VerticalLengthInFraction = $tds.eq(28).text();
                
                alert(ConnectionType);
                
                if(ConnectionType == "Shear Plate")                	
                	ConnectingMember = ConnectingMember.replace('"X3 1/2"','').replace("PL",'');
                else if(ConnectionType == "End Plate")                	
                	ConnectingMember = ConnectingMember.replace('"X8 1/2"','').replace("PL",'');
                
                alert(ConnectingMember);
               var MiscPipesSupportArray = {
            		   
			            		   [horizontalshape]: HorizontalMemberShape, 
			          			   [horizontalprofile]:HorizontalMemberProfile,
			          			   [horizontalgrade]:HorizontalMemberMaterialGrade,
			          			   [horizonatllength] :{[feet]:HorizontalLenghtInFeet, 
						          				 		[inches]:HorizontalLengthInInch, 
						          				 		[fraction]:HorizontalLengthInFraction,
						          				 		[fractiondecimal]: eval(HorizontalLengthInFraction)},			          				 		
			          			   [horizontalquantity] : HorizontalMemberQuantity, 				          			   
			          			   [verticalshape]: VerticalMemberShape, 
			          			   [verticalprofile]:VerticalMemberProfile,
			          			   [verticalgrade]:VerticalMemberMaterialGrade,
			          			   [verticallength] :{[feet]:HorizontalLenghtInFeet, 
						          				 		[inches]:HorizontalLengthInInch, 
						          				 		[fraction]:HorizontalLengthInFraction,
						          				 		[fractiondecimal]: eval(HorizontalLengthInFraction)},			          				 		
			          			   [verticalquantity] : VerticalMemberQuantity,   
			          			   [mpsquantity] : MiscPipeQuantity, 			          			   
						           [memberweightlbs] : MemberWeightlbs,
			                       [memberweightstons] : MemberWeightTons,			                       
			                       [connectiontype] : ConnectionType,				                       
			                       [connectingmember]:ConnectingMember, 
			                       
			                       [weldtype] : WeldType,			                       
			                       [weldsize] : WeldSize.replace('"',''),
			                       [boltgrade] : BoltGrade,			                       
			                       [boltdia] :BoltDia.replace('"',''), 
			                       [noofbolts] : NoOfBolts,			                       			                       
					    		  /* [weldlength] :{[feet]:WeldLengthInFeet, 
				 		    		 					[inches]:WeldLengthInInch, 
				 		    		 					[fraction]:WeldLengthInFraction,
				 		    		 					[fractiondecimal]: eval(WeldLengthInFraction)},	*/			 		    		 					
			                       		                        
			                       [referencedrawing] : RefernceDrawing
			                      
			        }                 
               MiscPipesSupport.push(MiscPipesSupportArray);
            });
                        
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',		
			    data: { miscsteelgroup:"MiscPipesSupport",
			    	    miscsteeljson:JSON.stringify({"MiscPipesSupport":MiscPipesSupport})
			    	  },			    	
				success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
            });
        	
        }
        
      //Shape Dropdown Change Event
        $("#drpHorizontalMemberShape").change(function() {
       	 
       	 resetDrodown('drpHorizontalMemberProfile');
       	 resetDrodown('drpHorizontalMemberMaterialGrade');
       	 if($("#drpHorizontalMemberShape").val() != "")
	 	     {
       		 
       		 if($("#drpHorizontalMemberShape").val() == "C")
	        	 {
	        		 if(C_Profile.length == 0 || C_MaterialGrade.length == 0)
	        		 {
	        			 C_Profile = getProfiles($("#drpHorizontalMemberShape").val());
	        			 C_MaterialGrade  = getMaterialGrade($("#drpHorizontalMemberShape").val());
	        		 }
	        		 fillProfileDropdownList('drpHorizontalMemberProfile',C_Profile);
	        		 fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',C_MaterialGrade);	        		 
	        		 
	        	 }
       		 else if($("#drpHorizontalMemberShape").val() == "L")
	        	 {
	        		 if(L_Profile.length == 0 || L_MaterialGrade.length == 0)
	        		 {
	        			 L_Profile = getProfiles($("#drpHorizontalMemberShape").val());
	        			 L_MaterialGrade  = getMaterialGrade($("#drpHorizontalMemberShape").val());
	        		 }
	        		 fillProfileDropdownList('drpHorizontalMemberProfile',L_Profile);
	        		 fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',L_MaterialGrade);	        		 
	        		 
	        	 }  
       		else if($("#drpHorizontalMemberShape").val() == "2L")
		       	 {
		       		 if(L2_Profile.length == 0 || L_MaterialGrade.length == 0)
		       		 {
		       			 L2_Profile = getProfiles($("#drpHorizontalMemberShape").val());
		       			 L_MaterialGrade  = getMaterialGrade("L");
		       		 }
		       		 fillProfileDropdownList('drpHorizontalMemberProfile',L2_Profile);
		       		 fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',L_MaterialGrade);	        		 
		       		 
		       	 }
       		else if($("#drpHorizontalMemberShape").val() == "HSS")
	       	 {
	       		 if(HSS_Profile.length == 0 || HSS_MaterialGrade.length == 0 || HSS_MaterialGrade2.length ==0)
	       		 {
	       			 HSS_Profile = getProfiles($("#drpHorizontalMemberShape").val());
	       			 HSS_MaterialGrade  = getMaterialGrade("HSS_Rect.");
	       			 HSS_MaterialGrade2  = getMaterialGrade("HSS_Round");
	       		 }
	       		 fillProfileDropdownList('drpHorizontalMemberProfile',HSS_Profile);
	       		 fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',HSS_MaterialGrade);
	       		 fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',HSS_MaterialGrade2);
	       		
	       	 }
       		 
       		else if($("#drpHorizontalMemberShape").val().trim() == "W")
	       		{
		  			 
		       		 if(W_Profile.length == 0 || W_MaterialGrade.length == 0)
		       		 {
		       			 W_Profile = getProfiles($("#drpHorizontalMemberShape").val());
		       			 W_MaterialGrade  = getMaterialGrade($("#drpHorizontalMemberShape").val());
		       		 }
		       		 fillProfileDropdownList('drpHorizontalMemberProfile',W_Profile);
		       		 fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',W_MaterialGrade);	        		 
	       		 
	       		}
       		 
	 	     }
        });
		
      //Shape Dropdown Change Event
        $("#drpVerticalMemberShape").change(function() {
       	 
       	 resetDrodown('drpVerticalMemberProfile');
       	 resetDrodown('drpVerticalMemberMaterialGrade');
       	 if($("#drpVerticalMemberShape").val() != "")
	 	     {
       		 if($("#drpVerticalMemberShape").val() == "C")
	        	 {
	        		 if(C_Profile.length == 0 || C_MaterialGrade.length == 0)
	        		 {
	        			 C_Profile = getProfiles($("#drpVerticalMemberShape").val());
	        			 C_MaterialGrade  = getMaterialGrade($("#drpVerticalMemberShape").val());
	        		 }
	        		 fillProfileDropdownList('drpVerticalMemberProfile',C_Profile);
	        		 fillMaterialGradeDropdownList('drpVerticalMemberMaterialGrade',C_MaterialGrade);	        		 
	        		 
	        	 }
       		 else if($("#drpVerticalMemberShape").val() == "L")
	        	 {
	        		 if(L_Profile.length == 0 || L_MaterialGrade.length == 0)
	        		 {
	        			 L_Profile = getProfiles($("#drpVerticalMemberShape").val());
	        			 L_MaterialGrade  = getMaterialGrade($("#drpVerticalMemberShape").val());
	        		 }
	        		 fillProfileDropdownList('drpVerticalMemberProfile',L_Profile);
	        		 fillMaterialGradeDropdownList('drpVerticalMemberMaterialGrade',L_MaterialGrade);	        		 
	        		 
	        	 }
       		 else if($("#drpVerticalMemberShape").val() == "W")
	        	 {
	        		 if(W_Profile.length == 0 || W_MaterialGrade.length == 0)
	        		 {
	        			 W_Profile = getProfiles($("#drpVerticalMemberShape").val());
	        			 W_MaterialGrade  = getMaterialGrade($("#drpVerticalMemberShape").val());
	        		 }
	        		 fillProfileDropdownList('drpVerticalMemberProfile',W_Profile);
	        		 fillMaterialGradeDropdownList('drpVerticalMemberMaterialGrade',W_MaterialGrade);	        		 
	        		 
	        	 }
       		else if($("#drpVerticalMemberShape").val() == "2L")
       		  {
	       		 if(L2_Profile.length == 0 || L_MaterialGrade.length == 0)
	       		 {
	       			 L2_Profile = getProfiles($("#drpVerticalMemberShape").val());
	       			 L_MaterialGrade  = getMaterialGrade("L");
	       		 }
	       		 fillProfileDropdownList('drpVerticalMemberProfile',L2_Profile);
	       		 fillMaterialGradeDropdownList('drpVerticalMemberMaterialGrade',L_MaterialGrade);	        		 
	       		 
	       	  }
       		else if($("#drpVerticalMemberShape").val() == "HSS")
	       	 {
	       		 if(HSS_Profile.length == 0 || HSS_MaterialGrade.length == 0 || HSS_MaterialGrade2.length ==0)
	       		 {
	       			 HSS_Profile = getProfiles($("#drpVerticalMemberShape").val());
	       			 HSS_MaterialGrade  = getMaterialGrade("HSS_Rect.");
	       			 HSS_MaterialGrade2  = getMaterialGrade("HSS_Round");
	       		 }
	       		 fillProfileDropdownList('drpVerticalMemberProfile',HSS_Profile);
	       		 fillMaterialGradeDropdownList('drpVerticalMemberMaterialGrade',HSS_MaterialGrade);
	       		 fillMaterialGradeDropdownList('drpVerticalMemberMaterialGrade',HSS_MaterialGrade2);
	       		
	       	 }
       		 
	 	   }
        });
        
        		 
		 $("#drpClipAngleWeldType").change( function(){
	           if($('#drpClipAngleWeldType').val()=='CJP'){
	                $("#divWeldSize").hide(); 
	                $("#drpClipAngleWeldSize").val('');
	           }
	           else {
	           	 $("#divWeldSize").show();
	           }
	           
	       });
		 
		 $("#drpShareEndPlateWeldType").change( function(){
	           if($('#drpShareEndPlateWeldType').val()=='CJP'){
	                $("#divShearPlateWeldSize").hide(); 
	                $("#drpShareEndPlateWeldSize").val('');
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
        