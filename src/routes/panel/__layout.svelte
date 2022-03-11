<script lang="ts">
    interface sidebarObject{
        "title"?: string,
        "href": string,
        "icon"?: string,
        "iconImg"?: string
    }

    let sidebarArray = new Array<sidebarObject>();

    sidebarArray = [
        {"title": "Panel","href": "","iconImg":"/fonts/terminal_black.svg"},
        {"title": "Manage Accounts", "href":"/manage_accounts/", "iconImg":"/images/manage_accounts.svg"},
        {"title": "Settings","href": "/settings/","icon":"settings"},
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
            <p class="sidebarlabel">{sidebarObject.title}</p>
        
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

    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        box-sizing: border-box;
        height: 100%;
        width: 100px;
        padding-top: 5px;
        
        background-color: darken($backgroundColor, 1);
        
        .linkButton{
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
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
