<?php

namespace armrck\tiles;

use armrck\tiles\TilesAsset;

/**
 * A Yii2 widget for dashboard tiles.
 *
 * @author ARMANDO RICARDO NOGUEIRA on 16/09/2017
 * @package armrck\tiles
 */
class Tiles extends \yii\base\Widget {

    public $classColumn = 'col-lg-3 col-md-6 col-sm-6 col-xs-12';
    public $icon = '<i class="fa fa-info"></i>';
    public $iconBgColor = '#5bc0de';
    public $category = 'Category';
    public $title = 0;
    public $title_small;
    public $moreInfo = "";
    public $textFooter = "";

    public function init() {
        $this->registerTilesAsset();
        parent::init();
    }

    public function run() {
        parent::run();
        return $this->render('widget', [
                    'classColumn' => $this->classColumn,
                    'icon' => $this->icon,
                    'iconBgColor' => $this->iconBgColor,
                    'category' => $this->category,
                    'title' => $this->title,
                    'title_small' => $this->title_small,
                    'moreInfo' => $this->moreInfo,
                    'textFooter' => $this->textFooter,
                    'view' => $this->getView()
        ]);
    }

    /**
     * Register widget asset.
     */
    public function registerTilesAsset() {
        $view = $this->getView();
        TilesAsset::register($view);
    }

}
