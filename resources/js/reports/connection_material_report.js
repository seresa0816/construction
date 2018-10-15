 
var tble = "";

$(document).ready(function(){	
	
	tble =$('#tbleconnmaterialDetailreport').DataTable({	 	       		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 	
		
});


function bindMemberDetails(MemberType)
     {
    	     	 
    	 $.ajax({	   	 	
			 	type: "GET",
		   	   	url: "/bimspring/getConnectionMaterialDetails",
		   	    data : {
		   	    	membertype : MemberType			 	
			 	 },	
		   	   	async: false,
		   	 	success: function(data){
		   	 		
		   	 	var dataObj = jQuery.parseJSON(data); 	 		
		   	 		   	 		
		   	 	var RowNo = 0;
		   	    tble.clear();
	 			 
		  		 $.each(dataObj, function(i, field)				  
		  		 {
		  			RowNo = RowNo + 1;
		  		    var datarow = '<tr class="clickable-row">'+	 					
					 				'<td class="text-center">'+ MemberType +'</td>'+	
					 				'<td class="text-center">' + field.Profile + '</td>' +	
					 				'<td class="text-center">' + field.Grade + '</td>' +	
					 				'<td class="text-center">' + field.Quantity + '</td>' +	
					 				'<td class="text-center">' + convMMtoFt(field.LengthMM) + '</td>' +	
					 				'<td class="text-center">' + field.Weight + '</td>' +					 				
					 				'<td class="text-center">' + field.Hole_Size + '</td>' +
					 				'<td class="text-center">' + field.No_Of_Hole + '</td>' +
					 				'<td class="text-center">' + field.Weld_Type + '</td>' +
					 				'<td class="text-center">' + field.Weld_Size + '</td>' +
					 				'<td class="text-center">' + field.Shop_Field + '</td>' +
					 				'<td class="text-center">' + convMMtoFt(field.Weld_Length_mm) + '</td>' +
				 				'</tr>';
		  			 
		  			 tble.row.add($(datarow)).draw(false);
		  			 
				  	});
		   	 	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
		   	 		
		 });
		
		$('#divConnectionDetail').show();
    	 
     }
 
function convMMtoFt(valueMM){
	
	if(valueMM!=''){
	
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
	else
		return "";
}