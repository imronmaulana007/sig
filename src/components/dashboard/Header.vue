<template>
    <header class="py-3 bg-danger border-bottom">
        <div class="container-fluid">
        <div class="container">
            <div class="row align-items-center">
            <div class="col">
                <img alt="Vue logo" class="logo img-fluid" src="@/assets/asset/crm.png" width="200" height="125"/>
            </div>
            <div class="col text-right">
                <RouterLink to="/login" class="btn btn-lg btn-outline-light rounded" v-if="username == null">Login</RouterLink>
                <div class="div" v-else>
                    <span class="text-white font-weight-bold mx-1">Hi {{ username }} | </span>
                    <a href="#" class="text-decoration-none text-white mx-1"  @click="goLogout">Logout</a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </header>
</template>


<script>
export default {
  name: "AuthLogin",
  data: () => ({
    app_name: "Test",
    username: localStorage.getItem("username") ?? null,
  }),
  created() {
  },
  mounted() {
  },

  methods: {
    async goLogout() {
      try {
        this.$swal({
          title: "Are you sure ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            // this.$axios
            //   .request({
            //     url: "/auth/logout",
            //     method: "POST",
            //     headers: {
            //       Authorization: "Bearer " + localStorage.getItem("token"),
            //     },
            //   })
            //   .then(() => {})
            //   .catch((error) => {
            //   });
            localStorage.clear();
            this.$router.push("/login");
          }
        });
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
