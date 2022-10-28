<?php

use Drupal\Core\Template\AttributeHelper;

/**
 * Implements hook_preprocess().
 */
function uni_base_preprocess(&$variables, $hook) {
  $attributes = ['class' => $variables['suggestions']];
  $variables['attributes'] = $variables['attributes']
    ? AttributeHelper::mergeCollections($variables['attributes'], $attributes)
    : $attributes;
}