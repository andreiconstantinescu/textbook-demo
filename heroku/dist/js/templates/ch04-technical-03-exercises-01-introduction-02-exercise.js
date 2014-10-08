asyncDefine("ch04-technical-03-exercises-01-introduction-02-exercise",function(){return function(){return'<article><section><h2 id="-exercise-mixin-exercise-class"><code>+exercise</code> mixin. <code>Exercise</code> class</h2>\n<p><i class="fa fa-exclamation-triangle"></i>\nPlease read the documentation for this base class carefully as the concepts\npresented here are applied to all the exercise types.</p>\n<p>An <code>+exercise</code> can be created with no parameters or with a hashmap\nparameter that holds several optional parameters:</p>\n<ul>\n<li><em>name</em>: name for the exercise</li>\n<li><em>dontSave</em>: if truthy then the exercise is not persisted in local storage</li>\n<li><em>ignoreScore</em>: if truthy then the exercise score is ignored in computing parent score.\n  Returned score is <code>NaN</code></li>\n<li><em>ignoreKidsScore</em>: score is done as an weighed average of own\n  score and kids score (self + sum(N kids sccore)) / (N+1). If this value\n  is truthy then score ignores the kids</li>\n<li><em>ignoreAvatar</em> - if true, the exercise does not send messages and dowes not update.\nBy default, only &#39;+exercise&#39; interacts with the avatar. If you want to interact with the\navatar from a +yesno or +textline, etc., make <code>ignoreAvatar: false</code>.</li>\n</ul>\n<p>There are a few classes that are reserved for extra-goodies:</p>\n<ul>\n<li><code>.progress-box</code> - if exists, then a progress bar with the score is shown inside</li>\n<li><code>.score-box</code> - if exists, then the score (integer val) is shown</li>\n<li><p><code>.is-done-box</code> - displays &#39;...&#39; when score &lt; 100 and a checkmark if score &gt; 100</p>\n</li>\n<li><p><code>onChildChangedState (state, exercise)</code> - called when child state property changes.</p>\n</li>\n<li><code>onChildChangedScore (score, exercise)</code> - called when child score property changes.\n<strong>Sample code</strong></li>\n</ul>\n<pre><code> //- No parameters. Exercise state and score is\n //- saved, and retrieved, but cannot be accessed\n //- in other parts of the textbook\n +exercise\n   .panel.panel-info\n     .panel-heading\n       +statement\n         | Please be so kind and answer the following questions\n   .panel-body\n     .row\n       .col-md-6\n        +yesno({answer: false, name:&#39;ex01basicsYN1&#39;})\n           | Is 100 a negative number?\n       .col-md-6\n         +pickone(3, [&#39;planet&#39;, &#39;star&#39;, &#39;satellite&#39;, &#39;comet&#39;])\n           | The Moon, is a &lt;br/&gt;\n\n //- The score and other data for this exercise\n //- can be retrieved elsewhere using JavaScript\n //- var ex03_01b = Exercises.getAttributesByName(&#39;Ch03Ex01B&#39;)\n //- var score = ex03_01b &amp;&amp; ex03_01b.score;\n //-\n //- Also, because it has a name, it can be styled:\n //- This is the styling entry in `master.styl`\n //-  .ex01basicsYN1\n //-    .buttons\n //-      width: 10em\n\n +exercise\n    .panel.panel-info\n      .panel-heading\n        +statement\n          | Please be so kind and answer the following questions\n    .panel-body\n      .row\n        .col-md-6\n         +yesno({answer: false, name:&#39;ex01basicsYN1&#39;})\n            | Is 100 a negative number?\n        .col-md-6\n          +pickone(3, [&#39;planet&#39;, &#39;star&#39;, &#39;satellite&#39;, &#39;commet&#39;])\n            | The Moon, is a &lt;br/&gt;\n\n +exercise({name: &#39;Ch03Ex01B&#39;})\n    .progress-box\n\n    +statement\n      p Please tap or click on the even numbers below:\n      .score-box\n    +select-to-highlight\n      .btn-group\n        button.btn.btn-default.good 2232\n        button.btn.btn-default.bad 7787\n        button.btn.btn-default.bad 10123\n        button.btn.btn-default.good 20\n    .is-done-box</code></pre>\n<p><strong>Rendered exercise</strong></p>\n</section><script>var ex_1299893610 = Exercises.push(new Exercises.Exercise(1299893610, \'\'));\n</script><div id="ex_1299893610" class="exercise"><div class="panel panel-info"><div class="panel-heading"><div class="statement">Please be so kind and answer the following questions</div></div></div><div class="panel-body"><div class="row"><div class="col-md-6"><script>var ex_1619681116 = Exercises.push(new Exercises.YesNo(1619681116, \'{"answer":false,"name":"ex01basicsYN1"}\'));\n</script><div id="ex_1619681116" class="yesno"><div class="block">Is 100 a negative number?</div><div class="buttons btn-group btn-group-justified"><div class="btn btn-default yes"></div><div class="btn btn-default no"></div></div></div><script>Exercises.pop();</script></div><div class="col-md-6"><script>var ex_624989642 = Exercises.push(new Exercises.PickOne(624989642, \'{"answer":3,"choices":["planet","star","satellite","commet"]}\'));\n</script><div id="ex_624989642" class="pickone">The Moon, is a <br/><div class="choices-container"><div class="choices btn-group"></div></div></div><script>Exercises.pop();</script></div></div></div></div><script>Exercises.pop();</script><script>var ex_561436326 = Exercises.push(new Exercises.Exercise(561436326, \'{"name":"Ch03Ex01B"}\'));\n</script><div id="ex_561436326" class="exercise"><div class="progress-box"></div><div class="statement"><p>Please tap or click on the even numbers below:</p><div class="score-box"></div></div><script>var ex_503374433 = Exercises.push(new Exercises.SelectToHighlight(503374433, \'\'));\n</script><div id="ex_503374433" class="select-to-highlight"><div class="btn-group"><button class="btn btn-default good">2232</button><button class="btn btn-default bad">7787</button><button class="btn btn-default bad">10123</button><button class="btn btn-default good">20</button></div></div><script>Exercises.pop();</script><div class="is-done-box"></div></div><script>Exercises.pop();</script></article>'}});