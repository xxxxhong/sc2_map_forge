import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, ReflexEvent, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": "", "route_id": ""}}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.sc2_map_forge___states___config_state____config_state": {"anthropic_apikey_rx_state_": "", "anthropic_baseurl_rx_state_": "", "anthropic_model_rx_state_": "", "api_json_path_rx_state_": "database/api.json", "api_save_msg_rx_state_": "", "base_map_path_rx_state_": "maps/raw2.SC2Map", "deepseek_apikey_rx_state_": "", "deepseek_baseurl_rx_state_": "", "deepseek_model_rx_state_": "", "default_provider_rx_state_": "deepseek", "glm_apikey_rx_state_": "", "glm_baseurl_rx_state_": "", "glm_model_rx_state_": "", "history_dir_rx_state_": "gen_history", "maps_dir_rx_state_": "maps", "max_tokens_rx_state_": 8096, "minimax_apikey_rx_state_": "", "minimax_baseurl_rx_state_": "", "minimax_model_rx_state_": "", "openai_apikey_rx_state_": "", "openai_baseurl_rx_state_": "", "openai_model_rx_state_": "", "path_save_msg_rx_state_": "", "provider_configs_rx_state_": {}, "qwen_apikey_rx_state_": "", "qwen_baseurl_rx_state_": "", "qwen_model_rx_state_": "", "temperature_rx_state_": 1.0, "upload_dir_rx_state_": "uploads"}, "reflex___state____state.sc2_map_forge___states___generation_state____generation_state": {"active_stage_rx_state_": 0, "current_stage_desc_rx_state_": "根据策略和地形生成场景设计方案…", "current_stage_output_rx_state_": "", "current_stage_status_rx_state_": "waiting", "current_stage_title_rx_state_": "STAGE 1 · SCENARIO PLANNING", "enemy_race_rx_state_": "", "enemy_unit_count_rx_state_": 10, "galaxy_code_rx_state_": "", "galaxy_file_path_rx_state_": "", "is_generating_rx_state_": false, "is_macro_rx_state_": true, "map_ready_rx_state_": false, "mode_rx_state_": "macro", "output_dir_rx_state_": "", "player_race_rx_state_": "", "player_unit_count_rx_state_": 10, "python_code_rx_state_": "", "stage_outputs_rx_state_": ["", "", "", ""], "stage_statuses_rx_state_": ["waiting", "waiting", "waiting", "waiting"], "stratagem_rx_state_": "", "stratagem_label_rx_state_": "", "strategy_text_rx_state_": "", "uploaded_file_path_rx_state_": "", "uploaded_filename_rx_state_": ""}}

export const defaultColorMode = "dark"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {reflex___state____state: createContext(null),reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),reflex___state____state__reflex___state____on_load_internal_state: createContext(null),reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),reflex___state____state__sc2_map_forge___states___config_state____config_state: createContext(null),reflex___state____state__sc2_map_forge___states___generation_state____generation_state: createContext(null),};
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}


export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            ReflexEvent(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(ReflexEvent('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    ReflexEvent('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]
    

export const isDevMode = false;

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      async function load() {
        const comp = await component();
        setComponent(() => comp);
      }
      load();
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(
    EventLoopContext.Provider,
    { value: [addEvents, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
const [reflex___state____state__sc2_map_forge___states___config_state____config_state, dispatch_reflex___state____state__sc2_map_forge___states___config_state____config_state] = useReducer(applyDelta, initialState["reflex___state____state.sc2_map_forge___states___config_state____config_state"])
const [reflex___state____state__sc2_map_forge___states___generation_state____generation_state, dispatch_reflex___state____state__sc2_map_forge___states___generation_state____generation_state] = useReducer(applyDelta, initialState["reflex___state____state.sc2_map_forge___states___generation_state____generation_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
"reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
"reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
"reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
"reflex___state____state.sc2_map_forge___states___config_state____config_state": dispatch_reflex___state____state__sc2_map_forge___states___config_state____config_state,
"reflex___state____state.sc2_map_forge___states___generation_state____generation_state": dispatch_reflex___state____state__sc2_map_forge___states___generation_state____generation_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
createElement(StateContexts.reflex___state____state__sc2_map_forge___states___config_state____config_state,{value: reflex___state____state__sc2_map_forge___states___config_state____config_state},
createElement(StateContexts.reflex___state____state__sc2_map_forge___states___generation_state____generation_state,{value: reflex___state____state__sc2_map_forge___states___generation_state____generation_state},
    createElement(DispatchContext, {value: dispatchers}, children)
    ))))))
  )
}