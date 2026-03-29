import {Fragment,useCallback,useContext,useEffect} from "react"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined,isTrue} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import {Select as RadixThemesSelect,Slider as RadixThemesSlider} from "@radix-ui/themes"
import {jsx} from "@emotion/react"




function Select__root_5110493bf3d61d5468d25f7acb5dcb18 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_3a6f3ab7636ccda095d3bd8f9c4fce19 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_default_provider", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{onValueChange:on_change_3a6f3ab7636ccda095d3bd8f9c4fce19,value:reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : "240px" })},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"deepseek"},"deepseek"),jsx(RadixThemesSelect.Item,{value:"openai"},"openai"),jsx(RadixThemesSelect.Item,{value:"anthropic"},"anthropic"),jsx(RadixThemesSelect.Item,{value:"glm"},"glm"),jsx(RadixThemesSelect.Item,{value:"qwen"},"qwen"),jsx(RadixThemesSelect.Item,{value:"minimax"},"minimax"))))
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


function Input_969b08e3d91d8de3adb94fe852932ba7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_760014226fe1a5b546ded782f9454f8e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "deepseek", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_760014226fe1a5b546ded782f9454f8e,placeholder:"sk-...",type:"password"},)
  )
}


function Input_7f979cff438029193e945aa0e9ef557e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_f6fcc4ec7dbbfde9003a21519dbefe7d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "deepseek", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"https://api.deepseek.com",onChange:on_change_f6fcc4ec7dbbfde9003a21519dbefe7d},)
  )
}


function Input_fe1a201b6c96485e471eccdd1bdd2aa0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2c6ebc0735e3df0fd504243d9ba9cbe2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "deepseek", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"deepseek-chat",onChange:on_change_2c6ebc0735e3df0fd504243d9ba9cbe2},)
  )
}


function Div_04f7482475c2432820817c40da583ab3 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "deepseek"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_13cf1f02972b65af1d02a82ab9a0026c,{},),"DeepSeek"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_969b08e3d91d8de3adb94fe852932ba7,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_7f979cff438029193e945aa0e9ef557e,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_fe1a201b6c96485e471eccdd1bdd2aa0,{},))))
  )
}


function Span_a9880994bbf2d9fd59d29cca72fcad79 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "openai"?.valueOf?.()) ? ({ ["background"] : "#f59e0b", ["box_shadow"] : "0 0 8px #f59e0b" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_f84a84d710eaba688c63a58d8c5e4285 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a77dd2fd2457487ae1b31df998e89860 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "openai", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_a77dd2fd2457487ae1b31df998e89860,placeholder:"sk-...",type:"password"},)
  )
}


function Input_2b680531313ad9f968680a8a419b5c47 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_298b137dd871d411986cce5300bfaa37 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "openai", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"https://api.openai.com/v1",onChange:on_change_298b137dd871d411986cce5300bfaa37},)
  )
}


function Input_3621a6f17e08f4f56fb514047f78bd0b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_515e2be127d09bd9b376bb31f2f48195 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "openai", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"gpt-4o",onChange:on_change_515e2be127d09bd9b376bb31f2f48195},)
  )
}


function Div_5ce107b47382009ca84d450c927352ad () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "openai"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_a9880994bbf2d9fd59d29cca72fcad79,{},),"OpenAI"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_f84a84d710eaba688c63a58d8c5e4285,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_2b680531313ad9f968680a8a419b5c47,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_3621a6f17e08f4f56fb514047f78bd0b,{},))))
  )
}


function Span_4226863545d603c108215a3e36385a35 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "anthropic"?.valueOf?.()) ? ({ ["background"] : "#8b5cf6", ["box_shadow"] : "0 0 8px #8b5cf6" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_eafc21167302401555b2a9fc9a9a169f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_11b972afdc10a988996be4d83d85897e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "anthropic", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_11b972afdc10a988996be4d83d85897e,placeholder:"sk-...",type:"password"},)
  )
}


function Input_01547a559163aab37f7b5d038eb70bd9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_afdf70c5701b160d7e529a91ccefc6aa = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "anthropic", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"https://api.anthropic.com",onChange:on_change_afdf70c5701b160d7e529a91ccefc6aa},)
  )
}


