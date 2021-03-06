import * as MutationTypes from '@/store/modules/home/mutation-types';

export default {
    setBannerText: ({ commit }: any, text: string): void => {
        commit(MutationTypes.CHANGE_HOME_TEXTS, text);
    },
};
