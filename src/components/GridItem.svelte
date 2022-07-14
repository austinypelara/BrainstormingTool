<script>
    import { createEventDispatcher } from "svelte";
    import Delete from "svelte-material-icons/Delete.svelte";
    import ThumbUp from "svelte-material-icons/ThumbUp.svelte";
    import ThumbDown from "svelte-material-icons/ThumbDown.svelte";
    import { fade } from 'svelte/transition';

    export let info = "default info";
    export let id = 0;

    const dispatch = createEventDispatcher();

    export let color = "lightgrey";

    export const getData = () => {
        return {
            id: id,
            info: info,
            color: color
        }
    }

</script>

<style>
    .item {
        --bgColor: lightGrey;
        background-color: var(--bgColor);
        padding: 0.5rem;
        border-radius: 0.5rem;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr auto;
    }

    .bottomRow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.5rem;

        font-weight: 900;
    }

    .bottomRow button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0.2rem;
    }

</style>

<div class="item" style="--bgColor: {color}" in:fade>
    <textarea bind:value={info} placeholder="Type here" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
    <div class="bottomRow">
        <div>
            <button tabindex="-1" class="btn-anim" on:click={() => {color = color == "lightgreen" ? "lightgrey" : "lightgreen";}} >
                <ThumbUp color={"rgba(0 100 0 / 0.4)"} size={"1.4rem"} />
            </button>
            
            <button tabindex="-1" class="btn-anim" on:click={() => {color = color == "pink" ? "lightgrey" : "pink";}}>
                <ThumbDown color={"rgba(100 0 0 / 0.4)"} size={"1.4rem"} />
            </button>
        </div>
        
        <button tabindex="-1" class="btn-anim" on:click={() => {dispatch("delete", id)}}>
            <Delete color={"red"} size={"1.4rem"} />
        </button>
    </div>
</div>