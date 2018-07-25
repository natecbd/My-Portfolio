window.onload = function(){
  var cssBG = '\n\n\t<span class="target">a </span>{'
      cssBG +='\n\t  <span class="character">text-decoration</span>: <span class="primary">none</span> ;'
      cssBG +='\n\t}'
      cssBG +='\n\t'
      cssBG +='\n\t<span class="target">.nav-bar</span> {'
      cssBG +='\n\t  <span class="character">position</span>: <span class="primary">fixed</span>;'
      cssBG +='\n\t  <span class="character">z-index</span>: <span class="value">999</span>;'
      cssBG +='\n\t  <span class="character">top</span>: <span class="value">0%</span>;'
      cssBG +='\n\t  <span class="character">width</span>: <span class="value">100%</span>;'
      cssBG +='\n\t  <span class="character">height</span>: <span class="value">70px</span>;'
      cssBG +='\n\t  <span class="character">list-style-type</span>: <span class="primary">none</span>;'
      cssBG +='\n\t  <span class="character">margin</span>: <span class="value">0</span>;'
      cssBG +='\n\t  <span class="character">padding</span>: <span class="value">0</span>;'
      cssBG +='\n\t  <span class="character">overflow</span>: <span class="primary">hidden</span>;'
      cssBG +='\n\t  <span class="character">-webkit-user-select</span>: <span class="primary">none</span>;'
      cssBG +='\n\t  <span class="character">   -moz-user-select</span>: <span class="primary">none</span>;'
      cssBG +='\n\t  <span class="character">    -ms-user-select</span>: <span class="primary">none</span>;'
      cssBG +='\n\t  <span class="character">        user-select</span>: <span class="primary">none</span>;'
      cssBG +='\n\t}'
      cssBG +='\n\t'
      cssBG +='\n\t<span class="target">.nav-item</span> {'
      cssBG +='\n\t  <span class="character">float</span>: <span class="primary">right</span>;'
      cssBG +='\n\t  <span class="character">text-align</span>: <span class="primary">left</span>;'
      cssBG +='\n\t  <span class="character">vertical-align</span>: <span class="primary">middle</span>;'
      cssBG +='\n\t  <span class="character">line-height</span>: <span class="value">350%</span>;'
      cssBG +='\n\t  <span class="character">font-size</span>: <span class="value">20px</span>;'
      cssBG +='\n\t  <span class="character">height</span>: <span class="value">70px</span>;'
      cssBG +='\n\t  <span class="character">margin-left</span>: <span class="value">30px</span>;'
      cssBG +='\n\t  <span class="character">margin-right</span>: <span class="value">30px</span>;'
      cssBG +='\n\t}'
      cssBG +='\n\t'
      cssBG +='\n\t<span class="target">.nav-link</span> {'
      cssBG +='\n\t  <span class="character">font-weight</span>: <span class="primary">bold</span>;'
      cssBG +='\n\t  <span class="character">display</span>: <span class="primary">inline-block</span>;'
      cssBG +='\n\t  <span class="character">text-decoration</span>: <span class="primary">none</span>;'
      cssBG +='\n\t  <span class="character">text-transform</span>: <span class="primary">capitalize</span>;'
      cssBG +='\n\t}'
      cssBG +='\n\t'
      cssBG +='\n\t<span class="target">.navb, .navc</span> {'
      cssBG +='\n\t  <span class="character">opacity</span>: <span class="value">0</span>;'
      cssBG +='\n\t  <span class="character">color</span>: <span class="primary">white</span>;'
      cssBG +='\n\t  <span class="character">-webkit-animation-duration</span>: <span class="value">.75s</span>;'
      cssBG +='\n\t  <span class="character">   -moz-animation-duration</span>: <span class="value">.75s</span>;'
      cssBG +='\n\t  <span class="character">     -o-animation-duration</span>: <span class="value">.75s</span>;'
      cssBG +='\n\t  <span class="character">        animation-duration</span>: <span class="value">.75s</span>;'
      cssBG +='\n\t  <span class="character">-webkit-animation-fill-mode</span>: <span class="primary">forwards</span>;'
      cssBG +='\n\t  <span class="character">   -moz-animation-fill-mode</span>: <span class="primary">forwards</span>;'
      cssBG +='\n\t  <span class="character">     -o-animation-fill-mode</span>: <span class="primary">forwards</span>;'
      cssBG +='\n\t  <span class="character">        animation-fill-mode</span>: <span class="primary">forwards</span>;'
      cssBG +='\n\t}'

  var htmlBG = '\n\n<span class="control">&lt;!</span>DOCTYPE html<span class="control">&gt;</span>'
      htmlBG +='\n'
      htmlBG +='\n'
      htmlBG +='\n<span class="control">&lt;</span><span class="tag">html</span><span class="control">&gt;</span>'
      htmlBG +='\n<span class="control">&lt;</span><span class="tag">head</span><span class="control">&gt;</span>'
      htmlBG +='\n  <span class="control">&lt;</span><span class="tag">title</span><span class="control">&gt;</span>Natecbd<span class="control">&lt;/</span><span class="tag">title</span><span class="control">&gt;</span>'
      htmlBG +='\n  <span class="control">&lt;</span><span class="tag">meta</span> <span class="character">name</span>=<span class="primary">"viewport"</span> <span class="character">content</span>=<span class="primary">"width=device-width, initial-scale=1, user-scalable=no"</span><span class="control">&gt;</span>'
      htmlBG +='\n  '
      htmlBG +='\n  <span class="control">&lt;</span><span class="tag">link</span> <span class="character">rel</span>=<span class="primary">"stylesheet"</span> <span class="character">type</span>=<span class="primary">"text/css"</span><span class="character"> href</span>=<span class="primary">"styles/nav.css"</span><span class="control">&gt;</span>'
      htmlBG +='\n  <span class="control">&lt;</span><span class="tag">link</span> <span class="character">rel</span>=<span class="primary">"stylesheet"</span> <span class="character">type</span>=<span class="primary">"text/css"</span> <span class="character">href</span>=<span class="primary">"styles/index.css"</span><span class="control">&gt;</span>'
      htmlBG +='\n  <span class="control">&lt;</span><span class="tag">link</span> <span class="character">rel</span>=<span class="primary">"stylesheet"</span> <span class="character">type</span>=<span class="primary">"text/css"</span> <span class="character">href</span>=<span class="primary">"styles/normalize.css"</span><span class="control">&gt;</span>'
      htmlBG +='\n  <span class="control">&lt;</span><span class="tag">link</span> <span class="character">rel</span>=<span class="primary">"stylesheet"</span> <span class="character">type</span>=<span class="primary">"text/css"</span> <span class="character">href</span>=<span class="primary">"styles/background.css"</span><span class="control">&gt;</span>'
      htmlBG +='\n<span class="control">&lt;/</span><span class="tag">head</span><span class="control">&gt;</span>'
      htmlBG +='\n<span class="control">&lt;</span><span class="tag">body</span><span class="control">&gt;</span>'
      htmlBG +='\n  <span class="control">&lt;</span><span class="tag">div</span> <span class="character">class</span>=<span class="primary">"bg"</span><span class="control">&gt;</span>'
      htmlBG +='\n    <span class="control">&lt;</span><span class="tag">span</span> <span class="character">class</span>=<span class="primary">"row"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">span</span><span class="control">&gt;</span>'
      htmlBG +='\n    <span class="control">&lt;</span><span class="tag">pre</span> <span class="character">id</span>=<span class="primary">"cssBG"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">pre</span><span class="control">&gt;</span>'
      htmlBG +='\n    <span class="control">&lt;</span><span class="tag">pre</span> <span class="character">id</span>=<span class="primary">"htmlBG"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">pre</span><span class="control">&gt;</span>'
      htmlBG +='\n    <span class="control">&lt;</span><span class="tag">pre</span> <span class="character">id</span>=<span class="primary">"jsBG"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">pre</span><span class="control">&gt;</span>'
      htmlBG +='\n    <span class="control">&lt;</span><span class="tag">nav</span> <span class="character">class</span>=<span class="primary">"nav-bar"</span><span class="control">&gt;</span>'
      htmlBG +='\n      <span class="control">&lt;</span><span class="tag">li</span> <span class="character">class</span>=<span class="primary">"nav-item hvr-underline-reveal"</span><span class="control">&gt;</span>'
      htmlBG +='\n        <span class="control">&lt;</span><span class="tag">a</span> <span class="character">class</span>=<span class="primary">"nav-link navc fade-in-up"</span> <span class="character">href</span>=<span class="primary">"contact"</span><span class="control">&gt;</span>Contact<span class="control">&lt;/</span><span class="tag">a</span><span class="control">&gt;</span>'
      htmlBG +='\n      <span class="control">&lt;/</span><span class="tag">li</span><span class="control">&gt;</span>'
      htmlBG +='\n      <span class="control">&lt;</span><span class="tag">li</span> <span class="character">class</span>=<span class="primary">"nav-item hvr-underline-reveal"</span><span class="control">&gt;</span>'
      htmlBG +='\n        <span class="control">&lt;</span><span class="tag">a</span> <span class="character">class</span>=<span class="primary">"nav-link navb fade-in-up"</span> <span class="character">href</span>=<span class="primary">"about"</span><span class="control">&gt;</span>About<span class="control">&lt;/</span><span class="tag">a</span><span class="control">&gt;</span>'
      htmlBG +='\n      <span class="control">&lt;/</span><span class="tag">li</span><span class="control">&gt;</span>'
      htmlBG +='\n    <span class="control">&lt;/</span><span class="tag">nav</span><span class="control">&gt;</span>'
      htmlBG +='\n    <span class="control">&lt;</span><span class="tag">div</span> <span class="character">id</span>=<span class="primary">"page-build-panel"</span> <span class="character">class</span>=<span class="primary">""</span><span class="control">&gt;</span>'
      htmlBG +='\n      <span class="control">&lt;</span><span class="tag">div</span> <span class="character">id</span>=<span class="primary">"page-build"</span> <span class="character">class</span>=<span class="primary">"row"</span><span class="control">&gt;</span>'
      htmlBG +='\n        <span class="control">&lt;</span><span class="tag">a</span> <span class="character">class</span>=<span class="primary">"col-sm-1" </span><span class="character">href</span>=<span class="primary">"index.html"</span><span class="control">&gt;</span>'
      htmlBG +='\n          <span class="control">&lt;</span><span class="tag">h3</span><span class="control">&gt;</span><span class="tag">&amp;lt;</span><span class="control">&lt;/</span><span class="tag">h3</span><span class="control">&gt;</span>'
      htmlBG +='\n        <span class="control">&lt;/</span><span class="tag">a</span><span class="control">&gt;</span>'
      htmlBG +='\n        <span class="control">&lt;</span><span class="tag">h3</span> <span class="character">class</span>=<span class="primary">"col-sm-10"</span><span class="control">&gt;</span>'
      htmlBG +='\n          <span class="control">&lt;</span><span class="tag">b</span><span class="control">&gt;</span>This page is built with <span class="tag">&amp;lt;</span>/html<span class="tag">&amp;gt;</span>, CSS, <span class="tag">&amp;amp;</span> Javascript.<span class="control">&lt;/</span><span class="tag">b</span><span class="control">&gt;</span>'
      htmlBG +='\n        <span class="control">&lt;/</span><span class="tag">h3</span><span class="control">&gt;</span>'
      htmlBG +='\n        <span class="control">&lt;</span><span class="tag">a</span> <span class="character">class</span>=<span class="primary">"col-sm-1" </span><span class="character">href</span>=<span class="primary">"index.html"</span><span class="control">&gt;</span>'
      htmlBG +='\n          <span class="control">&lt;</span><span class="tag">h3</span><span class="control">&gt;</span><span class="tag">&amp;gt;</span><span class="control">&lt;/</span><span class="tag">h3</span><span class="control">&gt;</span>'
      htmlBG +='\n        <span class="control">&lt;/</span><span class="tag">a</span><span class="control">&gt;</span>'
      htmlBG +='\n      <span class="control">&lt;/</span><span class="tag">div</span><span class="control">&gt;</span>'
      htmlBG +='\n    <span class="control">&lt;/</span><span class="tag">div</span><span class="control">&gt;</span>'
      htmlBG +='\n  <span class="control">&lt;/</span><span class="tag">div</span><span class="control">&gt;</span>'
      htmlBG +='\n  <span class="control">&lt;</span><span class="tag">script</span> <span class="character">src</span>=<span class="primary">"scripts/bootstrap.js"</span><span class="control">&gt;</span><span class="control">&lt;/</span><span class="tag">script</span><span class="control">&gt;</span>'
      htmlBG +='\n<span class="control">&lt;/</span><span class="tag">body</span><span class="control">&gt;</span>'
      htmlBG +='\n<span class="control">&lt;/</span><span class="tag">html</span><span class="control">&gt;</span><span id="HTMLCursor">|</span>'

  var javaBG = '\n\n<span class="tag">function</span> <span class="target">type</span>(<span class="character">code</span>, <span class="character">i</span>, <span class="character">background</span>, <span class="character">target</span>, <span class="character">blinker</span>) {'
      javaBG +='\n  <span class="tag">var</span> <span class="character">char</span> = <span class="primary">""</span>;'
      javaBG +='\n  <span class="tag">var</span> <span class="character">nextChar</span> = <span class="character">code</span>.<span class="target">charAt</span>(<span class="character">i</span>);'
      javaBG +='\n  <span class="logic">if</span>(<span class="character">nextChar</span> == <span class="primary">"<"</span>) {'
      javaBG +='\n    <span class="logic">for</span>(<span class="character">i</span>; <span class="character">code</span>.<span class="target">charAt</span>(<span class="character">i</span>) != <span class="primary">">"</span>; <span class="character">i</span>++) {'
      javaBG +='\n      <span class="character">char</span> += <span class="character">code</span>.<span class="target">charAt</span>(<span class="character">i</span>);'
      javaBG +='\n    }'
      javaBG +='\n    <span class="character">char</span> += <span class="primary">">"</span>;'
      javaBG +='\n  } <span class="logic">else</span> {'
      javaBG +='\n    <span class="character">char</span> = <span class="character">nextChar</span>;'
      javaBG +='\n  }'
      javaBG +='\n  <span class="character">background</span> += <span class="character">char</span>;'
      javaBG +='\n  <span class="character">target</span>.<span class="character">innerHTML</span> = <span class="character">background</span>+(<span class="character">char</span>==<span class="primary">"</span><span class="value">\\t</span><span class="primary">"</span>||<span class="character">char</span>==<span class="primary">"</span><span class="value">\\n</span><span class="primary">"</span>?<span class="primary">""</span>:<span class="primary">"|"</span>);'
      javaBG +='\n  <span class="logic">if</span>(<span class="character">i</span> < <span class="character">code</span>.<span class="character">length</span>) {'
      javaBG +='\n    <span class="target">setTimeout</span>(() <span class="tag">=></span> {'
      javaBG +='\n      <span class="target">type</span>(<span class="character">code</span>, <span class="character">i</span>+<span class="value">1</span>, <span class="character">background</span>, <span class="character">target</span>, <span class="character">blinker</span>);'
      javaBG +='\n    }, <span class="value">5</span>);'
      javaBG +='\n  } <span class="logic">else</span> {'
      javaBG +='\n    <span class="character">target</span>.<span class="character">innerHTML</span> = <span class="character">background</span>;'
      javaBG +='\n    <span class="target">blink</span>(<span class="character">document</span>.<span class="target">getElementById</span>(<span class="character">blinker</span>));'
      javaBG +='\n    <span class="tag">function</span> <span class="target">blink</span>(<span class="character">target</span>) {'
      javaBG +='\n      <span class="logic">if</span> (<span class="character">target</span>.<span class="character">style</span>.<span class="character">display</span> === <span class="primary">"none"</span>) {'
      javaBG +='\n        <span class="character">target</span>.<span class="character">style</span>.<span class="character">display</span> = <span class="primary">"inline-block"</span>;'
      javaBG +='\n      } <span class="logic">else</span> {'
      javaBG +='\n        <span class="character">target</span>.<span class="character">style</span>.<span class="character">display</span> = <span class="primary">"none"</span>;'
      javaBG +='\n      }'
      javaBG +='\n      <span class="target">setTimeout</span>(() <span class="tag">=></span> {'
      javaBG +='\n        <span class="target">blink</span>(<span class="character">target</span>);'
      javaBG +='\n      }, <span class="value">500</span>);'
      javaBG +='\n    }'
      javaBG +='\n  }'
      javaBG +='\n}'
  
  function type(code, i, background, target, blinker) {
    var char = "";
    var nextChar = code.charAt(i)
    if(nextChar == '<') {
      for(i; code.charAt(i) != '>'; i++) {
        char += code.charAt(i)
      }
      char += '>';
    } else {
      char = nextChar;
    }
    background += char;

    target.innerHTML = background+(char=="\t"||char=="\n"?"":"|");
    if(i < code.length) {
      setTimeout(() => {
        type(code, i+1, background, target, blinker)
      }, 5);
    } else {
      target.innerHTML = background
      if(blinker == "HTMLCursor") {
        blink(document.getElementById(blinker))
        function blink(target) {
          if (target.style.display === "none") {
            target.style.display = "inline-block";
          } else {
            target.style.display = "none";
          }
          setTimeout(() => {
            blink(target);
          }, 500);
        }
      }
    }
  }
  
  type(cssBG, 0, "", document.getElementById("cssBG"), "CSSCursor")
  type(htmlBG, 0, "", document.getElementById("htmlBG"), "HTMLCursor")
  type(javaBG, 0, "", document.getElementById("javaBG"), "JavaCursor")
}
