$(function () {
    var profile = {
        'dm_name': 'call',
        'idf_list': [],
        'odf_list': [callr],
    }
    

    
    function callr (data) {
        return 0;
    }

    function ida_init () {

    }

    var ida = {
        'ida_init': ida_init,
    };

    dai(profile, ida);
});
