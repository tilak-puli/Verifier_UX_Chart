import React, {useCallback, useState} from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  Panel,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

const SCREENS = {
  SPLASH_SCREEN: {
    name: "Splash Screen",
  },
  LANGUAGE_SCREEN: {
    name: "Choose Language Screen",
    type: {
      SETUP: "Setup",
      SETTING: "Setting",
    },
  },
  APP_LOCK_SCREEN: {
    name: "App lock screen",
    type: {
      SETUP: "SETUP",
      UNLOCK: "Unlock",
    },
  },
  SET_PASSCODE_SCREEN: {
    name: "Set Passcode Screen",
    type: {
      CONFIRM: "Confirm",
    },
  },
  HOME_SCREEN: {
    name: "Home Screen",
  },
  SETTINGS_SCREEN: {
    name: "Settings Screen",
    type: {
      WITH_ID: "With ID",
      WITHOUT_ID: "Without ID",
    },
  },
  ABOUT_SCREEN: {
    name: "About Screen",
  },
  RECEIVED_IDS_SCREEN: {
    name: "Received IDS Screen",
  },
  AUDIT_SCREEN: {
    name: "Audit Screen",
  },
  QR_SCREEN: {
    name: "QR Screen",
  },
  CONNECTED_SCREEN: {
    name: "Connected Screen",
  },
  VIEW_RECEIVED_VC_SCREEN: {
    name: "View ID Screen",
    type: {
      TIMER_BASED: "Timer Based",
      VERIFY_VERIFIER: "Verify Enabled",
      BUTTON_VERIFY: "Button Verify",
    },
  },
  OPERATOR_ID_SCREEN: {
    name: "Operator View ID Screen",
  },
  FACE_AUTH_SCREEN: {
    name: "Face auth Screen",
    type: {
      ONLY_VERIFIER: "Only Verifier",
      ONLY_RESIDENT: "Only Resident",
      BOTH: "Both",
    },
  },
  TIMEOUT_SCREEN: {
    name: "Timeout Screen",
  },
  ENTER_ID_NUMBER_SCREEN: {
    name: "Enter ID Number Screen",
  },
  ENTER_OTP: {
    name: "Enter OTP Screen",
  },
};

