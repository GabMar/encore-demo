<template>
    <div>
        <input v-model="testMessage" placeholder="message to revert">
        <button v-on:click="reverseMessage">Reverse Message</button>
        <p class="mt-3">The reverse message is: {{ message }}</p>
    </div>
</template>

<script>
'use strict';

module.exports = {
    data: function () {
        return {
            testMessage: '',
            message: '',
        };
    },
    methods: {
        reverseMessage: function () {
            this.message = this.testMessage.split('').reverse().join('');
        },
    },
};
</script>
