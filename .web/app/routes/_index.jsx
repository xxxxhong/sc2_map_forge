import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Link as ReactRouterLink} from "react-router"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined,isTrue,refs} from "$/utils/state"
import {Box as RadixThemesBox,Flex as RadixThemesFlex,Select as RadixThemesSelect,Spinner as RadixThemesSpinner,Text as RadixThemesText} from "@radix-ui/themes"
import {} from "react-dropzone"
import {useDropzone} from "react-dropzone"
import {jsx} from "@emotion/react"




function Button_d794ff66aae494badbbc5739980177f3 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_904e8505dfbc9bf1d1a0d93d890f2b81 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.set_mode", ({ ["mode"] : "macro" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.mode_rx_state_?.valueOf?.() === "macro"?.valueOf?.()) ? "mode-btn active" : "mode-btn"),onClick:on_click_904e8505dfbc9bf1d1a0d93d890f2b81},"MACRO")
  )
}


function Button_40661ab4ec10e3b4d4e3024f8c2abd98 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_714ebcf0adc5ed12c133fdc0a1eb4561 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.set_mode", ({ ["mode"] : "micro" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.mode_rx_state_?.valueOf?.() === "micro"?.valueOf?.()) ? "mode-btn active" : "mode-btn"),onClick:on_click_714ebcf0adc5ed12c133fdc0a1eb4561},"MICRO")
  )
}


