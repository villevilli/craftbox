<script lang="ts">
    import { session } from "$app/stores";

    let username:string;

    session.subscribe(value => {
        console.log(value)
    })
</script>

<h1>Logged in as {username}</h1>