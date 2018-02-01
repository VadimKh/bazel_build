package(default_visibility = ['//visibility:public'])

load('@org_dropbox_rules_node//node:defs.bzl', 'webpack_build', 'node_library')

webpack_build(
    name = 'webpack_build',
    srcs = glob([
        'src/*.jsx',
        '.babelrc'
    ]),
    outs = ['bundle.js'],
    config = 'webpack.config.js',
    deps = [
        '@org_dropbox_rules_node//node/dbx-bazel-utils',
        '//client/npm/babel-core',
        '//client/npm/babel-loader',
        '//client/npm/babel-preset-es2015',
        '//client/npm/babel-preset-react',
        '//client/npm/react-dom',
        '//client/npm/react',
        '//client/npm/is-number',
        '//client/npm/fbjs',
        '//client/npm/prop-types',
        '//client/npm/object-assign',
    ],
)

node_library(
    name = "main",
    deps = [
        ":webpack_build",
    ],
    visibility = ["//visibility:public"],
)
