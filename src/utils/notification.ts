import {EventBus} from './eventbus';

export enum NotificationVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info',
}

export interface INotification {
    text: string;
    variant: NotificationVariant;
    dismissed?: () => void;
    autoCloseInSeconds?: number;
    id?: string;
}

export const notify = (data: INotification) => {
    EventBus.$emit('notification', data);
};

