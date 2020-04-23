/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");

module.exports = (_id,_params) => {
    _325Dom.render(scenes, `
  <div attr-13="" attr-14="" class="rightPanel-container">
   <div attr-13="" class="rightPanel-background"></div> 
   <div attr-13="" class="rightPanel">
    <div attr-13="" class="handle-button" style="top: 250px; background-color: rgb(24, 144, 255);">
     <i attr-13="" class="el-icon-setting"></i>
    </div> 
    <div attr-13="" class="rightPanel-items">
     <div attr-15="" attr-14="" class="drawer-container" attr-13="">
      <div attr-15="">
       <h3 attr-15="" class="drawer-title">系统布局配置</h3> 
       <div attr-15="" class="drawer-item">
        <span attr-15="">主题色</span> 
        <div attr-15="" class="theme-picker el-color-picker el-color-picker--medium" style="float: right; height: 26px; margin: -3px 8px 0px 0px;">
         <!---->
         <div class="el-color-picker__trigger">
          <span class="el-color-picker__color"><span class="el-color-picker__color-inner" style="background-color: rgb(24, 144, 255);"></span>
           <!----></span>
          <span class="el-color-picker__icon el-icon-arrow-down"></span>
         </div>
         <div class="el-color-dropdown el-color-picker__panel theme-picker-dropdown" style="display: none;">
          <div class="el-color-dropdown__main-wrapper">
           <div class="el-color-hue-slider is-vertical" style="float: right;">
            <div class="el-color-hue-slider__bar"></div>
            <div class="el-color-hue-slider__thumb" style="left: 0px; top: 0px;"></div>
           </div>
           <div class="el-color-svpanel" style="background-color: rgb(0, 132, 255);">
            <div class="el-color-svpanel__white"></div>
            <div class="el-color-svpanel__black"></div>
            <div class="el-color-svpanel__cursor" style="top: 0px; left: 0px;">
             <div></div>
            </div>
           </div>
          </div>
          <!---->
          <div class="el-color-predefine">
           <div class="el-color-predefine__colors">
            <div class="el-color-predefine__color-selector">
             <div style="background-color: rgb(64, 158, 255);"></div>
            </div>
            <div class="el-color-predefine__color-selector selected">
             <div style="background-color: rgb(24, 144, 255);"></div>
            </div>
            <div class="el-color-predefine__color-selector">
             <div style="background-color: rgb(48, 65, 86);"></div>
            </div>
            <div class="el-color-predefine__color-selector">
             <div style="background-color: rgb(33, 33, 33);"></div>
            </div>
            <div class="el-color-predefine__color-selector">
             <div style="background-color: rgb(17, 169, 131);"></div>
            </div>
            <div class="el-color-predefine__color-selector">
             <div style="background-color: rgb(19, 194, 194);"></div>
            </div>
            <div class="el-color-predefine__color-selector">
             <div style="background-color: rgb(105, 89, 205);"></div>
            </div>
            <div class="el-color-predefine__color-selector">
             <div style="background-color: rgb(245, 34, 45);"></div>
            </div>
           </div>
          </div>
          <div class="el-color-dropdown__btns">
           <span class="el-color-dropdown__value">
            <div class="el-input el-input--mini">
             <!---->
             <input type="text" autocomplete="off" class="el-input__inner" />
             <!---->
             <!---->
             <!---->
             <!---->
            </div></span>
           <button type="button" class="el-button el-color-dropdown__link-btn el-button--text el-button--mini">
            <!---->
            <!----><span> 清空 </span></button>
           <button type="button" class="el-button el-color-dropdown__btn el-button--default el-button--mini is-plain">
            <!---->
            <!----><span> 确定 </span></button>
          </div>
         </div>
        </div>
       </div> 
       <div attr-15="" class="drawer-item">
        <span attr-15="">开启 Tags-View</span> 
        <div attr-15="" role="switch" aria-checked="true" class="el-switch drawer-switch is-checked">
         <input type="checkbox" name="" true-value="true" class="el-switch__input" />
         <!---->
         <span class="el-switch__core" style="width: 40px;"></span>
         <!---->
        </div>
       </div> 
       <div attr-15="" class="drawer-item">
        <span attr-15="">固定 Header</span> 
        <div attr-15="" role="switch" class="el-switch drawer-switch">
         <input type="checkbox" name="" true-value="true" class="el-switch__input" />
         <!---->
         <span class="el-switch__core" style="width: 40px;"></span>
         <!---->
        </div>
       </div> 
       <div attr-15="" class="drawer-item">
        <span attr-15="">侧边栏 Logo</span> 
        <div attr-15="" role="switch" class="el-switch drawer-switch">
         <input type="checkbox" name="" true-value="true" class="el-switch__input" />
         <!---->
         <span class="el-switch__core" style="width: 40px;"></span>
         <!---->
        </div>
       </div> 
       <a attr-15="" href="https://panjiachen.github.io/vue-element-admin-site/zh/job/" target="_blank" class="job-link">
        <div attr-15="" role="alert" class="el-alert el-alert--success is-light">
         <!---->
         <div class="el-alert__content">
          <span class="el-alert__title">部门目前非常缺人！有兴趣的可以点击了解详情。坐标: 字节跳动</span>
          <!---->
          <!---->
          <i class="el-alert__closebtn el-icon-close" style="display: none;"></i>
         </div>
        </div></a>
      </div>
     </div>
    </div>
   </div>
  </div>    
`);
    return scenes;
}

