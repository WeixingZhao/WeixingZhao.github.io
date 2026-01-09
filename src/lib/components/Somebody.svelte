<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SomebodyComponentProps {
		isA: string;
		looksLike: string;
		named: string;
		children?: Snippet<[]>;
	}
	const { isA, looksLike, named, children }: SomebodyComponentProps = $props();
</script>

<div class="grid grid-cols-subgrid col-span-2 md:col-start-2">
	<img src={looksLike} alt={named} class="aspect-square w-32 rounded-full object-cover" />
	<div>
		<p class="italic">{named}</p>
		<p class="font-semibold">{isA}</p>
		<p>
			{@render children?.()}
		</p>
	</div>
</div>
