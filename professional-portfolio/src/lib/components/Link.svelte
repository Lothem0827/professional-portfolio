<script>
  export let text;
  export let theme = "theme";
</script>

<div class="border-2 w-fit px-3s py-1s rounded-full {theme}">
  {text}
  <slot />
</div>
