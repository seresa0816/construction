var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	


var L_Profile = [];
var L_MaterialGrade = [];

var C_Profile = [];
var C_MaterialGrade = [];

var Plate_Profile = [];
var Plate_MaterialGrade = [];

var laddertable = "";

var shape = "shapes",
	profile = "profile",
	platethickness = "platethickness",
	plateThicknessfraction = "tp_fra",
	plateThicknessdecimal = "tp",	
	width = "width",
	grade = "grade",	
	quantity = "quantity",
	cage = "cage",
	rungdia = "rungdia",
	rungdiafraction = "d1_fra",
	rungdiadecimal = "d1",	
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr", 
	referencedrawing = "referencedrawing",
	memberweightlbs = "memberweightlbs",
	memberweightstons = "memberweightstons",
	runglength = "runglength",
	ladderlength = "ladderlength";


$(document).ready(function(){
	
	laddertable = $('#tableLadder').DataTable({	 	       		
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

		 $("#drpShape").change( function(){
			 
			 resetDrodown('drpProfile');
        	 resetDrodown('drpMaterialGrade');
        	 if($("#drpShape").val() != "")
	 	     {
        		 if($("#drpShape").val() == "L")
	        	 {
	        		 if(L_Profile.length == 0 || L_MaterialGrade.length == 0)
	        		 {
	        			 L_Profile = getProfiles($("#drpShape").val());
	        			 L_MaterialGrade  = getMaterialGrade($("#drpShape").val());
	        		 }
	        		 fillProfileDropdownList('drpProfile',L_Profile);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',L_MaterialGrade);	
	        		 
	        		 $("#divPlate").hide();
	            	 $("#divWidth").hide();
	                 $("#divProfile").show();  
	        		 
	        	 }
        		 else if($("#drpShape").val() == "C")
	        	 {
	        		 if(C_Profile.length == 0 || C_MaterialGrade.length == 0)
	        		 {
	        			 C_Profile = getProfiles($("#drpShape").val());
	        			 C_MaterialGrade  = getMaterialGrade($("#drpShape").val());
	        		 }
	        		 fillProfileDropdownList('drpProfile',C_Profile);
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',C_MaterialGrade);	
	        		 
	        		 $("#divPlate").hide();
	            	 $("#divWidth").hide();
	                 $("#divProfile").show();  
	        		 
	        	 }
        		 else if($("#drpShape").val() == "PLATE")
	        	 {
	        		 if(Plate_Profile .length == 0 || Plate_MaterialGrade .length == 0)
	        		 {
	        			 Plate_Profile  = getProfiles($("#drpShape").val());
	        			 Plate_MaterialGrade   = getMaterialGrade('Plates');
	        		 }
	        		 fillProfileDropdownList('drpProfile',Plate_Profile );
	        		 fillMaterialGradeDropdownList('drpMaterialGrade',Plate_MaterialGrade );	
	        		 
	        		 $("#divPlate").show();
	                 $("#divWidth").show();
	                 $("#divProfile").hide();
	        		 
	        	 }
	 	     }
        	 else
        	 {
        		 $("#divPlate").hide();
            	 $("#divWidth").hide();
                 $("#divProfile").show();  
        	 }
			 
             
         });
		 
	
	       
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableLadder tbody");
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
                    LadderType = $tds.eq(5).text(),
                    LadderLength = $tds.eq(6).text(),
                    Quantity = $tds.eq(7).text(), 
                    MemberWeightlbs = $tds.eq(8).text(),
                    MemberWeightTons = $tds.eq(9).text(), 
                    RungDia = $tds.eq(10).text(),		                   
                    RungLength = $tds.eq(11).text(),                    
                    ReferenceDrawing = $tds.eq(12).text(),                    
                    Thickness = $tds.eq(13).text(),		                    
                    WidthInInch = $tds.eq(14).text()== "" ? "0" : $tds.eq(14).text(),		                    
                    WidthInFraction = $tds.eq(15).text()== "" ? "0" : $tds.eq(14).text(),                    		                    
                    LadderLenghtInFeet = $tds.eq(16).text(),
                    LadderLengthInInch = $tds.eq(17).text() == "" ? "0" : $tds.eq(17).text(),
                    LadderLengthInFraction = $tds.eq(18).text() == "" ? "0" : $tds.eq(18).text(),                    
                    RungLengthInFeet = $tds.eq(19).text(),
                    RungLengthInInch = $tds.eq(20).text() == "" ? "0" : $tds.eq(20).text(),
                    RungLengthInFraction = $tds.eq(21).text()== "" ? "0" : $tds.eq(21).text();
		        		        	
		        	$('#drpShape').val(getOptId('drpShape', Shape));		        	
		        	$("#drpShape").trigger("change");
		        	
		        	if(Shape == "PLATE")
		        	{
		        		
		        		$('#drpSharePlateThickness').val(getOptId('drpSharePlateThickness', Thickness)).change();
		        		$('#drpWidthInInch').val(getOptId('drpWidthInInch', WidthInInch));
		        		$('#drpWidthInFraction').val(getOptId('drpWidthInFraction', WidthInFraction));
		        		
		        	}
		        	else
		        	{
		        		$('#drpProfile').val(getOptId('drpProfile', Profile)).change();		        		
		        	}
		        			        	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade',MaterialGrade)).trigger('change');		        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#drpCage').val(LadderType);		        	
		        	$('#drpRungDia').val(getOptId('drpRungDia', RungDia.replace('"','')));      
		        			        	
		        	$('#txtRungLength').val(RungLengthInFeet);
		        	$('#drpRungLengthInch').val(getOptId('drpRungLengthInch', RungLengthInInch));
		        	$('#drpRungLengthFraction').val(getOptId('drpRungLengthFraction', RungLengthInFraction));
		        	$('#txtLadderLength').val(LadderLenghtInFeet);
		        	$('#drpLadderLengthInch').val(getOptId('drpLadderLengthInch', LadderLengthInInch));		        	
		        	$('#drpLadderLengthFraction').val(getOptId('drpLadderLengthFraction', LadderLengthInFraction));
		        	
		        	var drawings = ReferenceDrawing.split(",");	       	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");		        	
		        
		        }
		    });
			
		}
		
		
		
		//Clear All Controls Data
        function clearFields() {
        	$('#frmMain').removeClass('submitted');        	
        	
        	clearFormFields('frmMain');  
        	
        	$("#drpShape").trigger('change');   
        	$(".defaultValueZero").val(0);
            
            $('#drpCage').val('Ladder Without Cage');
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	 $('#drpRungDia').val(BoltDiaGP);
        	 
        	$('.addTR').text("Add");
        	isEdit = false;
        	Selected = [];
        }
        
        //Validate Fields before saving
        function validateForm()
        {
        	        	
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
        	if(validated==true)
        	{
        		var RungLenght = $("#txtRungLength").val();
            	var RungInch = $("#drpRungLengthInch").find("option:selected").text();
            	var RungFraction = $("#drpRungLengthFraction").find("option:selected").text();
        	
        		var RungLenghtvalidated = validateLength(RungLenght,RungInch,RungFraction,"Rung Length");
        		
        		var LadderLenght = $("#txtLadderLength").val();
            	var LadderInch = $("#drpLadderLengthInch").find("option:selected").text();
            	var LadderFraction = $("#drpLadderLengthFraction").find("option:selected").text();
        	
        		var LadderLenghtvalidated = validateLength(LadderLenght,LadderInch,LadderFraction,"Ladder Length");
        		
        		if(RungLenghtvalidated == false || LadderLenghtvalidated== false)
        			validated =false;
        		
        		
        		if($("#drpShape").val() == "PLATE")
            	{
	        		var WidthInch = $("#drpWidthInInch").find("option:selected").text() ;
		        	var WidthFraction = $("#drpWidthInFraction").find("option:selected").text();    
		        	            	
	        		if(validateSize(WidthInch,WidthFraction,'Width') == false )            		
	        			validated =false;
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
        	var Profile = "", Thickness = "", ThicknessDecimal= "", WidthInInch = "" , WidthInFraction = "", TotalWidth = "";
        	if(Shape == "PLATE")
        	{
        		Thickness = $("#drpSharePlateThickness").find("option:selected").text();
        		ThicknessDecimal= $("#drpSharePlateThickness").val();
        		WidthInInch= $("#drpWidthInInch").find("option:selected").text();
        		WidthInFraction= $("#drpWidthInFraction").find("option:selected").text();
        		
        		TotalWidth =  sizeFormater(WidthInInch, WidthInFraction);
        		
        		Profile = Thickness + "X" +  TotalWidth;
        	}
        	else
        	{        	
        		Profile = $("#drpProfile").find("option:selected").text();
        	}
        	        	
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();        	
        	var Cage = $('#drpCage').val();
        	
        	var RungDia = $("#drpRungDia").find("option:selected").text() + '"';
        	
        	
        	
        	var RungLengthInFeet =  $("#txtRungLength").val();
        	var RungLengthInInch =  $("#drpRungLengthInch").find("option:selected").text() ;
        	var RungLengthInFraction =  $("#drpRungLengthFraction").find("option:selected").text() ;
       	 
        	var RungLength = feetInchFormater(RungLengthInFeet, RungLengthInInch , RungLengthInFraction);
        	
        	var LadderLenghtInFeet =  $("#txtLadderLength").val();
        	var LadderLengthInInch =  $("#drpLadderLengthInch").find("option:selected").text() ;
        	var LadderLengthInFraction =  $("#drpLadderLengthFraction").find("option:selected").text() ;
       	 
        	var LadderLength = feetInchFormater(LadderLenghtInFeet,LadderLengthInInch,LadderLengthInFraction);
   		
        	var ReferenceDrawing = $("#drpReferenceDrawing").val();
        	
        	var FeetVal = parseFloat(LadderLenghtInFeet) * 12;
        	var InchVal = $("#drpLadderLengthInch").val();
        	var FractionVal = $("#drpLadderLengthFraction").val();
        	
        	var Total_Length = parseInt(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);
        	
        	var RungFeetVal = RungLengthInFeet * 12;
        	var RungInchVal = $("#drpRungLengthInch").val();
        	var RungFractionVal = $("#drpRungLengthFraction").val();
        	
        	var Total_Rung_Lenght = parseFloat(RungFeetVal) + parseFloat(RungInchVal) + parseFloat(RungFractionVal);
        	
        	var RungDiaVal = $("#drpRungDia").val();
        	
        	var Weight_In_Pounds = (((3.14 * parseFloat(RungDiaVal)*parseFloat(RungDiaVal)*Total_Rung_Lenght) / 4 ) * (parseInt(LadderLenghtInFeet) - 1)) * 0.284;
        	
        	var MemberWeight_Lbs="",MemberWeight_Tons="";
        	
        	if(Cage == "Ladder Without Cage")
        	{
        		        	
	        	if(Shape == "PLATE")
	        	{
	        		var width = parseFloat($("#drpWidthInInch").val()) + parseFloat($("#drpWidthInFraction").val());
	        		var thickness = parseFloat($("#drpSharePlateThickness").val());	 
	        		var VerticalMemberWeigth = ((Total_Length * width * thickness) * 0.284 ) * 2 ;	
	        			        		
	        		MemberWeight_Lbs = (Weight_In_Pounds + VerticalMemberWeigth) * parseInt(Quantity);		        	
		        	MemberWeight_Tons = MemberWeight_Lbs/2000;
	        	}
	        	else
	        	{
	        				        	        	
		        	var ProfileWeight = $("#drpProfile").val().split(',');			        	
		        	var VerticalMemberWeigth = ((Total_Length * parseFloat(ProfileWeight[0]))/12) * 2;
		        			        	
		        	MemberWeight_Lbs = (Weight_In_Pounds + VerticalMemberWeigth) * parseInt(Quantity);
		        			        	
		        	MemberWeight_Tons = MemberWeight_Lbs/2000;
	        	}
        	}
        	else if(Cage == "Ladder With Cage")
        	{
        		
        		if(Shape == "PLATE")
	        	{
	        		var width = parseFloat($("#drpWidthInInch").val()) + parseFloat($("#drpWidthInFraction").val());
	        		var thickness = parseFloat($("#drpSharePlateThickness").val());	        		
	        		VerticalMemberWeigth = ((Total_Length * width * thickness) * 0.284 ) * 2 ;	        		
	        		var AdditionalWeight = 0;
	        		
	        		if(Total_Length > 120)
	        		{
	        			var diffvalue = Total_Length - 120;	        			
	        			AdditionalWeight = (diffvalue * 1.125); 
	        		}
	        		
	        		MemberWeight_Lbs = (Weight_In_Pounds + VerticalMemberWeigth + AdditionalWeight) * parseInt(Quantity) ;		        	
		        	MemberWeight_Tons = MemberWeight_Lbs/2000;
	        	}
	        	else
	        	{
		        	        	
		        	var ProfileWeight = $("#drpProfile").val().split(',');		        	
		        	var VerticalMemberWeigth = ((Total_Length * parseFloat(ProfileWeight[0]))/12) * 2;		        		        	
		        	var AdditionalWeight = 0;
	        		
	        		if(Total_Length > 120)
	        		{
	        			var diffvalue = Total_Length - 120;	        			
	        			AdditionalWeight = (diffvalue * 1.125); 
	        		}
	        		
	        		MemberWeight_Lbs = (Weight_In_Pounds + VerticalMemberWeigth + AdditionalWeight) * parseInt(Quantity) ;		        	
		        	MemberWeight_Tons = MemberWeight_Lbs/2000;
	        	}
        	}
        	
        	
        	var Total_Member_Weight_Lbs = MemberWeight_Lbs;        	
        	var Total_Member_Weight_Tons =MemberWeight_Tons;
        	
        	
        	if(isEdit == true)
        	{
        		$('#tableLadder').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit, Shape,
            			 Profile,  MaterialGrade,Cage,
            			 LadderLength,  Quantity,
            			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),            			          			 
            			 RungDia,  RungLength,ReferenceDrawing,
            			 Thickness, WidthInInch, WidthInFraction,          			 
            			 LadderLenghtInFeet, LadderLengthInInch, LadderLengthInFraction,            			 
            			 RungLengthInFeet,RungLengthInInch,RungLengthInFraction,
            			 ThicknessDecimal,
            			 $("#drpRungDia").val()], document.getElementById("row" + editRowNo));
        	
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
	                          '<td>'+ Cage + '</td>'+	                          
	                          '<td>'+ LadderLength + '</td>'+
	                          '<td>'+ Quantity + '</td>'+
	                          '<td>'+ Total_Member_Weight_Lbs.toFixed(3) +'</td>' + 
	      					  '<td>'+ Total_Member_Weight_Tons.toFixed(3) +'</td>'+	                          
				        	  '<td>'+ RungDia + '</td>' + 
	      					  '<td>'+ RungLength + '</td>' +	      					  
	      					  '<td>'+ ReferenceDrawing + '</td>' +  	      					  
	      					  '<td style="display:none;">'+ Thickness + '</td>' + 
		      				  '<td style="display:none;">'+ WidthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ WidthInFraction + '</td>'+	      					  
		      				  '<td style="display:none;">'+ LadderLenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ LadderLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ LadderLengthInFraction + '</td>' + 		      				  
		      				  '<td style="display:none;">'+ RungLengthInFeet + '</td>' +
				        	  '<td style="display:none;">'+ RungLengthInInch + '</td>' +
				        	  '<td style="display:none;">'+ RungLengthInFraction + '</td>' +
				        	  
				        	  '<td style="display:none;">'+ ThicknessDecimal + '</td>' +
				        	  '<td style="display:none;">'+ $("#drpRungDia").val() + '</td>' +
      					  '</tr>' ;
        	
        	laddertable.row.add($(DataRow)).draw(false);
        	}
        	
        	constructJsonArrayFromTable();
        	        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var Ladders = [];
        	
        	var table = $("#tableLadder tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),                    
		                	Shape = $tds.eq(2).text(),
		                    Profile = $tds.eq(3).text(),
		                    MaterialGrade = $tds.eq(4).text(),
		                    LadderType = $tds.eq(5).text(),
		                    LadderLength = $tds.eq(6).text(),
		                    Quantity = $tds.eq(7).text(),                    
		                    
		                    MemberWeightlbs = $tds.eq(8).text(),
		                    MemberWeightTons = $tds.eq(9).text(),                    
		                    
		                    RungDia = $tds.eq(10).text().replace('"',''),		                   
		                    RungLength = $tds.eq(11).text(),		                    
		                    ReferenceDrawing = $tds.eq(12).text(),
		                    
		                    Thickness = $tds.eq(13).text(),		                    
		                    WidthInInch = $tds.eq(14).text(),		                    
		                    WidthInFraction = $tds.eq(15).text(), 
		                   		                    
		                    LadderLenghtInFeet = $tds.eq(16).text(),
		                    LadderLengthInInch = $tds.eq(17).text(),
		                    LadderLengthInFraction = $tds.eq(18).text(),
		                    
		                    RungLengthInFeet = $tds.eq(19).text(),
		                    RungLengthInInch = $tds.eq(20).text(),
		                    RungLengthInFraction = $tds.eq(21).text(),
		                    
		                    ThicknessDecimal = $tds.eq(22).text(),		                    
		                    RungDiaDecimal = $tds.eq(23).text();
               
                if(Shape == "PLATE")
            	{
                	Profile = "";
            	}
               
               var LaddersArray = {
			                        [shape]: Shape,
			                        [profile]:Profile,
			                        [grade]:MaterialGrade,
			                        [cage] : LadderType,
			                        [ladderlength] : {[feet]:LadderLenghtInFeet, 
								 		    		 [inches]:LadderLengthInInch, 
								 		             [fraction]:LadderLengthInFraction,
								 		             [fractiondecimal]: eval(LadderLengthInFraction)},
			                       
			                        [quantity] : Quantity,
			                        [memberweightlbs] : MemberWeightlbs,
			                        [memberweightstons] : MemberWeightTons,
			                        
			                        [runglength] : {[feet]:RungLengthInFeet, 
								 		    		 [inches]:RungLengthInInch, 
								 		             [fraction]:RungLengthInFraction,
								 		             [fractiondecimal]: eval(RungLengthInFraction)},
			                       
			                        [referencedrawing] : ReferenceDrawing,
			                        
			                        [platethickness]:{[plateThicknessfraction]:Thickness, 
                     				   				   [plateThicknessdecimal]:ThicknessDecimal}, 
			                        
			                        [width] : {[inches]:WidthInInch, 
			                        			 [fraction]:WidthInFraction,
					 		                     [fractiondecimal]: eval(WidthInFraction)},
					 		                     
					 		        [rungdia] :{[rungdiafraction]:RungDia, 
									 			 [rungdiadecimal]:RungDiaDecimal}
			                       			                        
			                        }  
               
               Ladders.push(LaddersArray);
            });
            
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',				
    		    data: { miscsteelgroup:"Ladders",
    		    	    miscsteeljson:JSON.stringify({"Ladders":Ladders})
    		    	  },			    	
    			success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	  
				
            });
                    	
        }
    