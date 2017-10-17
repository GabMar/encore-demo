<template>
    <div>
        <input type="checkbox" id="andrea" value="Andrea" v-model="checkedNames">
        <label for="andrea">Andrea</label>
        <input type="checkbox" id="augusto" value="Augusto" v-model="checkedNames">
        <label for="augusto">Augusto</label>
        <input type="checkbox" id="stefano" value="Stefano" v-model="checkedNames">
        <label for="stefano">Stefano</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
    </div>
</template>

<script>
'use strict';

module.exports = {
    data: function () {
        return {
            checkedNames: [],
        };
    },
};
</script>
