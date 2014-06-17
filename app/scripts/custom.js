(function(){

    console.log('here');
    $(document).ready(function(){
        console.log('here again');
        k = $('#summarytabs');
        $('#summarytabs a').click(function (e) {
            console.log('here clicked');
            e.preventDefault();
            $(this).tab('show');
        });
    });

})();
