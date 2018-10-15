var RowNo = 0;
var Selected = [];
var isEdit = false;
var editRowNo;

var BoGrGp = "- Select -";
var BoltDiaGP= "- Select -";
var weldSizeGP="- Select -";	

var S_Profile = [];
var W_Profile = [];
var monorailstable = "";

var shape = "shapes",
	profile = "profile",
	grade = "grade",
	quantity = "quantity",
	feet = "feet",
	inches = "Inch",
	fraction = "fr_fra",
	fractiondecimal = "fr", 
	noofcurves="noofcurves",
	connectiontype = "connectiontype",
	postshape = "postshape",
	postprofile="postprofile",
	postthickness = "postthickness",
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
	postlength = "postlength",
	plateThicknessfraction = "tp_fra",
	plateThicknessdecimal = "tp",
	cuveredmonorail = "cuveredmonorail";

$(document).ready(function(){
	
	monorailstable = $('#tbleMonoRails').DataTable( {
		"dom": 'ftipr',
	     "bInfo": false,
	     searching: false,
	     paging: false,
	     "pagingType": "full",
	     "showNEntries" : true,
	     bLengthChange: true,
	     "lengthMenu": [[500], [500]],		     
	     "ordering": false
    } );
 
	 
	   jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');
		
		$(".select2").select2();
		
		 var LProfile = getProfiles("S");
		 var LMaterialGrade = getMaterialGrade("S");
		
		 fillProfileDropdownList('drpProfile',LProfile);
		 fillMaterialGradeDropdownList('drpMaterialGrade',LMaterialGrade);
	
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

	       
		//Curved Rails
		 $("#ddlConnectiontypeMonoRail").change( function(){
			
             if($('#ddlConnectiontypeMonoRail').val()=='curvedRailsNO'){                 
                  $("#curvedRails").hide();                  
                 
             }
             else if($('#ddlConnectiontypeMonoRail').val()=='curvedRailsYES'){            	 
                 $("#curvedRails").show();      
             }             
             
         });
		// Connection Type Change Event
		 $("#ConnectiontypeMonorail").change( function(){
             if($('#ConnectiontypeMonorail').val()=='connectionTypeMonoEP'){                 
                  $("#connectionTypeMonoEP").show();                  
                 
             }
             else if($('#ConnectiontypeMonorail').val()=='connectionTypeMonoDB'){            	 
                 $("#connectionTypeMonoEP").hide();      
             }             
             
         });
        
         //Populated Data to controls for edit
		function populateDataForEdit(selectedrowid)
		{
			var table = $("#tbleMonoRails tbody");
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
                    NoOfCurves =  $tds.eq(7).text(), 
                    MemberWeightlbs = $tds.eq(8).text(),
                    MemberWeightTons = $tds.eq(9).text(), 
                    ConnectionType = $tds.eq(10).text(),
                    PostShape = $tds.eq(11).text(),	
                    PostProfile = $tds.eq(12).text(),	 
                    PostLength = $tds.eq(13).text(),
                    EndPlateThickness = $tds.eq(14).text(),		                    
                    BoltGrade = $tds.eq(15).text(),		                   
                    BoltDia = $tds.eq(16).text(),
                    NoOfBolts = $tds.eq(17).text(),
                    WeldType = $tds.eq(18).text(),
                    WeldSize = $tds.eq(19).text(),	
                    ReferenceDRawing = $tds.eq(20).text(),
                    LengthInFeet = $tds.eq(21).text(),
                    LengthInInch = $tds.eq(22).text() == ""?"0" : $tds.eq(22).text(),
                    LengthInFraction = $tds.eq(23).text() == "" ? "0" : $tds.eq(23).text(),
                    PostLengthInFeet = $tds.eq(24).text(),
                    PostLengthInInch = $tds.eq(25).text() == "" ? "0" : $tds.eq(25).text(),
                    PostLengthInFraction = $tds.eq(26).text() == "" ? "0" : $tds.eq(26).text(),
                    CurvedMonoRail = $tds.eq(27).text();
		        			        	
		        			        	
		        	$('#txtShape').val(Shape);
		        	
		        	$('#drpProfile').val(getOptId('drpProfile', Profile)).change();		        	
		        	$('#drpMaterialGrade').val(MaterialGrade).trigger('change');
		        	
		        	$('#txtQuantity').val(Quantity);
		        	$('#txtLengthInFeet').val(LengthInFeet);
		        	
		        	$('#drpLengthInInch').val(getOptId('drpLengthInInch', LengthInInch));
		        	$('#drpLengthInFraction').val(getOptId('drpLengthInFraction', LengthInFraction));
		        	
		        	$('#ddlConnectiontypeMonoRail').val(getOptId('ddlConnectiontypeMonoRail', CurvedMonoRail));		        	
		        	$("#ddlConnectiontypeMonoRail").trigger("change");
		        			        	
		        	$('#txtNoOfCurves').val(NoOfCurves);
		        		        	
		        	$('#ConnectiontypeMonorail').val(getOptId('ConnectiontypeMonorail', ConnectionType));		        	
		        	$("#ConnectiontypeMonorail").trigger("change");
		        	
		        	if( ConnectionType == "Post with End Plate")
		        	{
		        				        		
		        		$('#drpPostShape').val(getOptId('drpPostShape', PostShape));			        	
		        		$("#drpPostShape").trigger("change");
		        		
		        		$('#drpPostProfile').val(getOptId('drpPostProfile', PostProfile)).change();		        		
		        		$('#drpPlateThickness').val(getOptId('drpPlateThickness', EndPlateThickness.replace('"',''))).change();
		        		
		        		$('#txtPostLengthInFeet').val(PostLengthInFeet);		        		
		        		$('#drpPostLengthInInch').val(getOptId('drpPostLengthInInch', PostLengthInInch));		        				        		
		        		$('#drpPostLengthInFraction').val(getOptId('drpPostLengthInFraction', PostLengthInFraction));
		        		
		        		$('#drpWeldType').val(getOptId('drpWeldType', WeldType));
		        		$("#drpWeldType").trigger("change");
		        		
		        		$('#drpWeldSize').val(getOptId('drpWeldSize', WeldSize.replace('"',''))).change();			        	
			        	
		        	}
		        	
		        		$('#drpBoltGrade').val(getOptId('drpBoltGrade', BoltGrade)).change();			        		
		        		$('#drpBoltDia').val(getOptId('drpBoltDia', BoltDia.replace('"','')));			        		
		        		$('#drpNoOfBoltRows').val(getOptId('drpNoOfBoltRows', NoOfBolts));
		        				        	
			        	var drawings = ReferenceDRawing.split(",");	      	
			        	$("#drpReferenceDrawing").val(drawings).trigger("change");	
		        	
		        	
		        }
		    });
			
		}
		
		//Clear All Controls Data
        function clearFields() {
        	$('#frmMain').removeClass('submitted');        	
        	$('#frmDirectlyBolted').removeClass('submitted');       	
        	$('#frmPostWithEndPlate').removeClass('submitted'); 
        	
        	clearFormFields('frmMain');
        	clearFormFields('frmDirectlyBolted');
        	clearFormFields('frmPostWithEndPlate');
        	        	
        	$("#txtShape").val('S');            
            $("#ddlConnectiontypeMonoRail").val('curvedRailsNO');
            $("#ddlConnectiontypeMonoRail").trigger("change");
        	
        	$('#ConnectiontypeMonorail').val("connectionTypeMonoEP");        	        	
        	$("#ConnectiontypeMonorail").trigger("change");
        	        	     	
        	$(".defaultValueZero").val(0);
        	
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
        	
        	$('#frmMain').addClass('submitted');
        	$('#frmRefrenceDrawing').addClass('submitted');
        	
        	if($('#ConnectiontypeMonorail').val()=='connectionTypeMonoEP'){
        		
        		$('#frmPostWithEndPlate').addClass('submitted');
        		$('#frmDirectlyBolted').addClass('submitted');
        		
        		connectionTypeFormId = "frmPostWithEndPlate";
               
           }                     
           else if($('#ConnectiontypeMonorail').val()=='connectionTypeMonoDB'){
        	   
        	   $('#frmDirectlyBolted').addClass('submitted');
        	   $('#frmPostWithEndPlate').removeClass('submitted');
      		   
           }
        	        	
        	var validated = true;
        	$('#frmMain').find(':input').each(function(){   
        		
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
	           		var elemetvisible = $('#' + id).is(':visible');
       		   		
	           		if(Value == "" && requ == true && elemetvisible)   		
	           			validated = false;
           		}
           		
           	}); 
        	if(validated==true && connectionTypeFormId == "frmPostWithEndPlate")
       		{
       			var PostLenght = $("#txtPostLengthInFeet").val();
            	var PostInch = $("#drpPostLengthInInch").find("option:selected").text();
            	var PostFraction = $("#drpPostLengthInFraction").find("option:selected").text();
        	
            	validated = validateLength(PostLenght,PostInch,PostFraction,"Post Length");
        		
       		}
        	
        	$('#frmDirectlyBolted').find(':input').each(function(){   		
           		
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
        	
        	var Lenght = $("#txtLengthInFeet").val();
        	var Inch = $("#drpLengthInInch").find("option:selected").text();
        	var Fraction = $("#drpLengthInFraction").find("option:selected").text();
        	
        	var TotalLength = feetInchFormater(Lenght, Inch, Fraction);
        	
        	var CurvedMonoRail = $("#ddlConnectiontypeMonoRail").find("option:selected").text();
        	        	
        	var NoOfCurves = CurvedMonoRail == "No" ? "" : $("#txtNoOfCurves").val();

        	var ConnectionType = $("#ConnectiontypeMonorail").find("option:selected").text();
        	
        
        	var PostShape= "", PostProfile = "", PlateThickness = "", PlateThicknessDecimal= "", 
        		PostLenghtInFeet = "",PostLengthInInch="",PostLenghtInFraction = "", PostLenght = "",        	
        		WeldType="", WeldSize="" , WeldSizeDecimal = "";
        	
        	var BoltGrade="",BoltDia="",NoOfBolts="" ,BoltDiaDecimal = "";
        	
        	var PostWeight = 0;
        	
        	if(ConnectionType == "Post with End Plate")
        	{
        		
        		PostShape = $("#drpPostShape").find("option:selected").text(); 
        		PostProfile = $("#drpPostProfile").find("option:selected").text(); 
        		
        		PlateThickness = $("#drpPlateThickness").find("option:selected").text() + '"'; 
        		PlateThicknessDecimal = $("#drpPlateThickness").val();
        		
        		PostLenghtInFeet =  $("#txtPostLengthInFeet").val();
        		PostLengthInInch =  $("#drpPostLengthInInch").find("option:selected").text() ;
        		PostLenghtInFraction =  $("#drpPostLengthInFraction").find("option:selected").text() ;
           	 
        		PostLenght = feetInchFormater(PostLenghtInFeet, PostLengthInInch ,PostLenghtInFraction);
        		
        		WeldType =  $("#drpWeldType").find("option:selected").text() ;
            	WeldSize =  $("#drpWeldSize").val() == "" ? "" : $("#drpWeldSize").find("option:selected").text() + '"';
            	
            	WeldSizeDecimal =  $("#drpWeldSize").val();
            	
            	var PostProfileWeight = $("#drpPostProfile").val().split(",");
            	
            	var PostFeetVal = PostLenghtInFeet * 12;
            	var PostInchVal = $("#drpPostLengthInInch").val();
            	var PostFractionVal = $("#drpPostLengthInFraction").val();
            	
            	var Post_Total_Length = parseFloat(PostFeetVal) + parseFloat(PostInchVal) + parseFloat(PostFractionVal);
            	
            	PostWeight = (((parseFloat(PostProfileWeight[0]) * parseFloat(Post_Total_Length))/12) * 2 ) * parseInt(Quantity);
        		
        		
        	}
        	
        	BoltGrade = $("#drpBoltGrade").find("option:selected").text() ;
        	BoltDia = $("#drpBoltDia").find("option:selected").text()+'"'  ;
        	BoltDiaDecimal  = $("#drpBoltDia").val();
        	
        	NoOfBolts = $("#drpNoOfBoltRows").find("option:selected").text() ;
        		
        	
        	var ReferenceDrawing = $("#drpReferenceDrawing").val();
        	  	
        	var FeetVal = Lenght * 12;
        	var InchVal = $("#drpLengthInInch").val();
        	var FractionVal = $("#drpLengthInFraction").val();
        	
        	var Total_Length = parseFloat(FeetVal) + parseFloat(InchVal) + parseFloat(FractionVal);
        	        	
        	var ProfileWeight = $("#drpProfile").val().split(",");
        	
        	var MonoRailWeight = ((Total_Length * parseFloat(ProfileWeight[0]))/12) * parseInt(Quantity);
        	
        	var TotalMemberWight = MonoRailWeight + PostWeight ;
        	
        	var MemberWeight_Tons = TotalMemberWight/2000;
        	 
        	var Total_Member_Weight_Lbs = TotalMemberWight;
        	
        	var Total_Member_Weight_Tons = MemberWeight_Tons;
        	
        	if(isEdit == true)
         	{
         	  $('#tbleMonoRails').dataTable().fnUpdate(
         			['<label class="custom-control custom-checkbox" >'+
 						'<input id="chkRow'+ RowNoForAddEdit +'" type="checkbox" name="selectAll" class="custom-control-input cci-select" onclick="getrows()">'+
 						'<span class="custom-control-indicator"></span>'+
 						'<span class="custom-control-description labelblk"></span></label>',
         			 RowNoForAddEdit, Shape,
         			 Profile,  MaterialGrade,
         			 TotalLength,  Quantity,NoOfCurves,
         			 Total_Member_Weight_Lbs.toFixed(3), Total_Member_Weight_Tons.toFixed(3),
         			 ConnectionType,PostShape,PostProfile,PostLenght,PlateThickness,
         			 BoltGrade, BoltDia,
         			 NoOfBolts, WeldType,WeldSize,
         			 ReferenceDrawing,       			 
         			 Lenght, Inch,Fraction,PostLenghtInFeet,
         			 PostLengthInInch,PostLenghtInFraction,CurvedMonoRail,
         			 PlateThicknessDecimal,
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
	                          '<td>'+ NoOfCurves + '</td>'+	                          
	                          '<td>'+ Total_Member_Weight_Lbs.toFixed(3) +'</td>' + 
	      					  '<td>'+ Total_Member_Weight_Tons.toFixed(3) +'</td>'+	      					  
	                          '<td>'+ ConnectionType + '</td>'+	 
	                          '<td>'+ PostShape  + '</td>'+
	                          '<td>'+ PostProfile  + '</td>'+
	                          '<td>'+ PostLenght  + '</td>'+
	                          '<td>'+ PlateThickness  + '</td>'+ 
				        	  '<td>'+ BoltGrade + '</td>' + 
	      					  '<td>'+ BoltDia + '</td>' +
	      					  '<td>'+ NoOfBolts + '</td>' + 
	      					  '<td>'+ WeldType + '</td>' + 
				        	  '<td>'+ WeldSize + '</td>' +
	      					  '<td>'+ ReferenceDrawing + '</td>' + 
		      				  '<td style="display:none;">'+ Lenght + '</td>' + 
		      				  '<td style="display:none;">'+ Inch + '</td>' + 
		      				  '<td style="display:none;">'+ Fraction + '</td>' + 		      				  
		      				  '<td style="display:none;">'+ PostLenghtInFeet + '</td>' + 
		      				  '<td style="display:none;">'+ PostLengthInInch + '</td>' + 
		      				  '<td style="display:none;">'+ PostLenghtInFraction + '</td>' + 		      				 
		      				  '<td style="display:none;">'+ CurvedMonoRail + '</td>' + 	
		      				  
			      			  '<td style="display:none;">'+ PlateThicknessDecimal + '</td>' + 	
			      			  '<td style="display:none;">'+ WeldSizeDecimal + '</td>' + 	
			      			  '<td style="display:none;">'+ BoltDiaDecimal + '</td>' + 	
      					  '</tr>' ;
        	
        			monorailstable.row.add($(DataRow)).draw(false);
         	}
        	
        	constructJsonArrayFromTable();
        	
        	isEdit = false;
        	$('.addTR').text('Add');
        	
        }
        
        //Construct JSON from table and save to database
        function constructJsonArrayFromTable() {        	
        	
        	var MonoRails = [];
        	        	
        	var table2 = $("#tbleMonoRails tbody");        	
        	
        	table2.find('tr').each(function (i) 
            {
            	            	
                var $tds = $(this).find('td'),                    
		                	Shape = $tds.eq(2).text(),
		                    Profile = $tds.eq(3).text(),
		                    MaterialGrade = $tds.eq(4).text(),
		                    Length = $tds.eq(5).text(),
		                    Quantity = $tds.eq(6).text(), 		                   
		                    NoOfCurves =  $tds.eq(7).text(),                    
		                    MemberWeightlbs = $tds.eq(8).text(),
		                    MemberWeightTons = $tds.eq(9).text(), 		                    
		                    ConnectionType = $tds.eq(10).text(),		                    
		                    PostShape = $tds.eq(11).text(),	
		                    PostProfile = $tds.eq(12).text(),	 
		                    PostLength = $tds.eq(13).text(),
		                    EndPlateThickness = $tds.eq(14).text(),		                    
		                    BoltGrade = $tds.eq(15).text(),		                   
		                    BoltDia = $tds.eq(16).text(),
		                    NoOfBolts = $tds.eq(17).text(),
		                    WeldType = $tds.eq(18).text(),
		                    WeldSize = $tds.eq(19).text(),	
		                    RefernceDrawing = $tds.eq(20).text(),
		                    LengthInFeet = $tds.eq(21).text(),
		                    LengthInInch = $tds.eq(22).text(),
		                    LengthInFraction = $tds.eq(23).text(),
		                    PostLengthInFeet = $tds.eq(24).text(),
		                    PostLengthInInch = $tds.eq(25).text(),
		                    PostLengthInFraction = $tds.eq(26).text(),
		                    CurvedMonoRail = $tds.eq(27).text(),
		                    
		                    PlateThicknessDecimal= $tds.eq(28).text(),
		      				WeldSizeDecimal = $tds.eq(29).text(),
		      			    BoltDiaDecimal = $tds.eq(30).text();
                              
               var MonorailsArray = {
			                        [shape]: Shape,
			                        [profile]:Profile,
			                        [grade]:MaterialGrade,
			                        [length] :{[feet]:LengthInFeet, 
		          				 				[inches]:LengthInInch, 
		          				 				[fraction]:LengthInFraction,
		          				 				[fractiondecimal]: eval(LengthInFraction)},
			                        
			                        [quantity] : Quantity,
			                        [noofcurves] : NoOfCurves,			                        
			                        [memberweightlbs] : MemberWeightlbs,
			                        [memberweightstons] : MemberWeightTons,   
			                        [connectiontype] : ConnectionType,				                       
			                        [postshape] : PostShape,
			                        [postprofile] : PostProfile,
			                        
			                        [postlength] :{[feet]:PostLengthInFeet, 
          				 					[inches]:PostLengthInInch, 
          				 					[fraction]:PostLengthInFraction,
          				 					[fractiondecimal]: eval(PostLengthInFraction)},
          				 				
			                        [postthickness] : {[plateThicknessfraction ]:EndPlateThickness.replace('"',''), 
             				 							[plateThicknessdecimal ]:PlateThicknessDecimal},
			                        
			                        [weldtype] : WeldType,
			                        [weldsize] : {[weldsizefraction]:WeldSize.replace('"',''), 
			                        			  [weldsizedecimal]:WeldSizeDecimal},
             				 			
             				 		[boltgrade] : BoltGrade,		                     
        		             			
       		             			[boltdia] :{[boltdiafraction]:BoltDia.replace('"',''), 
       		             				 			[boltdiadecimal]:BoltDiaDecimal},
       		             			[noofbolts] : NoOfBolts, 
       		             			
			                        [referencedrawing] : RefernceDrawing,
			                        [cuveredmonorail] : CurvedMonoRail,
			          }                 
               MonoRails.push(MonorailsArray);
               
            });
        	
        	$.ajax({
            	async: false,
    	        type : 'POST',
    	        url: "/bimspring/addMiscSteelJSON",
    	        dataType : 'JSON',				
    		    data: { miscsteelgroup:"Monorails",
    		    	 miscsteeljson:JSON.stringify({"Monorails":MonoRails})
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
        $("#drpPostShape").change(function() {    
        	
        	resetDrodown('drpPostProfile');
        	
        	if($("#drpPostShape").val() != "HSS")
   	       	{
	        	 if(S_Profile.length == 0 )
	      		 {
	        		S_Profile = getProfiles($("#drpPostShape").val());	      			
	      		 }
	      		 fillProfileDropdownList('drpPostProfile',S_Profile);
   	       	}
        	if($("#drpPostShape").val() != "W")
   	       	{
	        	 if(W_Profile.length == 0 )
	      		 {
	        		W_Profile = getProfiles($("#drpPostShape").val());	      			
	      		 }
	      		 fillProfileDropdownList('drpPostProfile',W_Profile);
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

         