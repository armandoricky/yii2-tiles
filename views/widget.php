<?php
/**
 * @author Armando Ricardo Nogueira <armandoricky@gmail.com>
 */
?>
<div class="<?= $classColumn; ?>">
    <div class="armrck-tiles stats">
        <div class="extra-content">
            <div class="extra-info">
                <?= $moreInfo; ?>
            </div>
        </div>
        <div class="tiles-header-icon" style="background-color:<?= $iconBgColor; ?>">
            <?= $icon; ?>
        </div>
        <div class="tiles-content">
            <p class="category"><?= $category; ?></p>
            <h3 class="title"><?= $title; ?>
                <?= !empty($title_small) ? "<small>$title_small</small>" : ""; ?>
            </h3>
        </div>
        <div class="tiles-footer">
            <div class="text-link">
                <?= $textFooter; ?>
            </div>
            <div class="show-extra-info">
                <i class="fa fa-info-circle"></i>
            </div>
        </div>
    </div>
</div>
