<script>
  import { camperpinsService } from "../services/camperpins-service";
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  export let pinId = "";
  export let url = "";

  async function deleteImage() {
    const success = await camperpinsService.removeImage(pinId, url);
    if (success) {
      dispatch('deleted');
      console.log('image deleted!')
    }
  }
</script>



<button class="button is-danger is-right" on:click={deleteImage}>
  <span class="icon is-small">
    <i class="fas fa-times"></i>
  </span>
</button>
