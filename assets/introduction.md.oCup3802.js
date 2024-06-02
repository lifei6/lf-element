import{_ as i,a as s,o as a,af as e}from"./chunks/framework.DRSb6gpS.js";const g=JSON.parse('{"title":"介绍","description":"主要技术","frontmatter":{"pageClass":"custom-page-class","title":"介绍","description":"主要技术","next":{"link":"/get-start","text":"开始使用"},"outline":"deep"},"headers":[],"relativePath":"introduction.md","filePath":"introduction.md"}'),l={name:"introduction.md"},t=e(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>这是一个小李子创建的组件库，模仿了 Element Plus 的编写方式</p><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><h3 id="构建工具" tabindex="-1">构建工具 <a class="header-anchor" href="#构建工具" aria-label="Permalink to &quot;构建工具&quot;">​</a></h3><ul><li>Vite</li><li>Vue3</li><li>TypeScript</li></ul><h3 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-label="Permalink to &quot;样式&quot;">​</a></h3><ul><li><p>Less</p></li><li><p>unocss</p><p>原子样式生成器，非常好用！</p></li></ul><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h3><ul><li><p>Vitest</p><p>下一代测试框架</p></li><li><p>Vue Test Utils</p><p>Vue 官方提供的测试工具库</p><blockquote><p><code>Vue Test Utils (VTU)</code> 是一组实用函数，旨在简化 Vue.js 组件的测试。它提供了一些以隔离方式挂载 Vue 组件并与之交互的方法。</p></blockquote></li><li><p>Storybook</p><p>以故事的形式编写组件案例，通过配置各种属性可以直观的看出组件呈现的效果</p></li></ul><h3 id="代码检查和格式化" tabindex="-1">代码检查和格式化 <a class="header-anchor" href="#代码检查和格式化" aria-label="Permalink to &quot;代码检查和格式化&quot;">​</a></h3><ul><li><p>ESLint</p><p>代码检查工具和格式化工具，使用插件可以使ESLint具有Prettier的功能</p></li><li><p>Prettier</p><p>代码格式化工具，用于格式化代码</p></li></ul><h3 id="站点生成" tabindex="-1">站点生成 <a class="header-anchor" href="#站点生成" aria-label="Permalink to &quot;站点生成&quot;">​</a></h3><ul><li><p>VitePress</p><p>静态站点生成器（SSG）,可以以 markdown 文件的形式来编写文档,并生成可以轻松部署到任何地方的静态 HTML 页面。</p></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>内部使用了<code>markdown-it</code>解析器解析md文档，每个md文档就是一个vue的SFC组件，最终会编译为一个html页面，可以在md内部使用<code>&lt;scripte setup&gt;</code>生成一些页面所需的数据和逻辑以及使用<code>&lt;style module&gt;</code>来覆盖和编写一些局部样式。<code>markdown-it</code>内部借助了<code>shiki</code>来高亮代码。</p></div><ul><li><p>shiki</p><p>重点是配置<code>tansformers</code>转化器进行各种类型的代码高亮，如</p><ol><li><code>transformerTwoslash</code>：使鼠标悬停时显示类型注释；</li><li><code>transformerNotationDiff</code>：配置git提交时的diff风格；</li><li><code>transformerNotationHighlight</code>：配置使用注释高亮行；</li><li><code>transformerNotationFocus</code>：聚焦某行。</li></ol></li></ul><h3 id="自动部署" tabindex="-1">自动部署 <a class="header-anchor" href="#自动部署" aria-label="Permalink to &quot;自动部署&quot;">​</a></h3><ul><li><p>Github Actions</p><ol><li>Lint</li><li>Test</li><li>Build</li><li>Deploy</li></ol></li><li><p>Github Pages</p><p>github提供的免费的静态站点托管平台</p></li></ul><h2 id="集成的插件" tabindex="-1">集成的插件 <a class="header-anchor" href="#集成的插件" aria-label="Permalink to &quot;集成的插件&quot;">​</a></h2><h3 id="vite插件" tabindex="-1">vite插件 <a class="header-anchor" href="#vite插件" aria-label="Permalink to &quot;vite插件&quot;">​</a></h3><ul><li><p>vite-plugin-dts</p><p>根据tsconfig.json配置文件自动生成类型声明文件</p></li><li><p>shelljs</p><p>以函数调用的形式执行shell，如删除文件或者目录：<code>shell.rm(&#39;-rf&#39;,文件目录)</code></p></li><li><p>vite-plugin-compression2</p><p>压缩打包后的css文件</p></li></ul><h3 id="vitepress插件" tabindex="-1">vitepress插件 <a class="header-anchor" href="#vitepress插件" aria-label="Permalink to &quot;vitepress插件&quot;">​</a></h3><ul><li><p>@vitepress-demo-preview</p><p>用于在SSG页面中展示组件实际效果</p><p><strong>安装：</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @vitepress-demo-preview/component</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @vitepress-demo-preview/plugin</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span></span></code></pre></div><p><strong>使用：</strong></p><p>在md文件中使用</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-dark:#4D9375;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"> Button 按钮</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">常用的操作按钮。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-dark:#4D9375;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"> 基础用法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">使用 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">、</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">plain</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">、 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">round</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">和 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">circle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">来定义按钮的样式。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: preview</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">demo-preview=../demo/button/Basic.vue</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre></div></li><li><p>@shikijs/transformers</p><p>用于配置常用的<code>transformers</code>转换器</p></li><li><p>@shikijs/vitepress-twoslash</p><p>用于在代码块中显示变量的类型注释</p></li><li></li></ul><h3 id="script脚本编写插件" tabindex="-1">script脚本编写插件 <a class="header-anchor" href="#script脚本编写插件" aria-label="Permalink to &quot;script脚本编写插件&quot;">​</a></h3><ul><li><p>move-file-cli</p><p>移动文件</p></li><li><p>npm-run-all</p><p>串行或者并行执行脚本</p></li><li><p>release-it</p><p>发布npm包时自动管理版本迭代</p></li></ul>`,24),p=[t];function n(h,o,r,d,k,c){return a(),s("div",null,p)}const m=i(l,[["render",n]]);export{g as __pageData,m as default};
