<?php

// Add field label display class
$variables['attributes']['class'][] =
  'field--label-' . str_replace('_', '-', $variables['label_display']);

// Add field label classes
$variables['title_attributes']['class'][] = 'field__label';
if ($variables['label_display'] === 'visually_hidden') {
  $variables['title_attributes']['class'][] = 'visually-hidden';
}

// Add field item classes
foreach ($variables['items'] as $item) {
  $item['attributes']->addClass('field__item');
}
