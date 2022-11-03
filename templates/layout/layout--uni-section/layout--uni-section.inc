<?php

// Get paragraph entity
$paragraph = $variables['paragraph'];

// Add layout classes
if ($paragraph->hasField('uni_margin_top_0')) {
  if ($paragraph->get('uni_margin_top_0')->getString()) {
    $variables['attributes']['class'][] = 'margin-top-0';
  }
}

if ($paragraph->hasField('uni_margin_bottom_0')) {
  if ($paragraph->get('uni_margin_bottom_0')->getString()) {
    $variables['attributes']['class'][] = 'margin-bottom-0';
  }
}
