/**
 * 
 */
 $.each(wsDropDown.Fraction, function(index,data) {   
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#pbtosfr');
				});
	  
	  $('#pbtosfr').val("0");
	  
$.each(wsDropDown.Inch, function(index,data) {   
			
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#pbtosin');
			});
	 $('#pbtosin').val("0");