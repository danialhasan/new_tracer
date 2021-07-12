<script>
import DarkModeIcon from "@/components/DarkModeIcon.vue";

export default {
  data() {
    return {};
  },
  components: {
    DarkModeIcon,
  },
};
</script>

<template>
  <div class="">
    <header class="w-full h-auto flex justify-end p-8">
      <!-- change dark mode icon here -->
      <dark-mode-icon />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
