export default async () => {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();
  return await data.length;
};
