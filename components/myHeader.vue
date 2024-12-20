<template>
  <div class="main-container">
    <header>
      <div class="first">
        <div class="first_section">
          <NuxtImg
            :src="logoImgPath"
            width="140px"
            height="37px"
            :style="{ marginLeft: '120px', marginTop: '8px' }"
          />
        </div>
        <div class="second_section">
          <nav class="nav">
            <ul>
              <li>
                <NuxtLink to="/">{{ t("home") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  {{
                    locale === "en" ? data.type1_title_en : data.type1_title_ru
                  }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  {{
                    locale === "en" ? data.type2_title_en : data.type2_title_ru
                  }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  {{
                    locale === "en" ? data.type3_title_en : data.type3_title_ru
                  }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  {{
                    locale === "en" ? data.type4_title_en : data.type4_title_ru
                  }}
                </NuxtLink>
              </li>
              <li><NuxtLink to="/">FAQ</NuxtLink></li>
              <li>
                <NuxtLink to="/">{{ t("about_us") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{ t("contacts") }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="third_section">
          <div>
            <div class="header__controls__desktop">
              <div>
                <div>
                  <button
                    @click="close = true"
                    :class="{
                      'nav-item-dark': isDarkTheme,
                      'nav-item-light': !isDarkTheme,
                    }"
                  >
                    {{ t("login") }}
                  </button>
                </div>
              </div>
              <button @click="toggleTheme">
                <img
                  :src="
                    isDarkTheme
                      ? '/_nuxt/assets/images/theme-dark.svg'
                      : '/_nuxt/assets/images/theme-light.svg'
                  "
                  alt="Theme Toggle Icon"
                />
              </button>
              <div class="language" @click="isDropdownOpen = !isDropdownOpen">
                <div class="flag_drop">
                  <img
                    :src="selectedLanguage.flag"
                    :alt="selectedLanguage.name + ' Flag'"
                  />
                  <img
                    src="/assets/images/arrow.svg"
                    alt="Dropdown Arrow"
                    class="arrow"
                    :class="{ rotated: isDropdownOpen }"
                  />
                </div>
                <div class="language-dropdown" v-if="isDropdownOpen">
                  <div
                    class="language-option"
                    v-for="language in languages"
                    :key="language.code"
                    @click.stop="selectLanguage(language)"
                  >
                    <img :src="language.flag" :alt="language.name + ' Flag'" />
                    {{ language.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="login-block">
            <a href="https://t.me/cryptoinfo_me">
              <span>{{ t("join") }}</span>

              <img src="/assets/images/tg_logo.webp" alt="" class="joinTg" />
            </a>
          </div>
        </div>
        <div class="loginPage" v-if="close">
          <div class="loginAnimated">
            <form class="lofinForm">
              <div class="cont">
                <button class="modal-close" @click="close = false">
                  <img
                    :src="
                      isDarkTheme
                        ? '/_nuxt/assets/images/closeDslCkta.png'
                        : '/_nuxt/assets/images/close-black.png'
                    "
                    alt="close login icon"
                    class="icon-switch-black"
                  />
                </button>
                <h2 v-if="!isRegistering" class="modal__header">
                  {{ t("signIn") }}
                </h2>
                <h2 v-else class="modal__header">{{ t("signUp") }}</h2>
                <div class="form-group">
                  <p class="login_label" v-if="!isRegistering">
                    {{ t("mnemonic") }}
                  </p>
                  <p class="login_label" v-else>{{ t("username") }}</p>
                  <input type="text" class="login_input" />
                  <div class="button" v-if="!isRegistering">
                    {{ t("signIn") }}
                  </div>
                  <div class="button" v-else>{{ t("register") }}</div>
                  <div class="modal__footer">
                    <p v-if="!isRegistering">{{ t("dontHaveAccount") }}</p>
                    <p v-else>{{ t("haveAccount") }}</p>
                    <button @click.prevent="isRegistering = !isRegistering">
                      {{ isRegistering ? t("signIn") : t("register") }}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="main-banner-container">
        <div class="container_middle">
          <div class="chargeCalculate">
            <div class="input_container" @change="calculate1">
              <input type="text" v-model="input1Text" />
              <div class="select_container" @click="optionValue = !optionValue">
                <img
                  :src="selectedCurrency.img"
                  :alt="selectedCurrency.name"
                  class="currency-icon"
                />
                <img
                  src="/assets/images/arrow.svg"
                  alt=""
                  class="arrow-icon"
                  :class="{ rotated: optionValue }"
                />
              </div>
              <div class="option_list1" v-if="optionValue">
                <div
                  v-for="currency in currencies"
                  :key="currency.symbol"
                  class="option_item"
                  @click="selectCurrency(currency)"
                >
                  <img :src="currency.img" :alt="currency.name" />
                  <span class="name">{{ currency.name }}</span>
                  <span class="currensy_symboll_1">{{ currency.symbol }}</span>
                </div>
              </div>
            </div>

            <div class="input_container" @change="calculate2">
              <input type="text" v-model="input2Text" />
              <div
                class="selected_icons"
                @click="openOptionList = !openOptionList"
              >
                {{ selectedCurrency1 }}
                <img
                  src="/assets/images/arrow.svg"
                  alt=""
                  class="arrow-icon2"
                  :class="{ rotated: openOptionList }"
                />
              </div>
              <div class="option__item" v-if="openOptionList">
                <div
                  v-for="symbol in currencies1"
                  :key="symbol"
                  @click="selectCurrency1(symbol)"
                >
                  <span>{{ symbol }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="currency-list-container">
          <div
            v-for="currency in currencies"
            :key="currency.symbol"
            class="currensy_list_item"
          >
            <div class="currency_info">
              <img :src="currency.img" :alt="currency.name" />
              <div class="currensy_name_container">
                <span>{{ currency.name }}</span>
                <span class="currensy_symboll_1">{{ currency.symbol }}</span>
              </div>
              <div class="currensy_price">{{ currency.num }}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
import { useMyApi } from "~/stores/MyApi";

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
  const nameEq = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEq) === 0) {
      return c.substring(nameEq.length, c.length);
    }
  }
  return null;
}
const { t, locale } = useI18n();

const myStore = useMyApi();
await myStore.fetchData();
const data = myStore.myData.setting;
const logoImgPath = data.logo;
console.log(data);

const close = ref(false);
const isRegistering = ref(false);
const isDropdownOpen = ref(false);

const languages = ref([
  { code: "en", name: "English", flag: "/_nuxt/assets/images/us.svg" },
  { code: "ru", name: "Russia", flag: "/_nuxt/assets/images/ru.svg" },
]);
const selectedLanguage = ref(languages.value[0]);

const data1 = ref({});

onMounted(async () => {
  const savedTheme = getCookie("theme");
  if (savedTheme) {
    isDarkTheme.value = savedTheme === "dark";
  } else {
    isDarkTheme.value = false;
  }
  applyTheme();
  loadLocale();
  loading.value = true;
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,monero,ethereum,tron,lightcoin,tether&vs_currencies=usd,rub",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch settings: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log("API Response Data:", responseData);

    if (!responseData || Object.keys(responseData).length === 0) {
      throw new Error("Empty or invalid API response");
    }

    data1.value = responseData;

    currencies.value = [
      {
        name: "Bitcoin",
        symbol: "BTC",
        img: "/_nuxt/assets/images/bitcoinLogo.webp",
        num: responseData.bitcoin?.usd,
      },
      {
        name: "Monero",
        symbol: "XMR",
        img: "/_nuxt/assets/images/monero.webp",
        num: responseData.monero?.usd,
      },
      {
        name: "Litecoin",
        symbol: "LTC",
        img: "/_nuxt/assets/images/litecoin.webp",
        num: responseData.lightcoin?.usd || "N/A",
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        img: "/_nuxt/assets/images/ethereum.webp",
        num: responseData.ethereum?.usd,
      },
      {
        name: "Tron",
        symbol: "TRX",
        img: "/_nuxt/assets/images/tron.webp",
        num: responseData.tron?.usd,
      },
    ];
  } catch (err) {
    console.error("Fetch error:", err);
    error.value = { message: err.message || "Failed to fetch settings" };
  } finally {
    loading.value = false;
  }
});
const loadLocale = () => {
  const savedLocale = getCookie("locale") || "en";
  const language = languages.value.find((lang) => lang.code === savedLocale);
  if (language) {
    selectedLanguage.value = language;
    locale.value = savedLocale;
  }
};
const selectLanguage = (language) => {
  selectedLanguage.value = language;
  isDropdownOpen.value = false;
  locale.value = language.code;
  setCookie("locale", language.code, 30);
  console.log(`Selected language: ${language.name}`);
};

const isDarkTheme = ref(true);

function applyTheme() {
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  if (isDarkTheme.value) {
    header.classList.remove("header-light");
    body.classList.remove("light");
  } else {
    header.classList.add("header-light");
    body.classList.add("light");
  }
}
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  applyTheme();

  setCookie("theme", isDarkTheme.value ? "dark" : "light", 30);
};
const optionValue = ref(false);
const openOptionList = ref(false);

const loading = ref(false);
const error = ref(null);
const currencies = ref([]);
const selectedCurrency = ref({
  name: "Bitcoin",
  symbol: "BTC",
  img: "/_nuxt/assets/images/bitcoinLogo.webp",
});
const input1Text = ref();
const input2Text = ref();

const selectedCurrency1 = ref("$");
const currencies1 = ref(["$", "₽"]);
const calculate1 = () => {
  const currencyName = selectedCurrency.value?.name?.toLowerCase();
  if (!currencyName || !data1.value[currencyName]) {
    console.error("Selected currency name is undefined or data not available.");
    return;
  }
  if (isNaN(input1Text.value) || input1Text.value === "") {
    console.error("Input 1 is not a valid number.");
    return;
  }
  const rate =
    selectedCurrency1.value === "$"
      ? data1.value[currencyName]?.usd || 0
      : data1.value[currencyName]?.rub || 0;
  input2Text.value = input1Text.value * rate;
};

const calculate2 = () => {
  const currencyName = selectedCurrency.value?.name?.toLowerCase();
  if (!currencyName || !data1.value[currencyName]) {
    console.error("Selected currency name is undefined or data not available.");
    return;
  }
  if (isNaN(input2Text.value) || input2Text.value === "") {
    console.error("Input 2 is not a valid number.");
    return;
  }
  const rate =
    selectedCurrency1.value === "$"
      ? data1.value[currencyName]?.usd || 0
      : data1.value[currencyName]?.rub || 0;
  input1Text.value = input2Text.value / rate;
};

const selectCurrency = (currency) => {
  selectedCurrency.value = currency;
  optionValue.value = false;
  calculate1();
};

const selectCurrency1 = (symbol) => {
  selectedCurrency1.value = symbol;
  openOptionList.value = false;
  calculate2();
};
</script>

<style scoped>
.light .modal__footer,
.light .modal__footer > button,
.light .modal__footer > p {
  color: #232323;
}
.light .form-group input,
.light .form-group textarea {
  background: #0000000d;
  color: #232323;
}
.light .login_label {
  color: #232323;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
}
.login_label {
  color: #d0d0d0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
}
p {
  color: #232323;
}
.light .modal__header {
  color: #170332;
}
.modal__header {
  color: #fefefe;
  font-size: 40px;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 2rem;
  text-align: center;
}

.light .cont {
  background: #fff;
  border: 1px solid #ededed;
  box-shadow: 0 0 15px #0000000a;
}
.light .loginPage {
  background-color: #0006;
}
@media screen and (max-width: 1200px) {
  .nav {
    display: none;
  }

  .header {
    background: no-repeat 50% / cover url(/_nuxt/assets/images/download.jpg) !important;
  }
}
.selected_icons {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
}
.option__item {
  position: absolute;
  display: flex;
  gap: 18px;
  right: 188px !important;
  top: calc(100% + 25px);
  align-items: flex-start;
  background: #301c44;
  border-radius: 11px;
  justify-content: flex-start;
  padding: 20px;
  flex-direction: column;
  color: #fff;
}
.option_list1 {
  display: flex;
  left: 50 !important;
  align-items: flex-start;
  background: #301c44;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  padding: 20px;
  position: absolute;
  top: calc(100% + 12px);
  width: -moz-max-content;
  width: max-content;
  z-index: 1111;
}
.option_item {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 30px;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
}
.option_item img {
  height: 30px;
  width: 30px;
}
.name {
  color: #fff;
  font-size: 15px;
  padding-left: 5px;
}
body {
  color: #d0d0d0;
  font-family: Golos Text, sans-serif;
}
.currency-list-container {
  width: 85%;
  display: grid;
  gap: 20px 60px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.currensy_container {
  display: grid;
  gap: 20px 60px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 25%;
}
.currensy_symboll_1 {
  color: #959595;
  font-size: 12px !important;
  font-weight: 500 !important;
}

.part1 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.currency_list {
  display: flex;
  gap: 40px;
}

.currency_list_item {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  min-height: 35px;
  overflow: hidden;
}
.currency_info {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
}
.currensy_name_container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: flex-start;
}
.currensy_name_container span {
  color: #d0d0d0;
  font-size: 15px;
  font-weight: 600;
}
.currensy_price {
  color: #d2d2d2;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
}
.input_container {
  color: #d0d0d0;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: #ffffff1a;
  border-radius: 16px;
  gap: 10px;
  height: 63px;
  padding: 0px 15px;
  width: 200px !important;
}
.input_container input {
  background: transparent;
  border: none;
  color: #d0d0d0;
  flex-grow: 1;
  font-size: 18px;
  font-weight: 500;
  max-width: 56.5%;
  padding: 8px 0;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
img {
  display: block;
  max-width: 100%;
}
.currency-icon {
  width: 30px;
  height: 30px;
}

.arrow-icon {
  width: 14px;
  height: 16px;
  transition: transform 0.3s ease;
}
.arrow-icon.rotated {
  width: 14px;
  height: 16px;
  transform: rotate(180deg);
}
.arrow-icon2 {
  width: 14px;
  height: 16px;
  transition: transform 0.3s ease;
}
.arrow-icon2.rotated {
  width: 14px;
  height: 16px;
  transform: rotate(180deg);
}
.select_container {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
}
.main-banner-container {
  display: flex;
  flex-direction: column;
  gap: 40px !important;
  margin-left: 10%;
  padding-top: 5%;
  width: 50%;
}
.main-container {
  align-items: center;
}
.chargeCalculate {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  z-index: 100;
  z-index: 0;
}

.container_middle {
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 40px;
  padding-top: 7%;
  width: 100%;
}

.language {
  position: relative;
  cursor: pointer;
  user-select: none;
}

.language-dropdown {
  position: absolute;
  right: 0;
  background: #301c44;
  border-radius: 11px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: calc(100% + 12px);
  width: -moz-max-content;
  width: max-content;
  z-index: 1111;
  padding: 20px;
  gap: 10px;
}

.language-option {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #d0d0d0;
  font-family: Golos Text, sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
}

.language-option:hover {
  background-color: #ffffff1a;
}

.language-option img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.arrow {
  transition: transform 0.3s ease;
}
.arrow.rotated {
  transform: rotate(180deg);
}
body {
  color: #d0d0d0;
}
header {
  background: no-repeat 100% 100% / 65% url(/assets/images/wave-20.webp),
    no-repeat 50% / cover url(/assets/images/cover.webp);
  padding: 40px 0 47px;
  width: 100%;
  min-height: auto;
  z-index: 99999999999;
}
.header-light .second_section {
  padding-top: 15px;
}
.header-light {
  background: no-repeat 130% 100% / 80% 112% url(assets/images/bg_arrow.webp),
    no-repeat 50% / cover url(/assets/images/home-light-1.webp);
}
.header-light ul {
  align-items: center;
}
.header-light nav {
  height: 25px;
  background-color: #f6f7f9;
}
.header-light a,
.header-light button,
.header-light span {
  color: #000;
}
.header-light .language-dropdown {
  background-color: hwb(0 100% 0%);
}
.header-light .language-dropdown div {
  color: #000;
}
.header-light .input_container input {
  color: #232323;
  background: transparent;
}
.header-light .input_container {
  background: #0000000d;
}
.header-light .currensy_price,
.currensy_symboll_1 {
  color: #232323;
}
/* 
.header-dark {
    background: no-repeat 100% 100% / 65% url(/assets/images/wave-20.webp), no-repeat 50% / cover url(/assets/images/cover.webp);
}

.header-light {
    background: no-repeat 130% 100% / 80% 112% url(/assets/images/bg_arrow.webp), no-repeat 50% / cover url(/assets/images/home-light-1.webp);
} */

.nav-item-dark {
  color: #ffffff; /* Dark theme color */
  transition: color 0.3s ease;
}

.nav-item-light {
  color: #d0d0d0;
  transition: color 0.3s ease;
}
.first {
  align-items: center;
  display: flex;
  gap: clamp(40px, 4vw, 80px);
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  text-decoration: none;
  font-family: Golos Text, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: #d0d0d0;
}
ul {
  display: flex;
  list-style: none;
}

li {
  margin: 0 10px;
}
.header__controls__desktop {
  color: #d0d0d0;
  align-items: center;
  display: flex;
  gap: 15px;
  color: #d0d0d0;
  font-family: Golos Text, sans-serif;
}
button {
  background: none;
  border: none;
  outline: none;
  color: #d0d0d0;
}
.language {
  background: #ffffff1a;
  border-radius: 11px;
  padding: 12px;
}
.flag_drop {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
}
.login-block a {
  display: flex;
  justify-content: flex-end;
  line-height: 40px;
  vertical-align: middle;
  width: 100%;
  text-decoration: none;
  color: #d0d0d0;
  font-family: Golos Text, sans-serif;
}
.joinTg {
  height: 40px;
  -o-object-fit: contain;
  object-fit: contain;
  width: auto;
}
.loginPage {
  align-items: center;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: #000;
  background-color: #0006;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 50%;
  overflow: auto;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  z-index: 9999;
}
.loginAnimated {
  box-sizing: border-box;
  transition: all 0.2s;
}
.loginForm {
  display: flex;
  flex-direction: column;
  gap: 19px;
}
.lofinForm h2 {
  color: #fefefe;
  font-size: 40px;
  line-height: normal;
  margin-bottom: 2rem;
  text-align: center;
}
.form-group {
  gap: 7px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  width: 100%;
}
.login_label {
  color: #d0d0d0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
}
.button {
  align-items: center;
  background: linear-gradient(96deg, #fb1560cc, #4a1690 87%);
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 35px #0003;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: Golos, sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  justify-content: center;
  line-height: normal;
  padding: 15px 75px;
  text-align: center;
  width: 50%;
}
.login_input {
  background: #ffffff1a;
  border: none;
  border-radius: 16px;
  color: #d0d0d0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  padding: 15px 20px;
  width: 95%;
}
.modal__footer {
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  gap: 5px;
  justify-content: center;
  line-height: normal;
  text-align: center;
  width: 100%;
}
.modal__footer p {
  color: #d0d0d0;
}
.modal__footer button {
  font-weight: 900;
}
.modal-close {
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  height: 30px;
  margin-left: auto;
  position: absolute;
  right: 2%;
  top: 2%;
  width: 30px;
}
.modal-close img {
  width: 20px;
  height: 20px;
}
.cont {
  position: relative;
  padding: 130px 152px;
  background: #1a1825;
  border-radius: 30px;
  box-shadow: 0 0 35px #00000026;
}
</style>
