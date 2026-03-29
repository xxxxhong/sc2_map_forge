import {Fragment,useCallback,useContext,useEffect} from "react"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined,isTrue} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import {Slider as RadixThemesSlider} from "@radix-ui/themes"
import {jsx} from "@emotion/react"




function Input_856032143518e2182b4288285d0a25c2 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_ebb38beb00435e8c6c34d002317aab58 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_default_provider", ({ ["value"] : "deepseek" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{checked:(reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "deepseek"?.valueOf?.()),name:"defaultProvider",onChange:on_change_ebb38beb00435e8c6c34d002317aab58,type:"radio",value:(isNotNullOrUndefined("deepseek") ? "deepseek" : "")},)
  )
}


function Input_bc45c3db440a8a6f61aa3741d387b0f3 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_0893ca8f33255f3b9a79eb611bc765ef = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_default_provider", ({ ["value"] : "openai" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{checked:(reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "openai"?.valueOf?.()),name:"defaultProvider",onChange:on_change_0893ca8f33255f3b9a79eb611bc765ef,type:"radio",value:(isNotNullOrUndefined("openai") ? "openai" : "")},)
  )
}


function Input_510f7356d49515fd295f65ff99e9fdc8 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2bfc3531e6220f234db5cb2a169504e0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_default_provider", ({ ["value"] : "anthropic" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{checked:(reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "anthropic"?.valueOf?.()),name:"defaultProvider",onChange:on_change_2bfc3531e6220f234db5cb2a169504e0,type:"radio",value:(isNotNullOrUndefined("anthropic") ? "anthropic" : "")},)
  )
}


function Input_35596d365e49dab9a9f64c8278923d4b () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_08f2ab6ec4fa815540d098a756cc7660 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_default_provider", ({ ["value"] : "glm" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{checked:(reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "glm"?.valueOf?.()),name:"defaultProvider",onChange:on_change_08f2ab6ec4fa815540d098a756cc7660,type:"radio",value:(isNotNullOrUndefined("glm") ? "glm" : "")},)
  )
}


function Input_13516d449d2ecd96c459a68914ac7d58 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_ca7d7236aac5358affec8b12269a8703 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_default_provider", ({ ["value"] : "qwen" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{checked:(reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "qwen"?.valueOf?.()),name:"defaultProvider",onChange:on_change_ca7d7236aac5358affec8b12269a8703,type:"radio",value:(isNotNullOrUndefined("qwen") ? "qwen" : "")},)
  )
}


function Input_2cbf3fa0ec293c3c74203e345c4c50f8 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a1681dd55e75758e2be668c469147115 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_default_provider", ({ ["value"] : "minimax" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{checked:(reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "minimax"?.valueOf?.()),name:"defaultProvider",onChange:on_change_a1681dd55e75758e2be668c469147115,type:"radio",value:(isNotNullOrUndefined("minimax") ? "minimax" : "")},)
  )
}


function Input_1e5e936efd821b353e264db500b9d6a2 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_574be3b2cda17fe95f74a321da38aba4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_temperature", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",css:({ ["width"] : "64px", ["textAlign"] : "center", ["padding"] : "4px 8px" }),onChange:on_change_574be3b2cda17fe95f74a321da38aba4,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.temperature_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.temperature_rx_state_ : "")},)
  )
}


function Button_4030465d4cfd6dcd5b089c07d18c3c60 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_0c2acc326b381780480e609f8281a69d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.reset_temperature", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"slider-reset",onClick:on_click_0c2acc326b381780480e609f8281a69d,title:"Reset"},"\u21bb")
  )
}


function Slider_f2b974f4b7efd2c92d577ed0a401f375 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_35a13c8913caa1b864f1cbe602039ef0 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_temperature_from_slider", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSlider,{color:"blue",css:({ ["width"] : "100%" }),defaultValue:[50],max:2,min:0,onValueChange:on_change_35a13c8913caa1b864f1cbe602039ef0,step:0.1,value:[reflex___state____state__sc2_map_forge___states___config_state____config_state.temperature_rx_state_],width:"100%"},)
  )
}


