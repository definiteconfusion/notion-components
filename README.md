# Notion Components 📇
![!image](./Github%20Social%20Banner.png)

## **NOTICE** 😊
This projects is built to allow admirerers of Notion's style to spread it further, and by no means built to steal/ take-away-from the work of the Notion team or to take credit for thier work

## **LICENCING**
This project falls under the Creative Commons 4.0 Attribute Licence as outlined on their [website](https://creativecommons.org/licenses/by/4.0/) aswell as in the [LICENSE](./LICENSE) file included with this repo.

## Class System
This project uses a class-based object modification system... so basically discount tailwind. You can view each of the modification classes in the [Styles.sass](./src/Styles/Styles.sass) file, the first real modification class is on line **52**. For a full breakdown go to the [styles-readme](./src/Styles/styles-readme.md) in the same directory!

## Button
  - Styles:
    - Light
    - Dark
    - Affirmative
  - Functions:
    - mode: controls styles
    - onClick: controls onClick functionality
  - Syntax:
   ```html
   <Button
        mode="light"
        onClick={() => {console.log('Hello World')}}
    >
      Hello World, This is Light Mode
    </Button>
   ```
## Headers (1 - 6)
### Styles:
  - Light
  - Dark
  - Affirmative
### Functions:
  - mode: controls styles
### Syntax:
  ```html
   <Header1
        mode="light"
    >
      Hello World, This is Light Mode
    </Header1>
   ```
## Containers (vertical, horizontal)
### Functions:
  - control: controls direction
  - padding: changes padding amount in the stack direction 
### Syntax
  ```html
   <Vstack
        control="center"
        padding="1rem"
    >
      <Header1
        mode="light"
      >
        Item One
      </Header1>
      <Header1
          mode="affirmative"
      >
        Item Two
      </Header1>
    </Vstack>
   ```
## Link
### Styles:
  - Light
  - Dark
  - Affirmative
### Functions:
  - mode: controls styles
  - color: provides manual color over-ride
  - destination: sets the link's web destination
### Syntax:
   ```html
   <Link 
    destination="https://jakrase.dev"
    mode="affirmative"
    >
      Hello World
    </Link>
   ```

## Current Contributors
 - [Jake Rase](https://micro.jakerase.dev)