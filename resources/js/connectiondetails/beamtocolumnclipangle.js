var connectionmarkedit="";




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


function deletedconnectionmarkToJSON(tableID) {
	var tableData = [];
	deleteconnectionmarkvalues=[];
	var table = document.getElementById(tableID);
	var rowCount = document.getElementById(tableID).rows.length;
	for (var i = 1; i < rowCount; i++) {
		if ($(table.rows.item(i).cells[0]).find('input').prop('checked')==true) {
			deleteconnectionmarkvalues.push($(table.rows.item(i).cells[2]).text());
		}
		
	}
	
	return tableData;
}


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
	
	validateSelect2();
	$('#formBeamToColumnClipAngle').addClass('submitted');	
	var validated = true;
	
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



var listvalues = [];




 

  
  
  /* checking for required filed */
  $("#adddata").on('click', function(){
  	
  	if (validateForm() && checkconnectioncodeForuniquiness()) {
  		listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
  		addconnectionmark();
  	
  	}

  });

  
  $("#update").on('click', function(){
	  if (validateForm()&&checkconnectioncodeForuniquiness()) {
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
 	          data : {connectiongrouptype:"BeamToColumnClipAngle",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
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
   

$(".select2").select2();

//delete
$("#delete").click(function(){	
	 deletedconnectionmarkToJSON('table');
	$(".cci-select").each(function(index, Element){
    	
		if($(this).prop('checked')==true){
			$("#deleteModal").show();
		}else{
		     
			if (index==0) {
				showalertInformation('Select Rows for Delete');
			}
		}
	
	});
	
});




$("#btncloseRows").click(function(){	
	 $("#deleteModal").hide();
	
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
	
  
   
 
  $("#conmark").val();

  $("#beamprofile").val($row.find("td:nth-child(4)").text()).trigger("change");
  $("#clipanglesz").val($row.find("td:nth-child(5)").text()).trigger("change");
  $("#btocClip1").val($row.find("td:nth-child(6)").text()).trigger("change");
  $("#btocClip2").val($row.find("td:nth-child(7)").text()).trigger("change");
  $("#clipangelOSl").val($row.find("td:nth-child(8)").text()).trigger("change");
  $("#boltgrade").val($row.find("td:nth-child(9)").text()).trigger("change");
  $("#boltdia").val($row.find("td:nth-child(10)").find('input').val()).trigger("change");
  $("#noofboltrw").val($row.find("td:nth-child(11)").text()).trigger("change");
  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
  $("#edgedistance").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
  $("#boltgage").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
  $("#ddlcjp").val($row.find("td:nth-child(15)").text()).trigger("change");
  $("#wieldsizecp").val($row.find("td:nth-child(16)").find('input').val()).trigger("change");   
  $("#cpanglelen").val($row.find("td:nth-child(17)").find('.lengH').val()).trigger("change");
  $("#inch").val($row.find("td:nth-child(17)").find('.inchH').val()).trigger("change");   
  $("#fraction").val($row.find("td:nth-child(17)").find('.fracH').val()).trigger("change");   
 	
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
	   
	  connectionmarkedit=$row.find("td:nth-child(3)").text();
		 
	  $("#conmark").val($row.find("td:nth-child(3)").text());
	  $("#beamprofile").val($row.find("td:nth-child(4)").text()).trigger("change");
	  $("#clipanglesz").val($row.find("td:nth-child(5)").text()).trigger("change");
	  $("#btocClip1").val($row.find("td:nth-child(6)").text()).trigger("change");
	  $("#btocClip2").val($row.find("td:nth-child(7)").text()).trigger("change");
	  $("#clipangelOSl").val($row.find("td:nth-child(8)").text()).trigger("change");
	  $("#boltgrade").val($row.find("td:nth-child(9)").text()).trigger("change");
	  $("#boltdia").val($row.find("td:nth-child(10)").find('input').val()).trigger("change");
	  $("#noofboltrw").val($row.find("td:nth-child(11)").text()).trigger("change");
	  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
	  $("#edgedistance").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
	  $("#boltgage").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
	  $("#ddlcjp").val($row.find("td:nth-child(15)").text()).trigger("change");
	  $("#wieldsizecp").val($row.find("td:nth-child(16)").find('input').val()).trigger("change");   
	  $("#cpanglelen").val($row.find("td:nth-child(17)").find('.lengH').val()).trigger("change");
	  $("#inch").val($row.find("td:nth-child(17)").find('.inchH').val()).trigger("change");   
	  $("#fraction").val($row.find("td:nth-child(17)").find('.fracH').val()).trigger("change");   
 	 
	}else{
		showalertInformation('Please Select 1 Row For Edit');
	}
	
});

$("#btocClipAngleLength").hide();   

    $("#btocClip1, #btocClip2").change( function(){
    	 $("#ddlcjp").val('');  
        if(($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Shop Welded')){ 
            $("#btocBoltDetails").show();
            $("#btocWeldDetails").show();
            $("#btocClipAngleLength").hide();
            getboltdetails();   
            getWelddetails();
            $(".ClipAngleLength").val('').trigger("change");   
          
        }
        else if($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Field Welded'){  
            $("#btocBoltDetails").show();
            $("#btocWeldDetails").show();
            $("#btocClipAngleLength").hide();
            getboltdetails(); 
            getWelddetails();
          
            $(".ClipAngleLength").val('').trigger("change");   
        
        } 
        else if($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Field Bolted'||($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Shop Bolted')){  
            $("#btocBoltDetails").show();
            getboltdetails();  
            $("#btocWeldDetails").hide();
            $("#btocClipAngleLength").hide();
            $(".ClipAngleLength,.WeldDetails,#ddlcjp").val('').trigger("change");   
        }      
        else if(($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Shop Welded')){ 
            $("#btocBoltDetails").hide(); 
            $("#btocWeldDetails").show();
            getWelddetails();
            $("#btocClipAngleLength").show();
            $(".BoltDetails").val('').trigger("change");   
            $("#inch,#fraction").val("0").trigger("change"); 
        }
        else if($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Field Welded'){ 
            $("#btocBoltDetails").hide(); 
            $("#btocWeldDetails").show();
            getWelddetails();
            $("#btocClipAngleLength").show();
            $(".BoltDetails").val('').trigger("change");  
            $("#inch,#fraction").val('0').trigger("change");  
        } 
        else if(($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Field Bolted')||($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Shop Bolted')){ 
            $("#btocBoltDetails").show(); 
            getboltdetails();  
            $("#btocWeldDetails").show();
            getWelddetails();
            $("#btocClipAngleLength").hide();
            $(".ClipAngleLength").val('').trigger("change");   
        }  else{
        	 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
       }   
        
        $('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
        $('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","");
      
      
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
	   $("#wieldsizecp").val(weldSizeGP).trigger("change"); 
	   if ( $("#ddlcjp").val()=="CJP") {
		   $("#wieldsizecp").val("").trigger("change"); 
		   $("#wieldsizecp").attr("disabled", true);
		   $("#wieldsizecp").prop('required',false);
		   $('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","");
			 
		}else {
			  $("#wieldsizecp").attr("disabled", false);
			  $("#wieldsizecp").prop('required',true);
		}		   
    }
   
	$("#ddlcjp").change(function() {  
   if ( $("#ddlcjp").val()=="CJP") {
	   $("#wieldsizecp").val("").trigger("change"); 
	   $("#wieldsizecp").attr("disabled", true);
	   $("#wieldsizecp").prop('required',false);
	   $('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","");
		
	}else {
		  $("#wieldsizecp").attr("disabled", false);
		  $("#wieldsizecp").prop('required',true);
	}

	});
	
	
	
function getformateforrepresentation(valuesaved){
	 var retval= valuesaved == "" ? "" : valuesaved + '"';
	 return retval;
		
	}

$(".contxt").each(function(){			
	listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
	
});
	


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
	





$(".anv-btn, .add").on('click', function(){
      $(".right").show();
      $(".left").hide();
      $("#adddata").show();
      $("#update").hide();
      $(".memtype-rightedit").show();
      $(".editmemtype .rightFloat").show();  
      $(".BoltDetails,.ClipAngleLength,#conmark,#beamprofile,#clipanglesz,#btocClip1,#btocClip2,.WeldDetails").val('');  
      $('div .select2-container--default .select2-selection--single').css("border-color","");
  
  });


$(".add,.anv-btn").on('click', function(){
	   $(".form-control,.select2").val("").trigger("change"); 
       $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
       listvalues = [];
       $(".contxt").each(function(){			
		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
		
	   });
		$('#formBeamToColumnClipAngle').removeClass('submitted');
		$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
	    $('#clipanglesz').val(ClipAngleSizeGp).trigger("change"); 
		$('#clipangleszDIV .select2-container--default .select2-selection--single').css("border-color","");
		
			
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
	
	
		  $('#conmark').bind("paste",function(e) {
		      e.preventDefault();
		  });

   function showalertInformation(text) { 
        
         $('#alert_placeholder').append
          ('<div class="alert alert-info" id="alertdiv"> <i class="fa fa-exclamation-circle"></i> ' + text + 
                  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                  '</div>')         
          	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
              	$("#alertdiv").remove();

          }, 1000);
        
        }


   if (Page && Page.length !== 0) {
   	
   	 $("#add-new-value").hide();
        $(".memtype-table").show();
   	  
   	  
   	  $.each(Page, function(key,value) {
   		     var Bprofile=value[BeamProfileOuter];	
   			 var CASize=value[ClipAngleSizeOuter];	
   			 var cpanglelenDD=feetInchFormater(value[ClipAngleLength], value[ClipAngleLength_in], value[ClipAngleLength_fr_fra]);		
   	         
   			  if (!value[ClipAngleLength]) {
   				  cpanglelenDD="";
                  }
   			  
   			  var dbBoltGagefra=getformateforrepresentation(value[BoltGage_fra]);			  			  
   			  var dbBoltDia_fra=getformateforrepresentation(value[BoltDia_fra]);			 
   			  var dbBoltSpacing_fra= getformateforrepresentation(value[BoltSpacing_fra]);
   			  var dbEdgeDistance_fra= getformateforrepresentation(value[EdgeDistance_fra]);
   			  var dbWeldSize_fra= getformateforrepresentation(value[WeldSize_fra]);
   			 
   				
   			
   			  $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+Bprofile[BeamProfile]+'</td><td>'+CASize[ClipAngleSize]+'</td><td>'+value[SupportSide]+'</td><td>'+value[SupportedSide]+'</td><td>'+value["ClipAngleOSL"]+'</td><td>'+value[BoltGrade]+'</td><td>'+dbBoltDia_fra+'<input type="hidden" value='+value[BoltDia]+'></td><td>'+value[BoltRows]+'</td><td>'+dbBoltSpacing_fra+'<input type="hidden" value='+value[BoltSpacing]+'></td><td>'+dbEdgeDistance_fra+'<input type="hidden" value='+value[EdgeDistance]+'></td><td>'+dbBoltGagefra+'<input type="hidden" value='+value[BoltGage]+'></td><td>'+value[WeldType]+'</td><td>'+dbWeldSize_fra+'<input type="hidden" value='+value[WeldSize]+'></td><td>'+cpanglelenDD+'<input type="hidden" class="inchH"  value='+value[ClipAngleLength_in]+'><input type="hidden" class="lengH"  value='+value[ClipAngleLength]+'><input type="hidden" class="fracH"  value='+value[ClipAngleLength_fr]+'> <input type="hidden" class="fracHFrac"  value="'+value[ClipAngleLength_fr_fra]+ '"  /></td></tr>');
   			 
   	
   	  
   	  });
   }

   function showalertSuccess(text) {        	
	      $('#alert_placeholder').append
	      ('<div class="alert alert-success" id="alertdiv"> <i class="fa fa-check-circle"></i> ' + text + 
	              '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	              '</div>')       
	       	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
	           	$("#alertdiv").remove();

	       }, 1000);
	     
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

   
   

   function deleteconnectionmarks(pagename){
  	
  		$.ajax({
  		   type : 'POST',
  	          url: "/bimspring/deleteconnectionmark",	          
  	          data : {connectiongrouptype:pagename,connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconnectionmarkvalues)},
  	          success : function(data, success) {
  	        
  	        	connectionmarkvalues=[];
  				connectionjson=connectionmarkToJSON('table') ;
  				  
  				$(".cci-select").each(function(index, Element){
   	    	   	
  					if($(this).prop('checked')==true){
   	    	   		var index = listvalues.indexOf($(this).closest("tr").find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase());
   	    	   			if (index > -1) {
   	    	   			 listvalues.splice(index, 1);
   	    	   			}
   	    	   			   
   	    	   		$(this).closest("tr").remove();
   	    	   	}
  					
   	    	   	});
   	    	   	var rowCount = $('#table tr').length;
   	    	   	
   	    	   	  
   	    	   	   $("#deleteModal").hide();	
   	    	   		if (rowCount==1) {
   	    	   			 $("#add-new-value").show();
   	    	   		     $(".memtype-table").hide();
   	    	   		}
   	    	   		
   	    	   		$('#checkAll').prop('checked', false);
   	    	     addorupdate();	 
  				
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
   
   
   
   
	  function addconnectionmark() {
		 
		  connectionmarkvalues=[];
		  var  connectionjson=connectionmarkToJSON('table') ;
		  
		  connectionmarkvalues.push($('#conmark').val());
		 
			$.ajax({
	 		   type : 'POST',
	 	          url: "/bimspring/saveConnectionMarks",	          
	 	          data : {connectiongrouptype:"BeamToColumnClipAngle",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
	 	                var boltgage=  $("#boltgage option:selected").text()+ '"';
	 	                var weldsize= $("#wieldsizecp option:selected").text()+ '"';
	 	                var edgedistance=$("#edgedistance option:selected").text()+ '"';
	 	                var boltspc=$("#boltspc option:selected").text()+ '"';
	 	                
	 	               var cpanglelen =feetInchFormater($('#cpanglelen').val(), $('#inch').val(), $("#fraction option:selected").text())
	 	                
	 	                if (!$("#boltdia").val()) {
	 	               	 boltdia="";
	 	       		}
	 	                if (!$("#boltgage").val()) {
	 	               	 boltgage="";
	 	       		}
	 	                if (!$("#wieldsizecp").val()) {
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
	 	                
	 	           	$("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td><td>'+$('#beamprofile').val()+'</td><td>'+$('#clipanglesz').val()+'</td><td>'+$('#btocClip1').val()+'</td><td>'+$('#btocClip2').val()+'</td><td>'+$('#clipangelOSl').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+boltgage+'<input type="hidden" value='+$('#boltgage').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#wieldsizecp').val()+'></td><td>'+cpanglelen+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#fraction option:selected').text()+ '" /></td></tr>');
	 	        
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
   data : {connectiongrouptype:"BeamToColumnClipAngle",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
		           data : {connectiongrouptype:"BeamToColumnClipAngle",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
			       
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

  	 	



$("#btnDeleteRows").click(function() {

deleteconnectionmarks("BeamToColumnClipAngle")

});    	   	 	 	

	 	
	 	
function finalupdate(){
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
       var boltdia= $("#boltdia option:selected").text() + '"';
       var boltgage=  $("#boltgage option:selected").text() + '"';
       var weldsize= $("#wieldsizecp option:selected").text() + '"';
       var edgedistance=$("#edgedistance option:selected").text() + '"';
       var boltspc=$("#boltspc option:selected").text() + '"';
       
      var cpanglelen =feetInchFormater($('#cpanglelen').val(), $('#inch').val(), $("#fraction option:selected").text())
       
       if (!$("#boltdia").val()) {
      	 boltdia="";
		}
       if (!$("#boltgage").val()) {
      	 boltgage="";
		}
       if (!$("#wieldsizecp").val()) {
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
       
       $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" checked type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#beamprofile').val()+'</td><td>'+$('#clipanglesz').val()+'</td><td>'+$('#btocClip1').val()+'</td><td>'+$('#btocClip2').val()+'</td><td>'+$('#clipangelOSl').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+boltgage+'<input type="hidden" value='+$('#boltgage').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#wieldsizecp').val()+'></td><td>'+cpanglelen+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#fraction option:selected').text()+ '"></td>');
      
       addorupdate();
    	  }
    	   
	  
	  function validateSelect2(){
		   if (!$('#edgedistance').val()) {
				$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");	
			}
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
			
			if (!$('#boltgage').val()) {
				$('#boltgageDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
			
			if (!$('#ddlcjp').val()) {
				$('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
			
			
			if (!$('#wieldsizecp').val()) {
				$('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
			  
		  
	  }


	  
	  $("#wieldsizecp").change( function(){
	  if (!$('#wieldsizecp').val()) {
			$('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
		else {
			$('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}  
	  
	  });
	  
	  $("#edgedistance").change( function(){
	  
	  if (!$('#edgedistance').val()) {
			$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");	
		}else {
			$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");	
			
		}
	   
	  });
	  
	  $("#beamprofile").change( function(){
		if (!$('#beamprofile').val()) {
			$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}else {
			$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}
	  });
		
		 $("#wieldsizecp").change( function(){
		if (!$('#wieldsizecp').val()) {
			$('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		}else {
			$('#wieldsizecpDIV .select2-container--default .select2-selection--single').css("border-color","");
			
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
		

   