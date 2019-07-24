import { VuexModule, Module, Mutation } from "vuex-module-decorators";

@Module
export default class Alert extends VuexModule {
    status: String = '';
    message: String = '';

    @Mutation
    ALERT_SUCCESS(message: String) {
        this.status = `alert_success`;
        this.message = message;
    }
    @Mutation
    ALERT_ERROR(message: String) {
        this.status = `alert_error`;
        this.message = message;
    }
    @Mutation
    ALERT_CLEAR() {
        this.status = ``;
        this.message = '';
    }
}
VuexModule