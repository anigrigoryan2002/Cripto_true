import { defineStore } from "pinia";

export const useApi = defineStore("Api", {
  state: () => ({
    myData: null,
    myData1: null,
    myData2: null,
  }),
  actions: {
    async fetchData() {
      try {
        const response = await fetch(
          useRuntimeConfig().public.apiBaseURL + "/get-settings",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ api_key: useRuntimeConfig().public.apiKey }),
          }
        );
        const data = await response.json();
        this.myData = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchData1(state) {
      try {
        const response = await fetch(
          `${useRuntimeConfig().public.apiURL1}${state}&limit=10`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ api_key: useRuntimeConfig().public.apiKey }),
          }
        );
        const data = await response.json();
        this.myData1 = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchData2(state) {
      try {
        const response = await fetch(
          `${useRuntimeConfig().public.apiURL2}${state}&limit=10`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ api_key: useRuntimeConfig().public.apiKey }),
          }
        );
        const data = await response.json();
        this.myData2 = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
