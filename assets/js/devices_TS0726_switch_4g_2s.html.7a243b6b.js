"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30257],{95149:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>n});var i=t(6254);const d={},a=(0,t(32860).A)(d,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[8]||(o[8]=(0,i.Lk)("h1",{id:"tuya-ts0726-switch-4g-2s",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-ts0726-switch-4g-2s"},[(0,i.Lk)("span",null,"Tuya TS0726_switch_4g_2s")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TS0726_switch_4g_2s")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("Tuya")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"COSWALL smart switch (4 gang + 2 scene)")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), power_on_behavior, backlight_mode, switch_mode, action")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0726_switch_4g_2s.png",alt:"Tuya TS0726_switch_4g_2s"})])],-1))])]),o[9]||(o[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint"><span>Switch (l2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint"><span>Switch (l3 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l3&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l4-endpoint"><span>Switch (l4 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l4</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l4&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l4&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l4&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l4&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-3" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-3"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l1-endpoint"><span>Power-on behavior (enum, l1 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="power-on-behavior-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l2-endpoint"><span>Power-on behavior (enum, l2 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="power-on-behavior-enum-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l3-endpoint"><span>Power-on behavior (enum, l3 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l3&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="power-on-behavior-enum-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l4-endpoint"><span>Power-on behavior (enum, l4 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l4&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="backlight-mode-binary" tabindex="-1"><a class="header-anchor" href="#backlight-mode-binary"><span>Backlight mode (binary)</span></a></h3><p>Mode of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;backlight_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> backlight mode is ON, if <code>OFF</code> OFF.</p><h3 id="switch-mode-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-mode-enum-l1-endpoint"><span>Switch mode (enum, l1 endpoint)</span></a></h3><p>Switch mode l1. Value can be found in the published state on the <code>switch_mode_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_mode_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_mode_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>scene</code>.</p><h3 id="switch-mode-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-mode-enum-l2-endpoint"><span>Switch mode (enum, l2 endpoint)</span></a></h3><p>Switch mode l2. Value can be found in the published state on the <code>switch_mode_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_mode_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_mode_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>scene</code>.</p><h3 id="switch-mode-enum-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-mode-enum-l3-endpoint"><span>Switch mode (enum, l3 endpoint)</span></a></h3><p>Switch mode l3. Value can be found in the published state on the <code>switch_mode_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_mode_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_mode_l3&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>scene</code>.</p><h3 id="switch-mode-enum-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-mode-enum-l4-endpoint"><span>Switch mode (enum, l4 endpoint)</span></a></h3><p>Switch mode l4. Value can be found in the published state on the <code>switch_mode_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_mode_l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_mode_l4&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>scene</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>scene_1</code>, <code>scene_2</code>, <code>scene_3</code>, <code>scene_4</code>, <code>scene_5</code>, <code>scene_6</code>.</p>',38))])}]]),n=JSON.parse('{"path":"/devices/TS0726_switch_4g_2s.html","title":"Tuya TS0726_switch_4g_2s control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0726_switch_4g_2s control via MQTT","description":"Integrate your Tuya TS0726_switch_4g_2s via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-31T20:34:53.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Switch (l3 endpoint)","slug":"switch-l3-endpoint","link":"#switch-l3-endpoint","children":[]},{"level":3,"title":"Switch (l4 endpoint)","slug":"switch-l4-endpoint","link":"#switch-l4-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l1 endpoint)","slug":"power-on-behavior-enum-l1-endpoint","link":"#power-on-behavior-enum-l1-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l2 endpoint)","slug":"power-on-behavior-enum-l2-endpoint","link":"#power-on-behavior-enum-l2-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l3 endpoint)","slug":"power-on-behavior-enum-l3-endpoint","link":"#power-on-behavior-enum-l3-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l4 endpoint)","slug":"power-on-behavior-enum-l4-endpoint","link":"#power-on-behavior-enum-l4-endpoint","children":[]},{"level":3,"title":"Backlight mode (binary)","slug":"backlight-mode-binary","link":"#backlight-mode-binary","children":[]},{"level":3,"title":"Switch mode (enum, l1 endpoint)","slug":"switch-mode-enum-l1-endpoint","link":"#switch-mode-enum-l1-endpoint","children":[]},{"level":3,"title":"Switch mode (enum, l2 endpoint)","slug":"switch-mode-enum-l2-endpoint","link":"#switch-mode-enum-l2-endpoint","children":[]},{"level":3,"title":"Switch mode (enum, l3 endpoint)","slug":"switch-mode-enum-l3-endpoint","link":"#switch-mode-enum-l3-endpoint","children":[]},{"level":3,"title":"Switch mode (enum, l4 endpoint)","slug":"switch-mode-enum-l4-endpoint","link":"#switch-mode-enum-l4-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1744308942000},"filePathRelative":"devices/TS0726_switch_4g_2s.md"}')}}]);