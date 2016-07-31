module.exports = [

    [/^admin\/content\/article\/(\d+)$/,"admin/content/article?id=:1"],
    [/^admin\/tag\/item\/(\d+)$/,"admin/tag/item?id=:1"],
    [/^admin\/item\/item\/(\d+)$/,"admin/item/item?id=:1"],
    [/^admin\/role\/item\/(\d+)$/,"admin/role/item?id=:1"],
    [/^admin\/pertag\/item\/(\d+)$/,"admin/pertag/item?id=:1"],
    [/^admin\/role\/perlist\/(\d+)$/,"admin/role/perlist?id=:1"],
    [/^admin\/permission\/item\/(\d+)$/,"admin/permission/item?id=:1"],
    [/^admin\/menu\/item\/(\d+)$/,"admin/menu/item?id=:1"],
    [/^admin\/user\/item\/(\d+)$/,"admin/user/item?id=:1"],
    [/^category\/(\d+)$/,"home/index/category?id=:1"],
    [/^admin\/taglist\/edit\/(\d+)$/,"admin/taglist/edit?id=:1"],
    [/^page\/(\d+)$/,"home/index/page?aid=:1"],
    [/^page\/(\d+)\/(\d+)$/,"home/index/page?aid=:1&pid:1"],
    [/^preview\/(\d+)$/,"home/index/preview?aid=:1"],
    [/^preview\/(\d+)\/(\d+)$/,"home/index/preview?aid=:1&pid:1"],
    ["links", "home/index/links"],
    ["linkssave", "home/index/linkssave"],
    ["guest", "home/index/guest"],
    ["guestsave", "home/index/guestsave"],
    ["about", "home/index/about"],
    ["activity", "home/index/activity"],
    [/^activity\/page\/(\d+)$/,"home/index/activity?page=:1&pagesize=10"],
    ["mac", "home/index/mac"],
    [/^mac\/(\d+)$/,"home/index/mac?page=:1&pagesize=10"],
    ["node", "home/index/node"],
    [/^node\/(\d+)$/,"home/index/node?page=:1&pagesize=10"],
    ["news", "home/index/news"],
    [/^news\/(\d+)$/,"home/index/news?page=:1&pagesize=10"],
    ["more", "home/index/more"],
    [/^more\/(\d+)$/,"home/index/more?page=:1&pagesize=10"],
    ["others", "home/index/others"],
    [/^others\/(\d+)$/,"home/index/others?page=:1&pagesize=10"],
    ["jobs", "home/index/jobs"],
    [/^jobs\/(\d+)$/,"home/index/jobs?page=:1&pagesize=10"],
    [/^category\/(\d+)\/(\d+)$/, "home/index/category?id=:1&page=:2&pagesize=10"],
    [/^search\/(.*)$/, "home/search/index?keyword=:1"]
]
