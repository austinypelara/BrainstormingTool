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
    let importFile;

    export const downloadJSON = (data) => {
        console.log(exportLink);
        let dataStr = JSON.stringify(data);
        let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

        let exportFileDefaultName = data.title + '.json';

        exportLink.setAttribute('href', dataUri);
        exportLink.setAttribute('download', exportFileDefaultName);
        //exportLink.click();
    }

    async function loadFile(file){
        var fr = new FileReader();

        fr.onload = (e) => {
            dispatch("import", JSON.stringify(e.target.result));
        }

        fr.readAsText(file);
    }

    $: {
        if(importFile)
            loadFile(importFile[0])
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
        display: grid;
        list-style: none;
        align-items: center;
        grid-auto-flow: column;
        grid-template-columns: repeat(auto-fit, 1fr);
        gap: 1rem;
        margin-right: 1rem;
    }

    ul > li {
        height: 100%;
        
        width: 100%;
    }

    ul .btn-anim {
        padding: 0.2rem;
        color: black;
        background-color: #ddd;
        border: none;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        display: inline-block;
        border-radius: 100vmax;
        
        display: grid;
        place-items: center;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    }

    ul .btn-anim:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        background-color: transparent;
        outline: 1px solid lightgray;
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
                <li>
                    <a class="btn-anim" bind:this={exportLink} on:click={() => {dispatch("export")}} title="Export JSON" href=""><Download size={"1.5rem"}></Download></a>
                </li>
                <li>
                    <label class="btn-anim" title="Import JSON" for="fileInput"> <Upload size={"1.5rem"}></Upload> </label>
                    <input id="fileInput" type="file" bind:files={importFile} hidden/>
                </li>
            </ul>
        {/if}
        <button class="btn-anim" on:click={() => {showList = !showList;}}>+</button>
    </div>
</section>