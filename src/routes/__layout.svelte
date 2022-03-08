<main>
    <slot/>
</main>

<style lang="scss" global>
    @font-face{
        font-family: "Source Code Pro";
        src: local("Source Code Pro"),
            url("/fonts/sourceCodePro.ttf");
    }

    html, body{
        font-family: 'Source Code Pro';
        font-weight: 200;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        margin: 0%;
        background-color: $backgroundColor;
    }
</style>