# Notion Components 📇
![image](./React%20Notion%20Logo.png)

## Current Components:
- Button  
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
- Headers (1 - 6)
  - Styles:
    - Light
    - Dark
    - Affirmative
  - Functions:
    - mode: controls styles
  - Syntax:
   ```html
   <Header1
        mode="light"
    >
      Hello World, This is Light Mode
    </Header1>
   ```
- Containers (vertical, horizontal)
  - Functions:
    - control: controls direction
    - padding: changes padding amount in the stack direction 
  - Syntax
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
- Link
  - Styles:
    - Light
    - Dark
    - Affirmative
  - Functions:
    - mode: controls styles
    - color: provides manual color over-ride
    - destination: sets the link's web destination
  - Syntax:
   ```html
   <Link 
    destination="https://jakerase.dev"
    mode="affirmative"
    >
      Hello World
    </Link>
   ```

## Current Contributors
 - [Jake Rase](https://micro.jakerase.dev)