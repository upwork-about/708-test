import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
export const useCommonStore = defineStore('common', {
  state: () => ({
    upworkVersion: 100,

  }),

  actions: {

    addUpworkVersion(value:string) {
      this.upworkVersion ++;
    },

  
  },
});
