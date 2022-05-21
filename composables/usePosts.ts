import { IPost } from "~/types";

const state = reactive<{
  posts: IPost[];
  fetched: boolean;
}>({
  posts: [],
  fetched: false,
});

export const usePosts = async () => {
  const {
    data: posts,
    pending,
    refresh,
  } = await useLazyAsyncData(
    "posts",
    () =>
      $fetch("https://jsonplaceholder.typicode.com/posts") as Promise<IPost[]>
  );

  watchEffect(() => {
    if (!pending.value) {
      state.posts = posts.value;
      state.fetched = true;
    } else {
      state.posts = [];
      state.fetched = false;
    }
  });

  return { pending, refresh, ...toRefs(state) };
};
