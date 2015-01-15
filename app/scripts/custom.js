function customShowTab(e){
    e.preventDefault();
    $(this).tab('show');
    $("#surveyByFilter").text($(this).text());
}

var navlinks = $("#ctr_nav li"),
    droplink = $(".dropdown-toggle"),
    formlinks = $("#form-dropdown .dropdown-menu li a");

navlinks.click(function(e){
    navlinks.removeClass("active");
    $(this).addClass("active");
    var navhref = $(this).children("a").attr("href");
    //Ensure active state in mobile/tab,desktop
    $('li a[href="'+navhref +'"]').parent().addClass("active");
});

droplink.click(function(e){
    e.preventDefault();
});

formlinks.click(function(){
    var formid = $(this).text();
    var formpk = $(this).text();
    
    $(this).addClass('.current-droplink');
    $(".current-form, .current-form-header").text(formid);
});