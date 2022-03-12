<script lang="ts">
    import { page } from '$app/stores';

    interface sidebarObject{
        "title"?: string,
        "href": string,
        "icon"?: string,
        "iconImg"?: string
    }

    let sidebarArray = new Array<sidebarObject>();

    sidebarArray = [
        {"title": "Dashboard", "href": "", "icon":"dashboard"},
        {"title": "Console","href": "/console","iconImg":"/fonts/terminal_black.svg"},
        {"title": "Manage Accounts", "href":"/manage_accounts", "iconImg":"/images/manage_accounts.svg"},
        {"title": "Settings","href": "/settings","icon":"settings"},
    ]
</script>

<div class="sidebar">
    <a href="/panel">
        <img class="logoimg" src="/logo.svg" alt="Craftbox Logo">
        <p class="logoText">Craftbox</p>
    </a>
    {#each sidebarArray as sidebarObject}
    <a class="linkButton" href={"/panel"+sidebarObject.href}>
        {#if 'icon' in sidebarObject}
            <span class="sidebaricon material-icons">{sidebarObject.icon}</span>
        {:else}
            <img class="sidebaricon" src="{sidebarObject.iconImg}" alt={sidebarObject.iconImg}>
        {/if}
        {#if $page.url.pathname == "/panel"+sidebarObject.href}
            <p class="sidebarlabel currentSite">{sidebarObject.title}</p>
        {:else}
            <p class="sidebarlabel">{sidebarObject.title}</p>
        {/if}
    </a>
    {/each}

    <button class="linkButton">
        <span class="sidebaricon material-icons">logout</span>
        <p class="sidebarlabel">Log Out</p>
    </button>
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

    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        box-sizing: border-box;
        height: 100%;
        width: 100px;
        padding-top: 10px;
        
        box-shadow: 2px 0px 10px lighten($backgroundColor, 8);
        background-color: darken($backgroundColor, 2);

        .currentSite{
            text-decoration: underline;
        }

        .linkButton{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: none;
            color: inherit;
            border: none;
            .sidebarlabel{
                margin: 0;
            }              
        }

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
        .logoimg{
            width: 60px;
        }
    }
    main{
        padding-top: 10px;
        margin-left: 100px;
        height: 100%;
        width: calc(100% - 100px);
        box-sizing: border-box;
        @include center;
    }
</style>
