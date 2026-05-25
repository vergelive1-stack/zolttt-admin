import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Multi Select Dropdown
import Multiselect from 'multiselect-react-dropdown';
import { IconButton } from '@mui/material';
import { ContentCopy, CheckCircle } from '@mui/icons-material';

// action
import {
  getSetting,
  updateSetting,
  handleSwitch,
} from '../store/setting/action';


import { Tooltip } from '@mui/material';
import RedeemOptions from '../component/table/RedeemOptions';
import Currency from '../component/table/Currency';
import { getRedeemOptionsDropdown } from '../store/redeemOptions/action';
import { baseURL } from '../util/Config';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';

const Setting = (props) => {

  const dispatch = useDispatch();
  const setting = useSelector((state) => state.setting.setting);

  const [type, setType] = useState(() => {
    return localStorage.getItem('settingTab') || 'generalSetting';
  });
  const [mongoId, setMongoId] = useState('');
  const [hover, setHover] = useState(false);
  const { redeemOptDropdown } = useSelector((state) => state.redeemOption);

  const [redeemOptData, setRedeemOptData] = useState([]);

  const [referralBonus, setReferralBonus] = useState(0);
  const [referralBonusCoin, setReferralBonusCoin] = useState(0);
  const [loginBonus, setLoginBonus] = useState(0);
  const [agoraKey, setAgoraKey] = useState('');
  const [agoraCertificate, setAgoraCertificate] = useState('');
  const [agencyCommission, setAgencyCommission] = useState('');
  const [maxSecondForVideo, setMaxSecondForVideo] = useState(0);
  const [privacyPolicyLink, setPrivacyPolicyLink] = useState('');
  const [privacyPolicyText, setPrivacyPolicyText] = useState('');
  const [femaleCallCharge, setFemaleCallCharge] = useState(0);
  const [maleCallCharge, setMaleCallCharge] = useState(0);
  const [femaleRandomCallRate, setFemaleRandomCallRate] = useState(0);
  const [maleRandomCallRate, setMaleRandomCallRate] = useState(0);
  const [bothRandomCallRate, setBothRandomCallRate] = useState(0);
  const [googlePlayEmail, setGooglePlayEmail] = useState('');
  const [googlePlayKey, setGooglePlayKey] = useState('');
  const [stripePublishableKey, setStripePublishableKey] = useState('');
  const [stripeSecretKey, setStripeSecretKey] = useState('');
  const [currency, setCurrency] = useState('$');
  const [rCoinForCaseOut, setRCoinForCaseOut] = useState(0);
  const [rCoinForDiamond, setRCoinForDiamond] = useState(0);
  const [minRcoinForCashOutAgency, setMinRCoinForCaseOutAgency] = useState(0);
  const [tooltipText, setTooltipText] = useState('https://abc.com');
  const [icon, setIcon] = useState(<ContentCopy fontSize="small" />);

  const [isFake, setIsFake] = useState(false);
  const [googlePlaySwitch, setGooglePlaySwitch] = useState(false);
  const [stripeSwitch, setStripeSwitch] = useState(false);
  const [isAppActive, setIsAppActive] = useState(false);
  const [vipDiamond, setVipDiamond] = useState(0);
  const [locationApiKey, setLocationApiKey] = useState('');
  const [callReceiverPercent, setCallReceiverPercent] = useState('');
  const [minRCoinForCaseOut, setMinRCoinForCaseOut] = useState(0);
  const [paymentGateway, setPaymentGateway] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [gameCoin1, setGameCoin1] = useState(0);
  const [gameCoin2, setGameCoin2] = useState(0);
  const [gameCoin3, setGameCoin3] = useState(0);
  const [gameCoin4, setGameCoin4] = useState(0);
  const [gameCoin5, setGameCoin5] = useState(0);
  const [pkEndTime, setPkEndTime] = useState(300);
  const [privateKey, setPrivateKey] = useState();
  const [resendApiKey, setResendApiKey] = useState('');
  const [giftAnnouncementCoin, setGiftAnnouncementCoin] = useState(0);
  const [gameAnnouncementCoin, setGameAnnouncementCoin] = useState(0);
  const [aboutLink, setAboutLink] = useState('');
  const [termsLink, setTermsLink] = useState('');

  const [errors, setError] = useState({
    referralBonus: '',
    referralBonusCoin: '',
    loginBonus: '',
    maxSecondForVideo: '',
    callCharge: '',
    rCoinForCaseOut: '',
    rCoinForDiamond: '',
    minRCoinForCaseOut: '',
    maleCallCharge: '',
    femaleCallCharge: '',
    vipDiamond: '',
    privateKey: '',
    agencyCommission: '',
    minRcoinForCashOutAgency: '',
    locationApiKey: '',
    callReceiverPercent: '',
    femaleRandomCallRate: '',
    maleRandomCallRate: '',
    bothRandomCallRate: '',
    resendApiKey: '',
    aboutLink: '',
    termsLink: '',
    gameAnnouncementCoin: '',
    giftAnnouncementCoin: '',
  });

  useEffect(() => {
    dispatch(getSetting());
    dispatch(getRedeemOptionsDropdown());
  }, [dispatch]);

  useEffect(() => {
    if (redeemOptDropdown) {
      setRedeemOptData(redeemOptDropdown);
    }
  }, [redeemOptDropdown]);


  useEffect(() => {
    setError({
      referralBonus: '',
      referralBonusCoin: '',
      loginBonus: '',
      maxSecondForVideo: '',
      callCharge: '',
      rCoinForCaseOut: '',
      rCoinForDiamond: '',
      minRCoinForCaseOut: '',
      pkEndTime: '',
      femaleCallCharge: '',
      maleCallCharge: '',
      vipDiamond: '',
      privateKey: '',
      agencyCommission: '',
      minRcoinForCashOutAgency: '',
      locationApiKey: '',
      callReceiverPercent: '',
      femaleRandomCallRate: '',
      maleRandomCallRate: '',
      bothRandomCallRate: '',
      resendApiKey: '',
      gameAnnouncementCoin: '',
      giftAnnouncementCoin: '',
      aboutLink: '',
      termsLink: '',
    });
    if (setting) {
      const data = setting?.paymentGateway?.map((data) => {
        return {
          name: data,
        };
      });
      if (setting?.gameCoin?.length > 0) {
        setGameCoin1(setting?.gameCoin[0]);
        setGameCoin2(setting?.gameCoin[1]);
        setGameCoin3(setting?.gameCoin[2]);
        setGameCoin4(setting?.gameCoin[3]);
        setGameCoin5(setting?.gameCoin[4]);
      }
      setIsFake(setting?.isFake);
      setMongoId(setting._id);
      setVipDiamond(setting?.vipDiamond);
      setReferralBonus(setting?.referralBonus);
      setReferralBonusCoin(setting?.referralCoinBonus);
      setAgoraKey(setting.agoraKey);
      setAgoraCertificate(setting.agoraCertificate);
      setMaxSecondForVideo(setting.maxSecondForVideo);
      setPrivacyPolicyLink(setting.privacyPolicyLink);
      setPrivacyPolicyText(setting.privacyPolicyText);
      setMaleCallCharge(setting?.maleCallCharge);
      setFemaleCallCharge(setting?.femaleCallCharge);
      setFemaleRandomCallRate(setting?.femaleRandomCallRate);
      setMaleRandomCallRate(setting?.maleRandomCallRate);
      setBothRandomCallRate(setting?.bothRandomCallRate);
      setGooglePlayEmail(setting.googlePlayEmail);
      setGooglePlayKey(setting.googlePlayKey);
      setStripePublishableKey(setting.stripePublishableKey);
      setStripeSecretKey(setting.stripeSecretKey);
      setCurrency(setting.currency);
      setRCoinForCaseOut(setting.rCoinForCashOut);
      setAgencyCommission(setting?.agencyCommission);
      setRCoinForDiamond(setting.rCoinForDiamond);
      setGooglePlaySwitch(setting.googlePlaySwitch);
      setStripeSwitch(setting.stripeSwitch);
      setIsAppActive(setting.isAppActive);
      setLoginBonus(setting.loginBonus);
      setMinRCoinForCaseOut(setting.minRcoinForCashOut);
      setPaymentGateway(setting.paymentGateway);
      setPkEndTime(setting?.pkEndTime);
      setSelectedValue(data);
      setPrivateKey(JSON.stringify(setting?.privateKey));
      setMinRCoinForCaseOutAgency(setting?.minRcoinForCashOutAgency);
      setLocationApiKey(setting?.locationApiKey);
      setCallReceiverPercent(setting?.callReceiverPercent);
      setResendApiKey(setting?.resendApiKey);
      setGiftAnnouncementCoin(setting?.coinForAllRoomAnnouncement);
      setGameAnnouncementCoin(setting?.coinForGameAnnouncement);
      setAboutLink(setting?.aboutUsLink);
      setTermsLink(setting?.termsAndConditionLink);
    }
  }, [setting]);

  const handleTabChange = (newType) => {
    setType(newType);
    localStorage.setItem('settingTab', newType);
    if (newType === 'redeemSetting') {
      dispatch(getRedeemOptionsDropdown());
    }
  };

  const handleSubmit = () => {

    if (gameCoin1 < 0) {
      return setError({
        ...errors,
        gameCoin1: ' Game Diamond Invalid Value!! ',
      });
    }

    if (gameCoin2 < 0) {
      return setError({
        ...errors,
        gameCoin2: ' Game Diamond Invalid Value!! ',
      });
    }
    if (gameCoin3 < 0) {
      return setError({
        ...errors,
        gameCoin3: ' Game Diamond Invalid Value!! ',
      });
    }
    if (gameCoin4 < 0) {
      return setError({
        ...errors,
        gameCoin4: ' Game Diamond  Invalid Value!! ',
      });
    }

    if (gameCoin5 < 0) {
      return setError({
        ...errors,
        gameCoin5: ' Game Diamond Invalid Value!! ',
      });
    }
    if (pkEndTime <= 0) {
      return setError({
        ...errors,
        pkEndTime: ' pkEnd Time  Invalid Value!! ',
      });
    }
    const vipDiamondValid = isNumeric(vipDiamond);
    if (!vipDiamondValid) {
      return setError({
        ...errors,
        vipDiamond: 'Invalid Call Charge!!',
      });
    }

    const referralBonusValid = isNumeric(referralBonus);
    if (!referralBonusValid) {
      return setError({
        ...errors,
        referralBonus: 'Invalid Referral Diamond Bonus!!',
      });
    }
    const referralBonusCoinValid = isNumeric(referralBonusCoin);
    if (!referralBonusCoinValid) {
      return setError({
        ...errors,
        referralBonusCoin: 'Invalid Referral Coin Bonus!!',
      });
    }
    const loginBonusValid = isNumeric(loginBonus);
    if (!loginBonusValid) {
      return setError({ ...errors, loginBonus: 'Invalid Login Bonus!!' });
    }
    const maxSecondForVideoValid = isNumeric(maxSecondForVideo);
    if (!maxSecondForVideoValid) {
      return setError({
        ...errors,
        maxSecondForVideo: 'Invalid Value!!',
      });
    }

    const femaleCallChargeValid = isNumeric(femaleCallCharge);
    if (!femaleCallChargeValid) {
      return setError({
        ...errors,
        femaleCallCharge: 'Invalid Female  Call Charge!!',
      });
    }
    const maleCallChargeValid = isNumeric(maleCallCharge);
    if (!maleCallChargeValid) {
      return setError({
        ...errors,
        maleCallCharge: 'Invalid Male Call Charge!!',
      });
    }
    const femaleRandomCallRateValid = isNumeric(femaleRandomCallRate);
    if (!femaleRandomCallRateValid) {
      return setError({
        ...errors,
        femaleRandomCallRate: 'Invalid Female Random Call Rate!!',
      });
    }

    const maleRandomCallRateValid = isNumeric(maleRandomCallRate);
    if (!maleRandomCallRateValid) {
      return setError({
        ...errors,
        maleRandomCallRate: 'Invalid Male Random Call Rate!!',
      });
    }
    const rCoinForCaseOutValid = isNumeric(rCoinForCaseOut);
    if (!rCoinForCaseOutValid) {
      return setError({
        ...errors,
        rCoinForCaseOut: 'Invalid Value!!',
      });
    }
    const rCoinForDiamondValid = isNumeric(rCoinForDiamond);
    if (!rCoinForDiamond) {
      return setError({
        ...errors,
        rCoinForDiamond: 'Invalid Value!!',
      });
    }

    const minRCoinForCaseOutValid = isNumeric(minRCoinForCaseOut);
    if (!minRCoinForCaseOutValid) {
      return setError({
        ...errors,
        minRCoinForCaseOut: 'Invalid Value!!',
      });
    }
    if (!agencyCommission) {
      return setError({
        ...errors,
        agencyCommission: 'Agency Commission is Required',
      });
    }

    let gameCoinArray = [gameCoin1, gameCoin2, gameCoin3, gameCoin4, gameCoin5];

    const data = {
      referralBonus,
      referralBonusCoin,
      loginBonus,
      agoraKey,
      agoraCertificate,
      maxSecondForVideo: maxSecondForVideo === '' ? 0 : maxSecondForVideo,
      privacyPolicyLink,
      privacyPolicyText,
      // chatCharge: chatCharge === "" ? 0 : chatCharge,
      chatCharge: 0,
      femaleCallCharge: femaleCallCharge === '' ? 0 : femaleCallCharge,
      maleCallCharge: maleCallCharge === '' ? 0 : maleCallCharge,
      googlePlayEmail,
      googlePlayKey,
      stripePublishableKey,
      stripeSecretKey,
      currency,
      rCoinForCaseOut: rCoinForCaseOut === '' ? 0 : rCoinForCaseOut,
      rCoinForDiamond: rCoinForDiamond === '' ? 1 : rCoinForDiamond,
      minRcoinForCashOutAgency: parseInt(minRcoinForCashOutAgency),
      paymentGateway,
      minRcoinForCaseOut: minRCoinForCaseOut,
      gameCoin: gameCoinArray,
      agencyCommission,
      pkEndTime,
      vipDiamond,
      privateKey,
      callReceiverPercent,
      locationApiKey,
      femaleRandomCallRate,
      maleRandomCallRate,
      bothRandomCallRate,
      resendApiKey,
      coinForGameAnnouncement: gameAnnouncementCoin === "" ? 0 : gameAnnouncementCoin,
      coinForAllRoomAnnouncement: giftAnnouncementCoin === "" ? 0 : giftAnnouncementCoin,
      aboutUsLink: aboutLink,
      termsAndConditionLink: termsLink,
    };

    props.updateSetting(mongoId, data);
  };

  const fakeFirebaseJson = {
    type: 'service_account',
    project_id: 'demo-project-12345',
    private_key_id: 'fakeprivatekeyid1234567890abcdef',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0FAKEFAASCBKcwggSjAgEAAoIBAQDUMMYKEYEXAMPLE\n-----END PRIVATE KEY-----\n',
    client_email:
      'firebase-adminsdk-abcde@demo-project-12345.iam.gserviceaccount.com',
    client_id: '123456789012345678901',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-abcde%40demo-project-12345.iam.gserviceaccount.com',
    universe_domain: 'googleapis.com',
  };

  const handleSwitch_ = (type) => {


    props.handleSwitch(mongoId, type);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(locationApiKey);
    setTooltipText('Copied!');
    setIcon(<CheckCircle fontSize="small" style={{ color: 'green' }} />);
    setTimeout(() => {
      setTooltipText(locationApiKey);
      setIcon('?');
    }, 2000); // Reset tooltip and icon after 2 seconds
  };

  //onselect function of selecting multiple values
  function onSelect(selectedList, selectedItem) {
    paymentGateway.push(selectedItem.name);
  }

  //onRemove function for remove multiple values
  function onRemove(selectedList, removedItem) {
    setPaymentGateway(selectedList.map((data) => data.name));
  }

  const isNumeric = (value) => {
    const val = value === '' ? 0 : value;
    const validNumber = /^\d+$/.test(val);
    return validNumber;
  };

  // const option = [
  //   { name: 'UPI details' },
  //   { name: 'Paytm details' },
  //   { name: 'Bank details' },
  // ];

  const handleMouseEnter = () => {
    setTooltipText(locationApiKey);
    setHover(true);
  };

  const handleMouseLeave = () => {
    setTooltipText(locationApiKey);
    setHover(false);
  };

  return (
    <>
      <div className="page-title">
        <div className="row ">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3 className="mb-3 text-white">Setting</h3>
          </div>
          <div className="col-12 col-md-6 order-md-2 order-first">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-header float-start float-lg-end"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/admin/dashboard" className="text-danger">
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Setting
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Tabs  */}
      <div className="row mb-3">
        <div className="col-12">
          <div>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'generalSetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => handleTabChange('generalSetting')}
            >
              <span className="">General</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'coinSetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => handleTabChange('coinSetting')}
            >
              <span className="">Coin</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'agoraSetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => handleTabChange('agoraSetting')}
            >
              <span className="">Agora</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'redeemOptions' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => {
                handleTabChange('redeemOptions');
              }}
            >
              <span className="">Redeem Options</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'redeemSetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => handleTabChange('redeemSetting')}
            >
              <span className="">Redeem</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'paymentSetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => {
                handleTabChange('paymentSetting');
              }}
            >
              <span className="">Payment</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'gameSetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => handleTabChange('gameSetting')}
            >
              <span className="">Game</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'firebaseSetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => handleTabChange('firebaseSetting')}
            >
              <span className="">Firebase</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'currencySetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => handleTabChange('currencySetting')}
            >
              <span className="">Currency</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm m-2 ${type === 'otherSetting' ? 'btn-success' : 'disabledBtn'
                }`}
              onClick={() => handleTabChange('otherSetting')}
            >
              <span className="">Other</span>
            </button>
          </div>
        </div>
      </div>

      {/* General Setting  */}
      {type === 'generalSetting' && (
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <h5 className="card-title ">Other Setting</h5>
                  </div>
                  <div className="col-md-6 col-12 d-flex justify-content-between mb-0">
                    <h5 className="card-title mb-0 me-4">Fake Data</h5>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={isFake}
                        onChange={() => handleSwitch_('fake')}
                      />
                      <span className="slider">
                        <p
                          style={{
                            fontSize: 12,
                            marginLeft: `${isFake ? '7px' : '35px'}`,
                            color: `${isFake ? '#fff' : '#000'}`,
                            marginTop: '6px',
                          }}
                        >
                          {isFake ? 'Yes' : 'No'}
                        </p>
                      </span>
                    </label>
                  </div>

                  <form>
                    <div className="mb-3 row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="referralBonus" className="form-label">
                          Referral Bonus ( Diamond )
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="referralBonus"
                          placeholder={
                            'Enter Referral Bonus'
                          }
                          value={referralBonus}
                          onChange={(e) => setReferralBonus(e.target.value)}
                        />
                        {errors.referralBonus && (
                          <div className="ml-2 mt-1">
                            {errors.referralBonus && (
                              <div className="pl-1 text__left">
                                <span className="text-red">
                                  {errors.referralBonus}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="referralBonusCoin"
                          className="form-label"
                        >
                          Referral Bonus ( Coin )
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="referralBonusCoin"
                          placeholder={
                            'Enter Referral Bonus Coin'
                          }
                          value={referralBonusCoin}
                          onChange={(e) => setReferralBonusCoin(e.target.value)}
                        />
                        {errors.referralBonusCoin && (
                          <div className="ml-2 mt-1">
                            {errors.referralBonusCoin && (
                              <div className="pl-1 text__left">
                                <span className="text-red">
                                  {errors.referralBonusCoin}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="loginBonus" className="form-label">
                          Login Bonus
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="loginBonus"
                          placeholder={
                            'Enter Login Bonus'
                          }
                          value={loginBonus}
                          onChange={(e) => setLoginBonus(e.target.value)}
                        />
                        {errors.loginBonus && (
                          <div className="ml-2 mt-1">
                            {errors.loginBonus && (
                              <div className="pl-1 text__left">
                                <span className="text-red">
                                  {errors.loginBonus}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="videoSecond" className="form-label">
                          Maximum Seconds for Video
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="videoSecond"
                          placeholder={
                            'Enter Video Time in Seconds'
                          }
                          value={maxSecondForVideo}
                          onChange={(e) => setMaxSecondForVideo(e.target.value)}
                        />
                        {errors.maxSecondForVideo && (
                          <div className="ml-2 mt-1">
                            {errors.maxSecondForVideo && (
                              <div className="pl-1 text__left">
                                <span className="text-red">
                                  {errors.maxSecondForVideo}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-danger "
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <h5 className="card-title d-flex justify-content-between mb-3">
                    Is App Active (use at the time of app maintenance)
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={isAppActive}
                        onChange={() => handleSwitch_('app active')}
                      />
                      <span className="slider">
                        <p
                          style={{
                            fontSize: 12,
                            marginLeft: `${isAppActive ? '7px' : '35px'}`,
                            color: `${isAppActive ? '#fff' : '#000'}`,
                            marginTop: '6px',
                          }}
                        >
                          {isAppActive ? 'Yes' : 'No'}
                        </p>
                      </span>
                    </label>
                  </h5>

                  <form>
                    <div className="mb-3">
                      <label htmlFor="policyLink" className="form-label">
                        Privacy Policy Link (redirect to this link in app in
                        privacy policy click)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="policyLink"
                        placeholder={
                          'Enter Privacy Policy Link'
                        }
                        value={privacyPolicyLink}
                        onChange={(e) => setPrivacyPolicyLink(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="policyText" className="form-label">
                        Privacy Policy Text
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="policyText"
                        placeholder={
                          'Enter Privacy Policy Text'
                        }
                        value={privacyPolicyText}
                        onChange={(e) => setPrivacyPolicyText(e.target.value)}
                      />
                    </div>
                    <div className="mt-2 mb-4">
                      <label htmlFor="vipDiamond" className="form-label">
                        About Us Link
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="vipDiamond"
                        placeholder={
                          'Enter About Us Link'
                        }
                        min="0"
                        value={aboutLink}
                        onChange={(e) => setAboutLink(e.target.value)}
                      />
                      {errors.aboutLink && (
                        <div className="ml-2 mt-1">
                          {errors.aboutLink && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.aboutLink}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 mb-4">
                      <label htmlFor="vipDiamond" className="form-label">
                        Terms & Condition Link
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="vipDiamond"
                        placeholder={'Enter Terms-Conditions Link'
                        }
                        min="0"
                        value={termsLink}
                        onChange={(e) => setTermsLink(e.target.value)}
                      />
                      {errors.termsLink && (
                        <div className="ml-2 mt-1">
                          {errors.termsLink && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.termsLink}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-danger "
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coin Setting  */}
      {type === 'coinSetting' && (
        // <h3 className="mb-3 text-white">Coin Setting</h3>
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-6">
                    <h5 className="card-title ">Private Call Charges</h5>

                    <form>
                      <div className="mb-3 row">
                        <div className="col-md-12">
                          <label
                            htmlFor="femaleCallCHarge"
                            className="form-label"
                          >
                            Female Call Charge (per min for user)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="referralBonus"
                            placeholder={
                              'Enter Female Call Charge'
                            }
                            value={femaleCallCharge}
                            onChange={(e) =>
                              setFemaleCallCharge(e.target.value)
                            }
                          />
                          {errors.femaleCallCharge && (
                            <div className="ml-2 mt-1">
                              {errors.femaleCallCharge && (
                                <div className="pl-1 text__left">
                                  <span className="text-red">
                                    {errors.femaleCallCharge}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="col-md-12 mt-3">
                          <label
                            htmlFor="maleCoinCharge"
                            className="form-label"
                          >
                            Male Call Charge (per min for user)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="maleCallCharge"
                            placeholder={
                              'Enter Male Call Charge'
                            }
                            value={maleCallCharge}
                            onChange={(e) => setMaleCallCharge(e.target.value)}
                          />
                          {errors.maleCallCharge && (
                            <div className="ml-2 mt-1">
                              {errors.maleCallCharge && (
                                <div className="pl-1 text__left">
                                  <span className="text-red">
                                    {errors.maleCallCharge}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="callCharge" className="form-label">
                            Default Currency
                          </label>
                          <select
                            className="form-select form-control"
                            aria-label="Default select example"
                            value={currency}
                            onChange={(e) => {
                              setCurrency(e.target.value);
                            }}
                          >
                            <option value="$" selected>
                              $
                            </option>
                            <option value="₹">₹</option>
                          </select>
                        </div>
                      </div> */}
                    </form>
                  </div>
                  <div className="col-md-6 col-6">
                    <h5 className="card-title">Random Call Charges</h5>
                    <form>
                      <div className="mb-3 row">
                        <div className="col-md-6">
                          <label
                            htmlFor="femaleRandomCallRate"
                            className="form-label"
                          >
                            Female Random Call Charge per min
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="referralBonus"
                            placeholder={'Enter Female Random Call Charge'
                            }
                            value={femaleRandomCallRate}
                            onChange={(e) =>
                              setFemaleRandomCallRate(e.target.value)
                            }
                          />
                          {errors.femaleRandomCallRate && (
                            <div className="ml-2 mt-1">
                              {errors.femaleRandomCallRate && (
                                <div className="pl-1 text__left">
                                  <span className="text-red">
                                    {errors.femaleRandomCallRate}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="maleCoinCharge"
                            className="form-label"
                          >
                            Male Random Call Charge per min
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="maleRandomCallRate"
                            placeholder={'Enter Male Random Call Charge'
                            }
                            value={maleRandomCallRate}
                            onChange={(e) =>
                              setMaleRandomCallRate(e.target.value)
                            }
                          />
                          {errors.maleRandomCallRate && (
                            <div className="ml-2 mt-1">
                              {errors.maleRandomCallRate && (
                                <div className="pl-1 text__left">
                                  <span className="text-red">
                                    {errors.maleRandomCallRate}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label
                            htmlFor="bothCoinCharge"
                            className="form-label"
                          >
                            Both Random Call Charge per min
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="bothRandomCallRate"
                            placeholder={'Enter Random Call Charge'
                            }
                            value={bothRandomCallRate}
                            onChange={(e) =>
                              setBothRandomCallRate(e.target.value)
                            }
                          />
                          {errors.maleRandomCallRate && (
                            <div className="ml-2 mt-1">
                              {errors.bothRandomCallRate && (
                                <div className="pl-1 text__left">
                                  <span className="text-red">
                                    {errors.bothRandomCallRate}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="row">
                    <div className="d-flex align-items-end justify-content-end">
                      <button
                        type="button"
                        className="btn btn-danger "
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Coin Setup</h5>
                <form>
                  <div className="mb-3 row">
                    <div className="col-5">
                      <label htmlFor="rCoin" className="form-label">
                        RCoin Rate (for cash out conversion ratio)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="rCoin"
                        value={`1 ${setting?.currency?.currencyCode}`}
                        disabled
                      />
                    </div>
                    <div className="col-1 mt-5">=</div>
                    <div className="col-6">
                      <label htmlFor="rCoin" className="form-label">
                        How Many RCoin ( Diamond to $ conversion ratio )
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="rCoin"
                        placeholder={'Enter RCoin'}
                        value={rCoinForCaseOut}
                        onChange={(e) => setRCoinForCaseOut(e.target.value)}
                      />
                      {errors.rCoinForCaseOut && (
                        <div className="ml-2 mt-1">
                          {errors.rCoinForCaseOut && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.rCoinForCaseOut}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-5">
                      <label htmlFor="rCoin" className="form-label">
                        Diamond
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="rCoin"
                        value="1 Diamond"
                        disabled
                      />
                    </div>
                    <div className="col-1 mt-5">=</div>
                    <div className="col-6">
                      <label htmlFor="rCoin" className="form-label">
                        How Many RCoin ( Diamond to Rcoin conversion ratio )
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="rCoin"
                        placeholder={'Enter RCoin'}
                        value={rCoinForDiamond}
                        onChange={(e) => setRCoinForDiamond(e.target.value)}
                      />
                      {errors.rCoinForDiamond && (
                        <div className="ml-2 mt-1">
                          {errors.rCoinForDiamond && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.rCoinForDiamond}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-danger "
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        {/* Agora Setting  */}
        {type === 'agoraSetting' && (
          <div className="col-md-12">
            {/* <h3 className="mb-3 text-white">Agora Setting</h3> */}
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="googlePlayEmail"
                            className="form-label"
                          >
                            Agora Key
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="googlePlayEmail"
                            placeholder={
                              'Enter Agora Key'
                            }
                            value={agoraKey}
                            onChange={(e) => setAgoraKey(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="key" className="form-label">
                            Agora Certificates
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="key"
                            placeholder={'Enter Agora Certificates'
                            }
                            value={agoraCertificate}
                            onChange={(e) =>
                              setAgoraCertificate(e.target.value)
                            }
                          />
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="btn btn-danger "
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* redeem options  */}
        {type === 'redeemOptions' && (
          <div className="col-md-12">
            <RedeemOptions />
          </div>
        )}
        {/* Redeem Setting  */}
        {type === 'redeemSetting' && (
          <div className="col-md-12">
            {/* <h3 className="mb-3 text-white">Redeem Setting</h3> */}
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <form>
                        <div
                          className="mb-3"
                        // onClick={() => dispatch(getRedeemOptionsDropdown())}
                        >
                          <label
                            htmlFor="googlePlayEmail"
                            className="form-label"
                          >
                            Payment Gateway (option for cash out for user)
                          </label>
                          <Multiselect
                            options={redeemOptData}
                            selectedValues={selectedValue}
                            onSelect={onSelect}
                            onRemove={onRemove}
                            displayValue="name"
                          />
                        </div>

                        <div className="row">
                          <div className=" col-12 mb-2">
                            <label
                              htmlFor="minRCoinForCaseOut"
                              className="form-label"
                            >
                              Minimum RCoin for cash out (User)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="minRCoinForCaseOut"
                              placeholder={'Enter RCoin for cash out (User)'
                              }
                              value={minRCoinForCaseOut}
                              onChange={(e) =>
                                setMinRCoinForCaseOut(e.target.value)
                              }
                            />
                            {errors.minRCoinForCaseOut && (
                              <div className="ml-2 mt-1">
                                {errors.minRCoinForCaseOut && (
                                  <div className="pl-1 text__left">
                                    <span className="text-red">
                                      {errors.minRCoinForCaseOut}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className=" row mb-3">
                          <label
                            htmlFor="minRCoinForCaseOut"
                            className="form-label"
                          >
                            Minimum RCoin for cash out (Agency)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="minRCoinForCaseOut"
                            placeholder={'Enter RCoin for cash out(agency)'
                            }
                            value={minRcoinForCashOutAgency}
                            onChange={(e) =>
                              setMinRCoinForCaseOutAgency(e.target.value)
                            }
                          />
                          {errors.minRcoinForCashOutAgency && (
                            <div className="ml-2 mt-1">
                              {errors.minRcoinForCashOutAgency && (
                                <div className="pl-1 text__left">
                                  <span className="text-red">
                                    {errors.minRcoinForCashOutAgency}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="btn btn-danger "
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="row">
        {/* Payment Setting  */}
        {type === 'paymentSetting' && (
          <div className="col-md-12">
            {/* <h3 className="mb-3 text-white">Payment Setting</h3> */}
            <div className="row">
              <div className=" col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <h5 className="card-title d-flex justify-content-between align-items-center">
                          Stripe (enable/disable in app)
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={stripeSwitch}
                              onChange={() => handleSwitch_('stripe')}
                            />
                            <span className="slider">
                              <p
                                style={{
                                  fontSize: 12,
                                  marginLeft: `${stripeSwitch ? '7px' : '35px'
                                    }`,
                                  color: `${stripeSwitch ? '#fff' : '#000'}`,
                                  marginTop: '6px',
                                }}
                              >
                                {stripeSwitch ? 'Yes' : 'No'}
                              </p>
                            </span>
                          </label>
                        </h5>
                      </div>
                      <div className="col-md-6 col-12">
                        <h5 className="card-title d-flex justify-content-between align-items-center">
                          Google Play
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={googlePlaySwitch}
                              onChange={() => handleSwitch_('googlePlay')}
                            />
                            <span className="slider">
                              <p
                                style={{
                                  fontSize: 12,
                                  marginLeft: `${googlePlaySwitch ? '7px' : '35px'
                                    }`,
                                  color: `${googlePlaySwitch ? '#fff' : '#000'
                                    }`,
                                  marginTop: '6px',
                                }}
                              >
                                {googlePlaySwitch ? 'Yes' : 'No'}
                              </p>
                            </span>
                          </label>
                        </h5>
                      </div>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="publishableKey" className="form-label">
                          Stripe Publishable Key
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="publishableKey"
                          placeholder={` Stripe Publishable Key`
                          }
                          value={stripePublishableKey}
                          onChange={(e) =>
                            setStripePublishableKey(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="secretKey" className="form-label">
                          Stripe Secret Key
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="secretKey"
                          placeholder={`Stripe Secret Key`

                          }
                          value={stripeSecretKey}
                          onChange={(e) => setStripeSecretKey(e.target.value)}
                        />
                      </div>
                    </form>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-danger "
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Game Setting  */}
        {type === 'gameSetting' && (
          <div className="col-md-12">
            {/* <h3 className="mb-3 text-white">Game Setting</h3> */}
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <form>
                    <div className="row d-flex justify-content-between">
                      <p>Game Diamonds Setting (coin options in game)</p>
                      <div className="col-md-2">
                        {' '}
                        <div className="mb-3">
                          <label htmlFor="callCharge" className="form-label">
                            Bet 1
                          </label>
                          <input
                            min="0"
                            type="number"
                            className="form-control"
                            id="callCharge"
                            placeholder={'Enter Coin'}
                            value={gameCoin1}
                            onChange={(e) =>
                              setGameCoin1(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        {' '}
                        <div className="mb-3">
                          <label htmlFor="callCharge" className="form-label">
                            Bet 2
                          </label>
                          <input
                            type="number"
                            min="0"
                            className="form-control"
                            id="callCharge"
                            placeholder={'Enter Coin'}
                            value={gameCoin2}
                            onChange={(e) =>
                              setGameCoin2(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        {' '}
                        <div className="mb-3">
                          <label htmlFor="callCharge" className="form-label">
                            Bet 3
                          </label>
                          <input
                            min="0"
                            type="number"
                            className="form-control"
                            id="callCharge"
                            placeholder={'Enter Coin'}
                            value={gameCoin3}
                            onChange={(e) =>
                              setGameCoin3(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <label htmlFor="callCharge" className="form-label">
                            Bet 4
                          </label>
                          <input
                            min="0"
                            type="number"
                            className="form-control"
                            id="callCharge"
                            placeholder={'Enter Coin'}
                            value={gameCoin4}
                            onChange={(e) =>
                              setGameCoin4(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        {' '}
                        <div className="mb-3">
                          <label htmlFor="callCharge" className="form-label">
                            Bet 5
                          </label>
                          <input
                            min="0"
                            type="number"
                            className="form-control"
                            id="callCharge"
                            placeholder={'Enter Coin'}
                            value={gameCoin5}
                            onChange={(e) =>
                              setGameCoin5(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      {errors.gameCoin1 && (
                        <div className="ml-2 mt-1">
                          {errors.gameCoin1 && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.gameCoin1}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {errors.gameCoin2 && (
                        <div className="ml-2 mt-1">
                          {errors.gameCoin2 && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.gameCoin2}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      {errors.gameCoin3 && (
                        <div className="ml-2 mt-1">
                          {errors.gameCoin3 && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.gameCoin3}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      {errors.gameCoin4 && (
                        <div className="ml-2 mt-1">
                          {errors.gameCoin4 && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.gameCoin4}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      {errors.gameCoin5 && (
                        <div className="ml-2 mt-1">
                          {errors.gameCoin5 && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.gameCoin5}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleSubmit}
                        style={{
                          marginTop: '92px',
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          {/* Firebase setting  */}
          {type === 'firebaseSetting' && (
            <div className="col-md-12">
              {/* <h3 className="mb-3 text-white">Firebase Notification Setting</h3> */}
              <div className="row">
                <div className=" col-12">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="">
                          <label className="form-label" htmlFor="privateKey">
                            Private Key JSON ( use for firebase push
                            notification)
                          </label>
                          <textarea
                            name=""
                            className="form-control mt-2"
                            id="privateKey"
                            rows={10}
                            value={privateKey}
                            placeholder={`Enter firebaseKey`
                            }
                            onChange={(e) => {
                              const newValue = e.target.value;
                              try {
                                const newData = JSON.parse(newValue);
                                setPrivateKey(newValue);
                                setError('');
                              } catch (error) {
                                // Handle invalid JSON input
                                console.error('Invalid JSON input:', error);
                                setPrivateKey(newValue);
                                return setError({
                                  ...error,
                                  privateKey: 'Invalid JSON input',
                                });
                              }
                            }}
                          ></textarea>

                          {errors.privateKey && (
                            <div className="ml-2 mt-1">
                              {errors.privateKey && (
                                <div className="pl-1 text__left">
                                  <span className="text-red">
                                    {errors.privateKey}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </form>
                      <div className="d-flex justify-content-end mt-3">
                        <button
                          type="button"
                          className="btn btn-danger "
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Email Setting  */}
          {type === 'currencySetting' && (
            <div className="col-md-12">
              <Currency />
            </div>
          )}



          {/* Other Setting  */}
          {type === 'otherSetting' && (
            <div className="col-md-12 col-12">
              <div className="card">
                <div className="card-body">
                  <form className="row">
                    <div className="col-6 mb-2">
                      <label htmlFor="key" className="form-label">
                        PK-End Time (max time in seconds)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={
                          'Enter PK-End Time'
                        }
                        id="key"
                        value={pkEndTime}
                        onChange={(e) => setPkEndTime(e.target.value)}
                      />
                      {errors.pkEndTime && (
                        <div className="ml-2 mt-1">
                          {errors.pkEndTime && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.pkEndTime}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="col-6 mb-2">
                      <label htmlFor="vipDiamond" className="form-label">
                        Vip Diamond Bonus
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="vipDiamond"
                        min="0"
                        placeholder={'EnterVip Diamond Bonus'
                        }
                        value={vipDiamond}
                        onChange={(e) =>
                          setVipDiamond(parseInt(e.target.value))
                        }
                      />
                      {errors.vipDiamond && (
                        <div className="ml-2 mt-1">
                          {errors.vipDiamond && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.vipDiamond}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="col-6">
                      <label htmlFor="vipDiamond" className="form-label">
                        Call Receiver Ratio (%)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="vipDiamond"
                        min="0"
                        placeholder={'Enter Call Receiver Ration'
                        }
                        value={callReceiverPercent}
                        onChange={(e) =>
                          setCallReceiverPercent(parseInt(e.target.value))
                        }
                      />
                      {errors.callReceiverPercent && (
                        <div className="ml-2 mt-1">
                          {errors.callReceiverPercent && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.callReceiverPercent}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="col-6">
                      <label htmlFor="vipDiamond" className="form-label">
                        Agency Commission (%)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="vipDiamond"
                        min="0"
                        placeholder={
                          'Enter Agency Commission'
                        }
                        value={agencyCommission}
                        onChange={(e) =>
                          setAgencyCommission(parseInt(e.target.value))
                        }
                      />
                      {errors.agencyCommission && (
                        <div className="ml-2 mt-1">
                          {errors.agencyCommission && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.agencyCommission}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="col-6">
                      <label htmlFor="vipDiamond" className="form-label mt-2">
                        Location API Key
                      </label>

                      <div style={{ position: 'relative' }}>
                        <input
                          type="text"
                          className="form-control pr-5"
                          id="vipDiamond"
                          min="0"
                          placeholder={'Enter Location API Key'
                          }
                          value={locationApiKey}
                          onChange={(e) => setLocationApiKey(e.target.value)}
                        />

                        {/* <Tooltip title={tooltipText} arrow> */}
                        <div
                          style={{
                            position: 'absolute',
                            right: '0px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                          }}
                        >
                          <IconButton
                            onClick={handleCopy}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                              padding: 0,
                              color: 'blue',
                            }}
                          >
                            {locationApiKey ? (
                              // <svg
                              //   xmlns="http://www.w3.org/2000/svg"
                              //   width="20"
                              //   height="20"
                              //   viewBox="0 0 24 24"
                              //   fill="none"
                              //   stroke="currentColor"
                              //   strokeWidth="2"
                              //   strokeLinecap="round"
                              //   strokeLinejoin="round"
                              // >
                              //   <rect
                              //     x="9"
                              //     y="9"
                              //     width="12"
                              //     height="12"
                              //     rx="2"
                              //     ry="2"
                              //   />
                              //   <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              // </svg>
                              <ContentCopyIcon fontSize="small" />
                            ) : (
                              <CloseIcon />
                            )}
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              if (locationApiKey) {
                                const url = locationApiKey.startsWith('http')
                                  ? locationApiKey
                                  : `https://${locationApiKey}`;
                                window.open(url, '_blank');
                              }
                            }}
                            style={{
                              marginLeft: '2px',
                              marginRight: '5px',
                            }}
                          >
                            <OpenInNewIcon fontSize="small" />
                          </IconButton>
                        </div>

                        {/* </Tooltip> */}
                      </div>

                      {errors.locationApiKey && (
                        <div className="ml-2 mt-1">
                          <div className="pl-1 text__left">
                            <span className="text-red">
                              {errors.locationApiKey}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="col-6 mt-2">
                      <label htmlFor="vipDiamond" className="form-label">
                        Email Setting
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="vipDiamond"
                        placeholder={`Enter here resend API key`
                        }
                        min="0"
                        value={resendApiKey}
                        onChange={(e) => setResendApiKey(e.target.value)}
                      />
                      {errors.resendApiKey && (
                        <div className="ml-2 mt-1">
                          {errors.resendApiKey && (
                            <div className="pl-1 text__left">
                              <span className="text-red">
                                {errors.resendApiKey}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>



                    <div className="d-flex justify-content-end ">
                      <button
                        type="button"
                        className="btn btn-danger "
                        onClick={handleSubmit}
                        style={{
                          marginTop: '10px',
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <h5 className="card-title">Banner Announcement Setting</h5>

                  <form>
                    <div className="row mb-3">
                      <div className="col-6">
                        <label htmlFor="giftanncoin" className="form-label">
                          Minimum Gift Announcement Coin
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="giftAnnouncementCoin"
                          placeholder={`Enter here minimun gift announcement coin`
                          }
                          min="0"
                          value={giftAnnouncementCoin}
                          onChange={(e) => setGiftAnnouncementCoin(e.target.value)}
                        />
                        {errors.giftAnnouncementCoin && (
                          <div className="ml-2 mt-1">
                            {errors.giftAnnouncementCoin && (
                              <div className="pl-1 text__left">
                                <span className="text-red">
                                  {errors.giftAnnouncementCoin}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="col-6">
                        <label htmlFor="gameannouncementcoin" className="form-label">
                          Minimum Game Announcement Coin
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="gameAnnouncementCoin"
                          placeholder={`Enter here minimun game announcement coin`
                          }
                          min="0"
                          value={gameAnnouncementCoin}
                          onChange={(e) => setGameAnnouncementCoin(e.target.value)}
                        />
                        {errors.gameAnnouncementCoin && (
                          <div className="ml-2 mt-1">
                            {errors.gameAnnouncementCoin && (
                              <div className="pl-1 text__left">
                                <span className="text-red">
                                  {errors.gameAnnouncementCoin}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-danger "
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default connect(null, { getSetting, updateSetting, handleSwitch })(
  Setting
);
