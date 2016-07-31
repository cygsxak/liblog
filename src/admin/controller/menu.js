'use strict';
let init={
    table:"menu",
    title:"导航管理",
    edit:"导航编辑",
    add:"导航添加",
    action:"menu"
}
import Base from './base.js';
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
      async indexAction(){
          let info={
            db:init.table,
            page:this.get("page")||1,
            pagesize:this.get("pagesize")||this.config('pagesize'),
          }

        
          // let mydata=await this.model('menu').getIndex(info);

          let itemList=await this.model(info.db).page(info.page,info.pagesize).select();
          let result = await this.model(info.db).page(info.page,info.pagesize).countSelect();
          let Page=think.adapter("template", "page");
          let page = new Page();
          let pageData=page.pagination(result,info.page);

          this.assign("itemList",itemList);
          this.assign('pageData',pageData);
          this.assign("title",init.title);
          this.assign("action",init.action);
          return this.display();
      }

     async itemAction(){

           let info={
             db:init.mydb,
             edit:init.edit,
             add:init.add,
             id:this.get('id')
           }
           let mydata=await this.model('util').getItem(info);
           this.assign("title",mydata.title);
           this.assign('item',mydata.item);
           this.assign("action",init.action);
           return this.display();
     }

     //编辑或者新增接口
     async saveAction() {
          let info={
            db:init.mydb,
            data:this.post(),
            id:this.post('id')
          }
          let mydata=await this.model('util').doSave(info);
          if(mydata.status===1) return this.success();
    }

    //删除或批量删除接口
    async delsomeAction(){
          let info={
            db:init.mydb,
            arr:this.post('delarr[]')
          }
          let rs=await this.model(info.db).where({id: ["IN", info.arr]}).delete();
          if(rs) return this.success();
    }

}
