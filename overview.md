## Components (template: page, section/regions, block, ...) < Design, UI, UX

## (domain: product, cart, order, client, ...) < Backend, Data Structure and Domain

## High Level

## Low Level

> COMPOSITION: core + extension

TODO

domain: Product

- sub-components (structure) - wich are reusable?:
  _ Image (use: avatar, logo, ...)
  _ Title
  _ Description
  _ Characteristics (Attributes)
  _ Price (use: total: cart, order, line item, ...)
  _ Category \* Tags
  template: section (< catalog)
- sub-components (behaviour/contextual) - which actions?
  - AddToCart
  - AddToFavourite
- alternative-composition (modifications/adaptations) - how for each context?
  - conditional render
  - wrapping
  - class inheritance
