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
       	  $("#beamprofile").val($row.find("td:nth-child(4)").text()).trigger("change");
       	  $("#beamprofile2").val($row.find("td:nth-child(5)").text()).trigger("change");
       	  $("#ddlcjp").val($row.find("td:nth-child(6)").text()).trigger("change");
       	  $("#thisdisable").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");  
       	
    	 
    	  
		}
    	addorupdate();
    	
    });
  
    
  

    
	 $(".action-icons .add").on('click', function(){
	        $(".right").show();
	        $(".left").hide();
	        $("#adddata").show();
	        $("#update").hide();
	        $(".memtype-rightedit").show();
	        $(".editmemtype .rightFloat").show();  
	        $(".select2,.form-control").val('').trigger("change");  
	        listvalues = [];
	        $(".contxt").each(function(){			
	    		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
	    		
	    	});
	        $('#formBeamToColumnEndPlate').removeClass('submitted');
  
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

    	
    	$('#formBeamToColumnEndPlate').addClass('submitted');
    	
    	var validated = true;
    	
    	
    	/* checking for required filed */
    	$('#formBeamToColumnEndPlate').find(':input').each(function(){   
    		
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
    
    
	 

    function addorupdate() {
    	  
    	  
    	  var connectionjson=	tableToJSON('table') ;
    		$.ajax({
     		   type : 'POST',
     	          url: "/bimspring/saveConnectionsDetails",	          
     	          data : {connectiongrouptype:"SpliceColumnusingDirectlyWelded",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
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
       
    
 
    
    
    $("#recall").click(function(){

    	var rowCount = $('#table tr').length;
    	
    	if (rowCount > 1) {
    	
    	var $row2=$('#table tr:last');
    	
    	
        $(".right").show();
        $(".left").hide();
        $(".memtype-rightedit").show();
    	$(".editmemtype .rightFloat").show(); 
    	
          $("#conmark").val("");
     	  $("#beamprofile").val($row2.find("td:nth-child(4)").text()).trigger("change");
     	  $("#beamprofile2").val($row2.find("td:nth-child(5)").text()).trigger("change");
     	  $("#ddlcjp").val($row2.find("td:nth-child(6)").text()).trigger("change");
     	  $("#thisdisable").val($row2.find("td:nth-child(7)").find('input').val()).trigger("change");  
     	
    	}
    	
    	});

 
	   $(".add,.add-new-value").on('click', function(){	
			 $("#ddlcjp").val("");  
	         getWelddetails();	       
	    });
	   
	   function  getWelddetails(){
    	   
	    	  
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
	    	
	    	  $(".add,.add-new-value").on('click', function(){
	    		  $(".form-control,.select2").val("").trigger("change"); 
	    		  getWelddetails();
	      	    });
    
	    	 
	    	       
	    	        if (Page && Page.length !== 0) {
	    	         	 $("#add-new-value").hide();
	    	             $(".memtype-table").show();
	    	         	  
	    	         	  
	    	         	  $.each(Page, function(key,value) {
	    	         		   var BprofileLeft=value[LeftSideBeamProfileInOuter];	
	    			    		  var BprofileRight=value[RightSideBeamProfileInOuter];	
	    			    		  
	    	         		    $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+BprofileLeft[BeamProfile]+'</td><td>'+BprofileRight[BeamProfile]+'</td><td>'+value[WeldType]+'</td><td>'+getformateforrepresentation(value[WeldSize_fra])+'<input type="hidden" value='+value[WeldSize]+'></td></tr>');
	    	         		         			   		     	    
	    	         	  
	    	         	  });
	    	         }
	    	        
	    	        
	    	        
	    	        

  	    	 	  function addconnectionmark() {
  	    				
  	    			  connectionmarkvalues=[];
  	    			  connectionjson=connectionmarkToJSON('table') ;
  	    			  
  	    			  connectionmarkvalues.push($('#conmark').val());
  	    			 
  	    				$.ajax({
  	    		 		   type : 'POST',
  	    		 	          url: "/bimspring/saveConnectionMarks",	          
  	    		 	          data : {connectiongrouptype:"SpliceColumnusingDirectlyWelded",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
  	    		 	               var weldsize= $("#thisdisable option:selected").text()+ '"';
  	    		 	            	 if (!$("#thisdisable").val()) {
  	    		 	            	        	 weldsize="";
  	    		 	            			}
  	    		 	          
  	    		 	          $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#beamprofile2').val()+'</td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td></tr>');
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
  	 		 	          data : {connectiongrouptype:"SpliceColumnusingDirectlyWelded",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
  	 							           data : {connectiongrouptype:"SpliceColumnusingDirectlyWelded",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
  	 								       
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
	  deleteconnectionmarks("SpliceColumnusingDirectlyWelded")
	
  	    	   	
  	    	   	
});    	   	 	 	
  	    	 	
  	    	 	
  	    	 	
  	    	 	
  function finalupdate(){
	  

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
	 	        		        var weldsize= $("#thisdisable option:selected").text()+ '"';
	 	        		     	 if (!$("#thisdisable").val()) {
	 	        		     	        	 weldsize="";
	 	        		     			}

	 	        		       $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#beamprofile2').val()+'</td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td>');
	 	        	   
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
 	        
	    	        
	    	        
	    	        
	    	        
	    	    	
	    	    