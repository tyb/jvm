import{_ as e,o as a,c as l,d as r}from"./app.a27ed2d4.js";const i={},o=r('<h1 id="hotspot-\u5783\u573E\u6536\u96C6\u5668" tabindex="-1"><a class="header-anchor" href="#hotspot-\u5783\u573E\u6536\u96C6\u5668" aria-hidden="true">#</a> HotSpot \u5783\u573E\u6536\u96C6\u5668</h1><p>HotSpot \u865A\u62DF\u673A\u63D0\u4F9B\u4E86\u591A\u79CD\u5783\u573E\u6536\u96C6\u5668\uFF0C\u6BCF\u79CD\u6536\u96C6\u5668\u90FD\u6709\u5404\u81EA\u7684\u7279\u70B9\uFF0C\u867D\u7136\u6211\u4EEC\u8981\u5BF9\u5404\u4E2A\u6536\u96C6\u5668\u8FDB\u884C\u6BD4\u8F83\uFF0C\u4F46\u5E76\u975E\u4E3A\u4E86\u6311\u9009\u51FA\u4E00\u4E2A\u6700\u597D\u7684\u6536\u96C6\u5668\u3002\u6211\u4EEC\u9009\u62E9\u7684\u53EA\u662F\u5BF9\u5177\u4F53\u5E94\u7528\u6700\u5408\u9002\u7684\u6536\u96C6\u5668\u3002</p><h2 id="\u65B0\u751F\u4EE3\u5783\u573E\u6536\u96C6\u5668" tabindex="-1"><a class="header-anchor" href="#\u65B0\u751F\u4EE3\u5783\u573E\u6536\u96C6\u5668" aria-hidden="true">#</a> \u65B0\u751F\u4EE3\u5783\u573E\u6536\u96C6\u5668</h2><h3 id="serial-\u5783\u573E\u6536\u96C6\u5668-\u5355\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#serial-\u5783\u573E\u6536\u96C6\u5668-\u5355\u7EBF\u7A0B" aria-hidden="true">#</a> Serial \u5783\u573E\u6536\u96C6\u5668\uFF08\u5355\u7EBF\u7A0B\uFF09</h3><p>\u53EA\u5F00\u542F<strong>\u4E00\u6761</strong> GC \u7EBF\u7A0B\u8FDB\u884C\u5783\u573E\u56DE\u6536\uFF0C\u5E76\u4E14\u5728\u5783\u573E\u6536\u96C6\u8FC7\u7A0B\u4E2D\u505C\u6B62\u4E00\u5207\u7528\u6237\u7EBF\u7A0B\uFF0C\u5373 Stop The World\u3002</p><p>\u4E00\u822C\u5BA2\u6237\u7AEF\u5E94\u7528\u6240\u9700\u5185\u5B58\u8F83\u5C0F\uFF0C\u4E0D\u4F1A\u521B\u5EFA\u592A\u591A\u5BF9\u8C61\uFF0C\u800C\u4E14\u5806\u5185\u5B58\u4E0D\u5927\uFF0C\u56E0\u6B64\u5783\u573E\u6536\u96C6\u5668\u56DE\u6536\u65F6\u95F4\u77ED\uFF0C\u5373\u4F7F\u5728\u8FD9\u6BB5\u65F6\u95F4\u505C\u6B62\u4E00\u5207\u7528\u6237\u7EBF\u7A0B\uFF0C\u4E5F\u4E0D\u4F1A\u611F\u89C9\u660E\u663E\u5361\u987F\u3002\u56E0\u6B64 Serial \u5783\u573E\u6536\u96C6\u5668<strong>\u9002\u5408\u5BA2\u6237\u7AEF</strong>\u4F7F\u7528\u3002</p><p>\u7531\u4E8E Serial \u6536\u96C6\u5668\u53EA\u4F7F\u7528\u4E00\u6761 GC \u7EBF\u7A0B\uFF0C\u907F\u514D\u4E86\u7EBF\u7A0B\u5207\u6362\u7684\u5F00\u9500\uFF0C\u4ECE\u800C\u7B80\u5355\u9AD8\u6548\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/serial.png" alt="Serial"></p><h3 id="parnew-\u5783\u573E\u6536\u96C6\u5668-\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#parnew-\u5783\u573E\u6536\u96C6\u5668-\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> ParNew \u5783\u573E\u6536\u96C6\u5668\uFF08\u591A\u7EBF\u7A0B\uFF09</h3><p>ParNew \u662F Serial \u7684\u591A\u7EBF\u7A0B\u7248\u672C\u3002\u7531\u591A\u6761 GC \u7EBF\u7A0B\u5E76\u884C\u5730\u8FDB\u884C\u5783\u573E\u6E05\u7406\u3002\u4F46\u6E05\u7406\u8FC7\u7A0B\u4F9D\u7136\u9700\u8981 Stop The World\u3002</p><p>ParNew \u8FFD\u6C42\u201C<strong>\u4F4E\u505C\u987F\u65F6\u95F4</strong>\u201D,\u4E0E Serial \u552F\u4E00\u533A\u522B\u5C31\u662F\u4F7F\u7528\u4E86\u591A\u7EBF\u7A0B\u8FDB\u884C\u5783\u573E\u6536\u96C6\uFF0C\u5728\u591A CPU \u73AF\u5883\u4E0B\u6027\u80FD\u6BD4 Serial \u4F1A\u6709\u4E00\u5B9A\u7A0B\u5EA6\u7684\u63D0\u5347\uFF1B\u4F46<strong>\u7EBF\u7A0B\u5207\u6362\u9700\u8981\u989D\u5916\u7684\u5F00\u9500</strong>\uFF0C\u56E0\u6B64\u5728\u5355 CPU \u73AF\u5883\u4E2D\u8868\u73B0\u4E0D\u5982 Serial\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/parnew.png" alt="ParNew"></p><h3 id="parallel-scavenge-\u5783\u573E\u6536\u96C6\u5668-\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#parallel-scavenge-\u5783\u573E\u6536\u96C6\u5668-\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> Parallel Scavenge \u5783\u573E\u6536\u96C6\u5668\uFF08\u591A\u7EBF\u7A0B\uFF09</h3><p>Parallel Scavenge \u548C ParNew \u4E00\u6837\uFF0C\u90FD\u662F\u591A\u7EBF\u7A0B\u3001\u65B0\u751F\u4EE3\u5783\u573E\u6536\u96C6\u5668\u3002\u4F46\u662F\u4E24\u8005\u6709\u5DE8\u5927\u7684\u4E0D\u540C\u70B9\uFF1A</p><ul><li>Parallel Scavenge\uFF1A\u8FFD\u6C42 CPU \u541E\u5410\u91CF\uFF0C\u80FD\u591F\u5728\u8F83\u77ED\u65F6\u95F4\u5185\u5B8C\u6210\u6307\u5B9A\u4EFB\u52A1\uFF0C\u56E0\u6B64\u9002\u5408\u6CA1\u6709\u4EA4\u4E92\u7684\u540E\u53F0\u8BA1\u7B97\u3002</li><li>ParNew\uFF1A\u8FFD\u6C42\u964D\u4F4E\u7528\u6237\u505C\u987F\u65F6\u95F4\uFF0C\u9002\u5408\u4EA4\u4E92\u5F0F\u5E94\u7528\u3002</li></ul><p><code>\u541E\u5410\u91CF = \u8FD0\u884C\u7528\u6237\u4EE3\u7801\u65F6\u95F4 / (\u8FD0\u884C\u7528\u6237\u4EE3\u7801\u65F6\u95F4 + \u5783\u573E\u6536\u96C6\u65F6\u95F4)</code></p><p>\u8FFD\u6C42\u9AD8\u541E\u5410\u91CF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u51CF\u5C11 GC \u6267\u884C\u5B9E\u9645\u5DE5\u4F5C\u7684\u65F6\u95F4\uFF0C\u7136\u800C\uFF0C\u4EC5\u4EC5\u5076\u5C14\u8FD0\u884C GC \u610F\u5473\u7740\u6BCF\u5F53 GC \u8FD0\u884C\u65F6\u5C06\u6709\u8BB8\u591A\u5DE5\u4F5C\u8981\u505A\uFF0C\u56E0\u4E3A\u5728\u6B64\u671F\u95F4\u79EF\u7D2F\u5728\u5806\u4E2D\u7684\u5BF9\u8C61\u6570\u91CF\u5F88\u9AD8\u3002\u5355\u4E2A GC \u9700\u8981\u82B1\u66F4\u591A\u7684\u65F6\u95F4\u6765\u5B8C\u6210\uFF0C\u4ECE\u800C\u5BFC\u81F4\u66F4\u9AD8\u7684\u6682\u505C\u65F6\u95F4\u3002\u800C\u8003\u8651\u5230\u4F4E\u6682\u505C\u65F6\u95F4\uFF0C\u6700\u597D\u9891\u7E41\u8FD0\u884C GC \u4EE5\u4FBF\u66F4\u5FEB\u901F\u5B8C\u6210\uFF0C\u53CD\u8FC7\u6765\u53C8\u5BFC\u81F4\u541E\u5410\u91CF\u4E0B\u964D\u3002</p><ul><li>\u901A\u8FC7\u53C2\u6570 -XX:GCTimeRadio \u8BBE\u7F6E\u5783\u573E\u56DE\u6536\u65F6\u95F4\u5360\u603B CPU \u65F6\u95F4\u7684\u767E\u5206\u6BD4\u3002</li><li>\u901A\u8FC7\u53C2\u6570 -XX:MaxGCPauseMillis \u8BBE\u7F6E\u5783\u573E\u5904\u7406\u8FC7\u7A0B\u6700\u4E45\u505C\u987F\u65F6\u95F4\u3002</li><li>\u901A\u8FC7\u547D\u4EE4 -XX:+UseAdaptiveSizePolicy \u5F00\u542F\u81EA\u9002\u5E94\u7B56\u7565\u3002\u6211\u4EEC\u53EA\u8981\u8BBE\u7F6E\u597D\u5806\u7684\u5927\u5C0F\u548C MaxGCPauseMillis \u6216 GCTimeRadio\uFF0C\u6536\u96C6\u5668\u4F1A\u81EA\u52A8\u8C03\u6574\u65B0\u751F\u4EE3\u7684\u5927\u5C0F\u3001Eden \u548C Survivor \u7684\u6BD4\u4F8B\u3001\u5BF9\u8C61\u8FDB\u5165\u8001\u5E74\u4EE3\u7684\u5E74\u9F84\uFF0C\u4EE5\u6700\u5927\u7A0B\u5EA6\u4E0A\u63A5\u8FD1\u6211\u4EEC\u8BBE\u7F6E\u7684 MaxGCPauseMillis \u6216 GCTimeRadio\u3002</li></ul><h2 id="\u8001\u5E74\u4EE3\u5783\u573E\u6536\u96C6\u5668" tabindex="-1"><a class="header-anchor" href="#\u8001\u5E74\u4EE3\u5783\u573E\u6536\u96C6\u5668" aria-hidden="true">#</a> \u8001\u5E74\u4EE3\u5783\u573E\u6536\u96C6\u5668</h2><h3 id="serial-old-\u5783\u573E\u6536\u96C6\u5668-\u5355\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#serial-old-\u5783\u573E\u6536\u96C6\u5668-\u5355\u7EBF\u7A0B" aria-hidden="true">#</a> Serial Old \u5783\u573E\u6536\u96C6\u5668\uFF08\u5355\u7EBF\u7A0B\uFF09</h3><p>Serial Old \u6536\u96C6\u5668\u662F Serial \u7684\u8001\u5E74\u4EE3\u7248\u672C\uFF0C\u90FD\u662F\u5355\u7EBF\u7A0B\u6536\u96C6\u5668\uFF0C\u53EA\u542F\u7528\u4E00\u6761 GC \u7EBF\u7A0B\uFF0C\u90FD\u9002\u5408\u5BA2\u6237\u7AEF\u5E94\u7528\u3002\u5B83\u4EEC\u552F\u4E00\u7684\u533A\u522B\u5C31\u662F\uFF1ASerial Old \u5DE5\u4F5C\u5728\u8001\u5E74\u4EE3\uFF0C\u4F7F\u7528\u201C\u6807\u8BB0-\u6574\u7406\u201D\u7B97\u6CD5\uFF1BSerial \u5DE5\u4F5C\u5728\u65B0\u751F\u4EE3\uFF0C\u4F7F\u7528\u201C\u590D\u5236\u201D\u7B97\u6CD5\u3002</p><h3 id="parallel-old-\u5783\u573E\u6536\u96C6\u5668-\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#parallel-old-\u5783\u573E\u6536\u96C6\u5668-\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> Parallel Old \u5783\u573E\u6536\u96C6\u5668\uFF08\u591A\u7EBF\u7A0B\uFF09</h3><p>Parallel Old \u6536\u96C6\u5668\u662F Parallel Scavenge \u7684\u8001\u5E74\u4EE3\u7248\u672C\uFF0C\u8FFD\u6C42 CPU \u541E\u5410\u91CF\u3002</p><h3 id="cms-\u5783\u573E\u6536\u96C6\u5668" tabindex="-1"><a class="header-anchor" href="#cms-\u5783\u573E\u6536\u96C6\u5668" aria-hidden="true">#</a> CMS \u5783\u573E\u6536\u96C6\u5668</h3><p>CMS\uFF08Concurrent Mark Sweep\uFF0C\u5E76\u53D1\u6807\u8BB0\u6E05\u9664\uFF09\u6536\u96C6\u5668\u662F\u4EE5\u83B7\u53D6\u6700\u77ED\u56DE\u6536\u505C\u987F\u65F6\u95F4\u4E3A\u76EE\u6807\u7684\u6536\u96C6\u5668\uFF08\u8FFD\u6C42\u4F4E\u505C\u987F\uFF09\uFF0C\u5B83\u5728\u5783\u573E\u6536\u96C6\u65F6\u4F7F\u5F97\u7528\u6237\u7EBF\u7A0B\u548C GC \u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\uFF0C\u56E0\u6B64\u5728\u5783\u573E\u6536\u96C6\u8FC7\u7A0B\u4E2D\u7528\u6237\u4E5F\u4E0D\u4F1A\u611F\u5230\u660E\u663E\u7684\u5361\u987F\u3002</p><ul><li>\u521D\u59CB\u6807\u8BB0\uFF1AStop The World\uFF0C\u4EC5\u4F7F\u7528\u4E00\u6761\u521D\u59CB\u6807\u8BB0\u7EBF\u7A0B\u5BF9\u6240\u6709\u4E0E GC Roots \u76F4\u63A5\u5173\u8054\u7684\u5BF9\u8C61\u8FDB\u884C\u6807\u8BB0\u3002</li><li>\u5E76\u53D1\u6807\u8BB0\uFF1A\u4F7F\u7528<strong>\u591A\u6761</strong>\u6807\u8BB0\u7EBF\u7A0B\uFF0C\u4E0E\u7528\u6237\u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\u3002\u6B64\u8FC7\u7A0B\u8FDB\u884C\u53EF\u8FBE\u6027\u5206\u6790\uFF0C\u6807\u8BB0\u51FA\u6240\u6709\u5E9F\u5F03\u5BF9\u8C61\u3002\u901F\u5EA6\u5F88\u6162\u3002</li><li>\u91CD\u65B0\u6807\u8BB0\uFF1AStop The World\uFF0C\u4F7F\u7528\u591A\u6761\u6807\u8BB0\u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\uFF0C\u5C06\u521A\u624D\u5E76\u53D1\u6807\u8BB0\u8FC7\u7A0B\u4E2D\u65B0\u51FA\u73B0\u7684\u5E9F\u5F03\u5BF9\u8C61\u6807\u8BB0\u51FA\u6765\u3002</li><li>\u5E76\u53D1\u6E05\u9664\uFF1A\u53EA\u4F7F\u7528\u4E00\u6761 GC \u7EBF\u7A0B\uFF0C\u4E0E\u7528\u6237\u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\uFF0C\u6E05\u9664\u521A\u624D\u6807\u8BB0\u7684\u5BF9\u8C61\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u975E\u5E38\u8017\u65F6\u3002</li></ul><p>\u5E76\u53D1\u6807\u8BB0\u4E0E\u5E76\u53D1\u6E05\u9664\u8FC7\u7A0B\u8017\u65F6\u6700\u957F\uFF0C\u4E14\u53EF\u4EE5\u4E0E\u7528\u6237\u7EBF\u7A0B\u4E00\u8D77\u5DE5\u4F5C\uFF0C\u56E0\u6B64\uFF0C<strong>\u603B\u4F53\u4E0A\u8BF4</strong>\uFF0CCMS \u6536\u96C6\u5668\u7684\u5185\u5B58\u56DE\u6536\u8FC7\u7A0B\u662F\u4E0E\u7528\u6237\u7EBF\u7A0B<strong>\u4E00\u8D77\u5E76\u53D1\u6267\u884C</strong>\u7684\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/cms.png" alt="CMS"></p><p>CMS \u7684\u7F3A\u70B9\uFF1A</p><ul><li>\u541E\u5410\u91CF\u4F4E</li><li>\u65E0\u6CD5\u5904\u7406\u6D6E\u52A8\u5783\u573E</li><li>\u4F7F\u7528\u201C\u6807\u8BB0-\u6E05\u9664\u201D\u7B97\u6CD5\u4EA7\u751F\u788E\u7247\u7A7A\u95F4\uFF0C\u5BFC\u81F4\u9891\u7E41 Full GC</li></ul><p>\u5BF9\u4E8E\u4EA7\u751F\u788E\u7247\u7A7A\u95F4\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5F00\u542F -XX:+UseCMSCompactAtFullCollection\uFF0C\u5728\u6BCF\u6B21 Full GC \u5B8C\u6210\u540E\u90FD\u4F1A\u8FDB\u884C\u4E00\u6B21\u5185\u5B58\u538B\u7F29\u6574\u7406\uFF0C\u5C06\u96F6\u6563\u5728\u5404\u5904\u7684\u5BF9\u8C61\u6574\u7406\u5230\u4E00\u5757\u3002\u8BBE\u7F6E\u53C2\u6570 -XX:CMSFullGCsBeforeCompaction \u544A\u8BC9 CMS\uFF0C\u7ECF\u8FC7\u4E86 N \u6B21 Full GC \u4E4B\u540E\u518D\u8FDB\u884C\u4E00\u6B21\u5185\u5B58\u6574\u7406\u3002</p><h2 id="g1-\u901A\u7528\u5783\u573E\u6536\u96C6\u5668" tabindex="-1"><a class="header-anchor" href="#g1-\u901A\u7528\u5783\u573E\u6536\u96C6\u5668" aria-hidden="true">#</a> G1 \u901A\u7528\u5783\u573E\u6536\u96C6\u5668</h2><p>G1 \u662F\u4E00\u6B3E\u9762\u5411\u670D\u52A1\u7AEF\u5E94\u7528\u7684\u5783\u573E\u6536\u96C6\u5668\uFF0C\u5B83\u6CA1\u6709\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\u7684\u6982\u5FF5\uFF0C\u800C\u662F\u5C06\u5806\u5212\u5206\u4E3A\u4E00\u5757\u5757\u72EC\u7ACB\u7684 Region\u3002\u5F53\u8981\u8FDB\u884C\u5783\u573E\u6536\u96C6\u65F6\uFF0C\u9996\u5148\u4F30\u8BA1\u6BCF\u4E2A Region \u4E2D\u5783\u573E\u7684\u6570\u91CF\uFF0C\u6BCF\u6B21\u90FD\u4ECE\u5783\u573E\u56DE\u6536\u4EF7\u503C\u6700\u5927\u7684 Region \u5F00\u59CB\u56DE\u6536\uFF0C\u56E0\u6B64\u53EF\u4EE5\u83B7\u5F97\u6700\u5927\u7684\u56DE\u6536\u6548\u7387\u3002</p><p>\u4ECE\u6574\u4F53\u4E0A\u770B\uFF0C G1 \u662F\u57FA\u4E8E\u201C\u6807\u8BB0-\u6574\u7406\u201D\u7B97\u6CD5\u5B9E\u73B0\u7684\u6536\u96C6\u5668\uFF0C\u4ECE\u5C40\u90E8\uFF08\u4E24\u4E2A Region \u4E4B\u95F4\uFF09\u4E0A\u770B\u662F\u57FA\u4E8E\u201C\u590D\u5236\u201D\u7B97\u6CD5\u5B9E\u73B0\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u8FD0\u884C\u671F\u95F4\u4E0D\u4F1A\u4EA7\u751F\u5185\u5B58\u7A7A\u95F4\u788E\u7247\u3002</p><p>\u8FD9\u91CC\u629B\u4E2A\u95EE\u9898 \u{1F447}</p><blockquote><p>\u4E00\u4E2A\u5BF9\u8C61\u548C\u5B83\u5185\u90E8\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u53EF\u80FD\u4E0D\u5728\u540C\u4E00\u4E2A Region \u4E2D\uFF0C\u90A3\u4E48\u5F53\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u662F\u5426\u9700\u8981\u626B\u63CF\u6574\u4E2A\u5806\u5185\u5B58\u624D\u80FD\u5B8C\u6574\u5730\u8FDB\u884C\u4E00\u6B21\u53EF\u8FBE\u6027\u5206\u6790\uFF1F</p></blockquote><p>\u5E76\u4E0D\uFF01\u6BCF\u4E2A Region \u90FD\u6709\u4E00\u4E2A Remembered Set\uFF0C\u7528\u4E8E\u8BB0\u5F55\u672C\u533A\u57DF\u4E2D\u6240\u6709\u5BF9\u8C61\u5F15\u7528\u7684\u5BF9\u8C61\u6240\u5728\u7684\u533A\u57DF\uFF0C\u8FDB\u884C\u53EF\u8FBE\u6027\u5206\u6790\u65F6\uFF0C\u53EA\u8981\u5728 GC Roots \u4E2D\u518D\u52A0\u4E0A Remembered Set \u5373\u53EF\u9632\u6B62\u5BF9\u6574\u4E2A\u5806\u5185\u5B58\u8FDB\u884C\u904D\u5386\u3002</p><p>\u5982\u679C\u4E0D\u8BA1\u7B97\u7EF4\u62A4 Remembered Set \u7684\u64CD\u4F5C\uFF0CG1 \u6536\u96C6\u5668\u7684\u5DE5\u4F5C\u8FC7\u7A0B\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A</p><ul><li>\u521D\u59CB\u6807\u8BB0\uFF1AStop The World\uFF0C\u4EC5\u4F7F\u7528\u4E00\u6761\u521D\u59CB\u6807\u8BB0\u7EBF\u7A0B\u5BF9\u6240\u6709\u4E0E GC Roots \u76F4\u63A5\u5173\u8054\u7684\u5BF9\u8C61\u8FDB\u884C\u6807\u8BB0\u3002</li><li>\u5E76\u53D1\u6807\u8BB0\uFF1A\u4F7F\u7528<strong>\u4E00\u6761</strong>\u6807\u8BB0\u7EBF\u7A0B\u4E0E\u7528\u6237\u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\u3002\u6B64\u8FC7\u7A0B\u8FDB\u884C\u53EF\u8FBE\u6027\u5206\u6790\uFF0C\u901F\u5EA6\u5F88\u6162\u3002</li><li>\u6700\u7EC8\u6807\u8BB0\uFF1AStop The World\uFF0C\u4F7F\u7528\u591A\u6761\u6807\u8BB0\u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\u3002</li><li>\u7B5B\u9009\u56DE\u6536\uFF1A\u56DE\u6536\u5E9F\u5F03\u5BF9\u8C61\uFF0C\u6B64\u65F6\u4E5F\u8981 Stop The World\uFF0C\u5E76\u4F7F\u7528\u591A\u6761\u7B5B\u9009\u56DE\u6536\u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\u3002</li></ul>',39),t=[o];function d(n,s){return a(),l("div",null,t)}var h=e(i,[["render",d],["__file","04-hotspot-gc.html.vue"]]);export{h as default};
