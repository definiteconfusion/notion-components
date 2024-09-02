# Code

## Styles (More on the Way w/ custom themes later)

- dark

## Languages

- python
- js

## Functions

- language: controls the language preset for the highlighting

## Syntax

  ```html
  <!-- with the wrapping background div -->
   <WrappedCode language="py">
            {`import requests
response = requests.get('https://api.github.com')
print(response.json())
            `}
    </WrappedCode>

    <!-- without the wrapping background div -->
    <Code language="py">
            {`import requests
response = requests.get('https://api.github.com')
print(response.json())
            `}
    </Code>
   ```
