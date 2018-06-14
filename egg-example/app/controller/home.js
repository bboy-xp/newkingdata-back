'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const data = {
      "name": "未命名表单5",
      "token": "1vylfY",
      "fields": [{
        "type": "single_line_text",
        "label": "姓名",

      }, {
        "type": "paragraph_text",
        "label": "原因",
      }, {
        "type": "single_choice",
        "choices": [{
          "type": "Choice",
          "value": "男",
        }, {
          "type": "Choice",
          "value": "女",
        }],
        "label": "性别",
      }, {
        "type": "number",
        "label": "年龄",
      }],
    }
    // const Formdata = ctx.model.Formdata;
    // const formdata = new Formdata({
    //   name: data.name,
    //   token: data.token,
    //   fields: data.fields
    // });
    // formdata.save();
    ctx.body = 'hi, egg';
  }
  async adduserdata() {
    const ctx = this.ctx;
    // const data = {
    //   "name": "未命名表单5",
    //   "token": "1vylfY",
    //   "fields": {
    //     "姓名": "施心平",
    //     "原因": "123123123123123123123123",
    //     "性别": "男",
    //     "年龄": "3",
    //   }
    // }

    // for (let i = 0; i < 100; i++) {
    //   const Userdata = ctx.model.Userdata;
    //   const userdata = new Userdata({
    //     name: data.name,
    //     token: data.token,
    //     fields: data.fields
    //   });
    //   userdata.save();
    // }
    ctx.body = 'ok';
  }
  async getTableList() {
    const ctx = this.ctx;
    const Formdata = ctx.model.Formdata;
    const tableList = await new Promise((resolve,reject) => {
      Formdata.find({},(err,docs) => {
        resolve(docs);
      })
    })
    ctx.body = tableList;
  }
}

module.exports = HomeController;
