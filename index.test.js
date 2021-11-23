const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { baseValue: 16 }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('replaces positive rem values with pixels', async () => {
  await run('.m-2 { margin: 0.125rem 7em; }', '.m-2 { margin: 2px 7em; }')
})

it('replaces negative rem values with pixels', async () => {
  await run('.m-2 { margin: -0.125rem 7em; }', '.m-2 { margin: -2px 7em; }')
})

it('handles values < 0 with no leading 0', async () => {
  await run('.m-2 { margin: -.125rem 7em; }', '.m-2 { margin: -2px 7em; }')
})

it('does not add units to 0 values', async () => {
  await run('.m-2 { margin: 0rem 7em; }', '.m-2 { margin: 0 7em; }')
})

it('does not process non rem values', async () => {
  await run('.font { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }', '.font { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }')
})

it('considers the baseValue', async () => {
  await run('.m-2 { margin: -0.125rem 7em; }', '.m-2 { margin: -1.25px 7em; }', { baseValue: 10 })
})
