"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6739],{15223:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>u,data:()=>n});var a=i(6254);const o={},u=(0,i(32860).A)(o,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"tuya-zth05",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-zth05"},[(0,a.Lk)("span",null,"Tuya ZTH05")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZTH05")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Temperature and humidity sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"temperature, humidity, battery_state, temperature_unit")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZTH05.png",alt:"Tuya ZTH05"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum"><span>Battery state (enum)</span></a></h3><p>State of the battery. Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="temperature-unit-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-enum"><span>Temperature unit (enum)</span></a></h3><p>Temperature unit. Value can be found in the published state on the <code>temperature_unit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p>',10))])}]]),n=JSON.parse('{"path":"/devices/ZTH05.html","title":"Tuya ZTH05 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZTH05 control via MQTT","description":"Integrate your Tuya ZTH05 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery state (enum)","slug":"battery-state-enum","link":"#battery-state-enum","children":[]},{"level":3,"title":"Temperature unit (enum)","slug":"temperature-unit-enum","link":"#temperature-unit-enum","children":[]}]}],"git":{"updatedTime":1744308942000},"filePathRelative":"devices/ZTH05.md"}')}}]);