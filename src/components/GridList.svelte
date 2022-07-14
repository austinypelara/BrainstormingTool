<script>
    import { each } from "svelte/internal";
    import GridItem from "./GridItem.svelte";
    import { createEventDispatcher } from "svelte";
    import { fade } from 'svelte/transition';
    import ArrowUpBold from "svelte-material-icons/ArrowUpBold.svelte";
    import ArrowDownBold from "svelte-material-icons/ArrowDownBold.svelte";

    export let index = 0;

    const dispatch = createEventDispatcher();

    let items = [];

    function addGridItem(){
        items = [...items, {info: "", color: "lightgrey"}];
    }

    function deleteGridItem(e){
        items.splice(e.detail, 1);
        items = items;
    }

    export const getData = () => {
        var data = {
            id: index,
            type: 0,
            children: []
        }
        
        for(var i = 0; i < items.length; i++){
            data.children[i] = items[i].getData();
            //console.log(items[i].self);
        }
        
        return data;
    }

    export const loadData = (data) => {
        index = data.id;
        items = [...data.children]
    }

</script>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        padding: 0.5rem 0;
        position: relative;
    }

    .addBtn {
        border: 5px solid lightgrey;
        color: #999;
        background-color: white;
        padding: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 2rem;
        font-weight: bold;

        transition: 200ms;
    }

    .addBtn:hover {
        transform: scale(1.1);
    }

    .addBtn:active {
        transform: scale(0.9);
    }

    .deleteBtn {
        border: none;
        background-color: rgba(200 0 0 / 0.5);
        padding: 0.5rem 1rem;
        border-radius: 100vmax;
        cursor: pointer;
        color: white;
        margin-bottom: 1rem;
    }

    .sectionOptions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .arrowButtons > button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        color: rgba(0 0 0 / 0.5);
    }

    @media screen and (max-width: 700px){
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 500px){
        section {
            grid-template-columns: 1fr;
        }
    }
</style>

<section transition:fade>
    
    {#each items as item, i}
        <GridItem id={i} bind:info={item.info} bind:color={item.color} on:delete={deleteGridItem} bind:getData={item.getData} ></GridItem>
    {/each}

    <button tabindex="-1" class="addBtn" on:click={addGridItem}>
        +
    </button>
    
</section>

<div class="sectionOptions">
    <button tabindex="-1" class="deleteBtn btn-anim" on:click={() => { dispatch("delete", index) }}>Delete</button>
    
    <div class="arrowButtons">
        <button tabindex="-1" on:click={() => {dispatch("moveup", index);}} class="btn-anim"> <ArrowUpBold size={"1.5rem"}></ArrowUpBold> </button>
        <button tabindex="-1" on:click={() => {dispatch("movedown", index);}} class="btn-anim"> <ArrowDownBold size={"1.5rem"}></ArrowDownBold> </button>
    </div>
</div>