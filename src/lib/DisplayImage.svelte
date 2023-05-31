<script>
  export let imageUrl = ""; 
  export let alt = "";
</script>

<div class="card-image">
  <figure class="image is-150x150">
      <img alt={`Image of ${alt}`} src={imageUrl}>
  </figure>
</div>


