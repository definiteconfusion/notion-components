import React, { useEffect, useRef } from 'react';
import './Code.css';

const keyWords = {
  py: {
    keywords: [
      'def', 'if', 'elif', 'else', 'for', 'while', 'return', 'import', 'from', 'as', 'in', 'True', 'False', 'None', 'and', 'or', 'not', 'break', 'continue', 'pass', 'class', 'is', 'lambda', 'try', 'except', 'finally', 'raise', 'assert', 'with', 'yield', 'global', 'nonlocal',
    ],
    builtins: [
      'print', 'len', 'range', 'str', 'int', 'float', 'list', 'dict', 'set', 'tuple', 'type', 'help',
    ],
    strings: /(".*?"|'.*?')/g,
    comments: /#.*$/gm,
  },
  js: {
    keywords: [
      'function', 'if', 'else', 'return', 'var', 'let', 'const', 'for', 'while', 'do', 'break', 'continue', 'switch', 'case', 'default', 'import', 'export', 'from', 'as', 'new', 'try', 'catch', 'finally', 'throw', 'class', 'extends', 'super', 'this', 'typeof', 'instanceof',
    ],
    builtins: [
      'console', 'window', 'document', 'Math', 'JSON', 'Date', 'Promise', 'Array', 'String', 'Object', 'Number',
    ],
    strings: /(".*?"|'.*?'|`.*?`)/g,
    comments: /\/\/.*$|\/\*[\s\S]*?\*\//gm,
  },
  html: {
    tags: /(&lt;\/?\w+&gt;)/g,
    attributes: /\b(\w+)(?=\s*=\s*["'])/g,
    strings: /(".*?"|'.*?')/g,
    comments: /&lt;!--[\s\S]*?--&gt;/g,
  },
  css: {
    selectors: /([.#]?\w+)(?=\s*\{)/g,
    properties: /\b(\w+)(?=\s*:)/g,
    values: /:\s*(\w+|\d+|\#[0-9a-fA-F]+|rgb\([^\)]+\)|rgba\([^\)]+\))/g,
    comments: /\/\*[\s\S]*?\*\//gm,
  },
};

function highlightSyntax(codeContent, language) {
  if (!codeContent || !keyWords[language]) return codeContent;

  // Get syntax categories for the specified language
  const { keywords, builtins, strings, comments, tags, attributes, selectors, properties, values } = keyWords[language];

  // Escape HTML special characters
  codeContent = codeContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Highlight strings
  if (strings) {
    codeContent = codeContent.replace(strings, `<span class="string">$1</span>`);
  }

  // Highlight comments
  if (comments) {
    codeContent = codeContent.replace(comments, `<span class="comment">$&</span>`);
  }

  // Highlight tags (for HTML)
  if (tags) {
    codeContent = codeContent.replace(tags, `<span class="tag">$1</span>`);
  }

  // Highlight attributes (for HTML)
  if (attributes) {
    codeContent = codeContent.replace(attributes, `<span class="attribute">$1</span>`);
  }

  // Highlight selectors (for CSS)
  if (selectors) {
    codeContent = codeContent.replace(selectors, `<span class="selector">$1</span>`);
  }

  // Highlight properties (for CSS)
  if (properties) {
    codeContent = codeContent.replace(properties, `<span class="property">$1</span>`);
  }

  // Highlight values (for CSS)
  if (values) {
    codeContent = codeContent.replace(values, `<span class="value">$1</span>`);
  }

  // Highlight built-in functions or objects
  if (builtins) {
    builtins.forEach((builtin) => {
      const regex = new RegExp(`(?<!<[^>]*)\\b${builtin}\\b(?![^<]*>)`, 'g');
      codeContent = codeContent.replace(regex, `<span class="builtin">${builtin}</span>`);
    });
  }

  // Highlight keywords
  if (keywords) {
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(?<!<[^>]*)\\b${keyword}\\b(?![^<]*>)`, 'g');
      codeContent = codeContent.replace(regex, `<span class="keyword">${keyword}</span>`);
    });
  }

  return codeContent;
}

const Code = ({ children, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = highlightSyntax(children, language);
    }
  }, [children, language]);

  return <pre ref={codeRef} className={`language-${language}`} />;
};

const WrappedCode = ({ children, language }) => {
  return (
    <div className="code-container">
      <Code language={language}>{children}</Code>
    </div>
  );
};

export { Code, WrappedCode };
