var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;
var rtuFramestable = "";	

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var C_Profile = [];
var C_MaterialGrade = [];

var L_Profile = [];
var L_MaterialGrade = [];

var W_Profile = [];
var W_MaterialGrade = [];

var HSS_MaterialGrade = [];
var HSS_Profile = [];
var HSS_MaterialGrade2 = [];

var horizontalshape = "horizontalshapes",
	horizontalprofile = "horizontalprofile",
	horizontalgrade = "horizontalgrade",
	horizontalquantity = "horizontalquantity",
	
	verticalshape = "verticalshapes",
	verticalprofile = "verticalprofile",
	verticalgrade = "verticalgrade",
	verticalquantity = "verticalquantity",
	
	rtuframequantity = "rtuframequantity";
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr", 
	connectiontype = "connectiontype",
	connectingmember="connectingmember",
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
	weldlength = "weldlength",
	horizonatllength = "horizontallength",
	verticallength = "verticallength";


$(document).ready(function(){	
	
	rtuFramestable = $('#tableRTUFrames').DataTable({	 	       		
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


		

		 $("#ConnectionTypeScreenWall").change( function(){
             if($('#ConnectionTypeScreenWall').val()=='connectionTypeSWFW'){
                  $(".fieldsSWFW").show();
                  $(".fieldsSWFB").hide();
                 
             }
             else if($('#ConnectionTypeScreenWall').val()=='connectionTypeSWFB'){
                 $(".fieldsSWFW").show();
                 $(".fieldsSWFB").show();
             }
             
         });
  
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
        		 else if($("#drpHorizontalMemberShape").val() == "W")
	        	 {
	        		 if(W_Profile.length == 0 || W_MaterialGrade.length == 0)
	        		 {
	        			 W_Profile = getProfiles($("#drpHorizontalMemberShape").val());
	        			 W_MaterialGrade  = getMaterialGrade($("#drpHorizontalMemberShape").val());
	        		 }
	        		 fillProfileDropdownList('drpHorizontalMemberProfile',W_Profile);
	        		 fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',W_MaterialGrade);	        		 
	        		 
	        	 }
        		else if($("#drpHorizontalMemberShape").val() == "HSS")
        	    {
        	       if(HSS_Profile.length == 0 || HSS_MaterialGrade.length == 0)
        	       {
        	          HSS_Profile = getProfiles($("#drpHorizontalMemberShape").val());
        	          HSS_MaterialGrade  = getMaterialGrade("HSS_Rect.");
        		      HSS_MaterialGrade2  = getMaterialGrade("HSS_Round");
        	       }
        	       fillProfileDropdownList('drpHorizontalMemberProfile',HSS_Profile);
        	       fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',HSS_MaterialGrade);
        	       fillMaterialGradeDropdownList('drpHorizontalMemberMaterialGrade',HSS_MaterialGrade2);
        	        		
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
        		 else if($("#drpVerticalMemberShape").val() == "HSS")
         	    {
         	       if(HSS_Profile.length == 0 || HSS_MaterialGrade.length == 0)
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
        
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableRTUFrames tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				  rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;		        			        	
		        	                     
	                var	HorizontalMemberShape = $tds.eq(2).text(),
		            	HorizontalMemberProfile = $tds.eq(3).text(),
		            	HorizontalMemberMaterialGrade = $tds.eq(4).text(),
		            	HorizontalMemberLength = $tds.eq(5).text(),
		            	HorizontalMemberQuantity = $tds.eq(6).text(), 
		            	
		            	VerticalMemberShape = $tds.eq(7).text(),
		            	VerticalMemberProfile = $tds.eq(8).text(),
		            	VerticalMemberMaterialGrade = $tds.eq(9).text(),
		            	VerticalMemberLength = $tds.eq(10).text(),
		            	VerticalMemberQuantity = $tds.eq(11).text(), 		                	
		            	RTUFrameQuantity = $tds.eq(12).text(),  
		            	
	                    MemberWeightLbs = $tds.eq(13).text(),
	                    MemberWeightTons = $tds.eq(14).text(),
	                    ConnectionType = $tds.eq(15).text(), 
	                    BoltGrade = $tds.eq(16).text(),
	                    BoltDia = $tds.eq(17).text(),
	                    NoOfBolts = $tds.eq(18).text(),
	                    WeldType = $tds.eq(19).text(),
	                    WeldSize = $tds.eq(20).text(),		                   
	                   /* WeldLength = $tds.eq(21).text(),*/
	                    
	                    HorizontalLenghtInFeet = $tds.eq(21).text(),
	                    HorizontalLengthInInch = $tds.eq(22).text()== "" ? "0" :$tds.eq(22).text(),
	                    HorizontalLengthInFraction = $tds.eq(23).text()== "" ? "0" :$tds.eq(23).text(), 
	                    
	                    VerticalLenghtInFeet = $tds.eq(24).text(),
	                    VerticalLengthInInch = $tds.eq(25).text()== "" ? "0" :$tds.eq(25).text(),
	                    VerticalLengthInFraction = $tds.eq(26).text()== "" ? "0" :$tds.eq(26).text(),
	                    
	                   /* WeldLengthInFeet = $tds.eq(28).text(),                    
	                    WeldLengthInInch = $tds.eq(29).text() == "" ? "0" :$tds.eq(29).text(),
	                    WeldLengthInFraction = $tds.eq(30).text()== "" ? "0" : $tds.eq(30).text(),*/
	                    ReferenceDrawing = $tds.eq(27).text();
		        	
		        			        	
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
		        	
		        	$('#txtRTUFrameQuantity').val(RTUFrameQuantity);
		        	
		        	$('#ConnectionTypeScreenWall').val(getOptId('ConnectionTypeScreenWall', ConnectionType));
		        	$("#ConnectionTypeScreenWall").trigger("change");
		        	
		        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoltGrade)).change();		        	
		        	$('#drpBoltDia').val(getOptId('drpBoltDia', BoltDia.replace('"','')));
		        	
		        	$('#drpNoOfBoltRows').val(getOptId('drpNoOfBoltRows', NoOfBolts));
		        	
		        	$('#drpWeldType').val(getOptId('drpWeldType', WeldType));
		        	$("#drpWeldType").trigger("change");
		        	
		        	$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize.replace('"',''))).change();
		        	/*$('#txtWeldLength').val(WeldLengthInFeet);
		        	
		        	$('#drpWeldLengthInch').val(getOptId('drpWeldLengthInch', WeldLengthInInch));		        	
		        	$('#drpWeldLengthFraction').val(getOptId('drpWeldLengthFraction', WeldLengthInFraction));*/
		        	
		        	var drawings = ReferenceDrawing.split(",");	 
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");
		        
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmBolted').removeClass('submitted');        	
        	$('#frmWelded').removeClass('submitted');        	
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmBolted');
        	clearFormFields('frmWelded');
        	
        	        	
        	$(".defaultValueZero").val(0);
          
        	$('#ConnectionTypeScreenWall').val("connectionTypeSWFW");        	
        	$("#ConnectionTypeScreenWall").trigger("change");
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	
        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoGrGp)).change();
       		$('#drpBoltDia').val(BoltDiaGP);
        	
        	$('.addTR').text("Add");
        	isEdit = false;
        	
        }
        
        //Validate Fields before saving
        function validateForm()
        {
        	        	
        	var connectionTypeFormId;        	
        	
        	$('#frmMain').addClass('submitted');
        	
        	if($('#ConnectionTypeScreenWall').val() =='connectionTypeSWFB')
        	{
        		$('#frmBolted').addClass('submitted');
        		
        		$('#frmWelded').removeClass('submitted');
        		
        		connectionTypeFormId = "frmBolted";
        	}
        	else if($('#ConnectionTypeScreenWall').val() =='connectionTypeSWFW')
        	{
        		$('#frmWelded').addClass('submitted');
        		
        		$('#frmBolted').removeClass('submitted');
        		
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
        	
        	/*if(validated == true && connectionTypeFormId == 'frmWelded')
        	{
       		       			
        		var WeldLenghtInFeet = $("#txtWeldLength").val();
            	var WeldLenghtInInch = $("#drpWeldLengthInch").find("option:selected").text();
            	var WeldLenghtInFraction = $("#drpWeldLengthFraction").find("option:selected").text();
        	
            	validated = validateLength(WeldLenghtInFeet,WeldLenghtInInch,WeldLenghtInFraction,"Weld Length");
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
        	
        	var RTUFrameQuantity = $("#txtRTUFrameQuantity").val();     	
        	
        	var ConnectionType = $("#ConnectionTypeScreenWall").find("option:selected").text();
        	
        	var BoltGrade="",BoltDia="",NoOfBolts="", BoltDiaDecimal = "";
        	
        	var WeldType="",WeldSize="", WeldSizeDecimal = "";
        	
        	//var WeldLengthInFeet ="", WeldLengthInInch="", WeldLengthInFraction="", WeldLenghtTotal="";
        	
        	if(ConnectionType == "Field Bolted")
        	{
        		BoltGrade = $("#drpBoltGrade").find("option:selected").text();
        		BoltDia= $("#drpBoltDia") == "" ? "" : $("#drpBoltDia").find("option:selected").text() +'"';
        		BoltDiaDecimal = $("#drpBoltDia").val();
        		NoOfBolts= $("#drpNoOfBoltRows").find("option:selected").text();
        		
        	}
        	
        		WeldType = $("#drpWeldType").find("option:selected").text();
        		WeldSize = $("#drpWeldSize").val() == "" ? "" : $("#drpWeldSize").find("option:selected").text() +'"';
        		WeldSizeDecimal = $("#drpWeldSize").val();
        	
        	var HorizontalProfileWeight =  $("#drpHorizontalMemberProfile").val().split(",");
        	var HorizontalLenght = parseFloat($("#txtHorizontalMemberLengthInFeet").val()) * 12 + parseFloat($("#drpHorizontalMemberLengthInInch").val()) + parseFloat($("#drpHorizontalMemberLengthInFraction").val());
        	var HorizontalQuantity = parseInt($("#txtHorizontalMemberQuantity").val());
        	
        	var VerticalProfileWeight =  $("#drpVerticalMemberProfile").val().split(",");
        	var VerticalLenght = parseFloat($("#txtVerticalMemberLengthInFeet").val()) * 12 + parseFloat($("#drpVerticalMemberLengthInInch").val()) + parseFloat($("#drpVerticalMemberLengthInFraction").val());
        	var VerticalQuantity = parseInt($("#txtVerticalMemberQuantity").val());
        	
        	var HorizontalWeight = (HorizontalProfileWeight[0] * HorizontalLenght * HorizontalQuantity) /12;
        	
        	var VerticalWeight = (VerticalProfileWeight[0] * VerticalLenght * VerticalQuantity)/12;
        	
        	var Total_Member_Weight_Lbs = (HorizontalWeight + VerticalWeight) * parseInt($('#txtRTUFrameQuantity').val());
        	
        	var Total_Member_Weight_Tons = Total_Member_Weight_Lbs / 2000;         	
        	
        	var ReferenceDrawing = $('#drpReferenceDrawing').val();
        	
        	if(isEdit == true)
        	{
        		$('#tableRTUFrames').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit, HorizontalShape, HorizontalProfile,HorizontalMaterialGrade, HorizontalTotalLength, HorizontalQuantity,
            			 VerticalShape,VerticalProfile,VerticalMaterialGrade,VerticalTotalLength,VerticalQuantity, RTUFrameQuantity, 
            			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),            			          			 
            			 ConnectionType,BoltGrade, BoltDia,           			 
            			 NoOfBolts, WeldType, WeldSize,            			 
            			 HorizontalLenghtInFeet,HorizontalLengthInInch,HorizontalLengthInFraction,
            			 VerticalLenghtInFeet,VerticalLengthInInch,VerticalLengthInFraction,
            			/* WeldLengthInFeet,WeldLengthInInch,WeldLengthInFraction,*/
            			 ReferenceDrawing], document.getElementById("row" + editRowNo));
        	
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
	                          '<td>'+ RTUFrameQuantity  + '</td>'+ 	
	                          '<td>'+ Total_Member_Weight_Lbs.toFixed(3) +'</td>' + 
	      					  '<td>'+ Total_Member_Weight_Tons.toFixed(3) +'</td>'+
	                          '<td>'+ ConnectionType + '</td>'+	                          
	                          '<td>'+ BoltGrade + '</td>' +
				        	  '<td>'+ BoltDia + '</td>' +
				        	  '<td>'+ NoOfBolts + '</td>' + 				        	  
	                          '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +				        	 
				        	  /*'<td>'+ WeldLenghtTotal + '</td>' +*/
				        	  '<td style="display:none;">'+ HorizontalLenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ HorizontalLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ HorizontalLengthInFraction + '</td>' + 
		      				  '<td style="display:none;">'+ VerticalLenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ VerticalLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ VerticalLengthInFraction + '</td>' + 
		      				  
		      				 /* '<td style="display:none;">'+ WeldLengthInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ WeldLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ WeldLengthInFraction + '</td>' + */
		      				  '<td>'+ ReferenceDrawing + '</td>'
      					  '</tr>' ;
        	
        	rtuFramestable.row.add($(DataRow)).draw(false);
        	}
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var RTUFrames = [];
        	
        	var table = $("#tableRTUFrames tbody");
        	
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
			            	RTUFrameQuantity = $tds.eq(12).text(),  
			            	
		                    MemberWeightLbs = $tds.eq(13).text(),
		                    MemberWeightTons = $tds.eq(14).text(),
		                    ConnectionType = $tds.eq(15).text(), 
		                    BoltGrade = $tds.eq(16).text(),
		                    BoltDia = $tds.eq(17).text(),
		                    NoOfBolts = $tds.eq(18).text(),
		                    WeldType = $tds.eq(19).text(),
		                    WeldSize = $tds.eq(20).text(),		                   
		                    /*WeldLength = $tds.eq(21).text(),*/
		                    
		                    HorizontalLenghtInFeet = $tds.eq(21).text(),
		                    HorizontalLengthInInch = $tds.eq(22).text(),
		                    HorizontalLengthInFraction = $tds.eq(23).text(), 
		                    
		                    VerticalLenghtInFeet = $tds.eq(24).text(),
		                    VerticalLengthInInch = $tds.eq(25).text(),
		                    VerticalLengthInFraction = $tds.eq(26).text()
		                    
		                   /* WeldLengthInFeet = $tds.eq(28).text(),                    
		                    WeldLengthInInch = $tds.eq(29).text(),
		                    WeldLengthInFraction = $tds.eq(30).text(),*/
		                    ReferenceDrawing = $tds.eq(27).text();
                
               var rtuFrameArray = {
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
				          			   [rtuframequantity] : RTUFrameQuantity,                     
				          			   [connectiontype] : ConnectionType,
				          			   [memberweightlbs] : MemberWeightLbs,
				          			   [memberweightstons] : MemberWeightTons, 				          			          			
			           			       [weldtype] : WeldType,	             			
			           			       [weldsize] : WeldSize.replace('"',''), 
			           				  /* [weldlength] :{[feet]:WeldLengthInFeet, 
				          				 		      [inches]:WeldLengthInInch, 
				          				 		      [fraction]:WeldLengthInFraction,
				          				 		      [fractiondecimal]: eval(WeldLengthInFraction)},*/
			           			       [boltgrade] : BoltGrade,
			           			       [boltdia] :BoltDia.replace('"',''),
			           			       [noofbolts] : NoOfBolts,
			           			       [referencedrawing]: ReferenceDrawing,
			                       
			                        }                 
               RTUFrames.push(rtuFrameArray);
              
            });
            
            
                        
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',		
			    data: { miscsteelgroup:"RTUFrames",
			    	    miscsteeljson:JSON.stringify({"RTUFrames":RTUFrames})
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
	                $("#drpWeldSize").val('');
	           }
	           else {
	           	 $("#divWeldSize").show();
	           }
	           
	       });