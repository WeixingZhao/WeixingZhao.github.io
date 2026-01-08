<script>
	import Link from '$lib/components/Link.svelte';
	import Site from '$lib/components/Site.svelte';
</script>

<svelte:head>
	<title>Research | Zhao Lab</title>
</svelte:head>

<Site>
	<div class="columns-sm">
		<h1 class=" mx-3 text-xl font-thin">Positions Available</h1>
		<p id="main-content" class="mx-3 indent-8">
			We have openings for both postdoctoral researchers and graduate students in our lab.
		</p>
		<hr class="my-3" />
		<h1 class=" mx-3 text-xl font-thin">Postdoctoral Positions</h1>
		<p class="mx-3 indent-8">
			These positions are fully funded by UT Health San Antonio in accordance with NIH guidelines.
			We are seeking candidates with expertise or a strong ability to learn protein biochemistry and
			cell biology. A high level of motivation for career development in cancer biology is
			essential. Experience in molecular biology and protein/nucleic acid biochemistry would be
			advantageous.
		</p>
		<p class="mx-3 indent-8">
			To apply, please send your CV, a one-page summary of your research experience, and contact
			information for three references to: Zhaow2@uthscsa.edu.
		</p>
		<hr class="my-3" />
		<h1 class=" mx-3 text-xl font-thin">Graduate Students</h1>
		<p class="mx-3 indent-8">
			The Zhao Lab welcomes new graduate students. If you are considering graduate school and are
			interested in working with Dr. Zhao, please visit <Link
				href="https://uthscsa.edu/biomedical-sciences/programs/integrated">the IBMS</Link
			>
			and
			<Link href="https://uthscsa.edu/biomedical-sciences/programs/biomedical-engineering-phd"
				>BME</Link
			>
			program websites to learn more about applying to UT Health San Antonio.
		</p>
		<p class="mx-3 indent-8">
			For current graduate students interested in a research rotation, please feel free to contact
			Dr. Zhao to arrange a meeting to discuss potential research opportunities.
		</p>
	</div>
</Site>
