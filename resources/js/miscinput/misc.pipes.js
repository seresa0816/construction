var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var HSS_Profile = [];
var PIPE_Profile = [];

var HSS_MaterialGrade = [];
var HSS_MaterialGrade2 = [];
var PIPE_MaterialGrade = [];

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
	weldlength = "weldlength"
	platethickness = "platethickness",
	plateThicknessfraction = "tp_fra",
	plateThicknessdecimal = "tp";

var miscPipetable = "";

$(document).ready(function(){
		
	miscPipetable = $('#tbleMiscPipes').DataTable({	 	       		
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
		 $("#ddlConnectionTypeMPS").change( function(){
             if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSCA'){
                  $(".fieldsMPSSP").show();
                  $(".fieldsMPSDW").hide();                  
                 
             }
             else if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSDW'){
            	 $(".fieldsMPSSP").hide();
                 $(".fieldsMPSDW").show();      
             }             
             
         });
		
        
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tbleMiscPipes tbody");
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
                    ConnectingMember = $tds.eq(10).text(),
                    BoltGrade = $tds.eq(11).text(),		                   
                    BoltDia = $tds.eq(12).text(),
                    NoOfBolts = $tds.eq(13).text(),
                    WeldType = $tds.eq(14).text(),
                    WeldSize = $tds.eq(15).text(),                   
                   /* WeldLength = $tds.eq(16).text(),*/
                    RefernceDrawing = $tds.eq(16).text(),
                    LengthInFeet = $tds.eq(17).text(),
                    LengthInInch = $tds.eq(18).text(),
                    LengthInFraction = $tds.eq(19).text();
                    /*WeldLengthInFeet = $tds.eq(21).text(),
                    WeldLengthInInch = $tds.eq(22).text(),
                    WeldLengthInFraction = $tds.eq(23).text(); */  
		        	
		        	$('#drpShape').val(getOptId('drpShape', Shape)).change();
		        	$("#drpShape").trigger("change");
		        	
		        	$('#drpProfile').val(getOptId('drpProfile', Profile)).change();		        			        			        	
		        	$('#drpMaterialGrade').val(MaterialGrade).trigger('change');
		        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLengthInFeet').val(LengthInFeet);
		        			        	
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));		        	
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));	
		        	
		        	
		        	$('#ddlConnectionTypeMPS').val(getOptId('ddlConnectionTypeMPS', ConnectionType));	        	
		        	$("#ddlConnectionTypeMPS").trigger("change");
		        	
		        	if( ConnectionType == "End Plate")
		        	{
		        		$('#drpShareEndPlateThickness').val(getOptId('drpShareEndPlateThickness', ConnectingMember.replace('"X3 1/2"','').replace("PL",""))).change();
		        		
		        		$('#drpShareEndPlateBoltGrade').val(getOptId('drpShareEndPlateBoltGrade', BoltGrade)).change();		        		
		        		$('#drpShareEndPlateBoltDia').val(getOptId('drpShareEndPlateBoltDia', BoltDia.replace('"','')));		        		
		        		$('#drpShareEndPlateNoOfBoltRows').val(getOptId('drpShareEndPlateNoOfBoltRows', NoOfBolts));
		        		
		        		$('#drpShareEndPlateWeldType').val(getOptId('drpShareEndPlateWeldType', WeldType));
		        		$("#drpShareEndPlateWeldType").trigger("change");
		        		$('#drpShareEndPlateWeldSize').val(getOptId('drpShareEndPlateWeldSize', WeldSize.replace('"','')));	
		        		
		        	}
		        	else
		        	{
		        		$('#drpDirectlyWeldedWeldType').val(getOptId('drpDirectlyWeldedWeldType', WeldType));
		        		$("#drpDirectlyWeldedWeldType").trigger("change");
		        		$('#drpDirectlyWeldedWeldSize').val(getOptId('drpDirectlyWeldedWeldSize', WeldSize.replace('"','')));	
		        		
			        	/*$('#txtDirectlyWeldedLengthInFeet').val(WeldLengthInFeet);		        		
			        	$('#drpDirectlyWeldedLengthInInch').val(getOptId('drpDirectlyWeldedLengthInInch', WeldLengthInInch));			        	
			        	$('#drpDirectlyWeldedLengthInFraction').val(getOptId('drpDirectlyWeldedLengthInFraction', WeldLengthInFraction));			        	
		        		*/
		        	}
		        	
		        	var drawings = RefernceDrawing.split(",");	      	
			        $("#drpReferenceDrawing").val(drawings).trigger("change");
		        
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmDirectlyWelded').removeClass('submitted');        	
        	$('#frmShearEndPlate').removeClass('submitted'); 
        	$('#frmRefrenceDrawing').removeClass('submitted');  
        	$('#frmClipAngle').removeClass('submitted'); 
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmDirectlyWelded');
        	clearFormFields('frmShearEndPlate');
        	clearFormFields('frmClipAngle');
        	        	
        	$("#drpLengthInInch").val(0);
            $("#drpLengthInFraction").val(0);
            
            $("#drpDirectlyWeldedLengthInInch").val(0);
            $("#drpDirectlyWeldedLengthInFraction").val(0);
        	
        	$('#ddlConnectionTypeMPS').val("connectionTypeMPSCA");        	        	
        	$("#ddlConnectionTypeMPS").trigger("change");
        
        	
        	UncheckAllCheckBox();
        	clearSelect2Dropdown();
        	
        	$('#drpShareEndPlateBoltGrade').val(getOptId('drpShareEndPlateBoltGrade', BoGrGp)).change();
         	$('#drpShareEndPlateBoltDia').val(BoltDiaGP);
        	
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
        	
        	if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSCA'){
        		
        		$('#frmShearEndPlate').addClass('submitted');
        		$('#frmDirectlyWelded').removeClass('submitted');
        		connectionTypeFormId = "frmClipAngle";
               
           }                     
           else if($('#ddlConnectionTypeMPS').val()=='connectionTypeMPSDW'){
        	   $('#frmDirectlyWelded').addClass('submitted');
        	   $('#frmShearEndPlate').removeClass('submitted');
      		     			
      		   connectionTypeFormId = "frmDirectlyWelded";
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
        	
        	/*if(validated==true && connectionTypeFormId == "frmDirectlyWelded")
       		{
       			var Lenght = $("#txtDirectlyWeldedLengthInFeet").val();
            	var Inch = $("#drpDirectlyWeldedLengthInInch").find("option:selected").text();
            	var Fraction = $("#drpDirectlyWeldedLengthInFraction").find("option:selected").text();
        	
        		validated = validateLength(Lenght,Inch,Fraction,"Weld Length");
       			
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
        	var Shape  = $("#drpShape").find("option:selected").text(); 
        	var Profile = $("#drpProfile").find("option:selected").text();  
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	var Quantity = $("#txtQuantity").val();
        	
        	var Lenght = $("#txtLengthInFeet").val();
        	var Inch = $("#drpLengthInInch").find("option:selected").text();
        	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        	var TotalLength = feetInchFormater(Lenght , Inch , Fraction);
        	
        	var ConnectionType = $("#ddlConnectionTypeMPS").find("option:selected").text();
        	
        	var ConnectingMember = "", platethicknessdecimal = "";
        	var WeldType="", WeldSize="", WeldSizeDecimal = "";
        	var BoltGrade="",BoltDia="",NoOfBolts="", BoltDiaDecimal = "" ;
        	var WeldLength = "", WeldLengthInFeet = "", WeldLengthInInch="", WeldLengthInFraction="";
        	
        	if(ConnectionType == "End Plate")
        	{
        		
        		ConnectingMember = "PL"+$("#drpShareEndPlateThickness").find("option:selected").text() + '"X3 1/2"'; 
        		platethicknessdecimal = $("#drpShareEndPlateThickness").val();
        		BoltGrade = $("#drpShareEndPlateBoltGrade").find("option:selected").text() ;
        		BoltDia = $("#drpShareEndPlateBoltDia").val()=="" ? "" : $("#drpShareEndPlateBoltDia").find("option:selected").text() +'"' ;
        		BoltDiaDecimal = $("#drpShareEndPlateBoltDia").val();
        		
        		NoOfBolts = $("#drpShareEndPlateNoOfBoltRows").find("option:selected").text() ;
        		
        		WeldType =  $("#drpShareEndPlateWeldType").find("option:selected").text() ;
            	WeldSize =  $("#drpShareEndPlateWeldSize").val() == "" ? "" : $("#drpDirectlyWeldedWeldSize").find("option:selected").text() + '"' ;
            	//WeldSizeDecimal = $("#drpShareEndPlateWeldSize").val();
        		
        	}
        	else
        	{
        		WeldType =  $("#drpDirectlyWeldedWeldType").find("option:selected").text() ;
            	WeldSize =  $("#drpDirectlyWeldedWeldSize").val() == "" ? "" : $("#drpDirectlyWeldedWeldSize").find("option:selected").text() + '"' ;
            	//WeldSizeDecimal = $("#drpDirectlyWeldedWeldSize").val();
            	
        		/*WeldLengthInFeet =  $("#txtDirectlyWeldedLengthInFeet").val();
           	    WeldLengthInInch =  $("#drpDirectlyWeldedLengthInInch").find("option:selected").text() ;
           	    WeldLengthInFraction =  $("#drpDirectlyWeldedLengthInFraction").find("option:selected").text() ;*/
           	 
           	   //WeldLength = feetInchFormater(WeldLengthInFeet, WeldLengthInInch,WeldLengthInFraction);
        		
        	}
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
        		 $('#tbleMiscPipes').dataTable().fnUpdate(
        				 ['<label class="custom-control custom-checkbox" >'+
  						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
  						'<span class="custom-control-indicator"></span>'+
  						'<span class="custom-control-description labelblk"></span></label>',
          			 RowNoForAddEdit, Shape,
          			 Profile,  MaterialGrade,
          			 TotalLength,  Quantity,
          			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),
          			 ConnectionType,ConnectingMember,
          			 BoltGrade, BoltDia,
          			 NoOfBolts, WeldType,WeldSize,
          			 ReferenceDrawing,       			 
          			 Lenght, Inch,Fraction
          			 //WeldLengthInFeet
          			/* WeldLengthInInch,WeldLengthInFraction,
          			 platethicknessdecimal,
          			 WeldSizeDecimal,
          			 BoltDiaDecimal*/
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
	                          '<td>'+ ConnectingMember  + '</td>'+
				        	  '<td>'+ BoltGrade + '</td>' + 
	      					  '<td>'+ BoltDia + '</td>' +
	      					  '<td>'+ NoOfBolts + '</td>' + 
	      					  '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +
				        	 /* '<td>'+ WeldLength + '</td>' +*/
	      					  '<td>'+ ReferenceDrawing + '</td>' +  	      					  
		      				  '<td style="display:none;">'+ Lenght + '</td>' + 
		      				  '<td style="display:none;">'+ Inch + '</td>' + 
		      				  '<td style="display:none;">'+ Fraction + '</td>' + 		      				  				        	  
				        	 /* '<td style="display:none;">'+ WeldLengthInFeet + '</td>' +
				        	  '<td style="display:none;">'+ WeldLengthInInch + '</td>' +
				        	  '<td style="display:none;">'+ WeldLengthInFraction + '</td>' +
				        	  
				        	  '<td style="display:none;">'+ platethicknessdecimal + '</td>' +
				        	  '<td style="display:none;">'+ WeldSizeDecimal + '</td>' +
				        	  '<td style="display:none;">'+ BoltDiaDecimal + '</td>' +*/
				        	  
      					  '</tr>' ;
        	miscPipetable.row.add($(DataRow)).draw(false);
          	}
        	
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var MiscPipes = [];
        	
        	var table = $("#tbleMiscPipes tbody");
        	
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
		                    ConnectingMember = $tds.eq(10).text(),	                
		                    BoltGrade = $tds.eq(11).text(),		                   
		                    BoltDia = $tds.eq(12).text(),
		                    NoOfBolts = $tds.eq(13).text(),		                    
		                    WeldType = $tds.eq(14).text(),
		                    WeldSize = $tds.eq(15).text(),		                  
		                  /*  WeldLength = $tds.eq(16).text(),		    */                
		                    RefernceDrawing = $tds.eq(16).text(),
		                    LengthInFeet = $tds.eq(17).text(),
		                    LengthInInch = $tds.eq(18).text(),
		                    LengthInFraction = $tds.eq(19).text();		                   		                    
		                   /* WeldLengthInFeet = $tds.eq(21).text(),
		                    WeldLengthInInch = $tds.eq(22).text(),
		                    WeldLengthInFraction = $tds.eq(23).text(),
		                    
		                    ThicknessDecimal = $tds.eq(24).text(),
		                    Weldsizedecimal = $tds.eq(25).text(),
		                    Boltdiadecimal = $tds.eq(26).text(); */  
                
               var MiscPipesSupportArray = {
			            		   [shape]: Shape,
			                       [profile]:Profile,
			                       [grade]:MaterialGrade,
			                      
			                       [length] : {[feet]:LengthInFeet, 
								 		    		 [inches]:LengthInInch, 
								 		             [fraction]:LengthInFraction,
								 		             [fractiondecimal]: eval(LengthInFraction)},
			                      
			                       [quantity] : Quantity,
			                       [memberweightlbs] : MemberWeightlbs,
			                       [memberweightstons] : MemberWeightTons,			                       
			                       [connectiontype] : ConnectionType,	
			                       
			                       [platethickness]:ConnectingMember.replace('"X3 1/2"','').replace("PL",""), 		   				   				 
		   				   				  
			                       /*[platethickness]:{[plateThicknessfraction]:ConnectingMember.replace('" X 3 1/2"',''), 
     				   				   				  [plateThicknessdecimal]:ThicknessDecimal}, */
     				   				   
			                       [weldtype] : WeldType,			                       
			                       [weldsize] : WeldSize.replace('"',''), 			           	   			             
			                       [boltgrade] : BoltGrade,			                       
			                       [boltdia] :BoltDia.replace('"',''), 								 				
			                       [noofbolts] : NoOfBolts,
			                       			                       
					    		  /* [weldlength] : {[feet]:WeldLengthInFeet, 
				 		    		 					[inches]:WeldLengthInInch, 
				 		    		 					[fraction]:WeldLengthInFraction,
				 		    		 					[fractiondecimal]: eval(WeldLengthInFraction)},		*/		 		    		 					
			                       		                        
			                       [referencedrawing] : RefernceDrawing
			                       
			          }                 
               MiscPipes.push(MiscPipesSupportArray);
            });
                        
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',
			    data: { miscsteelgroup:"MiscPipes",
			    	    miscsteeljson:JSON.stringify({"MiscPipes":MiscPipes})
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
        		if($("#drpShape").val() == "HSS")
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
        		else if($("#drpShape").val() == "PIPE")
        		{
        			if(PIPE_Profile.length == 0 || PIPE_MaterialGrade.length == 0)
	       		 	{
        				PIPE_Profile = getProfiles($("#drpShape").val());
		       			PIPE_MaterialGrade  = getMaterialGrade($("#drpShape").val());
		       			
	       		 	}
		       		 fillProfileDropdownList('drpProfile',PIPE_Profile);
		       		 fillMaterialGradeDropdownList('drpMaterialGrade',PIPE_MaterialGrade);
        			
        		}
	      		
   	       	}
        	
        });
        
		 $("#drpDirectlyWeldedWeldType").change( function(){
	           if($('#drpDirectlyWeldedWeldType').val()=='CJP'){
	                $("#divDirectlyWeldedWeldSize").hide(); 
	                $("#drpDirectlyWeldedWeldSize").val('');
	           }
	           else {
	           	 $("#divDirectlyWeldedWeldSize").show();
	           }
	           
	       });
		 
		 $("#drpShareEndPlateWeldType").change( function(){
	           if($('#drpShareEndPlateWeldType').val()=='CJP'){
	                $("#divWeldSize").hide(); 
	                $("#drpShareEndPlateWeldSize").val('');
	           }
	           else {
	           	 $("#divWeldSize").show();
	           }
	           
	       });
		 
        