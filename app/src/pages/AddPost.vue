<template>
  <div class="main layui-clear">
    <div class="fly-panel" pad20>
      <h2 class="page-title">发表问题</h2>
      <!-- <div class="fly-none">并无权限</div> -->
      <div class="layui-form layui-form-pane">
        <div class="layui-form-item">
          <label for="L_title" class="layui-form-label">标题</label>
          <div class="layui-input-block">
            <input type="text" id="L_title" name="title" class="layui-input" v-model="postTitle">
          </div>
        </div>
        <div class="layui-form-item layui-form-text">
          <div class="layui-input-block">
            <div class="editor">
              <div id="summernote-content"></div>
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <label for="L_title" class="layui-form-label">悬赏</label>
          <div class="layui-input-block">
            <input type="number" name="reward" class="layui-input" v-model="postReward">
          </div>
        </div>
        <div class="layui-form-item">
          <button class="layui-btn" @click="submitPost()">立即发布</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import handleMessage from '../config/errHandle.js'
  import {removeItem} from '../config/mUtils.js'
  import '../lib/layui/layui.js'
  export default {
    data () {
      return {
        postTitle: '',
        postReward: '',
      }
    },
    mounted () {
      this.initDom();
    },
    methods: {
      initDom() {
        setTimeout(function () {
          $('#summernote-content').summernote({
            lang: 'zh-CN',
            height: 210,
            minHeight: null,
            maxHeight: null,
            placeholder: '请输入内容',
            toolbar: [
              ['style', ['style', 'fontsize', 'color']],
              ['format', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
              ['paragraph', ['ol', 'ul', 'paragraph', 'height']],
              ['insert', ['table', 'hr', 'undo', 'redo', 'fullscreen']],
            ]
          })
        }, 0)
      },
      submitPost() {
        let markupStr = $('#summernote-content').summernote('code');
        if (!this.validatePost(markupStr)) {
          return
        }
        console.log(markupStr);
      },
      validatePost(content) {
        let isCorrect = true;
        console.log(this.postTitle);
        if (!this.postTitle) {
          handleMessage.call(this, '请输入标题');
          isCorrect = false
        } else if (!content) {
          handleMessage.call(this, '内容不为空');
          isCorrect = false
        }
        return isCorrect
      },
    }
  }
</script>

<style lang="less">
  @import '../lib/layui/css/layui.css';
</style>
