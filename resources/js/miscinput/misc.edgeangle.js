var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var edgleangletable = "";
var shape = "shapes",
	profile = "profile",	
	grade = "grade",
	quantity = "quantity",
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr", 
	connectiontype = "connectiontype",	
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
	pitchlength = "pitchlength",
	weldlength = "weldlength",
	length = "length";


$(document).ready(function(){	
	
		try	{
			if ($.fn.DataTable.isDataTable("#tableEdgeAngle")) {
				  $('#tableEdgeAngle').DataTable().clear().destroy();
				}		
		}
		catch(err){
			
		}
		edgleangletable = $('#tableEdgeAngle').DataTable({	 	       		
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
	 	 
		 var LProfile = getProfiles("L");
		 var LMaterialGrade = getMaterialGrade("L");
		
		 fillProfileDropdownList('drpProfile',LProfile);
		 fillMaterialGradeDropdownList('drpMaterialGrade',LMaterialGrade);
		 
		
		//Checkbox Selection
		$("#checkAll").click(function() 
		{
            $(this).closest("table").find("td input:checkbox").prop("checked", this.checked);            
            
        });
		
        //Multi select dropdown
        $(".chosen-select").chosen({
            no_results_text: "Oops, nothing found!"   
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


        $("#EAConnectiontype").change(function(){
          if($('#EAConnectiontype').val()=='EAFB'){
              $(".fieldsFW").show();
              $(".fieldsFB").hide();
                    
          }
          else if($('#EAConnectiontype').val()=='EAFW'){
              $(".fieldsFW").hide();
              $(".fieldsFB").show();
          }
                
        });
  
        
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableEdgeAngle tbody");
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
	                    PitchLength = $tds.eq(15).text(),
	                    WeldLength = $tds.eq(16).text(),
	                    LenghtInFeet = $tds.eq(17).text(),
	                    LengthInInch = $tds.eq(18).text()== ""? "0" : $tds.eq(18).text(),
	                    LengthInFraction = $tds.eq(19).text()== ""? "0" : $tds.eq(18).text(),  
	                    PitchLenghtInFeet = $tds.eq(20).text(),
	                    PitchLengthInInch = $tds.eq(21).text()== ""? "0" : $tds.eq(21).text(),                    
	                    PitchLengthInFraction = $tds.eq(22).text()== ""? "0" : $tds.eq(22).text(), 
	                    WeldLengthInFeet = $tds.eq(23).text(),                    
	                    WeldLengthInInch = $tds.eq(24).text()=="" ? "0" : $tds.eq(24).text(),
	                    WeldLengthInFraction = $tds.eq(25).text()=="" ? "0" : $tds.eq(25).text(),
	                    RefernceDrawing = $tds.eq(26).text();
		        	
		        		
		        	$('#txtShape').val(Shape);		        	 
		        	$('#drpProfile').val(getOptId('drpProfile', Profile)).change();		        	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade', MaterialGrade)).change();
		        	
		        	
		        	$('#txtQuantity').val(Quantity);		        	
		        	$('#txtLengthInFeet').val(LenghtInFeet);
		        	
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));		        	
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));
		        	
		        	$('#EAConnectiontype').val(getOptId('EAConnectiontype', ConnectionType));		        	
		        	$("#EAConnectiontype").trigger("change");		        	
		        	
		        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoltGrade)).change();
		        	$('#drpBoltDia').val(getOptId('drpBoltDia', BoltDia.replace('"','')));	
		        	
		        	$('#drpNoOfBoltRows').val(getOptId('drpNoOfBoltRows', NoOfBolts));
		        	$('#txtWeldType').val('Fillet');
		        	
		        	$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize.replace('"',''))).change();
		        	
		        	$('#txtPitchLength').val(PitchLenghtInFeet);		        	
		        	$('#drpPitchLengthInch').val(getOptId('drpPitchLengthInch', PitchLengthInInch));
		        	$('#drpPitchLengthFraction').val(getOptId('drpPitchLengthFraction', PitchLengthInFraction));	        	
		        	
		        	
		        	$('#txtWeldLength').val(WeldLengthInFeet);		        	
		        	$('#drpWeldLengthInch').val(getOptId('drpWeldLengthInch', WeldLengthInInch));
		        	$('#drpWeldLengthFraction').val(getOptId('drpWeldLengthFraction', WeldLengthInFraction));
		        	
		        	var drawings = RefernceDrawing.split(",");	
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
        	
        	$('#txtShape').val('L');
        	$('#txtWeldType').val('Fillet');        	
        	        	
        	$('#EAConnectiontype').val("EAFB");        	
        	$("#EAConnectiontype").trigger("change");
        	
        	$('.defaultValueZero').val(0);
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	
        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoGrGp)).change();
       	    $('#drpBoltDia').val(BoltDiaGP);
       	    $('#drpWeldSize').val(getOptId('drpWeldSize', weldSizeGP)).change();
       	    
        	$('.addTR').text("Add");
        	isEdit = false;
        	Selected = [];
        }
        
        //Validate Fields before saving
        function validateForm()
        {
        	        	
        	var connectionTypeFormId;        	
        	
        	$('#frmMain').addClass('submitted');
        	
        	if($('#EAConnectiontype').val() =='EAFB')
        	{
        		$('#frmBolted').addClass('submitted');
        		
        		$('#frmWelded').removeClass('submitted');
        		
        		connectionTypeFormId = "frmBolted";
        	}
        	else if($('#EAConnectiontype').val() =='EAFW')
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
        	if(validated==true)
       		{
       			var Lenght = $("#txtLengthInFeet").val();
            	var Inch = $("#drpLengthInInch").find("option:selected").text();
            	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        		validated = validateLength(Lenght,Inch,Fraction,"Length");
       			
       		}
        	
        	
        	$('#'+connectionTypeFormId).find(':input').each(function(){   		
           		
           		var id  = $(this).prop('id');
           		if(id!="")
           		{
	           		var Value =  $('#' + id).val();   		
	           		var requ = $(this).prop('required');
	           		   		
	           		if(Value == "" && requ == true)   		
	           			validated = false;
           		}
           		
           		if(connectionTypeFormId== "frmWelded" && validated == true)
           		{
           			var PitchLenght = $("#txtPitchLength").val();
                	var PitchInch = $("#drpPitchLengthInch").find("option:selected").text();
                	var PitchFraction = $("#drpPitchLengthFraction").find("option:selected").text();
            	
            		var validatedPitchLength = validateLength(PitchLenght,PitchInch,PitchFraction,"Pitch Length");
            		
            		var WeldLenght = $("#txtWeldLength").val();
                	var WeldInch = $("#drpWeldLengthInch").find("option:selected").text();
                	var WeldFraction = $("#drpWeldLengthFraction").find("option:selected").text();
            	
            		var validatedWeldLength = validateLength(WeldLenght,WeldInch,WeldFraction,"Weld Length");
            		
            		if(validatedPitchLength == false || validatedWeldLength == false)
            			validated = false;
            		
            		var TotalPitchLength = parseFloat(PitchLenght)*12 + parseFloat(PitchInch) + parseFloat($("#drpPitchLengthFraction").val());
         			
        			var TotalWeldLength= parseFloat(WeldLenght)*12 + parseFloat(WeldInch) + parseFloat($("#drpWeldLengthFraction").val());
        		    			
        			
            		var valid = validatePitchWeldLenght(TotalPitchLength,TotalWeldLength); 
                	if(valid == false)
                		validated = false;
           			
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
        	var Shape  = $("#txtShape").val(); 
        	var Profile = $("#drpProfile").find("option:selected").text();  
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();
        	
        	var LenghtInFeet = $("#txtLengthInFeet").val();
        	var LengthInInch = $("#drpLengthInInch").find("option:selected").text();
        	var LengthInFraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        	var TotalLength = feetInchFormater(LenghtInFeet , LengthInInch , LengthInFraction);        	
        	
        	var ConnectionType = $("#EAConnectiontype").find("option:selected").text();
        	
        	var BoltGrade="",BoltDia="",NoOfBolts="";
        	
        	var WeldType="",WeldSize="",
        		PitchLengthInFeet="",PitchLengthInInch="",
        		PitchLengthInFraction="", PitchLengthTotal="";
        	
        	var WeldLengthInFeet ="", WeldLengthInInch="", WeldLengthInFraction="", WeldLenghtTotal="";
        	
        	if(ConnectionType == "Field bolted")
        	{
        		BoltGrade = $("#drpBoltGrade").find("option:selected").text();
        		BoltDia= $("#drpBoltDia").val() == "" ? "" : $("#drpBoltDia").find("option:selected").text() + '"';
        		NoOfBolts= $("#drpNoOfBoltRows").find("option:selected").text();
        		
        	}
        	else if(ConnectionType == "Field welded")
        	{
        		WeldType = $("#txtWeldType").val();
        		WeldSize = $("#drpWeldSize").val() == "" ? "" : $("#drpWeldSize").find("option:selected").text()+ '"' ;
        		
        		
        		PitchLengthInFeet=	$("#txtPitchLength").val();
        		PitchLengthInInch=	$("#drpPitchLengthInch").find("option:selected").text();
        		PitchLengthInFraction=	$("#drpPitchLengthFraction").find("option:selected").text();
        		
        		PitchLengthTotal = feetInchFormater(PitchLengthInFeet , PitchLengthInInch , PitchLengthInFraction);
        		
        		WeldLengthInFeet=	$("#txtWeldLength").val();
        		WeldLengthInInch=	$("#drpWeldLengthInch").find("option:selected").text();
        		WeldLengthInFraction=	$("#drpWeldLengthFraction").find("option:selected").text();
        		
        		WeldLenghtTotal = feetInchFormater(WeldLengthInFeet , WeldLengthInInch , WeldLengthInFraction);
        	}
        	var ReferenceDrawing = $('#drpReferenceDrawing').val();
        	        	
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
        	        	
        	if(isEdit == true)
        	{
        	$('#tableEdgeAngle').dataTable().fnUpdate(
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
        			 NoOfBolts, WeldType,WeldSize,
        			 PitchLengthTotal,WeldLenghtTotal,        			 
        			 LenghtInFeet, LengthInInch,LengthInFraction,
        			 PitchLengthInFeet,PitchLengthInInch,PitchLengthInFraction,
        			 WeldLengthInFeet,WeldLengthInInch,WeldLengthInFraction,
        			 ReferenceDrawing,
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
	                          '<td>'+ BoltGrade + '</td>' +
				        	  '<td>'+ BoltDia + '</td>' +
				        	  '<td>'+ NoOfBolts + '</td>' + 				        	  
	                          '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +
				        	  '<td>'+ PitchLengthTotal + '</td>' +
				        	  '<td>'+ WeldLenghtTotal + '</td>' + 
		      				  '<td style="display:none;">'+ LenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ LengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ LengthInFraction + '</td>' + 
		      				  '<td style="display:none;">'+ PitchLengthInFeet + '</td>' +       					
		      				  '<td style="display:none;">'+ PitchLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ PitchLengthInFraction + '</td>' + 
		      				  '<td style="display:none;">'+ WeldLengthInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ WeldLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ WeldLengthInFraction + '</td>' +
		      				  '<td>'+ ReferenceDrawing + '</td>' + 
		      				  '<td style="display:none;">'+ $("#drpWeldSize").val() + '</td>' + 
		      				  '<td style="display:none;">'+ $("#drpBoltDia").val() + '</td>' +
      					  '</tr>' ;
        	
        		edgleangletable.row.add($(DataRow)).draw(false);
        	}
        	
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var EdgeAngle = [];
        	
        	var table = $("#tableEdgeAngle tbody");
        	
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
		                    PitchLength = $tds.eq(15).text(),
		                    WeldLength = $tds.eq(16).text(),
		                    LenghtInFeet = $tds.eq(17).text(),
		                    LengthInInch = $tds.eq(18).text(),
		                    LengthInFraction = $tds.eq(19).text(),
		                    PitchLenghtInFeet = $tds.eq(20).text(),
		                    PitchLengthInInch = $tds.eq(21).text(),                    
		                    PitchLengthInFraction = $tds.eq(22).text(),
		                    WeldLengthInFeet = $tds.eq(23).text(),                    
		                    WeldLengthInInch = $tds.eq(24).text(),
		                    WeldLengthInFraction = $tds.eq(25).text(),
		                    ReferenceDrawing = $tds.eq(26).text(),
		                    
		                    Weldsizedecimal = $tds.eq(27).text(),
		                    Boltdiadecimal= $tds.eq(28).text();
                
             
               var edgeAngleArray = {
            		   
            		   [shape]: Shape ,
                       [profile]:Profile,
                       [grade]:MaterialGrade,	
                       [length] : {[feet]:LenghtInFeet, 
   						 		 [inches]:LengthInInch, 
   						 		 [fraction]:LengthInFraction,
   						 		 [fractiondecimal]: eval(LengthInFraction)},
   						 		 
   				 	   [quantity] : Quantity,
                       [memberweightlbs] : MemberWeightLbs,
                       [memberweightstons] : MemberWeightTons,  
                       [connectiontype] : ConnectionType,
                       [boltgrade] : BoltGrade,
                       
                       [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
							 [boltdiadecimal]:Boltdiadecimal},
							 
                       [noofbolts]: NoOfBolts,
                       [weldtype] : WeldType,
                      
                       [weldsize] :{[weldsizefraction]:WeldSize.replace('"',''), 
                    	   			  [weldsizedecimal]:Weldsizedecimal},
                       
                       [pitchlength] : {[feet]:PitchLenghtInFeet, 
                       					[inches]:PitchLengthInInch, 
                       					[fraction]:PitchLengthInFraction,
                       					[fractiondecimal]: eval(PitchLengthInFraction)},
                       					
                       [weldlength] : {[feet]:WeldLengthInFeet, 
   				 					[inches]:WeldLengthInInch, 
   				 					[fraction]:WeldLengthInFraction,
   				 				    [fractiondecimal]: eval(WeldLengthInFraction)},
   				 				    
                       [referencedrawing] : ReferenceDrawing
                       
			        }                 
               EdgeAngle.push(edgeAngleArray);
            });
            
            
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',				
    		    data: { miscsteelgroup:"EdgeAngle",
    		    	 miscsteeljson:JSON.stringify({"EdgeAngle":EdgeAngle})
    		    	  },			    	
    			success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	  
				
            });
        }
       
         
		 
         