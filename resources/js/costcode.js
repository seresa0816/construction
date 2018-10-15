




$("#ddl2").hide();

$(function () {
	$("#ddlMachinery").change(function () {
		if ($(this).val() == "ddl2") {
			$("#ddl2").show();
			$("#ddl3").hide();
		}
	});
});

function displayForm(c){ 
	if(c.value == "1"){ 

		document.getElementById("ccform").style.display='inline'; 
		document.getElementById("paypalform").style.display='none'; 
	} 
	else if(c.value =="2"){ 
		document.getElementById("ccform").style.display='none'; 

		document.getElementById("paypalform").style.display='inline'; 
	} 
	else{ 
	} 
} 


function change(obj) {

	var selectBox = obj;
	var selected = selectBox.options[selectBox.selectedIndex].value;
	var retCustDetails1 = document.getElementById("retCustDetails1");
	var tradeCustDetails1 = document.getElementById("tradeCustDetails1");

	if(selected == 'ret1'){
		retCustDetails1.style.display = "block";
		tradeCustDetails1.style.display = "none";
	}
	else{
		retCustDetails1.style.display = "none";
		tradeCustDetails1.style.display = "block";
	}
}

function change1(obj1) {

	var selectBox = obj1;
	var selected = selectBox.options[selectBox.selectedIndex].value;
	var ddl1 = document.getElementById("ddl1");
	var tradeCustDetails2 = document.getElementById("tradeCustDetails2");

	if(selected == 'ddl1'){
		ddl1.style.display = "block";
		tradeCustDetails2.style.display = "none";
	}
	else{
		ddl1.style.display = "none";
		tradeCustDetails2.style.display = "block";
	}
}

