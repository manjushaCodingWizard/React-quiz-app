//array
let questions = [
  {
    number: 1,
    question: "HTML and XHTML stands for ____",
    answer:"a) Hyper Text Markup Language and Extensible HyperText Markup Language",
    options:[
      "a) Hyper Text Markup Language and Extensible HyperText Markup Language",
      "b) Hyper Text Markup Language and Extensible HyperText Marking Language",
      "c) Hyper Text Marking Language and EXtensible HyperText Marking Language",
      "d) Hyper Text Marking Language and Extensible HyperText Markup Language"
    ]
  },

  {
    number: 2,
    question: "Which of the following are table tags?",
    answer:"a) table, thead, tr, td",
    options:[
      "a) table, thead, tr, td",
      "b) colspan, table, tr",
      "c) table, tt, tr, td",
      "d) thead, colspan, td, tr"
    ]
  },

  {
    number: 3,
    question: "Metadata does not define ____",
    answer:"d) color",
    options:[
      "a) character set",
      "b) links",
      "c) scripts",
      "d) color"
    ]
  },

  {
    number: 4,
    question: "HTML uses",
    answer:"c) Fixed tags defined by the language",
    options:[
      "a) User defined tags",
      "b) Pre-specified tags",
      "c) Fixed tags defined by the language",
      "d) Tags only for linking"
    ]
  },

  {
    number: 5,
    question: "HTML web pages can be read and rendered by ________",
    answer:"c) Web Browser",
    options:[
      "a) Compiler",
      "b) Server",
      "c) Web Browser",
      "d) Interpreter"
    ]
  },

  {
    number: 6,
    question: "File paths are not used for linking in _____",
    answer:"b) PHP",
    options:[
      "a) JavaScripts",
      "b) PHP",
      "c) Style Sheets",
      "d) Images"
    ]
  },

  {
    number: 7,
    question: "Favicon stands for ____",
    answer:"c) Both Fave icon and Favorite icon",
    options:[
      "a) Fave icon",
      "b) Favorite icon",
      "c) Both Fave icon and Favorite icon",
      "d) Fav icon"
    ]
  },

  {
    number: 8,
    question: "Which image file format is not supported in Firefox?",
    answer:"d) MNG",
    options:[
      "a) PNG",
      "b) APNG",
      "c) SVG",
      "d) MNG"
    ]
  },

  {
    number: 9,
    question: "What should be set with text-align property so that every line has equal width like in magazines and newspapers?",
    answer:"c) text-align: justify",
    options:[
      "a) text-align: bottom",
      "b) text-align: none",
      "c) text-align: justify",
      "d) text-align: top"
    ]
  },

  {
    number: 10,
    question: "Which of the following is not used with text-decoration property?",
    answer:"d) inline",
    options:[
      "a) overline",
      "b) underline",
      "c) line-through",
      "d) inline"
    ]
  },

  {
    number: 11,
    question: "Which of the following is not JavaScript Data Types?",
    answer:"d) Float",
    options:[
      "a) Undefined",
      "b) Number",
      "c) Boolean",
      "d) Float"
    ]
  },

  {
    number: 12,
    question: "Which company developed JavaScript?",
    answer:"a) Netscape",
    options:[
      "a) Netscape",
      "b) Bell Labs",
      "c) Sun Microsystems",
      "d) IBM"
    ]
  },

  {
    number: 13,
    question: "Why so JavaScript and Java have similar name?",
    answer:"b) JavaScript's syntax is loosely based on Java's",
    options:[
      "a) JavaScript is a stripped-down version of Java",
      "b) JavaScript's syntax is loosely based on Java's",
      "c) They both originated on the island of Java",
      "d) None of the above"
    ]
  },

  {
    number: 14,
    question: "When a class B can extend another class A, we say that:",
    answer:"c) A is the superclass and B is the subclass",
    options:[
      "a) B is the superclass and A is the subclass",
      "b) Both A and B are the superclass",
      "c) A is the superclass and B is the subclass",
      "d) Both A and B are the subclass"
    ]
  },

  {
    number: 15,
    question: "What among the following is an appropriate event handler for input text among the below options ?",
    answer:"b) onchange",
    options:[
      "a) onclick",
      "b) onchange",
      "c) onkeyup",
      "d) onblur"
    ]
  },

  {
    number: 16,
    question: "What among the following is an appropriate when an event occurs when the user clicks on an element?",
    answer:"a) onclick",
    options:[
      "a) onclick",
      "b) onchange",
      "c) onkeyup",
      "d) onblur"
    ]
  },

  {
    number: 17,
    question: "How are the objects organized in the HTML DOM?",
    answer:"d) Hierarchy",
    options:[
      "a) list",
      "b) stack",
      "c) queue",
      "d) Hierarchy"
    ]
  },

  {
    number: 18,
    question: "If an operator is NaN or converts to NaN, what wil comparison operator always returns ?",
    answer:"b) False",
    options:[
      "a) True",
      "b) False",
      "c) Undefined",
      "d) NAN"
    ]
  },

  {
    number: 19,
    question: "Which of the following property is used to indicate whether the backside of an element is visible if the element is rotated to display the back?",
    answer:"d) backface-visibility",
    options:[
      "a) background-clip",
      "b) behavior",
      "c) background-origin",
      "d) backface-visibility"
    ]
  },

  {
    number: 20,
    question: "Which of the following property defines the width of each column in a multicolumn text flow?",
    answer:"d) column-width",
    options:[
      "a) width",
      "b) columns",
      "c) filter",
      "d) column-width"
    ]
  },

  {
    number: 21,
    question: "Which of the following property is used to apply visual effects to associated elements?",
    answer:"c) filter",
    options:[
      "a) effect",
      "b) adjust",
      "c) filter",
      "d) none of the mentioned"
    ]
  },

  {
    number: 22,
    question: "Which of the following element is used by the filter property to blur the images?",
    answer:"b) blur()",
    options:[
      "a) opaque()",
      "b) blur()",
      "c) scatter()",
      "d) all of the mentioned"
    ]
  },

  {
    number: 23,
    question: "Which of the following CSS3 property specifies how nested elements are rendered in 3D space?",
    answer:"c) transform-render",
    options:[
      "a) transform",
      "b) transform-style",
      "c) transform-render",
      "d) none of the mentioned"
    ]
  },

  {
    number: 24,
    question: "Which of the following property defines in a shorthand form the width, style, and color for the bottom border of an element?",
    answer:"a) border-bottom",
    options:[
      "a) border-bottom",
      "b) border-bottom-color",
      "c) border-bottom-all",
      "d) none of the mentioned"
    ]
  },

  {
    number: 25,
    question: "Which of the following property defines whether table cell borders are connected or separate?",
    answer:"b) border-collapse",
    options:[
      "a) border-table",
      "b) border-collapse",
      "c) border",
      "d) none of the mentioned"
    ]
  },

  {
    number: 26,
    question: "Which of the following css property should be used to make a responsive image?",
    answer:"d) all of the mentioned",
    options:[
      "a) float",
      "b) max-width",
      "c) margin-right",
      "d) all of the mentioned"
    ]
  },

  {
    number: 27,
    question: "Which of the following CSS property sets the opacity level for an element?",
    answer:"a) opacity",
    options:[
      "a) opacity",
      "b) transparency",
      "c) transparent",
      "d) all of the mentioned"
    ]
  },

  {
    number: 28,
    question: "Which of the following is an appropriate value for overflow element?",
    answer:"d) all of the mentioned",
    options:[
      "a) hidden",
      "b) auto",
      "c) scroll",
      "d) all of the mentioned"
    ]
  },

  {
    number: 29,
    question: "The keyword or the property that you use to refer to an object through which they were invoked is _________",
    answer:"c) this",
    options:[
      "a) from",
      "b)  to",
      "c) this",
      "d) object"
    ]
  },

  {
    number: 30,
    question: "The main difference between the variables declared with var and with let is ________",
    answer:"b) let is confined to a particular function but var is not",
    options:[
      "a) var is confined to a particular function but let is not",
      "b) let is confined to a particular function but var is not",
      "c) var defines values based on conditions but let does not",
      "d) let doesn’t let you change the value of the variable"
    ]
  },  
]