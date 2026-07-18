<script module lang="ts">
	const AUTHORS = String.raw`(?<authors>[\p{L}\p{M},.\s*#]+[.#])`;
	const YEAR = String.raw`\s*\(?(?<year>\d{4}|)\)?`;
	const TITLE = String.raw`\s*(?<title>.+?\.)`;
	const JOURNAL_WORD = String.raw`(?!(?:Accepted|In)\b)\p{Lu}[\p{L}\p{M}.]*`;
	const JOURNAL = String.raw`\s*(?<journal>${JOURNAL_WORD}(?:\s+${JOURNAL_WORD})*)`;
	const PUBLICATION_PATTERN = new RegExp(`^${AUTHORS}${YEAR}${TITLE}${JOURNAL}`, 'u');

	export function parse(src: string) {
		return PUBLICATION_PATTERN.exec(src);
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

	const fields = $derived(parse(data)!.groups!);
	const authors = $derived(manualAuthor || fields.authors);
	const journal = $derived(manualJournal || fields.journal);
	const title = $derived(publication || fields.title);
</script>

<p>{authors}</p>
<p><b>{journal}</b></p>
<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
<p><a class="text-link-active-color underline" {href} rel="external">{title}</a></p>
