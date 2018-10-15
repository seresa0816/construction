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