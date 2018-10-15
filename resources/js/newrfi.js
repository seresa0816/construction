/**
 * 
 */

var table;
var table2;

//Global Variables
var PartnerList = [];
var QuestionList = [];
var OptionList = [];
var ReciepientList = [];
var RFIQuestionId = [];
var RFICustomQuestion = [];
var ParentId;
var QuestionTreeLevelId;
var ErrorMessage = [];
var NestableId = "0";

$(document).ready(function ()
{    	
	table = $('#filterquestion').DataTable({
	        "dom": 'ftipr',
			"paging": true, 
			"pagingType": "numbers",
			"showNEntries" : true,
			"autoWidth": false,
			"lengthChange": false,
			"lengthMenu": [[4], [4]],
	    	"columnDefs": [ {
	            	"searchable": false,
	           		"orderable": false,
	           		"targets": 'no-sort',
	       			 } ],
	   		"order": [[ 1, 'asc' ]]
	    });
	
	table2 = $('#definedquestion').DataTable({
        "dom": 'ftipr',
		"paging": true, 
		"pagingType": "numbers",
		"showNEntries" : true,
		"autoWidth": false,
		"lengthChange": false,
		"lengthMenu": [[4], [4]],
    	"columnDefs": [ {
            	"searchable": false,
           		"orderable": false,
           		"targets": 'no-sort',
       			 } ],
   		"order": [[ 1, 'asc' ]]
    });

   $("#nestable").nestable({
          maxDepth: 10,
          collapsedClass:'dd-collapsed',
   }).nestable('collapseAll');
				
   $('#nestable-menu').on('click', function(e) {
           var target = $(e.target),
           action = target.data('action');
           if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
           if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
   });

   $('#nestable-menu').nestable();
   $(".dd-handle").on('click', function(){
	           $("this").addClass("bg-gray");
   });
			    
   CheckExternalPermission();
			   
});   

$(window).on('load', function (){	
if($('#txtError').val()!=null && $('#txtError').val()!="")
	{
		ErrorMessage = [];
		ErrorMessage.push($('#txtError').val());
		showalert('alert-danger','Error!','text-warning');		
	}
});

//Validation
function validateRFI()
{
	$('#rfiDetails').find('input[type!="hidden"]').each(function () {
	      if (!$(this).val() ) 
	      {
	    	 
	    	  $('#rfiDetails').addClass('submitted'); 
	    	  return false; 
	     }
	});
	return true; 
}   

function validateModifyQuestion()
{
	$('#txtOptions').val("  ");
	var has_empty = false;
	$('#addModifyQuestion').find('input[type!="hidden"]').each(function () {
	      if (!$(this).val()) { has_empty = true; $('#addModifyQuestion').addClass('submitted'); return false; }
	});

	if(has_empty) { return false; }
	else
		return true;  

}

function validatePartner()
{
	var has_empty = false;
	$('#addPartner').find('input[type!="hidden"]' ).each(function () {
	      if (!$(this).val() ) { has_empty = true; $('#addPartner').addClass('submitted'); return false; }
	});

	if(has_empty) { return false; }
	else
		return true;
	
}


//Check Create External RFI Permission
function CheckExternalPermission(){	
	$.ajax({
		type: "GET",
		url: "/bimspring/externalRFIPermission",
		data: "key="+$("#encryptedkey").val(),
		success: function(data){
			if(data!=null || data!='')
			{
				var dataObj = jQuery.parseJSON(data);			
				
				if (dataObj.rs[0]['RFITypeName'] == 'External'){
					$("#Ext").attr('disabled', false); //enable 'External' option from radio button;
				}
			}
		},error: function(error){
			if(error.status == 401){
      		  window.location.href = 'logout';
      	  }
		}
 });
} 

