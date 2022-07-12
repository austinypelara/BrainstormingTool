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
