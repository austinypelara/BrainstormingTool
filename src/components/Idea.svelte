<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from 'svelte/transition';

    export let index = 0;
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

</style>

<div class="idea" transition:fade>
    <textarea bind:value={text} placeholder="Type here" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
    <button class="deleteBtn btn-anim" on:click={() => { dispatch("delete", index) }}>Delete</button>
</div>
