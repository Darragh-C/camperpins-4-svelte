<script>
  import { camperpinsService } from "../services/camperpins-service";
  import DeleteImage from "./DeleteImage.svelte";
  import DisplayImage from "./DisplayImage.svelte";
  import { createEventDispatcher } from 'svelte';
  import ImageGallery from "./ImageGallery.svelte";
  
  

  export let pin; 
  let fileName = '';
  let fileInput; 
  let imageUrl = pin.img; 

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      fileName = files[0].name;
    }
  };

  async function uploadImage () {
    const formData = new FormData();
    formData.append('imagefile', fileInput.files[0]);
    console.log(formData);
    const newUrl = await camperpinsService.uploadImage(pin._id, formData);
    if (newUrl) {
      imageUrl.push(newUrl);
      updateUrlArray();
    }
    
  }

  function clearImageUrl(url) {
    const updatedArray = imageUrl.filter(item => item !== url);
    imageUrl = updatedArray;
  }

  function updateUrlArray() {
    imageUrl = [...imageUrl];
  }
</script>

{#if pin.img.length > 0} 
  <ImageGallery pinId={pin._id} imageUrls={imageUrl} alt={pin.name} on:deleted={clearImageUrl}/>
{/if}

<div class="card-content">
<form on:submit|preventDefault={uploadImage}>
  <div id="file-select" class="file has-name is-fullwidth">
    <label class="file-label"> 
      <input bind:this={fileInput} class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg" on:change={handleFileChange}>
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          Choose a file…
        </span>
        </span>
      <span class="file-name">{fileName}</span>
    </label>
    <button type="submit" class="button is-info">Upload Image</button>
  </div>
</form>
</div>


<!--
{#if imageUrl[0]}
  <div >
    <div class="columns is-multiline is-mobile">
      {#each imageUrl as url}
        <div class="column">
          <DeleteImage pinId={pin._id} url={url} on:deleted={clearImageUrl(url)} />
          <ImageGallery imageUrl={url} alt={pin.name}/>
        </div>
      {/each}
    </div>
  </div> 
{/if} 
-->