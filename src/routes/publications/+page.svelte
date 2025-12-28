<script>
	import Publication from '$lib/components/Publication.svelte';
</script>

<svelte:head>
	<title>Publications | Zhao Lab</title>
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
				<li id="current" class="h-10 grow contrast-200">
					<a
						class="flex h-full w-full items-center justify-center p-3"
						draggable="false"
						href="/publications/">Publications</a
					>
				</li>
			</ul>
		</nav>
	</header>
	<div id="content" class="w-full bg-slate-500/10">
		<main class="m-auto max-w-6xl">
			<span class="flex flex-wrap justify-between">
				<a
					class="text-link-active-color px-3 underline"
					href="https://scholar.google.com/citations?user=uzigj2EAAAAJ"
					>View on Google Scholar</a
				>
				<a
					class="rounded-full bg-blue-600 px-3 text-white no-underline"
					href="https://scholar.google.com/citations?user=uzigj2EAAAAJ#d=gsc_md_fol"
					>Follow</a
				>
			</span>
			<ol
				id="main-content"
				class="[&_a]:text-link-active-color px-3 [&_a]:underline [&_ce-publication]:ps-10 [&_li]:ps-10 [&_summary]:cursor-pointer [&_summary]:text-4xl"
			>
				<details open>
					<summary>2024</summary>
					<li>
						<Publication
							data="Kelliher, J., Folkerts, M., Shen, K., Song, W., Tengler, K., Stiefel, C., Lee, S., Dray, E., Zhao, W., Koss, B., Pannunzio, N., Leung, J.. (2024) Evolved histone tail regulates 53BP1damaged chromatin recruitment. Nature Communications 15, Article number: 4634 In press"
							href="https://www.nature.com/articles/s41467-024-49071-w"
						></Publication>
					</li>
					<li>
						<Publication
							data="Salunkhe, S. *, Daley, J.M. *, Xue, C. *, Tomimatsu, N. *, Kaur, H. *, Raina, V., Jasper, A. M., Rogers, C.M., Li, W., Zhou, S., Mojidra, R., Kwon, Y., Dinh, H., Mukherjee, B., Habib, A.A., Hromas, R., Mazin, A.V., Wasmuth, E.V., Olsen, S.K., Libich, D.S., Zhou, D., Zhao, W., Greene, E.C. #, Burma, S. #, and Sung, P. # Promotion of DNA End Resection by the BRCA1-BARD1 Tumor Suppressor in Homologous Recombination. Nature Accepted in principle (*Co-first authors; #Co-corresponding authors)."
							journal="Nature"
						></Publication>
					</li>
					<li>
						<Publication
							data="Huang, Y.*, Li, W.*, Ji, J., Tomimatsu, N., Foo, T., Lan, L., Burma, S, Xia, B., and Zhao, W. DSS1 Restrains BRCA2's Engagement with dsDNA for Homologous Recombination, Replication Fork Protection, and R-loop Homeostasis. Nature Communications, Accepted in principle (*Co-first authors)."
							href="https://www.nature.com/articles/s41467-024-51557-6"
						></Publication>
					</li>
					<li>
						<Publication
							data="Fitzgerald, O., Wu B., Wang M., Maqbool, R., Li, W. #, Zhao, W. #. Protocol for evaluating the E3 Ligase Activity of BRCA1-BARD1 and its Variants by Nucleosomal Histone Ubiquitylation. STAR Protocols, In revision. #Corresponding author."
						></Publication>
					</li>
				</details>
				<details open>
					<summary>2023</summary>
					<li>
						<Publication
							data="Wang, M.*, Li, W.*, Tomimatsu, N., Yu, C., Ji, J., Alejo, S., Witus, S., Alimbetov, D., Fitzgerald, O., Bo, W., Wang, Q., Huang, Y., Gan, Y., Dong, F., Kwon, Y., Sareddy, G., Curiel, T., Habib, A., Hromas, R., Ivanov, D., Brzovic, P., Burma, S.#, Klevit, R.#, and Zhao, W.# (2023) Crucial Roles of the BRCA1-BARD1 E3 Ubiquitin Ligase Activity in Homology-Directed DNA Repair. Mol. Cell (*Co-first authors; #Co-corresponding authors). "
							href="https://pubmed.ncbi.nlm.nih.gov/37797621/"
						></Publication>
					</li>
					<li>
						<Publication
							data="Witus, S., Tuttle, L., Li, W, Zelter, A., W, W., Kermoade, K., Wilburn, D., Davis, T., Brzovic P.#, Zhao, W.#, Klevit, R.# (2023) BRCA1/BARD1 intrinsically disordered regions facilitate chromatin recruitment and ubiquitylation. BioRxiv, 2022. 08. 09 503292 doi: https://doi.org/10.1101/2022.08.09.503292. EMBO Journal e113565 (#Co-corresponding authors)"
							href="https://doi.org/10.1101/2022.08.09.503292"
							journal="EMBO Journal"
						></Publication>
					</li>
					<li>
						<span class="block"
							>Rawal, Y., Jia, L., Meir, A., Zhou, S.,
							Eliza A., Ruben A. E., Kwon, Y., Bernstein,
							A. K., Jasin, M., Burma, S., Hromas, R.,
							Mazin, V. A., Zhao, W., Zhou, D., Wasmuth,
							V. E., Greene, C.E., Sung, P., Olsen, K. S.</span
						>
						<i class="block"><strong>Nature</strong></i>
						<a
							class="block"
							href="https://pubmed.ncbi.nlm.nih.gov/37344589/"
							
							>Insights into the role of human BCDX2
							complex in RAD51-dependent homologous
							recombination by cryoEM and single-molecule
							analyses.</a
						>
					</li>
					<li>
						<p>
							Alejo, S., Palacios, E. B., Venkata, P.P.,
							He, Y., Li, W., Johnson D.J., Chen, Y.,
							Jayamohan, S., Uday P. Pratap, P.U., Clarke,
							K., Zou, Y., Lv, Y., Weldon, K.,
							Viswanadhapalli, S., Lai, Z., Ye, Z., Chen,
							Y., Gilbert, R.A., Suzuki, T., Tekmal, R.R.,
							Zhao, W., Zheng, S., Vadlamudi, K.R.,
							Brenner, J.A., R. Sareddy, R.G.
						</p>
						<i><strong>Neuro-Oncology</strong></i>
						<p>
							<a
								href="https://doi.org/10.1093/neuonc/noad018"
								
								>Lysine-specific histone demethylase
								1A (KDM1A/LSD1) inhibition
								attenuates DNA double-strand breaks
								repair and augments the efficacy of
								temozolomide in glioblastoma</a
							>
						</p>
					</li>
					<li>
						<p>
							Kwon, Y.*, Rösner, H.*, Zhao, W.,
							Selemenakis, P., He, Z., Kawale, A., Katz,
							J., Rogers, C., Neal, F., Badamchi, A.,
							Petrosius, V., Singh, A., Joel, M., Lu ,L.,
							Holloway, S., Burma, S., Mukherjee, B.,
							Hromas, R., Mazin, A., Wiese, C.#, Sørensen,
							C.#, Sung, P.
						</p>
						<i><strong>Nature Communications</strong></i>
						<p>
							<a
								href="https://www.nature.com/articles/s41467-023-36211-x"
								
								>DNA binding and RAD51 interaction
								by the BRCA2 C-terminus orchestrate
								DNA repair and replication fork
								preservation.</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2022</summary>
					<li>
						<p>
							Chung, S., Kang, M., Alimbetov, D, Mun, G.,
							Yunn, N., Kim, Y., Kim, B., Wie, M., Lee,
							E., Ra, J., Oh, J., Lee, D., Lee, K., Kim,
							J., Han, S., Kim, K., Chung, W., Nam, K.,
							Park, N., Lee, B., Kim, S., Zhao, W., Ryu,
							S., Lee, Y., Myung, K., Cho, Y.
						</p>
						<i><strong>Nature Communications</strong></i>
						<p>
							<a
								href="https://www.nature.com/articles/s41467-022-34612-y"
								
								>Regulation of BRCA1 stability
								through the tandem UBX domains of
								isoleucyl-tRNA synthetase</a
							>
						</p>
					</li>
					<li>
						<p>Witus S., Zhao W., Brzovic P., Klevit R.</p>
						<i
							><strong
								>Trends in Biochemical Sciences</strong
							></i
						>
						<p>
							<a
								href="https://pubmed.ncbi.nlm.nih.gov/35351360/"
								
								>BRCA1/BARD1 is a nucleosome reader
								and writer</a
							>
						</p>
					</li>
					<li>
						<p>
							Kornepati A.V.R., Boyd J.T., Murray C.E.,
							Saifetiarova J., Avalos B.P., Rogers C.M.,
							Haiyan Bai, Padron A.S., Liao Y., Ontiveros
							C., Svatek R.S., Hromas R., Li R., Hu Y.,
							Conejo-Garcia J.R., Vadlamudi R.K., Zhao W.,
							Dray E., Sung P., Curiel T.J.
						</p>
						<i><strong>Cancer Research</strong></i>
						<p>
							<a
								href="https://aacrjournals.org/cancerres/article-abstract/doi/10.1158/0008-5472.CAN-21-2076/682005/Tumor-intrinsic-PD-L1-promotes-DNA-repair-in"
								
								>Tumor-intrinsic programmed
								death-ligand 1 promotes DNA repair
								by homologous recombination in
								distinct cancers and can suppress
								PARP inhibitor synthetic lethality</a
							>
						</p>
					</li>
					<li>
						<p>
							Wang M., Rogers C.M., Alimbetov D.S., Zhao
							W., ...
						</p>
						<i
							><strong
								>Methods Mol Biol. 2444, 207-225.</strong
							></i
						>
						<p>
							<a
								href="https://pubmed.ncbi.nlm.nih.gov/35290640/"
								
								>In Vitro Reconstitution of
								BRCA1-BARD1/RAD51 Mediated
								Homologous DNA Pairing</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2021</summary>
					<li>
						<p>
							Foo T.K., Vincelli G., Huselid E., Her J.,
							Zheng H., Simhadri S., Wang M., Huo Y., Li
							T., Yu X., Li H., Zhao W., Bunting S.F., Xia
							B.
						</p>
						<i
							><strong>
								Cancer Research 81 (18): 4676-4684</strong
							></i
						>
						<p>
							<a
								href="https://pubmed.ncbi.nlm.nih.gov/34301763/"
								
								>ATR and ATM phosphorylation of
								BRCA1 at T1394 promotes homologous
								recombinational repair and G2/M
								checkpoint maintenance</a
							>
						</p>
					</li>
					<li>
						<p>
							E Pires, N Sharma, P Selemenakis, B Wu, Y
							Huang, DS Alimbetov, ...
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 297
								(1)</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(21)00642-6/fulltext"
								
								>RAD51AP1 mediates RAD51 activity
								through nucleosome interaction</a
							>
						</p>
					</li>
					<li>
						<p>
							SR Witus, AL Burrell, DP Farrell, J Kang, M
							Wang, JM Hansen, A Pravat, ...
						</p>
						<i
							><strong
								>Nature structural &amp; molecular
								biology 28 (3), 268-277</strong
							></i
						>
						<p>
							<a
								href="https://www.nature.com/articles/s41594-020-00556-4"
								
								>BRCA1/BARD1 site-specific
								ubiquitylation of nucleosomal H2A is
								directed by BARD1</a
							>
						</p>
					</li>
					<li>
						<p>
							C Xue,L Molnarova,JB Steinfeld,W Zhao,C Ma,M
							Spirek,K Kaniecki,...
						</p>
						<i
							><strong
								>Nucleic acids research 49 (1),
								285-305</strong
							></i
						>
						<p>
							<a
								href="https://academic.oup.com/nar/article-abstract/49/1/285/6041011"
								
								>Single-molecule visualization of
								human RECQ5 interactions with
								single-stranded DNA recombination
								intermediates</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2020</summary>
					<li>
						<p>
							DG Maranon,N Sharma,Y Huang,P Selemenakis,M
							Wang,N Altina,...
						</p>
						<i
							><strong
								>Journal of Cell Biology 219 (10)</strong
							></i
						>
						<p>
							<a
								href="https://rupress.org/jcb/article-abstract/219/10/e201911049/152064"
								
								>NUCKS1 promotes RAD54 activity in
								homologous recombination DNA repair</a
							>
						</p>
					</li>
					<li>
						<p>
							F Liang,AS Miller,C Tang,D Maranon,EA
							Williamson,R Hromas,...
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 295
								(24), 8186-8194</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(17)49408-7/abstract"
								
								>The DNA-binding activity of
								USP1-associated factor 1 is required
								for efficient RAD51-mediated
								homologous DNA pairing and
								homology-directed DNA repair</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2019</summary>
					<li>
						<p>
							JB Steinfeld,O Beláň,Y Kwon,T Terakawa,A
							Al-Zain,MJ Smith,...
						</p>
						<i
							><strong
								>Genes &amp; development 33 (17-18),
								1191-1207</strong
							></i
						>
						<p>
							<a
								href="http://genesdev.cshlp.org/content/33/17-18/1191.short"
								
								>Defining the influence of Rad51 and
								Dmc1 lineage-specific amino acids on
								genetic recombination</a
							>
						</p>
					</li>
					<li>
						<p>
							G Srinivasan,EA Williamson,K Kong,AS
							Jaiswal,G Huang,HS Kim,...
						</p>
						<i
							><strong
								>Proceedings of the National Academy
								of Sciences 116 (35), 17438-17443</strong
							></i
						>
						<p>
							<a
								href="https://www.pnas.org/content/116/35/17438.short"
								
								>MiR223-3p promotes synthetic
								lethality in BRCA1-deficient cancers</a
							>
						</p>
					</li>
					<li>
						<p>W Zhao,C Wiese,Y Kwon,R Hromas,P Sung</p>
						<i
							><strong
								>Annual review of biochemistry 88,
								221-245</strong
							></i
						>
						<p>
							<a
								href="https://www.annualreviews.org/doi/abs/10.1146/annurev-biochem-013118-111058"
								
								>The BRCA tumor suppressor network
								in chromosome damage repair by
								homologous recombination</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2018</summary>
					<li>
						<p>
							T Rao,S Longerich,W Zhao,H Aihara,P Sung,Y
							Xiong
						</p>
						<i><strong>DNA repair 64, 53-58</strong></i>
						<p>
							<a
								href="https://www.sciencedirect.com/science/article/pii/S1568786417304160"
								
								>Importance of homo-dimerization of
								Fanconi-associated nuclease 1 in DNA
								flap cleavage</a
							>
						</p>
					</li>
					<li>
						<p>
							S Welty,Y Teng,Z Liang,W Zhao,LH Sanders,JT
							Greenamyre,...
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 293
								(4), 1353-1362</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(20)39136-5/fulltext"
								
								>RAD52 is required for RNA-templated
								recombination repair in post-mitotic
								neurons</a
							>
						</p>
					</li>
					<li>
						<p>L Zhao,J Xu,W Zhao,P Sung,HW Wang</p>
						<i
							><strong
								>Methods in Enzymology 600, 179-199</strong
							></i
						>
						<p>
							<a
								href="https://www.sciencedirect.com/science/article/abs/pii/S0076687917303774"
								
								>Determining the RAD51-DNA
								nucleoprotein filament structure and
								function by cryo-electron microscopy</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2017</summary>
					<li>
						<p>
							W Zhao,JB Steinfeld,F Liang,X Chen,DG
							Maranon,CJ Ma,Y Kwon,...
						</p>
						<i><strong>Nature 550 (7676), 360</strong></i>
						<p>
							<a
								href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5800781/"
								
								>Promotion of RAD51-mediated
								homologous DNA pairing by
								BRCA1-BARD1</a
							>
						</p>
					</li>
					<li>
						<p>
							W Zhao,JB Steinfeld,F Liang,X Chen,DG
							Maranon,C Jian Ma,Y Kwon,...
						</p>
						<i><strong>Nature 550 (7676), 360-365</strong></i>
						<p>
							<a
								href="https://www.nature.com/articles/nature24060"
								
								>BRCA1-BARD1 promotes RAD51-mediated
								homologous DNA pairing</a
							>
						</p>
					</li>
					<li>
						<p>J Xu,L Zhao,Y Xu,W Zhao,P Sung,HW Wang</p>
						<i
							><strong
								>Nature structural &amp; molecular
								biology 24 (1), 40-46</strong
							></i
						>
						<p>
							<a
								href="https://www.nature.com/articles/nsmb.3336"
								
								>Cryo-EM structures of human RAD51
								recombinase filaments during
								catalysis of DNA-strand exchange</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2016</summary>
					<li>
						<p>
							MV Borgogno,MR Monti,W Zhao,P Sung,CE
							Argaraña,RJ Pezza
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 291
								(10), 4928-4938</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(20)43135-7/fulltext"
								
								>Tolerance of DNA mismatches in Dmc1
								recombinase-mediated DNA strand
								exchange</a
							>
						</p>
					</li>
					<li>
						<p>
							KS Trego,T Groesser,AR Davalos,AC Parplys,W
							Zhao,MR Nelson,...
						</p>
						<i
							><strong
								>Molecular cell 61 (4), 535-546</strong
							></i
						>
						<p>
							<a
								href="https://www.sciencedirect.com/science/article/pii/S1097276515010084"
								
								>Non-catalytic Roles for XPG with
								BRCA1 and BRCA2 in Homologous
								Recombination and Genome Stability</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2015</summary>
					<li>
						<p>
							AC Parplys,W Zhao,N Sharma,T Groesser,F
							Liang,DG Maranon,...
						</p>
						<i
							><strong
								>Nucleic acids research 43 (20),
								9817-9834</strong
							></i
						>
						<p>
							<a
								href="https://academic.oup.com/nar/article/43/20/9817/1400677?login=true"
								
								>NUCKS1 is a novel RAD51AP1 paralog
								important for homologous
								recombination and genome stability</a
							>
						</p>
					</li>
					<li>
						<p>
							JY Lee,T Terakawa,Z Qi,JB Steinfeld,S
							Redding,YH Kwon,WA Gaines,...
						</p>
						<i><strong>Science 349 (6251), 977-981</strong></i>
						<p>
							<a
								href="https://www.science.org/doi/abs/10.1126/science.aab2666"
								
								>Base triplet stepping by the
								Rad51/RecA family of recombinases</a
							>
						</p>
					</li>
					<li>
						<p>
							W Zhao,S Vaithiyalingam,J San Filippo,DG
							Maranon,J Jimenez-Sainz,...
						</p>
						<i
							><strong
								>Molecular cell 59 (2), 176-187</strong
							></i
						>
						<p>
							<a
								href="https://www.sciencedirect.com/science/article/pii/S1097276515003998"
								
								>Promotion of BRCA2-dependent
								homologous recombination by DSS1 via
								RPA targeting and DNA mimicry</a
							>
						</p>
					</li>
					<li>
						<p>W Zhao,P Sung</p>
						<i
							><strong
								>Nucleic acids research 43 (8),
								4055-4066</strong
							></i
						>
						<p>
							<a
								href="https://academic.oup.com/nar/article/43/8/4055/2414401?login=true"
								
								>Significance of ligand interactions
								involving Hop2-Mnd1 and the RAD51
								and DMC1 recombinases in homologous
								DNA repair and XX ovarian dysgenesis</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2014</summary>
					<li>
						<p>
							H Moktan,MF Guiraldelli,CA Eyster,W Zhao,CY
							Lee,T Mather,...
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 289
								(21), 14682-14691</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(20)38672-5/fulltext"
								
								>Solution structure and DNA-binding
								properties of the winged helix
								domain of the meiotic recombination
								HOP2 protein</a
							>
						</p>
					</li>
					<li>
						<p>
							R Buisson,J Niraj,J Pauty,R Maity,W Zhao,Y
							Coulombe,P Sung,...
						</p>
						<i><strong>Cell reports 6 (3), 553-564</strong></i>
						<p>
							<a
								href="https://www.sciencedirect.com/science/article/pii/S2211124714000102"
								
								>Breast cancer proteins PALB2 and
								BRCA2 stimulate polymerase η in
								recombination-associated DNA
								synthesis at blocked replication
								forks</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2013</summary>
					<li>
						<p>
							W Zhao,D Saro,M Hammel,YH Kwon,Y Xu,RP
							Rambo,GJ Williams,...
						</p>
						<i
							><strong
								>Nucleic acids research 42 (2),
								906-917</strong
							></i
						>
						<p>
							<a
								href="https://academic.oup.com/nar/article/42/2/906/1025872?login=true"
								
								>Mechanistic insights into the role
								of Hop2–Mnd1 in meiotic homologous
								DNA pairing</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2012</summary>
					<li>
						<p>
							MH Dunlop,E Dray,W Zhao,J San Filippo,MS
							Tsai,SG Leung,D Schild,...
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 287
								(15), 12343-12347</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(20)53161-X/fulltext"
								
								>Mechanistic insights into
								RAD51-associated protein 1
								(RAD51AP1) action in homologous DNA
								repair</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2011</summary>
					<li>
						<p>
							MH Dunlop,E Dray,W Zhao,MS Tsai,C Wiese,D
							Schild,P Sung
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 286
								(43), 37328-37334</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(20)50759-X/fulltext"
								
								>RAD51-associated protein 1
								(RAD51AP1) interacts with the
								meiotic recombinase DMC1 through a
								conserved motif</a
							>
						</p>
					</li>
					<li>
						<p>Y Kwon,W Zhao,P Sung</p>
						<i><strong>DNA Recombination, 421-435</strong></i>
						<p>
							<a
								href="https://link.springer.com/protocol/10.1007/978-1-61779-129-1_24"
								
								>Biochemical studies on human
								Rad51-mediated homologous
								recombination</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2010</summary>
					<li>
						<p>
							H Niu,WH Chung,Z Zhu,Y Kwon,W Zhao,P Chi,R
							Prakash,C Seong,...
						</p>
						<i><strong>Nature 467 (7311), 108-111</strong></i>
						<p>
							<a
								href="https://www.nature.com/articles/nature09318"
								
								>Mechanism of the ATP-dependent DNA
								end-resection machinery from
								Saccharomyces cerevisiae</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2009</summary>
					<li>
						<p>
							RB Robertson,DN Moses,YH Kwon,P Chan,W
							Zhao,P Chi,H Klein,...
						</p>
						<i
							><strong
								>Journal of molecular biology 388
								(4), 703-720</strong
							></i
						>
						<p>
							<a
								href="https://www.sciencedirect.com/science/article/abs/pii/S002228360900343X"
								
								>Visualizing the disassembly of S.
								cerevisiae Rad51 nucleoprotein
								filaments</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2008</summary>
					<li>
						<p>
							S Raynard,W Zhao,W Bussen,L Lu,YY Ding,V
							Busygina,AR Meetei,...
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 283
								(23), 15701-15708</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(20)46104-6/fulltext"
								
								>Functional role of BLAP75 in
								BLM-topoisomerase IIIα-dependent
								Holliday junction processing</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2007</summary>
					<li>
						<p>W Zhao,Z Ye,J Zhao</p>
						<i
							><strong
								>Molecular microbiology 66 (5),
								1219-1230</strong
							></i
						>
						<p>
							<a
								href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1365-2958.2007.05994.x"
								
								>RbrA, a cyanobacterial
								rubrerythrin, functions as a
								FNR-dependent peroxidase in
								heterocysts in protection of
								nitrogenase from damage by hydrogen
								peroxide in Anabaena sp. PCC 7120</a
							>
						</p>
					</li>
					<li>
						<p>
							Y Zhang,H Pu,Q Wang,S Cheng,W Zhao,Y Zhang,J
							Zhao
						</p>
						<i
							><strong
								>Journal of Biological Chemistry 282
								(46), 33641-33648</strong
							></i
						>
						<p>
							<a
								href="https://www.jbc.org/article/S0021-9258(20)71699-6/fulltext"
								
								>PII is important in regulation of
								nitrogen metabolism but not required
								for heterocyst formation in the
								cyanobacterium Anabaena sp. PCC 7120</a
							>
						</p>
					</li>
					<li>
						<p>W Zhao,Q Guo,J Zhao</p>
						<i
							><strong
								>Oxford University Press 48 (4),
								563-572</strong
							></i
						>
						<p>
							<a
								href="https://academic.oup.com/pcp/article/48/4/563/2756887?login=true"
								
								>A membrane-associated Mn-superoxide
								dismutase protects the
								photosynthetic apparatus and
								nitrogenase from oxidative damage in
								the cyanobacterium Anabaena sp. PCC
								7120</a
							>
						</p>
					</li>
					<li>
						<p>X Chen,D Cui,C Liu,H Li,W Zhao</p>
						<i
							><strong
								>Frontiers of Chemistry in China 2
								(1), 74-78</strong
							></i
						>
						<p>
							<a
								href="https://link.springer.com/article/10.1007/s11458-007-0015-7"
								
								>Sample pretreatment microfluidic
								chip for DNA extraction from rat
								peripheral blood</a
							>
						</p>
					</li>
					<li>
						<p>B Hu,G Yang,W Zhao,Y Zhang,J Zhao</p>
						<i
							><strong
								>Molecular microbiology 63 (6),
								1640-1652</strong
							></i
						>
						<p>
							<a
								href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1365-2958.2007.05618.x"
								
								>MreB is important for cell shape
								but not for chromosome segregation
								of the filamentous cyanobacterium
								Anabaena sp. PCC 7120</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2006</summary>
					<li>
						<p>Y Shi,W Zhao,W Zhang,Z Ye,J Zhao</p>
						<i
							><strong
								>Proceedings of the National Academy
								of Sciences 103 (30), 11334-11339</strong
							></i
						>
						<p>
							<a
								href="https://www.pnas.org/content/103/30/11334.short"
								
								>Regulation of intracellular free
								calcium concentration during
								heterocyst differentiation by HetR
								and NtcA in Anabaena sp. PCC 7120</a
							>
						</p>
					</li>
				</details>
				<details open>
					<summary>2005</summary>
					<li>
						<p>
							Y Zhao,Y Shi,W Zhao,X Huang,D Wang,N Brown,J
							Brand,J Zhao
						</p>
						<i
							><strong
								>Proceedings of the National Academy
								of Sciences 102 (16), 5744-5748</strong
							></i
						>
						<p>
							<a
								href="https://www.pnas.org/content/102/16/5744/"
								
								>CcbP, a calcium-binding protein
								from Anabaena sp. PCC 7120, provides
								evidence that calcium ions regulate
								heterocyst differentiation</a
							>
						</p>
					</li>
				</details>
			</ol>
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
