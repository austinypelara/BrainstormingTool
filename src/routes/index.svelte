<svelte:head>
    <title>Brainstorming Tool | Elara Systems</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            /*outline: 1px solid green;*/
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

<svelte:window on:keydown={onKeyDown} />

<script>
    import Challenge from "../components/Challenge.svelte";
    import Idea from "../components/Idea.svelte";
    import GridList from "../components/GridList.svelte";
    import FAB from "../components/FAB.svelte";
    import { tick } from "svelte";
    import { undoStack } from "../stores.js"

    let projectName = "Project Title";
    var challengeText = "";
    let sectionsList = [];
    
    var fab;
    var sectionCounter = 0;

    function addGrid(){
        sectionsList = [...sectionsList, {id: sectionCounter++, type: GridList, comp: null, data: null}];
    }

    function addIdea(){
        sectionsList = [...sectionsList, {id: sectionCounter++, type: Idea, comp: null, data: null}];
    }

    function deleteSection(e){
        const section = sectionsList[e.detail];
        const sectionData = section.getData();

        undoStack.update(s => {
            s = [...s, async () => {
                sectionData.id = sectionCounter++;
                section.data = sectionData;
                sectionsList = [...sectionsList, section];

                //restoreSection(sectionData);
            }];
            return s;
        });

        sectionsList.splice(e.detail, 1);
        sectionsList = sectionsList;
    }

    function moveSectionUp(e){
        var index = e.detail;
        if(index == 0)
            return;

        var t = sectionsList[index];
        sectionsList[index] = sectionsList[index - 1];
        sectionsList[index - 1] = t;

        sectionsList = sectionsList;
    }

    function moveSectionDown(e){
        var index = e.detail;
        if(index == sectionsList.length - 1)
            return;

        var t = sectionsList[index];
        sectionsList[index] = sectionsList[index + 1];
        sectionsList[index + 1] = t;

        sectionsList = sectionsList;
    }

    function getData(){
        var data = {
            title: projectName,
            challenge: challengeText,
            counter: sectionCounter,
            children: []
        };

        for(var i = 0; i < sectionsList.length; i++){
            data.children[i] = sectionsList[i].getData();
        }

        console.log(data)
        return data;
    }

    async function loadData(data){
        data = JSON.parse(data);
        //console.log(data);

        projectName = data.title;
        challengeText = data.challenge;

        sectionCounter = 0;

        for(var i = 0; i < sectionsList.length; i++){
            sectionCounter = Math.max(sectionsList[i].id, sectionCounter);
        }

        sectionCounter++;
        //sectionCounter = data.children.length;

        sectionsList.length = 0; // reset state
        sectionsList = [];

        await tick();
        

        //console.log([...sectionsList])

        for(var i = 0; i < data.children.length; i++){
            if(data.children[i].type == 0){
                sectionsList = [...sectionsList, {id: sectionCounter, type: GridList, comp: null}];
            } else {
                sectionsList = [...sectionsList, {id: sectionCounter, type: Idea, comp: null}];
            }
            sectionCounter++;
            await tick();
        }

        //sectionsList = sectionsList;

        await tick();

        for(var i = 0; i < data.children.length; i++){
            sectionsList[i].loadData(data.children[i]);
        }

        sectionsList = sectionsList;


    }

    function onKeyDown(e) {
        var _event = window.event ? event : e;
        if(_event.keyCode == 90 && _event.ctrlKey){
            console.log("UNDO");
            undoStack.update(s => {
                console.log(s);
                if(s.length > 0){
                    const last = s.pop();
                    last();
                }
                return s;
            });
        }
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
        <h1 tabindex="0" contenteditable="true" bind:innerHTML={projectName}>{projectName}</h1>
        <Challenge bind:text={challengeText}></Challenge>
        <!--
        <Idea></Idea>
        <GridList></GridList>
        -->

        {#each sectionsList as sec, i (sec.id)}
            <svelte:component 
                this={sec.type} 
                index={i} 
                on:delete={deleteSection} 
                on:moveup={moveSectionUp}
                on:movedown={moveSectionDown}
                bind:getData={sec.getData}
                bind:loadData={sec.loadData}
                bind:restoreData={sec.data}></svelte:component>
        {/each}
    </section>

    <FAB bind:this={fab} 
        on:newidea={addIdea} 
        on:newgrid={addGrid} 
        on:export={() => {fab.downloadJSON(getData())}} 
        on:import={(e) => {loadData(e.detail)}}></FAB>

</main>
