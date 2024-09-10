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
  "java": {
    "keywords": [
      "public", "private", "protected", "class", "interface", "extends", "implements", "new", "if", "else", "switch", "case", "default", "for", "while", "do", "break", "continue", "return", "try", "catch", "finally", "throw", "throws", "import", "package", "static", "void", "int", "double", "float", "char", "boolean", "true", "false", "null"
    ],
    "builtins": [
      "System", "String", "Integer", "Double", "Math", "Object", "Thread", "Runnable", "ArrayList", "HashMap", "HashSet"
    ],
    "strings": /(".*?"|'.*?')/g,
    "comments": /\/\/.*$|\/\*[\s\S]*?\*\//gm
  },
  "csharp": {
    "keywords": [
      "public", "private", "protected", "internal", "class", "interface", "struct", "enum", "new", "if", "else", "switch", "case", "default", "for", "while", "do", "break", "continue", "return", "try", "catch", "finally", "throw", "using", "namespace", "static", "void", "int", "double", "float", "char", "bool", "true", "false", "null"
    ],
    "builtins": [
      "Console", "String", "Int32", "Double", "Math", "Object", "Thread", "Task", "List", "Dictionary", "HashSet"
    ],
    "strings": /(".*?"|'.*?')/g,
    "comments": /\/\/.*$|\/\*[\s\S]*?\*\//gm
  },
  "ruby": {
    "keywords": [
      "def", "if", "elsif", "else", "end", "for", "while", "do", "break", "next", "redo", "retry", "return", "yield", "begin", "rescue", "ensure", "raise", "module", "class", "self", "super", "true", "false", "nil", "and", "or", "not", "in", "unless", "until", "then", "when"
    ],
    "builtins": [
      "puts", "print", "p", "gets", "chomp", "to_s", "to_i", "to_a", "to_h", "Array", "Hash", "String", "Integer", "Float", "Range"
    ],
    "strings": /(".*?"|'.*?')/g,
    "comments": /#.*$/gm
  },
    "rust": {
      "keywords": [
        "fn", "let", "mut", "if", "else", "match", "while", "for", "loop", "break", "continue", "return", "struct", "enum", "impl", "trait", "use", "mod", "pub", "crate", "super", "self", "as", "const", "static", "move", "async", "await", "dyn", "type", "union", "ref", "true", "false", "None", "Some", "Ok", "Err"
      ],
      "builtins": [
        "println!", "format!", "panic!", "vec!", "String", "Option", "Result", "HashMap", "HashSet", "Box", "Rc", "Arc", "std", "io", "fs", "env", "cmp", "mem", "str"
      ],
      "strings": /(".*?"|'.*?')/g,
      "comments": /\/\/.*$|\/\*[\s\S]*?\*\//gm
    }
};

function highlightSyntax(codeContent, language, mode) {
  if (!codeContent || !keyWords[language]) return codeContent;

  const modeClassing = (type) => {
    return mode === 'dark' ? `${type}-dark` : `${type}-light`;
  }

  // Get syntax categories for the specified language
  const { keywords, builtins, strings, comments, tags, attributes, selectors, properties, values } = keyWords[language];

  // Escape HTML special characters
  codeContent = codeContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Highlight strings
  if (strings) {
    codeContent = codeContent.replace(strings, `<span class="${modeClassing('string')}">$1</span>`);
  }

  // Highlight comments
  if (comments) {
    codeContent = codeContent.replace(comments, `<span class="${modeClassing('comment')}">$&</span>`);
  }

  // Highlight tags (for HTML)
  if (tags) {
    codeContent = codeContent.replace(tags, `<span class="${modeClassing('tag')}">$1</span>`);
  }

  // Highlight attributes (for HTML)
  if (attributes) {
    codeContent = codeContent.replace(attributes, `<span class="${modeClassing('attribute')}">$1</span>`);
  }

  // Highlight selectors (for CSS)
  if (selectors) {
    codeContent = codeContent.replace(selectors, `<span class="${modeClassing('selector')}">$1</span>`);
  }

  // Highlight properties (for CSS)
  if (properties) {
    codeContent = codeContent.replace(properties, `<span class="${modeClassing('property')}">$1</span>`);
  }

  // Highlight values (for CSS)
  if (values) {
    codeContent = codeContent.replace(values, `<span class="${modeClassing('value')}">$1</span>`);
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
      codeContent = codeContent.replace(regex, `<span class="${modeClassing('keyword')}">${keyword}</span>`);
    });
  }

  return codeContent;
}

const Code = ({ children, language, mode }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = highlightSyntax(children, language);
    }
  }, [children, language]);

  return <pre ref={codeRef} className={`language-${language}`} />;
};

const WrappedCode = ({ children, language, mode }) => {
  return (
    <div className={`code-container-${mode}`}>
      <Code language={language}>{children}</Code>
    </div>
  );
};

export { Code, WrappedCode };
