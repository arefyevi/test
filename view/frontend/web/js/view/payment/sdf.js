define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'sdf',
                component: 'Illia_Test/js/view/payment/method-renderer/sdf-method'
            }
        );
        return Component.extend({});
    }
);