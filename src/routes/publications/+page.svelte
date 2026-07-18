<script>
	import PublicationEntry from '$lib/components/publication/PublicationEntry.svelte';
	import PublicationList from '$lib/components/publication/PublicationList.svelte';
	import PublicationYear from '$lib/components/publication/PublicationYear.svelte';
	import Publication from '$lib/components/publication/Publication.svelte';
	import Site from '$lib/components/Site.svelte';

	const publicationTotal = 59;
</script>

<svelte:head>
	<title>Publications | Zhao Lab</title>
</svelte:head>

<Site>
	<span class="flex flex-wrap justify-between">
		<a
			class="text-link-active-color px-3 underline"
			href="https://scholar.google.com/citations?user=uzigj2EAAAAJ">View on Google Scholar</a
		>
		<a
			class="rounded-full bg-blue-600 px-3 text-white no-underline"
			href="https://scholar.google.com/citations?user=uzigj2EAAAAJ#d=gsc_md_fol">Follow</a
		>
	</span>
	<PublicationList total={publicationTotal}>
		<PublicationYear year={2026}>
			<Publication
				data="Murray, C., Ontiveros, C., Wentworth, J., Blinkiewicz, P.V., Leung, B., Bai, H., Spicer, N., Holtz, A., Tanner, C., Balasubramanian, A., Li, W., Dray, E., Zhao, W., Tyler Curiel, T. (2026) Telmisartan increases olaparib efficacy in homologous recombination proficient tumors by augmenting type I interferon production. BMJ Journal for Immunotherapy of Cancer. 2026 Mar 25;14(3):e012426. doi: 10.1136/jitc-2025-012426."
			/>
			<Publication
				data="Rawal, Y., Kwon, Y., Jia, L., Ruben, E., Tovar, M., Fang, Q., Jamalruddin, M. A., Zhou, S., Kuppa, S., Syed, S., Jasper, A., Katz, J., Nayak, D., Stratton, C., Rogers, C., Kaur, H., Ji, J.-H., Samentar, L., Zhao, W., Dray, E., Taylor, A., Burma, S., Rao, M., Libich, D., Hromas, R., Mazin, A., Zhang, F., Jasin, M., Zhou, D., Bernstein, K., Greene, E., Wasmuth, E., Sung, P., Olsen. K. S..(2026) Cryo-EM Structures of RAD51-X3C and RAD51-X3CDX2 Reveal Activation of Presynaptic Filament Assembly by Paralog Exchange. Nat Struct Mol Biol. 22 April 2026"
			/>
			<Publication
				data="Dutta, A.*, Ji, J.*, Fang, Q., Zhou, S. Liang, F., Nyalwidhe, J., McDonald, D., Verway-Cohen, A., De La Pena Avalos, B., Herrero, A.O.,  Li, W., Fitzgerald, O., Taylor, A.B., Dray, E., Kwon, Y., Semmes, J.O., Tsai, M., Hromas, R., Burma, S., Bishop, A.J., Mazin, A., Wasmuth, E., Olsen, S., Zhou, D. Zhao, W.#, Kupfer, G.#, Sung, P.#. (2026) Mechanism of SETX-BRCA1-BARD1 complex in resolution of R-loops and transcription-replication conflicts. Nat Struct Mol Biol. 2026 Apr;33(4):615-630. doi: 10.1038/s41594-026-01778-8. Epub 2026 Mar 31. (#Co-corresponding authors)."
			/>
			<Publication
				data="Li, W.*, Wu, B.*, Gao, B., Irvin, E.M., Ghosh, A., Eliaz, L., Huang, Y., Kwon, Y., Stiefel, C. M., Nguyen, T., Zhao, D., Suarez, H. J., Ni, T., Alejo, S., Fitzgerald, O., Song, X., Wasmuth, E.V., Zheng, S., Leung, J., Xue, X., Wang, H.,  Ji, J. #, Lan, L. #, and Zhao, W#. (2026) HELZ-BRCA2 Complex Resolves R-loops to Dive Transcriptional-coupled Homologous Recombination. Nature Communications in press (*Co-first authors, #Co-corresponding authors)."
			/>
		</PublicationYear>
		<PublicationYear year={2025}>
			<Publication
				data="Katz. J. N., Samentar, L., Fang, Q., Li, W., Ji, J., Gao, Q., Kuppa, S., Gao, B.,, Rogers, C., Kaur, H., Badamchi, A., Syed, S., Tomimatsu, N., Mukherjee, B., Irvin, E., Zhou, S., Libich, D., Hromas, R., Mazin, A., Rao, M., Olsen, S., Wasmuth, E., Losada, A., Zhou, D., Wang, H., Lan, L., Greene, E., Zhao, W., Kwon, Y., Burma, S., Sung, P., (2025) Multi-faceted roles of PDS5B in RAD51-dependent homology-directed DNA repair and replication fork protection. Nature Communications, In press."
			/>
			<Publication
				data="Tomimatsu, N., Cristofaro, L., Kanji, S., Samentar, L., Jordan, B.R., Kittler, R., Habib, A.A., Espindola-Netto, J.M., Tchkonia, T., Kirkland,J.L., Burns, T.C., Sarkaria, J.N., Gilbert, A., Floyd, J.R., Hromas. R., Zhao, W., Zhou, D., Sung, P., Mukherjee, B.,  Burma, S. (2025) Targeting cIAP2 in a novel senolytic strategy prevents glioblastoma recurrence after radiotherapy. EMBO Molecular Medicine, 1-34."
			/>
			<Publication
				data="Neal, F.E., Li, W., Uhrig, M.E., Katz, J.N., Syed, S., Sharma, N., Dutta, A., Burma, S., Hromas, R., Mazin, A.V., Dray, E., Libich, D.S., Olsen, S.K., Wasmuth, E.V., Zhao, W., Sørensen, C.S., Wiese, C., Kwon, Y., Sung, P.. (2025) Distinct roles of the two BRCA2 DNA-binding domains in DNA damage repair and replication fork preservation. Cell Reports 44 (5)."
			/>
			<Publication
				data="Rogers, C.M., Kaur, H., Swift, M.L., Raina, V.B., Zhou, S., Ajinkya S Kawale, A.S.,  Syed, S., Kelly, K.G., Jasper, A.M., Salunkhe, S., Kwon, Y., Wang, J., Shabestari, A.B., Daley, J.M., Sacks, A.,  Gaczynska, M.E., Osmulski, P.A.,  Rawal, Y.,  Tomimatsu, N.,  Gayther, S.A., Lawrenson, K., Burma, S., Wasmuth, E.V., Olsen, S.K., Zhao, W., Hromas, R., Libich, D.S., Mazin, A.V., Zhou, D., E Greene,E.C.,  Chowdhury, D.,  Sung, P.. (2025) CTC1-STN1-TEN1 controls DNA break repair pathway choice via DNA end resection blockade. Science 388(6749) 881-888."
			/>
			<Publication
				data="Yang, H., Gao, B., Wu, B., Li, W., Zhu, X., Phoon, L., Luo, J., Gui, F., Zhao, W., Jia, L., and Lan, L. cGAS restricts PARP1-mediated microhomology-mediated end joining by suppressing poly-ADP-ribosylation. (2025) Cell Death and Differentiation. 2025 Dec 17. PMID: 41408469 DOI: 10.1038/s41418-025-01637-x"
			/>
		</PublicationYear>
		<PublicationYear year={2024}>
			<Publication
				data="Kelliher, J., Folkerts, M., Shen, K., Song, W., Tengler, K., Stiefel, C., Lee, S., Dray, E., Zhao, W., Koss, B., Pannunzio, N., Leung, J.. (2024) Evolved histone tail regulates 53BP1damaged chromatin recruitment. Nature Communications 15, Article number: 4634 In press"
				href="https://www.nature.com/articles/s41467-024-49071-w"
			></Publication>
			<Publication
				data="Salunkhe, S. *, Daley, J.M. *, Xue, C. *, Tomimatsu, N. *, Kaur, H. *, Raina, V., Jasper, A. M., Rogers, C.M., Li, W., Zhou, S., Mojidra, R., Kwon, Y., Dinh, H., Mukherjee, B., Habib, A.A., Hromas, R., Mazin, A.V., Wasmuth, E.V., Olsen, S.K., Libich, D.S., Zhou, D., Zhao, W., Greene, E.C. #, Burma, S. #, and Sung, P. # Promotion of DNA End Resection by the BRCA1-BARD1 Tumor Suppressor in Homologous Recombination. Nature Accepted in principle (*Co-first authors; #Co-corresponding authors)."
				journal="Nature"
			></Publication>
			<Publication
				data="Huang, Y.*, Li, W.*, Ji, J., Tomimatsu, N., Foo, T., Lan, L., Burma, S, Xia, B., and Zhao, W. DSS1 Restrains BRCA2's Engagement with dsDNA for Homologous Recombination, Replication Fork Protection, and R-loop Homeostasis. Nature Communications, Accepted in principle (*Co-first authors)."
				href="https://www.nature.com/articles/s41467-024-51557-6"
			></Publication>
			<Publication
				data="Fitzgerald, O., Wu B., Wang M., Maqbool, R., Li, W. #, Zhao, W. #. Protocol for evaluating the E3 Ligase Activity of BRCA1-BARD1 and its Variants by Nucleosomal Histone Ubiquitylation. STAR Protocols, In revision. #Corresponding author."
			></Publication>
		</PublicationYear>
		<PublicationYear year={2023}>
			<Publication
				data="Wang, M.*, Li, W.*, Tomimatsu, N., Yu, C., Ji, J., Alejo, S., Witus, S., Alimbetov, D., Fitzgerald, O., Bo, W., Wang, Q., Huang, Y., Gan, Y., Dong, F., Kwon, Y., Sareddy, G., Curiel, T., Habib, A., Hromas, R., Ivanov, D., Brzovic, P., Burma, S.#, Klevit, R.#, and Zhao, W.# (2023) Crucial Roles of the BRCA1-BARD1 E3 Ubiquitin Ligase Activity in Homology-Directed DNA Repair. Mol. Cell (*Co-first authors; #Co-corresponding authors). "
				href="https://pubmed.ncbi.nlm.nih.gov/37797621/"
			></Publication>
			<Publication
				data="Witus, S., Tuttle, L., Li, W, Zelter, A., W, W., Kermoade, K., Wilburn, D., Davis, T., Brzovic P.#, Zhao, W.#, Klevit, R.# (2023) BRCA1/BARD1 intrinsically disordered regions facilitate chromatin recruitment and ubiquitylation. BioRxiv, 2022. 08. 09 503292 doi: https://doi.org/10.1101/2022.08.09.503292. EMBO Journal e113565 (#Co-corresponding authors)"
				href="https://doi.org/10.1101/2022.08.09.503292"
				journal="EMBO Journal"
			></Publication>
			<PublicationEntry>
				<span class="block"
					>Rawal, Y., Jia, L., Meir, A., Zhou, S., Eliza A., Ruben A. E., Kwon, Y., Bernstein, A.
					K., Jasin, M., Burma, S., Hromas, R., Mazin, V. A., Zhao, W., Zhou, D., Wasmuth, V. E.,
					Greene, C.E., Sung, P., Olsen, K. S.</span
				>
				<i class="block"><strong>Nature</strong></i>
				<a
					class="text-link-active-color block underline"
					href="https://pubmed.ncbi.nlm.nih.gov/37344589/"
					>Insights into the role of human BCDX2 complex in RAD51-dependent homologous recombination
					by cryoEM and single-molecule analyses.</a
				>
			</PublicationEntry>
			<PublicationEntry>
				<p>
					Alejo, S., Palacios, E. B., Venkata, P.P., He, Y., Li, W., Johnson D.J., Chen, Y.,
					Jayamohan, S., Uday P. Pratap, P.U., Clarke, K., Zou, Y., Lv, Y., Weldon, K.,
					Viswanadhapalli, S., Lai, Z., Ye, Z., Chen, Y., Gilbert, R.A., Suzuki, T., Tekmal, R.R.,
					Zhao, W., Zheng, S., Vadlamudi, K.R., Brenner, J.A., R. Sareddy, R.G.
				</p>
				<i><strong>Neuro-Oncology</strong></i>
				<p>
					<a class="text-link-active-color underline" href="https://doi.org/10.1093/neuonc/noad018"
						>Lysine-specific histone demethylase 1A (KDM1A/LSD1) inhibition attenuates DNA
						double-strand breaks repair and augments the efficacy of temozolomide in glioblastoma</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>
					Kwon, Y.*, Rösner, H.*, Zhao, W., Selemenakis, P., He, Z., Kawale, A., Katz, J., Rogers,
					C., Neal, F., Badamchi, A., Petrosius, V., Singh, A., Joel, M., Lu ,L., Holloway, S.,
					Burma, S., Mukherjee, B., Hromas, R., Mazin, A., Wiese, C.#, Sørensen, C.#, Sung, P.
				</p>
				<i><strong>Nature Communications</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.nature.com/articles/s41467-023-36211-x"
						>DNA binding and RAD51 interaction by the BRCA2 C-terminus orchestrate DNA repair and
						replication fork preservation.</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2022}>
			<PublicationEntry>
				<p>
					Chung, S., Kang, M., Alimbetov, D, Mun, G., Yunn, N., Kim, Y., Kim, B., Wie, M., Lee, E.,
					Ra, J., Oh, J., Lee, D., Lee, K., Kim, J., Han, S., Kim, K., Chung, W., Nam, K., Park, N.,
					Lee, B., Kim, S., Zhao, W., Ryu, S., Lee, Y., Myung, K., Cho, Y.
				</p>
				<i><strong>Nature Communications</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.nature.com/articles/s41467-022-34612-y"
						>Regulation of BRCA1 stability through the tandem UBX domains of isoleucyl-tRNA
						synthetase</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>Witus S., Zhao W., Brzovic P., Klevit R.</p>
				<i><strong>Trends in Biochemical Sciences</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://pubmed.ncbi.nlm.nih.gov/35351360/"
						>BRCA1/BARD1 is a nucleosome reader and writer</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>
					Kornepati A.V.R., Boyd J.T., Murray C.E., Saifetiarova J., Avalos B.P., Rogers C.M.,
					Haiyan Bai, Padron A.S., Liao Y., Ontiveros C., Svatek R.S., Hromas R., Li R., Hu Y.,
					Conejo-Garcia J.R., Vadlamudi R.K., Zhao W., Dray E., Sung P., Curiel T.J.
				</p>
				<i><strong>Cancer Research</strong></i>
				<p>
					<a
						href="https://aacrjournals.org/cancerres/article-abstract/doi/10.1158/0008-5472.CAN-21-2076/682005/Tumor-intrinsic-PD-L1-promotes-DNA-repair-in"
						>Tumor-intrinsic programmed death-ligand 1 promotes DNA repair by homologous
						recombination in distinct cancers and can suppress PARP inhibitor synthetic lethality</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>Wang M., Rogers C.M., Alimbetov D.S., Zhao W., ...</p>
				<i><strong>Methods Mol Biol. 2444, 207-225.</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://pubmed.ncbi.nlm.nih.gov/35290640/"
						>In Vitro Reconstitution of BRCA1-BARD1/RAD51 Mediated Homologous DNA Pairing</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2021}>
			<PublicationEntry>
				<p>
					Foo T.K., Vincelli G., Huselid E., Her J., Zheng H., Simhadri S., Wang M., Huo Y., Li T.,
					Yu X., Li H., Zhao W., Bunting S.F., Xia B.
				</p>
				<i><strong> Cancer Research 81 (18): 4676-4684</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://pubmed.ncbi.nlm.nih.gov/34301763/"
						>ATR and ATM phosphorylation of BRCA1 at T1394 promotes homologous recombinational
						repair and G2/M checkpoint maintenance</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>E Pires, N Sharma, P Selemenakis, B Wu, Y Huang, DS Alimbetov, ...</p>
				<i><strong>Journal of Biological Chemistry 297 (1)</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(21)00642-6/fulltext"
						>RAD51AP1 mediates RAD51 activity through nucleosome interaction</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>SR Witus, AL Burrell, DP Farrell, J Kang, M Wang, JM Hansen, A Pravat, ...</p>
				<i><strong>Nature structural & molecular biology 28 (3), 268-277</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.nature.com/articles/s41594-020-00556-4"
						>BRCA1/BARD1 site-specific ubiquitylation of nucleosomal H2A is directed by BARD1</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>C Xue,L Molnarova,JB Steinfeld,W Zhao,C Ma,M Spirek,K Kaniecki,...</p>
				<i><strong>Nucleic acids research 49 (1), 285-305</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://academic.oup.com/nar/article-abstract/49/1/285/6041011"
						>Single-molecule visualization of human RECQ5 interactions with single-stranded DNA
						recombination intermediates</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2020}>
			<PublicationEntry>
				<p>DG Maranon,N Sharma,Y Huang,P Selemenakis,M Wang,N Altina,...</p>
				<i><strong>Journal of Cell Biology 219 (10)</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://rupress.org/jcb/article-abstract/219/10/e201911049/152064"
						>NUCKS1 promotes RAD54 activity in homologous recombination DNA repair</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>F Liang,AS Miller,C Tang,D Maranon,EA Williamson,R Hromas,...</p>
				<i><strong>Journal of Biological Chemistry 295 (24), 8186-8194</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(17)49408-7/abstract"
						>The DNA-binding activity of USP1-associated factor 1 is required for efficient
						RAD51-mediated homologous DNA pairing and homology-directed DNA repair</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2019}>
			<PublicationEntry>
				<p>JB Steinfeld,O Beláň,Y Kwon,T Terakawa,A Al-Zain,MJ Smith,...</p>
				<i><strong>Genes & development 33 (17-18), 1191-1207</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="http://genesdev.cshlp.org/content/33/17-18/1191.short"
						>Defining the influence of Rad51 and Dmc1 lineage-specific amino acids on genetic
						recombination</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>G Srinivasan,EA Williamson,K Kong,AS Jaiswal,G Huang,HS Kim,...</p>
				<i><strong>Proceedings of the National Academy of Sciences 116 (35), 17438-17443</strong></i
				>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.pnas.org/content/116/35/17438.short"
						>MiR223-3p promotes synthetic lethality in BRCA1-deficient cancers</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>W Zhao,C Wiese,Y Kwon,R Hromas,P Sung</p>
				<i><strong>Annual review of biochemistry 88, 221-245</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.annualreviews.org/doi/abs/10.1146/annurev-biochem-013118-111058"
						>The BRCA tumor suppressor network in chromosome damage repair by homologous
						recombination</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2018}>
			<PublicationEntry>
				<p>T Rao,S Longerich,W Zhao,H Aihara,P Sung,Y Xiong</p>
				<i><strong>DNA repair 64, 53-58</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.sciencedirect.com/science/article/pii/S1568786417304160"
						>Importance of homo-dimerization of Fanconi-associated nuclease 1 in DNA flap cleavage</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>S Welty,Y Teng,Z Liang,W Zhao,LH Sanders,JT Greenamyre,...</p>
				<i><strong>Journal of Biological Chemistry 293 (4), 1353-1362</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(20)39136-5/fulltext"
						>RAD52 is required for RNA-templated recombination repair in post-mitotic neurons</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>L Zhao,J Xu,W Zhao,P Sung,HW Wang</p>
				<i><strong>Methods in Enzymology 600, 179-199</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.sciencedirect.com/science/article/abs/pii/S0076687917303774"
						>Determining the RAD51-DNA nucleoprotein filament structure and function by
						cryo-electron microscopy</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2017}>
			<PublicationEntry>
				<p>W Zhao,JB Steinfeld,F Liang,X Chen,DG Maranon,CJ Ma,Y Kwon,...</p>
				<i><strong>Nature 550 (7676), 360</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5800781/"
						>Promotion of RAD51-mediated homologous DNA pairing by BRCA1-BARD1</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>W Zhao,JB Steinfeld,F Liang,X Chen,DG Maranon,C Jian Ma,Y Kwon,...</p>
				<i><strong>Nature 550 (7676), 360-365</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.nature.com/articles/nature24060"
						>BRCA1-BARD1 promotes RAD51-mediated homologous DNA pairing</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>J Xu,L Zhao,Y Xu,W Zhao,P Sung,HW Wang</p>
				<i><strong>Nature structural & molecular biology 24 (1), 40-46</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.nature.com/articles/nsmb.3336"
						>Cryo-EM structures of human RAD51 recombinase filaments during catalysis of DNA-strand
						exchange</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2016}>
			<PublicationEntry>
				<p>MV Borgogno,MR Monti,W Zhao,P Sung,CE Argaraña,RJ Pezza</p>
				<i><strong>Journal of Biological Chemistry 291 (10), 4928-4938</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(20)43135-7/fulltext"
						>Tolerance of DNA mismatches in Dmc1 recombinase-mediated DNA strand exchange</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>KS Trego,T Groesser,AR Davalos,AC Parplys,W Zhao,MR Nelson,...</p>
				<i><strong>Molecular cell 61 (4), 535-546</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.sciencedirect.com/science/article/pii/S1097276515010084"
						>Non-catalytic Roles for XPG with BRCA1 and BRCA2 in Homologous Recombination and Genome
						Stability</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2015}>
			<PublicationEntry>
				<p>AC Parplys,W Zhao,N Sharma,T Groesser,F Liang,DG Maranon,...</p>
				<i><strong>Nucleic acids research 43 (20), 9817-9834</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://academic.oup.com/nar/article/43/20/9817/1400677?login=true"
						>NUCKS1 is a novel RAD51AP1 paralog important for homologous recombination and genome
						stability</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>JY Lee,T Terakawa,Z Qi,JB Steinfeld,S Redding,YH Kwon,WA Gaines,...</p>
				<i><strong>Science 349 (6251), 977-981</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.science.org/doi/abs/10.1126/science.aab2666"
						>Base triplet stepping by the Rad51/RecA family of recombinases</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>W Zhao,S Vaithiyalingam,J San Filippo,DG Maranon,J Jimenez-Sainz,...</p>
				<i><strong>Molecular cell 59 (2), 176-187</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.sciencedirect.com/science/article/pii/S1097276515003998"
						>Promotion of BRCA2-dependent homologous recombination by DSS1 via RPA targeting and DNA
						mimicry</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>W Zhao,P Sung</p>
				<i><strong>Nucleic acids research 43 (8), 4055-4066</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://academic.oup.com/nar/article/43/8/4055/2414401?login=true"
						>Significance of ligand interactions involving Hop2-Mnd1 and the RAD51 and DMC1
						recombinases in homologous DNA repair and XX ovarian dysgenesis</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2014}>
			<PublicationEntry>
				<p>H Moktan,MF Guiraldelli,CA Eyster,W Zhao,CY Lee,T Mather,...</p>
				<i><strong>Journal of Biological Chemistry 289 (21), 14682-14691</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(20)38672-5/fulltext"
						>Solution structure and DNA-binding properties of the winged helix domain of the meiotic
						recombination HOP2 protein</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>R Buisson,J Niraj,J Pauty,R Maity,W Zhao,Y Coulombe,P Sung,...</p>
				<i><strong>Cell reports 6 (3), 553-564</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.sciencedirect.com/science/article/pii/S2211124714000102"
						>Breast cancer proteins PALB2 and BRCA2 stimulate polymerase η in
						recombination-associated DNA synthesis at blocked replication forks</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2013}>
			<PublicationEntry>
				<p>W Zhao,D Saro,M Hammel,YH Kwon,Y Xu,RP Rambo,GJ Williams,...</p>
				<i><strong>Nucleic acids research 42 (2), 906-917</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://academic.oup.com/nar/article/42/2/906/1025872?login=true"
						>Mechanistic insights into the role of Hop2–Mnd1 in meiotic homologous DNA pairing</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2012}>
			<PublicationEntry>
				<p>MH Dunlop,E Dray,W Zhao,J San Filippo,MS Tsai,SG Leung,D Schild,...</p>
				<i><strong>Journal of Biological Chemistry 287 (15), 12343-12347</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(20)53161-X/fulltext"
						>Mechanistic insights into RAD51-associated protein 1 (RAD51AP1) action in homologous
						DNA repair</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2011}>
			<PublicationEntry>
				<p>MH Dunlop,E Dray,W Zhao,MS Tsai,C Wiese,D Schild,P Sung</p>
				<i><strong>Journal of Biological Chemistry 286 (43), 37328-37334</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(20)50759-X/fulltext"
						>RAD51-associated protein 1 (RAD51AP1) interacts with the meiotic recombinase DMC1
						through a conserved motif</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>Y Kwon,W Zhao,P Sung</p>
				<i><strong>DNA Recombination, 421-435</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://link.springer.com/protocol/10.1007/978-1-61779-129-1_24"
						>Biochemical studies on human Rad51-mediated homologous recombination</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2010}>
			<PublicationEntry>
				<p>H Niu,WH Chung,Z Zhu,Y Kwon,W Zhao,P Chi,R Prakash,C Seong,...</p>
				<i><strong>Nature 467 (7311), 108-111</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.nature.com/articles/nature09318"
						>Mechanism of the ATP-dependent DNA end-resection machinery from Saccharomyces
						cerevisiae</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2009}>
			<PublicationEntry>
				<p>RB Robertson,DN Moses,YH Kwon,P Chan,W Zhao,P Chi,H Klein,...</p>
				<i><strong>Journal of molecular biology 388 (4), 703-720</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.sciencedirect.com/science/article/abs/pii/S002228360900343X"
						>Visualizing the disassembly of S. cerevisiae Rad51 nucleoprotein filaments</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2008}>
			<PublicationEntry>
				<p>S Raynard,W Zhao,W Bussen,L Lu,YY Ding,V Busygina,AR Meetei,...</p>
				<i><strong>Journal of Biological Chemistry 283 (23), 15701-15708</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(20)46104-6/fulltext"
						>Functional role of BLAP75 in BLM-topoisomerase IIIα-dependent Holliday junction
						processing</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2007}>
			<PublicationEntry>
				<p>W Zhao,Z Ye,J Zhao</p>
				<i><strong>Molecular microbiology 66 (5), 1219-1230</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1365-2958.2007.05994.x"
						>RbrA, a cyanobacterial rubrerythrin, functions as a FNR-dependent peroxidase in
						heterocysts in protection of nitrogenase from damage by hydrogen peroxide in Anabaena
						sp. PCC 7120</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>Y Zhang,H Pu,Q Wang,S Cheng,W Zhao,Y Zhang,J Zhao</p>
				<i><strong>Journal of Biological Chemistry 282 (46), 33641-33648</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.jbc.org/article/S0021-9258(20)71699-6/fulltext"
						>PII is important in regulation of nitrogen metabolism but not required for heterocyst
						formation in the cyanobacterium Anabaena sp. PCC 7120</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>W Zhao,Q Guo,J Zhao</p>
				<i><strong>Oxford University Press 48 (4), 563-572</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://academic.oup.com/pcp/article/48/4/563/2756887?login=true"
						>A membrane-associated Mn-superoxide dismutase protects the photosynthetic apparatus and
						nitrogenase from oxidative damage in the cyanobacterium Anabaena sp. PCC 7120</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>X Chen,D Cui,C Liu,H Li,W Zhao</p>
				<i><strong>Frontiers of Chemistry in China 2 (1), 74-78</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://link.springer.com/article/10.1007/s11458-007-0015-7"
						>Sample pretreatment microfluidic chip for DNA extraction from rat peripheral blood</a
					>
				</p>
			</PublicationEntry>
			<PublicationEntry>
				<p>B Hu,G Yang,W Zhao,Y Zhang,J Zhao</p>
				<i><strong>Molecular microbiology 63 (6), 1640-1652</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1365-2958.2007.05618.x"
						>MreB is important for cell shape but not for chromosome segregation of the filamentous
						cyanobacterium Anabaena sp. PCC 7120</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2006}>
			<PublicationEntry>
				<p>Y Shi,W Zhao,W Zhang,Z Ye,J Zhao</p>
				<i><strong>Proceedings of the National Academy of Sciences 103 (30), 11334-11339</strong></i
				>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.pnas.org/content/103/30/11334.short"
						>Regulation of intracellular free calcium concentration during heterocyst
						differentiation by HetR and NtcA in Anabaena sp. PCC 7120</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
		<PublicationYear year={2005}>
			<PublicationEntry>
				<p>Y Zhao,Y Shi,W Zhao,X Huang,D Wang,N Brown,J Brand,J Zhao</p>
				<i><strong>Proceedings of the National Academy of Sciences 102 (16), 5744-5748</strong></i>
				<p>
					<a
						class="text-link-active-color underline"
						href="https://www.pnas.org/content/102/16/5744/"
						>CcbP, a calcium-binding protein from Anabaena sp. PCC 7120, provides evidence that
						calcium ions regulate heterocyst differentiation</a
					>
				</p>
			</PublicationEntry>
		</PublicationYear>
	</PublicationList>
</Site>
