# 🍵 Chaiwind

> A lightweight, utility-first CSS engine powered by JavaScript — no build tools, no dependencies, just class names and chai.

---

## What is Chaiwind?

Chaiwind is a client-side CSS utility engine that lets you style HTML elements using expressive `chai-*` class names. Instead of writing traditional CSS, you simply add classes like `chai-p-4`, `chai-bg-blue`, or `chai-text-center` to your elements — and Chaiwind handles the rest by scanning the DOM and applying the corresponding inline styles automatically.

Think of it as your own handcrafted version of Tailwind CSS, built from scratch using vanilla JavaScript and DOM manipulation.

---

## How It Works

1. You add `chai-*` classes to your HTML elements.
2. After the page loads, Chaiwind traverses the entire DOM.
3. It identifies every class starting with `chai-`.
4. It parses the class name and maps it to a CSS property and value.
5. It applies the style as an inline style on the element.
6. It removes the original `chai-*` class to keep the DOM clean.

---

## Getting Started

### 1. Include the Script

```html
<script src="chaiwind.js"></script>
```

Place it at the bottom of your `<body>` tag, or use the `defer` attribute:

```html
<script src="chaiwind.js" defer></script>
```

### 2. Use `chai-*` Classes in Your HTML

```html
<div class="chai-p-4 chai-bg-red chai-text-center chai-rounded">
  Hello, Chaiwind!
</div>
```

Chaiwind will parse these classes and apply the corresponding inline styles automatically.

---

## Supported Utilities

### Spacing

| Class | CSS Output |
|---|---|
| `chai-p-{n}` | `padding: {n}px` |
| `chai-pt-{n}` | `padding-top: {n}px` |
| `chai-pr-{n}` | `padding-right: {n}px` |
| `chai-pb-{n}` | `padding-bottom: {n}px` |
| `chai-pl-{n}` | `padding-left: {n}px` |
| `chai-m-{n}` | `margin: {n}px` |
| `chai-mt-{n}` | `margin-top: {n}px` |
| `chai-mr-{n}` | `margin-right: {n}px` |
| `chai-mb-{n}` | `margin-bottom: {n}px` |
| `chai-ml-{n}` | `margin-left: {n}px` |

### Colors

| Class | CSS Output |
|---|---|
| `chai-bg-{color}` | `background-color: {color}` |
| `chai-text-{color}` | `color: {color}` |

Supports any valid CSS color name (e.g., `red`, `blue`, `green`, `coral`, `transparent`).

### Typography

| Class | CSS Output |
|---|---|
| `chai-text-{n}` | `font-size: {n}px` |
| `chai-text-center` | `text-align: center` |
| `chai-text-left` | `text-align: left` |
| `chai-text-right` | `text-align: right` |
| `chai-font-bold` | `font-weight: bold` |
| `chai-font-normal` | `font-weight: normal` |
| `chai-italic` | `font-style: italic` |
| `chai-uppercase` | `text-transform: uppercase` |
| `chai-lowercase` | `text-transform: lowercase` |
| `chai-capitalize` | `text-transform: capitalize` |

### Borders

| Class | CSS Output |
|---|---|
| `chai-border` | `border: 1px solid black` |
| `chai-border-{n}` | `border-width: {n}px` |
| `chai-border-{color}` | `border-color: {color}` |
| `chai-rounded` | `border-radius: 4px` |
| `chai-rounded-{n}` | `border-radius: {n}px` |
| `chai-rounded-full` | `border-radius: 9999px` |

### Layout

| Class | CSS Output |
|---|---|
| `chai-flex` | `display: flex` |
| `chai-block` | `display: block` |
| `chai-inline` | `display: inline` |
| `chai-inline-block` | `display: inline-block` |
| `chai-hidden` | `display: none` |
| `chai-w-{n}` | `width: {n}px` |
| `chai-h-{n}` | `height: {n}px` |
| `chai-w-full` | `width: 100%` |
| `chai-h-full` | `height: 100%` |

---

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Chaiwind Demo</title>
</head>
<body>

  <div class="chai-p-16 chai-bg-coral chai-rounded-8 chai-text-center chai-m-20">
    <h1 class="chai-text-32 chai-font-bold chai-text-white">Welcome to Chaiwind 🍵</h1>
    <p class="chai-text-16 chai-text-white chai-mt-8">
      Utility-first styling, brewed fresh.
    </p>
    <button class="chai-bg-white chai-text-coral chai-p-8 chai-rounded-full chai-font-bold chai-mt-16">
      Get Started
    </button>
  </div>

  <script src="chaiwind.js"></script>
</body>
</html>
```

---

## Project Structure

```
chaiwind/
├── chaiwind.js        # Core engine — DOM scanner and style applier
├── index.html         # Demo/playground file
└── README.md          # You are here
```

---

## Core Concepts

### DOM Traversal

Chaiwind uses `document.querySelectorAll('*')` to collect every element on the page after the DOM is loaded. It then iterates over each element's `classList` to find any class that begins with `chai-`.

### Class Parsing

Each matching class is split by the `-` delimiter. The prefix `chai` is stripped and the remaining tokens are mapped to a CSS property and value using a dictionary of pattern matchers.

### Style Application

Styles are applied using `element.style[property] = value`, which directly sets inline styles on the element — no stylesheet injection required.

### Class Cleanup

After applying a style, the `chai-*` class is removed from the element's `classList` to keep the rendered HTML clean.

---

## Design Philosophy

- **Zero dependencies** — pure vanilla JavaScript
- **No build step** — just drop in a `<script>` tag
- **Inline styles** — scoped, predictable, no cascade conflicts
- **Readable class names** — mirrors the mental model of utility-first CSS
- **Educational** — built to understand how frameworks like Tailwind work under the hood

---

## Limitations

- Styles are applied at page load; dynamically added elements won't be styled automatically unless you re-invoke the Chaiwind parser.
- Inline styles have high specificity — they will override styles from external stylesheets.
- Only a curated subset of CSS properties is supported by design.

---

## License

MIT — free to use, modify, and brew into something greater.

---

> *"Good CSS, like good chai, is all about the right proportions."*