function Select__root_2febe5bba2c3dc17ee8a51d8bd8c2616 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_ad30002f7ce96b3a792edd53bd7ee976 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.set_stratagem_by_label", ({ ["label"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{className:"form-select",onValueChange:on_change_ad30002f7ce96b3a792edd53bd7ee976},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : "100%" }),placeholder:"\u2014 \u8bf7\u9009\u62e9\u8ba1\u7b56 \u2014"},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e00\u8ba1 \u00b7 \u7792\u5929\u8fc7\u6d77"},"\u7b2c\u4e00\u8ba1 \u00b7 \u7792\u5929\u8fc7\u6d77"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u8ba1 \u00b7 \u56f4\u9b4f\u6551\u8d75"},"\u7b2c\u4e8c\u8ba1 \u00b7 \u56f4\u9b4f\u6551\u8d75"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e09\u8ba1 \u00b7 \u501f\u5200\u6740\u4eba"},"\u7b2c\u4e09\u8ba1 \u00b7 \u501f\u5200\u6740\u4eba"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u56db\u8ba1 \u00b7 \u4ee5\u9038\u5f85\u52b3"},"\u7b2c\u56db\u8ba1 \u00b7 \u4ee5\u9038\u5f85\u52b3"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e94\u8ba1 \u00b7 \u8d81\u706b\u6253\u52ab"},"\u7b2c\u4e94\u8ba1 \u00b7 \u8d81\u706b\u6253\u52ab"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u516d\u8ba1 \u00b7 \u58f0\u4e1c\u51fb\u897f"},"\u7b2c\u516d\u8ba1 \u00b7 \u58f0\u4e1c\u51fb\u897f"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e03\u8ba1 \u00b7 \u65e0\u4e2d\u751f\u6709"},"\u7b2c\u4e03\u8ba1 \u00b7 \u65e0\u4e2d\u751f\u6709"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u516b\u8ba1 \u00b7 \u6697\u5ea6\u9648\u4ed3"},"\u7b2c\u516b\u8ba1 \u00b7 \u6697\u5ea6\u9648\u4ed3"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e5d\u8ba1 \u00b7 \u9694\u5cb8\u89c2\u706b"},"\u7b2c\u4e5d\u8ba1 \u00b7 \u9694\u5cb8\u89c2\u706b"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u8ba1 \u00b7 \u7b11\u91cc\u85cf\u5200"},"\u7b2c\u5341\u8ba1 \u00b7 \u7b11\u91cc\u85cf\u5200"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u4e00\u8ba1 \u00b7 \u674e\u4ee3\u6843\u50f5"},"\u7b2c\u5341\u4e00\u8ba1 \u00b7 \u674e\u4ee3\u6843\u50f5"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u4e8c\u8ba1 \u00b7 \u987a\u624b\u7275\u7f8a"},"\u7b2c\u5341\u4e8c\u8ba1 \u00b7 \u987a\u624b\u7275\u7f8a"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u4e09\u8ba1 \u00b7 \u6253\u8349\u60ca\u86c7"},"\u7b2c\u5341\u4e09\u8ba1 \u00b7 \u6253\u8349\u60ca\u86c7"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u56db\u8ba1 \u00b7 \u501f\u5c38\u8fd8\u9b42"},"\u7b2c\u5341\u56db\u8ba1 \u00b7 \u501f\u5c38\u8fd8\u9b42"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u4e94\u8ba1 \u00b7 \u8c03\u864e\u79bb\u5c71"},"\u7b2c\u5341\u4e94\u8ba1 \u00b7 \u8c03\u864e\u79bb\u5c71"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u516d\u8ba1 \u00b7 \u6b32\u64d2\u6545\u7eb5"},"\u7b2c\u5341\u516d\u8ba1 \u00b7 \u6b32\u64d2\u6545\u7eb5"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u4e03\u8ba1 \u00b7 \u629b\u7816\u5f15\u7389"},"\u7b2c\u5341\u4e03\u8ba1 \u00b7 \u629b\u7816\u5f15\u7389"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u516b\u8ba1 \u00b7 \u64d2\u8d3c\u64d2\u738b"},"\u7b2c\u5341\u516b\u8ba1 \u00b7 \u64d2\u8d3c\u64d2\u738b"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u5341\u4e5d\u8ba1 \u00b7 \u91dc\u5e95\u62bd\u85aa"},"\u7b2c\u5341\u4e5d\u8ba1 \u00b7 \u91dc\u5e95\u62bd\u85aa"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u8ba1 \u00b7 \u6d51\u6c34\u6478\u9c7c"},"\u7b2c\u4e8c\u5341\u8ba1 \u00b7 \u6d51\u6c34\u6478\u9c7c"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u4e00\u8ba1 \u00b7 \u91d1\u8749\u8131\u58f3"},"\u7b2c\u4e8c\u5341\u4e00\u8ba1 \u00b7 \u91d1\u8749\u8131\u58f3"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u4e8c\u8ba1 \u00b7 \u5173\u95e8\u6349\u8d3c"},"\u7b2c\u4e8c\u5341\u4e8c\u8ba1 \u00b7 \u5173\u95e8\u6349\u8d3c"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u4e09\u8ba1 \u00b7 \u8fdc\u4ea4\u8fd1\u653b"},"\u7b2c\u4e8c\u5341\u4e09\u8ba1 \u00b7 \u8fdc\u4ea4\u8fd1\u653b"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u56db\u8ba1 \u00b7 \u5047\u9053\u4f10\u8662"},"\u7b2c\u4e8c\u5341\u56db\u8ba1 \u00b7 \u5047\u9053\u4f10\u8662"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u4e94\u8ba1 \u00b7 \u5077\u6881\u6362\u67f1"},"\u7b2c\u4e8c\u5341\u4e94\u8ba1 \u00b7 \u5077\u6881\u6362\u67f1"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u516d\u8ba1 \u00b7 \u6307\u6851\u9a82\u69d0"},"\u7b2c\u4e8c\u5341\u516d\u8ba1 \u00b7 \u6307\u6851\u9a82\u69d0"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u4e03\u8ba1 \u00b7 \u5047\u75f4\u4e0d\u766b"},"\u7b2c\u4e8c\u5341\u4e03\u8ba1 \u00b7 \u5047\u75f4\u4e0d\u766b"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u516b\u8ba1 \u00b7 \u4e0a\u5c4b\u62bd\u68af"},"\u7b2c\u4e8c\u5341\u516b\u8ba1 \u00b7 \u4e0a\u5c4b\u62bd\u68af"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e8c\u5341\u4e5d\u8ba1 \u00b7 \u6811\u4e0a\u5f00\u82b1"},"\u7b2c\u4e8c\u5341\u4e5d\u8ba1 \u00b7 \u6811\u4e0a\u5f00\u82b1"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e09\u5341\u8ba1 \u00b7 \u53cd\u5ba2\u4e3a\u4e3b"},"\u7b2c\u4e09\u5341\u8ba1 \u00b7 \u53cd\u5ba2\u4e3a\u4e3b"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e09\u5341\u4e00\u8ba1 \u00b7 \u7f8e\u4eba\u8ba1"},"\u7b2c\u4e09\u5341\u4e00\u8ba1 \u00b7 \u7f8e\u4eba\u8ba1"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e09\u5341\u4e8c\u8ba1 \u00b7 \u7a7a\u57ce\u8ba1"},"\u7b2c\u4e09\u5341\u4e8c\u8ba1 \u00b7 \u7a7a\u57ce\u8ba1"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e09\u5341\u4e09\u8ba1 \u00b7 \u53cd\u95f4\u8ba1"},"\u7b2c\u4e09\u5341\u4e09\u8ba1 \u00b7 \u53cd\u95f4\u8ba1"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e09\u5341\u56db\u8ba1 \u00b7 \u82e6\u8089\u8ba1"},"\u7b2c\u4e09\u5341\u56db\u8ba1 \u00b7 \u82e6\u8089\u8ba1"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e09\u5341\u4e94\u8ba1 \u00b7 \u8fde\u73af\u8ba1"},"\u7b2c\u4e09\u5341\u4e94\u8ba1 \u00b7 \u8fde\u73af\u8ba1"),jsx(RadixThemesSelect.Item,{value:"\u7b2c\u4e09\u5341\u516d\u8ba1 \u00b7 \u8d70\u4e3a\u4e0a"},"\u7b2c\u4e09\u5341\u516d\u8ba1 \u00b7 \u8d70\u4e3a\u4e0a"))))
  )
}


