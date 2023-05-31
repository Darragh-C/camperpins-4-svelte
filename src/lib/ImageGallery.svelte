<script>
  import DisplayImage from "./DisplayImage.svelte";
  import DeleteImage from "./DeleteImage.svelte";

  export let imageUrls = []; 
  export let alt = "";
  export let pinId = "";

  let imageNum = 0;
  
  function nextImage() {
    if (imageNum < imageUrls.length - 2) {
      imageNum++;
    }
    
  }

  function prevImage() {
    if (imageNum !== 0) {
      imageNum--;
    }
    
  }


  function clearImageUrl() {
    console.log(`removing url from array`)
    const updatedArray = imageUrls.filter(item => item !== imageUrls[imageNum]);
    imageUrls = updatedArray;
    imageNum = 0;
  }

</script>

<div class="box">
  <div class="has-text-centered">
    <h3 class="title is-3">{alt} images</h3>
  </div>
  <br/>
  <div class="columns">
    <div class="column has-text-centered"><button class="button is-link" on:click={prevImage}>Previous</button></div>
    <div class="column">
      <DisplayImage imageUrl={imageUrls[imageNum]} alt={alt}/>
    </div>
    <div class="column has-text-centered"><button class="button is-link" on:click={nextImage}>Next</button></div>
  </div>  
  <DeleteImage pinId={pinId} url={imageUrls[imageNum]} on:deleted={clearImageUrl} />
  <br/>
</div>



