# Bitnami User Interfaces (Bitnami UI)

This project contains the CSS code to add Bitnami Branding colors and styles to our web projects. It's split in to main folders that represents the two libraries we can import:

* `foundations`: This project includes the basic branding variables for any Bitnami User Interface. It provides the foundations like font size, font families, colors and base styles for standard HTML tags.
* `components`: This library contains a set of prebuilt components that we can use in Bitnami projects. Those components may be very simple, like buttons or paragraphs with a background (notes). However, it also defines complex structures like a menu or a layout.

## Development

First of all, please read the _CSS Foundations_. The environment is really
simple, we only need to install `gulp` and the dependencies to compile the entire project.

```sh
npm install -g gulp
npm install
```

Now, we can execute the command `gulp`. It will listen changes in files and refresh the output
CSS files. By default, distribution files are located in `dist` folder.

```sh
gulp
# [16:24:53] Using gulpfile ~/projects/bitnami-ui/gulpfile.js
# [16:24:53] Starting 'foundations'...
# [16:24:53] Finished 'foundations' after 66 ms
# [16:24:53] Starting 'dist'...
# [16:24:53] Finished 'dist' after 30 us
# [16:24:53] Starting 'default'...
# [16:24:53] Finished 'default' after 17 ms
```

## Documentation

Bitnami UI comes with a powerful documentation. It's a static site. You need to execute the
following command and navigate to [localhost:8080](http://localhost:8080).

```sh
npm run docs:serve
```

Also, if you execute `gulp` in another tab of the terminal, the documentation will be reloaded
with every change.
