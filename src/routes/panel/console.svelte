<script lang="ts">
    import { session } from "$app/stores";

    let username:string;

    //ignore this typerror it seems to work fine
    
    session.subscribe(value => {
        username = value.user.username
    })
</script>

<div class="center">
    <div class="console">
        <div class="consoleText">
            <p>
                [16:58:42] [main/WARN]: Mod `appleskin` (mc1.18-2.2.0) does not respect SemVer - comparison support is limited.
                [16:58:42] [main/INFO]: SpongePowered MIXIN Subsystem Version=0.8.4 Source=file:/home/ville/.local/share/multimc/libraries/net/fabricmc/sponge-mixin/0.10.7+mixin.0.8.4/sponge-mixin-0.10.7+mixin.0.8.4.jar Service=Knot/Fabric Env=CLIENT
                [16:58:42] [main/INFO]: Compatibility level set to JAVA_16
                [16:58:42] [main/INFO]: Compatibility level set to JAVA_17
                [16:58:42] [main/INFO]: Loaded configuration file for Lithium: 88 options available, 0 override(s) found
                [16:58:42] [main/WARN]: [Satin] Sodium is present, custom block renders may not work
                [16:58:42] [main/INFO]: Loaded configuration file for Sodium: 29 options available, 1 override(s) found
                [16:58:42] [main/INFO]: Loaded configuration file for Sodium Extra: 17 options available, 0 override(s) found
                [16:58:43] [main/WARN]: Force-disabling mixin 'features.sky.MixinWorldRenderer' as rule 'mixin.features.sky' (added by mods [iris]) disables it and children
                [16:58:43] [main/WARN]: Error loading class: me/flashyreese/mods/reeses_sodium_options/client/gui/SodiumVideoOptionsScreen (java.lang.ClassNotFoundException: me/flashyreese/mods/reeses_sodium_options/client/gui/SodiumVideoOptionsScreen)
                [16:58:43] [main/WARN]: Error loading class: net/coderbot/iris/layer/IrisRenderLayerWrapper (java.lang.ClassNotFoundException: net/coderbot/iris/layer/IrisRenderLayerWrapper)
                [16:58:43] [main/WARN]: @Mixin target net.coderbot.iris.layer.IrisRenderLayerWrapper was not found mixins.satin.client.json:iris.IrisRenderLayerWrapperMixin
                [16:58:45] [main/WARN]: @Inject(@At("INVOKE")) Shift.BY=3 on fabric-lifecycle-events-v1.mixins.json:client.WorldChunkMixin::handler$zhd000$onLoadBlockEntity exceeds the maximum allowed value: 0. Increase the value of maxShiftBy to suppress this warning.
                [16:58:46] [Render thread/WARN]: Method overwrite conflict for method_22920 in sodium.mixins.json:features.buffer_builder.intrinsics.MixinBufferBuilder, previously written by net.coderbot.iris.mixin.vertices.block_rendering.MixinBufferBuilder_SeparateAo. Skipping method.
                [16:58:46] [Render thread/INFO]: sodium-extra.mixins.json:features.gui.MinecraftClientAccessor->@Accessor[FIELD_GETTER]::getCurrentFPS()I should be static as its target is
                [16:58:47] [Render thread/INFO]: Environment: authHost='https://authserver.mojang.com', accountsHost='https://api.mojang.com', sessionHost='https://sessionserver.mojang.com', servicesHost='https://api.minecraftservices.com', name='PROD'
                [16:58:49] [Render thread/INFO]: Setting user: VilleVilli
                [16:58:49] [Render thread/INFO]: [Hwyla Addon Horse Info] Initializing Hwyla Addon Horse Info
                [16:58:49] [Render thread/INFO]: Definitely not up to no good
                [16:58:49] [Render thread/INFO]: Config loaded.
                [16:58:49] [Render thread/INFO]: Registered plugin provider REITooltipPlugin [appleskin] for REIPlugin
                [16:58:49] [Render thread/INFO]: Registered plugin provider DefaultPlugin [roughlyenoughitems] for REIPlugin
                [16:58:49] [Render thread/INFO]: Registered plugin provider DefaultRuntimePlugin [roughlyenoughitems] for REIPlugin
                [16:58:49] [Render thread/INFO]: Registered plugin provider DefaultClientPlugin [roughlyenoughitems] for REIPlugin
                [16:58:49] [Render thread/INFO]: Registered plugin provider DefaultClientRuntimePlugin [roughlyenoughitems] for REIPlugin
                [16:58:50] [Render thread/INFO]: Registered plugin provider PluginEntry [roughlyenoughresources] for REIPlugin
                [16:58:50] [Render thread/INFO]: Registered plugin provider ReiRecipeLookup [wthit] for REIPlugin
                [16:58:50] [Render thread/INFO]: Registered plugin provider DefaultPlugin [roughlyenoughitems] for REIServerPlugin
                [16:58:50] [Render thread/INFO]: Registered plugin provider DefaultRuntimePlugin [roughlyenoughitems] for REIServerPlugin
                [16:58:50] [Render thread/INFO]: Registered plugin provider FabricFluidAPISupportPlugin for REIServerPlugin
                [16:58:50] [Render thread/INFO]: Registered plugin provider FabricFluidAPISupportPlugin for REIPlugin
                [16:58:50] [Render thread/INFO]: [RER] RoughlyEnoughPacketSize?  Possibly.
                [16:58:50] [Render thread/INFO]: [ShulkerBoxTooltip] Could not find configuration file, creating default file
                [16:58:51] [Render thread/INFO]: Got request to register class com.sk89q.worldedit.fabric.FabricPlatform with WorldEdit [com.sk89q.worldedit.extension.platform.PlatformManager@22f7431f]
                [16:58:51] [Render thread/INFO]: WorldEdit for Fabric (version 7.2.8+6008-1246d61) is loaded
                [16:58:51] [Render thread/INFO]: [WTHIT] Registering plugin minecraft:horseinfo at net.pancham138.horseinfo.HorseInfo
                [16:58:51] [Render thread/INFO]: [Hwyla Addon Horse Info] Registering 
                [16:58:51] [Render thread/INFO]: [WTHIT] Registering plugin waila:core at mcp.mobius.waila.plugin.core.WailaCore
                [16:58:51] [Render thread/INFO]: [WTHIT] Registering plugin waila:vanilla at mcp.mobius.waila.plugin.vanilla.WailaVanilla
                [16:58:51] [Render thread/INFO]: [WTHIT] Plugin config reloaded
                [16:58:51] [Render thread/INFO]: [Indigo] Different rendering plugin detected; not applying Indigo.
                [16:58:52] [Render thread/INFO]: [STDOUT]: [Mouse Tweaks] Main.initialize()
                [16:58:52] [Render thread/INFO]: [STDOUT]: [Mouse Tweaks] Generating the config file at: /home/ville/.local/share/multimc/instances/1.18.1/.minecraft/config/MouseTweaks.cfg
                [16:58:52] [Render thread/INFO]: [STDOUT]: [Mouse Tweaks] Created the config file.
                [16:58:52] [Render thread/INFO]: [STDOUT]: [Mouse Tweaks] Initialized.
                [16:58:52] [Render thread/INFO]: Registered plugin provider REITooltipPlugin [appleskin] for REIClientPlugin
                [16:58:52] [Render thread/INFO]: Registered plugin provider DefaultClientPlugin [roughlyenoughitems] for REIClientPlugin
                [16:58:52] [Render thread/INFO]: Registered plugin provider DefaultClientRuntimePlugin [roughlyenoughitems] for REIClientPlugin
                [16:58:52] [Render thread/INFO]: Registered plugin provider PluginEntry [roughlyenoughresources] for REIClientPlugin
                [16:58:52] [Render thread/INFO]: Registered plugin provider ReiRecipeLookup [wthit] for REIClientPlugin
                [16:58:52] [Render thread/INFO]: Loading Xaero's Minimap - Stage 1/2
                [16:58:53] [Render thread/INFO]: Loading Xaero's World Map - Stage 1/2
                [16:58:53] [Render thread/INFO]: Backend library: LWJGL version 3.2.2 build 10
                [16:58:54] [Render thread/INFO]: Shaders are disabled because no valid shaderpack is selected
                [16:58:54] [Render thread/INFO]: Shaders are disabled
                [16:58:54] [Render thread/INFO]: Hardware information:
                [16:58:54] [Render thread/INFO]: CPU: 16x AMD Ryzen 7 5800X 8-Core Processor
                [16:58:54] [Render thread/INFO]: GPU: AMD Radeon RX 6700 XT (NAVY_FLOUNDER, DRM 3.44.0, 5.17.0-rc1-1-git, LLVM 13.0.0) (Supports OpenGL 4.6 (Core Profile) Mesa 21.3.4)
                [16:58:54] [Render thread/INFO]: OS: Linux (5.17.0-rc1-1-git)
                [16:58:55] [Render thread/WARN]: Method overwrite conflict for getNativeMemoryUsage in sodium.mixins.json:features.debug.MixinDebugHud, previously written by net.coderbot.iris.mixin.MixinDebugScreenOverlay. Skipping method.
                [16:58:55] [Render thread/WARN]: ERROR : Couldn't load Narrator library : Unable to load library 'fliteWrapper':
            </p>
        </div>
        <span class="consoleInput">
            <p>/</p>
            <input type="text" class="inputText">
        </span>
        
    </div>
</div>

<style lang="scss">
    .center{
        @include center;
        width: 100%;
        height: 100%;
    }
    .console{
        
        font-family: 'Source Code Pro';
        width: 80%;
        height: 90%;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: darken($backgroundColor, 2);
        .consoleText{
            box-shadow: inset 0px 0px 5px lighten($backgroundColor, 8);
            overflow: scroll;
            white-space: pre;
            flex-grow: 1;
            box-sizing: border-box;
            padding: 10px;
            margin: 0px;
            p{
                margin: 0;
            }
        }
        .consoleInput{
            display: flex;
            align-items: center;
            border: none;
            padding: 5px;
            font-size: 1.5rem;
            color: white;
            background-color: darken($backgroundColor, 4);
            p{
                margin: 0;
            }
            .inputText{
                border: none;
                padding: 5px;
                font-size: 1.5rem;
                color: white;
                background-color: darken($backgroundColor, 4);
                flex-grow: 1;
            }
        }
    }
</style>