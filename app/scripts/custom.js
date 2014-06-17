function customShowTab(e){
    e.preventDefault();
    $(this).tab('show');
    
    var selectedTxt =  $(this).text();
	$("#surveyByFilter").text(selectedTxt);
}

var navlinks=$("#ctr_nav li");

navlinks.click(function(e){
	navlinks.removeClass("active");
	$(this).addClass("active");
	var navhref = $(this).children("a").attr("href");
	//Ensure active state in mobile/tab,desktop
	$('li a[href="'+navhref +'"]').parent().addClass("active");
});
