
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
    

    var connectionmarkedit="";
    
    
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
    
 
function validateForm() {

	
	if (!$('#beamprofile').val()) {
		$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}
	
	
	if (!$('#clipanglesz').val()) {
		$('#clipangleszDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
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
	
	if (!$('#ddlcjp').val()) {
		$('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}
	
	if (!$('#thisdisable').val()) {
		$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}
	
	
	
	$('#formBeamToColumnClipAngle').addClass('submitted');
	
	var validated = true;
	
	
	/* checking for required filed */
	$('#formBeamToColumnClipAngle').find(':input').each(function(){   
		
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
	
		var Lenght = $("#cpanglelen").val();
    	var Inch = $("#inch").find("option:selected").text();
    	var Fraction = $("#fraction").find("option:selected").text();
	
		validated = validateLength(Lenght,Inch,Fraction,"Length");
	}
	
	
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
        listvalues = [];
 
    });
  

  
  
  function addorupdate() {
	  
	  
	  var connectionjson=	tableToJSON('table') ;
		$.ajax({
 		   type : 'POST',
 	          url: "/bimspring/saveConnectionsDetails",	          
 	          data : {connectiongrouptype:"BeamToEmbedClipAngle",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
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
		     var Bprofile=value["BeamProfile"];	
			 var CASize=value["ClipAngleSize"];	
			 var cpanglelenDD=feetInchFormater(value[ClipAngleLength],value[ClipAngleLength_in],value[ClipAngleLength_fr_fra]);
	         
			  if (!value[ClipAngleLength]) {
				  cpanglelenDD="";

				}
			
			 var ClipAngleOSLDD='';
			 try {
				 ClipAngleOSLDD=value['ClipAngleOSL'];
				
			} catch (e) {
				
			}
			 
			 $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+Bprofile[BeamProfile]+'</td><td>'+CASize[ClipAngleSize]+'</td><td>'+value[SupportedSide]+'</td><td>'+ClipAngleOSLDD+'</td><td>'+value[BoltGrade]+'</td><td>'+getformateforrepresentation(value[BoltDia_fra])+'<input type="hidden" value='+value[BoltDia]+'></td><td>'+value[BoltRows]+'</td><td>'+getformateforrepresentation(value[BoltSpacing_fra])+'<input type="hidden" value='+value[BoltSpacing]+'></td><td>'+getformateforrepresentation(value[EdgeDistance_fra])+'<input type="hidden" value='+value[EdgeDistance]+'></td><td>'+getformateforrepresentation(value[BoltGage_fra])+'<input type="hidden" value='+value[BoltGage]+'></td><td>'+value[WeldType]+'</td><td>'+getformateforrepresentation(value[WeldSize_fra])+'<input type="hidden" value='+value[WeldSize]+'></td><td>'+cpanglelenDD+'<input type="hidden" class="inchH"  value='+value[ClipAngleLength_in]+'><input type="hidden" class="lengH"  value='+value[ClipAngleLength]+'><input type="hidden" class="fracH"  value='+value[ClipAngleLength_fr]+'> <input type="hidden" class="fracHFrac"  value="'+value[ClipAngleLength_fr_fra]+'"></td></tr>');
			 
	
	  
	  });
}


$(".select2").select2();

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
	  connectionmarkedit=$row.find("td:nth-child(3)").text();   

	  $("#conmark").val($row.find("td:nth-child(3)").text());
	  $("#beamprofile").val($row.find("td:nth-child(4)").text()).trigger("change");
	  $("#clipanglesz").val($row.find("td:nth-child(5)").text()).trigger("change");
	  $("#btocClip1").val($row.find("td:nth-child(6)").text()).trigger("change");
	  $("#clipangelOSl").val($row.find("td:nth-child(7)").text()).trigger("change");
	  $("#boltgrade").val($row.find("td:nth-child(8)").text()).trigger("change");
	  $("#boltdia").val($row.find("td:nth-child(9)").find('input').val()).trigger("change");
	  $("#noofboltrw").val($row.find("td:nth-child(10)").text()).trigger("change");
	  $("#boltspc").val($row.find("td:nth-child(11)").find('input').val()).trigger("change");
	  $("#edgedistance").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
	  $("#boltgage").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
	  $("#ddlcjp").val($row.find("td:nth-child(14)").text()).trigger("change");
	  $("#thisdisable").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");   
	  $("#cpanglelen").val($row.find("td:nth-child(16)").find('.lengH').val()).trigger("change");
	  $("#inch").val($row.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
	  $("#fraction").val($row.find("td:nth-child(16)").find('.fracH').val()).trigger("change");   
	 
	}
	
	
});
$("#btocClipAngleLength").hide();   

    $("#btocClip1").change( function(){
    	 $("#ddlcjp").val('');  
        if($('#btocClip1').val()=='Field Bolted'||$('#btocClip1').val()=='Shop Bolted'){ 
            $("#btocBoltDetails").show();
            getboltdetails();
            $("#btocWeldDetails").show();
            getWelddetails();
            $("#btocClipAngleLength").hide();
           
            $(".ClipAngleLength").val('').trigger("change");   
          
        }
        else if($('#btocClip1').val()=='Shop Welded' || $('#btocClip1').val()=='Field Welded'){  
            $("#btocBoltDetails").hide();
            $("#btocWeldDetails").show();
            getWelddetails();
            $("#btocClipAngleLength").show();
            $(".BoltDetails").val('').trigger("change");
            $("#inch,#fraction").val("0").trigger("change"); 
        
        } else{
        	
        	 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
   	      $(".contxt").each(function(){			
   	    		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
   	    		
   	    	});
        }   
        removeRedBoarder();		
    });



$("#recall").click(function(){

    $('#table tr:last').find("td:nth-child(3)").text();
    	
    	var $row2=$('#table tr:last');
   	 $(".right").show();
     $(".left").hide();
     $(".memtype-rightedit").show();
	 $(".editmemtype .rightFloat").show(); 
	 

	   
	 
	  $("#conmark").val();
	  $("#beamprofile").val($row2.find("td:nth-child(4)").text()).trigger("change");
	  $("#clipanglesz").val($row2.find("td:nth-child(5)").text()).trigger("change");
	  $("#btocClip1").val($row2.find("td:nth-child(6)").text()).trigger("change");
	  $("#clipangelOSl").val($row2.find("td:nth-child(7)").text()).trigger("change");
	  $("#boltgrade").val($row2.find("td:nth-child(8)").text()).trigger("change");
	  $("#boltdia").val($row2.find("td:nth-child(9)").find('input').val()).trigger("change");
	  $("#noofboltrw").val($row2.find("td:nth-child(10)").text()).trigger("change");
	  $("#boltspc").val($row2.find("td:nth-child(11)").find('input').val()).trigger("change");
	  $("#edgedistance").val($row2.find("td:nth-child(12)").find('input').val()).trigger("change");
	  $("#boltgage").val($row2.find("td:nth-child(13)").find('input').val()).trigger("change");
	  $("#ddlcjp").val($row2.find("td:nth-child(14)").text()).trigger("change");
	  $("#thisdisable").val($row2.find("td:nth-child(15)").find('input').val()).trigger("change");   
	  $("#cpanglelen").val($row2.find("td:nth-child(16)").find('.lengH').val()).trigger("change");
	  $("#inch").val($row2.find("td:nth-child(16)").find('.inchH').val()).trigger("change");   
	  $("#fraction").val($row2.find("td:nth-child(16)").find('.fracH').val()).trigger("change");   
	 
	 
});






function  getboltdetails(){
	  
	   $("#boltgrade").val(BoGrGp).trigger("change");  
	   $("#boltdia").val(BoltDiaGP).trigger("change");  
	   $("#boltspc").val(BspacingGP).trigger("change");  
	   $("#edgedistance").val(EDistandanceGP).trigger("change");  
	   $("#boltgage").val(GageGP).trigger("change");  
	   
 }

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

	   
	   $(".add,.anv-btn").on('click', function(){
		   $(".form-control,.select2").val("").trigger("change"); 
	      $("#btocBoltDetails,#btocWeldDetails").hide();
	      listvalues = [];
	      $(".contxt").each(function(){			
	    		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
	    		
	    	});
	      $('#formBeamToColumnClipAngle').removeClass('submitted');
	      $('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
		    $('#clipanglesz').val(ClipAngleSizeGp).trigger("change"); 
			$('#clipangleszDIV .select2-container--default .select2-selection--single').css("border-color","");
			removeRedBoarder();		
	   });

	   $(".contxt").each(function(){			
   		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
   		
   	});
	   
	   
	   
	   $("#adddata").on('click', function(){
			if (validateForm() && checkconnectioncodeForuniquiness()) {
				
				addconnectionmark();
		    	
			}

		});

		$("#update").on('click', function(){
			
			  if (validateForm()) {
			if (connectionmarkedit==$("#conmark").val()) {
				 finalupdate();	 
			} else {
				 updateconnectionmark();
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
		 	          data : {connectiongrouptype:"BeamToEmbedClipAngle",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
			 	                var boltdia= $("#boltdia option:selected").text()+ '"';
			 	                var boltgage=  $("#boltgage option:selected").text()+ '"';
			 	                var weldsize= $("#thisdisable option:selected").text()+ '"';
			 	                var edgedistance=$("#edgedistance option:selected").text()+ '"';
			 	                var boltspc=$("#boltspc option:selected").text()+ '"';
			 	                var cpanglelen=feetInchFormater($('#cpanglelen').val(),$('#inch').val(),$("#fraction option:selected").text());
			 	                
			 	                if (!$("#boltdia").val()) {
			 	               	 boltdia="";
			 	       		}
			 	                if (!$("#boltgage").val()) {
			 	               	 boltgage="";
			 	       		}
			 	                if (!$("#thisdisable").val()) {
			 	               	 weldsize="";
			 	       		}
			 	                if (!$("#boltspc").val()) {
			 	               	 boltspc="";
			 	       		}
			 	                if (!$("#edgedistance").val()) {
			 	               	 edgedistance="";
			 	       		}
			 	                if (!$("#cpanglelen").val()) {
			 	               	 cpanglelen="";

			 	       		}
			 	                
			 	           	$("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#clipanglesz').val()+'</td><td>'+$('#btocClip1').val()+'</td><td>'+$('#clipangelOSl').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+boltgage+'<input type="hidden" value='+$('#boltgage').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+cpanglelen+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#fraction option:selected').text()+ '" /></td></tr>');
			 	        
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
		 	          data : {connectiongrouptype:"BeamToEmbedClipAngle",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
							           data : {connectiongrouptype:"BeamToEmbedClipAngle",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
								       
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
deleteconnectionmarks("BeamToEmbedClipAngle")

	   	
	   	
});    	   	 	 	
	 	
	 	
	 	
	 	
function finalupdate(){
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
    		         var boltdia= $("#boltdia option:selected").text()+ '"';
    		         var boltgage=  $("#boltgage option:selected").text()+ '"';
    		         var weldsize= $("#thisdisable option:selected").text()+ '"';
    		         var edgedistance=$("#edgedistance option:selected").text()+ '"';
    		         var boltspc=$("#boltspc option:selected").text()+ '"';
    		         var cpanglelen=feetInchFormater($('#cpanglelen').val(),$('#inch').val(),$("#fraction option:selected").text());
    		         
    		         if (!$("#boltdia").val()) {
    		        	 boltdia="";
    				}
    		         if (!$("#boltgage").val()) {
    		        	 boltgage="";
    				}
    		         if (!$("#thisdisable").val()) {
    		        	 weldsize="";
    				}
    		         if (!$("#boltspc").val()) {
    		        	 boltspc="";
    				}
    		         if (!$("#edgedistance").val()) {
    		        	 edgedistance="";
    				}
    		         if (!$("#cpanglelen").val()) {
    		        	 cpanglelen="";

    				}
    		         
    		         
    		       $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" checked type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#clipanglesz').val()+'</td><td>'+$('#btocClip1').val()+'</td><td>'+$('#clipangelOSl').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+boltgage+'<input type="hidden" value='+$('#boltgage').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+cpanglelen+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'> <input type="hidden" class="fracHFrac"  value="'+$('#fraction option:selected').text()+ '" ></td>');
    			 
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
$("#clipanglesz").change( function(){
	if (!$('#clipanglesz').val()) {
		$('#clipangleszDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#clipangleszDIV .select2-container--default .select2-selection--single').css("border-color","");
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

$("#ddlcjp").change( function(){
	if (!$('#ddlcjp').val()) {
		$('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 
   
	   
$("#thisdisable").change( function(){
	if (!$('#thisdisable').val()) {
		$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 
	   


function removeRedBoarder(){

$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
$('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","");
$('#boltgageDIV .select2-container--default .select2-selection--single').css("border-color","");
$('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
$('#boltspcDIV .select2-container--default .select2-selection--single').css("border-color","");

}
	   