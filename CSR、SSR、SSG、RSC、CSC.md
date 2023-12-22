
**CSR**：Client Side Rendering（客户端渲染）

客户端渲染是目前网页最常见的渲染方式。在客户端渲染中，服务器发送一个初始的 HTML 文件和一些 JS 文件给浏览器。这个 HTML 文件通常只包含一个空的根元素，例如 `<div id="root"></div>`，然后 JS 会在浏览器中生成完整的网页内容并插入到这个根元素中。
![csr](./assets/csr.png)
由于客户端渲染的页面内容是由 JS 控制的，因此无法在 Dev Tools 里预览 HTML 文档的结构。
![csr-preview](./assets/csr-preview.png)
CSR 在首次渲染的时候会加载大量的 JS 等文件，会造成首屏渲染时间稍长，且客户端渲染需要考虑不同用户不同版本浏览器对新特性的兼容程度。

适合对首屏时间不敏感但重交互的后台管理类应用。

---
**SSR**：Server Side Rendering（服务端渲染）

对比客户端渲染，服务端渲染就是在服务端生成完整的静态 HTML 页面，然后发送给浏览器。

然后，浏览器会加载并执行 JS 文件，为静态 DOM 添加事件监听器等，使其具有交互能力。这个过程称为"水合"（Hydration）。

SSR 对比 CSR 首屏不需要加载大量的静态文件，服务器直接返回可预览的 HTML 页面，因此 SSR 对于 SEO 更加友好。

适合官网或 Web APP 这类对首屏加载时间敏感且兼具交互性的应用。

---
**SSG**：Static Site Generation（静态站点生成）

在一定程度上 SSG 可被视为一种 SSR。SSG 和 SSR 都是在服务器端生成 HTML 内容。它们的区别在于“何时”生成 HTML。在服务端渲染中，HTML 内容是在服务端接收到请求后实时生成并返回给浏览器的。而在静态站点生成中，所有的 HTML 内容都是在构建阶段完成的。

SSG 非常适合博客或者技术文档类项目。

---

**RSC**：React Server Component（服务端组件）

服务端组件不是细粒度的服务端渲染，服务端组件专注于数据和内容渲染，不负责交互，因此它只渲染出静态HTML 和 CSS。相比服务端渲染，服务端组件没有水合过程。

[Introducing Zero-Bundle-Size React Server Components](https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components)

**CSC**：Client Side Component（客户端组件）

客户端组件和客户端渲染过程类似，不过完整的客户端组件插入位置不是根元素节点，而是 `客户端组件占位符`。

如下图所示，在服务端渲染出由基础 HTML 标签和 `客户端组件占位符` 的 React Tree。

![rsc-placeholders](./assets/rsc-placeholders.png)

然后将这个树形结构序列化发送到浏览器，浏览器对其进行反序列化，用真正的客户端组件填充 `客户端组件占位符`，并呈现最终结果。

![rsc-client](./assets/rsc-client.png)

推荐阅读：
[How React server components work: an in-depth guide](https://www.plasmic.app/blog/how-react-server-components-work)
