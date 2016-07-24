'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
    async __before() {
        await this.getConfig();
        let limit = this.config('pagesize');
        //设置CSRF值
        let csrf=await this.session("__CSRF__");
        this.assign("csrf",csrf);

        //获取tags
        let tagList=await this.model("tags").where({appear:1}).select();
        this.assign('tagList',tagList);

        //获取图文推荐列表
        let picrecomList=await this.model("article").where({topicrecom:1,ispublished:1}).order("createtime DESC").limit(limit).select();
        this.assign("picrecomList",picrecomList);

        //获取站长推荐列表
        let torecomList=await this.model("article").where({torecom:1,ispublished:1}).order("createtime DESC").limit(limit).select();
        this.assign("torecomList",torecomList);

        //获取点击排行列表
        let popularList=await this.model("article").where({ispublished:1}).order("view DESC").limit(limit).select();
        this.assign("popularList",popularList);

         //获取最新文章列表
        let newestList=await this.model("article").where({ispublished:1}).order("createtime DESC").limit(limit).select();
        this.assign("newestList",newestList);

        //获取导航链接
        let navList=await this.model('menu').select();
        this.assign("navList",navList);

    }
    async getConfig() {
        let sysdata=await this.model('system').where({id:1}).find();
        this.assign('_web',sysdata);
    }
}
