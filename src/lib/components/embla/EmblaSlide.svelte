<script lang="ts">
	const { children = undefined } = $props();
</script>
<div class="min-w-0 shrink-0 grow-0 basis-full">
	{@render children?.()}
</div>