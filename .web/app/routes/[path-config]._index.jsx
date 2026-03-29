import {Fragment,useCallback,useContext,useEffect} from "react"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined,isTrue} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import {jsx} from "@emotion/react"




function Input_385f60fcae77d34d63af91d9d2056059 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_da1cc773fa99e27e99979189b9a41969 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_upload_dir", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_da1cc773fa99e27e99979189b9a41969,placeholder:"uploads",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.upload_dir_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.upload_dir_rx_state_ : "")},)
  )
}


function Input_1f702dbcd068f003ece7752752111e52 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9c88f15ecb57386ef9fb4ca18dda8bb7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_maps_dir", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_9c88f15ecb57386ef9fb4ca18dda8bb7,placeholder:"maps",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.maps_dir_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.maps_dir_rx_state_ : "")},)
  )
}


function Input_b87029488ffbb483ceed4cb6d6b9da6d () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9c26aaedce44ef96254ff2a06b7180bf = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_history_dir", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_9c26aaedce44ef96254ff2a06b7180bf,placeholder:"gen_history",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.history_dir_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.history_dir_rx_state_ : "")},)
  )
}


function Input_5cbf70dc7368a8b7786b9a5208fe7cd2 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9d80a71dcab95fdd6872f472722c330a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_base_map_path", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_9d80a71dcab95fdd6872f472722c330a,placeholder:"maps/raw2.SC2Map",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.base_map_path_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.base_map_path_rx_state_ : "")},)
  )
}


function Input_a9492dd46951f968f334553a03f391c6 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2ab669c7a9f2fbd12224646011de787a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.set_api_json_path", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_2ab669c7a9f2fbd12224646011de787a,placeholder:"database/api.json",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___config_state____config_state.api_json_path_rx_state_) ? reflex___state____state__sc2_map_forge___states___config_state____config_state.api_json_path_rx_state_ : "")},)
  )
}


function Button_0230e8e106b6beb8b4893dd3fa222bb3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6bf2a7e1938f7d938c9ee5e3203c94e6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.save_path_config", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"save-btn",onClick:on_click_6bf2a7e1938f7d938c9ee5e3203c94e6},"\ud83d\udcbe \u4fdd\u5b58\u8def\u5f84\u914d\u7f6e")
  )
}


function Div_8645952e278fea062c452bc2304e219f () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx("div",{css:({ ["fontSize"] : "12px", ["color"] : "var(--text-muted)", ["marginTop"] : "12px", ["padding"] : "10px 14px", ["background"] : "var(--bg-card)", ["border"] : "1px solid var(--border)", ["borderRadius"] : "8px" })},reflex___state____state__sc2_map_forge___states___config_state____config_state.path_save_msg_rx_state_)
  )
}


function Fragment_d4174d00563daa7aae874d965b4c36d9 () {
  const reflex___state____state__sc2_map_forge___states___config_state____config_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state)



  return (
    jsx(Fragment,{},(!((reflex___state____state__sc2_map_forge___states___config_state____config_state.path_save_msg_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx("div",{},jsx(Div_8645952e278fea062c452bc2304e219f,{},)))):(jsx(Fragment,{},))))
  )
}


function Div_85499bf2d715d16805b2ab1b83a41a1f () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___config_state____config_state.on_load", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx("div",{},jsx("div",{className:"app-header"},jsx("div",{className:"logo-icon"},"S"),jsx("div",{},jsx("div",{className:"app-title"},"SMAC-AST"),jsx("div",{className:"app-subtitle"},"Automated Scalable Testbed-generator for StarCraft Multi-Agent Challenges"))),jsx("div",{className:"top-tabs"},jsx(ReactRouterLink,{className:"top-tab",to:"/"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\uddfa\ufe0f"),jsx("span",{},"\u751f\u6210\u5730\u56fe")),jsx(ReactRouterLink,{className:"top-tab",to:"/api-config"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\udd27"),jsx("span",{},"API \u914d\u7f6e")),jsx(ReactRouterLink,{className:"top-tab active",to:"/path-config"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\udcc1"),jsx("span",{},"\u8def\u5f84\u914d\u7f6e"))),jsx("div",{className:"config-page"},jsx("div",{className:"config-page-title"},"\u6587\u4ef6\u8def\u5f84\u8bbe\u7f6e"),jsx("div",{className:"config-page-desc"},"\u914d\u7f6e\u9879\u76ee\u6587\u4ef6\u8def\u5f84\uff0c\u4fdd\u5b58\u540e\u751f\u6548\u3002"),jsx("div",{className:"path-form"},jsx("div",{},jsx("label",{className:"form-label"},"\u4e0a\u4f20\u76ee\u5f55"),jsx(Input_385f60fcae77d34d63af91d9d2056059,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u5730\u56fe\u8f93\u51fa\u76ee\u5f55"),jsx(Input_1f702dbcd068f003ece7752752111e52,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u811a\u672c\u8f93\u51fa\u76ee\u5f55"),jsx(Input_b87029488ffbb483ceed4cb6d6b9da6d,{},)),jsx("div",{},jsx("label",{className:"form-label"},"\u57fa\u7840\u5730\u56fe\u6587\u4ef6\u8def\u5f84"),jsx(Input_5cbf70dc7368a8b7786b9a5208fe7cd2,{},)),jsx("div",{},jsx("label",{className:"form-label"},"API \u5e93 JSON \u8def\u5f84"),jsx(Input_a9492dd46951f968f334553a03f391c6,{},))),jsx(Button_0230e8e106b6beb8b4893dd3fa222bb3,{},),jsx(Fragment_d4174d00563daa7aae874d965b4c36d9,{},)))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Div_85499bf2d715d16805b2ab1b83a41a1f,{},),jsx("title",{},"SMAC-AST \u00b7 \u8def\u5f84\u914d\u7f6e"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}