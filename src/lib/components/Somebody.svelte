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

<div class="my-3 grid grid-cols-[8rem_1fr] gap-6">
	<img
		src={looksLike}
		alt={named}
		class="float-left mr-3 block aspect-square w-32 rounded-full object-cover object-center"
	/>
	<div>
		<p class="italic">{named}</p>
		<p class="font-semibold">{isA}</p>
		<p>
			{@render children?.()}
		</p>
	</div>
</div>
