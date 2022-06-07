define([
    'jquery',
    'jquery-ui-modules/dialog'
], function ($) {
    'use strict';

    return function (config, element) {
        const minicart = $(element);

        minicart.on('contentLoading', function () {
            minicart.on('contentUpdated', function () {
                minicart.find('[data-role="dropdownDialog"]').dropdownDialog("open");
            });
        });
    };
});
