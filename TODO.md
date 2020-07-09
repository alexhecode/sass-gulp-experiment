### TODOs
| Filename | line # | TODO
|:------|:------:|:------
| gulpfile.js | 108 | image and svg optimization
| node_modules/agent-base/index.js | 168 | reuse sockets
| node_modules/color-support/index.js | 100 | add more term programs
| node_modules/fancy-log/index.js | 12 | If this is too broad, we can reduce it to an APPVEYOR env check
| node_modules/fs-mkdirp-stream/mkdirp.js | 49 | Is it proper to mask like this?
| node_modules/glob/common.js | 106 | is an absolute `cwd` supposed to be resolved against `root`?
| node_modules/glob-watcher/index.js | 90 | I'm not sure how to test this
| node_modules/globby/index.js | 118 | Remove this for the next major release
| node_modules/jsbn/index.js | 1289 | allow reseeding after first request
| node_modules/liftoff/index.js | 85 | break this out into lib/
| node_modules/mime-types/index.js | 54 | use media-typer
| node_modules/mime-types/index.js | 78 | should this even be in this module?
| node_modules/mime-types/index.js | 91 | use content-type or other module
| node_modules/mime-types/index.js | 112 | use media-typer
| node_modules/minimatch/minimatch.js | 462 | It would probably be faster to determine this
| node_modules/normalize-url/index.js | 2 | Use the `URL` global when targeting Node.js 10
| node_modules/normalize-url/index.js | 67 | Use the following instead when targeting Node.js 10
| node_modules/p-try/index.js | 8 | remove this in the next major version
| node_modules/pac-resolver/dateRange.js | 75 | implement me!
| node_modules/proxy-from-env/test.js | 105 | Should we be stricter and perform validation?
| node_modules/psl/index.js | 151 | Simply remove trailing dot?
| node_modules/q/q.js | 745 | "===" should be Object.is or equiv
| node_modules/q/q.js | 1786 | attempt to recycle the rejection with "this".
| node_modules/resolve-options/index.js | 8 | should the config object be validated?
| node_modules/spdx-expression-parse/parse.js | 46 | Actually, everything is concatenated into one string
| node_modules/superagent/superagent.js | 801 | moar!
| node_modules/superagent/superagent.js | 802 | make this a util
| node_modules/tweetnacl/nacl-fast.js | 2160 | Completely remove this in v0.15.
| node_modules/tweetnacl/nacl.js | 947 | Completely remove this in v0.15.
| node_modules/vinyl/index.js | 229 | Should this be moved to vinyl-fs?
| node_modules/vinyl/index.js | 325 | should this set the mode to symbolic if set?
| node_modules/vinyl-sourcemap/index.js | 30 | handle this?
| node_modules/yargs/yargs.js | 250 | actually deprecate self.defaults.
| node_modules/yargs/yargs.js | 347 | deprecate self.demand in favor of
| node_modules/ajv/dist/ajv.bundle.js | 172 | Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
| node_modules/ajv/dist/ajv.bundle.js | 6256 | normalize IPv6 address as per RFC 5952
| node_modules/ast-types/def/core.js | 55 | Figure out how to silently coerce Expressions to
| node_modules/ast-types/def/core.js | 170 | Not in the Mozilla Parser API, but used by Esprima.
| node_modules/ast-types/def/core.js | 231 | Report this nonsense.
| node_modules/ast-types/def/es6.js | 19 | This could be represented as a RestElement in .params.
| node_modules/ast-types/lib/scope.js | 208 | Broaden this to accept any pattern.
| node_modules/ast-types/lib/types.js | 551 | Warn if fields are overridden with incompatible types.
| node_modules/coa/lib/completion.js | 144 | don't complete on opts in case of unknown arg after commands
| node_modules/coa/lib/completion.js | 145 | complete only on opts with arr() or not already used
| node_modules/coa/lib/completion.js | 146 | complete only on full opts?
| node_modules/coa/lib/completion.js | 163 | complete on args values (context aware, custom completion?)
| node_modules/coa/lib/completion.js | 168 | context aware custom completion on cmds, opts and args
| node_modules/css-select/lib/compile.js | 57 | better check if context is document
| node_modules/css-select/lib/pseudos.js | 140 | determine the actual root element
| node_modules/css-select/lib/pseudos.js | 300 | :any-link once the name is finalized (as an alias of :link)
| node_modules/css-select/lib/sort.js | 64 | better handling of complex selectors
| node_modules/css-tree/dist/csstree.js | 750 | we doesn't do a preprocessing, so check a code point for U+000D CARRIAGE RETURN and U+000C FORM FEED
| node_modules/css-tree/dist/csstree.js | 1092 | 
| node_modules/css-tree/dist/csstree.js | 1117 | 
| node_modules/css-tree/dist/csstree.js | 1244 | -> skipUntilBalanced
| node_modules/css-tree/dist/csstree.js | 2847 | implement
| node_modules/css-tree/dist/csstree.js | 2914 | ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
| node_modules/css-tree/dist/csstree.js | 9552 | should consume block content as Raw?
| node_modules/css-tree/dist/csstree.js | 10211 | not sure we should support this hack
| node_modules/css-tree/dist/csstree.js | 10424 | check value is an ident
| node_modules/css-tree/dist/csstree.js | 11673 | produce a node with Delim node type
| node_modules/css-what/lib/stringify.js | 65 | 
| node_modules/csso/dist/csso.js | 750 | we doesn't do a preprocessing, so check a code point for U+000D CARRIAGE RETURN and U+000C FORM FEED
| node_modules/csso/dist/csso.js | 1092 | 
| node_modules/csso/dist/csso.js | 1117 | 
| node_modules/csso/dist/csso.js | 1244 | -> skipUntilBalanced
| node_modules/csso/dist/csso.js | 2847 | implement
| node_modules/csso/dist/csso.js | 2914 | ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
| node_modules/csso/dist/csso.js | 9616 | should consume block content as Raw?
| node_modules/csso/dist/csso.js | 10275 | not sure we should support this hack
| node_modules/csso/dist/csso.js | 10488 | check value is an ident
| node_modules/csso/dist/csso.js | 11738 | produce a node with Delim node type
| node_modules/csso/dist/csso.js | 12396 | remove toLowerCase when pseudo selectors will be normalized
| node_modules/csso/dist/csso.js | 12432 | remove toLowerCase when type selectors will be normalized
| node_modules/csso/dist/csso.js | 12984 | make better quote type selection
| node_modules/csso/dist/csso.js | 13277 | remove those tokens
| node_modules/csso/dist/csso.js | 13284 | remove those tokens
| node_modules/csso/dist/csso.js | 13294 | remove those tokens
| node_modules/csso/dist/csso.js | 13302 | remove those tokens
| node_modules/csso/dist/csso.js | 13591 | support for :nth-*(.. of <SelectorList>), :matches(), :has()
| node_modules/csso/dist/csso.js | 13738 | need to be checked
| node_modules/csso/dist/csso.js | 13842 | use it when we can refer to several points in source
| node_modules/csso/dist/csso.js | 14052 | remove initial merge
| node_modules/csso/dist/csso.js | 14338 | use it when we can refer to several points in source
| node_modules/csso/dist/csso.js | 14760 | use it when we can refer to several points in source
| node_modules/csso/dist/csso.js | 14768 | use it when we can refer to several points in source
| node_modules/csso/dist/csso.js | 14780 | use it when we can refer to several points in source
| node_modules/csso/dist/csso.js | 15013 | need to be checked
| node_modules/csso/dist/csso.js | 15075 | disallow up merge only if any property interception only (i.e. diff.ne2overrided.length > 0);
| node_modules/debug/src/browser.js | 36 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/ecc-jsbn/lib/ec.js | 15 | if(x.compareTo(q) >= 0) error
| node_modules/ecc-jsbn/lib/ec.js | 78 | compression flag
| node_modules/ecc-jsbn/lib/ec.js | 162 | optimized handling of constants
| node_modules/ecc-jsbn/lib/ec.js | 189 | modularize the multiplication algorithm
| node_modules/ecc-jsbn/lib/sec.js | 150 | make this into a proper hashtable
| node_modules/entities/lib/decode.js | 40 | consider creating a merged map
| node_modules/es-abstract/2017/ArraySpeciesCreate.js | 26 | figure out how to make a cross-realm normal Array, a same-realm Array
| node_modules/es-abstract/2016/ArraySpeciesCreate.js | 26 | figure out how to make a cross-realm normal Array, a same-realm Array
| node_modules/es-abstract/2015/ArraySpeciesCreate.js | 26 | figure out how to make a cross-realm normal Array, a same-realm Array
| node_modules/es-abstract/2018/ArraySpeciesCreate.js | 26 | figure out how to make a cross-realm normal Array, a same-realm Array
| node_modules/es-abstract/2019/ArraySpeciesCreate.js | 26 | figure out how to make a cross-realm normal Array, a same-realm Array
| node_modules/get-uri/test/file.js | 18 | move this out into a more full-featured module some day…
| node_modules/form-data/lib/form_data.js | 121 | Looks like there is bug in Node fs.createReadStream
| node_modules/iconv-lite/encodings/dbcs-codec.js | 348 | What if we have no default? (resCode == undefined)
| node_modules/iconv-lite/encodings/dbcs-codec.js | 472 | Callback with seq.
| node_modules/iconv-lite/encodings/dbcs-data.js | 64 | KDDI extension to Shift_JIS
| node_modules/iconv-lite/encodings/dbcs-data.js | 65 | IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
| node_modules/iconv-lite/encodings/dbcs-data.js | 66 | IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
| node_modules/iconv-lite/lib/extend-node.js | 169 | Set _charsWritten.
| node_modules/js-yaml/dist/js-yaml.js | 1621 | rework to inline fn with no type cast?
| node_modules/js-yaml/dist/js-yaml.js | 3002 | Add tag format check.
| node_modules/mime/src/test.js | 46 | Uncomment once #157 is resolved
| node_modules/node-sass/lib/index.js | 464 | remove for 4.0
| node_modules/node-sass/test/types.js | 242 | I'm not sure this object works well, it likely needs to be fleshed out more...
| node_modules/node-sass/test/types.js | 249 | I'm not sure this object works well, it likely needs to be fleshed out more...
| node_modules/node-sass/test/types.js | 294 | TypeError
| node_modules/node-sass/test/types.js | 302 | TypeError
| node_modules/node-sass/test/types.js | 401 | more complex set/get value scenarios
| node_modules/node-sass/test/types.js | 432 | TypeError
| node_modules/node-sass/test/types.js | 510 | TypeError
| node_modules/node-sass/test/types.js | 518 | TypeError
| node_modules/node-sass/test/types.js | 610 | TypeError
| node_modules/psl/dist/psl.js | 8987 | Simply remove trailing dot?
| node_modules/readable-stream/lib/_stream_writable.js | 289 | defer error events consistently everywhere, not just the cb
| node_modules/request/lib/auth.js | 51 | More complete implementation of RFC 2617.
| node_modules/superagent/lib/response-base.js | 65 | moar!
| node_modules/superagent/lib/response-base.js | 66 | make this a util
| node_modules/svgo/plugins/_collections.js | 502 | in - 'If no value is provided and this is the first filter primitive,
| node_modules/svgo/plugins/_collections.js | 596 | divisor - 'The default value is the sum of all values in kernelMatrix,
| node_modules/svgo/plugins/_collections.js | 600 | targetX - 'By default, the convolution matrix is centered in X over each
| node_modules/svgo/plugins/_collections.js | 605 | kernelUnitLength - 'The first number is the <dx> value. The second number
| node_modules/svgo/plugins/_collections.js | 643 | 'exactly one light source element, in any order'
| node_modules/svgo/plugins/_collections.js | 902 | exactly one 'light source element'
| node_modules/svgo/plugins/_collections.js | 1097 | "at most one 'font-face-src' element"
| node_modules/svgo/plugins/_collections.js | 1101 | empty content
| node_modules/svgo/plugins/convertPathData.js | 78 | get rid of functions returns
| node_modules/svgo/plugins/convertShapeToPath.js | 47 | Calculate sizes from % and non-px units if possible.
| node_modules/tough-cookie/lib/cookie.js | 1200 | persist lastAccessed
| node_modules/vinyl-fs/lib/file-operations.js | 286 | What happens when we call unlink with windows junctions?
| node_modules/vinyl-sourcemap/lib/helpers.js | 23 | should this log a debug?
| node_modules/yargs/lib/argsert.js | 7 | should this eventually raise an exception.
| node_modules/yargs/lib/command.js | 288 | move positional arg logic to yargs-parser and remove this duplication
| node_modules/yargs/lib/validation.js | 173 | case-insensitive configurability
| node_modules/xregexp/tests/tests.js | 227 | Add tests
| node_modules/xregexp/tests/tests.js | 232 | Add tests
| node_modules/xregexp/tests/tests.js | 289 | Add tests (above tests cover scope functionality only)
| node_modules/xregexp/tests/tests.js | 294 | Add tests
| node_modules/xregexp/tests/tests.js | 299 | Add tests
| node_modules/xregexp/tests/tests.js | 304 | Add tests
| node_modules/xregexp/tests/tests.js | 312 | Add tests
| node_modules/xregexp/tests/tests.js | 550 | Add tests (basic functionality tests, not the long list from
| node_modules/xregexp/tests/tests.js | 610 | Add tests
| node_modules/xregexp/tests/tests.js | 624 | Add tests
| node_modules/xregexp/tests/tests.js | 632 | Add tests
| node_modules/xregexp/tests/tests.js | 637 | Add tests
| node_modules/xregexp/tests/tests.js | 643 | Add tests
| node_modules/xregexp/tests/tests.js | 652 | Add tests
| node_modules/xregexp/tests/tests.js | 657 | Add tests
| node_modules/xregexp/tests/tests.js | 667 | Add tests
| node_modules/xregexp/tests/tests.js | 676 | Add tests
| node_modules/xregexp/tests/tests.js | 681 | Add tests
| node_modules/xregexp/tests/tests.js | 756 | Add tests
| node_modules/xregexp/tests/tests.js | 761 | Add tests
| node_modules/xregexp/tests/tests.js | 771 | Add tests
| node_modules/xregexp/tests/tests.js | 782 | Add tests
| node_modules/xregexp/tests/tests.js | 787 | Add tests
| node_modules/xregexp/tests/tests.js | 792 | Add tests
| node_modules/xregexp/tests/tests.js | 797 | Add tests
| node_modules/xregexp/tests/tests.js | 802 | Add tests
| node_modules/xregexp/tests/tests.js | 808 | Add tests
| node_modules/xregexp/tests/tests.js | 834 | Add tests
| node_modules/xregexp/tests/tests.js | 856 | Add tests
| node_modules/xregexp/tests/tests.js | 862 | Add tests
| node_modules/xregexp/tests/tests.js | 868 | Add tests
| node_modules/xregexp/tests/tests.js | 874 | Add tests
| node_modules/ajv/lib/compile/formats.js | 15 | Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
| node_modules/argparse/lib/help/formatter.js | 10 | add [additonal formatters][1]
| node_modules/css-tree/lib/common/TokenStream.js | 77 | -> skipUntilBalanced
| node_modules/css-tree/lib/lexer/generic.js | 150 | implement
| node_modules/css-tree/lib/lexer/generic.js | 217 | ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
| node_modules/css-tree/lib/tokenizer/char-code-definitions.js | 74 | we doesn't do a preprocessing, so check a code point for U+000D CARRIAGE RETURN and U+000C FORM FEED
| node_modules/css-tree/lib/tokenizer/utils.js | 168 | 
| node_modules/css-tree/lib/tokenizer/utils.js | 193 | 
| node_modules/csso/lib/clean/Rule.js | 14 | remove toLowerCase when pseudo selectors will be normalized
| node_modules/csso/lib/clean/Rule.js | 50 | remove toLowerCase when type selectors will be normalized
| node_modules/csso/lib/replace/Url.js | 30 | make better quote type selection
| node_modules/csso/lib/replace/color.js | 289 | remove those tokens
| node_modules/csso/lib/replace/color.js | 296 | remove those tokens
| node_modules/csso/lib/replace/color.js | 306 | remove those tokens
| node_modules/csso/lib/replace/color.js | 314 | remove those tokens
| node_modules/csso/lib/restructure/1-mergeAtrule.js | 91 | use it when we can refer to several points in source
| node_modules/csso/lib/restructure/2-initialMergeRuleset.js | 41 | remove initial merge
| node_modules/csso/lib/restructure/4-restructShorthand.js | 236 | use it when we can refer to several points in source
| node_modules/csso/lib/restructure/6-restructBlock.js | 229 | use it when we can refer to several points in source
| node_modules/csso/lib/restructure/6-restructBlock.js | 237 | use it when we can refer to several points in source
| node_modules/csso/lib/restructure/6-restructBlock.js | 249 | use it when we can refer to several points in source
| node_modules/csso/lib/restructure/8-restructRuleset.js | 94 | need to be checked
| node_modules/csso/lib/restructure/8-restructRuleset.js | 156 | disallow up merge only if any property interception only (i.e. diff.ne2overrided.length > 0);
| node_modules/ftp/node_modules/string_decoder/index.js | 43 | Handling all encodings inside a single object makes it very difficult
| node_modules/ftp/node_modules/string_decoder/index.js | 45 | There should be a utf8-strict encoding that rejects invalid UTF-8 code
| node_modules/js-yaml/lib/js-yaml/loader.js | 621 | rework to inline fn with no type cast?
| node_modules/js-yaml/lib/js-yaml/type.js | 45 | Add tag format check.
| node_modules/relateurl/lib/parse/urlstring.js | 34 | : unescape(encodeURIComponent(s)) ? ... http://ecmanaut.blogspot.ca/2006/07/encoding-decoding-utf8-in-javascript.html
| node_modules/sass-graph/node_modules/camelcase/index.js | 75 | Remove this for the next major release
| node_modules/sass-graph/node_modules/yargs/yargs.js | 257 | actually deprecate self.defaults.
| node_modules/sass-graph/node_modules/yargs/yargs.js | 312 | @bcoe in future major versions move more objects towards
| node_modules/sass-graph/node_modules/yargs/yargs.js | 377 | deprecate self.demand in favor of
| node_modules/sass-graph/node_modules/yargs-parser/index.js | 662 | @bcoe in the next major version of yargs, switch to
| node_modules/sass-graph/node_modules/yargs-parser/index.js | 685 | @bcoe in the next major version of yargs, switch to
| node_modules/sass-graph/node_modules/yargs-parser/index.js | 909 | @bcoe in the next major version of yargs, switch to
| node_modules/superagent/lib/node/index.js | 947 | unless buffering emit earlier to stream
| node_modules/superagent/lib/node/index.js | 1009 | Add chunked encoding when no length (if err)
| node_modules/uri-js/dist/es5/uri.all.js | 1013 | normalize IPv6 address as per RFC 5952
| node_modules/uri-js/dist/esnext/uri.js | 327 | normalize IPv6 address as per RFC 5952
| node_modules/vinyl-fs/lib/dest/prepare.js | 19 | Remove this after people upgrade vinyl/transition from gulp-util
| node_modules/vinyl-fs/lib/symlink/prepare.js | 19 | Remove this after people upgrade vinyl/transition from gulp-util
| node_modules/clean-css/lib/optimizer/level-2/reorderable.js | 1 | it'd be great to merge it with the other canReorder functionality
| node_modules/css-tree/lib/syntax/node/Atrule.js | 76 | should consume block content as Raw?
| node_modules/css-tree/lib/syntax/node/Declaration.js | 120 | not sure we should support this hack
| node_modules/css-tree/lib/syntax/node/IdSelector.js | 14 | check value is an ident
| node_modules/css-tree/lib/syntax/scope/default.js | 79 | produce a node with Delim node type
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 750 | we doesn't do a preprocessing, so check a code point for U+000D CARRIAGE RETURN and U+000C FORM FEED
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 1092 | 
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 1117 | 
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 1244 | -> skipUntilBalanced
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 2847 | implement
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 2914 | ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 9616 | should consume block content as Raw?
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 10275 | not sure we should support this hack
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 10488 | check value is an ident
| node_modules/csso/node_modules/css-tree/dist/csstree.js | 11738 | produce a node with Delim node type
| node_modules/debug-fabulous/node_modules/debug/dist/debug.js | 725 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/debug-fabulous/node_modules/debug/src/browser.js | 26 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/csso/lib/restructure/prepare/index.js | 30 | need to be checked
| node_modules/csso/lib/restructure/prepare/specificity.js | 35 | support for :nth-*(.. of <SelectorList>), :matches(), :has()
| node_modules/ftp/node_modules/readable-stream/lib/_stream_writable.js | 162 | defer error events consistently everywhere, not just the cb
| node_modules/ftp/node_modules/readable-stream/lib/_stream_writable.js | 365 | @isaacs clean this up
| node_modules/https-proxy-agent/node_modules/debug/dist/debug.js | 725 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/https-proxy-agent/node_modules/debug/src/browser.js | 26 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/http-proxy-agent/node_modules/debug/src/browser.js | 41 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/leasot/dist/lib/utils/comments.js | 3 | 
| node_modules/pac-proxy-agent/node_modules/debug/dist/debug.js | 725 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/pac-proxy-agent/node_modules/debug/src/browser.js | 26 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/proxy-agent/node_modules/debug/dist/debug.js | 725 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/proxy-agent/node_modules/debug/src/browser.js | 26 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/sass-graph/node_modules/yargs/lib/argsert.js | 10 | should this eventually raise an exception.
| node_modules/sass-graph/node_modules/yargs/lib/validation.js | 134 | case-insensitive configurability
| node_modules/superagent-proxy/node_modules/debug/src/browser.js | 26 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/superagent/node_modules/debug/src/browser.js | 26 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/superagent-proxy/node_modules/debug/dist/debug.js | 725 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/superagent/node_modules/debug/dist/debug.js | 725 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules/vinyl-fs/lib/dest/write-contents/write-stream.js | 13 | need to test this
| node_modules/vinyl-fs/lib/dest/write-contents/write-stream.js | 17 | is this the best API?
| node_modules/vinyl-fs/lib/dest/write-contents/write-stream.js | 24 | should this use a clone?
| node_modules/vinyl-fs/lib/dest/write-contents/write-stream.js | 44 | removing this before readStream because it replaces the stream
| node_modules/vinyl-fs/lib/dest/write-contents/write-stream.js | 47 | this is doing sync stuff & the callback seems unnecessary
| node_modules/vinyl-fs/lib/dest/write-contents/write-stream.js | 48 | Replace the contents stream or use a clone?
| node_modules/csso/node_modules/css-tree/lib/common/TokenStream.js | 77 | -> skipUntilBalanced
| node_modules/csso/node_modules/css-tree/lib/lexer/generic.js | 150 | implement
| node_modules/csso/node_modules/css-tree/lib/lexer/generic.js | 217 | ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
| node_modules/csso/node_modules/css-tree/lib/tokenizer/char-code-definitions.js | 74 | we doesn't do a preprocessing, so check a code point for U+000D CARRIAGE RETURN and U+000C FORM FEED
| node_modules/csso/node_modules/css-tree/lib/tokenizer/utils.js | 168 | 
| node_modules/csso/node_modules/css-tree/lib/tokenizer/utils.js | 193 | 
| node_modules/gulp/node_modules/gulp-cli/lib/shared/get-blacklist.js | 27 | Test this impl
| node_modules/gulp/node_modules/gulp-cli/lib/shared/get-blacklist.js | 34 | Test different status codes
| node_modules/csso/node_modules/css-tree/lib/syntax/node/Atrule.js | 76 | should consume block content as Raw?
| node_modules/csso/node_modules/css-tree/lib/syntax/node/Declaration.js | 120 | not sure we should support this hack
| node_modules/csso/node_modules/css-tree/lib/syntax/node/IdSelector.js | 14 | check value is an ident
| node_modules/csso/node_modules/css-tree/lib/syntax/scope/default.js | 79 | produce a node with Delim node type
| node_modules/gulp/node_modules/gulp-cli/lib/versioned/^3.7.0/log/events.js | 27 | batch these
| node_modules/gulp/node_modules/gulp-cli/lib/versioned/^4.0.0/log/events.js | 16 | batch these

### FIXMEs
| Filename | line # | FIXME
|:------|:------:|:------
| node_modules/q/q.js | 355 | Remove this function once ES6 generators are in SpiderMonkey.
| node_modules/q/q.js | 363 | Remove this helper and Q.return once ES6 generators are in
| node_modules/q/q.js | 1309 | Remove this case when SM does ES6 generators.
| node_modules/q/q.js | 1341 | Remove this interface once ES6 generators are in SpiderMonkey.
| node_modules/acorn/dist/walk.es.js | 289 | drop these node types in next major version
| node_modules/acorn/dist/walk.js | 295 | drop these node types in next major version
| node_modules/css-select/lib/compile.js | 181 | Uses an array as a pointer to the current element (side effects)
| node_modules/css-select/lib/pseudos.js | 414 | this feels hacky
| node_modules/debug/src/node.js | 200 | Should probably have an option in net.Socket to create a
| node_modules/debug/src/node.js | 208 | Hack to have stream not keep the event loop alive.
| node_modules/clean-css/lib/optimizer/level-2/restore.js | 114 | only shorthand compactor (see breakup#borderRadius) knows that border radius
| node_modules/leasot/dist/lib/utils/comments.js | 3 | 
| node_modules/leasot/dist/lib/reporters/custom.js | 16 | make the default header a configurable option