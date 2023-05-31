<script>
  import DisplayImage from "./DisplayImage.svelte";

  export let imageUrls = []; 
  export let alt = "";

  let imageNum = 0;
  
  function nextImage() {
    if (imageNum !== imageUrls.length - 1) {
      imageNum++;
    }
    
  }

  function prevImage() {
    if (imageNum !== 0) {
      imageNum--;
    }
    
  }
</script>

<div class="box">
  <div class="has-text-centered">
    <h3 class="title is-3">{alt} images</h3>
  </div>
  <div class="columns">
    <div class="column has-text-centered"><button class="button is-link" on:click={prevImage}>Previous</button></div>
    <div class="column"><DisplayImage imageUrl={imageUrls[imageNum]} alt={alt}/></div>
    <div class="column has-text-centered"><button class="button is-link" on:click={nextImage}>Next</button></div>
  </div>  
</div>

