import { Component, OnInit } from '@angular/core';

// Libraries
import * as AOS from 'aos';
import { ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';
import { loadFull } from "tsparticles";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Franco.D.R';
  id = "tsparticles";

  ngOnInit(): void {
    AOS.init();
  }

// Particles options
  particlesOptions = {
      background: {
          color: {
              value: "#202124",
          },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: ClickMode.push,
              },
              onHover: {
                  enable: true,
                  mode: HoverMode.repulse,
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 3,
              },
              repulse: {
                  distance: 100,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          collisions: {
              enable: true,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.bounce,
              },
              random: false,
              speed: 2,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 1200,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  };

  particlesLoaded(container: Container): void {
      console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
      console.log(engine);
      await loadFull(engine);
  }

}
