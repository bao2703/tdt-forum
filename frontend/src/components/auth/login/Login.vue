<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5 lg4>
        <v-card class="elevation-12">
          <v-form @submit.prevent="handleLogin" v-model="valid" ref="form" lazy-validation>
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                prepend-icon="email"
                v-model="email"
                :rules="emailRules"
                label="Email"
                type="email"
                autofocus
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!valid || loading"
                :loading="loading"
                type="submit"
                color="primary"
              >Login</v-btn>
            </v-card-actions>
            <v-alert :value="error" type="error">{{error}}</v-alert>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Actions } from "@/store/auth/actions";

export default {
  components: {},
  data() {
    return {
      loading: false,
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required.",
        v => /.+@.+/.test(v) || "E-mail must be valid."
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required."],
      error: ""
    };
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    if (this.user) this.$router.replace("/");
  },
  methods: {
    handleLogin() {
      if (!this.$refs.form.validate()) return;

      this.toggleLoading(true);

      let { email, password } = this;

      this.$store
        .dispatch(Actions.LOGIN, { username: email, password })
        .then(() => {
          this.toggleLoading(false);
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          this.error = error;
          this.toggleLoading(false);
        });
    },
    toggleLoading(isOn) {
      this.loading = isOn;
    }
  }
};
</script>
