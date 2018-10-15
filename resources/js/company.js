$('.dropify').dropify();
var crbheight = $(".conLeftBlk").height();
$(".conRightBlk").css("height", crbheight+'px');
$("#addCompany").on("click", function(){
	$(".conAddCompany").hide();
	$(".conRightBlk").removeClass("col-lg-8 col-md-8");
	$(".conRightBlk").addClass("col-lg-12 col-md-12");
	$(".cbbAccordion, .cbbNodata, #addAddressBtn").show();  
	$(".chbRightImg").show().css("display","inline-block");
});


$("#editCompanyInfo").on("click", function(){
	
	/*alert("appending : "+$('#companyName').text())
	alert("appending : "+$('#companyType').text())
	alert("appending : "+$('#CompanyURL').text())
	alert("appending : "+$('#NumberofEmployees').text())*/
	
	var companyName = $('#companyName').text();
	var companyType = $('#companyType').text();
	var CompanyURL = $('#CompanyURL').text();
	var NumberofEmployees = $('#NumberofEmployees').text();
	
	 $('#txtCompanyName').val(companyName);
	 $("#companyTypeDDN option:contains(" + companyType + ")").attr('selected', 'selected');
	 $("#companyTypeDDN option").each(function() {
		  if($(this).text() == companyType) {
		    $(this).attr('selected', 'selected');            
		  }                        
		});
	 $('#txtCompanyWebsiteAddress').val(CompanyURL);
	 $("#numberOfEmployeesDDN option").each(function() {
		  if($(this).text() == NumberofEmployees) {
		    $(this).attr('selected', 'selected');            
		  }                        
		});
	
	 
	$(".conAddCompany, .currentLogoBlk, .clb-close-com").show();
	$(".conAddAddress").hide();
	$(".conRightBlk").removeClass("col-lg-12 col-md-12");
	$(".conRightBlk").addClass("col-lg-8 col-md-8");
});

$('#addrs').on('click', '#addAddressBtn', function() {
/*$("#addAddressBtn").on("click", function(){  */ 
	$("#addAddressBtn, .conAddCompany").hide();
	$(".conAddAddress, .clb-close-add").show();
	$(".conRightBlk").removeClass("col-lg-12 col-md-12");
	$(".conRightBlk").addClass("col-lg-8 col-md-8");
});

//$("#callAddressForm").on("click", function(){   
$('#addrs').on('click', '#callAddressForm', function() {
	$("#addAddressBtn, .conAddCompany").hide();
	$(".conAddAddress, .clb-close-add").show();
	$(".conRightBlk").removeClass("col-lg-12 col-md-12");
	$(".conRightBlk").addClass("col-lg-8 col-md-8");
});

$("#cancelAddress").on("click", function(){ 
/*$('#addrs').on('click', '#cancelAddress', function() {*/
/*$('#cancelAddress').on('click', '#callAddressForm', function() {*/
	$(".conAddAddress").hide();
	$("#addAddressBtn").show();
	$(".conRightBlk").removeClass("col-lg-8 col-md-8");
	$(".conRightBlk").addClass("col-lg-12 col-md-12");
});







$(".closeLogo").on("click", function() {
	$(".currentLogoBlk").hide();
});


$(".clb-close-com").on("click", function(){
	$(".conAddCompany").hide();
	$(".cbbNodata, #addAddressBtn").show();  
	$(".conRightBlk").removeClass("col-lg-8 col-md-8");
	$(".conRightBlk").addClass("col-lg-12 col-md-12");
});
$(".clb-close-add").on("click", function(){
	$(".conAddAddress").hide();
	$("#addAddressBtn").show();
	$(".conRightBlk").removeClass("col-lg-8 col-md-8");
	$(".conRightBlk").addClass("col-lg-12 col-md-12");
});

/*$(".deleteAddressInfo").on("click", function(){
	$(".addressInfoBlk").hide();
})
*/

$('#addrs').on('click', '.editAddressInfo', function() {
/*$(".editAddressInfo").on("click", function(){*/
	
	var addressid=$(this).parent().siblings('.addressid').val();
	var addressType=$(this).parent().siblings('.addresstype').val();
	var street=$(this).parent().siblings('.street').val();
	var city=$(this).parent().siblings('.city').val();
	var state=$(this).parent().siblings('.state').val();
	var zip=$(this).parent().siblings('.zip').val();
	var country=$(this).parent().siblings('.country').val();
	var phone=$(this).parent().siblings('.phone').val();
	
	$('#txtAddressID').val(addressid);
	$("#AdressTypeDDN option:contains(" + addressType + ")").attr('selected', 'selected');
	$('#addAddrStreet').val(street);
	$('#addAddrCity').val(city);
	$('#USAStatesDN').val(state);
	$('#addAddrZip').val(zip);
	$('#addAddrCountry').val(country);
	$('#addAddrPhone').val(phone);
	$('#oldAddAddrPhone').val(phone);
	
	
	 
	$(".conAddCompany").hide();
	$(".conAddAddress").show();
	$(".conRightBlk").removeClass("col-lg-12 col-md-12");
	$(".conRightBlk").addClass("col-lg-8 col-md-8");
})