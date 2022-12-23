<?php

use Drupal\Core\Template\AttributeHelper;

/**
 * Implements hook_preprocess().
 */
function uni_theme_preprocess(&$variables, $hook) {
  $variables['attributes'] = AttributeHelper::mergeCollections(
    $variables['attributes'] ?? [],
    [ 'class' => $variables['suggestions'] ],
  );
}
