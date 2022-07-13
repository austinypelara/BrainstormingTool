<script>
    import PlusBoxMultiple from "svelte-material-icons/PlusBoxMultiple.svelte";
    import Pencil from "svelte-material-icons/Pencil.svelte";
    import Download from "svelte-material-icons/Download.svelte";
    import Upload from "svelte-material-icons/Upload.svelte";

    import { fly } from 'svelte/transition';
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let fabList;
    let showList = false;

    let exportLink;
    let importLink;

    function downloadJSON(data){
        console.log(exportLink);
        let dataStr = JSON.stringify({into: "12345qwerty"});
        let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

        let exportFileDefaultName = 'data.json';

        exportLink.setAttribute('href', dataUri);
        exportLink.setAttribute('download', exportFileDefaultName);
        exportLink.click();
    }
</script>

<style>
    section {
        
        bottom: 0;
        padding: 1rem;
        max-width: 1280px;
        width: 100%;
    }
    
    .fab {
        display: flex;
        align-items: center;
        margin-left: auto;
        width: fit-content;
    }

    .fab > button {
        width: 3rem;
        height: 3rem;
        font-weight: bolder;
        border-radius: 100vmax;
        font-size: 2rem;
        cursor: pointer;
        color: white;
        background-color: red;
        border: none;
    }

    ul {
        display: flex;
        list-style: none;
        align-items: center;
    }

    ul > li {
        margin-right: 0.6rem;
        height: 100%;
        padding: 0 1rem;
        
    }

    ul > li > * {
        padding: 0rem;
        color: black;
        background-color: transparent;
        border: none;
        cursor: pointer;
        
    }

</style>

<section>
    <div class="fab">
        {#if showList}
            <ul bind:this={fabList} transition:fly={{x: 200, duration: 200}}>
                <li>
                    <button title="Add Idea" class="btn-anim" on:click={() => {dispatch("newidea")}}>
                        <Pencil size={"1.5rem"}></Pencil>
                    </button>
                </li>
                <li>
                    <button title="Add Grid" class="btn-anim" on:click={() => {dispatch("newgrid")}}>
                        <PlusBoxMultiple size={"1.5rem"}></PlusBoxMultiple>
                    </button>
                </li>
                <li class="btn-anim"><a bind:this={exportLink} on:click={downloadJSON} title="Export JSON" href=""><Download size={"1.5rem"}></Download></a></li>
                <li class="btn-anim">
                    <label title="Import JSON" for="fileInput"> <Upload size={"1.5rem"}></Upload> </label>
                    <input id="fileInput" type="file" hidden/>
                </li>
            </ul>
        {/if}
        <button class="btn-anim" on:click={() => {showList = !showList;}}>+</button>
    </div>
</section>