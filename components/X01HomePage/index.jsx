import React from "react";
import Navbar from "../Navbar";
import Button2 from "../Button2";
import ContentWrapper6 from "../ContentWrapper6";
import ContentWrapper from "../ContentWrapper";
import ContentWrapper2 from "../ContentWrapper2";
import ContentWrapper3 from "../ContentWrapper3";
import Image from "../Image";
import ContentWrapper22 from "../ContentWrapper22";
import Component1 from "../Component1";
import Button3 from "../Button3";
import FooterSection from "../FooterSection";
import "./X01HomePage.css";

class X01HomePage extends React.Component {
  render() {
    const {
      hintiz_0011,
      title,
      metaversalFashionB,
      overlapGroup1,
      digital,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      hintiz_Phy0011,
      physical,
      getYourUniqueEyewearNow,
      onChainFlowers,
      rare1,
      no31,
      common1,
      no55,
      ultraRare1,
      no97,
      rare2,
      no12,
      common2,
      no34,
      ultraRare2,
      visionForFuture,
      hintizGenesisColle1,
      takashi_3D1,
      number,
      text1,
      text2,
      quantity,
      place,
      surname,
      mint,
      group7,
      ceo,
      leftCreatorImage1,
      alex_Back0021,
      web3Dev,
      leftCreatorImage2,
      group9,
      leftCreatorImage3,
      artDirector,
      roadmap,
      hintizGenesisColle2,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
      spanText10,
      spanText11,
      spanText12,
      x3D_Modeling_003B1,
      frequentlyAskedQuestions,
      image1,
      no88,
      rare3,
      image2,
      no32,
      common3,
      getYoursNow,
      ownersFromMinting,
      navbarProps,
      button2Props,
      contentWrapper6Props,
      image1Props,
      image2Props,
      image3Props,
      image4Props,
      image5Props,
      image6Props,
      contentWrapper221Props,
      contentWrapper222Props,
      contentWrapper223Props,
      component1Props,
      button3Props,
      footerSectionProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="x01-home-page screen">
          <div className="hero-section">
            <div className="overlap-group">
              <img className="hintiz_001-1" src={hintiz_0011} />
              <Navbar
                digital={navbarProps.digital}
                physical={navbarProps.physical}
                creator={navbarProps.creator}
                roadmap={navbarProps.roadmap}
                buttonProps={navbarProps.buttonProps}
              />
              <div className="hero-section-1">
                <h1 className="title fjallaone-normal-snow-drift-110px">{title}</h1>
                <div className="content-wrapper">
                  <div className="metaversal-fashion-b fjallaone-normal-snow-drift-28px">{metaversalFashionB}</div>
                  <Button2 viewOnOpensea={button2Props.viewOnOpensea} />
                </div>
              </div>
            </div>
          </div>
          <div className="x999-unique-section" id="999-unique-section">
            <div className="x999-section">
              <div className="overlap-group-1">
                <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <div className="digital fjallaone-normal-snow-drift-110px">{digital}</div>
                  <div className="content-wrapper-1">
                    <div className="ownership-claim-your fjallaone-normal-snow-drift-55px">
                      <span className="fjallaone-normal-snow-drift-55px">{spanText1}</span>
                      <span className="fjallaone-normal-snow-drift-16px">{spanText2}</span>
                    </div>
                  </div>
                  <ContentWrapper6
                    spanText1={contentWrapper6Props.spanText1}
                    spanText2={contentWrapper6Props.spanText2}
                  />
                </div>
                <div className="vip-access-piys-nft fjallaone-normal-snow-drift-55px">
                  <span className="fjallaone-normal-snow-drift-55px">{spanText3}</span>
                  <span className="fjallaone-normal-snow-drift-16px">{spanText4}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="x999-unique-section-1" id="999-unique-section">
            <div className="x999-section-1">
              <div className="overlap-group-2">
                <img className="hintiz_phy001-1" src={hintiz_Phy0011} />
                <div className="hero-section-2">
                  <div className="physical fjallaone-normal-snow-drift-100px">{physical}</div>
                  <ContentWrapper />
                  <ContentWrapper2 />
                  <ContentWrapper3 />
                </div>
              </div>
            </div>
          </div>
          <div className="get-your-unique-section">
            <div className="get-your-unique-content">
              <div className="get-your-unique-eyewear-now fjallaone-normal-snow-drift-70px">
                {getYourUniqueEyewearNow}
              </div>
              <div className="crystal-cards-wrapper">
                <div className="crystal-wrapper">
                  <div className="rare-1">
                    <div className="content">
                      <Image src={image1Props.src} />
                      <div className="table-content-wrapper">
                        <div className="text-wrapper">
                          <div className="on-chain-flowers fjallaone-normal-snow-drift-18px">{onChainFlowers}</div>
                          <div className="rare fjallaone-normal-snow-drift-20px">{rare1}</div>
                        </div>
                        <img className="shape" src="/img/shape@2x.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="common-1">
                    <div className="content">
                      <Image src={image2Props.src} />
                      <div className="table-content-wrapper">
                        <div className="text-wrapper">
                          <div className="no-3 fjallaone-normal-snow-drift-18px">{no31}</div>
                          <div className="common fjallaone-normal-snow-drift-20px">{common1}</div>
                        </div>
                        <img className="shape" src="/img/shape@2x.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="ultra-rare-1">
                    <div className="content">
                      <Image src={image3Props.src} />
                      <div className="table-content-wrapper">
                        <div className="text-wrapper">
                          <div className="no-55 fjallaone-normal-snow-drift-18px">{no55}</div>
                          <div className="ultra-rare fjallaone-normal-snow-drift-20px">{ultraRare1}</div>
                        </div>
                        <img className="shape" src="/img/shape@2x.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crystal-wrapper">
                  <div className="rare-2">
                    <div className="content">
                      <Image src={image4Props.src} />
                      <div className="table-content-wrapper">
                        <div className="text-wrapper">
                          <div className="no-97 fjallaone-normal-snow-drift-18px">{no97}</div>
                          <div className="rare fjallaone-normal-snow-drift-20px">{rare2}</div>
                        </div>
                        <img className="shape-1" src="/img/shape@2x.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="common-2">
                    <div className="content">
                      <Image src={image5Props.src} />
                      <div className="table-content-wrapper">
                        <div className="text-wrapper-1">
                          <div className="no-12 fjallaone-normal-snow-drift-18px">{no12}</div>
                          <div className="common fjallaone-normal-snow-drift-20px">{common2}</div>
                        </div>
                        <img className="shape-1" src="/img/shape@2x.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="ultra-rare-2">
                    <div className="content">
                      <Image src={image6Props.src} />
                      <div className="table-content-wrapper">
                        <div className="text-wrapper-1">
                          <div className="no-34 fjallaone-normal-snow-drift-18px">{no34}</div>
                          <div className="ultra-rare fjallaone-normal-snow-drift-20px">{ultraRare2}</div>
                        </div>
                        <img className="shape-1" src="/img/shape@2x.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="attribute-section">
            <div className="attribute-content">
              <div className="overlap-group1-1">
                <div className="overlap-group-3">
                  <div className="attribute-content-1">
                    <div className="vision-for-future fjallaone-normal-snow-drift-70px">{visionForFuture}</div>
                    <div className="content-2">
                      <div className="hintiz-genesis-colle fjallaone-normal-snow-drift-28px">{hintizGenesisColle1}</div>
                    </div>
                  </div>
                  <img className="takashi_3-d-1" src={takashi_3D1} />
                </div>
                <div className="shapes border-1px-blackblack-200">
                  <div className="number fjallaone-normal-snow-drift-22px">{number}</div>
                </div>
                <div className="shapes-1 border-1px-blackblack-200">
                  <div className="text-1 fjallaone-normal-snow-drift-22px">{text1}</div>
                </div>
                <div className="shapes-2 border-1px-blackblack-200">
                  <div className="text-2 fjallaone-normal-snow-drift-22px">{text2}</div>
                </div>
                <div className="quantity fjallaone-normal-snow-drift-22px">{quantity}</div>
                <div className="materials border-1px-blackblack-200">
                  <div className="place fjallaone-normal-snow-drift-22px">{place}</div>
                </div>
                <div className="surname fjallaone-normal-snow-drift-22px">{surname}</div>
              </div>
              <div className="materials-1 border-1px-blackblack-200">
                <div className="mint">{mint}</div>
              </div>
            </div>
          </div>
          <div className="creator-content">
            <div className="group-7" style={{ backgroundImage: `url(${group7})` }}>
              <div className="wrapper-container">
                <div className="creator-content-wrapper">
                  <div className="ceo fjallaone-normal-silver-70px">{ceo}</div>
                  <ContentWrapper22
                    hint={contentWrapper221Props.hint}
                    asSeniorProductDe={contentWrapper221Props.asSeniorProductDe}
                  />
                </div>
                <img className="social-icons-wrapper" src="/img/social-icons-wrapper@2x.svg" />
              </div>
              <img className="left-creator-image" src={leftCreatorImage1} />
            </div>
          </div>
          <div className="creator-content-1">
            <div className="group-8">
              <div className="overlap-group-4">
                <img className="alex_back002-1" src={alex_Back0021} />
                <div className="creator-content-wrapper-1">
                  <div className="web3-dev fjallaone-normal-silver-70px">{web3Dev}</div>
                  <ContentWrapper22
                    hint={contentWrapper222Props.hint}
                    asSeniorProductDe={contentWrapper222Props.asSeniorProductDe}
                    className={contentWrapper222Props.className}
                  />
                  <img className="social-icons-wrapper-1" src="/img/social-icons-wrapper-1@2x.svg" />
                </div>
                <img className="left-creator-image-1" src={leftCreatorImage2} />
              </div>
            </div>
          </div>
          <div className="creator-content-2">
            <div className="group-9" style={{ backgroundImage: `url(${group9})` }}>
              <img className="left-creator-image-2" src={leftCreatorImage3} />
              <div className="wrapper-container-1">
                <div className="creator-content-wrapper-2">
                  <div className="art-director fjallaone-normal-silver-70px">{artDirector}</div>
                  <ContentWrapper22
                    hint={contentWrapper223Props.hint}
                    asSeniorProductDe={contentWrapper223Props.asSeniorProductDe}
                    className={contentWrapper223Props.className}
                  />
                </div>
                <img className="social-icons-wrapper-2" src="/img/social-icons-wrapper-2@2x.svg" />
              </div>
            </div>
          </div>
          <div className="roadmap-section" id="roadmap-section">
            <div className="overlap-group2">
              <div className="attribute-section-1">
                <div className="attribute-content-2">
                  <div className="roadmap">{roadmap}</div>
                  <div className="hintiz-genesis-colle-1">{hintizGenesisColle2}</div>
                  <div className="group-1">
                    <div className="address fjallaone-normal-hunter-green-24px">
                      <span className="fjallaone-normal-hunter-green-24px">{spanText5}</span>
                      <span className="span1 fjallaone-normal-hunter-green-20px">{spanText6}</span>
                    </div>
                    <div className="address-1 fjallaone-normal-white-24px">
                      <span className="fjallaone-normal-hunter-green-24px">{spanText7}</span>
                      <span className="span1 fjallaone-normal-hunter-green-20px">{spanText8}</span>
                    </div>
                    <div className="address-2 fjallaone-normal-white-24px">
                      <span className="fjallaone-normal-hunter-green-24px">{spanText9}</span>
                      <span className="span1 fjallaone-normal-hunter-green-20px">{spanText10}</span>
                    </div>
                    <div className="address-3 fjallaone-normal-white-24px">
                      <span className="fjallaone-normal-hunter-green-24px">{spanText11}</span>
                      <span className="span1 fjallaone-normal-hunter-green-20px">{spanText12}</span>
                    </div>
                  </div>
                </div>
              </div>
              <img className="x3-d_modeling_003b-1" src={x3D_Modeling_003B1} />
            </div>
          </div>
          <div className="group-3">
            <div className="faq-section">
              <div className="frequently-asked-questions">{frequentlyAskedQuestions}</div>
              <Component1
                acrd1Props={component1Props.acrd1Props}
                acrd21Props={component1Props.acrd21Props}
                acrd22Props={component1Props.acrd22Props}
                acrd2Props={component1Props.acrd2Props}
              />
            </div>
          </div>
          <div className="get-yours-section">
            <div className="get-your-content">
              <div className="cards-wrapper">
                <div className="rare-3">
                  <div className="content-1">
                    <div className="image">
                      <div className="overlap-group-5">
                        <div className="bg"></div>
                        <img className="image-1" src={image1} />
                      </div>
                    </div>
                    <div className="table-content-wrapper-1">
                      <div className="text-wrapper">
                        <div className="no-88 fjallaone-normal-white-18px">{no88}</div>
                        <div className="rare-4 fjallaone-normal-white-22px">{rare3}</div>
                      </div>
                      <img className="shape-1" src="/img/shape-6@2x.svg" />
                    </div>
                  </div>
                </div>
                <div className="common-wrapper">
                  <div className="x100px-spacer"></div>
                  <div className="common-3">
                    <div className="content-1">
                      <div className="image-2">
                        <img className="image-3" src={image2} />
                      </div>
                      <div className="table-content-wrapper-1">
                        <div className="text-wrapper">
                          <div className="no-3 fjallaone-normal-white-18px">{no32}</div>
                          <div className="common-4 fjallaone-normal-white-22px">{common3}</div>
                        </div>
                        <img className="shape-1" src="/img/shape-7@2x.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="get-yours-card-wrapper">
                <div className="content-wrapper-2">
                  <div className="get-yours-content">
                    <div className="get-yours-now">{getYoursNow}</div>
                    <p className="owners-from-minting">{ownersFromMinting}</p>
                  </div>
                  <Button3 viewOnOpensea={button3Props.viewOnOpensea} />
                </div>
              </div>
            </div>
          </div>
          <FooterSection {...footerSectionProps} />
        </div>
      </div>
    );
  }
}

export default X01HomePage;
