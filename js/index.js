$(document).ready(function() {

    $(".link").click(function(event) {
        showPage(event.target.id);
    });

    function showPage(page) {
        var pageToShow = $("." + page);
        var pagesToHide = $(".content-container > div").not(pageToShow);

        $(pagesToHide).fadeOut(800, function() {
            $(this).addClass("hidden").removeClass("visible");

            $(pageToShow).removeClass("hidden")
                .addClass("visible")
                .delay(800)
                .fadeIn(800);
            if (page == "portfolio") {
                $(".contact-menu").addClass("contact-menu-moved");
            } else {
                $(".contact-menu").removeClass("contact-menu-moved");
            }
        });
    }

});