function Textarea_ea507ac6adccdf4d0cfc32e19ce20094 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2e8f86d892ca87d666adcdbe4022d62a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.set_strategy_text", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("textarea",{className:"form-textarea",onChange:on_change_2e8f86d892ca87d666adcdbe4022d62a,placeholder:"\u63cf\u8ff0\u4f60\u60f3\u751f\u6210\u7684\u573a\u666f\uff0c\u4f8b\u5982 'A defensive position with siege tanks on high ground against Zerg ground assault...'",value:reflex___state____state__sc2_map_forge___states___generation_state____generation_state.strategy_text_rx_state_},)
  )
}


function Fragment_4a0904591133850453bd74dad1e1668f () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},(reflex___state____state__sc2_map_forge___states___generation_state____generation_state.is_macro_rx_state_?(jsx(Fragment,{},jsx("div",{className:"section"},jsx("div",{className:"section-header"},jsx("span",{className:"dot"},),"SCENARIO INPUT"),jsx("div",{className:"section-body"},jsx("div",{css:({ ["marginBottom"] : "14px" })},jsx("label",{className:"form-label"},"Stratagem (\u4e09\u5341\u516d\u8ba1)"),jsx(Select__root_2febe5bba2c3dc17ee8a51d8bd8c2616,{},)),jsx("div",{},jsx(Textarea_ea507ac6adccdf4d0cfc32e19ce20094,{},)))))):(jsx(Fragment,{},))))
  )
}


function Button_ba583d9a37b4bd7ddfac3ba14c0b6144 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_965c74241530ca610d628a0eef7c65a2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.toggle_player_race", ({ ["race"] : "Terran" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.player_race_rx_state_?.valueOf?.() === "Terran"?.valueOf?.()) ? "race-chip selected" : "race-chip"),onClick:on_click_965c74241530ca610d628a0eef7c65a2},"Terran")
  )
}


function Button_bed03b4a9b617e6ac7215ba0f6856275 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_104089f42da29c2946270e9f459f9b18 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.toggle_player_race", ({ ["race"] : "Protoss" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.player_race_rx_state_?.valueOf?.() === "Protoss"?.valueOf?.()) ? "race-chip selected" : "race-chip"),onClick:on_click_104089f42da29c2946270e9f459f9b18},"Protoss")
  )
}


function Button_2b1dd343f9f25b51b1d651a538109f8f () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_a6bb8645dd7fa2b0d6c9912e8422d4c9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.toggle_player_race", ({ ["race"] : "Zerg" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.player_race_rx_state_?.valueOf?.() === "Zerg"?.valueOf?.()) ? "race-chip selected" : "race-chip"),onClick:on_click_a6bb8645dd7fa2b0d6c9912e8422d4c9},"Zerg")
  )
}


function Button_4b5e4d5185c9659a35318460c055e943 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_03ff24a1ce038fba0a41c81d47721b7c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.toggle_enemy_race", ({ ["race"] : "Terran" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.enemy_race_rx_state_?.valueOf?.() === "Terran"?.valueOf?.()) ? "race-chip selected" : "race-chip"),onClick:on_click_03ff24a1ce038fba0a41c81d47721b7c},"Terran")
  )
}


