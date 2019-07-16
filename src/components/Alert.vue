<template>
    <div class="alert" v-bind:class="getAlertStatus" v-if="getAlertMessage">
        <div class="container">
            <span>
               {{getAlertMessage}} 
            </span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: "Alert",
        props: {
            status: String,
            message: String
        },
        computed: {
            ...mapGetters(['getAlertStatus', 'getAlertMessage'])
        }
    }
</script>

<style lang="scss" scoped>
    .alert {
        border: 2px black dotted;
        width: 30%;
        padding: 10px;
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: 22px;
        font-weight: bold;

        &.alert {
            &-success {
                border-color: green;
                background-color: lighten(green, 50%);
                color: green;
            }
            &-error {
                border-color: crimson;
                background-color: lighten(crimson, 50%);
                color: crimson;
            }
        }
    }
</style>