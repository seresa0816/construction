$(document).ready(function(){

	// Accordian
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
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

    //Screen Resolution
    function resize() {
        var screenheight = window.innerHeight;
        var offset = document.getElementById('header').offsetHeight;
        total = (Number(screenheight) - Number(offset) );
        document.getElementById("add-new-value").style.height = (total + "px" );
    }
    resize();
    window.onresize = function() {
        resize();
    };

});