function Button_836193ad46dd813299fcea1d82953948 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_589600a4d8a2a111b281364170f1e6b0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.toggle_enemy_race", ({ ["race"] : "Protoss" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.enemy_race_rx_state_?.valueOf?.() === "Protoss"?.valueOf?.()) ? "race-chip selected" : "race-chip"),onClick:on_click_589600a4d8a2a111b281364170f1e6b0},"Protoss")
  )
}


function Button_71adecddec1b04c4dd7e40ad9b4f6ba4 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_dd9a055877df395f8f0f3bcef67725ee = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.toggle_enemy_race", ({ ["race"] : "Zerg" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.enemy_race_rx_state_?.valueOf?.() === "Zerg"?.valueOf?.()) ? "race-chip selected" : "race-chip"),onClick:on_click_dd9a055877df395f8f0f3bcef67725ee},"Zerg")
  )
}


function Input_7d0f3e11f13531fb8fe5947eeb1a6086 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_960e98bc3dc9f18bb96586c03b4d55b8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.set_player_count", ({ ["value"] : (Number(_e?.["target"]?.["value"])) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_960e98bc3dc9f18bb96586c03b4d55b8,placeholder:"e.g., 10",type:"number",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___generation_state____generation_state.player_unit_count_rx_state_) ? reflex___state____state__sc2_map_forge___states___generation_state____generation_state.player_unit_count_rx_state_ : "")},)
  )
}


function Input_0cedc9f535a07161c14f3335b6db74e2 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_bb533578340cd59c531a5c6150cdf3f9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.set_enemy_count", ({ ["value"] : (Number(_e?.["target"]?.["value"])) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"form-input",onChange:on_change_bb533578340cd59c531a5c6150cdf3f9,placeholder:"e.g., 10",type:"number",value:(isNotNullOrUndefined(reflex___state____state__sc2_map_forge___states___generation_state____generation_state.enemy_unit_count_rx_state_) ? reflex___state____state__sc2_map_forge___states___generation_state____generation_state.enemy_unit_count_rx_state_ : "")},)
  )
}


function Comp_524a78d4f5bf02c1b56182616a239f8e () {
  const ref_terrain_upload = useRef(null); refs["ref_terrain_upload"] = ref_terrain_upload;
const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_drop_bbe54a2902afdb38587de22f98f3fe2e = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.handle_upload", ({ ["files"] : _ev_0, ["upload_id"] : "terrain_upload", ["extra_headers"] : ({  }) }), ({  }), "uploadFiles"))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs['__toast']?.["error"]("", ({ ["title"] : "Files not Accepted", ["description"] : _ev_0.map(((osizayzf) => (osizayzf?.["file"]?.["path"]+": "+osizayzf?.["errors"].map(((wnkiegyk) => wnkiegyk?.["message"])).join(", ")))).join("\n\n"), ["closeButton"] : true, ["style"] : ({ ["whiteSpace"] : "pre-line" }) })))), ["callback"] : null }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const { getRootProps: xdvxrcsn, getInputProps: udaxihhe, isDragActive: bacghqta} = useDropzone(({ ["onDrop"] : on_drop_bbe54a2902afdb38587de22f98f3fe2e, ["multiple"] : true, ["id"] : "terrain_upload", ["onDropRejected"] : on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 }));
const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{className:"rx-Upload",css:({ ["border"] : "none", ["padding"] : "0", ["textAlign"] : "center" }),id:"terrain_upload",ref:ref_terrain_upload,...xdvxrcsn()},jsx("input",{type:"file",...udaxihhe()},),jsx("div",{css:({ ["textAlign"] : "center", ["padding"] : "20px" })},jsx(Fragment,{},(!((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.uploaded_filename_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx("div",{},jsx("div",{css:({ ["color"] : "var(--accent-green)", ["fontSize"] : "13px", ["fontWeight"] : "600" })},"\u2713 ",reflex___state____state__sc2_map_forge___states___generation_state____generation_state.uploaded_filename_rx_state_),jsx("div",{css:({ ["fontSize"] : "12px", ["color"] : "var(--text-muted)", ["marginTop"] : "4px" })},"\u70b9\u51fb\u66ff\u6362")))):(jsx(Fragment,{},jsx("div",{},jsx("div",{css:({ ["fontSize"] : "28px", ["opacity"] : "0.5" })},"\u2b21"),jsx("div",{css:({ ["fontSize"] : "13px", ["color"] : "var(--text-muted)" })},"\u70b9\u51fb\u4e0a\u4f20 .SC2Map \u6587\u4ef6")))))))))
  )
}


