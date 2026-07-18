<script lang="ts">
	import type { Snippet } from 'svelte';
	import PublicationItem from './PublicationItem.svelte';

	interface PublicationEntryOptions {
		children?: Snippet<[]>;
	}

	const { children }: PublicationEntryOptions = $props();
</script>

<PublicationItem>
	{@render children?.()}
</PublicationItem>
