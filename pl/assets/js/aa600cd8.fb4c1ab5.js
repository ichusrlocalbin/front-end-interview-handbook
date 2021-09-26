"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[469],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5371:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r={title:"Front End System Design - UI Components",slug:"front-end-system-design/ui-components",sidebar_label:"UI Components"},l=void 0,s={unversionedId:"front-end-system-design-ui-components",id:"front-end-system-design-ui-components",isDocsHomePage:!1,title:"Front End System Design - UI Components",description:"Examples",source:"@site/../contents/front-end-system-design-ui-components.md",sourceDirName:".",slug:"/front-end-system-design/ui-components",permalink:"/pl/front-end-system-design/ui-components",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/front-end-system-design-ui-components.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1632651375,formattedLastUpdatedAt:"26.09.2021",frontMatter:{title:"Front End System Design - UI Components",slug:"front-end-system-design/ui-components",sidebar_label:"UI Components"},sidebar:"root",previous:{title:"Overview",permalink:"/pl/front-end-system-design"},next:{title:"Applications",permalink:"/pl/front-end-system-design/applications"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Framework",id:"framework",children:[{value:"Requirements clarification",id:"requirements-clarification",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"API design",id:"api-design",children:[]},{value:"Deep dives",id:"deep-dives",children:[]}]},{value:"Helpful articles",id:"helpful-articles",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Image Carousel"),(0,i.kt)("li",{parentName:"ul"},"Selector which loads options over the network")),(0,i.kt)("h2",{id:"framework"},"Framework"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Requirements clarifications/alignment"),(0,i.kt)("li",{parentName:"ol"},"Architecture"),(0,i.kt)("li",{parentName:"ol"},"Data model"),(0,i.kt)("li",{parentName:"ol"},"API design"),(0,i.kt)("li",{parentName:"ol"},"Deep dive",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"User Experience (UX)"),(0,i.kt)("li",{parentName:"ul"},"Performance"),(0,i.kt)("li",{parentName:"ul"},"Accessibility (a11y)"),(0,i.kt)("li",{parentName:"ul"},"Internationalization (i18n)"),(0,i.kt)("li",{parentName:"ul"},"Multi-device support"),(0,i.kt)("li",{parentName:"ul"},"Security")))),(0,i.kt)("h3",{id:"requirements-clarification"},"Requirements clarification"),(0,i.kt)("p",null,"Every system design interview should start with clarifying requirements about the question, which is usually left vague intentionally. Components have well-defined scope and not try to do too many things."),(0,i.kt)("p",null,"Some considerations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What devices should the system support? Desktop web, mobile web, etc"),(0,i.kt)("li",{parentName:"ul"},"What's the primary device that users will access the system on?"),(0,i.kt)("li",{parentName:"ul"},"Which browsers should we support?"),(0,i.kt)("li",{parentName:"ul"},"Do we need to support internationalization?"),(0,i.kt)("li",{parentName:"ul"},"How much styling customization do we want to allow?")),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Architecture for front end interviews are typically focused on the client-side architecture, and not on large scale distributed systems where databases, load balancers and servers are involved."),(0,i.kt)("p",null,"For components, list down the various sub-components that will exist within it, what data is being passed among each component (e.g. in a Photo Gallery, there are the Image, Thumbnail, Paginator, etc sub-components). If you have a whiteboard/online drawing tool, it would also be helpful to draw diagrams to illustrate the entities and their relationships."),(0,i.kt)("h3",{id:"data-model"},"Data model"),(0,i.kt)("p",null,"Data model for components will refer to the component state. The concept of state should be familiar to most front end developers who have used front end UI libraries/frameworks such as React, Angular, Vue, Svelte, etc. In every of these libraries/frameworks, state is a common concept."),(0,i.kt)("p",null,"Deciding what data to put in state is essential to doing well for this portion. Few factors to consider when deciding what goes into component state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"State is allowed to change over time during the lifecycle of the component, typically as a result of user interactions"),(0,i.kt)("li",{parentName:"ul"},"Each component has its own state which allows ",(0,i.kt)("em",{parentName:"li"},"multiple instances")," of the component to coexist on a single page. The state of a component instance should not affect the state of another instance"),(0,i.kt)("li",{parentName:"ul"},"Components are easier to reason about (read/understand) the less state there is. We should strive to reduce the amount of state needed. If a component uses a value which can be derived from another piece of state, then that value should most likely not be part of the state. For example if your component is rendering a list of items and you want to display a message when there are no items to render, there shouldn't be an additional ",(0,i.kt)("inlineCode",{parentName:"li"},"isEmpty")," state because it can be derived from the length of the ",(0,i.kt)("inlineCode",{parentName:"li"},"items")),(0,i.kt)("li",{parentName:"ul"},"If a component has multiple sub-components, it'll be best if it's possible to consolidate the state within the top level and the rest of the components are pure and stateless")),(0,i.kt)("h3",{id:"api-design"},"API design"),(0,i.kt)("p",null,"The key idea behind components is for reusing. Good components are designed well such that they can be reused in multiple scenarios."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuration options for the component (",(0,i.kt)("inlineCode",{parentName:"li"},"props")," in React)"),(0,i.kt)("li",{parentName:"ul"},"Follow Open-closed principle - the component should be open for extension but closed for modification. In React,"),(0,i.kt)("li",{parentName:"ul"},"If your component is meant to be a UI library that doesn't bother about the appearance and leaves the styling to the user, extra care has to go into the design of the props and to allow users to customize the look and feel of the components. There are a few ways to go about this in React:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/composition-vs-inheritance.html"},"Composition")," - Props which accept React components which also promotes code reuse"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/render-props.html"},"Render props")," are function props that a component uses to know what to render. It also helps in reusing behavior without bothering about the appearance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"className")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"style")," props - Allows users to inject class namaes and/or styling attributes to inner DOM elements")))),(0,i.kt)("h3",{id:"deep-dives"},"Deep dives"),(0,i.kt)("p",null,"With the basics of the component covered, we can dive into specific areas which the component might need special attention to. Note that there almost definitely won't be enough time to cover every area, and not every area will be very relevant to the component at hand."),(0,i.kt)("p",null,"Showing knowledge about these areas and being able to dive deep into them are traits of senior developers."),(0,i.kt)("h4",{id:"user-experience-ux"},"User experience (UX)"),(0,i.kt)("p",null,"UX might not fall squarely under engineering but good front end engineers have good understanding of UX and building UI with great UX. There are too many UX practices to be aware of, but the most common ones/low hanging fruits are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reflect state of the component to the user - If there's a pending background request, show a spinner. If there's an error, make sure to display it instead of silently failing"),(0,i.kt)("li",{parentName:"ul"},"Display an empty state if there are no items in a list instead of not rendering anything"),(0,i.kt)("li",{parentName:"ul"},"Destructive actions should have a confirmation step, especially irreversible ones"),(0,i.kt)("li",{parentName:"ul"},"Disable interactive elements if they trigger an async request! Prevents double firing of events"),(0,i.kt)("li",{parentName:"ul"},"Handle extreme cases",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Strings can be really long/short and your UI should not look weird in either case. For long strings, they can have their contents truncated and hidden behind a "View more" button'),(0,i.kt)("li",{parentName:"ul"},"If there are many items to display within a component, they shouldn't all be displayed on the screen at once and making the page extremely long/wide. Paginate the items or contain them within a container with a maximum width/height")))),(0,i.kt)("h4",{id:"performance"},"Performance"),(0,i.kt)("p",null,"In front end, performance typically refers to a few things - loading speed, how fast the UI responds to user interactions, memory space (heap) required by the component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Loading speed - The less JavaScript the component contains, the less JavaScript the browser has to download to load the component and the lower the network request time. It's also important to modularize components and allow users to download only the necessary JavaScript modules needed for their use case."),(0,i.kt)("li",{parentName:"ul"},"Responsiveness to user interactions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If a user interaction results in displaying of data that has to be loaded over the network, there will be a delay between the user interaction and updating of the UI. Minimizing that delay or removing it entirely is the key to improving responsiveness."),(0,i.kt)("li",{parentName:"ul"},"JavaScript in a browser is single-threaded. The browser can only do execute one line of code at any one time. The less work (JavaScript executed, DOM updates) the component has to do when a user does something on the page, the faster the component can update the UI to respond to the changes."))),(0,i.kt)("li",{parentName:"ul"},"Memory space - The more memory your component takes up on the page, the slower the browser performs and the experience will feel sluggish/janky. If your component has to render hundreds/thousands of items (e.g. number of images in a carousel, number of items in a selector), memory space might become significant.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optimization tips")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Render only what is displayed on the screen - For example, in a selector, only a few items are displayed to the user even if the list can contain hundreds of elements. Rendering all of them into the browser would be a waste of processing power and memory space. We can leverage a technique called windowing/virtualization to emulate a list with many elements while only rendering a few as possible to make the final result look as if there was no optimization done (especially preserving scroll height). Read more about virtualization ",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/virtualize-long-lists-react-window/"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"Lazy loading/load only necessary data - For example, in a photo gallery component, a user can have hundreds and thousands of photos, but it won't be feasible to load all of them eagerly. Most likely the user won't be browsing all of them in that session too. An optimization could be to load only the ones that the user is likely to view, or those that are within the viewport (which we call \"above the fold\"). The rest of the photos can be loaded on demand, which introduces responsiveness delay, but the next tip will help you to handle that."),(0,i.kt)("li",{parentName:"ul"},'Preloading/prefetching data ahead of time - For example, in an image carousel where there are too many images to load beforehand, an optimization could be to load the next image ahead of time while the user is still on the current image, such that when the user clicks the "Next" button, there\'s no network delay needed because the next image has already been loaded. This technique can also be modified to load the next N images to handle the case where users click "Next" in rapid succession.')),(0,i.kt)("h4",{id:"accessibility-a11y"},"Accessibility (a11y)"),(0,i.kt)("p",null,"Accessibility (a11y) is the practice of making your websites usable by as many people as possible."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Color contrasts (e.g. color blindness)"),(0,i.kt)("li",{parentName:"ul"},"Keyboard friendliness (e.g. people with limited fine motor control)"),(0,i.kt)("li",{parentName:"ul"},"Visual Impairment (e.g. blind)"),(0,i.kt)("li",{parentName:"ul"},"Transcripts for audio (e.g. deaf)")),(0,i.kt)("p",null,"Not everyone surfs the web the same way; some people use screenreaders and keyboards exclusively (no mouse)! Here are some basic tips for achieving a11y in UI components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Foreground colors should have sufficient contrast from the background colors"),(0,i.kt)("li",{parentName:"ul"},"Use the right HTML tags for semanticness, or the right ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-role")," attributes"),(0,i.kt)("li",{parentName:"ul"},"Clickable items should have ",(0,i.kt)("inlineCode",{parentName:"li"},"tabindex"),' attribute (so that they are focusable) and also "cursor: pointer" styling to indicate that they can be clicked on'),(0,i.kt)("li",{parentName:"ul"},"Images should have ",(0,i.kt)("inlineCode",{parentName:"li"},"alt")," text, which will be read out by screen readers and act as a fallback description if the image fails to load"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-label"),"s help to provide context to elements which are non-obvious to non-visual users. E.g. an icon button without any text label within it should have an ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-label")," attribute so that the intention is clear for users who can't see the icon")),(0,i.kt)("p",null,"a11y is one of the most commonly neglected areas as most of the time they're invisible to the developer. Showing knowledge of a11y and possessing the skills to create accessible components will definitely reflect well on you. More reading on ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/fundamentals/accessibility-intro/"},"Web Accessibility"),"."),(0,i.kt)("h4",{id:"internationalization-i18n"},"Internationalization (i18n)"),(0,i.kt)("p",null,"Internationalization (i18n) is the design and development of a product, application or document content that enables easy localization for target audiences that vary in culture, region, or language. Typically components shouldn't have to worry about i18n unless under few specific circumstances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Component uses strings - Strings used in the component shouldn\'t be hardcoded to a specific language (e.g. "Prev"/"Next" in the controls of a photo gallery component). The strings can be specified as a prop with the English version as default'),(0,i.kt)("li",{parentName:"ul"},"Order of content matters - Does your component support RTL (right to left) languages like Arabic and Hebrew?")),(0,i.kt)("h4",{id:"multi-device-support"},"Multi-device support"),(0,i.kt)("p",null,"Is the component expected to be used on mobile web? Mobile devices have unique constraints - they have less powerful hardware and viewport size is smaller. Hence things could be done differently to allow the component to work better on mobile devices - making a conscious effort to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Not use too much memory - using too much memory makes the device perform slower"),(0,i.kt)("li",{parentName:"ul"},"Increasing the hit box of interactive elements - fingers have an easier time tapping on the right element")),(0,i.kt)("h4",{id:"security"},"Security"),(0,i.kt)("p",null,"Most of the time, components aren't exposed to security vulnerabilities, but it can still happen. Here are the more common security vulnerabilities you should be aware of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XSS - Is your component vulnerable to cross-site scripting (XSS)? E.g. Do you render user input via ",(0,i.kt)("inlineCode",{parentName:"li"},".innerHTML")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"dangerouslySetInnerHTML")," (React-specific)?"),(0,i.kt)("li",{parentName:"ul"},"CSRF (Cross-Site Request Forgery)"),(0,i.kt)("li",{parentName:"ul"},"Clickjacking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mathiasbynens.github.io/rel-noopener/"},(0,i.kt)("inlineCode",{parentName:"a"},"rel=noopener")))),(0,i.kt)("h2",{id:"helpful-articles"},"Helpful articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://adamsilver.io/blog/building-an-accessible-autocomplete-control/"},"Buillding an accessible autocomplete control"))))}p.isMDXComponent=!0},7462:function(e,t,n){function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return a}})}}]);