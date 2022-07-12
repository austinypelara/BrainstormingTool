<script>
    import { each } from "svelte/internal";
    import GridItem from "./GridItem.svelte";

    let items = [];

    function addGridItem(){
        console.log("add item");
        items = [...items, {info: "", color: "lightgrey"}];
    }

    function deleteGridItem(e){
        items.splice(e.detail, 1);
        items = items;
    }

</script>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        padding: 0.5rem 0;
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
</style>

<section>
    
    {#each items as item, i}
        <GridItem id={i} bind:info={item.info} bind:color={item.color} on:delete={deleteGridItem}></GridItem>
    {/each}

    <button class="addBtn" on:click={addGridItem}>
        +
    </button>
</section>