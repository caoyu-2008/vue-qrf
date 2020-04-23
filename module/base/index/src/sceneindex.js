let _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");
let httpFun = require("./include/httpFun");
module.exports = (params)=> {
    var scene = scenes.sceneindex = {};
    scene.variables = {
    };

    scene.events = {
    };

    scene.events.init = function () {
    };

    _325Dom.definedDoms({
		'comp-sceneindex':`
   <div attr-2="" class="dashboard-container">
    <div attr-3="" class="dashboard-editor-container">
     <a attr-1="" attr-3="" href="https://github.com/PanJiaChen/vue-element-admin" target="_blank" aria-label="View source on Github" class="github-corner github-corner">
      <svg attr-1="" width="80" height="80" viewbox="0 0 250 250" aria-hidden="true" style="fill: rgb(64, 201, 198); color: rgb(255, 255, 255);">
       <path attr-1="" d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path> 
       <path attr-1="" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path> 
       <path attr-1="" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
      </svg></a> 
     <div attr-16="" attr-3="" class="panel-group el-row" style="margin-left: -20px; margin-right: -20px;">
      <div attr-16="" class="card-panel-col el-col el-col-24 el-col-xs-12 el-col-sm-12 el-col-lg-6" style="padding-left: 20px; padding-right: 20px;">
       <div attr-16="" class="card-panel">
        <div attr-16="" class="card-panel-icon-wrapper icon-people">
         <svg attr-7="" attr-16="" aria-hidden="true" class="svg-icon card-panel-icon">
          <use attr-7="" href="#icon-peoples"></use>
         </svg>
        </div> 
        <div attr-16="" class="card-panel-description">
         <div attr-16="" class="card-panel-text">
           New Visits 
         </div> 
         <span attr-16="" class="card-panel-num"> 102,400 </span>
        </div>
       </div>
      </div> 
      <div attr-16="" class="card-panel-col el-col el-col-24 el-col-xs-12 el-col-sm-12 el-col-lg-6" style="padding-left: 20px; padding-right: 20px;">
       <div attr-16="" class="card-panel">
        <div attr-16="" class="card-panel-icon-wrapper icon-message">
         <svg attr-7="" attr-16="" aria-hidden="true" class="svg-icon card-panel-icon">
          <use attr-7="" href="#icon-message"></use>
         </svg>
        </div> 
        <div attr-16="" class="card-panel-description">
         <div attr-16="" class="card-panel-text">
           Messages 
         </div> 
         <span attr-16="" class="card-panel-num"> 81,212 </span>
        </div>
       </div>
      </div> 
      <div attr-16="" class="card-panel-col el-col el-col-24 el-col-xs-12 el-col-sm-12 el-col-lg-6" style="padding-left: 20px; padding-right: 20px;">
       <div attr-16="" class="card-panel">
        <div attr-16="" class="card-panel-icon-wrapper icon-money">
         <svg attr-7="" attr-16="" aria-hidden="true" class="svg-icon card-panel-icon">
          <use attr-7="" href="#icon-money"></use>
         </svg>
        </div> 
        <div attr-16="" class="card-panel-description">
         <div attr-16="" class="card-panel-text">
           Purchases 
         </div> 
         <span attr-16="" class="card-panel-num"> 9,280 </span>
        </div>
       </div>
      </div> 
      <div attr-16="" class="card-panel-col el-col el-col-24 el-col-xs-12 el-col-sm-12 el-col-lg-6" style="padding-left: 20px; padding-right: 20px;">
       <div attr-16="" class="card-panel">
        <div attr-16="" class="card-panel-icon-wrapper icon-shopping">
         <svg attr-7="" attr-16="" aria-hidden="true" class="svg-icon card-panel-icon">
          <use attr-7="" href="#icon-shopping"></use>
         </svg>
        </div> 
        <div attr-16="" class="card-panel-description">
         <div attr-16="" class="card-panel-text">
           Shoppings 
         </div> 
         <span attr-16="" class="card-panel-num"> 13,600 </span>
        </div>
       </div>
      </div>
     </div> 
     <div attr-3="" class="el-row" style="background: rgb(255, 255, 255); padding: 16px 16px 0px; margin-bottom: 32px;">
      <div attr-3="" class="chart" _echarts_instance_="ec_1586917303124" style="height: 350px; width: 100%; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
       <div style="position: relative; overflow: hidden; width: 957px; height: 350px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
        <canvas data-zr-dom-id="zr_0" width="1435" height="525" style="position: absolute; left: 0px; top: 0px; width: 957px; height: 350px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
       </div>
       <div style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(50, 50, 50, 0.5); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 5px 10px; left: 109px; top: 124px; pointer-events: none;">
        Mon
        <br />
        <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#FF005A;"></span>expected: 100
        <br />
        <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#3888fa;"></span>actual: 120
       </div>
      </div>
     </div> 
     <div attr-3="" class="el-row" style="margin-left: -16px; margin-right: -16px;">
      <div attr-3="" class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-lg-8" style="padding-left: 16px; padding-right: 16px;">
       <div attr-3="" class="chart-wrapper">
        <div attr-3="" class="chart" _echarts_instance_="ec_1586917303125" style="height: 300px; width: 100%; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
         <div style="position: relative; overflow: hidden; width: 277px; height: 300px; padding: 0px; margin: 0px; border-width: 0px;">
          <canvas data-zr-dom-id="zr_0" width="415" height="450" style="position: absolute; left: 0px; top: 0px; width: 277px; height: 300px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
         </div>
         <div></div>
        </div>
       </div>
      </div> 
      <div attr-3="" class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-lg-8" style="padding-left: 16px; padding-right: 16px;">
       <div attr-3="" class="chart-wrapper">
        <div attr-3="" class="chart" _echarts_instance_="ec_1586917303126" style="height: 300px; width: 100%; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
         <div style="position: relative; overflow: hidden; width: 277px; height: 300px; padding: 0px; margin: 0px; border-width: 0px;">
          <canvas data-zr-dom-id="zr_0" width="415" height="450" style="position: absolute; left: 0px; top: 0px; width: 277px; height: 300px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
         </div>
         <div></div>
        </div>
       </div>
      </div> 
      <div attr-3="" class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-lg-8" style="padding-left: 16px; padding-right: 16px;">
       <div attr-3="" class="chart-wrapper">
        <div attr-3="" class="chart" _echarts_instance_="ec_1586917303127" style="height: 300px; width: 100%; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
         <div style="position: relative; overflow: hidden; width: 277px; height: 300px; padding: 0px; margin: 0px; border-width: 0px;">
          <canvas data-zr-dom-id="zr_0" width="415" height="450" style="position: absolute; left: 0px; top: 0px; width: 277px; height: 300px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
         </div>
         <div></div>
        </div>
       </div>
      </div>
     </div> 
     <div attr-3="" class="el-row" style="margin-left: -4px; margin-right: -4px;">
      <div attr-3="" class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-12 el-col-xl-12" style="padding-left: 4px; padding-right: 8px; margin-bottom: 30px;">
       <div attr-3="" class="el-table el-table--fit el-table--scrollable-x el-table--enable-row-hover el-table--enable-row-transition el-table--medium" style="width: 100%; padding-top: 15px;">
        <div class="hidden-columns">
         <div></div> 
         <div></div> 
         <div></div>
        </div>
        <div class="el-table__header-wrapper">
         <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 495px;">
          <colgroup>
           <col name="el-table_1_column_1" width="200" />
           <col name="el-table_1_column_2" width="195" />
           <col name="el-table_1_column_3" width="100" />
           <col name="gutter" width="0" />
          </colgroup>
          <thead class="has-gutter">
           <tr class="">
            <th colspan="1" rowspan="1" class="el-table_1_column_1     is-leaf">
             <div class="cell">
              Order_No
             </div></th>
            <th colspan="1" rowspan="1" class="el-table_1_column_2  is-center   is-leaf">
             <div class="cell">
              Price
             </div></th>
            <th colspan="1" rowspan="1" class="el-table_1_column_3  is-center   is-leaf">
             <div class="cell">
              Status
             </div></th>
            <th class="gutter" style="width: 0px; display: none;"></th>
           </tr>
          </thead>
         </table>
        </div>
        <div class="el-table__body-wrapper is-scrolling-left">
         <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 495px;">
          <colgroup>
           <col name="el-table_1_column_1" width="200" />
           <col name="el-table_1_column_2" width="195" />
           <col name="el-table_1_column_3" width="100" />
          </colgroup>
          <tbody>
           <tr class="el-table__row">
            <td rowspan="1" colspan="1" class="el-table_1_column_1  ">
             <div class="cell">
               CbceEebE-d2D2-af4e-3aa4-FDb21f 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center ">
             <div class="cell">
               &yen;13,093.5 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center ">
             <div class="cell">
              <span class="el-tag el-tag--danger el-tag--medium el-tag--light"> pending </span>
             </div></td>
           </tr>
           <tr class="el-table__row">
            <td rowspan="1" colspan="1" class="el-table_1_column_1  ">
             <div class="cell">
               aEF202F4-8774-9B4E-933C-EccCaB 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center ">
             <div class="cell">
               &yen;4,465 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center ">
             <div class="cell">
              <span class="el-tag el-tag--danger el-tag--medium el-tag--light"> pending </span>
             </div></td>
           </tr>
           <tr class="el-table__row">
            <td rowspan="1" colspan="1" class="el-table_1_column_1  ">
             <div class="cell">
               9dDCfAE4-1Da7-A2d5-C275-C941Bd 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center ">
             <div class="cell">
               &yen;13,379.8 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center ">
             <div class="cell">
              <span class="el-tag el-tag--success el-tag--medium el-tag--light"> success </span>
             </div></td>
           </tr>
           <tr class="el-table__row">
            <td rowspan="1" colspan="1" class="el-table_1_column_1  ">
             <div class="cell">
               F57fD934-ef9E-f4Cf-54F3-CC1dE5 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center ">
             <div class="cell">
               &yen;13,820.23 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center ">
             <div class="cell">
              <span class="el-tag el-tag--danger el-tag--medium el-tag--light"> pending </span>
             </div></td>
           </tr>
           <tr class="el-table__row">
            <td rowspan="1" colspan="1" class="el-table_1_column_1  ">
             <div class="cell">
               d91b984b-2EFc-68D5-6BC5-80aBcb 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center ">
             <div class="cell">
               &yen;11,175.6 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center ">
             <div class="cell">
              <span class="el-tag el-tag--success el-tag--medium el-tag--light"> success </span>
             </div></td>
           </tr>
           <tr class="el-table__row">
            <td rowspan="1" colspan="1" class="el-table_1_column_1  ">
             <div class="cell">
               7DAed5B7-96bd-4BA5-4EDA-de38C5 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center ">
             <div class="cell">
               &yen;13,099.6 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center ">
             <div class="cell">
              <span class="el-tag el-tag--danger el-tag--medium el-tag--light"> pending </span>
             </div></td>
           </tr>
           <tr class="el-table__row">
            <td rowspan="1" colspan="1" class="el-table_1_column_1  ">
             <div class="cell">
               0DEF4DFe-9bbd-2cda-efba-dD645E 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center ">
             <div class="cell">
               &yen;8,672.1 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center ">
             <div class="cell">
              <span class="el-tag el-tag--danger el-tag--medium el-tag--light"> pending </span>
             </div></td>
           </tr>
           <tr class="el-table__row">
            <td rowspan="1" colspan="1" class="el-table_1_column_1  ">
             <div class="cell">
               c6133183-678E-8492-c43a-d25D2d 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_2 is-center ">
             <div class="cell">
               &yen;2,779 
             </div></td>
            <td rowspan="1" colspan="1" class="el-table_1_column_3 is-center ">
             <div class="cell">
              <span class="el-tag el-tag--danger el-tag--medium el-tag--light"> pending </span>
             </div></td>
           </tr>
           <!---->
          </tbody>
         </table>
         <!---->
         <!---->
        </div>
        <!---->
        <!---->
        <!---->
        <!---->
        <div class="el-table__column-resize-proxy" style="display: none;"></div>
       </div>
      </div> 
      <div attr-3="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-6 el-col-xl-6" style="padding-left: 4px; padding-right: 4px; margin-bottom: 30px;">
       <section attr-3="" class="todoapp">
        <header class="header">
         <input autocomplete="off" placeholder="Todo List" class="new-todo" />
        </header> 
        <section class="main">
         <input id="toggle-all" type="checkbox" class="toggle-all" /> 
         <label for="toggle-all"></label> 
         <ul class="todo-list">
          <li class="todo">
           <div class="view">
            <input type="checkbox" class="toggle" /> 
            <label>star this repository</label> 
            <button class="destroy"></button>
           </div> <input class="edit" style="display: none;" /></li>
          <li class="todo">
           <div class="view">
            <input type="checkbox" class="toggle" /> 
            <label>fork this repository</label> 
            <button class="destroy"></button>
           </div> <input class="edit" style="display: none;" /></li>
          <li class="todo">
           <div class="view">
            <input type="checkbox" class="toggle" /> 
            <label>follow author</label> 
            <button class="destroy"></button>
           </div> <input class="edit" style="display: none;" /></li>
          <li class="todo completed">
           <div class="view">
            <input type="checkbox" class="toggle" /> 
            <label>vue-element-admin</label> 
            <button class="destroy"></button>
           </div> <input class="edit" style="display: none;" /></li>
          <li class="todo completed">
           <div class="view">
            <input type="checkbox" class="toggle" /> 
            <label>vue</label> 
            <button class="destroy"></button>
           </div> <input class="edit" style="display: none;" /></li>
          <li class="todo completed">
           <div class="view">
            <input type="checkbox" class="toggle" /> 
            <label>element-ui</label> 
            <button class="destroy"></button>
           </div> <input class="edit" style="display: none;" /></li>
          <li class="todo completed">
           <div class="view">
            <input type="checkbox" class="toggle" /> 
            <label>axios</label> 
            <button class="destroy"></button>
           </div> <input class="edit" style="display: none;" /></li>
          <li class="todo completed">
           <div class="view">
            <input type="checkbox" class="toggle" /> 
            <label>webpack</label> 
            <button class="destroy"></button>
           </div> <input class="edit" style="display: none;" /></li>
         </ul>
        </section> 
        <footer class="footer">
         <span class="todo-count"><strong>3</strong> items left </span> 
         <ul class="filters">
          <li><a class="selected">All</a></li>
          <li><a class="">Active</a></li>
          <li><a class="">Completed</a></li>
         </ul>
        </footer>
       </section>
      </div> 
      <div attr-3="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-6 el-col-xl-6" style="padding-left: 4px; padding-right: 4px; margin-bottom: 30px;">
       <div attr-17="" attr-3="" class="el-card box-card-component is-always-shadow" style="margin-left: 8px;">
        <div class="el-card__header">
         <div attr-17="" class="box-card-header">
          <img attr-17="" src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" />
         </div>
        </div>
        <div class="el-card__body"> 
         <div attr-17="" style="position: relative;">
          <div attr-18="" attr-17="" class="pan-item panThumb" style="z-index: 1; height: 150px; width: 150px;">
           <div attr-18="" class="pan-info">
            <div attr-18="" class="pan-info-roles-container"></div>
           </div> 
           <div attr-18="" class="pan-thumb" style="background-image: url(&quot;https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif&quot;);"></div>
          </div> 
          <a attr-17="" href="#" class="link--mallki mallki-text"> vue-element-admin <span data-letters="vue-element-admin"></span> <span data-letters="vue-element-admin"></span></a> 
          <div attr-17="" class="progress-item" style="padding-top: 35px;">
           <span attr-17="">Vue</span> 
           <div attr-17="" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line">
            <div class="el-progress-bar">
             <div class="el-progress-bar__outer" style="height: 6px;">
              <div class="el-progress-bar__inner" style="width: 70%;">
               <!---->
              </div>
             </div>
            </div>
            <div class="el-progress__text" style="font-size: 14.4px;">
             70%
            </div>
           </div>
          </div> 
          <div attr-17="" class="progress-item">
           <span attr-17="">JavaScript</span> 
           <div attr-17="" role="progressbar" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line">
            <div class="el-progress-bar">
             <div class="el-progress-bar__outer" style="height: 6px;">
              <div class="el-progress-bar__inner" style="width: 18%;">
               <!---->
              </div>
             </div>
            </div>
            <div class="el-progress__text" style="font-size: 14.4px;">
             18%
            </div>
           </div>
          </div> 
          <div attr-17="" class="progress-item">
           <span attr-17="">Css</span> 
           <div attr-17="" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line">
            <div class="el-progress-bar">
             <div class="el-progress-bar__outer" style="height: 6px;">
              <div class="el-progress-bar__inner" style="width: 12%;">
               <!---->
              </div>
             </div>
            </div>
            <div class="el-progress__text" style="font-size: 14.4px;">
             12%
            </div>
           </div>
          </div> 
          <div attr-17="" class="progress-item">
           <span attr-17="">ESLint</span> 
           <div attr-17="" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line is-success">
            <div class="el-progress-bar">
             <div class="el-progress-bar__outer" style="height: 6px;">
              <div class="el-progress-bar__inner" style="width: 100%;">
               <!---->
              </div>
             </div>
            </div>
            <div class="el-progress__text" style="font-size: 14.4px;">
             <i class="el-icon-circle-check"></i>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>`,
		
        },scene);
    _325Dom.definedScene("scene-index", {
        domsInScene: scene
    }, scenes);
    scene.events.init();
    return scene;
}