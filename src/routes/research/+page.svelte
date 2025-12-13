<script lang="ts">
	import artOne from '$lib/assets/research/art-1.jpg';
	import artTwo from '$lib/assets/research/art-2.jpg';
	import artThree from '$lib/assets/research/art-3.jpg';
</script>

<svelte:head>
	<title>Research | Zhao Lab</title>
</svelte:head>

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
				<li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
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
				<li id="current" class="h-10 grow contrast-200">
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
	<div id="content" class="[&_a]:text-link-active-color w-full [&_a]:underline">
		<main class="m-auto max-w-6xl columns-xs">
			<h1 class="text-comp-dark mx-3 text-xl font-thin">
				Molecular Dissection of BRCA1 Tumor Suppression Networks
			</h1>
			<p id="main-content" class="mx-3 indent-8">
				BRCA1 heterodimerizes with another tumor suppressor BARD1, and the
				resulting complex possesses DNA binding and ubiquitin E3 ligase
				activities, and interacts with proteins that function in diverse
				biological processes, including homology-directed DNA repair (HDR),
				DNA replication fork maintenance, DNA damage checkpoints, R-loop
				resolution and mitotic chromosome segregation. However, the
				mechanisms that underlie BRCA1-BARD1 dependent processes have not
				been determined because of the immense challenge of expressing and
				purifying the BRCA1-BARD1 complexes for mechanistic workup.
				Importantly, we have overcome this technical challenge, which has
				allowed us to begin providing mechanistic information regarding the
				roles of BRCA1-BARD1 in HDR (Zhao et. al. Nature 2017). In the
				future, we will continue to dissect the tumor suppression mechanisms
				of BRCA1-BARD1, with one specific focus on its ubiqutin E3 ligase
				activity, by using a synergistic approach of protein biochemistry,
				cell biology, and structural biology.
			</p>
			<img class="block max-w-full" src={artOne} alt="" />
			<hr class="my-3" />
			<h1 class="text-comp-dark mx-3 text-xl font-thin">
				Mechanism of Homology Search and DNA Invasion
			</h1>
			<img class="block max-w-full" src={artTwo} alt="" />
			<p class="mx-3 indent-8">
				We discovered that BRCA1-BARD1 functions in the step of homology
				search and DNA invasion during homology-directed DNA repair (HDR).
				As BRCA1-BARD1 forms complexes with a number of protein factors that
				also are involved in HDR, we will investigate whether and how those
				BRCA1-BARD1 complexes particulate in the process (BRCA1 dependent
				pathway), and define its relationship with the BRCA1 independent
				pathways.
			</p>
			<hr class="my-3" />
			<h1 class="text-comp-dark mx-3 text-xl font-thin">
				Probe Therapies for BRCA-related Cancers
			</h1>
			<p class="mx-3 indent-8">
				Pathogenic mutations in BRCA1 and BRCA2 lead to genome instability
				and predispose afflicted individuals to diverse cancer types.
				BRCA1/2 mutant cancer patients in general respond well to therapy
				involving the use of a PARP inhibitor (PARPi) or platinum salt, but
				most would acquire drug resistance over time. Furthermore, many more
				mutations found in patients are variants of unknown significance
				(VUSs), as we do not yet know whether the gene mutations in question
				actually affect function and how severe the defect is. As such, it
				is essential to study the mutants to probe effective therapies for
				patient with VUSs or resistance to standard treatment.
			</p>
			<img class="block max-w-full" src={artThree} alt="" />
		</main>
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
