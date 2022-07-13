<svelte:head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body * {
            font-family: 'Poppins', sans-serif;
        } 

        .ctn {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 0.5rem;
        }

        .btn-anim {
            transition: 200ms ease-in-out;
        }

        .btn-anim:hover {
            transform: scale(1.1);
        }

        .btn-anim:active {
            transform: scale(0.9);
        }

        input {
            background-color: transparent;
            border: none;
            outline: none;
            width: 100%;
            word-wrap: break-word;
            overflow-wrap: break-word;
            word-break: break-all;
        }

        input:active,input:focus {
            border: none;
            outline: none;
        }

        textarea {
            width: 100%;
            background-color: transparent;
            border:none;
            outline: none;
            resize: none;
            height: fit-content;
        }

        textarea:active,textarea:focus {
            border:none;
            outline: none;
        }
    </style>
</svelte:head>

<script>
    import Challenge from "../components/Challenge.svelte";
    import Idea from "../components/Idea.svelte";
    import GridList from "../components/GridList.svelte";
    import FAB from "../components/FAB.svelte";

    let projectName = "Project Title";
    var challengeText = "";

    let sectionsList = [];
    var sectionCounter = 0;

    function addGrid(){
        console.log(challengeText)
        sectionsList = [...sectionsList, {id: sectionCounter++, type: GridList}];
    }

    function addIdea(){
        sectionsList = [...sectionsList, {id: sectionCounter++, type: Idea}];
    }

    function deleteSection(e){
        sectionsList.splice(e.detail, 1);
        sectionsList = sectionsList;
    }

    function getData(){
        var data = {
            title: projectName,
            challenge: challengeText,
            children: []
        };

        for(var i = 0; i < sectionsList.length; i++){
            data.children[i] = sectionsList[i].getData();
        }

        console.log(data)
        return data;
    }

</script>

<style>
    h1 {
        padding: 1rem;
        font-size: 2rem;
        text-align: center;
    }
</style>

<main class="ctn">
    <section>
        <h1 contenteditable="true" bind:innerHTML={projectName}>{projectName}</h1>
        <Challenge bind:text={challengeText}></Challenge>
        <!--
        <Idea></Idea>
        <GridList></GridList>
        -->

        {#each sectionsList as sec, i (sec.id)}
            <svelte:component this={sec.type} index={i} on:delete={deleteSection} bind:getData={sec.getData}></svelte:component>
        {/each}
    </section>

    <FAB on:newidea={addIdea} on:newgrid={addGrid}></FAB>
    <button on:click={getData}>show</button>
</main>
