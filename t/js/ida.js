$(function () {
    csmapi.set_endpoint ('https://6.iottalk.tw');
    var profile = {
        'dm_name': 'call',
        'idf_list': [call_t],
        'odf_list': [],
    }
    
    function call_t(){
        return 0;
    }

    function ida_init () {
        // $('font')[0].innerText = profile.d_name;
    }

    var ida = {
        'ida_init': ida_init,
    };

    dai(profile, ida);
});
