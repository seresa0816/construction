var QuestionData = new Array();
var radios = new Array();
var answerValues = new Array();
var Questions = new Array();
var ExternalUser_customAdd = new Array(); //dynamically assigned IDs added here
var ExternalUser_checkboxList = new Array(); //to track external users requested for forwarding
var recipientIDs = new Array(); //to store all recipient IDs

var forwardEmails = new Array(); //track emails to forward this RFI to


$(function(){
	$("#QuestionOptions").hide();
	$('#QuestionAnswers').hide();
	$('#QuestionIDs').hide();
	$('#IE').hide();
	$('#rfinumber').hide();
	$('#userid').hide();
	$('#projectid').hide();
	$('#companyid').hide();
	$('#defInt').hide();
	$('#SendToIDs').hide();
	$('#FromUserID').hide();

	debugger;
	RadioGen();

	
	$.ajax({
		type: "GET",
		url: "/bimspring/externalRFIPermission",
		data: "key="+$("#encryptedkey").val(),
		success: function(data){
			if(data!=null || data!='')
			{
				var dataObj = jQuery.parseJSON(data);			
				
				if (dataObj.rs[0]['RFITypeName'] == 'External'){
					extButton(); 
				}
			}
		}, error: function(error){
				if(error.status == 401){
 		   		  	window.location.href = 'logout';
 		    	 }
 			}
 });
	
	
});

function extButton(){

}

function forwardButton(){
	var F = document.createElement("button"); //create button
	F.setAttribute("type", "submit");
	F.setAttribute("name", "forward");
	F.setAttribute("value", "forward");
	F.id = "forward";
	F.innerHTML = "Forward this RFI";
	F.addEventListener("click", function(){
		event.preventDefault();
		window.location = $("#springURL").val()+"forwardrfiform";
	});
	var cell = document.getElementById("s");
	cell.appendChild(F);
	return F;
}

function destroyForwardButton(){
	var F = document.getElementById("forward");
	F.parentNode.removeChild(F);
}


function RadioGen(){
	
	alert($("#QuestionIDs").val());
	alert($("#QuestionOptions").val());
	
	var len = $("#QuestionIDs").val().length;
	var QID = $("#QuestionIDs").val().substring(1,len-1);
	var QIDs = QID.split(",");
	var selectOptions = document.getElementById('QuestionOptions');
	var items = document.getElementById('qlist');
	for (var i = 0; i < selectOptions.length; i++){
		var data = (JSON.parse(selectOptions[i].value)['Button']['Radio']);
		for (var j = 0; j < data.length; j++){
			items[i].appendChild(createRadio(i, j, data[j], QIDs[i]));
		}
	}
}

function createRadio(i, j, description, name){
	var radio = document.createElement("input");
	radio.setAttribute("type", "radio");
	radio.setAttribute("id", "radioid"+i+j);
	radios.push(radio.getAttribute("id")); //radios will contain list of ids of all radio buttons
	radio.setAttribute("name", name);
	radio.setAttribute("value", description);
	var lbl = document.createElement("label");
	var text = document.createTextNode(description);
	lbl.appendChild(radio);
	lbl.appendChild(text);
	return lbl;
}

function create_DefaulttoInternal_checkbox(){
	var checkbox = document.createElement("input");
	var label = document.createElement("label");
	label.id = "lbid_defInt";
	var textnode = document.createTextNode("Send to all internal members.");
	checkbox.setAttribute("type", "checkbox");
	checkbox.id = "defInternal";
	checkbox.name = "defInt";
	label.appendChild(checkbox);
	label.appendChild(textnode);
	document.getElementById("partnerDisplay").appendChild(label);
}

function create_ExternalUser_checkbox(div, name, id, recipient, PartnerUserID){
	ExternalUser_checkboxList.push(id); //all ids stored here for future reference
	var checkbox = document.createElement("input");
	var label = document.createElement("label");
	label.id = "elbd" + id;
	var description = document.createTextNode(recipient);
	checkbox.setAttribute("type", "checkbox");
	checkbox.id = id;
	checkbox.name = name;
	checkbox.value = PartnerUserID; //value is specified email address
	label.appendChild(checkbox);
	label.appendChild(description);
	document.getElementById(div).appendChild(label);
}

function create_ExternalUser_removeButton(textnode){
	var button = document.createElement("button");
	button.setAttribute("type", "button");
	button.id = "delExtRecipient"; //button id is the same as label id
	button.innerHTML = "-";
}

function create_addRecipient_button(){
	var button = document.createElement("button");
	button.setAttribute("type", "button");
	button.id = "addExtRecipient_btn"; //button id is the same as label id
	button.innerHTML = "+";

}

$(document).on('click', '#submit', function(){
	var jarr = new Array();
	var inp = document.getElementById("QuestionIDs"); //clear the value of the hidden input
	var input = document.getElementById("QuestionAnswers");
	input.value = ""; //clear the value of the submission input
	
	for (var i = 0; i < radios.length; i++){
		if ($('#'+radios[i]).is(":checked")){
			answerValues.push(($('#'+radios[i]).val())); //answerValues now contains all responses as strings
			Questions.push($('#'+radios[i]).attr('name')); //contains the questionID for each answer
		}
	}
	
	for (var j = 0; j < answerValues.length; j++){
		var jobj = "{\\\"" + Questions[j].replace(/ /g,'') + "\\\":\\\"" + answerValues[j] + "\\\"}";
		jarr.push(jobj);
	}
	
	input.value = jarr.toString();
	$("#Response").val(manageQuotes($("#Response").val()));
	
	//if External:
	if ($('#IE').val() == 'External'){
		//iterate through suggested recipient checkboxes, add IDs
		for (var i = 0; i < ExternalUser_checkboxList.length; i++){
			if ($('#'+ExternalUser_checkboxList[i]).is(':checked')){
				recipientIDs.push($('#'+ExternalUser_checkboxList[i]).val()); //push the recipient's ID into the array
			}
		}
		//add externalUser_customAdd ids
		for (var j = 0; j < ExternalUser_customAdd.length; j++){
			recipientIDs.push(ExternalUser_customAdd[j]);
		}
		//alert(recipientIDs.toString);
		//send to all internal users
		if ($('#defInternal').is(':checked')){
			$('#defInt').val("YES");
		}else{
			$('#defInt').val("NO");
			recipientIDs.push($('#userid').val()); //add senderID to recipient list
		}
		$('#SendToIDs').val(recipientIDs.toString()); //make recipient IDs accessible to spring
		//alert($('#SendToIDs').val());
	}
});

function typeOf(obj) {
	  return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

function manageQuotes(a) {
	var arr = a.split('');
	var b = new Array();
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == '\'' || arr[i] == '\"') {
			b.push('\\');
			b.push('\\');
		}
		b.push(arr[i]);
	}
	return b.toString().replace(/,/g,'');
	
}