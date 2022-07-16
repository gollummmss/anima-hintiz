import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X01HomePage from "./components/X01HomePage";
import X03ContactUsPage from "./components/X03ContactUsPage";
import X02PrivacyPolicyPage from "./components/X02PrivacyPolicyPage";
import CrystalContentWrapper from "./components/CrystalContentWrapper";
import X999Wrappper from "./components/X999Wrappper";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|01-home-page)">
            <X01HomePage {...x01HomePageData} />
          </Route>
          <Route path="/03-contact-us-page">
            <X03ContactUsPage {...x03ContactUsPageData} />
          </Route>
          <Route path="/02-privacy-policy-page">
            <X02PrivacyPolicyPage {...x02PrivacyPolicyPageData} />
          </Route>
          <Route path="/crystal-content-wrapper">
            <CrystalContentWrapper
              physical="PHYSICAL"
              contentWrapperProps={crystalContentWrapperData.contentWrapperProps}
              contentWrapper2Props={crystalContentWrapperData.contentWrapper2Props}
              contentWrapper3Props={crystalContentWrapperData.contentWrapper3Props}
            />
          </Route>
          <Route path="/999-wrappper">
            <X999Wrappper uniqueWrapperProps={x999WrappperData.uniqueWrapperProps} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const buttonData = {
    children: "JOIN WHITELIST RAFFLE",
};

const navbarData = {
    digital: "Digital",
    physical: "Physical",
    creator: "Creator",
    roadmap: "Roadmap",
    buttonProps: buttonData,
};

const button2Data = {
    viewOnOpensea: "JOINLIST REGISTER",
};

const contentWrapper6Data = {
    spanText1: <React.Fragment>REWARD<br /></React.Fragment>,
    spanText2: <React.Fragment>Earn passive income through commissioning your NFT on eyewear and collectable sales in our ecommerce and flagship store sales<br />Receive token airdrops</React.Fragment>,
};

const image1Data = {
    src: "/img/bg@2x.png",
};

const image2Data = {
    src: "/img/rectangle-10@2x.png",
};

const image3Data = {
    src: "/img/rectangle-10-1@2x.png",
};

const image4Data = {
    src: "/img/bg-1@2x.png",
};

const image5Data = {
    src: "/img/bg-2@2x.png",
};

const image6Data = {
    src: "/img/bg-3@2x.png",
};

const contentWrapper221Data = {
    hint: "Hint",
    asSeniorProductDe: <React.Fragment>As senior product designer for brands such as GrandVision, catimini, alain mikli, hint aspires to bridge the gap between digital ownership of NFT and design patent with physical<br />ownership through his experienced endeavor in 3D printing technology</React.Fragment>,
};

const contentWrapper222Data = {
    hint: "Alex",
    asSeniorProductDe: "Smart Contract Dev and deployer who loves to eat doughnuts. Deployed more contracts on Ethereum than Solana. Gamefi degen who do beats DJ and remix. Disrupting the NFT space with expertees in art and eyewear industry veteran.",
    className: "content-wrapper-11",
};

const contentWrapper223Data = {
    hint: "Gary",
    asSeniorProductDe: "Love design and creation. Visualizing imagination into reality. Bringing his passion to web3, Gary is committed to leviate the playlevel of NFT wearable industry.",
    className: "content-wrapper-12",
};

const frame171Data = {
    children: "When is the mint date?",
    className: "",
};

const acrd1Data = {
    frame17Props: frame171Data,
};

const acrd21Data = {
    whatSAnNft: "What's an NFT?",
};

const acrd22Data = {
    whatSAnNft: "Why Hintiz?",
    className: "acrd-3",
};

const frame172Data = {
    children: "What exactly will I get?",
    className: "frame-17",
};

const acrd3Data = {
    className: "acrd-1",
    frame17Props: frame172Data,
};

const component1Data = {
    acrd1Props: acrd1Data,
    acrd21Props: acrd21Data,
    acrd22Props: acrd22Data,
    acrd2Props: acrd3Data,
};

const button3Data = {
    viewOnOpensea: "VIEW ON OPENSEA",
};

const footerSectionData = {
    frame: "/img/frame@2x.png",
    a999PieceCustomA: "Bridging Digital and Physical ownership with NFT and 3D printing",
    builtByNikolaiBai: "Built by Hintiz Team",
    site: "SITE",
    place1: "Home",
    place2: "Contact",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",
};

