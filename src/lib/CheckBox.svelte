<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher(); 

  export let checkBoxes = [];
  let checkedBoxes = [];

  function checked(event) {
    const isChecked = event.target.checked;
    const value = event.target.value;

    if (isChecked) {
      checkedBoxes = [...checkedBoxes, value];
    } else {
      checkedBoxes = checkedBoxes.filter(item => item !== value);
    }
    console.log(checkedBoxes);
    dispatch('updatedCheckboxes', { array: checkedBoxes });
  }


</script>

{#each checkBoxes as checkBox}
  <div>
    <label class="checkbox">
      <input type="checkbox" value={checkBox} on:change={checked} />
      {checkBox} 
    </label>
  </div>
{/each}