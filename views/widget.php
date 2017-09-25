<?php
/**
 * @author Armando Ricardo Nogueira <armandoricky@gmail.com>
 */
?>

<div class="armrck-tiles <?= $classColumn; ?>">
    <div class="card card-stats">
        <div class="card card-stats-info">
            <div class="info-content">
                <?= $moreInfo; ?>
            </div>
        </div>
        <div class="card-header" style="background-color:<?= $iconBgColor; ?>">
            <?= $icon; ?>
        </div>
        <div class="card-content">
            <p class="category"><?= $category; ?></p>
            <h3 class="title"><?= $title; ?>
                <?= !empty($title_small) ? "<small>$title_small</small>" : ""; ?>
            </h3>
        </div>
        <div class="card-footer">
            <div class="stats">
                <?= $textFooter; ?>
            </div>
            <div class="stats-info">
                <i class="fa fa-info-circle"></i>
            </div>
        </div>
    </div>
</div>

<style>
    .nav_menu {
        background-color: #18bc9c !important;
        color: #ffffff !important;
    }
    .nav_menu .nav.toggle > a, .nav_menu .nav.navbar-nav > li:first-child > a:first-child {
        color: #ffffff !important;
    }

    .top_nav .nav>li>a:focus, .top_nav .nav>li>a:hover, .top_nav .nav .open>a, .top_nav .nav .open>a:focus, .top_nav .nav .open>a:hover {
        background: #15a78b;
    }

    .armrck-tiles .card .card-stats-info {
        position: absolute;        
        top: 0;
        left: 0;
        margin: 0;
        height: 76px;
        line-height: 76px;
        background: linear-gradient(60deg,rgb(57, 210, 180),#18bc9c);
        box-shadow: none;
        border: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: #ffffff;
        display: none;
        -webkit-transition: width;
        -o-transition: width;
        transition: width;
        -webkit-transition-duration: .5s;
        transition-duration: .5s;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
    }

    .card.card-stats:hover .card-header {
        margin: -30px 15px 0;
        webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
        -moz-transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
        -o-transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
        -ms-transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }

    .armrck-tiles .card .card-stats-info .info-content {
        padding: 10px 10px 10px 100px;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }

    .armrck-tiles .card-stats .card-header {
        float: left;
        text-align: center;
        padding: 5px;
        z-index: 0;
        position: relative;
    }
    .armrck-tiles .card-stats .card-header i {
        color: #ffffff;
    }
    .armrck-tiles .card .title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 2em;
        font-weight: 400;
    }

    .armrck-tiles .card .card-content {
        padding: 10px 15px;
    }

    .armrck-tiles .card .card-footer {
        margin: 0 15px 10px;
        padding-top: 10px;
        border-top: 1px solid #eeeeee;
        color: #999999 !important;
    }

    .armrck-tiles .card .card-footer .stats:hover * {
        color: #1ABB9C;
    }
    .armrck-tiles .card .card-footer .stats, .armrck-tiles .card .card-footer .stats a {
        line-height: 19px;
        color: #999999;
        font-size: 14px;
    }
    .armrck-tiles .card .card-footer .stats-info:hover {
        cursor: pointer;
        color: #1ABB9C;
    }
    .armrck-tiles .card .card-footer .stats-info {
        float: right;
        width: 30px;
        text-align: right;
        font-size: 14px;
    }
</style>

