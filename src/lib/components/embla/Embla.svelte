<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import type { EmblaCarouselType } from 'embla-carousel';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import WheelGesturesPlugin from 'embla-carousel-wheel-gestures';
	const { children = undefined, class: className = '' } = $props();
	const autoplayPlugin = Autoplay({
		stopOnInteraction: false
	});
	const plugins = [autoplayPlugin, WheelGesturesPlugin()];
	let emblaApi = $state<EmblaCarouselType>();
</script>

<div id="content" class={className}>
	<div
		class="overflow-hidden"
		use:emblaCarouselSvelte={{ options: { loop: true, skipSnaps: true }, plugins }}
		onemblaInit={({ detail: api }) => (emblaApi = api)}
	>
		{@render children?.()}
	</div>
	<button
		onclick={() => emblaApi && (emblaApi.scrollPrev(), autoplayPlugin.reset())}
		aria-label="Previous slide"><ChevronLeft /></button
	>
	<button
		onclick={() => emblaApi && (emblaApi.scrollNext(), autoplayPlugin.reset())}
		aria-label="Next slide"><ChevronRight /></button
	>
</div>
