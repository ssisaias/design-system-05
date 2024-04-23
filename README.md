A Design System using React + tailwindcss + Storybook

## Getting started

To build the common dependencies: ```npm run build``` on the root folder

### Turbo

With turbo the tailwind instructions below are no longer necessary, just run ```npm run dev``` on the root folder and evertyhing will start.

### Tailwind

- To generate the css output file, cd into the packages/react folder and run
```$ npx tailwindcss -i .\src\globals.css -o ./src/output.css```

(optionally use the --watch argument at the end)

Solution below is no longer necessary with Turbo
> ~~While storybook is running, to view the changes in realtime, we need to run both the react and tailwind commands in separate terminals. For example, for me to see the changes reflect in storybook for a component inside packages/react.~~
>> ~~Open three terminals, one running ```npm run dev``` from packages/docs, another two terminals each running inside packages/react ```npm run dev``` and the tailwind command above with --watch~~

Components

- [] Text
- [] Heading
- [] Box
- [] Button
- [] TextInput
- [] TextArea
- [] Checkbox