// Get External RFI User Details
function loadExternalContact()
{
	
	$('#partnerList').empty();
	 $.ajax({
   		type: "GET",
   		url: "/bimspring/getCompanyContacts",       		
   		data: "key="+$("#encryptedkey").val(),
   		success: function(data){
   			
   		if(data!=null)
   		{
   			var dObj = jQuery.parseJSON(data);   			
  			
   			var list = [];
   			var partnerList = [];
   			if (dObj.status === "true")
   			{
   				for (var i = 0; i < dObj.rs.length; i++) {
						var xa = {
                                "CompanyID": dObj.rs[i].ContactCompanyID,
                                "CompanyName":dObj.rs[i].ContactCompanyName,
                                "CompanyTypeName":dObj.rs[i].ContactCompanyTypeName
                       }
          			   list.push(xa);
                 }
    			          			          			
          			var companylist = list.reduceRight(function (r, a) {
          			    r.some(function (b) { return a.CompanyName === b.CompanyName; }) || r.push(a);
          			    return r;
          			}, []);
          			
          			
          			for (var i = 0; i < dObj.rs.length; i++) {
          				
          				var userExists = false;
          				for (j=0; j < partnerList.length; j++) {
          					
          				    if (partnerList[j].PartnerUserID == dObj.rs[i].ContactCompanyUserID && 
          				    		partnerList[j].PartnerUserEmail == dObj.rs[i].ContactCompanyUserEmail)
          				    {
          				    	userExists = true;
          				        
          				    }
          				}
          				if(userExists==false)
          				{
		          			var xa = 
							{
		          					"CompanyID": dObj.rs[i].ContactCompanyID,
	                                "PartnerUserID": dObj.rs[i].ContactCompanyUserID,
	                                "PartnerTypeName":dObj.rs[i].ContactTypeName,
	                                "PartnerUserName": (dObj.rs[i].ContactCompanyUserFirstName + ' ' + dObj.rs[i].ContactCompanyUserLastName),
	                                "PartnerUserEmail":dObj.rs[i].ContactCompanyUserEmail
										
										
		                    }
							partnerList.push(xa);
          				}
          			}
          			
          			$.each(companylist, function(i, field)
          			{
          				var ddList = "";
          				
          				var title = "Add Contact";
          				
          				if(NestableId == field.CompanyID )
      					{
          					ddList = '<li class="dd-item" data-id="'+ field.CompanyID +'">' + 
 							 '<button data-action="expand" type="button" style="display: none;">Collapse</button>'+
 							 '<button data-action="collapse" type="button" style="" >Expand</button>'+
 							 '<div class="dd-handle">&nbsp;&nbsp; '+ field.CompanyName +
								 '<button type="button" class="btn btn-success pull-right nestbtn" onclick="showAddPartnerDilog('+ field.CompanyID +',\'' + field.CompanyName + '\',\'' + field.CompanyTypeName + '\',\''+ title + '\');">Add New User For This Company</button>'+
 						     '</div>';
          					
          					ddList = ddList + '<ol class="dd-list">';
      					
      					}
          				else
          					{
          				
		          				ddList = '<li class="dd-item dd-collapsed" data-id="'+ field.CompanyID +'">' + 
		          							 '<button data-action="collapse" type="button" style="display: none;">Collapse</button>'+
		          							 '<button data-action="expand" type="button" style="">Expand</button>'+
		          							 '<div class="dd-handle">&nbsp;&nbsp; '+ field.CompanyName +
												 '<button type="button" class="btn btn-success pull-right nestbtn" onclick="showAddPartnerDilog('+ field.CompanyID +',\'' + field.CompanyName + '\',\'' + field.CompanyTypeName + '\',\''+ title + '\');">Add New User For This Company</button>'+
		          						     '</div>';		          				
		          				ddList = ddList + '<ol class="dd-list">';
          					}
          						     
          				$.each(partnerList, function(j, partnerfield)
        	          	{
          					
          					var username = partnerfield.PartnerUserName;
          					
          					if(partnerfield.CompanyID == field.CompanyID && partnerfield.PartnerUserName !='' && username.indexOf('undefined') < 0)
          					{
          						ddList = ddList + '<li class="dd-item" data-id="' + field.CompanyID +'-' + partnerfield.PartnerUserID +'">' +
							                                '<div class="dd-handle">'+
								                                '<label class=" m-r-0 custom-control custom-checkbox ">'+
									                                '<input type="checkbox" class="custom-control-input" value="' + partnerfield.PartnerUserID +'" id="'+ partnerfield.PartnerUserID +'" onclick="addToRecipientsList(this);"/> '+
									                                '<span class="custom-control-indicator"></span>' + 
									                                partnerfield.PartnerUserName + ",&nbsp;&nbsp;" + partnerfield.PartnerTypeName + ",&nbsp;&nbsp;" + partnerfield.PartnerUserEmail +
								                                '</label>'+
							                                '</div>'+
						                            '</li>';
							}
          					
        	          	});
          				ddList = ddList + '</ol></li>';
						$('#partnerList').append(ddList)
        	          	
          			});
   		    	}
   	    	}
   		},
   		error: function(error){
   			if(error.status == 401){
      		  window.location.href = 'logout';
   			}else{
   				
   			}
   		}
   	});
	//NestableId = "0";	
}

