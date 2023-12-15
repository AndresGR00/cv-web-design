import { HamburgerButton } from './components/hamburgerButton/hamburgerButton';
import { Header } from './components/header/header';
import { HeaderButton } from './components/headerButtons/headerButtons';
import { HeaderButtonsContainer } from './components/headerButtonsContainer/headerButtonsContainer';
import { Logo, renderMainLogo } from './components/logo/logo';
import { FirstDecoration } from './components/mainFirstDecoration/mainFirstDecoration';
import { Main } from './components/mainHTML/mainHTML';
import { SecondDecoration } from './components/mainSecondDecoration/mainSecondDecoration';
import { ThirdDecoration } from './components/mainThirdDecoration/mainThirdDecoration';
import { Wolf } from './components/mainWolf/mainWolf';
import { ToggleButton } from './components/toggleButton/toggleButton';
import { studiesFunction } from './data/headerButtonsFunctions';
import { certificationsSvg, contactSvg, experienceSvg, studiesSvg } from './data/infoSVGs';
import './style.css';


const printHeader = () => {
  Header()
  Logo('#', renderMainLogo)
  HeaderButtonsContainer();
  HeaderButton(`${studiesSvg}`, '#', studiesFunction);
  HeaderButton(`${experienceSvg}`, '#');
  HeaderButton(`${certificationsSvg}`, '#');
  HeaderButton(`${contactSvg}`, '#');
  ToggleButton();
  HamburgerButton();
}

const printMain = () => {
  Main();
  FirstDecoration(); //De aquí
  SecondDecoration();
  ThirdDecoration();
  Wolf(); //Hasta aquí, carga el main original, el de la frontpage
}

printHeader()
printMain()