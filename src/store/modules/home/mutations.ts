import * as MutationTypes from '@/store/modules/home/mutation-types';

export default {
    [MutationTypes.CHANGE_HOME_TEXTS]: (state: IHomeState, data: IHomeState) => {
        state.homeTitle = data.homeTitle;
        state.homeDescription = data.homeDescription;
    },
};
