function customShowTab(e){
    e.preventDefault();
    $(this).tab('show');
}

var navlinks=$("#ctr_nav li");

navlinks.click(function(e){
	navlinks.removeClass("active");
	$(this).addClass("active");
});
