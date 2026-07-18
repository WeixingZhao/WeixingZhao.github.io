<script module lang="ts">
	export function parse(src: string) {
		return /^([a-zA-Z,.\s*#]+[.#])\s*\(?(\d*)\)?\s*(.*?\.)\s*([A-Z][A-Za-z.]*(\s+[A-Z][A-Za-z.]*)*)/.exec(
			src
		);
	}
</script>

<script lang="ts">
	interface PublicationOptions {
		data: string;
		href?: string;
		author?: string;
		journal?: string;
		publication?: string;
	}
	const {
		data,
		href,
		author: manualAuthor,
		journal: manualJournal,
		publication
	}: PublicationOptions = $props();

	const result = $derived(parse(data));
	const authors = $derived(manualAuthor || result![1]);
	const journal = $derived(manualJournal || result![4]);
	const title = $derived(publication || result![3]);
</script>

<p>{authors}</p>
<p><b>{journal}</b></p>
<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
<p><a class="text-link-active-color underline" {href} rel="external">{title}</a></p>
