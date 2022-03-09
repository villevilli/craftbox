<script lang="ts">
    let password;
    let authFailed = false;

    async function submit(e) {
        const formData = new FormData(e.target);
        const url = '/api/signin'
        const data = {};

        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        fetch(url ,{
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status == 401){
                password = "";
                authFailed = true;
            }else if (response.status == 200){
                window.location.href = '/panel/'
            }
        })
    }
 </script>

<main class="main">
    <div class="loginBox">
        <div class="title">
            <h1 class="title">Login To Craftbox</h1>
            <img src="/logo.svg/" alt="Craftbox Logo">
        </div>

        <form on:submit|preventDefault={submit} autocomplete="off">
            <input class="text" type="text" id="username" name="username" placeholder="Username" value="" required>
            <input class="text" bind:value={password} type="password" id="password" name="password" placeholder="Password" required>
            <span>
                {#if authFailed}
                    <p class="authFail">Wrong username or password</p>
                {/if}
                <input class="submit" type="submit" value="Login">
            </span>
        </form>

    </div>
</main>

<style lang="scss">
    .main{
        @include center;
        height: 100%;
    }
    .loginBox{
        border: $textColor 2px solid;
        border-radius: 4px;
        padding: 8px;

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
                    &:invalid{
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
                height: 60px;
            }
        }
    }
    .title{
        color: $textColor;
    }
</style>