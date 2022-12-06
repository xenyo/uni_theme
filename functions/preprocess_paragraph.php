<?php

/**
 * Implements hook_preprocess_paragraph().
 */
function uni_theme_preprocess_paragraph(&$variables) {
  $paragraph = $variables['paragraph'];
  if ($paragraph->hasField('uni_classes')) {
    $terms = $paragraph->uni_classes->referencedEntities();
    foreach ($terms as $term) {
      $variables['attributes']['class'][] = $term->getName();
    }
  }
}
