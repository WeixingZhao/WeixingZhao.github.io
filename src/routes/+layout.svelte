<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/icon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<link rel="preload" fetchpriority="high" href="/badge.png" as="image" type="image/png" media="width >= 48rem"/>
	<link rel="preload" fetchpriority="high" href="/dna.png" as="image" type="image/png" />
	<meta name="description" content="Zhao lab website" />
</svelte:head>
{@render children()}
