import { VuexModule, Module, Mutation } from "vuex-module-decorators";

@Module
export default class Alert extends VuexModule {
    $STATUS: string = ``;
    $MESSAGE: string = ``;

    @Mutation
    ALERT_SUCCESS(message: string) {
        this.$STATUS = `alert-success`;
        this.$MESSAGE = message;
    }
    @Mutation
    ALERT_ERROR(message: string) {
        this.$STATUS = `alert-error`;
        this.$MESSAGE = message;
    }
    @Mutation
    ALERT_CLEAR() {
        this.$STATUS = ``;
        this.$MESSAGE = ``;
    }
}
VuexModule