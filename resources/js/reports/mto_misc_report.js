var tableBridgeAngle = ""; 
var tableCarrierGirts = ""; 
var tableEdgeAngle = ""; 
var tableEmbedPlate = ""; 
var tableGirts = ""; 
var tableHandRails = "";
var tableHangers = "";
var tableKickerAngle = "";
var tableLadders = "";
var tableLedgerAngle = "";
var tableLintels = "";
var tableMiscPipes = "";
var tableMiscPipeSupport = "";
var tableMiscPlate = "";
var tableMonorail = "";
var tablePurlins = "";
var tableRafterBeam = "";
var tableRtu = "";
var tableSagRods = "";
var tableScreenWallFrames = "";
var tableStairs = "";
var tableStairrails ="";

var tableBridgeAngleDetails = ""; 
var tableCarrierGirtsDetails = ""; 
var tableEdgeAngleSubDetails="";
var tableEmbedPlateSubDetails = "";
var tablePurlinsSubDetails = "";
var tbleHangersSubDetails = "";
var tbleKickerAngleSubDetails = "";
var tbleLadderSubDetails = "";
var tbleLedgerAngleSubDetails = "";
var tbleLintelsSubDetails = "";
var tbleMiscPipesSubDetails = "";
var tbleStairRailsSubDetails = "";
var tbleSagRodsSubDetails = "";
var tableMonorailsSubDetails = "";
var tableGirtsSubDetails = "";
var tbleMiscPlateSubDetails = "";
var tableRafterBeamSubDetails = "";
var tbleStairsSubDetails = "";
var tbleMiscPipesSupportSubDetails = "";
var tableRTUSubDetails = "";
var tableScreenWallFramesSubDetails = "";
var tbleHandRailsSubDetails = "";

