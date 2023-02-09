<script setup>
// import WelcomeItem from "./WelcomeItem.vue";
// import DocumentationIcon from "./icons/IconDocumentation.vue";
// import ToolingIcon from "./icons/IconTooling.vue";
// import EcosystemIcon from "./icons/IconEcosystem.vue";
// import CommunityIcon from "./icons/IconCommunity.vue";
// import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
    <div class="row vh-75 align-items-center">
        <div class="col-7">
            <h1 class="text-white my-4">MUDAH, AKURAT, EFEKTIF & EFISIEN.</h1>
            <h5 class="text-white"> Selamat datang di AksesToko-CRM </h5>
            <h5 class="text-white mb-4 lh-lg">Segera daftarkan perusahaan anda untuk mendapatkan layanan CRM guna meningkatkan kinerja & layanan untuk meraih kepuasan pelanggan.</h5>
            <div class="bg-white rounded p-5">
                <div class="row">
                    <div class="col">
                        <span class="d-block mb-1 text-warning text-center">Mapping</span>
                        <span class="d-block mb-1 text-warning font-weight-bold">Mapping Customer</span>
                    </div>
                    <div class="col">
                        <span class="d-block mb-1 text-orange text-center">Mapping</span>
                        <span class="d-block mb-1 text-orange font-weight-bold">Schedule Survey</span>
                    </div>
                    <div class="col">
                        <span class="d-block mb-1 text-danger text-center">Mapping</span>
                        <span class="d-block mb-1 text-danger font-weight-bold">Survey Product & Market</span>
                    </div>
                    <div class="col ">
                        <span class="d-block mb-1 text-danger text-center">Mapping</span>
                        <span class="d-block mb-1 text-danger font-weight-bold">Dashboard & Evaluation</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col bg-warning p-1 d-block"></div>
                    <div class="col bg-orange p-1 d-block"></div>
                    <div class="col bg-danger p-1 d-block"></div>
                    <div class="col bg-danger p-1 d-block"></div>
                </div>
            </div>
            <div class="row">
                <div class="col text-center my-2">
                    <img alt="Vue logo" class="logo img-fluid mx-1" src="@/assets/asset/google-play.webp" width="200" height="200"/>
                    <img alt="Vue logo" class="logo img-fluid mx-1" src="@/assets/asset/app-store.webp" width="200" height="200"/>
                </div>
            </div>
        </div>
        <div class="col-5">
            <img alt="Vue logo" class="logo img-fluid" src="@/assets/asset/download.webp"/>
        </div>
    </div>
</template>

<style scoped>
.bg-orange{
    background-color: orange;
}
.text-orange{
    color: orange;
}
</style>