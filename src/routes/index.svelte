<svelte:head>
    <link rel="stylesheet" href="/global.css">
</svelte:head>

<script>
import Challenge from "../components/Challenge.svelte";
import Idea from "../components/Idea.svelte";
import GridList from "../components/GridList.svelte";

let projectName = "Project Title";

</script>

<style>
    h1 {
        padding: 1rem;
        text-align: center;
    }
</style>

<main class="ctn">
    <h1 contenteditable="true">{projectName}</h1>
    <Challenge></Challenge>
    <Idea></Idea>
    <GridList></GridList>
</main>
