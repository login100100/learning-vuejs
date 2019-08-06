<template>
    <div class="alert" v-bind:class="status" v-if="message">
        <div class="container">
            <span>
               {{ message }} 
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Alert extends Vue {
    // AlertModule is static module, values get accessed old way method
    get message() {
        return this.$store.state.AlertModule.$MESSAGE;
    }

    get status() {
        return this.$store.state.AlertModule.$STATUS;
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