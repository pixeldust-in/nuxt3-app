<template>
  <div
    v-if="pending"
    class="h-screen text-center flex justify-center items-center"
  >
    Loading...
  </div>
  <div
    v-else
    class="flex flex-col justify-center items-center mx-auto h-screen"
  >
    <div class="mb-4">No of posts: {{ posts.length }}</div>
    <button
      @click="refreshData"
      w:bg="cyan-500"
      w:m="b-4"
      w:p="2"
      w:border="rounded-lg"
      w:shadow="lg dark-900"
      w:text="white"
      w:hover="text-black bg-cyan-200"
    >
      Refresh
    </button>
    <div>{{ $hello("Noopur") }}</div>
  </div>
</template>
<script setup lang="ts">
const { posts, pending, refresh } = await usePosts();

const refreshData = async () => {
  await refresh();
};

const { $hello } = useNuxtApp();
</script>