$(document).on('click', '#Ext', function() {
	   loadExternalContact();
});

$('input[name="internal_external"]').on('change', function(){
    if (this.value == '1') {
        $('#modalRecipients').hide();
     }
     else if (this.value == '2') {
     	 $('#modalRecipients').show();	          
     }	        		
}); 
     	
$('#dropbox_a').change(function () 
{
 if($('#dropbox_a').val()=='NONE')
 {
 	$('#dropbox_b').hide();	        
     $('#dropbox_c').hide();
     $('#dropbox_d').hide(); 
     $('#datatable1').hide();
 }
 else 
 {
 	$("#dropbox_b").empty();
		$("#dropbox_c").empty();
		$("#dropbox_d").empty();
		
		$("#dropbox_b").append($('<option/>', {
			value: "NONE",
			text: "--- Select ---"
		}));
		$("#dropbox_c").append($('<option/>', {
			value: "NONE",
			text: "--- Select ---"
		}));
		$("#dropbox_d").append($('<option/>', {
			value: "NONE",
			text: "--- Select ---"
		}));
		
		ParentId = $('#dropbox_a').val();
		QuestionTreeLevelId = "dropbox_b";
		bindQuestionTable(ParentId, QuestionTreeLevelId );		    	
	 }
});

$('#dropbox_b').change(function ()
{
	if($('#dropbox_b').val()=='NONE')
	{
		$('#dropbox_c').hide();
		$('#dropbox_d').hide();
	}
	else
	{
		$("#dropbox_c").empty();
		$("#dropbox_d").empty();
		$("#dropbox_c").append($('<option/>', {
			value: "NONE",
			text: "--- Select ---"
		}));
		$("#dropbox_d").append($('<option/>', {
			value: "NONE",
			text: "--- Select ---"
		}));
		
		ParentId = $('#dropbox_b').val();
		QuestionTreeLevelId = "dropbox_c";
		bindQuestionTable(ParentId, QuestionTreeLevelId);		    	
	}
});
		
$('#dropbox_c').change(function () 
{
	if($('#dropbox_c').val()=='NONE')
	{
		$('#dropbox_d').hide();
	} 
	else 
	{
		$("#dropbox_d").empty();
		
		$("#dropbox_d").append($('<option/>', {
			value: "NONE",
			text: "--- Select ---"
		}));		
	   ParentId = $('#dropbox_c').val();
	   QuestionTreeLevelId = "dropbox_d";
	   bindQuestionTable(ParentId, QuestionTreeLevelId);
	}
});


function showAddPartnerDilog(companyId, comapnyName, comapnyTypeName, title)
{	
	
	$('#modalPopupLabel').text(title);
	$('#txtContactCompanyName').val(comapnyName);
	$('#txtContactCompanyId').val(companyId);
	
	if(comapnyTypeName!='')
	{			
		$('#drpCompanyType option').removeAttr('selected');
		
		$('#drpCompanyType option').filter(function ()
		{
			 if ($(this).text() == comapnyTypeName) 
				    	return this;
		}).attr('selected', 'selected');
	}
	else
	{
		
		$('#drpCompanyType').val('');
	}
	$('#modalAddPartner').modal('show');			
} 

