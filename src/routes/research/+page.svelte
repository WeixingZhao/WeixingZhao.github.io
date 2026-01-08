<script lang="ts">
	import artOne from '$lib/assets/research/art-1.webp';
	import artTwo from '$lib/assets/research/art-2.webp';
	import artThree from '$lib/assets/research/art-3.webp';
	import Site from '$lib/components/Site.svelte';
</script>

<svelte:head>
	<title>Research | Zhao Lab</title>
</svelte:head>

<Site>
	<div class="columns-xs">
		<h1 class=" mx-3 text-xl font-thin">
			Molecular Dissection of BRCA1 Tumor Suppression Networks
		</h1>
		<p id="main-content" class="mx-3 indent-8">
			BRCA1 heterodimerizes with another tumor suppressor BARD1, and the resulting complex possesses
			DNA binding and ubiquiFtin E3 ligase activities, and interacts with proteins that function in
			diverse biological processes, including homology-directed DNA repair (HDR), DNA replication
			fork maintenance, DNA damage checkpoints, R-loop resolution and mitotic chromosome
			segregation. However, the mechanisms that underlie BRCA1-BARD1 dependent processes have not
			been determined because of the immense challenge of expressing and purifying the BRCA1-BARD1
			complexes for mechanistic workup. Importantly, we have overcome this technical challenge,
			which has allowed us to begin providing mechanistic information regarding the roles of
			BRCA1-BARD1 in HDR (Zhao et. al. Nature 2017). In the future, we will continue to dissect the
			tumor suppression mechanisms of BRCA1-BARD1, with one specific focus on its ubiqutin E3 ligase
			activity, by using a synergistic approach of protein biochemistry, cell biology, and
			structural biology.
		</p>
		<img src={artOne} alt="" />
		<hr class="my-3" />
		<h1 class=" mx-3 text-xl font-thin">Mechanism of Homology Search and DNA Invasion</h1>
		<img src={artTwo} alt="" />
		<p class="mx-3 indent-8">
			We discovered that BRCA1-BARD1 functions in the step of homology search and DNA invasion
			during homology-directed DNA repair (HDR). As BRCA1-BARD1 forms complexes with a number of
			protein factors that also are involved in HDR, we will investigate whether and how those
			BRCA1-BARD1 complexes particulate in the process (BRCA1 dependent pathway), and define its
			relationship with the BRCA1 independent pathways.
		</p>
		<hr class="my-3" />
		<h1 class=" mx-3 text-xl font-thin">Probe Therapies for BRCA-related Cancers</h1>
		<p class="mx-3 indent-8">
			Pathogenic mutations in BRCA1 and BRCA2 lead to genome instability and predispose afflicted
			individuals to diverse cancer types. BRCA1/2 mutant cancer patients in general respond well to
			therapy involving the use of a PARP inhibitor (PARPi) or platinum salt, but most would acquire
			drug resistance over time. Furthermore, many more mutations found in patients are variants of
			unknown significance (VUSs), as we do not yet know whether the gene mutations in question
			actually affect function and how severe the defect is. As such, it is essential to study the
			mutants to probe effective therapies for patient with VUSs or resistance to standard
			treatment.
		</p>
		<img src={artThree} alt="" />
	</div>
</Site>
