<slot/>

<style lang="scss" global>
    @font-face{
        font-family: "Source Code Pro";
        src: local("Source Code Pro"),
            url("/fonts/sourceCodePro.ttf");
    }

    @font-face{
        font-family: "Roboto";
        font-weight: 300;
        src: local("Roboto-Light"),
            url("/fonts/Roboto-Light.ttf");
    }

    html, body{
        font-family: 'Roboto';
        font-weight: 200;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        margin: 0%;
        background-color: $backgroundColor;
    }
</style>