function bindQuestionTable(ParentId, dropdownList)
{
	var dropbox_a = new Array();
	var qID = new Array();	
	
	table.clear().draw();
	QuestionList = [];
	$.ajax({
		type: "GET",
		url: "/bimspring/branch",
		data: "path=" + ParentId,
	});
	
	$.ajax({
		type: "GET",
		url: "/bimspring/rfiQuestionList",
		data: "key="+$("#encryptedkey").val(),
		success: function(data)
		{
			
			if(data != null)
			{
					var dataObj = jQuery.parseJSON(data);    			
	    			if (dataObj.status == "true")
	    			{
	    				var len = dataObj.rs.length;    				    			
		    			for (var i = 0; i < len; i++)
		    			{
							if (dataObj.rs[i]['TreeParentID'] == ParentId)
							{
								if (dropbox_a.indexOf(dataObj.rs[i]['TreeName']) == -1){
									dropbox_a.push(dataObj.rs[i]['TreeName']);
									var option = dataObj.rs[i]['TreeName'];
									var path = dataObj.rs[i]['TreeID'];
									$("#"+ dropdownList).append($('<option/>', {
										value: path,
										text: option
									}));
								}
							}
							
							if (dataObj.rs[i].hasOwnProperty('Question'))
							{
								
								if (qID.indexOf(dataObj.rs[i]['QuestionID']) == -1){
									qID.push(dataObj.rs[i]['QuestionID']);
									
									var xa = {
											"QuestionID": dataObj.rs[i]['QuestionID'],
			                                "Question": dataObj.rs[i]['Question'],
			                                "QuestionOptions" : (JSON.parse(dataObj.rs[i]['QuestionOptions']))['Button']['Radio']
			                                
			                       }
									QuestionList.push(xa);
								} 			
							}
						}
		    			
		    			var title = "Edit Question";
		    			
		    			$.each(QuestionList, function(i, field)
		    			   {
								
		    					var	row = '<tr>' + 
		    								/*'<td></td>'+*/
		    								'<td>' +
		    									'<label class="custom-control custom-checkbox">' +
		    									'<input type="checkbox" class=" custom-control-input" id= "chk'+ field.QuestionID +'" value="'+ field.QuestionID +'" onclick="showOptions(this);">' +
		    									'<span class="custom-control-indicator"></span>' + field.Question +
		    									'</label>' +
		    								'</td>' +	
		    								
		    								'<td>' +
		    								   '<div id="dv' + field.QuestionID + '" style="display:none">' ;
		    							  
		    							  $.each(field.QuestionOptions, function(j, field2)
		    					    	 {
		    								  	    								  
		    								  row = row + '<label class="custom-control custom-radio"> '+                                                
		    								        '<input disabled="true" id="rd' + field.QuestionID + '" name="rdOption'+ field.QuestionID +'" type="radio" class="custom-control-input"> ' +                                                
		    								        '<span class="custom-control-indicator"></span>' + 
	                                                '<span class="custom-control-description">' + field2 +'</span>' +
	                                       			'</label></br>';
		    					    	 });
		    					    	row = row + '</div>'+
		    									'</td>'+
		    									'<td>' +
													'<button type="button" class="btn btn-success" onclick="addEditQuestion('+ field.QuestionID + ',\'' + title + '\');">Edit</button>' +
												'</td>' +
		    								'</tr>';		  
		    						
		    						table.row.add($(row)).draw(false);
		    				});
		    			
		    			  $('#datatable1').show();
	   	
				          $('#' + dropdownList).show();
				        
	    		  }
			}
		   },error: function(error){
			   if(error.status == 401){
	        		  window.location.href = 'logout';
			   }
		   }
	});
	
}

