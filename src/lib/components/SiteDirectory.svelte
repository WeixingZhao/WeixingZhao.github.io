<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { resolve } from '$app/paths';
	const { class: className = '' } = $props();
	// TODO: Fly them up on disappearing
</script>

<li><a class={twMerge('[--my-sibling-index:0]', className)} href={resolve('/')}>Home</a></li>
<li>
	<a class={twMerge('[--my-sibling-index:1]', className)} href={resolve('/positions/')}>Positions</a
	>
</li>
<li>
	<a class={twMerge('[--my-sibling-index:2]', className)} href={resolve('/research/')}>Research</a>
</li>
<li>
	<a class={twMerge('[--my-sibling-index:3]', className)} href={resolve('/people/')}>People</a>
</li>
<li>
	<a class={twMerge('[--my-sibling-index:4]', className)} href={resolve('/publications/')}
		>Publications</a
	>
</li>
