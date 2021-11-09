# Contributing

From opening a bug report to creating a pull request, every contribution is appreciated and welcome. If you're planning to implement a new feature or change the rules please create an issue first. This way we can ensure that your precious work is not in vain.

## Publish a new version

```sh
yarn test

# for regular releases
yarn release

# for beta releases
yarn release --prerelease beta

# confirm code looks good

# then publish
git push --follow-tags origin master && npm publish
```