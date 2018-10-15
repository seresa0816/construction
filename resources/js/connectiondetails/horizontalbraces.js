/**
 * 
 */


 $(".select2").select2(); 
  
   var connectionmarkedit="";
    
    var connectionmarkvalues=[];
    
    function connectionmarkToJSON(tableID) {
		var tableData = [];
		connectionmarkvalues=[];
		var table = document.getElementById(tableID);
		var rowCount = document.getElementById(tableID).rows.length;
		for (var i = 1; i < rowCount; i++) {
			connectionmarkvalues.push($(table.rows.item(i).cells[2]).text());
		}
		return tableData;
	} 
    
	var listvalues = [];
 	$(".contxt").each(function(){			
 		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
 		
 	});
 	 $(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
 	       $(this).val($(this).val().replace(/[^\d].+/, ""));
 	        if ((event.which < 48 || event.which > 57)) {
 	            event.preventDefault();
 	        }           
 	    });  
 	

 	 
 	 $('.allowAlphanumeric').keypress(function (e) {
 		    var regex = new RegExp("^[a-zA-Z0-9]+$");
 		    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
 		    if (regex.test(str)) {
 		        return true;
 		    }

 		    e.preventDefault();
 		    return false;
 		});
 	 
 	 
 	
 	 
 	 
    //Screen Resolution
     function resize() {
         var screenheight = window.innerHeight;
         var offset = document.getElementById('header').offsetHeight;
         total = (Number(screenheight) - Number(offset) );
         document.getElementById("add-new-value").style.height = (total + "px" );
     }
     resize();
     window.onresize = function() {
         resize();
     };
   function feetInchFormater(feet, inch, fraction)
   {
   	
   	var Length = "";        	
   	var Feet = feet == 0 ? "" : feet + "'-" ;        	
   	var Inch = inch == 0 ? "0 " : inch + " ";        	
   	var Fraction = fraction == 0 ? '' : fraction;   
   	
   	if(Fraction == 0)
   		Inch = inch == 0 ? "0" : inch; 
   	
   	Length = Feet + Inch + Fraction+'"';     
   	if (Feet == 0 && Inch  == "0 ") {
   		Length = Fraction+'"';   
 	}
   
   	return Length;
   }
    
   
   
   
   $(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
       $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }           
    });  
   
   function getformateforrepresentation(valuesaved){
 		 var retval= valuesaved == "" ? "" : valuesaved + '"';
 		 return retval;
 			
 		}

   
   
   function checkconnectioncodeForuniquiness() {
 	  
 		var text = $('#conmark').val().replace(/\s/g, "").toLowerCase()

 		if(jQuery.inArray(text, listvalues) !== -1){
 		    	
 		     	$('#alert_model_placeholder').append
 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
 		                '</div>')         
 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
 		             	$("#alertdiv").remove();

 		         }, 2500);
 		    	
 		    	return false;
 		}
 		
 		return true;
 	}
   
   function showalertInformation(text) { 
       
       $('#alert_placeholder').append
        ('<div class="alert alert-info" id="alertdiv"> <i class="fa fa-exclamation-circle"></i> ' + text + 
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                '</div>')         
        	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
            	$("#alertdiv").remove();

        }, 2000);
       window.scrollTo(0,0);
      
      }

   function showalertSuccess(text) {        	
       $('#alert_placeholder').append
       ('<div class="alert alert-success" id="alertdiv"> <i class="fa fa-check-circle"></i> ' + text + 
               '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
               '</div>')       
        	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
            	$("#alertdiv").remove();

        }, 2000);
       window.scrollTo(0,0);
      }
   
    
    
    
    
    
    
    
    
  
    var $row ="";
    $("#edit").click(function(){
    	var i=0;
    	
    	$(".cci-select").each(function(){
        	
    		if($(this).prop('checked')==true){
    			i=i+1;
    		 $row = $(this).closest("tr");       // Finds the closest row <tr> 
    		  
    			}
    		
		});
    	
    	if (i==1) {
    		 $(".right").show();
    	     $(".left").hide();
    	    $(".memtype-rightedit").show();
    		$(".editmemtype .rightFloat").show(); 
    		$("#adddata").hide();
    	    $("#update").show();
    	  
    	    $(".contxt").each(function(){			
    			listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
    			
    		});
    	  listvalues = jQuery.grep(listvalues, function(value) {
    		  return value != $row.find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase();
    		});
    	  $("#braceShapeH").val($row.find("td:nth-child(4)").text()).trigger("change");
   	      $("#braceProfile").val($row.find("td:nth-child(5)").text()).trigger("change");
   	
          
    	  if ($row.find("td:nth-child(4)").text()=="W") {
    		   $("#connectionMethodH2Div").show();
              $("#connectionMethodH2").val($row.find("td:nth-child(7)").text()).trigger("change");
              $("#connectionMethodH2").trigger("change");
              $("#connectionMethodH1Div").hide();
       		
       	} else {
       	 
       		$("#connectionMethodH1Div").show();
            $("#connectionMethodH2Div").hide();
       	    $("#connectionMethodH1").val($row.find("td:nth-child(7)").text()).trigger("change");
       	  $("#connectionMethodH1").trigger("change");
       		  
       	}
    	  $("#connectionTypeH").val($row.find("td:nth-child(17)").text()).trigger("change");
    	  
    	  
           if($row.find("td:nth-child(17)").text()=='Chevron'){ 
	         	$("#noChevron").hide();
	            $("#showChevron").show();
	            $("#gtobboltdetailsH").hide();
	            $(".weldlengthH").show();
	        	$("#showChevrongtobconnectionmethodH").val($row.find("td:nth-child(18)").text()).trigger("change");
	        	
         }
         else {  
        	 $("#showChevron").hide();
             $("#noChevron").show();
         	 $('#gtobconnectionmethodH').val($row.find("td:nth-child(18)").text()).trigger("change");
         	
         }   
	      
       
          connectionmarkedit=$row.find("td:nth-child(3)").text();
    	  $("#conmark").val($row.find("td:nth-child(3)").text());
    	  $("#GussetPlateThickness").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");
    	  $("#boltgrade").val($row.find("td:nth-child(8)").text()).trigger("change");
    	  $("#boltdia").val($row.find("td:nth-child(9)").find('input').val()).trigger("change");
    	  $("#noofboltrw").val($row.find("td:nth-child(10)").text()).trigger("change");
    	  $("#noofboltrwClaw").val($row.find("td:nth-child(11)").text()).trigger("change");
    	  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
    	  $("#edgedistance").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
    	  $("#ddlcjp").val($row.find("td:nth-child(14)").text()).trigger("change");
    	  $("#thisdisable").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");   
    	  $("#weldlength").val($row.find("td:nth-child(16)").find('.lengH').val()).trigger("change");
    	  $("#inch").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
    	  $("#fraction").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change");   
    	
    	  $("#gtobconnectionmethodH").val($row.find("td:nth-child(18)").text()).trigger("change");
    	  $("#GussettoBeamPlateThickness").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");
    	  $("#clipangletxt").val($row.find("td:nth-child(20)").text()).trigger("change");
    	  $("#osltxt").val($row.find("td:nth-child(21)").text()).trigger("change");
    	  
    	  $("#boltgrade2").val($row.find("td:nth-child(22)").text()).trigger("change");
     	  $("#boltdia2").val($row.find("td:nth-child(23)").find('input').val()).trigger("change");
    	  $("#noofboltrw2").val($row.find("td:nth-child(24)").text()).trigger("change");
    	  $("#boltspc2").val($row.find("td:nth-child(25)").find('input').val()).trigger("change");
    	  $("#edgedistance2").val($row.find("td:nth-child(26)").find('input').val()).trigger("change");
    	  $("#ddlcjp1").val($row.find("td:nth-child(27)").text()).trigger("change");
    	  $("#thisdisable1").val($row.find("td:nth-child(28)").find('input').val()).trigger("change");   
    	  $("#weldlength2").val($row.find("td:nth-child(29)").find('.lengH').val()).trigger("change");
    	  $("#inch2").val($row.find("td:nth-child(29)").find('.inchH').val()).trigger("change");   
    	  $("#fraction2").val($row.find("td:nth-child(29)").find('.fracH').val()).trigger("change"); 
    	  $("#weldlength3").val($row.find("td:nth-child(30)").find('.lengH').val()).trigger("change");
    	  $("#inch3").val($row.find("td:nth-child(30)").find('.inchH').val()).trigger("change");   
    	  $("#fraction3").val($row.find("td:nth-child(30)").find('.fracH').val()).trigger("change"); 
    	  
    	
    	
		}
    	
    	
    });
    
    
   
    
    //HBrace - Brace to Gusset Connection Method
    $("#welddetailsH").hide();


    //HBrace - Gusset to Beam Connection Method
    $(".weldlengthH").hide();
   
        $("#gtobconnectionmethodH").change( function(){
            if($('#gtobconnectionmethodH').val()=='Field Bolted' || $('#gtobconnectionmethodH').val()=='Shop Bolted') { 
                 $(".weldlengthH").hide();
                 $(".weldlengthH").val("").trigger('change');
                 $("#gtobboltdetailsH").show();
                 getboltdetails2();
            }
            else if($('#gtobconnectionmethodH').val()=='Field Welded' || $('#gtobconnectionmethodH').val()=='Shop Welded'){  
                $("#gtobboltdetailsH").hide();
                $(".weldlengthH").show();
                getWelddetails2();
            }  
           
        });
   
        
        
        function validateSelect2Fields(){
        	if (!$('#braceProfile').val()) {
    			$('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		if (!$('#GussetPlateThickness').val()) {
    			$('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		
    		if (!$('#boltgrade').val()) {
    			$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		if (!$('#boltdia').val()) {
    			$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		if (!$('#noofboltrw').val()) {
    			$('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		
    		if (!$('#boltspc').val()) {
    			$('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		if (!$('#edgedistance').val()) {
    			$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		
    		if (!$('#thisdisable').val()) {
    			$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		if (!$('#clipangletxt').val()) {
    			$('#clipangletxtDiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		}
    		
    		if (!$('#boltgrade2').val()) {
    			$('#boltgrade2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		
    		if (!$('#boltdia2').val()) {
    			$('#boltdia2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		if (!$('#noofboltrw2').val()) {
    			$('#noofboltrw2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		
    		if (!$('#boltspc2').val()) {
    			$('#boltspc2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		if (!$('#edgedistance2').val()) {
    			$('#edgedistance2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
    		
    		if (!$('#thisdisable1').val()) {
    			$('#thisdisable1DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    			
    		}
        }
    
	function validateForm() {

		validateSelect2Fields();
		
		
		
		
		$('#formContractHorizontalBrace').addClass('submitted');
		
		var validated = true;
		
		
		/* checking for required filed */
		$('#formContractHorizontalBrace').find(':input').each(function(){   
			
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
		
           return validated;

	}
    
   
     
	  $(".action-icons .add").on('click', function(){
	        $(".right").show();
	        $(".left").hide();
	        $("#adddata").show();
	        $("#update").hide();
	        $(".memtype-rightedit").show();
	        $(".editmemtype .rightFloat").show();  
	        $(".BoltDetails,.ClipAngleLength,#conmark,#beamprofile,#clipanglesz,#btocClip1,#btocClip2,.WeldDetails").val('').trigger("change");  
	        $('#formContractHorizontalBrace').removeClass('submitted');
	        $('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
	        $('#clipanglesz').val(ClipAngleSizeGp).trigger("change"); 
			$('#clipangleszDIV .select2-container--default .select2-selection--single').css("border-color","");
		  
     
	    });
	  
	  /* checking for required filed */
		$("#adddata").on('click', function(){
			
			if(validateForm()&&checkconnectioncodeForuniquiness()){
				addconnectionmark();
			}
	    });
	    
	  
	  $("#update").on('click', function(){
		  if(validateForm()&&checkconnectioncodeForuniquiness()){
			
			  if (connectionmarkedit==$("#conmark").val()) {
		  		  finalupdate();
		  		     
				} else {
					 updateconnectionmark();
				}
		  }    
  		
	    });
	  
	
  
	    
	    
	    
	    
	    function addorupdate() {
	    	  
	    	  
	    	  var connectionjson=	tableToJSON('table') ;
	    	 
	    		 $.ajax({
	     		   type : 'POST',
	     	          url: "/bimspring/saveConnectionsDetails",	          
	     	          data : {connectiongrouptype:"HorizontalBrace",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
	     	          success : function(data, success) {  	
	     	        	 if (data=="error") {
	     	            	  showalertsession("Select Project Again")
	     						
	     	            	  window.location='projectlist';
	     					}
	    	          },error: function (error) {
						if(error.status == 401){
							window.location.href = 'logout';
						}else{
							alert('Sorry! Your session has expired Please select Project again');
							window.location.href='dashboard';
						}
	    	          }
	     	          });  
	    }
	    
	  
	    function  getboltdetails(){
	 	   $("#boltgrade").val(BoGrGp).trigger("change");  
	 	   $("#boltdia").val(BoltDiaGP).trigger("change");  
	 	   $("#boltspc").val(BspacingGP).trigger("change");  
	 	   $("#edgedistance").val(EDistandanceGP).trigger("change");  
	 	   $("#boltgage").val(GageGP).trigger("change"); 
	 	  $("#noofboltrw").val("").trigger("change"); 
	 	   
	 	  
	 	   
	     }
	    
	    function  getWelddetails(){
	  	  $("#weldlength").val("").trigger("change"); 
	      $("#ddlcjp").val(WeldTypeDefaultValue).trigger("change");  
	 	  $("#thisdisable").val(weldSizeGP).trigger("change"); 
	 	   if ( $("#ddlcjp").val()=="CJP") {
	 		   $("#thisdisable").val("").trigger("change"); 
	 		   $("#thisdisable").attr("disabled", true);
	 		   $("#thisdisable").prop('required',false);
	 		   $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
	 			
	 		}else {
	 			  $("#thisdisable").attr("disabled", false);
	 			  $("#thisdisable").prop('required',true);
	 		}		   
	     }
	    
	 	$("#ddlcjp").change(function() {  
	    if ( $("#ddlcjp").val()=="CJP") {
	 	   $("#thisdisable").val("").trigger("change"); 
	 	   $("#thisdisable").attr("disabled", true);
	 	   $("#thisdisable").prop('required',false);
	 	  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
	 		
	 	}else {
	 		  $("#thisdisable").attr("disabled", false);
	 		  $("#thisdisable").prop('required',true);
	 	}

	 	});
	 	
	 	
	 	
	 	 function  getboltdetails2(){
		 	   $("#boltgrade2").val(BoGrGp).trigger("change");  
		 	   $("#boltdia2").val(BoltDiaGP).trigger("change");  
		 	   $("#boltspc2").val(BspacingGP).trigger("change");  
		 	   $("#edgedistance2").val(EDistandanceGP).trigger("change");  
		 	  $("#noofboltrw2").val("").trigger("change"); 
		 	   
		     }
		    
		    function  getWelddetails2(){
		 	
		    	  $("#weldlength2").val("").trigger("change"); 
		    	  $("#ddlcjp1").val(WeldTypeDefaultValue).trigger("change");  
		 	   $("#thisdisable1").val(weldSizeGP).trigger("change"); 
		 	   if ( $("#ddlcjp1").val()=="CJP") {
		 		   $("#thisdisable1").val("").trigger("change"); 
		 		   $("#thisdisable1").attr("disabled", true);
		 		   $("#thisdisable1").prop('required',false);
		 		  $('#thisdisable1DIV .select2-container--default .select2-selection--single').css("border-color","");
			 		
		 		}else {
		 			  $("#thisdisable1").attr("disabled", false);
		 			  $("#thisdisable1").prop('required',true);
		 		}		   
		     }
		    
		 	$("#ddlcjp").change(function() {  
		    if ( $("#ddlcjp").val()=="CJP") {		    	
		 	   $("#thisdisable").val("").trigger("change"); 
		 	   $("#thisdisable").attr("disabled", true);
		 	   $("#thisdisable").prop('required',false);
		 	  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
		 		
		 	}else {
		 		  $("#thisdisable").attr("disabled", false);
		 		  $("#thisdisable").prop('required',true);
		 	}

		 	});
		 	
		 	
			$("#ddlcjp1").change(function() {  
		 		 if ( $("#ddlcjp1").val()=="CJP") {
			 		   $("#thisdisable1").val("").trigger("change"); 
			 		   $("#thisdisable1").attr("disabled", true);
			 		   $("#thisdisable1").prop('required',false);
			 		  $('#thisdisable1DIV .select2-container--default .select2-selection--single').css("border-color","");
				 		
			 		}else {
			 			  $("#thisdisable1").attr("disabled", false);
			 			  $("#thisdisable1").prop('required',true);
			 		}	

		 	});
	 	
		 	
	  
		 	 
		 
		 
		 	$("#recall").click(function(){
		 		var rowCount = $('#table tr').length;
		    	
		    	if (rowCount > 2) {
		 	
		 		 $row=$('#table tr:last');
		 		
		 		$(".right").show();
	    	    $(".left").hide();
	    	    $(".memtype-rightedit").show();
	    		$(".editmemtype .rightFloat").show(); 
	    		$("#adddata").show();
	    	    $("#update").hide();
	    	  
	    	 
	    		  $("#braceShapeH").val($row.find("td:nth-child(4)").text()).trigger("change");
	       	      $("#braceProfile").val($row.find("td:nth-child(5)").text()).trigger("change");
	       	
	              
	        	  if ($row.find("td:nth-child(4)").text()=="W") {
	        		   $("#connectionMethodH2Div").show();
	                  $("#connectionMethodH2").val($row.find("td:nth-child(7)").text()).trigger("change");
	                  $("#connectionMethodH2").trigger("change");
	                  $("#connectionMethodH1Div").hide();
	           		
	           	} else {
	           	 
	           		$("#connectionMethodH1Div").show();
	                $("#connectionMethodH2Div").hide();
	           	    $("#connectionMethodH1").val($row.find("td:nth-child(7)").text()).trigger("change");
	           	  $("#connectionMethodH1").trigger("change");
	           		  
	           	}
	        	  $("#connectionTypeH").val($row.find("td:nth-child(17)").text()).trigger("change");
	        	  
	        	  
	               if($row.find("td:nth-child(17)").text()=='Chevron'){ 
	    	         	$("#noChevron").hide();
	    	            $("#showChevron").show();
	    	            $("#gtobboltdetailsH").hide();
	    	            $(".weldlengthH").show();
	    	        	$("#showChevrongtobconnectionmethodH").val($row.find("td:nth-child(18)").text()).trigger("change");
	    	        	
	             }
	             else {  
	            	 $("#showChevron").hide();
	                 $("#noChevron").show();
	             	 $('#gtobconnectionmethodH').val($row.find("td:nth-child(18)").text()).trigger("change");
	             	
	             }   
	    	      
	           
	              connectionmarkedit=$row.find("td:nth-child(3)").text();
	        	  $("#conmark").val("");
                  $("#GussetPlateThickness").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");
	        	  $("#boltgrade").val($row.find("td:nth-child(8)").text()).trigger("change");
	        	  $("#boltdia").val($row.find("td:nth-child(9)").find('input').val()).trigger("change");
	        	  $("#noofboltrw").val($row.find("td:nth-child(10)").text()).trigger("change");
	        	  $("#noofboltrwClaw").val($row.find("td:nth-child(11)").text()).trigger("change");
	        	  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
	        	  $("#edgedistance").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
	        	  $("#ddlcjp").val($row.find("td:nth-child(14)").text()).trigger("change");
	        	  $("#thisdisable").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");   
	        	  $("#weldlength").val($row.find("td:nth-child(16)").find('.lengH').val()).trigger("change");
	        	  $("#inch").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
	        	  $("#fraction").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change");   
	        	
	        	  $("#gtobconnectionmethodH").val($row.find("td:nth-child(18)").text()).trigger("change");
	        	  $("#GussettoBeamPlateThickness").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");
	        	  $("#clipangletxt").val($row.find("td:nth-child(20)").text()).trigger("change");
	        	  $("#osltxt").val($row.find("td:nth-child(21)").text()).trigger("change");
	        	  
	        	  $("#boltgrade2").val($row.find("td:nth-child(22)").text()).trigger("change");
	         	  $("#boltdia2").val($row.find("td:nth-child(23)").find('input').val()).trigger("change");
	        	  $("#noofboltrw2").val($row.find("td:nth-child(24)").text()).trigger("change");
	        	  $("#boltspc2").val($row.find("td:nth-child(25)").find('input').val()).trigger("change");
	        	  $("#edgedistance2").val($row.find("td:nth-child(26)").find('input').val()).trigger("change");
	        	  $("#ddlcjp1").val($row.find("td:nth-child(27)").text()).trigger("change");
	        	  $("#thisdisable1").val($row.find("td:nth-child(28)").find('input').val()).trigger("change");   
	        	  $("#weldlength2").val($row.find("td:nth-child(29)").find('.lengH').val()).trigger("change");
	        	  $("#inch2").val($row.find("td:nth-child(29)").find('.inchH').val()).trigger("change");   
	        	  $("#fraction2").val($row.find("td:nth-child(29)").find('.fracH').val()).trigger("change"); 
	        	  $("#weldlength3").val($row.find("td:nth-child(30)").find('.lengH').val()).trigger("change");
	        	  $("#inch3").val($row.find("td:nth-child(30)").find('.inchH').val()).trigger("change");   
	        	  $("#fraction3").val($row.find("td:nth-child(30)").find('.fracH').val()).trigger("change"); 
	        	  
		 		
		 		
		    	}
		 		
		 	});
		
		 	
		 
		 	 
		 	    
		 	    //HBrace - Gusset to Beam Connection Method
		 	    $("#showChevron").hide();
		 	 
		 	    
		 	   

		 	        $("#gtobconnectionmethodH,#showChevrongtobconnectionmethodH").change( function(){
		 	        	
		 	        	$('#clipanglesz').val('').trigger("change"); 
		 	        	$('#clipangleszDIV .select2-container--default .select2-selection--single').css("border-color","");
                        $("#osltxt,#clipangletxt,#weldlength3,#inch3,#fraction3").val("").trigger('change');
		 	        	$('#noChevron,#showChevron').hide;
		 	       	    $('#noselect,.weldlengthH1').hide;
		 	       	   if(!$('#connectionTypeH').val()){
		 	        		$('#noselect').show();
		 	        		$("#showChevron").hide();
		 	        		$('#noChevron').hide;
		 	        		$("#gtobboltdetailsH,#btoeWeldDetails").hide();
		 	        		$("#clipangletxtDiv,#osltxtDiv").hide();
		 	        		
		 	        	}
		 	    
		 	        	else if(($('#connectionTypeH').val()=='Single Clip Angle' && $('#gtobconnectionmethodH').val()=='Field Bolted')||($('#connectionTypeH').val()=='Single Clip Angle' && $('#gtobconnectionmethodH').val()=='Shop Bolted')){ 
		 	        		$("#clipangletxtDiv,#osltxtDiv").show();
		 	                 $("#gtobboltdetailsH").show();
		 	                 $("#btoeWeldDetails").show();
		 	                 getWelddetails2();
		 	                 getboltdetails2();
		 	                $('#clipangletxt').val(ClipAngleSizeGp).trigger("change"); 
		 	               $('#clipangletxtDiv .select2-container--default .select2-selection--single').css("border-color","");

		 	                 
		 	            }
		 	            else if(($('#connectionTypeH').val()=='Single Clip Angle' && $('#gtobconnectionmethodH').val()=='Field Welded')||($('#connectionTypeH').val()=='Single Clip Angle' && $('#gtobconnectionmethodH').val()=='Shop Welded')){ 
		 	            	$("#clipangletxtDiv,#osltxtDiv").show();
		 	                 $("#gtobboltdetailsH").hide();
		 	                 $("#btoeWeldDetails").show();
		 	                  getWelddetails2();
		 	                 $(".gtobboltdetailsH").val("").trigger('change');
		 	                $("#inch2,#fraction2,#inch3,#fraction3").val("0").trigger('change');
		 	               $('#clipangletxt').val(ClipAngleSizeGp).trigger("change"); 
		 	              $('#clipangletxtDiv .select2-container--default .select2-selection--single').css("border-color","");

		 	                 
		 	            }
		 	             else if(($('#connectionTypeH').val()=='Double Clip Angle' && $('#gtobconnectionmethodH').val()=='Field Bolted')||($('#connectionTypeH').val()=='Double Clip Angle' && $('#gtobconnectionmethodH').val()=='Shop Bolted')){ 
		 	            	$("#clipangletxtDiv,#osltxtDiv").show();
		 	                 $("#gtobboltdetailsH").show();
		 	                 $("#btoeWeldDetails").show();
		 	                 getWelddetails2();
		 	                 getboltdetails2(); 
		 	                $('#clipangletxt').val(ClipAngleSizeGp).trigger("change"); 
		 	               $('#clipangletxtDiv .select2-container--default .select2-selection--single').css("border-color","");

		 	                 
		 	            }
		 	             else if(($('#connectionTypeH').val()=='Double Clip Angle' && $('#gtobconnectionmethodH').val()=='Shop Welded')||($('#connectionTypeH').val()=='Double Clip Angle' && $('#gtobconnectionmethodH').val()=='Field Welded')){ 
		 	              $("#clipangletxtDiv,#osltxtDiv").show();
		 	              $("#gtobboltdetailsH").hide();
		 	              $("#btoeWeldDetails").show();
		 	              getWelddetails2();
		 	              $(".gtobboltdetailsH").val("").trigger('change');
		 	             $("#inch2,#fraction2,#inch3,#fraction3").val("0").trigger('change');
		 	              $('#clipangletxt').val(ClipAngleSizeGp).trigger("change"); 
		 	              $('#clipangletxtDiv .select2-container--default .select2-selection--single').css("border-color","");

		 	                 
		 	            } 
		 	            
		 	            else if(($('#connectionTypeH').val()=='Directly Connected' && $('#gtobconnectionmethodH').val()=='Field Bolted')||($('#connectionTypeH').val()=='Directly Connected' && $('#gtobconnectionmethodH').val()=='Shop Bolted')){ 
		 	            	$("#clipangletxtDiv,#osltxtDiv").hide();
		 	                 $("#gtobboltdetailsH").show();
		 	                 getboltdetails2();
		 	                 $("#btoeWeldDetails").hide();
		 	                 $(".btoeWeldDetails").val("").trigger('change');
		 	                 
		 	            }
		 	          
		 	            else if(($('#connectionTypeH').val()=='Directly Connected' && $('#gtobconnectionmethodH').val()=='Field Welded')||($('#connectionTypeH').val()=='Directly Connected' && $('#gtobconnectionmethodH').val()=='Shop Welded')){  
		 	            	$("#clipangletxtDiv,#osltxtDiv").hide();
		 	                 $("#gtobboltdetailsH").hide();
		 	                 $("#btoeWeldDetails").show();
		 	                 getWelddetails2();
		 	                 $(".gtobboltdetailsH").val("").trigger('change');
		 	                $("#inch2,#fraction2,#inch3,#fraction3").val("0").trigger('change');
		 	            }
		 	           
		 	          
		 	            else if(($('#connectionTypeH').val()=='Shear Plate' && $('#gtobconnectionmethodH').val()=='Shop Welded')||($('#connectionTypeH').val()=='Shear Plate' && $('#gtobconnectionmethodH').val()=='Field Welded')){  
		 	            	$("#clipangletxtDiv,#osltxtDiv").hide();
		 	            	getWelddetails2();
		 	                $("#gtobboltdetailsH").hide();
		 	                $("#btoeWeldDetails,#GussettoBeamPlateThicknessDIV,.weldlengthH1").show();
		 	                $(".gtobboltdetailsH").val("").trigger('change');
		 	               $("#inch2,#fraction2,#inch3,#fraction3").val("0").trigger('change');
		 	           } 
		 	            else if(($('#connectionTypeH').val()=='Shear Plate' && $('#gtobconnectionmethodH').val()=='Field Bolted')||($('#connectionTypeH').val()=='Shear Plate' && $('#gtobconnectionmethodH').val()=='Shop Bolted')){ 
		 	            	$("#clipangletxtDiv,#osltxtDiv").hide();
		 	                 $("#gtobboltdetailsH,#GussettoBeamPlateThicknessDIV").show();
		 	                 $("#btoeWeldDetails").show();
		 	                 getWelddetails2();
		 	                 getboltdetails2();
		 	                 
		 	            }
		 	           else if($('#connectionTypeH').val()=='Chevron' &&  $('#showChevrongtobconnectionmethodH').val()=='Shop Welded' ){
		 	        	  $("#clipangletxtDiv,#osltxtDiv").hide();
		 	        	   $("#gtobboltdetailsH").hide();
		 	              $("#btoeWeldDetails").show();
		 	              getWelddetails2();
		 	              $(".gtobboltdetailsH").val("").trigger('change');
		 	             $("#inch2,#fraction2,#inch3,#fraction3").val("0").trigger('change');
		 				}
		 	            else if($('#connectionTypeH').val()=='Chevron' && $('#showChevrongtobconnectionmethodH').val()=='Field Welded'){  
		 	            	$("#clipangletxtDiv,#osltxtDiv").hide();
		 	            	$("#gtobboltdetailsH").hide();
		 	                $("#btoeWeldDetails").show();
		 	                getWelddetails2();
		 	                $(".gtobboltdetailsH").val("").trigger('change');
		 	               $("#inch2,#fraction2,#inch3,#fraction3").val("0").trigger('change');
		 	  			}
		 	            else{
		 	            	$("#clipangletxtDiv,#osltxtDiv").hide();
		 	            	 $("#gtobboltdetailsH,#btoeWeldDetails").hide();
		 	            	 $(".gtobboltdetailsH").val("").trigger('change');
		 	            	 $(".btoeWeldDetails").val("").trigger('change');
		 	            }  
		 	       	   
		 	       	   
		 	       	    $('#clipangletxtDiv .select2-container--default .select2-selection--single').css("border-color","");
		    		    $('#boltgrade2DIV .select2-container--default .select2-selection--single').css("border-color","");
		    			$('#boltdia2DIV .select2-container--default .select2-selection--single').css("border-color","");
		    			$('#noofboltrw2DIV .select2-container--default .select2-selection--single').css("border-color","");
		    			$('#boltspc2DIV .select2-container--default .select2-selection--single').css("border-color","");
		    			$('#edgedistance2DIV .select2-container--default .select2-selection--single').css("border-color","");
		    			$('#thisdisable1DIV .select2-container--default .select2-selection--single').css("border-color","");
		    			
		    		 
		 	        });
		 	        
		 	       $("#clipangletxtDiv,#osltxtDiv").hide();
		 	       $("#connectionTypeH").change( function(){
		 	    	  
		 	    	 $("#GussettoBeamPlateThicknessDIV").hide();
		 	 $("#gtobconnectionmethodH,#showChevrongtobconnectionmethodH").val("").trigger('change');
		 	    	 
		 	    if($('#connectionTypeH').val()=='Chevron'){ 
		 	                 $("#noChevron,#noselect").hide();
		 	                 $("#showChevron").show();
		 	                 $("#gtobboltdetailsH").hide();
		 	                 $(".gtobboltdetailsH").val("").trigger('change');
		 	                 $(".weldlengthH").show();
		 	                
		 	            }
		 	            else if(!$('#connectionTypeH').val()){
		 	            	$("#clipangletxtDiv,#osltxtDiv").hide();
		 	        		$('#noselect').show();
		 	        		$("#showChevron,#noChevron").hide();
		 	        		$("#gtobboltdetailsH,#btoeWeldDetails").hide();
		 	        		$('#noChevron').hide;
		 	        	}
		 	            
		 	            else {  
		 	                $("#showChevron").hide();
		 	                $("#noChevron").show();
		 	                $('#noselect').hide();
		 	          

		 	            }                 
		 	        });
		 	        
		 	        
		 	        
		 	        
		 	   
		 	       if (Page && Page.length !== 0) {
		 		   	    $("#add-new-value").hide();
		 		        $(".memtype-table").show();
		 		   	  
		 		   	  
		 		   	  $.each(Page, function(key,value) {
		 		   		   var BtoGConJS =value[BracetoGussetConnection];
		 		   		   var Bprofile=BtoGConJS[BraceProfileInOuter];	
		 		   		  var gussetThicknessJs=BtoGConJS[GussetThicknessInOuter];	
		 		   		 
		 		   		   var weldDetailsBracetoG=BtoGConJS[WeldLengthDetails];	
		 		   		   var weldlengthBracetoG=feetInchFormater(weldDetailsBracetoG[Length],weldDetailsBracetoG[Length_in],weldDetailsBracetoG[Length_fr_fra]);
		 		   	         
		 		   		  var GtoBConJS =value[GussettoBeamConnection];
		 		   		   var GtoBBprofile=BtoGConJS[BraceProfileInOuter];	
		 		   		  
		 		   		   var clipAngleProfile=GtoBConJS[ClipAngleInOuter];
		 		   		   var GtoBweldDetailsBracetoG=GtoBConJS[WeldLengthDetails];	
		 		   		   var GtoBweldDetailsBracetoG2=GtoBConJS['WeldWidthDetails'];	
		 		   		   var GtoBweldlengthBracetoG=feetInchFormater(GtoBweldDetailsBracetoG[GtoBLength],GtoBweldDetailsBracetoG[Length_in],GtoBweldDetailsBracetoG[Length_fr_fra]);
		 		   		   var GtoBweldlengthBracetoG2=feetInchFormater(GtoBweldDetailsBracetoG2[GtoBLength],GtoBweldDetailsBracetoG2[Length_in],GtoBweldDetailsBracetoG2[Length_fr_fra]);
		 		   	      
		 		   		   if (!weldDetailsBracetoG[Length]) {
		 		   				weldlengthBracetoG="";

		 		   				} 
		 		   			 if (!GtoBweldDetailsBracetoG[GtoBLength]) {
		 		   				GtoBweldlengthBracetoG="";

		 			   				} 
		 		   			 var osl="";
		 		   			 
		 		   			 try {
		 		   				osl=GtoBConJS["OSL"] ;
								
							} catch (e) {
								osl="";
								// TODO: handle exception
							}
							var gussetThicknessJsGTB=GtoBConJS["ShearPlateThickness"] ;
							
							$("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+BtoGConJS[BraceShape]+'</td><td>'+Bprofile[BraceProfileKeyN]+'</td><td>'+getformateforrepresentation(gussetThicknessJs[PlateThickness_fra])+'<input type="hidden" value='+gussetThicknessJs[PlateThickness]+'></td><td>'+BtoGConJS[BracetoGussetConnectionMethod]+'</td><td>'+BtoGConJS[BoltGrade]+'</td><td>'+getformateforrepresentation(BtoGConJS[BoltDia_fra])+'<input type="hidden" value='+BtoGConJS[BoltDia]+'></td><td>'+BtoGConJS[BoltRows]+'</td><td></td><td>'+getformateforrepresentation(BtoGConJS[BoltSpacing_fra])+'<input type="hidden" value='+BtoGConJS[BoltSpacing]+'></td><td>'+getformateforrepresentation(BtoGConJS[EdgeDistance_fra])+'<input type="hidden" value='+BtoGConJS[EdgeDistance]+'></td><td>'+BtoGConJS[WeldType]+'</td><td>'+getformateforrepresentation(BtoGConJS[WeldSize_fra])+'<input type="hidden" value='+BtoGConJS[WeldSize]+'></td><td>'+weldlengthBracetoG+'<input type="hidden" class="inchH"  value='+weldDetailsBracetoG[Length_in]+'><input type="hidden" class="lengH"  value='+weldDetailsBracetoG[Length]+'><input type="hidden" class="fracH"  value='+weldDetailsBracetoG[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+weldDetailsBracetoG[Length_fr_fra]+ '" /></td><td>'+GtoBConJS[HBGussetToBeam_ConType]+'</td><td>'+GtoBConJS[GussettoBeamConnectionMethod]+'</td><td>'+getformateforrepresentation(gussetThicknessJsGTB[PlateThickness_fra])+'<input type="hidden" value='+gussetThicknessJsGTB[PlateThickness]+'></td><td>'+clipAngleProfile["Profile"]+'</td><td>'+osl+'</td><td>'+GtoBConJS[BoltGrade]+'</td><td>'+getformateforrepresentation(GtoBConJS[BoltDia_fra])+'<input type="hidden" value='+GtoBConJS[BoltDia]+'></td><td>'+GtoBConJS[BoltRows]+'</td><td>'+getformateforrepresentation(GtoBConJS[BoltSpacing_fra])+'<input type="hidden" value='+GtoBConJS[BoltSpacing]+'></td><td>'+getformateforrepresentation(GtoBConJS[EdgeDistance_fra])+'<input type="hidden" value='+GtoBConJS[EdgeDistance]+'></td><td>'+GtoBConJS[WeldType]+'</td><td>'+getformateforrepresentation(GtoBConJS[WeldSize_fra])+'<input type="hidden" value='+GtoBConJS[WeldSize]+'></td><td>'+GtoBweldlengthBracetoG+'<input type="hidden" class="inchH"  value='+GtoBweldDetailsBracetoG[Length_in]+'><input type="hidden" class="lengH"  value='+GtoBweldDetailsBracetoG[GtoBLength]+'><input type="hidden" class="fracH"  value='+GtoBweldDetailsBracetoG[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+GtoBweldDetailsBracetoG[Length_fr_fra]+ '" /></td> <td>'+GtoBweldlengthBracetoG2+'<input type="hidden" class="inchH"  value='+GtoBweldDetailsBracetoG2[Length_in]+'><input type="hidden" class="lengH"  value='+GtoBweldDetailsBracetoG2[GtoBLength]+'><input type="hidden" class="fracH"  value='+GtoBweldDetailsBracetoG2[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+GtoBweldDetailsBracetoG2[Length_fr_fra]+ '" /></td> </tr>');

		 	 			
		 		   	  
		 		   	  });
		 		   }
		 	       
		 	       
		 	       
		 	       //Brace to guesst main validation
		 	       
		 	     $("#braceShapeH").change( function(){
		 	    	 $("#connectionMethodH1,#connectionMethodH2").val("").trigger('change');
		 	    	 
		 		  if ($("#braceShapeH").val()=="W") {
		 			  $("#boltdetailsH,#welddetailsH,#clawAngleH").hide();
		 			  $("#connectionMethodH2Div").show();
		 		      $("#connectionMethodH1Div,#connectionMethodselect1").hide();
		 		      resetDrodown("braceProfile");
			 		  var dropdownList = getProfiles($("#braceShapeH").val());
			 		  fillProfileDropdownList("braceProfile", dropdownList)
		 			
		 		} 
		 		  
		 		  else if(!$("#braceShapeH").val()) {
		 			 $("#connectionMethodselect1").show();
		 			 resetDrodown("braceProfile");
		 		     $("#connectionMethodH2Div,#connectionMethodH1Div").hide();
		 		     $("#boltdetailsH,#welddetailsH,#clawAngleH").hide();
		 		     $("#boltdetailsH,#welddetailsH,#clawAngleH").hide();
		 		
		 		}
		 		   else {
		 			 $("#connectionMethodH1Div").show();
		 			 $("#connectionMethodH2Div,#connectionMethodselect1").hide();
		 			 $("#boltdetailsH,#welddetailsH,#clawAngleH").hide();
		 			 resetDrodown("braceProfile");
		 		     var dropdownList = getProfiles($("#braceShapeH").val());
		 		      fillProfileDropdownList("braceProfile", dropdownList)
		 		}
		 		 
		 		    });
		 	      
		 	      $("#connectionMethodH2").change( function(){
		 	      
		 	            if($('#connectionMethodH2').val()=='Field Bolted'||$('#connectionMethodH2').val()=='Shop Bolted'){ 
		 	            	 $("#boltdetailsH").show();
		 	                 $("#clawAngleH").show();
		 	                 $("#welddetailsH").hide();
		 	                 getboltdetails();
		 	                 $(".welddetailsH").val("").trigger('change');
		 	              }else{
		 	            	 $("#boltdetailsH,#clawAngleH").hide();
		 	                 $(".welddetailsH").val("").trigger('change');
		 	                 $(".boltdetailsH").val("").trigger('change');
		                 }
		 	          
		 	          
		 	        });
		 	  	    	
		 	      $("#connectionMethodH1").change( function(){
		 	    	   
		 	            if($('#connectionMethodH1').val()=='Field Bolted'||$('#connectionMethodH1').val()=='Shop Bolted'){ 
		 	            	
		 	                 $("#boltdetailsH").show();
		 	                 getboltdetails();
		 	                 $("#welddetailsH").hide();
		 	                 $(".welddetailsH").val("").trigger('change');
		 	                 
		 	            }
		 	            else if($('#connectionMethodH1').val()=='Field Welded' || $('#connectionMethodH1').val()=='Shop Welded'){  
		 	            	$(".boltdetailsH").val("").trigger('change');
		 	            	$("#welddetailsH").show();
		 	            	getWelddetails();
		 	            	 $("#inch,#fraction").val(0).trigger("change");
		 	                $("#boltdetailsH").hide();
		 	            }else{
		 	                $("#welddetailsH,#boltdetailsH").hide();
		 	                $(".welddetailsH").val("").trigger('change');
			 	            $(".boltdetailsH").val("").trigger('change');
			 	           
		 	            } 
		 	            $("#clawAngleH").hide();
		 	            $("#clawAngleH").val('').trigger("change");  
		 	            
		 	                $('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
		 	    			$('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
		 	    			$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
		 	    			$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
		 	    			$('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
		 	    			$('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","");
		 	    			$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
		 	    			$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
		 	    			
		 	    		
		 	            
		 	           
		 	        });
		 	      
		 	      
		 	     $("#btnDeleteRows").click(function(){
			 	    	var rowCount = $('#table tr').length;
			 			
			 			
			 			if (rowCount==2) {
			 				 $("#add-new-value").show();
			 			     $(".memtype-table").hide();
			 			}
			 	     });	
		 	     
		 	     


		 	    var listvalues=[];

		 	    function resize() {
		 	        var screenheight = window.innerHeight;
		 	        var offset = document.getElementById('header').offsetHeight;
		 	        total = (Number(screenheight) - Number(offset) );
		 	        document.getElementById("add-new-value").style.height = (total + "px" );
		 	    }
		 	    resize();
		 	    window.onresize = function() {
		 	        resize();
		 	    };

		 	    //length 
		 	    function validateLength(feet,inch,fraction,length)
		 	    {
		 	    	var valid = true;
		 	    	if(feet == "0" && inch == "0" && fraction == "0")
		 	    	{
		 	    		valid = false;
		 	        	$('#alert_model_placeholder').append
		 	            ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i> ' + length + ' can not be zero' + 
		 	                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
		 	                    '</div>')         
		 	             	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
		 	                 	$("#alertdiv").remove();

		 	             }, 10000);
		 	    		}
		 	    	
		 	    	return valid;
		 	    }



		 	    $("#edit").click(function(){
		 	    	var i=0;
		 	   

		 	    	$(".cci-select").each(function(){
		 	        	if($(this).prop('checked')==true){
		 	    			i=i+1;
		 	    		 $row = $(this).closest("tr");       // Finds the closest row <tr> 
		 	    		 }
		 	    		
		 	    	});
		 	    	
		 	    	if (i==1) {
		 	    	 
		 	    	}else{
		 	    		showalertInformation('Please Select 1 Row For Edit');
		 	    	}
		 	    	
		 	    });

		 	    var checkboxlength="";

		 	    //delete
		 	    $("#delete").click(function(){	
		 	    	checkboxlength=$('[name="selectAll"]:checked').length;
		 	    	$(".cci-select").each(function(index, Element){
		 	    	
		 	    		if($(this).prop('checked')==true){
		 	    			$("#deleteModal").show();
		 	    		}
		 	    	
		 	    	});
		 	    	if (checkboxlength==0) {
		 	    		showalertInformation('Select Rows for Delete');
		 	    	}
		 	    	
		 	    });



		 	    $("#btnDeleteRows").click(function(){	
		 	    	$(".cci-select").each(function(index, Element){
		 	    		if($(this).prop('checked')==true){
		 	    			var index = listvalues.indexOf($(this).closest("tr").find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase());
		 	    			
		 	    			if (index > -1) {
		 	    				
		 	    				listvalues.splice(index, 1);
		 	    			}
		 	    			   
		 	    		$(this).closest("tr").remove();
		 	    	
		 	    		
		 	    		}
		 	    		var rowCount = $('#table tr').length;
		 	    		if (rowCount==2) {
		 	    			 $("#add-new-value").show();
		 	    		     $(".memtype-table").hide();
		 	    		}
		 	    	
		 	    	});
		 	    	$("#deleteModal").hide();	
		 	    	addorupdate();
	    		
	    	    	
		 	    });

		 	    $("#btncloseRows").click(function(){	
		 	    	 $("#deleteModal").hide();
		 	    	
		 	    });


		 		$(".anv-btn,.add").on('click', function(){
		 			
						
		 				$(".right").show();
		 		        $(".left").hide();
		 		        $("#adddata").show();
		 		        $("#update").hide();
		 		        $(".memtype-rightedit").show();
		 		        $(".editmemtype .rightFloat").show();
		 		   
			 	
			 		  $(".form-control,.select2").val("").trigger("change"); 
			 		
			 		  $("#GussetPlateThickness").val(MinPTFromGP).trigger("change"); 
			 		  //brace to gusset
			 		 $("#boltdetailsH,#welddetailsH,#clawAngleH,#connectionMethodH1Div,#GussettoBeamPlateThicknessDIV").hide();
			 		 //Gusset to Beam 
			 		  $("#gtobboltdetailsH,#btoeWeldDetails").hide();
			 		 listvalues = [];
			 		 $(".contxt").each(function(){			
			 			listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
			 			
			 		});
			 		  $("#connectionMethodselect1").show();
			 		 $('#noChevron').hide;
			 		 $('#formContractHorizontalBrace').removeClass('submitted');
			 		 $('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
			 		 $('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
			 		 

			 	});
		 		
		 		

	    	 	
	    	 	  function addconnectionmark() {
	    				
	    			  connectionmarkvalues=[];
	    			  connectionjson=connectionmarkToJSON('table') ;
	    			  
	    			  connectionmarkvalues.push($('#conmark').val());
	    			 
	    				$.ajax({
	    		 		   type : 'POST',
	    		 	          url: "/bimspring/saveConnectionMarks",	          
	    		 	          data : {connectiongrouptype:"HorizontalBrace",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
	    		 	          success : function(data, success) {
	    		 	        	var status=data;
	    		 	        	
	    		 	        	  if (status=="false") {
	    		 	        		
	    			 	       		 $('#alert_model_placeholder').append
	    			 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
	    			 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	    			 		                '</div>')         
	    			 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
	    			 		             	$("#alertdiv").remove();
	    			
	    			 		         }, 2500);
	    			 	      
	    			 	       		
	    						}
	    		 	        	  else{
	    		 	        		 listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	    		 	        		
	    		 	   			 $(".add-new-value").hide();
	    		 	   	         $(".memtype-table").show();
	    		 	   	         $(".left").show();
	    		 	   	         $(".editmemtype .rightFloat").hide();
	    		 	   	         var boltdia= $("#boltdia option:selected").text()+ '"';
	    		 	   	         var boltdia2= $("#boltdia2 option:selected").text()+ '"';
	    		 	   	         var GussetPlateThickness=  $("#GussetPlateThickness option:selected").text()+ '"';
	    		 	   	         var weldsize= $("#thisdisable option:selected").text()+ '"';
	    		 	   	         var weldsize2= $("#thisdisable1 option:selected").text()+ '"';
	    		 	   	         var edgedistance=$("#edgedistance option:selected").text()+ '"';
	    		 	   	         var boltspc=$("#boltspc option:selected").text()+ '"';
	    		 	   	         var boltspc2=$("#boltspc2 option:selected").text()+ '"';
	    		 	   	         var weldlength=feetInchFormater($('#weldlength').val(),$('#inch').val(),$("#fraction option:selected").text());
	    		 	   	         var noofboltrwClaw="";
	    		 	   	         var edgedistance2=$("#edgedistance2 option:selected").text()+ '"';        
	    		 	   	       
	    		 	   	         var weldlength2=feetInchFormater($('#weldlength2').val(),$('#inch2').val(),$("#fraction2 option:selected").text());
	    		 	   	       
	    		 	   	         if (!$("#weldlength2").val()) {
	    		 	   	        	 weldlength2="";
	    		 	               }
	    		 	   	     var weldlength3=feetInchFormater($('#weldlength3').val(),$('#inch3').val(),$("#fraction3 option:selected").text());
	    		 	         	 if (!$("#weldlength3").val()) {
		 	   	                 	 weldlength3="";
		 	                         }
	    		 	   	         
	    		 	   	         if (!$("#edgedistance2").val()) {
	    		 	   	        	 edgedistance2="";
	    		 	   			}
	    		 	   	         
	    		 	   	         if (!$("#boltspc2").val()) {
	    		 	   	        	 boltspc2="";
	    		 	   			}
	    		 	   	         if (!$("#boltdia2").val()) {
	    		 	   	        	 boltdia2="";
	    		 	   			}
	    		 	   	         if (!$("#boltdia").val()) {
	    		 	   	        	 boltdia="";
	    		 	   			}
	    		 	   	         if (!$("#GussetPlateThickness").val()) {
	    		 	   	        	 GussetPlateThickness="";
	    		 	   			}
	    		 	   	         if (!$("#thisdisable").val()) {
	    		 	   	        	 weldsize="";
	    		 	   			}
	    		 	   	         if (!$("#thisdisable1").val()) {
	    		 	   	        	 weldsize2="";
	    		 	   			}
	    		 	   	         
	    		 	   	         if (!$("#boltspc").val()) {
	    		 	   	        	 boltspc="";
	    		 	   			}
	    		 	   	         if (!$("#edgedistance").val()) {
	    		 	   	        	 edgedistance="";
	    		 	   			}
	    		 	   	         if (!$("#weldlength").val()) {
	    		 	   	        	 weldlength="";
	    		 	   			}
	    		 	   	         
	    		 	   	         if (!$("#noofboltrwClaw").val()) {
	    		 	   	        	 noofboltrwClaw="";

	    		 	   			}
	    		 	   	         var method="";
	    		 	   	         
	    		 	   	         if ($("#braceShapeH").val()=="W") {
	    		 	   	    		 
	    		 	   	        	 method=$("#connectionMethodH2").val();
	    		 	   	        	 noofboltrwClaw=$("#noofboltrwClaw option:selected").text();
	    		 	   	   		
	    		 	   	   	} else {
	    		 	   	   		method=$('#connectionMethodH1').val();
	    		 	   	   	}
	    		 	   	         var method2="";
	    		 	   	         
	    		 	   	         if($('#connectionTypeH').val()=='Chevron'){ 
	    		 	   	        	 method2=$("#showChevrongtobconnectionmethodH").val();
	    		 	   	        	
	    		 	               }
	    		 	               else {  
	    		 	               	  method2=$('#gtobconnectionmethodH').val();
	    		 	               	
	    		 	               }   
	    		 	   	     var GussettoBeamPlateThickness=$("#GussettoBeamPlateThickness option:selected").text()+ '"';        
	    		 	   	           if (!$("#GussettoBeamPlateThickness").val()) {
	    		 	   	        	GussettoBeamPlateThickness="";
	    		 	   	        	}
	    		 	   	 

	    		 	      $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#braceShapeH').val()+'</td><td>'+$('#braceProfile').val()+'</td><td>'+GussetPlateThickness+'<input type="hidden" value='+$('#GussetPlateThickness').val()+'></td><td>'+method+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td></td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+weldlength+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#weldlength').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'><input type="hidden" class="fracHFrac"  value="'+$('#fraction option:selected').text()+'" /></td><td>'+$('#connectionTypeH').val()+'</td><td>'+method2+'</td><td>'+GussettoBeamPlateThickness+'<input type="hidden" value='+$('#GussettoBeamPlateThickness').val()+'></td><td>'+$('#clipangletxt').val()+'</td><td>'+$('#osltxt').val()+'</td><td>'+$('#boltgrade2').val()+'</td><td>'+boltdia2+'<input type="hidden" value='+$('#boltdia2').val()+'></td><td>'+$('#noofboltrw2').val()+'</td><td>'+boltspc2+'<input type="hidden" value='+$('#boltspc2').val()+'></td><td>'+edgedistance2+'<input type="hidden" value='+$('#edgedistance2').val()+'></td><td>'+$('#ddlcjp1').val()+'</td><td>'+weldsize2+'<input type="hidden" value='+$('#thisdisable1').val()+'></td><td>'+weldlength2+'<input type="hidden" class="inchH"  value='+$('#inch2').val()+'><input type="hidden" class="lengH"  value='+$('#weldlength2').val()+'><input type="hidden" class="fracH"  value='+$('#fraction2').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction2 option:selected').text()+ '"/></td><td>'+weldlength3+'<input type="hidden" class="inchH"  value='+$('#inch3').val()+'><input type="hidden" class="lengH"  value='+$('#weldlength3').val()+'><input type="hidden" class="fracH"  value='+$('#fraction3').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction3 option:selected').text()+ '"  /></td></tr>');
	    		 	   	addorupdate();
	    		 	   	showalertSuccess('Added successfully');
	    		 	        		  
	    		 	        	  }
	    		 	        	 },error: function (error) {
								if(error.status == 401){
									window.location.href = 'logout';
								}else{
									alert('Sorry! Your session has expired Please select Project again');
									window.location.href='dashboard';
								}
	    			          }
	    		 	          }); 
	    				
	    			
	    		}   
	    	   
	    	   
	    	 	 
	   		   function updateconnectionmark() {
	   			  connectionmarkvalues=[];
	   			 var deleteconmarkval=[];
	   			  connectionmarkvalues.push($('#conmark').val());
	   			  deleteconmarkval.push(connectionmarkedit);
	   			  
	   				$.ajax({
	   					 type : 'POST',
	   		 	          url: "/bimspring/saveConnectionMarks",	          
	   		 	          data : {connectiongrouptype:"HorizontalBrace",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
	   		 	          success : function(data, success) {
	   		 	        	var status=data;
	   		 	        	
	   		 	        	  if (status=="false") {
	   				 	        		
	   					 	       		 $('#alert_model_placeholder').append
	   					 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
	   					 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	   					 		                '</div>')         
	   					 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
	   					 		             	$("#alertdiv").remove();
	   					
	   					 		         }, 2500);
	   					 	      
	   					 	       		
	   								}else{
	   				        	  $.ajax({
	   								   type : 'POST',
	   							          url: "/bimspring/deleteconnectionmark",	          
	   							           data : {connectiongrouptype:"HorizontalBrace",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
	   								       
	   							          success : function(data, success) {
	   							        	  
	   							        	  finalupdate();
	   							         },error: function (error) {
											if(error.status == 401){
												window.location.href = 'logout';
											}else{
											
	   							        	 $('#alert_model_placeholder').append
	   							 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
	   							 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	   							 		                '</div>')         
	   							 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
	   							 		             	$("#alertdiv").remove();
	   							
													 }, 2500);
													}
	   							          }
	   							          }); 
	   				        	  
	   								}
	   				         },error: function (error) {
								if(error.status == 401){
									window.location.href = 'logout';
								}else{
									alert('Sorry! Your session has expired Please select Project again');
									window.location.href='dashboard';
								}
	   				          }
	   				          }); 
	   				 
	   				}
	    	   
	    	      	    	 	
   	 	
$("#btnDeleteRows").click(function(){	
connectionmarkvalues=[];
connectionmarkToJSON('table') ;
deleteconnectionmarks("HorizontalBrace")

	    	   	
	    	   	
});    	   	 	 	
	    	 	
	    	 	
	    	 	
	    	 	
function finalupdate(){
	 $row.find("td:nth-child(33)").remove();
	 $row.find("td:nth-child(32)").remove();
	 $row.find("td:nth-child(31)").remove();
	
						 $row.find("td:nth-child(30)").remove();
					     $row.find("td:nth-child(29)").remove();
					     $row.find("td:nth-child(28)").remove();
					     $row.find("td:nth-child(27)").remove();
					     $row.find("td:nth-child(26)").remove();
	        		     $row.find("td:nth-child(25)").remove();
	        		     $row.find("td:nth-child(24)").remove();
	        		     $row.find("td:nth-child(23)").remove();
	        		     $row.find("td:nth-child(22)").remove();
	        		     $row.find("td:nth-child(21)").remove();
	        		      $row.find("td:nth-child(20)").remove();
	        		      $row.find("td:nth-child(19)").remove();
	        		      $row.find("td:nth-child(18)").remove();
	        		      $row.find("td:nth-child(17)").remove();
	        		      $row.find("td:nth-child(16)").remove();
	        			  $row.find("td:nth-child(15)").remove();
	        	    	  $row.find("td:nth-child(14)").remove();
	        	    	  $row.find("td:nth-child(13)").remove();
	        	    	  $row.find("td:nth-child(12)").remove();
	        	    	  $row.find("td:nth-child(11)").remove();
	        	    	  $row.find("td:nth-child(10)").remove();
	        	    	  $row.find("td:nth-child(9)").remove();
	        	    	  $row.find("td:nth-child(8)").remove();
	        	    	  $row.find("td:nth-child(7)").remove();
	        	    	  $row.find("td:nth-child(6)").remove();
	        	    	  $row.find("td:nth-child(5)").remove();
	        	    	  $row.find("td:nth-child(4)").remove();
	        	    	  $row.find("td:nth-child(3)").remove();
	        	    	  $row.find("td:nth-child(2)").remove();
	        	    	  $row.find("td:nth-child(1)").remove();
	        				
	        	    		
	        	    			listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	        	    		
	        	    			 $(".add-new-value").hide();
	        	    	         $(".memtype-table").show();
	        	    	         $(".left").show();
	        	    	         $(".editmemtype .rightFloat").hide();
	        	    	         var boltdia= $("#boltdia option:selected").text()+ '"';
	    		 	   	         var boltdia2= $("#boltdia2 option:selected").text()+ '"';
	    		 	   	         var GussetPlateThickness=  $("#GussetPlateThickness option:selected").text()+ '"';
	    		 	   	         var weldsize= $("#thisdisable option:selected").text()+ '"';
	    		 	   	         var weldsize2= $("#thisdisable1 option:selected").text()+ '"';
	    		 	   	         var edgedistance=$("#edgedistance option:selected").text()+ '"';
	    		 	   	         var boltspc=$("#boltspc option:selected").text()+ '"';
	    		 	   	         var boltspc2=$("#boltspc2 option:selected").text()+ '"';
	    		 	   	         var weldlength=feetInchFormater($('#weldlength').val(),$('#inch').val(),$("#fraction option:selected").text());
	    		 	   	         var noofboltrwClaw="";
	    		 	   	         var edgedistance2=$("#edgedistance2 option:selected").text()+ '"';        
	    		 	   	       
	    		 	   	         var weldlength2=feetInchFormater($('#weldlength2').val(),$('#inch2').val(),$("#fraction2 option:selected").text());
	    		 	   	       
	    		 	   	         if (!$("#weldlength2").val()) {
	    		 	   	        	 weldlength2="";
	    		 	               }
	    		 	   	     var weldlength3=feetInchFormater($('#weldlength3').val(),$('#inch3').val(),$("#fraction3 option:selected").text());
	    		 	         	 if (!$("#weldlength3").val()) {
		 	   	                 	 weldlength3="";
		 	                         }
	    		 	   	         
	    		 	   	         if (!$("#edgedistance2").val()) {
	    		 	   	        	 edgedistance2="";
	    		 	   			}
	    		 	   	         
	    		 	   	         if (!$("#boltspc2").val()) {
	    		 	   	        	 boltspc2="";
	    		 	   			}
	    		 	   	         if (!$("#boltdia2").val()) {
	    		 	   	        	 boltdia2="";
	    		 	   			}
	    		 	   	         if (!$("#boltdia").val()) {
	    		 	   	        	 boltdia="";
	    		 	   			}
	    		 	   	         if (!$("#GussetPlateThickness").val()) {
	    		 	   	        	 GussetPlateThickness="";
	    		 	   			}
	    		 	   	         if (!$("#thisdisable").val()) {
	    		 	   	        	 weldsize="";
	    		 	   			}
	    		 	   	         if (!$("#thisdisable1").val()) {
	    		 	   	        	 weldsize2="";
	    		 	   			}
	    		 	   	         
	    		 	   	         if (!$("#boltspc").val()) {
	    		 	   	        	 boltspc="";
	    		 	   			}
	    		 	   	         if (!$("#edgedistance").val()) {
	    		 	   	        	 edgedistance="";
	    		 	   			}
	    		 	   	         if (!$("#weldlength").val()) {
	    		 	   	        	 weldlength="";
	    		 	   			}
	    		 	   	         
	    		 	   	         if (!$("#noofboltrwClaw").val()) {
	    		 	   	        	 noofboltrwClaw="";

	    		 	   			}
	    		 	   	         var method="";
	    		 	   	         
	    		 	   	         if ($("#braceShapeH").val()=="W") {
	    		 	   	    		 
	    		 	   	        	 method=$("#connectionMethodH2").val();
	    		 	   	        	 noofboltrwClaw=$("#noofboltrwClaw option:selected").text();
	    		 	   	   		
	    		 	   	   	} else {
	    		 	   	   		method=$('#connectionMethodH1').val();
	    		 	   	   	}
	    		 	   	         var method2="";
	    		 	   	         
	    		 	   	         if($('#connectionTypeH').val()=='Chevron'){ 
	    		 	   	        	 method2=$("#showChevrongtobconnectionmethodH").val();
	    		 	   	        	
	    		 	               }
	    		 	               else {  
	    		 	               	  method2=$('#gtobconnectionmethodH').val();
	    		 	               	
	    		 	               }   
	    		 	   	     var GussettoBeamPlateThickness=$("#GussettoBeamPlateThickness option:selected").text()+ '"';        
	    		 	   	           if (!$("#GussettoBeamPlateThickness").val()) {
	    		 	   	        	GussettoBeamPlateThickness="";
	    		 	   	        	}
	    		 	   	 
	    		 	   	       $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#braceShapeH').val()+'</td><td>'+$('#braceProfile').val()+'</td><td>'+GussetPlateThickness+'<input type="hidden" value='+$('#GussetPlateThickness').val()+'></td><td>'+method+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td></td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+weldlength+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#weldlength').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'><input type="hidden" class="fracHFrac"  value="'+$('#fraction option:selected').text()+'" /></td><td>'+$('#connectionTypeH').val()+'</td><td>'+method2+'</td><td>'+GussettoBeamPlateThickness+'<input type="hidden" value='+$('#GussettoBeamPlateThickness').val()+'></td><td>'+$('#clipangletxt').val()+'</td><td>'+$('#osltxt').val()+'</td><td>'+$('#boltgrade2').val()+'</td><td>'+boltdia2+'<input type="hidden" value='+$('#boltdia2').val()+'></td><td>'+$('#noofboltrw2').val()+'</td><td>'+boltspc2+'<input type="hidden" value='+$('#boltspc2').val()+'></td><td>'+edgedistance2+'<input type="hidden" value='+$('#edgedistance2').val()+'></td><td>'+$('#ddlcjp1').val()+'</td><td>'+weldsize2+'<input type="hidden" value='+$('#thisdisable1').val()+'></td><td>'+weldlength2+'<input type="hidden" class="inchH"  value='+$('#inch2').val()+'><input type="hidden" class="lengH"  value='+$('#weldlength2').val()+'><input type="hidden" class="fracH"  value='+$('#fraction2').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction2 option:selected').text()+ '"/></td><td>'+weldlength3+'<input type="hidden" class="inchH"  value='+$('#inch3').val()+'><input type="hidden" class="lengH"  value='+$('#weldlength3').val()+'><input type="hidden" class="fracH"  value='+$('#fraction3').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction3 option:selected').text()+ '"  /></td>');
	    		    		 	 	  addorupdate();
	        		   showalertSuccess('Updated successfully');	  	 	
}	
		 		
		 		
		 		
		 		
		 		
		 		
		 		
function showalertsession(text) {        	
    $('#alert_placeholder').append
    ('<div class="alert alert-success" id="alertdiv"> <i class="fa fa-check-circle"></i> ' + text + 
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
            '</div>')       
     	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
         	$("#alertdiv").remove();

     }, 1000);
   
   }
 		

	
	$("#braceProfile").change( function(){
		if (!$('#braceProfile').val()) {
			$('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#braceProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
	
	$("#GussetPlateThickness").change( function(){
		if (!$('#GussetPlateThickness').val()) {
			$('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#GussetPlateThicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
	$("#boltgrade").change( function(){
		if (!$('#boltgrade').val()) {
			$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
	
	$("#boltdia").change( function(){
		if (!$('#boltdia').val()) {
			$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
	
	$("#noofboltrw").change( function(){
		if (!$('#noofboltrw').val()) {
			$('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
	
	$("#boltspc").change( function(){
		if (!$('#boltspc').val()) {
			$('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
	
	$("#edgedistance").change( function(){
		if (!$('#edgedistance').val()) {
			$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
	
	$("#thisdisable").change( function(){
		if (!$('#thisdisable').val()) {
			$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
   
	$("#clipangletxt").change( function(){
		if (!$('#clipangletxt').val()) {
			$('#clipangletxtDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
				$('#clipangletxtDiv .select2-container--default .select2-selection--single').css("border-color","");
	    		}
     });
	$("#boltgrade2").change( function(){
		if (!$('#boltgrade2').val()) {
			$('#boltgrade2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#boltgrade2DIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
	
	$("#boltdia2").change( function(){
		if (!$('#boltdia2').val()) {
			$('#boltdia2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#boltdia2DIV .select2-container--default .select2-selection--single').css("border-color","");
		}
  });
 
	
	 $("#noofboltrw2").change( function(){
			if (!$('#noofboltrw2').val()) {
				$('#noofboltrw2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			  }else {
				  $('#noofboltrw2DIV .select2-container--default .select2-selection--single').css("border-color","");
			}
	  });
	 
	
	 $("#boltspc2").change( function(){
			if (!$('#boltspc2').val()) {
				$('#boltspc2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			  }else {
				  $('#boltspc2DIV .select2-container--default .select2-selection--single').css("border-color","");
			}
	  });
	 

	 $("#edgedistance2").change( function(){
			if (!$('#edgedistance2').val()) {
				$('#edgedistance2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			  }else {
				  $('#edgedistance2DIV .select2-container--default .select2-selection--single').css("border-color","");
			}
	  });
	 

	 $("#thisdisable1").change( function(){
			if (!$('#thisdisable1').val()) {
				$('#thisdisable1DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			  }else {
				  $('#thisdisable1DIV .select2-container--default .select2-selection--single').css("border-color","");
			}
	  });
	
	
	
		 		
		 		
		 		
		 		
		 		
		 		