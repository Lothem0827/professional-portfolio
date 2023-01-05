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
          <h1>we can accomplish amazing things together</h1>
        </div>
        <div class="text-right flex justify-end items-end md:text-center">
          <p class="w-[60%] md:w-full">
            Thank you for looking portfolio. I am excited at the possibility of
            working with you.
          </p>
        </div>
      </div>

      <div
        class="flex flex-wrap justify-between items-center pt-5s border-t-[1px] border-borderColor"
      >
        <div class="w-1/3 flex flex-col gap-1s">
          <a href="/">pixeline.freelance@gmail.com</a>
          <a href="/"><h2>contact us</h2></a>
        </div>
        <div class="w-1/3 flex flex-col text-right ">
          <a href="/"><h4>instagram</h4></a>
          <a href="/"><h4>behance</h4></a>
          <a href="/"><h4>linkein</h4></a>
        </div>
      </div>
    </div>
  </section>
</div>
