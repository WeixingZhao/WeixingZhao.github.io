<script lang="ts">
	import SiteDirectory from '$lib/components/SiteDirectory.svelte';
	import type { Snippet } from 'svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';

	interface PageComponentProps {
		prelude?: Snippet<[]>;
		children?: Snippet<[]>;
		useDefaultContainer?: boolean;
	}
	const { prelude, children, useDefaultContainer = true }: PageComponentProps = $props();
	const id = $props.id();
</script>

{@render prelude?.()}
<div class="flex min-h-screen flex-col">
	<header>
		<div class="grid h-80 bg-[url('/dna.png')] bg-cover bg-fixed bg-top bg-no-repeat">
			<div class="container mx-auto mt-auto">
				<div
					class="grid grid-cols-[1fr_auto] bg-contain bg-right bg-no-repeat md:bg-[url('/badge.png')]"
				>
					<h1 class="text-6xl font-thin">Zhao Lab</h1>
					<label for={`${id}-openMenu`} class="aspect-square translate-y-1 md:hidden">
						<Menu strokeWidth="1" class="size-full" />
						<span class="sr-only">Open menu</span>
					</label>
				</div>
				<input type="radio" id={`${id}-openMenu`} name={`${id}-menuToggle`} class="peer sr-only md:hidden" />
				<input type="radio" id={`${id}-closeMenu`} name={`${id}-menuToggle`} class="sr-only md:hidden" />
				<nav
					class="inset-0 z-10 w-full peer-checked:block max-md:fixed max-md:hidden max-md:h-screen max-md:bg-white md:shadow-inner md:backdrop-blur-xs"
				>
					<ul class="grid-flow-col max-md:space-y-4 md:grid">
						<SiteDirectory
							class="inline-block text-6xl decoration-from-font  max-md:my-animate-bounce max-md:font-thin max-md:underline md:size-full md:p-4 md:text-center md:text-base"
						/>
						<!--If you add a media query to animate, it resets delay-->
					</ul>
					<label for={`${id}-closeMenu`} class="md:hidden">
						<X size={48} strokeWidth={1} class="inline" />

						<span class="sr-only">Close menu</span>
					</label>
				</nav>
			</div>
		</div>
	</header>
	<main class="flex-1">
		{#if useDefaultContainer}
			<div class="container m-auto">
				{@render children?.()}
			</div>
		{:else}
			{@render children?.()}
		{/if}
	</main>
	<footer class="bg-amber-600">
		<div class="container m-auto grid grid-cols-[auto_auto_1fr] gap-4">
			<section>
				<h1 class="font-semibold">Address</h1>
				<address>
					<p>University of Texas at San Antonio</p>
					<p>7703 Floyd Curl Drive</p>
					<p>San Antonio, Texas 78229</p>
				</address>
			</section>
			<nav>
				<ul>
					<SiteDirectory />
				</ul>
			</nav>
		</div>
	</footer>
</div>