function Input_3dda168a8cf33ca026739d0de1124910 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2cbae1017ae4d56cd1ad0f7447c00c96 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_max_tokens", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",css:({ ["width"] : "80px", ["textAlign"] : "center", ["padding"] : "4px 8px" }),onChange:on_change_2cbae1017ae4d56cd1ad0f7447c00c96,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.max_tokens_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.max_tokens_rx_state_ : "")},)
  )
}


function Button_be03fbe1faf9a70c1992ca6ac2dc16c5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6a11dc29d3cff5585688c68c8005b243 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.reset_max_tokens", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"slider-reset",onClick:on_click_6a11dc29d3cff5585688c68c8005b243,title:"Reset"},"\u21bb")
  )
}


function Slider_5c0f794c1f825a53f427c9286d71fd71 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_5996155d846cc3bb3832183c3d737f10 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_max_tokens_from_slider", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSlider,{color:"blue",css:({ ["width"] : "100%" }),defaultValue:[50],max:16384,min:512,onValueChange:on_change_5996155d846cc3bb3832183c3d737f10,step:1,value:[reflex___state____state__sc2_map_forge___states___config_state____config_state.max_tokens_rx_state_],width:"100%"},)
  )
}


function Span_13cf1f02972b65af1d02a82ab9a0026c () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "deepseek"?.valueOf?.()) ? ({ ["background"] : "#4ade80", ["box_shadow"] : "0 0 8px #4ade80" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_39764826ac20240bc9c5d045f7bbb19d () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_760014226fe1a5b546ded782f9454f8e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "deepseek", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_760014226fe1a5b546ded782f9454f8e,placeholder:"sk-...",type:"password",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.deepseek_apikey_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.deepseek_apikey_rx_state_ : "")},)
  )
}


function Input_de5631b9c8119835c3e0ab14917acf1c () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_f6fcc4ec7dbbfde9003a21519dbefe7d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "deepseek", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_f6fcc4ec7dbbfde9003a21519dbefe7d,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.deepseek_baseurl_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.deepseek_baseurl_rx_state_ : "")},)
  )
}


function Input_c590e19a732c7cf7099ab2d1aba7b7c7 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2c6ebc0735e3df0fd504243d9ba9cbe2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "deepseek", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_2c6ebc0735e3df0fd504243d9ba9cbe2,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.deepseek_model_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.deepseek_model_rx_state_ : "")},)
  )
}


function Div_4234b38fec2be4bc94104b92f1d24a38 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "deepseek"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_13cf1f02972b65af1d02a82ab9a0026c,{},),"DeepSeek"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_39764826ac20240bc9c5d045f7bbb19d,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_de5631b9c8119835c3e0ab14917acf1c,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_c590e19a732c7cf7099ab2d1aba7b7c7,{},))))
  )
}


function Span_a9880994bbf2d9fd59d29cca72fcad79 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "openai"?.valueOf?.()) ? ({ ["background"] : "#f59e0b", ["box_shadow"] : "0 0 8px #f59e0b" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_a4e5e39941bca7ca19a4c6141c8cde60 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a77dd2fd2457487ae1b31df998e89860 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "openai", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_a77dd2fd2457487ae1b31df998e89860,placeholder:"sk-...",type:"password",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.openai_apikey_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.openai_apikey_rx_state_ : "")},)
  )
}


function Input_dff4c7001f4541753b32674629d34ccc () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_298b137dd871d411986cce5300bfaa37 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "openai", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_298b137dd871d411986cce5300bfaa37,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.openai_baseurl_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.openai_baseurl_rx_state_ : "")},)
  )
}


function Input_899627623f6b07b425dd932420979c45 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_515e2be127d09bd9b376bb31f2f48195 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "openai", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_515e2be127d09bd9b376bb31f2f48195,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.openai_model_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.openai_model_rx_state_ : "")},)
  )
}


