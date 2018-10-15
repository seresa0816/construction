$(document).ready(function(){

	$("#miscSubmenu41").show();
	$("#miscSubmenu81").show();

    $("#ConnAvail").click(function(){
        $("#miscSubmenu41").toggle(50);

    });
    
    $("#ConnDesign").click(function(){
        
        $("#miscSubmenu42").toggle(50);
    });

    $('.bluemenu1').mouseover(function() {
        $('#miscSubmenu1').show();
        $(".bluemenu1").css("background-color","#2759a3");
    });
    $('.bluemenu1').mouseleave(function(){
        $('#miscSubmenu1').hide();
        $(".bluemenu1").css("background-color","#0078d7");
    });
    $('.bluemenu2').mouseover(function() {
        $('#miscSubmenu2').show();
        $(".bluemenu2").css("background-color","#2759a3");
    });
    $('.bluemenu2').mouseleave(function(){
        $('#miscSubmenu2').hide();
        $(".bluemenu2").css("background-color","#0078d7");
    });
    $('.bluemenu3').mouseover(function() {
        $('#miscSubmenu3').show();
        $(".bluemenu3").css("background-color","#2759a3");
    });
    $('.bluemenu3').mouseleave(function(){
        $('#miscSubmenu3').hide();
        $(".bluemenu3").css("background-color","#0078d7");
    });
    $('.bluemenu4').mouseover(function() {
        $('#miscSubmenu4').show();
        $(".bluemenu4").css("background-color","#2759a3");
    });
    $('.bluemenu4').mouseleave(function(){
        $('#miscSubmenu4').hide();
        $(".bluemenu4").css("background-color","#0078d7");
    });
	$('.msm42').on('click',function(){
		$('#miscSubmenu41').hide();
		$('#miscSubmenu42').show();
	});
	$('.msm41').on('click',function(){
		$('#miscSubmenu42').hide();
		$('#miscSubmenu41').show();
	});
    $('.bluemenu5').mouseover(function() {
        $('#miscSubmenu5').show();
        $(".bluemenu5").css("background-color","#2759a3");
    });
    $('.bluemenu5').mouseleave(function(){
        $('#miscSubmenu5').hide();
        $(".bluemenu5").css("background-color","#0078d7");
    });
    $('.bluemenu6').mouseover(function() {
        $('#miscSubmenu6').show();
        $(".bluemenu6").css("background-color","#2759a3");
    });
    $('.bluemenu6').mouseleave(function(){
        $('#miscSubmenu6').hide();
        $(".bluemenu6").css("background-color","#0078d7");
    });
    $('.bluemenu7').mouseover(function() {
        $('#miscSubmenu7').show();
        $(".bluemenu7").css("background-color","#2759a3");
    });
    $('.bluemenu7').mouseleave(function(){
        $('#miscSubmenu7').hide();
        $(".bluemenu7").css("background-color","#0078d7");
    });
	$('.bluemenu8').mouseover(function() {
        $('#miscSubmenu8').show();
        $(".bluemenu8").css("background-color","#2759a3");
    });
    $('.bluemenu8').mouseleave(function(){
        $('#miscSubmenu8').hide();
        $(".bluemenu8").css("background-color","#0078d7");
    });
	
	$('.msm82').on('click',function(){
		$('#miscSubmenu81').hide();
		$('#miscSubmenu82').show();
	});
	$('.msm81').on('click',function(){
		$('#miscSubmenu82').hide();
		$('#miscSubmenu81').show();
	});

});