function Input_323de88507332162ed635afaf4c6826b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_31eec965e2ef6f558be453ade883eaa0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "anthropic", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"claude-sonnet-4-20250514",onChange:on_change_31eec965e2ef6f558be453ade883eaa0},)
  )
}


function Div_61bf55bd6428df5da4880e6ea9b1633b () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "anthropic"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_4226863545d603c108215a3e36385a35,{},),"Anthropic"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_eafc21167302401555b2a9fc9a9a169f,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_01547a559163aab37f7b5d038eb70bd9,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_323de88507332162ed635afaf4c6826b,{},))))
  )
}


function Span_ab8220ab614431ed08ae465271a21336 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "glm"?.valueOf?.()) ? ({ ["background"] : "#38bdf8", ["box_shadow"] : "0 0 8px #38bdf8" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_2867e945abbbdebd3901ddf618a12053 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_6cc398c4bd2b81a9c329303e4db7cb14 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "glm", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_6cc398c4bd2b81a9c329303e4db7cb14,placeholder:"sk-...",type:"password"},)
  )
}


function Input_b5367c5da42a8dec8e56a2ea3a091c45 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_1929ade4be42d0e983b40bb1aca0dfb8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "glm", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"https://open.bigmodel.cn/api/paas/v4",onChange:on_change_1929ade4be42d0e983b40bb1aca0dfb8},)
  )
}


function Input_f9e8701eccbad8a1e6678634c7787e94 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_0f896d6c20bef6e05c27c9ed73096b45 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "glm", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"glm-4-plus",onChange:on_change_0f896d6c20bef6e05c27c9ed73096b45},)
  )
}


function Div_78911b81f22a8b18400abadba37434dd () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "glm"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_ab8220ab614431ed08ae465271a21336,{},),"GLM (\u667a\u8c31)"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_2867e945abbbdebd3901ddf618a12053,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_b5367c5da42a8dec8e56a2ea3a091c45,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_f9e8701eccbad8a1e6678634c7787e94,{},))))
  )
}


function Span_28056c5af71221d85ae6e3ed7ac75b90 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "qwen"?.valueOf?.()) ? ({ ["background"] : "#f472b6", ["box_shadow"] : "0 0 8px #f472b6" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_6e5b3722fbe03e082d314751518fc8e9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_02d220713a28d13e9d1f6d461d99a095 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "qwen", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_02d220713a28d13e9d1f6d461d99a095,placeholder:"sk-...",type:"password"},)
  )
}


function Input_b682de2384d15fbc08bff6b94fe159c2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2027386ec72769fe996e5ead0311a319 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "qwen", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"https://dashscope.aliyuncs.com/compatible-mode/v1",onChange:on_change_2027386ec72769fe996e5ead0311a319},)
  )
}


function Input_f6a926bc916b281040f1a42cb68a94e7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_dca296acf9d291f18b2b38c40c679454 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "qwen", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"qwen-plus",onChange:on_change_dca296acf9d291f18b2b38c40c679454},)
  )
}


function Div_fe7366794ff1fc2437512dbca24e7e46 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "qwen"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_28056c5af71221d85ae6e3ed7ac75b90,{},),"Qwen (\u901a\u4e49)"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_6e5b3722fbe03e082d314751518fc8e9,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_b682de2384d15fbc08bff6b94fe159c2,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_f6a926bc916b281040f1a42cb68a94e7,{},))))
  )
}


function Span_6863ac8e83998e5c239d927c2e450dc9 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("span",{className:"provider-dot",css:({ ["&"] : ((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "minimax"?.valueOf?.()) ? ({ ["background"] : "#fb923c", ["box_shadow"] : "0 0 8px #fb923c" }) : ({ ["background"] : "var(--text-muted)" })) })},)
  )
}


function Input_7dde1afd1af80086d9243ccb11d75fe3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a702f47cd2d28d505c47b82905094dee = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_apikey", ({ ["provider_key"] : "minimax", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_a702f47cd2d28d505c47b82905094dee,placeholder:"sk-...",type:"password"},)
  )
}


function Input_5b02fbbeab42c3f1f5a1cfd3252152d3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_6239f6a1d4f75f646f5049a723d59288 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_baseurl", ({ ["provider_key"] : "minimax", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"https://api.minimax.chat/v1",onChange:on_change_6239f6a1d4f75f646f5049a723d59288},)
  )
}


