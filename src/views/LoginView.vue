<template>
  <div>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col bg-danger vh-100 text-center">
          <img alt="Vue logo" class="logo img-fluid mx-auto position-absolute mt-large" src="@/assets/asset/meeting.webp" width="450" height="450"/>
        </div>
        <div class="col bg-white">
          <div class="card w-75 mx-auto">
            <div class="card-title text-center border-top-5 border-danger">
              <img alt="Vue logo" class="logo img-fluid mx-1" src="@/assets/asset/logocrm.webp" width="200" height="200"/>
            </div>
            <div class="card-body">
              <div class="form-floating mb-3">
                <input type="email" v-model="txtEmail" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" v-model="txtPassword" class="form-control" id="floatingPassword" placeholder="Password" @keyup.enter="onLogin">
                <label for="floatingPassword">Password</label>
              </div>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-danger btn-lg py-3 rounded w-100" @click="onLogin">MASUK</button>
              <RouterLink to="/" class="text-muted text-decoration-none py-3 btn">Kembali Keberanda</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { inject } from "vue";
// import $ from "jquery";

export default {
  name: "AuthLogin",
  // setup() {
  //   const Vue3GoogleOauth = inject("Vue3GoogleOauth");
  //   const { locale, t } = useI18n({ inheritLocale: true });
  //   return { locale, t, Vue3GoogleOauth };
  // },
  data: () => ({
    app_name: "Test",
    txtEmail: "",
    txtPassword: "",
  }),
  created() {
    
  },
  mounted() {},

  methods: {
    async onLogin() {
      this.$swal.showLoading();
      try {
        if (this.txtEmail === "" || this.txtPassword === "") {
          this.$swal({
            icon: "warning",
            title: "warning",
            text: "Fill the email or password",
          });
          return false;
        }

        const config = {
          headers:{
            'Content-Type': 'application/json',
          }
        };
        const url = "https://dummyjson.com/auth/login";

        const data ={
          username: this.txtEmail, //kminchelle
          password: this.txtPassword, //0lelplR
        }
        this.$axios.post(url, data, config)
        .then((response) => {
          // this.$swal.showLoading();
          // localStorage.setItem("username", response.data.username);
          // this.$router.push({ name: "home" });
          // this.$swal.close();
          // return false;

          this.$swal({
              icon: "success",
              title: "Welcome",
              text: "You're Signin",
            }).then(() => {
              if (response.data) {
                localStorage.setItem("username", response.data.username);

                this.$router.push({ name: "home" });
              }
            });
        })
        .catch(err => console.log(err));
        // this.$axios
        //   .request({
        //     url: "https://dummyjson.com/auth/login",
        //     method: "POST",
        //     params: {
        //       username: this.txtEmail,
        //       password: this.txtPassword,
        //     },
        //   })
        //   .then((response) => {
        //     if (response.data.data) {
        //       if (!response.data.data.user.role) {
        //         // this.$router.push({ name: "VerificationRole" });
        //         console.log("oke berhasil");
        //         this.$swal.close();
        //         return false;
        //       }
        //     }

        //     this.$swal({
        //       icon: response.data.data ? "success" : "warning",
        //       title: response.data.title ?? "",
        //       text: response.data.message,
        //     }).then(() => {
        //       if (response.data.data) {
        //         localStorage.setItem("token", response.data.data.token);
        //         // this.$router.push({ name: "Home" });
        //       }
        //     });
        //   })
        //   .catch((error) => {
        //     this.checkError(error);
        //   });
      } catch (error) {
        console.log(error);
        this.$swal({
          icon: "warning",
          text: error,
        });
      }
    },
  },
};
</script>
