# Text Mini Tools

A lightweight, browser-based suite of text utilities designed for speed, privacy, and simplicity. All tools run entirely on the client-side, meaning your data never leaves your browser.

## 🚀 Features

- **Privacy First**: No server-side processing. All text manipulation happens locally in your browser.
- **Fast & Lightweight**: Zero dependencies, no heavy frameworks, just pure HTML, CSS, and JavaScript.
- **Responsive Design**: Works on desktops, tablets, and mobile devices.
- **Dark Mode Aesthetic**: Modern, glassmorphism-inspired dark theme.

## 🛠️ Included Tools

The suite includes over 30+ tools organized into four categories:

### 🔤 Basic Text Tools
- **Text Formatter**: Clean up messy text.
- **Case Converters**: Uppercase, Lowercase, Sentence Case, Title Case.
- **Space Management**: Remove extra spaces, trim text.
- **Line Operations**: Add or remove line breaks.

### ✏️ Editing & Writing
- **Counters**: Words, Characters, Sentences, Paragraphs.
- **Analysis**: Readability Checker (Flesch-Kincaid), Text Summarizer.
- **Refinement**: Grammar & Spell Checkers, Text Rewriter.

### 🔐 Encoding & Security
- **Encoders/Decoders**: Base64, Hex, URL encoding.
- **Web Safety**: HTML Entity Escape & Unescape.

### 🔄 Converters
- **Data Formats**: Text to JSON, CSV to Text (and vice versa).
- **Markup**: Markdown to HTML, HTML to Markdown.

## 📦 Project Structure

```
/minitools
├── index.html            # Main dashboard linking to all tools
├── index.css             # Shared design system (variables, layout, components)
├── script.js             # Shared logic (header/footer injection, copy-to-clipboard)
├── planning.md           # Original project plan
├── *.html                # Individual tool files (e.g., word_counter.html)
└── README.md             # This file
```

## 💻 How to Use

1. **Open Locally**: Simply double-click `index.html` to open the dashboard in your default web browser.
2. **Navigate**: Click on any card to open a specific tool.
3. **Use Tools**: Enter your text, click the action button, and copy the result.

## 📝 License

This project is free and open-source. Feel free to modify and use it for personal or commercial projects.
