<script>
    export let text = "";
</script>

<style>
    section {
        display: flex;
        background-color: lightgrey;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }

    .challengeLeft {
        background-color: #4c4c5b;
        color: white;
        font-weight: bold;
        padding: 2rem;

        border-radius: 0.5rem 0 0 0.5rem;
        text-align: center;
    }

    .challengeRight {
        flex-basis: 1;
        width: 100%;
        display: grid;
        place-items: center;
        padding: 1rem;
    }
</style>

<section>
    <div class="challengeLeft">Challenge</div>
    <div class="challengeRight">
        <textarea bind:value={text} placeholder="What's the Challenge?" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
    </div>
</section>