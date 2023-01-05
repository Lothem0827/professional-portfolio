<script>
  //assets
  export let source = "no image";
</script>

<div class="w-1/3  ">
  <div class="h-full w-full overflow-hidden mb-4s rounded-[1em]">
    <img
      class=" w-full  h-full object-cover hover:scale-125 ease-out duration-300 rounded-[1em]"
      src={source}
      alt="hero"
    />
  </div>

  <slot />
</div>
