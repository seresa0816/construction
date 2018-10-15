var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var  HSS_Profile = [];
var HSS_MaterialGrade = [];
var HSS_MaterialGrade2 = [];

var W_Profile = [];
var W_MaterialGrade = [];

var L_Profile = [];
var L_MaterialGrade = [];

var L2_Profile = [];
var L2_MaterialGrade = [];

var hangerstable = "";

var shape = "shapes",
	profile = "profile",	
	grade = "grade",	
	quantity = "quantity",
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr",
	length = "length",
	connectiontype = "connectiontype",
	connectingmemberprofile = "connectingmemberprofile",
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
	noofboltscolumns = "noofboltscolumn",
	referencedrawing = "referencedrawing",
	memberweightlbs = "memberweightlbs",
	memberweightstons = "memberweightstons";


$(document).ready(function(){
	
	
	try	{
		if ($.fn.DataTable.isDataTable("#tbleHanger")) {
			  $('#tbleHanger').DataTable().clear().destroy();
			}	
	}
	catch(err){
		
	}
	
	hangerstable = $('#tbleHanger').DataTable({	 	       		
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
	       
	         L2_Profile = getProfiles('2L');   		 
   			 fillProfileDropdownList('drpClipAngleProfile',L2_Profile);
});    

	       
		//Connection Type Change Event 
		 
		 $("#HangConnectiontype").change(function(){
            
			 $('#divnoofcolumns').hide();
			 if($('#HangConnectiontype').val()=='EndPlate' || $('#HangConnectiontype').val()=='Shear Plate' ){
            	 $("#DivDirectlyWelded").hide();
                 $("#DivEndPlate").show();
                 
                 $("#divClipAngleProfile").hide();
                 $("#divPlateThickness").show();
                 
                 if($('#HangConnectiontype').val()=='Shear Plate')
                	 $('#divnoofcolumns').show();
                 
             }
             else if($('#HangConnectiontype').val()=='DWelded'){                
                 
                 $("#DivDirectlyWelded").show();
                 $("#DivEndPlate").hide();
             }
			 
             else if($('#HangConnectiontype').val()=='Clip Angle'){                
                 
                 $("#divClipAngleProfile").show();
                 $("#divPlateThickness").hide();
                 
                 $("#DivDirectlyWelded").hide();
                 $("#DivEndPlate").show();
             }
             
         });
         
        //Shape Dropdown Change Event
         $("#drpShape").change(function() {             	
        	 resetDrodown('drpProfile');
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
	        		 fillProfileDropdownList('drpProfile',HSS_Profile);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',HSS_MaterialGrade);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',HSS_MaterialGrade2);
	        		
	        	 }
        		 else if($("#drpShape").val() == "W")
	        	 {
	        		 if(W_Profile.length == 0 || W_MaterialGrade.length == 0)
	        		 {
	        			 W_Profile = getProfiles($("#drpShape").val());
	        			 W_MaterialGrade  = getMaterialGrade($("#drpShape").val());
	        		 }
	        		 fillProfileDropdownList('drpProfile',W_Profile);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',W_MaterialGrade);	        		 
	        		 
	        	 }
        		 else if($("#drpShape").val() == "L")
	        	 {
	        		 if(L_Profile.length == 0 || L_MaterialGrade.length == 0)
	        		 {
	        			 L_Profile = getProfiles($("#drpShape").val());
	        			 L_MaterialGrade  = getMaterialGrade($("#drpShape").val());
	        		 }
	        		 fillProfileDropdownList('drpProfile',L_Profile);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',L_MaterialGrade);	        		 
	        		 
	        	 }
        		 else if($("#drpShape").val() == "2L")
	        	 {
	        		 if(L2_Profile.length == 0 || L_MaterialGrade.length == 0)
	        		 {
	        			 L2_Profile = getProfiles($("#drpShape").val());
	        			 L_MaterialGrade  = getMaterialGrade("L");
	        		 }
	        		 fillProfileDropdownList('drpProfile',L2_Profile);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',L_MaterialGrade);	        		 
	        		 
	        	 }
        		 
	 	     }
         });
		
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tbleHanger tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				  rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;
		        			        	
		        	var shape = $tds.eq(2).text(),
		        	 profile = $tds.eq(3).text(),
		        	 materialGrade = $tds.eq(4).text(),
                     Length = $tds.eq(5).text(),
                     Quantity = $tds.eq(6).text(),                    
                     MemberWeightlbs = $tds.eq(7).text(),
                     MemberWeightTons = $tds.eq(8).text(), 
                     ConnectionType = $tds.eq(9).text(),
                     ConnectingMemberProfile = $tds.eq(10).text(),                     
                     BoltGrade = $tds.eq(11).text(),
                     BoltDia = $tds.eq(12).text(),
                     NoOfBolts = $tds.eq(13).text(),
                     NoOfBoltColumns = $tds.eq(14).text(),	
	                 WeldType = $tds.eq(15).text(),
	                 WeldSize = $tds.eq(16).text(),		                    
	                 ReferenceDRawing = $tds.eq(17).text(),
	                 LengthInFeet = $tds.eq(18).text(),
	                 LengthInInch = $tds.eq(19).text()=="" ? "0" : $tds.eq(19).text() ,
	                 LengthInFraction = $tds.eq(20).text()=="" ? "0" : $tds.eq(20).text() ,		                    
	                 EndPlateThicknessDecimal = $tds.eq(21).text(),
	                 Weldsizedecimal = $tds.eq(22).text(),
	                 Boltdiadecimal =$tds.eq(23).text(); 
                     
		        		        	
		        	$('#drpShape').val(getOptId('drpShape', shape));		        	
		        	$("#drpShape").trigger("change");
		        	
		        	$('#drpProfile').val(getOptId('drpProfile', profile)).change();
		        	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade', materialGrade)).change();
		        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLengthInFeet').val(LengthInFeet);
		        	
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));
		        	
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));
		        	
		        	$('#HangConnectiontype').val(getOptId('HangConnectiontype', ConnectionType));		        			        	
		        	$("#HangConnectiontype").trigger("change");
		        	
		        	if(ConnectionType == "End Plate" || ConnectionType == "Shear Plate" || ConnectionType == "Clip Angle")
		        	{
		        		if(ConnectionType == "Clip Angle")
		        		{
		        			$('#drpClipAngleProfile').val(getOptId('drpClipAngleProfile', ConnectingMemberProfile)).change();
		        		}
		        		else
		        		{	
		        			 if(ConnectionType == "End Plate")
		        				 ConnectingMemberProfile = ConnectingMemberProfile.replace("PL","").replace('"X8 1/2"','');
		         			else if(ConnectionType == "Shear Plate")
		         				ConnectingMemberProfile = ConnectingMemberProfile.replace("PL","").replace('"X3 1/2"','');
		        			 
		        			$('#drpEndPlateThickness').val(getOptId('drpEndPlateThickness', ConnectingMemberProfile)).change();
		        		}
		        		
		        		if(ConnectionType == "Shear Plate")
		        			$('#drpEndPlateNoOfBoltColumns').val(getOptId('drpEndPlateNoOfBoltColumns', NoOfBoltColumns));	
		        			
		        		$('#drpEndPlateWeldType').val(getOptId('drpEndPlateWeldType', WeldType));	
		        		$("#drpEndPlateWeldType").trigger("change");
		        		
		        		$('#drpEndPlateWeldSize').val(getOptId('drpEndPlateWeldSize', WeldSize.replace('"',''))).change();			        		
		        		$('#drpEndPlateBoltGrade').val(getOptId('drpEndPlateBoltGrade', BoltGrade)).change();		        		
		        		$('#drpEndPlateBoltDia').val(getOptId('drpEndPlateBoltDia', BoltDia.replace('"','')));			        	
		        		$('#drpEndPlateNoOfBoltRows').val(getOptId('drpEndPlateNoOfBoltRows', NoOfBolts));			        	
			        	
		        	}
		        	else
		        	{
		        		
		        		$('#drpDirectlyWeldedWeldType').val(getOptId('drpDirectlyWeldedWeldType', WeldType));			     
		        		$("#drpDirectlyWeldedWeldType").trigger("change");
		        		
		        		$('#drpDirectlyWeldedWeldSize').val(getOptId('drpDirectlyWeldedWeldSize', WeldSize.replace('"',''))).change();	
		        		
		        	}		        	
		        	
		        	var drawings = ReferenceDRawing.split(",");	       	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");
		        
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmEndPlate').removeClass('submitted');        	
        	$('#frmWelded').removeClass('submitted');        	
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmEndPlate');        	
        	clearFormFields('frmWelded');
        	        	        	
        	$(".defaultValueZero").val(0);
        	
        	$('#HangConnectiontype').val("EndPlate");        	        	
        	$("#HangConnectiontype").trigger("change");        
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	
        	$('#drpEndPlateBoltGrade').val(getOptId('drpEndPlateBoltGrade', BoGrGp)).change();
         	$('#drpEndPlateBoltDia').val(BoltDiaGP);
        	$('.addTR').text("Add");
        	isEdit = false;
        	Selected = [];
        }
        
        //Validate Fields before saving
        function validateForm()
        {
        	        	
        	var connectionTypeFormId;
        	var gussetTypeFormId ="" ;
        	
        	$('#frmMain').addClass('submitted');
        	$('#frmRefrenceDrawing').addClass('submitted');
        	
        	if($('#HangConnectiontype').val()=='EndPlate' || $('#HangConnectiontype').val()=='Clip Angle' || $('#HangConnectiontype').val()=='Shear Plate')
        	{
        		$('#frmEndPlate').addClass('submitted');
        		$('#frmWelded').removeClass('submitted');
        		connectionTypeFormId = "frmEndPlate";
        	}
        	else if($('#HangConnectiontype').val()=='DWelded')
        	{
        		$('#frmWelded').addClass('submitted');
        		$('#frmEndPlate').removeClass('submitted');
        		connectionTypeFormId = "frmWelded";
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
        	if(validated)
        	{
       		       			
        		var Lenght = $("#txtLengthInFeet").val();
            	var Inch = $("#drpLengthInInch").find("option:selected").text();
            	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
        	
            	var validLength = validateLength(Lenght,Inch,Fraction,"Length");
            	if(validLength == false)
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
	           		   		
	           		if(Value == "" && requ == true && elemetvisible == true)   		
	           			validated = false;
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
        	var Shape  = $("#drpShape").find("option:selected").text(); 
        	var Profile = $("#drpProfile").find("option:selected").text();  
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();
        	
        	var Lenght = $("#txtLengthInFeet").val();
        	var Inch = $("#drpLengthInInch").find("option:selected").text();
        	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        	var TotalLength = feetInchFormater(Lenght,Inch, Fraction);        	
        	var ConnectionType = $("#HangConnectiontype").find("option:selected").text();
        	
        	var WeldType="", WeldSize="", WeldSizeDecimal = "" , 
        		BoltGrade="",BoltDia="", BoltDiaDecimal = "" , NoOfBolts="" ,NoOfBoltColumns = "",
        		EndPlateThickness = "", EndPlateThicknessDecimal = "";        	
        	
        	if(ConnectionType == "Directly Welded")
        	{
        		 WeldType =  $("#drpDirectlyWeldedWeldType").find("option:selected").text() ;
            	 WeldSize =  $("#drpDirectlyWeldedWeldSize").val() == "" ? "" : $("#drpDirectlyWeldedWeldSize").find("option:selected").text() + '"';
            	 
            	 WeldSizeDecimal= $("#drpDirectlyWeldedWeldSize").val();
        		
        	}
        	else if(ConnectionType == "End Plate" || ConnectionType == "Shear Plate" || ConnectionType == "Clip Angle")
        	{
        		if(ConnectionType == "Clip Angle")
        		{
        			EndPlateThickness = $("#drpClipAngleProfile").find("option:selected").text() ;
        		}
        		else
        		{
        			EndPlateThickness = $("#drpEndPlateThickness").find("option:selected").text() ;
        			
        			if(ConnectionType == "End Plate")
        				EndPlateThickness = "PL"+EndPlateThickness + '"X8 1/2"';
        			else if(ConnectionType == "Shear Plate")
        				EndPlateThickness = "PL"+EndPlateThickness + '"X3 1/2"';
        			
        			EndPlateThicknessDecimal = $("#drpEndPlateThickness").val();
        		}
        		if(ConnectionType == "Shear Plate")
        			NoOfBoltColumns = $("#drpEndPlateNoOfBoltColumns").find("option:selected").text();
        		
        		BoltGrade = $("#drpEndPlateBoltGrade").find("option:selected").text() ;
        		BoltDia = $("#drpEndPlateBoltDia").find("option:selected").text() + '"';
        		BoltDiaDecimal = $("#drpEndPlateBoltDia").val();
        		NoOfBolts = $("#drpEndPlateNoOfBoltRows").find("option:selected").text() ;
        		
        		WeldType =  $("#drpEndPlateWeldType").find("option:selected").text() ;
            	WeldSize =  $("#drpEndPlateWeldSize").val() == "" ? "" : $("#drpEndPlateWeldSize").find("option:selected").text() + '"';
            	
            	WeldSizeDecimal= $("#drpEndPlateWeldSize").val();
        		
        	}
        	var ReferenceDrawing = $("#drpReferenceDrawing").val();
        	  	
        	var FeetVal = Lenght * 12;
        	var InchVal = $("#drpLengthInInch").val();
        	var FractionVal = $("#drpLengthInFraction").val();
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);        	        	
        	var ProfileWeight = $("#drpProfile").val().split(",");        	
        	var MemberWeight_Lbs = (Total_Length * parseFloat(ProfileWeight[0]))/12;        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000;        	        	
        	var Quantity = $("#txtQuantity").val();        	
        	var Total_Member_Weight_Lbs = (MemberWeight_Lbs * parseInt(Quantity));        	
        	var Total_Member_Weight_Tons =(MemberWeight_Tons * parseInt(Quantity));       	
        	
        	if(isEdit == true)
        	{
        		$('#tbleHanger').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit, Shape,
            			 Profile,  MaterialGrade,
            			 TotalLength,  Quantity,
            			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),            			          			 
            			 ConnectionType,  EndPlateThickness,
            			 BoltGrade, BoltDia,           			 
            			 NoOfBolts,NoOfBoltColumns, WeldType, WeldSize,            			 
            			 ReferenceDrawing,Lenght,Inch,Fraction,
            			 EndPlateThicknessDecimal,
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
	                          '<td>'+ Profile + '</td>'+
	                          '<td>'+ MaterialGrade + '</td>'+
	                          '<td>'+ TotalLength + '</td>'+
	                          '<td>'+ Quantity + '</td>'+
	                          '<td>'+ Total_Member_Weight_Lbs.toFixed(3) +'</td>' + 
	      					  '<td>'+ Total_Member_Weight_Tons.toFixed(3) +'</td>'+
	                          '<td>'+ ConnectionType + '</td>'+
	                          '<td>'+ EndPlateThickness + '</td>' +
				        	  '<td>'+ BoltGrade + '</td>' + 
	      					  '<td>'+ BoltDia + '</td>' +
	      					  '<td>'+ NoOfBolts + '</td>' + 
	      					  '<td>'+ NoOfBoltColumns + '</td>' + 
	      					  '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +
	      					  '<td>'+ ReferenceDrawing + '</td>' +  	      					  
		      				  '<td style="display:none;">'+ Lenght + '</td>' + 
		      				  '<td style="display:none;">'+ Inch + '</td>' + 
		      				  '<td style="display:none;">'+ Fraction + '</td>' + 
		      				  
		      				  '<td style="display:none;">'+ EndPlateThicknessDecimal + '</td>' + 
		      				  '<td style="display:none;">'+ WeldSizeDecimal + '</td>' + 
		      				  '<td style="display:none;">'+ BoltDiaDecimal + '</td>' + 
		      			 '</tr>' ;
        	
        	hangerstable.row.add($(DataRow)).draw(false);
        	}
        	constructJsonArrayFromTable();
        	        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var Hangers = [];
        	
        	var table = $("#tbleHanger tbody");
        	
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
		                    ConnectionType = $tds.eq(9).text(),		                    
		                    connectedmemberprofile = $tds.eq(10).text(),                    
		                    BoltGrade = $tds.eq(11).text(),		                   
		                    BoltDia = $tds.eq(12).text(),
		                    NoOfBolts = $tds.eq(13).text(),	
		                    NoOfBoltColumns = $tds.eq(14).text(),	
		                    WeldType = $tds.eq(15).text(),
		                    WeldSize = $tds.eq(16).text(),		                    
		                    RefernceDrawing = $tds.eq(17).text(),
		                    LengthInFeet = $tds.eq(18).text(),
		                    LengthInInch = $tds.eq(19).text(),
		                    LengthInFraction = $tds.eq(20).text(),		                    
		                    EndPlateThicknessDecimal = $tds.eq(21).text(),
		                    Weldsizedecimal = $tds.eq(22).text(),
		                    Boltdiadecimal =$tds.eq(23).text(); 
                
                if(ConnectionType == "End Plate")
                	connectedmemberprofile = connectedmemberprofile.replace("PL","").replace('"X8 1/2"','');
    			else if(ConnectionType == "Shear Plate")
    				connectedmemberprofile = connectedmemberprofile.replace("PL","").replace('"X3 1/2"','');
    		               
               var HangersArray = {
			                        [shape]: Shape,
			                        [profile]:Profile,
			                        [grade]:MaterialGrade,
			                        [length] : {[feet]:LengthInFeet, 
						 		    		 [inches]:LengthInInch, 
						 		             [fraction]:LengthInFraction,
						 		             [fractiondecimal]: eval(LengthInFraction)},			                       
			                        [quantity] : Quantity,
			                        [memberweightlbs] : MemberWeightlbs,
			                        [memberweightstons] : MemberWeightTons,   
			                        [connectiontype] : ConnectionType,			                        
			                        [connectingmemberprofile]:connectedmemberprofile, 
			                        [weldtype] : WeldType,			                        
			                        [weldsize] : {[weldsizefraction]:WeldSize.replace('"',''), 
 									   			   [weldsizedecimal]:Weldsizedecimal},
			                        [boltgrade] : BoltGrade,
			                        
			                        [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
   									 			 [boltdiadecimal]:Boltdiadecimal},
			                        [noofbolts] : NoOfBolts,
			                        [noofboltscolumns] :NoOfBoltColumns,
			                        [referencedrawing] : RefernceDrawing
			                        }                 
               Hangers.push(HangersArray);
            });
            
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',				
    		    data: { miscsteelgroup:"Hangers",
    		    	 miscsteeljson:JSON.stringify({"Hangers":Hangers})
    		    	  },			    	
    			success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	  
				
            });
        }
       
       
        $("#drpEndPlateWeldType").change( function(){
            if($('#drpEndPlateWeldType').val()=='CJP'){

            	 $("#divEndPlateWeldSize").hide();
                 $("#drpEndPlateWeldSize").val("");
            }
            else {
            	 $("#divEndPlateWeldSize").show();
            }            
        });
        
        $("#drpDirectlyWeldedWeldType").change( function(){
            if($('#drpDirectlyWeldedWeldType').val()=='CJP'){

            	 $("#divDirectlyWelded").hide();
                 $("#drpDirectlyWeldedWeldSize").val("");
            }
            else {
            	 $("#divDirectlyWelded").show();
            }            
        });