<script lang="ts">
    export let user:String

    let password;
    let authFailed = false;

    async function submit(e) {
        const formData = new FormData(e.target);
        const url = '/api/updateUser'
        const data:any = {};

        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        console.log(data)

        if (data.password == data.confirmPassword){
            fetch(url ,{
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    'newPassword': data.password,
                    'username': user
                })
            }).then(response => {

                if (response.status == 401){
                    password = "";
                    authFailed = true;
                }else if (response.status == 200){
                    window.location.href = '/panel/'
                }
            })

            authFailed = false;
        } else{
            authFailed = true;
        }
    }
 </script>


<div class="loginBox">
    <div class="title">
        <h1 class="title">Change Password For<br>{user}</h1>
        <img src="/logo.svg/" alt="Craftbox Logo">
    </div>

    <form on:submit|preventDefault={submit} autocomplete="off">
        <input
            class="text"
            type="password"
            id="password"
            name="password"
            placeholder="New Password"
            value=""
            required
        >

        <input 
            class="text"
            bind:value={password}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm New Password"
            required
        >
        <span>
            {#if authFailed}
                <p class="authFail">Passwords do not match</p>
            {/if}
            <input class="submit" type="submit" value="Login">
        </span>
    </form>
</div>

<style lang="scss">

    .loginBox{
        border: $textColor 2px solid;
        border-radius: 4px;
        padding: 8px;
        background-color: $backgroundColor;

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .authFail{
                    padding-left: 20px;
                    color: rgb(255, 103, 103);

                }
            }
            input{
                margin: 4px;
                background-color: lighten($backgroundColor, 2%);
                color: $textColor;
                
                padding: 12px;
                border-radius: 4px;
                border: rgb(100, 100, 100) 2px solid;
                //box-shadow: inset 2px 2px 4px 0px rgb(70, 70, 70);
                

                font-size: 1rem;
                &.text{
                    align-self: stretch;
                    transition: 100ms;
                    &:user-invalid{
                        border: 2px rgb(255, 103, 103) solid;
                    }
                }
                &.submit{
                    align-self: flex-end;

                    transition: 100ms;

                    &:hover{
                        border: white 2px solid;
                        transition: 100ms;
                        box-shadow: 0px 0px 3px white;
                    }
                    &:active{
                        transition: 100ms;
                        box-shadow: inset 0px 0px 3px white;
                    }
                }
            }
        }

        .title{
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                height: 80px;
            }
        }
    }
</style>