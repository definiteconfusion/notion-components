# Button

## Styles

- Light
- Dark
- Affirmative

## Functions

- mode: controls styles
- onClick: controls onClick functionality
- className: allows for additional tooling with custom classes

## Syntax

   ```html
   <Button
        mode="light"
        onClick={() => {console.log('Hello World')}}
    >
      Hello World, This is Light Mode
    </Button>
   ```

# Button Grouper

## Functions

- className: allows for additional tooling with custom classes
- style: allows for manual style over-ride

## Syntax

   ```html
   <ButtonGrouper>
      <Button
          mode="dark"
          onClick={() => {console.log('Dark Mode')}}
      >
        This is Dark Mode
      </Button>
      <Button
          mode="light"
          onClick={() => {console.log('Light Mode')}}
      >
        This is Light Mode
      </Button>
      <Button
          mode="constructive"
          onClick={() => {console.log('Constructive Mode')}}
      >
        This is Constructive Mode
      </Button>
      <Button
          mode="destructive"
          onClick={() => {console.log('Destructive Mode')}}
      >
        This is Destructive Mode
      </Button>
      <Button
          mode="affirmative"
          onClick={() => {console.log('Affirmative Mode')}}
      >
        This is Affirmative Mode
      </Button>
      </ButtonGrouper>
   ```
