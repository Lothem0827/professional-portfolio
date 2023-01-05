<script>
  import Link from "../Link.svelte";
  //assets
  import myPicture from "../../../assets/images/my-picture.png";
</script>

<div class="section-wrapper">
  <section class="section-container flex flex-col justify-between bg-grayColor">
    <div class="flex justify-between items-end">
      <div class="w-1/2 "><h1>contemporary designer</h1></div>
      <div class="w-1/5 text-right flex justify-end">
        <p class="w-[90%] ">
          contemporary designs that are tailored to the needs of modern
          businesses
        </p>
      </div>
    </div>
    <div class="w-1/2 self-end text-right"><h1>for modern business</h1></div>

    <div class="grid grid-cols-12 ">
      <div class="col-span-3 flex flex-col gap-6s">
        <div class="">
          <img class="rounded-[0.57em]" src={myPicture} alt="" />
        </div>
        <p class="w-[60%]">
          Visual designer with half a decade of experience in branding, digital
          design, and UI/UX design.
        </p>
      </div>
      <div class="col-span-8 self-end">
        <a href="/" class="underline">know me more</a>
      </div>
      <div class="col-span-1 justify-self-end	self-end">
        <Link text="works">(6)</Link>
      </div>
    </div>
  </section>
</div>
