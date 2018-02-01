load('@org_dropbox_rules_node//node:defs.bzl', 'node_library')

java_library(
    name = "main",
    srcs = glob(["src/**/*.java"]),
    resources = glob(["resources/**"]),
    runtime_deps = [
        "//client:webpack_build",
    ],
    visibility = ["//visibility:public"],
)

java_binary(
    name = "binary",
    runtime_deps = [":main"],
    main_class = "com.build.app.Main"
)
