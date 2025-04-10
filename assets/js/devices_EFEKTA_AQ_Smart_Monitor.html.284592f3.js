"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27810],{37983:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>n});var i=t(6254);const a={},c=(0,t(32860).A)(a,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[8]||(o[8]=(0,i.Lk)("h1",{id:"efekta-efekta-aq-smart-monitor",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-aq-smart-monitor"},[(0,i.Lk)("span",null,"EFEKTA EFEKTA_AQ_Smart_Monitor")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"EFEKTA_AQ_Smart_Monitor")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=EFEKTA"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("EFEKTA")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"EFEKTA CO2 & VOC Index Smart Monitor, rgb indicator, can control the relay, binding")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"co2, temperature, humidity, voc_index, reading_interval, light_indicator, light_indicator_level, set_altitude, temperature_offset, humidity_offset, automatic_calibrations, forced_recalibration, factory_reset_co2, manual_forced_recalibration, enable_co2_gas, invert_logic_co2_gas, high_co2_gas, low_co2_gas, enable_voc, invert_logic_voc, high_voc, low_voc")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_AQ_Smart_Monitor.png",alt:"EFEKTA EFEKTA_AQ_Smart_Monitor"})])],-1))])]),o[9]||(o[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,i.Fv)('<ul><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="voc-index-numeric" tabindex="-1"><a class="header-anchor" href="#voc-index-numeric"><span>Voc index (numeric)</span></a></h3><p>VOC index. Value can be found in the published state on the <code>voc_index</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VOC Index points</code>.</p><h3 id="reading-interval-numeric" tabindex="-1"><a class="header-anchor" href="#reading-interval-numeric"><span>Reading interval (numeric)</span></a></h3><p>Setting the sensor reading interval.. Value can be found in the published state on the <code>reading_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reading_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>300</code>. The unit of this value is <code>seconds</code>.</p><h3 id="light-indicator-binary" tabindex="-1"><a class="header-anchor" href="#light-indicator-binary"><span>Light indicator (binary)</span></a></h3><p>Enable or Disable light indicator. Value can be found in the published state on the <code>light_indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> light indicator is ON, if <code>OFF</code> OFF.</p><h3 id="light-indicator-level-numeric" tabindex="-1"><a class="header-anchor" href="#light-indicator-level-numeric"><span>Light indicator level (numeric)</span></a></h3><p>Light indicator level. Value can be found in the published state on the <code>light_indicator_level</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_indicator_level&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="set-altitude-numeric" tabindex="-1"><a class="header-anchor" href="#set-altitude-numeric"><span>Set altitude (numeric)</span></a></h3><p>Setting the altitude above sea level (for high accuracy of the CO2 sensor). Value can be found in the published state on the <code>set_altitude</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_altitude&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3000</code>. The unit of this value is <code>meters</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric"><span>Temperature offset (numeric)</span></a></h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric"><span>Humidity offset (numeric)</span></a></h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="automatic-calibrations-binary" tabindex="-1"><a class="header-anchor" href="#automatic-calibrations-binary"><span>Automatic calibrations (binary)</span></a></h3><p>Automatic calibration of the CO2 sensor. Value can be found in the published state on the <code>automatic_calibrations</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;automatic_calibrations&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> automatic calibrations is ON, if <code>OFF</code> OFF.</p><h3 id="forced-recalibration-binary" tabindex="-1"><a class="header-anchor" href="#forced-recalibration-binary"><span>Forced recalibration (binary)</span></a></h3><p>Start FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;forced_recalibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> forced recalibration is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-co2-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-co2-binary"><span>Factory reset co2 (binary)</span></a></h3><p>Factory Reset CO2 sensor. Value can be found in the published state on the <code>factory_reset_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset_co2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset co2 is ON, if <code>OFF</code> OFF.</p><h3 id="manual-forced-recalibration-numeric" tabindex="-1"><a class="header-anchor" href="#manual-forced-recalibration-numeric"><span>Manual forced recalibration (numeric)</span></a></h3><p>Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>manual_forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_forced_recalibration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="enable-co2-gas-binary" tabindex="-1"><a class="header-anchor" href="#enable-co2-gas-binary"><span>Enable co2 gas (binary)</span></a></h3><p>Enable CO2 Gas Control. Value can be found in the published state on the <code>enable_co2_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_co2_gas&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable co2 gas is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-co2-gas-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-co2-gas-binary"><span>Invert logic co2 gas (binary)</span></a></h3><p>Enable invert logic CO2 Gas Control. Value can be found in the published state on the <code>invert_logic_co2_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_co2_gas&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic co2 gas is ON, if <code>OFF</code> OFF.</p><h3 id="high-co2-gas-numeric" tabindex="-1"><a class="header-anchor" href="#high-co2-gas-numeric"><span>High co2 gas (numeric)</span></a></h3><p>Setting High CO2 Gas Border. Value can be found in the published state on the <code>high_co2_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_co2_gas&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="low-co2-gas-numeric" tabindex="-1"><a class="header-anchor" href="#low-co2-gas-numeric"><span>Low co2 gas (numeric)</span></a></h3><p>Setting Low CO2 Gas Border. Value can be found in the published state on the <code>low_co2_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_co2_gas&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="enable-voc-binary" tabindex="-1"><a class="header-anchor" href="#enable-voc-binary"><span>Enable voc (binary)</span></a></h3><p>Enable VOC Control. Value can be found in the published state on the <code>enable_voc</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_voc&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable voc is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-voc-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-voc-binary"><span>Invert logic voc (binary)</span></a></h3><p>Enable invert logic VOC Control. Value can be found in the published state on the <code>invert_logic_voc</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_voc&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic voc is ON, if <code>OFF</code> OFF.</p><h3 id="high-voc-numeric" tabindex="-1"><a class="header-anchor" href="#high-voc-numeric"><span>High voc (numeric)</span></a></h3><p>Setting High VOC Border. Value can be found in the published state on the <code>high_voc</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_voc&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>500</code>. The unit of this value is <code>VOC Index points</code>.</p><h3 id="low-voc-numeric" tabindex="-1"><a class="header-anchor" href="#low-voc-numeric"><span>Low voc (numeric)</span></a></h3><p>Setting Low VOC Border. Value can be found in the published state on the <code>low_voc</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_voc&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>500</code>. The unit of this value is <code>VOC Index points</code>.</p>',46))])}]]),n=JSON.parse('{"path":"/devices/EFEKTA_AQ_Smart_Monitor.html","title":"EFEKTA EFEKTA_AQ_Smart_Monitor control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_AQ_Smart_Monitor control via MQTT","description":"Integrate your EFEKTA EFEKTA_AQ_Smart_Monitor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-03-01T20:31:41.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Voc index (numeric)","slug":"voc-index-numeric","link":"#voc-index-numeric","children":[]},{"level":3,"title":"Reading interval (numeric)","slug":"reading-interval-numeric","link":"#reading-interval-numeric","children":[]},{"level":3,"title":"Light indicator (binary)","slug":"light-indicator-binary","link":"#light-indicator-binary","children":[]},{"level":3,"title":"Light indicator level (numeric)","slug":"light-indicator-level-numeric","link":"#light-indicator-level-numeric","children":[]},{"level":3,"title":"Set altitude (numeric)","slug":"set-altitude-numeric","link":"#set-altitude-numeric","children":[]},{"level":3,"title":"Temperature offset (numeric)","slug":"temperature-offset-numeric","link":"#temperature-offset-numeric","children":[]},{"level":3,"title":"Humidity offset (numeric)","slug":"humidity-offset-numeric","link":"#humidity-offset-numeric","children":[]},{"level":3,"title":"Automatic calibrations (binary)","slug":"automatic-calibrations-binary","link":"#automatic-calibrations-binary","children":[]},{"level":3,"title":"Forced recalibration (binary)","slug":"forced-recalibration-binary","link":"#forced-recalibration-binary","children":[]},{"level":3,"title":"Factory reset co2 (binary)","slug":"factory-reset-co2-binary","link":"#factory-reset-co2-binary","children":[]},{"level":3,"title":"Manual forced recalibration (numeric)","slug":"manual-forced-recalibration-numeric","link":"#manual-forced-recalibration-numeric","children":[]},{"level":3,"title":"Enable co2 gas (binary)","slug":"enable-co2-gas-binary","link":"#enable-co2-gas-binary","children":[]},{"level":3,"title":"Invert logic co2 gas (binary)","slug":"invert-logic-co2-gas-binary","link":"#invert-logic-co2-gas-binary","children":[]},{"level":3,"title":"High co2 gas (numeric)","slug":"high-co2-gas-numeric","link":"#high-co2-gas-numeric","children":[]},{"level":3,"title":"Low co2 gas (numeric)","slug":"low-co2-gas-numeric","link":"#low-co2-gas-numeric","children":[]},{"level":3,"title":"Enable voc (binary)","slug":"enable-voc-binary","link":"#enable-voc-binary","children":[]},{"level":3,"title":"Invert logic voc (binary)","slug":"invert-logic-voc-binary","link":"#invert-logic-voc-binary","children":[]},{"level":3,"title":"High voc (numeric)","slug":"high-voc-numeric","link":"#high-voc-numeric","children":[]},{"level":3,"title":"Low voc (numeric)","slug":"low-voc-numeric","link":"#low-voc-numeric","children":[]}]}],"git":{"updatedTime":1744308942000},"filePathRelative":"devices/EFEKTA_AQ_Smart_Monitor.md"}')}}]);