function Div_36d91592d47c03b2b2b203efcd9bc912 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "openai"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_a9880994bbf2d9fd59d29cca72fcad79,{},),"OpenAI"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_a4e5e39941bca7ca19a4c6141c8cde60,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_dff4c7001f4541753b32674629d34ccc,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_899627623f6b07b425dd932420979c45,{},))))
  )
}


function Span_4226863545d603c108215a3e36385a35 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "anthropic"?.valueOf?.()) ? ({ ["background"] : "#8b5cf6", ["box_shadow"] : "0 0 8px #8b5cf6" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_da3f785ae8b7fced9d4c9f933b13e21b () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_11b972afdc10a988996be4d83d85897e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "anthropic", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_11b972afdc10a988996be4d83d85897e,placeholder:"sk-...",type:"password",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.anthropic_apikey_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.anthropic_apikey_rx_state_ : "")},)
  )
}


function Input_54c321d32c82bd4efc4f91d40457d57b () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_afdf70c5701b160d7e529a91ccefc6aa = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "anthropic", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_afdf70c5701b160d7e529a91ccefc6aa,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.anthropic_baseurl_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.anthropic_baseurl_rx_state_ : "")},)
  )
}


function Input_51cfca92e7a5a593be882cec7ba06d30 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_31eec965e2ef6f558be453ade883eaa0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "anthropic", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_31eec965e2ef6f558be453ade883eaa0,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.anthropic_model_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.anthropic_model_rx_state_ : "")},)
  )
}


function Div_03a8fe730221b34b3f195ceafb4e7d3a () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "anthropic"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_4226863545d603c108215a3e36385a35,{},),"Anthropic"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_da3f785ae8b7fced9d4c9f933b13e21b,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_54c321d32c82bd4efc4f91d40457d57b,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_51cfca92e7a5a593be882cec7ba06d30,{},))))
  )
}


function Span_ab8220ab614431ed08ae465271a21336 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "glm"?.valueOf?.()) ? ({ ["background"] : "#38bdf8", ["box_shadow"] : "0 0 8px #38bdf8" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_5d2c688c0efd914f529d4eab111e4755 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_6cc398c4bd2b81a9c329303e4db7cb14 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "glm", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_6cc398c4bd2b81a9c329303e4db7cb14,placeholder:"sk-...",type:"password",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.glm_apikey_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.glm_apikey_rx_state_ : "")},)
  )
}


function Input_fdefd6c95513e5dadbffee6ca39e4b57 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_1929ade4be42d0e983b40bb1aca0dfb8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "glm", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_1929ade4be42d0e983b40bb1aca0dfb8,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.glm_baseurl_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.glm_baseurl_rx_state_ : "")},)
  )
}


function Input_c73c64b150f660a155adef2eb7bbe283 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_0f896d6c20bef6e05c27c9ed73096b45 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "glm", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_0f896d6c20bef6e05c27c9ed73096b45,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.glm_model_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.glm_model_rx_state_ : "")},)
  )
}


function Div_c66e9a366b313ba2e790a23c3faeb0e1 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "glm"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_ab8220ab614431ed08ae465271a21336,{},),"GLM (\u667a\u8c31)"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_5d2c688c0efd914f529d4eab111e4755,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_fdefd6c95513e5dadbffee6ca39e4b57,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_c73c64b150f660a155adef2eb7bbe283,{},))))
  )
}


function Span_28056c5af71221d85ae6e3ed7ac75b90 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "qwen"?.valueOf?.()) ? ({ ["background"] : "#f472b6", ["box_shadow"] : "0 0 8px #f472b6" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_c1a0edcdb12a6be2a9fc66a734ebf49b () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_02d220713a28d13e9d1f6d461d99a095 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "qwen", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_02d220713a28d13e9d1f6d461d99a095,placeholder:"sk-...",type:"password",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.qwen_apikey_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.qwen_apikey_rx_state_ : "")},)
  )
}