const x01HomePageData = {
    hintiz_0011: "/img/hintiz-001-1@1x.png",
    title: "HINTIZ",
    metaversalFashionB: "Metaversal Fashion Brand producing wearables bridging and vibing in both the digital and physical world",
    overlapGroup1: "/img/hintiz-digi001-1@1x.png",
    digital: "DIGITAL",
    spanText1: <React.Fragment>OWNERSHIP<br /></React.Fragment>,
    spanText2: <React.Fragment>Claim your 3D printing files ready for commercial use<br />own the design as intellectual property</React.Fragment>,
    spanText3: <React.Fragment>VIP ACCESS<br /></React.Fragment>,
    spanText4: <React.Fragment>PIYS NFT eyewear platform<br />Bespoke service</React.Fragment>,
    hintiz_Phy0011: "/img/hintiz-phy001-1@1x.png",
    physical: "PHYSICAL",
    getYourUniqueEyewearNow: "VISION IS FASHION",
    onChainFlowers: "On chain flowers",
    rare1: "Rare",
    no31: "No. 3",
    common1: "Common",
    no55: "No. 55",
    ultraRare1: "Ultra rare",
    no97: "No. 97",
    rare2: "Rare",
    no12: "No. 12",
    common2: "Common",
    no34: "No. 34",
    ultraRare2: "Ultra rare",
    visionForFuture: "VISION FOR FUTURE",
    hintizGenesisColle1: <React.Fragment>Hintiz Genesis Collection will be minting on 25/7/2022 9am EST<br />0.05 ETH for WL mint and 0.08 ETH for public mint</React.Fragment>,
    takashi_3D1: "/img/takashi-3d-1@2x.png",
    number: "0",
    text1: "-",
    text2: "+",
    quantity: "Quantity",
    place: "ETH",
    surname: "Price",
    mint: "Mint",
    group7: "/img/hint-back002-1@1x.png",
    ceo: "CEO",
    leftCreatorImage1: "/img/left-creator-image@1x.png",
    alex_Back0021: "/img/alex-back002-1@1x.png",
    web3Dev: "Web3 Dev",
    leftCreatorImage2: "/img/left-creator-image-1@1x.png",
    group9: "/img/gary-back002-1@1x.png",
    leftCreatorImage3: "/img/left-creator-image-2@1x.png",
    artDirector: "Art Director",
    roadmap: "ROADMAP",
    hintizGenesisColle2: "Hintiz Genesis Collection is the first initiative to bridge between digital and physical ownerships with powerful 3D printing technology",
    spanText5: <React.Fragment>2022 Q3<br /></React.Fragment>,
    spanText6: <React.Fragment>Genesis Collection Launch<br />VIP collection launch<br />Interactive website live<br />physical product demo from NFT to 3D printing<br />Hintiz Ecommerce alpha</React.Fragment>,
    spanText7: <React.Fragment>2022 Q4<br /></React.Fragment>,
    spanText8: <React.Fragment>3D modelling files claimable to genesis collection holders<br />3D printing and manufaturing of prototypes<br />AR try on for genesis collection holders<br />Custom production of Hintiz Eyewear for genesis holders</React.Fragment>,
    spanText9: <React.Fragment>2023 Q1<br /></React.Fragment>,
    spanText10: <React.Fragment>generative collection public sale and airdrop<br />token airdrop<br />DEX listing</React.Fragment>,
    spanText11: <React.Fragment>2023 Q2<br /></React.Fragment>,
    spanText12: <React.Fragment>ecommerce store alpha<br />3D printing files available for all collectors</React.Fragment>,
    x3D_Modeling_003B1: "/img/3d-modeling-003b-1@1x.png",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    image1: "/img/image-1@2x.png",
    no88: "No. 88",
    rare3: "Rare",
    image2: "/img/image-2@2x.png",
    no32: "No. 3",
    common3: "Common",
    getYoursNow: "Get yours now",
    ownersFromMinting: "Owners from minting and secondary market will have the same benefits and premium access to PIYS platform and royalties program.",
    navbarProps: navbarData,
    button2Props: button2Data,
    contentWrapper6Props: contentWrapper6Data,
    image1Props: image1Data,
    image2Props: image2Data,
    image3Props: image3Data,
    image4Props: image4Data,
    image5Props: image5Data,
    image6Props: image6Data,
    contentWrapper221Props: contentWrapper221Data,
    contentWrapper222Props: contentWrapper222Data,
    contentWrapper223Props: contentWrapper223Data,
    component1Props: component1Data,
    button3Props: button3Data,
    footerSectionProps: footerSectionData,
};

const firstName1Data = {
    firstName: "First name*",
    yourFirstName: "Your first name",
    className: "",
};

const firstName2Data = {
    firstName: "Last name*",
    yourFirstName: "Your last name",
    className: "last-name",
};

const nameBlock1Data = {
    firstName1Props: firstName1Data,
    firstName2Props: firstName2Data,
};

const firstName3Data = {
    firstName: "Email*",
    yourFirstName: "example@email.com",
    className: "email",
};

const firstName4Data = {
    firstName: "Phone number",
    yourFirstName: "027 123 1234",
    className: "phone-number",
};

const nameBlock2Data = {
    firstName1Props: firstName3Data,
    firstName2Props: firstName4Data,
};

const button32Data = {
    children: "SEND MESSAGE",
};

