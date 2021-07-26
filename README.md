# Book-node-api

The web source code of Book-node-api - Node, Typescript, Express, and MongoDB

# Table of Contents

- [Book-node-api](#book-node-api)
  - [Requirements](#requirements)
  - [Usage](#usage)
    - [My Git Branching Model](#my-git-branching-model)
    - [Code linting and formatting](#code-linting-and-formatting)
    - [Getting Started on a Task](#getting-started-on-a-task)
    - [Commits](#commits)
  - [Publishing for Demoing](#publishing-for-staging-demoing)
  - [Building for Production](#building-for-production)
  - [Unit Testing with jest](#unit-testing-with-jest)
  - [Run Github Action](#run-github-action)

### Requirements

For development, you will need Node.js, MongoDB, nodemon, and Typescript installed

## Usage

- Clone the repo and enter the project folder

```
git clone git@github.com:CornetS28/-book-node-api.git
cd -book-node-api
```

- Install dependencies: `yarn install`

- Run:

  ```
    yarn dev
  ```

That should be enough to get the backend going.

## Book-node-api Git Branching Model

I have followed a modified version of [Nvie's widely used Git branching model](https://nvie.com/posts/a-successful-git-branching-model/). Basically:

- I have two primary branches:

  1. `main`: For production releases
  2. `develop`: For development work

- For new features, I have created a new branch based on `develop` that I have merged back into `develop` on completion. We cannot name them anything, and especial not the followings:

  - main
  - develop

- For creating a branch, I have ticked to the following pattern: `feature/a-significant-name'

- For bugs related issues, I have ticked to the following pattern: `fix/a-significant-name'

### Code linting and formatting

I have started with the code formatting using Prettier, which makes my code more readable by other humans. ALso I have used the ESLint linter.

My codes or tasks would not be pushed until it passed the automated linting tests.

To get started, I have installed those two extensions within VSCode:

1. [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

This was enough for my editor to automatically format my code or/and point out errors in my whole codebase that I need to handle manually.

### Getting Started on a Tasks

With that said, to quickly started working on a task, I have followed those steps

1. Cloned the project locally

```
git git@github.com:CornetS28/-book-node-api.git
cd -book-node-api
```

2. Created a new branch for the feature I am working on. Always branched out from `develop` for creating a new branch

```
git checkout -b [feature/a-significant-name]
```

3. Done the work and write succinct commit messages.
4. Pushed to `origin` on the new branch I created in step 2
5. Created a new Pull Request on GitHub. (from my branch to the `develop` branch. NOT `main`)

## Commits

In this project, I have chosen to use conventional commits. This implies that I have uses `type` to push our work done on Github. In other words, my commits had to contain the following structural elements to able to push on this repo:

1. fix: a commit of the type `fix` patches a bug in my codebase (this correlates with PATCH in Semantic Versioning). Example: `git commit -m "fix: fix styling issues in the home page"`
2. feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning). Example: `git commit -m "feat: add price in the items"`
3. There are also other types such as chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.

My work WOULD NOT be pushed unless I follow the conventional commits rules. If my branch contains eslint errors, it will not be push either. My commits must be 1 to 88 i length. I have used this length because it is the conventional rule. It cannot exceed this length. There are many packages out there I could have used to apply conventional commits. However, I have chosen to work with `husky`.

- To vue my git log (history):

  - run
    ```
    yarn release
    ```

- To learn more about conventional commits, please check the following links: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), [husky](https://github.com/leoroese/blog-tube), [Auto Change Log](https://github.com/jsbroks/auto-changelog/blob/master/package.json).

## Publishing for Demoing

TBD

## Building for Production

TBD.

## Run Github Action

TBD
