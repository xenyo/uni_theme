# uni_base

Base theme for Xenyo Uni Framework

## Sass utilities

### full-width

```css
@mixin full-width;
```

Forces an element's width to be 100% of the window width.

- Element must be horizontally centered in the window
- The window's vertical scrollbar will overlap the element's right edge
- To prevent horinzontal scrollbar from appearing, `overflow: hidden` must be present on one of the elements' ancestors
- This mixin should be avoided if possible, prefer refactoring HTML to achieve full width
- See https://css-tricks.com/full-width-containers-limited-width-parents/
