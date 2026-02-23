1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 
a. getElementById() selects a single element using its unique ID and returns one element or null.

b. getElementsByClassName() selects all elements with a given class name and returns a live HTMLCollection.

c. querySelector() selects the first matching element using a CSS selector and returns one element or null.

d. querySelectorAll() selects all matching elements using CSS selectors and returns a static NodeList.

2. How do you create and insert a new element into the DOM?

ans:
A new element is created in JavaScript using the document.createElement() method. After creating the element, text, attributes, or classes can be added to it. The element is then inserted into the DOM using methods such as appendChild(), append(), or prepend(). This process allows dynamic modification of the webpage structure and content.

3. What is Event Bubbling? And how does it work?

ans:
Event bubbling is a mechanism in JavaScript where an event first occurs on the target element and then propagates upward through its parent elements in the DOM tree. When an event such as a click happens, it is handled by the innermost element first, and then the same event is passed to its parent, grandparent, and so on up to the document. This allows parent elements to respond to events triggered by their child elements unless the propagation is stopped using event.stopPropagation().

4. What is Event Delegation in JavaScript? Why is it useful? 

ans:
Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of adding event listeners to multiple child elements. The parent element handles events triggered by its child elements using event bubbling. It is useful because it improves performance by reducing the number of event listeners, works with dynamically added elements, and makes code easier to manage and maintain.

5. What is the difference between preventDefault() and stopPropagation() methods?

ans:
a. preventDefault() stops the default action of an event from occurring.
b. stopPropagation() stops the event from bubbling or capturing further through the DOM tree.

