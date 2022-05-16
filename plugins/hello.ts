export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (name: string) => `Hello There ${name}...!!!`,
    },
  };
});
