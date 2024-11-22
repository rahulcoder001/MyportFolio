
export const loadScript = async () => {
    const scriptMatterJS = document.createElement('script');
    scriptMatterJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js';
    scriptMatterJS.onload = () => {
      const scriptAttractors = document.createElement('script');
      scriptAttractors.src = 'https://cdn.jsdelivr.net/npm/matter-attractors@0.1.6/build/matter-attractors.min.js';
      scriptAttractors.onload = () => {
        // Now that both Matter.js and the plugin are loaded, we can execute Matter.js logic
        const canvas = document.querySelector("#wrapper-canvas");

        const dimensions = {
          width: window.innerWidth,
          height: window.innerHeight,
        };
        //@ts-ignore
        Matter.use("matter-attractors");
        //@ts-ignore
        Matter.use("matter-wrap");
        //@ts-ignore
        const { Engine, Events, Runner, Render, World, Body, Mouse, Common, Composite, Bodies } = Matter;

        // Create engine
        const engine = Engine.create();
        engine.world.gravity.y = 0;
        engine.world.gravity.x = 0;
        engine.world.gravity.scale = 0.1;

        // Create renderer
        const render = Render.create({
          //@ts-ignore
          element: canvas,
          engine: engine,
          options: {
            showVelocity: false,
            width: dimensions.width,
            height: dimensions.height,
            wireframes: false,
            background: "transparent",
          },
        });

        // Create runner
        const runner = Runner.create();

        // Create a body with an attractor
        const attractiveBody = Bodies.circle(
          //@ts-ignore
          render.options.width / 2,
          //@ts-ignore
          render.options.height / 2,
          Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
          {
            render: {
              fillStyle: "#000",
              strokeStyle: "#000",
              lineWidth: 0,
            },
            isStatic: true,
            plugin: {
              attractors: [
                (bodyA:any, bodyB:any) => {
                  return {
                    x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                    y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                  };
                },
              ],
            },
          }
        );

        World.add(engine.world, attractiveBody);

        // Add some bodies to be attracted
        for (let i = 0; i < 60; i += 1) {
          let x = Common.random(0, render.options.width);
          let y = Common.random(0, render.options.height);
          let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
          let polygonNumber = Common.random(3, 6);
          const body = Bodies.polygon(x, y, polygonNumber, s, {
            mass: s / 20,
            friction: 0,
            frictionAir: 0.02,
            angle: Math.round(Math.random() * 360),
            render: {
              fillStyle: "#222222",
              strokeStyle: "#000000",
              lineWidth: 2,
            },
          });

          World.add(engine.world, body);

          let r = Common.random(0, 1);
          const circle = Bodies.circle(x, y, Common.random(2, 8), {
            mass: 0.1,
            friction: 0,
            frictionAir: 0.01,
            render: {
              fillStyle: r > 0.3 ? "#27292d" : "#444444",
              strokeStyle: "#000000",
              lineWidth: 2,
            },
          });

          World.add(engine.world, circle);
        }

        // Add mouse control
        const mouse = Mouse.create(render.canvas);

        Events.on(engine, "afterUpdate", function () {
          if (!mouse.position.x) return;
          // Smoothly move the attractor body towards the mouse
          Body.translate(attractiveBody, {
            x: (mouse.position.x - attractiveBody.position.x) * 0.12,
            y: (mouse.position.y - attractiveBody.position.y) * 0.12,
          });
        });

        // Start the engine and render
        Runner.run(runner, engine);
        Render.run(render);
      };
      document.body.appendChild(scriptAttractors);
    };
    document.body.appendChild(scriptMatterJS);
  };