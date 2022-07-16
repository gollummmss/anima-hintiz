import React from "react";
import Navbar22 from "../Navbar22";
import FooterSection22 from "../FooterSection22";
import "./X02PrivacyPolicyPage.css";

class X02PrivacyPolicyPage extends React.Component {
  render() {
    const {
      x02PrivacyPolicyPage,
      hintizTermsAndConditions,
      lastUpdatedJuly2022,
      hintizIsACollecti,
      ownership,
      youOwnTheNftEac,
      spanText1,
      spanText2,
      limitationOfLiability,
      youUnderstandAndA,
      youAgreeThatOurT,
      youAcknowledgeAnd,
      indemnification,
      youAgreeToHoldHa,
      riskAssumption,
      navbar22Props,
      footerSection2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="x02-privacy-policy-page screen">
          <div className="overlap-group-6">
            <img className="x02-privacy-policy-page-1" src={x02PrivacyPolicyPage} />
            <div className="hero-section-4">
              <Navbar22 className={navbar22Props.className} />
              <div className="privacy-policy-wrapper">
                <div className="title-wrapper-1">
                  <div className="title-wrapper-2">
                    <div className="hintiz-terms-and-conditions">{hintizTermsAndConditions}</div>
                    <div className="last-updated-july-2022">{lastUpdatedJuly2022}</div>
                  </div>
                  <div className="hintiz-is-a-collecti alumnisans-normal-white-28px">{hintizIsACollecti}</div>
                </div>
                <div className="collect-info-wrapper">
                  <div className="ownership alumnisans-semi-bold-white-35px">{ownership}</div>
                  <div className="collect-info">
                    <div className="you alumnisans-normal-white-28px">{youOwnTheNftEac}</div>
                    <div className="personal-use-subjec alumnisans-bold-white-28px">
                      <span className="alumnisans-bold-white-28px">{spanText1}</span>
                      <span className="alumnisans-normal-white-28px">{spanText2}</span>
                    </div>
                    <div className="commercial-use-subj">
                      Commercial Use. Subject to your continued compliance with these Terms, you are granted an
                      unlimited, worldwide license to use, copy, and display the purchased Art for the purpose of
                      creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use
                      would e.g. be the use of the Art to produce and sell physical version of HINTIZ utilizing the
                      design and 3D printing files provided. For the sake of clarity, nothing in this Section will be
                      deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of
                      HINTIZ generally, provided that the marketplace cryptographically verifies each HINTIZ owner’s
                      rights to display the Art for their HINTIZ to ensure that only the actual owner can display the
                      Art; (ii) owning or operating a third party website or application that permits the inclusion,
                      involvement, or participation of HINTIZ generally, provided that the third party website or
                      application cryptographically verifies each HINTIZ owner’s rights to display the Art for their
                      HINTIZ to ensure that only the actual owner can display the Art, and provided that the Art is no
                      longer visible once the owner of the Purchased HINTIZ leaves the website/application; or (iii)
                      earning revenue from any of the foregoing.
                      <br />
                      <br />
                      HINTIZ IP. Other than the rights to the Art and 3D printing files, nothing herein gives you any
                      rights to any other trademarks or other intellectual property rights belonging to HINTIZ Labs
                      including, without limitation, to HINTIZ, HINTIZ eyewear, PIYS, Print It Yourself and the
                      associated logos. All of these rights are expressly reserved in the name of HINTIZ Labs LLC.
                    </div>
                  </div>
                </div>
                <div className="information-wrapper">
                  <div className="ation alumnisans-semi-bold-white-35px">{limitationOfLiability}</div>
                  <div className="information alumnisans-normal-white-28px">
                    <div className="you">{youUnderstandAndA}</div>
                    <div className="you-agree-that-our-t">{youAgreeThatOurT}</div>
                    <div className="you-acknowledge-and">{youAcknowledgeAnd}</div>
                  </div>
                </div>
                <div className="cookies-wrapper">
                  <div className="ation alumnisans-semi-bold-white-35px">{indemnification}</div>
                  <div className="frame-2">
                    <div className="you alumnisans-normal-white-28px">{youAgreeToHoldHa}</div>
                  </div>
                  <div className="risk-assumption alumnisans-semi-bold-white-35px">{riskAssumption}</div>
                  <div className="a-to-the-extent-tha alumnisans-normal-white-28px">
                    A. To the extent that you sell your HINTIZ NFT, please be aware that the prices of NFTs are
                    extremely volatile and fluctuations in the prices of other NFTs and impact the price of your HINTIZ
                    both positively and negatively.&nbsp;&nbsp;Given the volatility, NFTs such as HINTIZ should not be
                    considered an investment. You assume all risks in that connection.
                    <br />
                    <br />
                    B. Ownership of HINTIZ NFT confers ownership of digital artwork and 3D printing files only.
                    Accordingly, no information on this Site (or any other documents mentioned therein) is or may be
                    considered to be advice or an invitation to enter into an agreement for any investment purpose.
                    Further, nothing on this Site qualifies or is intended to be an offering of securities in any
                    jurisdiction nor does it constitute an offer or an invitation to purchase shares, securities or
                    other financial products.&nbsp;&nbsp;Due to the artistic nature of the project, HINTIZ has not been
                    registered with or approved by any regulator in any jurisdiction. It remains your sole
                    responsibility to assure that the purchase of the HINTIZ and the associated art is in compliance
                    with laws and regulations in your jurisdiction.
                    <br />
                    <br />
                    C. You assume all risks associated with using an Internet-based currency, including, but not limited
                    to, the risk of hardware, software and Internet connections, the risk of malicious software
                    introduction, and the risk that third parties may obtain unauthorized access to information stored
                    within your wallet.
                    <br />
                    <br />
                    D. NFTs, cryptocurrencies and blockchain technology are relatively new and the regulatory landscape
                    is unsettled.&nbsp;&nbsp;New regulations could negatively impact such technologies impacting the
                    value for your HINTIZ. You understand and accept all risk in that regard.
                    <br />
                    <br />
                    E. You assume all responsibility for any adverse effects of disruptions or other issues impacting
                    Ethereum or the Ethereum platform.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSection22
            className={footerSection2Props.className}
            logoWrapperProps={footerSection2Props.logoWrapperProps}
          />
        </div>
      </div>
    );
  }
}

export default X02PrivacyPolicyPage;
