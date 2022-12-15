<?php

use Drupal\Component\Utility\Html;
use Drupal\Core\Template\AttributeHelper;

/**
 * Implements hook_preprocess().
 */
function uni_theme_preprocess(&$variables, $hook) {
  $variables['attributes'] = AttributeHelper::mergeCollections(
    $variables['attributes'] ?? [],
    [ 'class' => $variables['suggestions'] ],
  );

  if (substr($hook, 0, 8) === 'pattern_') {
    $id = Html::cleanCssIdentifier(substr($hook, 8));
    $variables['attributes'] = AttributeHelper::mergeCollections(
      $variables['attributes'] ?? [],
      [ 'class' => $id ],
    );

    $variant = Html::cleanCssIdentifier($variables['variant']);
    if (!empty($variant)) {
      $variables['attributes'] = AttributeHelper::mergeCollections(
        $variables['attributes'] ?? [],
        [ 'class' => "$id--$variant" ],
      );
    }
  }
}
