tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    number: { value: 50 },
    color: { value: "#00A8E8" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 1 },
    links: {
      enable: true,
      distance: 150,
      color: "#00A8E8",
      opacity: 0.3
    }
  },
  background: {
    color: "#F7F6F8"
  }
})