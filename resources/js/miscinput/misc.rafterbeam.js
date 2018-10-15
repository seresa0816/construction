var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;
var rafterBeamtable = "";

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var W_Profile = [];
var W_MaterialGrade = [];

var C_Profile = [];
var C_MaterialGrade = [];


var shape = "shapes",
	profile = "profile",
	grade = "grade",
	quantity = "quantity",
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
	length = "length";

$(document).ready(function(){	
	
	rafterBeamtable = $('#tableRafterBeam').DataTable({	 	       		
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
	    
	    /* var W_Profile = getProfiles("W");
		 var W_MaterialGrade = getMaterialGrade("L");
		
		 fillProfileDropdownList('drpProfile',W_Profile);
		 fillMaterialGradeDropdownList('drpMaterialGrade',W_MaterialGrade);*/
		 
		 var L2_Profile = getProfiles("2L");
		 fillProfileDropdownList('drpClipAngleProfile',L2_Profile);
		
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


		//Shape Dropdown Change Event
		$("#drpShape").change(function() 
		{  
			 resetDrodown('drpProfile');
			 resetDrodown('drpMaterialGrade');
			 			  	       	
		   	if($("#drpShape").val() != "")
		   	{
		   	 var dataObj;	        	       	 
		   	 
		   	 if($("#drpShape").val() == "W")
		   	 {
		   		 if(W_Profile.length == 0 || W_MaterialGrade.length == 0)
		   		 {
		   			W_Profile = getProfiles($("#drpShape").val());
		   			W_MaterialGrade = getMaterialGrade($("#drpShape").val());
		   		 }
		   		 fillProfileDropdownList('drpProfile',W_Profile);
		   		 fillMaterialGradeDropdownList('drpMaterialGrade',W_MaterialGrade)
		   		 
		   	 }
		   	 else if($("#drpShape").val() == "C")
		   	 {
		   		 if(C_Profile.length == 0 || C_MaterialGrade.length == 0)
		   		 {
		   			C_Profile = getProfiles($("#drpShape").val());
		   			C_MaterialGrade = getMaterialGrade($("#drpShape").val());
		   		 }
		   		 
		   		fillProfileDropdownList('drpProfile',C_Profile)
		   		fillMaterialGradeDropdownList('drpMaterialGrade',C_MaterialGrade)
		   	 }
		  	 }
		});
		         
		 $("#ddlConnectionTypeRafter").change( function(){
             if($('#ddlConnectionTypeRafter').val()=='connectionTypeRClipAngle'){
            	 
            	  $("#divclipangle").show();
  	              $("#divWeldDetail").show();
            	  $("#divThickness").hide();
  	              $("#divProfile").show(); 
  	             
             }
             else if($('#ddlConnectionTypeRafter').val()=='connectionTypeRShearPlate'){
            	 $("#divThickness").show();
 	             $("#divProfile").hide();
 	             
 	             $("#divclipangle").show();
	             $("#divWeldDetail").show();
             }
             else if($('#ddlConnectionTypeRafter').val()=='connectionTypeREndPlate'){
            	 $("#divThickness").show();
 	            $("#divProfile").hide();
 	            
 	            $("#divclipangle").show();
	            $("#divWeldDetail").show();
             }
             else if($('#ddlConnectionTypeRafter').val()=='Field Bolted'){
            	 $("#divThickness").show();
 	             $("#divProfile").hide();
 	            
 	            $("#divclipangle").hide();
 	            $("#divWeldDetail").hide();
 	            
 	           
             }
             
         });
		  
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tableRafterBeam tbody");
			table.find('tr').each(function (i) 
		    {
		        var $tds = $(this).find('td'),                    
				   rowid = $tds.eq(1).text();
		        
		        if(rowid == selectedrowid)
		        {
		        	editRowNo = selectedrowid;
		        			        	
		        	var $tds = $(this).find('td'),                    
		                Shape = $tds.eq(2).text(),
		                Profile = $tds.eq(3).text(),
		                MaterialGrade = $tds.eq(4).text(),
		                Length = $tds.eq(5).text(),
		                Quantity = $tds.eq(6).text(),                  
				        MemberWeightlbs = $tds.eq(7).text(),
				        MemberWeightTons = $tds.eq(8).text(), 
				        ConnectionType = $tds.eq(9).text(),
				        ConnectionMemberProfile = $tds.eq(10).text(),				       
				        BoltGrade = $tds.eq(11).text(),
				        BoltDia = $tds.eq(12).text(),                
				        NoOfBoltRows = $tds.eq(13).text(),
				        WeldType = $tds.eq(14).text(),
				        WeldSize = $tds.eq(15).text(), 
				        LengthInFeet = $tds.eq(16).text(),
	                    LengthInInch = $tds.eq(17).text() == "" ? "0" : $tds.eq(17).text(),                    
	                    LengthInFraction = $tds.eq(18).text() == "" ? "0" : $tds.eq(18).text(),
	                    ReferenceDrawing = $tds.eq(19).text();
		        	
		        	//$('#txtShape').val(Shape);
		        	
		        	$('#drpShape').val(getOptId('drpShape', Shape)).change();
		        	$("#drpShape").trigger("change");		        	
		        	
		        	
		        	$('#drpProfile').val(getOptId('drpProfile', Profile)).change();		        	
		        	$('#drpMaterialGrade').val(getOptId('drpMaterialGrade', MaterialGrade)).change();	
		        			        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLengthInFeet').val(LengthInFeet);
		        	
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));
		        	
		        	$('#ddlConnectionTypeRafter').val(getOptId('ddlConnectionTypeRafter', ConnectionType));		        			        	
		        	$("#ddlConnectionTypeRafter").trigger("change");
		        	
		        	
		        	if(ConnectionType == "Clip Angle")
		        	{			        			        		
		        		$('#drpClipAngleProfile').val(getOptId('drpClipAngleProfile', ConnectionMemberProfile)).change();
		        					        	
			        	$('#drpWeldType').val(getOptId('drpWeldType', WeldType));
			        	$("#drpWeldType").trigger("change");
			        	$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize.replace('"',''))).change();
		        	}
		        	else if(ConnectionType == "Shear Plate" || ConnectionType == "End Plate" )
		        	{
		        		
		        		 if(ConnectionType == "Shear Plate")
		                 	ConnectionMemberProfile = ConnectionMemberProfile.replace("PL","").replace('"X3 1/2"','');
		     			else if(ConnectionType == "End Plate")
		     				ConnectionMemberProfile = ConnectionMemberProfile.replace("PL","").replace('"X8 1/2"','');
		        		 
		        		$('#drpSharePlateThickness').val(getOptId('drpSharePlateThickness', ConnectionMemberProfile)).change();	
		        					        	
			        	$('#drpWeldType').val(getOptId('drpWeldType', WeldType));
			        	$("#drpWeldType").trigger("change");
			        	$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize.replace('"',''))).change();
		        	}
		        	
		        	$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoltGrade)).change();		        	
			        $('#drpNoOfBoltRows').val(getOptId('drpNoOfBoltRows', NoOfBoltRows));		        	
			        $('#drpBoltDia').val(getOptId('drpBoltDia', BoltDia.replace('"','')));
		        	
		        	var drawings = ReferenceDrawing.split(",");	
		        	$("#drpReferenceDrawing").val(drawings).trigger("change");
		        	
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	
        	$('#frmMain').removeClass('submitted'); 
        	$('#frmClipAngle').removeClass('submitted');
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmClipAngle');
        	        	
        	$("#drpShape").trigger("change");
            $("#drpLengthInInch").val(0);
            $("#drpLengthInFraction").val(0);
             
            $("#ddlConnectionTypeRafter").val("connectionTypeRClipAngle");        	
        	$("#ddlConnectionTypeRafter").trigger("change");
        	
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
        	        	
        	var profileFormId;        	
        	
        	$('#frmMain').addClass('submitted'); 
        	$('#frmClipAngle').addClass('submitted');        	
        	
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
        	
        	if(validated == true)
        	{
        		var Lenght = $("#txtLengthInFeet").val();
            	var Inch = $("#drpLengthInInch").find("option:selected").text();
            	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
        	
            	validated = validateLength(Lenght,Inch,Fraction,"Length");
        	}
        	
        	$('#frmClipAngle').find(':input').each(function(){   
        		
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
        	
        	var Shape =$("#drpShape").find("option:selected").text();    
        	
        	var Profile = $("#drpProfile").find("option:selected").text();        			
        	var MaterialGrade = $("#drpMaterialGrade").find("option:selected").text(); 
        	
        	var Quantity = $("#txtQuantity").val(); 
        	var LengthInFeet = $("#txtLengthInFeet").val(); 
        	var LengthInInch = $("#drpLengthInInch").find("option:selected").text(); 
        	var LengthInFraction = $("#drpLengthInFraction").find("option:selected").text(); 
        	
        	var TotalLength = feetInchFormater(LengthInFeet, LengthInInch , LengthInFraction);
        	
        	var ConnectionType = $("#ddlConnectionTypeRafter").find("option:selected").text(); 
        	
        	var ClipAngleProfile = "",  WeldType = "" ,WeldSize = "" ;
        	
        	if(ConnectionType == "Clip Angle")
        		{
        			ClipAngleProfile = $("#drpClipAngleProfile").find("option:selected").text();   
        			
        			WeldType = $("#drpWeldType").find("option:selected").text(); 
                	WeldSize = $("#drpWeldSize").val() == "" ? "" : $("#drpWeldSize").find("option:selected").text() + '"';
        		}
        	else if(ConnectionType == "Shear Plate" || ConnectionType == "End Plate" )
        		{
        			ClipAngleProfile = $("#drpSharePlateThickness").find("option:selected").text();  
        			
        			if(ConnectionType == "Shear Plate")
        				ClipAngleProfile = "PL"+ ClipAngleProfile + '"X3 1/2"';
        			else if(ConnectionType == "End Plate")
        				ClipAngleProfile = "PL"+ ClipAngleProfile + '"X8 1/2"';
        			
        			WeldType = $("#drpWeldType").find("option:selected").text(); 
                	WeldSize = $("#drpWeldSize").val() == "" ? "" : $("#drpWeldSize").find("option:selected").text() + '"';
        		}
        	
        	var BoltGrade = $("#drpBoltGrade").find("option:selected").text(); 
        	var NoOfBoltRows = $("#drpNoOfBoltRows").find("option:selected").text(); 
        	var BoltDia = $("#drpBoltDia").find("option:selected").text() + '"'; 
        	
        	
        	var ReferenceDrawing = $("#drpReferenceDrawing").val(); 
        	
        	var FeetVal = LengthInFeet * 12;
        	var InchVal = $("#drpLengthInInch").val();
        	var FractionVal = $("#drpLengthInFraction").val();
        	
        	var ProfileWeight = $("#drpProfile").val().split(',');
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);
        	
        	var MemberWeight_Lbs = (Total_Length * parseFloat(ProfileWeight[0]))/12;
        	
        	var MemberWeight_Tons = MemberWeight_Lbs/2000;  
        	
        	var Total_Member_Weight_Lbs = (MemberWeight_Lbs * parseInt(Quantity));
        	
        	var Total_Member_Weight_Tons =(MemberWeight_Tons * parseInt(Quantity));
        	
        	        	
        	if(isEdit == true)
        	{
        		$('#tableRafterBeam').dataTable().fnUpdate(
            			['<label class="custom-control custom-checkbox" >'+
    						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
    						'<span class="custom-control-indicator"></span>'+
    						'<span class="custom-control-description labelblk"></span></label>',
            			 RowNoForAddEdit, Shape,
            			 Profile,  MaterialGrade,
            			 TotalLength,  Quantity,
            			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),            			            			 
            			 ConnectionType,  ClipAngleProfile,
            			 BoltGrade, BoltDia,           			 
            			 NoOfBoltRows, WeldType, WeldSize,
            			 LengthInFeet,LengthInInch,LengthInFraction,
            			 ReferenceDrawing,$("#drpWeldSize").val(),$("#drpBoltDia").val()], document.getElementById("row" + editRowNo));
        	
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
					          '<td>'+ ConnectionType + '</td>' +				          
					    	  '<td>'+ ClipAngleProfile + '</td>' +	
					    	  '<td>'+ BoltGrade + '</td>' + 
							  '<td>'+ BoltDia + '</td>' +
							  '<td>'+ NoOfBoltRows + '</td>' +  
							  '<td>'+ WeldType + '</td>' +
							  '<td>'+ WeldSize + '</td>' +  
							  '<td style="display:none;">'+ LengthInFeet + '</td>' + 
							  '<td style="display:none;">'+ LengthInInch + '</td>' + 
							  '<td style="display:none;">'+ LengthInFraction + '</td>' + 
							  '<td>'+ ReferenceDrawing + '</td>' +
							  
							  '<td style="display:none;">'+ $("#drpWeldSize").val() + '</td>' + 
							  '<td style="display:none;">'+ $("#drpBoltDia").val() + '</td>' + 
						  '</tr>' ;
				
        	rafterBeamtable.row.add($(DataRow)).draw(false);
        	}
        	
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {
        	var RafterBeam = [];
        	
        	var table = $("#tableRafterBeam tbody");
        	
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
					        ConnectionMemberProfile = $tds.eq(10).text(),
					        BoltGrade = $tds.eq(11).text(),
					        BoltDia = $tds.eq(12).text(),                
					        NoOfBoltRows = $tds.eq(13).text(),
					        WeldType = $tds.eq(14).text(),
					        WeldSize = $tds.eq(15).text(),
					        LengthInFeet = $tds.eq(16).text(),
		                    LengthInInch = $tds.eq(17).text(),                    
		                    LengthInFraction = $tds.eq(18).text(),
		                    ReferenceDrawing = $tds.eq(19).text(),
		                    Weldsizedecimal1 = $tds.eq(20).text(),
		                    Boltdiadecimal= $tds.eq(21).text();
                
                if(ConnectionType == "Shear Plate")
                	ConnectionMemberProfile = ConnectionMemberProfile.replace("PL","").replace('"X3 1/2"','');
    			else if(ConnectionType == "End Plate")
    				ConnectionMemberProfile = ConnectionMemberProfile.replace("PL","").replace('"X8 1/2"','');
               
               var rafterBeamArray = {
            		   		[shape]: Shape, 
		          			 [profile]:Profile,
		          			 [grade]:MaterialGrade,
		          			 [length] :{[feet]:LengthInFeet, 
		          				 		[inches]:LengthInInch, 
		          				 		[fraction]:LengthInFraction,
		          				 		[fractiondecimal]: eval(LengthInFraction)},
		          			 [quantity] : Quantity,                      
		          			 [connectiontype] : ConnectionType,
		          			 [memberweightlbs] : MemberWeightlbs,
		          			 [memberweightstons] : MemberWeightTons, 
		          			 [connectingmember]:ConnectionMemberProfile,           			
	             			 [weldtype] : WeldType,	             			
	             			 [weldsize] : {[weldsizefraction]:WeldSize.replace('"',''), 
	             				 			[weldsizedecimal]:Weldsizedecimal1},
	             			 [boltgrade] : BoltGrade,
	             			 [boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
	             				 			[boltdiadecimal]:Boltdiadecimal},
	             			 [noofbolts] : NoOfBoltRows,
	             			 [referencedrawing]: ReferenceDrawing
	             	 }                 
               RafterBeam.push(rafterBeamArray);
            });
                        
            $.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',	
			    data: { miscsteelgroup:"RafterBeam",
			    	    miscsteeljson:JSON.stringify({"RafterBeam":RafterBeam})
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