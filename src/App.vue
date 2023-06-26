<script setup>
import { RouterView, useRouter } from "vue-router";
import { ToastProvider, ThemeProvider } from "@deposits/ui-kit-vue";
import { ref } from "vue";
import { useRoleStore } from "~/stores/role";

// dynamically set the favicon
let element = document.createElement("link");
element.setAttribute("rel", "icon");
element.setAttribute("href", "/images/fav-logo-light.svg");
document.head.appendChild(element);
// dynamically set the favicon section ended

const router = useRouter();
const localColor = ref();
const role = useRoleStore();

if (localStorage.getItem("apex_color")) {
  localColor.value = localStorage.getItem("apex_color");
} else {
  localColor.value = "#1E1E1E";

  if (role.hasRole("student")) {
    localColor.value = "#000000";
  }

  if (role.hasRole("instructor")) {
    localColor.value = "#000000";
    // localColor.value = "#0058BA";
  }
}
</script>

<template>
  <ThemeProvider :initial-theme="{primaryColor: localColor, 'default-font-face' : 'primaryFont'}">
    <ToastProvider>
      <router-view />
    </ToastProvider>
  </ThemeProvider>
</template>

<style lang="scss">
:root {
  --sidebar-width: 250px;
  --link-hover-color: rgba(255, 255, 255, 0.1);
  --primary-font: "Rebond Grotesque";
  --secondary-font: "DM Sans", sans-serif;
  --body-primary-bg: #f4f6f8;
  --body-secondary-bg: #e5e5e5;
  --breakpoint-xsm: 600px;
  --breakpoint-sm: 600px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xlg: 1200px;
}

* {
  margin: 0;
  padding: 0;
  font-family: var(--primary-font);
  box-sizing: border-box;
}

.primaryFont {
  font-family: var(--primary-family);
}

.blur {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

hr {
  border-color: gray;
  opacity: .1;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--light-primary-300);
  //box-shadow: inset 0 0 5px grey;
  //border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--light-primary-500);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--light-primary-600);
}

.container {
  --bs-gutter-x: 10rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

.w-10 {
  width: 10%;
}

.w-20 {
  width: 20%;
}

.w-30 {
  width: 30%;
}

.w-40 {
  width: 40%;
}

.w-50 {
  width: 50%;
}

.w-60 {
  width: 60%;
}

.w-70 {
  width: 70%;
}

.w-80 {
  width: 80%;
}

.w-90 {
  width: 90%;
}

.w-100 {
  width: 100%;
}

.d-flex {
  display: flex;
  gap: 25px;

  & > * {
    width: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .row,
  .flex-direction-column-small {
    flex-direction: column;
  }

  .d-flex,
  .card-row-flex {
    flex-wrap: wrap;
  }

  .container {
    --bs-gutter-x: 2rem;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
  }

  .width-100-small {
    width: 100% !important;
  }

  .margin-top-sm {
    margin-top: 20px;
  }

  .padding-2-sm {
    padding: 2rem !important;
  }

  .flex-wrap-sm {
    flex-wrap: wrap;
  }

  .input-copy {
    font-size: initial;
  }
}

.basic-flex {
  display: flex;
  justify-content: space-between;
}

.inner-content {
  padding: 20px 30px 50px 30px;
}

.basic-link {
  font-family: var(--primary-font);
  font-style: normal;
  //text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--light-primary-500);
  text-decoration: underline;
}

body {
  .main-content {
    margin: 20px 0;

    .card {
      &.bordered {
        border: 1px solid #f7fafc;
      }

      * {
        font-family: var(--primary-font);
      }

      .card-header {
        background-color: #f7fafc;
        box-shadow: inset 0px -1px 0px #e1e7ec;
        padding: 12px 24px;
        border-top-left-radius: 8px;

        .card-header-text {
          text-transform: uppercase;
        }
      }

      .card-body {
        padding: 12px 24px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: #ffffff;
      }
    }
  }

  .card-text {
    font-family: circular std;
    font-weight: 300;
    font-size: 14px;
    color: #3f3e4d;
  }

  .card-main-width {
    width: 60%;
  }

  .card-sub-width {
    width: 40%;
  }

  .primary-font {
    font-family: var(--primary-font);
  }

  .secondary-font {
    font-family: var(--secondary-font);
  }

  .btn-text-dark {
    color: #94a3b8;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #525964;
    }
  }

  .btn-group {
    display: flex;

    &.disabled {
      .main-btn,
      .sec-btn {
        cursor: not-allowed;
        opacity: 0.3;
      }
    }

    .main-btn {
      background: #00b058;
      width: 100% !important;
      border: 1px solid rgba(33, 41, 52, 0.07);
      box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
      border-radius: 6px 0 0 6px;
      display: flex;
      font-weight: 400;
      font-size: 14px;
      font-family: var(--secondary-font);
      color: #ffffff;
      transition: 0.3s ease-in-out;
      line-height: 16px;
      text-decoration: none;
      cursor: pointer;
      transition-property: background-color;
      transition-duration: 0.5s;
      padding: 8px 16px;
      align-items: center;
      text-align: center;
      justify-content: center;

      &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
        ),
        #00b058;
      }
    }

    .sec-btn {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #00b058;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
      border-radius: 0 6px 6px 0;
      padding: 8px 16px;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: #ffffff;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
        ),
        #008742;
      }
    }
  }
}

