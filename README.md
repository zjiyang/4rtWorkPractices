# 4rtWorkPractices

A daily creative coding practice: one small p5.js sketch a day, collected on a calendar.

**Live site:** https://zjiyang.github.io/4rtWorkPractices/

Pick a day on the calendar to run that day's sketch. Days that have reference images show them below the calendar; when a day has more than one, click the image to see the next.

## About

I came to computer science from film production. This site is where I keep a daily practice: write a small sketch, run it, change a number, and watch what happens on screen.

I feel lucky to write these sketches by hand, without AI. In a time when so much code can be generated, I want to keep one place where I simply enjoy writing code and seeing how small changes turn into visual ones. That joy of making something every day feels rare, and I'd like to hold on to it.

As I learn, many ideas start from [Tim Rodenbröker](https://timrodenbroeker.de/)'s creative coding work and tutorials. I study a technique from one of his Processing tutorials and bring it to life again, with my own hands, in p5.js. The code may be the same, but a visual work lives differently in each person who makes it: the experience of making it is mine, and so is what I go on to build from it. Each day is a small experiment: a grid, a wave, an orbit, a pattern built from simple shapes and rules.

This is still the very beginning. I don't know yet where it will go. For now, it's a way to make sure there is always a chance to create something each day.

## Built with

- [p5.js](https://p5js.org/) for the sketches
- HTML, CSS and plain JavaScript for the site, with no build step
- GitHub Pages for hosting, published from the `docs/` folder

## Project structure

```
docs/
├── index.html            the page: sketch viewer on the left, calendar on the right
├── calendar.js           builds the calendar and lists which days have sketches
└── sketches/
    └── 2026-11-10/
        ├── index.html    loads p5.js and the sketch
        ├── sketch.js     the day's sketch
        └── references/   reference images for that day
```

Each sketch runs inside an iframe, so one sketch can't break another or the rest of the page.

## Run it locally

The page loads sketches and images from local files, which browsers block when you open the HTML file directly. Serve the folder instead:

- In VS Code, install the **Live Server** extension, right-click `docs/index.html` and choose **Open with Live Server**, or
- Run `python3 -m http.server` inside `docs/` and open http://localhost:8000

## Adding a day

1. Create a branch from `main`, e.g. `sketch/2026-11-15`
2. Write the sketch in `docs/sketches/2026-11-15/sketch.js` and put any reference images in its `references/` folder
3. In `docs/calendar.js`, uncomment that date and list its reference images, e.g. `'2026-11-15': ['still-01.jpg'],`
4. Check it with Live Server, then commit, open a pull request and merge into `main`

`main` is what's live. GitHub Pages redeploys a minute or two after each merge.

## Ideas for later

Nothing here is fixed, but some directions I'm thinking about:

- Move the sketch list out of `calendar.js` into a `sketches.json` data file
- Replace the per-day `index.html` copies with one shared viewer page
- Grow the site into a full portfolio with my films and photographs, rebuilt as a React app

## Author

Jiyang Zhang · [github.com/zjiyang](https://github.com/zjiyang)
