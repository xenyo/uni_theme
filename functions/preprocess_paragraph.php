<?php

/**
 * Implements hook_preprocess_paragraph().
 */
function uni_theme_preprocess_paragraph(&$variables) {
  $paragraph = $variables['paragraph'];
  if ($paragraph->hasField('uni_html_class')) {
    $field = $paragraph->get('uni_html_class');
    $terms = $field->referencedEntities();
    foreach ($terms as $term) {
      $variables['attributes']['class'][] = $term->getName();
    }
  }
}
