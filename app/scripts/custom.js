function customShowTab(e){
    e.preventDefault();
    $(this).tab('show');
    $("#surveyByFilter").text($(this).text());
}

var navlinks = $("#ctr_nav li"),
    formlinks = $("#form-dropdown a");

navlinks.click(function(e){
    navlinks.removeClass("active");
    $(this).addClass("active");
    var navhref = $(this).children("a").attr("href");
    //Ensure active state in mobile/tab,desktop
    $('li a[href="'+navhref +'"]').parent().addClass("active");
});

formlinks.click(function(e){

    e.preventDefault();
});