# 2800-202410-BBY12
# SunSpot

## 1. Project Description
Our project team, BBY-12, is developing a travel app to help travelers choose their perfect trip destinations with a range of locations that are offered based on their preferred weather conditions.

## 2. Names of Contributors
* Radman Mohammadi
* Khalel Lopez
* Donghoon Oh
* Maria Espinola
* Saba Karbakhsh Ravari
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* node
* express
* tailwind
* render
* cloudinary
* MongoDB
* visual crossing API
* google map API
* unsplash

## 4. Contents of Folder
Content of the project folder
Folder PATH listing for volume New Volume
Volume serial number is 7A61-1D94
D:.
│   .env
│   .gitignore
│   about.html
│   databaseConnection.js
│   index.js
│   model.js
│   package-lock.json
│   package.json
│   README.md
│   utils.js
│
├───node_modules
│   │   .package-lock.json
│   │
│   ├───.bin
│   │       color-support
│   │       color-support.cmd
│   │       color-support.ps1
│   │       ejs
│   │       ejs.cmd
│   │       ejs.ps1
│   │       jake
│   │       jake.cmd
│   │       jake.ps1
│   │       mime
│   │       mime.cmd
│   │       mime.ps1
│   │       mkdirp
│   │       mkdirp.cmd
│   │       mkdirp.ps1
│   │       node-pre-gyp
│   │       node-pre-gyp.cmd
│   │       node-pre-gyp.ps1
│   │       nopt
│   │       nopt.cmd
│   │       nopt.ps1
│   │       rimraf
│   │       rimraf.cmd
│   │       rimraf.ps1
│   │       semver
│   │       semver.cmd
│   │       semver.ps1
│   │       uuid
│   │       uuid.cmd
│   │       uuid.ps1
│   │
│   ├───@hapi
│   │   ├───hoek
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           applyToDefaults.js
│   │   │           assert.js
│   │   │           bench.js
│   │   │           block.js
│   │   │           clone.js
│   │   │           contain.js
│   │   │           deepEqual.js
│   │   │           error.js
│   │   │           escapeHeaderAttribute.js
│   │   │           escapeHtml.js
│   │   │           escapeJson.js
│   │   │           escapeRegex.js
│   │   │           flatten.js
│   │   │           ignore.js
│   │   │           index.d.ts
│   │   │           index.js
│   │   │           intersect.js
│   │   │           isPromise.js
│   │   │           merge.js
│   │   │           once.js
│   │   │           reach.js
│   │   │           reachTemplate.js
│   │   │           stringify.js
│   │   │           types.js
│   │   │           utils.js
│   │   │           wait.js
│   │   │
│   │   └───topo
│   │       │   LICENSE.md
│   │       │   package.json
│   │       │   README.md
│   │       │
│   │       └───lib
│   │               index.d.ts
│   │               index.js
│   │
│   ├───@mapbox
│   │   └───node-pre-gyp
│   │       │   CHANGELOG.md
│   │       │   contributing.md
│   │       │   LICENSE
│   │       │   package.json
│   │       │   README.md
│   │       │
│   │       ├───.github
│   │       │   └───workflows
│   │       │           codeql.yml
│   │       │
│   │       ├───bin
│   │       │       node-pre-gyp
│   │       │       node-pre-gyp.cmd
│   │       │
│   │       └───lib
│   │           │   build.js
│   │           │   clean.js
│   │           │   configure.js
│   │           │   info.js
│   │           │   install.js
│   │           │   main.js
│   │           │   node-pre-gyp.js
│   │           │   package.js
│   │           │   pre-binding.js
│   │           │   publish.js
│   │           │   rebuild.js
│   │           │   reinstall.js
│   │           │   reveal.js
│   │           │   testbinary.js
│   │           │   testpackage.js
│   │           │   unpublish.js
│   │           │
│   │           └───util
│   │               │   abi_crosswalk.json
│   │               │   compile.js
│   │               │   handle_gyp_opts.js
│   │               │   napi.js
│   │               │   s3_setup.js
│   │               │   versioning.js
│   │               │
│   │               └───nw-pre-gyp
│   │                       index.html
│   │                       package.json
│   │
│   ├───@mongodb-js
│   │   └───saslprep
│   │       │   LICENSE
│   │       │   package.json
│   │       │   readme.md
│   │       │
│   │       └───dist
│   │               .esm-wrapper.mjs
│   │               browser.d.ts
│   │               browser.d.ts.map
│   │               browser.js
│   │               browser.js.map
│   │               code-points-data-browser.d.ts
│   │               code-points-data-browser.d.ts.map
│   │               code-points-data-browser.js
│   │               code-points-data-browser.js.map
│   │               code-points-data.d.ts
│   │               code-points-data.d.ts.map
│   │               code-points-data.js
│   │               code-points-data.js.map
│   │               code-points-src.d.ts
│   │               code-points-src.d.ts.map
│   │               code-points-src.js
│   │               code-points-src.js.map
│   │               generate-code-points.d.ts
│   │               generate-code-points.d.ts.map
│   │               generate-code-points.js
│   │               generate-code-points.js.map
│   │               index.d.ts
│   │               index.d.ts.map
│   │               index.js
│   │               index.js.map
│   │               memory-code-points.d.ts
│   │               memory-code-points.d.ts.map
│   │               memory-code-points.js
│   │               memory-code-points.js.map
│   │               node.d.ts
│   │               node.d.ts.map
│   │               node.js
│   │               node.js.map
│   │               util.d.ts
│   │               util.d.ts.map
│   │               util.js
│   │               util.js.map
│   │
│   ├───@sideway
│   │   ├───address
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           decode.js
│   │   │           domain.js
│   │   │           email.js
│   │   │           errors.js
│   │   │           index.d.ts
│   │   │           index.js
│   │   │           ip.js
│   │   │           tlds.js
│   │   │           uri.js
│   │   │
│   │   ├───formula
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           index.d.ts
│   │   │           index.js
│   │   │
│   │   └───pinpoint
│   │       │   LICENSE.md
│   │       │   package.json
│   │       │   README.md
│   │       │
│   │       └───lib
│   │               index.d.ts
│   │               index.js
│   │
│   ├───@types
│   │   ├───webidl-conversions
│   │   │       index.d.ts
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   └───whatwg-url
│   │       │   index.d.ts
│   │       │   LICENSE
│   │       │   package.json
│   │       │   README.md
│   │       │   webidl2js-wrapper.d.ts
│   │       │
│   │       └───lib
│   │               URL-impl.d.ts
│   │               URL.d.ts
│   │               URLSearchParams-impl.d.ts
│   │               URLSearchParams.d.ts
│   │
│   ├───abbrev
│   │       abbrev.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───accepts
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───agent-base
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───dist
│   │   │   └───src
│   │   │           index.d.ts
│   │   │           index.js
│   │   │           index.js.map
│   │   │           promisify.d.ts
│   │   │           promisify.js
│   │   │           promisify.js.map
│   │   │
│   │   └───src
│   │           index.ts
│   │           promisify.ts
│   │
│   ├───ansi-regex
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───ansi-styles
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───append-field
│   │   │   .npmignore
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───lib
│   │   │       parse-path.js
│   │   │       set-value.js
│   │   │
│   │   └───test
│   │           forms.js
│   │
│   ├───aproba
│   │       CHANGELOG.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───are-we-there-yet
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           index.js
│   │           tracker-base.js
│   │           tracker-group.js
│   │           tracker-stream.js
│   │           tracker.js
│   │
│   ├───array-flatten
│   │       array-flatten.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───asn1.js
│   │   │   .eslintrc.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │       │   asn1.js
│   │       │
│   │       └───asn1
│   │           │   api.js
│   │           │
│   │           ├───base
│   │           │       buffer.js
│   │           │       index.js
│   │           │       node.js
│   │           │       reporter.js
│   │           │
│   │           ├───constants
│   │           │       der.js
│   │           │       index.js
│   │           │
│   │           ├───decoders
│   │           │       der.js
│   │           │       index.js
│   │           │       pem.js
│   │           │
│   │           └───encoders
│   │                   der.js
│   │                   index.js
│   │                   pem.js
│   │
│   ├───async
│   │   │   all.js
│   │   │   allLimit.js
│   │   │   allSeries.js
│   │   │   any.js
│   │   │   anyLimit.js
│   │   │   anySeries.js
│   │   │   apply.js
│   │   │   applyEach.js
│   │   │   applyEachSeries.js
│   │   │   asyncify.js
│   │   │   auto.js
│   │   │   autoInject.js
│   │   │   bower.json
│   │   │   cargo.js
│   │   │   cargoQueue.js
│   │   │   CHANGELOG.md
│   │   │   compose.js
│   │   │   concat.js
│   │   │   concatLimit.js
│   │   │   concatSeries.js
│   │   │   constant.js
│   │   │   detect.js
│   │   │   detectLimit.js
│   │   │   detectSeries.js
│   │   │   dir.js
│   │   │   doDuring.js
│   │   │   doUntil.js
│   │   │   doWhilst.js
│   │   │   during.js
│   │   │   each.js
│   │   │   eachLimit.js
│   │   │   eachOf.js
│   │   │   eachOfLimit.js
│   │   │   eachOfSeries.js
│   │   │   eachSeries.js
│   │   │   ensureAsync.js
│   │   │   every.js
│   │   │   everyLimit.js
│   │   │   everySeries.js
│   │   │   filter.js
│   │   │   filterLimit.js
│   │   │   filterSeries.js
│   │   │   find.js
│   │   │   findLimit.js
│   │   │   findSeries.js
│   │   │   flatMap.js
│   │   │   flatMapLimit.js
│   │   │   flatMapSeries.js
│   │   │   foldl.js
│   │   │   foldr.js
│   │   │   forEach.js
│   │   │   forEachLimit.js
│   │   │   forEachOf.js
│   │   │   forEachOfLimit.js
│   │   │   forEachOfSeries.js
│   │   │   forEachSeries.js
│   │   │   forever.js
│   │   │   groupBy.js
│   │   │   groupByLimit.js
│   │   │   groupBySeries.js
│   │   │   index.js
│   │   │   inject.js
│   │   │   LICENSE
│   │   │   log.js
│   │   │   map.js
│   │   │   mapLimit.js
│   │   │   mapSeries.js
│   │   │   mapValues.js
│   │   │   mapValuesLimit.js
│   │   │   mapValuesSeries.js
│   │   │   memoize.js
│   │   │   nextTick.js
│   │   │   package.json
│   │   │   parallel.js
│   │   │   parallelLimit.js
│   │   │   priorityQueue.js
│   │   │   queue.js
│   │   │   race.js
│   │   │   README.md
│   │   │   reduce.js
│   │   │   reduceRight.js
│   │   │   reflect.js
│   │   │   reflectAll.js
│   │   │   reject.js
│   │   │   rejectLimit.js
│   │   │   rejectSeries.js
│   │   │   retry.js
│   │   │   retryable.js
│   │   │   select.js
│   │   │   selectLimit.js
│   │   │   selectSeries.js
│   │   │   seq.js
│   │   │   series.js
│   │   │   setImmediate.js
│   │   │   some.js
│   │   │   someLimit.js
│   │   │   someSeries.js
│   │   │   sortBy.js
│   │   │   timeout.js
│   │   │   times.js
│   │   │   timesLimit.js
│   │   │   timesSeries.js
│   │   │   transform.js
│   │   │   tryEach.js
│   │   │   unmemoize.js
│   │   │   until.js
│   │   │   waterfall.js
│   │   │   whilst.js
│   │   │   wrapSync.js
│   │   │
│   │   ├───dist
│   │   │       async.js
│   │   │       async.min.js
│   │   │       async.mjs
│   │   │
│   │   └───internal
│   │           applyEach.js
│   │           asyncEachOfLimit.js
│   │           awaitify.js
│   │           breakLoop.js
│   │           consoleFunc.js
│   │           createTester.js
│   │           DoublyLinkedList.js
│   │           eachOfLimit.js
│   │           filter.js
│   │           getIterator.js
│   │           Heap.js
│   │           initialParams.js
│   │           isArrayLike.js
│   │           iterator.js
│   │           map.js
│   │           once.js
│   │           onlyOnce.js
│   │           parallel.js
│   │           promiseCallback.js
│   │           queue.js
│   │           range.js
│   │           reject.js
│   │           setImmediate.js
│   │           withoutIndex.js
│   │           wrapAsync.js
│   │
│   ├───balanced-match
│   │   │   index.js
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───.github
│   │           FUNDING.yml
│   │
│   ├───base64-js
│   │       base64js.min.js
│   │       index.d.ts
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───bcrypt
│   │   │   .editorconfig
│   │   │   .travis.yml
│   │   │   appveyor.yml
│   │   │   bcrypt.js
│   │   │   binding.gyp
│   │   │   CHANGELOG.md
│   │   │   ISSUE_TEMPLATE.md
│   │   │   LICENSE
│   │   │   Makefile
│   │   │   package.json
│   │   │   promises.js
│   │   │   README.md
│   │   │   SECURITY.md
│   │   │   test-docker.sh
│   │   │
│   │   ├───.github
│   │   │   └───workflows
│   │   │           ci.yaml
│   │   │
│   │   ├───examples
│   │   │       async_compare.js
│   │   │       forever_gen_salt.js
│   │   │
│   │   ├───lib
│   │   │   └───binding
│   │   │       └───napi-v3
│   │   │               bcrypt_lib.node
│   │   │
│   │   ├───src
│   │   │       bcrypt.cc
│   │   │       bcrypt_node.cc
│   │   │       blowfish.cc
│   │   │       node_blf.h
│   │   │
│   │   └───test
│   │           async.test.js
│   │           implementation.test.js
│   │           promise.test.js
│   │           repetitions.test.js
│   │           sync.test.js
│   │
│   ├───bignumber.js
│   │   │   bignumber.d.ts
│   │   │   bignumber.js
│   │   │   bignumber.mjs
│   │   │   CHANGELOG.md
│   │   │   LICENCE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───doc
│   │           API.html
│   │
│   ├───bn.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           bn.js
│   │
│   ├───body-parser
│   │   │   HISTORY.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   SECURITY.md
│   │   │
│   │   ├───lib
│   │   │   │   read.js
│   │   │   │
│   │   │   └───types
│   │   │           json.js
│   │   │           raw.js
│   │   │           text.js
│   │   │           urlencoded.js
│   │   │
│   │   └───node_modules
│   │       ├───debug
│   │       │   │   .coveralls.yml
│   │       │   │   .eslintrc
│   │       │   │   .npmignore
│   │       │   │   .travis.yml
│   │       │   │   CHANGELOG.md
│   │       │   │   component.json
│   │       │   │   karma.conf.js
│   │       │   │   LICENSE
│   │       │   │   Makefile
│   │       │   │   node.js
│   │       │   │   package.json
│   │       │   │   README.md
│   │       │   │
│   │       │   └───src
│   │       │           browser.js
│   │       │           debug.js
│   │       │           index.js
│   │       │           inspector-log.js
│   │       │           node.js
│   │       │
│   │       └───ms
│   │               index.js
│   │               license.md
│   │               package.json
│   │               readme.md
│   │
│   ├───brace-expansion
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───bson
│   │   │   bson.d.ts
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───etc
│   │   │       prepare.js
│   │   │
│   │   ├───lib
│   │   │       bson.bundle.js
│   │   │       bson.bundle.js.map
│   │   │       bson.cjs
│   │   │       bson.cjs.map
│   │   │       bson.mjs
│   │   │       bson.mjs.map
│   │   │       bson.rn.cjs
│   │   │       bson.rn.cjs.map
│   │   │
│   │   ├───src
│   │   │   │   binary.ts
│   │   │   │   bson.ts
│   │   │   │   bson_value.ts
│   │   │   │   code.ts
│   │   │   │   constants.ts
│   │   │   │   db_ref.ts
│   │   │   │   decimal128.ts
│   │   │   │   double.ts
│   │   │   │   error.ts
│   │   │   │   extended_json.ts
│   │   │   │   index.ts
│   │   │   │   int_32.ts
│   │   │   │   long.ts
│   │   │   │   max_key.ts
│   │   │   │   min_key.ts
│   │   │   │   objectid.ts
│   │   │   │   parse_utf8.ts
│   │   │   │   regexp.ts
│   │   │   │   symbol.ts
│   │   │   │   timestamp.ts
│   │   │   │
│   │   │   ├───parser
│   │   │   │   │   calculate_size.ts
│   │   │   │   │   deserializer.ts
│   │   │   │   │   serializer.ts
│   │   │   │   │   utils.ts
│   │   │   │   │
│   │   │   │   └───on_demand
│   │   │   │           index.ts
│   │   │   │           parse_to_elements.ts
│   │   │   │
│   │   │   └───utils
│   │   │           byte_utils.ts
│   │   │           latin.ts
│   │   │           node_byte_utils.ts
│   │   │           number_utils.ts
│   │   │           string_utils.ts
│   │   │           web_byte_utils.ts
│   │   │
│   │   └───vendor
│   │       ├───base64
│   │       │       base64.js
│   │       │       LICENSE-MIT.txt
│   │       │       package.json
│   │       │       README.md
│   │       │
│   │       └───text-encoding
│   │           │   index.js
│   │           │   LICENSE.md
│   │           │   package.json
│   │           │   README.md
│   │           │
│   │           └───lib
│   │                   encoding-indexes.js
│   │                   encoding.js
│   │
│   ├───buffer-equal-constant-time
│   │       .npmignore
│   │       .travis.yml
│   │       index.js
│   │       LICENSE.txt
│   │       package.json
│   │       README.md
│   │       test.js
│   │
│   ├───buffer-from
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       readme.md
│   │
│   ├───busboy
│   │   │   .eslintrc.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │   └───workflows
│   │   │           ci.yml
│   │   │           lint.yml
│   │   │
│   │   ├───bench
│   │   │       bench-multipart-fields-100mb-big.js
│   │   │       bench-multipart-fields-100mb-small.js
│   │   │       bench-multipart-files-100mb-big.js
│   │   │       bench-multipart-files-100mb-small.js
│   │   │       bench-urlencoded-fields-100pairs-small.js
│   │   │       bench-urlencoded-fields-900pairs-small-alt.js
│   │   │
│   │   ├───lib
│   │   │   │   index.js
│   │   │   │   utils.js
│   │   │   │
│   │   │   └───types
│   │   │           multipart.js
│   │   │           urlencoded.js
│   │   │
│   │   └───test
│   │           common.js
│   │           test-types-multipart-charsets.js
│   │           test-types-multipart-stream-pause.js
│   │           test-types-multipart.js
│   │           test-types-urlencoded.js
│   │           test.js
│   │
│   ├───bytes
│   │       History.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       Readme.md
│   │
│   ├───call-bind
│   │   │   .eslintignore
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   callBound.js
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           callBound.js
│   │           index.js
│   │
│   ├───chalk
│   │   │   index.d.ts
│   │   │   license
│   │   │   package.json
│   │   │   readme.md
│   │   │
│   │   └───source
│   │           index.js
│   │           templates.js
│   │           util.js
│   │
│   ├───chownr
│   │       chownr.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───cloudinary
│   │   │   babel.config.js
│   │   │   CHANGELOG.md
│   │   │   cloudinary.js
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───lib
│   │   │   │   api.js
│   │   │   │   auth_token.js
│   │   │   │   cache.js
│   │   │   │   cloudinary.js
│   │   │   │   config.js
│   │   │   │   preloaded_file.js
│   │   │   │   uploader.js
│   │   │   │   upload_stream.js
│   │   │   │
│   │   │   ├───analysis
│   │   │   │       index.js
│   │   │   │
│   │   │   ├───api_client
│   │   │   │       call_account_api.js
│   │   │   │       call_analysis_api.js
│   │   │   │       call_api.js
│   │   │   │       execute_request.js
│   │   │   │
│   │   │   ├───cache
│   │   │   │       FileKeyValueStorage.js
│   │   │   │       KeyValueCacheAdapter.js
│   │   │   │
│   │   │   ├───provisioning
│   │   │   │       account.js
│   │   │   │
│   │   │   ├───utils
│   │   │   │   │   consts.js
│   │   │   │   │   crc32.js
│   │   │   │   │   ensureOption.js
│   │   │   │   │   ensurePresenceOf.js
│   │   │   │   │   entries.js
│   │   │   │   │   generateBreakpoints.js
│   │   │   │   │   index.js
│   │   │   │   │   isRemoteUrl.js
│   │   │   │   │   rimraf.js
│   │   │   │   │   srcsetUtils.js
│   │   │   │   │   utf8_encode.js
│   │   │   │   │
│   │   │   │   ├───analytics
│   │   │   │   │       encodeVersion.js
│   │   │   │   │       getSDKVersions.js
│   │   │   │   │       index.js
│   │   │   │   │       removePatchFromSemver.js
│   │   │   │   │       reverseVersion.js
│   │   │   │   │       stringPad.js
│   │   │   │   │
│   │   │   │   ├───encoding
│   │   │   │   │       base64Encode.js
│   │   │   │   │       base64EncodeURL.js
│   │   │   │   │       base64Map.js
│   │   │   │   │       encodeDoubleArray.js
│   │   │   │   │       smart_escape.js
│   │   │   │   │
│   │   │   │   └───parsing
│   │   │   │           consumeOption.js
│   │   │   │           toArray.js
│   │   │   │
│   │   │   └───v2
│   │   │           api.js
│   │   │           index.js
│   │   │           search.js
│   │   │           search_folders.js
│   │   │           uploader.js
│   │   │
│   │   └───types
│   │           index.d.ts
│   │
│   ├───cloudinary-jquery
│   │   │   cloudinary-jquery.d.ts
│   │   │   cloudinary-jquery.js
│   │   │   cloudinary-jquery.js.map
│   │   │   cloudinary-jquery.min.js
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───src
│   │       │   cloudinary.js
│   │       │   cloudinaryjquery.js
│   │       │   condition.js
│   │       │   configuration.js
│   │       │   constants.js
│   │       │   crc32.js
│   │       │   expression.js
│   │       │   index.js
│   │       │   jquery-file-upload.js
│   │       │   parameters.js
│   │       │   transformation.js
│   │       │   url.js
│   │       │   utf8_encode.js
│   │       │
│   │       ├───layer
│   │       │       fetchlayer.js
│   │       │       layer.js
│   │       │       subtitleslayer.js
│   │       │       textlayer.js
│   │       │
│   │       ├───namespace
│   │       │       cloudinary-core-shrinkwrap.js
│   │       │       cloudinary-core.js
│   │       │       cloudinary-jquery-file-upload.js
│   │       │       cloudinary-jquery.js
│   │       │
│   │       ├───sdkAnalytics
│   │       │       base64Map.js
│   │       │       encodeVersion.js
│   │       │       getAnalyticsOptions.js
│   │       │       getSDKAnalyticsSignature.js
│   │       │       reverseVersion.js
│   │       │       stringPad.js
│   │       │
│   │       ├───tags
│   │       │       clienthintsmetatag.js
│   │       │       htmltag.js
│   │       │       imagetag.js
│   │       │       picturetag.js
│   │       │       sourcetag.js
│   │       │       videotag.js
│   │       │
│   │       └───util
│   │           │   baseutil.js
│   │           │   browser.js
│   │           │   ensureOption.js
│   │           │   ensurePresenceOf.js
│   │           │   firstNotNull.js
│   │           │   generateBreakpoints.js
│   │           │   index.js
│   │           │   jquery.js
│   │           │   lazyLoad.js
│   │           │   lodash.js
│   │           │   srcsetUtils.js
│   │           │
│   │           ├───features
│   │           │   └───transparentVideo
│   │           │           checkSupportForTransparency.js
│   │           │           createHiddenVideoTag.js
│   │           │           enforceOptionsForTransparentVideo.js
│   │           │           instantiateSeeThru.js
│   │           │           mountCloudinaryVideoTag.js
│   │           │           mountSeeThruCanvasTag.js
│   │           │
│   │           ├───parse
│   │           │       normalizeToArray.js
│   │           │
│   │           ├───transformations
│   │           │       addFlag.js
│   │           │
│   │           └───xhr
│   │                   getBlobFromURL.js
│   │                   getHeadersFromURL.js
│   │                   loadScript.js
│   │
│   ├───color-convert
│   │       CHANGELOG.md
│   │       conversions.js
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       route.js
│   │
│   ├───color-name
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───color-support
│   │       bin.js
│   │       browser.js
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───concat-map
│   │   │   .travis.yml
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.markdown
│   │   │
│   │   ├───example
│   │   │       map.js
│   │   │
│   │   └───test
│   │           map.js
│   │
│   ├───concat-stream
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   readme.md
│   │   │
│   │   └───node_modules
│   │       ├───readable-stream
│   │       │   │   .travis.yml
│   │       │   │   CONTRIBUTING.md
│   │       │   │   duplex-browser.js
│   │       │   │   duplex.js
│   │       │   │   GOVERNANCE.md
│   │       │   │   LICENSE
│   │       │   │   package.json
│   │       │   │   passthrough.js
│   │       │   │   readable-browser.js
│   │       │   │   readable.js
│   │       │   │   README.md
│   │       │   │   transform.js
│   │       │   │   writable-browser.js
│   │       │   │   writable.js
│   │       │   │
│   │       │   ├───doc
│   │       │   │   └───wg-meetings
│   │       │   │           2015-01-30.md
│   │       │   │
│   │       │   └───lib
│   │       │       │   _stream_duplex.js
│   │       │       │   _stream_passthrough.js
│   │       │       │   _stream_readable.js
│   │       │       │   _stream_transform.js
│   │       │       │   _stream_writable.js
│   │       │       │
│   │       │       └───internal
│   │       │           └───streams
│   │       │                   BufferList.js
│   │       │                   destroy.js
│   │       │                   stream-browser.js
│   │       │                   stream.js
│   │       │
│   │       ├───safe-buffer
│   │       │       index.d.ts
│   │       │       index.js
│   │       │       LICENSE
│   │       │       package.json
│   │       │       README.md
│   │       │
│   │       └───string_decoder
│   │           │   .travis.yml
│   │           │   LICENSE
│   │           │   package.json
│   │           │   README.md
│   │           │
│   │           └───lib
│   │                   string_decoder.js
│   │
│   ├───connect-mongo
│   │   │   .commitlintrc.yml
│   │   │   .editorconfig
│   │   │   .eslintcache
│   │   │   .eslintignore
│   │   │   .eslintrc.yml
│   │   │   .npmignore
│   │   │   .nycrc.json
│   │   │   .prettierignore
│   │   │   CHANGELOG.md
│   │   │   docker-compose.yaml
│   │   │   LICENSE
│   │   │   MIGRATION_V4.md
│   │   │   package.json
│   │   │   README.md
│   │   │   tsconfig.json
│   │   │   yarn.lock
│   │   │
│   │   ├───.github
│   │   │   │   CONTRIBUTING.md
│   │   │   │   ISSUE_TEMPLATE.md
│   │   │   │   PULL_REQUEST_TEMPLATE.md
│   │   │   │   stale.yml
│   │   │   │
│   │   │   └───workflows
│   │   │           sanity.yml
│   │   │
│   │   ├───.nyc_output
│   │   │   │   a2fabf40-3b97-45f1-94a2-9ed31c01ffd2.json
│   │   │   │   a45b74f9-8ef2-4938-b880-8baaf3d007ab.json
│   │   │   │   caee767b-c4ce-4448-9074-a8212c1e2643.json
│   │   │   │
│   │   │   └───processinfo
│   │   │           a2fabf40-3b97-45f1-94a2-9ed31c01ffd2.json
│   │   │           a45b74f9-8ef2-4938-b880-8baaf3d007ab.json
│   │   │           caee767b-c4ce-4448-9074-a8212c1e2643.json
│   │   │           index.json
│   │   │
│   │   ├───.vscode
│   │   │       launch.json
│   │   │       settings.json
│   │   │
│   │   ├───build
│   │   │   │   tsconfig.tsbuildinfo
│   │   │   │
│   │   │   └───main
│   │   │       │   index.d.ts
│   │   │       │   index.js
│   │   │       │
│   │   │       ├───lib
│   │   │       │       MongoStore.d.ts
│   │   │       │       MongoStore.js
│   │   │       │       MongoStore.spec.d.ts
│   │   │       │       MongoStore.spec.js
│   │   │       │
│   │   │       └───test
│   │   │               integration.spec.d.ts
│   │   │               integration.spec.js
│   │   │               testHelper.d.ts
│   │   │               testHelper.js
│   │   │
│   │   ├───example
│   │   │       index.js
│   │   │       mongoose-multiple-connections.js
│   │   │       mongoose.js
│   │   │       package.json
│   │   │       ts-example.ts
│   │   │       tsconfig.json
│   │   │       yarn.lock
│   │   │
│   │   └───src
│   │       │   index.ts
│   │       │
│   │       ├───lib
│   │       │       MongoStore.spec.ts
│   │       │       MongoStore.ts
│   │       │
│   │       ├───test
│   │       │       integration.spec.ts
│   │       │       testHelper.ts
│   │       │
│   │       └───types
│   │               kruptein.d.ts
│   │
│   ├───console-control-strings
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       README.md~
│   │
│   ├───content-disposition
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───content-type
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───cookie
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       SECURITY.md
│   │
│   ├───cookie-signature
│   │       .npmignore
│   │       History.md
│   │       index.js
│   │       package.json
│   │       Readme.md
│   │
│   ├───core-util-is
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           util.js
│   │
│   ├───debug
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───src
│   │           browser.js
│   │           common.js
│   │           index.js
│   │           node.js
│   │
│   ├───define-data-property
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   tsconfig.json
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───delegates
│   │   │   .npmignore
│   │   │   History.md
│   │   │   index.js
│   │   │   License
│   │   │   Makefile
│   │   │   package.json
│   │   │   Readme.md
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───denque
│   │       CHANGELOG.md
│   │       index.d.ts
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───depd
│   │   │   History.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   Readme.md
│   │   │
│   │   └───lib
│   │       └───browser
│   │               index.js
│   │
│   ├───destroy
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───detect-libc
│   │   │   index.d.ts
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           detect-libc.js
│   │           filesystem.js
│   │           process.js
│   │
│   ├───dotenv
│   │   │   CHANGELOG.md
│   │   │   config.d.ts
│   │   │   config.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README-es.md
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           cli-options.js
│   │           env-options.js
│   │           main.d.ts
│   │           main.js
│   │
│   ├───ecdsa-sig-formatter
│   │   │   CODEOWNERS
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───src
│   │           ecdsa-sig-formatter.d.ts
│   │           ecdsa-sig-formatter.js
│   │           param-bytes-for-alg.js
│   │
│   ├───ee-first
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───ejs
│   │   │   ejs.js
│   │   │   ejs.min.js
│   │   │   jakefile.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   usage.txt
│   │   │
│   │   ├───bin
│   │   │       cli.js
│   │   │
│   │   └───lib
│   │           ejs.js
│   │           utils.js
│   │
│   ├───emoji-regex
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE-MIT.txt
│   │   │   package.json
│   │   │   README.md
│   │   │   text.js
│   │   │
│   │   └───es2015
│   │           index.js
│   │           text.js
│   │
│   ├───encodeurl
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───es-define-property
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   tsconfig.json
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───es-errors
│   │   │   .eslintrc
│   │   │   CHANGELOG.md
│   │   │   eval.d.ts
│   │   │   eval.js
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   range.d.ts
│   │   │   range.js
│   │   │   README.md
│   │   │   ref.d.ts
│   │   │   ref.js
│   │   │   syntax.d.ts
│   │   │   syntax.js
│   │   │   tsconfig.json
│   │   │   type.d.ts
│   │   │   type.js
│   │   │   uri.d.ts
│   │   │   uri.js
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───escape-html
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       Readme.md
│   │
│   ├───etag
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───express
│   │   │   History.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   Readme.md
│   │   │
│   │   ├───lib
│   │   │   │   application.js
│   │   │   │   express.js
│   │   │   │   request.js
│   │   │   │   response.js
│   │   │   │   utils.js
│   │   │   │   view.js
│   │   │   │
│   │   │   ├───middleware
│   │   │   │       init.js
│   │   │   │       query.js
│   │   │   │
│   │   │   └───router
│   │   │           index.js
│   │   │           layer.js
│   │   │           route.js
│   │   │
│   │   └───node_modules
│   │       ├───debug
│   │       │   │   .coveralls.yml
│   │       │   │   .eslintrc
│   │       │   │   .npmignore
│   │       │   │   .travis.yml
│   │       │   │   CHANGELOG.md
│   │       │   │   component.json
│   │       │   │   karma.conf.js
│   │       │   │   LICENSE
│   │       │   │   Makefile
│   │       │   │   node.js
│   │       │   │   package.json
│   │       │   │   README.md
│   │       │   │
│   │       │   └───src
│   │       │           browser.js
│   │       │           debug.js
│   │       │           index.js
│   │       │           inspector-log.js
│   │       │           node.js
│   │       │
│   │       └───ms
│   │               index.js
│   │               license.md
│   │               package.json
│   │               readme.md
│   │
│   ├───express-mongo-sanitize
│   │       index.d.ts
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───express-session
│   │   │   HISTORY.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───node_modules
│   │   │   ├───cookie-signature
│   │   │   │       History.md
│   │   │   │       index.js
│   │   │   │       package.json
│   │   │   │       Readme.md
│   │   │   │
│   │   │   ├───debug
│   │   │   │   │   .coveralls.yml
│   │   │   │   │   .eslintrc
│   │   │   │   │   .npmignore
│   │   │   │   │   .travis.yml
│   │   │   │   │   CHANGELOG.md
│   │   │   │   │   component.json
│   │   │   │   │   karma.conf.js
│   │   │   │   │   LICENSE
│   │   │   │   │   Makefile
│   │   │   │   │   node.js
│   │   │   │   │   package.json
│   │   │   │   │   README.md
│   │   │   │   │
│   │   │   │   └───src
│   │   │   │           browser.js
│   │   │   │           debug.js
│   │   │   │           index.js
│   │   │   │           inspector-log.js
│   │   │   │           node.js
│   │   │   │
│   │   │   └───ms
│   │   │           index.js
│   │   │           license.md
│   │   │           package.json
│   │   │           readme.md
│   │   │
│   │   └───session
│   │           cookie.js
│   │           memory.js
│   │           session.js
│   │           store.js
│   │
│   ├───extend
│   │       .editorconfig
│   │       .eslintrc
│   │       .jscs.json
│   │       .travis.yml
│   │       CHANGELOG.md
│   │       component.json
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───filelist
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   jakefile.js
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───node_modules
│   │       ├───brace-expansion
│   │       │   │   index.js
│   │       │   │   LICENSE
│   │       │   │   package.json
│   │       │   │   README.md
│   │       │   │
│   │       │   └───.github
│   │       │           FUNDING.yml
│   │       │
│   │       └───minimatch
│   │           │   LICENSE
│   │           │   minimatch.js
│   │           │   package.json
│   │           │   README.md
│   │           │
│   │           └───lib
│   │                   path.js
│   │
│   ├───finalhandler
│   │   │   HISTORY.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   SECURITY.md
│   │   │
│   │   └───node_modules
│   │       ├───debug
│   │       │   │   .coveralls.yml
│   │       │   │   .eslintrc
│   │       │   │   .npmignore
│   │       │   │   .travis.yml
│   │       │   │   CHANGELOG.md
│   │       │   │   component.json
│   │       │   │   karma.conf.js
│   │       │   │   LICENSE
│   │       │   │   Makefile
│   │       │   │   node.js
│   │       │   │   package.json
│   │       │   │   README.md
│   │       │   │
│   │       │   └───src
│   │       │           browser.js
│   │       │           debug.js
│   │       │           index.js
│   │       │           inspector-log.js
│   │       │           node.js
│   │       │
│   │       └───ms
│   │               index.js
│   │               license.md
│   │               package.json
│   │               readme.md
│   │
│   ├───forwarded
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───fresh
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───fs-minipass
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───node_modules
│   │       └───minipass
│   │               index.d.ts
│   │               index.js
│   │               LICENSE
│   │               package.json
│   │               README.md
│   │
│   ├───fs.realpath
│   │       index.js
│   │       LICENSE
│   │       old.js
│   │       package.json
│   │       README.md
│   │
│   ├───function-bind
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   implementation.js
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │       SECURITY.md
│   │   │
│   │   └───test
│   │           .eslintrc
│   │           index.js
│   │
│   ├───gauge
│   │       base-theme.js
│   │       CHANGELOG.md
│   │       error.js
│   │       has-color.js
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       plumbing.js
│   │       process.js
│   │       progress-bar.js
│   │       README.md
│   │       render-template.js
│   │       set-immediate.js
│   │       set-interval.js
│   │       spin.js
│   │       template-item.js
│   │       theme-set.js
│   │       themes.js
│   │       wide-truncate.js
│   │
│   ├───gaxios
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───build
│   │   │   └───src
│   │   │           common.d.ts
│   │   │           common.js
│   │   │           common.js.map
│   │   │           gaxios.d.ts
│   │   │           gaxios.js
│   │   │           gaxios.js.map
│   │   │           index.d.ts
│   │   │           index.js
│   │   │           index.js.map
│   │   │           interceptor.d.ts
│   │   │           interceptor.js
│   │   │           interceptor.js.map
│   │   │           retry.d.ts
│   │   │           retry.js
│   │   │           retry.js.map
│   │   │           util.d.ts
│   │   │           util.js
│   │   │           util.js.map
│   │   │
│   │   └───node_modules
│   │       ├───agent-base
│   │       │   │   LICENSE
│   │       │   │   package.json
│   │       │   │   README.md
│   │       │   │
│   │       │   └───dist
│   │       │           helpers.d.ts
│   │       │           helpers.d.ts.map
│   │       │           helpers.js
│   │       │           helpers.js.map
│   │       │           index.d.ts
│   │       │           index.d.ts.map
│   │       │           index.js
│   │       │           index.js.map
│   │       │
│   │       └───https-proxy-agent
│   │           │   LICENSE
│   │           │   package.json
│   │           │   README.md
│   │           │
│   │           └───dist
│   │                   index.d.ts
│   │                   index.d.ts.map
│   │                   index.js
│   │                   index.js.map
│   │                   parse-proxy-response.d.ts
│   │                   parse-proxy-response.d.ts.map
│   │                   parse-proxy-response.js
│   │                   parse-proxy-response.js.map
│   │
│   ├───gcp-metadata
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───build
│   │   │   └───src
│   │   │           gcp-residency.d.ts
│   │   │           gcp-residency.js
│   │   │           gcp-residency.js.map
│   │   │           index.d.ts
│   │   │           index.js
│   │   │           index.js.map
│   │   │
│   │   └───node_modules
│   │       └───gaxios
│   │           │   CHANGELOG.md
│   │           │   LICENSE
│   │           │   package.json
│   │           │   README.md
│   │           │
│   │           └───build
│   │               └───src
│   │                       common.d.ts
│   │                       common.js
│   │                       common.js.map
│   │                       gaxios.d.ts
│   │                       gaxios.js
│   │                       gaxios.js.map
│   │                       index.d.ts
│   │                       index.js
│   │                       index.js.map
│   │                       retry.d.ts
│   │                       retry.js
│   │                       retry.js.map
│   │
│   ├───generate-function
│   │       .travis.yml
│   │       example.js
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       test.js
│   │
│   ├───get-intrinsic
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           GetIntrinsic.js
│   │
│   ├───glob
│   │       common.js
│   │       glob.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       sync.js
│   │
│   ├───google-auth-library
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───build
│   │   │   └───src
│   │   │       │   index.d.ts
│   │   │       │   index.js
│   │   │       │   messages.d.ts
│   │   │       │   messages.js
│   │   │       │   options.d.ts
│   │   │       │   options.js
│   │   │       │   transporters.d.ts
│   │   │       │   transporters.js
│   │   │       │   util.d.ts
│   │   │       │   util.js
│   │   │       │
│   │   │       ├───auth
│   │   │       │       authclient.d.ts
│   │   │       │       authclient.js
│   │   │       │       awsclient.d.ts
│   │   │       │       awsclient.js
│   │   │       │       awsrequestsigner.d.ts
│   │   │       │       awsrequestsigner.js
│   │   │       │       baseexternalclient.d.ts
│   │   │       │       baseexternalclient.js
│   │   │       │       computeclient.d.ts
│   │   │       │       computeclient.js
│   │   │       │       credentials.d.ts
│   │   │       │       credentials.js
│   │   │       │       defaultawssecuritycredentialssupplier.d.ts
│   │   │       │       defaultawssecuritycredentialssupplier.js
│   │   │       │       downscopedclient.d.ts
│   │   │       │       downscopedclient.js
│   │   │       │       envDetect.d.ts
│   │   │       │       envDetect.js
│   │   │       │       executable-response.d.ts
│   │   │       │       executable-response.js
│   │   │       │       externalAccountAuthorizedUserClient.d.ts
│   │   │       │       externalAccountAuthorizedUserClient.js
│   │   │       │       externalclient.d.ts
│   │   │       │       externalclient.js
│   │   │       │       filesubjecttokensupplier.d.ts
│   │   │       │       filesubjecttokensupplier.js
│   │   │       │       googleauth.d.ts
│   │   │       │       googleauth.js
│   │   │       │       iam.d.ts
│   │   │       │       iam.js
│   │   │       │       identitypoolclient.d.ts
│   │   │       │       identitypoolclient.js
│   │   │       │       idtokenclient.d.ts
│   │   │       │       idtokenclient.js
│   │   │       │       impersonated.d.ts
│   │   │       │       impersonated.js
│   │   │       │       jwtaccess.d.ts
│   │   │       │       jwtaccess.js
│   │   │       │       jwtclient.d.ts
│   │   │       │       jwtclient.js
│   │   │       │       loginticket.d.ts
│   │   │       │       loginticket.js
│   │   │       │       oauth2client.d.ts
│   │   │       │       oauth2client.js
│   │   │       │       oauth2common.d.ts
│   │   │       │       oauth2common.js
│   │   │       │       passthrough.d.ts
│   │   │       │       passthrough.js
│   │   │       │       pluggable-auth-client.d.ts
│   │   │       │       pluggable-auth-client.js
│   │   │       │       pluggable-auth-handler.d.ts
│   │   │       │       pluggable-auth-handler.js
│   │   │       │       refreshclient.d.ts
│   │   │       │       refreshclient.js
│   │   │       │       stscredentials.d.ts
│   │   │       │       stscredentials.js
│   │   │       │       urlsubjecttokensupplier.d.ts
│   │   │       │       urlsubjecttokensupplier.js
│   │   │       │
│   │   │       └───crypto
│   │   │           │   crypto.d.ts
│   │   │           │   crypto.js
│   │   │           │
│   │   │           ├───browser
│   │   │           │       crypto.d.ts
│   │   │           │       crypto.js
│   │   │           │
│   │   │           └───node
│   │   │                   crypto.d.ts
│   │   │                   crypto.js
│   │   │
│   │   └───node_modules
│   │       └───gcp-metadata
│   │           │   CHANGELOG.md
│   │           │   LICENSE
│   │           │   package.json
│   │           │   README.md
│   │           │
│   │           └───build
│   │               └───src
│   │                       gcp-residency.d.ts
│   │                       gcp-residency.js
│   │                       gcp-residency.js.map
│   │                       index.d.ts
│   │                       index.js
│   │                       index.js.map
│   │
│   ├───googleapis
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───build
│   │       └───src
│   │           │   googleapis.d.ts
│   │           │   googleapis.js
│   │           │   index.d.ts
│   │           │   index.js
│   │           │
│   │           ├───apis
│   │           │   │   index.d.ts
│   │           │   │   index.js
│   │           │   │
│   │           │   ├───abusiveexperiencereport
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───acceleratedmobilepageurl
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───accessapproval
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───accesscontextmanager
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───acmedns
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───addressvalidation
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───adexchangebuyer
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.2.d.ts
│   │           │   │       v1.2.js
│   │           │   │       v1.3.d.ts
│   │           │   │       v1.3.js
│   │           │   │       v1.4.d.ts
│   │           │   │       v1.4.js
│   │           │   │
│   │           │   ├───adexchangebuyer2
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2beta1.d.ts
│   │           │   │       v2beta1.js
│   │           │   │
│   │           │   ├───adexperiencereport
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───admin
│   │           │   │       datatransfer_v1.d.ts
│   │           │   │       datatransfer_v1.js
│   │           │   │       directory_v1.d.ts
│   │           │   │       directory_v1.js
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       reports_v1.d.ts
│   │           │   │       reports_v1.js
│   │           │   │
│   │           │   ├───admob
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───adsense
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.4.d.ts
│   │           │   │       v1.4.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───adsensehost
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v4.1.d.ts
│   │           │   │       v4.1.js
│   │           │   │
│   │           │   ├───advisorynotifications
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───aiplatform
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───alertcenter
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───alloydb
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───analytics
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───analyticsadmin
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───analyticsdata
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───analyticshub
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───analyticsreporting
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v4.d.ts
│   │           │   │       v4.js
│   │           │   │
│   │           │   ├───androiddeviceprovisioning
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───androidenterprise
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───androidmanagement
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───androidpublisher
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.1.d.ts
│   │           │   │       v1.1.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───apigateway
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───apigeeregistry
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───apikeys
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───appengine
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───apphub
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │
│   │           │   ├───appsactivity
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───area120tables
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───artifactregistry
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │
│   │           │   ├───assuredworkloads
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───authorizedbuyersmarketplace
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───backupdr
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───baremetalsolution
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───batch
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───beyondcorp
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │
│   │           │   ├───biglake
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───bigquery
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───bigqueryconnection
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───bigquerydatapolicy
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───bigquerydatatransfer
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───bigqueryreservation
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha2.d.ts
│   │           │   │       v1alpha2.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───bigtableadmin
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───billingbudgets
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───binaryauthorization
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───blockchainnodeengine
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───blogger
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───books
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───businessprofileperformance
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───calendar
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───certificatemanager
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───chat
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───checks
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │
│   │           │   ├───chromemanagement
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───chromepolicy
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───chromeuxreport
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───civicinfo
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───classroom
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───cloudasset
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v1p1beta1.d.ts
│   │           │   │       v1p1beta1.js
│   │           │   │       v1p4beta1.d.ts
│   │           │   │       v1p4beta1.js
│   │           │   │       v1p5beta1.d.ts
│   │           │   │       v1p5beta1.js
│   │           │   │       v1p7beta1.d.ts
│   │           │   │       v1p7beta1.js
│   │           │   │
│   │           │   ├───cloudbilling
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───cloudbuild
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │       v1alpha2.d.ts
│   │           │   │       v1alpha2.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───cloudchannel
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───cloudcontrolspartner
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───clouddebugger
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───clouddeploy
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───clouderrorreporting
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───cloudfunctions
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2alpha.d.ts
│   │           │   │       v2alpha.js
│   │           │   │       v2beta.d.ts
│   │           │   │       v2beta.js
│   │           │   │
│   │           │   ├───cloudidentity
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───cloudiot
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───cloudkms
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───cloudprofiler
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───cloudresourcemanager
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta1.d.ts
│   │           │   │       v2beta1.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───cloudscheduler
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───cloudsearch
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───cloudshell
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───cloudsupport
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta.d.ts
│   │           │   │       v2beta.js
│   │           │   │
│   │           │   ├───cloudtasks
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta2.d.ts
│   │           │   │       v2beta2.js
│   │           │   │       v2beta3.d.ts
│   │           │   │       v2beta3.js
│   │           │   │
│   │           │   ├───cloudtrace
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta1.d.ts
│   │           │   │       v2beta1.js
│   │           │   │
│   │           │   ├───composer
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───compute
│   │           │   │       alpha.d.ts
│   │           │   │       alpha.js
│   │           │   │       beta.d.ts
│   │           │   │       beta.js
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───config
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───connectors
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───contactcenteraiplatform
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───contactcenterinsights
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───container
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───containeranalysis
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───content
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.1.d.ts
│   │           │   │       v2.1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───contentwarehouse
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───customsearch
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───datacatalog
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───dataflow
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1b3.d.ts
│   │           │   │       v1b3.js
│   │           │   │
│   │           │   ├───dataform
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───datafusion
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───datalabeling
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───datalineage
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───datamigration
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───datapipelines
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───dataplex
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───dataportability
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───dataproc
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │
│   │           │   ├───datastore
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v1beta3.d.ts
│   │           │   │       v1beta3.js
│   │           │   │
│   │           │   ├───datastream
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───deploymentmanager
│   │           │   │       alpha.d.ts
│   │           │   │       alpha.js
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta.d.ts
│   │           │   │       v2beta.js
│   │           │   │
│   │           │   ├───dfareporting
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v3.3.d.ts
│   │           │   │       v3.3.js
│   │           │   │       v3.4.d.ts
│   │           │   │       v3.4.js
│   │           │   │       v3.5.d.ts
│   │           │   │       v3.5.js
│   │           │   │       v4.d.ts
│   │           │   │       v4.js
│   │           │   │
│   │           │   ├───dialogflow
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta1.d.ts
│   │           │   │       v2beta1.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │       v3beta1.d.ts
│   │           │   │       v3beta1.js
│   │           │   │
│   │           │   ├───digitalassetlinks
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───discovery
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───discoveryengine
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───displayvideo
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │       v1dev.d.ts
│   │           │   │       v1dev.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │       v4.d.ts
│   │           │   │       v4.js
│   │           │   │
│   │           │   ├───dlp
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───dns
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta1.d.ts
│   │           │   │       v2beta1.js
│   │           │   │
│   │           │   ├───docs
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───documentai
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │       v1beta3.d.ts
│   │           │   │       v1beta3.js
│   │           │   │
│   │           │   ├───domains
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha2.d.ts
│   │           │   │       v1alpha2.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───domainsrdap
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───doubleclickbidmanager
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.1.d.ts
│   │           │   │       v1.1.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───doubleclicksearch
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───drive
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───driveactivity
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───drivelabels
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta.d.ts
│   │           │   │       v2beta.js
│   │           │   │
│   │           │   ├───essentialcontacts
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───eventarc
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───factchecktools
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───fcm
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───fcmdata
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───file
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───firebase
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───firebaseappcheck
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───firebaseappdistribution
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │
│   │           │   ├───firebasedatabase
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───firebasedynamiclinks
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───firebasehosting
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───firebaseml
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │       v2beta.d.ts
│   │           │   │       v2beta.js
│   │           │   │
│   │           │   ├───firebaserules
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───firebasestorage
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───firestore
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │
│   │           │   ├───fitness
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───forms
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───games
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───gamesConfiguration
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1configuration.d.ts
│   │           │   │       v1configuration.js
│   │           │   │
│   │           │   ├───gameservices
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───gamesManagement
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1management.d.ts
│   │           │   │       v1management.js
│   │           │   │
│   │           │   ├───genomics
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha2.d.ts
│   │           │   │       v1alpha2.js
│   │           │   │       v2alpha1.d.ts
│   │           │   │       v2alpha1.js
│   │           │   │
│   │           │   ├───gkebackup
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───gkehub
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1alpha2.d.ts
│   │           │   │       v1alpha2.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v2alpha.d.ts
│   │           │   │       v2alpha.js
│   │           │   │
│   │           │   ├───gkeonprem
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───gmail
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───gmailpostmastertools
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───groupsmigration
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───groupssettings
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───healthcare
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───homegraph
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───iam
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2beta.d.ts
│   │           │   │       v2beta.js
│   │           │   │
│   │           │   ├───iamcredentials
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───iap
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───ideahub
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───identitytoolkit
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───ids
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───indexing
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───integrations
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │
│   │           │   ├───jobs
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │       v3p1beta1.d.ts
│   │           │   │       v3p1beta1.js
│   │           │   │       v4.d.ts
│   │           │   │       v4.js
│   │           │   │
│   │           │   ├───kgsearch
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───kmsinventory
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───language
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───libraryagent
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───licensing
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───lifesciences
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2beta.d.ts
│   │           │   │       v2beta.js
│   │           │   │
│   │           │   ├───localservices
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───logging
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───looker
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───managedidentities
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───manufacturers
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───marketingplatformadmin
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │
│   │           │   ├───memcache
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │
│   │           │   ├───metastore
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───migrationcenter
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───ml
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───monitoring
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───mybusinessaccountmanagement
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───mybusinessbusinesscalls
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───mybusinessbusinessinformation
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───mybusinesslodging
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───mybusinessnotifications
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───mybusinessplaceactions
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───mybusinessqanda
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───mybusinessverifications
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───networkconnectivity
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───networkmanagement
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───networksecurity
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───networkservices
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───notebooks
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───oauth2
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───ondemandscanning
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───orgpolicy
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───osconfig
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───oslogin
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───pagespeedonline
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v5.d.ts
│   │           │   │       v5.js
│   │           │   │
│   │           │   ├───paymentsresellersubscription
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───people
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───places
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───playablelocations
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───playcustomapp
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───playdeveloperreporting
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───playgrouping
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───playintegrity
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───plus
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───policyanalyzer
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───policysimulator
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───policytroubleshooter
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───poly
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───privateca
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───prod_tt_sasportal
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───publicca
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───pubsub
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1a.d.ts
│   │           │   │       v1beta1a.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │
│   │           │   ├───pubsublite
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───rapidmigrationassessment
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───readerrevenuesubscriptionlinking
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───realtimebidding
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │
│   │           │   ├───recaptchaenterprise
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───recommendationengine
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───recommender
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───redis
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───remotebuildexecution
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───reseller
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───resourcesettings
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───retail
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2alpha.d.ts
│   │           │   │       v2alpha.js
│   │           │   │       v2beta.d.ts
│   │           │   │       v2beta.js
│   │           │   │
│   │           │   ├───run
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───runtimeconfig
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───safebrowsing
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v4.d.ts
│   │           │   │       v4.js
│   │           │   │       v5.d.ts
│   │           │   │       v5.js
│   │           │   │
│   │           │   ├───sasportal
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───script
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───searchads360
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v0.d.ts
│   │           │   │       v0.js
│   │           │   │
│   │           │   ├───searchconsole
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───secretmanager
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │
│   │           │   ├───securitycenter
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │       v1p1alpha1.d.ts
│   │           │   │       v1p1alpha1.js
│   │           │   │       v1p1beta1.d.ts
│   │           │   │       v1p1beta1.js
│   │           │   │
│   │           │   ├───serviceconsumermanagement
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───servicecontrol
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───servicedirectory
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───servicemanagement
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───servicenetworking
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───serviceusage
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───sheets
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v4.d.ts
│   │           │   │       v4.js
│   │           │   │
│   │           │   ├───siteVerification
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───slides
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───smartdevicemanagement
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───solar
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───sourcerepo
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───spanner
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───speech
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1p1beta1.d.ts
│   │           │   │       v1p1beta1.js
│   │           │   │       v2beta1.d.ts
│   │           │   │       v2beta1.js
│   │           │   │
│   │           │   ├───sql
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta4.d.ts
│   │           │   │       v1beta4.js
│   │           │   │
│   │           │   ├───sqladmin
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta4.d.ts
│   │           │   │       v1beta4.js
│   │           │   │
│   │           │   ├───storage
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │
│   │           │   ├───storagetransfer
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───streetviewpublish
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───sts
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───tagmanager
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───tasks
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───testing
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───texttospeech
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───toolresults
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1beta3.d.ts
│   │           │   │       v1beta3.js
│   │           │   │
│   │           │   ├───tpu
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v2alpha1.d.ts
│   │           │   │       v2alpha1.js
│   │           │   │
│   │           │   ├───trafficdirector
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───transcoder
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───translate
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │       v3beta1.d.ts
│   │           │   │       v3beta1.js
│   │           │   │
│   │           │   ├───travelimpactmodel
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───vault
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───vectortile
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───verifiedaccess
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   ├───versionhistory
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───videointelligence
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta2.d.ts
│   │           │   │       v1beta2.js
│   │           │   │       v1p1beta1.d.ts
│   │           │   │       v1p1beta1.js
│   │           │   │       v1p2beta1.d.ts
│   │           │   │       v1p2beta1.js
│   │           │   │       v1p3beta1.d.ts
│   │           │   │       v1p3beta1.js
│   │           │   │
│   │           │   ├───vision
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1p1beta1.d.ts
│   │           │   │       v1p1beta1.js
│   │           │   │       v1p2beta1.d.ts
│   │           │   │       v1p2beta1.js
│   │           │   │
│   │           │   ├───vmmigration
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha1.d.ts
│   │           │   │       v1alpha1.js
│   │           │   │
│   │           │   ├───vmwareengine
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───vpcaccess
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta1.d.ts
│   │           │   │       v1beta1.js
│   │           │   │
│   │           │   ├───walletobjects
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───webfonts
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───webmasters
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───webrisk
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───websecurityscanner
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1alpha.d.ts
│   │           │   │       v1alpha.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───workflowexecutions
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───workflows
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───workloadmanager
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───workspaceevents
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │
│   │           │   ├───workstations
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v1beta.d.ts
│   │           │   │       v1beta.js
│   │           │   │
│   │           │   ├───youtube
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v3.d.ts
│   │           │   │       v3.js
│   │           │   │
│   │           │   ├───youtubeAnalytics
│   │           │   │       index.d.ts
│   │           │   │       index.js
│   │           │   │       v1.d.ts
│   │           │   │       v1.js
│   │           │   │       v2.d.ts
│   │           │   │       v2.js
│   │           │   │
│   │           │   └───youtubereporting
│   │           │           index.d.ts
│   │           │           index.js
│   │           │           v1.d.ts
│   │           │           v1.js
│   │           │
│   │           └───generator
│   │                   disclaimer.d.ts
│   │                   disclaimer.js
│   │                   docs.d.ts
│   │                   docs.js
│   │                   download.d.ts
│   │                   download.js
│   │                   filters.d.ts
│   │                   filters.js
│   │                   generator.d.ts
│   │                   generator.js
│   │                   samplegen.d.ts
│   │                   samplegen.js
│   │                   synth.d.ts
│   │                   synth.js
│   │
│   ├───googleapis-common
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───build
│   │       └───src
│   │               api.d.ts
│   │               api.js
│   │               apiIndex.d.ts
│   │               apiIndex.js
│   │               apirequest.d.ts
│   │               apirequest.js
│   │               authplus.d.ts
│   │               authplus.js
│   │               discovery.d.ts
│   │               discovery.js
│   │               endpoint.d.ts
│   │               endpoint.js
│   │               http2.d.ts
│   │               http2.js
│   │               index.d.ts
│   │               index.js
│   │               isbrowser.d.ts
│   │               isbrowser.js
│   │               schema.d.ts
│   │               schema.js
│   │
│   ├───gopd
│   │   │   .eslintrc
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───gtoken
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───build
│   │       └───src
│   │               index.d.ts
│   │               index.js
│   │
│   ├───has-flag
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───has-property-descriptors
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───has-proto
│   │   │   .eslintrc
│   │   │   CHANGELOG.md
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   tsconfig.json
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───has-symbols
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   shams.js
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │       │   index.js
│   │       │   tests.js
│   │       │
│   │       └───shams
│   │               core-js.js
│   │               get-own-property-symbols.js
│   │
│   ├───has-unicode
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───hasown
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   tsconfig.json
│   │   │
│   │   └───.github
│   │           FUNDING.yml
│   │
│   ├───http-errors
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───https-proxy-agent
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───dist
│   │           agent.d.ts
│   │           agent.js
│   │           agent.js.map
│   │           index.d.ts
│   │           index.js
│   │           index.js.map
│   │           parse-proxy-response.d.ts
│   │           parse-proxy-response.js
│   │           parse-proxy-response.js.map
│   │
│   ├───iconv-lite
│   │   │   Changelog.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───encodings
│   │   │   │   dbcs-codec.js
│   │   │   │   dbcs-data.js
│   │   │   │   index.js
│   │   │   │   internal.js
│   │   │   │   sbcs-codec.js
│   │   │   │   sbcs-data-generated.js
│   │   │   │   sbcs-data.js
│   │   │   │   utf16.js
│   │   │   │   utf7.js
│   │   │   │
│   │   │   └───tables
│   │   │           big5-added.json
│   │   │           cp936.json
│   │   │           cp949.json
│   │   │           cp950.json
│   │   │           eucjp.json
│   │   │           gb18030-ranges.json
│   │   │           gbk-added.json
│   │   │           shiftjis.json
│   │   │
│   │   └───lib
│   │           bom-handling.js
│   │           extend-node.js
│   │           index.d.ts
│   │           index.js
│   │           streams.js
│   │
│   ├───inflight
│   │       inflight.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───inherits
│   │       inherits.js
│   │       inherits_browser.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───ip-address
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───dist
│   │   │   │   address-error.d.ts
│   │   │   │   address-error.d.ts.map
│   │   │   │   address-error.js
│   │   │   │   address-error.js.map
│   │   │   │   common.d.ts
│   │   │   │   common.d.ts.map
│   │   │   │   common.js
│   │   │   │   common.js.map
│   │   │   │   ip-address.d.ts
│   │   │   │   ip-address.d.ts.map
│   │   │   │   ip-address.js
│   │   │   │   ip-address.js.map
│   │   │   │   ipv4.d.ts
│   │   │   │   ipv4.d.ts.map
│   │   │   │   ipv4.js
│   │   │   │   ipv4.js.map
│   │   │   │   ipv6.d.ts
│   │   │   │   ipv6.d.ts.map
│   │   │   │   ipv6.js
│   │   │   │   ipv6.js.map
│   │   │   │
│   │   │   ├───v4
│   │   │   │       constants.d.ts
│   │   │   │       constants.d.ts.map
│   │   │   │       constants.js
│   │   │   │       constants.js.map
│   │   │   │
│   │   │   └───v6
│   │   │           constants.d.ts
│   │   │           constants.d.ts.map
│   │   │           constants.js
│   │   │           constants.js.map
│   │   │           helpers.d.ts
│   │   │           helpers.d.ts.map
│   │   │           helpers.js
│   │   │           helpers.js.map
│   │   │           regular-expressions.d.ts
│   │   │           regular-expressions.d.ts.map
│   │   │           regular-expressions.js
│   │   │           regular-expressions.js.map
│   │   │
│   │   └───src
│   │       │   address-error.ts
│   │       │   common.ts
│   │       │   ip-address.ts
│   │       │   ipv4.ts
│   │       │   ipv6.ts
│   │       │
│   │       ├───v4
│   │       │       constants.ts
│   │       │
│   │       └───v6
│   │               constants.ts
│   │               helpers.ts
│   │               regular-expressions.ts
│   │
│   ├───ipaddr.js
│   │   │   ipaddr.min.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           ipaddr.js
│   │           ipaddr.js.d.ts
│   │
│   ├───is-fullwidth-code-point
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───is-property
│   │       .npmignore
│   │       is-property.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───is-stream
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───isarray
│   │       .npmignore
│   │       .travis.yml
│   │       component.json
│   │       index.js
│   │       Makefile
│   │       package.json
│   │       README.md
│   │       test.js
│   │
│   ├───jake
│   │   │   jakefile.js
│   │   │   Makefile
│   │   │   package.json
│   │   │   README.md
│   │   │   usage.txt
│   │   │
│   │   ├───bin
│   │   │       bash_completion.sh
│   │   │       cli.js
│   │   │
│   │   ├───lib
│   │   │   │   api.js
│   │   │   │   jake.js
│   │   │   │   loader.js
│   │   │   │   namespace.js
│   │   │   │   package_task.js
│   │   │   │   parseargs.js
│   │   │   │   program.js
│   │   │   │   publish_task.js
│   │   │   │   rule.js
│   │   │   │   test_task.js
│   │   │   │
│   │   │   ├───task
│   │   │   │       directory_task.js
│   │   │   │       file_task.js
│   │   │   │       index.js
│   │   │   │       task.js
│   │   │   │
│   │   │   └───utils
│   │   │           file.js
│   │   │           index.js
│   │   │           logger.js
│   │   │
│   │   └───test
│   │       ├───integration
│   │       │   │   concurrent.js
│   │       │   │   file.js
│   │       │   │   file_task.js
│   │       │   │   helpers.js
│   │       │   │   jakefile.js
│   │       │   │   list_tasks.js
│   │       │   │   publish_task.js
│   │       │   │   rule.js
│   │       │   │   selfdep.js
│   │       │   │   task_base.js
│   │       │   │
│   │       │   └───jakelib
│   │       │           concurrent.jake.js
│   │       │           publish.jake.js
│   │       │           required_module.jake.js
│   │       │           rule.jake.js
│   │       │
│   │       └───unit
│   │               jakefile.js
│   │               namespace.js
│   │               parseargs.js
│   │
│   ├───joi
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───dist
│   │   │       joi-browser.min.js
│   │   │
│   │   └───lib
│   │       │   annotate.js
│   │       │   base.js
│   │       │   cache.js
│   │       │   common.js
│   │       │   compile.js
│   │       │   errors.js
│   │       │   extend.js
│   │       │   index.d.ts
│   │       │   index.js
│   │       │   manifest.js
│   │       │   messages.js
│   │       │   modify.js
│   │       │   ref.js
│   │       │   schemas.js
│   │       │   state.js
│   │       │   template.js
│   │       │   trace.js
│   │       │   validator.js
│   │       │   values.js
│   │       │
│   │       └───types
│   │               alternatives.js
│   │               any.js
│   │               array.js
│   │               binary.js
│   │               boolean.js
│   │               date.js
│   │               function.js
│   │               keys.js
│   │               link.js
│   │               number.js
│   │               object.js
│   │               string.js
│   │               symbol.js
│   │
│   ├───jquery
│   │   │   AUTHORS.txt
│   │   │   bower.json
│   │   │   LICENSE.txt
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───dist
│   │   │       jquery.js
│   │   │       jquery.min.js
│   │   │       jquery.min.map
│   │   │       jquery.slim.js
│   │   │       jquery.slim.min.js
│   │   │       jquery.slim.min.map
│   │   │
│   │   └───src
│   │       │   ajax.js
│   │       │   attributes.js
│   │       │   callbacks.js
│   │       │   core.js
│   │       │   css.js
│   │       │   data.js
│   │       │   deferred.js
│   │       │   deprecated.js
│   │       │   dimensions.js
│   │       │   effects.js
│   │       │   event.js
│   │       │   jquery.js
│   │       │   manipulation.js
│   │       │   offset.js
│   │       │   queue.js
│   │       │   selector-native.js
│   │       │   selector.js
│   │       │   serialize.js
│   │       │   traversing.js
│   │       │   wrap.js
│   │       │
│   │       ├───ajax
│   │       │   │   jsonp.js
│   │       │   │   load.js
│   │       │   │   script.js
│   │       │   │   xhr.js
│   │       │   │
│   │       │   └───var
│   │       │           location.js
│   │       │           nonce.js
│   │       │           rquery.js
│   │       │
│   │       ├───attributes
│   │       │       attr.js
│   │       │       classes.js
│   │       │       prop.js
│   │       │       support.js
│   │       │       val.js
│   │       │
│   │       ├───core
│   │       │   │   access.js
│   │       │   │   camelCase.js
│   │       │   │   DOMEval.js
│   │       │   │   init.js
│   │       │   │   isAttached.js
│   │       │   │   nodeName.js
│   │       │   │   parseHTML.js
│   │       │   │   parseXML.js
│   │       │   │   ready-no-deferred.js
│   │       │   │   ready.js
│   │       │   │   readyException.js
│   │       │   │   stripAndCollapse.js
│   │       │   │   support.js
│   │       │   │   toType.js
│   │       │   │
│   │       │   └───var
│   │       │           rhtml.js
│   │       │           rsingleTag.js
│   │       │
│   │       ├───css
│   │       │   │   addGetHookIf.js
│   │       │   │   adjustCSS.js
│   │       │   │   curCSS.js
│   │       │   │   finalPropName.js
│   │       │   │   hiddenVisibleSelectors.js
│   │       │   │   showHide.js
│   │       │   │   support.js
│   │       │   │
│   │       │   └───var
│   │       │           cssExpand.js
│   │       │           getStyles.js
│   │       │           isHiddenWithinTree.js
│   │       │           rboxStyle.js
│   │       │           rcustomProp.js
│   │       │           rnumnonpx.js
│   │       │           swap.js
│   │       │
│   │       ├───data
│   │       │   │   Data.js
│   │       │   │
│   │       │   └───var
│   │       │           acceptData.js
│   │       │           dataPriv.js
│   │       │           dataUser.js
│   │       │
│   │       ├───deferred
│   │       │       exceptionHook.js
│   │       │
│   │       ├───deprecated
│   │       │       ajax-event-alias.js
│   │       │       event.js
│   │       │
│   │       ├───effects
│   │       │       animatedSelector.js
│   │       │       Tween.js
│   │       │
│   │       ├───event
│   │       │       trigger.js
│   │       │
│   │       ├───exports
│   │       │       amd.js
│   │       │       global.js
│   │       │
│   │       ├───manipulation
│   │       │   │   buildFragment.js
│   │       │   │   getAll.js
│   │       │   │   setGlobalEval.js
│   │       │   │   support.js
│   │       │   │   wrapMap.js
│   │       │   │   _evalUrl.js
│   │       │   │
│   │       │   └───var
│   │       │           rscriptType.js
│   │       │           rtagName.js
│   │       │
│   │       ├───queue
│   │       │       delay.js
│   │       │
│   │       ├───selector
│   │       │       contains.js
│   │       │       escapeSelector.js
│   │       │
│   │       ├───traversing
│   │       │   │   findFilter.js
│   │       │   │
│   │       │   └───var
│   │       │           dir.js
│   │       │           rneedsContext.js
│   │       │           siblings.js
│   │       │
│   │       └───var
│   │               arr.js
│   │               class2type.js
│   │               document.js
│   │               documentElement.js
│   │               flat.js
│   │               fnToString.js
│   │               getProto.js
│   │               hasOwn.js
│   │               indexOf.js
│   │               isFunction.js
│   │               isWindow.js
│   │               ObjectFunctionString.js
│   │               pnum.js
│   │               pop.js
│   │               push.js
│   │               rcheckableType.js
│   │               rcssNum.js
│   │               rnothtmlwhite.js
│   │               rtrimCSS.js
│   │               slice.js
│   │               sort.js
│   │               splice.js
│   │               support.js
│   │               toString.js
│   │               whitespace.js
│   │
│   ├───jsbn
│   │   │   .npmignore
│   │   │   CHANGELOG.md
│   │   │   example.html
│   │   │   example.js
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───test
│   │           es6-import.js
│   │
│   ├───json-bigint
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           parse.js
│   │           stringify.js
│   │
│   ├───jwa
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───jws
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   readme.md
│   │   │
│   │   └───lib
│   │           data-stream.js
│   │           sign-stream.js
│   │           tostring.js
│   │           verify-stream.js
│   │
│   ├───kareem
│   │       CHANGELOG.md
│   │       index.d.ts
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       SECURITY.md
│   │
│   ├───kruptein
│   │   │   CONTRIBUTING.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   SECURITY.md
│   │   │
│   │   ├───.test
│   │   │       vanilla.js
│   │   │
│   │   └───lib
│   │           kruptein.js
│   │
│   ├───lodash
│   │   │   add.js
│   │   │   after.js
│   │   │   array.js
│   │   │   ary.js
│   │   │   assign.js
│   │   │   assignIn.js
│   │   │   assignInWith.js
│   │   │   assignWith.js
│   │   │   at.js
│   │   │   attempt.js
│   │   │   before.js
│   │   │   bind.js
│   │   │   bindAll.js
│   │   │   bindKey.js
│   │   │   camelCase.js
│   │   │   capitalize.js
│   │   │   castArray.js
│   │   │   ceil.js
│   │   │   chain.js
│   │   │   chunk.js
│   │   │   clamp.js
│   │   │   clone.js
│   │   │   cloneDeep.js
│   │   │   cloneDeepWith.js
│   │   │   cloneWith.js
│   │   │   collection.js
│   │   │   commit.js
│   │   │   compact.js
│   │   │   concat.js
│   │   │   cond.js
│   │   │   conforms.js
│   │   │   conformsTo.js
│   │   │   constant.js
│   │   │   core.js
│   │   │   core.min.js
│   │   │   countBy.js
│   │   │   create.js
│   │   │   curry.js
│   │   │   curryRight.js
│   │   │   date.js
│   │   │   debounce.js
│   │   │   deburr.js
│   │   │   defaults.js
│   │   │   defaultsDeep.js
│   │   │   defaultTo.js
│   │   │   defer.js
│   │   │   delay.js
│   │   │   difference.js
│   │   │   differenceBy.js
│   │   │   differenceWith.js
│   │   │   divide.js
│   │   │   drop.js
│   │   │   dropRight.js
│   │   │   dropRightWhile.js
│   │   │   dropWhile.js
│   │   │   each.js
│   │   │   eachRight.js
│   │   │   endsWith.js
│   │   │   entries.js
│   │   │   entriesIn.js
│   │   │   eq.js
│   │   │   escape.js
│   │   │   escapeRegExp.js
│   │   │   every.js
│   │   │   extend.js
│   │   │   extendWith.js
│   │   │   fill.js
│   │   │   filter.js
│   │   │   find.js
│   │   │   findIndex.js
│   │   │   findKey.js
│   │   │   findLast.js
│   │   │   findLastIndex.js
│   │   │   findLastKey.js
│   │   │   first.js
│   │   │   flake.lock
│   │   │   flake.nix
│   │   │   flatMap.js
│   │   │   flatMapDeep.js
│   │   │   flatMapDepth.js
│   │   │   flatten.js
│   │   │   flattenDeep.js
│   │   │   flattenDepth.js
│   │   │   flip.js
│   │   │   floor.js
│   │   │   flow.js
│   │   │   flowRight.js
│   │   │   forEach.js
│   │   │   forEachRight.js
│   │   │   forIn.js
│   │   │   forInRight.js
│   │   │   forOwn.js
│   │   │   forOwnRight.js
│   │   │   fp.js
│   │   │   fromPairs.js
│   │   │   function.js
│   │   │   functions.js
│   │   │   functionsIn.js
│   │   │   get.js
│   │   │   groupBy.js
│   │   │   gt.js
│   │   │   gte.js
│   │   │   has.js
│   │   │   hasIn.js
│   │   │   head.js
│   │   │   identity.js
│   │   │   includes.js
│   │   │   index.js
│   │   │   indexOf.js
│   │   │   initial.js
│   │   │   inRange.js
│   │   │   intersection.js
│   │   │   intersectionBy.js
│   │   │   intersectionWith.js
│   │   │   invert.js
│   │   │   invertBy.js
│   │   │   invoke.js
│   │   │   invokeMap.js
│   │   │   isArguments.js
│   │   │   isArray.js
│   │   │   isArrayBuffer.js
│   │   │   isArrayLike.js
│   │   │   isArrayLikeObject.js
│   │   │   isBoolean.js
│   │   │   isBuffer.js
│   │   │   isDate.js
│   │   │   isElement.js
│   │   │   isEmpty.js
│   │   │   isEqual.js
│   │   │   isEqualWith.js
│   │   │   isError.js
│   │   │   isFinite.js
│   │   │   isFunction.js
│   │   │   isInteger.js
│   │   │   isLength.js
│   │   │   isMap.js
│   │   │   isMatch.js
│   │   │   isMatchWith.js
│   │   │   isNaN.js
│   │   │   isNative.js
│   │   │   isNil.js
│   │   │   isNull.js
│   │   │   isNumber.js
│   │   │   isObject.js
│   │   │   isObjectLike.js
│   │   │   isPlainObject.js
│   │   │   isRegExp.js
│   │   │   isSafeInteger.js
│   │   │   isSet.js
│   │   │   isString.js
│   │   │   isSymbol.js
│   │   │   isTypedArray.js
│   │   │   isUndefined.js
│   │   │   isWeakMap.js
│   │   │   isWeakSet.js
│   │   │   iteratee.js
│   │   │   join.js
│   │   │   kebabCase.js
│   │   │   keyBy.js
│   │   │   keys.js
│   │   │   keysIn.js
│   │   │   lang.js
│   │   │   last.js
│   │   │   lastIndexOf.js
│   │   │   LICENSE
│   │   │   lodash.js
│   │   │   lodash.min.js
│   │   │   lowerCase.js
│   │   │   lowerFirst.js
│   │   │   lt.js
│   │   │   lte.js
│   │   │   map.js
│   │   │   mapKeys.js
│   │   │   mapValues.js
│   │   │   matches.js
│   │   │   matchesProperty.js
│   │   │   math.js
│   │   │   max.js
│   │   │   maxBy.js
│   │   │   mean.js
│   │   │   meanBy.js
│   │   │   memoize.js
│   │   │   merge.js
│   │   │   mergeWith.js
│   │   │   method.js
│   │   │   methodOf.js
│   │   │   min.js
│   │   │   minBy.js
│   │   │   mixin.js
│   │   │   multiply.js
│   │   │   negate.js
│   │   │   next.js
│   │   │   noop.js
│   │   │   now.js
│   │   │   nth.js
│   │   │   nthArg.js
│   │   │   number.js
│   │   │   object.js
│   │   │   omit.js
│   │   │   omitBy.js
│   │   │   once.js
│   │   │   orderBy.js
│   │   │   over.js
│   │   │   overArgs.js
│   │   │   overEvery.js
│   │   │   overSome.js
│   │   │   package.json
│   │   │   pad.js
│   │   │   padEnd.js
│   │   │   padStart.js
│   │   │   parseInt.js
│   │   │   partial.js
│   │   │   partialRight.js
│   │   │   partition.js
│   │   │   pick.js
│   │   │   pickBy.js
│   │   │   plant.js
│   │   │   property.js
│   │   │   propertyOf.js
│   │   │   pull.js
│   │   │   pullAll.js
│   │   │   pullAllBy.js
│   │   │   pullAllWith.js
│   │   │   pullAt.js
│   │   │   random.js
│   │   │   range.js
│   │   │   rangeRight.js
│   │   │   README.md
│   │   │   rearg.js
│   │   │   reduce.js
│   │   │   reduceRight.js
│   │   │   reject.js
│   │   │   release.md
│   │   │   remove.js
│   │   │   repeat.js
│   │   │   replace.js
│   │   │   rest.js
│   │   │   result.js
│   │   │   reverse.js
│   │   │   round.js
│   │   │   sample.js
│   │   │   sampleSize.js
│   │   │   seq.js
│   │   │   set.js
│   │   │   setWith.js
│   │   │   shuffle.js
│   │   │   size.js
│   │   │   slice.js
│   │   │   snakeCase.js
│   │   │   some.js
│   │   │   sortBy.js
│   │   │   sortedIndex.js
│   │   │   sortedIndexBy.js
│   │   │   sortedIndexOf.js
│   │   │   sortedLastIndex.js
│   │   │   sortedLastIndexBy.js
│   │   │   sortedLastIndexOf.js
│   │   │   sortedUniq.js
│   │   │   sortedUniqBy.js
│   │   │   split.js
│   │   │   spread.js
│   │   │   startCase.js
│   │   │   startsWith.js
│   │   │   string.js
│   │   │   stubArray.js
│   │   │   stubFalse.js
│   │   │   stubObject.js
│   │   │   stubString.js
│   │   │   stubTrue.js
│   │   │   subtract.js
│   │   │   sum.js
│   │   │   sumBy.js
│   │   │   tail.js
│   │   │   take.js
│   │   │   takeRight.js
│   │   │   takeRightWhile.js
│   │   │   takeWhile.js
│   │   │   tap.js
│   │   │   template.js
│   │   │   templateSettings.js
│   │   │   throttle.js
│   │   │   thru.js
│   │   │   times.js
│   │   │   toArray.js
│   │   │   toFinite.js
│   │   │   toInteger.js
│   │   │   toIterator.js
│   │   │   toJSON.js
│   │   │   toLength.js
│   │   │   toLower.js
│   │   │   toNumber.js
│   │   │   toPairs.js
│   │   │   toPairsIn.js
│   │   │   toPath.js
│   │   │   toPlainObject.js
│   │   │   toSafeInteger.js
│   │   │   toString.js
│   │   │   toUpper.js
│   │   │   transform.js
│   │   │   trim.js
│   │   │   trimEnd.js
│   │   │   trimStart.js
│   │   │   truncate.js
│   │   │   unary.js
│   │   │   unescape.js
│   │   │   union.js
│   │   │   unionBy.js
│   │   │   unionWith.js
│   │   │   uniq.js
│   │   │   uniqBy.js
│   │   │   uniqueId.js
│   │   │   uniqWith.js
│   │   │   unset.js
│   │   │   unzip.js
│   │   │   unzipWith.js
│   │   │   update.js
│   │   │   updateWith.js
│   │   │   upperCase.js
│   │   │   upperFirst.js
│   │   │   util.js
│   │   │   value.js
│   │   │   valueOf.js
│   │   │   values.js
│   │   │   valuesIn.js
│   │   │   without.js
│   │   │   words.js
│   │   │   wrap.js
│   │   │   wrapperAt.js
│   │   │   wrapperChain.js
│   │   │   wrapperLodash.js
│   │   │   wrapperReverse.js
│   │   │   wrapperValue.js
│   │   │   xor.js
│   │   │   xorBy.js
│   │   │   xorWith.js
│   │   │   zip.js
│   │   │   zipObject.js
│   │   │   zipObjectDeep.js
│   │   │   zipWith.js
│   │   │   _apply.js
│   │   │   _arrayAggregator.js
│   │   │   _arrayEach.js
│   │   │   _arrayEachRight.js
│   │   │   _arrayEvery.js
│   │   │   _arrayFilter.js
│   │   │   _arrayIncludes.js
│   │   │   _arrayIncludesWith.js
│   │   │   _arrayLikeKeys.js
│   │   │   _arrayMap.js
│   │   │   _arrayPush.js
│   │   │   _arrayReduce.js
│   │   │   _arrayReduceRight.js
│   │   │   _arraySample.js
│   │   │   _arraySampleSize.js
│   │   │   _arrayShuffle.js
│   │   │   _arraySome.js
│   │   │   _asciiSize.js
│   │   │   _asciiToArray.js
│   │   │   _asciiWords.js
│   │   │   _assignMergeValue.js
│   │   │   _assignValue.js
│   │   │   _assocIndexOf.js
│   │   │   _baseAggregator.js
│   │   │   _baseAssign.js
│   │   │   _baseAssignIn.js
│   │   │   _baseAssignValue.js
│   │   │   _baseAt.js
│   │   │   _baseClamp.js
│   │   │   _baseClone.js
│   │   │   _baseConforms.js
│   │   │   _baseConformsTo.js
│   │   │   _baseCreate.js
│   │   │   _baseDelay.js
│   │   │   _baseDifference.js
│   │   │   _baseEach.js
│   │   │   _baseEachRight.js
│   │   │   _baseEvery.js
│   │   │   _baseExtremum.js
│   │   │   _baseFill.js
│   │   │   _baseFilter.js
│   │   │   _baseFindIndex.js
│   │   │   _baseFindKey.js
│   │   │   _baseFlatten.js
│   │   │   _baseFor.js
│   │   │   _baseForOwn.js
│   │   │   _baseForOwnRight.js
│   │   │   _baseForRight.js
│   │   │   _baseFunctions.js
│   │   │   _baseGet.js
│   │   │   _baseGetAllKeys.js
│   │   │   _baseGetTag.js
│   │   │   _baseGt.js
│   │   │   _baseHas.js
│   │   │   _baseHasIn.js
│   │   │   _baseIndexOf.js
│   │   │   _baseIndexOfWith.js
│   │   │   _baseInRange.js
│   │   │   _baseIntersection.js
│   │   │   _baseInverter.js
│   │   │   _baseInvoke.js
│   │   │   _baseIsArguments.js
│   │   │   _baseIsArrayBuffer.js
│   │   │   _baseIsDate.js
│   │   │   _baseIsEqual.js
│   │   │   _baseIsEqualDeep.js
│   │   │   _baseIsMap.js
│   │   │   _baseIsMatch.js
│   │   │   _baseIsNaN.js
│   │   │   _baseIsNative.js
│   │   │   _baseIsRegExp.js
│   │   │   _baseIsSet.js
│   │   │   _baseIsTypedArray.js
│   │   │   _baseIteratee.js
│   │   │   _baseKeys.js
│   │   │   _baseKeysIn.js
│   │   │   _baseLodash.js
│   │   │   _baseLt.js
│   │   │   _baseMap.js
│   │   │   _baseMatches.js
│   │   │   _baseMatchesProperty.js
│   │   │   _baseMean.js
│   │   │   _baseMerge.js
│   │   │   _baseMergeDeep.js
│   │   │   _baseNth.js
│   │   │   _baseOrderBy.js
│   │   │   _basePick.js
│   │   │   _basePickBy.js
│   │   │   _baseProperty.js
│   │   │   _basePropertyDeep.js
│   │   │   _basePropertyOf.js
│   │   │   _basePullAll.js
│   │   │   _basePullAt.js
│   │   │   _baseRandom.js
│   │   │   _baseRange.js
│   │   │   _baseReduce.js
│   │   │   _baseRepeat.js
│   │   │   _baseRest.js
│   │   │   _baseSample.js
│   │   │   _baseSampleSize.js
│   │   │   _baseSet.js
│   │   │   _baseSetData.js
│   │   │   _baseSetToString.js
│   │   │   _baseShuffle.js
│   │   │   _baseSlice.js
│   │   │   _baseSome.js
│   │   │   _baseSortBy.js
│   │   │   _baseSortedIndex.js
│   │   │   _baseSortedIndexBy.js
│   │   │   _baseSortedUniq.js
│   │   │   _baseSum.js
│   │   │   _baseTimes.js
│   │   │   _baseToNumber.js
│   │   │   _baseToPairs.js
│   │   │   _baseToString.js
│   │   │   _baseTrim.js
│   │   │   _baseUnary.js
│   │   │   _baseUniq.js
│   │   │   _baseUnset.js
│   │   │   _baseUpdate.js
│   │   │   _baseValues.js
│   │   │   _baseWhile.js
│   │   │   _baseWrapperValue.js
│   │   │   _baseXor.js
│   │   │   _baseZipObject.js
│   │   │   _cacheHas.js
│   │   │   _castArrayLikeObject.js
│   │   │   _castFunction.js
│   │   │   _castPath.js
│   │   │   _castRest.js
│   │   │   _castSlice.js
│   │   │   _charsEndIndex.js
│   │   │   _charsStartIndex.js
│   │   │   _cloneArrayBuffer.js
│   │   │   _cloneBuffer.js
│   │   │   _cloneDataView.js
│   │   │   _cloneRegExp.js
│   │   │   _cloneSymbol.js
│   │   │   _cloneTypedArray.js
│   │   │   _compareAscending.js
│   │   │   _compareMultiple.js
│   │   │   _composeArgs.js
│   │   │   _composeArgsRight.js
│   │   │   _copyArray.js
│   │   │   _copyObject.js
│   │   │   _copySymbols.js
│   │   │   _copySymbolsIn.js
│   │   │   _coreJsData.js
│   │   │   _countHolders.js
│   │   │   _createAggregator.js
│   │   │   _createAssigner.js
│   │   │   _createBaseEach.js
│   │   │   _createBaseFor.js
│   │   │   _createBind.js
│   │   │   _createCaseFirst.js
│   │   │   _createCompounder.js
│   │   │   _createCtor.js
│   │   │   _createCurry.js
│   │   │   _createFind.js
│   │   │   _createFlow.js
│   │   │   _createHybrid.js
│   │   │   _createInverter.js
│   │   │   _createMathOperation.js
│   │   │   _createOver.js
│   │   │   _createPadding.js
│   │   │   _createPartial.js
│   │   │   _createRange.js
│   │   │   _createRecurry.js
│   │   │   _createRelationalOperation.js
│   │   │   _createRound.js
│   │   │   _createSet.js
│   │   │   _createToPairs.js
│   │   │   _createWrap.js
│   │   │   _customDefaultsAssignIn.js
│   │   │   _customDefaultsMerge.js
│   │   │   _customOmitClone.js
│   │   │   _DataView.js
│   │   │   _deburrLetter.js
│   │   │   _defineProperty.js
│   │   │   _equalArrays.js
│   │   │   _equalByTag.js
│   │   │   _equalObjects.js
│   │   │   _escapeHtmlChar.js
│   │   │   _escapeStringChar.js
│   │   │   _flatRest.js
│   │   │   _freeGlobal.js
│   │   │   _getAllKeys.js
│   │   │   _getAllKeysIn.js
│   │   │   _getData.js
│   │   │   _getFuncName.js
│   │   │   _getHolder.js
│   │   │   _getMapData.js
│   │   │   _getMatchData.js
│   │   │   _getNative.js
│   │   │   _getPrototype.js
│   │   │   _getRawTag.js
│   │   │   _getSymbols.js
│   │   │   _getSymbolsIn.js
│   │   │   _getTag.js
│   │   │   _getValue.js
│   │   │   _getView.js
│   │   │   _getWrapDetails.js
│   │   │   _Hash.js
│   │   │   _hashClear.js
│   │   │   _hashDelete.js
│   │   │   _hashGet.js
│   │   │   _hashHas.js
│   │   │   _hashSet.js
│   │   │   _hasPath.js
│   │   │   _hasUnicode.js
│   │   │   _hasUnicodeWord.js
│   │   │   _initCloneArray.js
│   │   │   _initCloneByTag.js
│   │   │   _initCloneObject.js
│   │   │   _insertWrapDetails.js
│   │   │   _isFlattenable.js
│   │   │   _isIndex.js
│   │   │   _isIterateeCall.js
│   │   │   _isKey.js
│   │   │   _isKeyable.js
│   │   │   _isLaziable.js
│   │   │   _isMaskable.js
│   │   │   _isMasked.js
│   │   │   _isPrototype.js
│   │   │   _isStrictComparable.js
│   │   │   _iteratorToArray.js
│   │   │   _lazyClone.js
│   │   │   _lazyReverse.js
│   │   │   _lazyValue.js
│   │   │   _LazyWrapper.js
│   │   │   _ListCache.js
│   │   │   _listCacheClear.js
│   │   │   _listCacheDelete.js
│   │   │   _listCacheGet.js
│   │   │   _listCacheHas.js
│   │   │   _listCacheSet.js
│   │   │   _LodashWrapper.js
│   │   │   _Map.js
│   │   │   _MapCache.js
│   │   │   _mapCacheClear.js
│   │   │   _mapCacheDelete.js
│   │   │   _mapCacheGet.js
│   │   │   _mapCacheHas.js
│   │   │   _mapCacheSet.js
│   │   │   _mapToArray.js
│   │   │   _matchesStrictComparable.js
│   │   │   _memoizeCapped.js
│   │   │   _mergeData.js
│   │   │   _metaMap.js
│   │   │   _nativeCreate.js
│   │   │   _nativeKeys.js
│   │   │   _nativeKeysIn.js
│   │   │   _nodeUtil.js
│   │   │   _objectToString.js
│   │   │   _overArg.js
│   │   │   _overRest.js
│   │   │   _parent.js
│   │   │   _Promise.js
│   │   │   _realNames.js
│   │   │   _reEscape.js
│   │   │   _reEvaluate.js
│   │   │   _reInterpolate.js
│   │   │   _reorder.js
│   │   │   _replaceHolders.js
│   │   │   _root.js
│   │   │   _safeGet.js
│   │   │   _Set.js
│   │   │   _SetCache.js
│   │   │   _setCacheAdd.js
│   │   │   _setCacheHas.js
│   │   │   _setData.js
│   │   │   _setToArray.js
│   │   │   _setToPairs.js
│   │   │   _setToString.js
│   │   │   _setWrapToString.js
│   │   │   _shortOut.js
│   │   │   _shuffleSelf.js
│   │   │   _Stack.js
│   │   │   _stackClear.js
│   │   │   _stackDelete.js
│   │   │   _stackGet.js
│   │   │   _stackHas.js
│   │   │   _stackSet.js
│   │   │   _strictIndexOf.js
│   │   │   _strictLastIndexOf.js
│   │   │   _stringSize.js
│   │   │   _stringToArray.js
│   │   │   _stringToPath.js
│   │   │   _Symbol.js
│   │   │   _toKey.js
│   │   │   _toSource.js
│   │   │   _trimmedEndIndex.js
│   │   │   _Uint8Array.js
│   │   │   _unescapeHtmlChar.js
│   │   │   _unicodeSize.js
│   │   │   _unicodeToArray.js
│   │   │   _unicodeWords.js
│   │   │   _updateWrapDetails.js
│   │   │   _WeakMap.js
│   │   │   _wrapperClone.js
│   │   │
│   │   └───fp
│   │           add.js
│   │           after.js
│   │           all.js
│   │           allPass.js
│   │           always.js
│   │           any.js
│   │           anyPass.js
│   │           apply.js
│   │           array.js
│   │           ary.js
│   │           assign.js
│   │           assignAll.js
│   │           assignAllWith.js
│   │           assignIn.js
│   │           assignInAll.js
│   │           assignInAllWith.js
│   │           assignInWith.js
│   │           assignWith.js
│   │           assoc.js
│   │           assocPath.js
│   │           at.js
│   │           attempt.js
│   │           before.js
│   │           bind.js
│   │           bindAll.js
│   │           bindKey.js
│   │           camelCase.js
│   │           capitalize.js
│   │           castArray.js
│   │           ceil.js
│   │           chain.js
│   │           chunk.js
│   │           clamp.js
│   │           clone.js
│   │           cloneDeep.js
│   │           cloneDeepWith.js
│   │           cloneWith.js
│   │           collection.js
│   │           commit.js
│   │           compact.js
│   │           complement.js
│   │           compose.js
│   │           concat.js
│   │           cond.js
│   │           conforms.js
│   │           conformsTo.js
│   │           constant.js
│   │           contains.js
│   │           convert.js
│   │           countBy.js
│   │           create.js
│   │           curry.js
│   │           curryN.js
│   │           curryRight.js
│   │           curryRightN.js
│   │           date.js
│   │           debounce.js
│   │           deburr.js
│   │           defaults.js
│   │           defaultsAll.js
│   │           defaultsDeep.js
│   │           defaultsDeepAll.js
│   │           defaultTo.js
│   │           defer.js
│   │           delay.js
│   │           difference.js
│   │           differenceBy.js
│   │           differenceWith.js
│   │           dissoc.js
│   │           dissocPath.js
│   │           divide.js
│   │           drop.js
│   │           dropLast.js
│   │           dropLastWhile.js
│   │           dropRight.js
│   │           dropRightWhile.js
│   │           dropWhile.js
│   │           each.js
│   │           eachRight.js
│   │           endsWith.js
│   │           entries.js
│   │           entriesIn.js
│   │           eq.js
│   │           equals.js
│   │           escape.js
│   │           escapeRegExp.js
│   │           every.js
│   │           extend.js
│   │           extendAll.js
│   │           extendAllWith.js
│   │           extendWith.js
│   │           F.js
│   │           fill.js
│   │           filter.js
│   │           find.js
│   │           findFrom.js
│   │           findIndex.js
│   │           findIndexFrom.js
│   │           findKey.js
│   │           findLast.js
│   │           findLastFrom.js
│   │           findLastIndex.js
│   │           findLastIndexFrom.js
│   │           findLastKey.js
│   │           first.js
│   │           flatMap.js
│   │           flatMapDeep.js
│   │           flatMapDepth.js
│   │           flatten.js
│   │           flattenDeep.js
│   │           flattenDepth.js
│   │           flip.js
│   │           floor.js
│   │           flow.js
│   │           flowRight.js
│   │           forEach.js
│   │           forEachRight.js
│   │           forIn.js
│   │           forInRight.js
│   │           forOwn.js
│   │           forOwnRight.js
│   │           fromPairs.js
│   │           function.js
│   │           functions.js
│   │           functionsIn.js
│   │           get.js
│   │           getOr.js
│   │           groupBy.js
│   │           gt.js
│   │           gte.js
│   │           has.js
│   │           hasIn.js
│   │           head.js
│   │           identical.js
│   │           identity.js
│   │           includes.js
│   │           includesFrom.js
│   │           indexBy.js
│   │           indexOf.js
│   │           indexOfFrom.js
│   │           init.js
│   │           initial.js
│   │           inRange.js
│   │           intersection.js
│   │           intersectionBy.js
│   │           intersectionWith.js
│   │           invert.js
│   │           invertBy.js
│   │           invertObj.js
│   │           invoke.js
│   │           invokeArgs.js
│   │           invokeArgsMap.js
│   │           invokeMap.js
│   │           isArguments.js
│   │           isArray.js
│   │           isArrayBuffer.js
│   │           isArrayLike.js
│   │           isArrayLikeObject.js
│   │           isBoolean.js
│   │           isBuffer.js
│   │           isDate.js
│   │           isElement.js
│   │           isEmpty.js
│   │           isEqual.js
│   │           isEqualWith.js
│   │           isError.js
│   │           isFinite.js
│   │           isFunction.js
│   │           isInteger.js
│   │           isLength.js
│   │           isMap.js
│   │           isMatch.js
│   │           isMatchWith.js
│   │           isNaN.js
│   │           isNative.js
│   │           isNil.js
│   │           isNull.js
│   │           isNumber.js
│   │           isObject.js
│   │           isObjectLike.js
│   │           isPlainObject.js
│   │           isRegExp.js
│   │           isSafeInteger.js
│   │           isSet.js
│   │           isString.js
│   │           isSymbol.js
│   │           isTypedArray.js
│   │           isUndefined.js
│   │           isWeakMap.js
│   │           isWeakSet.js
│   │           iteratee.js
│   │           join.js
│   │           juxt.js
│   │           kebabCase.js
│   │           keyBy.js
│   │           keys.js
│   │           keysIn.js
│   │           lang.js
│   │           last.js
│   │           lastIndexOf.js
│   │           lastIndexOfFrom.js
│   │           lowerCase.js
│   │           lowerFirst.js
│   │           lt.js
│   │           lte.js
│   │           map.js
│   │           mapKeys.js
│   │           mapValues.js
│   │           matches.js
│   │           matchesProperty.js
│   │           math.js
│   │           max.js
│   │           maxBy.js
│   │           mean.js
│   │           meanBy.js
│   │           memoize.js
│   │           merge.js
│   │           mergeAll.js
│   │           mergeAllWith.js
│   │           mergeWith.js
│   │           method.js
│   │           methodOf.js
│   │           min.js
│   │           minBy.js
│   │           mixin.js
│   │           multiply.js
│   │           nAry.js
│   │           negate.js
│   │           next.js
│   │           noop.js
│   │           now.js
│   │           nth.js
│   │           nthArg.js
│   │           number.js
│   │           object.js
│   │           omit.js
│   │           omitAll.js
│   │           omitBy.js
│   │           once.js
│   │           orderBy.js
│   │           over.js
│   │           overArgs.js
│   │           overEvery.js
│   │           overSome.js
│   │           pad.js
│   │           padChars.js
│   │           padCharsEnd.js
│   │           padCharsStart.js
│   │           padEnd.js
│   │           padStart.js
│   │           parseInt.js
│   │           partial.js
│   │           partialRight.js
│   │           partition.js
│   │           path.js
│   │           pathEq.js
│   │           pathOr.js
│   │           paths.js
│   │           pick.js
│   │           pickAll.js
│   │           pickBy.js
│   │           pipe.js
│   │           placeholder.js
│   │           plant.js
│   │           pluck.js
│   │           prop.js
│   │           propEq.js
│   │           property.js
│   │           propertyOf.js
│   │           propOr.js
│   │           props.js
│   │           pull.js
│   │           pullAll.js
│   │           pullAllBy.js
│   │           pullAllWith.js
│   │           pullAt.js
│   │           random.js
│   │           range.js
│   │           rangeRight.js
│   │           rangeStep.js
│   │           rangeStepRight.js
│   │           rearg.js
│   │           reduce.js
│   │           reduceRight.js
│   │           reject.js
│   │           remove.js
│   │           repeat.js
│   │           replace.js
│   │           rest.js
│   │           restFrom.js
│   │           result.js
│   │           reverse.js
│   │           round.js
│   │           sample.js
│   │           sampleSize.js
│   │           seq.js
│   │           set.js
│   │           setWith.js
│   │           shuffle.js
│   │           size.js
│   │           slice.js
│   │           snakeCase.js
│   │           some.js
│   │           sortBy.js
│   │           sortedIndex.js
│   │           sortedIndexBy.js
│   │           sortedIndexOf.js
│   │           sortedLastIndex.js
│   │           sortedLastIndexBy.js
│   │           sortedLastIndexOf.js
│   │           sortedUniq.js
│   │           sortedUniqBy.js
│   │           split.js
│   │           spread.js
│   │           spreadFrom.js
│   │           startCase.js
│   │           startsWith.js
│   │           string.js
│   │           stubArray.js
│   │           stubFalse.js
│   │           stubObject.js
│   │           stubString.js
│   │           stubTrue.js
│   │           subtract.js
│   │           sum.js
│   │           sumBy.js
│   │           symmetricDifference.js
│   │           symmetricDifferenceBy.js
│   │           symmetricDifferenceWith.js
│   │           T.js
│   │           tail.js
│   │           take.js
│   │           takeLast.js
│   │           takeLastWhile.js
│   │           takeRight.js
│   │           takeRightWhile.js
│   │           takeWhile.js
│   │           tap.js
│   │           template.js
│   │           templateSettings.js
│   │           throttle.js
│   │           thru.js
│   │           times.js
│   │           toArray.js
│   │           toFinite.js
│   │           toInteger.js
│   │           toIterator.js
│   │           toJSON.js
│   │           toLength.js
│   │           toLower.js
│   │           toNumber.js
│   │           toPairs.js
│   │           toPairsIn.js
│   │           toPath.js
│   │           toPlainObject.js
│   │           toSafeInteger.js
│   │           toString.js
│   │           toUpper.js
│   │           transform.js
│   │           trim.js
│   │           trimChars.js
│   │           trimCharsEnd.js
│   │           trimCharsStart.js
│   │           trimEnd.js
│   │           trimStart.js
│   │           truncate.js
│   │           unapply.js
│   │           unary.js
│   │           unescape.js
│   │           union.js
│   │           unionBy.js
│   │           unionWith.js
│   │           uniq.js
│   │           uniqBy.js
│   │           uniqueId.js
│   │           uniqWith.js
│   │           unnest.js
│   │           unset.js
│   │           unzip.js
│   │           unzipWith.js
│   │           update.js
│   │           updateWith.js
│   │           upperCase.js
│   │           upperFirst.js
│   │           useWith.js
│   │           util.js
│   │           value.js
│   │           valueOf.js
│   │           values.js
│   │           valuesIn.js
│   │           where.js
│   │           whereEq.js
│   │           without.js
│   │           words.js
│   │           wrap.js
│   │           wrapperAt.js
│   │           wrapperChain.js
│   │           wrapperLodash.js
│   │           wrapperReverse.js
│   │           wrapperValue.js
│   │           xor.js
│   │           xorBy.js
│   │           xorWith.js
│   │           zip.js
│   │           zipAll.js
│   │           zipObj.js
│   │           zipObject.js
│   │           zipObjectDeep.js
│   │           zipWith.js
│   │           _baseConvert.js
│   │           _convertBrowser.js
│   │           _falseOptions.js
│   │           _mapping.js
│   │           _util.js
│   │           __.js
│   │
│   ├───long
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───umd
│   │           index.d.ts
│   │           index.js
│   │           package.json
│   │
│   ├───lru-cache
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───dist
│   │       ├───cjs
│   │       │       index-cjs.d.ts
│   │       │       index-cjs.d.ts.map
│   │       │       index-cjs.js
│   │       │       index-cjs.js.map
│   │       │       index.d.ts
│   │       │       index.d.ts.map
│   │       │       index.js
│   │       │       index.js.map
│   │       │       index.min.js
│   │       │       index.min.js.map
│   │       │       package.json
│   │       │
│   │       └───mjs
│   │               index.d.ts
│   │               index.d.ts.map
│   │               index.js
│   │               index.js.map
│   │               index.min.js
│   │               index.min.js.map
│   │               package.json
│   │
│   ├───make-dir
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   license
│   │   │   package.json
│   │   │   readme.md
│   │   │
│   │   └───node_modules
│   │       ├───.bin
│   │       │       semver
│   │       │       semver.cmd
│   │       │       semver.ps1
│   │       │
│   │       └───semver
│   │           │   LICENSE
│   │           │   package.json
│   │           │   range.bnf
│   │           │   README.md
│   │           │   semver.js
│   │           │
│   │           └───bin
│   │                   semver.js
│   │
│   ├───media-typer
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───memory-pager
│   │       .travis.yml
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       test.js
│   │
│   ├───merge-descriptors
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───methods
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───mime
│   │   │   .npmignore
│   │   │   CHANGELOG.md
│   │   │   cli.js
│   │   │   LICENSE
│   │   │   mime.js
│   │   │   package.json
│   │   │   README.md
│   │   │   types.json
│   │   │
│   │   └───src
│   │           build.js
│   │           test.js
│   │
│   ├───mime-db
│   │       db.json
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───mime-types
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───minimalistic-assert
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       readme.md
│   │
│   ├───minimatch
│   │       LICENSE
│   │       minimatch.js
│   │       package.json
│   │       README.md
│   │
│   ├───minimist
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   ├───example
│   │   │       parse.js
│   │   │
│   │   └───test
│   │           all_bool.js
│   │           bool.js
│   │           dash.js
│   │           default_bool.js
│   │           dotted.js
│   │           kv_short.js
│   │           long.js
│   │           num.js
│   │           parse.js
│   │           parse_modified.js
│   │           proto.js
│   │           short.js
│   │           stop_early.js
│   │           unknown.js
│   │           whitespace.js
│   │
│   ├───minipass
│   │       index.d.ts
│   │       index.js
│   │       index.mjs
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───minizlib
│   │   │   constants.js
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───node_modules
│   │       └───minipass
│   │               index.d.ts
│   │               index.js
│   │               LICENSE
│   │               package.json
│   │               README.md
│   │
│   ├───mkdirp
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   readme.markdown
│   │   │
│   │   ├───bin
│   │   │       cmd.js
│   │   │
│   │   └───lib
│   │           find-made.js
│   │           mkdirp-manual.js
│   │           mkdirp-native.js
│   │           opts-arg.js
│   │           path-arg.js
│   │           use-native.js
│   │
│   ├───moment
│   │   │   CHANGELOG.md
│   │   │   ender.js
│   │   │   LICENSE
│   │   │   moment.d.ts
│   │   │   moment.js
│   │   │   package.js
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───dist
│   │   │   │   moment.js
│   │   │   │
│   │   │   └───locale
│   │   │           af.js
│   │   │           ar-dz.js
│   │   │           ar-kw.js
│   │   │           ar-ly.js
│   │   │           ar-ma.js
│   │   │           ar-ps.js
│   │   │           ar-sa.js
│   │   │           ar-tn.js
│   │   │           ar.js
│   │   │           az.js
│   │   │           be.js
│   │   │           bg.js
│   │   │           bm.js
│   │   │           bn-bd.js
│   │   │           bn.js
│   │   │           bo.js
│   │   │           br.js
│   │   │           bs.js
│   │   │           ca.js
│   │   │           cs.js
│   │   │           cv.js
│   │   │           cy.js
│   │   │           da.js
│   │   │           de-at.js
│   │   │           de-ch.js
│   │   │           de.js
│   │   │           dv.js
│   │   │           el.js
│   │   │           en-au.js
│   │   │           en-ca.js
│   │   │           en-gb.js
│   │   │           en-ie.js
│   │   │           en-il.js
│   │   │           en-in.js
│   │   │           en-nz.js
│   │   │           en-sg.js
│   │   │           eo.js
│   │   │           es-do.js
│   │   │           es-mx.js
│   │   │           es-us.js
│   │   │           es.js
│   │   │           et.js
│   │   │           eu.js
│   │   │           fa.js
│   │   │           fi.js
│   │   │           fil.js
│   │   │           fo.js
│   │   │           fr-ca.js
│   │   │           fr-ch.js
│   │   │           fr.js
│   │   │           fy.js
│   │   │           ga.js
│   │   │           gd.js
│   │   │           gl.js
│   │   │           gom-deva.js
│   │   │           gom-latn.js
│   │   │           gu.js
│   │   │           he.js
│   │   │           hi.js
│   │   │           hr.js
│   │   │           hu.js
│   │   │           hy-am.js
│   │   │           id.js
│   │   │           is.js
│   │   │           it-ch.js
│   │   │           it.js
│   │   │           ja.js
│   │   │           jv.js
│   │   │           ka.js
│   │   │           kk.js
│   │   │           km.js
│   │   │           kn.js
│   │   │           ko.js
│   │   │           ku-kmr.js
│   │   │           ku.js
│   │   │           ky.js
│   │   │           lb.js
│   │   │           lo.js
│   │   │           lt.js
│   │   │           lv.js
│   │   │           me.js
│   │   │           mi.js
│   │   │           mk.js
│   │   │           ml.js
│   │   │           mn.js
│   │   │           mr.js
│   │   │           ms-my.js
│   │   │           ms.js
│   │   │           mt.js
│   │   │           my.js
│   │   │           nb.js
│   │   │           ne.js
│   │   │           nl-be.js
│   │   │           nl.js
│   │   │           nn.js
│   │   │           oc-lnc.js
│   │   │           pa-in.js
│   │   │           pl.js
│   │   │           pt-br.js
│   │   │           pt.js
│   │   │           ro.js
│   │   │           ru.js
│   │   │           sd.js
│   │   │           se.js
│   │   │           si.js
│   │   │           sk.js
│   │   │           sl.js
│   │   │           sq.js
│   │   │           sr-cyrl.js
│   │   │           sr.js
│   │   │           ss.js
│   │   │           sv.js
│   │   │           sw.js
│   │   │           ta.js
│   │   │           te.js
│   │   │           tet.js
│   │   │           tg.js
│   │   │           th.js
│   │   │           tk.js
│   │   │           tl-ph.js
│   │   │           tlh.js
│   │   │           tr.js
│   │   │           tzl.js
│   │   │           tzm-latn.js
│   │   │           tzm.js
│   │   │           ug-cn.js
│   │   │           uk.js
│   │   │           ur.js
│   │   │           uz-latn.js
│   │   │           uz.js
│   │   │           vi.js
│   │   │           x-pseudo.js
│   │   │           yo.js
│   │   │           zh-cn.js
│   │   │           zh-hk.js
│   │   │           zh-mo.js
│   │   │           zh-tw.js
│   │   │
│   │   ├───locale
│   │   │       af.js
│   │   │       ar-dz.js
│   │   │       ar-kw.js
│   │   │       ar-ly.js
│   │   │       ar-ma.js
│   │   │       ar-ps.js
│   │   │       ar-sa.js
│   │   │       ar-tn.js
│   │   │       ar.js
│   │   │       az.js
│   │   │       be.js
│   │   │       bg.js
│   │   │       bm.js
│   │   │       bn-bd.js
│   │   │       bn.js
│   │   │       bo.js
│   │   │       br.js
│   │   │       bs.js
│   │   │       ca.js
│   │   │       cs.js
│   │   │       cv.js
│   │   │       cy.js
│   │   │       da.js
│   │   │       de-at.js
│   │   │       de-ch.js
│   │   │       de.js
│   │   │       dv.js
│   │   │       el.js
│   │   │       en-au.js
│   │   │       en-ca.js
│   │   │       en-gb.js
│   │   │       en-ie.js
│   │   │       en-il.js
│   │   │       en-in.js
│   │   │       en-nz.js
│   │   │       en-sg.js
│   │   │       eo.js
│   │   │       es-do.js
│   │   │       es-mx.js
│   │   │       es-us.js
│   │   │       es.js
│   │   │       et.js
│   │   │       eu.js
│   │   │       fa.js
│   │   │       fi.js
│   │   │       fil.js
│   │   │       fo.js
│   │   │       fr-ca.js
│   │   │       fr-ch.js
│   │   │       fr.js
│   │   │       fy.js
│   │   │       ga.js
│   │   │       gd.js
│   │   │       gl.js
│   │   │       gom-deva.js
│   │   │       gom-latn.js
│   │   │       gu.js
│   │   │       he.js
│   │   │       hi.js
│   │   │       hr.js
│   │   │       hu.js
│   │   │       hy-am.js
│   │   │       id.js
│   │   │       is.js
│   │   │       it-ch.js
│   │   │       it.js
│   │   │       ja.js
│   │   │       jv.js
│   │   │       ka.js
│   │   │       kk.js
│   │   │       km.js
│   │   │       kn.js
│   │   │       ko.js
│   │   │       ku-kmr.js
│   │   │       ku.js
│   │   │       ky.js
│   │   │       lb.js
│   │   │       lo.js
│   │   │       lt.js
│   │   │       lv.js
│   │   │       me.js
│   │   │       mi.js
│   │   │       mk.js
│   │   │       ml.js
│   │   │       mn.js
│   │   │       mr.js
│   │   │       ms-my.js
│   │   │       ms.js
│   │   │       mt.js
│   │   │       my.js
│   │   │       nb.js
│   │   │       ne.js
│   │   │       nl-be.js
│   │   │       nl.js
│   │   │       nn.js
│   │   │       oc-lnc.js
│   │   │       pa-in.js
│   │   │       pl.js
│   │   │       pt-br.js
│   │   │       pt.js
│   │   │       ro.js
│   │   │       ru.js
│   │   │       sd.js
│   │   │       se.js
│   │   │       si.js
│   │   │       sk.js
│   │   │       sl.js
│   │   │       sq.js
│   │   │       sr-cyrl.js
│   │   │       sr.js
│   │   │       ss.js
│   │   │       sv.js
│   │   │       sw.js
│   │   │       ta.js
│   │   │       te.js
│   │   │       tet.js
│   │   │       tg.js
│   │   │       th.js
│   │   │       tk.js
│   │   │       tl-ph.js
│   │   │       tlh.js
│   │   │       tr.js
│   │   │       tzl.js
│   │   │       tzm-latn.js
│   │   │       tzm.js
│   │   │       ug-cn.js
│   │   │       uk.js
│   │   │       ur.js
│   │   │       uz-latn.js
│   │   │       uz.js
│   │   │       vi.js
│   │   │       x-pseudo.js
│   │   │       yo.js
│   │   │       zh-cn.js
│   │   │       zh-hk.js
│   │   │       zh-mo.js
│   │   │       zh-tw.js
│   │   │
│   │   ├───min
│   │   │       locales.js
│   │   │       locales.min.js
│   │   │       locales.min.js.map
│   │   │       moment-with-locales.js
│   │   │       moment-with-locales.min.js
│   │   │       moment-with-locales.min.js.map
│   │   │       moment.min.js
│   │   │       moment.min.js.map
│   │   │
│   │   ├───src
│   │   │   │   moment.js
│   │   │   │
│   │   │   ├───lib
│   │   │   │   ├───create
│   │   │   │   │       check-overflow.js
│   │   │   │   │       date-from-array.js
│   │   │   │   │       from-anything.js
│   │   │   │   │       from-array.js
│   │   │   │   │       from-object.js
│   │   │   │   │       from-string-and-array.js
│   │   │   │   │       from-string-and-format.js
│   │   │   │   │       from-string.js
│   │   │   │   │       local.js
│   │   │   │   │       parsing-flags.js
│   │   │   │   │       utc.js
│   │   │   │   │       valid.js
│   │   │   │   │
│   │   │   │   ├───duration
│   │   │   │   │       abs.js
│   │   │   │   │       add-subtract.js
│   │   │   │   │       as.js
│   │   │   │   │       bubble.js
│   │   │   │   │       clone.js
│   │   │   │   │       constructor.js
│   │   │   │   │       create.js
│   │   │   │   │       duration.js
│   │   │   │   │       get.js
│   │   │   │   │       humanize.js
│   │   │   │   │       iso-string.js
│   │   │   │   │       prototype.js
│   │   │   │   │       valid.js
│   │   │   │   │
│   │   │   │   ├───format
│   │   │   │   │       format.js
│   │   │   │   │
│   │   │   │   ├───locale
│   │   │   │   │       base-config.js
│   │   │   │   │       calendar.js
│   │   │   │   │       constructor.js
│   │   │   │   │       en.js
│   │   │   │   │       formats.js
│   │   │   │   │       invalid.js
│   │   │   │   │       lists.js
│   │   │   │   │       locale.js
│   │   │   │   │       locales.js
│   │   │   │   │       ordinal.js
│   │   │   │   │       pre-post-format.js
│   │   │   │   │       prototype.js
│   │   │   │   │       relative.js
│   │   │   │   │       set.js
│   │   │   │   │
│   │   │   │   ├───moment
│   │   │   │   │       add-subtract.js
│   │   │   │   │       calendar.js
│   │   │   │   │       clone.js
│   │   │   │   │       compare.js
│   │   │   │   │       constructor.js
│   │   │   │   │       creation-data.js
│   │   │   │   │       diff.js
│   │   │   │   │       format.js
│   │   │   │   │       from.js
│   │   │   │   │       get-set.js
│   │   │   │   │       locale.js
│   │   │   │   │       min-max.js
│   │   │   │   │       moment.js
│   │   │   │   │       now.js
│   │   │   │   │       prototype.js
│   │   │   │   │       start-end-of.js
│   │   │   │   │       to-type.js
│   │   │   │   │       to.js
│   │   │   │   │       valid.js
│   │   │   │   │
│   │   │   │   ├───parse
│   │   │   │   │       regex.js
│   │   │   │   │       token.js
│   │   │   │   │
│   │   │   │   ├───units
│   │   │   │   │       aliases.js
│   │   │   │   │       constants.js
│   │   │   │   │       day-of-month.js
│   │   │   │   │       day-of-week.js
│   │   │   │   │       day-of-year.js
│   │   │   │   │       era.js
│   │   │   │   │       hour.js
│   │   │   │   │       millisecond.js
│   │   │   │   │       minute.js
│   │   │   │   │       month.js
│   │   │   │   │       offset.js
│   │   │   │   │       priorities.js
│   │   │   │   │       quarter.js
│   │   │   │   │       second.js
│   │   │   │   │       timestamp.js
│   │   │   │   │       timezone.js
│   │   │   │   │       units.js
│   │   │   │   │       week-calendar-utils.js
│   │   │   │   │       week-year.js
│   │   │   │   │       week.js
│   │   │   │   │       year.js
│   │   │   │   │
│   │   │   │   └───utils
│   │   │   │           abs-ceil.js
│   │   │   │           abs-floor.js
│   │   │   │           abs-round.js
│   │   │   │           compare-arrays.js
│   │   │   │           defaults.js
│   │   │   │           deprecate.js
│   │   │   │           extend.js
│   │   │   │           has-own-prop.js
│   │   │   │           hooks.js
│   │   │   │           index-of.js
│   │   │   │           is-array.js
│   │   │   │           is-calendar-spec.js
│   │   │   │           is-date.js
│   │   │   │           is-function.js
│   │   │   │           is-leap-year.js
│   │   │   │           is-moment-input.js
│   │   │   │           is-number.js
│   │   │   │           is-object-empty.js
│   │   │   │           is-object.js
│   │   │   │           is-string.js
│   │   │   │           is-undefined.js
│   │   │   │           keys.js
│   │   │   │           map.js
│   │   │   │           mod.js
│   │   │   │           some.js
│   │   │   │           to-int.js
│   │   │   │           zero-fill.js
│   │   │   │
│   │   │   └───locale
│   │   │           af.js
│   │   │           ar-dz.js
│   │   │           ar-kw.js
│   │   │           ar-ly.js
│   │   │           ar-ma.js
│   │   │           ar-ps.js
│   │   │           ar-sa.js
│   │   │           ar-tn.js
│   │   │           ar.js
│   │   │           az.js
│   │   │           be.js
│   │   │           bg.js
│   │   │           bm.js
│   │   │           bn-bd.js
│   │   │           bn.js
│   │   │           bo.js
│   │   │           br.js
│   │   │           bs.js
│   │   │           ca.js
│   │   │           cs.js
│   │   │           cv.js
│   │   │           cy.js
│   │   │           da.js
│   │   │           de-at.js
│   │   │           de-ch.js
│   │   │           de.js
│   │   │           dv.js
│   │   │           el.js
│   │   │           en-au.js
│   │   │           en-ca.js
│   │   │           en-gb.js
│   │   │           en-ie.js
│   │   │           en-il.js
│   │   │           en-in.js
│   │   │           en-nz.js
│   │   │           en-sg.js
│   │   │           eo.js
│   │   │           es-do.js
│   │   │           es-mx.js
│   │   │           es-us.js
│   │   │           es.js
│   │   │           et.js
│   │   │           eu.js
│   │   │           fa.js
│   │   │           fi.js
│   │   │           fil.js
│   │   │           fo.js
│   │   │           fr-ca.js
│   │   │           fr-ch.js
│   │   │           fr.js
│   │   │           fy.js
│   │   │           ga.js
│   │   │           gd.js
│   │   │           gl.js
│   │   │           gom-deva.js
│   │   │           gom-latn.js
│   │   │           gu.js
│   │   │           he.js
│   │   │           hi.js
│   │   │           hr.js
│   │   │           hu.js
│   │   │           hy-am.js
│   │   │           id.js
│   │   │           is.js
│   │   │           it-ch.js
│   │   │           it.js
│   │   │           ja.js
│   │   │           jv.js
│   │   │           ka.js
│   │   │           kk.js
│   │   │           km.js
│   │   │           kn.js
│   │   │           ko.js
│   │   │           ku-kmr.js
│   │   │           ku.js
│   │   │           ky.js
│   │   │           lb.js
│   │   │           lo.js
│   │   │           lt.js
│   │   │           lv.js
│   │   │           me.js
│   │   │           mi.js
│   │   │           mk.js
│   │   │           ml.js
│   │   │           mn.js
│   │   │           mr.js
│   │   │           ms-my.js
│   │   │           ms.js
│   │   │           mt.js
│   │   │           my.js
│   │   │           nb.js
│   │   │           ne.js
│   │   │           nl-be.js
│   │   │           nl.js
│   │   │           nn.js
│   │   │           oc-lnc.js
│   │   │           pa-in.js
│   │   │           pl.js
│   │   │           pt-br.js
│   │   │           pt.js
│   │   │           ro.js
│   │   │           ru.js
│   │   │           sd.js
│   │   │           se.js
│   │   │           si.js
│   │   │           sk.js
│   │   │           sl.js
│   │   │           sq.js
│   │   │           sr-cyrl.js
│   │   │           sr.js
│   │   │           ss.js
│   │   │           sv.js
│   │   │           sw.js
│   │   │           ta.js
│   │   │           te.js
│   │   │           tet.js
│   │   │           tg.js
│   │   │           th.js
│   │   │           tk.js
│   │   │           tl-ph.js
│   │   │           tlh.js
│   │   │           tr.js
│   │   │           tzl.js
│   │   │           tzm-latn.js
│   │   │           tzm.js
│   │   │           ug-cn.js
│   │   │           uk.js
│   │   │           ur.js
│   │   │           uz-latn.js
│   │   │           uz.js
│   │   │           vi.js
│   │   │           x-pseudo.js
│   │   │           yo.js
│   │   │           zh-cn.js
│   │   │           zh-hk.js
│   │   │           zh-mo.js
│   │   │           zh-tw.js
│   │   │
│   │   └───ts3.1-typings
│   │           moment.d.ts
│   │
│   ├───mongodb
│   │   │   LICENSE.md
│   │   │   mongodb.d.ts
│   │   │   package.json
│   │   │   README.md
│   │   │   tsconfig.json
│   │   │
│   │   ├───etc
│   │   │       prepare.js
│   │   │
│   │   ├───lib
│   │   │   │   admin.js
│   │   │   │   admin.js.map
│   │   │   │   bson.js
│   │   │   │   bson.js.map
│   │   │   │   change_stream.js
│   │   │   │   change_stream.js.map
│   │   │   │   collection.js
│   │   │   │   collection.js.map
│   │   │   │   connection_string.js
│   │   │   │   connection_string.js.map
│   │   │   │   constants.js
│   │   │   │   constants.js.map
│   │   │   │   db.js
│   │   │   │   db.js.map
│   │   │   │   deps.js
│   │   │   │   deps.js.map
│   │   │   │   encrypter.js
│   │   │   │   encrypter.js.map
│   │   │   │   error.js
│   │   │   │   error.js.map
│   │   │   │   explain.js
│   │   │   │   explain.js.map
│   │   │   │   index.js
│   │   │   │   index.js.map
│   │   │   │   mongo_client.js
│   │   │   │   mongo_client.js.map
│   │   │   │   mongo_client_auth_providers.js
│   │   │   │   mongo_client_auth_providers.js.map
│   │   │   │   mongo_logger.js
│   │   │   │   mongo_logger.js.map
│   │   │   │   mongo_types.js
│   │   │   │   mongo_types.js.map
│   │   │   │   read_concern.js
│   │   │   │   read_concern.js.map
│   │   │   │   read_preference.js
│   │   │   │   read_preference.js.map
│   │   │   │   sessions.js
│   │   │   │   sessions.js.map
│   │   │   │   sort.js
│   │   │   │   sort.js.map
│   │   │   │   timeout.js
│   │   │   │   timeout.js.map
│   │   │   │   transactions.js
│   │   │   │   transactions.js.map
│   │   │   │   utils.js
│   │   │   │   utils.js.map
│   │   │   │   write_concern.js
│   │   │   │   write_concern.js.map
│   │   │   │
│   │   │   ├───bulk
│   │   │   │       common.js
│   │   │   │       common.js.map
│   │   │   │       ordered.js
│   │   │   │       ordered.js.map
│   │   │   │       unordered.js
│   │   │   │       unordered.js.map
│   │   │   │
│   │   │   ├───client-side-encryption
│   │   │   │   │   auto_encrypter.js
│   │   │   │   │   auto_encrypter.js.map
│   │   │   │   │   client_encryption.js
│   │   │   │   │   client_encryption.js.map
│   │   │   │   │   crypto_callbacks.js
│   │   │   │   │   crypto_callbacks.js.map
│   │   │   │   │   errors.js
│   │   │   │   │   errors.js.map
│   │   │   │   │   mongocryptd_manager.js
│   │   │   │   │   mongocryptd_manager.js.map
│   │   │   │   │   state_machine.js
│   │   │   │   │   state_machine.js.map
│   │   │   │   │
│   │   │   │   └───providers
│   │   │   │           aws.js
│   │   │   │           aws.js.map
│   │   │   │           azure.js
│   │   │   │           azure.js.map
│   │   │   │           gcp.js
│   │   │   │           gcp.js.map
│   │   │   │           index.js
│   │   │   │           index.js.map
│   │   │   │           utils.js
│   │   │   │           utils.js.map
│   │   │   │
│   │   │   ├───cmap
│   │   │   │   │   commands.js
│   │   │   │   │   commands.js.map
│   │   │   │   │   command_monitoring_events.js
│   │   │   │   │   command_monitoring_events.js.map
│   │   │   │   │   connect.js
│   │   │   │   │   connect.js.map
│   │   │   │   │   connection.js
│   │   │   │   │   connection.js.map
│   │   │   │   │   connection_pool.js
│   │   │   │   │   connection_pool.js.map
│   │   │   │   │   connection_pool_events.js
│   │   │   │   │   connection_pool_events.js.map
│   │   │   │   │   errors.js
│   │   │   │   │   errors.js.map
│   │   │   │   │   metrics.js
│   │   │   │   │   metrics.js.map
│   │   │   │   │   stream_description.js
│   │   │   │   │   stream_description.js.map
│   │   │   │   │
│   │   │   │   ├───auth
│   │   │   │   │   │   auth_provider.js
│   │   │   │   │   │   auth_provider.js.map
│   │   │   │   │   │   aws_temporary_credentials.js
│   │   │   │   │   │   aws_temporary_credentials.js.map
│   │   │   │   │   │   gssapi.js
│   │   │   │   │   │   gssapi.js.map
│   │   │   │   │   │   mongocr.js
│   │   │   │   │   │   mongocr.js.map
│   │   │   │   │   │   mongodb_aws.js
│   │   │   │   │   │   mongodb_aws.js.map
│   │   │   │   │   │   mongodb_oidc.js
│   │   │   │   │   │   mongodb_oidc.js.map
│   │   │   │   │   │   mongo_credentials.js
│   │   │   │   │   │   mongo_credentials.js.map
│   │   │   │   │   │   plain.js
│   │   │   │   │   │   plain.js.map
│   │   │   │   │   │   providers.js
│   │   │   │   │   │   providers.js.map
│   │   │   │   │   │   scram.js
│   │   │   │   │   │   scram.js.map
│   │   │   │   │   │   x509.js
│   │   │   │   │   │   x509.js.map
│   │   │   │   │   │
│   │   │   │   │   └───mongodb_oidc
│   │   │   │   │           aws_service_workflow.js
│   │   │   │   │           aws_service_workflow.js.map
│   │   │   │   │           azure_service_workflow.js
│   │   │   │   │           azure_service_workflow.js.map
│   │   │   │   │           azure_token_cache.js
│   │   │   │   │           azure_token_cache.js.map
│   │   │   │   │           cache.js
│   │   │   │   │           cache.js.map
│   │   │   │   │           callback_lock_cache.js
│   │   │   │   │           callback_lock_cache.js.map
│   │   │   │   │           callback_workflow.js
│   │   │   │   │           callback_workflow.js.map
│   │   │   │   │           service_workflow.js
│   │   │   │   │           service_workflow.js.map
│   │   │   │   │           token_entry_cache.js
│   │   │   │   │           token_entry_cache.js.map
│   │   │   │   │
│   │   │   │   ├───handshake
│   │   │   │   │       client_metadata.js
│   │   │   │   │       client_metadata.js.map
│   │   │   │   │
│   │   │   │   └───wire_protocol
│   │   │   │       │   compression.js
│   │   │   │       │   compression.js.map
│   │   │   │       │   constants.js
│   │   │   │       │   constants.js.map
│   │   │   │       │   on_data.js
│   │   │   │       │   on_data.js.map
│   │   │   │       │   responses.js
│   │   │   │       │   responses.js.map
│   │   │   │       │   shared.js
│   │   │   │       │   shared.js.map
│   │   │   │       │
│   │   │   │       └───on_demand
│   │   │   │               document.js
│   │   │   │               document.js.map
│   │   │   │
│   │   │   ├───cursor
│   │   │   │       abstract_cursor.js
│   │   │   │       abstract_cursor.js.map
│   │   │   │       aggregation_cursor.js
│   │   │   │       aggregation_cursor.js.map
│   │   │   │       change_stream_cursor.js
│   │   │   │       change_stream_cursor.js.map
│   │   │   │       find_cursor.js
│   │   │   │       find_cursor.js.map
│   │   │   │       list_collections_cursor.js
│   │   │   │       list_collections_cursor.js.map
│   │   │   │       list_indexes_cursor.js
│   │   │   │       list_indexes_cursor.js.map
│   │   │   │       list_search_indexes_cursor.js
│   │   │   │       list_search_indexes_cursor.js.map
│   │   │   │       run_command_cursor.js
│   │   │   │       run_command_cursor.js.map
│   │   │   │
│   │   │   ├───gridfs
│   │   │   │       download.js
│   │   │   │       download.js.map
│   │   │   │       index.js
│   │   │   │       index.js.map
│   │   │   │       upload.js
│   │   │   │       upload.js.map
│   │   │   │
│   │   │   ├───operations
│   │   │   │   │   aggregate.js
│   │   │   │   │   aggregate.js.map
│   │   │   │   │   bulk_write.js
│   │   │   │   │   bulk_write.js.map
│   │   │   │   │   collections.js
│   │   │   │   │   collections.js.map
│   │   │   │   │   command.js
│   │   │   │   │   command.js.map
│   │   │   │   │   count.js
│   │   │   │   │   count.js.map
│   │   │   │   │   count_documents.js
│   │   │   │   │   count_documents.js.map
│   │   │   │   │   create_collection.js
│   │   │   │   │   create_collection.js.map
│   │   │   │   │   delete.js
│   │   │   │   │   delete.js.map
│   │   │   │   │   distinct.js
│   │   │   │   │   distinct.js.map
│   │   │   │   │   drop.js
│   │   │   │   │   drop.js.map
│   │   │   │   │   estimated_document_count.js
│   │   │   │   │   estimated_document_count.js.map
│   │   │   │   │   execute_operation.js
│   │   │   │   │   execute_operation.js.map
│   │   │   │   │   find.js
│   │   │   │   │   find.js.map
│   │   │   │   │   find_and_modify.js
│   │   │   │   │   find_and_modify.js.map
│   │   │   │   │   get_more.js
│   │   │   │   │   get_more.js.map
│   │   │   │   │   indexes.js
│   │   │   │   │   indexes.js.map
│   │   │   │   │   insert.js
│   │   │   │   │   insert.js.map
│   │   │   │   │   is_capped.js
│   │   │   │   │   is_capped.js.map
│   │   │   │   │   kill_cursors.js
│   │   │   │   │   kill_cursors.js.map
│   │   │   │   │   list_collections.js
│   │   │   │   │   list_collections.js.map
│   │   │   │   │   list_databases.js
│   │   │   │   │   list_databases.js.map
│   │   │   │   │   operation.js
│   │   │   │   │   operation.js.map
│   │   │   │   │   options_operation.js
│   │   │   │   │   options_operation.js.map
│   │   │   │   │   profiling_level.js
│   │   │   │   │   profiling_level.js.map
│   │   │   │   │   remove_user.js
│   │   │   │   │   remove_user.js.map
│   │   │   │   │   rename.js
│   │   │   │   │   rename.js.map
│   │   │   │   │   run_command.js
│   │   │   │   │   run_command.js.map
│   │   │   │   │   set_profiling_level.js
│   │   │   │   │   set_profiling_level.js.map
│   │   │   │   │   stats.js
│   │   │   │   │   stats.js.map
│   │   │   │   │   update.js
│   │   │   │   │   update.js.map
│   │   │   │   │   validate_collection.js
│   │   │   │   │   validate_collection.js.map
│   │   │   │   │
│   │   │   │   └───search_indexes
│   │   │   │           create.js
│   │   │   │           create.js.map
│   │   │   │           drop.js
│   │   │   │           drop.js.map
│   │   │   │           update.js
│   │   │   │           update.js.map
│   │   │   │
│   │   │   └───sdam
│   │   │           common.js
│   │   │           common.js.map
│   │   │           events.js
│   │   │           events.js.map
│   │   │           monitor.js
│   │   │           monitor.js.map
│   │   │           server.js
│   │   │           server.js.map
│   │   │           server_description.js
│   │   │           server_description.js.map
│   │   │           server_selection.js
│   │   │           server_selection.js.map
│   │   │           server_selection_events.js
│   │   │           server_selection_events.js.map
│   │   │           srv_polling.js
│   │   │           srv_polling.js.map
│   │   │           topology.js
│   │   │           topology.js.map
│   │   │           topology_description.js
│   │   │           topology_description.js.map
│   │   │
│   │   └───src
│   │       │   admin.ts
│   │       │   bson.ts
│   │       │   change_stream.ts
│   │       │   collection.ts
│   │       │   connection_string.ts
│   │       │   constants.ts
│   │       │   db.ts
│   │       │   deps.ts
│   │       │   encrypter.ts
│   │       │   error.ts
│   │       │   explain.ts
│   │       │   index.ts
│   │       │   mongo_client.ts
│   │       │   mongo_client_auth_providers.ts
│   │       │   mongo_logger.ts
│   │       │   mongo_types.ts
│   │       │   read_concern.ts
│   │       │   read_preference.ts
│   │       │   sessions.ts
│   │       │   sort.ts
│   │       │   timeout.ts
│   │       │   transactions.ts
│   │       │   utils.ts
│   │       │   write_concern.ts
│   │       │
│   │       ├───bulk
│   │       │       common.ts
│   │       │       ordered.ts
│   │       │       unordered.ts
│   │       │
│   │       ├───client-side-encryption
│   │       │   │   auto_encrypter.ts
│   │       │   │   client_encryption.ts
│   │       │   │   crypto_callbacks.ts
│   │       │   │   errors.ts
│   │       │   │   mongocryptd_manager.ts
│   │       │   │   state_machine.ts
│   │       │   │
│   │       │   └───providers
│   │       │           aws.ts
│   │       │           azure.ts
│   │       │           gcp.ts
│   │       │           index.ts
│   │       │           utils.ts
│   │       │
│   │       ├───cmap
│   │       │   │   commands.ts
│   │       │   │   command_monitoring_events.ts
│   │       │   │   connect.ts
│   │       │   │   connection.ts
│   │       │   │   connection_pool.ts
│   │       │   │   connection_pool_events.ts
│   │       │   │   errors.ts
│   │       │   │   metrics.ts
│   │       │   │   stream_description.ts
│   │       │   │
│   │       │   ├───auth
│   │       │   │   │   auth_provider.ts
│   │       │   │   │   aws_temporary_credentials.ts
│   │       │   │   │   gssapi.ts
│   │       │   │   │   mongocr.ts
│   │       │   │   │   mongodb_aws.ts
│   │       │   │   │   mongodb_oidc.ts
│   │       │   │   │   mongo_credentials.ts
│   │       │   │   │   plain.ts
│   │       │   │   │   providers.ts
│   │       │   │   │   scram.ts
│   │       │   │   │   x509.ts
│   │       │   │   │
│   │       │   │   └───mongodb_oidc
│   │       │   │           aws_service_workflow.ts
│   │       │   │           azure_service_workflow.ts
│   │       │   │           azure_token_cache.ts
│   │       │   │           cache.ts
│   │       │   │           callback_lock_cache.ts
│   │       │   │           callback_workflow.ts
│   │       │   │           service_workflow.ts
│   │       │   │           token_entry_cache.ts
│   │       │   │
│   │       │   ├───handshake
│   │       │   │       client_metadata.ts
│   │       │   │
│   │       │   └───wire_protocol
│   │       │       │   compression.ts
│   │       │       │   constants.ts
│   │       │       │   on_data.ts
│   │       │       │   responses.ts
│   │       │       │   shared.ts
│   │       │       │
│   │       │       └───on_demand
│   │       │               document.ts
│   │       │
│   │       ├───cursor
│   │       │       abstract_cursor.ts
│   │       │       aggregation_cursor.ts
│   │       │       change_stream_cursor.ts
│   │       │       find_cursor.ts
│   │       │       list_collections_cursor.ts
│   │       │       list_indexes_cursor.ts
│   │       │       list_search_indexes_cursor.ts
│   │       │       run_command_cursor.ts
│   │       │
│   │       ├───gridfs
│   │       │       download.ts
│   │       │       index.ts
│   │       │       upload.ts
│   │       │
│   │       ├───operations
│   │       │   │   aggregate.ts
│   │       │   │   bulk_write.ts
│   │       │   │   collections.ts
│   │       │   │   command.ts
│   │       │   │   count.ts
│   │       │   │   count_documents.ts
│   │       │   │   create_collection.ts
│   │       │   │   delete.ts
│   │       │   │   distinct.ts
│   │       │   │   drop.ts
│   │       │   │   estimated_document_count.ts
│   │       │   │   execute_operation.ts
│   │       │   │   find.ts
│   │       │   │   find_and_modify.ts
│   │       │   │   get_more.ts
│   │       │   │   indexes.ts
│   │       │   │   insert.ts
│   │       │   │   is_capped.ts
│   │       │   │   kill_cursors.ts
│   │       │   │   list_collections.ts
│   │       │   │   list_databases.ts
│   │       │   │   operation.ts
│   │       │   │   options_operation.ts
│   │       │   │   profiling_level.ts
│   │       │   │   remove_user.ts
│   │       │   │   rename.ts
│   │       │   │   run_command.ts
│   │       │   │   set_profiling_level.ts
│   │       │   │   stats.ts
│   │       │   │   update.ts
│   │       │   │   validate_collection.ts
│   │       │   │
│   │       │   └───search_indexes
│   │       │           create.ts
│   │       │           drop.ts
│   │       │           update.ts
│   │       │
│   │       └───sdam
│   │               common.ts
│   │               events.ts
│   │               monitor.ts
│   │               server.ts
│   │               server_description.ts
│   │               server_selection.ts
│   │               server_selection_events.ts
│   │               srv_polling.ts
│   │               topology.ts
│   │               topology_description.ts
│   │
│   ├───mongodb-connection-string-url
│   │   │   .esm-wrapper.mjs
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           index.d.ts
│   │           index.js
│   │           index.js.map
│   │           redact.d.ts
│   │           redact.js
│   │           redact.js.map
│   │
│   ├───mongoose
│   │   │   browser.js
│   │   │   index.js
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │   SECURITY.md
│   │   │
│   │   ├───dist
│   │   │       browser.umd.js
│   │   │
│   │   ├───lib
│   │   │   │   aggregate.js
│   │   │   │   browser.js
│   │   │   │   browserDocument.js
│   │   │   │   cast.js
│   │   │   │   collection.js
│   │   │   │   connection.js
│   │   │   │   connectionState.js
│   │   │   │   constants.js
│   │   │   │   document.js
│   │   │   │   documentProvider.js
│   │   │   │   driver.js
│   │   │   │   index.js
│   │   │   │   internal.js
│   │   │   │   model.js
│   │   │   │   mongoose.js
│   │   │   │   options.js
│   │   │   │   query.js
│   │   │   │   queryHelpers.js
│   │   │   │   schema.js
│   │   │   │   schemaType.js
│   │   │   │   stateMachine.js
│   │   │   │   utils.js
│   │   │   │   validOptions.js
│   │   │   │   virtualType.js
│   │   │   │
│   │   │   ├───cast
│   │   │   │       bigint.js
│   │   │   │       boolean.js
│   │   │   │       date.js
│   │   │   │       decimal128.js
│   │   │   │       number.js
│   │   │   │       objectid.js
│   │   │   │       string.js
│   │   │   │
│   │   │   ├───cursor
│   │   │   │       aggregationCursor.js
│   │   │   │       changeStream.js
│   │   │   │       queryCursor.js
│   │   │   │
│   │   │   ├───drivers
│   │   │   │   │   SPEC.md
│   │   │   │   │
│   │   │   │   ├───browser
│   │   │   │   │       binary.js
│   │   │   │   │       decimal128.js
│   │   │   │   │       index.js
│   │   │   │   │       objectid.js
│   │   │   │   │
│   │   │   │   └───node-mongodb-native
│   │   │   │           collection.js
│   │   │   │           connection.js
│   │   │   │           index.js
│   │   │   │
│   │   │   ├───error
│   │   │   │       browserMissingSchema.js
│   │   │   │       bulkWriteError.js
│   │   │   │       cast.js
│   │   │   │       createCollectionsError.js
│   │   │   │       divergentArray.js
│   │   │   │       eachAsyncMultiError.js
│   │   │   │       index.js
│   │   │   │       invalidSchemaOption.js
│   │   │   │       messages.js
│   │   │   │       missingSchema.js
│   │   │   │       mongooseError.js
│   │   │   │       notFound.js
│   │   │   │       objectExpected.js
│   │   │   │       objectParameter.js
│   │   │   │       overwriteModel.js
│   │   │   │       parallelSave.js
│   │   │   │       parallelValidate.js
│   │   │   │       serverSelection.js
│   │   │   │       setOptionError.js
│   │   │   │       strict.js
│   │   │   │       strictPopulate.js
│   │   │   │       syncIndexes.js
│   │   │   │       validation.js
│   │   │   │       validator.js
│   │   │   │       version.js
│   │   │   │
│   │   │   ├───helpers
│   │   │   │   │   arrayDepth.js
│   │   │   │   │   clone.js
│   │   │   │   │   common.js
│   │   │   │   │   each.js
│   │   │   │   │   firstKey.js
│   │   │   │   │   get.js
│   │   │   │   │   getConstructorName.js
│   │   │   │   │   getDefaultBulkwriteResult.js
│   │   │   │   │   getFunctionName.js
│   │   │   │   │   immediate.js
│   │   │   │   │   isAsyncFunction.js
│   │   │   │   │   isBsonType.js
│   │   │   │   │   isMongooseObject.js
│   │   │   │   │   isObject.js
│   │   │   │   │   isPOJO.js
│   │   │   │   │   isPromise.js
│   │   │   │   │   isSimpleValidator.js
│   │   │   │   │   minimize.js
│   │   │   │   │   omitUndefined.js
│   │   │   │   │   once.js
│   │   │   │   │   parallelLimit.js
│   │   │   │   │   pluralize.js
│   │   │   │   │   printJestWarning.js
│   │   │   │   │   processConnectionOptions.js
│   │   │   │   │   promiseOrCallback.js
│   │   │   │   │   setDefaultsOnInsert.js
│   │   │   │   │   specialProperties.js
│   │   │   │   │   symbols.js
│   │   │   │   │   timers.js
│   │   │   │   │   updateValidators.js
│   │   │   │   │
│   │   │   │   ├───aggregate
│   │   │   │   │       prepareDiscriminatorPipeline.js
│   │   │   │   │       stringifyFunctionOperators.js
│   │   │   │   │
│   │   │   │   ├───cursor
│   │   │   │   │       eachAsync.js
│   │   │   │   │
│   │   │   │   ├───discriminator
│   │   │   │   │       applyEmbeddedDiscriminators.js
│   │   │   │   │       areDiscriminatorValuesEqual.js
│   │   │   │   │       checkEmbeddedDiscriminatorKeyProjection.js
│   │   │   │   │       getConstructor.js
│   │   │   │   │       getDiscriminatorByValue.js
│   │   │   │   │       getSchemaDiscriminatorByValue.js
│   │   │   │   │       mergeDiscriminatorSchema.js
│   │   │   │   │
│   │   │   │   ├───document
│   │   │   │   │       applyDefaults.js
│   │   │   │   │       cleanModifiedSubpaths.js
│   │   │   │   │       compile.js
│   │   │   │   │       getDeepestSubdocumentForPath.js
│   │   │   │   │       getEmbeddedDiscriminatorPath.js
│   │   │   │   │       handleSpreadDoc.js
│   │   │   │   │
│   │   │   │   ├───error
│   │   │   │   │       combinePathErrors.js
│   │   │   │   │
│   │   │   │   ├───indexes
│   │   │   │   │       applySchemaCollation.js
│   │   │   │   │       decorateDiscriminatorIndexOptions.js
│   │   │   │   │       getRelatedIndexes.js
│   │   │   │   │       isDefaultIdIndex.js
│   │   │   │   │       isIndexEqual.js
│   │   │   │   │       isTextIndex.js
│   │   │   │   │
│   │   │   │   ├───model
│   │   │   │   │       applyDefaultsToPOJO.js
│   │   │   │   │       applyHooks.js
│   │   │   │   │       applyMethods.js
│   │   │   │   │       applyStaticHooks.js
│   │   │   │   │       applyStatics.js
│   │   │   │   │       castBulkWrite.js
│   │   │   │   │       discriminator.js
│   │   │   │   │       pushNestedArrayPaths.js
│   │   │   │   │
│   │   │   │   ├───path
│   │   │   │   │       parentPaths.js
│   │   │   │   │       setDottedPath.js
│   │   │   │   │
│   │   │   │   ├───populate
│   │   │   │   │       assignRawDocsToIdStructure.js
│   │   │   │   │       assignVals.js
│   │   │   │   │       createPopulateQueryFilter.js
│   │   │   │   │       getModelsMapForPopulate.js
│   │   │   │   │       getSchemaTypes.js
│   │   │   │   │       getVirtual.js
│   │   │   │   │       leanPopulateMap.js
│   │   │   │   │       lookupLocalFields.js
│   │   │   │   │       markArraySubdocsPopulated.js
│   │   │   │   │       modelNamesFromRefPath.js
│   │   │   │   │       removeDeselectedForeignField.js
│   │   │   │   │       setPopulatedVirtualValue.js
│   │   │   │   │       skipPopulateValue.js
│   │   │   │   │       validateRef.js
│   │   │   │   │
│   │   │   │   ├───projection
│   │   │   │   │       applyProjection.js
│   │   │   │   │       hasIncludedChildren.js
│   │   │   │   │       isDefiningProjection.js
│   │   │   │   │       isExclusive.js
│   │   │   │   │       isInclusive.js
│   │   │   │   │       isNestedProjection.js
│   │   │   │   │       isPathExcluded.js
│   │   │   │   │       isPathSelectedInclusive.js
│   │   │   │   │       isSubpath.js
│   │   │   │   │       parseProjection.js
│   │   │   │   │
│   │   │   │   ├───query
│   │   │   │   │       applyGlobalOption.js
│   │   │   │   │       cast$expr.js
│   │   │   │   │       castFilterPath.js
│   │   │   │   │       castUpdate.js
│   │   │   │   │       getEmbeddedDiscriminatorPath.js
│   │   │   │   │       handleImmutable.js
│   │   │   │   │       handleReadPreferenceAliases.js
│   │   │   │   │       hasDollarKeys.js
│   │   │   │   │       isOperator.js
│   │   │   │   │       sanitizeFilter.js
│   │   │   │   │       sanitizeProjection.js
│   │   │   │   │       selectPopulatedFields.js
│   │   │   │   │       trusted.js
│   │   │   │   │       validOps.js
│   │   │   │   │
│   │   │   │   ├───schema
│   │   │   │   │       addAutoId.js
│   │   │   │   │       applyBuiltinPlugins.js
│   │   │   │   │       applyPlugins.js
│   │   │   │   │       applyReadConcern.js
│   │   │   │   │       applyWriteConcern.js
│   │   │   │   │       cleanPositionalOperators.js
│   │   │   │   │       getIndexes.js
│   │   │   │   │       getKeysInSchemaOrder.js
│   │   │   │   │       getPath.js
│   │   │   │   │       getSubdocumentStrictValue.js
│   │   │   │   │       handleIdOption.js
│   │   │   │   │       handleTimestampOption.js
│   │   │   │   │       idGetter.js
│   │   │   │   │       merge.js
│   │   │   │   │
│   │   │   │   ├───schematype
│   │   │   │   │       handleImmutable.js
│   │   │   │   │
│   │   │   │   ├───timestamps
│   │   │   │   │       setDocumentTimestamps.js
│   │   │   │   │       setupTimestamps.js
│   │   │   │   │
│   │   │   │   ├───topology
│   │   │   │   │       allServersUnknown.js
│   │   │   │   │       isAtlas.js
│   │   │   │   │       isSSLError.js
│   │   │   │   │
│   │   │   │   └───update
│   │   │   │           applyTimestampsToChildren.js
│   │   │   │           applyTimestampsToUpdate.js
│   │   │   │           castArrayFilters.js
│   │   │   │           decorateUpdateWithVersionKey.js
│   │   │   │           modifiedPaths.js
│   │   │   │           moveImmutableProperties.js
│   │   │   │           removeUnusedArrayFilters.js
│   │   │   │           updatedPathsByArrayFilter.js
│   │   │   │
│   │   │   ├───options
│   │   │   │       populateOptions.js
│   │   │   │       propertyOptions.js
│   │   │   │       saveOptions.js
│   │   │   │       schemaArrayOptions.js
│   │   │   │       schemaBufferOptions.js
│   │   │   │       schemaDateOptions.js
│   │   │   │       schemaDocumentArrayOptions.js
│   │   │   │       schemaMapOptions.js
│   │   │   │       schemaNumberOptions.js
│   │   │   │       schemaObjectIdOptions.js
│   │   │   │       schemaStringOptions.js
│   │   │   │       schemaSubdocumentOptions.js
│   │   │   │       schemaTypeOptions.js
│   │   │   │       virtualOptions.js
│   │   │   │
│   │   │   ├───plugins
│   │   │   │       index.js
│   │   │   │       saveSubdocs.js
│   │   │   │       sharding.js
│   │   │   │       trackTransaction.js
│   │   │   │       validateBeforeSave.js
│   │   │   │
│   │   │   ├───schema
│   │   │   │   │   array.js
│   │   │   │   │   bigint.js
│   │   │   │   │   boolean.js
│   │   │   │   │   buffer.js
│   │   │   │   │   date.js
│   │   │   │   │   decimal128.js
│   │   │   │   │   documentArray.js
│   │   │   │   │   documentArrayElement.js
│   │   │   │   │   index.js
│   │   │   │   │   map.js
│   │   │   │   │   mixed.js
│   │   │   │   │   number.js
│   │   │   │   │   objectId.js
│   │   │   │   │   string.js
│   │   │   │   │   subdocument.js
│   │   │   │   │   symbols.js
│   │   │   │   │   uuid.js
│   │   │   │   │
│   │   │   │   └───operators
│   │   │   │           bitwise.js
│   │   │   │           exists.js
│   │   │   │           geospatial.js
│   │   │   │           helpers.js
│   │   │   │           text.js
│   │   │   │           type.js
│   │   │   │
│   │   │   └───types
│   │   │       │   arraySubdocument.js
│   │   │       │   buffer.js
│   │   │       │   decimal128.js
│   │   │       │   index.js
│   │   │       │   map.js
│   │   │       │   objectid.js
│   │   │       │   subdocument.js
│   │   │       │   uuid.js
│   │   │       │
│   │   │       ├───array
│   │   │       │   │   index.js
│   │   │       │   │   isMongooseArray.js
│   │   │       │   │
│   │   │       │   └───methods
│   │   │       │           index.js
│   │   │       │
│   │   │       └───documentArray
│   │   │           │   index.js
│   │   │           │   isMongooseDocumentArray.js
│   │   │           │
│   │   │           └───methods
│   │   │                   index.js
│   │   │
│   │   ├───node_modules
│   │   │   └───ms
│   │   │           index.js
│   │   │           license.md
│   │   │           package.json
│   │   │           readme.md
│   │   │
│   │   └───types
│   │           aggregate.d.ts
│   │           augmentations.d.ts
│   │           callback.d.ts
│   │           collection.d.ts
│   │           connection.d.ts
│   │           cursor.d.ts
│   │           document.d.ts
│   │           error.d.ts
│   │           expressions.d.ts
│   │           helpers.d.ts
│   │           index.d.ts
│   │           indexes.d.ts
│   │           inferrawdoctype.d.ts
│   │           inferschematype.d.ts
│   │           middlewares.d.ts
│   │           models.d.ts
│   │           mongooseoptions.d.ts
│   │           pipelinestage.d.ts
│   │           populate.d.ts
│   │           query.d.ts
│   │           schemaoptions.d.ts
│   │           schematypes.d.ts
│   │           session.d.ts
│   │           types.d.ts
│   │           utility.d.ts
│   │           validation.d.ts
│   │           virtuals.d.ts
│   │
│   ├───mpath
│   │   │   .travis.yml
│   │   │   History.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   SECURITY.md
│   │   │
│   │   ├───lib
│   │   │       index.js
│   │   │       stringToParts.js
│   │   │
│   │   └───test
│   │           .eslintrc.yml
│   │           index.js
│   │           stringToParts.js
│   │
│   ├───mquery
│   │   │   History.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   SECURITY.md
│   │   │
│   │   ├───.github
│   │   │       ISSUE_TEMPLATE.md
│   │   │       PULL_REQUEST_TEMPLATE.md
│   │   │
│   │   └───lib
│   │       │   env.js
│   │       │   mquery.js
│   │       │   permissions.js
│   │       │   utils.js
│   │       │
│   │       └───collection
│   │               collection.js
│   │               index.js
│   │               node.js
│   │
│   ├───ms
│   │       index.js
│   │       license.md
│   │       package.json
│   │       readme.md
│   │
│   ├───multer
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───lib
│   │   │       counter.js
│   │   │       file-appender.js
│   │   │       make-middleware.js
│   │   │       multer-error.js
│   │   │       remove-uploaded-files.js
│   │   │
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   │       mkdirp
│   │   │   │       mkdirp.cmd
│   │   │   │       mkdirp.ps1
│   │   │   │
│   │   │   └───mkdirp
│   │   │       │   index.js
│   │   │       │   LICENSE
│   │   │       │   package.json
│   │   │       │   readme.markdown
│   │   │       │
│   │   │       └───bin
│   │   │               cmd.js
│   │   │               usage.txt
│   │   │
│   │   └───storage
│   │           disk.js
│   │           memory.js
│   │
│   ├───mysql2
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   License
│   │   │   package.json
│   │   │   promise.d.ts
│   │   │   promise.js
│   │   │   README.md
│   │   │
│   │   ├───lib
│   │   │   │   auth_41.js
│   │   │   │   compressed_protocol.js
│   │   │   │   connection.js
│   │   │   │   connection_config.js
│   │   │   │   helpers.js
│   │   │   │   packet_parser.js
│   │   │   │   pool.js
│   │   │   │   pool_cluster.js
│   │   │   │   pool_config.js
│   │   │   │   pool_connection.js
│   │   │   │   results_stream.js
│   │   │   │   server.js
│   │   │   │
│   │   │   ├───auth_plugins
│   │   │   │       caching_sha2_password.js
│   │   │   │       caching_sha2_password.md
│   │   │   │       index.js
│   │   │   │       mysql_clear_password.js
│   │   │   │       mysql_native_password.js
│   │   │   │       sha256_password.js
│   │   │   │
│   │   │   ├───commands
│   │   │   │       auth_switch.js
│   │   │   │       binlog_dump.js
│   │   │   │       change_user.js
│   │   │   │       client_handshake.js
│   │   │   │       close_statement.js
│   │   │   │       command.js
│   │   │   │       execute.js
│   │   │   │       index.js
│   │   │   │       ping.js
│   │   │   │       prepare.js
│   │   │   │       query.js
│   │   │   │       quit.js
│   │   │   │       register_slave.js
│   │   │   │       server_handshake.js
│   │   │   │
│   │   │   ├───constants
│   │   │   │       charsets.js
│   │   │   │       charset_encodings.js
│   │   │   │       client.js
│   │   │   │       commands.js
│   │   │   │       cursor.js
│   │   │   │       encoding_charset.js
│   │   │   │       errors.js
│   │   │   │       field_flags.js
│   │   │   │       server_status.js
│   │   │   │       session_track.js
│   │   │   │       ssl_profiles.js
│   │   │   │       types.js
│   │   │   │
│   │   │   ├───packets
│   │   │   │       auth_next_factor.js
│   │   │   │       auth_switch_request.js
│   │   │   │       auth_switch_request_more_data.js
│   │   │   │       auth_switch_response.js
│   │   │   │       binary_row.js
│   │   │   │       binlog_dump.js
│   │   │   │       binlog_query_statusvars.js
│   │   │   │       change_user.js
│   │   │   │       close_statement.js
│   │   │   │       column_definition.js
│   │   │   │       execute.js
│   │   │   │       handshake.js
│   │   │   │       handshake_response.js
│   │   │   │       index.js
│   │   │   │       packet.js
│   │   │   │       prepared_statement_header.js
│   │   │   │       prepare_statement.js
│   │   │   │       query.js
│   │   │   │       register_slave.js
│   │   │   │       resultset_header.js
│   │   │   │       ssl_request.js
│   │   │   │       text_row.js
│   │   │   │
│   │   │   └───parsers
│   │   │           binary_parser.js
│   │   │           parser_cache.js
│   │   │           string.js
│   │   │           text_parser.js
│   │   │
│   │   ├───node_modules
│   │   │   └───iconv-lite
│   │   │       │   Changelog.md
│   │   │       │   LICENSE
│   │   │       │   package.json
│   │   │       │   README.md
│   │   │       │
│   │   │       ├───.github
│   │   │       │       dependabot.yml
│   │   │       │
│   │   │       ├───.idea
│   │   │       │   │   iconv-lite.iml
│   │   │       │   │   modules.xml
│   │   │       │   │   vcs.xml
│   │   │       │   │
│   │   │       │   ├───codeStyles
│   │   │       │   │       codeStyleConfig.xml
│   │   │       │   │       Project.xml
│   │   │       │   │
│   │   │       │   └───inspectionProfiles
│   │   │       │           Project_Default.xml
│   │   │       │
│   │   │       ├───encodings
│   │   │       │   │   dbcs-codec.js
│   │   │       │   │   dbcs-data.js
│   │   │       │   │   index.js
│   │   │       │   │   internal.js
│   │   │       │   │   sbcs-codec.js
│   │   │       │   │   sbcs-data-generated.js
│   │   │       │   │   sbcs-data.js
│   │   │       │   │   utf16.js
│   │   │       │   │   utf32.js
│   │   │       │   │   utf7.js
│   │   │       │   │
│   │   │       │   └───tables
│   │   │       │           big5-added.json
│   │   │       │           cp936.json
│   │   │       │           cp949.json
│   │   │       │           cp950.json
│   │   │       │           eucjp.json
│   │   │       │           gb18030-ranges.json
│   │   │       │           gbk-added.json
│   │   │       │           shiftjis.json
│   │   │       │
│   │   │       └───lib
│   │   │               bom-handling.js
│   │   │               index.d.ts
│   │   │               index.js
│   │   │               streams.js
│   │   │
│   │   └───typings
│   │       └───mysql
│   │           │   index.d.ts
│   │           │   info.txt
│   │           │   LICENSE.txt
│   │           │
│   │           └───lib
│   │               │   Auth.d.ts
│   │               │   Connection.d.ts
│   │               │   Pool.d.ts
│   │               │   PoolCluster.d.ts
│   │               │   PoolConnection.d.ts
│   │               │   Server.d.ts
│   │               │
│   │               ├───constants
│   │               │       Charsets.d.ts
│   │               │       CharsetToEncoding.d.ts
│   │               │       index.d.ts
│   │               │       Types.d.ts
│   │               │
│   │               ├───parsers
│   │               │       index.d.ts
│   │               │       ParserCache.d.ts
│   │               │       typeCast.d.ts
│   │               │
│   │               └───protocol
│   │                   ├───packets
│   │                   │   │   Field.d.ts
│   │                   │   │   FieldPacket.d.ts
│   │                   │   │   index.d.ts
│   │                   │   │   OkPacket.d.ts
│   │                   │   │   ProcedurePacket.d.ts
│   │                   │   │   ResultSetHeader.d.ts
│   │                   │   │   RowDataPacket.d.ts
│   │                   │   │
│   │                   │   └───params
│   │                   │           ErrorPacketParams.d.ts
│   │                   │           OkPacketParams.d.ts
│   │                   │
│   │                   └───sequences
│   │                       │   ExecutableBase.d.ts
│   │                       │   Prepare.d.ts
│   │                       │   Query.d.ts
│   │                       │   QueryableBase.d.ts
│   │                       │   Sequence.d.ts
│   │                       │
│   │                       └───promise
│   │                               ExecutableBase.d.ts
│   │                               QueryableBase.d.ts
│   │
│   ├───named-placeholders
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───node_modules
│   │       └───lru-cache
│   │               index.d.ts
│   │               index.js
│   │               index.mjs
│   │               LICENSE
│   │               package.json
│   │               README.md
│   │
│   ├───negotiator
│   │   │   HISTORY.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           charset.js
│   │           encoding.js
│   │           language.js
│   │           mediaType.js
│   │
│   ├───node-addon-api
│   │   │   common.gypi
│   │   │   except.gypi
│   │   │   index.js
│   │   │   LICENSE.md
│   │   │   napi-inl.deprecated.h
│   │   │   napi-inl.h
│   │   │   napi.h
│   │   │   node_api.gyp
│   │   │   noexcept.gypi
│   │   │   nothing.c
│   │   │   package-support.json
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───tools
│   │           check-napi.js
│   │           clang-format.js
│   │           conversion.js
│   │           eslint-format.js
│   │           README.md
│   │
│   ├───node-fetch
│   │   │   browser.js
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───lib
│   │   │       index.es.js
│   │   │       index.js
│   │   │       index.mjs
│   │   │
│   │   └───node_modules
│   │       ├───tr46
│   │       │   │   .npmignore
│   │       │   │   index.js
│   │       │   │   package.json
│   │       │   │
│   │       │   └───lib
│   │       │           .gitkeep
│   │       │           mappingTable.json
│   │       │
│   │       ├───webidl-conversions
│   │       │   │   LICENSE.md
│   │       │   │   package.json
│   │       │   │   README.md
│   │       │   │
│   │       │   └───lib
│   │       │           index.js
│   │       │
│   │       └───whatwg-url
│   │           │   LICENSE.txt
│   │           │   package.json
│   │           │   README.md
│   │           │
│   │           └───lib
│   │                   public-api.js
│   │                   URL-impl.js
│   │                   url-state-machine.js
│   │                   URL.js
│   │                   utils.js
│   │
│   ├───nodemailer
│   │   │   .gitattributes
│   │   │   .ncurc.js
│   │   │   .prettierrc.js
│   │   │   CHANGELOG.md
│   │   │   CODE_OF_CONDUCT.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   SECURITY.txt
│   │   │
│   │   └───lib
│   │       │   nodemailer.js
│   │       │
│   │       ├───addressparser
│   │       │       index.js
│   │       │
│   │       ├───base64
│   │       │       index.js
│   │       │
│   │       ├───dkim
│   │       │       index.js
│   │       │       message-parser.js
│   │       │       relaxed-body.js
│   │       │       sign.js
│   │       │
│   │       ├───fetch
│   │       │       cookies.js
│   │       │       index.js
│   │       │
│   │       ├───json-transport
│   │       │       index.js
│   │       │
│   │       ├───mail-composer
│   │       │       index.js
│   │       │
│   │       ├───mailer
│   │       │       index.js
│   │       │       mail-message.js
│   │       │
│   │       ├───mime-funcs
│   │       │       index.js
│   │       │       mime-types.js
│   │       │
│   │       ├───mime-node
│   │       │       index.js
│   │       │       last-newline.js
│   │       │       le-unix.js
│   │       │       le-windows.js
│   │       │
│   │       ├───punycode
│   │       │       index.js
│   │       │
│   │       ├───qp
│   │       │       index.js
│   │       │
│   │       ├───sendmail-transport
│   │       │       index.js
│   │       │
│   │       ├───ses-transport
│   │       │       index.js
│   │       │
│   │       ├───shared
│   │       │       index.js
│   │       │
│   │       ├───smtp-connection
│   │       │       data-stream.js
│   │       │       http-proxy-client.js
│   │       │       index.js
│   │       │
│   │       ├───smtp-pool
│   │       │       index.js
│   │       │       pool-resource.js
│   │       │
│   │       ├───smtp-transport
│   │       │       index.js
│   │       │
│   │       ├───stream-transport
│   │       │       index.js
│   │       │
│   │       ├───well-known
│   │       │       index.js
│   │       │       services.json
│   │       │
│   │       └───xoauth2
│   │               index.js
│   │
│   ├───nopt
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───bin
│   │   │       nopt.js
│   │   │
│   │   └───lib
│   │           nopt.js
│   │
│   ├───npmlog
│   │       LICENSE
│   │       log.js
│   │       package.json
│   │       README.md
│   │
│   ├───object-assign
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───object-inspect
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package-support.json
│   │   │   package.json
│   │   │   readme.markdown
│   │   │   test-core-js.js
│   │   │   util.inspect.js
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   ├───example
│   │   │       all.js
│   │   │       circular.js
│   │   │       fn.js
│   │   │       inspect.js
│   │   │
│   │   └───test
│   │       │   bigint.js
│   │       │   circular.js
│   │       │   deep.js
│   │       │   element.js
│   │       │   err.js
│   │       │   fakes.js
│   │       │   fn.js
│   │       │   global.js
│   │       │   has.js
│   │       │   holes.js
│   │       │   indent-option.js
│   │       │   inspect.js
│   │       │   lowbyte.js
│   │       │   number.js
│   │       │   quoteStyle.js
│   │       │   toStringTag.js
│   │       │   undef.js
│   │       │   values.js
│   │       │
│   │       └───browser
│   │               dom.js
│   │
│   ├───on-finished
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───on-headers
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───once
│   │       LICENSE
│   │       once.js
│   │       package.json
│   │       README.md
│   │
│   ├───parseurl
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───path-is-absolute
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───path-to-regexp
│   │       History.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       Readme.md
│   │
│   ├───process-nextick-args
│   │       index.js
│   │       license.md
│   │       package.json
│   │       readme.md
│   │
│   ├───proxy-addr
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───punycode
│   │       LICENSE-MIT.txt
│   │       package.json
│   │       punycode.es6.js
│   │       punycode.js
│   │       README.md
│   │
│   ├───q
│   │       CHANGES.md
│   │       LICENSE
│   │       package.json
│   │       q.js
│   │       queue.js
│   │       README.md
│   │
│   ├───qs
│   │   │   .editorconfig
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   ├───dist
│   │   │       qs.js
│   │   │
│   │   ├───lib
│   │   │       formats.js
│   │   │       index.js
│   │   │       parse.js
│   │   │       stringify.js
│   │   │       utils.js
│   │   │
│   │   └───test
│   │           parse.js
│   │           stringify.js
│   │           utils.js
│   │
│   ├───random-bytes
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───range-parser
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───raw-body
│   │       HISTORY.md
│   │       index.d.ts
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       SECURITY.md
│   │
│   ├───readable-stream
│   │   │   CONTRIBUTING.md
│   │   │   errors-browser.js
│   │   │   errors.js
│   │   │   experimentalWarning.js
│   │   │   GOVERNANCE.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   readable-browser.js
│   │   │   readable.js
│   │   │   README.md
│   │   │
│   │   └───lib
│   │       │   _stream_duplex.js
│   │       │   _stream_passthrough.js
│   │       │   _stream_readable.js
│   │       │   _stream_transform.js
│   │       │   _stream_writable.js
│   │       │
│   │       └───internal
│   │           └───streams
│   │                   async_iterator.js
│   │                   buffer_list.js
│   │                   destroy.js
│   │                   end-of-stream.js
│   │                   from-browser.js
│   │                   from.js
│   │                   pipeline.js
│   │                   state.js
│   │                   stream-browser.js
│   │                   stream.js
│   │
│   ├───rimraf
│   │       bin.js
│   │       CHANGELOG.md
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       rimraf.js
│   │
│   ├───safe-buffer
│   │       index.d.ts
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───safer-buffer
│   │       dangerous.js
│   │       LICENSE
│   │       package.json
│   │       Porting-Buffer.md
│   │       Readme.md
│   │       safer.js
│   │       tests.js
│   │
│   ├───semver
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   preload.js
│   │   │   range.bnf
│   │   │   README.md
│   │   │
│   │   ├───bin
│   │   │       semver.js
│   │   │
│   │   ├───classes
│   │   │       comparator.js
│   │   │       index.js
│   │   │       range.js
│   │   │       semver.js
│   │   │
│   │   ├───functions
│   │   │       clean.js
│   │   │       cmp.js
│   │   │       coerce.js
│   │   │       compare-build.js
│   │   │       compare-loose.js
│   │   │       compare.js
│   │   │       diff.js
│   │   │       eq.js
│   │   │       gt.js
│   │   │       gte.js
│   │   │       inc.js
│   │   │       lt.js
│   │   │       lte.js
│   │   │       major.js
│   │   │       minor.js
│   │   │       neq.js
│   │   │       parse.js
│   │   │       patch.js
│   │   │       prerelease.js
│   │   │       rcompare.js
│   │   │       rsort.js
│   │   │       satisfies.js
│   │   │       sort.js
│   │   │       valid.js
│   │   │
│   │   ├───internal
│   │   │       constants.js
│   │   │       debug.js
│   │   │       identifiers.js
│   │   │       lrucache.js
│   │   │       parse-options.js
│   │   │       re.js
│   │   │
│   │   └───ranges
│   │           gtr.js
│   │           intersects.js
│   │           ltr.js
│   │           max-satisfying.js
│   │           min-satisfying.js
│   │           min-version.js
│   │           outside.js
│   │           simplify.js
│   │           subset.js
│   │           to-comparators.js
│   │           valid.js
│   │
│   ├───send
│   │   │   HISTORY.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   SECURITY.md
│   │   │
│   │   └───node_modules
│   │       ├───debug
│   │       │   │   .coveralls.yml
│   │       │   │   .eslintrc
│   │       │   │   .npmignore
│   │       │   │   .travis.yml
│   │       │   │   CHANGELOG.md
│   │       │   │   component.json
│   │       │   │   karma.conf.js
│   │       │   │   LICENSE
│   │       │   │   Makefile
│   │       │   │   node.js
│   │       │   │   package.json
│   │       │   │   README.md
│   │       │   │
│   │       │   ├───node_modules
│   │       │   │   └───ms
│   │       │   │           index.js
│   │       │   │           license.md
│   │       │   │           package.json
│   │       │   │           readme.md
│   │       │   │
│   │       │   └───src
│   │       │           browser.js
│   │       │           debug.js
│   │       │           index.js
│   │       │           inspector-log.js
│   │       │           node.js
│   │       │
│   │       └───ms
│   │               index.js
│   │               license.md
│   │               package.json
│   │               readme.md
│   │
│   ├───seq-queue
│   │   │   .jshintrc
│   │   │   .npmignore
│   │   │   AUTHORS
│   │   │   index.js
│   │   │   LICENSE
│   │   │   Makefile
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───lib
│   │   │       .npmignore
│   │   │       seq-queue.js
│   │   │
│   │   └───test
│   │           seq-queue-test.js
│   │
│   ├───serve-static
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───set-blocking
│   │       CHANGELOG.md
│   │       index.js
│   │       LICENSE.txt
│   │       package.json
│   │       README.md
│   │
│   ├───set-function-length
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   env.d.ts
│   │   │   env.js
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   tsconfig.json
│   │   │
│   │   └───.github
│   │           FUNDING.yml
│   │
│   ├───setprototypeof
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───side-channel
│   │   │   .editorconfig
│   │   │   .eslintrc
│   │   │   .nycrc
│   │   │   CHANGELOG.md
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   tsconfig.json
│   │   │
│   │   ├───.github
│   │   │       FUNDING.yml
│   │   │
│   │   └───test
│   │           index.js
│   │
│   ├───sift
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   MIT-LICENSE.txt
│   │   │   package.json
│   │   │   README.md
│   │   │   sift.csp.min.js
│   │   │   sift.csp.min.js.map
│   │   │   sift.min.js
│   │   │   sift.min.js.map
│   │   │
│   │   ├───es
│   │   │       index.js
│   │   │       index.js.map
│   │   │
│   │   ├───es5m
│   │   │       index.js
│   │   │       index.js.map
│   │   │
│   │   ├───lib
│   │   │       core.d.ts
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.js.map
│   │   │       operations.d.ts
│   │   │       utils.d.ts
│   │   │
│   │   └───src
│   │           core.ts
│   │           index.ts
│   │           operations.ts
│   │           utils.ts
│   │
│   ├───signal-exit
│   │       index.js
│   │       LICENSE.txt
│   │       package.json
│   │       README.md
│   │       signals.js
│   │
│   ├───smart-buffer
│   │   │   .prettierrc.yaml
│   │   │   .travis.yml
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───build
│   │   │       smartbuffer.js
│   │   │       smartbuffer.js.map
│   │   │       utils.js
│   │   │       utils.js.map
│   │   │
│   │   ├───docs
│   │   │       CHANGELOG.md
│   │   │       README_v3.md
│   │   │       ROADMAP.md
│   │   │
│   │   └───typings
│   │           smartbuffer.d.ts
│   │           utils.d.ts
│   │
│   ├───socks
│   │   │   .eslintrc.cjs
│   │   │   .prettierrc.yaml
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───build
│   │   │   │   index.js
│   │   │   │   index.js.map
│   │   │   │
│   │   │   ├───client
│   │   │   │       socksclient.js
│   │   │   │       socksclient.js.map
│   │   │   │
│   │   │   └───common
│   │   │           constants.js
│   │   │           constants.js.map
│   │   │           helpers.js
│   │   │           helpers.js.map
│   │   │           receivebuffer.js
│   │   │           receivebuffer.js.map
│   │   │           util.js
│   │   │           util.js.map
│   │   │
│   │   ├───docs
│   │   │   │   index.md
│   │   │   │   migratingFromV1.md
│   │   │   │
│   │   │   └───examples
│   │   │       │   index.md
│   │   │       │
│   │   │       ├───javascript
│   │   │       │       associateExample.md
│   │   │       │       bindExample.md
│   │   │       │       connectExample.md
│   │   │       │
│   │   │       └───typescript
│   │   │               associateExample.md
│   │   │               bindExample.md
│   │   │               connectExample.md
│   │   │
│   │   └───typings
│   │       │   index.d.ts
│   │       │
│   │       ├───client
│   │       │       socksclient.d.ts
│   │       │
│   │       └───common
│   │               constants.d.ts
│   │               helpers.d.ts
│   │               receivebuffer.d.ts
│   │               util.d.ts
│   │
│   ├───sparse-bitfield
│   │       .npmignore
│   │       .travis.yml
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       test.js
│   │
│   ├───sprintf-js
│   │   │   CONTRIBUTORS.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───dist
│   │   │       .gitattributes
│   │   │       angular-sprintf.min.js
│   │   │       angular-sprintf.min.js.map
│   │   │       sprintf.min.js
│   │   │       sprintf.min.js.map
│   │   │
│   │   └───src
│   │           angular-sprintf.js
│   │           sprintf.js
│   │
│   ├───sqlstring
│   │   │   HISTORY.md
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           SqlString.js
│   │
│   ├───statuses
│   │       codes.json
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───streamsearch
│   │   │   .eslintrc.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───.github
│   │   │   └───workflows
│   │   │           ci.yml
│   │   │           lint.yml
│   │   │
│   │   ├───lib
│   │   │       sbmh.js
│   │   │
│   │   └───test
│   │           test.js
│   │
│   ├───string-width
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───string_decoder
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           string_decoder.js
│   │
│   ├───strip-ansi
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───supports-color
│   │       browser.js
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───tar
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           create.js
│   │           extract.js
│   │           get-write-flag.js
│   │           header.js
│   │           high-level-opt.js
│   │           large-numbers.js
│   │           list.js
│   │           mkdir.js
│   │           mode-fix.js
│   │           normalize-unicode.js
│   │           normalize-windows-path.js
│   │           pack.js
│   │           parse.js
│   │           path-reservations.js
│   │           pax.js
│   │           read-entry.js
│   │           replace.js
│   │           strip-absolute-path.js
│   │           strip-trailing-slashes.js
│   │           types.js
│   │           unpack.js
│   │           update.js
│   │           warn-mixin.js
│   │           winchars.js
│   │           write-entry.js
│   │
│   ├───toidentifier
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───tr46
│   │   │   index.js
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           mappingTable.json
│   │           regexes.js
│   │           statusMapping.js
│   │
│   ├───type-is
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───typedarray
│   │   │   .travis.yml
│   │   │   index.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   readme.markdown
│   │   │
│   │   ├───example
│   │   │       tarray.js
│   │   │
│   │   └───test
│   │       │   tarray.js
│   │       │
│   │       └───server
│   │               undef_globals.js
│   │
│   ├───uid-safe
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───unpipe
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───url-template
│   │   │   .gitmodules
│   │   │   .npmignore
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───lib
│   │   │       url-template.js
│   │   │
│   │   ├───test
│   │   │       index.html
│   │   │       uritemplate-test.js
│   │   │       url-template-test.js
│   │   │
│   │   └───uritemplate-test
│   │           extended-tests.json
│   │           json2xml.xslt
│   │           negative-tests.json
│   │           README.md
│   │           spec-examples-by-section.json
│   │           spec-examples.json
│   │           transform-json-tests.xslt
│   │
│   ├───util-deprecate
│   │       browser.js
│   │       History.md
│   │       LICENSE
│   │       node.js
│   │       package.json
│   │       README.md
│   │
│   ├───utils-merge
│   │       .npmignore
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───uuid
│   │   │   CHANGELOG.md
│   │   │   CONTRIBUTING.md
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │   wrapper.mjs
│   │   │
│   │   └───dist
│   │       │   index.js
│   │       │   md5-browser.js
│   │       │   md5.js
│   │       │   native-browser.js
│   │       │   native.js
│   │       │   nil.js
│   │       │   parse.js
│   │       │   regex.js
│   │       │   rng-browser.js
│   │       │   rng.js
│   │       │   sha1-browser.js
│   │       │   sha1.js
│   │       │   stringify.js
│   │       │   uuid-bin.js
│   │       │   v1.js
│   │       │   v3.js
│   │       │   v35.js
│   │       │   v4.js
│   │       │   v5.js
│   │       │   validate.js
│   │       │   version.js
│   │       │
│   │       ├───bin
│   │       │       uuid
│   │       │
│   │       ├───commonjs-browser
│   │       │       index.js
│   │       │       md5.js
│   │       │       native.js
│   │       │       nil.js
│   │       │       parse.js
│   │       │       regex.js
│   │       │       rng.js
│   │       │       sha1.js
│   │       │       stringify.js
│   │       │       v1.js
│   │       │       v3.js
│   │       │       v35.js
│   │       │       v4.js
│   │       │       v5.js
│   │       │       validate.js
│   │       │       version.js
│   │       │
│   │       ├───esm-browser
│   │       │       index.js
│   │       │       md5.js
│   │       │       native.js
│   │       │       nil.js
│   │       │       parse.js
│   │       │       regex.js
│   │       │       rng.js
│   │       │       sha1.js
│   │       │       stringify.js
│   │       │       v1.js
│   │       │       v3.js
│   │       │       v35.js
│   │       │       v4.js
│   │       │       v5.js
│   │       │       validate.js
│   │       │       version.js
│   │       │
│   │       └───esm-node
│   │               index.js
│   │               md5.js
│   │               native.js
│   │               nil.js
│   │               parse.js
│   │               regex.js
│   │               rng.js
│   │               sha1.js
│   │               stringify.js
│   │               v1.js
│   │               v3.js
│   │               v35.js
│   │               v4.js
│   │               v5.js
│   │               validate.js
│   │               version.js
│   │
│   ├───vary
│   │       HISTORY.md
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───webidl-conversions
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           index.js
│   │
│   ├───whatwg-url
│   │   │   index.js
│   │   │   LICENSE.txt
│   │   │   package.json
│   │   │   README.md
│   │   │   webidl2js-wrapper.js
│   │   │
│   │   └───lib
│   │           encoding.js
│   │           Function.js
│   │           infra.js
│   │           percent-encoding.js
│   │           URL-impl.js
│   │           url-state-machine.js
│   │           URL.js
│   │           urlencoded.js
│   │           URLSearchParams-impl.js
│   │           URLSearchParams.js
│   │           utils.js
│   │           VoidFunction.js
│   │
│   ├───wide-align
│   │       align.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───wrappy
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       wrappy.js
│   │
│   ├───xtend
│   │       .jshintrc
│   │       immutable.js
│   │       LICENSE
│   │       mutable.js
│   │       package.json
│   │       README.md
│   │       test.js
│   │
│   └───yallist
│           iterator.js
│           LICENSE
│           package.json
│           README.md
│           yallist.js
│
├───public
│   ├───css
│   │       styles.css
│   │
│   ├───imgs
│   │       bookmark.png
│   │       cloud.png
│   │       Community.png
│   │       favicon.ico
│   │       Forecasts.png
│   │       Island.png
│   │       L1.png
│   │       L2.png
│   │       L3.png
│   │       logo.png
│   │       placeholder.jpg
│   │       placeholderUser.png
│   │       rain.gif
│   │       snow.gif
│   │       Sun.gif
│   │       Waves.gif
│   │       Weather.png
│   │
│   └───js
│           home.js
│           profile.js
│
├───routes
│       router.js
│
├───uploads
│       image-1715783329240
│       image-1715903964140
│       image-1715903965980
│       image-1715904024778
│       image-1715917463312
│       image-1715917475434
│       image-1715917545883
│       image-1715921309055
│
└───views
    │   404.ejs
    │   about_us.ejs
    │   createUser.ejs
    │   destination.ejs
    │   destinationFail.ejs
    │   editReview.ejs
    │   errorMessage.ejs
    │   home.ejs
    │   index.ejs
    │   login.ejs
    │   newPassword.ejs
    │   newPasswordSuccess.ejs
    │   post_review.ejs
    │   profile.ejs
    │   resetLinkSent.ejs
    │   resetPassword.ejs
    │   review.ejs
    │   setting.ejs
    │   signOut.ejs
    │   submitUser.ejs
    │   weather.ejs
    │   weatherResults.ejs
    │
    └───templates
            footer.ejs
            header.ejs
            homenav.ejs
            landingpage.ejs
            locations.ejs
            template.ejs

