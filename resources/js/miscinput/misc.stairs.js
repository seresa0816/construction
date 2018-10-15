var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var stairtable = "";
var C_Profile = [];
var HSS_Profile = [];
var MCC_Profile = [];

var C_MaterialGrade = [];
var HSS_MaterialGrade = [];
var HSS_MaterialGrade2 = [];
var MCC_MaterialGrade = [];

var Plate_MaterialGrade = [];

var shape = "shapes",
	profile = "profile",	
	grade = "grade",
	noofflights = "No_Flights", 
	quantity = "quantity",
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr",
	platewidth = "platewidth",
	stairwidth = "stairwidth",
	stairlength = "stairlength",
	midlanding = "midlanding",
	treadtype="TreadType",
	treadtypedesignation = "treadtypedesignation",
	treadtypequantity="treadtypequantity",
	treadwidth = "treadwidth",	
	connectiontype = "connectiontype",	
	connectingmemberprofile = "connectingmemberprofile",	
	platethickness = "platethickness",
	weldtype = "wtype",	
	weldsize = "weldsize",
	weldsizefraction = "weld_fra",
	weldsizedecimal = "weld",	
	boltgrade = "BoGr",
	boltdia = "boltdia",
	boltdiafraction = "d1_fra",
	boltdiadecimal = "d1",
	noofbolts="noofboltrows",
	noofboltscolumn="noofboltcolumns",
	referencedrawing = "referencedrawing",
	memberweightlbs = "memberweightlbs",
	memberweightstons = "memberweightstons";

