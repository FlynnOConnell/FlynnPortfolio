import { createApp } from 'vue';

class EventBus {
  constructor() {
    this.eventBus = createApp({});
  }

  emit(event, ...args) {
    this.eventBus.config.globalProperties.$emit(event, ...args);
  }

  on(event, callback) {
    this.eventBus.config.globalProperties.$on(event, callback);
  }

  off(event, callback) {
    this.eventBus.config.globalProperties.$off(event, callback);
  }
}

export default new EventBus();