function Div_d682b459bade157c357a5bed709e8a4e () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:(!((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.uploaded_filename_rx_state_?.valueOf?.() === ""?.valueOf?.())) ? "file-upload has-file" : "file-upload")},jsx(Comp_524a78d4f5bf02c1b56182616a239f8e,{},))
  )
}


function Fragment_d4023029862a699ca8d5176636d35692 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},(reflex___state____state__sc2_map_forge___states___generation_state____generation_state.is_generating_rx_state_?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"2"},jsx(RadixThemesSpinner,{size:"1"},),jsx(RadixThemesText,{as:"p"},"GENERATING...")))):(jsx(Fragment,{},jsx(RadixThemesText,{as:"p"},"\u25b6 GENERATE")))))
  )
}


function Button_a4266a99ac6a3267bf1aa5aee379fbb4 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_aa742dee05bc32d93c93d81029ec1f16 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.start_generation", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"generate-btn",disabled:reflex___state____state__sc2_map_forge___states___generation_state____generation_state.is_generating_rx_state_,onClick:on_click_aa742dee05bc32d93c93d81029ec1f16},jsx(Fragment_d4023029862a699ca8d5176636d35692,{},))
  )
}


function Div_bb7de042726add04a28398f7779f170a () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:"stage-status"},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(0))
  )
}


function Div_0b89dc006c3d038ba955385e2a48b71b () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_0fe83d68b92bba41f88a0057c00ce95e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.view_stage", ({ ["idx"] : 0 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(0)?.valueOf?.() === "done"?.valueOf?.()) ? "stage-node completed" : ((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.active_stage_rx_state_?.valueOf?.() === 0?.valueOf?.()) ? "stage-node active" : "stage-node")),onClick:on_click_0fe83d68b92bba41f88a0057c00ce95e},jsx("div",{className:"stage-num"},"1"),jsx("div",{},jsx("div",{className:"stage-label"},"PLANNING"),jsx(Div_bb7de042726add04a28398f7779f170a,{},)))
  )
}


function Div_432ee2c59ade523636217fb96e926a22 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(0)?.valueOf?.() === "done"?.valueOf?.()) ? "stage-connector completed" : "stage-connector")},)
  )
}


function Div_bedb81af4827a56a285d83cf26c459a2 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:"stage-status"},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(1))
  )
}


function Div_1c464c51f83fd464e0c8338a3ac0fa74 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e40d80cd1f39072b8a2b4d82ed08f5f8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.view_stage", ({ ["idx"] : 1 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(1)?.valueOf?.() === "done"?.valueOf?.()) ? "stage-node completed" : ((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.active_stage_rx_state_?.valueOf?.() === 1?.valueOf?.()) ? "stage-node active" : "stage-node")),onClick:on_click_e40d80cd1f39072b8a2b4d82ed08f5f8},jsx("div",{className:"stage-num"},"2"),jsx("div",{},jsx("div",{className:"stage-label"},"API QUERY"),jsx(Div_bedb81af4827a56a285d83cf26c459a2,{},)))
  )
}


function Div_9d29bca6724acd094d7d7d19ad33d308 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(1)?.valueOf?.() === "done"?.valueOf?.()) ? "stage-connector completed" : "stage-connector")},)
  )
}


function Div_8ea88b992ae7b15d3cd46931d27846cd () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:"stage-status"},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(2))
  )
}


function Div_9464fe8164b7ab98794e813548c202d8 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_c37bd5151db49e644621f307072def71 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.view_stage", ({ ["idx"] : 2 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(2)?.valueOf?.() === "done"?.valueOf?.()) ? "stage-node completed" : ((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.active_stage_rx_state_?.valueOf?.() === 2?.valueOf?.()) ? "stage-node active" : "stage-node")),onClick:on_click_c37bd5151db49e644621f307072def71},jsx("div",{className:"stage-num"},"3"),jsx("div",{},jsx("div",{className:"stage-label"},"API LIB"),jsx(Div_8ea88b992ae7b15d3cd46931d27846cd,{},)))
  )
}


function Div_4b014c3ef1d016ac362c0b41a2760b43 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(2)?.valueOf?.() === "done"?.valueOf?.()) ? "stage-connector completed" : "stage-connector")},)
  )
}


