# Card

## Styles

- light
- dark

## Functions

- icon: controls icon image source
- title: the title of the card
- price: price of the item listed in the card
- unit: the unit in which the item is measured in (ex. per kilo)
- currency: the currency of the price of the item
- buttonTitle: the title of the button
- buttonOnClick: the action completed by the button upon interact

## Syntax

  ```html
   <Card
        icon="https://https://via.placeholder.com/500"
        title="Title"
        price="£10"
        unit="per kilo"
        style="dark"
        buttonTitle="Inspect: ⌘ + ⌥ + c"
        buttonOnClick={() => console.log('Card Button Clicked')}
      />
   ```
