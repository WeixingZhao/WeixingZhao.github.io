<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PublicationYearOptions {
		year: number | string;
		open?: boolean;
		children?: Snippet<[]>;
	}

	const { year, open = true, children }: PublicationYearOptions = $props();
</script>

<details {open}>
	<summary class="text-4xl select-none">{year}</summary>
	<ol>
		{@render children?.()}
	</ol>
</details>
