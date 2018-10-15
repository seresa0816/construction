var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;
var kickerangletable = "";

var LProfile = [];
var L2Profile = [];
var LMaterialGrade = [];

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";

var shape = "shapes",
profile = "profile",
grade = "grade",
quantity = "quantity",
feet = "feet",
inches = "Inch",
fraction = "fr_fra",
fractiondecimal = "fr",
connectiontype = "connectiontype",
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
gussetplate = "gussetplate",
length = "length",
gussetplatesize1 = "gussetplatesize1",
gussetplatesize2 = "gussetplatesize2",
gussetplatethickness = "gussetplatethickness";
platethicknessfraction = "tp_fra";
platethicknessdecimal = "tp";



$(document).ready(function(){	
		
	kickerangletable = $('#tbleKickerAngle').DataTable({
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

	       
		//Connection Type Change Event 
		$("#BAConnectiontype").change( function(){
		    if($('#BAConnectiontype').val()=='connectionTypeFW'){
		         $(".fieldsFW").show();
		         $(".fieldsFB").hide();   
		         $("#divGussetPlateWeldDetails").hide();
		     	
		    }
		    else if($('#BAConnectiontype').val()=='connectionTypeFB'){
		        $(".fieldsFW").hide();
		        $(".fieldsFB").show();
		        if($('#drpGussetPlate').val()=='Yes')
		       	 $("#divGussetPlateWeldDetails").show();
		       
		    }
		    
		});
    
		//Gusset Plate Change Event	 
	       $("#drpGussetPlate").change( function(){
	             if($('#drpGussetPlate').val()=='No'){
	                  $("#divGussetPlateYes").hide();                
	             }
	             else if($('#drpGussetPlate').val()=='Yes'){
	             	 $("#divGussetPlateYes").show();             	 
	             	 if($("#BAConnectiontype").val() == "connectionTypeFB")             	 
	             		$("#divGussetPlateWeldDetails").show();             	
	             	 else             	 
	             		$("#divGussetPlateWeldDetails").hide();             	 
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
       
       $("#drpWeldTypeforGussetPlate").change( function(){
           if($('#drpWeldTypeforGussetPlate').val()=='CJP'){
                $("#divWeldSizeforGussetPlate").hide(); 
                $("#drpWeldSizeforGussetPlate").val('');
           }
           else {
           	 $("#divWeldSizeforGussetPlate").show();
           }
           
       });
       
       //Shape Dropdown Change Event
       $("#drpShape").change(function() 
       {  
      	 resetDrodown('drpProfile');
      	 resetDrodown('drpMaterialGrade');
      	  	       	
	       	if($("#drpShape").val() != "")
	       	{
	        	 var dataObj;	        	       	 
	        	 
	        	 if($("#drpShape").val() == "L")
	        	 {
	        		 if(LProfile.length == 0 || LMaterialGrade.length == 0)
	        		 {
	        			 LProfile = getProfiles($("#drpShape").val());
	        			 LMaterialGrade = getMaterialGrade($("#drpShape").val());
	        		 }
	        		 fillProfileDropdownList('drpProfile',LProfile);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',LMaterialGrade)
	        		 
	        	 }
	        	 else if($("#drpShape").val() == "2L")
	        	 {
	        		 if(L2Profile.length == 0 || LMaterialGrade.length == 0)
	        		 {
	        			 L2Profile = getProfiles($("#drpShape").val());
	        			 LMaterialGrade = getMaterialGrade("L");
	        		 }
	        		 
	        		fillProfileDropdownList('drpProfile',L2Profile)
	        		fillMaterialGradeDropdownList('drpMaterialGrade',LMaterialGrade)
	        	 }
	       	 }
       	 });
         
        
         
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tbleKickerAngle tbody");
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
                     GussetPlate = $tds.eq(10).text(),                  
                     GussetPlateSize = $tds.eq(11).text(),
                     GussetPlateThickness = $tds.eq(12).text().replace('"','').replace('PL ',''),
                     WeldType = $tds.eq(13).text(),
                     WeldSize = $tds.eq(14).text().replace('"',''),
                     BoltGrade = $tds.eq(15).text(),
                     BoltDia = $tds.eq(16).text().replace('"',''),
                     NoOfBolts = $tds.eq(17).text(), 
                     ReferenceDRawing = $tds.eq(18).text(),
                     LengthInFeet = $tds.eq(19).text(),
                     LengthInInch = $tds.eq(20).text()=="" ? "0" : $tds.eq(20).text(),
                     LengthInFraction = $tds.eq(21).text() == "" ? "0" : $tds.eq(21).text(),                    
                     GussetPlateSize1Inch = $tds.eq(22).text() == "" ? "0" : $tds.eq(22).text(),
                     GussetPlateSize1Fraction = $tds.eq(23).text() == "" ? "0" : $tds.eq(23).text(),                    
                     GussetPlateSize2Inch = $tds.eq(24).text()== "" ? "0" : $tds.eq(24).text(),
                     GussetPlateSize2Fraction = $tds.eq(25).text()== "" ? "0" : $tds.eq(25).text();                 
                    
		        	
		        	$('#drpShape').val(getOptId('drpShape', shape));		        	
		        	$("#drpShape").trigger("change");		        	
		        	$('#drpProfile').val(getOptId('drpProfile', profile)).change();		        	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade', materialGrade)).change();	//.val(materialGrade).trigger('change');		        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLength').val(LengthInFeet);		        	
		        	$('#drpInch').val(getOptId('drpInch', LengthInInch));
		        	$('#drpFraction').val(getOptId('drpFraction', LengthInFraction));		        	
		        	$('#BAConnectiontype').val(getOptId('BAConnectiontype', ConnectionType));		        	
		        	$("#BAConnectiontype").trigger("change"); 
		        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoltGrade)).change();
		        	$('#drpBoltDia').val(getOptId('drpBoltDia', BoltDia));
		        	$('#drpNoOfBoltRows').val(getOptId('drpNoOfBoltRows', NoOfBolts));
		        	$('#drpGussetPlate').val(getOptId('drpGussetPlate', GussetPlate));
		        	$("#drpGussetPlate").trigger("change");
		        	$('#drpGussetPlateThicknessInch').val(getOptId('drpGussetPlateThicknessInch', GussetPlateThickness)).change();		        	
		        	$('#drpGussetPlateSizeInch1').val(getOptId('drpGussetPlateSizeInch1', GussetPlateSize1Inch));
		        	$('#drpGussetPlateSizeFraction1').val(getOptId('drpGussetPlateSizeFraction1', GussetPlateSize1Fraction));
		        	$('#drpGussetPlateSizeIch2').val(getOptId('drpGussetPlateSizeIch2', GussetPlateSize2Inch));
		        	$('#drpGussetPlateFraction2').val(getOptId('drpGussetPlateFraction2', GussetPlateSize2Fraction));
		        	
		        	if($('#drpGussetPlate').val()=='Yes' && $('#BAConnectiontype').val()=='connectionTypeFB')
		        	{
		        		$('#drpWeldTypeforGussetPlate').val(getOptId('drpWeldTypeforGussetPlate', WeldType));
			        	$("#drpWeldTypeforGussetPlate").trigger("change");
			        	$('#drpWeldSizeforGussetPlate').val(getOptId('drpWeldSizeforGussetPlate', WeldSize)).change();    
		        	}
		        	else
		        	{
		        		$('#drpWeldType').val(getOptId('drpWeldType', WeldType));
			        	$("#drpWeldType").trigger("change");
			        	$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize)).change();	
		        	}
		        	
		        	var drawings = ReferenceDRawing.split(",");		        	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");	
		        	
		        }
		    });
			
		}
		
		function clearFormFields(formid)
		{
			$('#'+formid).find(':input').each(function(){
           		var id  = $(this).prop('id');
           		if(id!="")
              		 $('#' + id).val("");
           	});
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmConnectionTypeFW').removeClass('submitted');        	
        	$('#frmConnectionTypeFB').removeClass('submitted');        	
        	$('#frmGusstPlateYes').removeClass('submitted');
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmConnectionTypeFW');
        	clearFormFields('frmConnectionTypeFB');
        	clearFormFields('frmGusstPlateYes');  
        	
            $('#BAConnectiontype').val("connectionTypeFW");
            $("#BAConnectiontype").trigger("change");            
        	$('#drpGussetPlate').val("No");
        	$("#drpGussetPlate").trigger("change");            
        	$('.defaultValueZero').val(0);        	
        	        	
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
        	        	
        	var connectionTypeFormId;
        	var gussetTypeFormId ="" ;
        	
        	$('#frmMain').addClass('submitted');
        	$('#frmRefrenceDrawing').addClass('submitted');
        	
        	if($('#BAConnectiontype').val()=='connectionTypeFW')
        	{
        		$('#frmConnectionTypeFW').addClass('submitted');
        		$('#frmConnectionTypeFB').removeClass('submitted');
        		connectionTypeFormId = "frmConnectionTypeFW";
        	}
        	else if($('#BAConnectiontype').val()=='connectionTypeFB')
        	{
        		$('#frmConnectionTypeFB').addClass('submitted');
        		$('#frmConnectionTypeFW').removeClass('submitted');
        		connectionTypeFormId = "frmConnectionTypeFB";
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
        		var Lenght = $("#txtLength").val();
            	var Inch = $("#drpInch").find("option:selected").text();
            	var Fraction = $("#drpFraction").find("option:selected").text();
        	
        		validated = validateLength(Lenght,Inch,Fraction,"Length");
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
        	
        	
        	if($('#drpGussetPlate').find("option:selected").text() == "Yes")
        	{
        		$('#frmGusstPlateYes').addClass('submitted');
        		
        		$('#frmGusstPlateYes').find(':input').each(function(){  
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
        		if(validated)
            	{
        			
        			var GussetPlateSize1Inch = $("#drpGussetPlateSizeInch1").find("option:selected").text();
            		var GussetPlateSize1Fraction = $("#drpGussetPlateSizeFraction1").find("option:selected").text();    		
            		
    	        	var GussetPlateSize2Inch = $("#drpGussetPlateSizeIch2").find("option:selected").text() ;
    	        	var GussetPlateSize2Fraction = $("#drpGussetPlateFraction2").find("option:selected").text();    
    	        	            	
    	        	if(validateSize(GussetPlateSize1Inch,GussetPlateSize1Fraction,'Gusset Plate') == true &&
                		validateSize(GussetPlateSize2Inch,GussetPlateSize2Fraction,'Gusset Plate')== true)
                		validated = true;
                	else 
                		validated =false;
            	}
        		
        	}
        	else
        	{
        		$('#frmGusstPlateYes').removeClass('submitted');
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
        	var Shape  = $("#drpShape").find("option:selected").text(); 
        	var Profile = $("#drpProfile").find("option:selected").text();  
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();
        	
        	var Lenght = $("#txtLength").val();
        	var Inch = $("#drpInch").find("option:selected").text();
        	var Fraction = $("#drpFraction").find("option:selected").text();
        	
        	var TotalLength = feetInchFormater(Lenght,Inch,Fraction);
        	        	
        	var ConnectionType = $("#BAConnectiontype").find("option:selected").text();
        	
        	var WeldType ="" ,WeldSize ="";
        	var BoltGrade = "", BoltDia ="", NoOfBolts = "";
        	
        	if(ConnectionType == "Field Welded")
        	{        	
        		WeldType = $("#drpWeldType").find("option:selected").text(); 
        		WeldSize = $("#drpWeldSize").val() == "" ? "" : $("#drpWeldSize").find("option:selected").text() + '"';
        	}
        	else
        	{     
        		 
	        	 BoltGrade =$("#drpBoltGrade").find("option:selected").text();
	        	 BoltDia = $("#drpBoltDia").val()== "" ? "" :  $("#drpBoltDia").find("option:selected").text()+ '"';
	        	 NoOfBolts = $("#drpNoOfBoltRows").find("option:selected").text();
        	}
        	
        	var GussetPlate = $("#drpGussetPlate").find("option:selected").text();          	
        	var GussetPlateSize = "";
        	
        	var GussetPlateSize1 = ""; 
        	var GussetPlateSize1Inch = "";
        	var GussetPlateSize1Fraction = "";
        	
        	var GussetPlateSize2 = ""; 
        	var GussetPlateSize2Inch = "";
        	var GussetPlateSize2Fraction = "";
        	
        	var GussetPlateThickness = "";
        	var GussetPlateThicknessInch = "";
        	
        	if(GussetPlate == "Yes")
        	{
        		        		
        		GussetPlateSize1Inch = $("#drpGussetPlateSizeInch1").find("option:selected").text();
        		GussetPlateSize1Fraction = $("#drpGussetPlateSizeFraction1").find("option:selected").text();    		
        		GussetPlateSize1 = sizeFormater(GussetPlateSize1Inch,GussetPlateSize1Fraction) ; 
	        	
	        	
	        	GussetPlateSize2Inch = $("#drpGussetPlateSizeIch2").find("option:selected").text() ;
	        	GussetPlateSize2Fraction = $("#drpGussetPlateFraction2").find("option:selected").text();       	
	        	GussetPlateSize2 = sizeFormater(GussetPlateSize2Inch,GussetPlateSize2Fraction) ;        	
	        	
	        	/*Gusset Plate Size */
	        	GussetPlateSize = GussetPlateSize1 + " X " + GussetPlateSize2 ;	        	
	        	
	        	/*Gusset Plate Thickness */	        	
	        	GussetPlateThickness =  "PL " + $("#drpGussetPlateThicknessInch").find("option:selected").text() + '"';
	        
        	}
        	
        	if($('#drpGussetPlate').val()=='Yes' && $('#BAConnectiontype').val()=='connectionTypeFB')
        	{        		
        		WeldType = $("#drpWeldTypeforGussetPlate").find("option:selected").text(); 
        		WeldSize = $("#drpWeldSizeforGussetPlate").val() == "" ? "" : $("#drpWeldSizeforGussetPlate").find("option:selected").text() + '"';
        		WeldSizeDecimal = $("#drpWeldSizeforGussetPlate").val();
        		
        	}
        	        	
        	var FeetVal = Lenght * 12;
        	var InchVal = $("#drpInch").val();
        	var FractionVal = $("#drpFraction").val();
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);        	        	
        	var ProfileWeight = $("#drpProfile").val().split(",");        	
        	var MemberWeight_Lbs = (Total_Length * parseFloat(ProfileWeight[0]))/12;        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000;
        	        	
        	var Quantity = $("#txtQuantity").val();
        	
        	var Total_Member_Weight_Lbs = (MemberWeight_Lbs * parseInt(Quantity));        	
        	var Total_Member_Weight_Tons =(MemberWeight_Tons * parseInt(Quantity));
        	
        	var ReferenceDrawing = $("#drpReferenceDrawing").val();
        	
        	
        	if(isEdit == true)
        	{
        	$('#tbleKickerAngle').dataTable().fnUpdate(
        			['<label class="custom-control custom-checkbox" >'+
						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
						'<span class="custom-control-indicator"></span>'+
						'<span class="custom-control-description labelblk"></span></label>',
        			 RowNoForAddEdit, Shape,
        			 Profile,  MaterialGrade,
        			 TotalLength,  Quantity,
        			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),
        			 ConnectionType,  GussetPlate,
        			 GussetPlateSize, GussetPlateThickness,
        			 WeldType, WeldSize,
        			 BoltGrade, BoltDia,
        			 NoOfBolts, ReferenceDrawing,
        			 Lenght, Inch,
        			 Fraction, GussetPlateSize1Inch,
        			 GussetPlateSize1Fraction, GussetPlateSize2Inch,
        			 GussetPlateSize2Fraction,
        			 $("#drpWeldSize").val(),
        			 $("#drpBoltDia").val()], document.getElementById("row" + editRowNo));
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
		                          '<td>'+ GussetPlate + '</td>' +
					        	  '<td>'+ GussetPlateSize + '</td>' +
					        	  '<td>'+ GussetPlateThickness + '</td>' + 
		                          '<td>'+ WeldType + '</td>' + 
					        	  '<td>'+ WeldSize + '</td>' +
					        	  '<td>'+ BoltGrade + '</td>' + 
		      					  '<td>'+ BoltDia + '</td>' +
		      					  '<td>'+ NoOfBolts + '</td>' +    
		      					  '<td>'+ ReferenceDrawing + '</td>' +    
			      				  '<td style="display:none;">'+ Lenght + '</td>' + 
			      				  '<td style="display:none;">'+ Inch + '</td>' + 
			      				  '<td style="display:none;">'+ Fraction + '</td>' + 
			      				  '<td style="display:none;">'+ GussetPlateSize1Inch + '</td>' + 
			      				  '<td style="display:none;">'+ GussetPlateSize1Fraction + '</td>' + 
			      				  '<td style="display:none;">'+ GussetPlateSize2Inch + '</td>' + 
			      				  '<td style="display:none;">'+ GussetPlateSize2Fraction + '</td>' + 	
			      				  '<td style="display:none;">'+ $("#drpWeldSize").val() + '</td>' + 
			      				  '<td style="display:none;">'+ $("#drpBoltDia").val() + '</td>' + 
	      					  '</tr>' ;
	        	
	        	kickerangletable.row.add($(DataRow)).draw(false);
        	}
        	
        	constructJsonArrayFromTable();
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var BridingAngle = [];
        	
        	var table = $("#tbleKickerAngle tbody");
        	
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
		                    GussetPlate = $tds.eq(10).text(),                    
		                    GussetPlateSize = $tds.eq(11).text(),
		                    GussetPlateThickness = $tds.eq(12).text().replace('"','').replace('PL ',''),
		                    WeldType = $tds.eq(13).text(),
		                    WeldSize = $tds.eq(14).text().replace('"',''),
		                    BoltGrade = $tds.eq(15).text(),
		                    BoltDia = $tds.eq(16).text().replace('"',''),
		                    NoOfBolts = $tds.eq(17).text(),
		                    RefernceDrawing = $tds.eq(18).text(),
		                    LengthInFeet = $tds.eq(19).text(),
		                    LengthInInch = $tds.eq(20).text(),
		                    LengthInFraction = $tds.eq(21).text(),                    
		                    GussetPlateSize1Inch = $tds.eq(22).text(),
		                    GussetPlateSize1Fraction = $tds.eq(23).text(),                    
		                    GussetPlateSize2Inch = $tds.eq(24).text(),
		                    GussetPlateSize2Fraction = $tds.eq(25).text(),
		                    
		                    Weldsizedecimal1 = $tds.eq(26).text(),
		                    Boltdiadecimal= $tds.eq(27).text();
		                    
                var bridgeAngleArray = {
		                		 [shape]: Shape, 
			           			 [profile]:Profile,
			           			 [grade]:MaterialGrade,
			           			 [length] : {[feet]:LengthInFeet, 
			           				 		[inches]:LengthInInch, 
			           				 		[fraction]:LengthInFraction,
			           				 		[fractiondecimal]: eval(LengthInFraction)},
			           			 [quantity] : Quantity,                      
			           			 [connectiontype] : ConnectionType,
			           			 [memberweightlbs] : MemberWeightlbs,
			           			 [memberweightstons] : MemberWeightTons,
			           			 [gussetplate] : GussetPlate,
			            		 [gussetplatesize1] : {[inches]:GussetPlateSize1Inch, 
			           				 				  [fraction]:GussetPlateSize1Fraction,
			           				 				  [fractiondecimal]: eval(GussetPlateSize1Fraction)},
			           				 				  
			           			 [gussetplatesize2] : {[inches]:GussetPlateSize2Inch, 
			              				 				  [fraction]:GussetPlateSize2Fraction,
			              				 				  [fractiondecimal]: eval(GussetPlateSize2Fraction)},  
			              				 				  
			              		 [gussetplatethickness] : GussetPlateThickness.replace('"',''),
			              		 [weldtype] : WeldType,
			              			
			              		 [weldsize] : {[weldsizefraction]:WeldSize.replace('"',''), 
			              				 		[weldsizedecimal]:Weldsizedecimal1},
			              		 [boltgrade] : BoltGrade,		                     
			              			
			              		 [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
			              				 	  [boltdiadecimal]:Boltdiadecimal},
			              		 [noofbolts] : NoOfBolts,
			              		 [referencedrawing]: RefernceDrawing
			         }                 
                BridingAngle.push(bridgeAngleArray);
            });
           
                        
            $.ajax({            	
            	async: false,
		        type : 'POST',
		        url: "/bimspring/addMiscSteelJSON",
		        dataType : 'JSON',				
		        data: { miscsteelgroup:"KickerAngle",
		    	    miscsteeljson:JSON.stringify({"KickerAngle":BridingAngle})
		    	  },		    	
				success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
            });
        	
        }
       
         