function Input_757aa031ab1441e56cf42f527d6b7fdc () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2027386ec72769fe996e5ead0311a319 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "qwen", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_2027386ec72769fe996e5ead0311a319,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.qwen_baseurl_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.qwen_baseurl_rx_state_ : "")},)
  )
}


function Input_2345e636134ed123d8cb531f3f6890e6 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_dca296acf9d291f18b2b38c40c679454 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "qwen", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_dca296acf9d291f18b2b38c40c679454,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.qwen_model_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.qwen_model_rx_state_ : "")},)
  )
}


function Div_9573a5bbc003391a39e6ce0fe46e033a () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "qwen"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_28056c5af71221d85ae6e3ed7ac75b90,{},),"Qwen (\u901a\u4e49)"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_c1a0edcdb12a6be2a9fc66a734ebf49b,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_757aa031ab1441e56cf42f527d6b7fdc,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_2345e636134ed123d8cb531f3f6890e6,{},))))
  )
}


function Span_6863ac8e83998e5c239d927c2e450dc9 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "minimax"?.valueOf?.()) ? ({ ["background"] : "#fb923c", ["box_shadow"] : "0 0 8px #fb923c" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_942caae3b85ca54a4053499fb6ec47f8 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a702f47cd2d28d505c47b82905094dee = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "minimax", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_a702f47cd2d28d505c47b82905094dee,placeholder:"sk-...",type:"password",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.minimax_apikey_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.minimax_apikey_rx_state_ : "")},)
  )
}


function Input_df882d8096d50b68fdac8226c51fe443 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_6239f6a1d4f75f646f5049a723d59288 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "minimax", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_6239f6a1d4f75f646f5049a723d59288,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.minimax_baseurl_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.minimax_baseurl_rx_state_ : "")},)
  )
}


function Input_08b15f010e7efd61bde04eda05959f20 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_51211880d2800b7da10d2af2307c8073 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "minimax", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_51211880d2800b7da10d2af2307c8073,value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.minimax_model_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.minimax_model_rx_state_ : "")},)
  )
}


function Div_5a049a23e0c0e6b9263f3b7a9b6f8e85 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "minimax"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_6863ac8e83998e5c239d927c2e450dc9,{},),"MiniMax"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_942caae3b85ca54a4053499fb6ec47f8,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_df882d8096d50b68fdac8226c51fe443,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_08b15f010e7efd61bde04eda05959f20,{},))))
  )
}


function Button_202f9a2f38c2eabde91375cf1d9a213a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_51c8b7737ae79cf971332d823f07071e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.save_api_config", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"save-btn",onClick:on_click_51c8b7737ae79cf971332d823f07071e},"\ud83d\udcbe \u4fdd\u5b58 API \u914d\u7f6e")
  )
}


function Div_146ebad15e37a568cd2d5a70dbba3d3e () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{css:({ ["fontSize"] : "13px", ["color"] : "var(--accent-blue)", ["marginTop"] : "12px" })},reflex___state____state__sc2_map_forge___states___config_state____config_state.api_save_msg_rx_state_)
  )
}


function Fragment_578db6815419f6803b4a279621f25850 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx(Fragment,{},(!((reflex___state____state__sc2_map_forge___states___config_state____config_state.api_save_msg_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(Div_146ebad15e37a568cd2d5a70dbba3d3e,{},))):(jsx(Fragment,{},))))
  )
}


