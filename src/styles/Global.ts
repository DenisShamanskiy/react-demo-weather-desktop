import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --Nunito: 'Nunito', sans-serif;

  /* Цвет */
  --Baby-Blue: #8BD2EC;
  --Papaya-Whip: #FFF3D7;
  --Baby-Pink: #F6C6C7;
  --Eton-Blue: #92CEA8;
  --Pastel-Yellow: #FCEE9E;
  --Milk: #FFFDF5;
  --Bright-Gray: #E5E8F0;
  --Black-Coral: #55586B;
  --Banana-Mania: #FEECB9;
  --Inchworm: #9EE362;
  --Diamond: #C2E7FF;
  --Linen: #FCEFE3;

  --Lotion: #FEFDFB;
  --Vista-Blue: #779CDB;
  --Misty-Rose: #FFE2E2;
  --Light-Red: #FFCFCF;
  /////////
  --Lavender-Gray: #C4BDC9;
  --Manatee: #9393A5;
  --Dust-Storm: #E6CFC8;
  --Eggshell: #F3E5D6;
  
  /* Border */
  --br-20: 20px;
  --br-loader: 15px;
  --radius-main: 10px;
  --border-color: #b1bed5;
  /* Фон */
  --background-color: rgba( 255, 255, 255, 0.5 );
  --box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  --bso: 0 8px 32px 0 orange;
  --backdrop-filter: blur( 10px );
  --webkit-bf: blur( 10px );
  --border: 1px solid rgba( 255, 255, 255, 0.18 );
}

* {
  box-sizing: border-box;
}

*::before,
*::after {
    box-sizing: border-box;
  }

body {
    width: 100vw;
    min-width: 1280px;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--Nunito);
    background-color: #c8d9eb;
    color: var(--Black-Coral);
    
    background: linear-gradient(119deg,var(--Lavender-Gray),var(--Manatee),var(--Dust-Storm),var(--Eggshell));
    background-size: 240% 240%;
    animation: gradient-animation 16s ease infinite;
  }

  @keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;
