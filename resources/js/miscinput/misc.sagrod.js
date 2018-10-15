var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;
var sagrodtable = "";

var shape = "shapes",
	profile = "profile",
	grade = "grade",
	quantity = "quantity",
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr", 	
	boltgrade = "BoGr",
	boltdia = "boltdia",
	boltdiafraction = "d1_fra",
	boltdiadecimal = "d1",
	noofbolts="N",	
	referencedrawing = "referencedrawing",
	memberweightlbs = "memberweightlbs",
	memberweightstons = "memberweightstons",
	length = "length";

$(document).ready(function(){	
		
		
		sagrodtable = $('#tableSagRod').DataTable({	 	       		
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

         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableSagRod tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				  rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;		        			        	
		        	                     
	                var	Shape = $tds.eq(2).text(),
	                    Dia = $tds.eq(3).text(),
	                    MaterialGrade = $tds.eq(4).text(),
	                    Length = $tds.eq(5).text(),
	                    Quantity = $tds.eq(6).text(),
	                    MemberWeightLbs = $tds.eq(7).text(),
	                    MemberWeightTons = $tds.eq(8).text(),
	                    ReferenceDRawing = $tds.eq(9).text(),
	                    LenghtInFeet = $tds.eq(10).text(),
	                    LengthInInch = $tds.eq(11).text(),
	                    LengthInFraction = $tds.eq(12).text();
		        			        	
		        	$('#txtShape').val(Shape);
		        	
		        	$('#drpBoltDia').val(getOptId('drpBoltDia', Dia.replace('"',''))).change();	
		        	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade', MaterialGrade)).change();			        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLengthInFeet').val(LenghtInFeet);
		        	
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));
		        			        	
		        	var drawings = ReferenceDRawing.split(",");		
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");	
		        	
		        	
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	$('#frmMain').removeClass('submitted'); 
        	
        	$('#frmMain').find(':input').each(function(){
           		var id  = $(this).prop('id');
           		var Value =  $('#' + id).val(" ");
           	});
        	        	
        	$('#txtShape').val('Rod');  
        	$("#drpInch").val(0);
            $("#drpFraction").val(0);
                       
            UncheckAllCheckBox();
            clearSelect2Dropdown();
            
        	$('.addTR').text("Add");
        	isEdit = false;
            
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
	           		   		
	           		if(Value == "" && requ == true)   		
	           			validated = false;
           		}
           	});

        	if(validated == true)
        	{       		       			
        		var Lenght = $("#txtLengthInFeet").val();
            	var Inch = $("#drpLengthInInch").find("option:selected").text();
            	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
        	
            	validated = validateLength(Lenght,Inch,Fraction,"Length");
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
        	var Shape  = $("#txtShape").val(); 
        	var Dia = $("#drpBoltDia").find("option:selected").text() + '"';  
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();
        	
        	var LenghtInFeet = $("#txtLengthInFeet").val();
        	var LengthInInch = $("#drpLengthInInch").find("option:selected").text();
        	var LengthInFraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        	var TotalLength = feetInchFormater(LenghtInFeet, LengthInInch , LengthInFraction); 
        	        	
        	var FeetVal = LenghtInFeet * 12;
        	var InchVal = $("#drpLengthInInch").val();
        	var FractionVal = $("#drpLengthInFraction").val();        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);        	        	
        	
        	var Diameter = $("#drpBoltDia").val();
        	
        
        	
        	var Volume = (3.14 * parseFloat(Diameter) * parseFloat(Diameter) * Total_Length) / 4;
        	
        	
        	var Quantity = $("#txtQuantity").val();    
        	
        	var MemberWeight_Lbs = (Volume * 0.284 * parseInt(Quantity));  
        	
        	var MemberWeight_Tons = parseFloat(MemberWeight_Lbs/2000);
        	
        	var ReferenceDrawing = $("#drpReferenceDrawing").val();
        	
        	        	
        	if(isEdit == true)
        	{
        		$('#tableSagRod').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit, Shape,
            			 Dia,  MaterialGrade,
            			 TotalLength,  Quantity,
            			 MemberWeight_Lbs.toFixed(3), MemberWeight_Tons.toFixed(3),           			          			 
            			 ReferenceDrawing,LenghtInFeet,LengthInInch,LengthInFraction,
            			 $("#drpBoltDia").val()],
            			 document.getElementById("row" + editRowNo));
        	
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
	                          '<td>'+ Dia + '</td>'+
	                          '<td>'+ MaterialGrade + '</td>'+	                          
	                          '<td>'+ TotalLength + '</td>'+
	                          '<td>'+ Quantity + '</td>'+
	                          '<td>'+ MemberWeight_Lbs.toFixed(3) +'</td>' + 
	      					  '<td>'+ MemberWeight_Tons.toFixed(3) +'</td>'+
	      					  '<td>'+ ReferenceDrawing +'</td>'+
		      				  '<td style="display:none;">'+ LenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ LengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ LengthInFraction + '</td>' + 
		      				'<td style="display:none;">'+ $("#drpBoltDia").val() + '</td>' + 
      					  '</tr>' ;
        		sagrodtable.row.add($(DataRow)).draw(false);
        	}
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var SagRod = [];
        	
        	var table = $("#tableSagRod tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),                    
		                	Shape = $tds.eq(2).text(),
		                    Dia = $tds.eq(3).text(),
		                    MaterialGrade = $tds.eq(4).text(),
		                    Length = $tds.eq(5).text(),
		                    Quantity = $tds.eq(6).text(), 		                    
		                    MemberWeightLbs = $tds.eq(7).text(),
		                    MemberWeightTons = $tds.eq(8).text(), 
		                    ReferenceDrawing = $tds.eq(9).text(),
		                    LenghtInFeet = $tds.eq(10).text(),
		                    LengthInInch = $tds.eq(11).text(),
		                    LengthInFraction = $tds.eq(12).text(),
		                    LengthInFraction = $tds.eq(12).text(),
		                    Boltdiadecimal= $tds.eq(21).text(); 
                
               var sagRodArray = {
			                        [shape]: Shape ,			                        
			                        [boltdia] :{[boltdiafraction]:Dia.replace('"',''), 
             				 					[boltdiadecimal]:Boltdiadecimal},
			                        [grade]:MaterialGrade,	
			                        [length] : {[feet]:LenghtInFeet, 
				          				 		[inches]:LengthInInch, 
				          				 		[fraction]:LengthInFraction,
				          				 		[fractiondecimal]: eval(LengthInFraction)},
		          				 	[quantity] : Quantity,  
		          				 	[memberweightlbs] : MemberWeightLbs,
				          			[memberweightstons] : MemberWeightTons,
				          			[referencedrawing]: ReferenceDrawing
			         }                 
               SagRod.push(sagRodArray);
            });
                        
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',	
			    data: { miscsteelgroup:"SagRod",
			    	    miscsteeljson:JSON.stringify({"SagRod":SagRod})
			    	  },			    	
				success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
            });
        	
        }