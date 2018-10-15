var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var tableGirts = "";

var C_Profile = [];
var HSS_Profile = [];
var MCC_Profile = [];
var S_Profile = [];
var W_Profile = [];

var C_MaterialGrade = [];
var HSS_MaterialGrade = [];
var HSS_MaterialGrade2 = [];
var MCC_MaterialGrade = [];
var S_MaterialGrade = [];
var W_MaterialGrade = [];

var L_Profile = [];
var L2_Profile = [];
var WT_Profile =[];

var shape = "shapes",
	profile1 = "profile1",
	profile2 = "profile2",
	grade1 = "grade1",
	grade2 = "grade2",
	quantity = "quantity",
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr",
	typicalattachment = "typicalattachment",
	clipangleprofile = "clipangleprofile",
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
	memberweightstons = "memberweightstons",	
	length = "length",
	pitchlength = "pitchlength",
	weldlength = "weldlength",
	weldtypebetweenmember = "weldtypebetweenmember",
	weldsizebetweenmember = "weldsizebetweenmember";
	connectionmethod = "connectionmethod";
	connectionweldlength = "connectionweldlength";
	connectionweldsize = "connectionweldsize";
	connectionweldtype="connectionweldtype";

$(document).ready(function(){	
	
	try	{
		if ($.fn.DataTable.isDataTable("#tableGirts")) {
			  $('#tableGirts').DataTable().clear().destroy();
			}		
	}
	catch(err){
	
	}
	
	tableGirts = $('#tableGirts').DataTable({	 	       		
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
		
		$("#GirtConnectiontype").trigger("change");
		   
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
      
});    

		//Shape Dropdown Change Event
		 $("#drpShape").change(function() 
		 {  
		        	 
		     resetDrodown('drpProfile1');
		     resetDrodown('drpProfile2');
		     resetDrodown('drpProfile3');
		        	 
		     resetDrodown('drpMaterialGrade1');
		     resetDrodown('drpMaterialGrade2');
		     resetDrodown('drpMaterialGrade3');
		        	 
		 	       	
		 	if($("#drpShape").val() != "")
		 	{
		 	      		
		 	      		if($("#drpShape").val() == "C")
			        	 {
			        		 if(C_Profile.length == 0 || C_MaterialGrade.length == 0)
			        		 {
			        			 C_Profile = getProfiles($("#drpShape").val());
			        			 C_MaterialGrade  = getMaterialGrade($("#drpShape").val());
			        		 }
			        		 fillProfileDropdownList('drpProfile1',C_Profile);
			        		 fillMaterialGradeDropdownList('drpMaterialGrade1',C_MaterialGrade);
			        		 
			        		 $("#profile2ForShape").hide();
			    	         $("#profile1ForShape").show();
			    	         
			    	         $("label[for = weldsize]").text("Weld Size between Members");
			        		 
			        	 }
		 	      		else if($("#drpShape").val() == "HSS")
			        	 {
			        		 if(HSS_Profile.length == 0 || HSS_MaterialGrade.length == 0 || HSS_MaterialGrade2.length ==0)
			        		 {
			        			 HSS_Profile = getProfiles($("#drpShape").val());
			        			 HSS_MaterialGrade  = getMaterialGrade("HSS_Rect.");
			        			 HSS_MaterialGrade2  = getMaterialGrade("HSS_Round");
			        		 }
			        		 fillProfileDropdownList('drpProfile1',HSS_Profile);
			        		 fillMaterialGradeDropdownList('drpMaterialGrade1',HSS_MaterialGrade);
			        		 fillMaterialGradeDropdownList('drpMaterialGrade1',HSS_MaterialGrade2);
			        		 
			        		 $("#profile2ForShape").hide();
			    	         $("#profile1ForShape").show();
			    	         
			    	         $("label[for = weldsize]").text("Weld Size between Members");
			        		 
			        	 }
		 	      		else if($("#drpShape").val() == "MC")
			        	 {
			        		 if(MCC_Profile.length == 0 || MCC_MaterialGrade.length == 0)
			        		 {
			        			 MCC_Profile = getProfiles($("#drpShape").val());
			        			 MCC_MaterialGrade  = getMaterialGrade($("#drpShape").val());
			        		 }
			        		 fillProfileDropdownList('drpProfile1',MCC_Profile);
			        		 fillMaterialGradeDropdownList('drpMaterialGrade1',MCC_MaterialGrade);
			        		 
			        		 $("#profile2ForShape").hide();
			    	         $("#profile1ForShape").show();
			    	         
			    	         $("label[for = weldsize]").text("Weld Size between Members");
			        		 
			        	 }
		 	      		else if($("#drpShape").val() == "W")
			        	 {
			        		 if(W_Profile.length == 0 || W_MaterialGrade.length == 0)
			        		 {
			        			 W_Profile = getProfiles($("#drpShape").val());
			        			 W_MaterialGrade  = getMaterialGrade($("#drpShape").val());
			        		 }
			        		 fillProfileDropdownList('drpProfile1',W_Profile);
			        		 fillMaterialGradeDropdownList('drpMaterialGrade1',W_MaterialGrade);
			        		 
			        		 $("#profile2ForShape").hide();
			    	         $("#profile1ForShape").show();
			    	         
			    	         $("label[for = weldsize]").text("Weld Size between Members");
			        		 
			        	 }
		 	      		else if($("#drpShape").val() == "W WITH CAP CHANNEL")
			        	 {
			        		 if((W_Profile.length == 0 || C_Profile.length == 0) || 
			        			(W_MaterialGrade.length == 0 || C_MaterialGrade.length ==0))
			        		 {
			        			 W_Profile = getProfiles("W");
			        			 W_MaterialGrade  = getMaterialGrade("W");
			        			 
			        			 C_Profile = getProfiles("C");
			        			 C_MaterialGrade  = getMaterialGrade("C");
			        		 }
			        		 fillProfileDropdownList('drpProfile2',W_Profile);
			        		 fillProfileDropdownList('drpProfile3',C_Profile);
			        		 
			        		 fillMaterialGradeDropdownList('drpMaterialGrade2',W_MaterialGrade);
			        		 fillMaterialGradeDropdownList('drpMaterialGrade3',C_MaterialGrade);
			        		 
			        		 $("#profile2ForShape").show();
			     	         $("#profile1ForShape").hide();
			     	         
			     	        $("label[for = weldsize]").text("Weld size/Effective throat between members");
			        		 
			        	 }
		 	      		else if($("#drpShape").val() == "S WITH CAP CHANNEL")
			        	 {
			        		 if((S_Profile.length == 0 || C_Profile.length == 0) || 
			        			(S_MaterialGrade.length == 0 || C_MaterialGrade.length ==0))
			        		 {
			        			 S_Profile = getProfiles("S");
			        			 S_MaterialGrade  = getMaterialGrade("S");
			        			 
			        			 C_Profile = getProfiles("C");
			        			 C_MaterialGrade  = getMaterialGrade("C");
			        		 }
			        		 fillProfileDropdownList('drpProfile2',S_Profile);
			        		 fillProfileDropdownList('drpProfile3',C_Profile);
			        		 
			        		 fillMaterialGradeDropdownList('drpMaterialGrade2',S_MaterialGrade);
			        		 fillMaterialGradeDropdownList('drpMaterialGrade3',C_MaterialGrade);
			        		 
			        		 $("#profile2ForShape").show();
			     	         $("#profile1ForShape").hide();
			     	         
			     	        $("label[for = weldsize]").text("Weld size/Effective throat between members");
			        		 
			        	 }		 	      		
		 	       	}
		 	      	else
	 	      		{
	 	      			$("#profile2ForShape").hide();
		    	        $("#profile1ForShape").show();
	 	      		}
		}); 
       
		 $("#GirtConnectiontype").change(function() 
		 { 
			 
			 resetDrodown('drpClipAngleProfile');
			 
			 if($("#GirtConnectiontype").val() == "GWT")
        	 {
        		 if(WT_Profile.length == 0)
        		 {
        			 WT_Profile = getProfiles("WT");
        		 }
        		 fillProfileDropdownList('drpClipAngleProfile',WT_Profile);
        	 }
			 else
			 {
				 if(L_Profile.length == 0)// || L2_Profile.length == 0
        		 {
					 L_Profile = getProfiles("L");
					 //L2_Profile = getProfiles("2L");
        		 }
        		 fillProfileDropdownList('drpClipAngleProfile',L_Profile);
        		 //fillProfileDropdownList('drpClipAngleProfile',L2_Profile);
				
			 }			
		 });
       
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableGirts tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				    rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;
		        			        	
		        	var $tds = $(this).find('td'),                    
		        	 Shape = $tds.eq(2).text(),
		                Profile = $tds.eq(3).text(),
		                MaterialGrade = $tds.eq(4).text(),
		                Length = $tds.eq(5).text(),
		                Quantity = $tds.eq(6).text(),  
		                MemberWeightlbs = $tds.eq(7).text(),
				        MemberWeightTons = $tds.eq(8).text(),  
				        WeldTypeBetweenMembers = $tds.eq(9).text(),
				        WeldSizeBetweenMembers = $tds.eq(10).text(),	
				        PitchLengthBetweenMembers = $tds.eq(11).text(),
				        WeldLengthBetweenMembers = $tds.eq(12).text(),
				        ConnectionType = $tds.eq(13).text(),
				        ConnectionMemberProfile = $tds.eq(14).text(),	
				        WeldType = $tds.eq(15).text(),
				        WeldSize = $tds.eq(16).text()=="" ? "-Select-" :  $tds.eq(16).text(), 
				        
				        ConnectionMaterial = $tds.eq(17).text(), 
				        BoltGrade = $tds.eq(18).text(),
				        BoltDia = $tds.eq(19).text(),                
				        NoOfBoltRows = $tds.eq(20).text(),	
				        
				        ConnectingWeldType = $tds.eq(21).text(),
				        ConnectingWeldSize = $tds.eq(22).text(),
				        ConnectingWeldLength = $tds.eq(23).text(),
				        
				        LengthInFeet = $tds.eq(24).text(),
	                    LengthInInch = $tds.eq(25).text()=="" ? "0" :  $tds.eq(25).text(),                    
	                    LengthInFraction = $tds.eq(26).text()== "" ?"0" :  $tds.eq(26).text(),
	                    
	                    PitchLengthBetweenMembersInFeet = $tds.eq(27).text(),                    
	                    PitchLengthBetweenMembersInInch = $tds.eq(28).text() == "" ? "0" :  $tds.eq(28).text(),
	                    PitchLengthBetweenMembersInFraction = $tds.eq(29).text() == "" ? "0" :  $tds.eq(29).text(),
	                    
	                    WeldLengthBetweenMembersInFeet = $tds.eq(30).text(),                    
	                    WeldLengthBetweenMembersInInch = $tds.eq(31).text() == "" ? "0" :  $tds.eq(31).text(),
	                    WeldLengthBetweenMembersInFraction = $tds.eq(32).text() == "" ? "0" :  $tds.eq(32).text(),
	                    
	                    Profile1 = $tds.eq(33).text(),
	                    Profile2 = $tds.eq(34).text(),
	                    
	                    MaterialGrade1 = $tds.eq(35).text(),
	                    MaterialGrade2 = $tds.eq(36).text(),
	                    RefernceDrawing = $tds.eq(37).text(),
	                    
	                    Weldsizedecimal1 = $tds.eq(38).text(),
	                    Boltdiadecimal= $tds.eq(39).text(),
	                    Weldsizedecimal2 = $tds.eq(40).text(),
	                    
	                    ConnectingWeldLengthInFeet = $tds.eq(41).text(),                    
	                    ConnectingWeldLengthInInch = $tds.eq(42).text(),
	                    ConnectingWeldLengthInFraction = $tds.eq(43).text();
		        	
		        	$('#drpShape').val(getOptId('drpShape', Shape)).trigger('change');	
		        	$("#drpShape").trigger("change");
		        	
		        	
		        	if(Shape == 'W WITH CAP CHANNEL' || Shape == 'S WITH CAP CHANNEL')
		        	{
		        			        		
		        		$('#drpProfile2').val(getOptId('drpProfile2',Profile1)).trigger('change');		        		
		        		$('#drpProfile3').val(getOptId('drpProfile3',Profile2)).trigger('change');
		        		
		        		
		        		$('#drpMaterialGrade2').val(getOptId('drpMaterialGrade2',MaterialGrade1)).trigger('change');
		        		$('#drpMaterialGrade3').val(getOptId('drpMaterialGrade3',MaterialGrade2)).trigger('change');
		        		
		        		    		
		        		$('#drpWeldTypeBetweenMember').val(getOptId('drpWeldTypeBetweenMember', WeldTypeBetweenMembers));
		        		$('#drpWeldTypeBetweenMember').trigger("change");	
		        		
		        		$('#drpWeldSizeBetweenMember').val(getOptId('drpWeldSizeBetweenMember', WeldSizeBetweenMembers.replace('"','')));
		        			        		
		        		
		        		$('#txtPitchLengthBetweenMemberFeet').val(PitchLengthBetweenMembersInFeet);		        		
		        		$('#drpPitchLengthBetweenMemberInch').val(getOptId('drpPitchLengthBetweenMemberInch', PitchLengthBetweenMembersInInch));		        		
		        		$('#drpPitchLengthBetweenMemberFraction').val(getOptId('drpPitchLengthBetweenMemberFraction', PitchLengthBetweenMembersInFraction));
		        		
		        		$('#txtWeldLengthBetweenMemberFeet').val(WeldLengthBetweenMembersInFeet);		        		
		        		$('#drpWeldLengthBetweenMemberInch').val(getOptId('drpWeldLengthBetweenMemberInch', WeldLengthBetweenMembersInInch));		        		
		        		$('#drpWeldLengthBetweenMemberFraction').val(getOptId('drpWeldLengthBetweenMemberFraction', WeldLengthBetweenMembersInFraction));		        		
		        	
		        	}
		        	else
		        	{
		        		$('#drpProfile1').val(getOptId('drpProfile1',Profile1)).trigger('change');			        		
		        		$('#drpMaterialGrade1').val(getOptId('drpMaterialGrade1',MaterialGrade1)).trigger('change');
		        		
		        	}
		        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLength').val(LengthInFeet);		        	
		        	$('#drpInch').val(getOptId('drpInch',LengthInInch));		        	
		        	$('#drpFraction').val(getOptId('drpFraction',LengthInFraction));
		        	
		        	$('#GirtConnectiontype').val(getOptId('GirtConnectiontype',ConnectionType));		        	
		        	$("#GirtConnectiontype").trigger("change");		        	
		        	
		        	$('#drpClipAngleProfile').val(getOptId('drpClipAngleProfile',ConnectionMemberProfile)).trigger('change');
		        	
		        	$('#drpWeldType').val(getOptId('drpWeldType',WeldType));
		        	$("#drpWeldType").trigger("change");	
		        	
		        	$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize.replace('"',''))).change();	
		        	
		        	$('#drpConnectionMethod').val(getOptId('drpConnectionMethod', ConnectionMaterial));
		        	$("#drpConnectionMethod").trigger("change");
		        	
		        	if(ConnectionMaterial == "Field Bolted")
		        	{
		        		$('#drpBoltGrade').val(getOptId('drpBoltGrade',BoltGrade)).change();    	
			        	$('#drpNoOfBoltRows').val(getOptId('drpNoOfBoltRows',NoOfBoltRows));		        	
			        	$('#drpBoltDia').val(getOptId('drpBoltDia',BoltDia.replace('"','')));	
		        	}
		        	else
		        	{
		        				        		
		        		$('#drpConnectionWeldType').val(getOptId('drpConnectionWeldType',ConnectingWeldType));
			        	$("#drpConnectionWeldType").trigger("change");	
			        	
			        	$('#drpConnectionWeldSize').val(getOptId('drpConnectionWeldSize', ConnectingWeldSize.replace('"',''))).change();
			        	
			        	$('#txtConnectionWeldLength').val(ConnectingWeldLengthInFeet);		        		
		        		$('#drpConnectionWeldLengthInch').val(getOptId('drpConnectionWeldLengthInch', ConnectingWeldLengthInInch));		        		
		        		$('#drpConnectionWeldLengthFraction').val(getOptId('drpConnectionWeldLengthFraction', ConnectingWeldLengthInFraction));
		        	
		        	}
		        	
		        	var drawings = RefernceDrawing.split(",");	       	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");
		        	
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmprofile2ForShape').removeClass('submitted');        	
        	$('#frmProfileForShape').removeClass('submitted');        	
        	$('#frmMain2').removeClass('submitted');
        	$('#frmClipAngle').removeClass('submitted');
        	$('#frmConnectionWelded').removeClass('submitted');
        	$('#frmConnectionBolted').removeClass('submitted');
        	
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmprofile2ForShape');        	
        	clearFormFields('frmProfileForShape');
        	clearFormFields('frmMain2');
        	clearFormFields('frmClipAngle');
        	clearFormFields('frmConnectionWelded');
        	clearFormFields('frmConnectionBolted');
        	
        	$("#drpShape").val('');
        	$("#drpShape").trigger("change");
        	
        	$(".defaultValueZero").val(0);  
        	
            $("#GirtConnectiontype").val("GWT");
            $("#GirtConnectiontype").trigger("change");            
                    	
            $("#drpConnectionMethod").val("FieldBolted");
            $("#drpConnectionMethod").trigger("change"); 
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	
        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoGrGp)).change();
       		$('#drpBoltDia').val(BoltDiaGP);
        	
        	$('.addTR').text("Add");
        	isEdit = false;
        	Selected = [];
        }
        
        //Validate Fields before saving
        function validateForm()
        {
        	        	
        	var profileFormId;        	
        	
        	$('#frmMain').addClass('submitted');        	
        	
        	if($('#drpShape').val() ==  'W WITH CAP CHANNEL' || $('drpShape').val() ==  'S WITH CAP CHANNEL')
        	{
        		$('#frmprofile2ForShape').addClass('submitted'); 
        		$('#frmProfileForShape').removeClass('submitted');
        		
        		profileFormId = "frmprofile2ForShape";        			
        	}
        	else
        	{
        		$('#frmProfileForShape').addClass('submitted');
        		$('#frmprofile2ForShape').removeClass('submitted');
        		
        		profileFormId = "frmProfileForShape";
        	}
        	
        	
        	$('#frmMain2').addClass('submitted');
        	$('#frmClipAngle').addClass('submitted');
        	
        	
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
        	var connectionFormId = "";
        
        	if($('#drpConnectionMethod').val() == "FieldBolted")
        	{
        		$('#frmConnectionBolted').addClass('submitted'); 
        		$('#frmConnectionWelded').removeClass('submitted');
        		
        		connectionFormId = "frmConnectionBolted";        		
        		
        	}
        	else
        	{
        		$('#frmConnectionWelded').addClass('submitted'); 
        		$('#frmConnectionBolted').removeClass('submitted');
        		
        		connectionFormId = "frmConnectionWelded";        	
        		
        	}
        	
        	$('#'+connectionFormId).find(':input').each(function(){   
        		
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
        	
        	if(validated)
        	{
       			if($("#drpShape").val() == "S WITH CAP CHANNEL" || $("#drpShape").val() == "W WITH CAP CHANNEL")
       			{
           			var PicthLenght = $("#txtPitchLengthBetweenMemberFeet").val();
                	var PitchInch = $("#drpPitchLengthBetweenMemberInch").find("option:selected").text();
                	var PitchFraction = $("#drpPitchLengthBetweenMemberFraction").find("option:selected").text();
            	
                	var validPitchLength = validateLength(PicthLenght,PitchInch,PitchFraction,"Pitch Length");
                	
                	var WeldLenght = $("#txtWeldLengthBetweenMemberFeet").val();
                	var WeldInch = $("#drpWeldLengthBetweenMemberInch").find("option:selected").text();
                	var WeldFraction = $("#drpWeldLengthBetweenMemberFraction").find("option:selected").text();
            	
                	var validWeldLength = validateLength(WeldLenght,WeldInch,WeldFraction,"Weld Length");
                	

                	if(validPitchLength == false || validWeldLength == false)
                		validated = false;
                	
                	
                	var TotalPitchLength = parseFloat(PicthLenght)*12 + parseFloat(PitchInch) + parseFloat($("#drpPitchLengthBetweenMemberFraction").val());
         			
        			var TotalWeldLength= parseFloat(WeldLenght)*12 + parseFloat(WeldInch) + parseFloat($("#drpWeldLengthBetweenMemberFraction").val());
        		    			
        			
            		var valid = validatePitchWeldLenght(TotalPitchLength,TotalWeldLength); 
                	if(valid == false)
                		validated = false;
       			}
       			
        		var Lenght = $("#txtLength").val();
            	var Inch = $("#drpInch").find("option:selected").text();
            	var Fraction = $("#drpFraction").find("option:selected").text();
        	
            	var validLength = validateLength(Lenght,Inch,Fraction,"Length");
            	if(validLength == false)
            		validated = false;

            	
        	}
        	
        	
        	$('#'+profileFormId).find(':input').each(function(){   		
           		
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
        	$('#frmMain2').find(':input').each(function(){   
        		
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
        	$('#frmClipAngle').find(':input').each(function(){   
        		
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
        	
        	PreviouslyEnteredData = [];
        	
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
        	
        	var Profile1="", Profile2="", 
        		MaterialGrade1="", MaterialGrade2="",
        		WeldTypeBetweenMembers="",WeldSizeBetweenMembers="",
        		PitchLenghtBetweenMembersInFeet = "",PitchLenghtBetweenMembersInInch = "", PitchLenghtBetweenMembersInFraction="",
        		WeldLenghtBetweenMembersInFeet = "",WeldLenghtBetweenMembersInInch = "", WeldLenghtBetweenMembersInFraction="",
        		PitchLengthBetweenMembers ="" ,WeldLengthBetweenMembers="";
        	
        	var Profile="", MaterialGrade = "";
        		
        	if(Shape == 'W WITH CAP CHANNEL' || Shape == 'S WITH CAP CHANNEL')
        		{
        			Profile1 = $("#drpProfile2").find("option:selected").text(); 
        			Profile2 = $("#drpProfile3").find("option:selected").text();
        			
        			Profile = Profile1 + " / " + Profile2;
        			
        			MaterialGrade1 = $("#drpMaterialGrade2").find("option:selected").text(); 
        			MaterialGrade2 = $("#drpMaterialGrade3").find("option:selected").text();
        			
        			MaterialGrade = MaterialGrade1 + " / " + MaterialGrade2;
        			
        			WeldTypeBetweenMembers = $("#drpWeldTypeBetweenMember").find("option:selected").text(); 
        			WeldSizeBetweenMembers = $("#drpWeldSizeBetweenMember").val() == "" ? "" : $("#drpWeldSizeBetweenMember").find("option:selected").text() + '"'; 
        			
        			PitchLenghtBetweenMembersInFeet = $("#txtPitchLengthBetweenMemberFeet").val(); 
        			PitchLenghtBetweenMembersInInch = $("#drpPitchLengthBetweenMemberInch").find("option:selected").text(); 
        			PitchLenghtBetweenMembersInFraction = $("#drpPitchLengthBetweenMemberFraction").find("option:selected").text(); 
        			
        			PitchLengthBetweenMembers = feetInchFormater(PitchLenghtBetweenMembersInFeet, PitchLenghtBetweenMembersInInch, PitchLenghtBetweenMembersInFraction);
        			
        			WeldLenghtBetweenMembersInFeet = $("#txtWeldLengthBetweenMemberFeet").val(); 
        			WeldLenghtBetweenMembersInInch = $("#drpWeldLengthBetweenMemberInch").find("option:selected").text(); 
        			WeldLenghtBetweenMembersInFraction = $("#drpWeldLengthBetweenMemberFraction").find("option:selected").text(); 
        			
        			WeldLengthBetweenMembers= feetInchFormater(WeldLenghtBetweenMembersInFeet, WeldLenghtBetweenMembersInInch,WeldLenghtBetweenMembersInFraction);
        		
        		}
        	else
        		{
        			Profile1 = $("#drpProfile1").find("option:selected").text();
        			Profile = Profile1;
        			
        			MaterialGrade1 = $("#drpMaterialGrade1").find("option:selected").text();         			
        			MaterialGrade =MaterialGrade1;
        		}
        	
        	var Quantity = $("#txtQuantity").val(); 
        	var LengthInFeet = $("#txtLength").val(); 
        	var LengthInInch = $("#drpInch").find("option:selected").text(); 
        	var LengthInFraction = $("#drpFraction").find("option:selected").text(); 
        	
        	var TotalLength = feetInchFormater(LengthInFeet, LengthInInch, LengthInFraction);        	
        	var ConnectionType = $("#GirtConnectiontype").find("option:selected").text();         	
        	var ClipAngleProfile = $("#drpClipAngleProfile").find("option:selected").text();
        	
        	var WeldType = $("#drpWeldType").find("option:selected").text();         	
        	var WeldSize = $("#drpWeldSize").val() == "" ? "" :  $("#drpWeldSize").find("option:selected").text() + '"';
        	
        	var ConnectionMaterial = $("#drpConnectionMethod").find("option:selected").text();         	
        	
        	var BoltGrade ="",NoOfBoltRows = "" ,BoltDia = "";
        	var ConnectingWeldType = "",ConnectingWeldSize = "",
        	ConnectingWeldLengthInFeet = "",ConnectingWeldLengthInInch = "",ConnectingWeldLengthInFraction = "",ConnectingWeldLength = "";
        	   
        	if(ConnectionMaterial == "Field Bolted")
        	{
	        	BoltGrade = $("#drpBoltGrade").find("option:selected").text(); 
	        	NoOfBoltRows = $("#drpNoOfBoltRows").find("option:selected").text(); 
	        	BoltDia = $("#drpBoltDia").find("option:selected").text() + '"'; 
        	}
        	else
        	{
	        	ConnectingWeldType = $("#drpConnectionWeldType").find("option:selected").text();         	
	        	ConnectingWeldSize = $("#drpConnectionWeldSize").val() == "" ? "" :  $("#drpConnectionWeldSize").find("option:selected").text() + '"';
	        	
	        	ConnectingWeldLengthInFeet = $("#txtConnectionWeldLength").val(); 
	        	ConnectingWeldLengthInInch = $("#drpConnectionWeldLengthInch").find("option:selected").text(); 
	        	ConnectingWeldLengthInFraction = $("#drpConnectionWeldLengthFraction").find("option:selected").text(); 
	        	
	        	ConnectingWeldLength = feetInchFormater(ConnectingWeldLengthInFeet, ConnectingWeldLengthInInch, ConnectingWeldLengthInFraction);   
        	}
        	        	
        	var drpReferenceDrawing = $("#drpReferenceDrawing").find("option:selected").text(); 
        	
        	var FeetVal = LengthInFeet * 12;
        	var InchVal = $("#drpInch").val();
        	var FractionVal = $("#drpFraction").val();
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);
        	
        	var ProfileWeigth = "";
        	
        	if(Shape == 'W WITH CAP CHANNEL' || Shape == 'S WITH CAP CHANNEL')
    		{
        		var Profile1Weight = $("#drpProfile2").val().split(",");
        		var Profile2Weight = $("#drpProfile3").val().split(",");
        			
        		ProfileWeight = parseFloat(Profile1Weight[0]) + parseFloat(Profile2Weight[0])
    		
    		}
        	else
        	{
        		var Profile1Weight = $("#drpProfile1").val().split(",");
        		ProfileWeight = Profile1Weight[0];
        	}
        	
        	
        	var MemberWeight_Lbs = (Total_Length * parseFloat(ProfileWeight))/12;        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000;          	
        	var Total_Member_Weight_Lbs = (MemberWeight_Lbs * parseInt(Quantity));        	
        	var Total_Member_Weight_Tons =(MemberWeight_Tons * parseInt(Quantity));        	
        	
        	var ReferenceDrawing = $('#drpReferenceDrawing').val(); 
        	
        	if(isEdit == true)
        	{
        		$('#tableGirts').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit, Shape,
            			 Profile,  MaterialGrade,
            			 TotalLength,  Quantity,
            			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),
            			 WeldTypeBetweenMembers,WeldSizeBetweenMembers,
            			 PitchLengthBetweenMembers, WeldLengthBetweenMembers,            			 
            			 ConnectionType,  ClipAngleProfile,WeldType, WeldSize,
            			 ConnectionMaterial,
            			 BoltGrade, BoltDia, NoOfBoltRows, 
            			 ConnectingWeldType,ConnectingWeldSize,ConnectingWeldLength,            			 
            			 LengthInFeet, LengthInInch,LengthInFraction,            			
            			 PitchLenghtBetweenMembersInFeet, PitchLenghtBetweenMembersInInch,PitchLenghtBetweenMembersInFraction,            			 
            			 WeldLenghtBetweenMembersInFeet, WeldLenghtBetweenMembersInInch, WeldLenghtBetweenMembersInFraction,            			 
            			 Profile1,Profile2,MaterialGrade1,MaterialGrade2,ReferenceDrawing,
            			 $("#drpWeldSizeBetweenMember").val(),
            			 $("#drpBoltDia").val(),
            			 $("#drpWeldSize").val(),
            			 ConnectingWeldLengthInFeet,ConnectingWeldLengthInInch,
            			 ConnectingWeldLengthInFraction], document.getElementById("row" + editRowNo));
        	
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
					          '<td>'+ Profile + '</td>'+
					          '<td>'+ MaterialGrade + '</td>'+
					          '<td>'+ TotalLength + '</td>'+
					          '<td>'+ Quantity + '</td>'+
					          '<td>'+ Total_Member_Weight_Lbs.toFixed(3) +'</td>' + 
							  '<td>'+ Total_Member_Weight_Tons.toFixed(3) +'</td>'+						  
					          '<td>'+ WeldTypeBetweenMembers + '</td>'+
					          '<td>'+ WeldSizeBetweenMembers + '</td>'+				          
					          '<td>'+ PitchLengthBetweenMembers + '</td>'+
					          '<td>'+ WeldLengthBetweenMembers + '</td>'+ 
					          '<td>'+ ConnectionType + '</td>' +				          
					    	  '<td>'+ ClipAngleProfile + '</td>' +	
					    	  '<td>'+ WeldType + '</td>' +
							  '<td>'+ WeldSize + '</td>' +  
							  '<td>'+ ConnectionMaterial + '</td>' +  							  
					    	  '<td>'+ BoltGrade + '</td>' + 
							  '<td>'+ BoltDia + '</td>' +
							  '<td>'+ NoOfBoltRows + '</td>' +  							  
							  '<td>'+ ConnectingWeldType + '</td>' +
							  '<td>'+ ConnectingWeldSize + '</td>' +  
							  '<td>'+ ConnectingWeldLength + '</td>' +  							 
							  '<td style="display:none;">'+ LengthInFeet + '</td>' + 
							  '<td style="display:none;">'+ LengthInInch + '</td>' + 
							  '<td style="display:none;">'+ LengthInFraction + '</td>' + 							 
							  '<td style="display:none;">'+ PitchLenghtBetweenMembersInFeet + '</td>' + 
							  '<td style="display:none;">'+ PitchLenghtBetweenMembersInInch + '</td>' + 
							  '<td style="display:none;">'+ PitchLenghtBetweenMembersInFraction + '</td>' + 								  
							  '<td style="display:none;">'+ WeldLenghtBetweenMembersInFeet + '</td>' + 
							  '<td style="display:none;">'+ WeldLenghtBetweenMembersInInch + '</td>' + 
							  '<td style="display:none;">'+ WeldLenghtBetweenMembersInFraction + '</td>' + 							  
							  '<td style="display:none;">'+ Profile1 + '</td>'+
					          '<td style="display:none;">'+ Profile2 + '</td>'+					          
					          '<td style="display:none;">'+ MaterialGrade1 + '</td>'+
					          '<td style="display:none;">'+ MaterialGrade2 + '</td>'+					          
					          '<td>'+ ReferenceDrawing + '</td>' + 					          
					          '<td style="display:none;">'+ $("#drpWeldSizeBetweenMember").val() + '</td>'+					          
					          '<td style="display:none;">'+ $("#drpBoltDia").val() + '</td>'+
					          '<td style="display:none;">'+ $("#drpWeldSize").val() + '</td>'+					          
					          '<td style="display:none;">'+ ConnectingWeldLengthInFeet + '</td>' + 
							  '<td style="display:none;">'+ ConnectingWeldLengthInInch + '</td>' + 
							  '<td style="display:none;">'+ ConnectingWeldLengthInFraction + '</td>' + 
						  '</tr>' ;
				
        			tableGirts.row.add($(DataRow)).draw(false);
        	
        	}
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var Girts = [];
        	
        	var table = $("#tableGirts tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),                    
			                Shape = $tds.eq(2).text(),
			                Profile = $tds.eq(3).text(),
			                MaterialGrade = $tds.eq(4).text(),
			                Length = $tds.eq(5).text(),
			                Quantity = $tds.eq(6).text(),  
			                MemberWeightlbs = $tds.eq(7).text(),
					        MemberWeightTons = $tds.eq(8).text(),  
					        WeldTypeBetweenMembers = $tds.eq(9).text(),
					        WeldSizeBetweenMembers = $tds.eq(10).text(),	
					        PitchLengthBetweenMembers = $tds.eq(11).text(),
					        WeldLengthBetweenMembers = $tds.eq(12).text(),
					        ConnectionType = $tds.eq(13).text(),
					        ConnectionMemberProfile = $tds.eq(14).text(),	
					        WeldType = $tds.eq(15).text(),
					        WeldSize = $tds.eq(16).text(), 					        
					        ConnectionMaterial = $tds.eq(17).text(), 
					        BoltGrade = $tds.eq(18).text(),
					        BoltDia = $tds.eq(19).text(),                
					        NoOfBoltRows = $tds.eq(20).text(),	
					        
					        ConnectingWeldType = $tds.eq(21).text(),
					        ConnectingWeldSize = $tds.eq(22).text(),
					        ConnectingWeldLength = $tds.eq(23).text(),
					        
					        LengthInFeet = $tds.eq(24).text(),
		                    LengthInInch = $tds.eq(25).text(),                    
		                    LengthInFraction = $tds.eq(26).text(),
		                    
		                    PitchLengthBetweenMembersInFeet = $tds.eq(27).text(),                    
		                    PitchLengthBetweenMembersInInch = $tds.eq(28).text(),
		                    PitchLengthBetweenMembersInFraction = $tds.eq(29).text(),
		                    
		                    WeldLengthBetweenMembersInFeet = $tds.eq(30).text(),                    
		                    WeldLengthBetweenMembersInInch = $tds.eq(31).text(),
		                    WeldLengthBetweenMembersInFraction = $tds.eq(32).text(),
		                    
		                    Profile1 = $tds.eq(33).text(),
		                    Profile2 = $tds.eq(34).text(),
		                    
		                    MaterialGrade1 = $tds.eq(35).text(),
		                    MaterialGrade2 = $tds.eq(36).text(),
		                    ReferenceDrawing = $tds.eq(37).text(),
		                    
		                    Weldsizedecimal1 = $tds.eq(38).text(),
		                    Boltdiadecimal= $tds.eq(39).text(),
		                    Weldsizedecimal2 = $tds.eq(40).text(),
		                    
		                    ConnectingWeldLengthInFeet = $tds.eq(41).text(),                    
		                    ConnectingWeldLengthInInch = $tds.eq(42).text(),
		                    ConnectingWeldLengthInFraction = $tds.eq(43).text();
		                    
               
               var GirtsArray = {
			                        [shape]: Shape,			                        
			                        [profile1]:Profile1,
			                        [profile2]:Profile2,			                        
			                        [grade1]:MaterialGrade1,
			                        [grade2]:MaterialGrade2,
			                        
			                        [length] : {[feet]:LengthInFeet, 
	   						 		    		 [inches]:LengthInInch, 
	   						 		             [fraction]:LengthInFraction,
	   						 		             [fractiondecimal]: eval(LengthInFraction)},
	   						 		             
			                        [quantity] : Quantity,
			                        [memberweightlbs] : MemberWeightlbs,
			                        [memberweightstons] : MemberWeightTons, 			                        
			                        [weldtypebetweenmember] : WeldTypeBetweenMembers,
			                        
			                        [weldsizebetweenmember] : {[weldsizefraction]:WeldSizeBetweenMembers.replace('"',''), 
			                        							[weldsizedecimal]:Weldsizedecimal1},
			                        							
			                        [pitchlength] : {[feet]:PitchLengthBetweenMembersInFeet, 
			           	   							  [inches]:PitchLengthBetweenMembersInInch, 
			           	   							  [fraction]:PitchLengthBetweenMembersInFraction,
			           	   						      [fractiondecimal]: eval(PitchLengthBetweenMembersInFraction)},	
			           	   						      
			           	   			[weldlength] : {[feet]:WeldLengthBetweenMembersInFeet, 
			           	   							 [inches]:WeldLengthBetweenMembersInInch, 
			           	   							 [fraction]:WeldLengthBetweenMembersInFraction,
			           	   						     [fractiondecimal]: eval(WeldLengthBetweenMembersInFraction)},
			           	   						     
			                        [typicalattachment]: ConnectionType,
			                        [clipangleprofile] : ConnectionMemberProfile,			                        
			                        [weldtype] : WeldType,
			                        [weldsize] : {[weldsizefraction]:WeldSize.replace('"',''), 
            									   [weldsizedecimal]:Weldsizedecimal2},           									   
            									   
            						[boltgrade] : BoltGrade,			                        
            				        [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
            	            		        	 [boltdiadecimal]:Boltdiadecimal},
            				        [noofbolts] : NoOfBoltRows,
            						[connectionmethod] : ConnectionMaterial,            						
            						[connectionweldsize] : ConnectingWeldSize.replace('"',''),
            						[connectionweldtype] : ConnectingWeldType,
            						            						
            						[connectionweldlength] : {[feet]:ConnectingWeldLengthInFeet, 
					          	   							 [inches]:ConnectingWeldLengthInInch, 
					           	   							 [fraction]:ConnectingWeldLengthInFraction,
					           	   						     [fractiondecimal]: eval(ConnectingWeldLengthInFraction)},            						
			                        [referencedrawing] : ReferenceDrawing
			       }                 
               Girts.push(GirtsArray);
            });
            
            
            
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',				
    		    data: { miscsteelgroup:"Girts",
    		    	 miscsteeljson:JSON.stringify({"Girts":Girts})
    		    	  },			    	
    			success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	  
				
            });
                        
            
        }
        
        $("#drpWeldType").change( function(){
            if($('#drpWeldType').val()=='CJP'){

            	 $("#divWeldSize").hide();
                 $("#drpWeldSize").val("");
            }
            else {
            	 $("#divWeldSize").show();
            }            
        });
        
        $("#drpWeldTypeBetweenMember").change( function(){
            if($('#drpWeldTypeBetweenMember').val()=='CJP'){
                 $("#divWeldSizeBetweenMember").hide();
                 $("#drpWeldSizeBetweenMember").val("");
            }
            else {
            	 $("#divWeldSizeBetweenMember").show();
            }            
        });
        
        $("#drpConnectionWeldType").change( function(){
            if($('#drpConnectionWeldType').val()=='CJP'){
                 $("#divConnectionWeldSize").hide();
                 $("#drpConnectionWeldSize").val("");
            }
            else {
            	 $("#divConnectionWeldSize").show();
            }            
        });
        
        $("#drpConnectionMethod").change( function(){
            if($('#drpConnectionMethod').val()=='FieldBolted'){
                 $("#ConnectionWelded").hide();
                 $("#ConnectionBolted").show();
                
            }
            else {
            	 $("#ConnectionWelded").show();
                 $("#ConnectionBolted").hide();
            }            
        });
        
      