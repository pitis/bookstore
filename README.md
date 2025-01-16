# Introduction

Hello there, my name is Pitis and this is my take on the BookStore. As for the technology stack, for this project I chose:

- React & Typescript
- Vite
- Ionic for components
- React-query for "api calls"
- react-hook-form for formData
- zustand for client data
- docker just in case you need it

## Architecture

"api" - folder for all api calls, very easy to create calls with react-query. In this case,
keeping the stock was a little harder so it has some extra refreshes, but all the features are there.

"layout" - layout component so that we can have the cart as the sidebar in all pages

"pages" - folders with components for the pages

"components" - a folder with our components, in this case, only the cart

"stores" - folder for client data stores, using zustand

## Reasoning

Ionic comes automatically with a bunch of components and react-router, so I thought it's a good decision to get something running ASAP.

I chose zustand because lately I've been finding it to be the easiest and fastest choice when dealing with client state data.

React-query is the defacto standard as for the past years regarding api calls. It does everything, including caching

react-hook-form is my choice for form data. It's very good, unfortunately in this case Ionic has some extra events for the inputs,
so I just created some normal inputs for the form.

## Summary

Features not implemented:

- accessibility
- tests

The trade-offs I made were most present in the profile page. Had I had more time, I would have either used MaterialUI for this,
or maybe just use TailwindCSS. The rest of the logic of the app is there, so I wouldn't change there anything. I do find it weird that
you need to decrease the visual stock when you add in your cart, not sure I saw that on any website, but it's implemented as well.
So mostly the design of the app!
