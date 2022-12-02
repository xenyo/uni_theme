<?php

function uni_theme_preprocess_page(&$variables) {
  $node = \Drupal::routeMatch()->getParameter('node');
  if ($node === null) {
    return;
  }
  if (!$node->hasField('uni_page_hide_title')) {
    return;
  }
  $hide_title = $node->get('uni_page_hide_title')->getString();
  if ($hide_title === '1') {
    unset($variables['page']['title']);
  }
}
