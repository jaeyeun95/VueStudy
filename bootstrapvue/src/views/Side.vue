<template>
  <div>
    <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
    <b-sidebar
      id="sidebar-right"
      title="Sidebar"
      bg-variant="dark"
      text-variant="light"
      right
      shadow
    >
      <div class="px-3 py-2"></div>
    </b-sidebar>
  </div>
</template>
<script>
export default {};
</script>
