import { describe, expect, it } from 'vitest';
import { parse } from './Publication.svelte';

function parseFields(src: string) {
	const result = parse(src);

	expect(result).not.toBeNull();
	expect(result!.groups).toBeDefined();

	const { authors, year, title, journal } = result!.groups!;

	return {
		authors,
		year,
		title,
		journal
	};
}

describe('parse', () => {
	it.each([
		{
			src: 'Murray, C., Ontiveros, C., Wentworth, J., Blinkiewicz, P.V., Leung, B., Bai, H., Spicer, N., Holtz, A., Tanner, C., Balasubramanian, A., Li, W., Dray, E., Zhao, W., Tyler Curiel, T. (2026) Telmisartan increases olaparib efficacy in homologous recombination proficient tumors by augmenting type I interferon production. BMJ Journal for Immunotherapy of Cancer. 2026 Mar 25;14(3):e012426. doi: 10.1136/jitc-2025-012426.',
			expected: {
				authors:
					'Murray, C., Ontiveros, C., Wentworth, J., Blinkiewicz, P.V., Leung, B., Bai, H., Spicer, N., Holtz, A., Tanner, C., Balasubramanian, A., Li, W., Dray, E., Zhao, W., Tyler Curiel, T.',
				year: '2026',
				title:
					'Telmisartan increases olaparib efficacy in homologous recombination proficient tumors by augmenting type I interferon production.',
				journal: 'BMJ Journal for Immunotherapy of Cancer'
			}
		},
		{
			src: 'Rawal, Y., Kwon, Y., Jia, L., Ruben, E., Tovar, M., Fang, Q., Jamalruddin, M. A., Zhou, S., Kuppa, S., Syed, S., Jasper, A., Katz, J., Nayak, D., Stratton, C., Rogers, C., Kaur, H., Ji, J.-H., Samentar, L., Zhao, W., Dray, E., Taylor, A., Burma, S., Rao, M., Libich, D., Hromas, R., Mazin, A., Zhang, F., Jasin, M., Zhou, D., Bernstein, K., Greene, E., Wasmuth, E., Sung, P., Olsen. K. S..(2026) Cryo-EM Structures of RAD51-X3C and RAD51-X3CDX2 Reveal Activation of Presynaptic Filament Assembly by Paralog Exchange. Nat Struct Mol Biol. 22 April 2026',
			expected: {
				authors:
					'Rawal, Y., Kwon, Y., Jia, L., Ruben, E., Tovar, M., Fang, Q., Jamalruddin, M. A., Zhou, S., Kuppa, S., Syed, S., Jasper, A., Katz, J., Nayak, D., Stratton, C., Rogers, C., Kaur, H., Ji, J.-H., Samentar, L., Zhao, W., Dray, E., Taylor, A., Burma, S., Rao, M., Libich, D., Hromas, R., Mazin, A., Zhang, F., Jasin, M., Zhou, D., Bernstein, K., Greene, E., Wasmuth, E., Sung, P., Olsen. K. S..',
				year: '2026',
				title:
					'Cryo-EM Structures of RAD51-X3C and RAD51-X3CDX2 Reveal Activation of Presynaptic Filament Assembly by Paralog Exchange.',
				journal: 'Nat Struct Mol Biol'
			}
		},
		{
			src: 'Dutta, A.*, Ji, J.*, Fang, Q., Zhou, S. Liang, F., Nyalwidhe, J., McDonald, D., Verway-Cohen, A., De La Pena Avalos, B., Herrero, A.O.,  Li, W., Fitzgerald, O., Taylor, A.B., Dray, E., Kwon, Y., Semmes, J.O., Tsai, M., Hromas, R., Burma, S., Bishop, A.J., Mazin, A., Wasmuth, E., Olsen, S., Zhou, D. Zhao, W.#, Kupfer, G.#, Sung, P.#. (2026) Mechanism of SETX-BRCA1-BARD1 complex in resolution of R-loops and transcription-replication conflicts. Nat Struct Mol Biol. 2026 Apr;33(4):615-630. doi: 10.1038/s41594-026-01778-8. Epub 2026 Mar 31. (#Co-corresponding authors).',
			expected: {
				authors:
					'Dutta, A.*, Ji, J.*, Fang, Q., Zhou, S. Liang, F., Nyalwidhe, J., McDonald, D., Verway-Cohen, A., De La Pena Avalos, B., Herrero, A.O.,  Li, W., Fitzgerald, O., Taylor, A.B., Dray, E., Kwon, Y., Semmes, J.O., Tsai, M., Hromas, R., Burma, S., Bishop, A.J., Mazin, A., Wasmuth, E., Olsen, S., Zhou, D. Zhao, W.#, Kupfer, G.#, Sung, P.#.',
				year: '2026',
				title:
					'Mechanism of SETX-BRCA1-BARD1 complex in resolution of R-loops and transcription-replication conflicts.',
				journal: 'Nat Struct Mol Biol'
			}
		},
		{
			src: 'Li, W.*, Wu, B.*, Gao, B., Irvin, E.M., Ghosh, A., Eliaz, L., Huang, Y., Kwon, Y., Stiefel, C. M., Nguyen, T., Zhao, D., Suarez, H. J., Ni, T., Alejo, S., Fitzgerald, O., Song, X., Wasmuth, E.V., Zheng, S., Leung, J., Xue, X., Wang, H.,  Ji, J. #, Lan, L. #, and Zhao, W#. (2026) HELZ-BRCA2 Complex Resolves R-loops to Dive Transcriptional-coupled Homologous Recombination. Nature Communications in press (*Co-first authors, #Co-corresponding authors).',
			expected: {
				authors:
					'Li, W.*, Wu, B.*, Gao, B., Irvin, E.M., Ghosh, A., Eliaz, L., Huang, Y., Kwon, Y., Stiefel, C. M., Nguyen, T., Zhao, D., Suarez, H. J., Ni, T., Alejo, S., Fitzgerald, O., Song, X., Wasmuth, E.V., Zheng, S., Leung, J., Xue, X., Wang, H.,  Ji, J. #, Lan, L. #, and Zhao, W#.',
				year: '2026',
				title:
					'HELZ-BRCA2 Complex Resolves R-loops to Dive Transcriptional-coupled Homologous Recombination.',
				journal: 'Nature Communications'
			}
		},
		{
			src: 'Katz. J. N., Samentar, L., Fang, Q., Li, W., Ji, J., Gao, Q., Kuppa, S., Gao, B.,, Rogers, C., Kaur, H., Badamchi, A., Syed, S., Tomimatsu, N., Mukherjee, B., Irvin, E., Zhou, S., Libich, D., Hromas, R., Mazin, A., Rao, M., Olsen, S., Wasmuth, E., Losada, A., Zhou, D., Wang, H., Lan, L., Greene, E., Zhao, W., Kwon, Y., Burma, S., Sung, P., (2025) Multi-faceted roles of PDS5B in RAD51-dependent homology-directed DNA repair and replication fork protection. Nature Communications, In press.',
			expected: {
				authors:
					'Katz. J. N., Samentar, L., Fang, Q., Li, W., Ji, J., Gao, Q., Kuppa, S., Gao, B.,, Rogers, C., Kaur, H., Badamchi, A., Syed, S., Tomimatsu, N., Mukherjee, B., Irvin, E., Zhou, S., Libich, D., Hromas, R., Mazin, A., Rao, M., Olsen, S., Wasmuth, E., Losada, A., Zhou, D., Wang, H., Lan, L., Greene, E., Zhao, W., Kwon, Y., Burma, S., Sung, P.',
				year: '2025',
				title:
					'Multi-faceted roles of PDS5B in RAD51-dependent homology-directed DNA repair and replication fork protection.',
				journal: 'Nature Communications'
			}
		},
		{
			src: 'Tomimatsu, N., Cristofaro, L., Kanji, S., Samentar, L., Jordan, B.R., Kittler, R., Habib, A.A., Espindola-Netto, J.M., Tchkonia, T., Kirkland,J.L., Burns, T.C., Sarkaria, J.N., Gilbert, A., Floyd, J.R., Hromas. R., Zhao, W., Zhou, D., Sung, P., Mukherjee, B.,  Burma, S. (2025) Targeting cIAP2 in a novel senolytic strategy prevents glioblastoma recurrence after radiotherapy. EMBO Molecular Medicine, 1-34.',
			expected: {
				authors:
					'Tomimatsu, N., Cristofaro, L., Kanji, S., Samentar, L., Jordan, B.R., Kittler, R., Habib, A.A., Espindola-Netto, J.M., Tchkonia, T., Kirkland,J.L., Burns, T.C., Sarkaria, J.N., Gilbert, A., Floyd, J.R., Hromas. R., Zhao, W., Zhou, D., Sung, P., Mukherjee, B.,  Burma, S.',
				year: '2025',
				title:
					'Targeting cIAP2 in a novel senolytic strategy prevents glioblastoma recurrence after radiotherapy.',
				journal: 'EMBO Molecular Medicine'
			}
		},
		{
			src: 'Yang, H., Gao, B., Wu, B., Li, W., Zhu, X., Phoon, L., Luo, J., Gui, F., Zhao, W., Jia, L., and Lan, L. cGAS restricts PARP1-mediated microhomology-mediated end joining by suppressing poly-ADP-ribosylation. (2025) Cell Death and Differentiation. 2025 Dec 17. PMID: 41408469 DOI: 10.1038/s41418-025-01637-x',
			expected: {
				authors:
					'Yang, H., Gao, B., Wu, B., Li, W., Zhu, X., Phoon, L., Luo, J., Gui, F., Zhao, W., Jia, L., and Lan, L.',
				year: '2025',
				title:
					'cGAS restricts PARP1-mediated microhomology-mediated end joining by suppressing poly-ADP-ribosylation.',
				journal: 'Cell Death and Differentiation'
			}
		},
		{
			src: 'Kelliher, J., Folkerts, M., Shen, K., Song, W., Tengler, K., Stiefel, C., Lee, S., Dray, E., Zhao, W., Koss, B., Pannunzio, N., Leung, J.. (2024) Evolved histone tail regulates 53BP1damaged chromatin recruitment. Nature Communications 15, Article number: 4634 In press',
			expected: {
				authors:
					'Kelliher, J., Folkerts, M., Shen, K., Song, W., Tengler, K., Stiefel, C., Lee, S., Dray, E., Zhao, W., Koss, B., Pannunzio, N., Leung, J..',
				year: '2024',
				title: 'Evolved histone tail regulates 53BP1damaged chromatin recruitment.',
				journal: 'Nature Communications'
			}
		},
		{
			src: 'Salunkhe, S. *, Daley, J.M. *, Xue, C. *, Tomimatsu, N. *, Kaur, H. *, Raina, V., Jasper, A. M., Rogers, C.M., Li, W., Zhou, S., Mojidra, R., Kwon, Y., Dinh, H., Mukherjee, B., Habib, A.A., Hromas, R., Mazin, A.V., Wasmuth, E.V., Olsen, S.K., Libich, D.S., Zhou, D., Zhao, W., Greene, E.C. #, Burma, S. #, and Sung, P. # Promotion of DNA End Resection by the BRCA1-BARD1 Tumor Suppressor in Homologous Recombination. Nature Accepted in principle (*Co-first authors; #Co-corresponding authors).',
			expected: {
				authors:
					'Salunkhe, S. *, Daley, J.M. *, Xue, C. *, Tomimatsu, N. *, Kaur, H. *, Raina, V., Jasper, A. M., Rogers, C.M., Li, W., Zhou, S., Mojidra, R., Kwon, Y., Dinh, H., Mukherjee, B., Habib, A.A., Hromas, R., Mazin, A.V., Wasmuth, E.V., Olsen, S.K., Libich, D.S., Zhou, D., Zhao, W., Greene, E.C. #, Burma, S. #, and Sung, P. #',
				year: '',
				title:
					'Promotion of DNA End Resection by the BRCA1-BARD1 Tumor Suppressor in Homologous Recombination.',
				journal: 'Nature'
			}
		},
		{
			src: "Huang, Y.*, Li, W.*, Ji, J., Tomimatsu, N., Foo, T., Lan, L., Burma, S, Xia, B., and Zhao, W. DSS1 Restrains BRCA2's Engagement with dsDNA for Homologous Recombination, Replication Fork Protection, and R-loop Homeostasis. Nature Communications, Accepted in principle (*Co-first authors).",
			expected: {
				authors:
					'Huang, Y.*, Li, W.*, Ji, J., Tomimatsu, N., Foo, T., Lan, L., Burma, S, Xia, B., and Zhao, W.',
				year: '',
				title:
					"DSS1 Restrains BRCA2's Engagement with dsDNA for Homologous Recombination, Replication Fork Protection, and R-loop Homeostasis.",
				journal: 'Nature Communications'
			}
		},
		{
			src: 'Fitzgerald, O., Wu B., Wang M., Maqbool, R., Li, W. #, Zhao, W. #. Protocol for evaluating the E3 Ligase Activity of BRCA1-BARD1 and its Variants by Nucleosomal Histone Ubiquitylation. STAR Protocols, In revision. #Corresponding author.',
			expected: {
				authors: 'Fitzgerald, O., Wu B., Wang M., Maqbool, R., Li, W. #, Zhao, W. #.',
				year: '',
				title:
					'Protocol for evaluating the E3 Ligase Activity of BRCA1-BARD1 and its Variants by Nucleosomal Histone Ubiquitylation.',
				journal: 'STAR Protocols'
			}
		},
		{
			src: 'Wang, M.*, Li, W.*, Tomimatsu, N., Yu, C., Ji, J., Alejo, S., Witus, S., Alimbetov, D., Fitzgerald, O., Bo, W., Wang, Q., Huang, Y., Gan, Y., Dong, F., Kwon, Y., Sareddy, G., Curiel, T., Habib, A., Hromas, R., Ivanov, D., Brzovic, P., Burma, S.#, Klevit, R.#, and Zhao, W.# (2023) Crucial Roles of the BRCA1-BARD1 E3 Ubiquitin Ligase Activity in Homology-Directed DNA Repair. Mol. Cell (*Co-first authors; #Co-corresponding authors). ',
			expected: {
				authors:
					'Wang, M.*, Li, W.*, Tomimatsu, N., Yu, C., Ji, J., Alejo, S., Witus, S., Alimbetov, D., Fitzgerald, O., Bo, W., Wang, Q., Huang, Y., Gan, Y., Dong, F., Kwon, Y., Sareddy, G., Curiel, T., Habib, A., Hromas, R., Ivanov, D., Brzovic, P., Burma, S.#, Klevit, R.#, and Zhao, W.#',
				year: '2023',
				title:
					'Crucial Roles of the BRCA1-BARD1 E3 Ubiquitin Ligase Activity in Homology-Directed DNA Repair.',
				journal: 'Mol. Cell'
			}
		},
		{
			src: 'Witus, S., Tuttle, L., Li, W, Zelter, A., W, W., Kermoade, K., Wilburn, D., Davis, T., Brzovic P.#, Zhao, W.#, Klevit, R.# (2023) BRCA1/BARD1 intrinsically disordered regions facilitate chromatin recruitment and ubiquitylation. BioRxiv, 2022. 08. 09 503292 doi: https://doi.org/10.1101/2022.08.09.503292. EMBO Journal e113565 (#Co-corresponding authors)',
			expected: {
				authors:
					'Witus, S., Tuttle, L., Li, W, Zelter, A., W, W., Kermoade, K., Wilburn, D., Davis, T., Brzovic P.#, Zhao, W.#, Klevit, R.#',
				year: '2023',
				title:
					'BRCA1/BARD1 intrinsically disordered regions facilitate chromatin recruitment and ubiquitylation.',
				journal: 'BioRxiv'
			}
		}
	])('parses $expected.journal publication data', ({ src, expected }) => {
		expect(parseFields(src)).toEqual(expected);
	});
});
