<script lang="ts">
    import { page } from '$app/stores';
    import { session } from "$app/stores";

    import PasswordChangeWindow from "$lib/passwordChangeWindow.svelte";

    console.log($session);

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

<nav class="sidebar">
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
</nav>

{#if $session.ChangePwd == 1}
<div class="overlay">
    <PasswordChangeWindow user={$session.username}/>
</div>
    
{:else}
    <main>
        <slot/>
    </main>
{/if}


<style lang="scss">
    @mixin reset-a{
        text-decoration: none;
        color: inherit;
        outline: 0;
    }
    
    .overlay{
        @include overlay;
        @include center;
        position: fixed;
        z-index: 999999999;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        position: fixed;
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