function showOptions(checkBox) {

	var id = checkBox.id;
	var divId = id.replace("chk", "dv");
	var questionId = $('#'+id).val()
	if(checkBox.checked)
	{
		$('#' + divId ).show();
		var xa = {
				"QuestionID": questionId	             
        }
		RFIQuestionId.push(xa);
	}
	else
	{
		$('#' + divId ).hide();
		for (var i = 0; i < RFIQuestionId.length; i++)
		{
			if (RFIQuestionId[i]['QuestionID'] == questionId)
			{
				RFIQuestionId.splice(i,1);
				break;
			}
		}
	}
	
}

function addToRecipientsList(checkbox)
{
	var id = checkbox.id;		
	var recipientId = $('#'+id).val()
	if(checkbox.checked)
	{			
		var xa = {
				"PartnerId": recipientId	             
        }
		ReciepientList.push(xa);
	}
	else
	{
		for (var i = 0; i < ReciepientList.length; i++)
		{
			if (ReciepientList[i]['PartnerId'] == recipientId)
			{
				ReciepientList.splice(i,1);
				break;
			}
		}
	}		
}

function addEditQuestion(questionId,title)
{
	if(questionId == "0")
	{
		OptionList = [];
		$('#txtQuestion').val('');
		$('#divOptions').empty();
	}
	
	$('#modalAddQuestion').modal('show');
	$('#questionTitle').text(title);
	$('#txtQuestionId').val(questionId);
	QuestionList.forEach(function (result, index) {
        if (result["QuestionID"] == questionId) {
        	
        	$('#txtQuestion').val(QuestionList[index].Question);
			$('#divOptions').empty();
			OptionList = [];
        	$.each(QuestionList[index].QuestionOptions, function(j, field2)
			{
        		addOptions(questionId,field2);
			});
        }
    });
}

function deleteOption(QuestionId,Option,divid)
{
	
	$('#'+divid).remove();    	
	for (var i = 0; i < OptionList.length; i++)
	{
		if (OptionList[i]['QuestionID'] == QuestionId && OptionList[i]['QuestionOptions'] == Option)
		{
			OptionList.splice(i,1);
			break;
		}
	}
}

function addOptions(questionId,option)
{
	if(option == "NewOption")
		option = $('#txtOptions').val();

	var xa = {
			"QuestionID": questionId,
            "QuestionOptions" : option
    }
	
	OptionList.push(xa);
	
	if(option !=null && option.trim()!='')
	{
				
		var random = randomString();
		var divId = "div"+random;
		var chkId= "chk"+random;
		
		$(".add-row-below").append(
			  '<div class="form-group row append-row" style="margin-top: -20px;" id="'+divId+'">'+
			     '<div class="col-md-12">'+
			       '<div class="row">'+
			         '<label class="control-label text-right col-md-3" ></label>'+
			          '<div class="col-md-4">'+
			            '<label class=" m-r-0 custom-control custom-checkbox lblBlack">'+
			              '<input type="checkbox" class=" custom-control-input" id="'+ chkId +'"/>'+
			              '<span class="custom-control-indicator"></span>'+ option + '</label>'+
			           '</div>'+
			            '<button type="button" class="btn btn-success" onclick="deleteOption('+ questionId + ',\'' + option + '\',\'' + divId + '\');">X</button>' +
			          '</div>'+
			         '</div>'+
			    '</div>');
		
		$('#txtOptions').val('');
		$('#txtOptions').removeClass('error');
	}
	else
	{
		if (!$('#txtOptions').val()) { $('#txtOptions').addClass('error'); }
	}
}

function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 4;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

