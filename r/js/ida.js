$(function () {
    csmapi.set_endpoint ('https://6.iottalk.tw');
    var profile = {
        'dm_name': 'call_view',
        'idf_list': [],
        'odf_list': [id_score],
    }
    
    var r = 255 ;
    var g = 0;
    var b = 255;
    var lum = 100;

    function id_score (data) {

    }

    function ida_init () {

    }

    var ida = {
        'ida_init': ida_init,
    };

    dai(profile, ida);
});
