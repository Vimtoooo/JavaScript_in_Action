# JavaScript in Action:

## Interactivity/UI Components:

### Tabs:

Tabs let users switch between <i>different pieces on content without leaving the page</i>.

#### Key Points:

1. We use the **display property to `none` / `block`** so that we can show or hide the elements.
2. When the user clicks a tab, we **call the function** and pass the tab's ID.
3. Inside the function, we use the `querySelectorAll()` + `forEach()` loop to select all elements and hide all tab contents.
4. FInally, we **show the one that matches the ID**.

#### Basic Syntax:

```html
<div class="tabs">
  <button class="tab" onclick="openTab('services')">Services</button>
  <button class="tab" onclick="openTab('contact')">Contact</button>
</div>

<div id="services" class="tab-content">Our services are listed here.</div>
<div id="contact" class="tab-content" style="display:none;">Contact us at contact@example.com.</div>

<script>
  function openTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';
  }
</script>
```

##### Breakdown:

To make this tab system function to work, the JavaScript follows a simple **"Clear and Show"** logic.

**1. The Trigger (Event Handling):** The attribute `onClick` which is located inside the `<button>` tags lead to the function called `openTab('id')` that is defined in the `<script>` tag (this contains JavaScript code). This will trigger when the user clicks on the button.

**2. The Reset (Hiding Everything):** Once the function runs, the line `document.querySelectorAll('.tab-content').forEach(...)` will locate every element with the class `tab-content` and sets its CSS to `display: none`.

**3. The Activation (Targeting the ID):** Within the line `document.getElementById(tabId)`, the program will use the **ID** received in step 1 to locate the specific `<div>` the user wants to view.

**4. The Display (Updating CSS):** Finally, once the `.style.display = 'block'` value is set to the overridden element, changing it from `none` (hidden) to `block` (visible), the content will instantly appear on the screen, ending the script execution.

#### Example of Usage:

##### HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Simple Tabs Example</title>
    <link rel="stylesheet" href="styles.css">
    <script src="main.js" defer></script>
</head>
<body>
    <div class="tabs">
        <!-- Each button calls the function and passes the tab's ID -->
        <button class="tab" onclick="openTab('home')">Home</button>
        <button class="tab" onclick="openTab('about')">About</button>
        <button class="tab" onclick="openTab('contact')">Contact</button>
    </div>

    <!-- By default, only "Home" is visible -->
    <div id="home" class="tab-content">Welcome to the homepage!</div>
    <div id="about" class="tab-content">Learn more about us here.</div>
    <div id="contact" class="tab-content">Get in touch with us.</div>
</body>
</html>
```

##### CSS:

```css
body {
    font-family: Arial, sans-serif;
    background: #f0f8ff; /* very light blue background */
    padding: 30px;
    color: #333;
}

.tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.tab {
    padding: 10px 18px;
    border: none;
    background: #90caf9; /* light blue */
    color: #fff;
    border-radius: 6px 6px 0 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background 0.2s ease, transform 0.1s ease;
}

#home { display: block; }
#about { display: none; }
#contact { display: none; }

.tab:hover {
    background: #64b5f6; /* brighter blue on hover */
}

.tab:active {
    transform: translateY(1px);
}

.tab:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.4);
}

.tab-content {
    background: #ffffff;
    border: 2px solid #90caf9;
    border-radius: 0 6px 6px 6px;
    padding: 20px;
    line-height: 1.5;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

##### JavaScript:

```js
const doc = document;

function openTab(tabId) {
    doc.querySelectorAll('.tab-content').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}
```

##### Result:

![Tabs](Assets/Videos/chrome_Tcj9kKE6sP.gif)