function Div_8ac8698d7942d005f4aaa703dbb253a3 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:"stage-status"},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(3))
  )
}


function Div_df5bcafd1d4304654adcff21ae2e6c0f () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_d85794531fc15a2e2108a839941b00a3 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.view_stage", ({ ["idx"] : 3 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.stage_statuses_rx_state_?.at?.(3)?.valueOf?.() === "done"?.valueOf?.()) ? "stage-node completed" : ((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.active_stage_rx_state_?.valueOf?.() === 3?.valueOf?.()) ? "stage-node active" : "stage-node")),onClick:on_click_d85794531fc15a2e2108a839941b00a3},jsx("div",{className:"stage-num"},"4"),jsx("div",{},jsx("div",{className:"stage-label"},"CODEGEN"),jsx(Div_8ac8698d7942d005f4aaa703dbb253a3,{},)))
  )
}


function Div_ca0de0c139c3c94df9e79387a29ac7c6 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:"panel-title"},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_title_rx_state_)
  )
}


function Div_81ed538320bb5c0262cbe9465369a6fd () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{className:((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_status_rx_state_?.valueOf?.() === "running"?.valueOf?.()) ? "panel-badge badge-running" : ((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_status_rx_state_?.valueOf?.() === "done"?.valueOf?.()) ? "panel-badge badge-done" : "panel-badge badge-waiting"))},((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_status_rx_state_?.valueOf?.() === "running"?.valueOf?.()) ? "RUNNING" : ((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_status_rx_state_?.valueOf?.() === "done"?.valueOf?.()) ? "COMPLETE" : "WAITING")))
  )
}


function Pre_8f2cbf847bc94a683f9a2d4b4ae6cac6 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("pre",{},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_output_rx_state_)
  )
}


function P_69182f7319ebea732fb9661902a804b8 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("p",{},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_desc_rx_state_)
  )
}


function Fragment_a5be411243491244efe0192ea1954093 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_status_rx_state_?.valueOf?.() === "running"?.valueOf?.())?(jsx(Fragment,{},jsx("div",{className:"empty-state"},jsx("div",{className:"icon-large",css:({ ["animation"] : "spin 2s linear infinite" })},"\u27f3"),jsx(P_69182f7319ebea732fb9661902a804b8,{},)))):(jsx(Fragment,{},jsx("div",{className:"empty-state"},jsx("div",{className:"icon-large"},"\u2b21"),jsx("p",{},"\u914d\u7f6e\u53c2\u6570\u540e\u70b9\u51fb GENERATE \u542f\u52a8 Pipeline"))))))
  )
}


function Fragment_ecf1e77d5ca0223ff9c91f128f186a7a () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},(!((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.current_stage_output_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(Pre_8f2cbf847bc94a683f9a2d4b4ae6cac6,{},))):(jsx(Fragment_a5be411243491244efe0192ea1954093,{},))))
  )
}


function Button_ea4e07a1fd1f0d82ac491e494008861a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7cdcff9d387cb1fd91b56bc84c567a99 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.download_all", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"out-action-btn",onClick:on_click_7cdcff9d387cb1fd91b56bc84c567a99},"\u4e0b\u8f7d")
  )
}


function Fragment_0a74a69f18274cec025a44a5a94ae6a8 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},(reflex___state____state__sc2_map_forge___states___generation_state____generation_state.map_ready_rx_state_?(jsx(Fragment,{},jsx(Button_ea4e07a1fd1f0d82ac491e494008861a,{},))):(jsx(Fragment,{},))))
  )
}


function Div_34759260bbcf1f31d975ccebef9d9b83 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{css:({ ["fontSize"] : "14px", ["fontWeight"] : "700", ["color"] : "var(--text-primary)" })},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.uploaded_filename_rx_state_)
  )
}


function Div_7eb43eae46ebb686b5aa8862dca5620c () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("div",{css:({ ["fontSize"] : "11px", ["color"] : "var(--accent-cyan)", ["marginTop"] : "8px", ["wordBreak"] : "break-all" })},"\ud83d\udcc1 ",reflex___state____state__sc2_map_forge___states___generation_state____generation_state.output_dir_rx_state_)
  )
}


function Button_8da5765992697d92efc1b6f4762056ea () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7cdcff9d387cb1fd91b56bc84c567a99 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.download_all", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"sc2map-download-btn",onClick:on_click_7cdcff9d387cb1fd91b56bc84c567a99},"\u2b07 \u67e5\u770b\u8f93\u51fa\u76ee\u5f55")
  )
}


