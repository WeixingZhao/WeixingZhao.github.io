<script module lang="ts">
	const AUTHORS = String.raw`(?<authors>[\p{L}\p{M},.\s*#\-]+[.#,])`;
	const YEAR_BEFORE = String.raw`\s*(?:\((?<yearBefore>\d{4})\))?`;
	const TITLE = String.raw`\s*(?<title>.+?\.)`;
	const JOURNAL_WORD = String.raw`(?!(?:Accepted|In)\b)\p{Lu}[\p{L}\p{M}.]*`;
	const JOURNAL_CONNECTOR = String.raw`(?:and|for|of|the|in)`;
	const YEAR_AFTER = String.raw`(?:\s*\((?<yearAfter>\d{4})\))?`;
	const JOURNAL = String.raw`\s*(?<journal>${JOURNAL_WORD}(?:\s+(?:(?:${JOURNAL_CONNECTOR})\s+)?${JOURNAL_WORD})*)`;
	const PUBLICATION_PATTERN = new RegExp(
		`^${AUTHORS}${YEAR_BEFORE}${TITLE}${YEAR_AFTER}${JOURNAL}`,
		'u'
	);

	export function parse(src: string) {
		const result = PUBLICATION_PATTERN.exec(src);

		if (result?.groups) {
			result.groups.authors = result.groups.authors.replace(/,\s*$/, '');
			result.groups.year = result.groups.yearBefore || result.groups.yearAfter || '';
			result.groups.journal = result.groups.journal.replace(/[,.]$/, '');
		}

		return result;
	}
</script>

<script lang="ts">
	import PublicationItem from './PublicationItem.svelte';

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

<PublicationItem>
	<p>{authors}</p>
	<p><b>{journal}</b></p>
	<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
	<p><a class="text-link-active-color underline" {href} rel="external">{title}</a></p>
</PublicationItem>
