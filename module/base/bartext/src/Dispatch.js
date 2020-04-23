/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");

module.exports = (_id,_params) => {
    _325Dom.render(scenes, `
    <div attr-14="" id="codefund">
    <link href="https://codefund.io/packs/css/code_fund_ad-fa201a47.css" rel="stylesheet" media="all">
    <div id="cf" data-template="horizontal" data-theme="light"> <span class="cf-wrapper">
    <a href="https://codefund.io/impressions/a62eefd8-32b9-44c6-97ac-905f8b7f3442/click?campaign_id=917&amp;creative_id=308&amp;property_id=96&amp;template=horizontal&amp;theme=light" class="cf-text" target="_blank" rel="sponsored noopener"> <strong>MongoDB Atlas</strong>
    <span>is the only true global, multi-cloud database service.</span>
    <span class="cf-cta">Try now!</span>
    </a>
    <a href="https://codefund.io/invite/dB3Pz0gRzkQ" class="cf-powered-by" target="_blank" rel="sponsored noopener">
    <em>ethical</em> ad by CodeFund <img src="https://codefund.io/display/a62eefd8-32b9-44c6-97ac-905f8b7f3442.gif" data-src="https://codefund.io/display/a62eefd8-32b9-44c6-97ac-905f8b7f3442.gif" data-behavior="trackImpression" class="cf-impression" alt="">
    </a>
    </span>
    </div>
</div>`);
    return scenes;
}

