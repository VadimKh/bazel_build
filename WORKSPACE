workspace(name = "build")

# Webpack rules
git_repository(
    name = "org_dropbox_rules_node",
    remote = "https://github.com/dropbox/rules_node.git",
    commit = "master",
)

load("@org_dropbox_rules_node//node:defs.bzl", "node_repositories", "NODEJS_BUILD_FILE_CONTENT")

node_repositories(omit_nodejs=True)

new_http_archive(
    name = "nodejs",
    url = "https://nodejs.org/dist/v6.11.1/node-v6.11.1-darwin-x64.tar.gz",
    strip_prefix = "node-v6.11.1-darwin-x64",
    sha256 = "a2b839259089ef26f20c17864ff5ce9cd1a67e841be3d129b38d288b45fe375b",
    build_file_content = NODEJS_BUILD_FILE_CONTENT,
)