## 5. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* git clone https://github.com/mitt-argots-0x/2800-202410-BBY12.git
* npm i
* create .env file and put your information :
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_CLOUD_KEY=
CLOUDINARY_CLOUD_SECRET=

WEATHER_API_KEY=
UNSPLASH_ACCESS_KEY=

MONGODB_HOST=
MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_DATABASE=

MONGODB_SESSION_SECRET=
NODE_SESSION_SECRET=

EMAIL=
APP_PASSWORD=

# 6.How to use the product (Features)
* create an account with your email and a chosen password and username
* after relocating to the home page you can either:
a. browse through the most popular destinations in the home page
b. search based on your preffered weather conditions in the search bar
* to get more information about a destination click on the location image and you will be relocated to a more detailed page
* in the detailed page you can click on the review button to see people's review about that location and also you can share your experience.( after posting your review you can edit it or delete it)
* if you want to save a location you just have to click on the bookmark button and the location will be appeared in your profile page under the "saved location" button(you can also unsave a location by clicking on the bookmark button again)
* in the profile page you can set a profile image
* in the setting you can change your personal information such as your password or your username.


# 7.Include Credits, References, and Licenses

# 8.How did you use AI? Tell us exactly what AI services and products you used and how you used them.
a. yes for temporary art assets and also debugging

b.DId you use AI to create data sets or clean data sets? If so, how? no we didn't

c.Does your app use AI? If so, how? no, it doesn't

d. Did you encounter any limitations? What were they, and how did you overcome them?no, we didn't.

# 9.Contact Information 
Saba: saba.karbakhsh@gmail.com
Don: doh15@my.bcit.ca
Radman: rmohammadi2@my.bcit.ca
Maria: mespinola@my.bcit.ca
KC: khalelclarklopez@gmail.com