function submitQuestion()
{	
	if(validateModifyQuestion())
	{
		 
		var options = getOptions();

		   $.ajax({
				type: "GET",
				contentType: "application/json",
				url: "/bimspring/addRfiQuestion",
			    dataType: "json",
			    data: "key="+$("#encryptedkey").val()+"&json=" + encodeURIComponent(
				    	JSON.stringify(
								{
									 "treeid":ParentId,
									 "question":$('#txtQuestion').val(),
									 "questionoptions":"{\"Button\":{\"Radio\":[" + options + "]}}"
								})),
								success: function(data){			
						      
									if(data!=null && data.status =="true")
						   				{
										
										RFICustomQuestion = [];
						        
									        var customquestion = {
									        		"QuestionID" : data.rs[0].QuestionID,
									        		"Question" : $('#txtQuestion').val(),
									        		"QuestionOption" :[{
									        							 OptionList
									        						  }]			        		
									        		}	
								        
								       
								        RFICustomQuestion.push(customquestion);						       
								        addDefinedQuestion(RFICustomQuestion);						        
								        OptionList = [];			        
								        $("#modalAddQuestion .close").click();
						   			}
					},
					error: function(error){
						if(error.status == 401){
	    	        		  window.location.href = 'logout';
	    	        	}
				}
		});
	    
	}

}

function addDefinedQuestion(customqu)
{
	
	var title = "Edit Question";
	$.each(customqu, function(i, field)
	{
					
	  var questionrow = '<tr>' + 
			  /*'<td></td>'+*/
			 '<td>' +
				'<label class="custom-control custom-checkbox">' +
				  '<input type="checkbox" class=" custom-control-input" id= "chk'+ field.QuestionID +'" value="'+ field.QuestionID +'" onclick="showOptions(this);">' +
				  '<span class="custom-control-indicator"></span>' + field.Question +
				'</label>' +
			 '</td>' +	
			 '<td>' +
				 '<div id="dv' + field.QuestionID + '" style="display:none">' ;
					$.each(field.QuestionOption[0].OptionList, function(j, field2)
					 {
						questionrow = questionrow + '<label class="custom-control custom-radio"> '+                                                
								        '<input disabled="true" id="rd' + field.QuestionID + '" name="rdOption'+ field.QuestionID +'" type="radio" class="custom-control-input"> ' +                                                
								        '<span class="custom-control-indicator"></span>' + 
                                        '<span class="custom-control-description">' + field2.QuestionOptions +'</span>' +
                            			'</label></br>';
					  });
					questionrow = questionrow + '</div>'+
									'</td>'+
									'<td>' +
										'<button type="button" class="btn btn-success" onclick="addEditQuestion('+ field.QuestionID + ',\'' + title + '\');">Edit</button>' +
									'</td>' +
								'</tr>';		  
						
					table2.row.add($(questionrow)).draw(false);
				});
			
			  $('#dvDefinedQuestion').show();

}



function getOptions()
{
	var opt = "\"";
	for (var i = 0; i < OptionList.length; i++)
	{
		opt = opt + OptionList[i]['QuestionOptions'] + "\",\"";
		
	}
	if(opt!= "")
  		 return opt.substring(0,opt.length-2);
	else
		return opt;
	
}

function getRecipients()
{
	var reciepients = "";
	for (var i = 0; i < ReciepientList.length; i++)
	{
		reciepients = reciepients + ReciepientList[i]['PartnerId'] + "," ;
		
	}
	if(reciepients != "")
   		return reciepients.substring(0,reciepients.length-1);
	else 
		return reciepients;
}

function getQuestion()
{	
	var questions = "";
	for (var i = 0; i < RFIQuestionId.length; i++)
	{
		questions = questions + RFIQuestionId[i]['QuestionID'] + "," ;
		
	}
	if(questions != "")
  		 return questions.substring(0,questions.length-1);
	else
		return questions;
}


