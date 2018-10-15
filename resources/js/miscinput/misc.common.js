//Table Selection
       
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
        
        $(".allownumericwithdecimal").on("keypress keyup blur",function (event) {            
        	$(this).val($(this).val().replace(/[^0-9\.]/g,''));
            if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });

        $(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
           $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }           
        });  
        
        $(".allownumeric").on("keypress keyup blur",function (event) {    
            $(this).val($(this).val().replace(/[^\d].+/, ""));
             if ((event.which < 48 || event.which > 57)) {
                 event.preventDefault();
             }
             if($(this).val() == '0'){
                 $(this).val('');  
               }
         }); 

        $(document).click(function(e) {
            if (!$(e.target).is('.outer-collapse')) {
                $('.outer-collapse').removeClass('show');        
            }
        });
        
        
        function getOptId(controlid, text) {
    		  let id = '';
    		  $('#' + controlid ).find('*').filter(function() { 
    			if ($(this).text().trim() == text.trim()) {    			
    		      id = $(this).val();
    		    }
    		  });
    		  return id;
    		}
  		
        
        function showalertInformation(text) { 
          
           $('#alert_placeholder').append
            ('<div class="alert alert-warning" id="alertdiv"> <i class="fa fa-lg fa-exclamation-triangle p-r-20"></i>' + text + 
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
            '</div>')         
             setTimeout(function() {       	  
                	$("#alertdiv").remove();

            }, 10000);
          
          }
        
        function showalertError(text) {        	
            $('#alert_placeholder').append
            ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-lg fa-exclamation-triangle p-r-20"></i> ' + text + 
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                    '</div>')         
             	setTimeout(function() {       	  
                 	$("#alertdiv").remove();

             }, 10000);
           
           }
        
        function showalertSuccess(text) {        	
            $('#alert_placeholder').append
            ('<div class="alert alert-success" id="alertdiv"> <i class="fa fa-lg fa-check-circle p-r-20"></i> ' + text + 
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                    '</div>')       
             	setTimeout(function() {       	  
                 	$("#alertdiv").remove();

             }, 10000);
           
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
        	return Length;
        }
        
        function sizeFormater(inch, fraction)
        {
        	
        	var Length = "";      	
        	var Inch = inch == 0 ? "0 " : inch + " ";        	
        	var Fraction = fraction == 0 ? '' : fraction;   
        	
        	if(inch == 0)
        		Inch = ""; 
        	
        	Length = Inch + Fraction+'"';        	
        	return Length;
        }
        
        
        function validateLength(feet,inch,fraction,length)
        {
        	var valid = true;
        	if(feet == "0" && inch == "0" && fraction == "0")
        	{
        		valid = false;
	        	$('#alert_model_placeholder').append
	            ('<div class="alert alert-danger" id="alertdiv1"> <i class="fa fa-exclamation-triangle"></i> ' + length + ' can not be zero' + 
	                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	                    '</div>')         
	             	setTimeout(function() {       	  
	                 	$("#alertdiv1").remove();
	
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
	             	setTimeout(function() {       	  
	                 	$("#alertdiv2").remove();
	
	             }, 10000);
       		}
        	
        	return valid;        	
        }
            
        
        function validatePitchWeldLenght(pitchLenght, weldLength)
        {
        	var valid = true;
        	if(pitchLenght < weldLength)
        	{
        		valid = false;
	        	$('#alert_model_placeholder').append
	            ('<div class="alert alert-danger" id="alertdiv2"> <i class="fa fa-exclamation-triangle"></i>  Pitch length should be greater than weld length' + 
	                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	                    '</div>')         
	             	setTimeout(function() {       	  
	                 	$("#alertdiv2").remove();
	
	             }, 10000);
       		}
        	
        	return valid;        	
        }
        
        function validateStairPostSpaceLenght(pitchLenght, weldLength,message)
        {
        	var valid = true;
        	
        	if(pitchLenght < weldLength)
        	{
        		valid = false;
	        	$('#alert_model_placeholder').append
	            ('<div class="alert alert-danger" id="alertdiv2"> <i class="fa fa-exclamation-triangle"></i>' + message +  
	                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	                    '</div>')         
	             	setTimeout(function() {       	  
	                 	$("#alertdiv2").remove();
	
	             }, 10000);
       		}
        	
        	return valid;        	
        }
        
        function getProfiles(shape)
        {
        	var dataObj = "";        	
     /*   	$.ajax({
        	 	type: "GET",
        	   	url: "/bimspring/setProfile",
        	   	data: "profile=" + shape,
        	   	async: false,
        	 	success: function(){	 				
        	 },
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
           });*/
            	   
          $.ajax({
             type: "GET",
             url: "/bimspring/getProfileSizes", 
             async: false,
             data :         
            	 "profile=" + shape,
             
             success: function(data)
             {
                dataObj = jQuery.parseJSON(data); 
             	         	
             },
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
          });
          
          return dataObj;
        	
       }
        
        function getMaterialGrade(size)
        {
        	var dataObj = "";
        /*	 $.ajax({
         	 	type: "GET",
         	   	url: "/bimspring/setProfile",
         	   	data: "profile="+size,
         	   	async: false,
         	 	success: function(){	 				
         	 },
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
            });*/
        	 $.ajax({
                 type: "GET",
                 url: "/bimspring/geMaterialGrade", 
                 async: false,
             	 data: "profile="+size,
                 success: function(data)
                 {
                    dataObj = jQuery.parseJSON(data); 
                                     	          	
                 },
 				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
              });
        	 return dataObj;
        }
       
        function resetDrodown(dropdownid)
		 {
			 $("#"+dropdownid).empty();	        	
	        	
	 	       	$("#"+dropdownid).append($('<option/>', {
	 	     		value: "",
	 	     		text: "- Select -"
	 	     	})); 
			 
		 }
        function fillProfileDropdownList(dropdownid, dropdownList)
        {
        	 var len = dropdownList.length;
        	 for (var i = 0; i < len; i++)
       	     {
       	    	var value = dropdownList[i]['W'] +"," + i;
       	    	var option = dropdownList[i]['Profile'];				
       				
       	    	$("#"+dropdownid).append($('<option/>', {
       				value: value,
       				text: option
       			}));
       	     } 
       }
        function fillMaterialGradeDropdownList(dropdownid,dropdownList)
        {
        	var len = dropdownList.length;
        	for (var i = 0; i < len; i++)
      	     {
      	    	var value = dropdownList[i]['Grade'];
      	    	var option = dropdownList[i]['Grade'];				
      				
      	    	$("#"+dropdownid).append($('<option/>', {
      				value: value,
      				text: option
      			}));
      	    } 
        }
        
        function clearFormFields(formid)
		{
			$('#'+formid).find(':input').each(function(){
           		var id  = $(this).prop('id');
           		if(id!="")
              		 $('#' + id).val("");
           	});
			
		}
        
        function UncheckAllCheckBox()
        {
       	 $("table tbody").find("td input:checkbox").prop("checked", false); 
       	 $("table tbody").find("tr input:checkbox").prop("checked", false);
       	 $("#checkAll").prop("checked", false); 
       	 
       	 $("table tbody").find('input[name="selectAll"]').each(function()
            {
       		 $(this).parents("tr").css({
               	 "background": "#ffffff",
                    "color": ""
                });   
            });
        }
        
        $(".action-icons .add").on('click', function(){
        	$("#alertdiv").remove();
            $(".right").show();
            $(".left").hide();
            $(".memtype-rightedit").show();
            $(".editmemtype .rightFloat").show();
        });
        
      //Add Value
        $(".anv-btn").on('click', function(){
        	$("#alertdiv").remove();
            $(".memtype-rightedit").show();
            $(".right").hide();
            $(".left").hide();
        });
        
      //Edit Click
		$(".action-icons .edit").on('click', function(){
			
			$("#alertdiv").remove();
			if(Selected.length == 1)
			{
				isEdit = true;
				populateDataForEdit(Selected[0]);				
				$('.addTR').text("Update");								
				$(".right").show();
		        $(".left").hide();
		        $(".memtype-rightedit").show();
				$(".editmemtype .rightFloat").show();
				
			}
			else 
			{
				showalertInformation('Select 1 Row For Edit');
			}
			
		});
		
		//Add Click
		$(".addTR").on('click', function(){
			$("#alertdiv").remove();
        	if(validateForm())
        	{
        		var alerMessage = "";
        		if(isEdit==true)
        			alerMessage = "Updated Successfully";
        		else
        			alerMessage = "Added Successfully";
        			
	            $(".add-new-value").hide();
	            $(".memtype-table").show();
	            $(".left").show();
	            $(".editmemtype .rightFloat").hide();
	            
	            bindTable();
	            clearFields();	
	            
	            showalertSuccess(alerMessage);
	            $(window).scrollTop(0);
        	}
            
        });
		
		//Cancel Clcik
		 $(".cancelRFB").on('click', function(){
			 $("#alertdiv").remove();
			 $(".memtype-rightedit").hide();
	        	clearFields();
	        	Selected = [] ;
	        	UncheckAllCheckBox();
	        	isEdit = false;
	        	$('.addTR').text('Add');
	        	
	     });
		
		//Delete Selected Row Data 
	        function deleteData()
	         {
	        	$("#alertdiv").remove();
	        	 var len = Selected.length;
	        	 
	    		 if(len > 0)
	    			 $('#deleteModal').modal('show');
	    		 else
	 				showalertInformation('Select Rows for Delete');
	         }
	        
	        $('#btnDeleteRows').on('click',function()
	        {  
	        	
	        	var len = Selected.length;
		   		 for(i=0; i < len; i++)
		   		 {        			
		   			 $("#row" + Selected[i]).remove();
		   		 }
		   		 constructJsonArrayFromTable();
		       	 location.reload();  
	        });
	        
	        $('.modalcancel').on('click',function()
	    	{  
	        	UncheckAllCheckBox(); 
	    	});
	        
	        
	        //Get Selected Rows for Edit / Delete
	        function getrows() {
	        	Selected = [];
	        	 $("table tbody").find('input[name="selectAll"]').each(function(){
	                 if($(this).is(":checked")){
	                	 
	                	 var rowid = $(this).attr('id').replace('chkRow','');                	 
	                	 Selected.push(rowid);
	                	                 	 
	                     $(this).parents("tr").css({
	                         "background": "#f5f9fd",
	                         "color": "#414146"
	                     });
	                 }
	                 else {
	                     $(this).parents("tr").css({
	                         "background": "#ffffff",
	                         "color": ""
	                     });
	                 }
	             });	        	
	         }
	        
	        //Check All Rows in the table Event
	         $(".cci-all").on('click',function(){ 	        	  
	        	 Selected = [] ;
	             $("table tbody").find('input[name="selectAll"]').each(function()
	             {
	                 if($(this).is(":checked"))
	                 {
	                     $(this).parents("tr").css({
	                    	 "background": "#ffffff",
	                         "color": ""
	                     });                    
	                 }
	                 else
	                 {
	                	 var rowid = $(this).attr('id').replace('chkRow','');                	 
	                	 Selected.push(rowid);
	                     $(this).parents("tr").css({
	                    	 "background": "#f5f9fd",
	                         "color": "#414146"
	                     });  
	                     
	                  }
	             });
	         });
	         
	       //Recall Clcik
			 $(".recallData").on('click', function(){				 				 
				 var lastrow = $('.memtype-table tbody tr').length; 								 
				 populateDataForEdit(lastrow);
		     });
			 
			 $('[data-required]').change(function() {  
			      var id = $(this).attr('id') + 1;
			      if ($(this).val()) 
			      {
			         if ($(this).data('select2')) 
			         {
			        	$("#"+id).removeClass('error');
			         }
			      }
			      else
			      {
		        	if ($(this).data('select2')) 
		     		{
		        		if( $('#' + id).is(':visible'))
		        		{
		        			$("#"+id).addClass('error');
		        		}
		     		}        		 
		          }
		        });
			 
			 function clearSelect2Dropdown()
			 {
				 $('[data-required]').each(function() 
				 {                		
		            var divid = $(this).attr('id') + 1;
		            var id = $(this).attr('id');
		           	if ($(this).data('select2')) 
		           	{
		           		$("#"+divid).removeClass('error'); 
		           		$('#'+id).val("").trigger('change');
		           		    	
		            }
		           		 
		          }); 
				 $('#drpReferenceDrawing').val("").trigger('change');
			 }
			 
			 
			 function convMMtoFt(valueMM){
					
					var floatingPointPart = (valueMM/25.4) % 1;
					var integerPart = Math.floor(valueMM/25.4);

					
					// Fraction Calculation
					var numerator=Math.round(floatingPointPart*16);
					var denominator=16;
					var fractionText="";
					if(numerator>0){	
						
								while(numerator % 2 ==0 && denominator % 2 ==0){
									numerator=numerator/2;
									denominator=denominator/2;
								}
							if(denominator>1 && numerator >=1)
								{
									fractionText=numerator+"/"+denominator;
								}
								
									
					}

					// Feet Inch Calculation
					
					var feet =Math.floor(integerPart/12);
					var ftProd_floatpart=	parseFloat(((integerPart/12) % 1).toFixed(2));

					var inches=Math.round(ftProd_floatpart*12);
					
					var feetInchText = feet+"'-"+inches+'"'+fractionText;
				return(feetInchText);
				}