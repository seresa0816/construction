var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var C_Profile = [];
var C_MaterialGrade = [];

var L_Profile = [];
var L_MaterialGrade = [];

var W_Profile= [];
var W_MaterialGrade = [];

var L2_Profile = [];
var L2_MaterialGrade = [];

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
	length = "length",
	pitchlength = "pitchlength",
	weldlength = "weldlength";

var linteltable = "";

$(document).ready(function(){
	
	linteltable = $('#tbleLintels').DataTable({	 	       		
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
		 $("#ConnectiontypeLintel").change( function(){
             if($('#ConnectiontypeLintel').val()=='connectionTypeLFW'){
                  $(".fieldsLFW").show();
                  //$(".fieldsLFB").hide();
                 
             }
             else if($('#ConnectiontypeLintel').val()=='connectionTypeLFB'){
                 $(".fieldsLFW").hide();
                 //$(".fieldsLFB").show();
             }
             
         });
	      
        
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tbleLintels tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				  rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;
		        			        	
		        	var Shape = $tds.eq(2).text(),
                    Profile = $tds.eq(3).text(),
                    MaterialGrade = $tds.eq(4).text(),
                    Length = $tds.eq(5).text(),
                    Quantity = $tds.eq(6).text(),                    
                    MemberWeightlbs = $tds.eq(7).text(),
                    MemberWeightTons = $tds.eq(8).text(),                    
                    ConnectionType = $tds.eq(9).text(),		                    
                                    
                    /*BoltGrade = $tds.eq(10).text(),		                   
                    BoltDia = $tds.eq(11).text(),
                    NoOfBolts = $tds.eq(12).text(),*/
                    
                    WeldType = $tds.eq(10).text(),
                    WeldSize = $tds.eq(11).text(),
                    
                    PitchLength = $tds.eq(12).text(),
                    WeldLength = $tds.eq(13).text(),
                    
                    RefernceDrawing = $tds.eq(14).text(),
                    LengthInFeet = $tds.eq(15).text(),
                    LengthInInch = $tds.eq(16).text() == "" ? "0" : $tds.eq(16).text(),
                    LengthInFraction = $tds.eq(17).text() == "" ? "0" : $tds.eq(17).text(),
                    
                    WeldLengthInFeet = $tds.eq(18).text(),
                    WeldLengthInInch = $tds.eq(19).text() == "" ? "0" : $tds.eq(19).text(),
                    WeldLengthInFraction = $tds.eq(20).text() == "" ? "0" : $tds.eq(20).text(),
                    
                    PitchLengthInFeet = $tds.eq(21).text(),
                    PitchLengthInInch = $tds.eq(22).text() == "" ? "0" : $tds.eq(22).text(),
                    PitchLengthInFraction = $tds.eq(23).text() == "" ? "0" : $tds.eq(23).text();
		        			        	
		        	$('#drpShape').val(getOptId('drpShape', Shape));		    
		        	$("#drpShape").trigger("change");
		        	
		        	
		        	$('#drpProfile').val(getOptId('drpProfile', Profile)).change();	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade', MaterialGrade)).trigger('change');
		        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLengthInFeet').val(LengthInFeet);
		        	
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));
		        	
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));
		        	
		        	$('#ConnectiontypeLintel').val(getOptId('ConnectiontypeLintel', ConnectionType));	
		        	
		        	$("#ConnectiontypeLintel").trigger("change");
		        	
		        	if(ConnectionType == "Field Welded")
		        	{
		        		$('#drpWeldedWeldType').val(getOptId('drpWeldedWeldType', WeldType));	
		        		$("#drpWeldedWeldType").trigger("change");
		        		$('#drpWeldedWeldSize').val(getOptId('drpWeldedWeldSize', WeldSize.replace('"',''))).change();		        					        	
		        		$('#txtWeldedPitchLengthInFeet').val(PitchLengthInFeet);		        		
		        		$('#drpWeldedPitchLengthInInch').val(getOptId('drpWeldedPitchLengthInInch', PitchLengthInInch));		        		
		        		$('#drpWeldedPitchLenghtInFraction').val(getOptId('drpWeldedPitchLenghtInFraction', PitchLengthInFraction));			        				        	
			        	$('#txtWeldedWeldLengthInFeet').val(WeldLengthInFeet);			        	
			        	$('#drpWeldedWeldLengthInInch').val(getOptId('drpWeldedWeldLengthInInch', WeldLengthInInch));
			        	$('#drpWeldedWeldLengthInFraction').val(getOptId('drpWeldedWeldLengthInFraction', WeldLengthInFraction));
		        		
		        	}
		        	/*else
		        	{
		        		$('#drpBoltedBoltGrade').val(getOptId('drpBoltedBoltGrade', BoltGrade)).change();
		        		$('#drpBoltedBoltDia').val(getOptId('drpBoltedBoltDia', BoltDia.replace('"','')));
		        		$('#drpBoltedNoOfBoltRows').val(getOptId('drpBoltedNoOfBoltRows', NoOfBolts));
		        	}	*/	        	
		        	
		        	var drawings = RefernceDrawing.split(",");	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");
		        
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmFieldWelded').removeClass('submitted');        	
        	$('#frmFieldBolted').removeClass('submitted'); 
        	$('#frmRefrenceDrawing').removeClass('submitted');   
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmFieldWelded');
        	clearFormFields('frmFieldBolted');
        	
        	
        	$("#drpShape").trigger('change');   
        	$(".defaultValueZero").val(0);
           
        	$('#ConnectiontypeLintel').val("connectionTypeLFW");        	        	
        	$("#ConnectiontypeLintel").trigger("change");
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
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
        	
        	if($('#ConnectiontypeLintel').val()=='connectionTypeLFW')
        	{
        		$('#frmFieldWelded').addClass('submitted');
        		$('#frmFieldBolted').removeClass('submitted');
        		connectionTypeFormId = "frmFieldWelded";
        	}
        	/*else if($('#ConnectiontypeLintel').val()=='connectionTypeLFB')
        	{
        		$('#frmFieldBolted').addClass('submitted');
        		$('#frmFieldWelded').removeClass('submitted');
        		connectionTypeFormId = "frmFieldBolted";
        	}*/
        	
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
        	if(validated==true)
       		{
       			var Lenght = $("#txtLengthInFeet").val();
            	var Inch = $("#drpLengthInInch").find("option:selected").text();
            	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
        	
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
        	
        	if(validated==true && connectionTypeFormId == "frmFieldWelded")
       		{
       			var PitchLenght = $("#txtWeldedPitchLengthInFeet").val();
            	var PitchInch = $("#drpWeldedPitchLengthInInch").find("option:selected").text();
            	var PitchFraction = $("#drpWeldedPitchLenghtInFraction").find("option:selected").text();
        	
        		var PitchLengthvalidated = validateLength(PitchLenght,PitchInch,PitchFraction,"Pitch Length");
        		
        		var WeldLenght = $("#txtWeldedWeldLengthInFeet").val();
            	var WeldInch = $("#drpWeldedWeldLengthInInch").find("option:selected").text();
            	var WeldFraction = $("#drpWeldedWeldLengthInFraction").find("option:selected").text();
        	
        		var WeldLengthvalidated = validateLength(WeldLenght,WeldInch,WeldFraction,"Weld Length");
        		
        		if(PitchLengthvalidated == false || WeldLengthvalidated == false)
        			validated= false;
        		
        		
        		var TotalPitchLength = parseFloat(PitchLenght)*12 + parseFloat(PitchInch) + parseFloat($("#drpWeldedPitchLenghtInFraction").val());
     			
    			var TotalWeldLength= parseFloat(WeldLenght)*12 + parseFloat(WeldInch) + parseFloat($("#drpWeldedWeldLengthInFraction").val());
    		    			
    			
        		var valid = validatePitchWeldLenght(TotalPitchLength,TotalWeldLength); 
            	if(valid == false)
            		validated = false;
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
        	
        	var TotalLength = feetInchFormater(Lenght , Inch , Fraction);
        	
        	var ConnectionType = $("#ConnectiontypeLintel").find("option:selected").text();
        	
        	var WeldType="", WeldSize="",WeldSizeDecimal="";
        	var BoltGrade="",BoltDia="",NoOfBolts="" , BoltDiaDecimal = "";
        	var WeldLength = "", WeldLengthInFeet = "", WeldLengthInInch="", WeldLengthInFraction="";
        	var PitchLength = "", PitchLengthInFeet = "", PitchLengthInInch="", PitchLengthInFraction="";
        	
        	
        	if(ConnectionType == "Field Welded")
        	{
        		 WeldType =  $("#drpWeldedWeldType").find("option:selected").text() ;
            	 WeldSize =  $("#drpWeldedWeldSize").val() == "" ? "" : $("#drpWeldedWeldSize").find("option:selected").text() + '"';
            	 WeldSizeDecimal ==  $("#drpWeldedWeldSize").val();
            	 
            	 PitchLengthInFeet =  $("#txtWeldedPitchLengthInFeet").val();
            	 PitchLengthInInch =  $("#drpWeldedPitchLengthInInch").find("option:selected").text() ;
            	 PitchLengthInFraction =  $("#drpWeldedPitchLenghtInFraction").find("option:selected").text() ;
            	 
            	 PitchLength = feetInchFormater(PitchLengthInFeet , PitchLengthInInch, PitchLengthInFraction);
            	 
            	 WeldLengthInFeet =  $("#txtWeldedWeldLengthInFeet").val();
            	 WeldLengthInInch =  $("#drpWeldedWeldLengthInInch").find("option:selected").text() ;
            	 WeldLengthInFraction =  $("#drpWeldedWeldLengthInFraction").find("option:selected").text() ;
            	 
            	 WeldLength = feetInchFormater(WeldLengthInFeet , WeldLengthInInch ,WeldLengthInFraction);
        		
        	}
        	/*else if(ConnectionType == "Field Bolted")
        	{
        		
        		BoltGrade = $("#drpBoltedBoltGrade").find("option:selected").text() ;
        		BoltDia =  $("#drpBoltedBoltDia").val()== "" ? "" : $("#drpBoltedBoltDia").find("option:selected").text() + '"';
        		BoltDiaDecimal=  $("#drpBoltedBoltDia").val();
        		NoOfBolts = $("#drpBoltedNoOfBoltRows").find("option:selected").text() ;
        	}*/
        	var ReferenceDrawing = $("#drpReferenceDrawing").val();
        	
        	
        	  	
        	var FeetVal = Lenght * 12;
        	var InchVal = $("#drpLengthInInch").val();
        	var FractionVal = $("#drpLengthInFraction").val();
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);
        	        	
        	var ProfileWeight = $("#drpProfile").val().split(',');
        	
        	var MemberWeight_Lbs = (Total_Length * parseFloat(ProfileWeight[0]))/12;
        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000;
        	        	
        	var Quantity = $("#txtQuantity").val();
        	
        	var Total_Member_Weight_Lbs = (MemberWeight_Lbs * parseInt(Quantity));
        	
        	var Total_Member_Weight_Tons =(MemberWeight_Tons * parseInt(Quantity));
        	
        	
        	if(isEdit == true)
         	{
         	$('#tbleLintels').dataTable().fnUpdate(
         			['<label class="custom-control custom-checkbox" >'+
 						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
 						'<span class="custom-control-indicator"></span>'+
 						'<span class="custom-control-description labelblk"></span></label>',
         			 RowNoForAddEdit, Shape,
         			 Profile,  MaterialGrade,
         			 TotalLength,  Quantity,
         			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),
         			 ConnectionType,
         			/* BoltGrade, BoltDia,
         			 NoOfBolts, */
         			 WeldType,WeldSize,
         			 PitchLength,WeldLength, ReferenceDrawing,       			 
         			 Lenght, Inch,Fraction,         			
         			 WeldLengthInFeet,WeldLengthInInch,WeldLengthInFraction,
         			 PitchLengthInFeet,PitchLengthInInch,PitchLengthInFraction,
         			 WeldSizeDecimal], document.getElementById("row" + editRowNo));
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
				        	  /*'<td>'+ BoltGrade + '</td>' + 
	      					  '<td>'+ BoltDia + '</td>' +
	      					  '<td>'+ NoOfBolts + '</td>' + */
	      					  '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +				        	  
				        	  '<td>'+ PitchLength + '</td>' + 
				        	  '<td>'+ WeldLength + '</td>' +
	      					  '<td>'+ ReferenceDrawing + '</td>' +  	      					  
		      				  '<td style="display:none;">'+ Lenght + '</td>' + 
		      				  '<td style="display:none;">'+ Inch + '</td>' + 
		      				  '<td style="display:none;">'+ Fraction + '</td>' + 		      				  
		      				  '<td style="display:none;">'+ WeldLengthInFeet + '</td>' +
				        	  '<td style="display:none;">'+ WeldLengthInInch + '</td>' +
				        	  '<td style="display:none;">'+ WeldLengthInFraction + '</td>' +		      				  
		      				  '<td style="display:none;">'+ PitchLengthInFeet + '</td>' +
				        	  '<td style="display:none;">'+ PitchLengthInInch + '</td>' +
				        	  '<td style="display:none;">'+ PitchLengthInFraction + '</td>' +
				        	  
				        	  '<td style="display:none;">'+ WeldSizeDecimal + '</td>' +
      					  '</tr>' ;
        	linteltable.row.add($(DataRow)).draw(false);
         	}
        	constructJsonArrayFromTable();
        	        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var Lintels = [];
        	
        	var table = $("#tbleLintels tbody");
        	
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
		                    /*BoltGrade = $tds.eq(10).text(),		                   
		                    BoltDia = $tds.eq(11).text(),
		                    NoOfBolts = $tds.eq(12).text(),*/
		                    WeldType = $tds.eq(10).text(),
		                    WeldSize = $tds.eq(11).text(),
		                    PitchLength = $tds.eq(12).text(),
		                    WeldLength = $tds.eq(13).text(),
		                    RefernceDrawing = $tds.eq(14).text(),
		                    LengthInFeet = $tds.eq(15).text(),
		                    LengthInInch = $tds.eq(16).text(),
		                    LengthInFraction = $tds.eq(17).text(),
		                    WeldLengthInFeet = $tds.eq(18).text(),
		                    WeldLengthInInch = $tds.eq(19).text(),
		                    WeldLengthInFraction = $tds.eq(20).text(),
		                    PitchLengthInFeet = $tds.eq(21).text(),
		                    PitchLengthInInch = $tds.eq(22).text(),
		                    PitchLengthInFraction = $tds.eq(23).text(),
		                    
		                    Weldsizedecimal = $tds.eq(24).text();  
                
               var LintelsArray = {            		   
		            		   [shape]: Shape,
		                       [profile]:Profile,
		                       [grade]:MaterialGrade,
		                       
		                       [length] :{[feet]:LengthInFeet, 
				 		    		 		[inches]:LengthInInch, 
				 		    		 		[fraction]:LengthInFraction,
				 		    		 		[fractiondecimal]: eval(LengthInFraction)},
				 		             
		                      
		                       [quantity] : Quantity,
		                       [memberweightlbs] : MemberWeightlbs,
		                       [memberweightstons] : MemberWeightTons,   
		                       [connectiontype] : ConnectionType,			                        
		                       [weldtype] : WeldType,
		                       
		                       [weldsize] : {[weldsizefraction]:WeldSize.replace('"',''), 
		           	   			             [weldsizedecimal]:Weldsizedecimal},
		                       /*[boltgrade] : BoltGrade,
		                       
		                       [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
							 				 [boltdiadecimal]:Boltdiadecimal},
		                       [noofbolts] : NoOfBolts,*/
		                       
		                       [pitchlength] : {[feet]:PitchLengthInFeet, 
				    		 					[inches]:PitchLengthInInch, 
				    		 					[fraction]:PitchLengthInFraction,
				    		 					[fractiondecimal]: eval(PitchLengthInFraction)},
		                       
				    		 	[weldlength] : {[feet]:WeldLengthInFeet, 
			 		    		 					[inches]:WeldLengthInInch, 
			 		    		 					[fraction]:WeldLengthInFraction,
			 		    		 					[fractiondecimal]: eval(WeldLengthInFraction)},				 		    		 					
		                       		                        
		                       [referencedrawing] : RefernceDrawing
			                       
			          }                 
               Lintels.push(LintelsArray);
            });
            
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',				
    		    data: { miscsteelgroup:"Lintels",
    		    	 miscsteeljson:JSON.stringify({"Lintels":Lintels})
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
        $("#drpShape").change(function() {  
        	
        	resetDrodown('drpProfile');
         	resetDrodown('drpMaterialGrade');
         	  	       	
   	       	if($("#drpShape").val() != "")
   	       	{
	   	       	if($("#drpShape").val() == "L")
	   	       	{
		       		 if(L_Profile.length == 0 || L_MaterialGrade.length == 0)
		       		 {
		       			L_Profile = getProfiles($("#drpShape").val());
		       			L_MaterialGrade = getMaterialGrade($("#drpShape").val());
		       		 }
		       		 fillProfileDropdownList('drpProfile',L_Profile);
		       		 fillMaterialGradeDropdownList('drpMaterialGrade',L_MaterialGrade)
	       		 
	   	       	}
	   	     else if($("#drpShape").val() == "C")
	   	       	{
		       		 if(C_Profile.length == 0 || C_MaterialGrade.length == 0)
		       		 {
		       			 C_Profile = getProfiles($("#drpShape").val());
		       			 C_MaterialGrade = getMaterialGrade($("#drpShape").val());
		       		 }
		       		 fillProfileDropdownList('drpProfile',C_Profile);
		       		 fillMaterialGradeDropdownList('drpMaterialGrade',C_MaterialGrade)
	       		 
	   	       	}
	   	     else if($("#drpShape").val() == "W")
	   	      {
	       		 if(W_Profile.length == 0 || W_MaterialGrade.length == 0)
	       		 {
	       			 W_Profile = getProfiles($("#drpShape").val());
	       			 W_MaterialGrade = getMaterialGrade($("#drpShape").val());
	       		 }
	       		 fillProfileDropdownList('drpProfile',W_Profile);
	       		 fillMaterialGradeDropdownList('drpMaterialGrade',W_MaterialGrade)
       		 
	   	      }
	   	  else if($("#drpShape").val() == "2L")
   	      {
       		 if(L2_Profile.length == 0 || L2_MaterialGrade.length == 0)
       		 {
       			 L2_Profile = getProfiles($("#drpShape").val());
       			 L2_MaterialGrade = getMaterialGrade("L");
       		 }
       		 fillProfileDropdownList('drpProfile',L2_Profile);
       		 fillMaterialGradeDropdownList('drpMaterialGrade',L2_MaterialGrade)
   		 
   	      }
   	       		
   	       	}
            
        });
        
     
         
         $("#drpWeldedWeldType").change( function(){
	           if($('#drpWeldedWeldType').val()=='CJP'){
	                $("#divWeldSize").hide(); 
	                $("#drpWeldedWeldSize").val('');
	           }
	           else {
	           	 $("#divWeldSize").show();
	           }
	           
	       });
                  
		