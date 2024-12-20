<template>
    <div class="footer">
        <div class="footer-content">
            <div class="content1">
                <div class="contentSmall">
                    <div class="logo">
                        <div class="logo-container">
                            <NuxtImg :src="logoImgPath" width="174px" height="48px"/>
                        </div>
                        <div class="text-container">
                            <span class="subtitle">Cryptoinfo - независимая обзорная платформа всей криптоиндустрии.</span>
                        </div>
                    </div>
                    <div class="content2">
                        <div class="contact-box">
                            <div class="menu-headline">{{ t('contact') }}</div>
                            <div class="email">
                                <img  width="23" height="22" alt="message-icon" src="/_nuxt/assets/images/message-icon.jpg" class="icon-switch">
                                <span class="subtitle">
                                    <a href="mailto:support@crypto-info.cc">crpinfo@proton.me</a>
                                </span>
                            </div>
                            <div class="email">
                                <img  width="23" height="22" alt="message-icon" src="/_nuxt/assets/images/tg-icon.jpg" class="icon-switch">
                                <span class="subtitle">
                                    <a href="mailto:support@crypto-info.cc">cryptoinfo_me</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="content2">
                <div class="contact-box">
                    <div class="input-container">
                        <div class="input-wrapper">
                            <input name="email" type="text" :placeholder="t('placeholder')">
                        </div>
                        <button type="button" class="button" style="--vertical-padding: 13px; --horizontal-padding: 26px; --font-size: 19px;">
                            <span>{{ t('subscribe') }}</span>
                        </button>
                    </div>
                    <div class="privacy-content caption"> {{ t('reserved') }}</div>
                </div>
            </div>
        </div>
    </div>
     

</template>

<script setup>
import { ref } from "vue";

import { useI18n } from 'vue-i18n';
import { useMyApi } from "~/stores/MyApi";


const { t, locale } = useI18n();


const myStore = useMyApi();
await myStore.fetchData();
const data = myStore.myData.setting;
const logoImgPath = data.logo;

</script>

<style scoped>
@media screen and (max-width: 1300px) {
    .footer-content{
        flex-direction: column !important;
        align-items: center !important;
    }
}

.light .footer{
    background: #e6e6e6;
}
.light .subtitle {
    color: #232323;
}
.light a {
    color: #170332;

}
.light .menu-headline {
    color: #170332;
}
.light .caption {
    color: #0000004d;
}
a, a:hover {
    text-decoration: none;
    color: #d0d0d0;
    font-family: Golos Text, sans-serif;
}
.email{
    align-items: center;
    display: flex;
    gap: 10px;
}
.caption {
    color: #ffffff4d;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.input-wrapper{
    align-items: center;
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 16px;
    width: 335px;
}
.input-wrapper input {
    background: transparent;
    border: none;
    font-size: 12px;
    height: 100%;
    padding: 8px 0;
    width: 100%;
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
    padding: var(--vertical-padding) var(--horizontal-padding);
    width: auto;
}
.button span {
    color: #fff;
    font-family: Golos, sans-serif;
    font-size: var(--font-size);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
}
.input-container{
    align-items: center;
    align-items: stretch;
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-start;
    min-height: 48px;
    overflow: hidden;
}
.contentSmall {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    gap: 170px;
    height: -moz-max-content;
    height: max-content;
    justify-content: flex-start;
    width: -moz-max-content;
    width: max-content;
}
.contact-box{
    display: flex;
    flex-direction: column;
    gap: 18px;
    height: -moz-max-content;
    height: max-content;
    width: 100%;
}
.menu-headline{
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
}
.content2{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 190px;
    justify-content: flex-start;
    max-width: 468px;
}
.footer{
    background: #16141f;
    min-height: 250px;
}
.footer-content {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 300px;
    padding: 57px 20px 72px;
}
.text-container{
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 22px;
    margin-top: auto;
    width: 320px;
}
.subtitle {
    color: #d0d0d0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: Golos Text, sans-serif;

}


</style>