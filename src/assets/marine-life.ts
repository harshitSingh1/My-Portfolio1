export const marineData = {
  zones: [
    {
      name: "Surface Zone",
      colors: { from: "#003f5c", to: "#001f2d" },
      creatures: [
        {
          type: "jellyfish",
          position: { top: "30%", left: "25%" },
          size: { width: "8rem", height: "12rem" },
          color: "#a0e7ff"
        },
        {
          type: "clownfish",
          position: { top: "50%", left: "75%" },
          size: { width: "10rem", height: "6rem" },
          color: "#ff7f50",
          animation: "swim-left-right"
        }
      ]
    },
    {
      name: "Mid Depth Zone",
      colors: { from: "#001f2d", to: "#000b14" },
      creatures: [
        {
          type: "anglerfish",
          position: { bottom: "33%", left: "33%" },
          size: { width: "12rem", height: "12rem" },
          color: "#2a2a2a",
          animation: "swim-right-left"
        },
        {
          type: "squid",
          position: { top: "25%", left: "75%" },
          size: { width: "9rem", height: "16rem" },
          color: "#4a90e2",
          animation: "float-up-down"
        }
      ]
    },
    {
      name: "Deep Sea Zone",
      colors: { from: "#000b14", to: "#000005" },
      creatures: [
        {
          type: "lanternfish",
          position: { top: "33%", left: "25%" },
          size: { width: "10rem", height: "5rem" },
          color: "#2b2b2b",
          animation: "swim-left-right"
        },
        {
          type: "shrimp",
          position: { bottom: "25%", left: "66%" },
          size: { width: "7rem", height: "7rem" },
          color: "#ff99cc",
          animation: "float-up-down"
        },
        {
          type: "octopus",
          position: { bottom: "33%", left: "75%" },
          size: { width: "10rem", height: "10rem" },
          color: "#aa66cc",
          animation: "float-up-down"
        }
      ]
    },
    {
      name: "Abyssal Zone",
      colors: { from: "#000005", to: "#000000" },
      creatures: [
        {
          type: "isopod",
          position: { bottom: "33%", left: "33%" },
          size: { width: "12rem", height: "8rem" },
          color: "#666666",
          animation: "swim-left-right"
        },
        {
          type: "crab",
          position: { bottom: "25%", left: "75%" },
          size: { width: "10rem", height: "10rem" },
          color: "#cc6600",
          animation: "float-up-down"
        },
        {
          type: "turtle",
          position: { bottom: "25%", left: "25%" },
          size: { width: "10rem", height: "8rem" },
          color: "#2e8b57",
          animation: "swim-left-right"
        }
      ]
    },
    {
      name: "Sea Bottom",
      colors: { from: "#000000", to: "#00110a" },
      creatures: [
        {
          type: "starfish",
          position: { bottom: "6rem", left: "20%" },
          size: { width: "5rem", height: "5rem" },
          color: "#ff6600"
        },
        {
          type: "crab",
          position: { bottom: "4rem", left: "80%" },
          size: { width: "7rem", height: "5rem" },
          color: "#cc3300",
          animation: "swim-left-right"
        }
      ],
      plants: [
        {
          type: "seaweed",
          position: { bottom: "0", left: "33%" },
          size: { width: "3rem", height: "8rem" },
          color: "#0a7a0a"
        },
        {
          type: "seaweed",
          position: { bottom: "0", left: "66%" },
          size: { width: "4rem", height: "10rem" },
          color: "#0f9a0f"
        }
      ]
    }
  ]
}