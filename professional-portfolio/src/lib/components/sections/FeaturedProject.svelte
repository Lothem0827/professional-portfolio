<script>
  //components
  import Link from "../Link.svelte";
  //assets
  import featuredProject1 from "../../../assets/images/featured-projects/featured-project-1.png";
  import featuredProject2 from "../../../assets/images/featured-projects/featured-project-2.png";
</script>

<div class="section-wrapper">
  <section
    class="section-container flex flex-col justify-between bg-light text-background"
  >
    <div class=" ">
      <h1>featured project</h1>
    </div>

    <div class="grid grid-cols-12 gap-5s h-[70%]">
      <div
        class="flex justify-center select-none overflow-hidden rounded-[1em] col-span-6 md:col-span-12"
      >
        <img
          class="w-full object-cover hover:scale-125 ease-out duration-300 "
          src={featuredProject1}
          alt="hero"
        />
      </div>

      <div
        class=" flex justify-center select-none overflow-hidden  rounded-[1em] col-span-6 md:col-span-12"
      >
        <img
          class="w-full object-cover hover:scale-125 ease-out duration-300 "
          src={featuredProject2}
          alt="hero"
        />
      </div>

      <div class="col-span-3">
        <p class="w-[90%]">
          Teeraco is a print-on-demand store that sells plant-inspired products
          such as t-shirts, sweatshirts, mugs, and phone cases.
        </p>
      </div>
      <div class="col-span-3 flex flex-col text-right">
        <span>photography </span>
        <span>branding art </span>
        <span>direction </span>
      </div>
      <div class="col-span-6 text-right flex justify-end">
        <h3 class="w-[40%]">view full case study</h3>
      </div>
    </div>

    <div
      class="flex flex-wrap justify-between items-center pt-5s border-t-[1px] border-borderColor"
    >
      <div class="w-1/3 flex gap-6s items-center">
        <h3 class="w-[69%]">teeraco visual identity</h3>
      </div>
      <div class="w-1/3 flex justify-end">
        <Link text="works" theme="border-background">(6)</Link>
      </div>
    </div>
  </section>
</div>
