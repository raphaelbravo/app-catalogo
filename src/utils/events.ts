import {Config} from 'components/alert-modal';
import EventEmitter from 'events';

export const emitter = new EventEmitter();

export const _loading = (value: boolean) => {
  emitter.emit('loading', value);
};
export const _alert = (value: Config | null) => {
  emitter.emit('alert', value);
};
