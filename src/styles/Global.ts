import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  /* Шрифт */
  --Nunito: 'Nunito', sans-serif;

  --f-s-x-small: 0.5rem;
  --f-s-n-small: 0.7rem;
  --f-s-b-small: 0.8rem;
  --f-s-n-normal: 1rem;

  /* Цвет */
  --Baby-Blue: #8BD2EC;
  --Papaya-Whip: #FFF3D7;
  --Baby-Pink: #F6C6C7;
  --Eton-Blue: #92CEA8;
  --Pastel-Yellow: #FCEE9E;
  --Milk: #FFFDF5;
  --Bright-Gray: #E5E8F0;
  --Black-Coral: #55586B;

  --Lotion: #FEFDFB;
  --Vista-Blue: #779CDB;
  --Misty-Rose: #FFE2E2;
  --Spanish-Pink: #FEC1C1;
  /////////
  --Lavender-Gray: #C4BDC9;
  --Manatee: #9393A5;
  --Dust-Storm: #E6CFC8;
  --Eggshell: #F3E5D6;
  ////////
  --first: #8dc6ff;
  --second: #9eefff;
  
  --fourth: #dc552c;

  --first1280: #defcf9;
  --second1280: #cadefc;
  --third1280: #c3bef0;
  --fourth1280: #cca8e9;

  --blue: #8dc6ff;
  --pink: #f1c6de;
  --orange: #fecea8;
  --green: #FED1C4;
  --green-text: #c2fcd9;
  --black: #55586B;
  /* Border */
  --br-20: 20px;
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
