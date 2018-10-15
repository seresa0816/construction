var tblestructuralcolumn = "";
var tblestructuralcolumdetail = "";
var tblestructuralcolumsubdetail = "";

var tblestructuralbeam = "";
var tblestructuralbeamdetail = "";
var tblestructuralbeamsubdetail ="";

var tblestructuralhb = "";
var tblestructuralvb = "";
var tblestructuralpuor = "";

var tbleVBProfileDetails = "";
var tbleHBProfileDetails = "";


$(document).ready(function(){	
	
	//Column 2
	tblestructuralcolumn = $('#tblestructuralcolumn').DataTable({	 	       		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 
	
	//Column 3
	tblestructuralcolumdetail = $('#tblestructuralcolumdetail').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    }); 
	
	//Column 4
	tblestructuralcolumsubdetail = $('#tblestructuralcolumsubdetail').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    }); 
	
	
	//Beam 2
	tblestructuralbeam = $('#tblestructuralbeam').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    }); 
	
	// Beam 3
	tblestructuralbeamdetail = $('#tblestructuralbeamdetail').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    }); 
	
	// Beam 4
	tblestructuralbeamsubdetail = $('#tblestructuralbeamsubdetail').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    }); 
	
	// HB
	tblestructuralhb = $('#tblestructuralhb').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    }); 
	
	// VB
	tblestructuralvb = $('#tblestructuralvb').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    });
	
	// VB Profile Details
	tbleVBProfileDetails = $('#tbleVBProfileDetails').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    });
	
	// HB Profile Details
	tbleHBProfileDetails = $('#tbleHBProfileDetails').DataTable({	 	       		
		"dom": 'ftipr',
	    "bInfo": false,
	     searching: false,
	     paging: true,
	     "pagingType": "full",
	     "showNEntries" : true,
	     "lengthMenu": [[10], [10]],		     
	     "ordering": false
    });
	
	// POUr Stop
	tblestructuralpuor = $('#tbleStructuralPuorStop').DataTable({	 	       		
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


// Member Details
function bindMemberDetails(membertype)
{
	$(".box").hide();
	$(".hideAll").hide(); 
	//$("#tblestructuralcolumn tbody tr").remove();
	tblestructuralcolumn.clear();
	
	if(membertype.toUpperCase() == "COLUMN")
	{			 
		 $.ajax({	   	 	
			 	type: "GET",
		   	   	url: "/bimspring/getMemberDetails",
		   	    data : {
		   	    	memberType : membertype			 	
			 	 },	
		   	   	async: false,
		   	 	success: function(data){
		   	 	 var dataObj = jQuery.parseJSON(data); 	 		
		   	 	 var RowNo = 0;
		   	 	 
		  		 $.each(dataObj, function(i, field)				  
		  		 {
		  			RowNo = RowNo + 1;
		  			 var datarow = '<tr class="clickable-row">'+	 					
					 				'<td class="text-center"> <a href="javascript:bindMemberSubDetails(\''+ field.MemberType +'\',\''+ field.MembertypeSub + '\');">' + field.MembertypeSub + '</a></td>'+	
					 				'<td class="text-center">' + field.PieceCount + '</td>' +	
					 				'<td class="text-center">' + convMMtoFt(field.Length) + '</td>' +	
					 				'<td class="text-center">' + field.Weight + '</td>' +
				 				'</tr>';		  			 
		  				tblestructuralcolumn.row.add($(datarow)).draw(false);
		  			//$('#tblestructuralcolumn').append(datarow);
		  			 
				  	});
		   	 	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	 
		   	 		
		 });
		
		$('#divstructuralcolumn').show();
	}
	
	//BEAM
	else if(membertype.toUpperCase() == "BEAM")
	{
		//$("#tblestructuralbeam tbody tr").remove();
		tblestructuralbeam.clear();
		 $.ajax({	   	 	
			 	type: "GET",
		   	   	url: "/bimspring/getMemberDetails",
		   	    data : {
		   	    	memberType : membertype			 	
			 	 },	
		   	   	async: false,
		   	 	success: function(data){
		   	 	var dataObj = jQuery.parseJSON(data); 	 		
		   	 	var RowNo = 0;
		  		 $.each(dataObj, function(i, field)				  
		  		 {
		  			RowNo = RowNo + 1;
		  		    var datarow = '<tr class="clickable-row">'+	 					
					 				'<td class="text-center"> <a href="javascript:bindBeamMemberSubDetails(\''+ field.MemberType +'\',\''+ field.MembertypeSub + '\');">' + field.MembertypeSub + '</a></td>'+	
					 				'<td class="text-center">' + field.PieceCount + '</td>' +	
					 				'<td class="text-center">' + convMMtoFt(field.Length) + '</td>' +	
					 				'<td class="text-center">' + field.Weight + '</td>' +
				 				'</tr>';
		  			 
		  			tblestructuralbeam.row.add($(datarow)).draw(false);
		  		  //$('#tblestructuralbeam').append(datarow);
		  			 
			  	});
		   	 },
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	 
		   	 		
		 });
		
		$('#divstructuralbeam').show();
	}
	
	else if(membertype.toUpperCase() == "HORIZONTAL BRACE")
	   {
		   
		tblestructuralhb.clear();
		
		//$("#tblestructuralhb tbody tr").remove();
		
		$.ajax({	   	 	
		 	type: "GET",
	   	   	url: "/bimspring/getMemberSubDetails",
	   	    data : {
	   	    	memberType : membertype,	
	   	    	memberSubType : ''	
		 	 },	
	   	   	async: false,
	   	 	success: function(data){
	   	 		
	   	 	var dataObj = jQuery.parseJSON(data); 	
	   	 	var RowNo = 0;
	  		 $.each(dataObj, function(i, field)				  
	  		 {
	  			var Profile = field.Profile.replace('"','*');
		   	    Profile = Profile.replace('"','*');
		   	    
	  			RowNo = RowNo + 1;
	  			 var datarow = '<tr class="clickable-row">'+	 					
				 				'<td class="text-center">'  + 'HORIZONTAL BRACE' + '</td>'+
				 				'<td class="text-center"><a href="javascript:bindMemberHBProfileDetails(\''+ Profile + '\');">' + field.Profile + '</a></td>' +
				 				'<td class="text-center">' + field.Quantiy + '</td>' +	
				 				'<td class="text-center">' + convMMtoFt(field.Length) + '</td>' +	
				 				'<td class="text-center">' + field.Weight + '</td>' +	
			 				'</tr>';
	  			 
	  			tblestructuralhb.row.add($(datarow)).draw(false);
	  			//$('#tblestructuralhb').append(datarow);
	  			 
			  	});
	   	 	},
			error: function (error) {
	        	  if(error.status == 401){
	        		  window.location.href = 'logout';
	        	  }
	          }   		    	 
	   	 		
		});
		
		$('#divstructuralhb').show();
		
	   }
	   else if(membertype.toUpperCase() == "VERTICAL BRACE")
	   {
		   tblestructuralvb.clear();
		   
		   //$("#tblestructuralvb tbody tr").remove();
		   
		   	$("#divstructuralvb").show();
		   	
		   	$.ajax({	   	 	
			 	type: "GET",
		   	   	url: "/bimspring/getMemberSubDetails",
		   	    data : {
		   	    	memberType : membertype,	
		   	    	memberSubType : ''	
			 	 },	
		   	   	async: false,
		   	 	success: function(data){
		   	 	
		   	 	var dataObj = jQuery.parseJSON(data); 	 		
		   	 		   	 		
		   	 	var RowNo = 0;
		  		 $.each(dataObj, function(i, field)				  
		  		 {
					var profile = field.Profile.replace('"','*');
			  		profile = profile.replace('"','*');
			  			
		  			RowNo = RowNo + 1;
		  			 var datarow = '<tr class="clickable-row">'+	 					
					 				'<td class="text-center">'  + 'VERTICAL BRACE' + '</td>'+
					 				'<td class="text-center"><a href="javascript:bindMemberVBProfileDetails(\''+ profile + '\');">' + field.Profile + '</a></td>' +
					 				'<td class="text-center">' + field.Quantiy + '</td>' +	
					 				'<td class="text-center">' + convMMtoFt(field.Length) + '</td>' +	
					 				'<td class="text-center">' + field.Weight + '</td>' +	
				 				'</tr>';
		  			 
		  			tblestructuralvb.row.add($(datarow)).draw(false);
		  			//$('#tblestructuralvb').append(datarow);
		  			 
				  	});
			  	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	 
		   	 		
		 });
	   }
	   else if(membertype.toUpperCase() == "POUR STOP")
	   {		   
		   	$("#divstructuralpuor").show();		   
		    bindPuorStooperData();
	    }
	
	   else if(membertype == "TRUSS")
	   {
		   $("#divstrusses").show();
	   }
}

// Member Sub Details
function bindMemberSubDetails(membertype, membersubtype)
{
	tblestructuralcolumdetail.clear();
	
	//$("#tblestructuralcolumdetail tbody tr").remove();
	
	if(membertype.toUpperCase() == "COLUMN")
	{
	
		$.ajax({	   	 	
		 	type: "GET",
	   	   	url: "/bimspring/getMemberSubDetails",
	   	    data : {
	   	    	memberType : membertype,	
	   	    	memberSubType : membersubtype	
		 	 },	
	   	   	async: false,
	   	 	success: function(data){	   	 		
	   	 	var dataObj = jQuery.parseJSON(data); 			
	   	 		   	 		
	   	 	var RowNo = 0;	   	 	
	   	 	
			 var MemberType = 'COLUMN';
			 $("label[for = columnSubDetail1]").text(MemberType + " - " + membersubtype);
	  		 $.each(dataObj, function(i, field)				  
	  		 {	  			
	  			var profile = field.Profile.replace('"','*');
	  			profile = profile.replace('"','*');
	  			
	  			 RowNo = RowNo + 1;
	  			 var datarow = '<tr class="clickable-row">'+	 					
				 				'<td class="text-center">'  + field.Description + '</td>'+
				 				'<td class="text-center"><a href="javascript:bindMemberColumnProfileDetails(\''+ MemberType +'\',\''+ field.Description + '\',\''+ profile + '\');">' + field.Profile + '</a></td>' +
				 				'<td class="text-center">' + field.Quantiy + '</td>' +	
				 				'<td class="text-center">' + convMMtoFt(field.Length) + '</td>' +	
				 				'<td class="text-center">' + field.Weight + '</td>' +	
			 				'</tr>';
	  			 
	  			tblestructuralcolumdetail.row.add($(datarow)).draw(false);
	  			//$('#tblestructuralcolumdetail').append(datarow);
	  			 
			  	});
	   	 	},
			error: function (error) {
	        	  if(error.status == 401){
	        		  window.location.href = 'logout';
	        	  }
	          }   		    	 
	   	 		
	 });
	
	 	$('#divstructuralcolumdetail').show();	 	
	 	$('#divstructuralcolumsubdetail').hide();
	 	$(".hideAll").hide(); 
	}
}

// bind column profile
function bindMemberColumnProfileDetails(membertype, membersubtype,profile)
{
	profile = profile.replace('*','\"');
	profile = profile.replace('*','\"');
	
	$('#divstructuralcolumsubdetail').show();
	$(".hideAll").hide(); 
		
	//$("#tblestructuralcolumsubdetail tbody tr").remove();
	tblestructuralcolumsubdetail.clear();
	
	 $.ajax({	   	 	
		 	type: "GET",
	   	   	url: "/bimspring/getMemberProfileDetails",
	   	    data : {
	   	    	memberType : membertype,	
	   	    	memberSubType : membersubtype,
	   	    	profile :  profile
		 	 },	
	   	   	async: false,
	   	 	success: function(data){
	   	 		var dataObj = jQuery.parseJSON(data); 
	   	 		var RowNo = 0;
	   	 		
	   	 	 $("label[for = columnSubDetail2]").text(membertype + " - " + membersubtype + " - " + profile);
	   	 	 
	   	 	
			 
	  		 $.each(dataObj, function(i, field)				  
	  		 {  	  			 
	  			 	  			
	  			var MemberType = "";
   		   	 	var Profile = "";
   		   	 	var ConLength = "";
   		   	 	var Quantity= "";
   		   	 	var Weight = "";
   		   	 	
   		   	 	var HoleType = "";
   		   	 	var HoleSize ="";
   		   	 	var NumberOfHole = "";
   		   	 	
   		   	 	var Weldtype = "";
   		   	 	var WeldLenght = "";
   		   	 	var WeldSize = "";
   		   	 	var Shoplength = "";
   		   	 	var Fieldlenght = "";
   		   	 	
   		   	 	var StudDia = "";
   	  			var StudLenght = "";
   	  			var NoOfStuds = "";
   		   	 	
   	  		if(field.ConnectionDetails == 1)
	  			{	
	  				MemberType = "<div>";
	  				Profile= "<div>";
	  				ConLength= "<div>";
	  				Quantity= "<div>";
	  				Weight= "<div>"
	  				
	  				var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";	  				
	  				
	  			   var connectionLength = field.connectiondetails.length-1;
	  					
	  				$.each(field.connectiondetails, function(i, field2)				  
	  			  	{	  			  					
	  			  		MemberType = MemberType + field2.MemberType;	  					
	  			  		Profile = Profile + field2.Profile ;
	  			  		ConLength = ConLength + convMMtoFt(field2.LengthMM);
	  			  		Quantity = Quantity + field2.Quantity ;
	  			  		Weight = Weight + field2.Weight;
	  			  		
	  			 
	  			  		if(i != connectionLength)
	  			  		{	   	  			  		
	   	  			  		MemberType = MemberType  + HR;	  					
	   	  			  		Profile = Profile + HR;
	   	  			  		ConLength = ConLength + HR;
	   	  			  		Quantity = Quantity  + HR;
	   	  			  		Weight = Weight + HR;
	  			  		}
	  			  					
	  			  				
	  			  	});	 	  					
	  				
	  				MemberType = MemberType + "</div>";
	  				Profile= Profile + "</div>";
	  				ConLength= ConLength + "</div>";
	  				Quantity= Quantity + "</div>";
	  				Weight= Weight + "</div>"
	  			}
	  			
	  			if(field.Hole == 1)
	  			{
	  				
	  				HoleType = "<div>";
			   	 	HoleSize ="<div>";
			   	 	NumberOfHole = "<div>";
			   	 	
			   	    var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
			   	    
			   	    var Length = field.holeddetails.length-1;
			   	 	
	  				$.each(field.holeddetails, function(i, field2)				  
	  		  		{	   	  					
	  					HoleType = HoleType +  field2.HoleType;
	  					HoleSize = HoleSize +  field2.HoleSize;				 					
	  					NumberOfHole = NumberOfHole + field2.NumberOfHole;
	  					
	  		  		});	
	  				
	  			   if(i != Length)
			  		{	   	  			  		
	  				  	HoleType = HoleType  + HR;	  					
	  					HoleSize = HoleSize + HR;
	  					NumberOfHole = NumberOfHole + HR;
			  		}
	  				
	  				HoleType = HoleType + "</div>";
			   	 	HoleSize = HoleSize + "</div>";
			   	 	NumberOfHole = NumberOfHole + "</div>";
	  			}
	  			
	  			if(field.Weld == 1)
	  			{
	  				
	  				Weldtype = "<div>";
	  				WeldSize = "<div>";			   	 	
			   	 	Shoplength = "<div>";
			   	 	Fieldlenght = "<div>";
			   	 	
			   	 	var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
			   	    
			   	    var Length = field.welddetails.length-1;
			   	 	
	  				$.each(field.welddetails, function(i, field2)				  
	  		  		{
	  					
	  					var shoplength = "-";
          	 			var fieldlength = "-";
          	 			
          	 			if(field2.Shop !="")
          	 				shoplength = convMMtoFt(field2.WeldLengthMM);
          	 			
          	 			
          	 			if(field2.Field !="")
          	 				fieldlength = convMMtoFt(field2.WeldLengthMM);
          	 			
          	 			
	           	 		Weldtype = Weldtype +  field2.WeldType ;
		           	 	WeldSize = WeldSize +  field2.WeldSize ;							 					
		           	 	Shoplength= Shoplength + shoplength;
		           	 	Fieldlenght = Fieldlenght + fieldlength;
		           	 	
		           	    if(i != Length)
	  			  		{	   	  			  		
	   		           	    Weldtype = Weldtype +  HR ;
	   		           	 	WeldSize = WeldSize +  HR ;							 					
	   		           	 	Shoplength= Shoplength + HR;
	   		           	 	Fieldlenght = Fieldlenght + HR;
	  			  		}
   	  				
	  					
	  		  		});	
	  				
	  				Weldtype = Weldtype + "</div>";
	  				WeldSize = WeldSize + "</div>";			   	 	
			   	 	Shoplength = Shoplength + "</div>";
			   	 	Fieldlenght = Fieldlenght + "</div>";
	  			}
	  				  			
	  			 var datarow = '<tr class="clickable-row">'+	 		
				 				'<td class="text-center v-m-mid">' + field.MemberTypeSub + '</td>' +
				 				'<td class="text-center v-m-mid">' + field.Profile + '</td>' +
				 				'<td class="text-center v-m-mid"">' + field.Grade + '</td>' +
				 				'<td class="text-center v-m-mid"">' + field.Piece_Count_Nos + '</td>' +				 				
				 				'<td class="text-center v-m-mid"">' + convMMtoFt(field.Length_ft_in)+ '</td>' +				 				
				 				'<td class="text-center v-m-mid"">' + field.Weight + '</td>'+
				 				
				 				'<td class="text-center v-m-mid">' + MemberType + '</td>'+
   				 				'<td class="text-center v-m-mid">' + Profile + '</td>'+
   				 				'<td class="text-center v-m-mid">' + ConLength  + '</td>'+
   				 				'<td class="text-center v-m-mid">' + Quantity + '</td>'+
   				 				'<td class="text-center v-m-mid">' + Weight + '</td>'+
   				 				
   				 				'<td class="text-center v-m-mid">' + HoleType + '</td>'+
				 				'<td class="text-center v-m-mid">' + HoleSize + '</td>'+
				 				'<td class="text-center v-m-mid">' + NumberOfHole + '</td>'+
				 				'<td class="text-center v-m-mid">' + Weldtype + '</td>'+
   				 				'<td class="text-center v-m-mid">' + WeldSize + '</td>'+
   				 				'<td class="text-center v-m-mid">' + Shoplength + '</td>'+
   				 				'<td class="text-center v-m-mid">' + Fieldlenght + '</td>'+
   				 				
   				 				'<td class="text-center v-m-mid">' + field.Finish + '</td>' +
				 				'<td class="text-center v-m-mid">' + field.End_Preparation + '</td>' +
				 				'<td class="text-center v-m-mid">' + field.Ref_Drawing_No + '</td>' +
			 				'</tr>';
	  			 //$('#tblestructuralcolumsubdetail').append(datarow);
	  			 
	  			tblestructuralcolumsubdetail.row.add($(datarow)).draw(false);
	  		});
	   	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }   		    	 	   	 		
	 });
	
	
}

// bind beam detail
function bindBeamMemberSubDetails(membertype, membersubtype)
{
	tblestructuralbeamdetail.clear();
	
	//$("#tblestructuralbeamdetail tbody tr").remove();
	
	 $.ajax({	   	 	
		 	type: "GET",
	   	   	url: "/bimspring/getMemberSubDetails",
	   	    data : {
	   	    	memberType : membertype,	
	   	    	memberSubType : membersubtype	
		 	 },	
	   	   	async: false,
	   	 	success: function(data){
	   	 		
	   	 		var dataObj = jQuery.parseJSON(data); 	
	   	 		var RowNo = 0;	   	 	
		   	 	 
				 var MemberTypa = 'BEAM';			 
				 $("label[for = beamSubDetail1]").text(membertype + " - " + membersubtype);
			   	    
		  		 $.each(dataObj, function(i, field)				  
		  		 {	
		  			 
		  			var Profile = field.Profile.replace('"','*');
				   	 Profile = Profile.replace('"','*');
				   	 
		  			RowNo = RowNo + 1;
		  		    var datarow = '<tr class="clickable-row">'+	 					
					 				'<td class="text-center">'  + field.Description + '</td>'+	
					 				'<td class="text-center"><a href="javascript:bindMemberBeamProfileDetails(\''+ MemberTypa +'\',\''+ field.Description + '\',\''+ Profile + '\');">' + field.Profile + '</a></td>' +
					 				'<td class="text-center">' + field.Quantiy + '</td>' +	
					 				'<td class="text-center">' + convMMtoFt(field.Length) + '</td>' +	
					 				'<td class="text-center">' + field.Weight + '</td>' +	
				 				'</tr>';
		  			 
		  			tblestructuralbeamdetail.row.add($(datarow)).draw(false);
		  		  //$('#tblestructuralbeamdetail').append(datarow);
		  			 
				  	});
	   	 	},
			error: function (error) {
	        	  if(error.status == 401){
	        		  window.location.href = 'logout';
	        	  }
	          }   		    	 
	   	 		
	 });
	
	$('#divstructuralbeamdetail').show();
	$('.profile').hide();
	$(".hideAll").hide(); 
}

//bind beam profile
function bindMemberBeamProfileDetails(membertype, membersubtype,profile)
{
	
	$(".hideAll").hide(); 
	$('#divstructuralbeamsubdetail').show();
	
	profile = profile.replace('*','\"');
	profile = profile.replace('*','\"');
		
	//$("#tblestructuralbeamsubdetail tbody tr").remove();
	tblestructuralbeamsubdetail.clear();
	
	 $.ajax({	   	 	
		 	type: "GET",
	   	   	url: "/bimspring/getMemberBeamProfileDetails",
	   	    data : {
	   	    	memberType : membertype,	
	   	    	memberSubType : membersubtype,
	   	    	profile : profile
		 	 },	
	   	   	async: false,
	   	 	success: function(data){
	   	 		var dataObj = jQuery.parseJSON(data); 
	   	 		var RowNo = 0;
	   	 		
	   	 	 $("label[for = beamSubDetail2]").text(membertype + " - " + membersubtype + " - " + profile);
			 
	   	 	$.each(dataObj, function(i, field)				  
	   	  		 {
	   	  			 
	   	  			var MemberType = "";
	   		   	 	var Profile = "";
	   		   	 	var ConLength = "";
	   		   	 	var Quantity= "";
	   		   	 	var Weight = "";
	   		   	 	
	   		   	 	var HoleType = "";
	   		   	 	var HoleSize ="";
	   		   	 	var NumberOfHole = "";
	   		   	 	
	   		   	 	var Weldtype = "";
	   		   	 	var WeldLenght = "";
	   		   	 	var WeldSize = "";
	   		   	 	var Shoplength = "";
	   		   	 	var Fieldlenght = "";
	   		   	 	
	   		   	 	var StudDia = "";
	   	  			var StudLenght = "";
	   	  			var NoOfStuds = "";
	   		   	 	
	   	  			if(field.ConnectionMaterial == 1)
	   	  			{	
	   	  				MemberType = "<div>";
	   	  				Profile= "<div>";
	   	  				ConLength= "<div>";
	   	  				Quantity= "<div>";
	   	  				Weight= "<div>"
	   	  				
	   	  				var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
	   	  				
	   	  			   var connectionLength = field.connectiondetails.length-1;
	   	  					
	   	  				$.each(field.connectiondetails, function(i, field2)				  
	   	  			  	{	  			  					
	   	  			  		MemberType = MemberType + field2.MemberType;	  					
	   	  			  		Profile = Profile + field2.Profile ;
	   	  			  		ConLength = ConLength + convMMtoFt(field2.LengthMM);
	   	  			  		Quantity = Quantity + field2.Quantity ;
	   	  			  		Weight = Weight + field2.Weight;
	   	  			  		
	   	  			
	   	  			  		
	   	  			  		if(i != connectionLength)
	   	  			  		{	   	  			  		
		   	  			  		MemberType = MemberType  + HR;	  					
		   	  			  		Profile = Profile + HR;
		   	  			  		ConLength = ConLength + HR;
		   	  			  		Quantity = Quantity  + HR;
		   	  			  		Weight = Weight + HR;
	   	  			  		}
	   	  			  					
	   	  			  				
	   	  			  	});	 	  					
	   	  				
	   	  				MemberType = MemberType + "</div>";
	   	  				Profile= Profile + "</div>";
	   	  				ConLength= ConLength + "</div>";
	   	  				Quantity= Quantity + "</div>";
	   	  				Weight= Weight + "</div>"
	   	  			}
	   	  			
	   	  			if(field.Hole == 1)
	   	  			{
	   	  				
	   	  				HoleType = "<div>";
	   			   	 	HoleSize ="<div>";
	   			   	 	NumberOfHole = "<div>";
	   			   	 	
	   			   	    var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
	   			   	    
	   			   	    var Length = field.holeddetails.length-1;
	   			   	 	
	   	  				$.each(field.holeddetails, function(i, field2)				  
	   	  		  		{	   	  					
	   	  					HoleType = HoleType +  field2.HoleType;
	   	  					HoleSize = HoleSize +  field2.HoleSize;				 					
	   	  					NumberOfHole = NumberOfHole + field2.NumberOfHole;
	   	  					
	   	  		  		});	
	   	  				
	   	  			   if(i != Length)
	  			  		{	   	  			  		
	   	  				  	HoleType = HoleType  + HR;	  					
	   	  					HoleSize = HoleSize + HR;
	   	  					NumberOfHole = NumberOfHole + HR;
	  			  		}
	   	  				
	   	  				HoleType = HoleType + "</div>";
	   			   	 	HoleSize = HoleSize + "</div>";
	   			   	 	NumberOfHole = NumberOfHole + "</div>";
	   	  			}
	   	  			
	   	  			if(field.Weld == 1)
	   	  			{
	   	  				
	   	  				Weldtype = "<div>";
	   	  				WeldSize = "<div>";			   	 	
	   			   	 	Shoplength = "<div>";
	   			   	 	Fieldlenght = "<div>";
	   			   	 	
	   			   	 	var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
	   			   	    
	   			   	    var Length = field.welddetails.length-1;
	   			   	 	
	   	  				$.each(field.welddetails, function(i, field2)				  
	   	  		  		{
	   	  					
		   	  				var shoplength = "-";
	          	 			var fieldlength = "-";
	          	 			
	          	 			if(field2.Shop !="")
	          	 				shoplength = convMMtoFt(field2.WeldLengthMM);
	          	 			
	          	 			if(field2.Field !="")
	          	 				fieldlength = convMMtoFt(field2.WeldLengthMM);
          	 			
	              	 			
	   	           	 		Weldtype = Weldtype +  field2.WeldType ;
	   		           	 	WeldSize = WeldSize +  field2.WeldSize ;							 					
	   		           	 	Shoplength= Shoplength + shoplength;
	   		           	 	Fieldlenght = Fieldlenght + fieldlength;
	   		           	 	
	   		           	    if(i != Length)
		  			  		{	   	  			  		
		   		           	    Weldtype = Weldtype +  HR ;
		   		           	 	WeldSize = WeldSize +  HR ;							 					
		   		           	 	Shoplength= Shoplength + HR;
		   		           	 	Fieldlenght = Fieldlenght + HR;
		  			  		}
		   	  				
	   	  					
	   	  		  		});	
	   	  				
	   	  				Weldtype = Weldtype + "</div>";
	   	  				WeldSize = WeldSize + "</div>";			   	 	
	   			   	 	Shoplength = Shoplength + "</div>";
	   			   	 	Fieldlenght = Fieldlenght + "</div>";
	   	  			}
	   	  			
	   	  			if(field.Stud == 1)
	   	  			{
	   	  				
	   	  				StudDia = "<div>";
	   		  			StudLenght = "<div>";
	   		  			NoOfStuds = "<div>";
	   		  			
		   		  		var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
	   			   	    
	   			   	    var Length = field.studdetails.length - 1;
	   			   	    	   		  			
	   	  				$.each(field.studdetails, function(i, field2)			  
	   	  		  		{	   	  					
	   	  					StudDia = StudDia + field2.StudDia ;
	   	  					StudLenght = StudLenght + field2.StudLength ;
	   	  					NoOfStuds = NoOfStuds +  field2.NumberOfStuds ;
		   	  				
			   	  			if(i != Length)
		  			  		{	   	  			  		
				   	  			StudDia = StudDia + HR ;
		   	  					StudLenght = StudLenght + HR ;
		   	  					NoOfStuds = NoOfStuds +  HR ;
		  			  		}
		   	  			
	   	  		  		});
	   	  			
	   	  				StudDia = StudDia + "</div>";
	   		  			StudLenght = StudLenght + "</div>";
	   		  			NoOfStuds = NoOfStuds + "</div>";
	   	  			}
	   	  				   	  			
	   	  			RowNo = RowNo + 1;
	   	  			var datarow = '<tr class="clickable-row">'+	 		
	   				 				'<td class="text-center v-m-mid">' + field.MemberTypeSub + '</td>' +				 				
	   				 				'<td class="text-center v-m-mid">' + field.Profile + '</td>' +
	   				 				'<td class="text-center v-m-mid">' + field.Grade + '</td>' +
	   				 				'<td class="text-center v-m-mid">' + field.Quantity + '</td>' +
	   				 				'<td class="text-center v-m-mid">' + convMMtoFt(field.Length_ft_in) + '</td>' +
	   				 				'<td class="text-center v-m-mid">' + field.Weight + '</td>'+
	   				 				
	   				 				'<td class="text-center v-m-mid">' + MemberType + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + Profile + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + ConLength  + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + Quantity + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + Weight + '</td>'+
	   				 				
	   				 				'<td class="text-center v-m-mid">' + HoleType + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + HoleSize + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + NumberOfHole + '</td>'+
	   				 				
	   				 				'<td class="text-center v-m-mid">' + Weldtype + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + WeldSize + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + Shoplength + '</td>'+
	   				 				'<td class="text-center v-m-mid">' + Fieldlenght + '</td>'+
	   				 				
	   				 				'<td class="text-center v-m-mid">' + field.CopeLength + '</td>' +
	   						  		'<td class="text-center v-m-mid">' + field.CopeDepth + '</td>' +
	   						  		
	   						  		'<td class="text-center v-m-mid">' + field.Camber + '</td>' +
	   						  		
	   						  		'<td class="text-center v-m-mid">' + StudDia + '</td>' +
	   						  		'<td class="text-center v-m-mid">' + StudLenght + '</td>' +
	   						  		'<td class="text-center v-m-mid">' + NoOfStuds + '</td>' +	
	   						  		
	   	  							'<td class="text-center v-m-mid">' + field.Finish + '</td>' +
	   						  		'<td class="text-center v-m-mid">' + field.EndPrep + '</td>' +
	   						  		'<td class="text-center v-m-mid">' + field.RefDwgNum + '</td>' +	  							
	   						  	'</tr>';
	   	  								  							
	   	  							
	   	  							
	   	  			tblestructuralbeamsubdetail.row.add($(datarow)).draw(false); 		
	   	  					//$('#tblestructuralbeamsubdetail').append(datarow);
	   	  			
	   			  	});
	   	 	},
			error: function (error) {
	        	  if(error.status == 401){
	        		  window.location.href = 'logout';
	        	  }
	          }   		    	 	   	 		
	 });
	
	
}


function bindVerticalMemberData()
{
	tblestructuralvb.clear();
	
	//$("#tblestructuralvb tbody tr").remove();
	
	 $.ajax({
	        type: "GET",
	        url: "/bimspring/getVerticalMemberDetails",       
	        async: false,
	        success: function(data)
	        {
	        	 var dataObj = jQuery.parseJSON(data); 	        	 
	        	 var RowNo = 0;
	        	 	        	 
	    		 $.each(dataObj, function(i, field)				  
		  	  	 {
	    			 
	    			 var Profile = field.Profile.replace('"','*');
		        	 Profile = Profile.replace('"','*');
		        	 
		  	  			RowNo = RowNo + 1;
		  	  			 var datarow = '<tr class="clickable-row">'+	
		  	  			 					'<td>' + RowNo + '</td>' +
		  	  				 				'<td><a href="javascript:bindMemberVBProfileDetails(\''+ Profile + '\');">' + field.Profile + '</a></td>' +
		  	  				 				'<td>' + field.Grade + '</td>' +
		  	  				 				'<td>' + field.Qty + '</td>' +
		  	  				 				'<td>' + field.Length.replace('"','').replace('"""','') + '</td>' +
		  	  				 				'<td>' + field.Weight + '</td>' +			  	  				 				
		  	  				 				'<td>' + field.Hole_Size.replace('"','').replace('"""','') + '</td>' +
		  	  				 				'<td>' + field.NoOfHole + '</td>' +
		  	  				 				'<td>' + field.Finish + '</td>' +
		  	  				 				'<td>' + field.RefDwgNum + '</td>' +
		  	  			 				'</tr>';
		  	  			 	
		  	  			tblestructuralvb.row.add($(datarow)).draw(false);
		  	  		//	$('#tblestructuralvb').append(datarow);
		  	  			 
		  		 });
		  			  	
	    	   },
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }   		    	 
	     });
	
}

function bindHorizontalData()
{
	tblestructuralhb.clear();
	
	//$("#tblestructuralhb tbody tr").remove();
	
	$.ajax({
        type: "GET",
        url: "/bimspring/getHorizontalMemberDetails",       
        async: false,
        success: function(data)
        {
        	 var dataObj = jQuery.parseJSON(data); 
        	
        	 var RowNo = 0;        	 
  	  		
    		 $.each(dataObj, function(i, field)				  
	  	  	 {
    			 
    			 var WeldType = field.Weld_Type === undefined ? "" : field.Weld_Type;
    			 var WeldSize = field.Weld_Size === undefined  ? "" : field.Weld_Size;
    			 var WeldLength = field.Weld_Length=== undefined ? "" :field.Weld_Length;
    			 
    			 var Profile = field.Profile.replace('"','*');
	        	 Profile = Profile.replace('"','*');
    			 
	        	 RowNo = RowNo + 1;
	  	  		 var datarow = '<tr class="clickable-row">'+
	  	  			 					'<td>' + RowNo + '</td>' +
	  	  				 				'<td><a href="javascript:bindMemberHBProfileDetails(\''+ Profile + '\');">' + field.Profile + '</a></td>' +
	  	  				 				'<td>' + field.Grade + '</td>' +
	  	  				 				'<td>' + field.Qty + '</td>' +	  	  				 				
	  	  				 				'<td>' + field.Length.replace('"','').replace('"""','') + '</td>' +	
	  	  				 			    '<td>' + field.Weight + '</td>' +
	  	  				 				'<td>' + field.Hole_Size.replace('"','').replace('"""','') + '"'  + '</td>' +
	  	  				 				'<td>' + field.NoOfHole + '</td>' +		  	  				 				
	  	  				 				'<td>' + WeldType + '</td>' +
	  	  				 				'<td>' + WeldSize + '</td>' +
	  	  				 				'<td>' + WeldLength + '</td>' +
	  	  				 				'<td>' + "" + '</td>' +		  	  				 				
	  	  				 				'<td>' + field.RefDwgNum + '</td>' +
	  	  			 				'</tr>';
	  	  			 	
	  	  			tblestructuralhb.row.add($(datarow)).draw(false);
	  	  		//$('#tblestructuralhb').append(datarow);
	  	  			 
	  		 });
	  			  	
    	   },
			error: function (error) {
	        	  if(error.status == 401){
	        		  window.location.href = 'logout';
	        	  }
	          }   		    	 
     });
}

function bindPuorStooperData()
{
	tblestructuralpuor.clear();
	
	//$("#tblestructuralpuor tbody tr").remove();
	
	$.ajax({
        type: "GET",
        url: "/bimspring/getPourStopDetails",       
        async: false,
        success: function(data)
        {
        	 var dataObj = jQuery.parseJSON(data); 
        	 var RowNo = 0;
        	         	 
    		 $.each(dataObj, function(i, field)				  
	  	  	 {    			 
    			    		   	 	
    		   	 	var HoleType = "";
    		   	 	var HoleSize ="";
    		   	 	var NumberOfHole = "";
    		   	 	
    		   	 	var Weldtype = "";
    		   	 	var WeldLenght = "";
    		   	 	var WeldSize = "";
    		   	 	var Shoplength = "";
    		   	 	var Fieldlenght = "";
 	  			
 	  			if(field.Hole == 1)
 	  			{
 	  				
 	  				HoleType = "<div>";
 			   	 	HoleSize ="<div>";
 			   	 	NumberOfHole = "<div>";
 			   	 	
 			   	    var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
 			   	    
 			   	    var Length = field.holeddetails.length-1;
 			   	 	
 	  				$.each(field.holeddetails, function(i, field2)				  
 	  		  		{	   	  					
 	  					HoleType = HoleType +  field2.HoleType;
 	  					HoleSize = HoleSize +  field2.HoleSize;				 					
 	  					NumberOfHole = NumberOfHole + field2.NumberOfHole;
 	  					
 	  		  		});	
 	  				
 	  			   if(i != Length)
 			  		{	   	  			  		
 	  				  	HoleType = HoleType  + HR;	  					
 	  					HoleSize = HoleSize + HR;
 	  					NumberOfHole = NumberOfHole + HR;
 			  		}
 	  				
 	  				HoleType = HoleType + "</div>";
 			   	 	HoleSize = HoleSize + "</div>";
 			   	 	NumberOfHole = NumberOfHole + "</div>";
 	  			}
 	  			
 	  			if(field.Weld == 1)
 	  			{
 	  				
 	  				Weldtype = "<div>";
 	  				WeldSize = "<div>";			   	 	
 			   	 	Shoplength = "<div>";
 			   	 	Fieldlenght = "<div>";
 			   	 	
 			   	 	var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
 			   	    
 			   	    var Length = field.welddetails.length-1;
 			   	 	
 	  				$.each(field.welddetails, function(i, field2)				  
 	  		  		{
 	  					
 	  					var shoplength = "-";
          	 			var fieldlength = "-";
           	 			
           	 			if(field2.Shop !="")
           	 				shoplength = convMMtoFt(field2.WeldLengthMM);
           	 			
           	 			if(field2.Field !="")
           	 				fieldlength = convMMtoFt(field2.WeldLengthMM);
           	 			
           	 			
 	           	 		Weldtype = Weldtype +  field2.WeldType ;
 		           	 	WeldSize = WeldSize +  field2.WeldSize ;							 					
 		           	 	Shoplength= Shoplength + shoplength;
 		           	 	Fieldlenght = Fieldlenght + fieldlength;
 		           	 	
 		           	    if(i != Length)
 	  			  		{	   	  			  		
 	   		           	    Weldtype = Weldtype +  HR ;
 	   		           	 	WeldSize = WeldSize +  HR ;							 					
 	   		           	 	Shoplength= Shoplength + HR;
 	   		           	 	Fieldlenght = Fieldlenght + HR;
 	  			  		}
    	  				
 	  					
 	  		  		});	
 	  				
 	  				Weldtype = Weldtype + "</div>";
 	  				WeldSize = WeldSize + "</div>";			   	 	
 			   	 	Shoplength = Shoplength + "</div>";
 			   	 	Fieldlenght = Fieldlenght + "</div>";
 	  			}
				
	  	  			RowNo = RowNo + 1;
	  	  			var datarow = '<tr>' +
	  	  				 				'<td>' + field.Profile + '</td>' +
	  	  				 				'<td>' + field.Grade + '</td>' +
	  	  				 				'<td>' + field.Piece_Count_Nos + '</td>' +	  	  				 				
	  	  				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +	  	  				 				
	  	  				 				'<td>' + field.Weight + '</td>' + 	  	  				 				
	  	  				 				'<td class="text-center v-m-mid">' + HoleType + '</td>'+
			  	  		 				'<td class="text-center v-m-mid">' + HoleSize + '</td>'+
			  	  		 				'<td class="text-center v-m-mid">' + NumberOfHole + '</td>'+
			  	  		 				
			  	  		 				'<td class="text-center v-m-mid">' + Weldtype + '</td>'+
			  	  		 				'<td class="text-center v-m-mid">' + WeldSize + '</td>'+
			  	  		 				'<td class="text-center v-m-mid">' + Shoplength + '</td>'+
			  	  		 				'<td class="text-center v-m-mid">' + Fieldlenght + '</td>'+	
	  	  				 				'<td>' + field.Finish + '</td>' +	  	  				 				
	  	  			 				'</tr>';
	  	   	  			//$('#tblestructuralpuor').append(datarow);
	  	  		  	  			
	  	  		tblestructuralpuor.row.add($(datarow)).draw(false);
	  	  			 
	  		 });
	  			  	
    	   },
			error: function (error) {
	        	  if(error.status == 401){
	        		  window.location.href = 'logout';
	        	  }
	          }   		    	 
     });
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

function bindMemberVBProfileDetails(profile)
{
	$('#divVBProfileDetails').show();
	$(".hideAll").hide(); 
	
	//$("#tbleVBProfileDetails tbody tr").remove();
	tbleVBProfileDetails.clear();
	
	profile = profile.replace('*','\"');
	profile = profile.replace('*','\"');
	
	 $.ajax({	   	 	
		 	type: "GET",
	   	   	url: "/bimspring/getVBProfileDetails",
	   	    data : {
	   	    	memberType : 'VERTICAL BRACE',
	   	    	profile : profile
		 	 },	
	   	   	async: false,
	   	 	success: function(data){
	   	 		var dataObj = jQuery.parseJSON(data); 
	   	 		var RowNo = 0;
	   	 	
	   	 	$("label[for = VbSubDetail1]").text("VERTICAL BRACE - " + profile);
	   	 	
	  		 $.each(dataObj, function(i, field)				  
	  		 {	 			
	  			var MemberType = "";
   		   	 	var Profile = "";
   		   	 	var ConLength = "";
   		   	 	var Quantity= "";
   		   	 	var Weight = "";
   		   	 	
   		   	 	var HoleType = "";
   		   	 	var HoleSize ="";
   		   	 	var NumberOfHole = "";
   		   	 	
   		   	 	var Weldtype = "";
   		   	 	var WeldLenght = "";
   		   	 	var WeldSize = "";
   		   	 	var Shoplength = "";
   		   	 	var Fieldlenght = "";
   		   	 	
   		   	 	
   	  		if(field.ConnectionMaterial == 1)
	  			{	
	  				MemberType = "<div>";
	  				Profile= "<div>";
	  				ConLength= "<div>";
	  				Quantity= "<div>";
	  				Weight= "<div>"
	  				
	  				var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
	  				
	  			   var connectionLength = field.connectiondetails.length-1;
	  					
	  				$.each(field.connectiondetails, function(i, field2)				  
	  			  	{	  			  					
	  			  		MemberType = MemberType + field2.MemberType;	  					
	  			  		Profile = Profile + field2.Profile ;
	  			  		ConLength = ConLength + convMMtoFt(field2.LengthMM);
	  			  		Quantity = Quantity + field2.Quantity ;
	  			  		Weight = Weight + field2.Weight;
	  			  		
	  			  		if(i != connectionLength)
	  			  		{	   	  			  		
	   	  			  		MemberType = MemberType  + HR;	  					
	   	  			  		Profile = Profile + HR;
	   	  			  		ConLength = ConLength + HR;
	   	  			  		Quantity = Quantity  + HR;
	   	  			  		Weight = Weight + HR;
	  			  		}
	  			  					
	  			  				
	  			  	});	 	  					
	  				
	  				MemberType = MemberType + "</div>";
	  				Profile = Profile + "</div>";
	  				ConLength = ConLength + "</div>";
	  				Quantity = Quantity + "</div>";
	  				Weight = Weight + "</div>"
	  			}
	  			
	  			if(field.Hole == 1)
	  			{
	  				
	  				HoleType = "<div>";
			   	 	HoleSize ="<div>";
			   	 	NumberOfHole = "<div>";
			   	 	
			   	    var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
			   	    
			   	    var Length = field.holeddetails.length-1;
			   	 	
	  				$.each(field.holeddetails, function(i, field2)				  
	  		  		{	   	  					
	  					HoleType = HoleType +  field2.HoleType;
	  					HoleSize = HoleSize +  field2.HoleSize;				 					
	  					NumberOfHole = NumberOfHole + field2.NumberOfHole;
	  					
	  		  		});	
	  				
	  			   if(i != Length)
			  		{	   	  			  		
	  				  	HoleType = HoleType  + HR;	  					
	  					HoleSize = HoleSize + HR;
	  					NumberOfHole = NumberOfHole + HR;
			  		}
	  				
	  				HoleType = HoleType + "</div>";
			   	 	HoleSize = HoleSize + "</div>";
			   	 	NumberOfHole = NumberOfHole + "</div>";
	  			}
	  			
	  			if(field.Weld == 1)
	  			{
	  				
	  				Weldtype = "<div>";
	  				WeldSize = "<div>";			   	 	
			   	 	Shoplength = "<div>";
			   	 	Fieldlenght = "<div>";
			   	 	
			   	 	var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
			   	    
			   	    var Length = field.welddetails.length-1;
			   	 	
	  				$.each(field.welddetails, function(i, field2)				  
	  		  		{
	  					
	  					var shoplength = "-";
          	 			var fieldlength = "-";
          	 			
          	 			if(field2.Shop !="")
          	 				shoplength = convMMtoFt(field2.WeldLengthMM);
          	 			
          	 			if(field2.Field !="")
          	 				fieldlength = convMMtoFt(field2.WeldLengthMM);
          	 			
          	 			
	           	 		Weldtype = Weldtype +  field2.WeldType ;
		           	 	WeldSize = WeldSize +  field2.WeldSize ;							 					
		           	 	Shoplength= Shoplength + shoplength;
		           	 	Fieldlenght = Fieldlenght + fieldlength;
		           	 	
		           	    if(i != Length)
	  			  		{	   	  			  		
	   		           	    Weldtype = Weldtype +  HR ;
	   		           	 	WeldSize = WeldSize +  HR ;							 					
	   		           	 	Shoplength= Shoplength + HR;
	   		           	 	Fieldlenght = Fieldlenght + HR;
	  			  		}
   	  				
	  					
	  		  		});	
	  				
	  				Weldtype = Weldtype + "</div>";
	  				WeldSize = WeldSize + "</div>";			   	 	
			   	 	Shoplength = Shoplength + "</div>";
			   	 	Fieldlenght = Fieldlenght + "</div>";
	  			}
	  			
	  			RowNo = RowNo + 1;
	  			 var datarow = '<tr class="clickable-row">'+	 		
	  			'<td class="text-center v-m-mid">' + field.MemberType + '</td>' +
	  			'<td class="text-center v-m-mid">' + field.Profile + '</td>' +
	  			'<td class="text-center v-m-mid">' + field.Grade + '</td>' +
	  			'<td class="text-center v-m-mid">' + field.Piece_Count_Nos + '</td>' +				 				
	  			'<td class="text-center v-m-mid">' + convMMtoFt(field.LengthMM)+ '</td>' +				 				
	  			'<td class="text-center v-m-mid">' + field.Weight + '</td>'	 +
	  			
	  			'<td class="text-center v-m-mid">' + MemberType + '</td>'+
 				'<td class="text-center v-m-mid">' + Profile + '</td>'+
 				'<td class="text-center v-m-mid">' + ConLength  + '</td>'+
 				'<td class="text-center v-m-mid">' + Quantity + '</td>'+
 				'<td class="text-center v-m-mid">' + Weight + '</td>'+ 	
 				
 				'<td class="text-center v-m-mid">' + HoleType + '</td>'+
 				'<td class="text-center v-m-mid">' + HoleSize + '</td>'+
 				'<td class="text-center v-m-mid">' + NumberOfHole + '</td>'+	
 				
 				'<td class="text-center v-m-mid">' + Weldtype + '</td>'+
 				'<td class="text-center v-m-mid">' + WeldSize + '</td>'+
 				'<td class="text-center v-m-mid">' + Shoplength + '</td>'+
 				'<td class="text-center v-m-mid">' + Fieldlenght + '</td>'+
 				
	  			'<td class="text-center v-m-mid">' + field.Finish + '</td>' +
				'<td class="text-center v-m-mid">' + field.EndPrep + '</td>' +
			    '<td class="text-center v-m-mid">' + field.RefDwgNum + '</td>' +
			 '</tr>';
	  			 
	  			//$('#tbleVBProfileDetails').append(datarow);
	  			
	  			tbleVBProfileDetails.row.add($(datarow)).draw(false);
	  		});
	   	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }   		    	 	   	 		
	 });

}

function bindMemberHBProfileDetails(profile)
{
	$('#divHBProfileDetails').show();
	$(".hideAll").hide(); 
	
	profile = profile.replace('*','\"');
	profile = profile.replace('*','\"');
	
	//$("#tbleHBProfileDetails tbody tr").remove();
	
	tbleHBProfileDetails.clear();
		
	 $.ajax({	   	 	
		 	type: "GET",
	   	   	url: "/bimspring/getMemberProfileDetails",
	   	    data : {
	   	    	memberType : 'HORIZONTAL BRACE',	
	   	    	memberSubType : "",
	   	    	profile : profile
		 	 },	
	   	   	async: false,
	   	 	success: function(data){
	   	 		var dataObj = jQuery.parseJSON(data); 
	   	 		var RowNo = 0;
	   	 		
	   	 		$("label[for = HBSubDetail1]").text("HORIZONTAL BRACE - " + profile);
	   	 
	   	 		$.each(dataObj, function(i, field)				  
		  	    {
		  			
	   	 			
	   	 		var MemberType = "";
   		   	 	var Profile = "";
   		   	 	var ConLength = "";
   		   	 	var Quantity= "";
   		   	 	var Weight = "";
   		   	 	
   		   	 	var HoleType = "";
   		   	 	var HoleSize ="";
   		   	 	var NumberOfHole = "";
   		   	 	
   		   	 	var Weldtype = "";
   		   	 	var WeldLenght = "";
   		   	 	var WeldSize = "";
   		   	 	var Shoplength = "";
   		   	 	var Fieldlenght = "";
   		   	 	
   		   	 	
   	  		if(field.ConnectionMaterial == 1)
	  			{	
	  				MemberType = "<div>";
	  				Profile= "<div>";
	  				ConLength= "<div>";
	  				Quantity= "<div>";
	  				Weight= "<div>"
	  				
	  				var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
	  				
	  			   var connectionLength = field.connectiondetails.length-1;
	  					
	  				$.each(field.connectiondetails, function(i, field2)				  
	  			  	{	  			  					
	  			  		MemberType = MemberType + field2.MemberType;	  					
	  			  		Profile = Profile + field2.Profile ;
	  			  		ConLength = ConLength + convMMtoFt(field2.LengthMM);
	  			  		Quantity = Quantity + field2.Quantity ;
	  			  		Weight = Weight + field2.Weight;
	  			  		
	  			  		if(i != connectionLength)
	  			  		{	   	  			  		
	   	  			  		MemberType = MemberType  + HR;	  					
	   	  			  		Profile = Profile + HR;
	   	  			  		ConLength = ConLength + HR;
	   	  			  		Quantity = Quantity  + HR;
	   	  			  		Weight = Weight + HR;
	  			  		}
	  			  					
	  			  				
	  			  	});	 	  					
	  				
	  				MemberType = MemberType + "</div>";
	  				Profile= Profile + "</div>";
	  				ConLength = ConLength + "</div>";
	  				Quantity= Quantity + "</div>";
	  				Weight= Weight + "</div>"
	  			}
	  			
	  			if(field.Hole == 1)
	  			{
	  				
	  				HoleType = "<div>";
			   	 	HoleSize ="<div>";
			   	 	NumberOfHole = "<div>";
			   	 	
			   	    var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
			   	    
			   	    var Length = field.holeddetails.length-1;
			   	 	
	  				$.each(field.holeddetails, function(i, field2)				  
	  		  		{	   	  					
	  					HoleType = HoleType +  field2.HoleType;
	  					HoleSize = HoleSize +  field2.HoleSize;				 					
	  					NumberOfHole = NumberOfHole + field2.NumberOfHole;
	  					
	  		  		});	
	  				
	  			   if(i != Length)
			  		{	   	  			  		
	  				  	HoleType = HoleType  + HR;	  					
	  					HoleSize = HoleSize + HR;
	  					NumberOfHole = NumberOfHole + HR;
			  		}
	  				
	  				HoleType = HoleType + "</div>";
			   	 	HoleSize = HoleSize + "</div>";
			   	 	NumberOfHole = NumberOfHole + "</div>";
	  			}
	  			
	  			if(field.Weld == 1)
	  			{
	  				
	  				Weldtype = "<div>";
	  				WeldSize = "<div>";			   	 	
			   	 	Shoplength = "<div>";
			   	 	Fieldlenght = "<div>";
			   	 	
			   	 	var HR = "<hr style='margin-top:5px; margin-bottom:5px;'>";
			   	    
			   	    var Length = field.welddetails.length-1;
			   	 	
	  				$.each(field.welddetails, function(i, field2)				  
	  		  		{
	  					
	  					var shoplength = "-";
          	 			var fieldlength = "-";
          	 			
          	 			if(field2.Shop !="")
          	 				shoplength = convMMtoFt(field2.WeldLengthMM);
          	 			
          	 			if(field2.Field !="")
          	 				fieldlength = convMMtoFt(field2.WeldLengthMM);
          	 			
          	 			
	           	 		Weldtype = Weldtype +  field2.WeldType ;
		           	 	WeldSize = WeldSize +  field2.WeldSize ;							 					
		           	 	Shoplength= Shoplength + shoplength;
		           	 	Fieldlenght = Fieldlenght + fieldlength;
		           	 	
		           	    if(i != Length)
		           	    {	   	  			  		
	   		           	    Weldtype = Weldtype +  HR ;
	   		           	 	WeldSize = WeldSize +  HR ;							 					
	   		           	 	Shoplength= Shoplength + HR;
	   		           	 	Fieldlenght = Fieldlenght + HR;
		           	    }
   	  				
	  					
	  		  		});	
	  				
	  				Weldtype = Weldtype + "</div>";
	  				WeldSize = WeldSize + "</div>";			   	 	
			   	 	Shoplength = Shoplength + "</div>";
			   	 	Fieldlenght = Fieldlenght + "</div>";
	  			}
	  			
					 
		  			 var datarow = '<tr class="clickable-row">'+	
						  			'<td class="text-center v-m-mid">' + field.Profile + '</td>' +
						  			'<td class="text-center v-m-mid">'+ field.Grade + '</td>' +
						  			'<td class="text-center v-m-mid">' + field.Piece_Count_Nos + '</td>' +				 				
						  			'<td class="text-center v-m-mid">' + convMMtoFt(field.Length_ft_in)+ '</td>' +				 				
						  			'<td class="text-center v-m-mid">' + field.Weight + '</td>'+
						  			'<td class="text-center v-m-mid">' + MemberType + '</td>'+
					 				'<td class="text-center v-m-mid">' + Profile + '</td>'+
					 				'<td class="text-center v-m-mid">' + ConLength  + '</td>'+
					 				'<td class="text-center v-m-mid">' + Quantity + '</td>'+
					 				'<td class="text-center v-m-mid">' + Weight + '</td>'+
					 				'<td class="text-center v-m-mid">' + HoleType + '</td>'+
					 				'<td class="text-center v-m-mid">' + HoleSize + '</td>'+
					 				'<td class="text-center v-m-mid">' + NumberOfHole + '</td>'+
					 				'<td class="text-center v-m-mid">' + Weldtype + '</td>'+
					 				'<td class="text-center v-m-mid">' + WeldSize + '</td>'+
					 				'<td class="text-center v-m-mid">' + Shoplength + '</td>'+
					 				'<td class="text-center v-m-mid">' + Fieldlenght + '</td>'+
					 				'<td class="text-center v-m-mid">'+ field.Finish + '</td>' +
					 				'<td class="text-center v-m-mid">' + field.End_Preparation + '</td>' +
					 				'<td class="text-center v-m-mid">' + field.Ref_Drawing_No + '</td>' +
				 				'</tr>';
	  				
	  				//$('#tbleHBProfileDetails').append(datarow);
	 				
	 				tbleHBProfileDetails.row.add($(datarow)).draw(false);
	  			});
	   	 	},
			error: function (error) {
	        	  if(error.status == 401){
	        		  window.location.href = 'logout';
	        	  }
	          }   		    	 	   	 		
	 });

}

function showtabletrusses(value)
{   
	
	if(value == "parallelchorddetails")
	{     	
		$("#divtrussesdetail").show();
	}
}

function formatStrings(collection) {
    return collection.join("<br/> ");
}

function getConnectionDetails(teklaid,count){
	
	$("#tbleconnmaterial tbody tr").remove();
	
	$.ajax({	   	 	
	 	type: "GET",
   	   	url: "/bimspring/getConnectionMaterial",
   	    data : {
   	    	teklaid : teklaid,
   	    	count : count
	 	 },	
   	   	async: false,
   	 	success: function(data){
   	 	  	 		
   	 	var dataObj = jQuery.parseJSON(data); 
   	 		
   	 	$.each(dataObj, function(i, field)				  
   	  	 {
   	 		 var datarow = '<tr class="clickable-row">'+	 		
					'<td>' + field.MemberType + '</td>' +
					'<td>' + field.Profile + '</td>' +					
					'<td>' + convMMtoFt(field.LengthMM) + '</td>' +
					'<td>' + field.Quantity + '</td>' +
					'<td>' + field.Weight + '</td>' +
					'</tr>';
		   	  $("#tbleconnmaterial").append(datarow);
   	  		 });
   	 	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }   		    	 
   	 		
	});
		
	$(".hideAll").hide();  	
	$("#divconnmaterial").show();	
}

function getHoleDetails(teklaid){
	
	$("#tblehole tbody tr").remove();
	
	$.ajax({	   	 	
	 	type: "GET",
   	   	url: "/bimspring/getHoleDetails",
   	    data : {
   	    	teklaid : teklaid
	 	 },	
   	   	async: false,
   	 	success: function(data){
   	 		
   	 	var dataObj = jQuery.parseJSON(data); 
   	 	
   	 	$.each(dataObj, function(i, field)				  
      	{		
   	   	 	 var datarow = '<tr>'+	 		
   					'<td>' + field.HoleType + '</td>' +
   					'<td>' + field.HoleSize + '</td>' +
   					'<td>' + field.NumberOfHole + '</td>' +
   					'</tr>';
   		   	  $("#tblehole").append(datarow);
      	   });
   	 		
   	 	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }   		    	 
   	 		
	});
	
	$(".hideAll").hide();
	$("#divhole").show(); 
}

function getWeldDetails(teklaid){
	
	$("#tbleweld tbody tr").remove(); 
	$.ajax({	   	 	
	 	type: "GET",
   	   	url: "/bimspring/getWeldDetails",
   	    data : {
   	    	teklaid : teklaid
	 	 },	
   	   	async: false,
   	 	success: function(data){
   	 		
   	 		var dataObj = jQuery.parseJSON(data); 
   	 		   	 		
   	 		$.each(dataObj, function(i, field)				  
     	  	{
   	 			
   	 			var shoplength = "-";
	 			var fieldlength = "-";
   	 			
   	 			if(field.Shop !="")
   	 				shoplength = convMMtoFt(field.WeldLengthMM);
   	 			if(field.Field !="")
   	 				fieldlength = convMMtoFt(field.WeldLengthMM);
     	 		
  		   	 	 var datarow = '<tr class="clickable-row">'+	 		
  					'<td>' + field.WeldType + '</td>' +  					
  					'<td>' + field.WeldSize + '</td>' +
  					'<td>' + shoplength + '</td>' +
  					'<td>' + fieldlength + '</td>' +
  					'</tr>';
  		   	 	 $("#tbleweld").append(datarow);
     	  	});
   	 	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }   		    	 
   	 		
	});
	
	$(".hideAll").hide();
	$("#divweld").show();
}

function getStudDetails(teklaid){
	
	$("#tblestud tbody tr").remove(); 
	$.ajax({	   	 	
	 	type: "GET",
   	   	url: "/bimspring/getStudDetails",
   	    data : {
   	    	teklaid : teklaid
	 	 },	
   	   	async: false,
   	 	success: function(data){   	 		
   	 		var dataObj = jQuery.parseJSON(data);  
   	 		$.each(dataObj, function(i, field)				  
    	  	 {
 		   	 	 var datarow = '<tr class="clickable-row">'+	 		
 					'<td>' + field.StudDia + '</td>' +
 					'<td>' + field.StudLength + '</td>' + 
 					'<td>' + field.NumberOfStuds + '</td>' +
 					'</tr>';
 		   	  $("#tblestud").append(datarow);
    	  	});
   	 	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }   		    	 
   	 		
	});
	
	$(".hideAll").hide();
	$("#divstud").show();
}

