# Rubicon

Simple jamstack website to support a wargame conference. This is a one off conference, so won't need extensive editing in the future

Provides general information and game details

Built using vite, react, typescript and CoPilot, partly to test out these technologies


## Technologies

- react, vite, typescript
- mui - a react implementation of google material design
- github

## Deployment

repo hosted on github

https://github.com/johnlobster/rubicon

### Testing

`npm run dev`

### Cloudflare pages

Deployed at https://rubicon-6k5.pages.dev/

## Build notes

## Implementation notes

### MUI

I find MUI significantly harder to use than advertised. Defaults seem strange and have to wrap everything in `Typography`. Text for mobile is really big, so everything wraps all the time

####

I made font sizes smaller for mobile. Adjusted h1-h6 to use mix of fonts. Done in `theme.ts`







