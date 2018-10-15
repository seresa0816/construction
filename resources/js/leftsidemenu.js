$(document).ready(function(){


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
            // $(this).closest('.panel-title').children('.upload-files').css("display","none");
            $(this).closest('.panel-title').css("border-left","none");
            // $(this).siblings().show();
        } else {
            // $(this).siblings().hide();
            // $(this).closest('.panel-title').children('.upload-files').css("display","block");
            $(this).closest('.panel-title').css("border-left","5px solid #1e88e5");
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