<script lang="ts">
    let i = "among"
</script>

<h1 class="title">
    Hello CraftBox
</h1>

<button on:click={() => alert(i)}>
    among
</button>

<style lang="scss">
    .title{
        color: green;
        &:hover{
            background-color: orange;
        }
    }
</style>