function Div_617326176b4c036bf1998bb057bee78a () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.on_load", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx("div",{},jsx("div",{className:"app-header"},jsx("div",{className:"logo-icon"},"S"),jsx("div",{},jsx("div",{className:"app-title"},"SMAC-AST"),jsx("div",{className:"app-subtitle"},"Automated Scalable Testbed-generator for StarCraft Multi-Agent Challenges"))),jsx("div",{className:"top-tabs"},jsx(ReactRouterLink,{className:"top-tab",to:"/"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\uddfa\ufe0f"),jsx("span",{},"\u751f\u6210\u5730\u56fe")),jsx(ReactRouterLink,{className:"top-tab active",to:"/api-config"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\udd27"),jsx("span",{},"API \u914d\u7f6e")),jsx(ReactRouterLink,{className:"top-tab",to:"/path-config"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\udcc1"),jsx("span",{},"\u8def\u5f84\u914d\u7f6e"))),jsx("div",{className:"config-page"},jsx("div",{className:"config-page-title"},"API \u63d0\u4f9b\u5546\u8bbe\u7f6e"),jsx("div",{className:"config-page-desc"},"\u914d\u7f6e\u540e\u70b9\u51fb\u4fdd\u5b58\uff0c\u4e0b\u6b21\u542f\u52a8\u81ea\u52a8\u52a0\u8f7d\u3002"),jsx("div",{className:"api-defaults-card"},jsx("div",{className:"card-label"},"\u9ed8\u8ba4\u63d0\u4f9b\u5546"),jsx("div",{className:"provider-radio-group"},jsx("label",{className:"provider-radio"},jsx(Input_856032143518e2182b4288285d0a25c2,{},),"DeepSeek"),jsx("label",{className:"provider-radio"},jsx(Input_bc45c3db440a8a6f61aa3741d387b0f3,{},),"OpenAI"),jsx("label",{className:"provider-radio"},jsx(Input_510f7356d49515fd295f65ff99e9fdc8,{},),"Anthropic"),jsx("label",{className:"provider-radio"},jsx(Input_35596d365e49dab9a9f64c8278923d4b,{},),"GLM (\u667a\u8c31)"),jsx("label",{className:"provider-radio"},jsx(Input_13516d449d2ecd96c459a68914ac7d58,{},),"Qwen (\u901a\u4e49)"),jsx("label",{className:"provider-radio"},jsx(Input_2cbf3fa0ec293c3c74203e345c4c50f8,{},),"MiniMax")),jsx("div",{className:"slider-group"},jsx("div",{className:"slider-header"},jsx("span",{className:"slider-label"},"TEMPERATURE"),jsx("div",{className:"slider-value-box"},jsx(Input_1e5e936efd821b353e264db500b9d6a2,{},),jsx(Button_4030465d4cfd6dcd5b089c07d18c3c60,{},))),jsx("div",{className:"slider-track-wrapper"},jsx("span",{className:"range-label"},"0"),jsx(Slider_f2b974f4b7efd2c92d577ed0a401f375,{},),jsx("span",{className:"range-label"},"2"))),jsx("div",{className:"slider-group"},jsx("div",{className:"slider-header"},jsx("span",{className:"slider-label"},"MAX TOKENS"),jsx("div",{className:"slider-value-box"},jsx(Input_3dda168a8cf33ca026739d0de1124910,{},),jsx(Button_be03fbe1faf9a70c1992ca6ac2dc16c5,{},))),jsx("div",{className:"slider-track-wrapper"},jsx("span",{className:"range-label"},"512"),jsx(Slider_5c0f794c1f825a53f427c9286d71fd71,{},),jsx("span",{className:"range-label"},"16384")))),jsx("div",{className:"provider-cards"},jsx(Div_4234b38fec2be4bc94104b92f1d24a38,{},),jsx(Div_36d91592d47c03b2b2b203efcd9bc912,{},),jsx(Div_03a8fe730221b34b3f195ceafb4e7d3a,{},),jsx(Div_c66e9a366b313ba2e790a23c3faeb0e1,{},),jsx(Div_9573a5bbc003391a39e6ce0fe46e033a,{},),jsx(Div_5a049a23e0c0e6b9263f3b7a9b6f8e85,{},)),jsx(Button_202f9a2f38c2eabde91375cf1d9a213a,{},),jsx(Fragment_578db6815419f6803b4a279621f25850,{},)))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Div_617326176b4c036bf1998bb057bee78a,{},),jsx("title",{},"SMAC-AST \u00b7 API \u914d\u7f6e"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}