/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const { MarkdownBlock, GridBlock, Container } = CompLibrary; /* Used to read markdown */

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}${language ? `${language}/` : ""}${doc}`;
}

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}
class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button hero" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <React.Fragment>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={"img/box.png"} alt="OpEn logo" width={100} height={100} />
      <h1 className="projectTitle">{siteConfig.title}</h1>
    </div>
    <h2 style={{ marginTop: "0.5em" }}>
      Optimization Engine
    </h2>
    <p>
      Fast &amp; Accurate Embedded Optimization<br/> for next-generation Robotics and Autonomous Systems
    </p>
  </React.Fragment>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || "";
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl("docs/open-intro", language)}>
              Get Started
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    id={props.id}
    background={props.background}
    className={props.className}
  >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const FeaturesTop = props => (
  <Block layout="threeColumn" className="featureBlock">
    {[
      {
        content: "All numerical routines are written in **Rust**: a **fast** and **safe** programming language, which is ideal for embedded applications.",
        image: imgUrl("microchip.svg"),
        imageAlign: 'top',
        title: "Embeddable"
      },
      {
        content: "**Optimization Engine** can produce solutions of high accuracy thanks to the fast convergence properties of its numerical algorithm (PANOC).",
        image: imgUrl("bullseye.svg"),
        imageAlign: 'top',
        title: "Accurate"
      },
      {
        content: "**Sub-millisecond** fast numerical nonconvex optimization tested on several platforms.",
        image: imgUrl("rocket.svg"),
        imageAlign: 'top',
        title: "Fast"
      }
    ]}
  </Block>
);

const FeaturesTopTwo = props => (
  <Block layout="threeColumn" className="featureBlock">
    {[
      {
        content: "**OpEn** is **seriously** easy to use! You can call if from Rust, MATLAB, Python and other programming languages - even over the Internet!",
        image: imgUrl("happy.png"),
        imageAlign: 'top',
        title: "User Friendly"
      },
      {
        content: "**OpEn is open**: it is a free, open source, MIT/Apachev2-licensed software with a growing community that actively supports its development. Reach us [here](/optimization-engine/blog/2019/03/06/talk-to-us).",
        image: imgUrl("open.png"),
        imageAlign: 'top',
        title: "Community"
      },
      {
        content: "**Well documented** with lots of examples.",
        image: imgUrl("saturn.png"),
        imageAlign: 'top',
        title: "Documented"
      }
    ]}
  </Block>

);

const AboutOpen = props => (
  <Block className="aboutBlock">
    {[
      {
        content: "<div style='text-align:left'><p><b>Design &amp; Deploy</b> your high-performance embedded optimizer in no time... <ul><li>Formulate your problem in Python or MATLAB</li><li>Build an optimizer (Rust)</li><li>Consume it over a TCP interface or</li><li>Call it in C/C++ (and ROS), or Rust</li></ul></p> Focus on your design, not numerical optimization!</div>",
        image: imgUrl("about-open.png"),
        imageAlign: 'left',
        title: "Embedded Optimization Made Easy"
      }
    ]}
  </Block>

);

const ModelPredictiveControl = props => (
  <Block className="mpcBlock">
    {[
      {
        content: "<div style='text-align:left'><p><b>Model Predictive Control</b> (MPC) is a powerful optimization-based control methodology.</div>",
        image: imgUrl("mpc56.png"),
        imageAlign: 'left',
        title: "Model Predictive Control"
      }
    ]}
  </Block>

);

const MovingHorizonEstimation = props => (
  <Block className="mpcBlock">
    {[
      {
        content: "<div style='text-align:left'><p><b>Moving Horizon Estimation</b> (MHE) is the bee's knees of nonlinear estimation: it is an optimization-based estimator for constrained nonlinear systems.</div>",
        image: imgUrl("mhe.png"),
        imageAlign: 'left',
        title: "Moving Horizon Estimation"
      }
    ]}
  </Block>

);


const SuperFastBlock = props => (
  <Block className="mpcBlock">
    {[
      {
        content: "<div style='text-align:left'><p><b>Blazingly Fast Numerical Optimization</b>: OpEn combines extremely fast numerical optimization methods (<a href='docs/algorithm'>see details</a>) with Rust - a fast and safe programming language, which is ideal for embedded applications.</div>",
        image: imgUrl("openbenchmark.png"),
        imageAlign: 'left',
        title: "Blazingly Fast"
      }
    ]}
  </Block>

);



const pre = '```';
const codeExample = `${pre}python
import opengen as og
import casadi.casadi as cs

u = cs.SX.sym("u", 5)                     # -- decision variables
p = cs.SX.sym("p", 2)                     # -- parameters
phi = og.functions.rosenbrock(u, p)       # -- cost
c = 1.5 * cs.cos(u[0]) - u[1]             # -- constraints
bounds = og.constraints.Ball2(None, 1.5)  # -- bounds on u
problem = og.builder.Problem(u, p, phi) \\
    .with_penalty_constraints(c) \\
    .with_constraints(bounds)             # -- construct problem
build_config = og.config.BuildConfiguration()  \\
    .with_build_mode(og.config.BuildConfiguration.DEBUG_MODE)  \\
    .with_tcp_interface_config()          # -- build configuration
meta = og.config.OptimizerMeta()  \\
    .with_optimizer_name("my_optimizer")
solver_config = og.config.SolverConfiguration()  \\
    .with_tolerance(1e-5)
builder = og.builder.OpEnOptimizerBuilder(problem, meta,
                                          build_config, 
                                          solver_config)
builder.build()
    `;

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <AboutOpen />
          <div className="productShowcaseSection">
              <div>
                  <h3>Easy Code Generation</h3>
                  <p>You can install OpEn in Python using <code>pip</code> (read the <a href="docs/installation">installation instructions</a>) and generate your first optimizer in a few minutes!</p>
                  <img src="img/open-promo.gif"/>
                  <p/>
              </div>
            <Container background="light">
              <FeaturesTop />
              <FeaturesTopTwo />
            </Container>                    
          </div>
          <Container>
              <SuperFastBlock />
              <ModelPredictiveControl />
              <MovingHorizonEstimation />
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;

