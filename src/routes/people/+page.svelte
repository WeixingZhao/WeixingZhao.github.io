<script lang="ts">
	import weixingZhao from '$lib/assets/people/Weixing_Zhao.webp';
	import wenjingLi from '$lib/assets/people/Wenjing_Li.webp';
	import boWu from '$lib/assets/people/Bo_Wu.webp';
	import tengNi from '$lib/assets/people/Tengyang_Ni.webp';
	import roufThak from '$lib/assets/people/Rouf_Thakur.webp';
	import taveonFitz from '$lib/assets/people/o-taveon.webp';
	import lnkEmpty from '$lib/assets/people/linkedin_empty.svg';
	import davidZh from '$lib/assets/people/David_Zhao.webp';
	import Site from '$lib/components/Site.svelte';
	import Somebody from '$lib/components/Somebody.svelte';
</script>

<svelte:head>
	<title>People | Zhao Lab</title>
</svelte:head>
<Site useDefaultContainer={true}>
	<div class="grid grid-flow-row auto-rows-auto grid-cols-[auto_1fr] gap-4 md:grid-cols-[min-content_auto_1fr]">
		<div class="max-md:col-span-2">
			<h1 class="font-sans text-xl uppercase">The Boss</h1>
		</div>
		<Somebody named="Weixing Zhao" isA="Principal Investigator" looksLike={weixingZhao}
			>Earned his B.S and Ph.D. from Peking University, China, and received postdoctoral training at
			Yale University. In his free time he enjoys watching movies and having fun with his kids.</Somebody
		>
		<div class="max-md:col-span-2">
			<h1 class="font-sans text-xl uppercase">Postdocs</h1>
		</div>
		<Somebody named="Wenjing Li" isA="Postdoctoral Fellow" looksLike={wenjingLi} />
		<Somebody named="Bo Wu" isA="Postdoctoral Fellow" looksLike={boWu} />
		<Somebody named="Tengyang Ni" isA="Postdoctoral Fellow" looksLike={tengNi} />
		<Somebody named="Rouf Thakur" isA="Postdoctoral Fellow" looksLike={roufThak} />
		<div class="max-md:col-span-2">
			<h1 class="font-sans text-xl uppercase">GRADUATE STUDENTS</h1>
		</div>
		<Somebody named="O'Taveon Fitzgerald" isA="Graduate Student" looksLike={taveonFitz} />
		<div class="max-md:col-span-2">
			<h1 class="font-sans text-xl uppercase">Alumni</h1>
		</div>
		<Somebody named="Qijing Wang" isA="Former Postdoctoral Fellow" looksLike={lnkEmpty} />
		<Somebody named="Felix Dong" isA="Former Lab Manager" looksLike={lnkEmpty} />
		<Somebody named="Yuxin Huang Ph.D." isA="Former Postdoctoral Fellow" looksLike={lnkEmpty} />
		<Somebody named="Meiling Wang Ph.D." isA="Former Postdoctoral Fellow" looksLike={lnkEmpty} />
		<Somebody named="Dauren Alimbetov" isA="Former Postdoctoral Fellow" looksLike={lnkEmpty} />
		<div class="max-md:col-span-2">
			<h1 class="font-sans text-xl uppercase">Chief Computer Scientist</h1>
		</div>
		<Somebody named="David Zhao" isA="Chief Computer Scientist" looksLike={davidZh} />
	</div>
</Site>
