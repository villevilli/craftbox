<script lang="ts">
import { svg_element } from "svelte/internal";


</script>

<main class="main">
    <div class="loginBox">
        <div class="title">
            <h1 class="title">Login To Craftbox</h1>
            <img src="/logo.svg/" alt="Craftbox Logo">
        </div>
        <form>
            <input class="text" type="text" placeholder="Username">
            <input class="text" type="password" placeholder="Password">
            <input class="submit" type="submit" value="Login">
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