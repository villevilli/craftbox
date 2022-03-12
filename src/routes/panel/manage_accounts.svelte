<script lang="ts">
    import UserSetting from '$lib/userSettingObject.svelte'

    let users = [
        'user1',
        'user2',
        'user3',
        'user4'
    ]
</script>

<div class="content">
    <table class="userSettings">
        <thead>
            <tr>
                <th>Username</th>
                <td>Row2</td>
                <td>Row3</td>
            </tr>
        </thead>
        <tbody>
            {#each users as user}
            <tr>
                <UserSetting/>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    .content{
        @include center;
        width: 80%;
        height: 90%;
    }
    .userSettings{
        text-align: center;
        background-color: darken($backgroundColor, 4);
        width: 100%;
        font-size: 1.2rem;
        border-radius: 10px;
        padding: 5px;
        thead{
            th{
                width: 200px;
            }
            td{
                width: fit-content;
                block-size: fit-content;
            }
        }
        tbody{
            :nth-child(odd){
                background-color: lighten($backgroundColor, 4);
            }
        }
    }
</style>