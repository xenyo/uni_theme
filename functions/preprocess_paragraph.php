<?php

/**
 * Implements hook_preprocess_paragraph().
 */
function uni_theme_preprocess_paragraph(&$variables) {
  $paragraph = $variables['paragraph'];
  if ($paragraph->hasField('uni_section_vertical')) {
    $class = $paragraph->get('uni_section_vertical');
    $variables['attributes']['class'][] = $class->getString();
  }
}
