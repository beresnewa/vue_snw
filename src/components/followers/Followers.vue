<template>
  <li>
    <h2>
      <span></span>
      <button class="delete" >X</button>
    </h2>
    <button >
       Details
    </button>
    <button >
      Toggle Valid
    </button>
    <ul v-if="detailsAreVisible">
      <li> 
        <strong>Phone:</strong>
        <input   />
        <button > Edit</button>
      </li>
      <li>
        <strong>Email:</strong>
        <input />
        <button > Edit</button>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
    
}
</script>