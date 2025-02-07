# npm

it is not node package manager
npm manages packages

package.json is a configuration for
npm

# bundler

bundler packages your app so that it can be shipped to the production

**create react app uses babble and webpack as bundler**

# npx

executing a package
npx parcel fileName

We have executed the bundler(parcel) in this case

# import

## Static Import

Static import require the script to be explicitly marked as module and they cannot be used in non-module environment

## Dynamic Import

Dynamic import allows you to load JS modules asynchronously at run time.Module is conditionaly loaded according to the requirement this helps in performance and reduce the intial load time

## Benifits of Dynamic Loading

Lazy Loading
Conditional Loading
Code Splitting
Error Handling

## Parcel

DEV Build
Local Server
HMR - Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification of files
Bundling of Files
Compression
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code

## Tree Shaking Algorithm

It is a technique that removes unused code from a React application's final bundle. This improves the application's performance and reduces its load time.
