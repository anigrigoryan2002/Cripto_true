<template>
  <div class="side-bar">
    <div class="head">
      <img src="/assets/images/tg-icon.jpg" alt="" />
      <h2 class="subtitle">{{ t("leftTitle") }}</h2>
    </div>
    <div>
      <div v-for="cards in data" :key="data.id" class="card">
        <div class="company">
          <div class="company-logo-wrapper">
            <a href="#" class="share-link">
              <NuxtImg
                :src="`${RightSideUrl}${cards.image}`"
                class="anons_img"
              ></NuxtImg>
            </a>
          </div>
          <div class="company-name">
            <a href="#" class="title">{{ cards.caption }}</a>
          </div>
        </div>
        <div class="card-text-content">{{ cards.anons }}</div>
        <div class="post-info-panel">
          <div class="column">
            <div class="data-container subtitle">
              {{ formatDate(cards.updated_at) }}
            </div>
          </div>
          <div class="column">
            <div class="views-container">
              <img
                class="eye-icon"
                src="/assets/images/eye-icon.jpg"
                alt="Views Icon"
              />
              <div class="views-number subtitle">{{ cards.post_view }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="button-wrapper">
        <button class="button see-more" @click="handleClick">
          <span>{{ t("more") }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import { useApi } from "~/stores/Api";
const { t, locale } = useI18n();

const myStore = useApi();

const data = ref([]);
const state2 = ref(10);

await myStore.fetchData2(state2);
data.value = myStore.myData2.posts;

const formatDate = (createdAt) => {
  if (!createdAt) return "";

  const date = new Date(createdAt);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

const handleClick = async () => {
  try {
    state2.value += 10;
    await myStore.fetchData2(state2.value);
    data.value = [...data.value, ...myStore.myData2.posts];
    console.log("Data fetched successfully:", myStore.myData2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const RightSideUrl = useRuntimeConfig().public.apiBaseURLImg;

</script>

<style scoped>

.light .card-text-content {
  color: #9e9e9e;
}

.light .subtitle {
  color: #232323;
}
.light .post-info-panel {
  background: #f7f7f7;
}
body,
html {
  color: #d0d0d0;
  font-family: Golos Text, sans-serif;
  scrollbar-width: none;
}
.light .title {
  color: #170332;
}
.light .side-bar {
  background: #fff;
  border: 1px solid #ededed;
  box-shadow: 0 0 15px #0000000a;
}

* {
  font-family: Golos Text;
}
.button span {
  color: #fff;
  font-family: Golos, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  width: 160px;
}
.button {
  align-items: center;
  background: linear-gradient(96deg, #fb1560cc, #4a1690 87%);
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 35px #0003;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: auto;
  padding: 20px 109px 20px 109px;
  font-size: 19px;
  color: #ffffff;
  font-weight: 500;
}

.see-more {
  margin: 30px auto;
}
.head {
  display: flex;
  gap: 10px;
}
.head img {
  object-fit: contain;
  width: 30px;
  height: 30px;
  margin-top: 22px;
}
.card-text-content {
  font-size: 17px;
}
.side-bar {
  background: #171520;
  border-radius: 14px;
  box-shadow: 0 0 35px #00000026;
  gap: 20px;
  padding: 20px;
  width: 360px;
  display: flex;
  flex-direction: column;
}
.side-bar-title-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: flex-start;
}
h2 {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.card,
.company {
  display: flex;
  gap: 10px;
}
.card {
  cursor: pointer;
  flex-direction: column;
  width: 320px;
}
.company-logo-wrapper {
  border-radius: 10px;
}
.post-info-panel,
.post-info-panel .column {
  align-items: center;
  display: flex;
  flex-direction: row;
}
.post-info-panel {
  background: #ffffff05;
  border-radius: 10px;
  height: 48px;
  justify-content: space-between;
  padding: 5px 6px;
  width: 100%;
}
.share-link img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
.company {
  align-items: center;
  max-height: 60px;
}

.card,
.company {
  display: flex;
  gap: 10px;
}
a {
  color: #fff;
  text-decoration: none;
}
.views-container {
  display: flex;
  gap: 5px;
}
.views-container img {
  object-fit: contain;
}
</style>
