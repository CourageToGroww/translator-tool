<script>
  import { onMount, onDestroy } from 'svelte';

  // Array of image sources
  let images = [
    "/jp2.png",
    "/buddha2.png",
    "/ch1.png",
    "/TibetanMastiff.png",
    "/th2.png",
    "/ch2.png",
    "/th1.png",
    "/jp1.png",
    "/buddha3.png"
  ];

  let currentImageIndex = 0;
  let intervalId;

  onMount(() => {
    // Switch images every 3 seconds (3000 milliseconds)
    intervalId = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 6000);
  });

  onDestroy(() => {
    // When the component is destroyed, clear the interval
    clearInterval(intervalId);
  });

  function handleImageLoad(event) {
    const img = event.target;
    img.classList.remove('fade-out');
    img.classList.add('fade-in');
  }
</script>



<div class="rounded overflow-hidden opacity-40 ease mx-auto my-auto">
  {#each images as image, index}
    {#if index === currentImageIndex}
      <img
        src={image}
        alt="Background"
        class="{index === currentImageIndex}"
        on:load={handleImageLoad}
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    {/if}
  {/each}
</div>