function Fragment_c02ec4371f5a58085477305bf662ff54 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},(reflex___state____state__sc2_map_forge___states___generation_state____generation_state.map_ready_rx_state_?(jsx(Fragment,{},jsx("div",{className:"sc2map-download-area"},jsx("div",{className:"sc2map-icon"},"\u2b21"),jsx("div",{css:({ ["textAlign"] : "center" })},jsx(Div_34759260bbcf1f31d975ccebef9d9b83,{},),jsx("div",{css:({ ["fontSize"] : "12px", ["color"] : "var(--text-muted)" })},"\u5305\u542b MapScript.galaxy \u00b7 \u5c31\u7eea"),jsx(Div_7eb43eae46ebb686b5aa8862dca5620c,{},)),jsx(Button_8da5765992697d92efc1b6f4762056ea,{},)))):(jsx(Fragment,{},jsx("div",{className:"output-empty"},jsx("div",{className:"out-icon"},"\u2b21"),jsx("p",{},"\u751f\u6210\u5b8c\u6210\u540e\u53ef\u4e0b\u8f7d .SC2Map \u6587\u4ef6"))))))
  )
}


function Button_e8eee6d02d376dbb21dac7cd302e0aa0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7dde1b2629d125e8e60c0d3e1989dc8f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.sc2_map_forge___states___generation_state____generation_state.download_galaxy", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"out-action-btn",onClick:on_click_7dde1b2629d125e8e60c0d3e1989dc8f},"\u4e0b\u8f7d")
  )
}


function Fragment_23ea7d2b31cfd9eeddcf211d45997d15 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},(!((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.galaxy_code_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(Button_e8eee6d02d376dbb21dac7cd302e0aa0,{},))):(jsx(Fragment,{},))))
  )
}


function Pre_3e0f9cf4e087a77a71d7a22c6813ebf5 () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("pre",{},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.galaxy_code_rx_state_)
  )
}


function Fragment_cba8380ee3885b10c28e3de38878031d () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},(!((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.galaxy_code_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(Pre_3e0f9cf4e087a77a71d7a22c6813ebf5,{},))):(jsx(Fragment,{},jsx("div",{className:"output-empty"},jsx("div",{className:"out-icon"},"{ }"),jsx("p",{},"Galaxy \u811a\u672c\u4ee3\u7801\u9884\u89c8"))))))
  )
}


function Pre_82ec46b14d23382f45cbf3cd19894ebb () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx("pre",{},reflex___state____state__sc2_map_forge___states___generation_state____generation_state.python_code_rx_state_)
  )
}


