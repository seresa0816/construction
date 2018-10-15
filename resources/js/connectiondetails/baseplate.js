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


    
  
  
	function validateLength1(){
		var validated = true;
		
		var Lenght = $("#weldlengthH").val();
    	var Inch = $("#inchH").find("option:selected").text();
    	var Fraction = $("#fractionH").find("option:selected").text();
    	
		validated = validateLength(Lenght,Inch,Fraction,"Length");
	
		return validated;
	}
	
function validateLength2(){
		
	var validated = true;
	
	var Lenght = $("#weldlengthV").val();
	var Inch = $("#inchV").find("option:selected").text();
	var Fraction = $("#fractionV").find("option:selected").text();
	
	validated = validateLength(Lenght,Inch,Fraction,"Length");
	
	return validated;
	}
    


var $row ="";
$("#edit").click(function(){
	var i=0;
	
	$("#adddata").hide();
	  $("#update").show();
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
		 $("#add").hide();
	     $("#update").show();
	    
	     $(".contxt").each(function(){			
				listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
				
			});
		  listvalues = jQuery.grep(listvalues, function(value) {
			  return value != $row.find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase();
			});
	 
		  connectionmarkedit=$row.find("td:nth-child(3)").text();
		  $("#conmark").val($row.find("td:nth-child(3)").text());
		  $("#baseplateCP").val($row.find("td:nth-child(4)").text()).trigger("change");
		  $("#baseplateBC").val($row.find("td:nth-child(5)").text()).trigger("change");
          $("#platethickness").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
          if ($row.find("td:nth-child(4)").text()=="Column") {
  	        
              $("#columnprofile").val($row.find("td:nth-child(6)").text()).trigger("change");
	        	
			}else {
			
				 $("#PostProfile").val($row.find("td:nth-child(6)").text()).trigger("change");
				
			}
          if($row.find("td:nth-child(4)").text()=='Column' && $row.find("td:nth-child(5)").text()=='Cap Plate') { 
			 
                   $("#checkboxdetail").show(); 
             
		}
          if ($row.find("td:nth-child(8)").text()) {
        	  $("#checkboxBoltdetails").prop('checked',true).trigger("change");  
              
		}
          
          $("#boltgrade").val($row.find("td:nth-child(8)").text()).trigger("change");
          $("#boltdia").val($row.find("td:nth-child(9)").find('input').val()).trigger("change");
          $("#anchorrodtype").val($row.find("td:nth-child(10)").text()).trigger("change");
          $("#anchorrodgrade").val($row.find("td:nth-child(11)").text()).trigger("change");
          $("#anchorroddia").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
          $("#anchorrodlength").val($row.find("td:nth-child(13)").find('.lengH').val()).trigger("change");
          $("#inch").val($row.find("td:nth-child(13)").find('.inchH').val()).trigger("change");   
          $("#fraction").val($row.find("td:nth-child(13)").find('.fracH').val()).trigger("change");   

          $("#holedia").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
          $("#noofboltrw1").val($row.find("td:nth-child(15)").text()).trigger("change");
          
          $("#bsWebLength").val($row.find("td:nth-child(16)").find('.lengH').val()).trigger("change");
          $("#bsWebinch").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
          $("#bsWebfraction").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change");   
 
          $("#noofboltrw2").val($row.find("td:nth-child(17)").text()).trigger("change");
          
          $("#bsFlangeLength").val($row.find("td:nth-child(18)").find('.lengH').val()).trigger("change");
          $("#bsFlangeinch").val($row.find("td:nth-child(18)").find('.inchH').val()).trigger("change");   
          $("#bsFlangefraction").val($row.find("td:nth-child(18)").find('.fracH').val()).trigger("change");   
          $("#edgeDistanceweb").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");
          $("#edgeDistanceflange").val($row.find("td:nth-child(20)").find('input').val()).trigger("change");
          
         $("#wtWeb").val($row.find("td:nth-child(21)").text()).trigger("change");
          $("#wsWeb").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");
		
          $("#wtFlange").val($row.find("td:nth-child(23)").text()).trigger("change");
          $("#wsFlange").val($row.find("td:nth-child(24)").find('input').val()).trigger("change");
          $('.select2-container--default .select2-selection--single').css("border-color","");
	        
	}
	
	
});

    
    
    /* checking for required filed */
	$("#adddata").on('click', function(){
		
	  	  if (validateForm() && checkconnectioncodeForuniquiness()) {
		
	  		addconnectionmark();
	  	  }
		
    });
    
	function validateSelect2Fields(){
		if (!$('#columnprofile').val() && !$('#PostProfile').val()) {
			$('#profileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}
		
		if (!$('#platethickness').val() && !$('#PostProfile').val()) {
			$('#platethicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}
		
		if (!$('#boltgrade').val() && !$('#PostProfile').val()) {
			$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}

		if (!$('#boltdia').val() && !$('#PostProfile').val()) {
			$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}

		if (!$('#edgedistance').val() && !$('#PostProfile').val()) {
			$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}

		if (!$('#holedia').val() && !$('#PostProfile').val()) {
			$('#holediaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}
		

		
		if (!$('#anchorrodtype').val() && !$('#PostProfile').val()) {
			$('#anchorrodtypeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}

		if (!$('#anchorrodgrade').val() && !$('#PostProfile').val()) {
			$('#anchorrodgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}

		if (!$('#anchorroddia').val() && !$('#PostProfile').val()) {
			$('#anchorroddiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}
		

		if (!$('#edgeDistanceweb').val() && !$('#PostProfile').val()) {
			$('#edgeDistancewebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}

		if (!$('#edgeDistanceflange').val() && !$('#PostProfile').val()) {
			$('#edgeDistanceflangeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}

		if (!$('#wsWeb').val() && !$('#PostProfile').val()) {
			$('#wsWebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}
		

		if (!$('#wsFlange').val() && !$('#PostProfile').val()) {
			$('#wsFlangeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}
		
	}
	
	
	function validateForm() {

		validateSelect2Fields();
		
		
		$('#formBasePlate').addClass('submitted');
		
		var validated = true;
		
		
		/* checking for required filed */
		$('#formBasePlate').find(':input').each(function(){   
			
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
	        $(".left,#sShearPlateLength").hide();
	        $("#adddata").show();
	        $("#update").hide();
	        $(".memtype-rightedit").show();
	        $(".editmemtype .rightFloat").show();  
	        $(".BoltDetails,.ClipAngleLength,#conmark,#beamprofile,#clipanglesz,#btocClip1,#btocClip2,.WeldDetails").val('').trigger("change");  
	        $('.select2-container--default .select2-selection--single').css("border-color","");
     
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
	  
	  
	  
	    function addorupdate() {
	  	
	  	  var connectionjson=	tableToJSON('table') ;
	  	 
	  	  
	  		$.ajax({
	   		   type : 'POST',
	   	          url: "/bimspring/saveConnectionsDetails",	          
	   	          data : {connectiongrouptype:"BasePlate",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
		   	       success : function(data, success) {  
		   	    	 if (data=="error") {
		            	  showalertsession("Select Project Again")
							
		            	  window.location='projectlist';
						}
	    	        	
				   },
				   error: function (error) {
					   
					if(error.status == 401){
						window.location.href = 'logout';
					}else{
						window.location='dashboard';
					}
	 	          }
	   	          }); 
	  	  
	  } 
	    
	    
	    
	      
		    	 /*   Base Plate AnchorDetails */

		    	 
        
		        $("#baseplateAnchorDetails").show();
		        
		            $("#checkboxdetail").hide();
		    	    $("#btocSBoltDetails").hide();
	                 $("#btocSWeldDetails").hide(); 
	                 $("#baseplateCP, #baseplateBC").change( function(){
	                	 $("#edgeDistanceweb,#edgeDistanceflange,#wsWeb,#wsFlange,#wtWeb,#wtFlange").val('').trigger("change"); 
	                     $("#bsWebinch,#bsWebfraction,#bsFlangeinch,#bsFlangefraction").val("0").trigger("change"); 
	                     $("#checkboxBoltdetails").prop('checked',false).trigger("change"); 
	                     removeRedBoarder();
		    	            if($('#baseplateCP').val()=='Column' && $('#baseplateBC').val()=='Base Plate') { 
		    	                 $("#baseplateAnchorDetails").show(); 
		    	                 $("#edgeDistanceweb,#edgeDistanceflange").val(EDistandanceGP).trigger("change"); 
		    	 		         $("#btocSBoltDetails").hide();
		    	                 $("#btocSWeldDetails").hide();
		    	                 $(".btocSWeldDetails,.btocSBoltDetails").val("").trigger("change"); 
		    	                 $("#checkboxdetail").hide();
		    	                 $("#checkboxdetail").prop('checked',false);
		    	                 $("#numberofrowsshow").show(); 
		    	                 $("#inch,#fraction").val("0").trigger("change"); 
		    	                 $("#btocSWeldDetails").show();  		
		    	                 $("#anchorrodtype").val(AnchorRodTypeGP).trigger("change"); 
		    	        	     $("#anchorrodgrade").val(AnchorRodGradeGP).trigger("change");  
		    	        	      $("#wtWeb,#wtFlange").val(WeldTypeDefaultValue).trigger("change"); 
		    	        	     $("#wsWeb,#wsFlange").val(weldSizeGP).trigger("change");  
		    	        	   
		    	               
		    				}else  if($('#baseplateCP').val()=='Column' && $('#baseplateBC').val()=='Cap Plate') { 
		    					   $(".baseplateAnchorDetails").val("").trigger("change"); 
			    	               $("#baseplateAnchorDetails,#btocSBoltDetails,#numberofrowsshow").hide(); 
			    	               $("#checkboxdetail").show(); 
			    	               $("#checkBoltdetails").prop('checked',false);
			    	               $("#btocSWeldDetails").show();  		    	               
			    	               getWelddetails();
			    	               $("#wsWeb,#wsFlange").val(weldSizeGP).trigger("change"); 
			    	            
		    				}
		    	            
		    	            else {  
		    	            	if ($('#baseplateBC').val()&&$('#baseplateCP').val()) {
								 $(".baseplateAnchorDetails").val("").trigger("change"); 
		    	                 $("#baseplateAnchorDetails,#checkboxdetail").hide(); 
		    	             
		    	                 $("#checkboxBoltdetails").prop('checked',false).trigger("change"); 
		    	                 $("#btocSWeldDetails").show(); 
		    	                 $("#btocSBoltDetails,#numberofrowsshow").show();
		    	                 $("#edgeDistanceweb,#edgeDistanceflange").val(EDistandanceGP).trigger("change");
		    	                  getWelddetails();
		    	                  getboltdetails();
		    	            	}else{
		    	            		 $("#numberofrowsshow,#checkboxdetail,#checkboxdetail,#btocSBoltDetails,#btocSWeldDetails,#baseplateAnchorDetails").hide(); 
		    	            		 $(".baseplateAnchorDetails,#noofboltrw1,#noofboltrw2,#ddlcjp").val("").trigger("change"); 
		    	            		  $("#checkboxBoltdetails").prop('checked',false).trigger("change"); 
		    	            	}
		    				 
		    	            }   
		    	            removeRedBoarder();
		    	        });
	                 
	                 
	                 $("#baseplateCP").change( function(){
	                	  $("#columnprofile,#PostProfile").val("").trigger("change"); 
	                	 
			              if($('#baseplateCP').val()=='Post'){ 
			            	$('#postprofiledv').show();
			            	$('#columnprofiledv').hide();
			            	
			              }else {
			            	  $('#postprofiledv').hide();
			            	  $('#columnprofiledv').show();
						}
			              });
	                 
	               
		    	    
		    	   
		    	    $("#checkboxBoltdetails").change( function(){
		    	    	  $("#noofboltrw1,#noofboltrw2,#ddlcjp").val("").trigger("change"); 
		                	 
 
		    	    	 if ($('#checkboxBoltdetails').prop('checked')) {
		    	    		   $("#btocSBoltDetails,#numberofrowsshow").show();
		    	    		   $("#edgeDistanceweb,#edgeDistanceflange").val(EDistandanceGP).trigger("change"); 
		    	    		   getboltdetails();
						} else {
							   $("#edgeDistanceweb,#edgeDistanceflange").val('').trigger("change"); 
			    	    		 $("#btocSBoltDetails,#numberofrowsshow").hide();
							   $(".btocSBoltDetails,#bsFlangeLength,#bsWebLength").val("").trigger("change"); 
							   
							   $("#bsWebinch,#bsWebfraction,#bsFlangeinch,#bsFlangefraction").val("0").trigger("change"); 
						}
		    	    });	 
		    	  
		    	 
		    	    
		    	    
		    	    $("#recall").click(function(){
		    	  	  var rowCount = $('#table tr').length;
						
						if (rowCount > 1) {
		    	        $row=$('#table tr:last');
		    	    	
		    	        $('.select2-container--default .select2-selection--single').css("border-color","");
		    	        $(".right").show();
		    	        $(".left").hide();
		    	        $(".memtype-rightedit").show();
		    	    	$(".editmemtype .rightFloat").show(); 
		    	    	 connectionmarkedit=$row.find("td:nth-child(3)").text();
		    			  $("#conmark").val("");
		    			  $("#baseplateCP").val($row.find("td:nth-child(4)").text()).trigger("change");
		    			  $("#baseplateBC").val($row.find("td:nth-child(5)").text()).trigger("change");
		    	          $("#platethickness").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
		    	          if ($row.find("td:nth-child(4)").text()=="Column") {
		    	  	        
		    	              $("#columnprofile").val($row.find("td:nth-child(6)").text()).trigger("change");
		    		        	
		    				}else {
		    				
		    					 $("#PostProfile").val($row.find("td:nth-child(6)").text()).trigger("change");
		    					
		    				}
		    	          if($row.find("td:nth-child(4)").text()=='Column' && $row.find("td:nth-child(5)").text()=='Cap Plate') { 
		    				  $("#checkboxdetail").show(); 
		    	          }
		    	          if ($row.find("td:nth-child(8)").text()) {
		    	        	  $("#checkboxBoltdetails").prop('checked',true).trigger("change");  
		    	              
		    			}
		    	          $("#boltgrade").val($row.find("td:nth-child(8)").text()).trigger("change");
		    	          $("#boltdia").val($row.find("td:nth-child(9)").find('input').val()).trigger("change");
		    	          $("#anchorrodtype").val($row.find("td:nth-child(10)").text()).trigger("change");
		    	          $("#anchorrodgrade").val($row.find("td:nth-child(11)").text()).trigger("change");
		    	          $("#anchorroddia").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
		    	          $("#anchorrodlength").val($row.find("td:nth-child(13)").find('.lengH').val()).trigger("change");
		    	          $("#inch").val($row.find("td:nth-child(13)").find('.inchH').val()).trigger("change");   
		    	          $("#fraction").val($row.find("td:nth-child(13)").find('.fracH').val()).trigger("change");   

		    	          $("#holedia").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
		    	          $("#noofboltrw1").val($row.find("td:nth-child(15)").text()).trigger("change");
		    	          
		    	          $("#bsWebLength").val($row.find("td:nth-child(16)").find('.lengH').val()).trigger("change");
		    	          $("#bsWebinch").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
		    	          $("#bsWebfraction").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change");   
		    	 
		    	          $("#noofboltrw2").val($row.find("td:nth-child(17)").text()).trigger("change");
		    	          
		    	          $("#bsFlangeLength").val($row.find("td:nth-child(18)").find('.lengH').val()).trigger("change");
		    	          $("#bsFlangeinch").val($row.find("td:nth-child(18)").find('.inchH').val()).trigger("change");   
		    	          $("#bsFlangefraction").val($row.find("td:nth-child(18)").find('.fracH').val()).trigger("change");   

		    	          
		    	          
		    	          $("#edgeDistanceweb").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");
		    	          $("#edgeDistanceflange").val($row.find("td:nth-child(20)").find('input').val()).trigger("change");
		    	          
		    	         $("#wtWeb").val($row.find("td:nth-child(21)").text()).trigger("change");
		    	          $("#wsWeb").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");
		    			
		    	          $("#wtFlange").val($row.find("td:nth-child(23)").text()).trigger("change");
		    	          $("#wsFlange").val($row.find("td:nth-child(24)").find('input').val()).trigger("change");
		    				
						}      
		    			
		    	});
		    	    
		    	   function  getboltdetails(){
		    	    	   $("#boltgrade").val(BoGrGp).trigger("change");  
		    	    	   $("#boltdia").val(BoltDiaGP).trigger("change");  
		    	    	   $("#boltspc1,#boltspc2").val(BspacingGP).trigger("change");  
		    	    	   $("#edgedistance").val(EDistandanceGP).trigger("change");  
		    	    	   $("#boltgage").val(GageGP).trigger("change");  
		    	    	   
		    	     }

		    	    function  getWelddetails(){
		    	    	 $("#ddlcjp").val(WeldTypeDefaultValue);
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
		    	    	
		    	    	
		    	    	$("#wtWeb").change(function() {  
				    	    if ( $("#wtWeb").val()=="CJP") {
				    	    	   $("#wsWeb").val("").trigger("change"); 
				    	    	   $("#wsWeb").attr("disabled", true);
				    	    	   $("#wsWeb").prop('required',false);
				    	    	}else {
				    	    		  $("#wsWeb").attr("disabled", false);
				    	    		  $("#wsWeb").prop('required',true);
				    	    	}

				    	    	});	
		    	    	

		    	    	$("#wtFlange").change(function() {  
				    	    if ( $("#wtFlange").val()=="CJP") {
				    	    	   $("#wsFlange").val("").trigger("change"); 
				    	    	   $("#wsFlange").attr("disabled", true);
				    	    	   $("#wsFlange").prop('required',false);
				    	    	   $('#wsFlangeDIV .select2-container--default .select2-selection--single').css("border-color","");
				    			 	
				    	    	}else {
				    	    		  $("#wsFlange").attr("disabled", false);
				    	    		  $("#wsFlange").prop('required',true);
				    	    	}

				    	    	});	
		    	    	
		    	    	
		    	    	
		    	    	  $(".add,.anv-btn").on('click', function(){
				      		$(".form-control,.select2").val("").trigger("change"); 
				      	     $("#platethickness,#websplicePT,#flangesplicePT").val(MinPTFromGP).trigger("change"); 
				      		 $("#checkboxdetail,#checkboxdetail,#btocSBoltDetails,#btocSWeldDetails,#baseplateAnchorDetails").hide(); 
				      		$('#formBeamToColumnClipAngle').removeClass('submitted');
				      		 listvalues = [];
				      		 $(".contxt").each(function(){			
				  				listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
				  				
				  			}); 
				      		 $('#profileDIV .select2-container--default .select2-selection--single').css("border-color","");
							 $('#platethicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
				    		 
		    	    	  }); 	 
		    	    	  
		    	    	  
		     if (Page && Page.length !== 0) {
		    	   $("#add-new-value").hide();
		    	   $(".memtype-table").show();
		    	   $.each(Page, function(key,value) {
		    	    	 	     		

					    var profilebeam = value[BeamProfileouter];
						var profilecolumn = value[ColumnProfileouter];
						var WebBoltRows = value[NoofBoltRowsinWebInOuter];
						var FlangeBoltRows = value[NoofBoltRowsinFlangeInOuter];
						
						var EdgeDistancewebVal = value["EdgeDistanceweb"];
						
						var EdgeDistanceflageVal= value["EdgeDistanceflange"];
						
						
						var AnchorRodDiadetail = value[AnchorRodDiaouter];
						var BSWeb = value[BoltSpacingWebInOuter];
						var BSFlange = value[BoltSpacingFlangeInOuter];
						var HoleDiadd = value[HoleDiaOuter];
						var WebBoltRows = value[NoofBoltRowsinWebInOuter];
						var FlangeBoltRows = value[NoofBoltRowsinFlangeInOuter];
						  var Alenght=value[AnchorRodLengthDetails];
						
						var WebWeldDetailsVal = value["WebWeldDetails"];
						
						var FlangeWeldDetailsVal = value["flangeWeldDetails"];
						
						var BSFlangelenght   = "";
						
						if (BSFlange[Length]) {
							BSFlangelenght = feetInchFormater(BSFlange[Length],
									BSFlange[Length_in], BSFlange[Length_fr_fra]);
						}
						
						

						var BSWeblenght  = "";
						
						

						if (BSWeb[Length]) {
							BSWeblenght = feetInchFormater(BSWeb[Length],
									BSWeb[Length_in], BSWeb[Length_fr_fra]);
						}
						
						
						
						
						 var ARodlenght = "";
						
						if (Alenght[Length]) {
							ARodlenght = feetInchFormater(Alenght[Length],
									Alenght[Length_in], Alenght[Length_fr_fra]);
						}
						
						
						
						
						var profilesel = "";
						if (profilebeam[BeamProfile]) {
							profilesel = profilebeam[BeamProfile]
						} else {
							profilesel = profilecolumn[ColumnProfileKeyN]
						}
		    	    			    	
		    	    		       $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+value[ColumnorPost]+'</td><td>'+value[Base_CapPlateKeyN]+'</td><td>'+profilesel+'</td><td>'+getformateforrepresentation(value[PlateThickness_fra])+'<input type="hidden" value='+value[PlateThickness]+'></td><td>'+value[BoltGrade]+'</td><td>'+getformateforrepresentation(value[BoltDia_fra])+'<input type="hidden" value='+value[BoltDia]+'></td><td>'+value[AnchorRodTypeKeyN]+'</td><td>'+value[AnchorRodGradeKeyN]+'</td><td>'+getformateforrepresentation(AnchorRodDiadetail[AnchorRodDiafraction])+'<input type="hidden" value='+AnchorRodDiadetail[AnchorRodDiadecimal]+'></td><td>'+ARodlenght+'<input type="hidden" class="inchH"  value='+Alenght[Length_in]+'><input type="hidden" class="lengH"  value='+Alenght[Length]+'><input type="hidden" class="fracH"  value='+Alenght[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+Alenght[Length_fr_fra]+ '" /></td><td>'+getformateforrepresentation(HoleDiadd[HoleDiafraction])+'<input type="hidden" value='+HoleDiadd[HoleDiadecimal]+'></td><td>'+WebBoltRows[BoltRows]+'</td><td>'+BSWeblenght+'<input type="hidden" class="inchH"  value='+BSWeb[Length_in]+'><input type="hidden" class="lengH"  value='+BSWeb[Length]+'><input type="hidden" class="fracH"  value='+BSWeb[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+BSWeb[Length_fr_fra]+ '" /></td><td>'+FlangeBoltRows[BoltRows]+'</td><td>'+BSFlangelenght+'<input type="hidden" class="inchH"  value='+BSFlange[Length_in]+'><input type="hidden" class="lengH"  value='+BSFlange[Length]+'><input type="hidden" class="fracH"  value='+BSFlange[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+BSFlange[Length_fr_fra]+ '" /></td><td>'+getformateforrepresentation(EdgeDistancewebVal[EdgeDistance_fra])+'<input type="hidden" value='+EdgeDistancewebVal[EdgeDistance]+'></td><td>'+getformateforrepresentation(EdgeDistanceflageVal[EdgeDistance_fra])+'<input type="hidden" value='+EdgeDistanceflageVal[EdgeDistance]+'></td><td>'+WebWeldDetailsVal[WeldType]+'</td><td>'+getformateforrepresentation(WebWeldDetailsVal[WeldSize_fra])+'<input type="hidden" value='+WebWeldDetailsVal[WeldSize]+'></td><td>'+FlangeWeldDetailsVal[WeldType]+'</td><td>'+getformateforrepresentation(FlangeWeldDetailsVal[WeldSize_fra])+'<input type="hidden" value='+FlangeWeldDetailsVal[WeldSize]+'></td></tr>');
		    	    	 		         		
		    	    	  	  
		    	    	 	     	  });
		    	    	 	     }
		    	    	 		
		    	    	 	
		    	    	 	
		    	    	 	$("#anchorrodtype option[value='Adhesive']").remove();
		    	    	 	$("#anchorrodtype option[value='Expansion']").remove();
		    	    	 	
		    	    	 	
		    	    	 	
		    	    	 	  function addconnectionmark() {
		    	    				
		    	    			  connectionmarkvalues=[];
		    	    			  connectionjson=connectionmarkToJSON('table') ;
		    	    			  
		    	    			  connectionmarkvalues.push($('#conmark').val());
		    	    			  
		    	    			 
		    	    			  
		    	    			  
		    	    			 
		    	    			$.ajax({
		    	    		 		   type : 'POST',
		    	    		 	          url: "/bimspring/saveConnectionMarks",	          
		    	    		 	          data : {connectiongrouptype:"BasePlate",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
		    	    		 	        		  
		    	    		 	        	 $(".add-new-value").hide();
		    	    		 	   	         $(".memtype-table").show();
		    	    		 	   	         $(".left").show();
		    	    		 	   	         $(".editmemtype .rightFloat").hide();
		    	    		 	   	         listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
		    	    		 	   	         
		    	    		 	   	         var boltdia= $("#boltdia option:selected").text()+ '"';       
		    	    		 	   	         var weldsize= $("#thisdisable option:selected").text()+ '"';
		    	    		 	   	         var edgedistance=$("#edgedistance option:selected").text()+ '"';
		    	    		 	   	         
		    	    		 	   	         
		    	    		 	   	         
		    	    		 	   	     var edgeDistanceflange=$("#edgeDistanceflange option:selected").text()+ '"';
		    	    		 	   	        
		    	    		 	   	        var edgeDistanceweb=$("#edgeDistanceweb option:selected").text()+ '"';
		    	    		 	   	         
		    	    		 	   	      if (!$("#edgeDistanceweb").val()) {
			    	    		 	   		edgeDistanceweb="";
		    	    		 	               }
	    	    		 	   	     
	    	    		 	   	           if (!$("#edgeDistanceflange").val()) {
	    	    		 	   		         edgeDistanceflange="";
	    	    		 	                }
		    	    		 	   	     
		    	    		 	   	         var Profile="";
		    	    		 	   	         var boltspc2=$("#boltspc2 option:selected").text()+ '"';
		    	    		 	   	         var AnchorRodlength=feetInchFormater($('#anchorrodlength').val(),$('#inch').val(),$("#fraction option:selected").text());
		    	    		 	   	        
		    	    		 	   	         var bsFlangeLength=feetInchFormater($('#bsFlangeLength').val(),$('#bsFlangeinch').val(),$("#bsFlangefraction option:selected").text());
		    	    		 	   	         
		    	    		 	   	         var bsWebLength=feetInchFormater($('#bsWebLength').val(),$('#bsWebinch').val(),$("#bsWebfraction option:selected").text());
		    	    		 	   	     
		    	    		 	   	         
		    	    		 	   	     if (!$("#bsFlangeLength").val()) {
		    	    		 	   	    	bsFlangeLength="";
	    	    		 	               }
		    	    		 	   	         
		    	    		 	   	         
		    	    		 	   	         if ($('#baseplateCP').val()=="Column") {
		    	    		 	   	        	 Profile= $('#columnprofile').val();
		    	    		 	   			}else {
		    	    		 	   				Profile= $('#PostProfile').val();
		    	    		 	   			}
		    	    		 	   	         
		    	    		 	   	         if (!$("#anchorrodlength").val()) {
		    	    		 	   	        	 AnchorRodlength="";
		    	    		 	               }
		    	    		 	   	         
		    	    		 	   	         var holedia= $("#holedia option:selected").text()+ '"';   
		    	    		 	   	         if (!$("#holedia").val()) {
		    	    		 	   	        	 holedia="";
		    	    		 	               }
		    	    		 	   	         var anchordia= $("#anchorroddia option:selected").text()+ '"';	   
		    	    		 	   	         if (!$("#anchorroddia").val()) {
		    	    		 	   	        	 anchordia="";
		    	    		 	               }
		    	    		 	   	    
		    	    		 	   	         var PlateThickness=  $("#platethickness option:selected").text()+ '"';
		    	    		 	   	         if (!$("#platethickness").val()) {
		    	    		 	   	        	 PlateThickness="";
		    	    		 	               }
		    	    		 	   	         
		    	    		 	   	         if (!$("#boltspc2").val()) {
		    	    		 	   	        	 boltspc2="";
		    	    		 	   			}
		    	    		 	   	         var boltspc1=$("#boltspc1 option:selected").text()+ '"';
		    	    		 	   	         
		    	    		 	   	         if (!$("#boltspc1").val()) {
		    	    		 	   	        	 boltspc1="";
		    	    		 	   			}
		    	    		 	   			 if (!$("#boltdia").val()) {
		    	    		 	   	        	 boltdia="";
		    	    		 	   			}
		    	    		 	   			var wsWeb=$("#wsWeb option:selected").text()+ '"';
		    	    		 	   			
		    	    		 	   		    if (!$("#wsWeb").val()) {
		    	    		 	   			wsWeb="";
	    	    		 	   			    }
		    	    		 	   			
		    	    		 	   			
		    	    		 	   		    var wsFlange=$("#wsFlange option:selected").text()+ '"';
	    	    		 	   			
	    	    		 	   		        if (!$("#wsFlange").val()) {
	    	    		 	   		          wsFlange="";
    	    		 	   			         }
		    	    		 	   		    
		    	    		 	   		    
		    	    		 	   			
		    	    		 	   	         
		    	    		 	   			 if (!$("#thisdisable").val()) {
		    	    		 	   	        	 weldsize="";
		    	    		 	   			}
		    	    		 	   	         if (!$("#edgedistance").val()) {
		    	    		 	   	        	 edgedistance="";
		    	    		 	   			}
		    	    		 	   	      
		    	    		 	   	         $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox"  name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#baseplateCP').val()+'</td><td>'+$('#baseplateBC').val()+'</td><td>'+Profile+'</td><td>'+PlateThickness+'<input type="hidden" value='+$('#platethickness').val()+'></td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#anchorrodtype').val()+'</td><td>'+$('#anchorrodgrade').val()+'</td><td>'+anchordia+'<input type="hidden" value='+$('#anchorroddia').val()+'></td><td>'+AnchorRodlength+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#anchorrodlength').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction option:selected').text()+ '" /></td><td>'+holedia+'<input type="hidden" value='+$('#holedia').val()+'></td><td>'+$('#noofboltrw1').val()+'</td><td>'+bsWebLength+'<input type="hidden" class="inchH"  value='+$('#bsWebinch').val()+'><input type="hidden" class="lengH"  value='+$('#bsWebLength').val()+'><input type="hidden" class="fracH"  value='+$('#bsWebfraction').val()+'><input type="hidden" class="fracHFrac" value="'+$('#bsWebfraction option:selected').text()+ '" /></td><td>'+$('#noofboltrw2').val()+'</td><td>'+bsFlangeLength+'<input type="hidden" class="inchH"  value='+$('#bsFlangeinch').val()+'><input type="hidden" class="lengH"  value='+$('#bsFlangeLength').val()+'><input type="hidden" class="fracH"  value='+$('#bsFlangefraction').val()+'><input type="hidden" class="fracHFrac" value="'+$('#bsFlangefraction option:selected').text()+ '" /></td><td>'+edgeDistanceweb+'<input type="hidden" value='+$('#edgeDistanceweb').val()+'></td><td>'+edgeDistanceflange+'<input type="hidden" value='+$('#edgeDistanceflange').val()+'></td><td>'+$('#wtWeb').val()+'</td><td>'+wsWeb+'<input type="hidden" value='+$('#wsWeb').val()+'></td><td>'+$('#wtFlange').val()+'</td><td>'+wsFlange+'<input type="hidden" value='+$('#wsFlange').val()+'></td></tr>');
		    	    		 	   	         
		    	    		 	   	         addorupdate();
		    	    		 	   	         showalertSuccess('Added successfully');
		    	    		 	        		  
		    	    		 	        	  }
		    	    		 	        	  
		    	    		 	          },error: function (error) {
											if(error.status == 401){
												window.location.href = 'logout';
											}else{
												window.location='dashboard';
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
		 	          data : {connectiongrouptype:"BasePlate",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
							           data : {connectiongrouptype:"BasePlate",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
								       
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
								window.location='dashboard';
							}
				          }
				          }); 
				 
				}
		   
		      	    	 	
	 	


	        $("#btnDeleteRows").click(function() {
		       connectionmarkvalues = [];
		       connectionmarkToJSON('table');
		       deleteconnectionmarks("BasePlate")

	         });    	   	 	 	
		 	
		    	    	 	
		    	    	 	
		    function finalupdate(){
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
							
							 $(".add-new-value").hide();
    		 	   	         $(".memtype-table").show();
    		 	   	         $(".left").show();
    		 	   	         $(".editmemtype .rightFloat").hide();
    		 	   	         listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
    		 	   	         
    		 	   	             
    		 	   	         
    		 	   	     var boltdia= $("#boltdia option:selected").text()+ '"';       
		 	   	         var weldsize= $("#thisdisable option:selected").text()+ '"';
		 	   	         var edgedistance=$("#edgedistance option:selected").text()+ '"';
		 	   	         var edgeDistanceflange=$("#edgeDistanceflange option:selected").text()+ '"';
		 	   	         var edgeDistanceweb=$("#edgeDistanceweb option:selected").text()+ '"';
		 	   	         
		 	   	           if (!$("#edgeDistanceweb").val()) {
    		 	   		   edgeDistanceweb="";
		 	               }
	 	   	     
					 	   	if (!$("#edgeDistanceflange").val()) {
					 	   		edgeDistanceflange="";
					 	               }
		 	   	     
		 	   	         var Profile="";
		 	   	         var boltspc2=$("#boltspc2 option:selected").text()+ '"';
		 	   	         var AnchorRodlength=feetInchFormater($('#anchorrodlength').val(),$('#inch').val(),$("#fraction option:selected").text());
		 	   	         var bsFlangeLength=feetInchFormater($('#bsFlangeLength').val(),$('#bsFlangeinch').val(),$("#bsFlangefraction option:selected").text());
		 	   	         var bsWebLength=feetInchFormater($('#bsWebLength').val(),$('#bsWebinch').val(),$("#bsWebfraction option:selected").text());
		 	   	     
		 	   	         
		 	   	     if (!$("#bsFlangeLength").val()) {
		 	   	    	bsFlangeLength="";
	 	               }
		 	     	 if (!$("#bsWebLength").val()) {
	 	   		        bsWebLength="";
 	                  }
		 	   	         
		 	   	         if ($('#baseplateCP').val()=="Column") {
		 	   	        	 Profile= $('#columnprofile').val();
		 	   			}else {
		 	   				Profile= $('#PostProfile').val();
		 	   			}
		 	   	         
		 	   	         if (!$("#anchorrodlength").val()) {
		 	   	        	 AnchorRodlength="";
		 	               }
		 	   	         
		 	   	         var holedia= $("#holedia option:selected").text()+ '"';   
		 	   	         if (!$("#holedia").val()) {
		 	   	        	 holedia="";
		 	               }
		 	   	         var anchordia= $("#anchorroddia option:selected").text()+ '"';	   
		 	   	         if (!$("#anchorroddia").val()) {
		 	   	        	 anchordia="";
		 	               }
		 	   	    
		 	   	         var PlateThickness=  $("#platethickness option:selected").text()+ '"';
		 	   	         if (!$("#platethickness").val()) {
		 	   	        	 PlateThickness="";
		 	               }
		 	   	         
		 	   	         if (!$("#boltspc2").val()) {
		 	   	        	 boltspc2="";
		 	   			}
		 	   	         var boltspc1=$("#boltspc1 option:selected").text()+ '"';
		 	   	         
		 	   	         if (!$("#boltspc1").val()) {
		 	   	        	 boltspc1="";
		 	   			}
		 	   			 if (!$("#boltdia").val()) {
		 	   	        	 boltdia="";
		 	   			}
		 	   			var wsWeb=$("#wsWeb option:selected").text()+ '"';
		 	   			
		 	   		    if (!$("#wsWeb").val()) {
		 	   			wsWeb="";
	 	   			    }
		 	   			
		 	   			
		 	   		    var wsFlange=$("#wsFlange option:selected").text()+ '"';
	 	   			
	 	   		        if (!$("#wsFlange").val()) {
	 	   		          wsFlange="";
 	   			         }
		 	   		    
		 	   		    
		 	   			
		 	   	         
		 	   			 if (!$("#thisdisable").val()) {
		 	   	        	 weldsize="";
		 	   			}
		 	   	         if (!$("#edgedistance").val()) {
		 	   	        	 edgedistance="";
		 	   			}
    		 	   	      
    		 	   	     $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" checked  name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#baseplateCP').val()+'</td><td>'+$('#baseplateBC').val()+'</td><td>'+Profile+'</td><td>'+PlateThickness+'<input type="hidden" value='+$('#platethickness').val()+'></td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#anchorrodtype').val()+'</td><td>'+$('#anchorrodgrade').val()+'</td><td>'+anchordia+'<input type="hidden" value='+$('#anchorroddia').val()+'></td><td>'+AnchorRodlength+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#anchorrodlength').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction option:selected').text()+ '" /></td><td>'+holedia+'<input type="hidden" value='+$('#holedia').val()+'></td><td>'+$('#noofboltrw1').val()+'</td><td>'+bsWebLength+'<input type="hidden" class="inchH"  value='+$('#bsWebinch').val()+'><input type="hidden" class="lengH"  value='+$('#bsWebLength').val()+'><input type="hidden" class="fracH"  value='+$('#bsWebfraction').val()+'><input type="hidden" class="fracHFrac" value="'+$('#bsWebfraction option:selected').text()+ '" /></td><td>'+$('#noofboltrw2').val()+'</td><td>'+bsFlangeLength+'<input type="hidden" class="inchH"  value='+$('#bsFlangeinch').val()+'><input type="hidden" class="lengH"  value='+$('#bsFlangeLength').val()+'><input type="hidden" class="fracH"  value='+$('#bsFlangefraction').val()+'><input type="hidden" class="fracHFrac" value="'+$('#bsFlangefraction option:selected').text()+ '" /></td><td>'+edgeDistanceweb+'<input type="hidden" value='+$('#edgeDistanceweb').val()+'></td><td>'+edgeDistanceflange+'<input type="hidden" value='+$('#edgeDistanceflange').val()+'></td><td>'+$('#wtWeb').val()+'</td><td>'+wsWeb+'<input type="hidden" value='+$('#wsWeb').val()+'></td><td>'+$('#wtFlange').val()+'</td><td>'+wsFlange+'<input type="hidden" value='+$('#wsFlange').val()+'></td>');
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

	
		    
		    
			$("#platethickness").change( function(){
				if (!$('#platethickness').val()) {
					$('#platethicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#platethicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
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
			$("#edgedistance").change( function(){
				if (!$('#edgedistance').val()) {
					$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});  
			$("#holedia").change( function(){
				if (!$('#holedia').val()) {
					$('#holediaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#holediaDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});  

			$("#anchorrodtype").change( function(){
				if (!$('#anchorrodtype').val()) {
					$('#anchorrodtypeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#anchorrodtypeDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});  

			$("#anchorrodgrade").change( function(){
				if (!$('#anchorrodgrade').val()) {
					$('#anchorrodgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#anchorrodgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});  

			
			$("#anchorroddia").change( function(){
				if (!$('#anchorroddia').val()) {
					$('#anchorroddiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#anchorroddiaDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});  


			$("#edgeDistanceweb").change( function(){
				if (!$('#edgeDistanceweb').val()) {
					$('#edgeDistancewebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#edgeDistancewebDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});  

			$("#edgeDistanceflange").change( function(){
				if (!$('#edgeDistanceflange').val()) {
					$('#edgeDistanceflangeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#edgeDistanceflangeDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});    
			$("#wsWeb").change( function(){
				if (!$('#wsWeb').val()) {
					$('#wsWebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#wsWebDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});        
				
			
			$("#wsFlange").change( function(){
				if (!$('#wsFlange').val()) {
					$('#wsFlangeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#wsFlangeDIV .select2-container--default .select2-selection--single').css("border-color","");
				}
			});     
			$("#columnprofile").change( function(){
				if (!$('#columnprofile').val()) {
					$('#columnprofiledv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				  }else {
					  $('#columnprofiledv .select2-container--default .select2-selection--single').css("border-color","");
				}
			}); 
			
			
				  
					    	    	 	
		 function removeRedBoarder() {
			 $('#profileDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#platethicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
		     $('#holediaDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#anchorrodtypeDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#anchorrodgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#anchorroddiaDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#edgeDistancewebDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#edgeDistanceflangeDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#wsWebDIV .select2-container--default .select2-selection--single').css("border-color","");
			 $('#wsFlangeDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}   	    	 	
		    	    	 	