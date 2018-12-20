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

  var htmlString  = ''
  +'\n<!DOCTYPE html>'
  + '\n'
  + '\n'
  + '\n<html>'
  + '\n  <head>'
  + '\n    <title>Natecbd</title>'
  + '\n    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">'
  + '\n'
  + '\n    <link rel="stylesheet" type="text/css" href="styles/index.css">'
  + '\n    <link rel="stylesheet" type="text/css" href="styles/nav.css">'
  + '\n    <link rel="stylesheet" type="text/css" href="styles/background.css">'
  + '\n    <link rel="stylesheet" type="text/css" href="styles/normalize.css">'
  + '\n  </head>'
  + '\n  <body>'
  + '\n    <div class="bg">'
  + '\n      <div id="preBlock">'
  + '\n        <pre class="inline" id="cssBG"></pre>'
  + '\n        <pre class="inline" id="javaBG"></pre>'
  + '\n        <pre class="inline" id="htmlBG"></pre>'
  + '\n      </div>'
  + '\n      <nav class="nav-bar">'
  + '\n        <li class="nav-item hvr-underline-reveal">'
  + '\n          <div id="contactBtn">'
  + '\n            <span class="nav-link navc fade-in-up">Contact</span>'
  + '\n          </div>'
  + '\n        </li>'
  + '\n        <li class="nav-item hvr-underline-reveal">'
  + '\n          <div id="aboutBtn">'
  + '\n            <span class="nav-link navb fade-in-up">About</span>'
  + '\n          </div>'
  + '\n        </li>'
  + '\n      </nav>'
  + '\n'
  + '\n      <div id="contactModal" class="CSSmodal">'
  + '\n        <h3 class="CSSmodal-content">'
  + '\n          e-mail: <a href="mailto:natecbd@gmail.com">natecbd@gmail.com</a> / github: <a href="http://www.github.com/natecbd">natecbd</a> / twitter: <a href="http://www.twitter.com/natecbd">natecbd</a>'
  + '\n        </h3>'
  + '\n      </div>'
  + '\n'
  + '\n      <div id="aboutModal" class="CSSmodal">'
  + '\n        <h3 class="CSSmodal-content">'
  + '\n          Name: Nathan Goodman / Occupation: Web Developer / Location: Seattle, WA '
  + '\n        </h3>'
  + '\n      </div>'
  + '\n'
  + '\n      <div id="page-build-panel" class="center-screen"></div>'
  + '\n    </div>'
  + '\n    <script src="scripts/app.js"></script>'
  + '\n  </body>'
  + '\n</html>'
  
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
  +'\n  logicHTML'
  +'\n);'
  +'\ntype('
  +'\n  0,'
  +'\n  byId("cssBG"),'
  +'\n  cssString,'
  +'\n  {control:buildTarget,isInt:false,inVal:false,inBlock:false},'
  +'\n  "cssCursor",'
  +'\n  logicCSS'
  +'\n);'
  +'\n'
  +'\ntype('
  +'\n  0,'
  +'\n  byId("javaBG"),'
  +'\n  jsString,'
  +'\n  {control:buildTag},'
  +'\n  "javaCursor",'
  +'\n  logicJava'
  +'\n);'


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
  
  function logicCSS (j, g, s, o) {
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

  function logicJava(j, g, s, o) {
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

  function logicHTML (j, g, s, o) {
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
    vars = colorFunction(j, preTag, text, vars);
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
    logicHTML
  );
  type(
    0,
    byId("cssBG"),
    cssString,
    {control:buildTarget,isInt:false,inVal:false,inBlock:false},
    "cssCursor",
    logicCSS
  );

  type(
    0,
    byId("javaBG"),
    jsString,
    {control:buildTag},
    "javaCursor",
    logicJava
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
