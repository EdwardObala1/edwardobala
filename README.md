# Things I have learnt in the styling course

* List styling in css
    `h1, h1, h3 {
        color:white;
    }`

* VS color code selector is actually interactive
* symbols such as arrows `&rarr` for a right arrow and such
* using pseudo classes for class selectors
    * e.g in `<u1> <li><li> </ui>`
        * `li:first-child{font-weight:bold;}`
        * `li:last-child{font-weight:bold;}`
        * `li:nth-child(even){font-weight:bold;}`
        * `li:nth-child(odd){font-weight:bold;}`
* first child is the first element under that block eg the `<li>` block

* order an element selector to select a specific element
    * `header div p {font:moderns;}`

* in styling links
    *  `a:link{}` styles a anchors with href links to them
    *  `a:visited{}`styles a anchors which have been clicked on before
    *  `a:hover{}` styles a anchors while the mouse hovers over it
    *  `a:active{}` styles a anchors while clicking on it

obviosobvuly ones I knew

* class selector `class = "class"` leads to `.class{color:white;}`
* id selector `id = "id"` leads to `#id{color:white;}`
* element selector `<p>id = "id"</p>` leads to `p{color:white;}`

# Types of Boxes

* Block level boxes - take full width, can not be side to side with other elements
    * eg. `<p>, <h1>`
* Inline level boxes - take space that is needed, heights and width styling do not apply, padding only works on the left and right side
    * e.g `<a>, <strong>`

* To change block level element to inline elements or viceversa:
    * `display: inline;`
    * `display: block;`

* you can set an inline-block box that allows you to adjust the width and the height of the box and also does not take the whole page like the block ones. Images are examples of an inline-block box
    * `display: inline-block;`