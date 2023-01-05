<script>
  //components
  import AllProjectImageWrapper from "../AllProjectImageWrapper.svelte";
  import Link from "../Link.svelte";
  //assets
  import project1 from "../../../assets/images/all-projects/project1.png";
  import project2 from "../../../assets/images/all-projects/project2.png";
  import project3 from "../../../assets/images/all-projects/project3.png";
</script>

<div class="section-wrapper">
  <section
    class="section-container flex flex-col justify-between bg-light text-background"
  >
    <div class="flex flex-col gap-4s">
      <div class=" ">
        <h1>all projects</h1>
      </div>

      <div class="flex justify-between items-center">
        <div class="w-1/3">
          <p class="w-[45%]">
            selected projects on branding, visual design and illustration
          </p>
        </div>

        <div class="w-1/3 text-center">
          <p>swipe for more</p>
        </div>

        <div class="w-1/3 text-right">
          <h4>3/6</h4>
        </div>
      </div>
    </div>

    <div class="flex gap-11s">
      <AllProjectImageWrapper source={project1}>
        <Link text="math fun ui/ux design" theme="border-background" />
      </AllProjectImageWrapper>
      <AllProjectImageWrapper source={project2}>
        <Link text="aestylect visual identity" theme="border-background" />
      </AllProjectImageWrapper>
      <AllProjectImageWrapper source={project3}>
        <Link text="personal illustration" theme="border-background" />
      </AllProjectImageWrapper>
    </div>

    <!-- bottom -->
    <div
      class="flex flex-wrap justify-between items-center pt-5s border-t-[1px] border-borderColor"
    >
      <div class="w-1/3 flex gap-6s items-center">
        <h3 class="">view archive</h3>
      </div>
      <div class="w-1/3 flex justify-end text-right">
        <p class="w-1/3">ARCHIVE are projects for fun and experimentation.</p>
      </div>
    </div>
  </section>
</div>
