<script>
  import { createEventDispatcher } from 'svelte';

  export let options = [];
  let selectedOption = '';
  export let filterName = '';

  const dispatch = createEventDispatcher();

  function updateOption(event) {
    console.log(`dispatching selected option event: ${selectedOption}`)
    event.preventDefault();
    dispatch('selectedOption', { option: selectedOption });
  }

</script>

<form on:submit={updateOption}>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
          <div class="control">
              <div class="select">
                  <select name="filter" bind:value={selectedOption}>
                    {#each options as option}
                      <option value="{option}">{option}</option>
                    {/each}
                  </select>
              </div>
          </div>
        </div>
      </div>  
      <div class="field is-horizontal">
        <button class="button is-link">Filter {filterName}</button>
      </div>    
  </div>
</form>