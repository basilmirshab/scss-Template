# SCSS to CSS HTML Template Using gulp

This is a project that uses Gulp to automate the conversion of SCSS (Sassy CSS) files into regular CSS files, and also uses BrowserSync to enable live reloading of the browser when changes are made to the SCSS or HTML files.

## Installation
To install the dependencies, run:
```
 npm install 
```
This will install Gulp, BrowserSync and other required packages.

## Usage
To run the SCSS to CSS conversion and start the BrowserSync server, simply run:

```
 gulp watch 
```
This will look for any changes in .scss files in the scss folder and convert them into a single CSS file in CSS folder name as style.css, you also get a  minified version there.

## Configuration

You can configure the input and output folders by modifying the src and dist variables in the gulpfile.js file. You can also modify other settings such as the output style (e.g. expanded, compressed) and source maps.

*Happy SCSS-to-CSS conversion!*

## License

This project is licensed under the MIT License. Feel free to use it for your own projects.