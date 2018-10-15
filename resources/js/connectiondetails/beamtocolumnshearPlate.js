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
    

    $(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
       $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });      

    $(document).click(function(e) {
        if (!$(e.target).is('.outer-collapse')) {
            $('.outer-collapse').removeClass('show');        
        }
    });
    
   
    
    
        
    
 
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
    	     
    	   
    	     if($row.find("td:nth-child(19)").text()){
                 $("#showSP").show();
                 
             }
             else {
                 $("#showSP").hide();
                 $(".showSP").val("").trigger("change");
             }
   
    	

   		  connectionmarkedit=$row.find("td:nth-child(3)").text();
   		
       	  $("#conmark").val($row.find("td:nth-child(3)").text());
       	  $("#beamprofile").val($row.find("td:nth-child(4)").text()).trigger("change");
       	  $("#sheartabtype").val($row.find("td:nth-child(5)").text()).trigger("change");
       	  $("#sheartp").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");  
       	  $("#btocShear1").val($row.find("td:nth-child(7)").text()).trigger("change");
       	  $("#btocShear2").val($row.find("td:nth-child(8)").text()).trigger("change");
       	  $("#boltgrade").val($row.find("td:nth-child(9)").text()).trigger("change");
       	  $("#boltdia").val($row.find("td:nth-child(10)").find('input').val()).trigger("change");
       	  $("#noofblotrow").val($row.find("td:nth-child(11)").text()).trigger("change");
       	  $("#boltspacingY").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
   	      $("#noofCol").val($row.find("td:nth-child(13)").text()).trigger("change");
          $("#boltspacingX").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
          $("#edgedis").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");
          $("#ddlcjp").val($row.find("td:nth-child(16)").text()).trigger("change");
          $("#wieldsizecp").val($row.find("td:nth-child(17)").find('input').val()).trigger("change"); 
          $("#shearPLft").val($row.find("td:nth-child(18)").find('.lengH').val()).trigger("change");
       	  $("#shearPLin").val($row.find("td:nth-child(18)").find('.inchH').val()).trigger("change");   
       	  $("#shearPLfr").val($row.find("td:nth-child(18)").find('.fracH').val()).trigger("change"); 
       	  
       	 $("#shearPLftwidth").val($row.find("td:nth-child(19)").find('.lengH').val()).trigger("change");
      	  $("#shearPLinwidth").val($row.find("td:nth-child(19)").find('.inchH').val()).trigger("change");   
      	  $("#shearPLfrwidth").val($row.find("td:nth-child(19)").find('.fracH').val()).trigger("change");  
       	  
       	  
       	  $("#stabilizerPT").val($row.find("td:nth-child(20)").find('input').val()).trigger("change");
          $("#stabilizerWType").val($row.find("td:nth-child(21)").text()).trigger("change");
          $("#stabilizerWSize").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");
          if($row.find("td:nth-child(5)").text()=='Conventional Shear Tab'){
              $("#stabilizerplate").hide();
				$("#showSP").hide();
				$(".showSP").val("").trigger("change");
				 $("#spYesNo").val("spNo").trigger("change");
          }
          else if ($row.find("td:nth-child(5)").text()=='Extended Shear Tab') {
              $("#stabilizerplate").show();
           if ($row.find("td:nth-child(20)").text()) {
         	  $("#spYesNo").val("spYes").trigger("change");
			}else {
				 $("#spYesNo").val("spNo").trigger("change");
			}
             
          }
        	      
		}
    
    	
    });
    
    $("#sShearPlateLength").hide();
  
        $("#btocShear1, #btocShear2").change( function(){
        	$('#spYesNo').val('');
       	    $("#ddlcjp").val('');   
        	if($('#btocShear1').val()=='Shop Welded' && $('#btocShear2').val()=='Field Welded'){  
                $("#btocSBoltDetails").hide();
                getWelddetails();
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").show();
                $(".btocSBoltDetails").val("").trigger("change");
                $("#shearPLin,#shearPLfr,#shearPLinwidth,#shearPLfrwidth").val('0').trigger("change"); 
             
            } 
            else if($('#btocShear1').val()=='Shop Welded' && $('#btocShear2').val()=='Field Bolted'){  
                $("#btocSBoltDetails").show();
                getboltdetails();  
                $("#btocSWeldDetails").show();
                getWelddetails()
                $("#sShearPlateLength").hide();
                $(".sShearPlateLength").val("").trigger("change");
            }      
            else if($('#btocShear1').val()=='Field Welded' && $('#btocShear2').val()=='Field Welded'){ 
                $("#btocSBoltDetails").hide(); 
                getWelddetails();
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").show();
                $(".btocSBoltDetails").val("").trigger("change");
                $("#shearPLin,#shearPLfr,#shearPLinwidth,#shearPLfrwidth").val('0').trigger("change"); 
            } 
            else if($('#btocShear1').val()=='Field Welded' && $('#btocShear2').val()=='Field Bolted'){ 
                $("#btocSBoltDetails").show(); 
                getboltdetails();  
                $("#btocSWeldDetails").show();
                $("#sShearPlateLength").hide();
                $(".sShearPlateLength").val("").trigger("change");
            } 
            else{
            	$("#btocSBoltDetails").hide();
                $("#sShearPlateLength").hide();
                $("#showSP,#stabilizerplate").hide();
               $("#btocSWeldDetails").hide();
            }
        	if($('#sheartabtype').val()=='Conventional Shear Tab'){
                $("#stabilizerplate").hide();
				$("#showSP").hide();
				$(".stabilizerplate,.showSP").val("").trigger("change");
            }
            else if ($('#sheartabtype').val()=='Extended Shear Tab') {
                $("#stabilizerplate").show();
            }else{
            	 $("#stabilizerplate").hide();
 				$("#showSP").hide();
 				$(".stabilizerplate,.showSP").val("").trigger("change");
            }
        	removeRedBoarder();
        });
  
    // ShearTabType
    $("#stabilizerplate").hide();
    $("#showSP").hide();
   
        $("#sheartabtype").change( function(){
        	if($('#sheartabtype').val()=='Conventional Shear Tab'){
                $("#stabilizerplate").hide();
				$("#showSP").hide();
				$(".stabilizerplate,.showSP").val("").trigger("change");
            }
            else if ($('#sheartabtype').val()=='Extended Shear Tab') {
                $("#stabilizerplate").show();
            }else{
            	 $("#stabilizerplate").hide();
 				$("#showSP").hide();
 				$(".stabilizerplate,.showSP").val("").trigger("change");
            }
        });
  
     $("#showSP").hide();
  
        $("#spYesNo").change( function(){
            if($('#spYesNo').val()=='spYes'){
                $("#showSP").show();
            }
            else if ($('#spYesNo').val()=='spNo') {
                $("#showSP").hide();
                $(".showSP").val("").trigger("change");
            }
        });
   
    

    
     
     
     
    /* checking for required filed */
	$("#adddata").on('click', function(){
		if (validateForm() && checkconnectioncodeForuniquiness()) {
			addconnectionmark();
		}
    });
    
    
    
	  $("#update").on('click', function(){
		if (validateForm() && checkconnectioncodeForuniquiness()) {
			if (connectionmarkedit==$("#conmark").val()) {
		  		  finalupdate();
		  		     
				} else {
					 updateconnectionmark();
				}
		  }
		 
   
	    });
    
    
    
    function validateForm() {
    	
    	
    	if (!$('#beamprofile').val()) {
    		$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	
    	if (!$('#sheartp').val()) {
    		$('#sheartpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	if (!$('#boltgrade').val()) {
    		$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	if (!$('#boltdia').val()) {
    		$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	
    	if (!$('#noofblotrow').val()) {
    		$('#noofblotrowDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	if (!$('#boltspacingY').val()) {
    		$('#boltspacingYDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	if (!$('#noofCol').val()) {
    		$('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	
    	if (!$('#boltspacingX').val()) {
    		$('#boltspacingXDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	if (!$('#edgedis').val()) {
    		$('#edgedisDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	if (!$('#wieldsizecp').val()) {
    		$('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	
    	if (!$('#stabilizerPT').val()) {
    		$('#stabilizerPTDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	if (!$('#stabilizerWSize').val()) {
    		$('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    		
    	}
    	
    	
    	$('#formBeamToColumnShearPlate').addClass('submitted');
    	var validated = true;
    	/* checking for required filed */
    	$('#formBeamToColumnShearPlate').find(':input').each(function(){   
    		
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
    	
    	if(validated == true)
    	{
    	
    		var Lenght = $("#shearPLft").val();
        	var Inch = $("#shearPLin").find("option:selected").text();
        	var Fraction = $("#shearPLfr").find("option:selected").text();
    	
    		validated = validateLength(Lenght,Inch,Fraction,"Length");
    	}
    	
    	 return validated;
    }
    
    
    
    function addorupdate() {
  	  
  	  
  	  var connectionjson=	tableToJSON('table') ;
  		$.ajax({
   		   type : 'POST',
   	          url: "/bimspring/saveConnectionsDetails",	          
   	          data : {connectiongrouptype:"BeamToColumnShearPlate",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
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
 	   $("#boltspacingY,#boltspacingX").val(BspacingGP).trigger("change");  
 	   $("#edgedis").val(EDistandanceGP).trigger("change");  
 	 
 	   
     }
    
    function  getWelddetails(){
   	 $("#ddlcjp").val(WeldTypeDefaultValue).trigger("change");   
 	  $("#wieldsizecp").val(weldSizeGP).trigger("change"); 
 	   if ( $("#ddlcjp").val()=="CJP") {
 		   $("#wieldsizecp").val("").trigger("change"); 
 		   $("#wieldsizecp").attr("disabled", true);
 		   $("#wieldsizecp").prop('required',false);
 		   $('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","");
 			
 		}else {
 			  $("#wieldsizecp").val(weldSizeGP).trigger("change"); 
 			  $("#wieldsizecp").attr("disabled", false);
 			  $("#wieldsizecp").prop('required',true);
 		}		   
     }
    
    $(".add,.anv-btn").on('click', function(){
   	   $("#btocSBoltDetails").hide();
          $("#sShearPlateLength").hide();
          $("#showSP,#stabilizerplate").hide();
         $("#btocSWeldDetails").hide();
         $(".form-control,.select2").val("").trigger("change"); 
         $("#sheartp").val(MinPTFromGP).trigger("change"); 
         listvalues = [];
         $(".contxt").each(function(){			
     		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
     		
     	});
         $('#formBeamToColumnShearPlate').removeClass('submitted');
         $('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
         $('#noofblotrowDIV .select2-container--default .select2-selection--single').css("border-color","");
         $('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","");  
         
   });
   
   
   $("#ddlcjp").change(function() {  
	   if ( $("#ddlcjp").val()=="CJP") {
		  $("#wieldsizecp").val("").trigger("change"); 
		   $("#wieldsizecp").attr("disabled", true);		  
		   $("#wieldsizecp").prop('required',false);
		   $('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		   
		}else {
			 $("#wieldsizecp").val(weldSizeGP).trigger("change"); 
			 $('#wieldsizecp').attr("disabled", false);
			  $("#wieldsizecp").prop('required',true);
		}

		});
    
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
   
   $("#stabilizerWType").change(function() {  
	   if ( $("#stabilizerWType").val()=="CJP") {
		  $("#stabilizerWSize").val("").trigger("change"); 
		   $("#stabilizerWSize").attr("disabled", true);
		   $("#stabilizerWSize").prop('required',false);
		   $('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		   
		}else {
			 $("#stabilizerWSize").val(weldSizeGP).trigger("change"); 
			 $('#stabilizerWSize').attr("disabled", false);
			  $("#stabilizerWSize").prop('required',true);
		}

		});
   
	$(".contxt").each(function(){			
		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
		
	});
	

	$("#recall").click(function(){
		var rowCount = $('#table tr').length;
		
		if (rowCount > 1) {

		$('#table tr:last').find("td:nth-child(3)").text();
		
		var $row=$('#table tr:last');
		
		
	    $(".right").show();
	    $(".left").hide();
	    $(".memtype-rightedit").show();
		$(".editmemtype .rightFloat").show(); 
		
		  if($row.find("td:nth-child(19)").text()){
              $("#showSP").show();
              
          }
          else {
              $("#showSP").hide();
              $(".showSP").val("").trigger("change");
          }

 	

		  connectionmarkedit=$row.find("td:nth-child(3)").text();
		
    	  $("#conmark").val("");
    	  $("#beamprofile").val($row.find("td:nth-child(4)").text()).trigger("change");
    	  $("#sheartabtype").val($row.find("td:nth-child(5)").text()).trigger("change");
    	  $("#sheartp").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");  
    	  $("#btocShear1").val($row.find("td:nth-child(7)").text()).trigger("change");
    	  $("#btocShear2").val($row.find("td:nth-child(8)").text()).trigger("change");
    	  $("#boltgrade").val($row.find("td:nth-child(9)").text()).trigger("change");
    	  $("#boltdia").val($row.find("td:nth-child(10)").find('input').val()).trigger("change");
    	  $("#noofblotrow").val($row.find("td:nth-child(11)").text()).trigger("change");
    	  $("#boltspacingY").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
	      $("#noofCol").val($row.find("td:nth-child(13)").text()).trigger("change");
       $("#boltspacingX").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
       $("#edgedis").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");
       $("#ddlcjp").val($row.find("td:nth-child(16)").text()).trigger("change");
       $("#wieldsizecp").val($row.find("td:nth-child(17)").find('input').val()).trigger("change"); 
       $("#shearPLft").val($row.find("td:nth-child(18)").find('.lengH').val()).trigger("change");
    	  $("#shearPLin").val($row.find("td:nth-child(18)").find('.inchH').val()).trigger("change");   
    	  $("#shearPLfr").val($row.find("td:nth-child(18)").find('.fracH').val()).trigger("change"); 
    	  
    	 $("#shearPLftwidth").val($row.find("td:nth-child(19)").find('.lengH').val()).trigger("change");
   	  $("#shearPLinwidth").val($row.find("td:nth-child(19)").find('.inchH').val()).trigger("change");   
   	  $("#shearPLfrwidth").val($row.find("td:nth-child(19)").find('.fracH').val()).trigger("change");  
    	  
    	  
    	  $("#stabilizerPT").val($row.find("td:nth-child(20)").find('input').val()).trigger("change");
       $("#stabilizerWType").val($row.find("td:nth-child(21)").text()).trigger("change");
       $("#stabilizerWSize").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");
       if($row.find("td:nth-child(5)").text()=='Conventional Shear Tab'){
           $("#stabilizerplate").hide();
				$("#showSP").hide();
				$(".showSP").val("").trigger("change");
				 $("#spYesNo").val("spNo").trigger("change");
       }
       else if ($row.find("td:nth-child(5)").text()=='Extended Shear Tab') {
           $("#stabilizerplate").show();
        if ($row.find("td:nth-child(20)").text()) {
      	  $("#spYesNo").val("spYes").trigger("change");
			}else {
				 $("#spYesNo").val("spNo").trigger("change");
			}
          
       }

		
	      
		}
		      
		
		});
	
	
	
 	
	  function addconnectionmark() {
			
		  connectionmarkvalues=[];
		  connectionjson=connectionmarkToJSON('table') ;
		  
		  connectionmarkvalues.push($('#conmark').val());
		 
			$.ajax({
	 		   type : 'POST',
	 	          url: "/bimspring/saveConnectionMarks",	          
	 	          data : {connectiongrouptype:"BeamToColumnShearPlate",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
	 	                
	 	                listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	 	        		
	 	               var boltdia=getformateforrepresentation($("#boltdia option:selected").text());
	 	             	    if (!$("#boltdia").val()) {
	 	             	        	 boltdia="";
	 	             			}
	 	             			
	 	               var boltspacingY=getformateforrepresentation($("#boltspacingY option:selected").text());
	 	             	 
	 	             	         if (!$("#boltspacingY").val()) {
	 	             	        	 boltspacingY="";
	 	             			}
	 	             var boltspacingX=getformateforrepresentation($("#boltspacingX option:selected").text());
	 	             	 
	 	             	         if (!$("#boltspacingX").val()) {
	 	             	        	 boltspacingX="";
	 	             			}
	 	             var edgedistance=getformateforrepresentation($("#edgedis option:selected").text());
	 	             	          if (!$("#edgedis").val()) {
	 	             	        	 edgedistance="";
	 	             			}
	 	             			
	 	             			var weldsize= getformateforrepresentation($("#wieldsizecp option:selected").text());
	 	             	        if (!$("#wieldsizecp").val()) {
	 	             	        	 weldsize="";
	 	             			}
	 	             			
	 	             	    var boltgage=  getformateforrepresentation($("#boltgage option:selected").text());
	 	             	 if (!$("#boltgage").val()) {
	 	             	        	 boltgage="";
	 	             			}
	 	                
	 	                
	 	                 var stabilizerPT=getformateforrepresentation($("#stabilizerPT option:selected").text());
	 	             	 
	 	                     if (!$("#stabilizerPT").val()) {
	 	        	        	 stabilizerPT="";
	 	        	        	  $('#stabilizerWSize').val("").trigger("change");
	 	        			}
	 	             	 
	 	                var stabilizerWSize=getformateforrepresentation($("#stabilizerWSize option:selected").text());
	 	             	 
	 	             	         if (!$("#stabilizerWSize").val()) {
	 	             	        	 stabilizerWSize="";
	 	             			}
	 	             	        
	 	             	      var shearPlen=feetInchFormater($('#shearPLft').val(), $('#shearPLin').val(), $("#shearPLfr option:selected").text());
	 	             	       if (!$("#shearPLft").val()) {
	 	             	    	  shearPlen="";

	 	          			}
	 	             	       
	 	             	     var shearPlenwidth=feetInchFormater($('#shearPLftwidth').val(), $('#shearPLinwidth').val(), $("#shearPLfrwidth option:selected").text());
	 	             	       if (!$("#shearPLftwidth").val()) {
	 	             	    	  shearPlenwidth="";

	 	          			}
	 	             	       
	 	             	       
	 	             	      var shearPThickness=getformateforrepresentation($("#sheartp option:selected").text());
	 	             	    
	 	            	       if (!$("#sheartp").val()) {
	 	            	    	   shearPThickness="";
	 	         			}
	 	            	      
	 	                 $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#sheartabtype').val()+'</td><td>'+shearPThickness+'<input type="hidden" value='+$('#sheartp').val()+'></td><td>'+$('#btocShear1').val()+'</td><td>'+$('#btocShear2').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofblotrow').val()+'</td><td>'+boltspacingY+'<input type="hidden" value='+$('#boltspacingY').val()+'></td><td>'+$('#noofCol').val()+'</td><td>'+boltspacingX+'<input type="hidden" value='+$('#boltspacingX').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedis').val()+'></td> <td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#wieldsizecp').val()+'></td><td>'+shearPlen+'<input type="hidden" class="inchH"  value='+$('#shearPLin').val()+'><input type="hidden" class="lengH"  value='+$('#shearPLft').val()+'><input type="hidden" class="fracH"  value='+$('#shearPLfr').val()+'><input type="hidden" class="fracHFrac" value="'+$('#shearPLfr option:selected').text()+ '" /></td> <td>'+shearPlenwidth+'<input type="hidden" class="inchH"  value='+$('#shearPLinwidth').val()+'><input type="hidden" class="lengH"  value='+$('#shearPLftwidth').val()+'><input type="hidden" class="fracH"  value='+$('#shearPLfrwidth').val()+'><input type="hidden" class="fracHFrac" value="'+$('#shearPLfrwidth option:selected').text()+ '" /></td> <td>'+stabilizerPT+'<input type="hidden" value='+$('#stabilizerPT').val()+'></td> <td>'+$('#stabilizerWType').val()+'</td><td>'+stabilizerWSize+'<input type="hidden" value='+$('#stabilizerWSize').val()+'></td></tr>');
	 	                	    addorupdate();
	 	                	    showalertSuccess("Added Successfully");
	 	        		  
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
		 	          data : {connectiongrouptype:"BeamToColumnShearPlate",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
							           data : {connectiongrouptype:"BeamToColumnShearPlate",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
								       
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
deleteconnectionmarks("BeamToColumnShearPlate")

 	
 	
});    	   	 	 	
	
	
	
	
function finalupdate(){

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
			
    		$(".add-new-value").hide();
            $(".memtype-table").show();   
            $(".left").show();
            $(".editmemtype .rightFloat").hide();
           
      		listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
      	  var boltdia=getformateforrepresentation($("#boltdia option:selected").text());
    	    if (!$("#boltdia").val()) {
    	        	 boltdia="";
    			}
    			
      var boltspacingY=getformateforrepresentation($("#boltspacingY option:selected").text());
    	 
    	         if (!$("#boltspacingY").val()) {
    	        	 boltspacingY="";
    			}
    var boltspacingX=getformateforrepresentation($("#boltspacingX option:selected").text());
    	 
    	         if (!$("#boltspacingX").val()) {
    	        	 boltspacingX="";
    			}
    var edgedistance=getformateforrepresentation($("#edgedis option:selected").text());
    	          if (!$("#edgedis").val()) {
    	        	 edgedistance="";
    			}
    			
    			var weldsize= getformateforrepresentation($("#wieldsizecp option:selected").text());
    	        if (!$("#wieldsizecp").val()) {
    	        	 weldsize="";
    			}
    			
    	    var boltgage=  getformateforrepresentation($("#boltgage option:selected").text());
    	 if (!$("#boltgage").val()) {
    	        	 boltgage="";
    			}
       
       
        var stabilizerPT=getformateforrepresentation($("#stabilizerPT option:selected").text());
    	 
            if (!$("#stabilizerPT").val()) {
	        	 stabilizerPT="";
	        	  $('#stabilizerWSize').val("").trigger("change");
			}
    	 
       var stabilizerWSize=getformateforrepresentation($("#stabilizerWSize option:selected").text());
    	 
    	         if (!$("#stabilizerWSize").val()) {
    	        	 stabilizerWSize="";
    			}
    	        
    	      var shearPlen=feetInchFormater($('#shearPLft').val(), $('#shearPLin').val(), $("#shearPLfr option:selected").text());
    	       if (!$("#shearPLft").val()) {
    	    	  shearPlen="";

 			}
    	       
    	     var shearPlenwidth=feetInchFormater($('#shearPLftwidth').val(), $('#shearPLinwidth').val(), $("#shearPLfrwidth option:selected").text());
    	       if (!$("#shearPLftwidth").val()) {
    	    	  shearPlenwidth="";

 			}
    	       
    	       
    	      var shearPThickness=getformateforrepresentation($("#sheartp option:selected").text());
    	    
   	       if (!$("#sheartp").val()) {
   	    	   shearPThickness="";
			}
   	      
   	    $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#sheartabtype').val()+'</td><td>'+shearPThickness+'<input type="hidden" value='+$('#sheartp').val()+'></td><td>'+$('#btocShear1').val()+'</td><td>'+$('#btocShear2').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofblotrow').val()+'</td><td>'+boltspacingY+'<input type="hidden" value='+$('#boltspacingY').val()+'></td><td>'+$('#noofCol').val()+'</td><td>'+boltspacingX+'<input type="hidden" value='+$('#boltspacingX').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedis').val()+'></td> <td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#wieldsizecp').val()+'></td><td>'+shearPlen+'<input type="hidden" class="inchH"  value='+$('#shearPLin').val()+'><input type="hidden" class="lengH"  value='+$('#shearPLft').val()+'><input type="hidden" class="fracH"  value='+$('#shearPLfr').val()+'><input type="hidden" class="fracHFrac" value="'+$('#shearPLfr option:selected').text()+ '" /></td> <td>'+shearPlenwidth+'<input type="hidden" class="inchH"  value='+$('#shearPLinwidth').val()+'><input type="hidden" class="lengH"  value='+$('#shearPLftwidth').val()+'><input type="hidden" class="fracH"  value='+$('#shearPLfrwidth').val()+'><input type="hidden" class="fracHFrac" value="'+$('#shearPLfrwidth option:selected').text()+ '" /></td> <td>'+stabilizerPT+'<input type="hidden" value='+$('#stabilizerPT').val()+'></td> <td>'+$('#stabilizerWType').val()+'</td><td>'+stabilizerWSize+'<input type="hidden" value='+$('#stabilizerWSize').val()+'></td>');
  
   	       addorupdate();
           showalertSuccess("Updated Successfully");

	
}	    	 	
	

	
	  
	    if (Page && Page.length !== 0) {
	     	 $("#add-new-value").hide();
	         $(".memtype-table").show();
	     	  
	     	  
	     	  $.each(Page, function(key,value) {
	     		     var Bprofile=value[BeamProfileInOuter];	
	     			 var SPThicknessout=value[ShearPlateThicknessInOuter];
	     			 var BSYInout=value[BoltSpacingYInOuter];
	     			 var BSXInout=value[BoltSpacingXInOuter];
	     			 var WeldTypeInout=value[WeldTypeInOuter];
	     			 var WeldSizeInout=value[WeldSizeInOuter];
	     			 var shearPlenDD= feetInchFormater(value[ShearPlateLength], value[ShearPlateLength_in], value[ShearPlateLength_fr_fra]);
	      			 var StzerThicknessInout=value[StabilizerPlateThicknessInOuter];
	     			 var StzerWeldTypeInout=value[StabilizerWeldTypeInOuter];
	     			 var StzerWeldSizeInout=value[StabilizerWeldSizeInOuter];    
	     			 
	     			 var shearPlenget=value['ShearPlateWidth'];
	     			 var shearPlenDDwidth= feetInchFormater(shearPlenget['Width'], shearPlenget[ShearPlateLength_in], shearPlenget[ShearPlateLength_fr_fra]);
	     			 if (!shearPlenget['Width']) {
	 	  				shearPlenDDwidth="";

	 		  				}
	     			 
	  			  if (!value[ShearPlateLength]) {
	  				shearPlenDD="";

	  				}
	  			  
	  			
	  			  
	  			
	  			  
	  			$("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+Bprofile[BeamProfile]+'</td><td>'+value[ShearTabType]+'</td><td>'+getformateforrepresentation(SPThicknessout[ShearPlateThickness_fra])+'<input type="hidden" value='+SPThicknessout[ShearPlateThickness]+'></td><td>'+value[SupportSide]+'</td><td>'+value[SupportedSide]+'</td><td>'+value[BoltGrade]+'</td><td>'+getformateforrepresentation(value[BoltDia_fra])+'<input type="hidden" value='+value[BoltDia]+'></td><td>'+value[NoofBoltRows]+'</td><td>'+getformateforrepresentation(BSYInout[BoltSpacingY_fra])+'<input type="hidden" value='+BSYInout[BoltSpacingY]+'></td><td>'+value[NoofBoltColumns]+'</td><td>'+getformateforrepresentation(BSXInout[BoltSpacingY_fra])+'<input type="hidden" value='+BSXInout[BoltSpacingY]+'></td><td>'+getformateforrepresentation(value[EdgeDistance_fra])+'<input type="hidden" value='+value[EdgeDistance]+'></td> <td>'+WeldTypeInout[WeldType]+'</td><td>'+getformateforrepresentation(WeldSizeInout[WeldSize_fra])+'<input type="hidden" value='+WeldSizeInout[WeldSize]+'></td> <td>'+shearPlenDD+'<input type="hidden" class="inchH"  value='+value[ShearPlateLength_in]+'><input type="hidden" class="lengH"  value='+value[ShearPlateLength]+'><input type="hidden" class="fracH"  value='+value[ShearPlateLength_fr]+'><input type="hidden" class="fracHFrac"  value="'+value[ShearPlateLength_fr_fra]+'" /></td> <td>'+shearPlenDDwidth+'<input type="hidden" class="inchH"  value='+shearPlenget[ShearPlateLength_in]+'><input type="hidden" class="lengH"  value='+shearPlenget['Width']+'><input type="hidden" class="fracH"  value='+shearPlenget[ShearPlateLength_fr]+'><input type="hidden" class="fracHFrac"  value="'+shearPlenget[ShearPlateLength_fr_fra]+'" /></td> <td>'+getformateforrepresentation(StzerThicknessInout[StabilizerPlateThickness_fra])+'<input type="hidden" value='+StzerThicknessInout[StabilizerPlateThickness]+'></td> <td>'+StzerWeldTypeInout[StabilizerPlateWeldType]+'</td><td>'+getformateforrepresentation(StzerWeldSizeInout[StabilizerPlateWeldSize_fra])+'<input type="hidden" value='+StzerWeldSizeInout[StabilizerPlateWeldSize]+'></td></tr>');
	  		   
	     	  
	     	  });
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
   
	   
    	
    	 $("#stabilizerWSize").change( function(){
    		 
    		 if (!$('#stabilizerWSize').val()) {
    	    		$('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    	}else{
    	    		$('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
    	    	}
			});
    	 
    	 $("#stabilizerPT").change( function(){
				
    		 if (!$('#stabilizerPT').val()) {
    	    		$('#stabilizerPTDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    		
    	    	}else {
					  $('#stabilizerPTDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	 $("#wieldsizecp").change( function(){
				
    			if (!$('#wieldsizecp').val()) {
    	    		$('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    	}
    	    	else {
					  $('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	 
    	 $("#edgedis").change( function(){
			 if (!$('#edgedis').val()) {
    	    		$('#edgedisDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    		
    	    	}else {
					  $('#edgedisDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	 
    	 $("#boltspacingX").change( function(){
				if (!$('#boltspacingX').val()) {
    	    		$('#boltspacingXDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    	}
    	    	else {
					  $('#boltspacingXDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	 $("#noofCol").change( function(){
				
    		 if (!$('#noofCol').val()) {
    	    		$('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    		
    	    	}else {
					  $('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	 
    	 $("#boltspacingY").change( function(){
				if (!$('#boltspacingY').val()) {
    	    		$('#boltspacingYDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    	}
    	    	else {
					  $('#boltspacingYDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	 $("#noofblotrow").change( function(){
				if (!$('#noofblotrow').val()) {
    	    		$('#noofblotrowDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    	}else {
					  $('#noofblotrowDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	
    	 $("#boltdia").change( function(){
				
    			if (!$('#boltdia').val()) {
    	    		$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	    	} else {
					  $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	 
    
	    
    	 $("#beamprofile").change( function(){
				
    		  if (!$('#beamprofile').val()) {
    	     		$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	     		
    	     	} else {
					  $('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
	    
    	   
    	 $("#boltgrade").change( function(){
    		 if (!$('#boltgrade').val()) {
    	     		$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	     		
    	     	} else {
					  $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
    	   
    	 $("#sheartp").change( function(){
			 if (!$('#sheartp').val()) {
    	     		$('#sheartpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
    	     	} else {
					  $('#sheartpDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
		  });
	    
	    
    	 function removeRedBoarder(){
    		 $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
    		 $('#noofblotrowDIV .select2-container--default .select2-selection--single').css("border-color","");
    		 $('#boltspacingYDIV .select2-container--default .select2-selection--single').css("border-color","");
    		 $('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#boltspacingXDIV .select2-container--default .select2-selection--single').css("border-color","");
	         $('#edgedisDIV .select2-container--default .select2-selection--single').css("border-color","");
		     $('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","");
		     $('#stabilizerPTDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
    		 $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
 			 $('#sheartpDIV .select2-container--default .select2-selection--single').css("border-color","");
 			 $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
 			
    		 }    
	    