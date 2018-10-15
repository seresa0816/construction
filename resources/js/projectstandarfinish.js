/**
 * 
 */

         $("#save").click(function() {
        	  $("#aesssurDIV .select2-container--default .select2-selection--single").css("border-color","");
			  $("#category1").css("border-color","");
		      $("#txtFireRatingDIV .select2-container--default .select2-selection--single").css("border-color","");
	          $("#ddlFFireDIV .select2-container--default .select2-selection--single").css("border-color","");
	          $("#ddlFSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","");
	          $("#ddlGZincDIV .select2-container--default .select2-selection--single").css("border-color","");
              $("#ddlGSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","");
              $("#txtPrimersurDIV .select2-container--default .select2-selection--single").css("border-color","");
              $("#idno .select2-container--default .select2-selection--single").css("border-color","");
              $("#ddlNoOfCoatsprimer").css("border-color","");
              $("#txtPrimer").css("border-color","");
              $("#mostlycomFP").css("border-color","");
              $("#ddlNoOfCoats1").css("border-color","");
              
              if ($("#nopaint").val()=="Yes"&&!$("#surfacepreparation").val()) {
				  $("#idno .select2-container--default .select2-selection--single").css("border-color","#ff0000");
			}
			
    	
    	  if (!$("#txtPrimersur").val()&&!$("#txtPrimer").val()&&!$("#ddlNoOfCoatsprimer").val()) {
    		 
		}else if ($("#txtPrimersur").val()&&$("#txtPrimer").val()&&$("#ddlNoOfCoatsprimer").val()) {
			 
		}else{
			  if (!$("#txtPrimersur").val()) {
				 $("#txtPrimersurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
			  }
			  if (!$("#txtPrimer").val()) {
            	 $("#txtPrimer").css("border-color","#ff0000");
 				
			}
			  if (!$("#ddlNoOfCoatsprimer").val()) {
           	 $("#ddlNoOfCoatsprimer").css("border-color","#ff0000");
				
			}
		}
           
    	  if (!$("#txtPaintsur").val()&&!$("#txtPaint").val()&&!$("#ddlNoOfCoats1").val()) {
	    		
		  }else if ($("#txtPaintsur").val()&&$("#txtPaint").val()&&$("#ddlNoOfCoats1").val()) {
			 
			}
		  else {
			  if (!$("#txtPaintsur").val()) {
				  $("#txtPaintsurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
			}
			  if (!$("#txtPaint").val()) {
				 
				  $("#txtPaint").css("border-color","#ff0000");	
				}
			  if (!$("#ddlNoOfCoats1").val()) {
				  $("#ddlNoOfCoats1").css("border-color","#ff0000");	
				}
			
    }
    	  if (!$("#ddlGSurface").val()&&!$("#ddlGZinc").val()) {
	    		
		  }else if ($("#ddlGSurface").val()&&$("#ddlGZinc").val()) {
			
			}else{
				if (!$("#ddlGSurface").val()) {
	    			  $("#ddlGSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
	    				
					}
	    		  if (!$("#ddlGZinc").val()) {
	    			  $("#ddlGZincDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
	    				
					}
			}
   

    
    	 if (!$("#ddlFSurface").val()&&!$("#ddlFFire").val()&&!$("#txtFireRating").val()) {
    			
		  } else if($("#ddlFSurface").val()&&$("#ddlFFire").val()&&$("#txtFireRating").val()) {
			
			}
    	 else{
    		 if (!$("#ddlFSurface").val()) {
    			 
    			  $("#ddlFSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
    				
			}
    		  if (!$("#ddlFFire").val()) {
    			  
    			  $("#ddlFFireDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
    				
				}
    		  if (!$("#txtFireRating").val()) {
    			  
    			  $("#txtFireRatingDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
    				
				}
    		 
    	 }
    	 
    	  if (!$("#aesssur").val()&&!$("#category1").val()) {
    		  
		  }else if ($("#aesssur").val()&&$("#category1").val()) {
			
			}
    	  else{
    		  if (!$("#aesssur").val()) {
    			  $("#aesssurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
    		}
    		  if (!$("#category1").val()) {
    			  $("#category1").css("border-color","#ff0000");
			    }
			}
              

        	  var DescriptionandNoofCoats = tableToJSON('table');
        	 var mostCommonlyused=$('#mostlycomFP').val();
        	 if (!mostCommonlyused) {
        		 mostCommonlyused='';
			}
        	 var validation2status=true;
           if ($('#mostlycomFP').val()=="NoPaint") {
        	   
				if (validatePrimer() && validatePainting()&& validateGalvanizing()&&validateFireproofing()&& validateAESS()) {
					validation2status=true;
				}else{
					validation2status=false;
				}
			}
           else if ($('#mostlycomFP').val()=="Paint") {
        	   if (validateNoPaint() && validatePrimer()&& validateGalvanizing()&&validateFireproofing()&& validateAESS()) {
        		   validation2status=true;
				}else{
					validation2status=false;
				}
			}
           else if ($('#mostlycomFP').val()=="Primer") {
        	   if (validateNoPaint()&& validatePainting()&& validateGalvanizing()&&validateFireproofing()&& validateAESS()) {
        		   validation2status=true;
				}else{
					validation2status=false;
				}
			}
           else if ($('#mostlycomFP').val()=="Galvanizing") {
        	   if (validateNoPaint() && validatePrimer() && validatePainting()&&validateFireproofing()&& validateAESS()) {
        		   validation2status=true;
				}else{
					validation2status=false;
				}
			}
           else if ($('#mostlycomFP').val()=="Fire proofing") {
        	   if (validateNoPaint() && validatePrimer() && validatePainting()&& validateGalvanizing()&& validateAESS()) {
        		   validation2status=true;
				}else{
					validation2status=false;
				}
			}
           else if ($('#mostlycomFP').val()=="AESS") {
        	   if (validateNoPaint() && validatePrimer() && validatePainting()&& validateGalvanizing()&&validateFireproofing()) {
        		   validation2status=true;
				}else{
					validation2status=false;
				}
			}
        	 if (validation2status) {
				if (validate()) {
        			   var projectstandardsjs =  { "Finish": { "NoPaint": { "NoPaint": String($('#nopaint').val()), "SSPC_No":  String($('#surfacepreparation').val()) }, "Primer": { "SSPC_No":  String($('#txtPrimersur').val()),"PrimerValue":  String($('#txtPrimer').val()), "NoOfCoatsPrimer":  String($('#ddlNoOfCoatsprimer').val()) }, "Paint": { "SSPC_No":  String($('#txtPaintsur').val()),"PaintValue":DescriptionandNoofCoats }, "Galvanization": { "SSPC_No":  String($('#ddlGSurface').val()), "ZincCoatingThickness":  String($('#ddlGZinc').val()) }, "FireProofing": { "SSPC_No":  String($('#ddlFSurface').val()), "FireProofingType":  String($('#ddlFFire').val()), "FireRating":  String($('#txtFireRating').val()) }, "AESS": { "SSPC_No":  String($('#aesssur').val()), "Category":  String($('#category1').val()) },"Commonlyusedfinishproperty": mostCommonlyused } };
        			      
        	       	   $.ajax({
        	               type : 'POST',
        	                url: "/bimspring/saveProjectStandards",
        	               dataType : 'JSON',
        	               data : {projectstandardsjson:JSON.stringify(projectstandardsjs),stepid:5},
        	               success : function(data, success) {  
        	            	   location.href = "/bimspring/shippinglimits" 	
        	            	 
        	         }, error: function(error){
        					if(error.status == 401){
        	 		   		  	window.location.href = 'logout';
        	 		    	 }
        	 			} 
        	               
        	               
        	       });  
				}
        	 }
        	 	
        }); 

			if (message) {
				showalertInformation(message)
			}
			  function showalertInformation(text) { 
			      
			      $('#alert_placeholder').append
			       ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-circle"></i> ' + text + 
			               '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
			               '</div>')         
			       	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
			           	$("#alertdiv").remove();

			       }, 3500);
			      window.scrollTo(0,0);
			     
			     }
			  
			
			  
			  function validate() {
				  if (!$("#mostlycomFP").val()) {
				    $("#mostlycomFP").css("border-color","#ff0000");
				    showalertInformation("Please fill the highlighted  fields ")
					return false;
				}
				  if ($("#mostlycomFP").val()=="NoPaint") {
					  if ($("#nopaint").val()=="No") {
						  return true;
					}else{
					  
					  if (!$("#surfacepreparation").val()) {
						 $("#idno .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						 showalertInformation("Please fill the highlighted  fields ")
							return false;
						}
					  return true;
					
					  }
				}
				  
				  if ($("#mostlycomFP").val()=="Primer") {
					  if (!$("#txtPrimersur").val()) {
							 $("#txtPrimersurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
								
						}
						  if (!$("#txtPrimer").val()) {
                     	 $("#txtPrimer").css("border-color","#ff0000");
          				
						}
						  if (!$("#ddlNoOfCoatsprimer").val()) {
                    	 $("#ddlNoOfCoatsprimer").css("border-color","#ff0000");
         				
						}
					  if (!$("#txtPrimersur").val()) {
						
						 showalertInformation("Please fill the highlighted  fields ")
						  return false;
					  }
					  if (!$("#txtPrimer").val()) {
						 
						  showalertInformation("Please fill the highlighted  fields ")
						  return false;
						
					}  if (!$("#ddlNoOfCoatsprimer").val()) {
					
						 showalertInformation("Please fill the highlighted  fields ")
							return false;
						
					}
					return true;
				}  
				  
				  if ($("#mostlycomFP").val()=="Paint") {
					  if ($("#txtPaintsur").val()) {
						  $("#txtPaintsurDIV .select2-container--default .select2-selection--single").css("border-color","");
					}
					  if ($("#txtPaint").val()) {
						  $("#txtPaint").css("border-color","");	
						}
					  if ($("#ddlNoOfCoats1").val()) {
						  $("#ddlNoOfCoats1").css("border-color","");	
						}

					  if (!$("#txtPaintsur").val()) {
						  $("#txtPaintsurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						  showalertInformation("Please fill the highlighted  fields ")
						  return false;
					  } 
					  if (!$("#txtPaint").val()) {
						  $("#txtPaint").css("border-color","#ff0000");
						  showalertInformation("Please fill the highlighted  fields ")
						  return false;
					  } 
					  if (!$("#ddlNoOfCoats1").val()) {
						 $("#ddlNoOfCoats1").css("border-color","#ff0000");
						 showalertInformation("Please fill the highlighted  fields ")
						  return false;
					  } 
					
				
					return true;
				}  
				 
				  
				  if ($("#mostlycomFP").val()=="Galvanizing") {
					  if (!$("#ddlGSurface").val()) {
		    			  $("#ddlGSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
		    				
						}
		    		  if (!$("#ddlGZinc").val()) {
		    			  $("#ddlGZincDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
		    				
						}
					  if (!$("#ddlGSurface").val()) {
						  $("#ddlGSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						  showalertInformation("Fill all the fields of Galvanizing")
						  return false;
					  }
					  if (!$("#ddlGZinc").val()) {
						 $("#ddlGZincDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						  showalertInformation("Fill all the fields of Galvanizing")
						  return false;
						
					}  
					return true;
				} 
				  
				  if ($("#mostlycomFP").val()=="Fire proofing") {
					  if (!$("#ddlFSurface").val()) {
		    			  $("#ddlFSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
		    				
					}
		    		  if (!$("#ddlFFire").val()) {
		    			  $("#ddlFFireDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
		    				
						}
		    		  if (!$("#txtFireRating").val()) {
		    			  $("#txtFireRatingDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
		    				
						}
					  if (!$("#ddlFSurface").val()) {
						  $("#ddlFSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						  showalertInformation("Fill all the fields of Fire proofing")
							return false;
					  }
					  if (!$("#ddlFFire").val()) {
						  $("#ddlFFireDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						  showalertInformation("Fill all the fields of Fire proofing")
							return false;
						
					}   if (!$("#txtFireRating").val()) {
						  $("#txtFireRatingDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						  showalertInformation("Fill all the fields of Fire proofing") 
						return false;
						
					}  
					return true;
				} 
				  
				  if ($("#mostlycomFP").val()=="AESS") {
					  if (!$("#aesssur").val()) {
		    			  $("#aesssurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
		    				
					}
		    		  if (!$("#category1").val()) {
		    			  $("#category1").css("border-color","#ff0000");
					    	
						}
					  if (!$("#aesssur").val()) {
						 $("#aesssurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						  showalertInformation("Fill all the fields of Fire proofing")
						  return false;
					  }
					  if (!$("#category1").val()) {
					       $("#category1").css("border-color","#ff0000");
						  showalertInformation("Fill all the fields of Fire proofing")
							return false;
						
					}  
					return true;
				}   
				
			}
			  
			  
			  
		
				
			    function validateNoPaint(){
			    	 if ($("#nopaint").val()=="Yes"&&!$("#surfacepreparation").val()) {
							  $("#idno .select2-container--default .select2-selection--single").css("border-color","#ff0000");
							  showalertInformation("Please fill the highlighted  fields ")
								return false;
							}
						  return true;
					
			    }
			  
			    function  validatePrimer(){
			    	
			    	  if (!$("#txtPrimersur").val()&&!$("#txtPrimer").val()&&!$("#ddlNoOfCoatsprimer").val()) {
			    		  return true;
					}else if ($("#txtPrimersur").val()&&$("#txtPrimer").val()&&$("#ddlNoOfCoatsprimer").val()) {
						  return true;
					}else{
						  if (!$("#txtPrimersur").val()) {
							 $("#txtPrimersurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						  }
						  if (!$("#txtPrimer").val()) {
                        	 $("#txtPrimer").css("border-color","#ff0000");
             				
						}
						  if (!$("#ddlNoOfCoatsprimer").val()) {
                       	 $("#ddlNoOfCoatsprimer").css("border-color","#ff0000");
            				
						}
						  showalertInformation("Please fill the highlighted  fields ")
						return false;
					}
				
			    	
			    }
			  
			    function validatePainting(){
			    
			    	 if (!$("#txtPaintsur").val()&&!$("#txtPaint").val()&&!$("#ddlNoOfCoats1").val()) {
			    			return true;
					  }else if ($("#txtPaintsur").val()&&$("#txtPaint").val()&&$("#ddlNoOfCoats1").val()) {
						  return true;
						}
					  else {
						 
						  if (!$("#txtPaintsur").val()) {
							  $("#txtPaintsurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
						}
						  if (!$("#txtPaint").val()) {
							  alert("pp")
							  $("#txtPaint").css("border-color","#ff0000");	
							}
						  if (!$("#ddlNoOfCoats1").val()) {
							  $("#ddlNoOfCoats1").css("border-color","#ff0000");	
							}
						  showalertInformation("Please fill the highlighted  fields ")
							return false;
						}
			    	
			    }
			    
			    $("#txtPaintsur").change(function() {
					  $("#txtPaintsurDIV .select2-container--default .select2-selection--single").css("border-color","");
					})
					  $("#txtPaintsur").change(function() {
					  $("#txtPaintsur").css("border-color","");
					})
					 $("#txtPaint").change(function() {
					  $("#txtPaint").css("border-color","");
					})
					
					  $("#ddlNoOfCoats1").change(function() {
					  $("#ddlNoOfCoats1").css("border-color","");
					})
				
			  
			    function  validateGalvanizing(){
			    	
			    	  if (!$("#ddlGSurface").val()&&!$("#ddlGZinc").val()) {
			    			return true;
					  }else if ($("#ddlGSurface").val()&&$("#ddlGZinc").val()) {
						  return true;
						}else{
							if (!$("#ddlGSurface").val()) {
				    			  $("#ddlGSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
				    				
								}
				    		  if (!$("#ddlGZinc").val()) {
				    			  $("#ddlGZincDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
				    				
								}
				    		 
				    		 showalertInformation("Please fill the highlighted  fields ")
							return false;
						}
			    	
			    	
			    	
			    }

			      $("#ddlGSurface").change(function() {
				  $("#ddlGSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","");
				  })
				  $("#ddlGZinc").change(function() {
				  $("#ddlGZincDIV .select2-container--default .select2-selection--single").css("border-color","");
				  })
			
			    
			    
				 $("#mostlycomFP").change(function() {
					  if ($("#mostlycomFP").val()) {
						  $("#mostlycomFP").css("border-color","");
					   }else{
						   
						    $("#mostlycomFP").css("border-color","#ff0000");
					   }
					  
				  }) 
				   $("#txtPrimer").change(function() {
					   
					  $("#txtPrimer").css("border-color","");
					  
				  }); 
				    $("#ddlNoOfCoatsprimer").change(function() {
					 $("#mostlycomFP").css("border-color","");
					});
				    
				  $("#ddlNoOfCoatsprimer").change(function() {
					  
					  $("#ddlNoOfCoatsprimer").css("border-color","");
					});
				  
				    $("#surfacepreparation").change(function() {
				    	
					  $("#idno .select2-container--default .select2-selection--single").css("border-color","");
					}) 
				  
				   $("#txtPrimersur").change(function() {
					   
					  $("#txtPrimersurDIV .select2-container--default .select2-selection--single").css("border-color","");
					}) 
					  $("#txtPaintsur").change(function() {
					  $("#txtPaintsurDIV .select2-container--default .select2-selection--single").css("border-color","");
					}) 
					  $("#ddlGSurface").change(function() {
						  
					  $("#ddlGSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","");
					})
					  $("#ddlGZinc").change(function() {
						
					  $("#ddlGZincDIV .select2-container--default .select2-selection--single").css("border-color","");
					})
					
			  function validateFireproofing(){
			    
			    	 if (!$("#ddlFSurface").val()&&!$("#ddlFFire").val()&&!$("#txtFireRating").val()) {
			    			return true;
					  } else if($("#ddlFSurface").val()&&$("#ddlFFire").val()&&$("#txtFireRating").val()) {
						  return true;
						}
			    	 else{
			    		 if (!$("#ddlFSurface").val()) {
			    			 
			    			  $("#ddlFSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
			    				
						}
			    		  if (!$("#ddlFFire").val()) {
			    			  
			    			  $("#ddlFFireDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
			    				
							}
			    		  if (!$("#txtFireRating").val()) {
			    			  
			    			  $("#txtFireRatingDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
			    				
							}
			    		 
			    		 showalertInformation("Please fill the highlighted  fields ")
							return false;
						}
			    	
			    	
			    }
			  
					
					  $("#ddlFSurface").change(function() {

					  $("#ddlFSurfaceDIV .select2-container--default .select2-selection--single").css("border-color","");
					})
					  $("#ddlFFire").change(function() {
						  
					  $("#ddlFFireDIV .select2-container--default .select2-selection--single").css("border-color","");
					})
					  $("#txtFireRating").change(function() {
						  
					  $("#txtFireRatingDIV .select2-container--default .select2-selection--single").css("border-color","");
					})
					
					
//AESS
					
					
					function validateAESS(){
			    	  if (!$("#aesssur").val()&&!$("#category1").val()) {
			    		  
			    			return true;
					  }else if ($("#aesssur").val()&&$("#category1").val()) {
						  return true;
						}
			    	  else{
			    		  if (!$("#aesssur").val()) {
			    			  $("#aesssurDIV .select2-container--default .select2-selection--single").css("border-color","#ff0000");
			    				
						}
			    		  if (!$("#category1").val()) {
			    			  $("#category1").css("border-color","#ff0000");
						    	
							}
			    		  showalertInformation("Please fill the highlighted  fields ")
							return false;
			    		 
						}
			      }
					
					  $("#aesssur").change(function() {
					  $("#aesssurDIV .select2-container--default .select2-selection--single").css("border-color","");

					})  
			        $("#category1").change(function() {
					  $("#category1").css("border-color","");
					}) 