<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PublicationListOptions {
		total: number;
		children?: Snippet<[]>;
	}

	const { total, children }: PublicationListOptions = $props();
	const counterStart = $derived(total + 1);
</script>

<div
	class="px-3"
	style:--publication-counter-start={counterStart}
	style:counter-reset="publication var(--publication-counter-start)"
>
	{@render children?.()}
</div>