const logoWrapper1Data = {
    frame: "/img/frame-1@2x.svg",
    a999PieceCustomA: "A 999 piece custom avatars collection is joining the NFT Space on Opensea.",
    className: "",
};

const footerSection221Data = {
    logoWrapperProps: logoWrapper1Data,
};

const x03ContactUsPageData = {
    haveAQuestion: "Have a question?",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    howCanIHelp: "How can I help?",
    enterMessageHere: "Enter message here",
    image: "/img/image-3@1x.png",
    fococlipping: "/img/fococlipping-1@1x.png",
    nameBlock1Props: nameBlock1Data,
    nameBlock2Props: nameBlock2Data,
    button32Props: button32Data,
    footerSection2Props: footerSection221Data,
};

const navbar222Data = {
    className: "navbar-2",
};

const logoWrapper2Data = {
    frame: "/img/frame-2@2x.svg",
    a999PieceCustomA: "A 999 piece custom avatars collection is joining the NFT Space on Opensea.",
    className: "logo-wrapper-2",
};

const footerSection222Data = {
    className: "footer-section-2",
    logoWrapperProps: logoWrapper2Data,
};

const x02PrivacyPolicyPageData = {
    x02PrivacyPolicyPage: "/img/02--privacy-policy--page@1x.png",
    hintizTermsAndConditions: "Hintiz Terms and Conditions",
    lastUpdatedJuly2022: "Last updated July 2022",
    hintizIsACollecti: <React.Fragment>Hintiz is a collection of digital designs (NFTs) running on the Ethereum network. This website is only an interface allowing participants to purchase digital collectibles. Users are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions and contracts generated by this website before approval. <br /><br />This website and its connected services are provided “as is” and “as available” without warranty of any kind. By using this website you are accepting sole responsibility for any and all transactions involving Hintiz digital collectibles.</React.Fragment>,
    ownership: "Ownership",
    youOwnTheNftEac: "You Own the NFT. Each Hintiz eyewear is an NFT on the Ethereum blockchain. When you purchase an NFT, you own the underlying Design and the Art, completely. Ownership of the NFT is mediated entirely by the Smart Contract and the Ethereum Network: at no point may we seize, freeze, or otherwise modify the ownership of any Collection.",
    spanText1: "Personal Use",
    spanText2: ". Subject to your continued compliance with these Terms, you are granted a worldwide, royalty-free license to use, copy, and display the purchased Art, along with any extensions that you choose to create or use, solely for the following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the purchase and sale of your HINTIZ / NFT, provided that the marketplace cryptographically verifies each HINTIZ owner’s rights to display the Art for their HINTIZ to ensure that only the actual owner can display the Art; or (iii) as part of a third party website or application that permits the inclusion, involvement, or participation of your HINTIZ, provided that the website/application cryptographically verifies each HINTIZ owner’s rights to display the Art for their HINTIZ to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the HINTIZ leaves the website/application.",
    limitationOfLiability: "Limitation of Liability",
    youUnderstandAndA: "YOU UNDERSTAND AND AGREE THAT WE WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
    youAgreeThatOurT: "YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF (OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE SITE, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS LIMITED TO THE GREATER OF (A) THE AMOUNTS YOU ACTUALLY PAID US UNDER THESE TERMS IN THE 12 MONTH PERIOD PRECEDING THE DATE THE CLAIM AROSE, OR (B) $500.",
    youAcknowledgeAnd: "YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE SITE AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN. WE WOULD NOT BE ABLE TO PROVIDE THE SITE TO YOU WITHOUT THESE LIMITATIONS.",
    indemnification: "Indemnification",
    youAgreeToHoldHa: "You agree to hold harmless and indemnify HINTIZ and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or nature, suit, judgment, litigation cost, and reasonable attorneys' fees arising out of or in any way related to (i) your breach of these Terms, (ii) your misuse of the Site, or (iii) your violation of applicable laws, rules or regulations in connection with your access to or use of the Site.",
    riskAssumption: "Risk Assumption",
    navbar22Props: navbar222Data,
    footerSection2Props: footerSection222Data,
};

const contentWrapper4Data = {
    className: "content-wrapper-5",
};

const contentWrapper23Data = {
    className: "content-wrapper-7",
};

const contentWrapper32Data = {
    className: "content-wrapper-9",
};

const crystalContentWrapperData = {
    contentWrapperProps: contentWrapper4Data,
    contentWrapper2Props: contentWrapper23Data,
    contentWrapper3Props: contentWrapper32Data,
};

const specialData = {
    claimYour3DPrinti: <React.Fragment>Claim your 3D printing files ready for commercial use<br /><br />Own the design as Intellectual Property</React.Fragment>,
};

const timelessData = {
    vipAccess: "VIP access",
};

const uniqueWrapperData = {
    specialProps: specialData,
    timelessProps: timelessData,
};

const x999WrappperData = {
    uniqueWrapperProps: uniqueWrapperData,
};

