<p align="center">
  <img src="https://user-images.githubusercontent.com/4056725/36491131-56b86eb6-172a-11e8-9a0f-ccca743516e3.png" width="630"/>
  <br/>
  <br/>
</p>

HEx is the Design System we use in all the Bitnami user interfaces (UI). It unifies all the projects under the same design tokens and styleguide. This design system also provides you with a complete pattern lib and different JS libraries to make it interactive.

You can find all the documentation of HEx in [design.bitnami.com](https://design.bitnami.com).

* [Packages](#packages)
* [Installation](#installation)
* [Usage](#usage)
* [Development](#development)
  * [Working with the packages](#working-with-the-packages)
  * [Execute npm scripts in packages](#execute-npm-scripts-in-packages) 
  * [Generating the documentation](#generating-the-documentation)
  * [Build the project](#build-the-project)
* [Contributing](#contributing)
* [License](#license)

## Packages

HEx repo is managed as a monorepo and it's composed of many npm packages. All of them are located in the [`packages/`](https://github.com/bitnami/hex/tree/master/packages) folder.

| Package | Version | Description |
| --- | --- | --- |
| [hex](https://github.com/bitnami/hex/tree/master/packages/hex) | - | HEx core + components library. This library only includes CSS code |
| [hex-core](https://github.com/bitnami/hex/tree/master/packages/hex-core) | - | HEx core components: design tokens, mixins and foundations |
| [hex-js](https://github.com/bitnami/hex/tree/master/packages/hex-js) | - | Native JS library for interactive components of the pattern lib |
| [hex-react](https://github.com/bitnami/hex/tree/master/packages/hex-react) | - | (Soon) React components based on HEx |
| [hex-docs](https://github.com/bitnami/hex/tree/master/packages/hex-docs) | (private) | HEx documentation site: [design.bitnami.com](https://design.bitnami.com) |

## Installation

Check the documentation: [design.bitnami.com/#installation](https://design.bitnami.com/#installation)

## Usage

Check the documentation: [design.bitnami.com/#usage](https://design.bitnami.com/#usage)

## Development

To manage this monorepo, we use [Lerna](https://lerna.io). This tool allows us to work with the internal dependencies of the different packages and publish new versions easily.

Currently, lerna is configured in the default mode so every new version in a package requires to bump the version of all packages. The reason of this mode is to match JS libraries with the version of the HEx pattern lib.

Lerna is widely used in the commands, so first of all, we recommend you to install it as a global package:

```
npm i -g lerna # or yarn global add lerna
```

Then, you have to install the dependencies of the proejct and the different packages. Lerna will take care of install the internal dependencies as symlinks and the other dependencies with Yarn:

```
yarn install && lerna bootstrap
```

### Working with the packages

Every package is a single unit and they have their own npm scripts. Generally, the available scripts are:

|Script| Description |
| --- | --- |
| `start` | Start the project in development mode with a watcher. The distributed files of the project will be recreated every time you change a file |
| `build` | Build the package **ready for production** |
| `build:dev` | Build the project in development mode. Distributed files are present in the `packages/hex*/dist` folder |

Other packages like [hex-docs](https://github.com/bitnami/hex/blob/master/packages/hex-docs/package.json#L7) and [hex-js](https://github.com/bitnami/hex/blob/master/packages/hex-js/package.json#L6) have more npm scripts. 

### Execute npm scripts in packages

**To run a command of an specific package, I recommend you to use lerna**. For example, if you want to work on the `hex` package, you can start it in development mode using the following command from the root folder of the project:

```
lerna run --scope @bitnami/hex --stream start
```

The `--scope` option filter the packages of the repo. Notice that you can execute the `start` script of several packages adding more packages to the scope. You can also remove the `--scope` option to execute the command in all packages or use the `--ignore` option. The `--stream` option displays the output of the command in the different repos:

```
lerna run --scope @bitnami/hex --scope @bitnami/hex-core --parallel --stream start
```

```log
lerna info version 2.9.0
lerna info scope [ '@bitnami/hex', '@bitnami/hex-core' ]
lerna info run in 2 package(s): npm run start
@bitnami/hex-core: yarn run v1.3.2
@bitnami/hex: yarn run v1.3.2
@bitnami/hex-core: $ gulp
@bitnami/hex: $ gulp
@bitnami/hex-core: [16:47:10] Using gulpfile ~/projects/bitnami/hex/packages/hex-core/gulpfile.js
@bitnami/hex-core: [16:47:10] Starting 'css'...
@bitnami/hex-core: [16:47:10] Finished 'css' after 183 ms
@bitnami/hex-core: [16:47:10] Starting 'default'...
@bitnami/hex-core: [16:47:10] Finished 'default' after 46 ms
@bitnami/hex: [16:47:10] Using gulpfile ~/projects/bitnami/hex/packages/hex/gulpfile.js
@bitnami/hex: [16:47:10] Starting 'css'...
@bitnami/hex: [16:47:10] Starting 'images'...
@bitnami/hex: [16:47:10] Finished 'images' after 79 ms
@bitnami/hex: [16:47:11] Finished 'css' after 645 ms
@bitnami/hex: [16:47:11] Starting 'default'...
@bitnami/hex: [16:47:11] Finished 'default' after 63 ms
```

You can find more information and options for the `lerna run` command in the [lerna documentation](https://github.com/lerna/lerna#run).

### Generating the documentation

The documentation is also present in the [`packages/hex-docs`](https://github.com/bitnami/hex/tree/master/packages/hex-docs) folder. To generate it and watch for changes in the other projects, just execute the `start` script:

```
lerna run --scope @bitnami/hex-docs --stream start
```

### Build the project

Use lerna to build all the different packages:

```
lerna run build
```

## Contributing

Thank you for be interested in contributing this project. Before starting with your contribution, you should know that this project is under the Bitnami Styleguide. Aestethic changes will be discussed internally and may not be accepted. If you are interested in a new component, please [create an issue](https://github.com/bitnami/hex/issues/new) to talk about it.

Generally, this is the workflow to contribute the project:

1. Create an issue and discuss about the feature or bug
2. Fork the project
3. Read the [Development](#development) guide
4. Apply the changes to the code
5. Create a new pull request and provide information about the changes and some screenshots
6. Merge and publish!

## License

The HEx design system is released under the [Apache-2.0 license](https://github.com/bitnami/hex/tree/master/LICENSE).

Copyright © 2018 BitRock Inc. (DBA Bitnami). The Bitnami names, logos and all product names are trademarks of BitRock Inc.
