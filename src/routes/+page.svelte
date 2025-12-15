<script lang="ts">
	import labMembers from '$lib/assets/lab-members.jpg';
	import researchIllus from '$lib/assets/research-illus.jpg';
	import siteGraphic from '$lib/assets/site-3.jpg';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	const plugins = [Autoplay({
		stopOnInteraction: false
	})];
</script>

<svelte:head>
	<title>Home | Zhao Lab</title>
</svelte:head>

<!-- TODO: Make the thing 3JS -->

<aside aria-label="Skip to main content" class="print:hidden">
	<a
		href="#main-content"
		tabindex="0"
		class="sr-only absolute underline focus:not-sr-only focus:absolute focus:border-2 focus:border-solid"
		>Skip to main content</a
	>
</aside>
<div id="page" class="table h-full w-full">
	<header
		class="flex h-80 w-full flex-col items-center justify-end bg-[url('/dna.png')] bg-cover bg-fixed bg-top bg-no-repeat print:hidden"
	>
		<div id="page-title" class="flex h-fit w-full justify-center">
			<h1
				class="max-w-6xl grow bg-contain bg-right bg-no-repeat text-6xl font-thin sm:bg-[url('/brand.png')]"
			>
				Zhao Lab
			</h1>
		</div>
		<nav id="nav" class="flex h-fit w-full justify-center backdrop-blur">
			<ul
				class="bg-comp-dark text-comp-light flex max-w-6xl grow flex-wrap justify-evenly"
			>
				<li id="current" class="h-10 grow contrast-200">
					<a
						class="flex h-full w-full items-center justify-center p-3"
						draggable="false"
						href="/">Home</a
					>
				</li>
				<li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
					<a
						class="flex h-full w-full items-center justify-center p-3"
						draggable="false"
						href="/positions/">Positions</a
					>
				</li>
				<li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
					<a
						class="flex h-full w-full items-center justify-center p-3"
						draggable="false"
						href="/research/">Research</a
					>
				</li>
				<li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
					<a
						class="flex h-full w-full items-center justify-center p-3"
						draggable="false"
						href="/people/">People</a
					>
				</li>
				<li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
					<a
						class="flex h-full w-full items-center justify-center p-3"
						draggable="false"
						href="/publications/">Publications</a
					>
				</li>
			</ul>
		</nav>
	</header>
	<div
		id="content"
		class="[&_a]:text-link-active-color w-full bg-slate-500/10 [&_a]:underline"
	>
		<div id="grid-container" class="m-auto grid max-w-6xl gap-6 md:grid-cols-[2fr_1fr]">
			<main>
				<div
					class="embla overflow-hidden [column-span:all]"
					use:emblaCarouselSvelte={{
						options: {
							loop: true,
							
						},
						plugins
					}}
				>
					<div class="embla__container flex">
						<div class="embla__slide min-w-0 flex-[0_0_100%]">
							<img
								class="text-comp-light block h-96 w-full bg-black object-contain object-center"
								src={labMembers}
								alt="Left to right: Tengyang Ni, Rouf Thakur, Bo Wu, O'Taveon Fitzgerald, Weixing Zhao, and Wenjing Li"
							/>
						</div>
						<div class="embla__slide min-w-0 flex-[0_0_100%]">
							<img
								class="text-comp-light block h-96 w-full bg-black object-contain object-center"
								src={researchIllus}
								alt="A graphic illustrating the relationships between fundamentals of BRCA"
							/>
						</div>
						<div class="embla__slide min-w-0 flex-[0_0_100%]">
							<img
								class="text-comp-light block h-96 w-full bg-black object-contain object-center"
								src={siteGraphic}
								alt="left to right: a graph depicting normalized FRET intensity, microscope images, a bar graph illustrating the amount of CtlP foci per cell"
							/>
						</div>
					</div>
				</div>
				<p id="main-content" class="m-3 indent-8">
				The Zhao laboratory's major research focus is on the mechanisms that preserve genome integrity, particularly the BRCA1/BRCA2-centered interaction networks that regulate homologous recombination, R-loop homeostasis, and replication stress responses across diverse genomic and cellular contexts. The group is especially interested in how disruption of these pathways drives genome instability, cancer development, and therapeutic resistance. An end goal is to translate these mechanistic insights into actionable approaches to interpret BRCA1/2 variant pathogenicity and to identify repair vulnerabilities that can be exploited to improve cancer therapies.
				</p>
				<hr class="my-3" />
				<ul class="mx-3 break-inside-avoid-column">
					<li>
						<h1 class="text-comp-dark text-4xl font-thin">
							Contact Us
						</h1>
					</li>
					<li>
						<span class="text-comp-dark text-xl font-bold"
							>Weixing Zhao, Ph.D.</span
						>
					</li>
					<li>
						<span
							>University of Texas Health at San Antonio</span
						>
					</li>
					<li><span>7703 Floyd Curl Drive</span></li>
					<li><span>San Antonio, TX 78229</span></li>
					<li>
						<a href="mailto:zhaow2@uthscsa.edu"
							>&#x2709; zhaow2&commat;uthscsa.edu</a
						>
					</li>
					<li><a href="tel:2104505327">&phone;(210) 450-5327</a></li>
				</ul>
			</main>
			<aside class="grid grid-flow-row gap-3">
				<div
					class="card border-t-4 border-t-slate-600 p-3 backdrop-brightness-[0.97] [&>hr]:border-slate-600"
				>
					<h2 class="font-sans text-xl uppercase">
						CALL FOR POST-DOCS!
					</h2>
					<hr class="my-3 w-12" />
					<p>
						Postdoctoral positions are available in the Zhao
						laboratory in the Dept. of Biochemistry and
						Structural Biology at UT Health San Antonio. Click <a
							href="/positions/">here</a
						>
						for more information!
					</p>
				</div>
				<div
					class="card border-t-4 border-t-slate-600 p-3 backdrop-brightness-[0.97] [&>hr]:border-slate-600"
				>
					<h2 class="font-sans text-xl uppercase">IN THE MEDIA!</h2>
					<hr class="my-3 w-12" />
					<blockquote
						class="twitter-tweet"
						data-height="160"
						data-width="320"
					>
						<p lang="en" dir="ltr">
							Local researchers exploring alternatives to
							surgical cancer treatment
							<a href="https://t.co/M0KOjlSI4V"
								>https://t.co/M0KOjlSI4V</a
							>
						</p>
						&mdash; KSAT 12 (@ksatnews)<a
							href="https://twitter.com/ksatnews/status/1721867600563482939?ref_src=twsrc%5Etfw"
							>November 7, 2023</a
						>
					</blockquote>
					<script
						async
						src="https://platform.twitter.com/widgets.js"
						charset="utf-8"
					></script>
				</div>
				<div
					id="twitter"
					class="card border-t-4 border-t-slate-600 p-3 backdrop-brightness-[0.97] [&>hr]:border-slate-600"
				>
					<h2 class="font-sans text-xl uppercase">
						CHECK US OUT ON TWITTER!
					</h2>
					<hr class="my-3 w-12" />
					<a
						class="twitter-timeline"
						data-height="400"
						data-width="320"
						href="https://twitter.com/WXZhaoLab?ref_src=twsrc%5Etfw"
						>Tweets by WXZhaoLab</a
					>
					<script
						async
						src="https://platform.twitter.com/widgets.js"
						charset="utf-8"
					></script>
				</div>
			</aside>
		</div>
	</div>
	<footer
		class="bg-prim-1 text-comp-light [&_a]:text-link-color table-row h-0 w-full capitalize print:hidden [&_a]:underline"
	>
		<ul class="columns-xs p-3" role="presentation">
			<li role="presentation">
				<ul class="break-inside-avoid-column">
					<li>
						<span
							class="text-lg font-bold"
							role="heading"
							aria-level="1">Address</span
						>
					</li>
					<li>
						<span>University of Texas at San Antonio</span>
					</li>
					<li><span>7703 Floyd Curl Drive</span></li>
					<li><span>San Antonio, TX 78229</span></li>
				</ul>
			</li>
			<li role="presentation">
				<ul class="break-inside-avoid-column">
					<li>
						<span
							class="text-lg font-bold"
							role="heading"
							aria-level="1">Quick links</span
						>
					</li>
					<li><a href="/">Home</a></li>
					<li><a href="/positions/">Positions</a></li>
					<li><a href="/research/">Research</a></li>
					<li><a href="/people/">People</a></li>
					<li><a href="/publications/">Publications</a></li>
				</ul>
			</li>
		</ul>
	</footer>
</div>
