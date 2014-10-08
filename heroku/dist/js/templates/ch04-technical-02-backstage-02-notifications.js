asyncDefine("ch04-technical-02-backstage-02-notifications",function(){return function(){return'<article><section><h1 id="the-notification-system-developers-">The notification system (developers)</h1>\n<p>API:</p>\n<pre><code class="lang-javascript">App.trigger(&#39;notify&#39;, string[, options]);</code></pre>\n<p>Available options are:</p>\n<ul>\n<li><code>info</code>: string, some secondary information to display under the message title</li>\n<li><code>icon</code>: a string of font-awesome classes (without the iniftial <code>fa</code> class)</li>\n<li><code>sound</code>: path to an audio file</li>\n<li><code>silent</code>: boolean. If true, will cause the notification to go straight to the backstage notification centre</li>\n<li><code>url</code>: navigate a user to this URL when he clicks on the notification in the notification centre</li>\n<li><code>autoHideDelay</code>: integer. Defaults to 3000; How much time notifications should appear in the upper right corner before they get dismissed</li>\n<li><code>persistence</code>: boolean. Defaults to true; whether notifications should also appear in the notificarion centre</li>\n<li><code>$anchor</code>: jQuery DOM element to which to attach</li>\n</ul>\n<p>Some interactive examples:</p>\n<div class="row"><div class="col-sm-2"><div id="say" class="btn btn-default btn-block">Simple.</div></div><div class="col-sm-10"><pre><code class="lang-javascript">// Simple.\nApp.trigger(&#39;notify&#39;, &#39;Hello!&#39;);</code></pre>\n</div></div><div class="row"><div class="col-sm-2"><div id="aha" class="btn btn-default btn-block">Star.</div></div><div class="col-sm-10"><pre><code class="lang-javascript">// With external sound, not shown in the top right, and with URL.\nApp.trigger(&#39;notify&#39;, &#39;You earned a bonus star!&#39;, {\n  info: &#39;Well done, 10/10.&#39;,\n  icon: &#39;fa-star&#39;,\n  sound: &#39;http://buzz.jaysalvat.com/demo/sounds/win.mp3&#39;,\n  silent: true,\n  url: &#39;01-backstage-02-notifications&#39;\n});</code></pre>\n</div></div><div class="row"><div class="col-sm-2"><div id="bravo" class="btn btn-default btn-block">Bravo!</div></div><div class="col-sm-10"><pre><code class="lang-javascript">// With info, icon and sound.\nApp.trigger(&#39;notify&#39;, &#39;Bravo, bravo!&#39;, {\n  info: &#39;Te-ai descurcat excelent. Și ai făcut-o pe Miruna fericită&#39;,\n  icon: &#39;fa-play&#39;,\n  sound: &#39;audio/bravo_bravo.mp3&#39;\n});</code></pre>\n</div></div><script>$(\'#say\').click(function (){\n  App.trigger(\'notify\', \'Hello!\');\n});\n$(\'#aha\').click(function (){\n  App.trigger(\'notify\', \'You earned a bonus star!\', {\n    info: \'Well done, 10/10.\',\n    icon: \'fa-star\',\n    sound: \'http://buzz.jaysalvat.com/demo/sounds/win.mp3\',\n    silent: true,\n    url: \'01-backstage-02-notifications\'\n  });\n});\n$(\'#bravo\').click(function (){\n  App.trigger(\'notify\', \'Bravo, bravo!\', {\n    info: \'Te-ai descurcat excelent. Și ai făcut-o pe Miruna fericită\',\n    icon: \'fa-play\',\n    sound: \'audio/bravo_bravo.mp3\'\n  });\n});</script></section></article>'}});