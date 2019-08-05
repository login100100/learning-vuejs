import { VuexModule, Module, Mutation } from "vuex-module-decorators";

@Module
export default class Alert extends VuexModule {
    status: String = '';
    message: String = '';

    @Mutation
    ALERT_SUCCESS(message: String) {
        this.status = `alert-success`;
        this.message = message;
    }
    @Mutation
    ALERT_ERROR(message: String) {
        this.status = `alert-error`;
        this.message = message;
    }
    @Mutation
    ALERT_CLEAR() {
        this.status = ``;
        this.message = '';
    }
}
VuexModule