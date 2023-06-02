$(function () {
    var profile = {
        'dm_name': 'call',
        'idf_list': [callt],
        'odf_list': [],
    }
    
    function callt(){
        // return 0;
    }

    function ida_init () {
        // $('font')[0].innerText = profile.d_name;
    }

    var ida = {
        'ida_init': ida_init,
    };

    dai(profile, ida);
});