$(function() {
	$(".box").hide();
	$(".divAll").show();
		
   	 	tableBridgeAngle = $('#tableBridgeAngle').DataTable({
       		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 
   	 	
   	 	// Bridge Angle Details table
   	 	tableBridgeAngleDetails = $('#tbleBridgeAngleSub').DataTable({
    		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 
		
   	 	tableCarrierGirts = $('#tableCarrierGirts').DataTable({
    		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 
   	 	// Carrier Girts Details table
   	 	tableCarrierGirtsDetails = $('#tableCarrierGirtsSub').DataTable({
    		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 
   	 
   	 	tableEdgeAngle = $('#tableEdgeAngle').DataTable({
		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   	 	
   	 tableEdgeAngleSubDetails = $('#tbleEdgeAngleSub').DataTable({
 		
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   	
	   	tableEmbedPlate = $('#tableEmbedPlate').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 
	   	//
	   	tableEmbedPlateSubDetails = $('#tbleEmbedPlateSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 
   	
	   	tableGirts = $('#tableGirts').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	   	
	   	tableGirtsSubDetails = $('#tableGirtsSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   	
	   	tableHandrails = $('#tableHandrails').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	   	
	   	tbleHandRailsSubDetails= $('#tbleHandRailsSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   	
	   	tableHangers = $('#tbleHanger').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	   	
	   	tbleHangersSubDetails = $('#tbleHangersSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	   	
   		tableKickerAngle = $('#tbleKickerAngle').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleKickerAngleSubDetails= $('#tbleKickerAngleSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tableLadders = $('#tableLadder').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleLadderSubDetails= $('#tbleLadderSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tableLedgerAngle = $('#tbleLedgerAngle').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		tbleLedgerAngleSubDetails =  $('#tbleLedgerAngleSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tableLintels = $('#tbleLintels').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleLintelsSubDetails = $('#tbleLintelsSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tableMiscPipes = $('#tableMiscPipes').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleMiscPipesSubDetails = $('#tbleMiscPipesSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tableMiscPipeSupport = $('#tbleMiscPipesSupport').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleMiscPipesSupportSubDetails= $('#tbleMiscPipesSupportSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tableMiscPlate = $('#tbleMiscPlate').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleMiscPlateSubDetails = $('#tbleMiscPlateSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tableMonorail = $('#tableMonorails').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tableMonorailsSubDetails = $('#tableMonorailsSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tablePurlins = $('#tablePurlins').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tablePurlinsSubDetails= $('#tablePurlinsSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		tableRafterBeam = $('#tableRafterBeam').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tableRafterBeamSubDetails= $('#tableRafterBeamSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    }); 
	    
   		tableRtu = $('#tableRTU').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tableRTUSubDetails= $('#tableRTUSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
	    
   		tableSagRods = $('#tableSagRods').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleSagRodsSubDetails= $('#tbleSagRodsSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tableScreenWallFrames = $('#tableScreenWallFrames').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tableScreenWallFramesSubDetails = $('#tableScreenWallFramesSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tableStairs = $('#tableStairs').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleStairsSubDetails = $('#tbleStairsSub').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tableStairrails = $('#tableStairrails').DataTable({
			
			"dom": 'ftipr',
		    "bInfo": false,
		     searching: false,
		     paging: true,
		     "pagingType": "full",
		     "showNEntries" : true,
		     "lengthMenu": [[10], [10]],		     
		     "ordering": false
	    });
   		
   		tbleStairRailsSubDetails = $('#tbleStairRailsSub').DataTable({
			
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

	// Hide and Show Sub Tables
	$(document).ready(function(){
		$(".hideAllTables").hide();
	});
	

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
	// Output Reports
	function getOutputReportDetails(miscMember)
	{	
		   $.ajax({
		   	 	type: "GET",
		   	   	url: "/bimspring/getMiscOutputDetails",
		   	   data : {
		   		   		miscmember : miscMember	,
		   		   		
			 	 },	
		   	   	async: false,
		   	 	success: function(data){
		   	 		
		   	 		var dataObj = jQuery.parseJSON(data); 		   	 		
		   	 		var RowNo = 0;		   	 		
		   	 	    $(".hideAllTables").hide();
		   	 	    $(".hideAllSubTables").hide();
		   	 	
		   	 		if(miscMember=="Bridging Angle")
	   	 			{
		   	 			tableBridgeAngle.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 			  $(".divBridgeAngle").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			 
			   	 			  tableBridgeAngle.row.add($(datarow)).draw(false); 
			   	 		 });
	   	 			}
		   	 		
		   	 		else if(miscMember=="Carrier Girt")
	   	 			{
		   	 			tableCarrierGirts.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 			  $(".divCarrierGirts").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			  tableCarrierGirts.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Edge Angle")
	   	 			{
			   	 		tableEdgeAngle.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 			  $(".divEdgeAngle").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';	
			   	 			tableEdgeAngle.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Embed Plates")
	   	 			{
			   	 		tableEmbedPlate.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 			  $(".divEmbedPlate").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Embed_Plate_Profile_In.replace("'",'@').replace('"','#') + '\');">' + field.Embed_Plate_Profile_In + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';	
			   	 			  tableEmbedPlate.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	    else if(miscMember=="Purlins")
	   	 			{
			   		    tablePurlins.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 			  $(".divPurlins").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';	
			   	 			tablePurlins.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Hangers")
	   	 			{
			   		 	tableHangers.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 			  $(".divHangers").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			  tableHangers.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Kicker Angle")
	   	 			{
			   	 		tableKickerAngle.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divKickerAngle").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			  tableKickerAngle.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Ladders")
	   	 			{
			   	 		tableLadders.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divLadder").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile.replace('"', "#") + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';	
			   	 			  tableLadders.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Ledger Angle")
	   	 			{
			   	 		tableLedgerAngle.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divLedgerAngle").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			  tableLedgerAngle.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Lintel")
	   	 			{
			   		 	tableLintels.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divLintels").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			  tableLintels.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
		   	 		
			   	 	else if(miscMember=="Misc Pipe")
	   	 			{
			   	 	    tableMiscPipes.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divMiscPipes").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			 
			   	 			  tableMiscPipes.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Handrails")
	   	 			{
			   	 	    tableHandrails.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divHandRails").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Handrail_Profile + '\');">' + field.Handrail_Profile + '</a></td>' +
			   	 				 				
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			  
			   	 			  tableHandrails.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
			   	 	
			   	 	else if(miscMember=="Stair Rails")
	   	 			{
			   	 		tableStairrails.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divStairRails").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Stair_Rail_Profile + '\');">' + field.Stair_Rail_Profile + '</a></td>' +
			   	 				 				
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			 tableStairrails.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Sag Rods")
	   	 			{
			   	 		tableSagRods.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divSagRods").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile.replace('"',"#") + '\');">' + field.Profile + '</a></td>' +
			   	 				 				
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			
			   	 			tableSagRods.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Monorails")
	   	 			{
			   	 		tableMonorail.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divMonorails").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			tableMonorail.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
			   	 	else if(miscMember=="Girts")
	   	 			{
			   	 		tableGirts.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divGirts").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			    '<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			tableGirts.row.add($(datarow)).draw(false);
			   	 			
			   	 		 });
	   	 			}
			   	 	else if(miscMember=="Misc Plate")
	   	 			{
			   	 		tableMiscPlate.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divMiscPlate").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Plate_Profile.replace("'",'@').replace('"','#') + '\');">' + field.Plate_Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			tableMiscPlate.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
			   	 	else if(miscMember=="Rafter Beam")
	   	 			{
			   		 	tableRafterBeam.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divRafterBeam").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			
			   	 			tableRafterBeam.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
			   	 	else if(miscMember=="Stairs")
	   	 			{
			   	 		tableStairs.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divStairs").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 			'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.Profile.replace("'",'@').replace('"','#') + '\');">' + field.Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			tableStairs.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 	
			   	 	else if(miscMember=="Misc Pipe Support")
	   	 			{
			   		 	tableMiscPipeSupport.clear();
			   		 	
			   		 	
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divMiscPipeSupp").show();
			   	 			  RowNo = RowNo +1;
			   	 			  
			   	 			  var profile = field.PipeSupport_Profile;//.replace("'","@").replace('"','#');
			   	 			  
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +			   	 				 				
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ profile + '\');">' + field.PipeSupport_Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			
			   	 			tableMiscPipeSupport.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
			   	 	else if(miscMember=="RTU")
	   	 			{
			   	 		tableRtu.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divRtu").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +		   	 				 				
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.RTU_Profile + '\');">' + field.RTU_Profile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			tableRtu.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 	
				   	else if(miscMember=="Screen Wall Frame")
	   	 			{
				   		tableScreenWallFrames.clear();
			   	 		$.each(dataObj, function(i, field)				  
			   	 		{
			   	 		      $(".divScreenWall").show();
			   	 			  RowNo = RowNo +1;
			   	 			  var datarow = '<tr>' +
			   	 				 				'<td>' + RowNo + '</td>' +
			   	 				 				'<td><a id="order" href="javascript:getOutputReportProfileDetails(\''+ miscMember +'\',\''+ field.ScreenWallProfile + '\');">' + field.ScreenWallProfile + '</a></td>' +
			   	 				 				'<td>' + field.Quantity_Nos + '</td>' +
			   	 				 				'<td>' + convMMtoFt(field.Length_ft_in) + '</td>' +
			   	 				 				'<td>' + field.Member_Weight_Tons + '</td>' +
			   	 				 			'</tr>';
			   	 			
			   	 		    tableScreenWallFrames.row.add($(datarow)).draw(false);
			   	 		 });
	   	 			}
		   	 		
		   	 	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
		    });  
	}
	
	function getOutputReportProfileDetails(miscMember,profile)
	{
		$(".hideAllSubTables").hide();		
		profile = profile.replace('@',"''");
		profile = profile.replace('#','\\\"');
		
		 $.ajax({
		   	 	type: "GET",
		   	   	url: "/bimspring/getMiscOutputDetailsByProfile",
		   	   data : {
		   		   		miscmember : miscMember	,
		   		   		profile:profile		   		   		
			 	 },	
		   	   	async: false,
		   	 	success: function(data){		   	 		
		   	 	
		   	 	var dataObj = jQuery.parseJSON(data); 
		   	 	
		   	 	var RowNo = 0;	
		   	 	if(miscMember=="Bridging Angle")
   	 			{
		   	 		tableBridgeAngleDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 			  $(".divBridgeAngleSub").show();
		   	 			  RowNo = RowNo +1;
				   	 			var datarow = '<tr>' +
					 				'<td>' + RowNo + '</td>' +
					 				'<td>' + field.Profile + '</td>' +
					 				'<td>' + field.Material_Grade + '</td>' +
					 				'<td>' + field.Quantity_Nos + '</td>' +
					 				'<td>' + field.Length_ft_in + '</td>' +
					 				'<td>' + field.Member_Weight_lbs + '</td>' +
					 				'<td>' + field.Member_Weight_Tons + '</td>' +
					 				'<td>' + field.Typical_Connection_Type_At_Each_End + '</td>' +
					 				'<td>' + field.Bolt_Grade + '</td>' +
					 				'<td>' + field.Bolt_Dia_In + '</td>' +
					 				'<td>' + field.Total_No_Of_Bolts + '</td>' +
					 				'<td>' + field.Weld_Type + '</td>' +
					 				'<td>' + field.Weld_Size_In + '</td>' +
					 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +
					 				'<td>' + field.Gusset_Plate_Thickness_In + '</td>' +
					 				'<td>' + field.Gusset_Plate_Size_In_In + '</td>' +
					 			'</tr>';
		 
				   	 		tableBridgeAngleDetails.row.add($(datarow)).draw(false); 
		   	 		 });
   	 			}
	   	 		
	   	 		else if(miscMember=="Carrier Girt")
   	 			{
	   	 			tableCarrierGirtsDetails.clear();
	   	 		
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 			  $(".divCarrierGirtsSub").show();
		   	 			  RowNo = RowNo +1;
		   	 			  var datarow = '<tr>' +
							   	 			'<td>' + RowNo + '</td>' +
							 				'<td>' + field.Profile + '</td>' +
							 				'<td>' + field.Material_Grade + '</td>' +
							 				'<td>' + field.Quantity_Nos + '</td>' +
							 				'<td>' + field.Total_Length_Ft_In + '</td>' +
							 				'<td>' + field.Member_Weight_lbs + '</td>' +
							 				'<td>' + field.Member_Weight_Tons + '</td>' +
							 				'<td>' + field.Weld_Type_Between_Members + '</td>' +
							 				'<td>' + field.Weld_Size_Between_Members_In + '</td>' +							 				
							 				'<td>' + field.Total_Weld_Length_Between_Members_Ft_In + '</td>' +
							 				'<td>' + field.Typical_Connection_Type + '</td>' +
							 				'<td>' + field.Connecting_Member_Profile + '</td>' +
							 				'<td>' + field.Bolt_Grade + '</td>' +
							 				'<td>' + field.Bolt_Dia_In + '</td>' +							 				
							 				'<td>' + field.Total_No_Of_Bolts + '</td>' +							 				
							 				'<td>' + field.Weld_Type + '</td>' +							 				
							 				'<td>' + field.Weld_Size_In + '</td>' +
							 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +
		   	 				 			'</tr>';
		   	 			tableCarrierGirtsDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Edge Angle")
   	 			{
		   	 		tableEdgeAngleSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 			  $(".divEdgeAngleSub").show();
		   	 			  RowNo = RowNo +1;
		   	 			  var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Profile + '</td>' +
				 				'<td>' + field.Material_Grade + '</td>' +
				 				'<td>' + field.Quantity_Nos + '</td>' +
				 				'<td>' + field.Total_Length_Ft_In + '</td>' +
				 				'<td>' + field.Member_Weight_lbs + '</td>' +
				 				'<td>' + field.Member_Weight_Tons + '</td>' +
				 				'<td>' + field.Typical_Connection_Type_At_Each_End + '</td>' +
				 				'<td>' + field.Bolt_Grade + '</td>' +
				 				'<td>' + field.Bolt_Dia_In + '</td>' +
				 				'<td>' + field.Total_No_Of_Bolts + '</td>' +
				 				'<td>' + field.Weld_Type + '</td>' +
				 				'<td>' + field.Weld_Size_In + '</td>' +
				 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' 
					 			'</tr>';	
		   	 			tableEdgeAngleSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Embed Plates")
   	 			{
		   	 	tableEmbedPlateSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 			  $(".divEmbedPlateSub").show();
		   	 			  RowNo = RowNo +1;
		   	 			  var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Embed_Plate_Profile_In + '</td>' +
				 				'<td>' + field.Material_Grade + '</td>' +
				 				'<td>' + field.Quantity_Nos + '</td>' +
				 				'<td>' + field.Total_Length_Ft_In + '</td>' +
				 				'<td>' + field.Member_Weight_lbs + '</td>' +
				 				'<td>' + field.Member_Weight_Tons + '</td>' +
				 				'<td>' + field.Typical_Connection_Type + '</td>' +
				 				'<td>' + field.Shear_Stud_Dia_in + '</td>' +
				 				'<td>' + field.Shear_Stud_Length_In + '</td>' +
				 				'<td>' + field.Total_Shear_Stud_Qty + '</td>' +
				 				'<td>' + field.Anchor_Rod_Type + '</td>' +
				 				'<td>' + field.Anchor_Rod_Dia_In + '</td>' +
				 				'<td>' + field.Anchor_Rod_Length_Ft_In + '</td>' +
				 				'<td>' + field.Total_Anchor_Rod_Qty + '</td>' +	
				 			'</tr>';	
		   	 			tableEmbedPlateSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	    else if(miscMember=="Purlins")
   	 			{
		   	    	tablePurlinsSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 			  $(".divPurlinsSub").show();
		   	 			  RowNo = RowNo +1;
		   	 			  var datarow = '<tr>' +
					   	 			'<td>' + RowNo + '</td>' +
					 				'<td>' + field.Profile + '</td>' +
					 				'<td>' + field.Material_Grade + '</td>' +
					 				'<td>' + field.Quantity_Nos + '</td>' +
					 				'<td>' + field.Total_Length_Ft_In + '</td>' +
					 				'<td>' + field.Member_Weight_lbs + '</td>' +
					 				'<td>' + field.Member_Weight_Tons + '</td>' +
					 				'<td>' + field.Typical_Connection_Type + '</td>' +
					 				'<td>' + field.Bolt_Grade + '</td>' +
					 				'<td>' + field.Bolt_Dia_In + '</td>' +
					 				'<td>' + field.Total_No_Of_Bolts + '</td>' +
					 				'<td>' + field.Weld_Type + '</td>' +
					 				'<td>' + field.Weld_Size_In + '</td>' +
					 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' 
					 			'</tr>';	
		   	 			tablePurlinsSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Hangers")
   	 			{
		   	 		tbleHangersSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 			  $(".divHangersSub").show();
		   	 			  RowNo = RowNo +1;
		   	 			  var datarow = '<tr>' +
						   	 			'<td>' + RowNo + '</td>' +
						 				'<td>' + field.Profile + '</td>' +
						 				'<td>' + field.Material_Grade + '</td>' +
						 				'<td>' + field.Quantity_Nos + '</td>' +
						 				'<td>' + field.Total_Length_Ft_In + '</td>' +
						 				'<td>' + field.Member_Weight_lbs + '</td>' +
						 				'<td>' + field.Member_Weight_Tons + '</td>' +
						 				'<td>' + field.Typical_Connection_Type + '</td>' +
						 				'<td>' + field.End_Plate_Thickness_In + '</td>' +
						 				'<td>' + field.Bolt_Grade + '</td>' +
						 				'<td>' + field.Bolt_Dia_In + '</td>' +
						 				'<td>' + field.Total_No_Of_Bolts + '</td>' +
						 				'<td>' + field.Weld_Type + '</td>' +
						 				'<td>' + field.Weld_Size_In + '</td>' +
						 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' 
						 			'</tr>';	
		   	 			tbleHangersSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Kicker Angle")
   	 			{
		   	 		tbleKickerAngleSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divKickerAngleSub").show();
		   	 			  RowNo = RowNo +1;
		   	 			  var datarow = '<tr>' +
						   	 			'<td>' + RowNo + '</td>' +
						 				'<td>' + field.Profile + '</td>' +
						 				'<td>' + field.Material_Grade + '</td>' +
						 				'<td>' + field.Quantity_Nos + '</td>' +
						 				'<td>' + field.Total_Length_Ft_In + '</td>' +
						 				'<td>' + field.Member_Weight_lbs + '</td>' +
						 				'<td>' + field.Member_Weight_Tons + '</td>' +
						 				'<td>' + field.Typical_Connection_Type_At_Each_End + '</td>' +
						 				'<td>' + field.Bolt_Grade + '</td>' +
						 				'<td>' + field.Bolt_Dia_In + '</td>' +
						 				'<td>' + field.Total_No_Of_Bolts + '</td>' +
						 				'<td>' + field.Weld_Type + '</td>' +
						 				'<td>' + field.Weld_Size_In + '</td>' +
						 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +					 				
						 				'<td>' + field.Gusset_Plate_Thickness_In + '</td>' +
						 				'<td>' + field.Gusset_Plate_Size_In_In + '</td>' +
					 			'</tr>';
		   	 			tbleKickerAngleSubDetails.row.add($(datarow)).draw(false);
		   	 		});
   	 			}
	   	 		
		   	 	else if(miscMember=="Ladders")
   	 			{
		   	 		tbleLadderSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divLadderSub").show();
		   	 			  RowNo = RowNo +1;
				   	 	  var datarow = '<tr>' +
					   	 			'<td>' + RowNo + '</td>' +
					 				'<td>' + field.Profile + '</td>' +
					 				'<td>' + field.Material_Grade + '</td>' +
					 				'<td>' + field.Quantity_Nos + '</td>' +
					 				'<td>' + field.Length_Of_Ladder_Ft_In + '</td>' +
					 				'<td>' + field.Member_Weight_lbs + '</td>' +
					 				'<td>' + field.Member_Weight_Tons + '</td>' +
					 				'<td>' + field.Ladder_Type + '</td>' +
					 				'<td>' + field.Rung_Dia_In + '</td>' +
					 				'<td>' + field.Total_Rung_Length_Ft_In + '</td>' +
					 			'</tr>';	
				   	 	tbleLadderSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Ledger Angle")
   	 			{
		   	 		tbleLedgerAngleSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divLedgerAngleSub").show();
		   	 			  RowNo = RowNo +1;
			   	 		  var datarow = '<tr>' +
					   	 			'<td>' + RowNo + '</td>' +
					 				'<td>' + field.Profile + '</td>' +
					 				'<td>' + field.Material_Grade + '</td>' +
					 				'<td>' + field.Quantity_Nos + '</td>' +
					 				'<td>' + field.Total_Length_Ft_In + '</td>' +
					 				'<td>' + field.Member_Weight_lbs + '</td>' +
					 				'<td>' + field.Member_Weight_Tons + '</td>' +
					 				'<td>' + field.Typical_Connection_Type_At_Each_End + '</td>' +
					 				'<td>' + field.Anchor_Rod_Type + '</td>' +
					 				'<td>' + field.Anchor_Rod_Dia_In + '</td>' +					 				
					 				'<td>' + field.Anchor_Rod_Length_Ft_In + '</td>' +
					 				'<td>' + field.Total_Anchor_Rod_Qty + '</td>' +
					 				'<td>' + field.Weld_Type + '</td>' +					 				
					 				'<td>' + field.Weld_Size_In + '</td>' +
					 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +
					 			'</tr>';	
			   	 		tbleLedgerAngleSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Lintel")
   	 			{
		   	 		tbleLintelsSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divLintelsSub").show();
		   	 			  RowNo = RowNo +1;
			   	 			var datarow = '<tr>' +
					   	 			'<td>' + RowNo + '</td>' +
					 				'<td>' + field.Profile + '</td>' +
					 				'<td>' + field.Material_Grade + '</td>' +
					 				'<td>' + field.Quantity_Nos + '</td>' +
					 				'<td>' + field.Total_Length_Ft_In + '</td>' +
					 				'<td>' + field.Member_Weight_lbs + '</td>' +
					 				'<td>' + field.Member_Weight_Tons + '</td>' +
					 				'<td>' + field.Typical_conneciton_Type + '</td>' +
					 				'<td>' + field.Weld_Type + '</td>' +
					 				'<td>' + field.Weld_Size_In + '</td>' +					 				
					 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +
					 			'</tr>';	
			   	 		tbleLintelsSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
	   	 		
		   	 	else if(miscMember=="Misc Pipe")
   	 			{
		   	 		tbleMiscPipesSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divMiscPipesSub").show();
		   	 			  RowNo = RowNo +1;
			   	 			var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Profile + '</td>' +
				 				'<td>' + field.Material_Grade + '</td>' +
				 				'<td>' + field.Quantity_Nos + '</td>' +
				 				'<td>' + field.Total_Length_Ft_In + '</td>' +
				 				'<td>' + field.Member_Weight_lbs + '</td>' +
				 				'<td>' + field.Member_Weight_Tons + '</td>' +
				 				'<td>' + field.Typical_Connection_Type + '</td>' +	
				 				'<td>' + field.Connecting_Member_Profile + '</td>' +
				 				'<td>' + field.Bolt_Grade + '</td>' +
				 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
				 				'<td>' + field.Total_No_Of_Bolts + '</td>' +				 				
				 				'<td>' + field.Wled_Type + '</td>' +
				 				'<td>' + field.Weld_Size_In + '</td>' +					 				
				 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +
				 			'</tr>';	
			   	 		tbleMiscPipesSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		//////////////need to work on this
		   	 	else if(miscMember=="Handrails")
   	 			{
		   	 		tbleHandRailsSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divHandRailsSub").show();
		   	 			  RowNo = RowNo +1;
				   	 	  var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Handrail_Profile + '</td>' +
				 				'<td>' + field.Handrail_Post_Profile + '</td>' +
				 				'<td>' + field.Material_Grade + '</td>' +
				 				'<td>' + field.Quantity_Nos + '</td>' +
				 				'<td>' + field.Handrail_Total_Length_Ft_In + '</td>' +
				 				'<td>' + field.Member_Weight_lbs + '</td>' +
				 				'<td>' + field.Member_Weight_Tons + '</td>' +
				 				'<td>' + field.Typical_Connection_Type + '</td>' +
				 				'<td>' + field.Connecting_Member_Profile + '</td>' +
				 				'<td>' + field.Bolt_Grade + '</td>' +
				 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
				 				'<td>' + field.Total_No_Of_Bolts + '</td>' +				 				
				 				'<td>' + field.Weld_Type + '</td>' +
				 				'<td>' + field.Weld_Size_In + '</td>' +					 				
				 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +
				 			'</tr>';	
				   	 	tbleHandRailsSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
		   	 	
		   	 	else if(miscMember=="Stair Rails")
   	 			{
		   	 		tbleStairRailsSubDetails.clear();
		   	 		
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divStairRailsSub").show();
			   	 		  RowNo = RowNo +1;
				   	 	  var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Stair_Rail_Profile + '</td>' +
				 				'<td>' + field.Stair_Rail_Post_Profile + '</td>' +
				 				'<td>' + field.Material_Grade + '</td>' +
				 				'<td>' + field.Quantity_Nos + '</td>' +
				 				'<td>' + field.Stair_Rail_Total_Length_Ft_In + '</td>' +
				 				'<td>' + field.Member_Weight_lbs + '</td>' +
				 				'<td>' + field.Member_Weight_Tons + '</td>' +
				 				'<td>' + field.Typical_Connection_Type + '</td>' +	
				 				'<td>' + field.Connecting_Member_Profile + '</td>' +
				 				'<td>' + field.Bolt_Grade + '</td>' +
				 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
				 				'<td>' + field.Total_No_Of_Bolts + '</td>' +				 				
				 				'<td>' + field.Weld_Type + '</td>' +
				 				'<td>' + field.Weld_Size_In + '</td>' +					 				
				 				'<td>' + convMMtoFt(field.Total_Weld_Length_MM) + '</td>' +
				 			'</tr>';	
				   	 	  
				   	 	tbleStairRailsSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Sag Rods")
   	 			{
		   	 		tbleSagRodsSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divSagRodsSub").show();
			   	 		  RowNo = RowNo +1;
				   	 	  var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Dia_In + '</td>' +
				 				'<td>' + field.Material_Grade + '</td>' +
				 				'<td>' + field.Quantity_Nos + '</td>' +
				 				'<td>' + field.Total_Length_Ft_In + '</td>' +
				 				'<td>' + field.Member_Weight_lbs + '</td>' +
				 				'<td>' + field.Member_Weight_Tons + '</td>' +
				 			'</tr>';
		   	 			
				   	 	tbleSagRodsSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Monorails")
   	 			{
		   	 		tableMonorailsSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divMonorailsSub").show();
		   	 		      RowNo = RowNo +1;
			   	 		  var datarow = '<tr>' +
			   	 			'<td>' + RowNo + '</td>' +
			 				'<td>' + field.Profile + '</td>' +
			 				'<td>' + field.Material_Grade + '</td>' +			 				
			 				'<td>' + field.Quantity_Nos + '</td>' +
			 				'<td>' + field.Total_Length_Ft_In + '</td>' +
			 				'<td>' + field.Member_Weight_lbs + '</td>' +
			 				'<td>' + field.Member_Weight_Tons + '</td>' +
			 				'<td>' + field.Typical_Connection_Type + '</td>' +
			 				'<td>' + field.Monorail_Type + '</td>' +
			 				'<td>' + field.Post_Profile + '</td>' +
			 				'<td>' + field.Total_Post_Length_Ft_In + '</td>' +					 				
			 				'<td>' + field.End_Plate_Thickness_In + '</td>' +				 				
			 				'<td>' + field.Bolt_Grade + '</td>' +
			 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
			 				'<td>' + field.Total_No_Of_Bolts + '</td>' +			 				
			 				'<td>' + field.Weld_Type + '</td>' +					 				
			 				'<td>' + field.Weld_Size_In + '</td>' +			 				
			 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +	
			 			'</tr>';	
			   	 		tableMonorailsSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
		   	 	else if(miscMember=="Girts")
   	 			{
		   	 		tableGirtsSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		     $(".divGirtsSub").show();
		   	 			  RowNo = RowNo +1;
			   	 			var datarow = '<tr>' +
			   	 			'<td>' + RowNo + '</td>' +
			 				'<td>' + field.Profile + '</td>' +
			 				'<td>' + field.Material_Grade + '</td>' +			 				
			 				'<td>' + field.Quantity_Nos + '</td>' +
			 				'<td>' + field.Total_Length_Ft_In + '</td>' +
			 				'<td>' + field.Member_Weight_lbs + '</td>' +
			 				'<td>' + field.Member_Weight_Tons + '</td>' +
			 				'<td>' + field.Weld_Type_Between_Members + '</td>' +
			 				'<td>' + field.Weld_Size_Between_Members_In + '</td>' +
			 				'<td>' + field.Total_Weld_Length_Between_Members_Ft_In + '</td>' +					 				
			 				'<td>' + field.Typical_Connection_Type + '</td>' +	 				
			 				'<td>' + field.Connecting_Member_Profile + '</td>' +
			 				'<td>' + field.Bolt_Grade + '</td>' +					 				
			 				'<td>' + field.Bolt_Dia_In + '</td>' +			 				
			 				'<td>' + field.Total_No_Of_Bolts + '</td>' +					 				
			 				'<td>' + field.Weld_Type + '</td>' +			 				
			 				'<td>' + field.Weld_Size_In + '</td>' +	
			 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +	
			 			'</tr>';
			   	 		tableGirtsSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
		   	 	else if(miscMember=="Misc Plate")
   	 			{
		   	 		tbleMiscPlateSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divMiscPlateSub").show();
		   	 			  RowNo = RowNo +1;
			   	 		  var datarow = '<tr>' +
			   	 			'<td>' + RowNo + '</td>' +
			 				'<td>' + field.Plate_Profile + '</td>' +
			 				'<td>' + field.Material_Grade + '</td>' +			 				
			 				'<td>' + field.Quantity_Nos + '</td>' +
			 				'<td>' + field.Total_Plate_Length_Ft_In + '</td>' +
			 				'<td>' + field.Member_Weight_lbs + '</td>' +
			 				'<td>' + field.Member_Weight_Tons + '</td>' +
			 				'<td>' + field.Typical_Connection_Type_At_Each_End + '</td>' +
			 				'<td>' + field.Bolt_Grade + '</td>' +
			 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
			 				'<td>' + field.Total_No_Of_Bolts + '</td>' +				 				
			 				'<td>' + field.Weld_Type + '</td>' +
			 				'<td>' + field.Weld_Size_In + '</td>' +					 				
			 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +		 				
			 			'</tr>';
			   	 		tbleMiscPlateSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 		
		   	 	else if(miscMember=="Rafter Beam")
   	 			{
		   	 		tableRafterBeamSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divRafterBeamSub").show();
		   	 			  RowNo = RowNo +1;
			   	 		  var datarow = '<tr>' +
			   	 			'<td>' + RowNo + '</td>' +
			 				'<td>' + field.Profile + '</td>' +
			 				'<td>' + field.Material_Grade + '</td>' +			 				
			 				'<td>' + field.Quantity_Nos + '</td>' +
			 				'<td>' + field.Total_Length_Ft_In + '</td>' +
			 				'<td>' + field.Member_Weight_Lbs + '</td>' +
			 				'<td>' + field.Member_Weight_Tons + '</td>' +
			 				'<td>' + field.Typical_Connection_Type + '</td>' +	 
			 				'<td>' + field.Connecting_Member_Profile + '</td>' +
			 				'<td>' + field.Bolt_Grade + '</td>' +
			 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
			 				'<td>' + field.Total_No_Of_Bolts + '</td>' +				 				
			 				'<td>' + field.Weld_Type + '</td>' +
			 				'<td>' + field.Weld_Size_In + '</td>' +					 				
			 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +		 				
			 			'</tr>';
		   	 			
			   	 		tableRafterBeamSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
		   	 	else if(miscMember=="Stairs")
   	 			{
		   	 		tbleStairsSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divStairsSub").show();
		   	 			  RowNo = RowNo +1;
				   	 	  var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Profile + '</td>' +
				 				'<td>' + field.Material_Grade + '</td>' +	
				 				'<td>' + field.No_Of_Flights + '</td>' +	
				 				'<td>' + field.Quantity_Nos + '</td>' +
				 				'<td>' + field.Stair_Total_Length_Ft_In + '</td>' +
				 				'<td>' + field.Member_Weight_Lbs + '</td>' +
				 				'<td>' + field.Member_Weight_Tons + '</td>' +
				 				'<td>' + field.Typical_Connection_Type + '</td>' +
				 				'<td>' + field.Connecting_Member_Profile + '</td>' +
				 				'<td>' + field.Bolt_Grade + '</td>' +
				 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
				 				'<td>' + field.Total_No_Of_Bolts + '</td>' +				 				
				 				'<td>' + field.Weld_Type + '</td>' +
				 				'<td>' + field.Weld_Size_In + '</td>' +					 				
				 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +		 				
				 			'</tr>';
				   	 	tbleStairsSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 	
		   	 	else if(miscMember=="Misc Pipe Support")
   	 			{
		   	 		tbleMiscPipesSupportSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divMiscPipeSuppSub").show();
		   	 			  RowNo = RowNo +1;
			   	 		  var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Horizontal_Member_Profile + '</td>' +
				 				'<td>' + field.Vertical_Member_Profile + '</td>' +
				 				'<td>' + field.Horizontal_Member_Material_Grade + '</td>' +	
				 				'<td>' + field.Vertical_Member_Material_Grade + '</td>' +	
				 				'<td>' + field.Horizontal_Member_Length_Ft_In + '</td>' +	
				 				'<td>' + field.Vertical_Member_Length_Ft_In + '</td>' +
				 				'<td>' + field.Total_Pipe_Support_Quantity + '</td>' +
				 				'<td>' + field.Members_Weight_lbs + '</td>' +
				 				'<td>' + field.Members_Weight_Tons + '</td>' +
				 				'<td>' + field.Typical_Connection_Type + '</td>' +
				 				'<td>' + field.Bolt_Grade + '</td>' +
				 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
				 				'<td>' + field.Total_No_Of_Bolt_Rows + '</td>' +				 				
				 				'<td>' + field.Weld_Type + '</td>' +
				 				'<td>' + field.WeldSize_EffectiveThroat_In + '</td>' +					 				
				 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +					 				
				 			'</tr>';			   	 		  
			   	 		tbleMiscPipesSupportSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
		   	 	else if(miscMember=="RTU")
   	 			{
		   	 		tableRTUSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divRtuSub").show();
		   	 			  RowNo = RowNo +1;
		   	 			  var datarow = '<tr>' +
				   	 			'<td>' + RowNo + '</td>' +
				 				'<td>' + field.Horizontal_Member_Profile + '</td>' +
				 				'<td>' + field.Vertical_Member_Profile + '</td>' +
				 				'<td>' + field.Horizontal_Member_Material_Grade + '</td>' +	
				 				'<td>' + field.Vertical_Member_Material_Grade + '</td>' +	
				 				'<td>' + field.Horizontal_Member_Length_Ft_In + '</td>' +	
				 				'<td>' + field.Vertica_Member_Length_Ft_In + '</td>' +
				 				'<td>' + field.Total_RTU_Frames_Quantity + '</td>' +
				 				'<td>' + field.Members_Weight_lbs + '</td>' +
				 				'<td>' + field.Members_Weight_Tons + '</td>' +
				 				'<td>' + field.Typical_Connection_Type + '</td>' +
				 				'<td>' + field.Bolt_Grade + '</td>' +
				 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
				 				'<td>' + field.Total_No_Of_Bolt_Rows + '</td>' +				 				
				 				'<td>' + field.Weld_Type + '</td>' +
				 				'<td>' + field.WeldSize_EffectiveThroatIn + '</td>' +					 				
				 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +	
				 				/*'<td>' + field.Reference_Drawing + '</td>' +	*/
				 			'</tr>';
		   	 			tableRTUSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
	   	 	
			   	else if(miscMember=="Screen Wall Frame")
   	 			{
			   		tableScreenWallFramesSubDetails.clear();
		   	 		$.each(dataObj, function(i, field)				  
		   	 		{
		   	 		      $(".divScreenWallSub").show();
		   	 			  RowNo = RowNo +1;
			   	 		  var datarow = '<tr>' +
			   	 			'<td>' + RowNo + '</td>' +
			 				'<td>' + field.Horizontal_Member_Profile + '</td>' +
			 				'<td>' + field.Vertical_Member_Profile + '</td>' +
			 				'<td>' + field.Horizontal_Member_Material_Grade + '</td>' +	
			 				'<td>' + field.Vertical_Member_Material_Grade + '</td>' +	
			 				'<td>' + field.Horizontal_Member_Length_Ft_In + '</td>' +
			 				'<td>' + field.Vertical_Member_Length_Ft_In + '</td>' +
			 				'<td>' + field.Total_Screen_Wall_Frames_Quantity + '</td>' +			 				
			 				'<td>' + field.Members_Weight_Lbs + '</td>' +
			 				'<td>' + field.Members_Weight_Tons + '</td>' +
			 				'<td>' + field.Typical_Connection_Type + '</td>' +
			 				'<td>' + field.Bolt_Grade + '</td>' +
			 				'<td>' + field.Bolt_Dia_In + '</td>' +					 				
			 				'<td>' + field.Total_No_Of_Bolt_Rows + '</td>' +				 				
			 				'<td>' + field.Weld_Type + '</td>' +
			 				'<td>' + field.WeldSize_EffectiveThroatIn + '</td>' +					 				
			 				'<td>' + field.Total_Weld_Length_Ft_In + '</td>' +	
			 				/*'<td>' + field.Reference_Drawing + '</td>' +	*/
			 			'</tr>';
			   	 		tableScreenWallFramesSubDetails.row.add($(datarow)).draw(false);
		   	 		 });
   	 			}
		   	 	    
		   	 	},
				error: function (error) {
	 	        	  if(error.status == 401){
	 	        		  window.location.href = 'logout';
	 	        	  }
	 	          }
		 });
		
	}
	
	
