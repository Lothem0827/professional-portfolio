<script>
  import HeaderBottomNavigation from "../HeaderBottomNavigation.svelte";
  import HeaderNavigation from "../HeaderNavigation.svelte";
</script>

<div class="section-wrapper">
  <section class="section-container pt-0 pb-0 flex flex-col justify-between ">
    <HeaderNavigation />

    <div class="flex flex-col gap-9s ">
      <div
        id="header"
        class="flex justify-between md:flex-col md:text-center md:gap-4s "
      >
        <div class="w-3/5 md:w-full">
          <h1>Hello, I’m Carl A Visual Designer Based in Cebu, Ph</h1>
        </div>
        <div class="text-right flex justify-end items-end md:text-center">
          <p class="w-[60%] md:w-full">
            I focused on designing digital experience on both web and mobile
            applications.
          </p>
        </div>
      </div>

      <HeaderBottomNavigation />
    </div>
  </section>
</div>
