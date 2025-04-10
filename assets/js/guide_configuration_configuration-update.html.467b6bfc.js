"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75153],{93344:(e,a,i)=>{i.r(a),i.d(a,{comp:()=>o,data:()=>r});var n=i(6254);const t={class:"hint-container warning"},s={},o=(0,i(32860).A)(s,[["render",function(e,a){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[a[6]||(a[6]=(0,n.Fv)('<h1 id="configuration-update" tabindex="-1"><a class="header-anchor" href="#configuration-update"><span>Configuration update</span></a></h1><p>Starting with v2.0.0 Zigbee2MQTT includes an automatic settings migration system. This system will take care of adjusting your <code>configuration.yaml</code> according to your previous one, and the requirements of the new Zigbee2MQTT version. If necessary, the migration process is repeated until your <code>configuration.yaml</code> is up to the current version.</p><p>The migration system will automatically make a backup of your current <code>data/configuration.yaml</code> before starting a migration. The backup file will be named according to its version, for example <code>data/configuration_backup_v1.yaml</code>.</p>',3)),(0,n.Lk)("div",t,[a[5]||(a[5]=(0,n.Lk)("p",{class:"hint-container-title"},"IMPORTANT",-1)),(0,n.Lk)("p",null,[a[1]||(a[1]=(0,n.eW)("Configuration values set through Home Assistant add-on configuration page, or through ")),(0,n.bF)(i,{to:"/guide/configuration/#environment-variables"},{default:(0,n.k6)((()=>a[0]||(a[0]=[(0,n.eW)("environment variables")]))),_:1}),a[2]||(a[2]=(0,n.eW)(" are not persisted to the ")),a[3]||(a[3]=(0,n.Lk)("code",null,"configuration.yaml",-1)),a[4]||(a[4]=(0,n.eW)(". As such, they cannot be processed by the migration system and will require your intervention if a migration is required for any of them."))])]),a[7]||(a[7]=(0,n.Fv)('<div class="hint-container warning"><p class="hint-container-title">IMPORTANT</p><p>While this automatically migrates Zigbee2MQTT settings, it <strong>cannot</strong> migrate side-effects on third parties (like Home Assistant). Make sure you go over the <a href="#migration-notes">migration notes</a> and the link given to adjust things accordingly on that front.</p></div><div class="hint-container caution"><p class="hint-container-title">CAUTION</p><p>Do not edit the <code>version</code> setting manually. If you do, you run the risk of corrupting your <code>configuration.yaml</code>, the migration system may no longer work properly.</p></div><h2 id="migration-notes" tabindex="-1"><a class="header-anchor" href="#migration-notes"><span>Migration notes</span></a></h2><p>The migration system will consider every migrations required for a particular version and build a log for you to easily identify what needed changing in your <code>configuration.yaml</code> and has an impact on your new configuration. The file will be named according to the Zigbee2MQTT version change, for example <code>data/migration-1-to-2.log</code>.</p><h3 id="example-migration-notes-from-v1-to-v2" tabindex="-1"><a class="header-anchor" href="#example-migration-notes-from-v1-to-v2"><span>Example migration notes from v1 to v2</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[REMOVAL] HA discovery_topic was moved from advanced.homeassistant_discovery_topic to homeassistant.discovery_topic.</span>\n<span class="line"></span>\n<span class="line">[TRANSFER] Baudrate was moved from advanced.baudrate to serial.baudrate.</span>\n<span class="line"></span>\n<span class="line">[REMOVAL] RTSCTS was moved from advanced.rtscts to serial.rtscts.</span>\n<span class="line"></span>\n<span class="line">[TRANSFER] ban was renamed to passlist.</span>\n<span class="line"></span>\n<span class="line">[CHANGE] Log level &#39;warn&#39; has been renamed to &#39;warning&#39;.</span>\n<span class="line"></span>\n<span class="line">[ADDITION] Migrated settings to version 2</span>\n<span class="line"></span>\n<span class="line">[REMOVAL] The MQTT legacy API has been removed (advanced.legacy_api setting). See link below for affected topics.</span>\n<span class="line"></span>\n<span class="line">[REMOVAL] Retrieve state option ((devices|groups).xyz.retrieve_state setting)</span>\n<span class="line"></span>\n<span class="line">For more details, see https://github.com/Koenkk/zigbee2mqtt/discussions/24198</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this scenario:</p><ul><li>You had set both <code>advanced.homeassistant_discovery_topic</code> and <code>homeassistant.discovery_topic</code>, the latter was retained, the former removed.</li><li>You had set <code>advanced.baudrate</code>, it was moved to <code>serial.baudrate</code>.</li><li>You had set both <code>advanced.rtscts</code> and <code>serial.rtscts</code>, the latter was retained, the former removed.</li><li>You had set <code>ban</code>, it was merged into <code>passlist</code>.</li><li>You had set <code>log_level</code> to <code>warn</code>, it was renamed to <code>warning</code>.</li><li><code>version: 2</code> was added (future migrations will automatically update it).</li><li>You had set <code>advanced.legacy_api</code> to true. This is no longer supported, the setting was removed.</li><li>You had set <code>retrieve_state</code> to true for one or more devices or groups under <code>devices</code> or <code>groups</code>. This is no longer supported, the setting was removed.</li></ul>',8))])}]]),r=JSON.parse('{"path":"/guide/configuration/configuration-update.html","title":"Configuration update","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Migration notes","slug":"migration-notes","link":"#migration-notes","children":[{"level":3,"title":"Example migration notes from v1 to v2","slug":"example-migration-notes-from-v1-to-v2","link":"#example-migration-notes-from-v1-to-v2","children":[]}]}],"git":{"updatedTime":1744308942000},"filePathRelative":"guide/configuration/configuration-update.md"}')}}]);