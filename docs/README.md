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
Domain rubiconsac.com registered with Cloudflare

## Build notes

## Implementation notes

### MUI

I find MUI significantly harder to use than advertised. Defaults seem strange and have to wrap everything in `Typography`. Text for mobile is really big, so everything wraps all the time

#### Viewport width vs text size

MUI screen sizes
- xs, extra-small: 0px
- sm, small: 600px
- md, medium: 900px
- lg, large: 1200px
- xl, extra-large: 1536px

Bootstrap screen sizes
- xs, extra-small: 0px
- sm, small: 576px
- md, medium: 768px
- lg, large: 992px
- xl, extra-large: 1200px
- xxl: extra-extra-large: 1400px

Some smartphone screen widths as reported by css
- 250px: iphone SE 2020
- 320px: iPhone SE, iPhone 5
- 360px: Samsung galaxy S10
- 375px: iPhone 6, 7, 8
- 390px: iPhone 12

(from https://www.viewportsizer.com/devices/)

So if a root font size of 16px is used and not scaled, many phones are only going to get a few characters per line. This creates particular problems for titles and buttons, where a row of buttons could all end up on a single line, making it hard for users to find the buttons and what they relate to further down the screen. So conventional wisdom with breakpoints misses an essential use case

So, a more mobile friendly set of breakpoints with root font-size might be
- 0px 12px
- 260px 12px
- 330px 14px
- 400px 14px
- 600px 16px

(above means for instance 0px-260px 12px font-size, above 600px )

A better Title/h1 might be to use say `5vw` (5% of viewscreen width), with a `clamp()`








