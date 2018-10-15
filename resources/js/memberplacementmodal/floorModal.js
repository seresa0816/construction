$.each(wsDropDown.Fraction, function(index,data) {   
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#distanceFromElev_fr');
				});
	  
	  $('#distanceFromElev_fr').val("0");
	  
$.each(wsDropDown.Inch, function(index,data) {   
			
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#distanceFromElev_in');
			});
	 $('#distanceFromElev_in').val("0");