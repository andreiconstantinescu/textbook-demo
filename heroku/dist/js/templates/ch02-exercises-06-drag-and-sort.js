asyncDefine("ch02-exercises-06-drag-and-sort",function(){return function(){return'<article><section><div class="text"><h1 id="sorting-exercises">Sorting Exercises</h1>\n<p>This is an exercise type which requires the user to sort some elements in a sequence according to requested criteria (alphabetical, size, age, number of letters, etc.). The sort is done either horizontally or vertically and is done by dragging and dropping the elements. The feedback is available immediately, except the cases where the authors decided to disable the feedback on purpose.</p>\n<p>Elements can be images, letters, words or text fragments.</p>\n<p>Try it for yourself here:</p>\n</div><script>var ex_792855477 = Exercises.push(new Exercises.Exercise(792855477, \'{"name":"help06-1"}\'));\n</script><div id="ex_792855477" class="exercise"><div class="progress-box"></div><div class="score-box"></div><div class="is-done-box"></div><b>Order the numbers from the lowest to the highest:</b><script>var ex_23728510 = Exercises.push(new Exercises.DragAndSort(23728510, \'{"name":"help06-1-1","scoreByRelativeOrder":true}\'));\n</script><div id="ex_23728510" class="drag-and-sort"><span data-index=\'50\' class="item">50</span><span data-index=\'40\' class="item">40</span><span data-index=\'30\' class="item">30</span><span data-index=\'20\' class="item">20</span><span data-index=\'10\' class="item">10</span><div class="score-box"></div></div><script>Exercises.pop();</script><div class="clearfix"></div><br/><b>Sort the planets from nearest to furthest from the Sun:</b><script>var ex_1172257028 = Exercises.push(new Exercises.DragAndSort(1172257028, \'{"name":"help06-1-2"}\'));\n</script><div id="ex_1172257028" class="drag-and-sort"><ul class="items"><li data-index="7" class="item">Saturn</li><li data-index="2" class="item">Venus</li><li data-index="8" class="item">Uranus</li><li data-index="4" class="item">Mars</li><li data-index="9" class="item">Neptune</li><li data-index="3" class="item">Earth</li><li data-index="1" class="item">Mercury</li></ul></div><script>Exercises.pop();</script></div><script>Exercises.pop();</script></section></article>'}});