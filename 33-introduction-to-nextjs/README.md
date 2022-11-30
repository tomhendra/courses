---
title:: Introduction to Next.js
type:: Course
author:: Scott Moss (Netflix)
completed:: 03/03/21
url:: https://frontendmasters.com/courses/next-js/
certificate:: No certificate provided
logseq:: false
---

&nbsp;
<div align=center>
  <img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
</div>
&nbsp;

<h1>Introduction to Next.js</h1>

- [1. Introduction](#1-introduction)
  - [1.1. Overview](#11-overview)
  - [1.2. What about create react app](#12-what-about-create-react-app)
  - [1.3. What about Gatsby](#13-what-about-gatsby)
  - [1.4. When to use Next.js](#14-when-to-use-nextjs)
    - [1.4.1. Do you only need a single page app?](#141-do-you-only-need-a-single-page-app)
    - [1.4.2. Do you need a static site, like a blog, that's also a SPA?](#142-do-you-need-a-static-site-like-a-blog-thats-also-a-spa)
    - [1.4.3. Need SSR, an API, and all the above?](#143-need-ssr-an-api-and-all-the-above)
  - [1.5. Getting Started](#15-getting-started)
    - [1.5.1. The easy way](#151-the-easy-way)
    - [1.5.2. The still pretty easy way](#152-the-still-pretty-easy-way)
- [2. Routing](#2-routing)
  - [2.1. Routing with Pages](#21-routing-with-pages)
  - [2.2. Folders and routes](#22-folders-and-routes)
  - [2.3. Dynamic routes](#23-dynamic-routes)
    - [2.3.1. Catch-all routes](#231-catch-all-routes)
    - [2.3.2. Optional Catch-All](#232-optional-catch-all)
  - [2.4. Non-pages](#24-non-pages)
- [3. Navigation](#3-navigation)
  - [3.1. Link component](#31-link-component)
  - [3.2. Programmatic routing](#32-programmatic-routing)
- [4. Styling](#4-styling)
  - [4.1. Theme UI](#41-theme-ui)
- [5. Configuration](#5-configuration)
  - [5.1. Customizing Next.js config](#51-customizing-nextjs-config)
  - [5.2. Plugins](#52-plugins)
- [6. API Routes \& Handlers](#6-api-routes--handlers)
  - [6.1. API Routes](#61-api-routes)
  - [6.2. API Handlers](#62-api-handlers)
- [7. Fetching Data](#7-fetching-data)
  - [7.1. Static data](#71-static-data)
  - [7.2. Static paths](#72-static-paths)
  - [7.3. Server data](#73-server-data)
  - [7.4. When to use what](#74-when-to-use-what)
  - [7.5. Fetch notes](#75-fetch-notes)
  - [7.6. Rendering Modes](#76-rendering-modes)
- [8. SSR](#8-ssr)
- [9. Deployment](#9-deployment)

## 1. Introduction

### 1.1. Overview

Next.js is a complete full-stack framework for modern apps that was created by the brilliant team at Vercel.

Here are some of the highlights that you get for free:

- Dev build system
- Production build system
- Prerendering
    - SSR
    - Build time
    - Static
- Routing
- API routes (*wow, really?*)

### 1.2. What about create react app

CRA is more of a boilerplate created to help you get started with React faster. Because CRA is just React, you're still on the hook for something. Routing, Server Side Rendering, and an API, along with other things.

### 1.3. What about Gatsby

Although similar to Next.js in some ways, Gatsby is not a full-stack framework and cannot create API routes or server-side rendering. Gatsby does have features like a content mesh, GraphQL support built-in, image optimization, and others that Next.js does not have.

### 1.4. When to use Next.js

> 💡 **tip** Save yourself some time and avoid starting a React app from scratch unless you use parcel 😛

#### 1.4.1. Do you only need a single page app?

Use Create React App

#### 1.4.2. Do you need a static site, like a blog, that's also a SPA?

Use Next.js or Gatsby.

#### 1.4.3. Need SSR, an API, and all the above?

Use Next.js

### 1.5. Getting Started

#### 1.5.1. The easy way

You can use `creat-next-app` to get started very quickly.

**npm**

`npx create-next-app`

**yarn**

`yarn create next-app`

This will install a boilerplate app and all of its dependencies. The project's `package.json` will have all the needed scripts ready for you as well.

#### 1.5.2. The still pretty easy way

We can set up a Next.js app from scratch. That's actually what we'll be doing in this course. In the desired directory already initialized with git and a package.json:

**npm**

`npm i next react react-dom --save`

**yarn**

`yarn add next react react-dom`

Next, we need to add some helpful scripts to our `package.json`

`"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}`

So what do these commands do?

`next` Will start Next.js in dev mode with hot reloading.

`next build` Will build your project and ready it for production.

`next start` Will start your built app, used in production.

> 🧠  remember: Next.js is a full-stack framework, by default, it needs to be hosted on a platform that supports Node.js

## 2. Routing

### 2.1. Routing with Pages

You don't need to interact with a router directly to create pages. Next.js has built on conventions to make creating routes as easy as creating a file.

To get started, create a directory on your called `/pages`. Next.js will associate any file in this directory as a route. The file names determine the route name or pattern, and whatever component is exported is the actual page.

Now let's create an index route by creating a file: `/pages/index.jsx`.

Next, let's create a component and export it:

```jsx
import * as React from "react";

function Home() {
  return <h1>Index Page</h1>;
}

export default Home;
```

Start your dev server:

**npm**

```bash
npm run dev
```

**yarn**

```bash
yarn dev
```

We should now be able to navigate the browser to the index route of our app and see our h1's content. I really appreciate conventions like this that make developing apps that much more fun!

Ok, big deal, we created an index page, but what about paths like `myapp.com/project/settings` and `myapp.com/user/1` where `1` is a parameter? Don't even trip; Next.js has you covered there.

### 2.2. Folders and routes

To create a path like `/project/settings` we can use folders in our `/pages` directory. For our note taking app, we need the following routes for now:

```bash
index => /
all notes => /notes
one note => /notes/:id
```

We already created the index route; let's create the all notes route:

```bash
pages
  notes
    index.jsx
```

By adding an `index` page in a folder, we're telling Next.js that we want this component to be the index route for this path. So in this case, navigating to `/notes` will render the `pages/notes/index.jsx` component.

Here's a placeholder component for that page that you can use.

```jsx
import * as React from 'react'

function Notes() {
	return <h1>Notes</h1>
}

export default Notes
```

### 2.3. Dynamic routes

Next.js makes it easy to create dynamic routes. Depending on if and how you want those pages to be prerendered will determine how you set them up. We're going to focus on creating dynamic routes that will not be built at build time but instead at run time on the server.

> 🧠 reminder: We'll cover prerendering later, so don't overthink right now.


So to create a dynamic route, we can create a file that looks like this:

```jsx
[id].jsx
```

Where `id` is the name of the parameter. You can name it whatever you want. The brackets are the syntax to create a dynamic route using file name conventions in the pages directory. So let's create our note route:

```jsx
pages
  notes
    index.jsx
    [id].jsx
```

We can access the `id` param inside our page component using the `useRouter` hook from the `next/route` module. This comes for free with Next.js.

```jsx
import * as React from "react";
import { useRouter } from "next/router";

function NotePage() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Note: {id} </h1>;
}

export default NotePage;
```

`router.query` is an object with any associated `params` on it which correlate to the filenames in brackets, so in the case of this page, `id`.

```jsx
router.query.id
             |
             |
            [id].jsx
```

#### 2.3.1. Catch-all routes

There's a beautiful feature that Next.js that allows us to define catch-all routes for when we're too lazy to make a page for each one.

<aside>
💡 **tip**: A lazy developer is a good developer, well, ...sometimes 🙄

</aside>

What's a catch-all route, you say? Think of it as a glob.

```jsx
this/folder/**
```

Where `**` means everything inside `folder`. We can do the same with our dynamic routes! All we need is to create a file in our pages directory like this:

```jsx
docs/[...param].jsx
```

So the ellipsis `...` is used in this example to same that this file will represent and route that matches `/notes/a` or `notes/a/b` or `notes/a/b/c/d/a/b`.  

You can then access all the params the same way you do with a single route param. The only difference is the value will be an array of the params in order.

```jsx
import * as React from "react";
import { useRouter } from "next/router";

// file => /notes/[...params].jsx
// route => /notes/a/b/c
// params === ['a', 'b', 'c']

function NotePage() {
  const router = useRouter();

  const { params } = router.query;

  console.log(params);

  return <h1>Note: {params} </h1>;
}

export default NotePage;
```

#### 2.3.2. Optional Catch-All

If you want to include the parent path in your catch-all route, you can use an optional catch-all route.

```jsx
docs/[[...param]].jsx
```

Just add another set of `[ ]` over your catch-all, and now `/docs` will be matched with all of its children. The params value on the `router.query` for the parent path will just be an empty object `{}`.

So when would you use catch-all routes? I find them useful for when you have a bunch of pages that have pretty similar if not identical layouts and style but have different content and need their own URL. Such things like docs and wikis are a perfect use case.

### 2.4. Non-pages

So pages are special, but what about when you just need a component? Next.js doesn't have any conventions or opinions about that. The community usually creates a `/src/components` folder where all the components live.

The `pages` directory can also be moved inside `src` if we prefer.

## 3. Navigation

### 3.1. Link component

Similar to an `<a>` tag, we can use the `Link` component from then `next/link` module.

```jsx
<Link href="/settings">
  <a>settings</a>
</Link>
```

The Link component allows us to do **client-side** routing. This is important because if we don't want that or are linking to another site, then we should just use an `a` tag instead.

You must have an `a` tag as the child of the `Link` component, but the `href` lives on the `Link`.

<aside>
💡 **tip**: Update your linter to not error because your `<a>` tag does not have an `href`

</aside>

The `href` prop takes a page name as it is in the pages directory. For dynamic routes, you will need the `as` prop as well.

```jsx
<Link href="/user/[id].js" as={`/user/${user.id}`}>
  <a>user</a>
</Link>
```

Let's link our pages together!

```jsx
// pages/index.jsx
import * as React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <h1>Index page</h1>

    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>)
```

```jsx
// pages/notes/index.jsx
import * as React from "react";
import Link from "next/link";

function Notes() {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div>
      <h1>Notes</h1>

      {notes.map((note) => (
        <div key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Notes;
```

```jsx
// pages/notes/[id].jsx
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function NotePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
}

export default NotePage;
```

### 3.2. Programmatic routing

For when you need to route between pages programmatically, you can use the router to do so. There are **[many methods](https://nextjs.org/docs/routing/introduction)** on the router that you can use, so we'll focus on the ones we'll use in this course.

Just like the `Link` component, use the router for client-side routing. To navigate to a page, you can use the `push` method, which works like `href` on the `Link` component.

```jsx
import * as React from 'react'
import { useRouter } from 'next/router'

export default function Example() {
  const router = useRouter()
  const id = 2

  return (
    <div>
      <button onClick={e => router.push('/')}>
        Go Home
      </button>

      <button onClick={e => router.push('/user/[id]', `/user/${id}`)}>
        Dashboard
      </button>
    </div>)
}
```

And that's all there is to routing! Our app doesn't look much like an app, no worries, we're going to fix that next.

## 4. Styling

Next.js comes with some styling conventions baked in, and they're pretty good. Because Next.js uses React, you can also use any other mechanism that works with React to style your apps.

> 💡 **tip** You might have to extend Next.js tp support your styling approach. More on that later.

When it comes to styling, you have global styles and component styles. For global CSS, you have to import them at the entry point of your app. Wait, where is the entrance to my Next.js app? It's actually created for you, but you can and have to create your own now that you want global styles.

Create an `pages/_app.jsx` file and add this:

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />}
```

This automatically gets created for you by default with the same code. In the `_app.jsx` you can import any CSS file, and the styles will be global now.

```jsx
import 'flexbox.css'
import '../mystyles.css'
```

Now, when you don't want global CSS, Next.js supports **[css modules](https://github.com/css-modules/css-modules)**. This will scope your CSS, avoiding collisions.


> 🐋 **deep dive**: a unique class name is created every import to reuse the same CSS class names

You can import a CSS module file anywhere in your app. To create a CSS module, you have to use a special syntax in the file name.

```jsx
styles.module.css
```

This makes CSS modules a perfect solution to styling components.

```jsx
components
  button.jsx
  button.module.css
```


> 💡 **tip** You can use a CSS pre-processor by extending Next.js. We'll cover that later.

I prefer to use a different solution when styling all my React apps, which we're going to use today.

### 4.1. Theme UI

The following section is not entirely specific to Next.js and takes on how I prefer to style my React apps. I recommend checking out to this branch if you don't want to copy and paste or follow this section.

**[theme ui](https://theme-ui.com/)** is a library that allows you to create theme objects and use them in your components. It also handles scoping and injecting the CSS into your app—pretty dope stuff.


> ⏩ TLDR; create an object representing a theme and use that theme for all your components

Let's get our app looking like an app. First, install some things.

**npm**

`npm i theme-ui @theme-ui/presets --save`

**yarn**

`yarn add theme-ui @theme-ui/presets`

Next, we'll create a theme. Make a file on the root of your app.

`theme.js`

Now add this theme:

```jsx
import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    }
  },
  styles: {
    ...roboto.styles
  }
}

export default theme
```

This object uses a preset theme with some extras I added. Throw in a `console.log(theme)` to see what's in there.

Next we'll create a Navigation component at `src/components/nav.jsx`

```jsx
// src/components/nav.jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Nav = () => (
  <header
    sx={{
      height: "60px",
      width: "100vw",
      bg: "primary",
      borderBottom: "1px solid",
      borderColor: "primary",
    }}
  >
    <nav
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        variant: "containers.page",
        height: "100%",
      }}
    >
      <Link href="/">
        <a sx={{ fontWeight: "bold", fontSize: 4, cursor: "pointer" }}>
          Note App
        </a>
      </Link>

      <Link href="/notes">
        <a sx={{ color: "text", fontSize: 3, cursor: "pointer" }}>notes</a>
      </Link>
    </nav>
  </header>
);

export default Nav;
```

A few subtle but **powerful** things here. First, lets talk about this:

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
```

Ummm, what is that, and how does this component render JSX without importing React? That comment is something called `JSX pragma`. It's a hint to the compiler about how to compile this file. The comment combined with the JSX import from `theme-ui` tells the compiler, babel, in this case, of what JSX tool to use to handle JSX in this file. It's the same reason you had to import React in your JSX files.

We need the theme-ui JSX to use the `sx` prop on all of our components. The `sx` prop allows us to add inline styles to components using CSS properties and values and values from our theme object that we created. It's **BEAUTIFUL** 💋.

And now, our pages.

```jsx
// pages/index.jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

function Home() {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>
          This is a really dope note taking app.
        </h1>
      </div>
    </div>
  );
}

export default Home;
```

```jsx
// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

function Notes() {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `This is my note ${i}` }));

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div key={note.id} sx={{ width: "33%", p: 2 }}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
```

```jsx
// pages/[id].jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {id} </h1>
    </div>)
}
```

We now need to wrap our app in the Theme UI provider. We have two options:

- wrap every page individually
- wrap the root component

Because we want to use Theme UI in our entire app, its safe to wrap the root. So in the `pages/_app.jsx` file:

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../src/components/nav'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>      
    </ThemeProvider>)
}
```

Theme UI is profound, and we barely scratched the surface. I highly recommend checking it out.

> 💡 **tip**: Checkout Baseweb from Uber which is similar to Theme UI

## 5. Configuration

### 5.1. Customizing Next.js config

If you want to change the build system's behavior, extend Next.js's features, or add ENV variables, you can do this easily in the `next-config.js` file.

Either export an object:

```jsx
module.exports = {
  webpack: {
    // webpack config properties
  },
  env: {
    MY_ENV_VAR: process.env.SECRET
  }
}
```

Or a function:

```jsx
const { PHASE_PRODUCTION_SERVER } = require('next/constants')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
      webpack: {
        plugins: [new BundleAnalyzerPlugin()]
      }
    }
  }

  return defaultConfig
}
```

Above I'm adding the bundle analyzer webpack plugin during a prod build of Next.js. You can check out all the **[different phases](https://github.com/vercel/next.js/blob/canary/packages/next/next-server/lib/constants.ts#L1-L4)** of Next.js.

Next.js is production-ready and handles almost everything, but don't be scared to reach into that config and extend what you need.

### 5.2. Plugins

The `next.config.js` file gives us the ability to do some powerful stuff. Because the config file has a convention, you should be able to use changes written by others. These are Next.js plugins.

They look like this:

```jsx
// next.config.js
const withOffline = require('next-offline')
const config = {
  // your next config
}

module.exports = withOffline(config)
```

Most plugins follow the `withPluginName` format. They also usually take your custom Next.js config, if any, to ensure its returned and consumed by Next.js. This allows you to compose plugins:

```jsx
// next.config.js
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withReactSvg = require('next-react-svg')
const config = {
  env: {
    MY_ENV: process.env.MY_ENV
  }
}

module.exports = withPlugins([
  withOffline,
  [withReactSvg, {
    // config for reactSvgPlugin
  }]
], config)
```

We're going to install and env plugin that makes it super simple to use env vars in our app.

First, let's install the modules we need.

**npm**

```bash
npm i next-env dotenv-load --dev
```

**yarn**

```bash
yarn add next-env dotenv-load
```

In your `next.config.js` file:

```jsx
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()
```

`dotenvLoad` grabs all env variables and injects them into the environment for us.

Next, create a `.env` file on the root and add some envs.

```
HELP_APP_URL=https://google.com
```

> ⚠️ warning: don't check `.env` files into git

Now, we'll use the env in our app. Go to the Nav component and add an `a` tag to link to the external app.

```jsx
// src/components/nav.jsx
<a sx={{
    color: 'text',
    fontSize: 3,
    cursor: 'pointer'
  }}href={process.env.HELP_APP_URL}>
  Help
</a>
```

## 6. API Routes & Handlers

### 6.1. API Routes

Next.js is a full-stack framework. Fullstack, as in it has a server, not just for development, but for rendering components on your server and it also for an API!

If we have an API that is only consumed by the frontend in the Next.js app we are building, it is recommended to colocate the API there too. 

Yes, you can legit ship an API right next to your App with no setup. Let's see how.

All we have to do is create an `api` folder in our `pages` director. The file names and paths work just like pages do. However, instead of building components in those files, we'll create API handlers.

```jsx
pages
  api
    hello.js
```

<aside>
💡 **tip**: Next.js API routes are not the same as Vercel's Serverless API functions, although the setup is similar.

</aside>

### 6.2. API Handlers

Now let's create some API handlers to handle data for our Notes app. The handlers are based on **[Connect](https://www.npmjs.com/package/connect)**, and **[Express](https://expressjs.com/)**.

A handler looks like this:

```jsx
// pages/api/data.js
// route => /api/data

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'hello' }))
}
```

By default, this handler will respond to all requests to `/api/data`. We need to split our logic based on the methods (GET, PUT, DELETE, etc.). We also need some way to use connect-based middleware, which would make building out these handlers much simpler.

We can quickly look at the incoming request and get the method, and we can create some HOF's to handle middleware, but I landed on an excellent package that helps with this.

```jsx
// pages/api/data
import nc from "next-connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send("Hello world");
  })
  .post((req, res) => {
    res.json({ hello: "world" });
  })
  .put(async (req, res) => {
    res.end("hello");
  });

export default handler;
```

Pretty clean! Now, let's create some API routes for our Notes app. We need some basic CRUD:

```jsx
create note => POST /api/note
update note => PATCH /api/note/:id
delete note => DELETE /api/note/:id
get one note => DELETE /api/note/:id
get all notes => DELETE /api/note/
```

So from above, we only have 2 routes: `/api/note/:id`

```jsx
/api/note/
```

First, let's create a place to store our data. We'll stick to in memory for now.

```jsx
// src/data/data.js
const notes = []

module.exports = notes
```

Next, we'll create the routes in the `page/api/` directory.

```jsx
pages
  api
    note
      [id].js
      index.js
```

```jsx
// pages/api/note/index.js
import nc from "next-connect";
import notes from "../../../src/data/data";

const handler = nc()
  .get((req, res) => {
    res.json({ data: notes });
  })
  .post((req, res) => {
    const id = Date.now();
    const note = { ...req.body, id };

    notes.push(note);
    res.json({ data: note });
  });
export default handler;
```

```jsx
// pages/api/note/[id].js
import nc from "next-connect";
import notes from "../../../src/data/data";

const getNote = (id) => notes.find((n) => n.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: note });
  })
  .patch((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    const updated = { ...note, ...req.body };

    notes[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));

    notes.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;
```

We can access the URL params on `req.query.paramName` just like with the client-side router.

## 7. Fetching Data

There are many ways to fetch data with Next.js. Depending on when you need the data and what you're doing with it, you have options.

Let's start with what you already know. You can continue to fetch the data client-side to react the same way you do now. Hooks, fetch, etc. for fetching data at runtime.

> 💡 **tip**: Next.js injects fetch into your environment for free on the client and server, and if the target browser doesn't support fetch it gets polyfilled.

> 💡 **tip**: Checkout [swr](https://swr.vercel.app/) and [react-query](https://react-query.tanstack.com/) for your client side data fetching needs.

Now, for fetching data ahead of time, we have three options.

1. `getStaticProps`
2. `getStaticPaths`
3. `getServerSideProps`

### 7.1. Static data

All of these methods are for prerendering Pages only. You cannot use them in components or client-side data fetching. Let's talk about `getStaticProps` on a page.

```jsx
// /pages/index.js

function IndexPage({ whatever }) { 
	// return some jsx 
}

export default IndexPage

export async function getStaticProps(context) {
  return {
    props: {
			whatever
		}
  }
}
```

By having your page export `getStaticPros`, Next.js will run this function at **build time**. Whatever your return as props will be passed into the exported page.


> 🐋 **deep dive**: The results of this function are saved into a JSON file and passed as props to the client's component at runtime.

This function and all other data fetching functions will only ever run on the server in a Node environment. The actual code won't even be bundled with the client code. That means you can do anything you would normally do on a server here.

- file system work
- connect to a DB
- crawl a website? Yup.

The `context` object is useful when the page is dynamic. The context will contain the value of the `params`. This function is not run at runtime in the browser, so where do the params come from?

That's where `getStaticPaths` come in.

```jsx
// /pages/blog/:slug.js

function IndexPage({ whatever }) { 
	// return some jsx 
}

export default IndexPage

export async function getStaticPaths() {
  // get all the paths for your posts from an API
  // or file system
  const results = await fetch("/api/posts");
  const posts = await results.json();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths };
  /* paths array contains a params object for every page that we render
  [
    {params: {slug: 'get-started-with-node'}},
    {params: {slug: 'top-frameworks'}}
  ]
  */
}

export async function getStaticProps({ params }) {
  const res = await fetch(`/api/post/${params.slug}`);
  const post = await res.json();
  return {
    props: { post },
  };
}
```

### 7.2. Static paths

If a page has a dynamic path `[id].jsx` and uses `getStaticProps`, it must also use `getStaticPaths` to prerender all the pages at build time into HTML.

The responsibility of `getStaticPaths` is to fetch all the generated paths for all the unique URLs and make them available to `getStaticProps` via `context.params`.

For this to work we need to return an object from `getStaticPaths` with a `paths` property on it, the value of which is an array containing a `params` object for every page that we render. 

We can now use `params` from the `context` object within the `getStaticProps` function.


> 💡 **tip**: use `fallback: true` on your return object for `getStaticPaths` if you have a big site and don't want to statically prerender all items at once, and instead opt in to render some later at runtime via SSR.

Not every dynamic path is able to be rendered ahead of time. We are not going to render a user page ahead of time for all users. There are other solutions to handling non-static pages which we will cover.

### 7.3. Server data

Lastly we have `getServerSideProps`. This will be called at runtime during every request. So unlike `getStaticProps`, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers.

We can think of it as like the API handlers we looked at before but inside the page.

```jsx
const IndexPage = () => {// jsx }
export default IndexPage

export async function getServerSideProps() {
  const response = await fetch(`https://somedata.com`)
  const data = await response.json()

  return { props: { data } }
}
```

### 7.4. When to use what

- **Do you need data at runtime but don't need SSR?** Use client-side data fetching.
- **Do you need data at runtime but do need SSR?** Use `getServerSideProps`
- **Do you have pages that rely on data that is cachable and accessible at build time? Like from a CMS?** Use `getStaticProps`
- **Do you have the same as above but the pages have dynamic URL params?** Use `getStaticProps` and `getStaticPaths`

### 7.5. Fetch notes

We won't get into creating a UI to create notes, so let's just seed our in-memory DB with some notes.

```jsx
// src/data/data
const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`}))
```

Let's fetch some notes from our API in our app now. First, getting all the notes. Because the notes can be created and are dynamic, we can fetch them client-side or server-side render. Let's do the latter.


> ⚠️ **warning**: Don't use getServerSideProps unless absolutely necessary. Because it computes on every requests, it can be slow.

```jsx
// pages/notes/index.jsx

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note/`)
  const {data} = await res.json()
  return {
    props: {notes: data}
  }
}
```

We'll do the same for getting one note. Except, we'll redirect if the request fails.

```jsx
// pages/notes/[id].jsx

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`)

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}
```

Next, we'll simulate a CMS and fetch the content for the landing page.

```jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

export default ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: "Look at my note app tho",
      },
    },
  };
}
```

Next.js just keeps improving when it comes to data fetching; it's by far my favorite part. Little to no overhead and extremely powerful. It makes developing open-source that integrates with Next.js a breeze.

### 7.6. Rendering Modes

Next.js looks at the data fetching in your page components to determine how and when to prerender your page. Here are the different modes:

1. `Static Generation` Pages built at build time into HTML. CDN cacheable.
2. `Server-side Rendering` Pages built at run time into HTML. Cached after the initial hit.
3. `Client-side Rendering` Single-page app

By default, all pages are prerendered, even if they don't export a data fetching method. You choose the prerendering method (static or SSR) by what data function you export in your page component.

For client-side rendering, fetch your data **inside** your components. You can mix and match these rendering modes to have a genuinely hybrid app ✨.

## 8. SSR

Sometimes you just need to skip rendering some component on the server because:

- it depends on the DOM API
- it depends on client-side data
- something else

Next.js supports dynamic imports that, when used with components, will opt out of SSR.

```jsx
import dynamic from 'next/dynamic'

const SponsoredAd = dynamic(
  () => import('../components/sponsoredAd'),
  { ssr: false }
)

const Page = () => (
  <div>
    <h1>This will be prerendered</h1>

    {/* this won't*/}
    <SponsoredAd />
  </div>)

export default Page
```

## 9. Deployment

Depending on how you build your app will determine where you can deploy to.

By default, a Next.js app has to be deployed to an environment that supports Node.js. So that's pretty much everywhere expect static hosting services like netlify (not easily anyway).

> 💡 **tip**: You should deploy to Vercel. Vercel literally made Next.js.

If you export your app to be pure static (no need for Node), you can deploy to static hosting services. You can use: `next export`

To do that. There are some **[gotchas](https://nextjs.org/docs/advanced-features/static-html-export)**, though.

> ⚠️ **warning:** Be sure to change the hardcoded API URLS in the fetch calls to use and ENV var for the live URLS.

We're going to deploy to Vercel. It's actually pretty easy. Install the CLI **npm** `npm i -g vercel`

**yarn** `yarn global add vercel`

In your project, run `vercel`

That's it! If your project is already on Github, you can deploy that way from vercel as well. Create an account and connect your Github account.