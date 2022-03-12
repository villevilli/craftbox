<script lang="ts">

</script>

<div class="content">
    <table class="users">
        <thead>
            <th></th>
            <th>Name</th>
        </thead>
        <tbody>
            <th class="userIcon"><img class="userIcon" src="/logo.svg"></th>
            <td class="userName">VilleVilli</td>
        </tbody>
    </table>
</div>

<style lang="scss">
    .content{
        @include center;
        width: 80%;
        height: 90%;
        background-color: darken($backgroundColor, 4);
        border-radius: 5px;
    }

    .users{
        .userIcon{
            height: 32px;
        }
        .userName{

        }
    }
</style>