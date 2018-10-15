var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var C_Profile = [];
var MC_Profile = [];
var W_Profile = [];

var C_MaterialGrade = [];
var MC_MaterialGrade = [];
var W_MaterialGrade = [];

var HSS_MaterialGrade = [];
var HSS_Profile = [];
var HSS_MaterialGrade2 = [];

var purlinstable = "";
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
	weldlength = "weldlength",
	length = "length";

$(document).ready(function(){	
	
	purlinstable = $('#tablePurlins').DataTable({	 	       		
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
                 $(".fieldsSWFW").hide();
                 $(".fieldsSWFB").show();
             }
             
         });
  
		//Shape Dropdown Change Event
         $("#drpShape").change(function() {  
        	 
        	 resetDrodown('drpProfile');        	
        	 resetDrodown('drpMaterialGrade');
        	 	       	
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
	      	
	      	else if($("#drpShape").val() == "MC")
        	 {
        		 if(MC_Profile.length == 0 || MC_MaterialGrade.length == 0)
        		 {
        			 MC_Profile = getProfiles($("#drpShape").val());
        			 MC_MaterialGrade  = getMaterialGrade($("#drpShape").val());
        		 }
        		 fillProfileDropdownList('drpProfile',MC_Profile);
        		 fillMaterialGradeDropdownList('drpMaterialGrade',MC_MaterialGrade);
        		 
        		 
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
	      	else if($("#drpShape").val() == "HSS")
	      	{
	        		 if(HSS_Profile.length == 0 || HSS_MaterialGrade.length == 0)
	        		 {
	        			 HSS_Profile = getProfiles($("#drpShape").val());
	        			 HSS_MaterialGrade  = getMaterialGrade("HSS_Rect.");
		       			 HSS_MaterialGrade2  = getMaterialGrade("HSS_Round");
	        		 }
	        		 fillProfileDropdownList('drpProfile',HSS_Profile);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',HSS_MaterialGrade);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',HSS_MaterialGrade2);
	        		
	      	 }
        	 
 	       }
        	 
         });
		
        
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tablePurlins tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				  rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;		        			        	
		        	                     
	                var	Shape = $tds.eq(2).text(),
	                    Profile = $tds.eq(3).text(),
	                    MaterialGrade = $tds.eq(4).text(),
	                    Length = $tds.eq(5).text(),
	                    Quantity = $tds.eq(6).text(), 	                    
	                    MemberWeightLbs = $tds.eq(7).text(),
	                    MemberWeightTons = $tds.eq(8).text(), 
	                    ConnectionType = $tds.eq(9).text(), 
	                    BoltGrade = $tds.eq(10).text(),
	                    BoltDia = $tds.eq(11).text(),
	                    NoOfBolts = $tds.eq(12).text(),
	                    WeldType = $tds.eq(13).text(),
	                    WeldSize = $tds.eq(14).text(),	                   
	                    WeldLength = $tds.eq(15).text(),
	                    ReferenceDrawing = $tds.eq(16).text(),
	                    LenghtInFeet = $tds.eq(17).text(),
	                    LengthInInch = $tds.eq(18).text() == "" ? "0" : $tds.eq(18).text(),
	                    LengthInFraction = $tds.eq(19).text() == "" ? "0" :  $tds.eq(19).text(),
	                    WeldLengthInFeet = $tds.eq(20).text(),                    
	                    WeldLengthInInch = $tds.eq(21).text() == "" ? "0" :  $tds.eq(21).text(),
	                    WeldLengthInFraction = $tds.eq(22).text() == "" ? "0" :  $tds.eq(22).text();
		        	
		        	
	                $('#drpShape').val(getOptId('drpShape', Shape));	        	
		        	$("#drpShape").trigger("change");
		        			        	
		        	$('#drpProfile').val(getOptId('drpProfile', Profile)).change();		        			        	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade', MaterialGrade)).change();
		        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLengthInFeet').val(LenghtInFeet);
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));
		        	
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));
		        	$('#ConnectionTypeScreenWall').val(getOptId('ConnectionTypeScreenWall', ConnectionType));		        			        	
		        	$("#ConnectionTypeScreenWall").trigger("change");
		        	
		        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoltGrade)).change();
		        	$('#drpBoltDia').val(getOptId('drpBoltDia', BoltDia.replace('"','')));
		        	
		        	$('#drpNoOfBoltRows').val(getOptId('drpNoOfBoltRows', NoOfBolts));
		        	$('#drpWeldType').val(getOptId('drpWeldType', WeldType));
		        	$('#drpWeldType').trigger("change");
		        	
		        	$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize.replace('"',''))).change();
		        	$('#txtWeldLength').val(WeldLengthInFeet);
		        	$('#drpWeldLengthInch').val(getOptId('drpWeldLengthInch', WeldLengthInInch));
		        	
		        	$('#drpWeldLengthFraction').val(getOptId('drpWeldLengthFraction', WeldLengthInFraction));
		        	
		        	drawings = ReferenceDrawing.split(',');		        	
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
        	
        	$("#drpShape").trigger("change");
        	
        	$(".defaultValueZero").val(0);
                   	
        	$('#ConnectionTypeScreenWall').val("connectionTypeSWFW");        	
        	$("#ConnectionTypeScreenWall").trigger("change");
        	       	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	clearDropDown();
        	
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
	           		{
	           			validated = false;
	           		}
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
	           		{
	           			validated = false;
	           		}
           		}           		
           	});        	
        	
        	$('#frmRefrenceDrawing').addClass('submitted');
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
        	
        	if(validated == true)
        	{
	        	var Len = $("#txtLengthInFeet").val();
	        	var Inch = $("#drpLengthInInch").find("option:selected").text();
	        	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
	        		    	
	        	validated = validateLength(Len,Inch,Fraction,"Length");
	        		        	
        	}
        	if(validated == true && connectionTypeFormId == "frmWelded")
        	{
	        	var Lenght = $("#txtWeldLength").val();
	        	var Inch = $("#drpWeldLengthInch").find("option:selected").text();
	        	var Fraction = $("#drpWeldLengthFraction").find("option:selected").text();
	    	
	        	validated = validateLength(Lenght,Inch,Fraction,"Weld Length");
	        	
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
        	
        	var LenghtInFeet = $("#txtLengthInFeet").val();
        	var LengthInInch = $("#drpLengthInInch").find("option:selected").text();
        	var LengthInFraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        	var TotalLength = feetInchFormater(LenghtInFeet, LengthInInch, LengthInFraction);        	
        	
        	var ConnectionType = $("#ConnectionTypeScreenWall").find("option:selected").text();
        	
        	var BoltGrade="",BoltDia="",NoOfBolts="", BoltDiaDecimal = "";
        	
        	var WeldType="",WeldSize="", WeldSizeDecimal = "";
        	
        	var WeldLengthInFeet ="", WeldLengthInInch="", WeldLengthInFraction="", WeldLenghtTotal="";
        	
        	if(ConnectionType == "Field Bolted")
        	{
        		BoltGrade = $("#drpBoltGrade").find("option:selected").text();
        		BoltDia= $("#drpBoltDia").find("option:selected").text() +'"';
        		BoltDiaDecimal= $("#drpBoltDia").val();
        		NoOfBolts= $("#drpNoOfBoltRows").find("option:selected").text();
        		
        	}
        	else if(ConnectionType == "Field Welded")
        	{
        		WeldType = $("#drpWeldType").find("option:selected").text();
        		WeldSize = $("#drpWeldSize").val() == "" ? "" : $("#drpWeldSize").find("option:selected").text() + '"';
        		WeldSizeDecimal = $("#drpWeldSize").val();
        		
        		WeldLengthInFeet=	$("#txtWeldLength").val();
        		WeldLengthInInch=	$("#drpWeldLengthInch").find("option:selected").text();
        		WeldLengthInFraction=	$("#drpWeldLengthFraction").find("option:selected").text();
        		
        		WeldLenghtTotal = feetInchFormater(WeldLengthInFeet,WeldLengthInInch,WeldLengthInFraction);
        	}
        	
        	        	
        	var FeetVal = LenghtInFeet * 12;
        	var InchVal = $("#drpLengthInInch").val();
        	var FractionVal = $("#drpLengthInFraction").val();
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);        	        	
        	var ProfileWeight = $("#drpProfile").val().split(',');
        	
        	var MemberWeight_Lbs = (Total_Length * parseFloat(ProfileWeight[0]))/12;        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000;
        	        	
        	var Quantity = $("#txtQuantity").val();        	
        	var Total_Member_Weight_Lbs = (MemberWeight_Lbs * parseInt(Quantity));        	
        	var Total_Member_Weight_Tons = (MemberWeight_Tons * parseInt(Quantity));
        	
        	var ReferenceDrawing = $('#drpReferenceDrawing').val();
        	        	 
        	if(isEdit == true)
         	{
         		$('#tablePurlins').dataTable().fnUpdate(
             			['<label class="custom-control custom-checkbox" >'+
     						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
     						'<span class="custom-control-indicator"></span>'+
     						'<span class="custom-control-description labelblk"></span></label>',
             			 RowNoForAddEdit, Shape,
             			 Profile,  MaterialGrade,
             			 TotalLength,  Quantity,
             			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),             			      			 
             			 ConnectionType, 
             			 BoltGrade, BoltDia,           			 
             			 NoOfBolts, WeldType, WeldSize,WeldLenghtTotal, ReferenceDrawing,            			 
             			 LenghtInFeet, LengthInInch,LengthInFraction,            			
             			 WeldLengthInFeet, WeldLengthInInch,WeldLengthInFraction,
             			 WeldSizeDecimal,
             			BoltDiaDecimal
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
	                          '<td>'+ Shape + '</td>' +
	                          '<td>'+ Profile + '</td>'+
	                          '<td>'+ MaterialGrade + '</td>'+	                          
	                          '<td>'+ TotalLength + '</td>'+
	                          '<td>'+ Quantity + '</td>'+
	                          '<td>'+ Total_Member_Weight_Lbs.toFixed(3) +'</td>' + 
	      					  '<td>'+ Total_Member_Weight_Tons.toFixed(3) +'</td>'+
	                          '<td>'+ ConnectionType + '</td>'+	                          
	                          '<td>'+ BoltGrade + '</td>' +
				        	  '<td>'+ BoltDia + '</td>' +
				        	  '<td>'+ NoOfBolts + '</td>' + 				        	  
	                          '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +				        	 
				        	  '<td>'+ WeldLenghtTotal + '</td>' + 	
				        	  '<td>'+ ReferenceDrawing + '</td>' + 			      				  
		      				  '<td style="display:none;">'+ LenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ LengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ LengthInFraction + '</td>' + 
		      				  '<td style="display:none;">'+ WeldLengthInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ WeldLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ WeldLengthInFraction + '</td>' + 
		      				  
		      				  '<td style="display:none;">'+ WeldSizeDecimal + '</td>' + 
		      				  '<td style="display:none;">'+ BoltDiaDecimal + '</td>' +
      					  '</tr>' ;
        	
        	purlinstable.row.add($(DataRow)).draw(false);
         	}
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var Purlin = [];
        	
        	var table = $("#tablePurlins tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),                    
		                	Shape = $tds.eq(2).text(),
		                    Profile = $tds.eq(3).text(),
		                    MaterialGrade = $tds.eq(4).text(),
		                    Length = $tds.eq(5).text(),
		                    Quantity = $tds.eq(6).text(), 
		                    MemberWeightLbs = $tds.eq(7).text(),
		                    MemberWeightTons = $tds.eq(8).text(), 
		                    ConnectionType = $tds.eq(9).text(),
		                    BoltGrade = $tds.eq(10).text(),
		                    BoltDia = $tds.eq(11).text(),
		                    NoOfBolts = $tds.eq(12).text(),
		                    WeldType = $tds.eq(13).text(),
		                    WeldSize = $tds.eq(14).text(),		                   
		                    WeldLength = $tds.eq(15).text(),
		                    RefernceDrawing = $tds.eq(16).text(),
		                    LenghtInFeet = $tds.eq(17).text(),
		                    LengthInInch = $tds.eq(18).text(),
		                    LengthInFraction = $tds.eq(19).text(), 
		                    WeldLengthInFeet = $tds.eq(20).text(),                    
		                    WeldLengthInInch = $tds.eq(21).text(),
		                    WeldLengthInFraction = $tds.eq(22).text(),
		                    
		                    Weldsizedecimal = $tds.eq(23).text(),
		                    Boltdiadecimal= $tds.eq(24).text();
              
               
               var purlinArray = {
		            		   [shape]: Shape, 
		          			   [profile]:Profile,
		          			   [grade]:MaterialGrade,
		          			   [length] :{[feet]:LenghtInFeet, 
		          				 		[inches]:LengthInInch, 
		          				 		[fraction]:LengthInFraction,
		          				 		[fractiondecimal]: eval(LengthInFraction)},
		          			   [quantity] : Quantity,                      
		          			   [connectiontype] : ConnectionType,
		          			   [memberweightlbs] : MemberWeightLbs,
		          			   [memberweightstons] : MemberWeightTons,          			 
		             		   [weldtype] : WeldType,
		             		   [weldsize] : {[weldsizefraction]:WeldSize.replace('"',''), 
		             				 			[weldsizedecimal]:Weldsizedecimal},
		             		   [boltgrade] : BoltGrade,	 
		             		   [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
		             				 			[boltdiadecimal]:Boltdiadecimal},
		             		   [noofbolts] : NoOfBolts,
		             		   [weldlength] :{[feet]:WeldLengthInFeet, 
		      				 					  [inches]:WeldLengthInInch, 
		      				 					  [fraction]:WeldLengthInFraction,
		      				 					  [fractiondecimal]: eval(WeldLengthInFraction)},
		             			 [referencedrawing]: RefernceDrawing,
			       }                 
               Purlin.push(purlinArray);
            });
                        
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',	
			    data: { miscsteelgroup:"Purlins",
			    	    miscsteeljson:JSON.stringify({"Purlins":Purlin})
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