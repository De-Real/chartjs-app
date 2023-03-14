# Configurable chart app

It's a simple adaptive application where user can enter his data and render it as chart. Chart is encapsulated component that can be exported and easily use in projects. Stack: React, TypeScript, chart.js, styled-components.

Deployed version: [link](https://de-real.github.io/chartjs-app/)

## Notations

* Values in the "X axis labels" and "Y axis values" input fields can be changed by the user.
* When the values change, the chart must automatically re-render with the updatedlabels/values when the input fields lose focus or the user presses "Enter"
* The chart style must automatically change when the user changes the radio button selection between "Bar chart",  "Line chart" and "Pie chart". 
* Application is extensible and new chart types can be added without a lot of affords.


## Authors

 Andrii Vynarchuk - [@de-real](https://github.com/De-Real)


## Running

Project was created using Create-React-App template

To run this project run

```bash
  npm start
```

To build this project run

```bash
  npm run build
```