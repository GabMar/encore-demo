'use strict';

var Vue              = require('vue/dist/vue.common');
var PageTwoComponent = require('../../Components/Pages/PageTwo').default;

new Vue({
    el: '.page-two-main',
    components: {
        'second-component': PageTwoComponent,
    },
});