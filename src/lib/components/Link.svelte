<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	interface TailwindHTMLAnchor extends Omit<HTMLAnchorAttributes, 'class'> {
		class?: ClassNameValue;
	}

	const { children, class: className, ...rest }: TailwindHTMLAnchor = $props();
</script>

<a class={twMerge('text-blue-800 underline', className)} {...rest}>
	{@render children?.()}
</a>
