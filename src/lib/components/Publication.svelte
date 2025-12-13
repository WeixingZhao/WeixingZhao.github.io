<script module lang="ts">
	abstract class Parser {
		static readonly key =
			/^([a-zA-Z,.\s*#]+[.#])\s*\(?(\d*)\)?\s*(.*?\.)\s*([A-Z][A-Za-z.]*(\s+[A-Z][A-Za-z.]*)*)/;
		static parse(data: string) {
			return this.key.exec(data);
		}
	}
</script>

<script lang="ts">
	interface PublicationOptions {
		data: string;
		href: string;
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

	const result = $derived(Parser.parse(data));
	const authors = $derived(manualAuthor || result![1]);
	const journal = $derived(manualJournal || result![4]);
	const title = $derived(publication || result![3]);
</script>

<p>{authors}</p>
<p><b>{journal}</b></p>
<p><a {href}>{title}</a></p>
