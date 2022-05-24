import { IPost } from "~/types";
export default async () => {
  const data = (await $fetch(
    "https://jsonplaceholder.typicode.com/posts"
  )) as IPost[];
  return data;
};
