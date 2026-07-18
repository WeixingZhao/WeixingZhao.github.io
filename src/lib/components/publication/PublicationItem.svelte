<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PublicationItemOptions {
		children?: Snippet<[]>;
	}

	const { children }: PublicationItemOptions = $props();
	const markerContent = `counter(publication) "."`;
</script>

<li
	class="relative ps-10 before:absolute before:left-0 before:w-8 before:text-right before:content-[var(--publication-marker)]"
	style:counter-increment="publication -1"
	style:--publication-marker={markerContent}
>
	{@render children?.()}
</li>
