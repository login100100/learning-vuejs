import * as ACTIONS from '../actions/types';

const state = {
    status: '',
    message: ''
};

const getters = {
    getAlertStatus: (state) => state.status,
    getAlertMessage: (state) => state.message
};

const actions = {
};

const mutations = {
    [ACTIONS.ALERT.SUCCESS]: (state, message) => {
        state.status = 'alert-success';
        state.message = message
    },
    [ACTIONS.ALERT.ERROR]: (state, message) => {
        state.status = 'alert-error';
        state.message = message
    },
    [ACTIONS.ALERT.CLEAR]: (state) => {
        state.status = '';
        state.message = '';
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}