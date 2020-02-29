import { Link } from "gatsby"
import React from "react"
import styled, { keyframes, css } from "styled-components"

import { connect } from "react-redux"
import { refreshLoginOperation } from "../../../../redux/operations/loginRegisterUser"

const HeaderStyled = styled.header`
  background-color: ${({ theme, isTop }) =>
    isTop ? "rgba(190, 214, 237, 0.29)" : theme.colors.primary.main};
  transition: 300ms background-color;
  margin-bottom: 20px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 10;
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ isMobile }) => (isMobile ? "98%" : "90%")};
  padding: ${({ isMobile }) => (isMobile ? "4px 12px" : "8px 0px")};
  margin: 0 auto;
`
const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: block;
    margin: 0px 12px;
    text-decoration: none;
    color: ${({ isTop }) => (isTop ? "white" : "rgba(54,73,89, 1)")};
    transition: 300ms;

    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: 880px) {
    font-size: 14px;
  }
  @media (max-width: 820px) {
    font-size: 13px;
  }
  ${({ isMobile, isOpenBurgerMenu, theme }) =>
    isMobile
      ? `
    position: fixed;
    flex-direction: column;
    height: 93.5vh;
    font-size: 21px !important;
    top: 48px;
    transition: 500ms;
    width: 50vw;
    left: ${isOpenBurgerMenu ? "50%" : "100%"};
    right: 0px;

    a {
      background-color: ${theme.colors.primary.main};
      width: 100%;
      height: 100%; 
      padding: 12px 0px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 1;
        color: rgb(72, 72, 72);;
        background-color: rgba(239, 232, 87, 1);;
      }
    }

    @media (max-width: 330px){
      width: 100vw;
      left: ${isOpenBurgerMenu ? "0px" : "100vw"};
    }
  `
      : ""};
`

const Logo = styled.svg`
  width: ${({ isMobile }) => (isMobile ? "40px" : "50px")};
  height: ${({ isMobile }) => (isMobile ? "40px" : "50px")};
  border: 2px solid ${({ isTop }) => (isTop ? "white" : "rgba(54,73,89, 1)")};
  padding: 4px;
  border-radius: 50%;
  fill: ${({ isTop }) => (isTop ? "white" : "rgba(54,73,89, 1)")};
  path {
    transform: translateX(-2.7px);
  }
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    display: contents;
    color: white;
  }
`
const LogoExtendido = styled.p`
  display: inline-block;
  color: ${({ isTop }) => (isTop ? "white" : "rgba(54,73,89, 1)")};
  font-size: ${({ isMobile }) => (isMobile ? "14px" : "16px")};
  transition: 300ms color;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.1;
  margin: 0px 4px;
`
const BurgerMenuContainer = styled.div`
  display: ${({ isMobile }) => (isMobile ? "block" : "none")};
  width: 34px;
  height: 100%;
  cursor: pointer;
`

const animaL1 = keyframes` 
  0% {transform: translateY(0) rotate(0deg);}
  100% {transform: translateY(8px) rotate(45deg);}
`
const animaL2 = keyframes` 
  0%{ transform: scale(1); opacity: 1;}
  100%{ transform: scale(0);opacity: 0;}
`
const animaL3 = keyframes`
  0% {transform: translateY(0) rotate(0deg);}
  100% {transform: translateY(-8px) rotate(-45deg);}
`
const animaL1Re = keyframes` 
  0% {transform: translateY(8px) rotate(45deg);}
  100% {transform: translateY(0) rotate(0deg);}
`
const animaL2Re = keyframes` 
  0%{transform: scale(0);opacity: 0;}
  100%{ transform: scale(1); opacity: 1;}
`
const animaL3Re = keyframes`
  0% {transform: translateY(-8px) rotate(-45deg);}
  100% {transform: translateY(0) rotate(0deg);}
`

const LineTopBurger = styled.div`
  height: 4px;
  margin-top: 4px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(54, 73, 89, 1);
  ${({ isOpenBurgerMenu }) =>
    isOpenBurgerMenu
      ? css`
          animation: ${animaL1} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `
      : css`
          animation: ${animaL1Re} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `}
`
const LineBurger = styled.div`
  height: 4px;
  margin-top: 4px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(54, 73, 89, 1);

  transition: 300ms;
  ${({ isOpenBurgerMenu }) =>
    !isOpenBurgerMenu
      ? css`
          animation: ${animaL2} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `
      : css`
          animation: ${animaL2Re} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `}
