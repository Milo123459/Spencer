# Hi 👋

This file goes over a few things you should keep in mind when contributing.

# 😒 Installing

You need to install the following things:

- [Git](https://git-scm.com)
- [NodeJS V14+](https://nodejs.org)
- Yarn (type npm i -g yarn)

# ⚡ Setup

In order to contribute you need to fork the repo.

Once you've forked it, clone the repo on your machine (or an online code editor like gitpod).

No need to install dependencies, we use Yarn [Berry](https://github.com/yarnpkg/berry) - a glorified name for Yarn 2. We use the PnP (PlugNPlay) feature on Yarn to allow for 0 installs. (all though, to be sure, run `yarn`)

Some things to keep in mind:

- We use [husky](https://github.com/typicode/husky) - if it doesn't work, try running `yarn add husky`, if it still doesn't, don't worry, simply run the following commands:
  `yarn doctor`, `yarn analyze`, `git add .`, `lint-staged` - if possible try and get husky working, as we use commitlint to make sure commit messages follow a strict standard.
- We use [prettier](https://prettier.io) as a linter.
- We use [codefactor](https://codefactor.io) - PRs can be blocked if you go against our config.

# 🤯 Writing the code

CD into your repo and run `yarn nb my-feature-name` - whenever making a new branch, use `yarn nb`!

If you are making a command, event or DB model you can try out `yarn new`, this set's up everything for you. If this doesn't work, have no fear! Try observing other commands/events/models and going with that.

Editing someting? That's nice, find the file and uh... write the code!

Commiting!

Easy as hell, just do this:

`yarn git "commit-message-following-our-standards!"` - note, the branch has to exist on the hosted repo first.

# 👍 PR standards

We expect PRs to follow a few guidelines, for example:

- If you add an info command and a fun command in one PR it'll most likely be denied, because 1 PR = 1 thing

- If you add 2 fun commands that are similar, they'll most likely be merged.

This is an example, but it should shine some light on how we accept PRs.

We also expect you to be active in the PRs, if we add a review, or request changes, we expect you to be able to get it done.

# 👏 Recommendations

- [Pull](https://github.com/wei/pull) - automatically keep your fork up to date!
- [GH CLI](https://github.com/cli/cli) - An easy way to make PRs and much more!
- [Visual Studio Code](https://code.visualstudio.com) - Code editing redefined.

# 🚀 Want to change something?

Please make a PR to change anything! Spelling mistakes, code flaws, performance issues, as long as it's valid, follows our guidelines, you'll most likely be accepted. Happy hacking! 😉

# ⌚ Final thing

If you want to change something in this file, please make an issue, we can review if it should make its way into this file. Thanks!
_PS: Thanks to [BeatZoid](https://github.com/beatzoid) and [Moonlight](https://github.com/gautam-paranjape)_
