<template>
  <div>
    <apollo-query :query="require('@/apollo/graphql/users.gql')">
      <template slot-scope="{ result: { data, loading } }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="data">
          <div v-for="user of data.users" :key="user.username">{{user.username}}</div>
        </div>
      </template>
    </apollo-query>

    <div v-if="user">{{user.username}}</div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {};
  },

  apollo: {
    user: gql`
      query {
        user(username: "abc") {
          id
          username
          password
        }
      }
    `
  }
};
</script>
