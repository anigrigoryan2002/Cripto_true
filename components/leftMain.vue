<template>
  <div class="cards">
    <div class="cards-container">
      <div v-for="(item, index) in data" :key="index" class="card">
        <div class="card-image-info-wrapper">
          <NuxtImg :src="`${LeftSideUrl}${item.image}`" class="anons-img" />
          <div class="post-info-panel">
            <div class="column">
              <div class="date-container subtitle">
                {{ formatDate(item.updated_at) }}
              </div>
            </div>
            <div class="column">
              <div class="views-container">
                <img
                  width="16"
                  height="14"
                  alt="Card Image"
                  src="/assets/images/eye-icon-black.jpg"
                  class="icon-switch--black"
                />
                <div class="views-number subtitle">
                  {{ item.post_view }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-texts-wrapper">
          <div class="card-text-headline">
            {{ locale === "en" ? item.caption_en : item.caption_ru }}
          </div>

          <div class="card-text-content">
            {{ locale === "en" ? item.anons_en : item.anons_ru }}
          </div>
          <div class="card-text-footer">
            <div class="visit-icon-wrapper">
              <img
                width="18"
                height="18"
                alt="Card Image"
                src="/assets/images/visit-icon.jpg"
                class="icon-switch"
              />
            </div>
            <div class="links-container">
              <div
                v-for="(tag, tagIndex) in (locale === 'en'
                  ? item.tags_en
                  : item.tags_ru
                ).split(',')"
                :key="tagIndex"
                class="link"
              >
                {{ tag.trim() }}
              </div>
            </div>
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
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useApi } from "~/stores/Api";

const { t, locale } = useI18n();

const myStore = useApi();
await myStore.fetchData1();
const data = ref([]);
const state = ref(10);

await myStore.fetchData1(state);
data.value = myStore.myData1.posts;

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
    state.value += 10;
    await myStore.fetchData1(state.value);
    data.value = [...data.value, ...myStore.myData1.posts];
    console.log("Data fetched successfully:", myStore.myData1);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const LeftSideUrl = useRuntimeConfig().public.apiBaseURLImg + "uploads/posts/";
</script>

<style scoped>
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
.anons-img {
  width: 300px;
  height: 200px;
}
.light .card-texts-wrapper {
  color: #232323;
}
.light .card-texts-wrapper .card-text-content,
.light .card-texts-wrapper .card-text-footer .links-container .link {
  color: #232323;
}
.light .card-texts-wrapper .card-text-headline {
  color: #170332;
}
.light .subtitle {
  color: #232323;
}
.light .post-info-panel {
  background: #f7f7f7;
}
.light .card {
  background: #fff;
  border: 1px solid #ededed;
  box-shadow: 0 0 15px #0000000a;
}
.card-texts-wrapper .card-text-footer .links-container .link {
  color: #d0d0d0;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.light .card-texts-wrapper {
  color: #232323;
}
.card-texts-wrapper .card-text-footer .links-container .link {
  border: 1px dashed #a3a2a2;
  padding: 5px;
}
.card-texts-wrapper .card-text-footer .links-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
}
.icon-switch {
  display: block;
}
.card-texts-wrapper .card-text-footer {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  margin-top: auto;
  padding: 0 6px;
}
.card-texts-wrapper .card-text-content {
  color: #d0d0d0;
  display: -webkit-box;
  font-family: Golos, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 0 16px 0 6px;
  text-overflow: ellipsis;
  text-wrap: wrap;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-texts-wrapper .card-text-headline {
  color: #fff;
  font-family: Golos, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  padding: 5px 16px 0 6px;
  text-wrap: wrap;
  -webkit-box-orient: vertical;
}
.card-texts-wrapper {
  color: #d0d0d0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  max-width: 475px;
  width: auto;
}
.post-info-panel .views-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: flex-start;
}
.post-info-panel .date-container {
  font-weight: 500;
}
.subtitle {
  color: #d0d0d0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.post-info-panel .column {
  gap: 5px;
  justify-content: flex-start;
  padding: 8px;
}
.column {
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
.post-info-panel,
.post-info-panel .column {
  align-items: center;
  display: flex;
  flex-direction: row;
}
.card-image-info-wrapper img {
  border-radius: 11px;
  -o-object-fit: cover;
  object-fit: cover;
}
.card-image-info-wrapper {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 865px;
  width: 100%;
}
.card {
  align-items: flex-start;
  background: #171520;
  border-radius: 16px;
  box-shadow: 0 4px 6px #0000001a;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 300px;
  justify-content: flex-start;
  margin-bottom: 30px;
  max-width: 865px;
  overflow: hidden;
  padding: 20px;
  width: 100%;
  cursor: pointer;
}
body {
  margin: 0 !important;
  font-family: Golos Text, sans-serif;
}
</style>
