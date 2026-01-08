<script lang="ts">
	const { children = undefined, class: className = '' } = $props();
</script>
<div class="flex">
	{@render children?.()}
</div>