import{_ as o,c as i,a as e,w as p,e as a,r as n,o as r,d as l}from"./404.md.2dff09be.js";const v='{"title":"Aseprite Animations","description":"","frontmatter":{"title":"Aseprite Animations","category":"Documentation","nav_order":2},"headers":[{"level":2,"title":"What is Aseprite?","slug":"what-is-aseprite"},{"level":2,"title":"Creating an Animation in Aseprite","slug":"creating-an-animation-in-aseprite"},{"level":2,"title":"Aseprite Animations in JSON-UI","slug":"aseprite-animations-in-json-ui"}],"relativePath":"json-ui/aseprite-animations.md"}',c={},u=a('<h2 id="what-is-aseprite" tabindex="-1">What is Aseprite? <a class="header-anchor" href="#what-is-aseprite" aria-hidden="true">#</a></h2><p><a href="https://www.aseprite.org/" target="_blank" rel="noopener noreferrer">Aseprite</a> is a purchasable art application designed with pixel-art in mind. It contains many tools that can help make skin and resource pack creation easier. Aseprite also has significant documentation and tutorials to help artists of all skill levels use the application effectively.</p><h2 id="creating-an-animation-in-aseprite" tabindex="-1">Creating an Animation in Aseprite <a class="header-anchor" href="#creating-an-animation-in-aseprite" aria-hidden="true">#</a></h2><p>Let&#39;s say our frame images are called: &quot;frameimage&quot; and we have five images from 1 to 5. You can import the first one, and Aseprite will recognize there are multiple images with the same name but different numbers. Aseprite will put these in the correct order and make it an animation.</p>',4),m=a('<p>You can navigate through all frames using your <code>arrow keys</code> on your keyboard. You can play/pause the animation with your <code>enter</code> key.</p><p>By clicking on <code>tab</code> key, you can popup the timeline to select the frame by frame. You can right-click the frame in this timeline to change different settings.</p><p>To export this animation to the correct files, you can use <code>Ctrl + E</code> or <code>File -&gt; Export to Sprite Sheet.</code> For the output settings, select the Output file and the JSON Data. You will also see a dropdown input with a Hash and Array option. You have to make sure this is set to array, or this will not work.</p><p>Now you have your files you need. You&#39;ll have 2 files now, the SpriteSheet image and a json image.</p><h2 id="aseprite-animations-in-json-ui" tabindex="-1">Aseprite Animations in JSON-UI <a class="header-anchor" href="#aseprite-animations-in-json-ui" aria-hidden="true">#</a></h2><p>The <code>aseprite_flip_book</code> animation type can only be used for the <code>uv</code> property in an element of the type <code>image</code>.</p>',6),d=l("RP/ui/example_file.json"),_=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
   <span class="token property">&quot;image_element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
	  <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/my_sprite_file&quot;</span><span class="token punctuation">,</span>
	  <span class="token property">&quot;uv_size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">32</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
	  <span class="token property">&quot;uv&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_namespace.image_uv_animation&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token property">&quot;image_uv_animation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	  <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aseprite_flip_book&quot;</span><span class="token punctuation">,</span>
	  <span class="token property">&quot;initial_uv&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,1);function h(k,g,b,f,y,A){const s=n("FolderView"),t=n("CodeHeader");return r(),i("div",null,[u,e(s,{paths:["frameimage1.png","frameimage2.png","frameimage3.png","frameimage4.png","frameimage5.png"]},null,8,["paths"]),m,e(t,null,{default:p(()=>[d]),_:1}),_])}var w=o(c,[["render",h]]);export{v as __pageData,w as default};
