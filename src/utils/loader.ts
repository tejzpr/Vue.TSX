import {EventBus} from './eventbus';

export interface ILoader {
    id: string;
    description: string;
}

export const startLoading = (description: string): ILoader => {
    const data: ILoader = {
        id: (EventBus as any).$uuid.v1(),
        description,
    };
    EventBus.$emit('start-loading', data);
    return data;
};

export const stopLoading = (data: ILoader): void => {
    EventBus.$emit('stop-loading', data);
};


