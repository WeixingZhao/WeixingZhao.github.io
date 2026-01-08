<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	const { class: className = '' } = $props();
	// TODO: Fly them up on disappearing
</script>

<li><a class={twMerge('[--my-sibling-index:0]', className)} href="/">Home</a></li>
<li><a class={twMerge('[--my-sibling-index:1]', className)} href="/positions/">Positions</a></li>
<li><a class={twMerge('[--my-sibling-index:2]', className)} href="/research/">Research</a></li>
<li><a class={twMerge('[--my-sibling-index:3]', className)} href="/people/">People</a></li>
<li><a class={twMerge('[--my-sibling-index:4]', className)} href="/publications/">Publications</a></li>
