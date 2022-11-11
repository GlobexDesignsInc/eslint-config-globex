# Contributing

From opening a bug report to creating a pull request, every contribution is appreciated and welcome. If you're planning to implement a new feature or change the rules please create an issue first. This way we can ensure that your precious work is not in vain.

## Publishing an alpha release

Make sure you're on the `next` branch. Alpha & beta releases should only be published from there.

```
# (Optional) Set the version you want if the current one is not desired
pnpm -r --filter=./packages/** version prerelease
git commit -am "chore(build): version up"
git push

# Add a git tag
git tag v$(node -p "require('./packages/core/package.json').version")
git push origin --tags

# Generate changelog
pnpm conventional-changelog --commit-path='packages' -l packages

# Create a Github release and publish the change log therein:
# https://github.com/GlobexDesignsInc/eslint-config-globex/releases

# Login to eslint-config-globex user
npm login

# Publish packages to npm (set OTP <CODE>)
pnpm -r publish --access public --otp <CODE>

# Version up 
pnpm -r --filter=./packages/** version prerelease
pnpm test
```

## Publishing a new release

```
# (Optional) Set the version you want if the current one is not desired
pnpm -r --filter=./packages/** version patch
git commit -am "build: version up"
git push

# Add a git tag
git tag v$(node -p "require('./packages/core/package.json').version")
git push origin --tags

# Generate changelog
pnpm conventional-changelog --commit-path='packages' -l packages

# Create a Github release and publish the change log therein:
# https://github.com/GlobexDesignsInc/eslint-config-globex/releases

# Login to eslint-config-globex user
npm login

# Publish packages to npm (set OTP <CODE>)
pnpm -r publish --access public --otp <CODE>

# Version up 
pnpm -r --filter=./packages/** version patch
pnpm test
git commit -am "chore(build): version up"
git push
```