___
# Migrated to [Notion](https://jakerase.notion.site/Card-b293266b6bfb4bf786cc1dcdcf982a2a) on 9/9/24
___

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
   <WrappedCode 
	   language="py"
	   mode="dark"
   >
            {`import requests
response = requests.get('https://api.github.com')
print(response.json())
            `}
    </WrappedCode>

    <!-- without the wrapping background div -->
    <Code 
	    language="py"
	    mode="dark"
    >
            {`import requests
response = requests.get('https://api.github.com')
print(response.json())
            `}
    </Code>
   ```
