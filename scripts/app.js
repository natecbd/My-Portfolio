window.onload = function(){

  var buildChar = function(s, c) {
    return '<span class="'+c+' blur-test">'+s+'</span>'
  };
  var buildPrimary = function(s) {
    return buildChar(s, 'primary');
  };
  var buildCharacter = function(s) {
    return buildChar(s, 'character');
  };
  var buildValue = function(s) {
    return buildChar(s, 'value');
  };
  var buildTarget = function(s) {
    return buildChar(s, 'target');
  };
  var buildControl = function(s) {
    return buildChar(s, 'control');
  };
  var buildLogic = function(s) {
    return buildChar(s, 'logic');
  };
  var buildTag = function(s) {
    return buildChar(s, 'tag');
  };
  var buildCursor = function(s) {
    return buildChar(s, 'cursor');
  };

  var buildSet = function(s, f) {
    // console.log(s, f)
    var result = '';
    for(c in s) {
      result += f(s.charAt(c));
    };
    return result;
  };

  var cssString = ''
  +'\n    #cssBG, #htmlBG, #javaBG, pre {'
  +'\n      display: inline-block;'
  +'\n      height: 100%;'
  +'\n      padding: 9.5px;'
  +'\n      margin: 0px;'
  +'\n      margin-top: 60px;'
  +'\n      font-size: 0.8vw;'
  +'\n      line-height: 1.42857143;'
  +'\n      color: white;'
  +'\n      overflow: hidden;'
  +'\n      background-color: #151516;'
  +'\n      border: 0;'
  +'\n      border-radius: 0px;'
  +'\n      word-break: normal;'
  +'\n      word-wrap: normal;'
  +'\n    }'
  +'\n    #htmlBG {'
  +'\n      width: 40%;'
  +'\n    }'
  +'\n    #cssBG {'
  +'\n      width: 20%;'
  +'\n    }'
  +'\n    #javaBG {'
  +'\n      width: 30%'
  +'\n    }'
  +'\n    .comment {'
  +'\n      color: #335b1f;'
  +'\n    }'
  +'\n    .target {'
  +'\n      color: #DCDCAA;'
  +'\n    }'
  +'\n    .primary {'
  +'\n      color: #d8a089;'
  +'\n    }'
  +'\n    .character {'
  +'\n      color: #9CDCFE;'
  +'\n    }'
  +'\n    .value {'
  +'\n      color: #d5edad;'
  +'\n    }'
  +'\n    .control {'
  +'\n      color: #545454;'
  +'\n    }'
  +'\n    .logic {'
  +'\n      color: #c392db;'
  +'\n    }'
  +'\n    .tag {'
  +'\n      color: #569cd6;'
  +'\n    }'
  +'\n    .cursor {'
  +'\n      color: white;'
  +'\n    }'
  
  var jsString = ''
  +'\nfunction type(j,preTag,text,vars,cursor,colorFunction) {'
  +'\n  vars = colorFunction(j, preTag, text, vars);'
  +'\n  var bc = byId(cursor)'
  +'\n  if(bc != null) {'
  +'\n    bc.remove();'
  +'\n  }'
  +'\n  if(j < text.length) {'
  +'\n    preTag.innerHTML += buildSet(text.charAt(j), vars.control) '
  +'\n      + "<span id='+'"+cursor+"'+ 'class='+"'cursor'"+'>|</span>"'
  +'\n    setTimeout(function() {'
  +'\n      type(j+1,preTag,text,vars,cursor,colorFunction);'
  +'\n    }, 10)'
  +'\n  };'
  +'\n}'
  +'\n'
  +'\ntype('
  +'\n  0,'
  +'\n  byId("htmlBG"),'
  +'\n  htmlString,'
  +'\n  {control:buildControl,inTag:false,inPrimary:false},'
  +'\n  "htmlCursor",'
  +'\n  colorHTML'
  +'\n);'
  +'\ntype('
  +'\n  0,'
  +'\n  byId("cssBG"),'
  +'\n  cssString,'
  +'\n  {control:buildTarget,isInt:false,inVal:false,inBlock:false},'
  +'\n  "cssCursor",'
  +'\n  colorCSS'
  +'\n);'
  +'\n'
  +'\ntype('
  +'\n  0,'
  +'\n  byId("javaBG"),'
  +'\n  jsString,'
  +'\n  {control:buildTag},'
  +'\n  "javaCursor",'
  +'\n  colorJS'
  +'\n);'

  var htmlString  = ''
  +'\n  <!DOCTYPE html>'
  +'\n'
  +'\n'
  +'\n  <html>'
  +'\n    <head>'
  +'\n      <title>Natecbd</title>'
  +'\n      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">'
  +'\n  '
  +'\n      <link rel="stylesheet" type="text/css" href="styles/index.css">'
  +'\n      <link rel="stylesheet" type="text/css" href="styles/normalize.css">'
  +'\n    </head>'
  +'\n    <body>'
  +'\n      <div class="bg">'
  +'\n        <div id="preBlock">'
  +'\n          <pre class="inline" id="cssBG"></pre>'
  +'\n          <pre class="inline" id="javaBG"></pre>'
  +'\n          <pre class="inline" id="htmlBG"></pre>'
  +'\n        </div>'
  +'\n        <nav class="nav-bar">'
  +'\n          <li class="nav-item hvr-underline-reveal">'
  +'\n            <div id="contactBtn">'
  +'\n              <span class="nav-link navc fade-in-up">Contact</span>'
  +'\n            </div>'
  +'\n          </li>'
  +'\n          <li class="nav-item hvr-underline-reveal">'
  +'\n            <div id="aboutBtn">'
  +'\n              <span class="nav-link navb fade-in-up">About</span>'
  +'\n            </div>'
  +'\n          </li>'
  +'\n        </nav>'
  +'\n  '
  +'\n        <div id="contactModal" class="CSSmodal">'
  +'\n          <h3 class="CSSmodal-content">'
  +'\n            e-mail: <a href="mailto:natecbd@gmail.com">natecbd@gmail.com</a> / github: <a href="http://www.github.com/natecbd">natecbd</a> / twitter: <a href="http://www.twitter.com/natecbd">natecbd</a>'
  +'\n          </h3>'
  +'\n        </div>'
  +'\n  '
  +'\n        <div id="aboutModal" class="CSSmodal">'
  +'\n          <h3 class="CSSmodal-content">'
  +'\n            Name: Nathan Goodman / Occupation: Web Developer / Location: Seattle, WA '
  +'\n            <!-- <br><br> -->'
  +'\n            <!-- Hashtags: #AdobeColdFusion, #AJAX, #Bootstrap, #CSS3, #Git, #HTML, #Java, #JavaScript, #JQuery, #MySQL -->'
  +'\n          </h3>'
  +'\n        </div>'
  +'\n  '
  +'\n        <div id="page-build-panel" class="center-screen"></div>'
  +'\n        <div id="page-build" class="center-screen">'
  +'\n          <a class="bracket-buttons inline left" href="react.html" id="left-bracket"><b>{</b></a>'
  +'\n          <div class="inline middle" id="page-text">Webpage built with &lt;/html&gt;, CSS, &amp; JavaScript.</div>'
  +'\n          <a class="bracket-buttons inline right" href="bootstrap.html" id="right-bracket"><b>}</b></a>'
  +'\n        </div>'
  +'\n      </div>'
  +'\n      <script src="scripts/app.js"></script>'
  +'\n    </body>'
  +'\n  </html>'
   
  
  
  function colorCSS (j, s, o) {
    switch (s.charAt(j)) {
      case "{":
        o.inBlock = true;
        o.inVal = false;
        o.control = buildCursor;
        break;
      case "}":
        o.inBlock = false;
        o.inVal = false;
        o.control = buildCursor;
        break;
      case ":":
        o.inVal = true;
        o.control = buildCursor;
        break;
      case ";":
        o.inVal = false;
        o.control = buildCursor;
        break;
      default:
        if(s.charAt(j) == " "){
          o.control = buildTarget;
          o.isInt = false;
          o.isPrimary = false;
        } else if(!o.inBlock) {
          o.control = buildTarget;
        } else if(!o.inVal) {
          o.control = buildCharacter;
        } else if(o.isInt) {
          o.control = buildValue;
        } else if(o.isPrimary){
          o.control = buildPrimary;
        } else if ((s.charAt(j) < 10)) {
          o.control = buildValue;
          o.isInt = true;
          o.isPrimary = false;
        } else {
          o.control = buildPrimary;
          o.isInt = false;
          o.isPrimary = true;
        }
        break;
    }
    return o;
  }

  function colorJS(j, s, o) {
    var word = ""
    var char = s.charAt(j);
    var breakTest = [" ", ",", "(", ")", "{", "}", ";", ":", "=", "!", "+", "-", "?", ".", "*"];
    while(breakTest.indexOf(s.charAt(j)) == -1 && j < s.length) {
      word += s.charAt(j++);
    }
    word.trim();
    // console.log(char, word);
    switch (word) {
      case "function":
        o.functionName = true;
      case "var":
        o.varName = true;
      case "false":
      case "true":
        o.control = buildTag;
        o.inKey = true;
        o.inLogic = false;
        break;
      case "if":
      case "else":
        o.control = buildLogic;
        o.inLogic = true;
        o.inKey = false;
        break;
      default:
        switch (char) {
          case "{":
          case "}":
          case "(":
          case ")":
          case "+":
          case "=":
          case ",":
          case ";":
          case "<":
          case ">":
          case " ":
          case "*":
          case "!":
          case ".":
            o.inKey = false;
            o.inLogic = false;
            // o.varName = false;
            // o.functionName = false;
            if(!o.inPrimary) {
              o.control = buildCursor;
            } 
            break;
          case '"':
            if(!o.inPrimary) { //in new set of quotes
              //turn on prim1
              o.inPrimary = true;
              o.inPrim1 = true;
              o.inPrim2 = false;
            } else if(o.inPrim1) { //in a current set of "" quotes
              //turn off primary
              o.inPrimary = false;
              o.inPrim1 = false;
              o.inPrim2 = false;
            } //in a current set of '' quotes
            o.control = buildPrimary;
            break;
          case "'":
            if(!o.inPrimary) { //in new set of quotes
              //turn on prim2
              o.inPrimary = true;
              o.inPrim1 = false;
              o.inPrim2 = true;
            } else if(o.inPrim2) { //in a current set of '' quotes
              //turn off primary
              o.inPrimary = false;
              o.inPrim1 = false;
              o.inPrim2 = false;
            } //in a current set of "" quotes
            o.control = buildPrimary;
            break;
          default:
            if(o.inPrimary) {
              o.control = buildPrimary;
            } else if(o.inKey) {
              o.control = buildTag;
            } else if(o.inLogic) {
              o.control = buildLogic;
            } else if(s.charAt(j) == "(") {
              o.control = buildTarget;
            } else if(char < 10) {
              o.control = buildValue;
            } else {
              o.control = buildCharacter;
            } 

            break;
        }
        break;
    }
    return o;
  }

  function colorHTML (j, s, o) {
    switch (s.charAt(j)) {
      case "<":
        o.inTag = true;
        o.control = buildControl;
        break;
      case ">":
        o.inTag = false;
        o.control = buildControl;
        break;
      case "/":
        if(o.control != buildControl && o.control != buildPrimary) {
          o.control = buildCursor;
        };
        break;
      case "!":
        if(o.control != buildControl) {
          o.control = buildCursor;
        };
        break;
      case '"':
        if(o.inTag) {
          o.control = buildPrimary;
          o.inPrimary = !o.inPrimary;
        } else {
          o.control = buildCursor;
        }
        break;
      case "=":
        if(o.control != buildPrimary) {
          o.control = buildCursor;
        };
        break;
      case "&":
        if(o.control != buildPrimary) {
          o.control = buildTag;
        } 
        break;
      case " ":
        if(o.inTag) {
          if(o.control != buildPrimary) {
            o.control = buildCharacter;
          }
        } else {
          o.control = buildCursor;
        };
        break;
      default:
        if(o.inPrimary) {
          o.control = buildPrimary;
        } else if (o.control == buildControl && o.inTag) {
          o.control = buildTag;
        } else if(o.inTag && o.control != buildTag) {
          o.control = buildCharacter;
        } else if(!o.inTag) {
          o.control = buildCursor;
        }
        break;
    }
    return o;
  }

  function type(j,preTag,text,vars,cursor,colorFunction) {
    vars = colorFunction(j, text, vars);
    var bc = byId(cursor)
    if(bc != null) {
      bc.remove();
    }
    if(j < text.length) {
      preTag.insertAdjacentHTML('beforeend',buildSet(text.charAt(j), vars.control) 
        + "<span id='"+cursor+"' class='cursor'>|</span>")
      setTimeout(function() {
        type(j+1,preTag,text,vars,cursor,colorFunction);
      }, 10)
    };
  }

  type(
    0,
    byId("htmlBG"),
    htmlString,
    {control:buildControl,inTag:false,inPrimary:false},
    "htmlCursor",
    colorHTML
  );
  type(
    0,
    byId("cssBG"),
    cssString,
    {control:buildTarget,isInt:false,inVal:false,inBlock:false},
    "cssCursor",
    colorCSS
  );

  type(
    0,
    byId("javaBG"),
    jsString,
    {control:buildTag},
    "javaCursor",
    colorJS
  );

  //nav buttons
  var abt = {};
  var cnc = {};
  
  abt.btn = byId("aboutBtn");
  cnc.btn = byId("contactBtn");
  abt.modal = byId("aboutModal");
  cnc.modal = byId("contactModal");

  abt.modal.onclick = function() {fadeAll(abt, cnc)};
  cnc.modal.onclick = function() {fadeAll(abt, cnc)};

  resetBtn(abt, cnc);
  
  function resetBtn(a, b) {
    a.btn.onclick = function() {fadeOne(a, b)};
    b.btn.onclick = function() {fadeOne(b, a)};
  };

  function fadeAll(a, b) {
    jsFadeOut(a);
    jsFadeOut(b);
    resetBtn(a, b);
  };

  function fadeOne(a, b) {
    jsFadeIn(a); 
    jsFadeOut(b);
    a.btn.onclick = function() {fadeAll(a, b)};
    b.btn.onclick = function() {fadeOne(b, a)};
  };

  function jsFadeOut(targ) {
    if (targ.modal.className.split(" ").indexOf("fade-in") != -1) {
      targ.modal.className += " " + "fade-out";
    };
    targ.modal.className = targ.modal.className.replace(/\bfade-in\b/g, "");
  };

  function jsFadeIn(targ) {
    targ.modal.className = targ.modal.className.replace(/\bfade-out\b/g, "");
    if (targ.modal.className.split(" ").indexOf("fade-in") == -1) {
      targ.modal.className += " " + "fade-in";
    };
  };

  function byId(a) {
    return document.getElementById(a);
  }
};

  //background
  // var cssBG = ''
  // + '\n\n\t<span class="target">a </span>{'
  // + '\n\t  <span class="character">text-decoration</span>: <span class="primary">none</span> ;'
  // + '\n\t}'
  // + '\n\t'
  // + '\n\t<span class="target">.nav-bar</span> {'
  // + '\n\t  <span class="character">position</span>: <span class="primary">fixed</span>;'
  // + '\n\t  <span class="character">z-index</span>: <span class="value">999</span>;'
  // + '\n\t  <span class="character">top</span>: <span class="value">0%</span>;'
  // + '\n\t  <span class="character">width</span>: <span class="value">100%</span>;'
  // + '\n\t  <span class="character">height</span>: <span class="value">70px</span>;'
  // + '\n\t  <span class="character">list-style-type</span>: <span class="primary">none</span>;'
  // + '\n\t  <span class="character">margin</span>: <span class="value">0</span>;'
  // + '\n\t  <span class="character">padding</span>: <span class="value">0</span>;'
  // + '\n\t  <span class="character">overflow</span>: <span class="primary">hidden</span>;'
  // + '\n\t  <span class="character">-webkit-user-select</span>: <span class="primary">none</span>;'
  // + '\n\t  <span class="character">   -moz-user-select</span>: <span class="primary">none</span>;'
  // + '\n\t  <span class="character">    -ms-user-select</span>: <span class="primary">none</span>;'
  // + '\n\t  <span class="character">        user-select</span>: <span class="primary">none</span>;'
  // + '\n\t}'
  // + '\n\t'
  // + '\n\t<span class="target">.nav-item</span> {'
  // + '\n\t  <span class="character">float</span>: <span class="primary">right</span>;'
  // + '\n\t  <span class="character">text-align</span>: <span class="primary">left</span>;'
  // + '\n\t  <span class="character">vertical-align</span>: <span class="primary">middle</span>;'
  // + '\n\t  <span class="character">line-height</span>: <span class="value">350%</span>;'
  // + '\n\t  <span class="character">font-size</span>: <span class="value">20px</span>;'
  // + '\n\t  <span class="character">height</span>: <span class="value">70px</span>;'
  // + '\n\t  <span class="character">margin-left</span>: <span class="value">30px</span>;'
  // + '\n\t  <span class="character">margin-right</span>: <span class="value">30px</span>;'
  // + '\n\t}'
  // + '\n\t'
  // + '\n\t<span class="target">.nav-link</span> {'
  // + '\n\t  <span class="character">font-weight</span>: <span class="primary">bold</span>;'
  // + '\n\t  <span class="character">display</span>: <span class="primary">inline-block</span>;'
  // + '\n\t  <span class="character">text-decoration</span>: <span class="primary">none</span>;'
  // + '\n\t  <span class="character">text-transform</span>: <span class="primary">capitalize</span>;'
  // + '\n\t}'
  // + '\n\t'
  // + '\n\t<span class="target">.navb, .navc</span> {'
  // + '\n\t  <span class="character">opacity</span>: <span class="value">0</span>;'
  // + '\n\t  <span class="character">color</span>: <span class="primary">white</span>;'
  // + '\n\t  <span class="character">-webkit-animation-duration</span>: <span class="value">.75s</span>;'
  // + '\n\t  <span class="character">   -moz-animation-duration</span>: <span class="value">.75s</span>;'
  // + '\n\t  <span class="character">     -o-animation-duration</span>: <span class="value">.75s</span>;'
  // + '\n\t  <span class="character">        animation-duration</span>: <span class="value">.75s</span>;'
  // + '\n\t  <span class="character">-webkit-animation-fill-mode</span>: <span class="primary">forwards</span>;'
  // + '\n\t  <span class="character">   -moz-animation-fill-mode</span>: <span class="primary">forwards</span>;'
  // + '\n\t  <span class="character">     -o-animation-fill-mode</span>: <span class="primary">forwards</span>;'
  // + '\n\t  <span class="character">        animation-fill-mode</span>: <span class="primary">forwards</span>;'
  // + '\n\t}';

  // var htmlBG = ''
  // +'\n\n<span class="control">&lt;!</span><span class="tag">DOCTYPE </span><span class="character">html</span><span class="control">&gt;</span>'
  // +'\n'
  // +'\n'
  // +'\n<span class="control">&lt;</span><span class="tag">html</span><span class="control">&gt;</span>'
  // +'\n<span class="control">&lt;</span><span class="tag">head</span><span class="control">&gt;</span>'
  // +'\n  <span class="control">&lt;</span><span class="tag">title</span><span class="control">&gt;</span>Natecbd<span class="control">&lt;/</span><span class="tag">title</span><span class="control">&gt;</span>'
  // +'\n  <span class="control">&lt;</span><span class="tag">meta</span> <span class="character">name</span>=<span class="primary">"viewport"</span> <span class="character">content</span>=<span class="primary">"width=device-width, initial-scale=1, user-scalable=no"</span><span class="control">&gt;</span>'
  // +'\n  '
  // +'\n  <span class="control">&lt;</span><span class="tag">link</span> <span class="character">rel</span>=<span class="primary">"stylesheet"</span> <span class="character">type</span>=<span class="primary">"text/css"</span><span class="character"> href</span>=<span class="primary">"styles/nav.css"</span><span class="control">&gt;</span>'
  // +'\n  <span class="control">&lt;</span><span class="tag">link</span> <span class="character">rel</span>=<span class="primary">"stylesheet"</span> <span class="character">type</span>=<span class="primary">"text/css"</span> <span class="character">href</span>=<span class="primary">"styles/index.css"</span><span class="control">&gt;</span>'
  // +'\n  <span class="control">&lt;</span><span class="tag">link</span> <span class="character">rel</span>=<span class="primary">"stylesheet"</span> <span class="character">type</span>=<span class="primary">"text/css"</span> <span class="character">href</span>=<span class="primary">"styles/normalize.css"</span><span class="control">&gt;</span>'
  // +'\n  <span class="control">&lt;</span><span class="tag">link</span> <span class="character">rel</span>=<span class="primary">"stylesheet"</span> <span class="character">type</span>=<span class="primary">"text/css"</span> <span class="character">href</span>=<span class="primary">"styles/background.css"</span><span class="control">&gt;</span>'
  // +'\n<span class="control">&lt;/</span><span class="tag">head</span><span class="control">&gt;</span>'
  // +'\n<span class="control">&lt;</span><span class="tag">body</span><span class="control">&gt;</span>'
  // +'\n  <span class="control">&lt;</span><span class="tag">div</span> <span class="character">class</span>=<span class="primary">"bg"</span><span class="control">&gt;</span>'
  // +'\n    <span class="control">&lt;</span><span class="tag">span</span> <span class="character">class</span>=<span class="primary">"row"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">span</span><span class="control">&gt;</span>'
  // +'\n    <span class="control">&lt;</span><span class="tag">pre</span> <span class="character">id</span>=<span class="primary">"cssBG"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">pre</span><span class="control">&gt;</span>'
  // +'\n    <span class="control">&lt;</span><span class="tag">pre</span> <span class="character">id</span>=<span class="primary"<span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">pre</span><span class="control">&gt;</span>'
  // +'\n    <span class="control">&lt;</span><span class="tag">pre</span> <span class="character">id</span>=<span class="primary">"jsBG"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">pre</span><span class="control">&gt;</span>'
  // +'\n    <span class="control">&lt;</span><span class="tag">nav</span> <span class="character">class</span>=<span class="primary">"nav-bar"</span><span class="control">&gt;</span>'
  // +'\n      <span class="control">&lt;</span><span class="tag">li</span> <span class="character">class</span>=<span class="primary">"nav-item hvr-underline-reveal"</span><span class="control">&gt;</span>'
  // +'\n        <span class="control">&lt;</span><span class="tag">a</span> <span class="character">class</span>=<span class="primary">"nav-link navc fade-in-up"</span> <span class="character">href</span>=<span class="primary">"contact"</span><span class="control">&gt;</span>Contact<span class="control">&lt;/</span><span class="tag">a</span><span class="control">&gt;</span>'
  // +'\n      <span class="control">&lt;/</span><span class="tag">li</span><span class="control">&gt;</span>'
  // +'\n      <span class="control">&lt;</span><span class="tag">li</span> <span class="character">class</span>=<span class="primary">"nav-item hvr-underline-reveal"</span><span class="control">&gt;</span>'
  // +'\n        <span class="control">&lt;</span><span class="tag">a</span> <span class="character">class</span>=<span class="primary">"nav-link navb fade-in-up"</span> <span class="character">href</span>=<span class="primary">"about"</span><span class="control">&gt;</span>About<span class="control">&lt;/</span><span class="tag">a</span><span class="control">&gt;</span>'
  // +'\n      <span class="control">&lt;/</span><span class="tag">li</span><span class="control">&gt;</span>'
  // +'\n    <span class="control">&lt;/</span><span class="tag">nav</span><span class="control">&gt;</span>'
  // +'\n    <span class="control">&lt;</span><span class="tag">div</span> <span class="character">id</span>=<span class="primary">"page-build-panel"</span> <span class="character">class</span>=<span class="primary">""</span><span class="control">&gt;</span>'
  // +'\n      <span class="control">&lt;</span><span class="tag">div</span> <span class="character">id</span>=<span class="primary">"page-build"</span> <span class="character">class</span>=<span class="primary">"row"</span><span class="control">&gt;</span>'
  // +'\n        <span class="control">&lt;</span><span class="tag">a</span> <span class="character">class</span>=<span class="primary">"col-sm-1" </span><span class="character">href</span>=<span class="primary">"index.html"</span><span class="control">&gt;</span>'
  // +'\n          <span class="control">&lt;</span><span class="tag">h3</span><span class="control">&gt;</span><span class="tag">&amp;lt;</span><span class="control">&lt;/</span><span class="tag">h3</span><span class="control">&gt;</span>'
  // +'\n        <span class="control">&lt;/</span><span class="tag">a</span><span class="control">&gt;</span>'
  // +'\n        <span class="control">&lt;</span><span class="tag">h3</span> <span class="character">class</span>=<span class="primary">"col-sm-10"</span><span class="control">&gt;</span>'
  // +'\n          <span class="control">&lt;</span><span class="tag">b</span><span class="control">&gt;</span>This page is built with <span class="tag">&amp;lt;</span>/html<span class="tag">&amp;gt;</span>, CSS, <span class="tag">&amp;amp;</span> Javascript.<span class="control">&lt;/</span><span class="tag">b</span><span class="control">&gt;</span>'
  // +'\n        <span class="control">&lt;/</span><span class="tag">h3</span><span class="control">&gt;</span>'
  // +'\n        <span class="control">&lt;</span><span class="tag">a</span> <span class="character">class</span>=<span class="primary">"col-sm-1" </span><span class="character">href</span>=<span class="primary">"index.html"</span><span class="control">&gt;</span>'
  // +'\n          <span class="control">&lt;</span><span class="tag">h3</span><span class="control">&gt;</span><span class="tag">&amp;gt;</span><span class="control">&lt;/</span><span class="tag">h3</span><span class="control">&gt;</span>'
  // +'\n        <span class="control">&lt;/</span><span class="tag">a</span><span class="control">&gt;</span>'
  // +'\n      <span class="control">&lt;/</span><span class="tag">div</span><span class="control">&gt;</span>'
  // +'\n    <span class="control">&lt;/</span><span class="tag">div</span><span class="control">&gt;</span>'
  // +'\n  <span class="control">&lt;/</span><span class="tag">div</span><span class="control">&gt;</span>'
  // +'\n  <span class="control">&lt;</span><span class="tag">script</span> <span class="character">src</span>=<span class="primary">"scripts/bootstrap.js"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">script</span><span class="control">&gt;</span>'
  // +'\n<span class="control">&lt;/</span><span class="tag">body</span><span class="control">&gt;</span>'
  // +'\n<span class="control">&lt;/</span><span class="tag">html</span><span class="control">&gt;</span><span id="HTMLCursor">|</span>';

  // var javaBG = ''
  // +'\n\n<span class="tag">function</span> <span class="target">type</span>(<span class="character">code</span>, <span class="character">i</span>, <span class="character">background</span>, <span class="character">target</span>, <span class="character">blinker</span>) {'
  // +'\n  <span class="tag">var</span> <span class="character">char</span> = <span class="primary">""</span>;'
  // +'\n  <span class="tag">var</span> <span class="character">nextChar</span> = <span class="character">code</span>.<span class="target">charAt</span>(<span class="character">i</span>);'
  // +'\n  <span class="logic">if</span>(<span class="character">nextChar</span> == <span class="primary">"<"</span>) {'
  // +'\n    <span class="logic">for</span>(<span class="character">i</span>; <span class="character">code</span>.<span class="target">charAt</span>(<span class="character">i</span>) != <span class="primary">">"</span>; <span class="character">i</span>++) {'
  // +'\n      <span class="character">char</span> += <span class="character">code</span>.<span class="target">charAt</span>(<span class="character">i</span>);'
  // +'\n    }'
  // +'\n    <span class="character">char</span> += <span class="primary">">"</span>;'
  // +'\n  } <span class="logic">else</span> {'
  // +'\n    <span class="character">char</span> = <span class="character">nextChar</span>;'
  // +'\n  }'
  // +'\n  <span class="character">background</span> += <span class="character">char</span>;'
  // +'\n  <span class="character">target</span>.<span class="character">innerHTML</span> = <span class="character">background</span>+(<span class="character">char</span>==<span class="primary">"</span><span class="value">\\t</span><span class="primary">"</span>||<span class="character">char</span>==<span class="primary">"</span><span class="value">\\n</span><span class="primary">"</span>?<span class="primary">""</span>:<span class="primary">"|"</span>);'
  // +'\n  <span class="logic">if</span>(<span class="character">i</span> < <span class="character">code</span>.<span class="character">length</span>) {'
  // +'\n    <span class="target">setTimeout</span>(() <span class="tag">=></span> {'
  // +'\n      <span class="target">type</span>(<span class="character">code</span>, <span class="character">i</span>+<span class="value">1</span>, <span class="character">background</span>, <span class="character">target</span>, <span class="character">blinker</span>);'
  // +'\n    }, <span class="value">5</span>);'
  // +'\n  } <span class="logic">else</span> {'
  // +'\n    <span class="character">target</span>.<span class="character">innerHTML</span> = <span class="character">background</span>;'
  // +'\n    <span class="target">blink</span>(<span class="character">document</span>.<span class="target">getElementById</span>(<span class="character">blinker</span>));'
  // +'\n    <span class="tag">function</span> <span class="target">blink</span>(<span class="character">target</span>) {'
  // +'\n      <span class="logic">if</span> (<span class="character">target</span>.<span class="character">style</span>.<span class="character">display</span> === <span class="primary">"none"</span>) {'
  // +'\n        <span class="character">target</span>.<span class="character">style</span>.<span class="character">display</span> = <span class="primary">"inline-block"</span>;'
  // +'\n      } <span class="logic">else</span> {'
  // +'\n        <span class="character">target</span>.<span class="character">style</span>.<span class="character">display</span> = <span class="primary">"none"</span>;'
  // +'\n      }'
  // +'\n      <span class="target">setTimeout</span>(() <span class="tag">=></span> {'
  // +'\n        <span class="target">blink</span>(<span class="character">target</span>);'
  // +'\n      }, <span class="value">500</span>);'
  // +'\n    }'
  // +'\n  }'
  // +'\n}';
  
  // function type(code, i, background, target, blinker) {
  //   var char = "";
  //   var nextChar = code.charAt(i);
  //   if(nextChar == '<') {
  //     for(i; code.charAt(i) != '>'; i++) {
  //       char += code.charAt(i);
  //     }
  //     char += '>';
  //   } else {
  //     char = nextChar;
  //   }
  //   background += char;

  //   // target.append(char);//+char=="\t"||char=="\n"?"":"<span class='cursor' id='"+blinker+"'>|</span>"
  //   target.innerHTML = background+(char=="\t"||char=="\n"?"":"<span class='cursor'>|</span>");
  //   // byId(blinker).remove();
  //   if(i < code.length) {
  //     setTimeout(function() {
  //       type(code, i+1, background, target, blinker)
  //     },  Math.floor(Math.random() * 4) * Math.floor(Math.random() * 30));
  //   } else {
  //     target.innerHTML = background
  //     if(blinker == "HTMLCursor") {
  //       blink(byId(blinker))
  //       function blink(target) {
  //         if (target.style.display === "none") {
  //           target.style.display = "inline-block";
  //         } else {
  //           target.style.display = "none";
  //         }
  //         setTimeout(function() {
  //           blink(target);
  //         }, 500);
  //       }
  //     }
  //   }
  // }

  // type(cssBG,  0, "", byId("cssBG"),  "CSSCursor")
  // typ , "", byId) "JavaCursor")
  // type(htmlBG, 0, "", byId("htmlBG"), "HTMLCursor")

  // var preBlock = byId("preBlock");