.button-group {
  display: flex;
  gap: 10px;
}

.onboarding__card {
  width: 450px;
}

.onboarding__heading {
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: #393c40;
}

.onboarding__text {
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #74787c;
  margin-top: 10px;
}

.small {
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 13px;
  color: #262626;
}

.action__icons {
  background: transparent;
  border-radius: 100px;
  padding: 10px;
  width: 44px;
  height: 44px;
}

// BREAKPOINTS //
@media only screen and (max-width: 375px) {
  main_content {
    width: 100%;
  }
}

// Small Screens
@media only screen and (min-width: 376px) and (max-width: 768px) {
  body {
    .main_content {
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;

      .card-text {
        font-size: 12px;
      }

      .card-sub-width,
      .card-main-width {
        width: 100%;
      }

      .card-header-text {
        font-size: 14px;
        font-weight: 350;
      }
    }

    .inner-content {
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;

      .card-text {
        font-size: 12px;
      }

      .card-sub-width,
      .card-main-width {
        width: 100%;
      }

      .card-header-text {
        font-size: 14px;
        font-weight: 350;
      }
    }
  }
}

// Extra Small Screens
@media only screen and (max-width: 600px) {
  body {
    //background: yellow !important;
  }

  .balance__text {
    font-size: 16px;
  }

  .left__rounded__card,
  .right__rounded__card {
    border-radius: 8px !important;
  }

  .card__two__left__col {
    padding-right: var(--gutter-x) !important;
  }

  .card__two__right__col {
    padding-left: var(--gutter-x) !important;
  }

  .show__mobile {
    display: block;
  }

  .col {
    flex-direction: column;
  }

  .info__text {
    width: 100% !important;
  }
}

// // Medium Screens
// @media only screen and (min-width: 768px) {
//   body {
//     // background: green !important;
//   }
// }

// // Large Screens
// @media only screen and (min-width: 992px) {
//   body {
//     // background: purple !important;
//   }
// }

// // Extra Large Screens
// @media only screen and (min-width: 1200px) {
//   body {
//     // background: orange !important;
//   }
// }

@media screen and (max-width: 600px) {
  .card__60,
  .card__40 {
    width: 100% !important;
  }

  .pay__flex {
    display: block !important;
  }

  .m-sm-10 {
    margin-top: 20px;
  }

  .pay__and__transfer__section {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start !important;
  }

  .space__between {
    width: 100%;
    justify-content: space-between;
  }
}

.card__60 {
  width: 60%;
}

.card__40 {
  width: 40%;
}

.pay__flex {
  display: flex;
}

.pay__and__transfer__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #E2E8F0;
  padding-top: 25px;
  padding-bottom: 5px;
}

.btn-primary {
  background: var(--light-primary-500) !important;
  color: #ffffff !important;
}

.text-danger {
  color: #D62F4B !important;
}

.alert {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 8px;

  p {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 450;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
}

.alert-danger-light {
  background: #FFF0F2;

  .icon {
    color: #D62F4B;
  }

  p {
    color: #6D7786;

    strong {
      color: #331418;
    }
  }
}

.alert-primary-light {
  background: #F7FBFF;

  .icon {
    color: #0D7FE9;
  }

  p {
    color: #6D7786;

    strong {
      color: #051B30;
    }
  }
}

.light-primary-action-color {
  color: var(--light-primary-500)
}

.ui-table__container-wrapper .ui-table__container .ui-table__body-cell .ui-table__body-cell-text {
  font-size: 14px !important;
}

.ui-pin-input-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
