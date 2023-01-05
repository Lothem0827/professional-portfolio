<script>
  //components
  import Link from "./Link.svelte";

  //assets
  import logo from "../../assets/images/Logo.svg";
</script>

<header class="">
  <div
    class="flex flex-wrap justify-between items-center pt-5s border-t-[1px] border-borderColor"
  >
    <div class="w-1/3 flex gap-6s items-center">
      <a href="/">behance</a>
      <a href="/">instagram</a>
      <a href="/">linkein</a>
    </div>
    <div class="w-1/3 flex justify-end">
      <Link text="works" />
    </div>
  </div>
</header>
