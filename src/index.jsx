import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RouteConfig from 'components/Router';

injectTapEventPlugin();

(function () {
    let cnzz_protocol = ('https:' == document.location.protocol) ? 'https://' : 'http://';
    let cnzz_id = 1257817008;

    document.write(unescape('%3Cspan id="cnzz_stat_icon_' + cnzz_id + '"%3E%3C/span%3E%3Cscript src="' + cnzz_protocol + 's11.cnzz.com/z_stat.php%3Fid%3D' + cnzz_id + '%26show%3Dpic"%3E%3C/script%3E'));
})();

render(
    <RouteConfig />, document.getElementById('container'));