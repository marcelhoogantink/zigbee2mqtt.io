"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82882],{66365:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>o,data:()=>r});var s=a(6254);const t={class:"hint-container warning"},i={class:"hint-container tip"},l={},o=(0,a(32860).A)(l,[["render",function(e,n){const a=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[n[30]||(n[30]=(0,s.Lk)("h1",{id:"adapter-settings",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#adapter-settings"},[(0,s.Lk)("span",null,"Adapter settings")])],-1)),(0,s.Lk)("div",t,[n[3]||(n[3]=(0,s.Lk)("p",{class:"hint-container-title"},"ATTENTION",-1)),(0,s.Lk)("p",null,[n[1]||(n[1]=(0,s.eW)("Not all features are supported for every adapter, to see what's supported, go to your ")),(0,s.bF)(a,{to:"/guide/adapters/"},{default:(0,s.k6)((()=>n[0]||(n[0]=[(0,s.eW)("adapter page")]))),_:1}),n[2]||(n[2]=(0,s.eW)("."))])]),n[31]||(n[31]=(0,s.Lk)("h2",{id:"basic-configuration",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#basic-configuration"},[(0,s.Lk)("span",null,"Basic configuration")])],-1)),n[32]||(n[32]=(0,s.Lk)("p",null,[(0,s.eW)("In case Zigbee2MQTT cannot automatically detect your adapter (fails to start with: "),(0,s.Lk)("code",null,"USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration."),(0,s.eW)(") we need to configure the "),(0,s.Lk)("code",null,"serial"),(0,s.eW)(" section in the "),(0,s.Lk)("code",null,"configuration.yaml"),(0,s.eW)(".")],-1)),n[33]||(n[33]=(0,s.Lk)("p",null,"First determine the port of your adapter:",-1)),(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.Lk)("p",null,[n[5]||(n[5]=(0,s.eW)("For USB adapters: when running on Windows see ")),(0,s.bF)(a,{to:"/guide/installation/05_windows.html#starting-zigbee2mqtt"},{default:(0,s.k6)((()=>n[4]||(n[4]=[(0,s.eW)("these instructions")]))),_:1}),n[6]||(n[6]=(0,s.eW)(", for Linux execute ")),n[7]||(n[7]=(0,s.Lk)("code",null,"ls -l /dev/serial/by-id",-1)),n[8]||(n[8]=(0,s.eW)(":"))]),n[9]||(n[9]=(0,s.Fv)('<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pi@raspberry:/ $ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/serial/by-id</span>\n<span class="line">total <span class="token number">0</span></span>\n<span class="line">lrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">13</span> Oct <span class="token number">19</span> <span class="token number">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/ttyACM0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1))]),n[10]||(n[10]=(0,s.Lk)("li",null,[(0,s.Lk)("p",null,"For network adapters you need to find the IP address of your adapter through router/switch web-interface. Make sure that the adapter has been assigned a static IP address!"),(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,"Alternatively, in case your adapter supports mDNS, see the mDNS docs below.")])],-1))]),(0,s.Lk)("p",null,[n[12]||(n[12]=(0,s.eW)("Next determine what ")),n[13]||(n[13]=(0,s.Lk)("code",null,"adapter",-1)),n[14]||(n[14]=(0,s.eW)(" you are using by going to your ")),(0,s.bF)(a,{to:"/guide/adapters/"},{default:(0,s.k6)((()=>n[11]||(n[11]=[(0,s.eW)("adapter page")]))),_:1}),n[15]||(n[15]=(0,s.eW)(". Possible adapters are ")),n[16]||(n[16]=(0,s.Lk)("code",null,"zstack",-1)),n[17]||(n[17]=(0,s.eW)(", ")),n[18]||(n[18]=(0,s.Lk)("code",null,"ember",-1)),n[19]||(n[19]=(0,s.eW)(", ")),n[20]||(n[20]=(0,s.Lk)("code",null,"deconz",-1)),n[21]||(n[21]=(0,s.eW)(", ")),n[22]||(n[22]=(0,s.Lk)("code",null,"zigate",-1)),n[23]||(n[23]=(0,s.eW)(" or ")),n[24]||(n[24]=(0,s.Lk)("code",null,"zboss",-1)),n[25]||(n[25]=(0,s.eW)("."))]),n[34]||(n[34]=(0,s.Fv)('<p>Given the example of the USB adapter above in combination with a <code>zstack</code> adapter, we would add the following to the <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Location of the adapter</span></span>\n<span class="line">    <span class="token comment"># USB adapters - use format &quot;port: /dev/serial/by-id/XXX&quot;</span></span>\n<span class="line">    <span class="token comment"># Ethernet adapters - use format &quot;port: tcp://192.168.1.12:6638&quot;</span></span>\n<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/serial/by<span class="token punctuation">-</span>id/usb<span class="token punctuation">-</span>Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF<span class="token punctuation">-</span>if00</span>\n<span class="line">    <span class="token comment"># Adapter type, allowed values: `zstack`, `ember`, `deconz`, `zigate` or `zboss`</span></span>\n<span class="line">    <span class="token key atrule">adapter</span><span class="token punctuation">:</span> zstack</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This serial configuration should be enough to make Zigbee2MQTT start.</p><h2 id="mdns-zeroconf-discovery" tabindex="-1"><a class="header-anchor" href="#mdns-zeroconf-discovery"><span>mDNS Zeroconf discovery.</span></a></h2><p>Zigbee2MQTT supports automatic discovery of Zigbee network Adapters. In order to use this feature, your adapter must support discovery via mDNS Zeroconf.</p><p>If you have a more than 1 device with the same mDNS service type (name), Zigbee2MQTT with autodiscover option will connect to the random one. So for proper use we recommend to have only one physically connected network adapter with the same mDNS service type (name). Otherwise, please set-up a settings over IP address and port, as described on the passage above.</p><div class="hint-container warning"><p class="hint-container-title">ATTENTION</p><p>When using this autodetection, the following parameters in <code>configuration.yaml</code> will be ignored: <code>adapter</code>, <code>baudrate</code></p></div><p>List of tested devices supporting mDNS Zeroconf autodiscovery:</p><table><thead><tr><th style="text-align:left;">Device</th><th style="text-align:center;">MDNS service type</th></tr></thead><tbody><tr><td style="text-align:left;">SLZB-06</td><td style="text-align:center;">slzb-06</td></tr><tr><td style="text-align:left;">UZG-01</td><td style="text-align:center;">uzg-01</td></tr><tr><td style="text-align:left;">CZC-01</td><td style="text-align:center;">czc</td></tr></tbody></table><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> mdns<span class="token punctuation">:</span>//slzb<span class="token punctuation">-</span><span class="token number">06</span></span>\n<span class="line">    <span class="token comment"># port: mdns://uzg-01</span></span>\n<span class="line">    <span class="token comment"># port: mdns://czc</span></span>\n<span class="line">    <span class="token comment"># Optional: disable LED of the adapter if supported (default: false)</span></span>\n<span class="line">    <span class="token key atrule">disable_led</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">    <span class="token comment"># Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.</span></span>\n<span class="line">    <span class="token key atrule">baudrate</span><span class="token punctuation">:</span> <span class="token number">115200</span></span>\n<span class="line">    <span class="token comment"># Optional: RTS / CTS Hardware Flow Control for serial port (default: false)</span></span>\n<span class="line">    <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced configuration</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Optional: configure adapter concurrency (e.g. 2 for CC2531 or 16 for CC26X2R1) (default: null, uses recommended value)</span></span>\n<span class="line">    <span class="token key atrule">adapter_concurrent</span><span class="token punctuation">:</span> <span class="token null important">null</span></span>\n<span class="line">    <span class="token comment"># Optional: Transmit power setting in dBm (default: 5).</span></span>\n<span class="line">    <span class="token comment"># This will set the transmit power for devices that bring an inbuilt amplifier.</span></span>\n<span class="line">    <span class="token comment"># It can&#39;t go over the maximum of the respective hardware and might be limited</span></span>\n<span class="line">    <span class="token comment"># by firmware (for example to migrate heat, or by using an unsupported firmware).</span></span>\n<span class="line">    <span class="token comment"># For the CC2652R(B) this is 5 dBm, CC2652P/CC1352P-2 20 dBm.</span></span>\n<span class="line">    <span class="token key atrule">transmit_power</span><span class="token punctuation">:</span> <span class="token number">5</span></span>\n<span class="line">    <span class="token comment"># Optional: Set the adapter delay, only used for Conbee/Raspbee adapters (default 0).</span></span>\n<span class="line">    <span class="token comment"># In case you are having issues try `200`.</span></span>\n<span class="line">    <span class="token comment"># For more information see https://github.com/Koenkk/zigbee2mqtt/issues/4884</span></span>\n<span class="line">    <span class="token key atrule">adapter_delay</span><span class="token punctuation">:</span> <span class="token number">0</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12)),(0,s.Lk)("div",i,[n[29]||(n[29]=(0,s.Lk)("p",{class:"hint-container-title"},"Tips",-1)),(0,s.Lk)("p",null,[n[27]||(n[27]=(0,s.eW)("It's also possible to connect USB Adapters over TCP. See how to connect a ")),(0,s.bF)(a,{to:"/advanced/remote-adapter/connect_to_a_remote_adapter.html"},{default:(0,s.k6)((()=>n[26]||(n[26]=[(0,s.eW)("remote adapter")]))),_:1}),n[28]||(n[28]=(0,s.eW)("."))])])])}]]),r=JSON.parse('{"path":"/guide/configuration/adapter-settings.html","title":"Adapter settings","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Basic configuration","slug":"basic-configuration","link":"#basic-configuration","children":[]},{"level":2,"title":"mDNS Zeroconf discovery.","slug":"mdns-zeroconf-discovery","link":"#mdns-zeroconf-discovery","children":[]},{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]}],"git":{"updatedTime":1744308942000},"filePathRelative":"guide/configuration/adapter-settings.md"}')}}]);