$(document).ready(function(){
			
		stairtable = $('#tableStairs').DataTable({	 	       		
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
    	 resetDrodown('drpProfile');      	
      	 resetDrodown('drpMaterialGrade');
      	 
      	$('#divProfile').show();
   		$('#divPlateThickness').hide();
   		$('#divPlateWidth').hide();
      	 
      	 if($("#drpShape").val() != "")
	     {
      		if($("#drpShape").val() == "C")
	       	 {
	       		 if(C_Profile.length == 0 || C_MaterialGrade.length == 0)
	       		 {
	       			 C_Profile = getProfiles($("#drpShape").val());
	       			 C_MaterialGrade  = getMaterialGrade($("#drpShape").val());
	       		 }
	       		 fillProfileDropdownList('drpProfile',C_Profile);
	       		 fillMaterialGradeDropdownList('drpMaterialGrade',C_MaterialGrade);
	       		 
	       	 }
	      	else if($("#drpShape").val() == "HSS")
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
	      	else if($("#drpShape").val() == "MC")
	       	 {
	       		 if(MCC_Profile.length == 0 || MCC_MaterialGrade.length == 0)
	       		 {
	       			 MCC_Profile = getProfiles($("#drpShape").val());
	       			 MCC_MaterialGrade  = getMaterialGrade($("#drpShape").val());
	       		 }
	       		 fillProfileDropdownList('drpProfile',MCC_Profile);
	       		 fillMaterialGradeDropdownList('drpMaterialGrade',MCC_MaterialGrade);
	       		 
	       	 }  
      		
	      	else if($("#drpShape").val() == "PLATE")
	       	 {
	       		$('#divProfile').hide();
	       		$('#divPlateThickness').show();
	       		$('#divPlateWidth').show();
	       		
	       		if(Plate_MaterialGrade.length == 0 )
	       			Plate_MaterialGrade  = getMaterialGrade("Plates");
	       		
	       		fillMaterialGradeDropdownList('drpMaterialGrade',Plate_MaterialGrade);
	       		 
	       	 }  
	     }
      		
       	
       });
     
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableStairs tbody");
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
				                NoOfFlights = $tds.eq(5).text(),			               
				                Quantity = $tds.eq(6).text(),	
				                PlateWidth = $tds.eq(7).text(), 
				                
				                StairWidth = $tds.eq(8).text(), 
				                StairLenght = $tds.eq(9).text(),					        
				                MemberWeightlbs = $tds.eq(10).text(),
						        MemberWeightTons = $tds.eq(11).text(), 					        
						        MidLanding = $tds.eq(12).text(),	
						        TreadType = $tds.eq(13).text(),	
						        TreadDesignation = $tds.eq(14).text(),					        
						        TreadQuantity = $tds.eq(15).text(),
						        TreadWidth = $tds.eq(16).text(),
						        
						        ConnectionMethod = $tds.eq(17).text(),	
						        ConnectingMemberProfile = $tds.eq(18).text(),	
						        
						        BoltGrade = $tds.eq(19).text(),
						        BoltDia = $tds.eq(20).text(),                
						        NoOfBoltRows = $tds.eq(21).text(),
						        NoOfBoltColumns = $tds.eq(22).text(),
						        
						        WeldType = $tds.eq(23).text(),
						        WeldSize = $tds.eq(24).text(), 					       
						        ReferenceDrawing = $tds.eq(25).text(),					        
						        StairWidthInFeet = $tds.eq(26).text(),
						        StairWidthInInch = $tds.eq(27).text() == "" ? "0" : $tds.eq(27).text(),                    
						        StairWidthInFraction = $tds.eq(28).text()== "" ? "0" : $tds.eq(28).text(),		                    
						        StairLenghtInFeet = $tds.eq(29).text(),                    
						        StairLenghtInInch = $tds.eq(30).text()== "" ? "0" : $tds.eq(30).text(),
						        StairLenghtInFraction = $tds.eq(31).text()== "" ? "0" : $tds.eq(31).text(),					        
						        TreadWidthInFeet = $tds.eq(32).text(),                    
						        TreadWidthInInch = $tds.eq(33).text()== "" ? "0" : $tds.eq(33).text(),
						        TreadWidthInFraction = $tds.eq(34).text()== "" ? "0" : $tds.eq(34).text(),
						        
						        PlateWidthInFeet = $tds.eq(35).text(),
						        PlateWidthInInch = $tds.eq(36).text()== "" ? "0" : $tds.eq(36).text(),
						        PlateWidthInFraction = $tds.eq(37).text()== "" ? "0" : $tds.eq(37).text(),
						        ProfilePlateThickness = $tds.eq(38).text();
		       		        	
		        	$('#drpShape').val(getOptId('drpShape', Shape));		        	
		        	$("#drpShape").trigger("change");	
		        	
		        	if(Shape == "PLATE")
		        	{	        		
		        		
		        		$('#txtPlateWidthInFeet').val(PlateWidthInFeet);		        	
			        	$('#drpPlateWidthInInch').val(getOptId('drpPlateWidthInInch', PlateWidthInInch));		        	
			        	$('#drpPlateWidthInFraction').val(getOptId('drpPlateWidthInFraction', PlateWidthInFraction));	
			        	
			        	PlateWidth_feet = $("#txtPlateWidthInFeet").val();  
		        		PlateWidth_inch = $("#drpPlateWidthInInch").find("option:selected").text();        	
		        		PlateWidth_fraction = $("#drpPlateWidthInFraction").find("option:selected").text();
		        		
		        		PlateWidth = "X" + feetInchFormater(PlateWidth_feet , PlateWidth_inch ,PlateWidth_fraction);
		        		
		        		Profile = Profile.replace(PlateWidth,'');
		        		$('#drpPlateThickness').val(getOptId('drpPlateThickness', Profile)).change();
		        	}
		        	else
		        		$('#drpProfile').val(getOptId('drpProfile', Profile)).change();	
		        	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade', MaterialGrade)).change();		        
		        	$('#drpNoOfFlights').val(getOptId('drpNoOfFlights', NoOfFlights));		        			        	
		        	$('#txtQuantity').val(Quantity);		        	
		        	$('#txtStairWidthInFeet').val(StairWidthInFeet);		        	
		        	$('#drpStairWidthInInch').val(getOptId('drpStairWidthInInch', StairWidthInInch));		        	
		        	$('#drpStairWidthInFraction').val(getOptId('drpStairWidthInFraction', StairWidthInFraction));		        
		        	$('#txtStairLengthInFeet').val(StairLenghtInFeet);		        	
		        	$('#drpStairLengthInInch').val(getOptId('drpStairLengthInInch', StairLenghtInInch));		        	
		        	$('#drpStairLengthInFraction').val(getOptId('drpStairLengthInFraction', StairLenghtInFraction));		        	
		        	$('#drpMidLanding').val(getOptId('drpMidLanding', MidLanding));		        	
		        	$('#drpTreadType').val(getOptId('drpTreadType', TreadType));		        			        	
		        	$('#txtTreadDesignation').val(TreadDesignation);
		        	$('#txtTreadQuantity').val(TreadQuantity);		        	
		        	$('#txtTreadWidthInFeet').val(TreadWidthInFeet);		        	
		        	$('#drpTreadWidthInInch').val(getOptId('drpTreadWidthInInch', TreadWidthInInch));		        	
		        	$('#drpTreadWidthInFraction').val(getOptId('drpTreadWidthInFraction', TreadWidthInFraction));
		        	
		        	$('#drpConnectiontype').val(getOptId('drpConnectiontype', ConnectionMethod));		        	
		        	$("#drpConnectiontype").trigger("change");	
		        	
		        	if(ConnectionMethod == "Clip Angle")
		        	{
		        		$('#drpClipAngleProfile').val(getOptId('drpClipAngleProfile', ConnectingMemberProfile)).change();
		        	}
		        	else
		        	{		        		
		        		$('#drpConnectedPlateThickness').val(getOptId('drpConnectedPlateThickness', ProfilePlateThickness)).change();
		        		$('#drpNoOfBoltColumn').val(getOptId('drpNoOfBoltColumn', NoOfBoltColumns));
		        		
		        	}
		        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoltGrade)).change();		        	
		        	$('#drpBoltDia').val(getOptId('drpBoltDia', BoltDia.replace('"','')));		        	
		        	$('#drpNoOfBoltRows').val(getOptId('drpNoOfBoltRows', NoOfBoltRows));		        	
		        	$('#drpWeldType').val(getOptId('drpWeldType', WeldType));
		        	$("#drpWeldType").trigger("change");	
		        	$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize.replace('"',''))).change();
		        	
		        	var drawings = ReferenceDrawing.split(",");	 
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");			        	
		        	
		        }
		    });
			
		}
		
				
		//Clear All Controls Data
        function clearFields() {
        	
        	$('#frmMain').removeClass('submitted');        	
        	clearFormFields('frmMain');
        	
        	$(".defaultValueZero").val(0);         	
        	$("#drpShape").trigger("change");
        
        	$("#drpTreadWidthInInch").val(0);        	
            $("#drpTreadWidthInFraction").val(0); 
            
            $("#drpConnectiontype").val('Clip Angle');
        	
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
        	        	
        	var connectionFormId;        	
        	
        	$('#frmMain').addClass('submitted');         	
        	
        	var validated = true;
        	$('#frmMain').find(':input').each(function(){   
        		
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
        	if(validated == true)
        	{
       		       			
        		var StairWidthLength = $("#txtStairWidthInFeet").val();
            	var StairWidthInch = $("#drpStairWidthInInch").find("option:selected").text();
            	var StairWidthFraction = $("#drpStairWidthInFraction").find("option:selected").text();
        	
            	var StairWidthvalidated = validateLength(StairWidthLength,StairWidthInch,StairWidthFraction,"Stair Width");
            	
            	var StairLenght = $("#txtStairLengthInFeet").val();
            	var StairInch = $("#drpStairLengthInInch").find("option:selected").text();
            	var StairFraction = $("#drpStairLengthInFraction").find("option:selected").text();
        	
            	var Stairvalidated = validateLength(StairLenght,StairInch,StairFraction,"Stair Length");
            	
            	var TreadWidth = $("#txtTreadWidthInFeet").val();
            	var TreadWidthInch = $("#drpTreadWidthInInch").find("option:selected").text();
            	var TreadWidthFraction = $("#drpTreadWidthInFraction").find("option:selected").text();
        	
            	var TreadWidthvalidated = validateLength(TreadWidth,TreadWidthInch,TreadWidthFraction,"Tread Width");
            	
            	if(StairWidthvalidated == false || Stairvalidated == false || TreadWidthvalidated == false)
            		validated = false;
            	
            	if($("#drpShape").val() == "PLATE")
            	{
	            	var PlateWidth = $("#txtPlateWidthInFeet").val();
	            	var PlateWidthInch = $("#drpPlateWidthInInch").find("option:selected").text();
	            	var PlateWidthFraction = $("#drpPlateWidthInFraction").find("option:selected").text();
	        	
	            	validated = validateLength(PlateWidth,PlateWidthInch,PlateWidthFraction,"Plate Width");
            	}
        	}
        	
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
        	var PlateWidth = "", PlateWidth_feet = "",PlateWidth_inch = "", PlateWidth_fraction = "";
        	var Profile = "", ProfilePlateThickness = "";
        	
        	if($("#drpShape").val() == "PLATE")
        	{
        		Profile = $("#drpPlateThickness").find("option:selected").text();        		
        		PlateWidth_feet = $("#txtPlateWidthInFeet").val();  
        		PlateWidth_inch = $("#drpPlateWidthInInch").find("option:selected").text();        	
        		PlateWidth_fraction = $("#drpPlateWidthInFraction").find("option:selected").text();
        		
        		PlateWidth = feetInchFormater(PlateWidth_feet , PlateWidth_inch ,PlateWidth_fraction);
        		
        		Profile = Profile + "X" + PlateWidth;
        		
        	}
        	else 
        	{        	
        		Profile = $("#drpProfile").find("option:selected").text();
        	}
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text();         	
        	
        	var Quantity = $("#txtQuantity").val();        	
        	var NoOfFlights = $("#drpNoOfFlights").find("option:selected").text(); 
        	
        	var StairWidth_Feet = $("#txtStairWidthInFeet").val();        	
        	var StairWidth_Inch = $("#drpStairWidthInInch").find("option:selected").text();        	
        	var StairWidth_Fraction = $("#drpStairWidthInFraction").find("option:selected").text();
        	
        	var StairWidth = feetInchFormater(StairWidth_Feet,StairWidth_Inch , StairWidth_Fraction);
        	
        	var StairLenght_Feet = $("#txtStairLengthInFeet").val();        	
        	var StairLenght_Inch = $("#drpStairLengthInInch").find("option:selected").text();        	
        	var StairLenght_Fraction = $("#drpStairLengthInFraction").find("option:selected").text();
        	
        	var StairLenght = feetInchFormater(StairLenght_Feet , StairLenght_Inch ,StairLenght_Fraction);        	
        	
        	var MidLanding = $("#drpMidLanding").find("option:selected").text();
        	var TreadType = $("#drpTreadType").find("option:selected").text(); 
        	var TreadDesignation = $("#txtTreadDesignation").val();
        	
        	var TreadQuantity = $("#txtTreadQuantity").val();
        	
        	var TreadWidth_Feet = $("#txtTreadWidthInFeet").val();
        	var TreadWidth_Inch = $("#drpTreadWidthInInch").find("option:selected").text();
        	var TreadWidth_Fraction = $("#drpTreadWidthInFraction").find("option:selected").text();
        	
        	var TreadWidth = feetInchFormater(TreadWidth_Feet,TreadWidth_Inch,TreadWidth_Fraction);
        	
        	var ConnectionMethod = $("#drpConnectiontype").find("option:selected").text();
        	var ConnectingMemberProfile = "", NoOfBoltColumns = "";
        	
        	var NoOfBolts = $("#drpNoOfBoltRows").find("option:selected").text();
        	
        	if(ConnectionMethod == "Shear Plate")
        	{
        		ConnectingMember = $("#drpConnectedPlateThickness").find("option:selected").text();
        		NoOfBoltColumns = $("#drpNoOfBoltColumn").find("option:selected").text();
        		
        		ProfilePlateThickness = $("#drpConnectedPlateThickness").find("option:selected").text();
        		
        		var Platewidth = 0, PlateLenght = 0;
        		
	        	if(parseInt(NoOfBoltColumns) == 1)
	        	{
	        		Platewidth = '3"1/2';
	        	}
	        	else
	        	{
	        		var MinimumWidth = 0;
	        		Platewidth = (parseInt(NoOfBoltColumns) -1) * 3;	        		
	        		Platewidth = Platewidth + 3.5;
	        		
	        		PlateLenght = (parseInt(NoOfBolts) -1) * 3;	        		
		        	PlateLenght = PlateLenght + 3;
		        	
		        	MinimumWidth = Platewidth > PlateLenght ? PlateLenght : Platewidth;		        
		        	Platewidth = convMMtoFt(MinimumWidth * 25.4);
		        	
	        	}	
	        	
	        	ConnectingMemberProfile = "PL"+ ConnectingMember + "X" + Platewidth;
	        		        	
        	}
        	else
        	{        	
        		ConnectingMemberProfile = $("#drpClipAngleProfile").find("option:selected").text();
        	}
        	var BoltGrade = $("#drpBoltGrade").find("option:selected").text();
        	
        	var BoltDia = $("#drpBoltDia").find("option:selected").text() + '"';
        	
        	
        	var WeldType = $("#drpWeldType").find("option:selected").text();
        	var WeldSize = $("#drpWeldSize").val() =="" ? "" : $("#drpWeldSize").find("option:selected").text() + '"';
        	
        	var RefernceDrawing =  $("#drpReferenceDrawing").val();
        	
        	//--------------------------------- Caluclation ----------------------------------
        	var MemberWeight_Lbs = "",MemberWeight_Tons = "";
        	
        	if($("#drpShape").val() == "PLATE")
        	{
        		//((plate thickness (modal)* Plate width(modal)*Stair length(modal)*0.284*2)*(No of flights(modal)*Quantity(modal)).
        	
        		var PlateThickness =  $("#drpPlateThickness").val();
        		
        		var PlateWidthFeetVal = parseInt($("#txtPlateWidthInFeet").val()) * 12;
	        	var PlateWidthInchVal = $("#drpPlateWidthInInch").val();
	        	var PlateWidthFractionVal = $("#drpPlateWidthInFraction").val();
	        	
	        	var Total_PlateWidth = parseFloat(PlateWidthFeetVal) + parseFloat(PlateWidthInchVal) + parseFloat(PlateWidthFractionVal);
	        	
	        	var StairLengthFeetVal = StairLenght_Feet * 12;
	        	var StairLengthInchVal = $("#drpStairWidthInInch").val();
	        	var StairLengthFractionVal = $("#drpStairWidthInFraction").val();
	        	
	        	var Total_StairLength = parseFloat(StairLengthFeetVal) + parseFloat(StairLengthInchVal) + parseFloat(StairLengthFractionVal);
	        	
	        	MemberWeight_Lbs = (parseFloat(PlateThickness) * Total_PlateWidth * Total_StairLength * 0.284 * 2 )* parseInt(NoOfFlights) * parseInt(Quantity);
	        	
	        	MemberWeight_Tons = MemberWeight_Lbs/2000;
        	}
        	else
        	{
	        	var ProfileWeight =  $("#drpProfile").val().split(",");
	        	
	        	var StairLengthFeetVal = StairLenght_Feet * 12;
	        	var StairLengthInchVal = $("#drpStairWidthInInch").val();
	        	var StairLengthFractionVal = $("#drpStairWidthInFraction").val();
	        	
	        	var Total_StairLength = parseFloat(StairLengthFeetVal) + parseFloat(StairLengthInchVal) + parseFloat(StairLengthFractionVal);
	        	
	        	MemberWeight_Lbs = (((parseFloat(ProfileWeight[0]) * parseFloat(Total_StairLength))/12)*2)*parseInt(NoOfFlights) * parseInt(Quantity);
	        	
	        	MemberWeight_Tons = MemberWeight_Lbs/2000;
        	}
        	
        	//--------------------------------- End Caluclation ----------------------------------
        	
        	
        	if(isEdit == true)
        	{
        		$('#tableStairs').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit, Shape,
            			 Profile, MaterialGrade,NoOfFlights,Quantity,
            			 PlateWidth,StairWidth, StairLenght, 
            			 MemberWeight_Lbs.toFixed(3), MemberWeight_Tons.toFixed(3),            			          			 
            			 MidLanding,TreadType,TreadDesignation, TreadQuantity,           			 
            			 TreadWidth, ConnectionMethod,
            			 ConnectingMemberProfile,BoltGrade,BoltDia,NoOfBolts,NoOfBoltColumns,
            			 WeldType,WeldSize, RefernceDrawing,
            			 StairWidth_Feet,  StairWidth_Inch, StairWidth_Fraction,         			 
            			 StairLenght_Feet,StairLenght_Inch,StairLenght_Fraction,
            			 TreadWidth_Feet,TreadWidth_Inch,TreadWidth_Fraction,
            			 PlateWidth_feet,PlateWidth_inch,PlateWidth_fraction,
            			 ProfilePlateThickness], document.getElementById("row" + editRowNo));
        	
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
					          '<td>'+ Profile  + '</td>'+
					          '<td>'+ MaterialGrade + '</td>'+
					          '<td>'+ NoOfFlights + '</td>'+
					          '<td>'+ Quantity + '</td>'+					         					          
					          '<td style="display:none;">'+ PlateWidth + '</td>'+	
					          '<td>'+ StairWidth + '</td>'+	
					          '<td>'+ StairLenght + '</td>'+					          
					          '<td>'+ MemberWeight_Lbs.toFixed(3) +'</td>' + 
							  '<td>'+ MemberWeight_Tons.toFixed(3) +'</td>'+							  
					          '<td>'+ MidLanding + '</td>'+						          
					          '<td>'+ TreadType + '</td>'+
					          '<td>'+ TreadDesignation + '</td>'+
					          '<td>'+ TreadQuantity + '</td>'+
					          '<td>'+ TreadWidth + '</td>'+					          
					          '<td>'+ ConnectionMethod + '</td>'+
					          '<td>'+ ConnectingMemberProfile + '</td>'+
					          '<td>'+ BoltGrade + '</td>' +						          
					          '<td>'+ BoltDia + '</td>' +	
					          '<td>'+ NoOfBolts + '</td>' +	
					          '<td>'+ NoOfBoltColumns + '</td>' +	
					          '<td>'+ WeldType + '</td>' +	
					          '<td>'+ WeldSize + '</td>' +						    	 
							  '<td>'+ RefernceDrawing + '</td>' + 							  
							  '<td style="display:none;">'+ StairWidth_Feet + '</td>' + 
							  '<td style="display:none;">'+ StairWidth_Inch + '</td>' + 
							  '<td style="display:none;">'+ StairWidth_Fraction + '</td>' + 
							  
							  '<td style="display:none;">'+ StairLenght_Feet + '</td>' + 
							  '<td style="display:none;">'+ StairLenght_Inch + '</td>' + 
							  '<td style="display:none;">'+ StairLenght_Fraction + '</td>' + 
							  
							  '<td style="display:none;">'+ TreadWidth_Feet + '</td>' + 
							  '<td style="display:none;">'+ TreadWidth_Inch + '</td>' + 
							  '<td style="display:none;">'+ TreadWidth_Fraction + '</td>' + 							  
							  
							  '<td style="display:none;">'+ PlateWidth_feet + '</td>' + 
							  '<td style="display:none;">'+ PlateWidth_inch + '</td>' + 
							  '<td style="display:none;">'+ PlateWidth_fraction + '</td>' + 
							  
							  '<td style="display:none;">'+ ProfilePlateThickness + '</td>' + 
							  
							  
						  '</tr>' ;
        	
        		stairtable.row.add($(DataRow)).draw(false); 
        	}
        	
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var Stairs = [];
        	
        	var table = $("#tableStairs tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),                    
			                Shape = $tds.eq(2).text(),
			                Profile = $tds.eq(3).text(),			                
			                MaterialGrade = $tds.eq(4).text(),
			                NoOfFlights = $tds.eq(5).text(),			               
			                Quantity = $tds.eq(6).text(),	
			                PlateWidth = $tds.eq(7).text(), 
			                
			                StairWidth = $tds.eq(8).text(), 
			                StairLenght = $tds.eq(9).text(),					        
			                MemberWeightlbs = $tds.eq(10).text(),
					        MemberWeightTons = $tds.eq(11).text(), 					        
					        MidLanding = $tds.eq(12).text(),	
					        TreadType = $tds.eq(13).text(),	
					        TreadDesignation = $tds.eq(14).text(),					        
					        TreadQuantity = $tds.eq(15).text(),
					        TreadWidth = $tds.eq(16).text(),
					        
					        ConnectionMethod = $tds.eq(17).text(),	
					        ConnectingMemberProfile = $tds.eq(18).text(),	
					        
					        BoltGrade = $tds.eq(19).text(),
					        BoltDia = $tds.eq(20).text(),                
					        NoOfBoltRows = $tds.eq(21).text(),
					        NoOfBoltColumns = $tds.eq(22).text(),
					        
					        WeldType = $tds.eq(23).text(),
					        WeldSize = $tds.eq(24).text(), 					       
					        ReferenceDrawing = $tds.eq(25).text(),	
					        
					        StairWidthInFeet = $tds.eq(26).text(),
					        StairWidthInInch = $tds.eq(27).text(),                    
					        StairWidthInFraction = $tds.eq(28).text(),		                    
					        
					        StairLenghtInFeet = $tds.eq(29).text(),                    
					        StairLenghtInInch = $tds.eq(30).text(),
					        StairLenghtInFraction = $tds.eq(31).text(),					        
					       
					        TreadWidthInFeet = $tds.eq(32).text(),                    
					        TreadWidthInInch = $tds.eq(33).text(),
					        TreadWidthInFraction = $tds.eq(34).text(),
					        
					        PlateWidthInFeet = $tds.eq(35).text(),
					        PlateWidthInInch = $tds.eq(36).text(),
					        PlateWidthInFraction = $tds.eq(37).text(),					        
					        ProfilePlateThickness = $tds.eq(38).text();
		                         
                
        		if(Shape == "PLATE")
        		{        		            		
	        		var PlateWidth = "X" + feetInchFormater(PlateWidthInFeet , PlateWidthInInch ,PlateWidthInFraction);   	        			        		
	        		Profile = Profile.replace(PlateWidth,'');	        		
        		}
        		
               var stairsArray = {
			                        [shape]: Shape,			                        
			                        [profile]:Profile,
			                        [grade]:MaterialGrade,			                        
			                        [noofflights]:NoOfFlights,
			                        [quantity]:Quantity,			                        
			                        [platewidth] : {[feet]:PlateWidthInFeet, 
				    		 			 			[inches]:PlateWidthInInch, 
				    		 			 			[fraction]:PlateWidthInFraction,
				    		 			 			[fractiondecimal]: eval(PlateWidthInFraction)},
		    		 			 			
			                        [stairwidth] : {[feet]:StairWidthInFeet, 
		 		    		 			 			[inches]:StairWidthInInch, 
		 		    		 			 			[fraction]:StairWidthInFraction,
		 		    		 			 			[fractiondecimal]: eval(StairWidthInFraction)},
		 		    		 			 			
		 		    		 		[stairlength] : {[feet]:StairLenghtInFeet, 
			 		    		 			 			[inches]:StairLenghtInInch, 
			 		    		 			 			[fraction]:StairLenghtInFraction,
			 		    		 			 			[fractiondecimal]: eval(StairLenghtInFraction)},
			                     
			                        
			                        [memberweightlbs]: MemberWeightlbs,
			                        [memberweightstons]: MemberWeightTons,			                        
			                        [midlanding]: MidLanding,			                        
			                        [treadtype] : TreadType,		                        
			                        [treadtypedesignation] : TreadDesignation,			                        
			                        [treadtypequantity] : TreadQuantity,
			                        
			                        [treadwidth] : {[feet]:TreadWidthInFeet, 
		    		 			 			[inches]:TreadWidthInInch, 
		    		 			 			[fraction]:TreadWidthInFraction,
		    		 			 			[fractiondecimal]: eval(TreadWidthInFraction)},			                        
			                        
		    		 			 	[connectiontype] : ConnectionMethod,		    		 			 	
			                        [connectingmemberprofile] : ConnectingMemberProfile.replace('"','ZP').replace("'","PZ"),
			                        [boltgrade] : BoltGrade,
			                        [boltdia] :BoltDia.replace('"',''),           	                        
			                        [noofbolts] : NoOfBoltRows,	
			                        [noofboltscolumn] : NoOfBoltColumns,	
			                        
			                        [weldtype] : WeldType,			                        
			                        [weldsize] : WeldSize.replace('"',''), 			                       
			                        [referencedrawing] : ReferenceDrawing,
			                        [platethickness]: ProfilePlateThickness
			                  }                 
               Stairs.push(stairsArray);
            });
                        
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',
			    data: { miscsteelgroup:"Stairs",
			    	    miscsteeljson:JSON.stringify({"Stairs":Stairs})
			    	  },			    	
				success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
            });
        	
        }
     		 
	
		 $("#drpConnectiontype").change( function(){
			 
			 $('#divConnectionTypeThickness').hide();
			 $('#divConnectionTypeProfile').show();
			 $('#divNoOfBoltColumn').hide();
			 
			 if($("#drpConnectiontype").val() == "Shear Plate")
			 {
				 $('#divConnectionTypeProfile').hide();
				 $('#divConnectionTypeThickness').show();
				 $('#divNoOfBoltColumn').show();
			 }
			 
		 });
		 
		 $("#drpWeldType").change( function(){
	           if($('#drpWeldType').val()=='CJP'){
	                $("#divWeldSize").hide(); 
	                $("#drpWeldSize").val('');
	           }
	           else {
	           	 $("#divWeldSize").show();
	           }
	           
	       });