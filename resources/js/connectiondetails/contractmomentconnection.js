  

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
    

   
    $(".select2").select2(); 
    $("#columnprofilediv").hide();
 // Moment
    
    $("#ddlMomentSM").change( function(){
    	if (!$("#ddlMomentSM").val()) {
    		$("#ddlMFieldtype2").val('');
    	    $("#ddlMFieldtype1,#webconnectiontype").val('').trigger("change"); 
		}
    	
    });
    
  
        $("#ddlMomentSM,#ddlMFieldtype1,#ddlMFieldtype2").change( function(){
        	 $("#webconnectionHide").show();
        	 $(".btocSBoltDetails,#ddlcjp,#thisdisable,#momentPlatethickness,#spYesNo,#stabilizerWType,#sheartp,#stabilizerWSize,#spYesNo").val('').trigger("change"); 
        	 $("#boltgagediv").hide();
        	 $("#boltgagefield").val('').trigger("change"); 
			if ($('#ddlMomentSM').val()=='Column') {
        		  $("#ddlMFieldtype1").hide();
        		  $("#ddlMFieldtype2").show();
        		  $("#boltdetails,#weldtypeandsize,#onlyweldlengh,#momentPlatethickness,#showSP3,#showSP").hide();
        		  $("#platethickness").val("").trigger("change");
        		  $(".btocSBoltDetails,#ddlcjp,#thisdisable,#momentPlatethickness,#spYesNo,#stabilizerWType,#sheartp,#stabilizerWSize,#spYesNo").val('').trigger("change"); 
              if($('#ddlMFieldtype2').val()=='Flanges Directly Welded'){       	  
        	  $("#boltdetails,#weldtypeandsize,#onlyweldlengh,#momentPlatethickness").hide();
    		  $("#showSP3").show();
    		  getStabilizerWelddetails();
    		
                	 
          } else  if($('#ddlMFieldtype2').val()=='Flange Plate Bolted'||$('#ddlMFieldtype2').val()=='End Plate'){ 
        	  $("#weldtypeandsize,#momentPlatethickness,#showSP3,#boltdetails").show();
        	  $("#platethickness").val("").trigger("change");
        	  $("#onlyweldlengh").hide();
        	  getStabilizerWelddetails();
    		  getboltdetails();
    		  getWelddetails();
    		  $("#platethickness").val(MinPTFromGP).trigger("change");
    		  
    		  if ($('#ddlMFieldtype2').val()=='End Plate') {
    			  $("#webconnectiontype").val("").trigger("change"); 
    			  $("#webconnectionHide").hide();
    			  $("#boltgagediv").show();
    			  $("#boltgagefield").val(GageGP).trigger("change"); 
    			
			}
				
          }  else  if($('#ddlMFieldtype2').val()=='Flange Plate Welded'){ 
        	 $("#weldtypeandsize,#onlyweldlengh,#momentPlatethickness,#showSP3").show();
        	 $("#platethickness").val("").trigger("change");
    		  $("#boltdetails").hide();
    		  getStabilizerWelddetails();
    		  getWelddetails();
    		  $("#platethickness").val(MinPTFromGP).trigger("change"); 
    		  $("#momentWeldlengthInch,#momentWeldlengthFraction").val("0").trigger("change"); 
          }  
				
			}
        	else if ($('#ddlMomentSM').val()=='Beam') {
        		 $("#ddlMFieldtype1").show();
        		 $("#ddlMFieldtype2").hide();
        		  $("#boltdetails,#weldtypeandsize,#onlyweldlengh,#momentPlatethickness,#showSP3,#showSP").hide();
           		
          		 
                 if($('#ddlMFieldtype1').val()=='Flanges Directly Welded'){ 
               	  
               
               	 $("#platethickness").val("").trigger("change");
         		         	 
                 } else  if($('#ddlMFieldtype1').val()=='Flange Plate Bolted'){ 
                	 $("#boltdetails,#weldtypeandsize,#momentPlatethickness").show();
                     $("#showSP1,#showSP,#onlyweldlengh").hide();
                     $("#platethickness").val(MinPTFromGP).trigger("change"); 
           		     getboltdetails();
           		     getWelddetails();
       				
                 }  else  if($('#ddlMFieldtype1').val()=='Flange Plate Welded'){ 
                	  $("#weldtypeandsize,#onlyweldlengh,#momentPlatethickness").show();
                	  $("#momentWeldlengthInch,#momentWeldlengthFraction").val("0").trigger("change"); 
                      $("#showSP3,#showSP,#boltdetails").hide();
                     getWelddetails();
                     $("#platethickness").val(MinPTFromGP).trigger("change"); 
                     
                 }  
				
			}else{
				
			}
			
			removeRedBoarder();
        	
        });
    
     
     $("#spYesNo").change( function(){
    	
    	 if($('#spYesNo').val()=='Yes'){ 
    		 $('#showSP').show();
    		 $("#sheartp").val(MinPTFromGP).trigger("change"); 
    		 
    		 
    	 }
    	 else if($('#spYesNo').val()=='No'){ 
    	   $('#showSP').hide();
    	   $('#stabilizerWType,#sheartp,#stabilizerWSize').val("").trigger("change");   
    	   $("#sheartp").val("").trigger("change"); 
  		 
    	 }
    	 else{
    		   $('#showSP').hide();
        	   $('#stabilizerWType,#sheartp,#stabilizerWSize').val("").trigger("change");   
        	   $("#sheartp").val("").trigger("change"); 
        	 
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
	  
	  

	  $("#ddlMomentSM").val($row.find("td:nth-child(4)").text()).trigger("change");
	  
  	 if($row.find("td:nth-child(4)").text()=='Beam'){ 
  		  $("#ddlMFieldtype1").show();
  	      $("#ddlMFieldtype1").val($row.find("td:nth-child(26)").text()).trigger("change");
  	 }else{
  		  $("#ddlMFieldtype2").show();
  		  $("#ddlMFieldtype2").val($row.find("td:nth-child(26)").text()).trigger("change");
  		 }
  	 
  	  connectionmarkedit=$row.find("td:nth-child(3)").text();
		

      $("#conmark").val($row.find("td:nth-child(3)").text());
   	 
   	  $("#beamprofile").val($row.find("td:nth-child(5)").text()).trigger("change");
   	  
   	  
   	  $("#webconnectiontype").val($row.find("td:nth-child(7)").text()).trigger("change");
   	  
	  $("#btocClip1").val($row.find("td:nth-child(9)").text()).trigger("change");
	  $("#btocClip2").val($row.find("td:nth-child(10)").text()).trigger("change");
	  $("#clipAngelSize").val($row.find("td:nth-child(11)").text()).trigger("change");
	  $("#clipAngleOSl").val($row.find("td:nth-child(12)").text()).trigger("change");
	  $("#shearplatethicknessweb").val($row.find("td:nth-child(8)").find('input').val()).trigger("change");
	 
	  $("#boltgradeweb").val($row.find("td:nth-child(13)").text()).trigger("change");
	  $("#boltdiaweb").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
	  $("#noofboltrwweb").val($row.find("td:nth-child(15)").text()).trigger("change");
	  $("#boltspcweb").val($row.find("td:nth-child(16)").find('input').val()).trigger("change");
	
	  $("#noofCol").val($row.find("td:nth-child(17)").text()).trigger("change");
	  $("#boltspcWebX").val($row.find("td:nth-child(18)").find('input').val()).trigger("change");
	  
	  $("#edgedistanceweb").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");
	  $("#boltgageweb").val($row.find("td:nth-child(20)").find('input').val()).trigger("change");
	  $("#ddlcjpweb").val($row.find("td:nth-child(21)").text()).trigger("change");
	  $("#wieldsizecpweb").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");   
	  $("#cpanglelenweb").val($row.find("td:nth-child(23)").find('.lengH').val()).trigger("change");
	  $("#inchweb").val($row.find("td:nth-child(23)").find('.inchH').val()).trigger("change");   
	  $("#fractionweb").val($row.find("td:nth-child(23)").find('.fracH').val()).trigger("change"); 
	  
	  
	  $("#shearPlateLengthweb").val($row.find("td:nth-child(24)").find('.lengH').val()).trigger("change");
	  $("#shearPlateLengthinchweb").val($row.find("td:nth-child(24)").find('.inchH').val()).trigger("change");   
	  $("#shearPlateLengthfractionweb").val($row.find("td:nth-child(24)").find('.fracH').val()).trigger("change"); 
	 
	  $("#shearPlateWidthweb").val($row.find("td:nth-child(25)").find('.lengH').val()).trigger("change");
	  $("#shearPlateWidthinchweb").val($row.find("td:nth-child(25)").find('.inchH').val()).trigger("change");   
	  $("#shearPlateWidthfractionweb").val($row.find("td:nth-child(25)").find('.fracH').val()).trigger("change"); 
	 
   	  
   	  
   	 
   	  $("#platethickness").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");  
   	  
   	  $("#boltgrade").val($row.find("td:nth-child(27)").text()).trigger("change");
   	  $("#boltdia").val($row.find("td:nth-child(28)").find('input').val()).trigger("change");
   	  $("#noofblotrow").val($row.find("td:nth-child(29)").text()).trigger("change");
   	  $("#boltspacingY").val($row.find("td:nth-child(30)").find('input').val()).trigger("change");
   	  $("#boltgagefield").val($row.find("td:nth-child(31)").find('input').val()).trigger("change");
	  $("#edgedis").val($row.find("td:nth-child(32)").find('input').val()).trigger("change");
      $("#ddlcjp").val($row.find("td:nth-child(33)").text()).trigger("change");
      $("#thisdisable").val($row.find("td:nth-child(34)").find('input').val()).trigger("change"); 
      $("#momentWeldlengthFeet").val($row.find("td:nth-child(35)").find('.lengH').val()).trigger("change");
   	  $("#momentWeldlengthInch").val($row.find("td:nth-child(35)").find('.inchH').val()).trigger("change");   
   	  $("#momentWeldlengthFraction").val($row.find("td:nth-child(35)").find('.fracH').val()).trigger("change");   
   	  $("#sheartp").val($row.find("td:nth-child(36)").find('input').val()).trigger("change");
   	  $("#stabilizerWType").val($row.find("td:nth-child(37)").text()).trigger("change");
      $("#stabilizerWSize").val($row.find("td:nth-child(38)").find('input').val()).trigger("change");
		
    
 
    	 
        if ($row.find("td:nth-child(37)").find('input').val()=="No") {
        	
    	  
    	   $("#showSP3").show();
	    }else if ($row.find("td:nth-child(37)").find('input').val()=="Yes") {
	    	$("#showSP,#showSP3").show();;
		}else{
			
			$("#showSP,#showSP3").hide();;
		}
          
        $("#spYesNo").val($row.find("td:nth-child(37)").find('input').val()).trigger("change");
     
      
      $("#sheartp").val($row.find("td:nth-child(36)").find('input').val()).trigger("change");
      
      
  	 }
  	
  	
  });
  
    
    
    
	 $(".action-icons .add").on('click', function(){
	        $(".right").show();
	        $(".left").hide();
	        $("#adddata").show();
	        $("#update").hide();
	        $(".memtype-rightedit").show();
	        $(".editmemtype .rightFloat").show();  
	        $(".select2,.form-control").val('').trigger("change");  
   
	         $(".clipAngelDetails").hide();
			 $("#btocClipAngleLengthweb,.shearPlateBolt,#noofCol,#showSP3").hide(); 
			
			
	    });
  
	 
	 
	 
	 
	 
	 function validateSelect2Fields(){
		 
		 if (!$('#beamprofile').val()) {
				$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#clipAngelSize').val()) {
				$('#clipAngelSizeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 
		 if (!$('#boltgradeweb').val()) {
				$('#boltgradewebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#boltdiaweb').val()) {
				$('#boltdiawebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#noofboltrwweb').val()) {
				$('#noofboltrwwebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#boltspcweb').val()) {
				$('#boltspcwebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#noofCol').val()) {
				$('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#boltspcWebX').val()) {
				$('#boltspcWebXDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#edgedistanceweb').val()) {
				$('#edgedistancewebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#boltgageweb').val()) {
				$('#boltgagewebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#ddlcjpweb').val()) {
				$('#ddlcjpwebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#wieldsizecpweb').val()) {
				$('#wieldsizecpwebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#platethickness').val()) {
				$('#platethicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
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
		 
		 if (!$('#boltgagefield').val()) {
				$('#boltgagediv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#edgedis').val()) {
				$('#edgedisdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#thisdisable').val()) {
				$('#thisdisablediv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#sheartp').val()) {
				$('#sheartpdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
		 
		 if (!$('#stabilizerWSize').val()) {
				$('#stabilizerWSizediv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
				
			}
			 
		 
	 }
	
	
    function validateForm() {
    	
    	validateSelect2Fields();
    	
    	
    	
    	
    	$('#formContractMomentConnection').addClass('submitted');
    	var validated = true;
    	/* checking for required filed */
    	$('#formContractMomentConnection').find(':input').each(function(){   
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
    		var Lenght = $("#momentWeldlengthFeet").val();
        	var Inch = $("#momentWeldlengthInch").find("option:selected").text();
        	var Fraction = $("#momentWeldlengthFraction").find("option:selected").text();
        		validated = validateLength(Lenght,Inch,Fraction,"Length");
    	} 
    	 return validated;
    }
    
    
    
    
    function addorupdate() {
  	  
  	  
  	  var connectionjson=	tableToJSON('table') ;
  	
  	  $.ajax({
   		   type : 'POST',
   	          url: "/bimspring/saveConnectionsDetails",	          
   	          data : {connectiongrouptype:"MomentConnection",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
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
     		  var WebConnectionRef=value[ "WebConnection"];
     		  var ConnectionTypeRef=value["ConnectionType"];
     		  var clipAngleValue= WebConnectionRef["ClipAngleLength"];
     		  var ShearPlateThickness= WebConnectionRef["ShearPlateThickness"];    
     	       

					 var cpanglelenDD = feetInchFormater(
								clipAngleValue["Length"],
								clipAngleValue[Length_in],
								clipAngleValue[Length_fr_fra]);

						if (!clipAngleValue["Length"]) {

							cpanglelenDD = "";
						}

						var ShearPlateValue = WebConnectionRef["ShearPlateLength"];

						var ShearPlateLengthDD = feetInchFormater(
								ShearPlateValue["Length"],
								ShearPlateValue[Length_in],
								ShearPlateValue[Length_fr_fra]);

						if (!ShearPlateValue["Length"]) {

							ShearPlateLengthDD = "";
						}

						var ShearPlateWidthValue = WebConnectionRef["ShearPlateWidth"];

						var ShearPlateWidthDD = feetInchFormater(
								ShearPlateWidthValue["Width"],
								ShearPlateWidthValue[Length_in],
								ShearPlateWidthValue[Length_fr_fra]);

						if (!ShearPlateWidthValue["Width"]) {

							ShearPlateWidthDD = "";
						}
     		    
       		    
     		    
     		    
     		    
    			  var dbBoltGagefra=getformateforrepresentation(WebConnectionRef[BoltGage_fra]);			  			  
    			  var dbBoltDia_fra=getformateforrepresentation(WebConnectionRef[BoltDia_fra]);			 
    			  var dbBoltSpacing_fra= getformateforrepresentation(WebConnectionRef[BoltSpacing_fra]);
    			  var dbEdgeDistance_fra= getformateforrepresentation(WebConnectionRef[EdgeDistance_fra]);
    			  var dbWeldSize_fra= getformateforrepresentation(WebConnectionRef[WeldSize_fra]);
    			 
     		    var Bprofile=value[BeamProfileInOuter];	
     			 var WeldTypeInout=ConnectionTypeRef[WeldTypeInOuter];
     			 var WeldSizeInout=ConnectionTypeRef[WeldSizeInOuter];
     			 var StzerThicknessInout=ConnectionTypeRef[StabilizerPlateThicknessInOuter];
     			 var StzerWeldTypeInout=ConnectionTypeRef[StabilizerWeldTypeInOuter];
     			 var StzerWeldSizeInout=ConnectionTypeRef[StabilizerWeldSizeInOuter];    
     			
     			 var WeldlengthDetailsout=ConnectionTypeRef[WeldlengthDetails];
     			
     			 var shearPlenDD=feetInchFormater(WeldlengthDetailsout["Length"],WeldlengthDetailsout[Length_in],WeldlengthDetailsout[Length_fr_fra]);
     				 
  			  if (!WeldlengthDetailsout["Length"]||WeldlengthDetailsout["Length"]=="undefined") {
  		
  				shearPlenDD=" ";
              	}
  			  
  			  
  			  
  			  
  			  
  			  
  			  
  			  
  			var clipAngleSizeVal= WebConnectionRef[ "ClipAngleSize"];
  			
  			 var BoltSpacingYval=WebConnectionRef[BoltSpacingYInOuter];
		     var BoltSpacingXval=WebConnectionRef[BoltSpacingXInOuter];
		   
			
			
			  $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td><td>'+value[SupportMemberInOuter]+'</td><td>'+Bprofile[BeamProfile]+'</td><td>'+getformateforrepresentation(value[PlateThickness_fra])+'<input type="hidden" value='+value[PlateThickness]+'></td><td>'+WebConnectionRef["WebConnectionType"]+'</td> <td>'+getformateforrepresentation(ShearPlateThickness[PlateThickness_fra])+'<input type="hidden" value='+ShearPlateThickness[PlateThickness]+'></td><td>'+WebConnectionRef['SupportSide']+'</td><td>'+WebConnectionRef['SupportedSide']+'</td><td>'+clipAngleSizeVal[ClipAngleSizeKeyN]+'</td><td>'+WebConnectionRef['ClipAngleOSL']+'</td><td>'+WebConnectionRef[BoltGrade]+'</td><td>'+dbBoltDia_fra+'<input type="hidden" value='+WebConnectionRef[BoltDia]+'></td><td>'+WebConnectionRef[BoltRows]+'</td><td>'+getformateforrepresentation(BoltSpacingYval[BoltSpacing])+'<input type="hidden" value='+BoltSpacingYval[BoltSpacing_fra]+'></td><td>'+WebConnectionRef[NoofBoltColumns]+'</td><td>'+getformateforrepresentation(BoltSpacingXval[BoltSpacing])+'<input type="hidden" value='+BoltSpacingXval[BoltSpacing_fra]+'></td><td>'+dbEdgeDistance_fra+'<input type="hidden" value='+WebConnectionRef[EdgeDistance]+'></td><td>'+dbBoltGagefra+'<input type="hidden" value='+WebConnectionRef[BoltGage]+'></td><td>'+WebConnectionRef[WeldType]+'</td><td>'+dbWeldSize_fra+'<input type="hidden" value='+WebConnectionRef[WeldSize]+'></td><td>'+cpanglelenDD+'<input type="hidden" class="inchH"  value='+clipAngleValue[Length_in]+'><input type="hidden" class="lengH"  value='+clipAngleValue["Length"]+'><input type="hidden" class="fracH"  value='+clipAngleValue[Length_fr]+'> <input type="hidden" class="fracHFrac"  value="'+clipAngleValue[Length_fr_fra]+ '"  /></td><td>'+ShearPlateLengthDD+'<input type="hidden" class="inchH"  value='+ShearPlateValue[Length_in]+'><input type="hidden" class="lengH"  value='+ShearPlateValue["Length"]+'><input type="hidden" class="fracH"  value='+ShearPlateValue[Length_fr]+'> <input type="hidden" class="fracHFrac"  value="'+ShearPlateValue[Length_fr_fra]+ '"  /></td><td>'+ShearPlateWidthDD+'<input type="hidden" class="inchH"  value='+ShearPlateWidthValue[Length_in]+'><input type="hidden" class="lengH"  value='+ShearPlateWidthValue["Width"]+'><input type="hidden" class="fracH"  value='+ShearPlateWidthValue[Length_fr]+'> <input type="hidden" class="fracHFrac"  value="'+ShearPlateWidthValue[Length_fr_fra]+ '"  /></td><td>'+ConnectionTypeRef[Connectiontype]+'</td><td>'+ConnectionTypeRef[BoltGrade]+'</td><td>'+getformateforrepresentation(ConnectionTypeRef[BoltDia_fra])+'<input type="hidden" value='+ConnectionTypeRef[BoltDia]+'></td><td>'+ConnectionTypeRef[NoofBoltRows]+'</td><td>'+getformateforrepresentation(ConnectionTypeRef[BoltSpacing_fra])+'<input type="hidden" value='+ConnectionTypeRef[BoltSpacing]+'></td><td>'+getformateforrepresentation(ConnectionTypeRef[BoltGage_fra])+'<input type="hidden" value='+ConnectionTypeRef[BoltGage]+'></td><td>'+getformateforrepresentation(ConnectionTypeRef[EdgeDistance_fra])+'<input type="hidden" value='+ConnectionTypeRef[EdgeDistance]+'></td> <td>'+WeldTypeInout[WeldType]+'</td><td>'+getformateforrepresentation(WeldSizeInout[WeldSize_fra])+'<input type="hidden" value='+WeldSizeInout[WeldSize]+'></td> <td>'+shearPlenDD+'<input type="hidden" class="inchH"  value='+WeldlengthDetailsout[Length_in]+'><input type="hidden" class="lengH"  value='+WeldlengthDetailsout["Length"]+'><input type="hidden" class="fracH"  value='+WeldlengthDetailsout[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+WeldlengthDetailsout[Length_fr_fra]+'" /></td> <td>'+getformateforrepresentation(StzerThicknessInout[PlateThickness_fra])+'<input type="hidden" value='+StzerThicknessInout[PlateThickness]+'></td> <td>'+StzerWeldTypeInout[StabilizerPlateWeldType]+'<input type="hidden" value='+ConnectionTypeRef[StabilizerPlate]+'></td><td>'+getformateforrepresentation(StzerWeldSizeInout[StabilizerPlateWeldSize_fra])+'<input type="hidden" value='+StzerWeldSizeInout[StabilizerPlateWeldSize]+'></td>  </tr>');
	  
			
   	 
   	      
   	      
     	  });
     }
 
$("#adddata").on('click', function(){
		
		if (validateForm() && checkconnectioncodeForuniquiness()) {		
		
			addconnectionmark();
			
		}

		var Lenght = $("#momentWeldlengthFeet").val();
    	var Inch = $("#momentWeldlengthInch").find("option:selected").text();
    	var Fraction = $("#momentWeldlengthFraction").find("option:selected").text();
    	
    
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


$("#recall").click(function(){
	var rowCount = $('#table tr').length;
	
	if (rowCount > 1) {

	var $row=$('#table tr:last');	
    $(".right").show();
    $(".left").hide();
    $(".memtype-rightedit").show();
	$(".editmemtype .rightFloat").show(); 
		  


	  $("#ddlMomentSM").val($row.find("td:nth-child(4)").text()).trigger("change");
	  
	 if($row.find("td:nth-child(4)").text()=='Beam'){ 
		  $("#ddlMFieldtype1").show();
	      $("#ddlMFieldtype1").val($row.find("td:nth-child(26)").text()).trigger("change");
	 }else{
		  $("#ddlMFieldtype2").show();
		  $("#ddlMFieldtype2").val($row.find("td:nth-child(26)").text()).trigger("change");
		 }
	 
	  connectionmarkedit=$row.find("td:nth-child(3)").text();
	  $("#conmark").val("");
 	  $("#beamprofile").val($row.find("td:nth-child(5)").text()).trigger("change");
 	  $("#webconnectiontype").val($row.find("td:nth-child(7)").text()).trigger("change");
	  $("#btocClip1").val($row.find("td:nth-child(9)").text()).trigger("change");
	  $("#btocClip2").val($row.find("td:nth-child(10)").text()).trigger("change");
	  $("#clipAngelSize").val($row.find("td:nth-child(11)").text()).trigger("change");
	  $("#clipAngleOSl").val($row.find("td:nth-child(12)").text()).trigger("change");
	  $("#shearplatethicknessweb").val($row.find("td:nth-child(8)").find('input').val()).trigger("change");
		 
	  $("#boltgradeweb").val($row.find("td:nth-child(13)").text()).trigger("change");
	  $("#boltdiaweb").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
	  $("#noofboltrwweb").val($row.find("td:nth-child(15)").text()).trigger("change");
	  $("#boltspcweb").val($row.find("td:nth-child(16)").find('input').val()).trigger("change");
	
	  $("#noofCol").val($row.find("td:nth-child(17)").text()).trigger("change");
	  $("#boltspcWebX").val($row.find("td:nth-child(18)").find('input').val()).trigger("change");
	  
	  $("#edgedistanceweb").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");
	  $("#boltgageweb").val($row.find("td:nth-child(20)").find('input').val()).trigger("change");
	  $("#ddlcjpweb").val($row.find("td:nth-child(21)").text()).trigger("change");
	  $("#wieldsizecpweb").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");   
	  $("#cpanglelenweb").val($row.find("td:nth-child(23)").find('.lengH').val()).trigger("change");
	  $("#inchweb").val($row.find("td:nth-child(23)").find('.inchH').val()).trigger("change");   
	  $("#fractionweb").val($row.find("td:nth-child(23)").find('.fracH').val()).trigger("change"); 
	  
	  
	  $("#shearPlateLengthweb").val($row.find("td:nth-child(24)").find('.lengH').val()).trigger("change");
	  $("#shearPlateLengthinchweb").val($row.find("td:nth-child(24)").find('.inchH').val()).trigger("change");   
	  $("#shearPlateLengthfractionweb").val($row.find("td:nth-child(24)").find('.fracH').val()).trigger("change"); 
	 
	  $("#shearPlateWidthweb").val($row.find("td:nth-child(25)").find('.lengH').val()).trigger("change");
	  $("#shearPlateWidthinchweb").val($row.find("td:nth-child(25)").find('.inchH').val()).trigger("change");   
	  $("#shearPlateWidthfractionweb").val($row.find("td:nth-child(25)").find('.fracH').val()).trigger("change"); 
	 
 	  
 	  
 	 
 	  $("#platethickness").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");  
 	  
 	  $("#boltgrade").val($row.find("td:nth-child(27)").text()).trigger("change");
 	  $("#boltdia").val($row.find("td:nth-child(28)").find('input').val()).trigger("change");
 	  $("#noofblotrow").val($row.find("td:nth-child(29)").text()).trigger("change");
 	  $("#boltspacingY").val($row.find("td:nth-child(30)").find('input').val()).trigger("change");
 	  $("#boltgagefield").val($row.find("td:nth-child(31)").find('input').val()).trigger("change");
	  $("#edgedis").val($row.find("td:nth-child(32)").find('input').val()).trigger("change");
    $("#ddlcjp").val($row.find("td:nth-child(33)").text()).trigger("change");
    $("#thisdisable").val($row.find("td:nth-child(34)").find('input').val()).trigger("change"); 
    $("#momentWeldlengthFeet").val($row.find("td:nth-child(35)").find('.lengH').val()).trigger("change");
 	  $("#momentWeldlengthInch").val($row.find("td:nth-child(35)").find('.inchH').val()).trigger("change");   
 	  $("#momentWeldlengthFraction").val($row.find("td:nth-child(35)").find('.fracH').val()).trigger("change");   
 	  $("#sheartp").val($row.find("td:nth-child(36)").find('input').val()).trigger("change");
 	  $("#stabilizerWType").val($row.find("td:nth-child(37)").text()).trigger("change");
    $("#stabilizerWSize").val($row.find("td:nth-child(38)").find('input').val()).trigger("change");
		
  

  	 
      if ($row.find("td:nth-child(37)").find('input').val()=="No") {
      	
  	  
  	   $("#showSP3").show();
	    }else if ($row.find("td:nth-child(37)").find('input').val()=="Yes") {
	    	$("#showSP,#showSP3").show();;
		}else{
			
			$("#showSP,#showSP3").hide();;
		}
        
      $("#spYesNo").val($row.find("td:nth-child(37)").find('input').val()).trigger("change");
   
    
    $("#sheartp").val($row.find("td:nth-child(36)").find('input').val()).trigger("change");
      
  	
	}
	
});




function  getboltdetails(){
	
	
	 $("#boltgrade").val(BoGrGp).trigger("change");  
	   $("#boltdia").val(BoltDiaGP).trigger("change");  
	   $("#boltspacingY").val(BspacingGP).trigger("change");  
	   $("#edgedis").val(EDistandanceGP).trigger("change");  
	   
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
	
	
	
	function  getStabilizerWelddetails(){
		   $("#stabilizerWSize").val(weldSizeGP).trigger("change"); 
		   if ( $("#stabilizerWType").val()=="CJP") {
			   $("#stabilizerWSize").val("").trigger("change"); 
			   $("#stabilizerWSize").attr("disabled", true);
			   $("#stabilizerWSize").prop('required',false);
			   $('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
		 		
			}else {
				  $("#stabilizerWSize").attr("disabled", false);
				  $("#stabilizerWSize").prop('required',true);
			}		   
	 }

		$("#stabilizerWType").change(function() {  
	if ( $("#stabilizerWType").val()=="CJP") {
		   $("#stabilizerWSize").val("").trigger("change"); 
		   $("#stabilizerWSize").attr("disabled", true);
		   $("#stabilizerWSize").prop('required',false);
		   $('#stabilizerWSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
	 		
		}else {
			  $("#stabilizerWSize").attr("disabled", false);
			  $("#stabilizerWSize").prop('required',true);
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
    
    function validateSize(inch,fraction,sizename)
    {
    	var valid = true;
    	if(inch == "0" && fraction == "0")
    	{
    		valid = false;
        	$('#alert_model_placeholder').append
            ('<div class="alert alert-danger" id="alertdiv2"> <i class="fa fa-exclamation-triangle"></i> ' + sizename + ' Size can not be zero' + 
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                    '</div>')         
             	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
                 	$("#alertdiv2").remove();

             }, 10000);
   		}
    	
    	return valid;        	
    }
          
	

	   $(".add,.add-new-value").on('click', function(){
		   $(".form-control,.select2").val("").trigger("change"); 
	      $("#showSP3,#boltdetails,#weldtypeandsize,#onlyweldlengh,#showSP,#momentPlatethickness").hide();
	      listvalues = [];
	      $(".contxt").each(function(){			
				listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
			}); 
	      $('#formContractMomentConnection').removeClass('submitted');
	   });
	   
	   
	   
	   
	   function addconnectionmark() {
			
			  connectionmarkvalues=[];
			  connectionjson=connectionmarkToJSON('table') ;
			  
			  connectionmarkvalues.push($('#conmark').val());
			 
				$.ajax({
		 		   type : 'POST',
		 	          url: "/bimspring/saveConnectionMarks",	          
		 	          data : {connectiongrouptype:"MomentConnection",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
		 	       	        
		 	                var PThickness=$("#platethickness option:selected").text()+ '"';   
		 	       	     	    
		 	         	       if (!$("#platethickness").val()) {
		 	         	    	 PThickness="";

		 	       			}
		 	          var boltspcWebX =$("#boltspcWebX option:selected").text()+ '"'; 
		 	         	       
		 	       	     var boltdia= $("#boltdia option:selected").text()+ '"';   
		 	       	     	    if (!$("#boltdia").val()) {
		 	       	     	        	 boltdia="";
		 	       	     			}
		 	       	    var boltspacingY=$("#boltspacingY option:selected").text()+ '"';   
		 	       	     	 
		 	       	     	         if (!$("#boltspacingY").val()) {
		 	       	     	        	 boltspacingY="";
		 	       	     			}
		 	       	     	         
		 	       	     	       
		 	       	    var edgedistance=$("#edgedis option:selected").text()+ '"';   
		 	       	     	          if (!$("#edgedis").val()) {
		 	       	     	        	 edgedistance="";
		 	       	     			}
		 	       	     			
		 	       	    var weldsize= $("#thisdisable option:selected").text()+ '"';   
		 	       	     	        if (!$("#thisdisable").val()) {
		 	       	     	        	 weldsize="";
		 	       	     			}
		 	       	     			
		 	       	    var boltgage=  $("#boltgage option:selected").text()+ '"';   
		 	       	     	 if (!$("#boltgage").val()) {
		 	       	     	        	 boltgage="";
		 	       	     			}
		 	       	     	 
		 	       	     var boltgagefield=  $("#boltgagefield option:selected").text()+ '"';   
	 	       	     	 if (!$("#boltgagefield").val()) {
	 	       	     	           boltgagefield="";
	 	       	     			}
		 	       	     
		 	       	     	 
		 	       	     	 
		 	       	        
		 	       	        
		 	       	    var stabilizerPT=$("#sheartp option:selected").text()+ '"';   
		 	       	     	 
		 	       	     	         if (!$("#sheartp").val()) {
		 	       	     	        	 stabilizerPT="";
		 	       	     			}
		 	       	    var StabilizerPlateYesNo= $("#spYesNo").val() == "" ? "" : $("#spYesNo").find("option:selected").text();
		 	       	     	 
		 	       	     	        
		 	       	             
		 	       	     	 
		 	       	    var stabilizerWSize=$("#stabilizerWSize option:selected").text()+ '"';   
		 	       	     	 
		 	       	     	         if (!$("#stabilizerWSize").val()) {
		 	       	     	        	 stabilizerWSize="";
		 	       	     			}
		 	       	             
		 	       	    var weldlength=feetInchFormater($('#momentWeldlengthFeet').val(),$('#momentWeldlengthInch').val(),$("#momentWeldlengthFraction").val());
		 	       	     	       if (!$("#momentWeldlengthFeet").val()) {
		 	       	     	    	  weldlength="";

		 	       	  			}
		 	       	    var shearPlateLengthweb=feetInchFormater($('#shearPlateLengthweb').val(),$('#shearPlateLengthinchweb').val(),$("#shearPlateLengthfractionweb").val());
	 	       	     	       if (!$("#shearPlateLengthweb").val()) {
	 	       	     	    	shearPlateLengthweb="";
                                }
		 	       	     	       
	 	       	        var shearPlateWidthweb=feetInchFormater($('#shearPlateWidthweb').val(),$('#shearPlateWidthinchweb').val(),$("#shearPlateWidthfractionweb").val());
	       	     	       if (!$("#shearPlateWidthweb").val()) {
	       	     	    	shearPlateWidthweb="";

	       	  			     }
	 	       	     	    
		 	       	     	     
				 	             
		 	       	     	       
		 	       	     	       
		 	       	     	       
		 	       	     	      var connectionmethod="";
		 	       	     	   
		 	       	     	      if($('#ddlMomentSM').val()=='Beam'){ 
		 	       	     	    	connectionmethod= $("#ddlMFieldtype1 option:selected").text();
		 	       	     	      }else if($('#ddlMomentSM').val()=='Column'){ 
		 	       	     	    	 connectionmethod=$("#ddlMFieldtype2 option:selected").text();
		 	       				}
		 	       	     	     
		 	       	     	      
		 	       	     	      
		 	       	     	      
		 	       	     	      
		 	       	          var boltdiaweb= $("#boltdiaweb option:selected").text()+ '"';
			 	                var boltgageweb=  $("#boltgageweb option:selected").text()+ '"';
			 	                var weldsizeweb= $("#wieldsizecpweb option:selected").text()+ '"';
			 	                var edgedistanceweb=$("#edgedistanceweb option:selected").text()+ '"';
			 	                var boltspcweb=$("#boltspcweb option:selected").text()+ '"';
			 	                
			 	               var cpanglelenweb =feetInchFormater($('#cpanglelenweb').val(), $('#inchweb').val(), $("#fractionweb option:selected").text())
			 	                
			 	                if (!$("#boltdiaweb").val()) {
			 	               	 boltdiaweb="";
			 	       		}
			 	                if (!$("#boltgageweb").val()) {
			 	               	 boltgageweb="";
			 	       		}
			 	                if (!$("#wieldsizecpweb").val()) {
			 	               	 weldsizeweb="";
			 	       		}
			 	                if (!$("#boltspcweb").val()) {
			 	               	 boltspcweb="";
			 	       		}
			 	                if (!$("#edgedistanceweb").val()) {
			 	               	 edgedistanceweb="";
			 	       		}
			 	                if (!$("#cpanglelenweb").val()) {
			 	               	 cpanglelenweb="";

			 	       		}
			 	               if (!$("#boltspcWebX").val()) {
			 	            	  boltspcWebX="";

				 	       		}
			 	                
			 	              var shearplatethicknessweb= $("#shearplatethicknessweb option:selected").text()+ '"';
			 	     	     if (!$("#shearplatethicknessweb").val()) {
			 	          	 shearplatethicknessweb="";
			 	  		    }
			 	         
			 	              $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td><td>'+$('#ddlMomentSM').val()+'</td><td>'+$("#beamprofile").val()+'</td><td>'+PThickness+'<input type="hidden" value='+$('#platethickness').val()+'></td><td>'+$('#webconnectiontype').val()+'</td><td>'+shearplatethicknessweb+'<input type="hidden" value='+$('#shearplatethicknessweb').val()+'></td><td>'+$('#btocClip1').val()+'</td><td>'+$('#btocClip2').val()+'</td><td>'+$('#clipAngelSize').val()+'</td><td>'+$('#clipAngleOSl').val()+'</td><td>'+$('#boltgradeweb').val()+'</td><td>'+boltdiaweb+'<input type="hidden" value='+$('#boltdiaweb').val()+'></td><td>'+$('#noofboltrwweb').val()+'</td><td>'+boltspcweb+'<input type="hidden" value='+$('#boltspcweb').val()+'></td><td>'+$('#noofCol').val()+'</td><td>'+boltspcWebX+'<input type="hidden" value='+$('#boltspcWebX').val()+'><td>'+edgedistanceweb+'<input type="hidden" value='+$('#edgedistanceweb').val()+'></td></td><td>'+boltgageweb+'<input type="hidden" value='+$('#boltgageweb').val()+'></td><td>'+$('#ddlcjpweb').val()+'</td><td>'+weldsizeweb+'<input type="hidden" value='+$('#wieldsizecpweb').val()+'></td><td>'+cpanglelenweb+'<input type="hidden" class="inchH"  value='+$('#inchweb').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelenweb').val()+'><input type="hidden" class="fracH"  value='+$('#fractionweb').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#fractionweb option:selected').text()+ '" /></td><td>'+shearPlateLengthweb+'<input type="hidden" class="inchH"  value='+$('#shearPlateLengthinchweb').val()+'><input type="hidden" class="lengH"  value='+$('#shearPlateLengthweb').val()+'><input type="hidden" class="fracH"  value='+$('#shearPlateLengthfractionweb').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#shearPlateLengthfractionweb option:selected').text()+ '" /></td><td>'+shearPlateWidthweb+'<input type="hidden" class="inchH"  value='+$('#shearPlateWidthinchweb').val()+'><input type="hidden" class="lengH"  value='+$('#shearPlateWidthweb').val()+'><input type="hidden" class="fracH"  value='+$('#shearPlateWidthfractionweb').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#shearPlateWidthfractionweb option:selected').text()+ '" /></td><td>'+connectionmethod+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofblotrow').val()+'</td><td>'+boltspacingY+'<input type="hidden" value='+$('#boltspacingY').val()+'></td><td>'+boltgagefield+'<input type="hidden" value='+$('#boltgagefield').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedis').val()+'></td> <td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td> <td>'+weldlength+'<input type="hidden" class="inchH"  value='+$('#momentWeldlengthInch').val()+'><input type="hidden" class="lengH"  value='+$('#momentWeldlengthFeet').val()+'><input type="hidden" class="fracH"  value='+$('#momentWeldlengthFraction').val()+'><input type="hidden" class="fracHFrac"  value="'+$('#momentWeldlengthFraction option:selected').text()+ '" /></td> <td>'+stabilizerPT+'<input type="hidden" value='+$('#sheartp').val()+'></td> <td>'+$('#stabilizerWType').val()+'<input type="hidden" value='+StabilizerPlateYesNo+'></td><td>'+stabilizerWSize+'<input type="hidden" value='+$('#stabilizerWSize').val()+'></td>  </tr>');
			 	         		        	 	        	  
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
	 	          data : {connectiongrouptype:"MomentConnection",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
						           data : {connectiongrouptype:"MomentConnection",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
							       
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
deleteconnectionmarks("MomentConnection")

	   	
	   	
});    	   	 	 	
	 	
	 	
	 	
	 	
function finalupdate(){
	                $row.find("td:nth-child(38)").remove();
					$row.find("td:nth-child(37)").remove();
					$row.find("td:nth-child(36)").remove();
					$row.find("td:nth-child(35)").remove();
					$row.find("td:nth-child(34)").remove();
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
			   	  
   	    $(".add-new-value").hide();
	        $(".memtype-table").show();   
	        $(".left").show();
	        $(".editmemtype .rightFloat").hide();
   	  
   	  
   	    listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	        
   	   var PThickness=$("#platethickness option:selected").text()+ '"';   
    	    
	       if (!$("#platethickness").val()) {
	    	 PThickness="";

		}
var boltspcWebX =$("#boltspcWebX option:selected").text()+ '"'; 
	       
     var boltdia= $("#boltdia option:selected").text()+ '"';   
     	    if (!$("#boltdia").val()) {
     	        	 boltdia="";
     			}
    var boltspacingY=$("#boltspacingY option:selected").text()+ '"';   
     	 
     	         if (!$("#boltspacingY").val()) {
     	        	 boltspacingY="";
     			}
     	         
     	       
    var edgedistance=$("#edgedis option:selected").text()+ '"';   
     	          if (!$("#edgedis").val()) {
     	        	 edgedistance="";
     			}
     			
    var weldsize= $("#thisdisable option:selected").text()+ '"';   
     	        if (!$("#thisdisable").val()) {
     	        	 weldsize="";
     			}
     			
    var boltgage=  $("#boltgage option:selected").text()+ '"';   
     	 if (!$("#boltgage").val()) {
     	        	 boltgage="";
     			}
     	 
     var boltgagefield=  $("#boltgagefield option:selected").text()+ '"';   
 	 if (!$("#boltgagefield").val()) {
 	           boltgagefield="";
 			}
     
     	 
     	 
        
        
    var stabilizerPT=$("#sheartp option:selected").text()+ '"';   
     	 
     	         if (!$("#sheartp").val()) {
     	        	 stabilizerPT="";
     			}
    var StabilizerPlateYesNo= $("#spYesNo").val() == "" ? "" : $("#spYesNo").find("option:selected").text();
     	 
     	        
             
     	 
    var stabilizerWSize=$("#stabilizerWSize option:selected").text()+ '"';   
     	 
     	         if (!$("#stabilizerWSize").val()) {
     	        	 stabilizerWSize="";
     			}
             
    var weldlength=feetInchFormater($('#momentWeldlengthFeet').val(),$('#momentWeldlengthInch').val(),$("#momentWeldlengthFraction").val());
     	       if (!$("#momentWeldlengthFeet").val()) {
     	    	  weldlength="";

  			}
    var shearPlateLengthweb=feetInchFormater($('#shearPlateLengthweb').val(),$('#shearPlateLengthinchweb').val(),$("#shearPlateLengthfractionweb").val());
 	       if (!$("#shearPlateLengthweb").val()) {
 	    	shearPlateLengthweb="";
        }
     	       
    var shearPlateWidthweb=feetInchFormater($('#shearPlateWidthweb').val(),$('#shearPlateWidthinchweb').val(),$("#shearPlateWidthfractionweb").val());
       if (!$("#shearPlateWidthweb").val()) {
    	shearPlateWidthweb="";

		     }
 	    
     	     
          
     	       
     	       
     	       
     	      var connectionmethod="";
     	   
     	      if($('#ddlMomentSM').val()=='Beam'){ 
     	    	connectionmethod= $("#ddlMFieldtype1 option:selected").text();
     	      }else if($('#ddlMomentSM').val()=='Column'){ 
     	    	 connectionmethod=$("#ddlMFieldtype2 option:selected").text();
			}
     	     
     	      
     	     
     	  var shearplatethicknessweb= $("#shearplatethicknessweb option:selected").text()+ '"';
     	     if (!$("#shearplatethicknessweb").val()) {
          	 shearplatethicknessweb="";
  		    }
          var boltdiaweb= $("#boltdiaweb option:selected").text()+ '"';
          var boltgageweb=  $("#boltgageweb option:selected").text()+ '"';
          var weldsizeweb= $("#wieldsizecpweb option:selected").text()+ '"';
          var edgedistanceweb=$("#edgedistanceweb option:selected").text()+ '"';
          var boltspcweb=$("#boltspcweb option:selected").text()+ '"';
         
        var cpanglelenweb =feetInchFormater($('#cpanglelenweb').val(), $('#inchweb').val(), $("#fractionweb option:selected").text())
         
         if (!$("#boltdiaweb").val()) {
        	 boltdiaweb="";
		}
         if (!$("#boltgageweb").val()) {
        	 boltgageweb="";
		}
         if (!$("#wieldsizecpweb").val()) {
        	 weldsizeweb="";
		}
         if (!$("#boltspcweb").val()) {
        	 boltspcweb="";
		}
         if (!$("#edgedistanceweb").val()) {
        	 edgedistanceweb="";
		}
         if (!$("#cpanglelenweb").val()) {
        	 cpanglelenweb="";

		}
        if (!$("#boltspcWebX").val()) {
     	  boltspcWebX="";

    		}
         
        
  
        $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" checked type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td><td>'+$('#ddlMomentSM').val()+'</td><td>'+$("#beamprofile").val()+'</td><td>'+PThickness+'<input type="hidden" value='+$('#platethickness').val()+'></td><td>'+$('#webconnectiontype').val()+'</td><td>'+shearplatethicknessweb+'<input type="hidden" value='+$('#shearplatethicknessweb').val()+'></td><td>'+$('#btocClip1').val()+'</td><td>'+$('#btocClip2').val()+'</td><td>'+$('#clipAngelSize').val()+'</td><td>'+$('#clipAngleOSl').val()+'</td><td>'+$('#boltgradeweb').val()+'</td><td>'+boltdiaweb+'<input type="hidden" value='+$('#boltdiaweb').val()+'></td><td>'+$('#noofboltrwweb').val()+'</td><td>'+boltspcweb+'<input type="hidden" value='+$('#boltspcweb').val()+'></td><td>'+$('#noofCol').val()+'</td><td>'+boltspcWebX+'<input type="hidden" value='+$('#boltspcWebX').val()+'><td>'+edgedistanceweb+'<input type="hidden" value='+$('#edgedistanceweb').val()+'></td></td><td>'+boltgageweb+'<input type="hidden" value='+$('#boltgageweb').val()+'></td><td>'+$('#ddlcjpweb').val()+'</td><td>'+weldsizeweb+'<input type="hidden" value='+$('#wieldsizecpweb').val()+'></td><td>'+cpanglelenweb+'<input type="hidden" class="inchH"  value='+$('#inchweb').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelenweb').val()+'><input type="hidden" class="fracH"  value='+$('#fractionweb').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#fractionweb option:selected').text()+ '" /></td><td>'+shearPlateLengthweb+'<input type="hidden" class="inchH"  value='+$('#shearPlateLengthinchweb').val()+'><input type="hidden" class="lengH"  value='+$('#shearPlateLengthweb').val()+'><input type="hidden" class="fracH"  value='+$('#shearPlateLengthfractionweb').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#shearPlateLengthfractionweb option:selected').text()+ '" /></td><td>'+shearPlateWidthweb+'<input type="hidden" class="inchH"  value='+$('#shearPlateWidthinchweb').val()+'><input type="hidden" class="lengH"  value='+$('#shearPlateWidthweb').val()+'><input type="hidden" class="fracH"  value='+$('#shearPlateWidthfractionweb').val()+'> <input type="hidden" class="fracHFrac" value="'+$('#shearPlateWidthfractionweb option:selected').text()+ '" /></td><td>'+connectionmethod+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofblotrow').val()+'</td><td>'+boltspacingY+'<input type="hidden" value='+$('#boltspacingY').val()+'></td><td>'+boltgagefield+'<input type="hidden" value='+$('#boltgagefield').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedis').val()+'></td> <td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td> <td>'+weldlength+'<input type="hidden" class="inchH"  value='+$('#momentWeldlengthInch').val()+'><input type="hidden" class="lengH"  value='+$('#momentWeldlengthFeet').val()+'><input type="hidden" class="fracH"  value='+$('#momentWeldlengthFraction').val()+'><input type="hidden" class="fracHFrac"  value="'+$('#momentWeldlengthFraction option:selected').text()+ '" /></td> <td>'+stabilizerPT+'<input type="hidden" value='+$('#sheartp').val()+'></td> <td>'+$('#stabilizerWType').val()+'<input type="hidden" value='+StabilizerPlateYesNo+'></td><td>'+stabilizerWSize+'<input type="hidden" value='+$('#stabilizerWSize').val()+'></td>');
  		        	 	        	  
     	            
	     	     
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



var shearPlateOption1 = { "Shop Welded": "Shop Welded", "Field Welded": "Field Welded" };
var shearPlateOption2 = { "Field Bolted": "Field Bolted", "Field Welded": "Field Welded" };


var clipAngleOption1 = { "Field Bolted": "Field Bolted", "Field Welded": "Field Welded" };
var clipAngleOption2 = { "Shop Welded": "Shop Welded", "Shop Bolted": "Shop Bolted", "Field Bolted": "Field Bolted", "Field Welded": "Field Welded" };




$(".clipAngelDetails").hide();
$("#webconnectiontype").change( function(){
	$('#clipAngelSize').val('').trigger("change"); 
	resetDrodown('btocClip2');
	resetDrodown('btocClip1');
	if ($('#webconnectiontype').val()=='Clip Angle') {
		$('#clipAngelSize').val(ClipAngleSizeGp).trigger("change"); 
		$('#clipAngelSizeDIV .select2-container--default .select2-selection--single').css("border-color","");

		resetDrodown('btocClip2');
		resetDrodown('btocClip1');
		$.each(clipAngleOption1, function(key, value) {   
		     $('#btocClip1')
		         .append($("<option></option>")
		                    .attr("value",key)
		                    .text(value)); 
		});
		$.each(clipAngleOption2, function(key, value) {   
		     $('#btocClip2')
		         .append($("<option></option>")
		                    .attr("value",key)
		                    .text(value)); 
		});
		 $("#btocClipAngleLengthweb,.shearPlateBolt,#noofCol").hide();
		 $(".clipAngelDetails").show();
	}
	else if ($('#webconnectiontype').val()=='Extended Shear Tab' ||$('#webconnectiontype').val()=='Conventional Shear Tab' ||$('#webconnectiontype').val()=='Shear Plate') {
		resetDrodown('btocClip2');
		resetDrodown('btocClip1');
	
		$.each(shearPlateOption1, function(key, value) {   
		     $('#btocClip1')
		         .append($("<option></option>")
		                    .attr("value",key)
		                    .text(value)); 
		});
		$.each(shearPlateOption2, function(key, value) {   
		     $('#btocClip2')
		         .append($("<option></option>")
		                    .attr("value",key)
		                    .text(value)); 
		});
		
		 $("#btocClipAngleLengthweb,.shearPlateBolt,#noofCol").show();
		 $(".clipAngelDetails").hide();
		 
		 $(".cAngelVal").val('').trigger("change");   
	}
	
	 removeRedBoarder();
});
$("#btocShearPlateLengthDetails,#btocShearPlateWidthDetails").hide();


$("#btocClip1,#btocClip2,#webconnectiontype").change( function(){
	 $("#btocShearPlateLengthDetails,#btocShearPlateWidthDetails,#btocClipAngleLengthweb").hide();
	 $("#boltspcWebX").val('').trigger("change");  
	 $('#boltspcWebXDIV .select2-container--default .select2-selection--single').css("border-color","");
    if(($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Shop Welded')){ 
    	
    
        $("#btocBoltDetailsweb").show();
        $("#btocWeldDetailsweb").show();
        $("#btocClipAngleLengthweb").hide();
        getboltdetailsweb();   
        getWelddetailsweb();
        $(".ClipAngleLengthweb").val('').trigger("change");   
      
    }
    else if($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Field Welded'){  
        $("#btocBoltDetailsweb").show();
        $("#btocWeldDetailsweb").show();
        $("#btocClipAngleLengthweb").hide();
        getboltdetailsweb(); 
        getWelddetailsweb();
      
        $(".ClipAngleLengthweb").val('').trigger("change");   
    
    } 
    else if($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Field Bolted'||($('#btocClip1').val()=='Field Bolted' && $('#btocClip2').val()=='Shop Bolted')){  
        $("#btocBoltDetailsweb").show();
        getboltdetailsweb();  
        $("#btocWeldDetailsweb").hide();
        $("#btocClipAngleLengthweb").hide();
        $(".ClipAngleLengthweb,.WeldDetailsweb").val('').trigger("change");   
   
    }      
    else if(($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Shop Welded')){ 
        $("#btocBoltDetailsweb").hide(); 
        $("#btocWeldDetailsweb").show();
        getWelddetailsweb();
        $("#btocClipAngleLengthweb").show();
        $(".BoltDetailsweb").val('').trigger("change");   
        $("#inchweb,#fractionweb").val("0").trigger("change"); 
    }
    
    
    else if(($('#btocClip1').val()=='Shop Welded' && $('#btocClip2').val()=='Field Welded')){ 
        $("#btocBoltDetailsweb").hide(); 
        $("#btocWeldDetailsweb").show();
        getWelddetailsweb();
        $("#btocShearPlateLengthDetails,#btocShearPlateWidthDetails").show();
        $(".BoltDetailsweb").val('').trigger("change");   
        $(".val0").val('0').trigger("change");  
    }
    
    else if($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Field Welded'){ 
        $("#btocBoltDetailsweb").hide(); 
        $("#btocWeldDetailsweb").show();
        getWelddetailsweb();
       
        $(".BoltDetailsweb").val('').trigger("change");  
         
        
    	if ($('#webconnectiontype').val()=='Clip Angle') {
    		  $("#btocClipAngleLengthweb").show();
    	        $("#inchweb,#fractionweb").val('0').trigger("change");  
    	     
    	}
    	else if ($('#webconnectiontype').val()=='Extended Shear Tab' ||$('#webconnectiontype').val()=='Conventional Shear Tab' ||$('#webconnectiontype').val()=='Shear Plate') {
    		 $("#btocShearPlateLengthDetails,#btocShearPlateWidthDetails").show();
    		   $(".val0").val('0').trigger("change");  
    		  
    		    }
        
    } 
    else if(($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Field Bolted')||($('#btocClip1').val()=='Field Welded' && $('#btocClip2').val()=='Shop Bolted')){ 
        $("#btocBoltDetailsweb").show(); 
        getboltdetailsweb();  
        $("#btocWeldDetailsweb").show();
        getWelddetailsweb();
        $("#btocClipAngleLengthweb").hide();
        $(".ClipAngleLengthweb").val('').trigger("change");   
        $("#boltspcWebX").val(BspacingGP).trigger("change");  
    }
      else if(($('#btocClip1').val()=='Shop Welded' && $('#btocClip2').val()=='Field Bolted')){ 
        $("#btocBoltDetailsweb").show(); 
        getboltdetailsweb();  
        $("#btocWeldDetailsweb").show();
        getWelddetailsweb();
        $("#btocClipAngleLengthweb").hide();
        $(".ClipAngleLengthweb").val('').trigger("change");
        $("#boltspcWebX").val(BspacingGP).trigger("change");  
    }
    
    
    
    else{
    	 $("#btocBoltDetailsweb,#btocWeldDetailsweb,#btocClipAngleLengthweb,.fieldsFBweb").hide();
   }
    
/*   if (!$('#webconnectiontype').val()) {
	   resetDrodown('btocClip2');
	  resetDrodown('btocClip1');
	
    	 $("#btocBoltDetailsweb,#btocWeldDetailsweb,#btocClipAngleLengthweb,.fieldsFBweb").hide();
	}*/
    removeRedBoarder();
});


function  getboltdetailsweb(){	  
	
	
	 $("#boltgradeweb").val(BoGrGp).trigger("change");  
	   $("#boltdiaweb").val(BoltDiaGP).trigger("change");  
	   $("#boltspcweb").val(BspacingGP).trigger("change");  
	   $("#edgedistanceweb").val(EDistandanceGP).trigger("change");  
	   $("#boltgageweb").val(GageGP).trigger("change"); 
	
	
   
}

function  getWelddetailsweb(){
   $("#ddlcjpweb").val(WeldTypeDefaultValue).trigger("change"); 
   $("#wieldsizecpweb").val(weldSizeGP).trigger("change"); 
   if ( $("#ddlcjpweb").val()=="CJP") {
	   $("#wieldsizecpweb").val("").trigger("change"); 
	   $("#wieldsizecpweb").attr("disabled", true);
	   $("#wieldsizecpweb").prop('required',false);
	   $('#wieldsizecpwebDIV .select2-container--default .select2-selection--single').css("border-color","");
		
	}else {
		  $("#wieldsizecpweb").attr("disabled", false);
		  $("#wieldsizecpweb").prop('required',true);
	}		   
}

$("#ddlcjpweb").change(function() {  
if ( $("#ddlcjpweb").val()=="CJP") {
   $("#wieldsizecpweb").val("").trigger("change"); 
   $("#wieldsizecpweb").attr("disabled", true);
   $("#wieldsizecpweb").prop('required',false);
   $('#wieldsizecpwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	
}else {
	  $("#wieldsizecpweb").attr("disabled", false);
	  $("#wieldsizecpweb").prop('required',true);
}

});



function resetDrodown(dropdownid)
 {
	 $("#"+dropdownid).empty();	        	
    	
	       	$("#"+dropdownid).append($('<option/>', {
	     		value: "",
	     		text: "Select"
	     	})); 
	 
 }


$("#beamprofile").change( function(){
	if (!$('#beamprofile').val()) {
		$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});


$("#clipAngelSize").change( function(){
	if (!$('#clipAngelSize').val()) {
		$('#clipAngelSizeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#clipAngelSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltgradeweb").change( function(){
	if (!$('#boltgradeweb').val()) {
		$('#boltgradewebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgradewebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});


$("#boltdiaweb").change( function(){
	if (!$('#boltdiaweb').val()) {
		$('#boltdiawebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltdiawebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#noofboltrwweb").change( function(){
	if (!$('#noofboltrwweb').val()) {
		$('#noofboltrwwebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofboltrwwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#boltspcweb").change( function(){
	if (!$('#boltspcweb').val()) {
		$('#boltspcwebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#noofCol").change( function(){
	if (!$('#noofCol').val()) {
		$('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltspcWebX").change( function(){
	if (!$('#boltspcWebX').val()) {
		$('#boltspcWebXDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcWebXDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#edgedistanceweb").change( function(){
	if (!$('#edgedistanceweb').val()) {
		$('#edgedistancewebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#edgedistancewebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#boltgageweb").change( function(){
	if (!$('#boltgageweb').val()) {
		$('#boltgagewebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgagewebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#ddlcjpweb").change( function(){
	if (!$('#ddlcjpweb').val()) {
		$('#ddlcjpwebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#ddlcjpwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#wieldsizecpweb").change( function(){
	if (!$('#wieldsizecpweb').val()) {
		$('#wieldsizecpwebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#wieldsizecpwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
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

$("#noofblotrow").change( function(){
	if (!$('#noofblotrow').val()) {
		$('#noofblotrowDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofblotrowDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#boltspacingY").change( function(){
	if (!$('#boltspacingY').val()) {
		$('#boltspacingYDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspacingYDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltgagefield").change( function(){
	if (!$('#boltgagefield').val()) {
		$('#boltgagediv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgagediv .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#edgedis").change( function(){
	if (!$('#edgedis').val()) {
		$('#edgedisdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#edgedisdiv .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#thisdisable").change( function(){
	if (!$('#thisdisable').val()) {
		$('#thisdisablediv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#thisdisablediv .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#sheartp").change( function(){
	if (!$('#sheartp').val()) {
		$('#sheartpdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#sheartpdiv .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#stabilizerWSize").change( function(){
		if (!$('#stabilizerWSize').val()) {
			$('#stabilizerWSizediv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#stabilizerWSizediv .select2-container--default .select2-selection--single').css("border-color","");
		}
 });

$("#shearplatethicknesswebD").change( function(){
	if (!$('#shearplatethicknessweb').val()) {
		$('#shearplatethicknesswebDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#shearplatethicknesswebDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

function removeRedBoarder() {

	$('#beamprofileDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#clipAngelSizeDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltgradewebDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltdiawebDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#noofboltrwwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltspcwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#noofColDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltspcWebXDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#edgedistancewebDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltgagewebDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#ddlcjpwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#wieldsizecpwebDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#platethicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#noofblotrowDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltspacingYDIV .select2-container--default .select2-selection--single').css("border-color","");
	$('#boltgagediv .select2-container--default .select2-selection--single').css("border-color","");
	$('#edgedisdiv .select2-container--default .select2-selection--single').css("border-color","");
	$('#thisdisablediv .select2-container--default .select2-selection--single').css("border-color","");
	$('#sheartpdiv .select2-container--default .select2-selection--single').css("border-color","");
	$('#stabilizerWSizediv .select2-container--default .select2-selection--single').css("border-color","");
	$('#shearplatethicknesswebDIV .select2-container--default .select2-selection--single').css("border-color","");
		

}



$("#ddlMomentSM").change( function(){
	$(".clipAngelDetails").hide();
	$("#shearplatethicknesswebdetails").hide();
	resetDrodown('webconnectiontype');
	resetDrodown('btocClip2');
	resetDrodown('btocClip1');
	/* $(".clipAngelDetails").hide();
	 $(".cAngelVal").val('').trigger("change");   */
if ($("#ddlMomentSM").val()=='Beam') {
	var WebConnectionTypeOption1 = WebConnectionType_MomentConnection1;
	$.each(jQuery.parseJSON(WebConnectionTypeOption1), function(key, value) {   
	     $('#webconnectiontype')
	     .append($("<option></option>")
                 .attr("value",value.ShearType)
                 .text(value.ShearType)); 
	});
}else if ($("#ddlMomentSM").val()=='Column') {
	var WebConnectionTypeOption1 = WebConnectionType_MomentConnection2;
	 
	$.each(jQuery.parseJSON(WebConnectionTypeOption1), function(key, value) {   
	     $('#webconnectiontype')
	         .append($("<option></option>")
	                    .attr("value",value.ShearType)
	                    .text(value.ShearType)); 
	});
	
}
	
	
});
	    
$("#webconnectiontype").change( function(){
	if (!$("#webconnectiontype").val()) {
		$(".clipAngelDetails").hide();
		$("#shearplatethicknesswebdetails").hide();
	}else if($("#webconnectiontype").val()=="Conventional Shear Tab"||$("#webconnectiontype").val()=="Extended Shear Tab"){
		$("#shearplatethicknesswebdetails").show();
		$(".clipAngelDetails").hide();
	}else  if($("#webconnectiontype").val()=="Clip Angle"){
		$("#shearplatethicknesswebdetails").hide();
		$(".clipAngelDetails").show();
	}
	
});   			