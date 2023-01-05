<script>
  //components
  import Link from "./Link.svelte";

  //assets
  import logo from "../../assets/images/Logo.svg";
</script>

<header class="">
  <div
    class="flex flex-wrap items-center pb-5s border-b-[1px] border-borderColor"
  >
    <div class="w-1/3">
      <img src={logo} alt="Logo" class="w-14" />
    </div>
    <div class="w-1/3 flex justify-center gap-3s items-center">
      <div class="w-3 h-3 aspect-square	rounded-full bg-online" />
      available for freelance
    </div>
    <div class="w-1/3 flex justify-end">
      <Link text="menu" />
    </div>
  </div>
</header>
