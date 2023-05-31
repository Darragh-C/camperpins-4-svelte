<script>
  export let imageUrl = ""; 
  export let alt = "";
</script>

<div class="card-image">
  <figure class="image is-100x100">
      <img alt={`Image of ${alt}`} src={imageUrl}>
  </figure>
</div>