function addCompanyContacts()
{
	ErrorMessage = [];
	if(validatePartner())
	{
		
		var companyid = $('#txtCompanyId').val();
		var contactcompanyname = $('#txtContactCompanyName').val();
		var companytypename = $("#drpConatctType option:selected").text(); 
		var contactcompanytypeid = $('#drpCompanyType').val();
		var contactcompanyurl = "http://www.";
		
		var contactCompanyId = $('#txtContactCompanyId').val();			
		
		if(contactCompanyId == "0" || contactCompanyId == null)
		{
			
		
			var jsonData = JSON.stringify({
						 "companyid":companyid,						 
						 "contactcompanyname":contactcompanyname,
						 "companytypename":companytypename,
						 "contactcompanytypeid":contactcompanytypeid,
						 "contactcompanyurl":contactcompanyurl
						 
					});		
			
			 $.ajax({
					type: "GET",
					contentType: "application/json",
					url: "/bimspring/addCompanyContact",
				    dataType: "json",
				    data: "key="+$("#encryptedkey").val()+"&json=" + encodeURIComponent(jsonData),
						   success: function(data){	
							   if(data!=null)
							   {
								   
								   if(data.status == "true")
									{
									   
									   if(data.rs.length > 0)
									   {
										   $('#txtContactCompanyId').val(data.rs[0].ContactCompanyID);										   
										   addCompanyUser();										  
									   }
									   else
									   {										  									   
										   clearContactsPopup();
										   $("#modalAddPartner .close").click();
										   ErrorMessage.push("Unable To Add Company Contact and User!! Please Contact Administrator");	
										   showalert('alert-danger','Error!','text-warning');
										   $(window).scrollTop(0);
									   }
									}
								   else
									{									   									   
									   clearContactsPopup();
									   $("#modalAddPartner .close").click();
									   showalert('alert-danger','Error!','text-warning');
									   ErrorMessage.push("Error Occured While Saving Company Contact. Please Contact Administrator");
									   $(window).scrollTop(0);
									}
							  }
							        
						},
						error: function(){
							if(error.status == 401){
		    	        		  window.location.href = 'logout';
		    	        	}else{
								clearContactsPopup();
								$("#modalAddPartner .close").click();
								ErrorMessage.push("Error Occured While Saving Company Contact. Please Contact Administrator");
								showalert('alert-danger','Error!','text-warning');
								$(window).scrollTop(0);
		    	        }
							  
					}
				});
			}
		else
			{
				addCompanyUser();				
			}		
		  
	}
	
	
}

function addCompanyUser()
{
	
	var contactCompanyId= $('#txtContactCompanyId').val();
	var email = $('#txtEmail').val();
	var firstname = $('#txtFirstName').val();
	var lastname = $('#txtLastName').val();
	var usertitle = "";
	var phone = "";
	
	 $.ajax({
			type: "GET",
			contentType: "application/json",
			url: "/bimspring/addUserToCompanyContact",
		    dataType: "json",
		    data: "key="+$("#encryptedkey").val()+"&json=" + encodeURIComponent(
			    	JSON.stringify(
							{
								 "companyid":contactCompanyId,
								 "email":email,
								 "firstname":firstname,
								 "lastname":lastname,
								 "usertitle":usertitle,
								 "phone":phone
							})),
				   success: function(data){	
					   if(data.status == "true")
						{
						    NestableId= $('#txtContactCompanyId').val();						   
						    loadExternalContact();
						    clearContactsPopup();	 					   
						    $("#modalAddPartner .close").click();	 
						}
					   else
						{
						   								   
						   clearContactsPopup();
						   $("#modalAddPartner .close").click();
						   ErrorMessage.push("Error Occured While Saving Company Contact. Please Contact Administrator");	
						   showalert('alert-danger','Error!','text-warning');
						   $(window).scrollTop(0);
						}
					        
				},
				error: function(){
					if(error.status == 401){
  	        		  window.location.href = 'logout';
					}else{
					   clearContactsPopup();
					   $("#modalAddPartner .close").click();
					   showalert('alert-danger','Error!','text-warning');
					   ErrorMessage.push("Error Occured While Saving Company Contact. Please Contact Administrator");	
					   $(window).scrollTop(0);
					}
			}
		});
	
}

function clearContactsPopup()
{
	$('#txtContactCompanyId').val('');
	$('#txtEmail').val('');
	$('#txtFirstName').val('');
	$('#txtLastName').val('');
	$('#txtCompanyName').val('');
	$('#drpCompanyType').val('');
	$('#drpConatctType').val('');	
}

