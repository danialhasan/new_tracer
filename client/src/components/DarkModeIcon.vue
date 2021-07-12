<script>
export default {
  data() {
    return {
      icons: {
        dark: "/assets/sun.svg",
        light: "/assets/moon-stars-fill.svg",
      },
      themeIsDark: "",
    };
  },
  props: [],
  methods: {
    toggleTheme() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        console.log("Theme is now light");
        document.querySelector("html").classList.remove("dark");
        this.changeThemeIsDark(false);
      } else {
        localStorage.theme = "dark";
        console.log("Theme is now dark");
        document.querySelector("html").classList.add("dark");
        this.changeThemeIsDark(true);
      }
      console.log(window.localStorage);
    },
    changeThemeIsDark(bool) {
      this.themeIsDark = bool;
    },
  },
  mounted() {
    if (localStorage.theme === "dark") {
      this.changeThemeIsDark(true);
    } else {
      this.changeThemeIsDark(false);
    }
  },
};
</script>
<template>
  <div>
    <img
      :src="themeIsDark ? this.icons.dark : this.icons.light"
      alt="Dark Mode Icon"
      class="w-10 h-10 md:w-12 md:h-12"
      @click="toggleTheme"
    />
  </div>
</template>
