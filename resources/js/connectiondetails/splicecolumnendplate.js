/**
 * 
 */


    $(".Webdetail").hide();
	    
	$(".Flangedetail").hide();


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
    	   $(".right").show();
	        $(".left").hide();
	        $("#adddata").hide();
	        $("#update").show();
	        $(".memtype-rightedit").show();
	        $(".editmemtype .rightFloat").show();  
	        $(".select2,.form-control").val('').trigger("change");  
	        $('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
	        $('#beamprofile2DIV .select2-container--default .select2-selection--single').css("border-color","");

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
    	  

    	
    		  connectionmarkedit=$row.find("td:nth-child(3)").text();

       	  $("#conmark").val($row.find("td:nth-child(3)").text());
       	  $("#beamprofile").val($row.find("td:nth-child(4)").text()).trigger("change");
       	  $("#beamprofile2").val($row.find("td:nth-child(5)").text()).trigger("change");
       	  $("#endplatethickness").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");
       	  $("#ddlcjp").val($row.find("td:nth-child(7)").text()).trigger("change");
       	  $("#thisdisable").val($row.find("td:nth-child(8)").find('input').val()).trigger("change");  
       	
      
    	  
		}
    
    	
    });
  
    /*  
	 $(".anv-btn, .add").on('click', function(){
	        $(".right").show();
	        $(".left").hide();
	        $("#adddata").show();
	        $("#update").hide();
	        $(".memtype-rightedit").show();
	        $(".editmemtype .rightFloat").show();  
	        $(".select2,.form-control").val('').trigger("change");  
	        $('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
	        $('#beamprofile2DIV .select2-container--default .select2-selection--single').css("border-color","");
 
	    });*/
	 
	 
	   
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
	  
	  function validateSelect2Fields(){
		  
		  
		  if (!$('#beamprofile').val()) {
				$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		  
		  if (!$('#beamprofile2').val()) {
				$('#beamprofile2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		  
		  if (!$('#endplatethickness').val()) {
				$('#endplatethicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		  
		  if (!$('#thisdisable').val()) {
				$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
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
		  
		  if (!$('#boltgage').val()) {
				$('#boltgageDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		  
		  
	  }
	 
    
    function validateForm() {

    	validateSelect2Fields();
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
     	          data : {connectiongrouptype:"SpliceColumnusingEndPlate",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
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
       
    

       
        if (Page && Page.length !== 0) {
         	 $("#add-new-value").hide();
             $(".memtype-table").show();
         	  
         	  
         	  $.each(Page, function(key,value) {
         		   var BprofileLeft=value[LeftSideBeamProfileInOuter];	
		    		 var BprofileRight=value[RightSideBeamProfileInOuter];	
		    		  
         		    $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+BprofileLeft[BeamProfile]+'</td><td>'+BprofileRight[BeamProfile]+'</td><td>'+getformateforrepresentation(value[EndPlateThickness_fra])+'<input type="hidden" value='+value[EndPlateThickness]+'></td><td>'+value[WeldType]+'</td><td>'+getformateforrepresentation(value[WeldSize_fra])+'<input type="hidden" value='+value[WeldSize]+'></td></tr>');
         		         			   		     	    
         	  
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
    	
     	  $("#conmark").val();
     	  $("#beamprofile").val($row2.find("td:nth-child(4)").text()).trigger("change");
     	  $("#beamprofile2").val($row2.find("td:nth-child(5)").text()).trigger("change");
     	  $("#endplatethickness").val($row2.find("td:nth-child(6)").find('input').val()).trigger("change");
     	  $("#ddlcjp").val($row2.find("td:nth-child(7)").text()).trigger("change");
     	  $("#thisdisable").val($row2.find("td:nth-child(8)").find('input').val()).trigger("change");  
    	}
  	
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
	        $("#endplatethickness").val(MinPTFromGP).trigger("change"); 
	        listvalues = [];
	        $(".contxt").each(function(){			
	    		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
	    		
	    	});
	        $('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
	        $('#beamprofile2DIV .select2-container--default .select2-selection--single').css("border-color","");
 
	    });
	   
	   
	   
	   
	   
	   
	   function addconnectionmark() {
			
			  connectionmarkvalues=[];
			  connectionjson=connectionmarkToJSON('table') ;
			  
			  connectionmarkvalues.push($('#conmark').val());
			 
				$.ajax({
		 		   type : 'POST',
		 	          url: "/bimspring/saveConnectionMarks",	          
		 	          data : {connectiongrouptype:"SpliceColumnusingEndPlate",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
		 	                
		 	                var weldsize= $("#thisdisable option:selected").text()+ '"';
		 	             	 if (!$("#thisdisable").val()) {
		 	             	        	 weldsize="";
		 	             			}
		 	              
		 	               var endplate=$("#endplatethickness option:selected").text()+ '"';
		 	        	 
		 	        	         if (!$("#endplatethickness").val()) {
		 	        	        	 endplate="";
		 	        			}

		 	            $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#beamprofile2').val()+'</td><td>'+endplate+'<input type="hidden" value='+$('#endplatethickness').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td></tr>');
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
	 	          data : {connectiongrouptype:"SpliceColumnusingEndPlate",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
						           data : {connectiongrouptype:"SpliceColumnusingEndPlate",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
							       
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
deleteconnectionmarks("SpliceColumnusingEndPlate")

	   	
	   	
});    	   	 	 	
	 	
	 	
	 	
	 	
function finalupdate(){


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
          
          var weldsize= $("#thisdisable option:selected").text()+ '"';
       	 if (!$("#thisdisable").val()) {
       	        	 weldsize="";
       			}
        
         var endplate=$("#endplatethickness option:selected").text()+ '"';
  	 
  	         if (!$("#endplatethickness").val()) {
  	        	 endplate="";
  			}

  	       $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" checked name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#beamprofile2').val()+'</td><td>'+endplate+'<input type="hidden" value='+$('#endplatethickness').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td>');
       
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

$("#beamprofile").change( function(){
	if (!$('#beamprofile').val()) {
		$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});	 
$("#beamprofile2").change( function(){
	if (!$('#beamprofile2').val()) {
		$('#beamprofile2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#beamprofile2DIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});	   

$("#endplatethickness").change( function(){
	if (!$('#endplatethickness').val()) {
		$('#endplatethicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#endplatethicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});	   

$("#thisdisable").change( function(){
		if (!$('#thisdisable').val()) {
			$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
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
  

$("#boltgage").change( function(){
	if (!$('#boltgage').val()) {
		$('#boltgageDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgageDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

 
	   
	   
	   
	   
	   
	   
	   	 