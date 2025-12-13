<script lang="ts">
    import weixingZhao from "$lib/assets/people/Weixing_Zhao.jpg";
    import wenjingLi from "$lib/assets/people/Wenjing_Li.jpg";
    import boWu from "$lib/assets/people/Bo_Wu.jpg";
    import tengNi from "$lib/assets/people/Tengyang_Ni.jpg";
    import roufThak from "$lib/assets/people/Rouf_Thakur.jpg";
    import taveonFitz from "$lib/assets/people/o-taveon.jpg"
    import lnkEmpty from "$lib/assets/people/linkedin_empty.svg";
    import davidZh from "$lib/assets/people/David_Zhao.jpg";
</script>

<svelte:head>
    <title>People | Zhao Lab</title>
</svelte:head>

    <aside aria-label="Skip to main content" class="print:hidden">
        <a href="#main-content" tabindex="0"
            class="sr-only underline absolute focus:absolute focus:not-sr-only focus:border-solid focus:border-2">Skip
            to main
            content</a>
    </aside>
    <div id="page" class="table w-full h-full">
        <header
            class="w-full h-80 flex flex-col justify-end items-center bg-[url('dna.png')] bg-fixed bg-cover bg-top bg-no-repeat print:hidden">
            <div id="page-title" class="w-full flex justify-center h-fit">
                <h1
                    class="font-thin text-6xl grow max-w-6xl sm:bg-[url('brand.png')] bg-contain bg-right bg-no-repeat">
                    Zhao Lab</h1>
            </div>
            <nav id="nav" class="w-full flex justify-center h-fit backdrop-blur">
                <ul class="grow max-w-6xl flex flex-wrap justify-evenly bg-comp-dark text-comp-light">
                    <li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
                        <a class="flex justify-center items-center h-full w-full p-3" draggable="false"
                            href="/">Home</a>
                    </li>
                    <li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
                        <a class="flex justify-center items-center h-full w-full p-3" draggable="false"
                            href="/positions/">Positions</a>
                    </li>
                    <li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
                        <a class="flex justify-center items-center h-full w-full p-3" draggable="false"
                            href="/research/">Research</a>
                    </li>
                    <li id="current" class="h-10 grow contrast-200">
                        <a class="flex justify-center items-center h-full w-full p-3" draggable="false"
                            href="/people/">People</a>
                    </li>
                    <li class="h-10 grow focus-within:contrast-200 hover:contrast-200">
                        <a class="flex justify-center items-center h-full w-full p-3" draggable="false"
                            href="/publications/">Publications</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div id="content" class="w-full [&_a]:underline [&_a]:text-link-active-color">
            <div class="max-w-6xl m-auto">
                <section class="grid gap-6 md:grid-cols-[1fr_3fr]">
                    <h1 class="uppercase text-xl font-sans">The Boss</h1>
                    <div>
                        <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                            <img src={weixingZhao} alt="Weixing Zhao"
                                class="float-left block object-cover object-center w-32 mr-3 aspect-square rounded-full">
                            <div>
                                <em class="block">Weixing Zhao Ph.D.</em>
                                <strong>Principal Investigator</strong>
                                <p>Earned his B.S and Ph.D. from Peking University, China, and received postdoctoral
                                    training at Yale University. In his free time he enjoys watching movies and
                                    having
                                    fun
                                    with his kids.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="backdrop-brightness-[.97]">
                <div class="max-w-6xl m-auto">
                    <section class="grid gap-6 md:grid-cols-[1fr_3fr]">
                        <h1 class="uppercase text-xl font-sans">Postdocs</h1>
                        <div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={wenjingLi} alt="Wenjing Li"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Wenjing Li</em>
                                    <strong>Postdoctoral Fellow</strong>
                                </div>
                            </div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={boWu} alt="Bo Wu"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Bo Wu</em>
                                    <strong>Postdoctoral Fellow</strong>
                                </div>
                            </div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={tengNi} alt="Tengyang Ni"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Tengyang Ni</em>
                                    <strong>Postdoctoral Fellow</strong>
                                </div>
                            </div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={roufThak} alt="Rouf Thakur"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Rouf Thakur</em>
                                    <strong>Postdoctoral Fellow</strong>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="max-w-6xl m-auto">
                <section class="grid gap-6 md:grid-cols-[1fr_3fr]">
                    <h1 class="uppercase text-xl font-sans">GRADUATE STUDENTS</h1>
                    <div>
                        <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                            <img src={taveonFitz} alt="O'Taveon Fitzgerald"
                                class="block object-cover object-center aspect-square rounded-full">
                            <div>
                                <em class="block">O'Taveon Fitzgerald</em>
                                <strong>Graduate Student</strong>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="backdrop-brightness-[.97]">
                <div class="max-w-6xl m-auto">
                    <section class="grid gap-6 md:grid-cols-[1fr_3fr]">
                        <h1 class="uppercase text-xl font-sans">Alumni</h1>
                        <div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={lnkEmpty} alt="Qijing Wang"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Qijing Wang M.D. Ph.D.</em>
                                    <strong>Former Postdoctoral Fellow</strong>
                                </div>
                            </div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={lnkEmpty} alt="Felix Dong"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Felix Dong Ph.D.</em>
                                    <strong>Former Lab Manager</strong>
                                </div>
                            </div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={lnkEmpty} alt="Yuxin Huang"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Yuxin Huang Ph.D.</em>
                                    <strong>Former Postdoctoral Fellow</strong>
                                </div>
                            </div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={lnkEmpty} alt="Meiling Wang"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Meiling Wang Ph.D.</em>
                                    <strong>Former Postdoctoral Fellow</strong>
                                </div>
                            </div>
                            <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                                <img src={lnkEmpty} alt="Dauren Alimbetov"
                                    class="block object-cover object-center aspect-square rounded-full">
                                <div>
                                    <em class="block">Dauren S. Alimbetov Ph.D.</em>
                                    <strong>Former Postdoctoral Fellow</strong>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="max-w-6xl m-auto">
                <section class="grid gap-6 md:grid-cols-[1fr_3fr]">
                    <h1 class="uppercase text-xl font-sans">Chief Computer Scientist</h1>
                    <div>
                        <div class="grid grid-cols-[8rem_1fr] gap-6 my-3">
                            <img src={davidZh} alt="David Zhao"
                                class="block object-cover object-center aspect-square rounded-full">
                            <div>
                                <em class="block">David Zhao</em>
                                <strong>Chief Computer Scientist</strong>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <footer
            class="table-row h-0 w-full bg-prim-1 text-comp-light capitalize print:hidden [&_a]:underline [&_a]:text-link-color">
            <ul class="columns-xs p-3" role="presentation">
                <li role="presentation">
                    <ul class="break-inside-avoid-column">
                        <li>
                            <span class="font-bold text-lg" role="heading" aria-level="1">Address</span>
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
                            <span class="font-bold text-lg" role="heading" aria-level="1">Quick links</span>
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