import svelte from 'rollup-plugin-svelte';

// ...

export default {
  // ...

  plugins: [
    svelte({
      // ...
      hot: false, // Disable HMR
    }),
  ],

  // ...
};