function Input_3ac1812bae9473239a4e535308f4732c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_51211880d2800b7da10d2af2307c8073 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.update_provider_model", ({ ["provider_key"] : "minimax", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",defaultValue:"MiniMax-Text-01",onChange:on_change_51211880d2800b7da10d2af2307c8073},)
  )
}


function Div_ff3d495ad8593ce887f25fce3513ddcd () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___config_state____config_state.default_provider_rx_state_?.valueOf?.() === "minimax"?.valueOf?.()) ? "provider-card provider-active" : "provider-card")},jsx("div",{className:"provider-card-header"},jsx(Span_6863ac8e83998e5c239d927c2e450dc9,{},),"MiniMax"),jsx("div",{className:"provider-card-body"},jsx("div",{},jsx("label",{className:"form-label"},"API KEY"),jsx(Input_7dde1afd1af80086d9243ccb11d75fe3,{},)),jsx("div",{},jsx("label",{className:"form-label"},"BASE URL"),jsx(Input_5b02fbbeab42c3f1f5a1cfd3252152d3,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u6a21\u578b\u540d"),jsx(Input_3ac1812bae9473239a4e535308f4732c,{},))))
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


function Div_e3fadb7f76b60d388e006b2a670b6e49 () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.on_load", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx("div",{},jsx("div",{className:"app-header"},jsx("div",{className:"logo-icon"},"S"),jsx("div",{},jsx("div",{className:"app-title"},"SMAC-AST"),jsx("div",{className:"app-subtitle"},"Automated Scalable Testbed-generator for StarCraft Multi-Agent Challenges"))),jsx("div",{className:"top-tabs"},jsx(ReactRouterLink,{className:"top-tab",to:"/"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\uddfa\ufe0f"),jsx("span",{},"\u751f\u6210\u5730\u56fe")),jsx(ReactRouterLink,{className:"top-tab active",to:"/api-config"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\udd27"),jsx("span",{},"API \u914d\u7f6e")),jsx(ReactRouterLink,{className:"top-tab",to:"/path-config"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\udcc1"),jsx("span",{},"\u8def\u5f84\u914d\u7f6e"))),jsx("div",{className:"config-page"},jsx("div",{className:"config-page-title"},"API \u63d0\u4f9b\u5546\u8bbe\u7f6e"),jsx("div",{className:"config-page-desc"},"\u914d\u7f6e\u540e\u70b9\u51fb\u4fdd\u5b58\uff0c\u4e0b\u6b21\u542f\u52a8\u81ea\u52a8\u52a0\u8f7d\u3002"),jsx("div",{className:"api-defaults-card"},jsx("div",{className:"card-label"},"\u9ed8\u8ba4\u63d0\u4f9b\u5546"),jsx(Select__root_5110493bf3d61d5468d25f7acb5dcb18,{},),jsx("div",{className:"slider-group"},jsx("div",{className:"slider-header"},jsx("span",{className:"slider-label"},"TEMPERATURE"),jsx(Input_1e5e936efd821b353e264db500b9d6a2,{},)),jsx(Slider_f2b974f4b7efd2c92d577ed0a401f375,{},)),jsx("div",{className:"slider-group"},jsx("div",{className:"slider-header"},jsx("span",{className:"slider-label"},"MAX TOKENS"),jsx(Input_3dda168a8cf33ca026739d0de1124910,{},)),jsx(Slider_5c0f794c1f825a53f427c9286d71fd71,{},))),jsx("div",{className:"provider-cards"},jsx(Div_04f7482475c2432820817c40da583ab3,{},),jsx(Div_5ce107b47382009ca84d450c927352ad,{},),jsx(Div_61bf55bd6428df5da4880e6ea9b1633b,{},),jsx(Div_78911b81f22a8b18400abadba37434dd,{},),jsx(Div_fe7366794ff1fc2437512dbca24e7e46,{},),jsx(Div_ff3d495ad8593ce887f25fce3513ddcd,{},)),jsx(Button_202f9a2f38c2eabde91375cf1d9a213a,{},),jsx(Fragment_578db6815419f6803b4a279621f25850,{},)))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Div_e3fadb7f76b60d388e006b2a670b6e49,{},),jsx("title",{},"SMAC-AST \u00b7 API \u914d\u7f6e"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}