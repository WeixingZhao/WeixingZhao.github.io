import { describe, expect, it } from 'vitest';
import { parse } from './Publication.svelte';

function parseFields(src: string) {
	const result = parse(src);

	expect(result).not.toBeNull();

	return {
		authors: result![1],
		year: result![2],
		title: result![3],
		journal: result![4]
	};
}

describe('parse', () => {
	it.each([
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
				journal: 'Nature Accepted'
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
