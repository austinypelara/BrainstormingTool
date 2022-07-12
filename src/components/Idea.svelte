<script>

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

</style>

<div class="idea">
    <textarea placeholder="Type here" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
</div> 