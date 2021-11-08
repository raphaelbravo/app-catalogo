import EventEmitter from 'events';

export const emitter = new EventEmitter();

export const _loading = (value: boolean) => {
  emitter.emit('loading', value);
};
