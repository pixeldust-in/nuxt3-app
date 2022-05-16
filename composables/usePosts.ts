import { IPost } from "~/types";

// const state = reactive<{
//   posts: IPost[];
//   fetched: boolean;
//   loading: boolean;
// }>({
//   posts: [],
//   fetched: false,
//   loading: false,
// });

// const state = useState<{
//   posts: IPost[];
//   fetched: boolean;
//   loading: boolean;
// }>("state", () => {
//   return { posts: [], fetched: false, loading: false };
// });

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

  return { posts, pending, refresh };
};
