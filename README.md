Yii2-Tiles
==============

![example](https://w3bsistemas.com/shared/yii2-tiles/armrck-tiles-demo.gif)

A Yii2 widget for the dashboard tiles.

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
composer require --prefer-dist armrck/yii2-tyles "*"
```

or add

```
"armrck/yii2-tiles": "*"
```

to the require section of your `composer.json` file.

Usage
-----

Once the extension is installed, simply use it in your code by :

```php
<?=  
Tiles::widget([
    'icon' => '<i class="fa fa-database"></i>', // icon
    'iconBgColor' => '#ffa726', // hex color
    'category' => 'Space Used on DB', // category of stats info
    'title' => 670, // main stats info
    'title_small' => 'MB', // complement for stats info
    'moreInfo' => 'This info only appear if the icon "info" is clicked'
    'textFooter' => '<i class="fa fa-line-chart"></i> <a href="#add">Show more details</a>'
]);
?>
```

