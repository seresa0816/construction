
function genericValidatorfunction(modalid) 
{ 
	var flagvalue = true;
		    if(modalid == "bc1apply" || modalid == "btnmodify"){
		    	if(($('#columnprofile').prop('selectedIndex')) == 0 ) {
		    		 $("#colprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
		    		 }if(($('#columngrade').prop('selectedIndex')) == 0 ){
					$("#colgrade .select2-container--default .select2-selection--single").addClass("importantRed");
					 flagvalue = false;
					}
					
					  var ckbox= $('#stiffnerplate1');
				        if (ckbox.is(':checked')){
				        	if(($('#platethickness1').prop('selectedIndex')) == 0) {
								$("#platethickness1").addClass("importantRed");
								 flagvalue = false;
							}
				        	if( !$('#columncount').val() ) {
				        		$('#columncount').val("0");
							}
				        	if( !$('#columnspacing1').val() ) {
				        		$('#columnspacing1').val("0");
							}
				        	if( !$('#cplatewidth1').val() ) {
				        		$('#cplatewidth1').val("0");
							}
				        	
				        	if(($('#weldtype1').prop('selectedIndex')) == 0) {
								$("#weldtype1").addClass("importantRed");
								 flagvalue = false;
							}
				        	if (( $("#weldtype1").val()=="CJP") ||  $("#weldtype1").val()=="select"){
				        		$("#plateweldthickness_in").removeClass("importantRed");
							
				        	}else{
				        		if(($('#plateweldthickness_in').prop('selectedIndex')) == 0) {
				        		$("#plateweldthickness_in").addClass("importantRed");
								 flagvalue = false;
				        		}
				        	}
				        
				        }
				        if( !$('#colBottomEleTxt').val() ) {
							$('#colBottomEleTxt').val("0");
							}
						if( !$('#colTopEleTxt').val() ) {
							$('#colTopEleTxt').val("0");
						} 
				     var spliceCount=parseInt($('#splicecount').val() );
				        if(spliceCount>0){
				        	spliceftcheck();
				        }
				        return flagvalue;  
		    }
		    else if(modalid == "bc4apply" || modalid == "bc4modify"){
		    	if(($('#boxcolumnweld').prop('selectedIndex')) == 0) {
					$("#boxcolumnweld").addClass("importantRed");
					 flagvalue = false;
				}
		    	
		    	if (( $("#boxcolumnweld").val()=="CJP") ||  $("#boxcolumnweld").val()=="select"){
	        		$("#fillet").removeClass("importantRed");
				
	        	}else{
	        		if(($('#fillet').prop('selectedIndex')) == 0) {
	        		$("#fillet").addClass("importantRed");
					 flagvalue = false;
	        		}
	        	}
	        
	        
		     	
		    	if(($('#boxcolumngrade').prop('selectedIndex')) == 0 ) {
		    		 $("#boxgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if( !$('#bc4depthaft').val() ) {
		    		$('#bc4depthaft').val("0");
				}
		    	if( !$('#bc4widthbft').val() ) {
		    		$('#bc4widthbft').val("0");
				}
		    	if( !$('#bc4bcbelevationft').val() ) {
		    		$('#bc4bcbelevationft').val("0");
				}
		    	if( !$('#bc4bctelevationft').val() ) {
		    		$('#bc4bctelevationft').val("0");
				}
		    	var spliceCount=parseInt($('#splicecount').val() );
		        if(spliceCount>0){
		        	spliceftcheck();
		        }
		    	 return flagvalue; 
		    }
		    else if(modalid == "bc2apply" || modalid == "bc2modify"){
		    	if(($('#columnmodal2grade').prop('selectedIndex')) == 0 ) {
		    		 $("#builtigrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#columnmodal2weldtype').prop('selectedIndex')) == 0) {
					$("#columnmodal2weldtype").addClass("importantRed");
					 flagvalue = false;
				}
		    	
		    	if (( $("#columnmodal2weldtype").val()=="CJP") ||  $("#columnmodal2weldtype").val()=="select"){
	        		$("#columnmodalweldsize").removeClass("importantRed");
				
	        	}else{
	        		if(($('#columnmodalweldsize').prop('selectedIndex')) == 0) {
	        		$("#columnmodalweldsize").addClass("importantRed");
					 flagvalue = false;
	        		}
	        	}
		    	if(($('#bc2weldtype').prop('selectedIndex')) == 0) {
					$("#bc2weldtype").addClass("importantRed");
					 flagvalue = false;
				}
		    	if (( $("#bc2weldtype").val()=="CJP") ||  $("#bc2weldtype").val()=="select"){
	        		$("#bc2weldsizein").removeClass("importantRed");
				
	        	}else{
	        		if(($('#bc2weldsizein').prop('selectedIndex')) == 0) {
	        		$("#bc2weldsizein").addClass("importantRed");
					 flagvalue = false;
	        		}
	        	}
		    	
		    	
		    	
		    	if( !$('#bc2tfpwidthft').val() ) {
		    		$('#bc2tfpwidthft').val("0");
				}
		    	if( !$('#bc2wpwidthft').val() ) {
		    		$('#bc2wpwidthft').val("0");
				}
		    	if( !$('#bc2cbelevationft').val() ) {
		    		$('#bc2cbelevationft').val("0");
				}
		    	if( !$('#bc2ctelevationft').val() ) {
		    		$('#bc2ctelevationft').val("0");
				}
		    	var spliceCount=parseInt($('#boxsplicecount').val() );
		        if(spliceCount>0){
		        	spliceftcheck();
		        }
		    	 return flagvalue; 
		    }else if(modalid == "bc3apply" || modalid == "bc3modify"){
		    	if(($('#columnmodal3profile1').prop('selectedIndex')) == 0 ) {
		    		 $("#columnwprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#columnmodal3profile4').prop('selectedIndex')) == 0 ) {
		    		 $("#columnwtprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#gradecolumnmodal3').prop('selectedIndex')) == 0 ) {
		    		 $("#columnwgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#columnmodal3grade2').prop('selectedIndex')) == 0 ) {
		    		 $("#columnwtgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#columnmodal3weldtype').prop('selectedIndex')) == 0) {
					$("#columnmodal3weldtype").addClass("importantRed");
					 flagvalue = false;
				}
		    	
		    	if (( $("#columnmodal3weldtype").val()=="CJP") ||  $("#columnmodal3weldtype").val()=="select"){
	        		$("#columnmodal3weldsize").removeClass("importantRed");
				
	        	}else{
	        		if(($('#columnmodal3weldsize').prop('selectedIndex')) == 0) {
	        		$("#columnmodal3weldsize").addClass("importantRed");
					 flagvalue = false;
	        		}
	        	}
		    	
		    	
		    	if( !$('#bc3cbelevationft').val() ) {
		    		$('#bc3cbelevationft').val("0");
				}
		    	if( !$('#bc3ctelevationft').val() ) {
		    		$('#bc3ctelevationft').val("0");
				}
		    	if( !$('#bc3count').val() ) {
		    		$('#bc3count').val("0");
				}
		    	if( !$('#bc3wtlengthft').val() ) {
		    		$('#bc3wtlengthft').val("0");
				}
		    	var spliceCount=parseInt($('#splicecount').val() );
		        if(spliceCount>0){
		        	spliceftcheck();
		        }
		    	 return flagvalue; 
			    }
		    else if(modalid == "bc5apply" || modalid == "bc5modify"){
		    	if(($('#modalcolumn1profile2').prop('selectedIndex')) == 0 ) {
		    		 $("#columnchannelprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#modalcolumn1grade').prop('selectedIndex')) == 0 ) {
		    		 $("#columnchannelgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	 if ($('#ddlbuiltup1').val() == 'Directly welded') {
		    	if(($('#columnmodal1weldtype').prop('selectedIndex')) == 0) {
					$("#columnmodal1weldtype").addClass("importantRed");
					 flagvalue = false;
				}
		    	
		    	if (( $("#columnmodal1weldtype").val()=="CJP") ||  $("#columnmodal1weldtype").val()=="select"){
	        		$("#columnmodal1weldsize").removeClass("importantRed");
				
	        	}else{
	        		if(($('#columnmodal1weldsize').prop('selectedIndex')) == 0) {
	        		$("#columnmodal1weldsize").addClass("importantRed");
					 flagvalue = false;
	        		}
	        	}
		      	
		    	 }
		    	if ($('#ddlbuiltup1').val() == 'Stiffener Plate'){
		    		if(($('#spacingbtwchannel').prop('selectedIndex')) == 0) {
						$("#spacingbtwchannel").addClass("importantRed");
						 flagvalue = false;
					}
		    		if(($('#bc1platethickness').prop('selectedIndex')) == 0) {
						$("#bc1platethickness").addClass("importantRed");
						 flagvalue = false;
					}
			    	if(($('#columnmodal1weldtype1').prop('selectedIndex')) == 0) {
						$("#columnmodal1weldtype1").addClass("importantRed");
						 flagvalue = false;
					}
			    	
			    	if (( $("#columnmodal1weldtype1").val()=="CJP") ||  $("#columnmodal1weldtype1").val()=="select"){
		        		$("#columnmodal1weldsize1").removeClass("importantRed");
					
		        	}else{
		        		if(($('#columnmodal1weldsize1').prop('selectedIndex')) == 0) {
		        		$("#columnmodal1weldsize1").addClass("importantRed");
						 flagvalue = false;
		        		}
		        	}
			    	
			    	
			    	if( !$('#bc1count').val() ) {
			    		$('#bc1count').val("0");
					}
			    	if( !$('#bc1platelengthft').val() ) {
			    		$('#bc1platelengthft').val("0");
					}
			    	if( !$('#bc1platewidthft').val() ) {
			    		$('#bc1platewidthft').val("0");
					}
		    	}
		    	
		    	
		    	if( !$('#bc1baseelevationft').val() ) {
		    		$('#bc1baseelevationft').val("0");
				}
		    	if( !$('#bc1topelevationft').val() ) {
		    		$('#bc1topelevationft').val("0");
				}
		    	var spliceCount=parseInt($('#splicecount').val() );
		        if(spliceCount>0){
		        	spliceftcheck();
		        }
		    	 return flagvalue; 
			    }
		    
		    else if(modalid == "postapply" || modalid == "postmodify"){
		    	if(($('#postProfile').prop('selectedIndex')) == 0 ) {
		    		 $("#postprofiles .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#postGrade').prop('selectedIndex')) == 0 ) {
		    		var gradename=$("#postGrade").find('option:selected').text();
		    		if(gradename == "Select"){
		    		 $("#postgrades .select2-container--default .select2-selection--single").addClass("importantRed");
		    		
		    		 flagvalue = false;
		    		}
					}
		    	
		    	if( !$('#postTopElevationFt').val() ) {
		    		$('#postTopElevationFt').val("0");
				}
		    	if( !$('#postBottomElevationFt').val() ) {
		    		$('#postBottomElevationFt').val("0");
				}
		    	if( !$('#xDirectionFt').val() ) {
		    		$('#xDirectionFt').val("0");
				}
		    	if( !$('#yDirectionFt').val() ) {
		    		$('#yDirectionFt').val("0");
				}
		    	 return flagvalue; 
		    }
		    else if(modalid == "PeriApply" || modalid == "perimodify"){
		    	if(($('#peribeamprofile').prop('selectedIndex')) == 0 ) {
		    		 $("#periprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#peribeamgrade').prop('selectedIndex')) == 0 ) {
		    		var gradename=$("#peribeamgrade").find('option:selected').text();
		    		if(gradename == "Select"){
		    		 $("#perigrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}}
		    	if( !$('#pbtosft').val() ) {
		    		$('#pbtosft').val("0");
				}
		    	
		    	$('#pcamber').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#pcamber1').prop('selectedIndex')) == 0) {
							$("#pcamber1").addClass("importantRed");
							flagvalue = false;
						}	
		    		}
		    	});
		    	
		    	$('#pshear').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#psheardia').prop('selectedIndex')) == 0) {
							$("#psheardia").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#pshearlen').prop('selectedIndex')) == 0) {
							$("#pshearlen").addClass("importantRed");
							flagvalue = false;
						}	
		    			if( !$('#pshear3').val() ) {
		    				$("#pshear3").addClass("importantRed");
							flagvalue = false;
						}
		    		}
		    		
		    		
		    	});
		    	$('#pstiffenerplate').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#splshear2').prop('selectedIndex')) == 0) {
							$("#splshear2").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#splshear4').prop('selectedIndex')) == 0) {
							$("#splshear4").addClass("importantRed");
							flagvalue = false;
						}	
		    			if (( $("#splshear4").val()=="CJP") ||  $("#splshear4").val()=="select"){
			        		$("#splshear5").removeClass("importantRed");
						
			        	}else{
			        		if(($('#splshear5').prop('selectedIndex')) == 0) {
			        		$("#splshear5").addClass("importantRed");
							 flagvalue = false;
			        		}
			        	}
				    	
		    		
		    			if( !$('#splshear1').val() ) {
		    				$("#splshear1").addClass("importantRed");
							flagvalue = false;
						}
		    		}
		    		
			    	});
		     $("#periBeamFrame").keyup(function(e){
		    if($('#periBeamFrame').val()) {
		    		if(($('#periBeamConnMethod').prop('selectedIndex')) == 0) {
						$("#periBeamConnMethod").addClass("importantRed");
						flagvalue = false;
					}	
		    	}
		    });
		     return flagvalue; 
		    }
		    else if(modalid == "GbeamApply" || modalid == "GbeamModify"){
		    	if(($('#gBeamProfile').prop('selectedIndex')) == 0 ) {
		    		 $("#gridprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	
		    	if(($('#gBeamMaterialGrade').prop('selectedIndex')) == 0 ) {
		    		var gradename=$("#gBeamMaterialGrade").find('option:selected').text();
		    		if(gradename == "Select"){
		    		 $("#gridgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		
		    		 flagvalue = false;
		    		}
					}
		    	
		    	
		    	if( !$('#gBeamTOS').val() ) {
		    		$('#gBeamTOS').val("0");
				}
		    	$('#pcamber').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#gcamber1').prop('selectedIndex')) == 0) {
							$("#gcamber1").addClass("importantRed");
							flagvalue = false;
						}	
		    		}
		    	});
		    	$('#gshear').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#gshear1').prop('selectedIndex')) == 0) {
							$("#gshear1").addClass("importantRed");
							flagvalue = false;
						}
		    			if(($('#gshear2').prop('selectedIndex')) == 0) {
							$("#gshear2").addClass("importantRed");
							flagvalue = false;
						}
		    			if( !$('#gshear3').val() ) {
							$("#gshear3").addClass("importantRed");
							flagvalue = false;
						}
		    		}
		    	});
		    	$('#pshear').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#gspshear2').prop('selectedIndex')) == 0) {
							$("#gspshear2").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#gspshear4').prop('selectedIndex')) == 0) {
							$("#gspshear4").addClass("importantRed");
							flagvalue = false;
						}	
		    			if (( $("#gspshear4").val()=="CJP") ||  $("#gspshear4").val()=="select"){
			        		$("#gspshear5").removeClass("importantRed");
						
			        	}else{
			        		if(($('#gspshear5').prop('selectedIndex')) == 0) {
			        		$("#gspshear5").addClass("importantRed");
							 flagvalue = false;
			        		}
			        	}
		    		
		    			if( !$('#gspshear3').val() ) {
							$("#gspshear3").addClass("importantRed");
							flagvalue = false;
						}
		    		}
		    		
			    	});
		    	 $("#gBeamFrame").keyup(function(e){
		    	 if($('#gBeamFrame').val()) {
			    		if(($('#gbfconnectionmethod').prop('selectedIndex')) == 0) {
							$("#gbfconnectionmethod").addClass("importantRed");
							flagvalue = false;
						}	
			    		
			    	}
		    });
		    	 return flagvalue; 	 
		    }
		    else if(modalid == "infillbeamApply" || modalid == "infillbeamModify"){
		    	if(($('#infillbeamprofile').prop('selectedIndex')) == 0 ) {
		    		 $("#infillprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	
		    	if(($('#infillbeamgrade').prop('selectedIndex')) == 0 ) {
		    		var gradename=$("#infillbeamgrade").find('option:selected').text();
		    		if(gradename == "Select"){
		    		 $("#infillgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		
		    		 flagvalue = false;
		    		}
					}
		    	
		    	if(($('#noofbeams1').prop('selectedIndex')) == 0) {
					$("#noofbeams1").addClass("importantRed");
					flagvalue = false;
				}	
		    	if( !$('#itosft').val() ) {
		    		$('#itosft').val("0");
				}
		    	$('#icamber').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#icamber1').prop('selectedIndex')) == 0) {
							$("#icamber1").addClass("importantRed");
							flagvalue = false;
						}	
		    		}
		    	});
		    	$('#ishear').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#ishear1').prop('selectedIndex')) == 0) {
							$("#ishear1").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#ishear2').prop('selectedIndex')) == 0) {
							$("#ishear2").addClass("importantRed");
							flagvalue = false;
						}	
		    			if( !$('#ishear3').val() ) {
							$("#ishear3").addClass("importantRed");
							flagvalue = false;
						}	
		    			
		    		}
		    		
			    	});
		    	$('#istiffenerplate').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#ispshear2').prop('selectedIndex')) == 0) {
							$("#ispshear2").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#ispshear4').prop('selectedIndex')) == 0) {
							$("#ispshear4").addClass("importantRed");
							flagvalue = false;
						}	
		    			if (( $("#ispshear4").val()=="CJP") ||  $("#ispshear4").val()=="select"){
			        		$("#ispshear5").removeClass("importantRed");
						
			        	}else{
			        		if(($('#ispshear5').prop('selectedIndex')) == 0) {
			        		$("#ispshear5").addClass("importantRed");
							 flagvalue = false;
			        		}
			        	}
		    		
		    			
		    			if( !$('#ispshear1').val() ) {
							$("#ispshear1").addClass("importantRed");
							flagvalue = false;
						}
		    		}
		    		
			    	});
		    	 $("#iframeNo").keyup(function(e){
			    	 if($('#iframeNo').val()) {
				    		if(($('#iframeconnection').prop('selectedIndex')) == 0) {
								$("#iframeconnection").addClass("importantRed");
								flagvalue = false;
							}	
				    		
				    	}
			    });
		    	 return flagvalue; 
		    }	
		    else if(modalid == "clapply" || modalid == "clmodify"){
		    	if(($('#cantileverbeamprofile').prop('selectedIndex')) == 0 ) {
		    		 $("#cantileverprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#cantilevermaterialgrade').prop('selectedIndex')) == 0 ) {
		    		var gradename=$("#cantilevermaterialgrade").find('option:selected').text();
		    		if(gradename == "Select"){
		    		 $("#cantilevergrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		
		    		 flagvalue = false;
		    		}
					}
		    	
		    	if( !$('#lengthofbeamft').val() ) {
		    		$('#lengthofbeamft').val("0");
				}
		    	if( !$('#clbtosft').val() ) {
		    		$('#clbtosft').val("0");
				}
		    	$('#cshear').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#cshear1').prop('selectedIndex')) == 0) {
							$("#cshear1").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#cshear2').prop('selectedIndex')) == 0) {
							$("#cshear2").addClass("importantRed");
							flagvalue = false;
						}	
		    			if( !$('#cshear3').val() ) {
							$("#cshear3").addClass("importantRed");
							flagvalue = false;
						}	
		    			
		    		}
		    		
			    	});
		    	$('#stiffnerplate').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#caspshear2').prop('selectedIndex')) == 0) {
							$("#caspshear2").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#caspshear4').prop('selectedIndex')) == 0) {
							$("#caspshear4").addClass("importantRed");
							flagvalue = false;
						}	
		    			
		    			if (( $("#caspshear4").val()=="CJP") ||  $("#caspshear4").val()=="select"){
			        		$("#caspshear5").removeClass("importantRed");
						
			        	}else{
			        		if(($('#caspshear5').prop('selectedIndex')) == 0) {
			        		$("#caspshear5").addClass("importantRed");
							 flagvalue = false;
			        		}
			        	}
		    			
		    			if( !$('#caspshear1').val() ) {
							$("#caspshear1").addClass("importantRed");
							flagvalue = false;
						}
		    		}
		    		
			    	});
		    	 $("#caBeamframe").keyup(function(e){
			    	 if($('#caBeamframe').val()) {
				    		if(($('#caBeamConnMethod').prop('selectedIndex')) == 0) {
								$("#caBeamConnMethod").addClass("importantRed");
								flagvalue = false;
							}	
				    		
				    	}
			    });
		    	 return flagvalue; 
		    }
		    else if(modalid == "PlateApply" || modalid == "PlateModify"){
		    	if(($('#plategridergrade').prop('selectedIndex')) == 0 ) {
		    		 $("#girdergrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if( !$('#pgtfpwft').val() ) {
		    		$('#pgtfpwft').val("0");
				}
		    	if( !$('#pgbfpwft').val() ) {
		    		$('#pgbfpwft').val("0");
				}
		    	if( !$('#pgwpwft').val() ) {
		    		$('#pgwpwft').val("0");
				}
		    	if( !$('#pgtosft').val() ) {
		    		$('#pgtosft').val("0");
				}
		    	$('#pgcamber').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#plategridercamber').prop('selectedIndex')) == 0) {
							$("#plategridercamber").addClass("importantRed");
							flagvalue = false;
						}	
		    		}
		    	});
		    	if(($('#plategriderwebtype1').prop('selectedIndex')) == 0) {
					$("#plategriderwebtype1").addClass("importantRed");
					flagvalue = false;
				}	
		    	
		    	if (( $("#plategriderwebtype1").val()=="CJP") ||  $("#plategriderwebtype1").val()=="select"){
	        		$("#plategriderwebsize1").removeClass("importantRed");
				
	        	}else{
	        		if(($('#plategriderwebsize1').prop('selectedIndex')) == 0) {
	        		$("#plategriderwebsize1").addClass("importantRed");
					 flagvalue = false;
	        		}
	        	}
		    	
		    	
		    	if(($('#plategriderwebtype2').prop('selectedIndex')) == 0) {
					$("#plategriderwebtype2").addClass("importantRed");
					flagvalue = false;
				}	
		    	if (( $("#plategriderwebtype2").val()=="CJP") ||  $("#plategriderwebtype2").val()=="select"){
	        		$("#plategriderwebsize1").removeClass("importantRed");
				
	        	}else{
	        		if(($('#plategriderwebsize2').prop('selectedIndex')) == 0) {
	        		$("#plategriderwebsize2").addClass("importantRed");
					 flagvalue = false;
	        		}
	        	}
		    		    	 	$('#pgShearstud').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#pgdia').prop('selectedIndex')) == 0) {
							$("#pgdia").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#pglength1').prop('selectedIndex')) == 0) {
							$("#pglength1").addClass("importantRed");
							flagvalue = false;
						}	
		    			if( !$('#pgcount').val() ) {
							$("#pgcount").addClass("importantRed");
							flagvalue = false;
						}	
		    			
		    		}
		    		
			    	});
		    	 	 return flagvalue; 
		    }
		    else if(modalid == "hbapply" || modalid == "hbmodify"){
		    	if(($('#hBraceProfile').prop('selectedIndex')) == 0 ) {
		    		 $("#hbprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	if(($('#hBraceMaterialGrade').prop('selectedIndex')) == 0 ) {
		    		var gradename=$("#hBraceMaterialGrade").find('option:selected').text();
		    		if(gradename == "select"){
		    		 $("#hbgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		
		    		 flagvalue = false;
		    		}
					}
		    
		    	if(($('#hBraceShapes').prop('selectedIndex')) == 0) {
					$("#hBraceShapes").addClass("importantRed");
					flagvalue = false;
				}	
		    	if( !$('#hBraceLocation').val() ) {
		    		$('#hBraceLocation').val("0");
				}	
		    	 return flagvalue; 	
		    }
		    else if(modalid == "vbapply" || modalid == "vbmodify"){
		    	if(($('#vBraceProfile').prop('selectedIndex')) == 0 ) {
		    		 $("#vbprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	
		    	if(($('#vBraceMaterialGrade').prop('selectedIndex')) == 0 ) {
		    		var gradename=$("#vBraceMaterialGrade").find('option:selected').text();
		    		if(gradename == "select"){
		    		 $("#vbgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		
		    		 flagvalue = false;
		    		}
					}
		    
		    	
		    	if(($('#vBraceShapes').prop('selectedIndex')) == 0) {
					$("#vBraceShapes").addClass("importantRed");
					flagvalue = false;
				}	
		    	 return flagvalue; 
		    }
		    else if(modalid == "PourApply" || modalid == "pourmodify"){
		    	 if ($('#psMaterial').val() == 'Angle') {
		    	if(($('#pourstopprofile').prop('selectedIndex')) == 0 ) {
		    		 $("#pourprofile .select2-container--default .select2-selection--single").addClass("importantRed");
		    		 flagvalue = false;
					}
		    	 }else if ($('#psMaterial').val() == 'Bent Plate') {
		    		 if(($('#pourstopthickness').prop('selectedIndex')) == 0) {
							$("#pourstopthickness").addClass("importantRed");
							flagvalue = false;
						}	
		    		 if( !$('#slabEdgeFt').val() ) {
				    		$('#slabEdgeFt').val("0");
						}
		    	 }
		    	if(($('#pourstopgrade').prop('selectedIndex')) == 0 ) {
		    		var gradename=$("#pourstopgrade").find('option:selected').text();
		    		if(gradename == "select"){
		    		 $("#pourgrade .select2-container--default .select2-selection--single").addClass("importantRed");
		    		
		    		 flagvalue = false;
		    		}
					}
		    		    	
		    	if(($('#overlapLength').prop('selectedIndex')) == 0) {
					$("#overlapLength").addClass("importantRed");
					flagvalue = false;
				}	
		    	 
		    	
		    		
		   	$('#psmswitch').change(function() {
		    		if($(this).prop("checked") == true){
		    			if(($('#switchdia').prop('selectedIndex')) == 0) {
							$("#switchdia").addClass("importantRed");
							flagvalue = false;
						}	
		    			if(($('#switchlength1').prop('selectedIndex')) == 0) {
							$("#switchlength1").addClass("importantRed");
							flagvalue = false;
						}	
		    			if( !$('#switchcount').val() ) {
							$("#switchcount").addClass("importantRed");
							flagvalue = false;
						}	
		    		}
		    });
		    	if ($('#pourStopBeamConn').val() == 'Welded') {
		    	if(($('#weldSize').prop('selectedIndex')) == 0) {
					$("#weldSize").addClass("importantRed");
					flagvalue = false;
				}	
		    	if( !$('#weldLengthFt').val() ) {
		    		$('#weldLengthFt').val("0");
				}		
    			if( !$('#pitchFt').val() ) {
    				$('#pitchFt').val("0");
				}
		    	}else if ($('#pourStopBeamConn').val() == 'Bolted') {
    			if(($('#boltDia').prop('selectedIndex')) == 0) {
					$("#boltDia").addClass("importantRed");
					flagvalue = false;
				}	
    			if(($('#boltGrade').prop('selectedIndex')) == 0) {
					$("#boltGrade").addClass("importantRed");
					flagvalue = false;
				}	
    			if(($('#boltrows').prop('selectedIndex')) == 0) {
					$("#boltrows").addClass("importantRed");
					flagvalue = false;
				}	
    			if( !$('#boltSpacingFt').val() ) {
    				$('#boltSpacingFt').val("0");
				}
		    	}
    			 return flagvalue; 
		    }
		    function spliceftcheck(){
		    	 if( !$("#splice1Ft").val() ) {
		        		$('#splice1Ft').val("0");
					} if( !$("#splice2Ft").val() ) {
		        		$('#splice2Ft').val("0");
					}if( !$("#splice3Ft").val() ) {
		        		$('#splice3Ft').val("0");
					}if( !$("#splice4Ft").val() ) {
		        		$('#splice4Ft').val("0");
					}if( !$("#splice5Ft").val() ) {
		        		$('#splice5Ft').val("0");
					}if( !$("#splice6Ft").val() ) {
		        		$('#splice6Ft').val("0");
					}if( !$("#splice7Ft").val() ) {
		        		$('#splice7Ft').val("0");
					}if( !$("#splice8Ft").val() ) {
		        		$('#splice8Ft').val("0");
					}if( !$("#splice9Ft").val() ) {
		        		$('#splice9Ft').val("0");
					}if( !$("#splice10Ft").val() ) {
		        		$('#splice10Ft').val("0");
					}
					 if( !$("#splice1DepthAFt").val() ) {
			        		$('#splice1DepthAFt').val("0");
						}if( !$("#splice2DepthAFt").val() ) {
			        		$('#splice2DepthAFt').val("0");
						}if( !$("#splice3DepthAFt").val() ) {
			        		$('#splice3DepthAFt').val("0");
						}if( !$("#splice4DepthAFt").val() ) {
			        		$('#splice4DepthAFt').val("0");
						}if( !$("#splice5DepthAFt").val() ) {
			        		$('#splice5DepthAFt').val("0");
						}if( !$("#splice6DepthAFt").val() ) {
			        		$('#splice6DepthAFt').val("0");
						}if( !$("#splice7DepthAFt").val() ) {
			        		$('#splice7DepthAFt').val("0");
						}if( !$("#splice8DepthAFt").val() ) {
			        		$('#splice8DepthAFt').val("0");
						}if( !$("#splice9DepthAFt").val() ) {
			        		$('#splice9DepthAFt').val("0");
						}if( !$("#splice10DepthAFt").val() ) {
			        		$('#splice10DepthAFt').val("0");
						}
						 if( !$("#splice1WidthBFt").val() ) {
				        		$('#splice1WidthBFt').val("0");
							}if( !$("#splice2WidthBFt").val() ) {
				        		$('#splice2WidthBFt').val("0");
							}if( !$("#splice3WidthBFt").val() ) {
				        		$('#splice3WidthBFt').val("0");
							}if( !$("#splice4WidthBFt").val() ) {
				        		$('#splice4WidthBFt').val("0");
							}if( !$("#splice5WidthBFt").val() ) {
				        		$('#splice5WidthBFt').val("0");
							}if( !$("#splice6WidthBFt").val() ) {
				        		$('#splice6WidthBFt').val("0");
							}if( !$("#splice7WidthBFt").val() ) {
				        		$('#splice7WidthBFt').val("0");
							}if( !$("#splice8WidthBFt").val() ) {
				        		$('#splice8WidthBFt').val("0");
							}if( !$("#splice9WidthBFt").val() ) {
				        		$('#splice9WidthBFt').val("0");
							}if( !$("#splice10WidthBFt").val() ) {
				        		$('#splice10WidthBFt').val("0");
							}
							 if( !$("#splice1TFPlateWidthFt").val() ) {
					        		$('#splice1TFPlateWidthFt').val("0");
								} if( !$("#splice2TFPlateWidthFt").val() ) {
					        		$('#splice2TFPlateWidthFt').val("0");
								} if( !$("#splice2TFPlateWidthFt").val() ) {
					        		$('#splice2TFPlateWidthFt').val("0");
								} if( !$("#splice3TFPlateWidthFt").val() ) {
					        		$('#splice3TFPlateWidthFt').val("0");
								} if( !$("#splice4TFPlateWidthFt").val() ) {
					        		$('#splice4TFPlateWidthFt').val("0");
								} if( !$("#splice5TFPlateWidthFt").val() ) {
					        		$('#splice5TFPlateWidthFt').val("0");
								} if( !$("#splice6TFPlateWidthFt").val() ) {
					        		$('#splice6TFPlateWidthFt').val("0");
								} if( !$("#splice7TFPlateWidthFt").val() ) {
					        		$('#splice7TFPlateWidthFt').val("0");
								} if( !$("#splice8TFPlateWidthFt").val() ) {
					        		$('#splice8TFPlateWidthFt').val("0");
								} if( !$("#splice9TFPlateWidthFt").val() ) {
					        		$('#splice9TFPlateWidthFt').val("0");
								}if( !$("#splice10TFPlateWidthFt").val() ) {
					        		$('#splice10TFPlateWidthFt').val("0");
								}
								 if( !$("#splice1WebPlateWidthFt").val() ) {
						        		$('#splice1WebPlateWidthFt').val("0");
									}if( !$("#splice2WebPlateWidthFt").val() ) {
						        		$('#splice2WebPlateWidthFt').val("0");
									}if( !$("#splice3WebPlateWidthFt").val() ) {
						        		$('#splice3WebPlateWidthFt').val("0");
									}if( !$("#splice4WebPlateWidthFt").val() ) {
						        		$('#splice4WebPlateWidthFt').val("0");
									}if( !$("#splice5WebPlateWidthFt").val() ) {
						        		$('#splice5WebPlateWidthFt').val("0");
									}if( !$("#splice6WebPlateWidthFt").val() ) {
						        		$('#splice6WebPlateWidthFt').val("0");
									}if( !$("#splice7WebPlateWidthFt").val() ) {
						        		$('#splice7WebPlateWidthFt').val("0");
									}if( !$("#splice8WebPlateWidthFt").val() ) {
						        		$('#splice8WebPlateWidthFt').val("0");
									}if( !$("#splice9WebPlateWidthFt").val() ) {
						        		$('#splice9WebPlateWidthFt').val("0");
									}if( !$("#splice10WebPlateWidthFt").val() ) {
						        		$('#splice10WebPlateWidthFt').val("0");
									}
									 if( !$("#splicePositionLeftEndFt1").val() ) {
							        		$('#splicePositionLeftEndFt1').val("0");
										}if( !$("#splicePositionLeftEndFt2").val() ) {
							        		$('#splicePositionLeftEndFt2').val("0");
										}if( !$("#splicePositionLeftEndFt3").val() ) {
							        		$('#splicePositionLeftEndFt3').val("0");
										}if( !$("#splicePositionLeftEndFt4").val() ) {
							        		$('#splicePositionLeftEndFt4').val("0");
										}if( !$("#splicePositionLeftEndFt5").val() ) {
							        		$('#splicePositionLeftEndFt5').val("0");
										}if( !$("#splicePositionLeftEndFt6").val() ) {
							        		$('#splicePositionLeftEndFt6').val("0");
										}if( !$("#splicePositionLeftEndFt7").val() ) {
							        		$('#splicePositionLeftEndFt7').val("0");
										}if( !$("#splicePositionLeftEndFt8").val() ) {
							        		$('#splicePositionLeftEndFt8').val("0");
										}if( !$("#splicePositionLeftEndFt9").val() ) {
							        		$('#splicePositionLeftEndFt9').val("0");
										}if( !$("#splicePositionLeftEndFt10").val() ) {
							        		$('#splicePositionLeftEndFt10').val("0");
										}
		    }
}