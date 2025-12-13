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
		class="flex h-80 w-full flex-col items-center justify-end bg-[url('dna.png')] bg-cover bg-fixed bg-top bg-no-repeat print:hidden"
	>
		<div id="page-title" class="flex h-fit w-full justify-center">
			<h1
				class="max-w-6xl grow bg-contain bg-right bg-no-repeat text-6xl font-thin sm:bg-[url('brand.png')]"
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
				<li class="h-10 grow contrast-200">
					<a
						class="flex h-full w-full items-center justify-center p-3"
						draggable="false"
						href="/positions/">Positions</a
					>
				</li>
				<li
					id="current"
					class="h-10 grow focus-within:contrast-200 hover:contrast-200"
				>
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
		<main class="m-auto max-w-6xl columns-sm">
			<h1 class="text-comp-dark mx-3 text-xl font-thin">Positions Available</h1>
			<p id="main-content" class="mx-3 indent-8">
				We have openings for both postdoctoral researchers and graduate
				students in our lab.
			</p>
			<hr class="my-3" />
			<h1 class="text-comp-dark mx-3 text-xl font-thin">
				Postdoctoral Positions
			</h1>
			<p class="mx-3 indent-8">
				These positions are fully funded by UT Health San Antonio in
				accordance with NIH guidelines. We are seeking candidates with
				expertise or a strong ability to learn protein biochemistry and cell
				biology. A high level of motivation for career development in cancer
				biology is essential. Experience in molecular biology and
				protein/nucleic acid biochemistry would be advantageous.
			</p>
			<p class="mx-3 indent-8">
				To apply, please send your CV, a one-page summary of your research
				experience, and contact information for three references to:
				Zhaow2@uthscsa.edu.
			</p>
			<hr class="my-3" />
			<h1 class="text-comp-dark mx-3 text-xl font-thin">Graduate Students</h1>
			<p class="mx-3 indent-8">
				The Zhao Lab welcomes new graduate students. If you are considering
				graduate school and are interested in working with Dr. Zhao, please
				visit <a
					href="https://uthscsa.edu/biomedical-sciences/programs/integrated"
					>the IBMS</a
				>
				and
				<a
					href="https://uthscsa.edu/biomedical-sciences/programs/biomedical-engineering-phd"
					>BME</a
				>
				program websites to learn more about applying to UT Health San Antonio.
			</p>
			<p class="mx-3 indent-8">
				For current graduate students interested in a research rotation,
				please feel free to contact Dr. Zhao to arrange a meeting to discuss
				potential research opportunities.
			</p>
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
