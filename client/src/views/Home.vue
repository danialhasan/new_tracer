<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      devServerURL: "http://localhost:9000",
    };
  },
  methods: {
    submitAddress(e) {
      e.preventDefault(); // don't submit form
      let address = document.querySelector("input");
      console.log(address.value);
      axios
        .get(`${this.devServerURL}/api/address`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div class="w-full min-h-full text-center">
    <h1 class="font-bold text-4xl pt-12 md:mt-24 md:text-5xl px-4">
      Crypto Address Tracer
    </h1>
    <div class="w-full md:max-w-[500px] lg:max-w-[600px] md:mx-auto px-7 pt-7">
      <form
        @submit="submitAddress"
        class="md:flex flex-row md:space-x-2 items-center"
      >
        <input
          class="
            w-full
            h-12
            md:h-14
            rounded-lg
            text-gray-800
            truncate
            border-2 border-black
            dark:border-gray-50
          "
          type="text"
        />
        <button
          class="
            md:w-64
            md:py-3
            md:m-0
            my-2
            w-full
            bg-blue-500
            text-gray-50
            py-5
            text-2xl
            font-bold
            rounded-xl
          "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    <!-- 
      <div class="h-auto w-auto md:flex md:align-center md:w-full md:h-auto md:mx-auto md:justify-center">
        <input id="addressInput" type="text" class="transition-all bg-gray-400 focus:bg-gray-500 placeholder-gray-200 w-5/6 md:w-2/5 xl:w-96 md:mr-2 h-auto pl-3 py-3 text-xl text-white text-left truncate
        md:rounded-lg" placeholder="Ethereum address/ENS here">
        <button id="submitBtn" class="transition-all active:bg-custom_red-700 hover:bg-custom_red-500 text-3xl text-white font-sans font-semibold w-5/6 md:w-1/6 xl:w-1/12 py-4 md:px-2 md:py-2 mt-2 rounded-xl bg-custom_red-400 shadow-md 
        md:text-2xl md:rounded-xl md:mt-0">Search</button>
    </div>
     -->
    <div class="absolute bottom-0 w-full h-auto object-cover">
      <img src="/assets/background_wave.svg" alt="" srcset="" />
    </div>
  </div>
</template>