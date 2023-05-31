<script>
  import { camperpinsService } from "../services/camperpins-service";
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  export let pinId = "";
  export let url = "";

  async function deleteImage() {
    console.log(`deleting ${url}`);
    const eventData = { img: url };
    console.log(`deleting thie event data ${eventData.img}`)
    dispatch('deleted', eventData);
    console.log('image deleted!')
    await camperpinsService.removeImage(pinId, url);
  }
</script>



<button class="button is-danger is-pulled-right is-small" on:click={deleteImage}>
  <span class="icon is-small">
    <i class="fas fa-times"></i>
  </span>
</button>
