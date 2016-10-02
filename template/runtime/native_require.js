var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/socket/socket.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/XY/Matrix.js",
	"bin-debug/XY/type/Direction.js",
	"bin-debug/XY/type/OverStatus.js",
	"bin-debug/XYGBoy/control/ControllerEvent.js",
	"bin-debug/XYGBoy/control/GameSceneEvent.js",
	"bin-debug/XYGBoy/core/Dot.js",
	"bin-debug/XYGBoy/core/DotMap.js",
	"bin-debug/XYGBoy/game/DotControllerPanel.js",
	"bin-debug/XYGBoy/game/DotSnakePanel.js",
	"bin-debug/XYGBoy/math/MatrixPointer.js",
	"bin-debug/XYGBoy/scene/GameScene.js",
	"bin-debug/XYHuaRongDao/data/Constant.js",
	"bin-debug/XYHuaRongDao/data/Level.js",
	"bin-debug/XYHuaRongDao/data/Role.js",
	"bin-debug/XYHuaRongDao/layer/GameLayer.js",
	"bin-debug/XYHuaRongDao/sence/GameScene.js",
	"bin-debug/XYHuaRongDao/sprite/RoleSprite.js",
	"bin-debug/XYJade/common/Constants.js",
	"bin-debug/XYJade/factory/EnemyFactory.js",
	"bin-debug/XYJade/scene/JadeScene.js",
	"bin-debug/XYJade/scene/layer/GameLayer.js",
	"bin-debug/XYJade/sprite/enemy.js",
	"bin-debug/XYPirate/layer/ControlLayer.js",
	"bin-debug/XYPirate/layer/GridLayer.js",
	"bin-debug/XYPirate/scene/PirateScene.js",
	"bin-debug/XYStar/layer/GameLayer.js",
	"bin-debug/XYStar/layer/MenuLayer.js",
	"bin-debug/XYStar/scene/GameScene.js",
	"bin-debug/XYStar/scene/MenuScene.js",
	"bin-debug/XYStar/widget/FloatingBanner.js",
	"bin-debug/XYStar/widget/Toast.js",
	"bin-debug/XYSweeper/brain/Genome.js",
	"bin-debug/XYSweeper/brain/Neuron.js",
	"bin-debug/XYSweeper/world/Controller.js",
	"bin-debug/XYSweeper/world/Environment.js",
	"bin-debug/XYSweeper/world/Mine.js",
	"bin-debug/XYSweeper/world/Sweeper.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 480,
		contentHeight: 480,
		showPaintRect: true,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.1",
		showLog: true,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};