# Contributing

From opening a bug report to creating a pull request, every contribution is appreciated and welcome. If you're planning to implement a new feature or change the rules please create an issue first. This way we can ensure that your precious work is not in vain.

## Publishing an alpha release

Make sure you're on the `next` branch. Alpha & beta releases should only be published from there.

```
# (Option) Set the version you want if the current one is not desired
yarn workspaces foreach -p run version prerelease

# Add a git tag (replace `X` with appropriate versions)
git tag vX.X.X-alpha.X
git push --follow-tags

# Generate changelog
yarn conventional-changelog --commit-path='packages' -l packages

# Create a Github release and publish the change log therein:
# https://github.com/GlobexDesignsInc/eslint-config-globex/releases

# Login to eslint-config-globex user
npm login

# Publish packages to npm (set OTP <CODE>)
yarn workspaces foreach npm publish --tolerate-republish --access=public --otp <CODE>

# Version up 
yarn workspaces foreach -p run version prerelease
```

## Publishing a new release

```

```