# Bitnami Pattern Lib (UI)

This project is a CSS library based on the Bitnami Branding guide. To make it more maintainable,
it's split in two main folders:

* `foundations`: it includes the basic branding variables for any Bitnami User Interface. It provides the foundations like font size, font families, colors and base styles for standard HTML tags.
* `components`: it contains a set of prebuilt components that we can reuse in Bitnami projects. Those components may be very simple, like buttons or paragraphs with a background (notes). However, it also defines complex structures like menus or layouts.

## Development

The environment is very simple, we only need to install the dependencies and run the `start` script
to start compiling the assets and generating the documentation.

```sh
npm install # or yarn install
```

Now, we can execute the `start` script. It will listen changes in files and refresh the output CSS
files. By default, distributed files are located in `dist` folder.

```sh
$ npm start # or yarn start
> npm-run-all -p dev docs:build docs:serve
Starting up http-server, serving ./docs/dist
Available on:
  http://127.0.0.1:8080
  http://192.168.1.44:8080
  http://172.18.5.17:8080
Hit CTRL-C to stop the server
[15:55:37] Using gulpfile ~/projects/ui/gulpfile.js
[15:55:37] Starting 'foundations'...
[15:55:37] Using gulpfile ~/projects/ui/gulpfile.js
[15:55:37] Starting 'components'...
[15:55:37] Starting 'docs:readme'...
[15:55:37] Starting 'images'...
[15:55:37] Finished 'docs:readme' after 9.43 ms
[15:55:37] Starting 'docs'...
[15:55:37] Finished 'docs' after 2.03 ms
[15:55:37] Finished 'images' after 49 ms
...
```

## Documentation

Bitnami UI comes with a powerful documentation site. Once you executed the development environment,
the documentation is located at [localhost:8080](http://localhost:8080).

## Deployment

To upload the assets to CloudFront, we use `gulp-s3-upload`. This library allows us to publish the
assets from a gulp task. You may notice we don't have any AWS credentials in the repository and we
don't read any variable in `gulpfile.js`. Deployments are executed from Jenkins and it injects the
location of the credentials file in `AWS_SHARED_CREDENTIALS_FILE` environment variable.

This environment variable is read by the `aws-sdk` automatically, so we don't need to define
anything.

## Usage

The CSS files of `dist` folder are distributed through
[Amazon CloudFront](https://aws.amazon.com/cloudfront/). We store the files in an specific S3
bucket and CloudFront read the files from it. Those files are publicly available in the
following location:

* https://d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ui.css
* https://d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ui.min.css
* https://d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ui.components.css
* https://d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ui.components.min.css

```html
<link rel="stylesheet" media="screen"
  href="//d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ui.min.css">
<link rel="stylesheet" media="screen"
  href="//d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ui.components.min.css">
```

This library doesn't include the required font families. You will need to add it to your project.
You have all the information at [Typography](/category/Foundations/Variables/index.html#Typography).

### Embed version

We recommend to use this pattern lib as a complete framework. However, there are specific use cases when we need to use this library in sites that already have their own base styles. To avoid conflicts between styles, we provide an `embed` version.

```html
<link rel="stylesheet" media="screen"
  href="//d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ui.embed.min.css">
<link rel="stylesheet" media="screen"
  href="//d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ui.components.embed.min.css">
```

All the rules in these files are scoped under the `.bitnami-ui` selector. So, they won't interfere with the styles of your site outside of `.bitnami-ui` blocks.

```html
<div>
  <!-- Non Bitnami UI styles are applied -->
  <div class="bitnami-ui">
    <!-- Bitnami UI styles are applied -->
  </div>
  <!-- Non Bitnami UI styles are applied -->
</div>
```
