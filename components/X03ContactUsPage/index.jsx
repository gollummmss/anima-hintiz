import React from "react";
import Navbar22 from "../Navbar22";
import NameBlock from "../NameBlock";
import Button32 from "../Button32";
import FooterSection22 from "../FooterSection22";
import "./X03ContactUsPage.css";

class X03ContactUsPage extends React.Component {
  render() {
    const {
      haveAQuestion,
      loremIpsumDolorSi,
      howCanIHelp,
      enterMessageHere,
      image,
      fococlipping,
      nameBlock1Props,
      nameBlock2Props,
      button32Props,
      footerSection2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="x03-contact-us-page screen">
          <div className="hero-section-3">
            <Navbar22 />
            <div className="form-content-wrapper">
              <div className="flex-row">
                <div className="form">
                  <div className="title-wrapper">
                    <div className="have-a-question">{haveAQuestion}</div>
                    <div className="lorem-ipsum-dolor-si alumnisans-normal-white-28px">{loremIpsumDolorSi}</div>
                  </div>
                  <div className="form-block">
                    <NameBlock
                      firstName1Props={nameBlock1Props.firstName1Props}
                      firstName2Props={nameBlock1Props.firstName2Props}
                    />
                    <NameBlock
                      firstName1Props={nameBlock2Props.firstName1Props}
                      firstName2Props={nameBlock2Props.firstName2Props}
                    />
                    <div className="button-wrapper">
                      <div className="help textsmall-regular">
                        <div className="how-can-i-help">{howCanIHelp}</div>
                        <div className="placeholder-wrapper border-1px-blackblack-700">
                          <div className="enter-message-here">{enterMessageHere}</div>
                        </div>
                      </div>
                      <Button32>{button32Props.children}</Button32>
                    </div>
                  </div>
                </div>
                <img className="image-8" src={image} />
              </div>
              <img className="fococlipping" src={fococlipping} />
            </div>
          </div>
          <FooterSection22 logoWrapperProps={footerSection2Props.logoWrapperProps} />
        </div>
      </div>
    );
  }
}

export default X03ContactUsPage;
