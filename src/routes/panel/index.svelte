<script lang="ts">
    import { session } from "$app/stores";

    let username:string;

    //ignore this typerror it seems to work fine
    
    session.subscribe(value => {
        username = value.user.username
    })
</script>

<h1>Logged in as {username}</h1>