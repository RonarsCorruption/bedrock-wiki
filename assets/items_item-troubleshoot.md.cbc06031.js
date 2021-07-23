import{r as e,o as n,c as s,a as t,w as a,d as o,b as r}from"./404.md.ff8de823.js";const i='{"title":"Troubleshooting Items","description":"","frontmatter":{"title":"Troubleshooting Items","nav_order":3},"headers":[{"level":3,"title":"Your Item Has a Problem","slug":"your-item-has-a-problem"},{"level":2,"title":"Before you Begin","slug":"before-you-begin"},{"level":3,"title":"Version Dependent Components","slug":"version-dependent-components"},{"level":2,"title":"Troubleshooting All Items","slug":"troubleshooting-all-items"},{"level":3,"title":"1.0 - Pack Updating/Presence","slug":"_1-0-pack-updating-presence"},{"level":3,"title":"1.5 - Determining Pack [Resource or Behavior]","slug":"_1-5-determining-pack-resource-or-behavior"},{"level":3,"title":"2.0 - Ensuring Correct Behaviors","slug":"_2-0-ensuring-correct-behaviors"},{"level":3,"title":"3.0 - Ensuring Correct Resources","slug":"_3-0-ensuring-correct-resources"},{"level":3,"title":"4.0 - Choosing a Version","slug":"_4-0-choosing-a-version"},{"level":2,"title":"Stable Item Troubleshooting [1.12.0]","slug":"stable-item-troubleshooting-1-12-0"},{"level":3,"title":"5.0 - Assessing Specific Issue","slug":"_5-0-assessing-specific-issue"},{"level":3,"title":"5.1 - Invisible Item","slug":"_5-1-invisible-item"},{"level":3,"title":"5.2 - Item Not Appearing","slug":"_5-2-item-not-appearing"},{"level":3,"title":"5.3 - Item Has Magenta-and-Black Checkerboard Texture","slug":"_5-3-item-has-magenta-and-black-checkerboard-texture"}],"relativePath":"items/item-troubleshoot.md","lastUpdated":1627051368342}',p={},l=o('<h3 id="your-item-has-a-problem"><a class="header-anchor" href="#your-item-has-a-problem" aria-hidden="true">#</a> Your Item Has a Problem</h3><p><em>I followed a tutorial or tried to make my own item and something&#39;s wrong!</em> No worries, it&#39;s easy to make mistakes when dealing with items. This page will help you to debug common issues.</p><h2 id="before-you-begin"><a class="header-anchor" href="#before-you-begin" aria-hidden="true">#</a> Before you Begin</h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>As of game versions <code>1.16.100</code> and onward, there are two distinct types of items, as constituted by its <code>format_version</code>. In short, versions <code>1.16.0</code> and prior are currently the stable (Includes <strong>1.16, 1.14, 1.13, 1.12, 1.10</strong>), <strong>non-experimental</strong> version. These <strong>do not</strong> require <code>Holiday Creator Features</code> to be enabled. Versions <code>1.16.100</code> and onward are <strong>experimental</strong>. These items <strong>will not work unless</strong> <code>Holiday Creator Features</code> <strong>is enabled in the world</strong>.</p></div><p><em>Before troubleshooting, please ensure that you have a format version that you&#39;d want to use for your item.</em></p><h3 id="version-dependent-components"><a class="header-anchor" href="#version-dependent-components" aria-hidden="true">#</a> Version Dependent Components</h3><p>Among the three main item versions, there are also different sets of item <code>components</code>. <strong>It is absolutely imperative that the correct components and syntax are used for their respective versions</strong>. Failure to meet such criteria will <strong>always</strong> result in a broken item. You may find the correct components and their appropriate syntax in the following links:</p><ul><li><p><code>Experimental (1.16.100+)</code> - <a href="https://bedrock.dev/docs/stable/Item" target="_blank" rel="noopener noreferrer">https://bedrock.dev/docs/stable/Item</a></p></li><li><p><code>Stable (1.12.0)</code> - <a href="https://bedrock.dev/docs/1.16.0.0/1.16.20.54/Item" target="_blank" rel="noopener noreferrer">https://bedrock.dev/docs/1.16.0.0/1.16.20.54/Item</a></p></li></ul><h2 id="troubleshooting-all-items"><a class="header-anchor" href="#troubleshooting-all-items" aria-hidden="true">#</a> Troubleshooting All Items</h2><h3 id="_1-0-pack-updating-presence"><a class="header-anchor" href="#_1-0-pack-updating-presence" aria-hidden="true">#</a> 1.0 - Pack Updating/Presence</h3><p>Are the packs <em>both</em> active in your world of testing? (You may check this by going to world settings &gt; behavior/resource packs) Further, are they both set up to properly update? That is, are you either using <strong>development folders</strong> or creating a <strong>new world</strong> each pack update? Ensuring that the packs are actually changing per pack-update is always first step in troubleshooting.</p><h3 id="_1-5-determining-pack-resource-or-behavior"><a class="header-anchor" href="#_1-5-determining-pack-resource-or-behavior" aria-hidden="true">#</a> 1.5 - Determining Pack [Resource or Behavior]</h3><p>Determining which pack the error is actually in is also very important. There are a few surefire ways to prove which it is in (if not both): <em>-If the item is invisible, often constantly throwing the error, <code>[Item] requires either an icon atlas or icon texture</code>, the error is in the <code>resource pack</code>. -If the item is showing the black-magenta checkerboard texture, or the &quot;missing&quot; texture, the error is contained in the <code>resource pack</code>. -If the item fails to register at all, that is, not showing in the inventory or through commands, the error is in the <code>behavior pack</code></em>.</p><h3 id="_2-0-ensuring-correct-behaviors"><a class="header-anchor" href="#_2-0-ensuring-correct-behaviors" aria-hidden="true">#</a> 2.0 - Ensuring Correct Behaviors</h3><p>If the item fails to register at all, that is, not showing in the inventory or through commands, the error is in the <code>behavior pack</code>. To fix this, there are a few big things to consider:</p><ul><li><p>Is the <code>.json</code> syntax valid? A validator can be found here: <a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer">https://jsonlint.com/</a></p></li><li><p>What does the content log say? Always consider what the log is outputting.</p></li><li><p>Is the pack enabled in the world? (it happens to the best of us)</p></li><li><p><em>Make sure that all component names match those found in documentation. Remember</em>: <strong>no spaces or capitals</strong></p></li></ul><h3 id="_3-0-ensuring-correct-resources"><a class="header-anchor" href="#_3-0-ensuring-correct-resources" aria-hidden="true">#</a> 3.0 - Ensuring Correct Resources</h3><p>If the item is showing the black-magenta checkerboard texture, or constantly throwing the error, <code>[Item] requires either an icon atlas or icon texture</code>, the error is in the <code>resource pack</code>. More on this later.</p><h3 id="_4-0-choosing-a-version"><a class="header-anchor" href="#_4-0-choosing-a-version" aria-hidden="true">#</a> 4.0 - Choosing a Version</h3><p>As stated previously, items work very differently across different <code>format_version</code>s. Deciding which format you wish to use is the next step in the troubleshooting process.</p>',20),c=r("I wish to use the stable, "),u=t("code",null,"1.12.0",-1),d=r(" format: "),h=r("Continue"),m=r("I wish to use the experimental, "),b=t("code",null,"1.16.100",-1),g=r(" format: "),k=r("Coming Soon"),f=t("h2",{id:"stable-item-troubleshooting-1-12-0"},[t("a",{class:"header-anchor",href:"#stable-item-troubleshooting-1-12-0","aria-hidden":"true"},"#"),r(" Stable Item Troubleshooting [1.12.0]")],-1),_=t("h3",{id:"_5-0-assessing-specific-issue"},[t("a",{class:"header-anchor",href:"#_5-0-assessing-specific-issue","aria-hidden":"true"},"#"),r(" 5.0 - Assessing Specific Issue")],-1),y=r("My item is invisible in my hand, and is spamming a content log error that it needs an icon: "),v=r("Continue"),q=r("My item is not appearing in the inventory or through commands: "),w=r("Continue"),I=r("My item is missing a texture, and has a pink-and-black one: "),x=r("Continue"),T=t("h3",{id:"_5-1-invisible-item"},[t("a",{class:"header-anchor",href:"#_5-1-invisible-item","aria-hidden":"true"},"#"),r(" 5.1 - Invisible Item")],-1),A=r("For this error, ensure that your item is properly defined in the "),C=t("strong",null,"Resource Pack",-1),P=r(". To do this, you need to create an item file in "),B=t("code",null,"RP/items/",-1),S=r(" called "),R=t("code",null,"<name_of_your_item>.json",-1),j=r(". "),V=r("RP/items/your_item.json"),E=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.12.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yana:amethyst_sword&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Equipment&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t\t<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;amethyst_sword&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;minecraft:render_offsets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tools&quot;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><em>An example of how this file should look</em></p><p>Be sure that your <code>&quot;minecraft:icon&quot;</code> correctly matches to your <code>item_texture.json</code> name.</p><h3 id="_5-2-item-not-appearing"><a class="header-anchor" href="#_5-2-item-not-appearing" aria-hidden="true">#</a> 5.2 - Item Not Appearing</h3>',4),D=r("For this error, ensure that your item is properly defined in your "),N=t("strong",null,"Behavior Pack",-1),F=r(". To do this, you need to create an item file in "),H=t("code",null,"BP/items/",-1),M=r(" called "),Y=t("code",null,"<name_of_your_item>.json",-1),U=r(". "),W=r("BP/items/your_item.json"),z=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.12.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yana:amethyst_sword&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t\t<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;minecraft:foil&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;minecraft:max_damage&quot;</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;minecraft:hand_equipped&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;minecraft:max_stack_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><em>An example of how this file should look</em></p><p>Be sure that your <code>component</code> names correctly match those found in the documentation.</p><h3 id="_5-3-item-has-magenta-and-black-checkerboard-texture"><a class="header-anchor" href="#_5-3-item-has-magenta-and-black-checkerboard-texture" aria-hidden="true">#</a> 5.3 - Item Has Magenta-and-Black Checkerboard Texture</h3><p>For this error, ensure that your item&#39;s texture is properly referenced in your <strong>Resource Pack</strong>. This is commonly due to a mismatched file or folder name. Remember, no capitals or spaces in file or folder names.</p>',5),G=r("To fix, ensure your texture paths correct. These are the folders that all lead to your texture file, as defined in "),J=t("code",null,"RP\\textures\\item_texture.json",-1),K=r(". For example: "),L=r("RP\\textures\\item_texture.json"),O=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;texture_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atlas.items&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;resource_pack_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vanilla&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;texture_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;amethyst_sword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/amethyst_sword&quot;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><em>This texture should be in the folder <code>&quot;textures/items/&quot;</code>, and the image should be called <code>amethyst_sword.png</code>.</em></p><p>Ensure your <code>&quot;minecraft:icon&quot;</code> component matches toward the correct short name.</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;amethyst_sword&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>These, for example, search for a name in <code>item_texture.json</code> called <code>amethyst_sword</code>, as seen above.</p>',5);p.render=function(o,r,i,p,Q,X){const Z=e("BButton"),$=e("CodeHeader");return n(),s("div",null,[l,t("ul",null,[t("li",null,[t("p",null,[c,u,d,t(Z,{color:"blue",link:"item-troubleshoot#_5-0-assessing-specific-issue"},{default:a((()=>[h])),_:1})])]),t("li",null,[t("p",null,[m,b,g,t(Z,{color:"blue"},{default:a((()=>[k])),_:1})])])]),f,_,t("ul",null,[t("li",null,[t("p",null,[y,t(Z,{color:"blue",link:"item-troubleshoot#_5-1-invisible-item"},{default:a((()=>[v])),_:1})])]),t("li",null,[t("p",null,[q,t(Z,{color:"blue",link:"item-troubleshoot#_5-2-item-not-appearing"},{default:a((()=>[w])),_:1})])]),t("li",null,[t("p",null,[I,t(Z,{color:"blue",link:"item-troubleshoot#_5-3-item-has-magenta-and-black-checkerboard-texture"},{default:a((()=>[x])),_:1})])])]),T,t("p",null,[A,C,P,B,S,R,j,t($,null,{default:a((()=>[V])),_:1})]),E,t("p",null,[D,N,F,H,M,Y,U,t($,null,{default:a((()=>[W])),_:1})]),z,t("p",null,[G,J,K,t($,null,{default:a((()=>[L])),_:1})]),O])};export default p;export{i as __pageData};
