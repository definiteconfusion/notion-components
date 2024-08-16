# Containers (vertical, horizontal)

## Functions

- control: controls direction
- padding: changes padding amount in the stack direction

## Syntax

### Important Note
Given that this component is meant ot stack objects, it assumes that it will have >1 children objects, anything less will throw an error

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
