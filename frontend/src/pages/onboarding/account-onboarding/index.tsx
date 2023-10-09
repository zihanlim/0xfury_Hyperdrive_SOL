import "./account-onboarding.css";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import {
  coreService
} from '../../../core/service'


const AccountOnBoarding = () => {
  const [smartAccount, setSmartAccount] = useState<any>(null)
  // const [interval, enableInterval] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  // const [provider, setProvider] = useState<any>(null);
  let navigate = useNavigate();

  

  const [fadeComplete, setFadeComplete] = useState(false);

  useEffect(() => {
    let fade: any = null
    let fade1: any = null
    let fade2: any = null
    if (!fadeComplete) {
      fade = coreService.setFadeAnimation('.text-wrapper', () => {})
      fade1 = coreService.setFadeAnimation('.text-wrapper-2', () => {})
      fade2 = coreService.setFadeAnimation('.google', () => {
        setFadeComplete(true)
      })
    }

    return () => {
      if (fade) {
        fade.kill();
      }
      if (fade1) {
        fade1.kill();
      }
      if (fade2) {
        fade2.kill();
      }
    }; 
  }, [])

  const goToAfterOnboarding = () => {
    navigate("/onboarding/afteronboarding");
  };

  const goToAfterOnboarding2 = () => {
    navigate("/onboarding/afteronboarding2");
  };

  
  return (
    <React.Fragment>
        {
        // !smartAccount && !loading && 
        <div className="account-onboarding-index">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <p className="text-wrapper">Choose an account to continue your login with Fury</p>
              
              <div className="text-wrapper-4">Sign in with Google</div>
              <div className="google" />
              <div>

              <button type='button' className="btn" onClick={goToAfterOnboarding}><img className="human" alt="Human" src="/src/assets/human-1.png" />
                <p className="john-doe-johndoe">
                <span className="span">
                  John Doe
                  <br />
                </span>
                <span className="text-wrapper-2">johndoe@gmail.com</span>
                </p>
              </button>

              </div>
              <img className="line" alt="Line" src="/src/assets/line-1.png" />

              <div>
                <button type='button' className="btn" onClick={goToAfterOnboarding2}><img className="other-accounts" alt="Other accounts" src="/src/assets/other-accounts-1.png" />
                <div className="text-wrapper-3">Use another account</div>

                
                </button>

                </div>

                <img
                className="fury-logo-graphic"
                alt="Fury logo graphic"
                src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe88bd328c829ae1d3b1d9/img/fury-logo-graphic-2@2x.png"
              />
              <img className="google" alt="Google" src="/src/assets/Google.png" />
              
              
            </div>
          </div>
        </div>}
    </React.Fragment>
  );
};

export default AccountOnBoarding;