const data = {
  nodes: [
    {
      id: "1",
      position: {x: 750, y: 50},
      data: {label: SCREENS.SPLASH_SCREEN.name},
    },
    {
      id: "2",
      position: {x: 750, y: 150},
      data: {
        label: `${SCREENS.LANGUAGE_SCREEN.name} - ${SCREENS.LANGUAGE_SCREEN.type.SETUP}`,
      },
    },
    {
      id: "3",
      position: {x: 750, y: 250},
      data: {
        label: `${SCREENS.APP_LOCK_SCREEN.name} - ${SCREENS.APP_LOCK_SCREEN.type.SETUP}`,
      },
    },
    {
      id: "4",
      position: {x: 750, y: 350},
      data: {label: SCREENS.SET_PASSCODE_SCREEN.name},
    },
    {
      id: "5",
      position: {x: 750, y: 450},
      data: {
        label: `${SCREENS.SET_PASSCODE_SCREEN.name} - ${SCREENS.SET_PASSCODE_SCREEN.type.CONFIRM}`,
      },
    },
    {
      id: "6",
      position: {x: 750, y: 550},
      data: {label: SCREENS.HOME_SCREEN.name},
    },
    {
      id: "100",
      type: "group",
      position: {x: -220, y: 690},
      data: {label: "Home Screen Navigation"},
      style: {width: 800, height: 140},
    },
    {
      id: "200",
      position: {x: -220, y: 690},
      data: {label: "Home Screen Navigation"},
      style: {
        width: 800,
        height: 140,
        background: "transparent",
        color: "white",
      },
    },
    {
      id: "101",
      type: "group",
      position: {x: 1548, y: 850},
      data: {label: "Settings"},
      style: {width: 700, height: 520},
    },
    {
      id: "201",
      position: {x: 1548, y: 850},
      data: {label: "Settings"},
      style: {
        width: 700,
        height: 520,
        background: "transparent",
        color: "white",
      },
    },
    {
      id: "102",
      type: "group",
      position: {x: -1200, y: 1000},
      data: {label: "Airport Security Check Welcome"},
      style: {width: 400, height: 320},
    },
    {
      id: "103",
      type: "group",
      position: {x: -750, y: 1000},
      data: {label: "Sim Card Check Welcome"},
      style: {width: 400, height: 400},
    },
    {
      id: "104",
      type: "group",
      position: {x: 850, y: 1050},
      data: {label: "Onboarding"},
      style: {width: 250, height: 250},
    },
    {
      id: "105",
      type: "group",
      position: {x: -300, y: 1000},
      data: {label: "Subsidy delivery Check Flow"},
      style: {width: 400, height: 400},
    },
    {
      id: "106",
      type: "group",
      position: {x: 150, y: 1000},
      data: {label: "Quick Share Flow"},
      style: {width: 400, height: 400},
    },
    {
      id: "204",
      position: {x: 850, y: 1050},
      data: {label: "Onboarding"},
      style: {
        width: 250,
        height: 250,
        background: "transparent",
        color: "white",
      },
    },
    {
      id: "7",
      position: {x: 20, y: 45},
      parentNode: "100",
      extent: "parent",
      data: {label: "Airport Security Check Welcome Screen"},
    },
    {
      id: "8",
      position: {x: 220, y: 45},
      parentNode: "100",
      extent: "parent",
      data: {label: "Sim Card Check Welcome Screen"},
    },
    {
      id: "9",
      position: {x: 420, y: 45},
      parentNode: "100",
      extent: "parent",
      data: {label: "Subsidy delivery Check Welcome Screen"},
    },
    {
      id: "10",
      position: {x: 620, y: 45},
      parentNode: "100",
      extent: "parent",
      data: {label: "Quick Share Check Welcome Screen"},
    },
    {
      id: "11",
      position: {x: 1058.0124702298278, y: 721.9480832459953},
      data: {label: SCREENS.RECEIVED_IDS_SCREEN.name},
    },
    {
      id: "12",
      position: {x: 1346.2401292487343, y: 719.6112596206553},
      data: {label: SCREENS.AUDIT_SCREEN.name},
    },
    {
      id: "13",
      position: {x: 1662.2479927177221, y: 720.9200710158656},
      data: {label: SCREENS.SETTINGS_SCREEN.name},
    },
    {
      id: "14",
      position: {x: 40, y: 40},
      data: {label: SCREENS.SETTINGS_SCREEN.type.WITH_ID},
      parentNode: "101",
      extent: "parent",
    },
    {
      id: "15",
      position: {x: 500, y: 40},
      data: {label: SCREENS.SETTINGS_SCREEN.type.WITHOUT_ID},
      parentNode: "101",
      extent: "parent",
    },
    {
      id: "16",
      position: {x: 280, y: 300},
      data: {
        label: `${SCREENS.LANGUAGE_SCREEN.name} - ${SCREENS.LANGUAGE_SCREEN.type.SETTING}`,
      },
      parentNode: "101",
      extent: "parent",
    },
    {
      id: "17",
      position: {x: 480, y: 300},
      data: {label: SCREENS.ABOUT_SCREEN.name},
      parentNode: "101",
      extent: "parent",
    },
    {
      id: "18",
      position: {x: 40, y: 350},
      data: {label: SCREENS.OPERATOR_ID_SCREEN.name},
      parentNode: "101",
      extent: "parent",
    },
    {
      id: "19",
      type: "input",
      position: {x: 45, y: 45},
      data: {label: SCREENS.ENTER_ID_NUMBER_SCREEN.name},
      parentNode: "104",
      extent: "parent",
    },
    {
      id: "20",
      position: {x: 45, y: 145},
      data: {label: SCREENS.ENTER_OTP.name},
      parentNode: "104",
      extent: "parent",
    },
    {
      id: "21",
      position: {x: 125, y: 25},
      data: {label: SCREENS.QR_SCREEN.name},
      parentNode: "102",
      extent: "parent",
    },
    {
      id: "22",
      position: {x: 125, y: 125},
      data: {label: SCREENS.CONNECTED_SCREEN.name},
      parentNode: "102",
      extent: "parent",
    },
    {
      id: "23",
      position: {x: 25, y: 225},
      data: {
        label: `${SCREENS.VIEW_RECEIVED_VC_SCREEN.name} - ${SCREENS.VIEW_RECEIVED_VC_SCREEN.type.TIMER_BASED}`,
      },
      parentNode: "102",
      extent: "parent",
    },
    {
      id: "24",
      position: {x: 225, y: 225},
      data: {label: SCREENS.TIMEOUT_SCREEN.name},
      parentNode: "102",
      extent: "parent",
    },
    {
      id: "25",
      position: {x: 125, y: 25},
      data: {label: SCREENS.QR_SCREEN.name},
      parentNode: "103",
      extent: "parent",
    },
    {
      id: "26",
      position: {x: 125, y: 125},
      data: {label: SCREENS.CONNECTED_SCREEN.name},
      parentNode: "103",
      extent: "parent",
    },
    {
      id: "27",
      position: {x: 25, y: 225},
      data: {
        label: `${SCREENS.VIEW_RECEIVED_VC_SCREEN.name} - ${SCREENS.VIEW_RECEIVED_VC_SCREEN.type.VERIFY_VERIFIER}`,
      },
      parentNode: "103",
      extent: "parent",
    },
    {
      id: "28",
      position: {x: 25, y: 325},
      data: {
        label: `${SCREENS.FACE_AUTH_SCREEN.name} - ${SCREENS.FACE_AUTH_SCREEN.type.ONLY_VERIFIER}`,
      },
      parentNode: "103",
      extent: "parent",
    },
    {
      id: "29",
      position: {x: 225, y: 225},
      data: {label: SCREENS.TIMEOUT_SCREEN.name},
      parentNode: "103",
      extent: "parent",
    },
    {
      id: "35",
      position: {x: 125, y: 25},
      data: {label: SCREENS.QR_SCREEN.name},
      parentNode: "105",
      extent: "parent",
    },
    {
      id: "36",
      position: {x: 125, y: 125},
      data: {label: SCREENS.CONNECTED_SCREEN.name + " - missing in UX"},
      parentNode: "105",
      extent: "parent",
    },
    {
      id: "37",
      position: {x: 25, y: 225},
      data: {
        label: `${SCREENS.VIEW_RECEIVED_VC_SCREEN.name} - ${SCREENS.VIEW_RECEIVED_VC_SCREEN.type.BUTTON_VERIFY}`,
      },
      parentNode: "105",
      extent: "parent",
    },
    {
      id: "38",
      position: {x: 25, y: 325},
      data: {
        label: `${SCREENS.FACE_AUTH_SCREEN.name} - ${SCREENS.FACE_AUTH_SCREEN.type.BOTH}`,
      },
      parentNode: "105",
      extent: "parent",
    },
    {
      id: "39",
      position: {x: 225, y: 225},
      data: {label: SCREENS.TIMEOUT_SCREEN.name},
      parentNode: "105",
      extent: "parent",
    },
    {
      id: "45",
      position: {x: 125, y: 25},
      data: {label: SCREENS.QR_SCREEN.name},
      parentNode: "106",
      extent: "parent",
    },
    {
      id: "46",
      position: {x: 125, y: 125},
      data: {label: SCREENS.CONNECTED_SCREEN.name + " - missing in UX"},
      parentNode: "106",
      extent: "parent",
    },
    {
      id: "47",
      position: {x: 25, y: 225},
      data: {
        label: `${SCREENS.VIEW_RECEIVED_VC_SCREEN.name} - ${SCREENS.VIEW_RECEIVED_VC_SCREEN.type.BUTTON_VERIFY}`,
      },
      parentNode: "106",
      extent: "parent",
    },
    {
      id: "49",
      position: {x: 225, y: 225},
      data: {label: SCREENS.TIMEOUT_SCREEN.name},
      parentNode: "106",
      extent: "parent",
    },
    {
      id: "50",
      position: {x: 0, y: -400},
      style: {width: 200, textAlign:"left"},
      data: {
        label: <ol type={"1"}>{Object.values(SCREENS).map(
          (val, i) =>
            <li
              key={i}>{val.name}
              <ul>{Object.values(val.type || {}).map((type, i) => <li key={i}>{type}</li>)}</ul>
            </li>
        )}</ol>,
      },
    },
  ],
  edges: [
    {id: "e1-2", source: "1", target: "2"},
    {id: "e2-3", source: "2", target: "3"},
    {
      id: "e3-4",
      source: "3",
      target: "4",
    },
    {id: "e4-5", source: "4", target: "5"},
    {id: "e5-6", source: "5", target: "6"},
    {
      id: "e6-7",
      source: "6",
      target: "7",
    },
    {id: "e6-8", source: "6", target: "8"},
    {id: "e6-9", source: "6", target: "9"},
    {
      id: "e6-10",
      source: "6",
      target: "10",
    },
    {id: "e6-11", source: "6", target: "11"},
    {id: "e6-12", source: "6", target: "12"},
    {
      id: "e6-13",
      source: "6",
      target: "13",
    },
    {
      source: "13",
      target: "14",
      id: "13-14",
    },
    {
      source: "13",
      target: "15",
      id: "13-15",
    },
    {
      source: "14",
      target: "18",
      id: "14-18",
    },
    {
      source: "14",
      target: "16",
      id: "14-16",
    },
    {
      source: "14",
      target: "17",
      id: "14-17",
    },
    {
      source: "15",
      target: "16",
      id: "15-16",
    },
    {
      source: "15",
      target: "17",
      id: "15-17",
    },
    {
      source: "15",
      target: "17",
      id: "15-17",
    },
    {
      source: "19",
      target: "20",
      id: "19-20",
    },
    {
      source: "15",
      target: "204",
      id: "15-204",
    },
    {
      source: "21",
      target: "22",
      id: "21-22",
    },
    {
      source: "22",
      target: "23",
      id: "22-23",
      label: "Success",
    },
    {
      source: "22",
      target: "24",
      id: "22-24",
      label: "Fail",
    },
    {
      source: "7",
      target: "21",
      id: "7-21",
    },
    {
      source: "8",
      target: "25",
      id: "8-25",
    },
    {
      source: "25",
      target: "26",
      id: "25-26",
    },
    {
      source: "26",
      target: "27",
      id: "26-27",
      label: "Success",
    },
    {
      source: "26",
      target: "29",
      id: "26-29",
      label: "Fail",
    },
    {
      source: "27",
      target: "28",
      id: "27-28",
    },
    {
      source: "101",
      target: "104",
      id: "101-104",
    },
    {
      source: "200",
      target: "204",
      id: "200-204",
      label: "not onboarded",
    },
    {
      source: "9",
      target: "35",
      id: "8-35",
    },
    {
      source: "35",
      target: "36",
      id: "35-36",
    },
    {
      source: "36",
      target: "37",
      id: "36-37",
      label: "Success",
    },
    {
      source: "36",
      target: "39",
      id: "36-39",
      label: "Fail",
    },
    {
      source: "37",
      target: "38",
      id: "37-38",
    },
    {
      source: "10",
      target: "45",
      id: "10-45",
    },
    {
      source: "45",
      target: "46",
      id: "45-46",
    },
    {
      source: "46",
      target: "47",
      id: "46-47",
      label: "Success",
    },
    {
      source: "46",
      target: "49",
      id: "46-49",
      label: "Fail",
    },
  ],
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(data.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(data.edges);
  const [rfInstance, setRfInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  if (rfInstance) {
    console.log(JSON.stringify(rfInstance.toObject()));
  }

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setRfInstance}
      >
        <Controls/>
        <MiniMap/>
        <Background variant="dots" gap={12} size={1}/>
      </ReactFlow>
    </div>
  );
}
