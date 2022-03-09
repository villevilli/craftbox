<script lang="ts">
    interface sidebarObject{
        "title": string,
        "href": string
    }

    let sidebarArray = new Array<sidebarObject>();

    sidebarArray = [
        {"title": "Commands","href": "/panel/"},
        {"title": "Settings","href": "/settings/"}
    ]
</script>

<div class="sidebard">
    <a href="/panel">
        <img src="/logo.svg" alt="Craftbox Logo">
        <p class="logoText">Craftbox</p>
    </a>
    {#each sidebarArray as sidebarObject}
    <a href={sidebarObject.href}>
        <p>{sidebarObject.title}</p>
    </a>
    {/each}
</div>

<main>
    <slot />
</main>

<style lang="scss">
    @mixin reset-a{
        text-decoration: none;
        color: inherit;
        outline: 0;
    }

    .sidebard {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        box-sizing: border-box;
        height: 100%;
        width: 80px;
        padding-top: 5px;
        
        background-color: darken($backgroundColor, 1);

        a{
            &, &:hover, &:visited, &:focus &:active{
                @include reset-a;
            }
        }

        .logoText{
            color: white;
            margin: 0;
            border-bottom: white solid 1px;
        }
        .logoText {
            
        }
        img{
            width: 60px;
        }
    }
    main{
        padding-top: 10px;
        margin-left: 80px;
    }
</style>
