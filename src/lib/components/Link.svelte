<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	const { children, class: className, ...rest }: HTMLAnchorAttributes = $props();
</script>

<a class={twMerge('text-blue-800 underline', className as ClassNameValue)} {...rest}>
	{@render children?.()}
</a>
