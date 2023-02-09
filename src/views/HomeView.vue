<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Index from "../components/dashboard/Index.vue";
import Headers from "../components/dashboard/Header.vue";
import Banner from "../components/dashboard/Banner.vue";
import About from "../components/dashboard/About.vue";
import Information from "../components/dashboard/Information.vue";
import Footers from "../components/dashboard/Footer.vue";
</script>

<template>
  <div>
    <Headers />
    <div class="container-fluid bg-danger vh-75">
      <div class="container">
        <Banner />
      </div>
    </div>

    <div class="container">
      <About />
    </div>

    <div class="container-fluid bg-danger vh-60 mt-xlarge">
      <div class="container">
        <Information />
      </div>
    </div>

    <div class="container-fluid bg-dark vh-25">
      <div class="container">
        <Footers />
      </div>
    </div>

    <div class="container-fluid bg-darked py-3">
      <h6 class="text-center text-white">COPYRIGHT © 2023 <a href="" class="text-danger text-decoration-none">PT Sinergi Informatika Semen Indonesia</a>, anak usaha dari PT Semen Indonesia TBK. All rights reserved.</h6>
    </div>

  </div>
  <!-- <main>
    <TheWelcome />
  </main> -->
</template>
