var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var embedtable = "";

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var shape = "shapes",
	plateThicknessfraction ="tp_fra", 
	plateThicknessdecimal = "tp",		
	grade = "grade",
	quantity = "quantity",
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr",
	connectiontype = "connectiontype",	
	anchorrodtype = "AnchorRod_type",	
	anchorroddiafraction = "ARD_fra",
	anchorroddiadecimal = "ARD",
	anchorrodqty = "anchorrodqty",	
	anchorrodlengthfraction = "anchorrodlengthfraction",
	anchorrodlengthdecimal = "anchorrodlengthdecimal",	
	shearstuddiafraction = "StudDia_fra",
	shearstuddiadiadecimal = "StudDia",	
	shearStudLengthfraction = "StudLength_fra",
	shearStudLengthdecimal = "StudLength",
	shearstudqty = "shearstudqty",	
	referencedrawing = "referencedrawing",
	memberweightlbs = "memberweightlbs",
	memberweightstons = "memberweightstons",	
	anchorrodlength = "anchorrodlength",
	width = "width",
	length = "length";

$(document).ready(function(){	

	embedtable = $('#tableEmbedPlate').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: false,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[500], [500]],		     
	     "ordering": false
    }); 
	
		$(".select2").select2();
		
		var MaterialGrade = getMaterialGrade("Plates");		
		fillMaterialGradeDropdownList('drpMaterialGrade',MaterialGrade)
		
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


	
	    $("#EPConnectiontype").change(function(){
	       if($('#EPConnectiontype').val()=='EPS'){
	           $(".fieldsFW").show();
	           $(".fieldsFB").hide();
	                    
	       }
	       else if($('#EPConnectiontype').val()=='EPA'){
	            $(".fieldsFW").hide();
	            $(".fieldsFB").show();
	       }
	                
	    });
        
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableEmbedPlate tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				  rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;		        			        	
		        	                     
	                var	Shape = $tds.eq(2).text(),
	                    EmbedPlateThickness = $tds.eq(3).text(),
	                    MaterialGrade = $tds.eq(4).text(),
	                    Width = $tds.eq(5).text(),
	                    Length = $tds.eq(6).text(),                    
	                    Quantity = $tds.eq(7).text(),
	                    MemberWeightLbs = $tds.eq(8).text(),                    
	                    MemberWeightTons = $tds.eq(9).text(),
	                    ConnectionType = $tds.eq(10).text(),                    
	                    ShearStudDia = $tds.eq(11).text(),
	                    ShearStudLength = $tds.eq(12).text(),
	                    ShearStudQuantity = $tds.eq(13).text(),
	                    AnchorRodType = $tds.eq(14).text(),
	                    AnchorRodDia = $tds.eq(15).text(),
	                    AnchorRodLength = $tds.eq(16).text(),
	                    AnchorRodQuantity = $tds.eq(17).text(),                
	                    WidthInFeet = $tds.eq(18).text(),
	                    WidthInInch = $tds.eq(19).text(),
	                    WidthInFraction = $tds.eq(20).text(),                    
	                    LenghtInFeet = $tds.eq(21).text(),
	                    LengthInInch = $tds.eq(22).text(),                    
	                    LengthInFraction = $tds.eq(23).text(),
	                    AnchorRodLengthInFeet = $tds.eq(24).text(),                    
	                    AnchorRodLengthInInch = $tds.eq(25).text(),
	                    AnchorRodLengthInFraction = $tds.eq(26).text(),
	                    RefernceDrawing = $tds.eq(27).text(),
	                    PlateThickness = $tds.eq(28).text();
		        			        	
		        	$('#txtShape').val(Shape);		        	
		        	$('#drpPlateThickness').val(getOptId('drpPlateThickness', PlateThickness)).change();;		        	
		        	$('#drpMaterialGrade').val(MaterialGrade).trigger('change');		        	
		        	$('#txtQuantity').val(Quantity);	        	
		        	
		        	$('#txtWidthInFeet').val(WidthInFeet);
		        	$('#drpWidthInInch').val(getOptId('drpWidthInInch', WidthInInch));
		        	$('#drpWidthInFraction').val(getOptId('drpWidthInFraction', WidthInFraction));
		        	
		        	$('#txtLengthInFeet').val(LenghtInFeet);
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));
		        	
		        	
		        	$('#EPConnectiontype').val(getOptId('EPConnectiontype', ConnectionType));
		        	$("#EPConnectiontype").trigger("change");
		        	
		        	$('#drpShearStudDia').val(getOptId('drpShearStudDia', ShearStudDia.replace('"','')));
		        	
		        	$('#drpShaerStudLengthInInch').val(getOptId('drpShaerStudLengthInInch', ShearStudLength.replace('"',''))).change();		        	
		        	$('#txtShearStudQty').val(ShearStudQuantity);
		        	
		        	$('#drpAnchorRodType').val(getOptId('drpAnchorRodType', AnchorRodType));		        	
		        	$('#drpAnchorRodDia').val(getOptId('drpAnchorRodDia', AnchorRodDia.replace('"','')));		        	
		        	$('#txtAnchorRodQty').val(AnchorRodQuantity);		        	
		        	
		        	$('#txtAnchorRodLengthInFeet').val(AnchorRodLengthInFeet);	   	
		        	$('#drpAnchorRodLengthInInch').val(getOptId('drpAnchorRodLengthInInch', AnchorRodLengthInInch));	       	
		        	$('#drpAnchorRodLengthInFraction').val(getOptId('drpAnchorRodLengthInFraction', AnchorRodLengthInFraction));
		        	
		        	
		        	var drawings = RefernceDrawing.split(",");		        	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");
		        	
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmShearStud').removeClass('submitted');        	
        	$('#frmAnchorType').removeClass('submitted');  
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmShearStud');
        	clearFormFields('frmAnchorType');
        	        	
        	$('#txtShape').val('Plates');
            $("#drpWidthInInch").val(0);
            
            $("#drpWidthInFraction").val(0);
        	
        	$("#drpLengthInInch").val(0);
            $("#drpLengthInFraction").val(0);
            
        	
        	$('#drpAnchorRodLengthInInch').val(0);
        	$('#drpAnchorRodLengthInFraction').val(0);
        	
        	$('#EPConnectiontype').val("EPS");        	
        	$("#EPConnectiontype").trigger("change");   
        	
        	$('#drpMaterialGrade').val("").trigger('change');
        	$('#drpReferenceDrawing').val("").trigger('change');
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	$('.addTR').text("Add");
        	isEdit = false;
        	Selected = [];
        }
        
        //Validate Fields before saving
        function validateForm()
        {
        	        	
        	var connectionTypeFormId;        	
        	
        	$('#frmMain').addClass('submitted');
        	
        	if($('#EPConnectiontype').val() =='EPS')
        	{
        		$('#frmShearStud').addClass('submitted');        		
        		$('#frmAnchorType').removeClass('submitted');
        		
        		connectionTypeFormId = "frmShearStud";
        	}
        	else if($('#EPConnectiontype').val() =='EPA')
        	{
        		$('#frmAnchorType').addClass('submitted');
        		$('#frmShearStud').removeClass('submitted');
        		
        		connectionTypeFormId = "frmAnchorType";
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
       			var WidthInFeet = $("#txtWidthInFeet").val();
            	var WidthInInch = $("#drpWidthInInch").find("option:selected").text();
            	var WidthInFraction = $("#drpWidthInFraction").find("option:selected").text();
        	
        		var validWidth = validateLength(WidthInFeet,WidthInInch,WidthInFraction,"Width");
        		
        		var LengthInFeet = $("#txtLengthInFeet").val();
            	var LengthInInch = $("#drpLengthInInch").find("option:selected").text();
            	var LengthInFraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        		var validLength = validateLength(LengthInFeet,LengthInInch,LengthInFraction,"Length");
        		
        		if(validWidth == false || validLength== false)
        			validated = false;
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
           		
           	});
        	if(connectionTypeFormId == 'frmAnchorType' && validated == true)
       		{
       			var AnchorRodLengthInFeet = $("#txtAnchorRodLengthInFeet").val();
            	var AnchorRodLengthInInch = $("#drpAnchorRodLengthInInch").find("option:selected").text();
            	var AnchorRodLengthInFraction = $("#drpAnchorRodLengthInFraction").find("option:selected").text();
        	
            	validated = validateLength(AnchorRodLengthInFeet,AnchorRodLengthInInch,AnchorRodLengthInFraction,"Anchor Rod Length");
       		}
        	
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
        	var Shape  = $("#txtShape").val(); 
        	var PlateThickness = $("#drpPlateThickness").find("option:selected").text();  
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();
        	
        	var WidthInFeet = $('#txtWidthInFeet').val();
        	var WidthInInch = $("#drpWidthInInch").find("option:selected").text();
        	var WidthInFraction = $("#drpWidthInFraction").find("option:selected").text();
        	
        	var TotalWidth = feetInchFormater(WidthInFeet , WidthInInch , WidthInFraction);
        	
        	var LenghtInFeet = $("#txtLengthInFeet").val();
        	var LengthInInch = $("#drpLengthInInch").find("option:selected").text();
        	var LengthInFraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        	var TotalLength = feetInchFormater(LenghtInFeet , LengthInInch ,LengthInFraction);
        	var ConnectionType = $("#EPConnectiontype").find("option:selected").text();
        	
        	var ShearStudDia="",ShearStudLength="",ShearStudQuantity="";
        	
        	var AnchorRodType="",AnchorRodDia="",AnchorRodQuantity="",
        		AnchorRodLengthInFeet="",AnchorRodLengthInInch="",
        		AnchorRodLengthInFraction="", AnchorRodTotalLength="";
        	
        	if(ConnectionType == "Shear Stud")
        	{
	        	ShearStudDia = $("#drpShearStudDia").val() == "" ? "" : $("#drpShearStudDia").find("option:selected").text() +'"';
	        	ShearStudLength= $("#drpShaerStudLengthInInch").find("option:selected").text() + '"';
	        	ShearStudQuantity= $("#txtShearStudQty").val();
        		
        	}
        	else if(ConnectionType == "Anchor Rod")
        	{
        		AnchorRodType = $("#drpAnchorRodType").find("option:selected").text();
        		AnchorRodDia = $("#drpAnchorRodDia") == "" ? "" : $("#drpAnchorRodDia").find("option:selected").text()+ '"';
        		AnchorRodQuantity =	$("#txtAnchorRodQty").val();
        		
        		AnchorRodLengthInFeet=	$("#txtAnchorRodLengthInFeet").val();
        		AnchorRodLengthInInch=	$("#drpAnchorRodLengthInInch").find("option:selected").text();
        		AnchorRodLengthInFraction=	$("#drpAnchorRodLengthInFraction").find("option:selected").text();
        		
        		AnchorRodTotalLength = feetInchFormater(AnchorRodLengthInFeet , AnchorRodLengthInInch , AnchorRodLengthInFraction);
        	}
        	
        	        	
        	var FeetVal = LenghtInFeet * 12;
        	var InchVal = $("#drpLengthInInch").val();
        	var FractionVal = $("#drpLengthInFraction").val();
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);        	
        	
        	var WidthFeetVal = WidthInFeet * 12;
        	var WidthInchVal = $("#drpWidthInInch").val();
        	var WidthFractionVal = $("#drpWidthInFraction").val();
        	        	
        	var Total_Width = parseFloat(WidthFeetVal) + parseFloat(WidthInchVal) + parseFloat(WidthFractionVal); 
        	
        	var GreatestLenth = Total_Length >= Total_Width ? TotalWidth : TotalLength ; 
        	
        	var EmbedPlateThickness = PlateThickness + "X" + GreatestLenth;
        	
        	var HeaderLenght = Total_Length >= Total_Width ? TotalLength : TotalWidth; 
        	        	
        	var Thickness = $("#drpPlateThickness").val();  	        	
        	
        	var Volume = parseFloat(Total_Length) *  parseFloat(Total_Width) * parseFloat(Thickness);
        	        	
        	var WeightInPounds = 0.284 * parseFloat(Volume);     
        	        	
        	var Quantity = $("#txtQuantity").val();
        	
        	var MemberWeight_Lbs = (WeightInPounds * parseInt(Quantity));
        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000; 
        	
        	var Total_Member_Weight_Lbs = MemberWeight_Lbs;
        	
        	var Total_Member_Weight_Tons = MemberWeight_Tons;
        	
        	var ReferenceDrawing = $('#drpReferenceDrawing').val();
        	
        	if(isEdit == true)
         	{
        		 $('#tableEmbedPlate').dataTable().fnUpdate(
             			['<label class="custom-control custom-checkbox" >'+
     						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
     						'<span class="custom-control-indicator"></span>'+
     						'<span class="custom-control-description labelblk"></span></label>',
             			 RowNoForAddEdit, Shape,
             			 EmbedPlateThickness,  MaterialGrade,TotalWidth,
             			 HeaderLenght,  Quantity,
             			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),
             			 ConnectionType,ShearStudDia,
             			 ShearStudLength,ShearStudQuantity,
             			 AnchorRodType,AnchorRodDia,
             			 AnchorRodTotalLength,AnchorRodQuantity,
             			 WidthInFeet,WidthInInch,
             			 WidthInFraction,LenghtInFeet,
             			 LengthInInch,LengthInFraction,
             			 AnchorRodLengthInFeet,AnchorRodLengthInInch,
             			 AnchorRodLengthInFraction,ReferenceDrawing,PlateThickness,
             			 $("#drpPlateThickness").val(),
             			 $("#drpShearStudDia").val(),
             			 $("#drpShaerStudLengthInInch").val(),
             			 $("#drpAnchorRodDia").val()], document.getElementById("row" + editRowNo));
         	
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
	                          '<td>'+ EmbedPlateThickness + '</td>'+
	                          '<td>'+ MaterialGrade + '</td>'+
	                          '<td style="display:none;">'+ TotalWidth + '</td>'+
	                          '<td>'+ HeaderLenght + '</td>'+
	                          '<td>'+ Quantity + '</td>'+
	                          '<td>'+ Total_Member_Weight_Lbs.toFixed(3) +'</td>' + //.toFixed(3)
	      					  '<td>'+ Total_Member_Weight_Tons.toFixed(3) +'</td>'+//.toFixed(3)
	                          '<td>'+ ConnectionType + '</td>'+
	                          '<td>'+ ShearStudDia + '</td>' +
				        	  '<td>'+ ShearStudLength + '</td>' +
				        	  '<td>'+ ShearStudQuantity + '</td>' + 
	                          '<td>'+ AnchorRodType + '</td>' + 
				        	  '<td>'+ AnchorRodDia + '</td>' +
				        	  '<td>'+ AnchorRodTotalLength + '</td>' +
				        	  '<td>'+ AnchorRodQuantity + '</td>' + 
	      					  '<td style="display:none;">'+ WidthInFeet + '</td>' +       					  
		      				  '<td style="display:none;">'+ WidthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ WidthInFraction + '</td>' + 
		      				  
		      				  '<td style="display:none;">'+ LenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ LengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ LengthInFraction + '</td>' + 
		      				  
		      				  '<td style="display:none;">'+ AnchorRodLengthInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ AnchorRodLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ AnchorRodLengthInFraction + '</td>' + 
		      				  '<td>'+ ReferenceDrawing + '</td>' + 
		      				  '<td style="display:none;">'+ PlateThickness + '</td>' +  
		      				  
			      				'<td style="display:none;">'+ $("#drpPlateThickness").val() + '</td>' +  
			      				'<td style="display:none;">'+ $("#drpShearStudDia").val() + '</td>' +  
			      				'<td style="display:none;">'+ $("#drpShaerStudLengthInInch").val() + '</td>' +  
			      				'<td style="display:none;">'+ $("#drpAnchorRodDia").val() + '</td>' +  
      					  '</tr>' ;
        		//$('#tableEmbedPlate').append(DataRow);
        	embedtable.row.add($(DataRow)).draw(false);
           }
        	
        	constructJsonArrayFromTable();
        	
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var EmbedPlate = [];
        	
        	var table = $("#tableEmbedPlate tbody");
        	
            table.find('tr').each(function (i) 
            {
                var $tds = $(this).find('td'),                    
		                	Shape = $tds.eq(2).text(),
		                    EmbedPlateThickness = $tds.eq(3).text(),
		                    MaterialGrade = $tds.eq(4).text(),
		                    Width = $tds.eq(5).text(),
		                    Length = $tds.eq(6).text(),                    
		                    Quantity = $tds.eq(7).text(),
		                    MemberWeightLbs = $tds.eq(8).text(),                    
		                    MemberWeightTons = $tds.eq(9).text(),
		                    ConnectionType = $tds.eq(10).text(),                    
		                    ShearStudDia = $tds.eq(11).text().replace('"',''),
		                    ShearStudLength = $tds.eq(12).text().replace('"',''),
		                    ShearStudQuantity = $tds.eq(13).text(),
		                    AnchorRodType = $tds.eq(14).text(),
		                    AnchorRodDia = $tds.eq(15).text().replace('"',''),
		                    AnchorRodLength = $tds.eq(16).text(),
		                    AnchorRodQuantity = $tds.eq(17).text(),                
		                    WidthInFeet = $tds.eq(18).text(),
		                    WidthInInch = $tds.eq(19).text(),
		                    WidthInFraction = $tds.eq(20).text(),                    
		                    LenghtInFeet = $tds.eq(21).text(),
		                    LengthInInch = $tds.eq(22).text(),                    
		                    LengthInFraction = $tds.eq(23).text(),
		                    AnchorRodLengthInFeet = $tds.eq(24).text(),                    
		                    AnchorRodLengthInInch = $tds.eq(25).text(),
		                    AnchorRodLengthInFraction = $tds.eq(26).text(),
                			ReferenceDrawing = $tds.eq(27).text(),
                			PlateThickness = $tds.eq(28).text(),
                			
                			PlateThicknessdecimal = $tds.eq(29).text(),
                			Shearstuddiadiadecimal = $tds.eq(30).text(),
                			ShearStudLengthdecimal = $tds.eq(31).text(),
                			Anchorroddiadecimal = $tds.eq(32).text();
              
               var embedPlateArray = {
			                        [shape]: Shape ,
			                        [plateThicknessfraction]:PlateThickness,
			                        [plateThicknessdecimal] :PlateThicknessdecimal,
			                        [grade]:MaterialGrade,
			                        [width] : {[feet]:WidthInFeet, 
   								 	    		[inches]:WidthInInch, 
   								 	    		[fraction]:WidthInFraction,
   								 	    		[fractiondecimal]: eval(WidthInFraction)},   								 	 
   								 	[length] : {[feet]:LenghtInFeet, 
      								 	    	[inches]:LengthInInch, 
      								 	    	[fraction]:LengthInFraction,
      								 	    	[fractiondecimal]: eval(LengthInFraction)},			                       
			                        [quantity] : Quantity,
			                        [memberweightlbs] : MemberWeightLbs,
			                        [memberweightstons] : MemberWeightTons,   
			                        [connectiontype] : ConnectionType,
			                        [shearstuddiafraction] : ShearStudDia,
			                        [shearstuddiadiadecimal] : Shearstuddiadiadecimal,
			                        [shearStudLengthfraction] : ShearStudLength,
			                        [shearStudLengthdecimal] : ShearStudLengthdecimal,
			                        [shearstudqty]: ShearStudQuantity,
			                        [anchorrodtype]: AnchorRodType,
			                        [anchorroddiafraction] : AnchorRodDia,
			                        [anchorroddiadecimal]: Anchorroddiadecimal,			                        
			                        [anchorrodlength] : {[feet]:AnchorRodLengthInFeet, 
								 	    				[inches]:AnchorRodLengthInInch, 
								 	    				[anchorrodlengthfraction]:AnchorRodLengthInFraction,
								 	    				[anchorrodlengthdecimal]: eval(AnchorRodLengthInFraction)},			                       
								 	[anchorrodqty] : AnchorRodQuantity,
			                        [referencedrawing] : ReferenceDrawing
			                 }                 
               EmbedPlate.push(embedPlateArray);
            });
            
       
            
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',				
    		    data: { miscsteelgroup:"EmbedPlate",
    		    		miscsteeljson:JSON.stringify({"EmbedPlate":EmbedPlate})
    		    	  },			    	
    			success: function(data){	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	  
				
            });
        	
        }
        
        
         