$(window).on('load', function (){	

	$.each(dropdowndata, function(key1,value1) {

		$.each(value1, function(key2,value2) {


			var dropdownArray= value2['FactorUOM'];


			if ( value2['ConnectionTypeCB']=="true") {

				$("#contype").prop("checked", true);
				document.getElementById("ccform").style.display='inline'; 
				document.getElementById("paypalform").style.display='none'; 

			} 

			if ( value2['ShopOperationsCB']=="true") {

				$("#shoptype").prop("checked", true);
				document.getElementById("ccform").style.display='none'; 
				document.getElementById("paypalform").style.display='inline'; 

			} 


			$.each(dropdownArray, function(key3,value3) {


				if ( value2['Type']=="Material Cost") {
					$('#mcc1').append($('<option>', { 
						value: value3['Factor'],
						text : value3['Factor'] 
					}));
					$('#mcc2').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					})); 
					if(value2['Checkboxvalue']=="true"){
						$("#materialcmn").prop('checked',value2['Checkboxvalue']);
						$("#mcc1,#mcc2,#mcc").removeAttr("disabled"); 

						$("#mcc").val(value2['Value']);
						$('#mcc1').val(value2['FactorValue']);
						$('#mcc2').val(value2['UOMValue']);

					}
				}

				if ( value2['Description']=="End Plate") {
					$("#ef1").text(value3['Factor']);
					$("#um1").text(value3['UOM']);

					if(value2['Checkboxvalue']=="true"){
						$("#endplateCB").prop('checked',value2['Checkboxvalue']);
						$("#endplate").removeAttr("disabled"); 
						$("#endplate").val(value2['Value']);

					}
				}
				if ( value2['Description']=="Shear Plate") {
					$("#Shearh").text(value3['Factor']);
					$("#Shearum").text(value3['UOM']);

					if(value2['Checkboxvalue']=="true"){
						$("#shrplateCB").prop('checked',value2['Checkboxvalue']);
						$("#shrplate").removeAttr("disabled"); 
						$("#shrplate").val(value2['Value']);

					}

				}
				if ( value2['Description']=="Clip Angle") {
					$("#Cliph").text(value3['Factor']);
					$("#Clipum").text(value3['UOM']);
					if(value2['Checkboxvalue']=="true"){
						$("#clipCB").prop('checked',value2['Checkboxvalue']);
						$("#clip").removeAttr("disabled"); 
						$("#clip").val(value2['Value']);

					}
				}


				if ( value2['Description']=="Moment Conn") {
					$("#Momenth").text(value3['Factor']);
					$("#Momentum").text(value3['UOM']);
					if(value2['Checkboxvalue']=="true"){
						$("#momentCB").prop('checked',value2['Checkboxvalue']);
						$("#moment").removeAttr("disabled"); 
						$("#moment").val(value2['Value']);

					}
				} 
				if ( value2['Description']== "Vb Conn. with gusset") {
					$("#VBh").text(value3['Factor']);
					$("#VBum").text(value3['UOM']);
					if(value2['Checkboxvalue']=="true"){
						$("#vbCB").prop('checked',value2['Checkboxvalue']);
						$("#vb").removeAttr("disabled"); 
						$("#vb").val(value2['Value']);

					}

				}

				if ( value2['Description']=="Hb Conn. with gusset") {
					$("#HBh").text(value3['Factor']);
					$("#HBum").text(value3['UOM']);
					if(value2['Checkboxvalue']=="true"){
						$("#hbCB").prop('checked',value2['Checkboxvalue']);
						$("#hb").removeAttr("disabled"); 
						$("#hb").val(value2['Value']);

					}


				}
				if ( value2['Description']=="Splice Conn") {
					$("#Spiceh").text(value3['Factor']);
					$("#Spiceum").text(value3['UOM']);
					if(value2['Checkboxvalue']=="true"){
						$("#SpicehCB").prop('checked',value2['Checkboxvalue']);
						$("#splice").removeAttr("disabled"); 
						$("#splice").val(value2['Value']);

					}
				}


				if ( value2['Type']== "Welding" ) {
					if ( value2['Description']=="Machinery & Shop labour cost") {
						$('#ms1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#ms2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));


						if (value2['Checkboxvalue']=="true" ){
							if ( value2['EstimateType']=="con"){
								$("#msCB").prop('checked',value2['Checkboxvalue']);
								$("#ms1,#ms2,#ms").removeAttr("disabled"); 
								$("#ms1").val(value2['FactorValue']);
								$("#ms2").val(value2['UOMValue']);
								$("#ms").val(value2['Value']);
							} 
							if ( value2['EstimateType']=="shop"){
								$("#wmsCB").prop('checked',value2['Checkboxvalue']);
								$("#wms1,#wms2,#wms").removeAttr("disabled"); 
								$("#wms1").val(value2['FactorValue']);
								$("#wms2").val(value2['UOMValue']);
								$("#wms").val(value2['Value']);
							} 
						}

						$('#wms1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wms2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
					}
					if ( value2['Description']=="Machinery & Field labour cost") {
						$('#mf1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#mf2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
						if (value2['Checkboxvalue']=="true"){

							if ( value2['EstimateType']=="con"){
								$("#mfCB").prop('checked',value2['Checkboxvalue']);
								$("#mf1,#mf2,#mf").removeAttr("disabled"); 
								$("#mf1").val(value2['FactorValue']);
								$("#mf2").val(value2['UOMValue']);
								$("#mf").val(value2['Value']);
							} 
							if ( value2['EstimateType']=="shop"){
								$("#wmf2CB").prop('checked',value2['Checkboxvalue']);
								$("#wmf1,#wmf2,#wmf").removeAttr("disabled"); 
								$("#wmf1").val(value2['FactorValue']);
								$("#wmf2").val(value2['UOMValue']);
								$("#wmf").val(value2['Value']);
							} 

						}


						$('#wmf1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wmf2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));


					}


				}

				if ( value2['Type']== "Bolting") {
					if ( value2['Description']=="Shop labour cost") {
						$('#ml1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#ml2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

						if (value2['Checkboxvalue']=="true"){

							if ( value2['EstimateType']=="con"){
								$("#ml1CB").prop('checked',value2['Checkboxvalue']);
								$("#ml1,#ml2,#mlN").removeAttr("disabled"); 
								$("#ml1").val(value2['FactorValue']);
								$("#ml2").val(value2['UOMValue']);
								$("#mlN").val(value2['Value']);
							} 
							if ( value2['EstimateType']=="shop"){

								$("#wml2CB").prop('checked',value2['Checkboxvalue']);
								$("#wml1,#wml2,#wsurp").removeAttr("disabled"); 
								$("#wml1").val(value2['FactorValue']);
								$("#wml2").val(value2['UOMValue']);
								$("#wsurp").val(value2['Value']);
							}



						}

						$('#wml1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wml2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
					}
					if ( value2['Description']=="Field labour cost") {
						$('#fl1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#fl2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

						if (value2['Checkboxvalue']=="true"){

							if ( value2['EstimateType']=="con"){
								$("#f1CB").prop('checked',value2['Checkboxvalue']);
								$("#fl1,#fl2,#fl").removeAttr("disabled"); 
								$("#fl1").val(value2['FactorValue']);
								$("#fl2").val(value2['UOMValue']);
								$("#fl").val(value2['Value']);
							} 
							if ( value2['EstimateType']=="shop"){
								$("#wfl2CB").prop('checked',value2['Checkboxvalue']);
								$("#wfl1,#wfl2,#wfl").removeAttr("disabled"); 
								$("#wfl1").val(value2['FactorValue']);
								$("#wfl2").val(value2['UOMValue']);
								$("#wfl").val(value2['Value']);
							}

						}

						$('#wfl1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wfl2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

					}

				}  


				if ( value2['Type']== "Finish") {
					if ( value2['Description']=="Surface Preparation") {
						$('#surp1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#surp2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

						if (value2['Checkboxvalue']=="true"){


							if ( value2['EstimateType']=="con"){
								$("#surp1CB").prop('checked',value2['Checkboxvalue']);
								$("#surp1,#surp2,#surp").removeAttr("disabled"); 
								$("#surp1").val(value2['FactorValue']);
								$("#surp2").val(value2['UOMValue']);
								$("#surp").val(value2['Value']);

							} 
							if ( value2['EstimateType']=="shop"){
								$("#wsurp2CB").prop('checked',value2['Checkboxvalue']);
								$("#wsurp1,#wsurp2,#wsurpsp").removeAttr("disabled"); 
								$("#wsurp1").val(value2['FactorValue']);
								$("#wsurp2").val(value2['UOMValue']);
								$("#wsurpsp").val(value2['Value']);
							}


						}


						$('#wsurp1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wsurp2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
					}
					if ( value2['Description']=="Primer") {
						$('#wPrimer1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wPrimer2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
						$('#Primer1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#Primer2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
						if (value2['Checkboxvalue']=="true"){

							if ( value2['EstimateType']=="con"){
								$("#PrimerCB").prop('checked',value2['Checkboxvalue']);
								$("#Primer1,#Primer2,#Primer").removeAttr("disabled"); 
								$("#Primer1").val(value2['FactorValue']);
								$("#Primer2").val(value2['UOMValue']);
								$("#Primer").val(value2['Value']);

							} 
							if ( value2['EstimateType']=="shop"){
								$("#wPrimer2CB").prop('checked',value2['Checkboxvalue']);
								$("#wPrimer1,#wPrimer2,#wPrimer").removeAttr("disabled"); 
								$("#wPrimer1").val(value2['FactorValue']);
								$("#wPrimer2").val(value2['UOMValue']);
								$("#wPrimer").val(value2['Value']);
							}

						}

					}
					if ( value2['Description']=="Paint") {
						$('#Paint1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#Paint2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

						if (value2['Checkboxvalue']=="true"){

							if ( value2['EstimateType']=="con"){
								$("#Paint1CB").prop('checked',value2['Checkboxvalue']);
								$("#Paint1,#Paint2,#Paint").removeAttr("disabled"); 
								$("#Paint1").val(value2['FactorValue']);
								$("#Paint2").val(value2['UOMValue']);
								$("#Paint").val(value2['Value']);

							} 
							if ( value2['EstimateType']=="shop"){
								$("#wPaintCB").prop('checked',value2['Checkboxvalue']);
								$("#wPaint1,#wPaint2,#wPaint").removeAttr("disabled"); 
								$("#wPaint1").val(value2['FactorValue']);
								$("#wPaint2").val(value2['UOMValue']);
								$("#wPaint").val(value2['Value']);
							}


						}

						$('#wPaint1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wPaint2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
					}
					if ( value2['Description']=="Galvanization (Sub-Contract)") {
						$('#Gal1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#Gal2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
						if (value2['Checkboxvalue']=="true"){


							if ( value2['EstimateType']=="con"){
								$("#Gal1CB").prop('checked',value2['Checkboxvalue']);
								$("#Gal1,#Gal2,#Gal").removeAttr("disabled"); 
								$("#Gal1").val(value2['FactorValue']);
								$("#Gal2").val(value2['UOMValue']);
								$("#Gal").val(value2['Value']);

							} 
							if ( value2['EstimateType']=="shop"){
								$("#wGal2CB").prop('checked',value2['Checkboxvalue']);
								$("#wGal1,#wGal2,#wGal").removeAttr("disabled"); 
								$("#wGal1").val(value2['FactorValue']);
								$("#wGal2").val(value2['UOMValue']);
								$("#wGal").val(value2['Value']);
							}




						}

						$('#wGal1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wGal2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

					}
					if ( value2['Description']=="Fire-proofing(Machine)") {
						$('#Fire1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#Fire2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
						if (value2['Checkboxvalue']=="true"){

							if ( value2['EstimateType']=="con"){
								$("#Fire1CB").prop('checked',value2['Checkboxvalue']);
								$("#Fire1,#Fire2,#Fire").removeAttr("disabled"); 
								$("#Fire1").val(value2['FactorValue']);
								$("#Fire2").val(value2['UOMValue']);
								$("#Fire").val(value2['Value']);

							} 
							if ( value2['EstimateType']=="shop"){
								$("#wFire2CB").prop('checked',value2['Checkboxvalue']);
								$("#wFire1,#wFire2,#wFire").removeAttr("disabled"); 
								$("#wFire1").val(value2['FactorValue']);
								$("#wFire2").val(value2['UOMValue']);
								$("#wFire").val(value2['Value']);
							}





						}

						$('#wFire1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wFire2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

					}
					if ( value2['Description']=="Aess(Shop Labour)") {
						$('#AESS2').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#AESS1').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

						if (value2['Checkboxvalue']=="true"){

							if ( value2['EstimateType']=="con"){
								$("#AESS1CB").prop('checked',value2['Checkboxvalue']);
								$("#AESS2,#AESS1,#AESS").removeAttr("disabled"); 
								$("#AESS2").val(value2['FactorValue']);
								$("#AESS1").val(value2['UOMValue']);
								$("#AESS").val(value2['Value']);

							} 
							if ( value2['EstimateType']=="shop"){
								$("#wAESS1CB").prop('checked',value2['Checkboxvalue']);
								$("#wAESS2,#wAESS1,#wAESS").removeAttr("disabled"); 
								$("#wAESS2").val(value2['FactorValue']);
								$("#wAESS1").val(value2['UOMValue']);
								$("#wAESS").val(value2['Value']);
							} 




						}

						$('#wAESS2').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wAESS1').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

					}
					if ( value2['Description']=="Field touch-up(Field Labour)") {
						$('#Field1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#Field2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
						if (value2['Checkboxvalue']=="true"){
							if ( value2['EstimateType']=="con"){
								$("#Field2CB").prop('checked',value2['Checkboxvalue']);
								$("#Field1,#Field2,#Field").removeAttr("disabled"); 
								$("#Field1").val(value2['FactorValue']);
								$("#Field2").val(value2['UOMValue']);
								$("#Field").val(value2['Value']);
							} 
							if ( value2['EstimateType']=="shop"){
								$("#wField2CB").prop('checked',value2['Checkboxvalue']);
								$("#wField1,#wField2,#wField").removeAttr("disabled"); 
								$("#wField1").val(value2['FactorValue']);
								$("#wField2").val(value2['UOMValue']);
								$("#wField").val(value2['Value']);
							}
						}

						$('#wField1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wField2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
					}
				} 


				if ( value2['Type']== "Inspection") {
					if ( value2['Description']=="Inspector (Shop) cost") {
						$('#ins1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#ins2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));

						if (value2['Checkboxvalue']=="true"){
							if ( value2['EstimateType']=="con"){
								$("#ins2CB").prop('checked',value2['Checkboxvalue']);
								$("#ins1,#ins2,#ins").removeAttr("disabled"); 
								$("#ins1").val(value2['FactorValue']);
								$("#ins2").val(value2['UOMValue']);
								$("#ins").val(value2['Value']);
							} 
							if ( value2['EstimateType']=="shop"){
								$("#wins2CB").prop('checked',value2['Checkboxvalue']);
								$("#wins1,#wins2,#wins").removeAttr("disabled"); 
								$("#wins1").val(value2['FactorValue']);
								$("#wins2").val(value2['UOMValue']);
								$("#wins").val(value2['Value']);
							}



						}
						$('#wins1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wins2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
					}	 
				}

				if ( value2['Type']== "Loading") {
					if ( value2['Description']=="Shop labour cost") {
						$('#lod1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#lod2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
						if (value2['Checkboxvalue']=="true"){
							if ( value2['EstimateType']=="con"){
								$("#lod1CB").prop('checked',value2['Checkboxvalue']);
								$("#lod1,#lod2,#lod").removeAttr("disabled"); 
								$("#lod1").val(value2['FactorValue']);
								$("#lod2").val(value2['UOMValue']);
								$("#lod").val(value2['Value']);
							} 
							if ( value2['EstimateType']=="shop"){
								$("#wlod2CB").prop('checked',value2['Checkboxvalue']);
								$("#wlod1,#wlod2,#wlod").removeAttr("disabled"); 
								$("#wlod1").val(value2['FactorValue']);
								$("#wlod2").val(value2['UOMValue']);
								$("#wlod").val(value2['Value']);
							}
						}
						$('#wlod1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wlod2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
					}	 
				} 

				if ( value2['Type']== "Miscellaneous labour charge") {
					if ( value2['Description']=="Miscellaneous labour charge") {
						$('#mlc1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#mlc2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
						if (value2['Checkboxvalue']=="true"){
							if ( value2['EstimateType']=="con"){
								$("#mlc2CB").prop('checked',value2['Checkboxvalue']);
								$("#mlc1,#mlc2,#mlc").removeAttr("disabled"); 
								$("#mlc1").val(value2['FactorValue']);
								$("#mlc2").val(value2['UOMValue']);
								$("#mlc").val(value2['Value']);
							} 
							if ( value2['EstimateType']=="shop"){
								$("#wmlc2CB").prop('checked',value2['Checkboxvalue']);
								$("#wmlc1,#wmlc2,#wmlc").removeAttr("disabled"); 
								$("#wmlc1").val(value2['FactorValue']);
								$("#wmlc2").val(value2['UOMValue']);
								$("#wmlc").val(value2['Value']);


							}

						}
						$('#wmlc1').append($('<option>', { 
							value: value3['Factor'],
							text : value3['Factor'] 
						}));
						$('#wmlc2').append($('<option>', { 
							value: value3['UOM'],
							text : value3['UOM'] 
						}));
					}	 
				} 

				if ( value2['Type']== "Material shifting charge") {

					$('#ddlMachinery1').append($('<option>', { 
						value: value3['Factor'],
						text : value3['Factor'] 
					}));
					$('#mao2').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					}));
					if (value2['Checkboxvalue']=="true"){
						$("#mao2CB").prop('checked',value2['Checkboxvalue']);
						$("#ddlMachinery1,#mao2,#mao").removeAttr("disabled"); 
						$("#mao1").val(value2['FactorValue']);
						$("#mao2").val(value2['UOMValue']);
						$("#mao").val(value2['Value']);

					}


				} 

				if ( value2['Type']== "Material cutting charge") {

					$('#masc1').append($('<option>', { 
						value: value3['Factor'],
						text : value3['Factor'] 
					}));
					$('#masc2').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					}));

					if (value2['Checkboxvalue']=="true"){
						$("#masc1CB").prop('checked',value2['Checkboxvalue']);
						$("#masc1,#masc2,#masc").removeAttr("disabled"); 
						$("#masc1").val(value2['FactorValue']);
						$("#masc2").val(value2['UOMValue']);
						$("#masc").val(value2['Value']);

					}



				} 
				if ( value2['Type']== "Coping Charge") {

					$('#coch1').append($('<option>', { 
						value: value3['Factor'],
						text : value3['Factor'] 
					}));
					$('#coch2').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					}));


					if (value2['Checkboxvalue']=="true"){
						$("#cochCB").prop('checked',value2['Checkboxvalue']);
						$("#coch1,#coch2,#coch").removeAttr("disabled"); 
						$("#coch1").val(value2['FactorValue']);
						$("#coch2").val(value2['UOMValue']);
						$("#coch").val(value2['Value']);


					}




				} 
				if ( value2['Type']== "Layout Charge") {

					$('#lac1').append($('<option>', { 
						value: value3['Factor'],
						text : value3['Factor'] 
					}));
					$('#lac2').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					}));


					if (value2['Checkboxvalue']=="true"){
						$("#lac1CB").prop('checked',value2['Checkboxvalue']);
						$("#lac1,#lac2,#lactxt").removeAttr("disabled"); 
						$("#lac1").val(value2['FactorValue']);
						$("#lac2").val(value2['UOMValue']);
						$("#lactxt").val(value2['Value']);


					}


				} 



				if ( value2['Type']== "Punching/Drilling") {

					$('#pud1').append($('<option>', { 
						value: value3['Factor'],
						text : value3['Factor'] 
					}));
					$('#pud2').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					}));
					$('#pud3').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					}));

					if (value2['Checkboxvalue']=="true"){
						$("#pudCB").prop('checked',value2['Checkboxvalue']);
						$("#pud1,#pud2,#pud,#pud4,#pud3").removeAttr("disabled"); 
						$("#pud1").val(value2['FactorValue']);
						$("#pud2").val(value2['UOMValue']);
						$("#pud3").val(value2['UOMValue']);
						$("#pud").val(value2['Value']);
						$("#pud4").val(value2['Value']);


					}

				} 

				if ( value2['Type']== "Bevel Preparation") {

					$('#bp1').append($('<option>', { 
						value: value3['Factor'],
						text : value3['Factor'] 
					}));
					$('#bp2').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					}));


					if (value2['Checkboxvalue']=="true"){
						$("#bpCB").prop('checked',value2['Checkboxvalue']);
						$("#bp1,#bp2,#bp").removeAttr("disabled"); 
						$("#bp1").val(value2['FactorValue']);
						$("#bp2").val(value2['UOMValue']);
						$("#bp").val(value2['Value']);


					}

				} 

				if ( value2['Type']== "Fit Up") {

					$('#fit1').append($('<option>', { 
						value: value3['Factor'],
						text : value3['Factor'] 
					}));
					$('#fit2').append($('<option>', { 
						value: value3['UOM'],
						text : value3['UOM'] 
					}));


					if (value2['Checkboxvalue']=="true"){
						$("#fit1CB").prop('checked',value2['Checkboxvalue']);
						$("#fit1,#fit2,#fit").removeAttr("disabled"); 
						$("#fit1").val(value2['FactorValue']);
						$("#fit2").val(value2['UOMValue']);
						$("#fit").val(value2['Value']);


					}


				}  


			}); 
		}); 
	});


});


$(".comnsave").click(function() {
	var clipCB =shrplateCB=endplateCB=contype=materialcmn=momentCB=vbCB=hbCB=SpicehCB="false";
	var wmlc2CB=wlod2CB=wins2CB=wField2CB=wAESS1CB=wFire2CB=wGal2CB=wPaint2CB=wPrimer2CB=wsurp2CB=wfl2CB="false";
	var wml2CB=wmf2CB=wmsCB=fit1CB=bpCB=pud1CB=lacCB=cochCB=msCB=PrimerCB=surp1CB=f1CB=ml1CB=mfCB="false";	  
	var lac1CB=mascCB=mao2CB=mlc2CB=lod1CB=ins2CB=Field2CB=AESS1CB=Fire1CB=Gal1CB=Paint1CB=shoptype="false";

	var estimateBased='';

	if($("#clipCB").is(':checked'))
	{
		clipCB ="true";  // checked		
	}
	if($("#shrplateCB").is(':checked'))
	{
		shrplateCB ="true";  // checked		
	}
	if($("#endplateCB").is(':checked'))
	{
		endplateCB ="true";  // checked		
	}

	if($("#momentCB").is(':checked'))
	{
		momentCB ="true";  // checked		
	}

	if($("#vbCB").is(':checked'))
	{
		vbCB="true";  // checked		
	}

	if($("#hbCB").is(':checked'))
	{
		hbCB="true";  // checked		
	}

	if($("#SpicehCB").is(':checked'))
	{
		SpicehCB="true";  // checked		
	}

	if($("#msCB").is(':checked'))
	{
		msCB="true";  // checked		
	}

	if($("#mfCB").is(':checked'))
	{
		mfCB="true";  // checked		
	}
	if($("#ml1CB").is(':checked'))
	{
		ml1CB="true";  // checked		
	}
	if($("#f1CB").is(':checked'))
	{
		f1CB="true";  // checked		
	}

	if($("#surp1CB").is(':checked'))
	{
		surp1CB="true";  // checked		
	}

	if($("#PrimerCB").is(':checked'))
	{
		PrimerCB="true";  // checked		
	}


	if($("#Paint1CB").is(':checked'))
	{
		Paint1CB="true";  // checked		
	}


	if($("#Gal1CB").is(':checked'))
	{
		Gal1CB="true";  // checked		
	}
	if($("#Fire1CB").is(':checked'))
	{
		Fire1CB="true";  // checked		
	}
	if($("#AESS1CB").is(':checked'))
	{
		AESS1CB="true";  // checked		
	}
	if($("#Field2CB").is(':checked'))
	{
		Field2CB ="true";  // checked		
	}
	if($("#ins2CB").is(':checked'))
	{
		ins2CB ="true";  // checked		
	}
	if($("#lod1CB").is(':checked'))
	{
		lod1CB="true";  // checked		
	}
	if($("#mlc2CB").is(':checked'))
	{	
		mlc2CB="true";  // checked

	}
	if($("#mao2CB").is(':checked'))
	{
		mao2CB ="true";  // checked	
	}
	if($("#mascCB").is(':checked'))
	{
		mascCB="true";  // checked		
	}
	if($("#cochCB").is(':checked'))
	{
		cochCB ="true";  // checked		
	}
	if($("#lacCB").is(':checked'))
	{
		lacCB="true";  // checked		
	}
	if($("#pudCB").is(':checked'))
	{
		pud1CB="true";  // checked		
	}
	if($("#bpCB").is(':checked'))
	{
		bpCB="true";  // checked		
	}
	if($("#fit1CB").is(':checked'))
	{
		fit1CB="true";  // checked		
	}
	if($("#wmsCB").is(':checked'))
	{
		wmsCB="true";  // checked		
	}
	if($("#wmf2CB").is(':checked'))
	{
		wmf2CB ="true";  // checked		
	}

	if($("#lac1CB").is(':checked'))
	{
		lac1CB ="true";  // checked		
	}

	if($("#wml2CB").is(':checked'))  
	{
		wml2CB ="true";  // checked		
	}
	if($("#wfl2CB").is(':checked'))
	{
		wfl2CB ="true";  // checked		
	}

	if($("#wsurp2CB").is(':checked'))
	{
		wsurp2CB ="true";  // checked		
	}
	if($("#wPrimer2CB").is(':checked'))
	{
		wPrimer2CB ="true";  // checked		
	}
	if($("#wPaint2CB").is(':checked'))
	{
		wPaint2CB ="true";  // checked		
	}
	if($("#wGal2CB").is(':checked'))
	{
		wGal2CB ="true";  // checked		
	}
	if($("#wFire2CB").is(':checked'))
	{
		wFire2CB ="true";  // checked		
	}
	if($("#wAESS1CB").is(':checked'))
	{
		wAESS1CB ="true";  // checked		
	}
	if($("#wField2CB").is(':checked'))
	{
		wField2CB ="true";  // checked		
	}
	if($("#wins2CB").is(':checked'))
	{
		wins2CB ="true";  // checked		
	}
	if($("#wlod2CB").is(':checked'))
	{
		wlod2CB ="true";  // checked		
	}
	if($("#wmlc2CB").is(':checked'))
	{
		wmlc2CB ="true";  // checked		
	}

	masc1CB

	if($("#masc1CB").is(':checked'))
	{
		masc1CB="true";  // checked		
	}
	if($("#materialcmn").is(':checked'))
	{
		materialcmn="true";  // checked		
	}

	if($("#contype").is(':checked'))
	{
		contype="true";  // checked	
		estimateBased='con'
			fit1CB= bpCB=pud1CB=lac1CB=cochCB=masc1CB=mao2CB ="false";
	}

	if($("#wPaintCB").is(':checked'))
	{
		wPaintCB="true";  // checked	
	}

	if($("#shoptype").is(':checked'))
	{
		shoptype="true";  // checked		
		estimateBased='shop';

		endplateCB= shrplateCB=clipCB=momentCB=vbCB=hbCB=SpicehCB="false";
		msCB=wmsCB;
		$("#ms1").val($("#wms1").val());
		$("#ms2").val($("#wms2").val());
		$("#ms").val($("#wms").val());

		mlc2CB=wmlc2CB;
		$("#mlc1").val($("#wmlc1").val());
		$("#mlc2").val($("#wmlc2").val());
		$("#mlc").val($("#wmlc").val());


		lod1CB=wlod2CB;
		$("#lod1").val($("#wlod1").val());
		$("#lod2").val($("#wlod2").val());
		$("#lod").val($("#wlod").val());

		ins2CB=wins2CB;
		$("#ins1").val($("#wins1").val());
		$("#ins2").val($("#wins2").val());
		$("#ins").val($("#wins").val());

		Field2CB=wField2CB;
		$("#Field1").val($("#wField1").val());
		$("#Field2").val($("#wField2").val());
		$("#Field").val($("#wField").val());

		AESS1CB=wAESS1CB;
		$("#AESS2").val($("#wAESS2").val());
		$("#AESS1").val($("#wAESS1").val());
		$("#AESS").val($("#wAESS").val());

		Fire1CB=wAESS1CB;
		$("#Fire1").val($("#wFire1").val());
		$("#Fire2").val($("#wFire2").val());
		$("#Fire").val($("#wFire").val());


		Gal1CB=wGal2CB;
		$("#Gal1").val($("#wGal1").val());
		$("#Gal2").val($("#wGal2").val());
		$("#Gal").val($("#wGal").val());


		Paint1CB=wPaintCB;
		$("#Paint1").val($("#wPaint1").val());
		$("#Paint2").val($("#wPaint2").val());
		$("#Paint").val($("#wPaint").val());

		PrimerCB=wPrimer2CB;
		$("#Primer1").val($("#wPrimer1").val());
		$("#Primer2").val($("#wPrimer2").val());
		$("#Primer").val($("#wPrimer").val());

		surp1CB=wsurp2CB;
		$("#surp1").val($("#wsurp1").val());
		$("#surp2").val($("#wsurp2").val());
		$("#surp").val($("#wsurpsp").val());

		f1CB=wfl2CB;
		$("#fl1").val($("#wfl1").val());
		$("#fl2").val($("#wfl2").val());
		$("#fl").val($("#wfl").val());

		ml1CB=wml2CB;
		$("#ml1").val($("#wml1").val());
		$("#ml2").val($("#wml2").val());
		$("#mlN").val($("#wsurp").val());


		mfCB=wmf2CB;
		$("#mf1").val($("#wmf1").val());
		$("#mf2").val($("#wmf2").val());
		$("#mf").val($("#wmf").val());





	}



	var costcodejson={"LaborcodeProperties": [ {"EstimateType": "Common","Type": "Material Cost","Description": "Material Cost","FactorUOM": [{"Factor": "Varies Directly On Weight","UOM": "$/TON"},{"Factor": "Varies Directly On Length","UOM": "$/FT"},{"Factor": "Lump-Sum Rate per Piece","UOM": "$/PIECE"} ],"FactorValue": $('#mcc1').val(),"UOMValue": $('#mcc2').val(),"Value":  $('#mcc').val(),"Checkboxvalue":materialcmn}, {"EstimateType": "Connection Type","Type": "Connection Type","Description": "End Plate","FactorUOM": [{"Factor": "Varies Directly On Connection Type","UOM": "$/Connection"}],"FactorValue": "","UOMValue": "","Value": $('#endplate').val(),"Checkboxvalue":endplateCB}, {"EstimateType": "Connection Type","Type": "Connection Type","Description": "Shear Plate","FactorUOM": [{"Factor": "Varies Directly On Connection Type","UOM": "$/Connection"}],"FactorValue": "","UOMValue": "","Value": $("#shrplate").val(),"Checkboxvalue":shrplateCB}, {"EstimateType": "Connection Type","Type": "Connection Type","Description": "Clip Angle","FactorUOM": [{"Factor": "Varies Directly On Connection Type","UOM": "$/Connection"}],"FactorValue":"","UOMValue":"","Value":$("#clip").val(),"Checkboxvalue":clipCB}, {"EstimateType": "Connection Type","Type": "Connection Type","Description": "Moment Conn","FactorUOM": [{"Factor": "Varies Directly On Connection Type","UOM": "$/Connection"}],"FactorValue": "","UOMValue": "","Value":$("#moment").val(),"Checkboxvalue":momentCB}, {"EstimateType": "Connection Type","Type": "Connection Type","Description": "Vb Conn. with gusset","FactorUOM": [{"Factor": "Varies Directly On Connection Type","UOM": "$/Connection"}],"FactorValue": "","UOMValue": "","Value":$("#vb").val(),"Checkboxvalue":vbCB}, {"EstimateType": "Connection Type","Type": "Connection Type","Description": "Hb Conn. with gusset","FactorUOM": [{"Factor": "Varies Directly On Connection Type","UOM": "$/Connection"}],"FactorValue": "","UOMValue": "","Value":$("#hb").val(),"Checkboxvalue": hbCB}, {"EstimateType": "Connection Type","Type": "Connection Type","Description": "Splice Conn","FactorUOM": [{"Factor": "Varies Directly On Connection Type","UOM": "$/Connection"}],"FactorValue": "","UOMValue": "","Value":$("#splice").val(),"Checkboxvalue": SpicehCB}, {"EstimateType": "Shop Operations","Type": "Material shifting charge","Description": "Machinery & Shop labour cost","FactorUOM": [{"Factor": "Varies Directly On Weight","UOM": "$/TON"}, {"Factor": "Varies Directly On Hour","UOM": "$/HR"}, {"Factor": "Lump-Sum Rate per Piece","UOM": "$/PIECE"}],"FactorValue": $('#ddlMachinery1').val(),"UOMValue":$('#mao2').val(),"Value": $('#mao').val(),"Checkboxvalue": mao2CB}, {"EstimateType": "Shop Operations","Type": "Material cutting charge","Description": "Machinery & Shop labour cost","FactorUOM": [{"Factor": "Varies Directly by Cross-Sectional Area","UOM": "$/SQ.IN"}, {"Factor": "Varies Directly On Hour","UOM": "$/HR"}, {"Factor": "Lump-Sum Rate per Piece","UOM": "$/PIECE"}],"FactorValue": $('#masc1').val(),"UOMValue":$('#masc2').val(),"Value": $('#masc').val(),"Checkboxvalue": masc1CB}, {"EstimateType": "Shop Operations","Type": "Coping Charge","Description": "Machinery & Shop labour cost","FactorUOM": [{"Factor": "Varies Directly by Cross-Sectional Area","UOM": "$/SQ.IN"}, {"Factor": "Varies Directly On Hour","UOM": "$/HR"}, {"Factor": "Lump-Sum Rate per Piece","UOM": "$/PIECE"}],"FactorValue": $('#coch1').val(),"UOMValue": $('#coch2').val(),"Value": $('#coch').val(),"Checkboxvalue": cochCB}, {"EstimateType": "Shop Operations","Type": "Layout Charge","Description": "Machinery & Shop labour cost","FactorUOM": [{"Factor": "Varies Directly On Hour","UOM": "$/HR"}, {"Factor": "Lump-Sum Rate per Piece","UOM": "$/PIECE"}],"FactorValue":$("#lac1").val(),"UOMValue":$("#lac2").val(),"Value": $("#lactxt").val(),"Checkboxvalue": lac1CB}, {"EstimateType": "Shop Operations","Type": "Punching/Drilling","Description": "Machinery & Shop labour cost","FactorUOM": [{"Factor": "Varies Directly by Cross-Sectional Area","UOM": "$/SQ.IN"}, {"Factor": "Varies Directly On Hour","UOM": "$/HR"}, {"Factor": "Lump-Sum Rate per Piece","UOM": "$/PIECE"}],"FactorValue": $('#pud1').val(),"UOMValue": $('#pud2').val(),"Value":$('#pud').val(),"Checkboxvalue": pud1CB}, {"EstimateType": "Shop Operations","Type": "Bevel Preparation","Description": "Machinery & Shop labour cost","FactorUOM": [{"Factor": "Varies Directly On Linear Length","UOM": "$/IN"}, {"Factor": "Varies Directly by Cross-Sectional Area","UOM": "$/SQ.IN"}, {"Factor": "Lump-Sum Rate per Piece","UOM": "$/PIECE"}],"FactorValue": $('#bp1').val(),"UOMValue": $('#bp2').val(),"Value": $('#bp').val(),"Checkboxvalue": bpCB}, {"EstimateType": "Shop Operations","Type": "Fit Up","Description": "Fit Up","FactorUOM": [{"Factor": "Lump-Sum Rate per Piece","UOM": "$/ASSY"}],"FactorValue":$('#fit1').val(),"UOMValue": $('#fit2').val(),"Value": $('#fit').val(),"Checkboxvalue":fit1CB}, {"EstimateType": estimateBased,"Type": "Welding","Description": "Machinery & Shop labour cost","FactorUOM": [{"Factor": "Varies Directly On Hour","UOM": "$/HR"}],"FactorValue": $('#ms1').val(),"UOMValue": $('#ms2').val(),"Value":$('#ms').val(),"Checkboxvalue":msCB}, {"EstimateType": estimateBased,"Type": "Welding","Description": "Machinery & Field labour cost","FactorUOM": [{"Factor": "Varies Directly On Hour","UOM": "$/HR"}],"FactorValue": $('#mf1').val(),"UOMValue": $('#mf2').val(),"Value": $('#mf').val(),"Checkboxvalue": mfCB}, {"EstimateType": estimateBased,"Type": "Bolting","Description": "Shop labour cost","FactorUOM": [{"Factor": "Varies Directly On No. of Bolts","UOM": "$/BOLT"}],"FactorValue": $('#ml1').val(),"UOMValue": $('#ml2').val(),"Value": $('#mlN').val(),"Checkboxvalue": ml1CB}, {"EstimateType":estimateBased,"Type": "Bolting","Description": "Field labour cost","FactorUOM": [{"Factor": "Varies Directly On No. of Bolts","UOM": "$/BOLT"}],"FactorValue": $('#fl1').val(),"UOMValue": $('#fl2').val(),"Value": $('#fl').val(),"Checkboxvalue": f1CB}, {"EstimateType": estimateBased,"Type": "Finish","Description": "Surface Preparation","FactorUOM": [{"Factor": "Varies Directly On Surface Area","UOM": "$/SQ.FT"}, {"Factor": "Varies Directly On Weight","UOM": "$/TON"}, {"Factor": "Lump-Sum Weight per Piece","UOM": "$/ASSY"}],"FactorValue":$("#surp1").val(),"UOMValue": $("#surp2").val(),"Value": $("#surp").val(),"Checkboxvalue": surp1CB}, {"EstimateType": estimateBased,"Type": "Finish","Description": "Primer","FactorUOM": [{"Factor": "Varies Directly On Surface Area","UOM": "$/SQ.FT"}, {"Factor": "Varies Directly On Weight","UOM": "$/TON"}, {"Factor": "Lump-Sum Weight per Piece","UOM": "$/ASSY"}],"FactorValue": $('#Primer1').val(),"UOMValue": $('#Primer2').val(),"Value": $('#Primer').val(),"Checkboxvalue": PrimerCB}, {"EstimateType": estimateBased,"Type": "Finish","Description": "Paint","FactorUOM": [{"Factor": "Varies Directly On Surface Area","UOM": "$/SQ.FT"}, {"Factor": "Varies Directly On Weight","UOM": "$/TON"}, {"Factor": "Lump-Sum Weight per Piece","UOM": "$/ASSY"}],"FactorValue": $('#Paint1').val(),"UOMValue":$('#Paint2').val(),"Value":$('#Paint').val(),"Checkboxvalue": Paint1CB}, {"EstimateType": estimateBased,"Type": "Finish","Description": "Galvanization (Sub-Contract)","FactorUOM": [{"Factor": "Lump-Sum Weight per Piece","UOM": "$/ASSY"}, {"Factor": "Varies Directly On Surface Area","UOM": "$/SQ.FT"}, {"Factor": "Varies Directly On Weight","UOM": "$/TON"}],"FactorValue": $('#Gal1').val(),"UOMValue": $('#Gal2').val(),"Value": $('#Gal').val(),"Checkboxvalue": Gal1CB}, {"EstimateType": estimateBased,"Type": "Finish","Description": "Fire-proofing(Machine)","FactorUOM": [{"Factor": "Varies Directly On Surface Area","UOM": "$/SQ.FT"}, {"Factor": "Varies Directly On Weight","UOM": "$/TON"}, {"Factor": "Lump-Sum Weight per Piece","UOM": "$/ASSY"}],"FactorValue": $('#Fire1').val(),"UOMValue": $('#Fire2').val(),"Value": $('#Fire').val(),"Checkboxvalue": Fire1CB}, {"EstimateType":estimateBased,"Type": "Finish","Description": "Aess(Shop Labour)","FactorUOM": [{"Factor": "Lump-Sum Weight per Piece","UOM": "$/ASSY"}, {"Factor": "Varies Directly On Surface Area","UOM": "$/SQ.FT"}, {"Factor": "Varies Directly On Weight","UOM": "$/TON"}],"FactorValue": $('#AESS2').val(),"UOMValue": $('#AESS1').val(),"Value": $('#AESS').val(),"Checkboxvalue":AESS1CB}, {"EstimateType": estimateBased,"Type": "Finish","Description": "Field touch-up(Field Labour)","FactorUOM": [{"Factor": "Varies Directly On Surface Area","UOM": "$/SQ.FT"}, {"Factor": "Varies Directly On Weight","UOM": "$/TON"}, {"Factor": "Lump-Sum Weight per Piece","UOM": "$/ASSY"}],"FactorValue":$('#Field1').val(),"UOMValue": $('#Field2').val(),"Value": $('#Field').val(),"Checkboxvalue": Field2CB}, {"EstimateType": estimateBased,"Type": "Inspection","Description": "Inspector (Shop) cost","FactorUOM": [{"Factor": "Varies Directly On Hour","UOM": "$/HR"}],"FactorValue": $('#ins1').val(),"UOMValue": $('#ins2').val(),"Value": $('#ins').val(),"Checkboxvalue": ins2CB}, {"EstimateType": estimateBased,"Type": "Loading","Description": "Shop labour cost","FactorUOM": [{"Factor": "Varies Directly On Weight","UOM": "$/HR"}],"FactorValue":$('#lod1').val(),"UOMValue": $('#lod2').val(),"Value": $('#lod').val(),"Checkboxvalue": lod1CB}, {"EstimateType": estimateBased,"Type": "Miscellaneous labour charge","Description": "Miscellaneous labour charge","FactorUOM": [{"Factor": "Lump-Sum Rate per Piece","UOM": "$/ASSY"}],"FactorValue": $('#mlc1').val(),"UOMValue": $('#mlc2').val(),"Value": $('#mlc').val(),"Checkboxvalue":mlc2CB},{"ConnectionTypeCB": contype,"ShopOperationsCB": shoptype}]};

	$.ajax({
		type : 'POST',
		url: "/bimspring/saveCostCode",
		dataType : 'JSON',
		data : {costcodejson:JSON.stringify(costcodejson)},
		success : function(data, success) {  


		},error: function(error){
			if(error.status == 401){
				window.location.href = 'logout';
			}
		}
	}); 


});


function getnextseltxtval(selectid){

	var id = selectid.id.replace('1', '');
	if($('#'+selectid.id).val()=="Varies Directly On Weight"){
		$('#'+id+'2').val('$/TON')
	}

	else if($('#'+selectid.id).val()=="Varies Directly On Length"){
		$('#'+id+'2').val('$/FT')
	}
	else if($('#'+selectid.id).val()=="Lump-Sum Rate per Piece"){
		$('#'+id+'2').val('$/PIECE')
	}
	else if($('#'+selectid.id).val()=="Varies Directly On Surface Area"){
		$('#'+id+'2').val("$/SQ.FT")
	}
	else if($('#'+selectid.id).val()=="Lump-Sum Weight per Piece" ){
		$('#'+id+'2').val("$/ASSY")
	}
	else if($('#'+selectid.id).val()=="Varies Directly by Cross-Sectional Area" ){
		$('#'+id+'2').val("$/SQ.IN")
	}
	else if($('#'+selectid.id).val()=="Varies Directly On Hour"){
		$('#'+id+'2').val("$/HR")
	}
	else if($('#'+selectid.id).val()=="Varies Directly On Linear Length"){
		$('#'+id+'2').val("$/IN")
	}	                        

}


function changeoptionvalues(selectid){
	var id = selectid.id.replace('2', '');
	if($('#'+selectid.id).val()=="Varies Directly On Weight"){
		$('#'+id+'1').val('$/TON')
	}
	else if($('#'+selectid.id).val()=="Varies Directly On Surface Area"){
		$('#'+id+'1').val("$/SQ.FT")
	}
	else if($('#'+selectid.id).val()=="Lump-Sum Weight per Piece" ){
		$('#'+id+'1').val("$/ASSY");
	}
}


function changeoptionvaluesForunit(selectid){
	var id = selectid.id.replace('1', '');
	if($('#'+selectid.id).val()=='$/TON'){
		$('#'+id+'2').val("Varies Directly On Weight")
	}
	else if($('#'+selectid.id).val()=="$/SQ.FT"){
		$('#'+id+'2').val("Varies Directly On Surface Area")
	}
	else if($('#'+selectid.id).val()=="$/ASSY"){
		$('#'+id+'2').val("Lump-Sum Weight per Piece");
	}
} 
function changeoptionvalues2(){


	if($('#ddlMachinery1').val()=="Varies Directly On Weight"){
		$('#mao2').val('$/TON')
	}
	else if($('#ddlMachinery1').val()=="Varies Directly On Hour"){
		$('#mao2').val("$/HR")
	}
	else if($('#ddlMachinery1').val()=="Lump-Sum Rate per Piece"){
		$('#mao2').val('$/PIECE')
	}
}


function changeoptionvalues2forunit(){


	if($('#mao2').val()=='$/TON'){
		$('#ddlMachinery1').val("Varies Directly On Weight")
	}
	else if($('#mao2').val()=="$/HR"){
		$('#ddlMachinery1').val("Varies Directly On Hour")
	}
	else if($('#mao2').val()=='$/PIECE'){
		$('#ddlMachinery1').val("Lump-Sum Rate per Piece")
	}
}


$("#pudCB").change(function() {


	if($("#pudCB").is(':checked')){
		$("#pud1,#pud2,#pud3,#pud,#pud4").removeAttr("disabled");

	} else {
		$("#pud1,#pud2,#pud3,#pud,#pud4").attr("disabled", true);

	} 
});


$("#pud1").change(function() {

	if($("#pud1").val()=="Varies Directly On Hour"){
		$('#pud2,#pud3').val("$/HR")
	}
	else if($("#pud1").val()=="Varies Directly by Cross-Sectional Area"){
		$('#pud2,#pud3').val("$/SQ.IN")
	}
	else if($("#pud1").val()=="Lump-Sum Rate per Piece"){
		$('#pud2,#pud3').val('$/PIECE')
	}	 
});

$("#pud2").change(function() {

	if($("#pud2").val()=="$/HR"){
		$('#pud1').val("Varies Directly On Hour")
		$('#pud3').val("$/HR")
	}
	else if($("#pud2").val()=="$/SQ.IN"){
		$('#pud1').val("Varies Directly by Cross-Sectional Area")
		$('#pud3').val("$/SQ.IN")
	}
	else if($("#pud2").val()=='$/PIECE'){
		$('#pud1').val("Lump-Sum Rate per Piece")
		$('#pud3').val('$/PIECE')
	}	 
});


$("#pud3").change(function() {			
	if($("#pud3").val()=="$/HR"){
		$('#pud1').val("Varies Directly On Hour")
		$('#pud2').val("$/HR")
	}
	else if($("#pud3").val()=="$/SQ.IN"){
		$('#pud1').val("Varies Directly by Cross-Sectional Area")
		$('#pud2').val("$/SQ.IN")
	}
	else if($("#pud3").val()=='$/PIECE'){
		$('#pud1').val("Lump-Sum Rate per Piece")
		$('#pud2').val('$/PIECE')
	}	 
});




$("#pud").keyup(function(){
	$("#pud4").val( $("#pud").val());
});







