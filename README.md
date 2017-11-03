# Bitnami Design System

This project is a CSS library based on the Bitnami Branding guide. To make it more maintainable, it's split in two main folders:

* `foundations`: it includes the basic branding variables for any Bitnami User Interface. It provides the foundations like font size, font families, colors and base styles for standard HTML tags.
* `components`: it contains a set of prebuilt components that we can reuse in Bitnami projects. Those components may be very simple, like buttons or paragraphs with a background (notes). However, it also defines complex structures like menus or layouts.

## Development

The environment is very simple, we only need to install `gulp` and the dependencies to compile the entire project.

```sh
npm install -g gulp
npm install
```

Now, we can execute the command `gulp`. It will listen changes in files and refresh the output CSS files. By default, distributed files are located in `dist` folder.

```sh
gulp
# [16:24:53] Using gulpfile ~/projects/design-system/gulpfile.js
# [16:24:53] Starting 'foundations'...
# [16:24:53] Finished 'foundations' after 66 ms
# [16:24:53] Starting 'dist'...
# [16:24:53] Finished 'dist' after 30 us
# [16:24:53] Starting 'default'...
# [16:24:53] Finished 'default' after 17 ms
```

## Documentation

The Design System comes with a powerful documentation site. Te preview it, execute the
following command and navigate to [localhost:8080](http://localhost:8080).

```sh
npm run docs:serve
```

Also, if you execute `gulp` in another tab of the terminal, the documentation will be reloaded with every change.

## Production

The CSS files of `dist` folder are distributed through
[Amazon CloudFront](https://aws.amazon.com/cloudfront/). We store the files in an specific S3
bucket and CloudFront read the files from it. Those files are publicly available in the
following location:

* https://d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ds.css
* https://d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ds.min.css
* https://d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ds.components.css
* https://d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ds.components.min.css

```html
<link rel="stylesheet" media="screen"
  href="//d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ds.min.css">
<link rel="stylesheet" media="screen"
  href="//d1d5nb8vlsbujg.cloudfront.net/bitnami-ui/{VERSION}/bitnami.ds.components.min.css">
```

To upload the assets to CloudFront, we use `gulp-s3-upload`. This library allows us to publish the assets from a gulp task. You may notice we don't have any AWS credentials in the repository and we don't read any variable in `gulpfile.js`. Deployments are executed from Jenkins and it injects the location of the credentials file in `AWS_SHARED_CREDENTIALS_FILE` environment variable.

This environment variable is read by the `aws-sdk` automatically, so we don't need to define
anything.