function Fragment_2049110a848ac8f63267482157d95dcf () {
  const reflex___state____state__sc2_map_forge___states___generation_state____generation_state = useContext(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state)



  return (
    jsx(Fragment,{},(!((reflex___state____state__sc2_map_forge___states___generation_state____generation_state.python_code_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(Pre_82ec46b14d23382f45cbf3cd19894ebb,{},))):(jsx(Fragment,{},jsx("div",{className:"output-empty"},jsx("div",{className:"out-icon"},"\ud83d\udc0d"),jsx("p",{},"Python \u73af\u5883\u4ee3\u7801\u9884\u89c8"))))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx("div",{},jsx("div",{className:"app-header"},jsx("div",{className:"logo-icon"},"S"),jsx("div",{},jsx("div",{className:"app-title"},"SMAC-AST"),jsx("div",{className:"app-subtitle"},"Automated Scalable Testbed-generator for StarCraft Multi-Agent Challenges"))),jsx("div",{className:"top-tabs"},jsx(ReactRouterLink,{className:"top-tab active",to:"/"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\uddfa\ufe0f"),jsx("span",{},"\u751f\u6210\u5730\u56fe")),jsx(ReactRouterLink,{className:"top-tab",to:"/api-config"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\udd27"),jsx("span",{},"API \u914d\u7f6e")),jsx(ReactRouterLink,{className:"top-tab",to:"/path-config"},jsx("span",{css:({ ["fontSize"] : "16px" })},"\ud83d\udcc1"),jsx("span",{},"\u8def\u5f84\u914d\u7f6e"))),jsx("div",{className:"app-layout"},jsx("div",{className:"sidebar"},jsx("div",{className:"mode-toggle"},jsx(Button_d794ff66aae494badbbc5739980177f3,{},),jsx(Button_40661ab4ec10e3b4d4e3024f8c2abd98,{},)),jsx(Fragment_4a0904591133850453bd74dad1e1668f,{},),jsx("div",{className:"section"},jsx("div",{className:"section-header"},jsx("span",{className:"dot"},),"CONSTRAINTS"),jsx("div",{className:"section-body"},jsx("div",{},jsx("label",{className:"form-label"},"Player Race"),jsx("div",{className:"race-grid"},jsx(Button_ba583d9a37b4bd7ddfac3ba14c0b6144,{},),jsx(Button_bed03b4a9b617e6ac7215ba0f6856275,{},),jsx(Button_2b1dd343f9f25b51b1d651a538109f8f,{},))),jsx("div",{},jsx("label",{className:"form-label"},"Enemy Race"),jsx("div",{className:"race-grid"},jsx(Button_4b5e4d5185c9659a35318460c055e943,{},),jsx(Button_836193ad46dd813299fcea1d82953948,{},),jsx(Button_71adecddec1b04c4dd7e40ad9b4f6ba4,{},))),jsx("div",{},jsx("label",{className:"form-label"},"Player Unit Count"),jsx(Input_7d0f3e11f13531fb8fe5947eeb1a6086,{},)),jsx("div",{},jsx("label",{className:"form-label"},"Enemy Unit Count"),jsx(Input_0cedc9f535a07161c14f3335b6db74e2,{},)))),jsx("div",{className:"section"},jsx("div",{className:"section-header"},jsx("span",{className:"dot"},),"TERRAIN"),jsx("div",{className:"section-body"},jsx(Div_d682b459bade157c357a5bed709e8a4e,{},))),jsx(Button_a4266a99ac6a3267bf1aa5aee379fbb4,{},)),jsx("div",{className:"main-content"},jsx("div",{className:"pipeline"},jsx(Div_0b89dc006c3d038ba955385e2a48b71b,{},),jsx(Div_432ee2c59ade523636217fb96e926a22,{},),jsx(Div_1c464c51f83fd464e0c8338a3ac0fa74,{},),jsx(Div_9d29bca6724acd094d7d7d19ad33d308,{},),jsx(Div_9464fe8164b7ab98794e813548c202d8,{},),jsx(Div_4b014c3ef1d016ac362c0b41a2760b43,{},),jsx(Div_df5bcafd1d4304654adcff21ae2e6c0f,{},)),jsx("div",{className:"stage-panel"},jsx("div",{className:"panel-header"},jsx(Div_ca0de0c139c3c94df9e79387a29ac7c6,{},),jsx(Div_81ed538320bb5c0262cbe9465369a6fd,{},)),jsx("div",{className:"panel-body"},jsx(Fragment_ecf1e77d5ca0223ff9c91f128f186a7a,{},))),jsx("div",{className:"output-panels"},jsx("div",{className:"output-card"},jsx("div",{className:"output-card-header"},jsx("div",{className:"output-title"},jsx("span",{className:"out-dot sc2map"},),"SC2MAP \u6587\u4ef6"),jsx("div",{className:"output-actions"},jsx(Fragment_0a74a69f18274cec025a44a5a94ae6a8,{},))),jsx("div",{className:"output-card-body"},jsx(Fragment_c02ec4371f5a58085477305bf662ff54,{},))),jsx("div",{className:"output-card"},jsx("div",{className:"output-card-header"},jsx("div",{className:"output-title"},jsx("span",{className:"out-dot galaxy"},),"Galaxy \u811a\u672c"),jsx("div",{className:"output-actions"},jsx("button",{className:"out-action-btn active"},"\u9884\u89c8"),jsx(Fragment_23ea7d2b31cfd9eeddcf211d45997d15,{},))),jsx("div",{className:"output-card-body"},jsx(Fragment_cba8380ee3885b10c28e3de38878031d,{},))),jsx("div",{className:"output-card"},jsx("div",{className:"output-card-header"},jsx("div",{className:"output-title"},jsx("span",{className:"out-dot python"},),"Python ENV"),jsx("div",{className:"output-actions"},jsx("button",{className:"out-action-btn active"},"\u9884\u89c8"))),jsx("div",{className:"output-card-body"},jsx(Fragment_2049110a848ac8f63267482157d95dcf,{},))))))),jsx("title",{},"SMAC-AST \u00b7 \u751f\u6210\u5730\u56fe"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}