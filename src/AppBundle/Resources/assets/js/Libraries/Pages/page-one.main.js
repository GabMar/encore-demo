'use strict';

var Vue              = require('vue/dist/vue.common');
var PageOneComponent = require('../../Components/Pages/PageOne').default;

new Vue({
    el: '.page-one-main',
    components: {
        'first-component': PageOneComponent,
    },
});