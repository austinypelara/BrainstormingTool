<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from 'svelte/transition';
    import ArrowUpBold from "svelte-material-icons/ArrowUpBold.svelte";
    import ArrowDownBold from "svelte-material-icons/ArrowDownBold.svelte";
    

    export let index = 0;
    export const self = this;
    
    let text = "";

    const dispatch = createEventDispatcher();

    export const getData = () => {
        var data = {
            id: index,
            type: 1,
            text: text
        }
        
        return data;
    }

    export const loadData = (data) => {
        index = data.id;
        text = data.text;
    }
</script>

<style>
    .idea {
        background-color: lightblue;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    textarea {
        width: 100%;
        background-color: transparent;
        border:none;
        outline: none;
    }

    textarea:active,textarea:focus {
        border:none;
        outline: none;
    }

    .deleteBtn {
        border: none;
        background-color: rgba(0 0 0 / 0.2);
        padding: 0.5rem 1rem;
        border-radius: 100vmax;
        cursor: pointer;
        color: white;
    }

    .sectionOptions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .arrowButtons > button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        color: rgba(0 0 0 / 0.5);
    }
</style>

<div class="idea" transition:fade>
    <textarea bind:value={text} placeholder="Type here" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
    
    <div class="sectionOptions">
        <button tabindex="-1" class="deleteBtn btn-anim" on:click={() => { dispatch("delete", index) }}>Delete</button>
        <div class="arrowButtons">
            <button tabindex="-1" on:click={() => {dispatch("moveup", index);}} class="btn-anim"> <ArrowUpBold size={"1.5rem"}></ArrowUpBold> </button>
            <button tabindex="-1" on:click={() => {dispatch("movedown", index);}} class="btn-anim"> <ArrowDownBold size={"1.5rem"}></ArrowDownBold> </button>
        </div>
    </div>
</div>