function showalert(alerttype,messageType,text) {
	
	var row = "";
	$.each(ErrorMessage, function(i, field)
	{
		row = row + '<tr><td>' + field +'</td></tr>';
	});
	
    $('#alert_placeholder').append
    ('<div id="alertdiv" class="m-b-20  alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
    		'<h3 class="text-danger"><i class="fa fa-exclamation-triangle"></i>&nbsp;&nbsp'+ messageType  +'</h3> ' +
    		'<table class="errortable text-danger">'+ row    		
    		+'</table></div>')
        setTimeout(function() {
	   $("#alertdiv").remove();

    }, 50000);
  
  }

$(document).on('click', '#submit', function(){
	
	    validateRFI() ;

		var defaultQuestion = document.getElementById("DefaultQuestions");
		defaultQuestion.value = getQuestion();//checkvalList.toString();
				
		var customRecipients = document.getElementById("CustomRecipients");
		customRecipients.value = getRecipients();
			
		var allInternal = document.getElementById("AllInternal");
		
		allInternal.value = $('#chkSendMailtoInternal').checked == true ? "YES" : "NO";
		
		var RfiTypeId = ""; 		
	 	if($('#Int').prop('checked'))
			RfiTypeId = $('#Int').val();
		else if ($('#Ext').prop('checked'))
			RfiTypeId = $('#Ext').val(); 
				 		 	
	    
	    var ScheduleImpact ="";        
	    if($('#rdScheduleImpactYes').prop('checked'))
	    	ScheduleImpact = $('#rdScheduleImpactYes').val();
		else if ($('#rdScheduleImpactNo').prop('checked'))
			ScheduleImpact = $('#rdScheduleImpactNo').val();        
	    
	           
	    var WorkImpact = "" ;           
	    if($('#rdWorkImpactYes').prop('checked'))
	    	WorkImpact = $('#rdWorkImpactYes').val();
	    else if($('#rdWorkImpactNo').prop('checked'))
	    	WorkImpact = $('#rdWorkImpactNo').val();
	           
	    
	    var Priority = "" ;         
	    if($('#rdPriorityLow').prop('checked'))
	    	Priority = $('#rdPriorityLow').val();
	    else if($('#rdPriorityMedium').prop('checked'))
	    	Priority = $('#rdPriorityMedium').val();
	    else if($('#rdPriorityHigh').prop('checked'))
	    	Priority = $('#rdPriorityHigh').val();
		
	    var RfiNo = $('#txtRFIName').val();
        var DirectTo = $('#txtDirectTo').val();
        var Remarks = $('#txtremarks').val();
        var CustomQuestion = $('#txtOwnQuestion').val();
        var Recipients = getRecipients();
        var DefinedQuestions = getQuestion();
        var ComapnyId= $('#txtCompanyId').val();
        var ProjectId = $('#txtProjectId').val();
        var UserId = $('#txtSenderId').val();
        
		ErrorMessage = [];
	    
	    if(RfiNo == null || RfiNo=='')
	    {
	    	ErrorMessage.push("Please Enter RFI#");
	    }
	    
	    if(DirectTo == null || DirectTo=='')
	    {
	    	ErrorMessage.push("Please Enter DirectTo");
	    }
	    
	    if(ScheduleImpact == null || ScheduleImpact =='')
		{
	    	ErrorMessage.push("Please Select Schedule Impact");
		   
		}
	    if(WorkImpact == null || WorkImpact =='')
		{
	    	ErrorMessage.push("Please Select Work Impact");     	
		   
		}
	    if(Priority == null || Priority =='')
		{
	    	ErrorMessage.push("Please Select Priority");    		  
		}
	    
	    if(DefinedQuestions == '' && CustomQuestion == '')
	    {
	    	ErrorMessage.push("Please Select Question Or Enter your own Question");        	
	    }
	    
	    if(RfiTypeId == 2 && Recipients == "")
	    {
	    	ErrorMessage.push("Please Select Recipients to send mail");        	
	    }
	    
	    if(ErrorMessage.length > 0)
	    {
	    	event.preventDefault();
	        showalert('alert-danger','Error!','text-warning');
	        $(window).scrollTop(0);
	    }
			
});
