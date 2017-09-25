<?php

/**
 * @copyright Copyright &copy; 2017, Armando Ricardo Nogueira, w3bsistemas.com
 * @license http://www.opensource.org/licenses/bsd-license.php New BSD License
 * @package armrck\tiles
 * @version 1.0.0.0
 */

namespace armrck\tiles;

/**
 * Asset bundle for armrck tiles widget. Includes assets from bootstrap plugin.
 *
 * @see http://github.com/armandoricky/yii2-tiles
 * @author Armando Ricardo Nogueira <armandoricky@gmail.com>
 * @since 1.0.0.0
 */
class TilesAsset extends \yii\web\AssetBundle {

    public $sourcePath = '@vendor/armrck/yii2-tiles/assets';
    public $depends = [
        'yii\web\YiiAsset',
        'yii\web\JqueryAsset',
        'yii\bootstrap\BootstrapAsset'
    ];

    public function init() {
        $this->css = [YII_DEBUG ? 'css/armrck-tiles.css' : 'css/armrck-tiles.min.css'];
        $this->js = [YII_DEBUG ? 'js/armrck-tiles.js' : 'js/armrck-tiles.min.js'];
    }

}
