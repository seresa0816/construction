var RfiSent = [];
	 var RfiExternal = [];
	 var RfiInternal = [];
	 var RfiList;
	 var UserId;	
	 
	 $("#drpProjects").change(function () {
		 LoadRfi();  
	        
	    });
	 
	 $("#drpUsers").change(function () {
		 LoadRfi();       
	        
	    });
	 
	 $("#drpRfiTypes").change(function () {
		 LoadRfi();  
	        
	    });
	 
	 $("#drpstatus").change(function () {
		 LoadRfi();    
	        
	    });
	 
	 $('#datepicker-autoclose').change(function () {
		 LoadRfi();
		});
	 
	 function LoadRfi()
	 {
		 $('#slimtest2').empty();
		 $('#slimtest3').empty();
		 
		 UserId = $('#txtUserId').val();
		 
		 var SProjectId =  $("#drpProjects option:selected").text();
		 var SFromUserId = $('#drpUsers').val();
		 var SRfiType = $("#drpRfiTypes option:selected").text();
		 var SDate = "" ;
		 var SDate2 = "" ;
		 var SStatus = $("#drpstatus option:selected").text(); 
		 
		 if($('#datepicker-autoclose').val()!="")
		  {
			 SDate = new Date($('#datepicker-autoclose').val());
			 SDate2 = new Date($('#datepicker-autoclose').val());
			 
			 SDate.setDate(SDate.getDate() - 1);
			 SDate2.setDate(SDate2.getDate() + 1);
		 }
		 
		 if(RfiList!="None")
		 {
				 
			 $.each(RfiList, function(i, field)
			 {
				 
				 if(UserId == field.FromUserID && (SProjectId == "All" || SProjectId == field.ProjectName))
				 {
					 var RfiType = "SentRFI";
					 $('#slimtest3').append(
							 '<div class="row">' +
	                         '<div class="col-lg-8 col-md-8">' +
	                         	'<a href="/bimspring/viewAllVersionsRFI" id="SentRFI" onClick = "setRFInumber(\''+ field.RFINumber + '\',\'' + field.VersionID + '\',\''+ RfiType +'\',\'' + field.RFIID +'\',\'' + field.ProjectID +'\');">' + field.RFINumber + '</a>' +
							 '</div>' +
							 '<div class="col-lg-4 col-md-4">' +
	                             0 + 
	                         '</div>'+ 
	                     '</div><hr />' 						 
					 );
					 
				 }			 
				 else
				 {			 
				   		var createdDate = new Date(field.CreatedTS);
				   		createdDate.setHours(0);
				   		createdDate.setMinutes(0);
				   		createdDate.setSeconds(0);			   						 
				   				   			
				 		if((SFromUserId == 0 || SFromUserId == field.FromUserID) &&
				 				(SProjectId == "All" || SProjectId == field.ProjectName) &&
				 				(SRfiType == "All" || SRfiType == field.RFITypeName) &&
				 				(SDate == "" || (createdDate > SDate && createdDate < SDate2) ) &&
				 				(SStatus == "All" || SStatus == field.RFIStatusName))
					 
				 			{
								 $('#slimtest2').append
								 ('<div class="row ">' + 
								   '<div class="col-lg-2 col-md-2">' +							   	 
								   	  '<a href="/bimspring/viewAllVersionsRFI" id="SentRFI" onClick = "setRFInumber(\''+ field.RFINumber + '\',\'' + field.VersionID + '\',\''+ field.RFITypeName +'\',\'' + field.RFIID +'\',\'' + field.ProjectID +'\');">' + field.RFINumber + '</a>' +
								   '</div>' +
					               '<div class="col-lg-3 col-md-3">' +
					              	 field.From +
								   '</div>' +
								   '<div class="col-lg-2 col-md-2">' +
								  	 field.RFITypeName +
								   '</div>' +
					               '<div class="col-lg-3 col-md-3">' + 
					                  field.CreatedTS +			   
								   '</div>'+
								   '<div class="col-lg-1 col-md-1 ">' +			  
								   '<div class="label label-table label-danger">' + 
								   		field.RFIStatusName + 
								   '</div>' +			  
								   '</div>' +
								   '<div class="col-lg-1 col-md-1 ">' +			  
								     '<a href=""><i class="fa fa-ellipsis-v" style="font-size:15px; color:#B4B4BE;  padding-left:36px;" ></i></a>' +
								   '</div>' +             
					          	   '</div><hr />'
					          ); 
				 			}
				 }			 
		 });
		}
 }
	 
	 var rn;
	 var rv;
	 function setRFInumber(RFInumber, RFIversion, id, RFIID, Projectid)
	 {
		 
	 	rn = RFInumber;
	 	rv = RFIversion;	 	
	 	
	 	 if (id == "SentRFI")
	 	 {
	 		$.ajax({
	 			type: "GET",
	 			url: "/bimspring/viewOne",
	 			data : {
		 				 RFInumber : rn,
					 	 RFIversion:rv,
					 	 id:0,
					 	 RFIID:RFIID,
					 	 projectid:Projectid
				 	 },	 			
	 			async: false,
	 			success: function(){
	 				
	 			}, error: function(error){
	 				if(error.status == 401){
	 		   		  	window.location.href = 'logout';
	 		    	 }
	 			}
	 		});
	 	}
	 	 else if (id == "Internal")
	 	 {
	 		
	 		$.ajax({
	 			type: "GET",
	 			url: "/bimspring/viewOne",
	 			data : {
		 				 RFInumber : rn,
					 	 RFIversion:rv,
					 	 id:1,
					 	 RFIID:RFIID,
					 	 projectid:Projectid
				 	 },
	 			
	 			async: false,
	 			success: function(){
	 				
	 			}, error: function(error){
	 				if(error.status == 401){
	 		   		  	window.location.href = 'logout';
	 		    	 }
	 			}
	 		});
	 	}
	 	 else if (id == "External")
	 	 {
	 		$.ajax({
	 			type: "GET",
	 			url: "/bimspring/viewOne",
	 			data : {
	 					 RFInumber : rn,
	 				 	 RFIversion:rv,
	 				 	 id:2,
	 				 	 RFIID:RFIID,
	 				 	 projectid:Projectid
	 				 },
	 			async: false,
	 			success: function(){	 				
	 			}, error: function(error){
	 				if(error.status == 401){
	 		   		  	window.location.href = 'logout';
	 		    	 }
	 			}
	 		});
	 	} 
	 }
    
	 $(document).on('click', '#btnCreateRfi', function(){
		 
		if( $("#drpProjects").val()!="0")
		{
			 var projectid = $("#drpProjects").val();
			 var projectName = $("#drpProjects option:selected").text();;
			 
			 $.ajax({
		         type : 'GET',
		          url: "/bimspring/viewcreaterfi",	          
		          data : {projectId : projectid,
		        	      projectname:projectName},
		          success : function(data, success) {  	   
		        	  	location.href = "/bimspring/rfi"; 	           
			   }, error: function(error){
	 				if(error.status == 401){
	 		   		  	window.location.href = 'logout';
	 		    	 }
	 			}
			}); 			
		 }
		 else
		 {
			 alert("Please Select Project");
		 }
	}); 