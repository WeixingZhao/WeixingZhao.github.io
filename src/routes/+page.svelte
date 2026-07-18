<script lang="ts">
	import labMembers from '$lib/assets/lab-members.webp';
	import researchIllus from '$lib/assets/research-illus.webp';
	import siteGraphic from '$lib/assets/site-3.webp';
	import Embla from '$lib/components/embla/Embla.svelte';
	import EmblaContainer from '$lib/components/embla/EmblaContainer.svelte';
	import EmblaSlide from '$lib/components/embla/EmblaSlide.svelte';
	import Link from '$lib/components/Link.svelte';
	import Site from '$lib/components/Site.svelte';
</script>

<svelte:head>
	<title>Home | Zhao Lab</title>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<!-- TODO: Make the thing 3JS -->

<Site>
	{#snippet prelude()}
		<Link href="#content" class="sr-only focus:not-sr-only">Skip to main content</Link>
	{/snippet}
	<div id="grid-container" class="m-auto grid gap-6 md:grid-cols-[2fr_1fr]">
		<div>
			<Embla class="[column-span:all]">
				<EmblaContainer>
					<EmblaSlide>
						<img
							class="size-full bg-black object-contain object-center"
							src={labMembers}
							alt="Left to right: Tengyang Ni, Rouf Thakur, Bo Wu, O'Taveon Fitzgerald, Weixing Zhao, and Wenjing Li"
						/>
					</EmblaSlide>
					<EmblaSlide>
						<img
							class="size-full bg-black object-contain object-center"
							src={researchIllus}
							alt="A graphic illustrating the relationships between fundamentals of BRCA"
						/>
					</EmblaSlide>
					<EmblaSlide>
						<img
							class="size-full bg-black object-contain object-center"
							src={siteGraphic}
							alt="left to right: a graph depicting normalized FRET intensity, microscope images, a bar graph illustrating the amount of CtlP foci per cell"
						/>
					</EmblaSlide>
				</EmblaContainer>
			</Embla>
			<p class="m-3 indent-8">
				The Zhao laboratory's major research focus is on the mechanisms that preserve genome
				integrity, particularly the BRCA1/BRCA2-centered interaction networks that regulate
				homologous recombination, R-loop homeostasis, and replication stress responses across
				diverse genomic and cellular contexts. The group is especially interested in how disruption
				of these pathways drives genome instability, cancer development, and therapeutic resistance.
				An end goal is to translate these mechanistic insights into actionable approaches to
				interpret BRCA1/2 variant pathogenicity and to identify repair vulnerabilities that can be
				exploited to improve cancer therapies.
			</p>
			<hr class="my-3" />
			<ul class="mx-3 break-inside-avoid-column">
				<li>
					<h1 class=" text-4xl font-thin">Contact Us</h1>
				</li>
				<li>
					<span class=" text-xl font-bold">Weixing Zhao, Ph.D.</span>
				</li>
				<li>
					<span>University of Texas Health at San Antonio</span>
				</li>
				<li><span>7703 Floyd Curl Drive</span></li>
				<li><span>San Antonio, TX 78229</span></li>
				<li>
					<Link href="mailto:zhaow2@uthscsa.edu">✉ zhaow2&commat;uthscsa.edu</Link>
				</li>
				<li><Link href="tel:2104505327">☎(210) 450-5327</Link></li>
			</ul>
		</div>
		<aside class="grid grid-flow-row gap-3">
			<div
				class="card border-t-4 border-t-slate-600 p-3 backdrop-brightness-97 [&>hr]:border-slate-600"
			>
				<h2 class="font-sans text-xl uppercase">CALL FOR POST-DOCS!</h2>
				<hr class="my-3 w-12" />
				<p>
					<Link href="/positions">Postdoctoral positions</Link> are available in the Zhao laboratory in
					the Dept. of Biochemistry and Structural Biology at UT Health San Antonio.
				</p>
			</div>
			<div
				class="card border-t-4 border-t-slate-600 p-3 backdrop-brightness-97 [&>hr]:border-slate-600"
			>
				<h2 class="font-sans text-xl uppercase">IN THE MEDIA!</h2>
				<hr class="my-3 w-12" />
				<blockquote class="twitter-tweet" data-height="160" data-width="320" data-dnt="true">
					<p lang="en" dir="ltr">
						Local researchers exploring alternatives to surgical cancer treatment
						<Link href="https://t.co/M0KOjlSI4V">https://t.co/M0KOjlSI4V</Link>
					</p>
					&mdash; KSAT 12 (@ksatnews)
					<Link href="https://twitter.com/ksatnews/status/1721867600563482939?ref_src=twsrc%5Etfw"
						>November 7, 2023</Link
					>
				</blockquote>
			</div>
			<div
				id="twitter"
				class="card border-t-4 border-t-slate-600 p-3 backdrop-brightness-97 [&>hr]:border-slate-600"
			>
				<h2 class="font-sans text-xl uppercase">CHECK US OUT ON TWITTER!</h2>
				<hr class="my-3 w-12" />
				<Link
					class="twitter-timeline"
					data-height="400"
					data-width="320"
					data-dnt="true"
					href="https://twitter.com/WXZhaoLab?ref_src=twsrc%5Etfw">Tweets by WXZhaoLab</Link
				>
			</div>
		</aside>
	</div>
</Site>
