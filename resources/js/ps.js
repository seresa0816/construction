$(document).ready(function(){

	//Checkbox Selection
	$("#checkAll").click(function() {
        $(this).closest("table").find("td input:checkbox").prop("checked", this.checked);
    });

    //Multi select dropdown
    $(".chosen-select").chosen({
        no_results_text: "Oops, nothing found!"   
    });

    //Toggle Right edit bar
    $(".action-icons .edit").on('click', function(){
        $(".right").show();
        $(".left").hide();
        $(".memtype-rightedit").show();
		$(".editmemtype .rightFloat").show();
    });
    $(".slide-rightbar.right").on('click', function(){
        $(".right").hide();
        $(".left").show();
        $(".editmemtype .rightFloat").hide();
    });
    $(".slide-rightbar.left").on('click', function(){
        $(".right").show();
        $(".left").hide();
        $(".editmemtype .rightFloat").show();
    });
    $(".action-icons .add").on('click', function(){
        $(".right").show();
        $(".left").hide();
        $(".memtype-rightedit").show();
        $(".editmemtype .rightFloat").show();
    });

    //Add Value
    $(".anv-btn").on('click', function(){
        $(".memtype-rightedit").show();
        $(".right").hide();
        $(".left").hide();
    });
    $(".addTR").on('click', function(){
        $(".add-new-value").hide();
        $(".memtype-table").show();
        $(".left").show();
        $(".editmemtype .rightFloat").hide();
    });

    //Bridge Angle
    $(function(){
        $("#BAConnectiontype").change( function(){
            if($('#BAConnectiontype').val()=='connectionTypeFW'){
                 $(".fieldsFW").show();
                 $(".fieldsFB").hide();
                
            }
            else if($('#BAConnectiontype').val()=='connectionTypeFB'){
                $(".fieldsFW").hide();
                $(".fieldsFB").show();
            }
            
        });
    });
    $(function(){
        $("#FByesno").change( function(){
            if($('#FByesno').val()=='fbNo'){
                 $(".visibleBolts").hide();
                
            }
            else if($('#FByesno').val()=='fbYes'){
                $(".visibleBolts").show();
            }
            
        });
    }); 
    $(function(){
        $("#FWyesno").change( function(){
            if($('#FWyesno').val()=='fwNo'){
                 $(".visibleWeld").hide();
                
            }
            else if($('#FWyesno').val()=='fwYes'){
                $(".visibleWeld").show();
            }
            
        });
    });

    //Carrier Girts
     $(function(){
        $("#CGConnectiontype").change(function(){
            if($('#CGConnectiontype').val()=='CGCA'){
                 $(".fieldsFW").show();
                 $(".fieldsFB").hide();
                
            }
            else if($('#CGConnectiontype').val()=='CGSP'){
                $(".fieldsFW").hide();
                $(".fieldsFB").show();
            }
            
        });
    });

    //Edge Angle
     $(function(){
        $("#EAConnectiontype").change(function(){
            if($('#EAConnectiontype').val()=='EAFB'){
                 $(".fieldsFW").show();
                 $(".fieldsFB").hide();
                
            }
            else if($('#EAConnectiontype').val()=='EAFW'){
                $(".fieldsFW").hide();
                $(".fieldsFB").show();
            }
            
        });
    });

    //Embed Plate
     $(function(){
        $("#EPConnectiontype").change(function(){
            if($('#EPConnectiontype').val()=='EPS'){
                 $(".fieldsFW").show();
                 $(".fieldsFB").hide();
                
            }
            else if($('#EPConnectiontype').val()=='EPA'){
                $(".fieldsFW").hide();
                $(".fieldsFB").show();
            }
            
        });
    });

    //Girt
    $(function(){
        $("#GirtConnectiontype").change(function(){
            if($('#GirtConnectiontype').val()=='GWT'){
                 $(".fieldsFW").show();
                 $(".fieldsFB").hide();
                
            }
            else if($('#GirtConnectiontype').val()=='GAngle'){
                $(".fieldsFW").hide();
                $(".fieldsFB").show();
            }
            
        });
    });

    //Hangers
    $(function(){
        $("#HangConnectiontype").change(function(){
            if($('#HangConnectiontype').val()=='HCM'){
                 $(".fieldsFW").show();
                 $(".fieldsFB").hide();
                
            }
            else if($('#HangConnectiontype').val()=='HDW'){
                $(".fieldsFW").hide();
                $(".fieldsFB").show();
            }
            
        });
    });

    //Table Selection
    $(".cci-select").on('click',function(){
        $("table tbody").find('input[name="selectAll"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").css({
                    "background": "#f5f9fd",
                    "color": "#414146"
                });
            }
            else {
                $(this).parents("tr").css({
                    "background": "#ffffff",
                    "color": ""
                });
            }
        });
    });
    $(".cci-all").on('click',function(){
        $("table tbody").find('input[name="selectAll"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").css({
                    "background": "#f5f9fd",
                    "color": "#414146"
                });
            }
            else {
                $(this).parents("tr").css({
                    "background": "#ffffff",
                    "color": ""
                });
            }
        });
    });

    //Cancel Right edit bar
    $(".cancelRFB").on('click', function(){
        $(".memtype-rightedit").hide();
    });

    //Misc Sidebar
    $("[data-collapse-group='miscSide']").click(function () {
        var $this = $(this);
        $("[data-collapse-group='miscSide']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("show").addClass('collapse');
        });
    });
    $("[data-collapse-group='miscSideMat']").click(function () {
        var $this = $(this);
        $("[data-collapse-group='miscSideMat']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("show").addClass('collapse');
        });
    });
    $("[data-collapse-group='miscSideMatSub']").click(function () {
        var $this = $(this);
        $("[data-collapse-group='miscSideMatSub']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("show").addClass('collapse');
        });
    });
    $("[data-collapse-group='miscSideMatSub2']").click(function () {
        var $this = $(this);
        $("[data-collapse-group='miscSideMatSub2']:not([data-target='" + $this.data("target") + "'])").each(function () {
            $($(this).data("target")).removeClass("show").addClass('collapse');
        });
    });
    $("#misc-accordion li").on('click', function(){
        $("#misc-accordion li").removeClass("active");
        $(this).addClass("active");
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.outer-collapse')) {
            $('.outer-collapse').removeClass('show');        
        }
    });

    $("#BDaccordion .panel-title a").on('click',function(){
        if($(this).attr("aria-expanded") === "true") {
            $(this).closest('.panel-title').css("border-left","none");
        } else {
            $(this).closest('.panel-title').css("border-left","5px solid #1e88e5");
        }
    });

    $(".new-inclusion a").on('click', function(){
        $(this).toggleClass("active");
    });



    

    //Screen Resolution
    function resize() {
        var screenheight = window.innerHeight;
        var offset = document.getElementById('header').offsetHeight;
        total = (Number(screenheight) - Number(offset) );
    }
    resize();
    window.onresize = function() {
        resize();
    };

});