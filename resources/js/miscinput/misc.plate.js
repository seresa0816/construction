var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	


var shape = "shapes",
	plateThickness = "platethickness",
	plateThicknessfraction ="tp_fra", 
	plateThicknessdecimal = "tp",		
	grade = "grade",
	quantity = "quantity",
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr", 
	connectiontype = "connectiontype",		
	referencedrawing = "referencedrawing",
	memberweightlbs = "memberweightlbs",
	memberweightstons = "memberweightstons",	
	boltgrade = "BoGr",
	boltdia = "boltdia",
	boltdiafraction = "d1_fra",
	boltdiadecimal = "d1",	
	weldtype = "wtype",	
	weldsize = "weldsize",
	weldsizefraction = "weld_fra",
	weldsizedecimal = "weld",	
	noofboltsrow="noofboltsrow",
	noofboltscolumn="noofboltscolumn",
	rowspacingx="rowspacing",
	columnspacingy="columnspacing",
	boltspacingfraction = "s_fra",
	boltspacingdecimal = "s",
	platewidth = "platewidth",
	weldlength = "weldlength";

var miscplatetable = "";	

$(document).ready(function(){	
	
	miscplatetable = $('#tbleMiscPlate').DataTable({	 	       		
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
		
		var MaterialGrade = getMaterialGrade("Plates");		
		fillMaterialGradeDropdownList('drpMaterialGrade',MaterialGrade)
		
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
	    $("#ConnectiontypeMP").change( function(){			 
             if($('#ConnectiontypeMP').val()=='connectionTypeMPFW'){
                 
                  $(".fieldsMPFW").show();
                  $(".fieldsMPFB").hide();
              }
             else if($('#ConnectiontypeMP').val()=='connectionTypeMPFB'){
                
                 $(".fieldsMPFW").hide();
                  $(".fieldsMPFB").show();
             }
         });
	      
        
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tbleMiscPlate tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				  rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;
		        	
		        	var Shape = $tds.eq(2).text(),
	                Thickness = $tds.eq(26).text(),
	                MaterialGrade = $tds.eq(4).text(),
	                PlateWIdth = $tds.eq(5).text(),                   
	                Quantity = $tds.eq(6).text(),
	                MemberWeightlbs = $tds.eq(7).text(),
	                MemberWeightTons = $tds.eq(8).text(),
	                ConnectionType = $tds.eq(9).text(),
	                BoltGrade = $tds.eq(10).text(),		                   
	                BoltDia = $tds.eq(11).text(),
	                NoOfBoltsRows = $tds.eq(12).text(),
	                RowSpacing = $tds.eq(13).text(),
	                NoOfBoltsColumns = $tds.eq(14).text(),
	                ColumnSpacing = $tds.eq(15).text(),
	                WeldType = $tds.eq(16).text(),
	                WeldSize = $tds.eq(17).text(),                   
	                WeldLength = $tds.eq(18).text(),                    
	                RefernceDrawing = $tds.eq(19).text(),                    
	                PlateWidthInFeet = $tds.eq(20).text(),
	                PlateWidthInInch = $tds.eq(21).text(),
	                PlateWidthInFraction = $tds.eq(22).text(),                    
	                WeldLengthInFeet = $tds.eq(23).text(),
	                WeldLengthInInch = $tds.eq(24).text(),
	                WeldLengthInFraction = $tds.eq(25).text();
		        	
		        	
		        	$('#txtShape').val(Shape);		        	
		        	$('#drpThickness').val(getOptId('drpThickness', Thickness.replace('"',''))).change();		        	
		        	 	
		        	$('#drpMaterialGrade').val(MaterialGrade).trigger('change');		        	
		        	$('#txtQuantity').val(Quantity);
		        	
		        	$('#ConnectiontypeMP').val(getOptId('ConnectiontypeMP', ConnectionType));			        	
		        	$("#ConnectiontypeMP").trigger("change");
		        	
		        	if(ConnectionType == "Field Welded")
		        	{
		        		$('#txtPlateWidthInFeet').val(PlateWidthInFeet);		        		
		        		$('#drpPlateWidthInInch').val(getOptId('drpPlateWidthInInch', PlateWidthInInch));
		        		$('#drpPlateWidthInFraction').val(getOptId('drpPlateWidthInFraction', PlateWidthInFraction));		        		
		        		
		        		$('#txtFieldWeldedLengthInFeet').val(WeldLengthInFeet);		        		
		        		$('#drpFieldWeldedLengthInInch').val(getOptId('drpFieldWeldedLengthInInch', WeldLengthInInch));			        		
		        		$('#drpFieldWeldedLengthInFraction').val(getOptId('drpFieldWeldedLengthInFraction', WeldLengthInFraction));		        		
		        		$('#drpFieldWeldedWeldType').val(getOptId('drpFieldWeldedWeldType', WeldType));	
		        		$("#drpFieldWeldedWeldType").trigger("change");		        		
		        		$('#drpFieldWeldedWeldSize').val(getOptId('drpFieldWeldedWeldSize', WeldSize.replace('"',''))).change();	
		        				        		
		        	}
		        	else
		        	{
		        		$('#drpFieldBoltedBoltGrade').val(getOptId('drpFieldBoltedBoltGrade', BoltGrade)).change();
		        		$('#drpFieldBoltedBoltDia').val(getOptId('drpFieldBoltedBoltDia', BoltDia.replace('"','')));		        		
		        		
		        		$('#drpFieldBoltedNoOfBoltRows').val(getOptId('drpFieldBoltedNoOfBoltRows', NoOfBoltsRows));
		        		$('#drpFieldBoltRowSpacing').val(getOptId('drpFieldBoltRowSpacing', RowSpacing.replace('"',''))).change();
		        		
		        		$('#drpFieldBoltedNoOfBoltColumns').val(getOptId('drpFieldBoltedNoOfBoltColumns', NoOfBoltsColumns));
		        		$('#drpFieldBoltColumnSpacing').val(getOptId('drpFieldBoltColumnSpacing', ColumnSpacing.replace('"',''))).change();
		        		
		        		$('#drpFieldBoltedWeldType').val(getOptId('drpFieldBoltedWeldType', WeldType));
		        		$("#drpFieldBoltedWeldType").trigger("change");	
		        		$('#drpFieldBoltedWeldSize').val(getOptId('drpFieldBoltedWeldSize', WeldSize.replace('"',''))).change();
		        		
		        	}
		        			        	
		        	var drawings = RefernceDrawing.split(",");		        	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");
		        
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmFieldBolted').removeClass('submitted');        	
        	$('#frmFieldWelded').removeClass('submitted'); 
        	$('#frmRefrenceDrawing').removeClass('submitted');     
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmFieldWelded');
        	clearFormFields('frmFieldBolted');
        	
        	$("#txtShape").val("Plate");
        	$("#drpPlateWidthInInch").val(0);
            $("#drpPlateWidthInFraction").val(0);
            
            $("#drpFieldWeldedLengthInInch").val(0);
            $("#drpFieldWeldedLengthInFraction").val(0);
        	
        	$('#ConnectiontypeMP').val("connectionTypeMPFW");        	        	
        	$("#ConnectiontypeMP").trigger("change");
        	        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	
        	$('#drpFieldBoltedBoltGrade').val(getOptId('drpFieldBoltedBoltGrade', BoGrGp)).change();
         	$('#drpFieldBoltedBoltDia').val(BoltDiaGP);
        	
        	$('.addTR').text("Add");
        	isEdit = false;
        }
        
        //Validate Fields before saving
        function validateForm()
        {        	        	
        	var connectionTypeFormId;        	
        	
        	$('#frmMain').addClass('submitted');
        	
        	if($('#ConnectiontypeMP').val()=='connectionTypeMPFW')
        	{
        		$('#frmFieldWelded').addClass('submitted');
        		$('#frmFieldBolted').removeClass('submitted');
        		connectionTypeFormId = "frmFieldWelded";
        	}
        	else if($('#ConnectiontypeMP').val()=='connectionTypeMPFB')
        	{
        		$('#frmFieldBolted').addClass('submitted');
        		$('#frmFieldWelded').removeClass('submitted');
        		connectionTypeFormId = "frmFieldBolted";
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
        	
        	if(connectionTypeFormId == 'frmFieldWelded' && validated == true)
       		{
       			var PlateWidthInFeet = $("#txtPlateWidthInFeet").val();
            	var PlateWidthInInch = $("#drpPlateWidthInInch").find("option:selected").text();
            	var PlateWidthInFraction = $("#drpPlateWidthInFraction").find("option:selected").text();
        	
            	var PlateWidthvalidated = validateLength(PlateWidthInFeet,PlateWidthInInch,PlateWidthInFraction,"Plate Width");
            	
            	var WeldLengthInFeet = $("#txtFieldWeldedLengthInFeet").val();
            	var WeldLengthInInch = $("#drpFieldWeldedLengthInInch").find("option:selected").text();
            	var WeldLengthInFraction = $("#drpFieldWeldedLengthInFraction").find("option:selected").text();
        	
            	var WeldLengthvalidated = validateLength(WeldLengthInFeet,WeldLengthInInch,WeldLengthInFraction,"Weld Length");
            	
            	if(PlateWidthvalidated == false || WeldLengthvalidated== false)
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
        
        	if(isEdit == true)
        	{
        		RowNoForAddEdit = editRowNo;      		
        	}
        	else
        	{        		
        		RowNo = RowNo + 1;        		
        		RowNoForAddEdit = RowNo;
        	}  
        	
       	   var ThicknessDecimal="",
         	  WeldSizeDecimal="",
         	  BoltSizeDecimal="",
         	  RowSpacingDecimal="",
         	  ColumnSpacingDecimal ="";
       	 
        	var Shape  = $("#txtShape").val(); 
        	var Thickness = $("#drpThickness").find("option:selected").text(); 
        	ThicknessDecimal = $("#drpThickness").val();
        	
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();
        	
        	var ConnectionType = $("#ConnectiontypeMP").find("option:selected").text();
        	
        	var PlateWidthInFeet = "", PlateWidthInInch ="",PlateWidthInFraction ="", TotalPlateWidth = "";
        	var WeldType="", WeldSize="";
        	var WeldLengthInFeet = "", WeldLengthInInch ="",WeldLengthInFraction ="", TotalWeldLength = "";
        	
        	var BoltGrade = "",BoltDia = "",NoOfBoltsRows = "", NoOfBoltsColumn = "" ;
        	
        	var MemberWeight_Lbs = "";
        	
        	var MemberWeight_Tons = "";
        
        	        	
        	var Quantity = $("#txtQuantity").val();
        	
        	var RowSpacing = $("#drpFieldBoltRowSpacing").val() == "" ? "" : $("#drpFieldBoltRowSpacing").find("option:selected").text() + '"';
        	RowSpacingDecimal = $("#drpFieldBoltRowSpacing").val();
        	
        	var ColumnSpacing = $("#drpFieldBoltColumnSpacing").val() == "" ? "" : $("#drpFieldBoltColumnSpacing").find("option:selected").text() + '"';
        	ColumnSpacingDecimal = $("#drpFieldBoltColumnSpacing").val();
        	
        	var PlateProfile = "";
        	if(ConnectionType == 'Field Welded')
        	{
	        	PlateWidthInFeet = $("#txtPlateWidthInFeet").val();
	        	PlateWidthInInch = $("#drpPlateWidthInInch").find("option:selected").text();
	        	PlateWidthInFraction = $("#drpPlateWidthInFraction").find("option:selected").text();
	        	
	        	TotalPlateWidth= feetInchFormater(PlateWidthInFeet,PlateWidthInInch, PlateWidthInFraction);
	        	
	        	WeldType =  $("#drpFieldWeldedWeldType").find("option:selected").text() ;
           	    WeldSize =  $("#drpFieldWeldedWeldSize").val() == "" ? "" : $("#drpFieldWeldedWeldSize").find("option:selected").text() + '"';
           	    
           	    WeldSizeDecimal= $("#drpFieldWeldedWeldSize").val() ;
           	    
           	    WeldLengthInFeet =  $("#txtFieldWeldedLengthInFeet").val();
           	    WeldLengthInInch =  $("#drpFieldWeldedLengthInInch").find("option:selected").text() ;
           	    WeldLengthInFraction =  $("#drpFieldWeldedLengthInFraction").find("option:selected").text() ;
        	 
           	    WeldLength = feetInchFormater(WeldLengthInFeet , WeldLengthInInch, WeldLengthInFraction);
           	    
	           	var PlateFeetVal = PlateWidthInFeet * 12;
	         	var PlateInchVal = $("#drpPlateWidthInInch").val();
	         	var PlateFractionVal = $("#drpPlateWidthInFraction").val();
	         	
	         	var PlateWidth = parseFloat(PlateFeetVal) + parseFloat(PlateInchVal) + parseFloat(PlateFractionVal);
	         	
	         	var WeldLengthFeetVal = WeldLengthInFeet * 12;
	        	var WeldLengthInchVal = $("#drpFieldWeldedLengthInInch").val();
	        	var WeldLengthFractionVal = $("#drpFieldWeldedLengthInFraction").val();
	        	
	        	var WeldLengthVal = parseFloat(WeldLengthFeetVal) + parseFloat(WeldLengthInchVal) + parseFloat(WeldLengthFractionVal);
	        	
	        	var GreaterLength = WeldLengthVal >=  PlateWidth ? WeldLength : TotalPlateWidth;
	        	
	        	var SmallerLength =  WeldLengthVal >=  PlateWidth ? TotalPlateWidth :WeldLength ;
	        	
	        	TotalWeldLength = GreaterLength;
	        	
	        	PlateProfile = Thickness + "X" + SmallerLength;
	        	
	        	var PlateThickness =  $("#drpThickness").val(); 
	        	
	        	var Volume = parseFloat(PlateThickness) * parseFloat(PlateWidth) * parseFloat(WeldLengthVal);	        	
	        
	        	MemberWeight_Lbs = parseFloat(Volume) * (0.284) * parseInt(Quantity);  
	        	
	        	MemberWeight_Tons = MemberWeight_Lbs/2000;
	        	
	        	
        	}
        	else
        	{
        		BoltGrade = $("#drpFieldBoltedBoltGrade").find("option:selected").text() ;
        		BoltDia = $("#drpFieldBoltedBoltDia").find("option:selected").text() + '"';
        		BoltSizeDecimal = $("#drpFieldBoltedBoltDia").val();
        		
        		NoOfBoltsRows = $("#drpFieldBoltedNoOfBoltRows").find("option:selected").text() ;
        		NoOfBoltsColumn = $("#drpFieldBoltedNoOfBoltColumns").find("option:selected").text() ;
        		
        		WeldType = $("#drpFieldBoltedWeldType").find("option:selected").text() ;
           	    WeldSize = $("#drpFieldBoltedWeldSize").val() == "" ? "" : $("#drpFieldBoltedWeldSize").find("option:selected").text() + '"';
           	   
           	    WeldSizeDecimal= $("#drpFieldBoltedWeldSize").val() ;
           	    
           	    var PlateLength = (parseInt(NoOfBoltsRows -1) * parseInt(RowSpacing)) + 3;
           	    
           	    var PlateWidth = 0;
           	    
           	    if(parseInt(NoOfBoltsColumn) == 1)
           	    {
           	    	
           	    	PlateWidth = 3.5;
           	    }
           	    else
           	    {
           	    	PlateWidth =(( parseInt(NoOfBoltsColumn) -1) * parseInt(ColumnSpacing)) + 0.5;
           	    }
           	    
           	    var PlateThickness =  $("#drpThickness").val();           	    
           	    var Volume = (parseFloat(PlateThickness) * parseFloat(PlateWidth) * parseFloat(PlateLength));	        	
	        	
	        	MemberWeight_Lbs = parseFloat(Volume) * (0.284) * parseInt(Quantity);
	        	MemberWeight_Tons = MemberWeight_Lbs/2000;
	        	
	        	var TotalPlateWidth = (parseInt(NoOfBoltsRows) - 1)* 3 + 3 ;
	        	
	        	var PlateLength = (parseInt(NoOfBoltsColumn) - 1)* 3 + 3;
	        	
	        	var SmallerLength = TotalPlateWidth > PlateLength ? PlateLength : TotalPlateWidth;
	        	
	        	PlateProfile = Thickness + "X" + SmallerLength + ' 1/2"';
        		
        	}
        	        	
        	var ReferenceDrawing = $("#drpReferenceDrawing").val();
        	
        	if(isEdit == true)
          	{
         		 $('#tbleMiscPlate').dataTable().fnUpdate(
              			['<label class="custom-control custom-checkbox" >'+
      						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
      						'<span class="custom-control-indicator"></span>'+
      						'<span class="custom-control-description labelblk"></span></label>',
              			 RowNoForAddEdit, Shape,
              			 PlateProfile, MaterialGrade,TotalPlateWidth,Quantity,              			 
              			 MemberWeight_Lbs.toFixed(3), MemberWeight_Tons.toFixed(3),
              			 ConnectionType,BoltGrade,BoltDia,NoOfBoltsRows,
              			 RowSpacing,NoOfBoltsColumn,ColumnSpacing,
              			 WeldType,WeldSize,TotalWeldLength,ReferenceDrawing,
              			 PlateWidthInFeet,PlateWidthInInch,
              			 PlateWidthInFraction,WeldLengthInFeet,
              			 WeldLengthInInch,WeldLengthInFraction,Thickness,
              			ThicknessDecimal,WeldSizeDecimal,BoltSizeDecimal,
              			RowSpacingDecimal,ColumnSpacingDecimal], document.getElementById("row" + editRowNo));
          	
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
	                          '<td>'+ PlateProfile + '</td>'+
	                          '<td>'+ MaterialGrade + '</td>'+
	                          '<td style="display:none;">'+ TotalPlateWidth + '</td>'+	                          
	                          '<td>'+ Quantity + '</td>'+
	                          '<td>'+ MemberWeight_Lbs.toFixed(3) +'</td>' + 
	      					  '<td>'+ MemberWeight_Tons.toFixed(3) +'</td>'+ 
	                          '<td>'+ ConnectionType + '</td>'+	 
				        	  '<td>'+ BoltGrade + '</td>' + 
	      					  '<td>'+ BoltDia+ '</td>' +
	      					  '<td>'+ NoOfBoltsRows + '</td>' +
	      					  '<td>'+ RowSpacing + '</td>' + 
	      					  '<td>'+ NoOfBoltsColumn + '</td>' + 
	      					  '<td>'+ ColumnSpacing + '</td>' + 
	      					  '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +	
				        	  '<td>'+ TotalWeldLength + '</td>'+				        	  
	      					  '<td>'+ ReferenceDrawing + '</td>' + 
		      				  '<td style="display:none;">'+ PlateWidthInFeet+ '</td>' + 
		      				  '<td style="display:none;">'+ PlateWidthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ PlateWidthInFraction + '</td>' + 				        	  
				        	  '<td style="display:none;">'+ WeldLengthInFeet + '</td>' +
				        	  '<td style="display:none;">'+ WeldLengthInInch + '</td>' +
				        	  '<td style="display:none;">'+ WeldLengthInFraction + '</td>' +
				        	  '<td style="display:none;">'+ Thickness + '</td>' +
				        	  
				        	  '<td style="display:none;">'+ ThicknessDecimal + '</td>' +
				        	  '<td style="display:none;">'+ WeldSizeDecimal + '</td>' +
				        	  '<td style="display:none;">'+ BoltSizeDecimal + '</td>' +
				        	  '<td style="display:none;">'+ RowSpacingDecimal + '</td>' +
				        	  '<td style="display:none;">'+ ColumnSpacingDecimal + '</td>' +
      					  '</tr>' ;
        	miscplatetable.row.add($(DataRow)).draw(false);
         	}
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var MiscPlate = [];
        	
        	var table = $("#tbleMiscPlate tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),
                			Shape = $tds.eq(2).text(),
			                Thickness = $tds.eq(26).text(),
			                MaterialGrade = $tds.eq(4).text(),
			                PlateWIdth = $tds.eq(5).text(),                   
			                Quantity = $tds.eq(6).text(),
			                MemberWeightlbs = $tds.eq(7).text(),
			                MemberWeightTons = $tds.eq(8).text(),
			                ConnectionType = $tds.eq(9).text(),
			                BoltGrade = $tds.eq(10).text(),		                   
			                BoltDia = $tds.eq(11).text(),
			                NoOfBoltsRows = $tds.eq(12).text(),
			                RowSpacing = $tds.eq(13).text(),
			                NoOfBoltsColumns = $tds.eq(14).text(),
			                ColumnSpacing = $tds.eq(15).text(),
			                WeldType = $tds.eq(16).text(),
			                WeldSize = $tds.eq(17).text(),                   
			                WeldLength = $tds.eq(18).text(),                    
			                RefernceDrawing = $tds.eq(19).text(),                    
			                PlateWidthInFeet = $tds.eq(20).text(),
			                PlateWidthInInch = $tds.eq(21).text(),
			                PlateWidthInFraction = $tds.eq(22).text(),                    
			                WeldLengthInFeet = $tds.eq(23).text(),
			                WeldLengthInInch = $tds.eq(24).text(),
			                WeldLengthInFraction = $tds.eq(25).text(),	
		                    
			                ThicknessDecimal = $tds.eq(26).text(),
			                WeldSizeDecimal = $tds.eq(27).text(),
			                BoltDiaDecimal = $tds.eq(28).text(),
			                RowSpacingXDecimal = $tds.eq(29).text(),
			                ColumnSpacingYDecimal = $tds.eq(30).text();
                
               var MiscPlateArray = {
			                        [shape]: Shape,			                        
			                        [plateThickness]:{[plateThicknessfraction]:Thickness, 
		   				   				  				[plateThicknessdecimal]:ThicknessDecimal}, 
		   				   				  				
		   				   			[grade]:MaterialGrade,
			                        [platewidth] : {[feet]:PlateWidthInFeet, 
									 	    		[inches]:PlateWidthInInch, 
									 	    		[fraction]:PlateWidthInFraction,
									 	    		[fractiondecimal]: eval(PlateWidthInFraction)},
									 	    		
							 	    [weldlength] : {[feet]:WeldLengthInFeet, 
										 	    	[inches]:WeldLengthInInch, 
										 	    	[fraction]:WeldLengthInFraction,
										 	    	[fractiondecimal]: eval(WeldLengthInFraction)},	
								 	    	
			                      	[quantity] : Quantity,
								    [memberweightlbs] : MemberWeightlbs,
								    [memberweightstons] : MemberWeightTons,								                       
								    [connectiontype] : ConnectionType,
								    [boltgrade] : BoltGrade,	
								    
				                    [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
									 			[boltdiadecimal]:BoltDiaDecimal},
			                       	
			                        [noofboltsrow] : NoOfBoltsRows,
			                        
			                        [rowspacingx] :{[boltspacingfraction]:RowSpacing.replace('"',''), 
			                        				  [boltspacingdecimal]:RowSpacingXDecimal},
			                        				  
			                        [noofboltscolumn]: NoOfBoltsColumns,
			                        [columnspacingy] :{[boltspacingfraction]:ColumnSpacing.replace('"',''), 
			                        	  				[boltspacingdecimal]:ColumnSpacingYDecimal},
			                        [weldtype] : WeldType,
				                    [weldsize] : {[weldsizefraction]:WeldSize.replace('"',''), 
				           	   			              [weldsizedecimal]:WeldSizeDecimal},			           	   			              
			                        
			                        [referencedrawing] : RefernceDrawing
			                        
			                       
			           }   
              
               MiscPlate.push(MiscPlateArray);
            });
            
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',	
			    data: { miscsteelgroup:"MiscPlate",
			    	    miscsteeljson:JSON.stringify({"MiscPlate":MiscPlate})
			    	  },			    	
				success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
            });
        	
        }      
		 
		 
		 $("#drpFieldBoltedWeldType").change( function(){
	            if($('#drpFieldBoltedWeldType').val()=='CJP'){
	                 $("#divFieldBoltedWeldSize").hide();  
	                 $('#drpFieldBoltedWeldSize').val('');
	            }
	            else {
	            	 $("#divFieldBoltedWeldSize").show();
	            }            
	        });
		 
		 $("#drpFieldWeldedWeldType").change( function(){
	            if($('#drpFieldWeldedWeldType').val()=='CJP'){
	                 $("#divWeldSize").hide();  
	                 $('#drpFieldWeldedWeldSize').val('');
	            }
	            else {
	            	 $("#divWeldSize").show();
	            }            
	        });
