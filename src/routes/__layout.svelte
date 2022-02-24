<script lang="ts">
  import '../app.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px;
  }
</style>