`
const LineBottomBurger = styled.div`
  height: 4px;
  margin-top: 4px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(54, 73, 89, 1);
  ${({ isOpenBurgerMenu }) =>
    isOpenBurgerMenu
      ? css`
          animation: ${animaL3} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `
      : css`
          animation: ${animaL3Re} 0.7s cubic-bezier(0.08, 1.41, 0.66, 0.97)
            forwards;
        `}
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTop: window.location.pathname === "/" ? true : false,
      isOpenBurgerMenu: false,
      isMobile: window.innerWidth <= 800 ? true : false,
      isLogin: true,
    }
    this.handleIsTop = this.handleIsTop.bind(this)
    this.handleEventScroll = this.handleEventScroll.bind(this)
    this.handleEventResize = this.handleEventResize.bind(this)
    this.handleBurgerMenu = this.handleBurgerMenu.bind(this)
  }

  componentDidMount() {
    this.handleIsTop()
    this.props.refreshLogin()
    this.setState({ isLogin: false })
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.isLogin !== this.state.isLogin ||
      this.props.isLogin !== prevProps.isLogin
    ) {
      this.setState({ isLogin: this.props.isLogin })
    }

    if (window.location.pathname !== "/") {
      if (this.state.isTop === false) return
      this.setState({ isTop: false })
    }
  }

  handleIsTop = () => {
    window.addEventListener("resize", this.handleEventResize)
    if (this.state.isMobile) {
      this.setState({ isTop: false })
      return
    }
    if (window.location.pathname !== "/") return
    window.addEventListener("scroll", this.handleEventScroll)
  }

  handleEventScroll = () => {
    if (window.location.pathname !== "/") return
    if (window.scrollY < 6) {
      this.setState({ isTop: true })
    } else {
      this.setState({ isTop: false })
    }
  }
  handleEventResize = () => {
    if (window.innerWidth <= 800) {
      this.setState({ isMobile: true })
      this.setState({ isTop: false })
      window.removeEventListener("scroll", this.handleEventScroll)
      return
    } else {
      this.setState({ isMobile: false })
      if (window.location.pathname !== "/") return
      this.setState({ isTop: true })
    }
  }
  handleBurgerMenu = () => {
    let isOpenBurgerMenuNew = !this.state.isOpenBurgerMenu
    this.setState({ isOpenBurgerMenu: isOpenBurgerMenuNew })
    if (window.innerWidth <= 330) {
      if (isOpenBurgerMenuNew) {
        document.querySelector("html").style.overflowY = "hidden"
      } else {
        document.querySelector("html").style.overflow = "auto"
      }
    }
  }

  render() {
    return (
      <HeaderStyled isTop={this.state.isTop}>
        <HeaderContainer isMobile={this.state.isMobile}>
          <LogoContainer>
            <Link to="/">
              <Logo
                isTop={this.state.isTop}
                isMobile={this.state.isMobile}
                width="35.755131"
                height="49.011456"
                viewBox="0 0 35.755131 49.011456"
              >
                <path d="M 1.0219673,48.796884 C 0.7684833,48.671413 0.478109,48.415254 0.321967,48.179365 L 0.05514,47.776261 0.02757,42.613474 0,37.450687 l 3.2512205,-3.591803 3.25122,-3.591803 0.02635,-10.41062 0.02635,-10.4106202 0.289153,-0.379076 C 7.0033185,8.8582732 7.3262705,8.6023902 7.5619565,8.4981352 7.9765965,8.3147201 8.4206755,8.309437 21.272802,8.3350188 l 13.282329,0.026438 0.361571,0.2447084 c 0.198864,0.134589 0.468863,0.4012916 0.6,0.5926726 l 0.23843,0.347965 V 28.669848 47.792893 l -0.305797,0.384282 c -0.168189,0.211355 -0.503974,0.485532 -0.74619,0.609282 -0.440255,0.22493 -0.442034,0.225 -5.719203,0.225 h -5.278811 l -0.0015,-5.375 c -8.01e-4,-2.95625 -0.03459,-5.424513 -0.075,-5.48503 -0.194174,-0.290799 -0.559152,-0.33997 -2.523471,-0.33997 -1.964319,0 -2.329297,0.04917 -2.523468,0.33997 -0.04041,0.06052 -0.07416,2.52878 -0.075,5.48503 l -0.0015,5.375 -8.5250005,-7.9e-5 c -8.5146152,-7.9e-5 -8.5255282,-3e-4 -8.9581732,-0.214494 z M 16.14947,43.289206 c 0.129584,-0.185007 0.15567,-0.595559 0.15567,-2.45 0,-2.094416 -0.01197,-2.239719 -0.2,-2.427749 -0.188237,-0.188238 -0.333332,-0.2 -2.467125,-0.2 -1.969252,0 -2.291154,0.02175 -2.45,0.165499 -0.167186,0.151301 -0.182874,0.365149 -0.182874,2.492857 0,1.982447 0.02329,2.350647 0.157143,2.484501 0.133892,0.133892 0.502948,0.157143 2.494329,0.157143 2.301821,0 2.339543,-0.0034 2.492857,-0.222251 z m 14.972796,0.05675 c 0.167075,-0.1512 0.182874,-0.364346 0.182874,-2.467126 0,-2.001356 -0.02159,-2.325485 -0.165499,-2.484501 -0.151131,-0.166999 -0.36381,-0.182874 -2.45,-0.182874 -2.151168,0 -2.296174,0.01167 -2.484501,0.2 -0.18803,0.18803 -0.2,0.333333 -0.2,2.427749 0,1.854441 0.02609,2.264993 0.15567,2.45 0.153231,0.218768 0.191895,0.222251 2.467126,0.222251 2.010502,0 2.335266,-0.02155 2.49433,-0.165499 z M 16.061028,35.869673 c 0.180616,-0.131927 0.196225,-0.299448 0.224499,-2.409332 0.02588,-1.931522 0.007,-2.303211 -0.127305,-2.508215 L 16.00053,30.711457 h -2.340551 c -1.994442,0 -2.36379,0.02324 -2.497695,0.157143 -0.133788,0.133787 -0.157143,0.500475 -0.157143,2.467126 0,2.009131 0.02155,2.3338 0.165499,2.492857 0.151053,0.166913 0.363215,0.182874 2.430886,0.182874 1.7974,0 2.305488,-0.02929 2.459502,-0.141784 z m 7.544112,-0.05822 c 0.188238,-0.188238 0.2,-0.333333 0.2,-2.467126 0,-1.969252 -0.02175,-2.291153 -0.165499,-2.45 -0.1512,-0.167075 -0.364346,-0.182874 -2.467126,-0.182874 -2.001356,0 -2.325485,0.02159 -2.484501,0.165499 -0.167193,0.151307 -0.182874,0.365195 -0.182874,2.494329 0,2.293186 0.0034,2.331214 0.222251,2.484502 0.185007,0.129584 0.595559,0.15567 2.45,0.15567 2.094416,0 2.239719,-0.01197 2.427749,-0.2 z m 7.517126,0.0345 c 0.167075,-0.1512 0.182874,-0.364346 0.182874,-2.467126 0,-2.001356 -0.02159,-2.325485 -0.165499,-2.484501 -0.151307,-0.167193 -0.365195,-0.182874 -2.494329,-0.182874 -2.293186,0 -2.331214,0.0034 -2.484502,0.222251 -0.129584,0.185007 -0.15567,0.595559 -0.15567,2.45 0,2.094416 0.01197,2.239719 0.200001,2.427749 0.188237,0.188238 0.333333,0.2 2.467126,0.2 1.969251,0 2.291153,-0.02174 2.449999,-0.165499 z M 15.96517,28.334926 c 0.293386,-0.1959 0.33997,-0.558277 0.33997,-2.644644 0,-1.769883 -0.02658,-2.172274 -0.15567,-2.356574 -0.153314,-0.218888 -0.191036,-0.222251 -2.492857,-0.222251 -1.991381,0 -2.360437,0.02325 -2.494329,0.157143 -0.133892,0.133892 -0.157143,0.502948 -0.157143,2.494329 0,2.301821 0.0034,2.339543 0.222251,2.492858 0.185,0.129579 0.591435,0.155413 2.425,0.154139 1.211511,-8e-4 2.252261,-0.03459 2.312778,-0.075 z m 7.63997,-0.123469 c 0.188238,-0.188238 0.2,-0.333333 0.2,-2.467126 0,-1.969252 -0.02175,-2.291153 -0.165499,-2.45 -0.151301,-0.167186 -0.365149,-0.182874 -2.492856,-0.182874 -1.982447,0 -2.350647,0.02329 -2.484501,0.157143 -0.133892,0.133892 -0.157143,0.502948 -0.157143,2.494329 0,2.301821 0.0034,2.339543 0.222251,2.492858 0.185007,0.129584 0.595559,0.15567 2.45,0.15567 2.094416,0 2.239719,-0.01197 2.427748,-0.2 z m 7.47775,0.04433 c 0.218888,-0.153315 0.222251,-0.191037 0.222251,-2.492858 0,-1.991381 -0.02325,-2.360437 -0.157143,-2.494329 -0.133788,-0.133787 -0.500475,-0.157143 -2.467127,-0.157143 -2.00913,0 -2.333799,0.02155 -2.492857,0.165499 -0.166999,0.151132 -0.182874,0.363811 -0.182874,2.45 0,2.151168 0.01167,2.296174 0.200001,2.484501 0.188029,0.18803 0.333333,0.2 2.427748,0.2 1.854442,0 2.264993,-0.02609 2.450001,-0.15567 z M 16.114146,20.625379 c 0.174919,-0.216209 0.190994,-0.41938 0.190994,-2.413922 0,-1.995295 -0.01602,-2.197631 -0.191165,-2.413922 -0.190845,-0.235685 -0.194981,-0.236078 -2.48463,-0.236078 -1.80855,0 -2.3288,0.02933 -2.460581,0.138694 -0.14911,0.12375 -0.164236,0.398198 -0.14037,2.547107 l 0.02675,2.408413 0.25,0.129317 c 0.187048,0.09675 0.799952,0.122663 2.434006,0.102893 2.159835,-0.02613 2.186119,-0.02904 2.374999,-0.262502 z m 7.322568,0.171108 c 0.120134,-0.06323 0.251488,-0.164484 0.291895,-0.225 0.04041,-0.06052 0.07416,-1.130566 0.075,-2.377887 0.0016,-2.439541 -0.01192,-2.506414 -0.535309,-2.637776 -0.12257,-0.03076 -1.180626,-0.04208 -2.351235,-0.02515 -1.971785,0.02852 -2.13881,0.04507 -2.270152,0.224896 -0.112464,0.153983 -0.141773,0.661702 -0.141773,2.455887 0,2.311419 0.02834,2.497773 0.4,2.630602 0.311509,0.11133 4.309876,0.07112 4.531574,-0.04557 z m 7.726643,-0.129143 c 0.207179,-0.283644 0.207179,-4.62813 0,-4.911774 -0.131825,-0.180476 -0.299028,-0.196233 -2.379943,-0.224282 -2.154077,-0.02904 -2.248304,-0.02219 -2.508216,0.182258 l -0.270057,0.212427 v 2.285484 2.285484 l 0.270057,0.212427 c 0.259912,0.204446 0.354139,0.211293 2.508216,0.182258 2.080916,-0.02805 2.248119,-0.04381 2.379943,-0.224282 z M 9.8251405,6.8914569 C 9.6502365,6.7165525 9.6717715,6.5621142 10.014527,5.533283 10.184689,5.0225154 10.298559,4.5385418 10.26757,4.4577861 10.236581,4.3770304 9.8274805,4.0319046 9.3584575,3.6908399 8.4498375,3.0301076 8.2833175,2.7905783 8.5481825,2.5253061 c 0.126726,-0.1269205 0.409641,-0.171448 1.255266,-0.1975638 0.7153765,-0.022093 1.1274855,-0.076873 1.1955795,-0.1589212 0.05715,-0.068864 0.250657,-0.5447341 0.430012,-1.0574899 0.518306,-1.48177492 0.833896,-1.48177492 1.3522,0 0.179356,0.5127558 0.376115,0.9925478 0.437244,1.0662044 0.08032,0.096776 0.410872,0.1339212 1.191759,0.1339212 0.849041,0 1.114287,0.033675 1.237755,0.1571429 0.30677,0.3067702 0.181382,0.4770926 -1.017857,1.382619 -0.723107,0.5460065 -0.728071,0.5687374 -0.373513,1.7102381 0.278213,0.8957079 0.303289,1.1552237 0.128513,1.3300001 -0.20467,0.2046703 -0.372085,0.1393376 -1.23,-0.4800001 -0.45712,-0.33 -0.917404,-0.6 -1.022853,-0.6 -0.105448,0 -0.560325,0.27 -1.010835,0.6 -0.827211,0.6059327 -1.077647,0.6986648 -1.2963125,0.4800001 z M 18.902226,6.8060119 C 18.814537,6.6421642 18.85629,6.4084206 19.108435,5.6515704 19.293638,5.0956511 19.39955,4.6112178 19.364133,4.4820153 19.330778,4.360335 18.934148,3.9922289 18.479407,3.6609148 17.660492,3.0642715 17.44091,2.7356865 17.69279,2.4838064 17.75031,2.4262854 18.327871,2.3527256 18.976258,2.3203399 l 1.178883,-0.058883 0.350978,-1.0209791 c 0.391571,-1.13905824 0.472966,-1.26052544 0.812488,-1.21248744 0.201784,0.02855 0.287953,0.1804758 0.586534,1.03413204 0.192499,0.5503661 0.386406,1.0566161 0.430902,1.125 0.05602,0.08609 0.404081,0.1243345 1.131574,0.1243345 1.154679,0 1.437524,0.087255 1.437524,0.4434633 0,0.181418 -0.2094,0.3923391 -0.9,0.9065367 -0.495,0.3685605 -0.9,0.7420255 -0.9,0.8299222 0,0.087897 0.145065,0.6023851 0.322367,1.1433077 0.247112,0.7539016 0.297253,1.023564 0.214788,1.155133 -0.198854,0.3172583 -0.480754,0.2385003 -1.339743,-0.3743007 -0.465706,-0.3322342 -0.929886,-0.6040622 -1.031511,-0.6040622 -0.101625,0 -0.558781,0.27 -1.015901,0.6 -0.885022,0.6389071 -1.176628,0.723949 -1.352915,0.394555 z m 9.022914,0.085445 C 27.750237,6.7165525 27.771772,6.5621142 28.114526,5.533283 28.284688,5.0225154 28.398559,4.5385418 28.367569,4.4577861 28.33658,4.3770304 27.92748,4.0319046 27.458457,3.6908399 26.070656,2.6816551 26.166675,2.4132339 27.943537,2.3348215 l 1.155615,-0.050997 0.152017,-0.4111839 c 0.08361,-0.2261511 0.253706,-0.6993149 0.377994,-1.05147524 0.415258,-1.17660358 0.767581,-1.09495338 1.252077,0.29016584 0.179356,0.5127558 0.376115,0.9925478 0.437244,1.0662044 0.08032,0.096776 0.410871,0.1339212 1.191758,0.1339212 0.849041,0 1.114287,0.033675 1.237755,0.1571429 0.306771,0.3067702 0.181383,0.4770926 -1.017857,1.382619 -0.710557,0.5365299 -0.732838,0.6169927 -0.420806,1.5195831 0.344737,0.9971913 0.395226,1.3269489 0.228673,1.4935023 -0.238634,0.2386337 -0.407676,0.1789624 -1.282867,-0.4528473 -0.457119,-0.33 -0.915951,-0.6 -1.019622,-0.6 -0.103673,0 -0.556345,0.27 -1.005938,0.6 -0.823473,0.6044265 -1.084106,0.7003327 -1.30444,0.4800001 z" />
              </Logo>
              <LogoExtendido
                isTop={this.state.isTop}
                isMobile={this.state.isMobile}
              >
                Es Tú Hotel <br />
                Apartamento
              </LogoExtendido>
            </Link>
          </LogoContainer>
          <BurgerMenuContainer
            isMobile={this.state.isMobile}
            onClick={() => this.handleBurgerMenu()}
          >
            <LineTopBurger isOpenBurgerMenu={this.state.isOpenBurgerMenu} />
            <LineBurger isOpenBurgerMenu={this.state.isOpenBurgerMenu} />
            <LineBottomBurger isOpenBurgerMenu={this.state.isOpenBurgerMenu} />
          </BurgerMenuContainer>

          <NavStyled
            isTop={this.state.isTop}
            isMobile={this.state.isMobile}
            isOpenBurgerMenu={this.state.isOpenBurgerMenu}
          >
            <Link to="/servicios/"  onClick={()=> this.handleBurgerMenu()}>
              <span> Servicios </span>
            </Link>
            <Link to="/habitaciones/" onClick={()=> this.handleBurgerMenu()}>
              <span> Habitaciones </span>
            </Link>
            <Link to="/reservar/" onClick={()=> this.handleBurgerMenu()}>
              <span> Reservar </span>
            </Link>
            {this.state.isLogin === false ? (
              <>
                <Link to="/log-in/" onClick={()=> this.handleBurgerMenu()}>
                  <span> Iniciar seción</span>
                </Link>
                <Link to="/sign-in/" onClick={()=> this.handleBurgerMenu()}>
                  <span> Registrarse </span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/perfil/" onClick={()=> this.handleBurgerMenu()}>
                  <span>My perfil</span>
                </Link>
              </>
            )}
          </NavStyled>
        </HeaderContainer>
      </HeaderStyled>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.loginRegisterUser.isLogin,
})

const mapDispatchToProps = dispath => ({
  refreshLogin: () => dispath(refreshLoginOperation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
