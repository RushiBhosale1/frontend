/* eslint-disable */

import React, { useState, Fragment, useEffect } from "react";
import "./homestyle.css"
import "../assets/css/login_style.css"
import { Link } from "react-router-dom";
import "./stylestylestyle.css"
// import "./css/bootstrap.css"
// import "./css/bootstrap.min.css"
import logo from "./optiprime.jpeg"

export default function HomePage() {
  return (
    <>
      <div fs-cc="banner" className="cookie-popup_component">
        <div className="cookie-modal_component">
          <div className="cookie-modal_styles w-embed"></div>
          <div className="cookie-modal_content-wrap is-small">
            <div className="cookie-modal_title is-small">Cookie settings</div>
            <div className="cookie-modal_description">
              By clicking "Accept all cookies" By clicking, you agree to the
              storing of cookies on your device to enhance site navigation,
              analyze site usage, and assist in our marketing efforts.
              <a href="/legaal/privacybeleid"> More information</a>
            </div>
          </div>
          <div className="cookie-modal_button-wrap is-small">
            <a
              fs-cc="allow"
              href="#"
              className="cookie-modal_button w-inline-block"
            >
              <div className="cookie-modal_button_text main-btn">
                Accept all cookies
              </div>
            </a>
            <a
              fs-cc="open-preferences"
              href="#"
              className="cookie-modal_button is-secondary w-inline-block"
            >
              <div className="cookie-modal_button_text">Cookie settings</div>
            </a>
          </div>
        </div>
      </div>
      <div
        fs-cc-scroll="disable"
        fs-cc="preferences"
        className="cookie-preference_component"
      >
        <div fs-cc="close" className="cookie-preference_background" />
        <div className="cookie-preference_wrapper">
          <div className="cookie-modal_component">
            <div className="cookie-modal_content-wrap">
              <div className="cookie-modal_title">Cookie settings</div>
              <div className="cookie-modal_description">
                By clicking "Accept all cookies" By clicking, you agree to the
                storing of cookies on your device to enhance site navigation,
                analyze site usage, and assist in our marketing efforts.
                <a href="#">More information</a>
              </div>
              <div className="cookie-modal_form-wrap w-form">
                <form
                  id="ck-form"
                  name="wf-form-ck-form"
                  data-name="ck-form"
                  method="get"
                  className="cookie-modal_form"
                  data-wf-page-id="64f0aeb3db8f59708c970a94"
                  data-wf-element-id="a1e826c0-c381-8196-de03-82615302a464"
                >
                  <div className="cookie-modal_radio is--not-allowed w-clearfix">
                    <div className="cookie-modal_radio_button is-always-active" />
                    <div className="cookie-modal_radio_label is--not-allowed">
                      Essential (Always active)
                    </div>
                    <div className="cookie-modal_radio_description is--not-allowed">
                      Cookies that are necessary to enable basic functionality
                      of the website.
                    </div>
                  </div>
                  <label className="w-checkbox cookie-modal_radio w-clearfix">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom cookie-modal_radio_button w--redirected-checked" />
                    <input
                      type="checkbox"
                      id="fs__marketing"
                      name="Fs-Marketing"
                      data-name="Fs Marketing"
                      defaultChecked
                      fs-cc-checkbox="marketing"
                      style={{ opacity: 1, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      htmlFor="Fs-Marketing"
                      className="cookie-modal_radio_label w-form-label"
                    >
                      Marketing
                    </span>
                    <div className="cookie-modal_radio_description">
                      Cookies used to deliver advertisements that are more
                      relevant to you and your interests
                    </div>
                  </label>
                  <label className="w-checkbox cookie-modal_radio w-clearfix">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom cookie-modal_radio_button w--redirected-checked" />
                    <input
                      type="checkbox"
                      id="fs__personalization"
                      name="Fs-Personalization"
                      data-name="Fs Personalization"
                      defaultChecked
                      fs-cc-checkbox="personalization"
                      style={{ opacity: 1, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      htmlFor="Fs-Personalization"
                      className="cookie-modal_radio_label w-form-label"
                    >
                      Personalization
                      <br />
                    </span>
                    <div className="cookie-modal_radio_description">
                      Cookies that allow the website to remember your choices
                      (such as your username, language or the region you are
                      in).
                    </div>{" "}
                  </label>
                  <label className="w-checkbox cookie-modal_radio w-clearfix">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom cookie-modal_radio_button w--redirected-checked" />
                    <input
                      type="checkbox"
                      id="fs__analytics"
                      name="Fs-Analytics"
                      data-name="Fs Analytics"
                      defaultChecked
                      fs-cc-checkbox="analytics"
                      style={{ opacity: 1, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      htmlFor="Fs-Analytics"
                      className="cookie-modal_radio_label w-form-label"
                    >
                      Analytisch
                      <br />
                    </span>
                    <div className="cookie-modal_radio_description">
                      Cookies helpen te begrijpen hoe deze website presteert,
                      hoe bezoekers met de site omgaan en of er technische
                      problemen zijn.
                    </div>
                  </label>
                  <div className="cookie-modal_button-wrap in-pref-manger">
                    <a
                      fs-cc="allow"
                      href="#"
                      className="cookie-modal_button w-inline-block"
                    >
                      <div className="cookie-modal_button_text">
                        Accept all cookies
                      </div>
                    </a>
                    <a
                      fs-cc="submit"
                      href="#"
                      className="cookie-modal_button is-secondary w-inline-block"
                    >
                      <div className="cookie-modal_button_text secondary">
                        Save settings
                      </div>
                    </a>
                  </div>
                </form>
                <div className="hide-all w-form-done" />
                <div className="hide-all w-form-fail" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="global-styles w-embed">
        <link rel="stylesheet" href="styles.css" />
      </div>
      <div
        data-animation="default"
        className="navbar w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll={1}
        data-duration={400}
        data-doc-height={1}
      >
        <div className="notification-bar-wrapper w-dyn-list">
          <div role="list" className="notification-bar-list w-dyn-items">
            <div role="listitem" className="notification-bar-item w-dyn-item">
              <div className="count_down-timer-bar w-condition-invisible">
                <div className="count_down-timer-container">
                  <div className="p-s white count_down-message">
                    From September 1, the MOQ will go from 5 to 20 orders per
                    day!
                  </div>
                  <div className="count_down-unit-wrapper">
                    <div className="count_down-timer-unit-wrap">
                      <div id="days" className="countdown-timer-number">
                        00
                      </div>
                      <div className="count_down-timer-text">d</div>
                    </div>
                    <div className="count_down-timer-divider">:</div>
                    <div className="count_down-timer-unit-wrap">
                      <div id="hours" className="countdown-timer-number">
                        00
                      </div>
                      <div className="count_down-timer-text">h</div>
                    </div>
                    <div className="count_down-timer-divider">:</div>
                    <div className="count_down-timer-unit-wrap">
                      <div id="minutes" className="countdown-timer-number">
                        00
                      </div>
                      <div className="count_down-timer-text">m</div>
                    </div>
                    <div className="count_down-timer-divider">:</div>
                    <div className="count_down-timer-unit-wrap">
                      <div id="seconds" className="countdown-timer-number">
                        00
                      </div>
                      <div className="count_down-timer-text">s</div>
                    </div>
                    <div className="html-embed-2 w-embed w-script"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-nav">
          <a
            href="/"
            aria-current="page"
            className="navbar-logo-link w-nav-brand w--current"
          >
            <img
              src={logo}
              loading="lazy"
              alt="Service Points logo met donkere letters"
              className="navbar-logo-image"
            />
          </a>
          {/* <div className="navbar-menu-wrap">
            <div
              data-hover="true"
              data-delay={300}
              data-w-id="f67215a3-a884-984e-9b7d-36e0d5acabf1"
              className="navbar-menu-dropdown w-dropdown"
            >
              <div className="navbar-dropdown-toggle w-dropdown-toggle">
                <div className="navbar-dropdown-toggle-text">
                  Dropship platform
                </div>
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c01d2019f21861f2b54114_arrow-45%C2%B0.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link-arrow"
                />
              </div>
              <nav className="navbar-dropdown-list w-dropdown-list">
                <div className="navbar-dropdown-container">
                  <div className="navbar-dropdown-content">
                    <div className="navbar-dropdown-content-full">
                      <div className="navbar-dropdown-link-list full">
                        <div className="navbar-dropdown-title-links-wrapper">
                          <div className="navbar-dropdown-heading-wrapper">
                            <img
                              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c037152976611442a65ead_features%20icon.svg"
                              loading="lazy"
                              alt="Zwart icoontje voor functionaliteiten"
                              className="navbar-dropdown-heading-icon"
                            />
                            <div
                              id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77d9e-9fc77d97"
                              className="navbar-dropdown-heading"
                            >
                              Features
                            </div>
                            <div className="badge-small">
                              <div className="badge-text">New features</div>
                            </div>
                          </div>
                          <div
                            id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77da3-9fc77d97"
                            className="line-divider"
                          />
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e470d8a202f2d3241ce5_icon-overview.svg"
                                loading="lazy"
                                alt="Groen icoontje voor Overview"
                                className="icon"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Overview
                              </div>
                              <div className="p-s">
                                See what features our SP platform has to offer.
                              </div>
                            </div>
                          </a>
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c039c2e0413edc89d85f67_icon-line-chart.svg"
                                loading="lazy"
                                alt="Groen icoontje voor statistieken"
                                className="icon _40"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Service Points vs. Private drop ship agent
                              </div>
                              <div className="p-s">
                                Compare our platform and functionalities with
                                other players on the market.
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="navbar-dropdown-link-list">
                        <div
                          id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77db7-9fc77d97"
                          className="navbar-dropdown-title-links-wrapper"
                        >
                          <div
                            id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77db8-9fc77d97"
                            className="navbar-dropdown-heading-wrapper"
                          >
                            <img
                              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c038558814a52cc4900676_icon-badge.svg"
                              loading="lazy"
                              alt="Zwart icoontje voor badge"
                              className="navbar-dropdown-heading-icon badge"
                            />
                            <div
                              id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dba-9fc77d97"
                              className="navbar-dropdown-heading"
                            >
                              Dropship Levels
                            </div>
                          </div>
                          <div
                            id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dbc-9fc77d97"
                            className="line-divider"
                          />
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e4007a8f4e5e30c21500_icon-file.svg"
                                loading="lazy"
                                alt="Groen icoontje voor document"
                                className="icon _45"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Explanation
                              </div>
                              <div className="p-s">
                                How do our Dropship Levels work?
                              </div>
                            </div>
                          </a>
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e470d8a202f2d3241ce5_icon-overview.svg"
                                loading="lazy"
                                alt="Groen icoontje voor Overview"
                                className="icon"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Overview
                              </div>
                              <div className="p-s">
                                Explore and contrast the different tiers of
                                Dropship Levels through a comprehensive
                                overview, highlighting the pricier options.
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="navbar-dropdown-link-list">
                        <div
                          id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dd0-9fc77d97"
                          className="navbar-dropdown-title-links-wrapper"
                        >
                          <div className="navbar-dropdown-heading-wrapper">
                            <img
                              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c03855dfef25cfd7a06edc_icon-box.svg"
                              loading="lazy"
                              alt="Zwart icoontje van product"
                              className="navbar-dropdown-heading-icon box"
                            />
                            <div
                              id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dd3-9fc77d97"
                              className="navbar-dropdown-heading"
                            >
                              Suppliers/agents
                            </div>
                          </div>
                          <div
                            id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dd5-9fc77d97"
                            className="line-divider"
                          />
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e4007a8f4e5e30c21500_icon-file.svg"
                                loading="lazy"
                                alt="Groen icoontje voor document"
                                className="icon _45"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Explanation
                              </div>
                              <div className="p-s">
                                How does our agent (supplier) system work?
                              </div>
                            </div>
                          </a>
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e470d8a202f2d3241ce5_icon-overview.svg"
                                loading="lazy"
                                alt="Groen icoontje voor Overview"
                                className="icon"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Overview
                              </div>
                              <div className="p-s">
                                Review and contrast all our partner suppliers,
                                emphasizing the higher-priced options.
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div
              data-hover="true"
              data-delay={300}
              data-w-id="f67215a3-a884-984e-9b7d-36e0d5acac45"
              className="navbar-menu-dropdown w-dropdown"
            >
              <div className="navbar-dropdown-toggle w-dropdown-toggle">
                <div className="navbar-dropdown-toggle-text">
                  Other services
                </div>
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c01d2019f21861f2b54114_arrow-45%C2%B0.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link-arrow"
                />
              </div>
              <nav className="navbar-dropdown-list w-dropdown-list">
                <div className="navbar-dropdown-container">
                  <div className="navbar-dropdown-content">
                    <div className="navabr-dropdown-content-left">
                      <div className="navbar-dropdown-link-list _2-columns">
                        <div className="navbar-dropdown-title-links-wrapper">
                          <div className="navbar-dropdown-heading-wrapper">
                            <img
                              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c037152976611442a65ead_features%20icon.svg"
                              loading="lazy"
                              alt="Zwart icoontje voor functionaliteiten"
                              className="navbar-dropdown-heading-icon"
                            />
                            <div
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242ace-07242ac7"
                              className="navbar-dropdown-heading"
                            >
                              In-house services
                            </div>
                          </div>
                          <div
                            id="w-node-b21b8488-4c30-3e38-7868-8e4007242ad0-07242ac7"
                            className="line-divider"
                          />
                          <div className="divider-1" />
                          <div className="navbar-dropdown-nav-links-wrapper">
                            <a
                              fs-scrolldisable-element="enable"
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242ad3-07242ac7"
                              href="#"
                              className="navbar-dropdown-link w-inline-block"
                            >
                              <div className="icon-wrap small mmmoooo">
                                <img
                                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11a124f9a861231250d51_box.svg"
                                  loading="lazy"
                                  alt="Groen icoontje voor producten"
                                  className="icon _50"
                                />
                              </div>
                              <div className="navbar-dropdown-link-item">
                                <div className="navbar-dropdown-link-title">
                                  Sourcing &amp; forwarding
                                </div>
                                <div className="p-s">
                                  Purchase your winning products to ship from
                                  stock.
                                </div>
                              </div>
                            </a>
                            <a
                              fs-scrolldisable-element="enable"
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242adb-07242ac7"
                              href="#"
                              className="navbar-dropdown-link w-inline-block"
                            >
                              <div className="icon-wrap small mmmoooo">
                                <img
                                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b27df0fc988e3acec70_product-return.svg"
                                  loading="lazy"
                                  alt="Groen icoontje voor retourproces"
                                  className="icon"
                                />
                              </div>
                              <div className="navbar-dropdown-link-item">
                                <div className="navbar-dropdown-link-title">
                                  Return service
                                </div>
                                <div className="p-s">
                                  Allow us to manage your returns with swift and
                                  efficient processing, emphasizing the premium
                                  service.
                                </div>
                              </div>
                            </a>
                            <a
                              fs-scrolldisable-element="enable"
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242ae3-07242ac7"
                              href="#"
                              className="navbar-dropdown-link w-inline-block"
                            >
                              <div className="icon-wrap small mmmoooo">
                                <img
                                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b04cba17b6f05ab4913_delivery%20(1).svg"
                                  loading="lazy"
                                  alt="Groen icoontje voor levering"
                                  className="icon"
                                />
                              </div>
                              <div className="navbar-dropdown-link-item">
                                <div className="navbar-dropdown-link-title">
                                  EU fulfilment
                                </div>
                                <div className="p-s">
                                  Enjoy fast delivery times throughout Europe by
                                  shipping from our EU based warehouses
                                </div>
                              </div>
                            </a>
                            <a
                              fs-scrolldisable-element="enable"
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242aeb-07242ac7"
                              href="#"
                              className="navbar-dropdown-link w-inline-block"
                            >
                              <div className="icon-wrap small mmmoooo">
                                <img
                                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b7bc9bbb755cfcb0bc2_world-wide-web%20(1).svg"
                                  loading="lazy"
                                  alt="Groen icoontje van webshop"
                                  className="icon _50"
                                />
                              </div>
                              <div className="navbar-dropdown-link-item">
                                <div className="navbar-dropdown-link-title">
                                  Store service
                                </div>
                                <div className="p-s">
                                  Need help with your webshop, customer service
                                  or ads? See how we can serve you
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="navabr-dropdown-content-right">
                      <div className="navbar-dropdown-content-wrapper">
                        <div className="navbar-dropdown-featured-wrapper">
                          <a
                            href="#"
                            className="navbar-dropdown-featured w-inline-block"
                          >
                            <div className="navbar-featured-image-wrapper">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0eb077a8f4e5e30ca746f_SP%20warehouse.jpg"
                                loading="eager"
                                sizes="100vw"
                                srcSet="
                          https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0eb077a8f4e5e30ca746f_SP%20warehouse-p-500.jpg  500w,
                          https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0eb077a8f4e5e30ca746f_SP%20warehouse-p-800.jpg  800w,
                          https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0eb077a8f4e5e30ca746f_SP%20warehouse.jpg       1000w
                        "
                                alt="Foto van fulfilment center"
                                className="navbar-dropdown-featured-image"
                              />
                            </div>
                            <div className="navbar-dropdown-featured-content">
                              <div className="navbar-dropdown-link-title light">
                                Enroll in our exclusive in-house services.
                              </div>
                              <div className="divider-1" />
                              <div className="p-s light">
                                Fill out our registration form to access and
                                utilize our in-house services.
                              </div>
                              <div className="divider-1" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="basic-btn outline invert w-inline-block"
                      >
                        <div className="btn-text">To register</div>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <a href="#" className="navbar-link last">
              Partnerships
            </a>
          </div> */}
          <div className="navbar-button-wrap">
          <Link
                      to="/login"
                      target="_blank"
                      className="minimal-btn light w-inline-block"
                      data-w-id
                    >
                                    <div className="btn-text login">Login</div>

                      
                    </Link>
           
              
        
            <div className="btn-divider" />
            <a
              href="signup.html"
              target="_blank"
              className="minimal-btn w-inline-block"
            >
              <div className="btn-text">Signup</div>
            </a>
          </div>
          <div
            fs-scrolldisable-element="toggle"
            data-w-id="f67215a3-a884-984e-9b7d-36e0d5acac8f"
            className="menu-icon_component"
          >
            <div className="menu-icon_line-top" />
            <div className="menu-icon_line-middle">
              <div className="menu-icon_line-middle-inner" />
            </div>
            <div className="menu-icon_line-bottom" />
          </div>
        </div>
        <div
          fs-scrolldisable-element="preserve"
          className="tablet_mobile-nav-dropdown"
        >
          <div className="menu-dropdown-nav-divider" />
          <div className="tablet_mobile-nav-dropdown-wrapper">
            <div className="tablet_mobile-navbar-menu-dropdown">
              <div
                data-w-id="f67215a3-a884-984e-9b7d-36e0d5acac98"
                className="tablet_mobile-nav-link-block"
              >
                <div className="navbar-link">Platform</div>
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c01d2019f21861f2b54114_arrow-45%C2%B0.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link-icon"
                />
              </div>
              <div className="tablet_mobile-navbar-dropdown-list platform">
                <div className="navbar-dropdown-container">
                  <div className="navbar-dropdown-content">
                    <div className="navbar-dropdown-content-full">
                      <div className="navbar-dropdown-link-list full">
                        <div className="navbar-dropdown-title-links-wrapper">
                          <div className="navbar-dropdown-heading-wrapper">
                            <img
                              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c037152976611442a65ead_features%20icon.svg"
                              loading="lazy"
                              alt="Zwart icoontje voor functionaliteiten"
                              className="navbar-dropdown-heading-icon"
                            />
                            <div
                              id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77d9e-9fc77d97"
                              className="navbar-dropdown-heading"
                            >
                              Features
                            </div>
                          
                          </div>
                          <div
                            id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77da3-9fc77d97"
                            className="line-divider"
                          />
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e470d8a202f2d3241ce5_icon-overview.svg"
                                loading="lazy"
                                alt="Groen icoontje voor Overview"
                                className="icon"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Overview
                              </div>
                              <div className="p-s">
                                See what features our SP platform has to offer.
                              </div>
                            </div>
                          </a>
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c039c2e0413edc89d85f67_icon-line-chart.svg"
                                loading="lazy"
                                alt="Groen icoontje voor statistieken"
                                className="icon _40"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Service Points vs. Private dropship agent
                              </div>
                              <div className="p-s">
                                Evaluate our platform and functionalities in
                                comparison to other competitors in the market.
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="navbar-dropdown-link-list">
                        <div
                          id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77db7-9fc77d97"
                          className="navbar-dropdown-title-links-wrapper"
                        >
                          <div
                            id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77db8-9fc77d97"
                            className="navbar-dropdown-heading-wrapper"
                          >
                            <img
                              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c038558814a52cc4900676_icon-badge.svg"
                              loading="lazy"
                              alt="Zwart icoontje voor badge"
                              className="navbar-dropdown-heading-icon badge"
                            />
                            <div
                              id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dba-9fc77d97"
                              className="navbar-dropdown-heading"
                            >
                              Dropship Levels
                            </div>
                          </div>
                          <div
                            id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dbc-9fc77d97"
                            className="line-divider"
                          />
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e4007a8f4e5e30c21500_icon-file.svg"
                                loading="lazy"
                                alt="Groen icoontje voor document"
                                className="icon _45"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Explanation
                              </div>
                              <div className="p-s">
                                How do our Dropship Levels work?
                              </div>
                            </div>
                          </a>
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e470d8a202f2d3241ce5_icon-overview.svg"
                                loading="lazy"
                                alt="Groen icoontje voor Overview"
                                className="icon"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Overview
                              </div>
                              <div className="p-s">
                                Discover and compare the Dropship Levels with an
                                extensive Overview.
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="navbar-dropdown-link-list">
                        <div
                          id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dd0-9fc77d97"
                          className="navbar-dropdown-title-links-wrapper"
                        >
                          <div className="navbar-dropdown-heading-wrapper">
                            <img
                              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c03855dfef25cfd7a06edc_icon-box.svg"
                              loading="lazy"
                              alt="Zwart icoontje van product"
                              className="navbar-dropdown-heading-icon box"
                            />
                            <div
                              id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dd3-9fc77d97"
                              className="navbar-dropdown-heading"
                            >
                              Suppliers/agents
                            </div>
                          </div>
                          <div
                            id="w-node-_0a52e42f-15e7-1e5c-c786-65799fc77dd5-9fc77d97"
                            className="line-divider"
                          />
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e4007a8f4e5e30c21500_icon-file.svg"
                                loading="lazy"
                                alt="Groen icoontje voor document"
                                className="icon _45"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Explanation
                              </div>
                              <div className="p-s">
                                How does our agent (supplier) system work?
                              </div>
                            </div>
                          </a>
                          <div className="divider-1" />
                          <a
                            fs-scrolldisable-element="enable"
                            href="#"
                            className="navbar-dropdown-link w-inline-block"
                          >
                            <div className="icon-wrap small mmmoooo">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0e470d8a202f2d3241ce5_icon-overview.svg"
                                loading="lazy"
                                alt="Groen icoontje voor Overview"
                                className="icon"
                              />
                            </div>
                            <div className="navbar-dropdown-link-item">
                              <div className="navbar-dropdown-link-title">
                                Overview
                              </div>
                              <div className="p-s">
                                View and compare all our partner suppliers.
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tablet_mobile-navbar-menu-dropdown">
              <div
                data-w-id="f67215a3-a884-984e-9b7d-36e0d5acaceb"
                className="tablet_mobile-nav-link-block"
              >
                <div className="navbar-link">Other services</div>
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c01d2019f21861f2b54114_arrow-45%C2%B0.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link-icon"
                />
              </div>
              <div className="tablet_mobile-navbar-dropdown-list e-com">
                <div className="navbar-dropdown-container">
                  <div className="navbar-dropdown-content">
                    <div className="navabr-dropdown-content-left">
                      <div className="navbar-dropdown-link-list _2-columns">
                        <div className="navbar-dropdown-title-links-wrapper">
                          <div className="navbar-dropdown-heading-wrapper">
                            <img
                              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c037152976611442a65ead_features%20icon.svg"
                              loading="lazy"
                              alt="Zwart icoontje voor functionaliteiten"
                              className="navbar-dropdown-heading-icon"
                            />
                            <div
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242ace-07242ac7"
                              className="navbar-dropdown-heading"
                            >
                              In-house services
                            </div>
                          </div>
                          <div
                            id="w-node-b21b8488-4c30-3e38-7868-8e4007242ad0-07242ac7"
                            className="line-divider"
                          />
                          <div className="divider-1" />
                          <div className="navbar-dropdown-nav-links-wrapper">
                            <a
                              fs-scrolldisable-element="enable"
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242ad3-07242ac7"
                              href="#"
                              className="navbar-dropdown-link w-inline-block"
                            >
                              <div className="icon-wrap small mmmoooo">
                                <img
                                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11a124f9a861231250d51_box.svg"
                                  loading="lazy"
                                  alt="Groen icoontje voor producten"
                                  className="icon _50"
                                />
                              </div>
                              <div className="navbar-dropdown-link-item">
                                <div className="navbar-dropdown-link-title">
                                  Sourcing &amp; forwarding
                                </div>
                                <div className="p-s">
                                  Purchase your winning products to ship from
                                  stock.
                                </div>
                              </div>
                            </a>
                            <a
                              fs-scrolldisable-element="enable"
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242adb-07242ac7"
                              href="#"
                              className="navbar-dropdown-link w-inline-block"
                            >
                              <div className="icon-wrap small mmmoooo">
                                <img
                                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b27df0fc988e3acec70_product-return.svg"
                                  loading="lazy"
                                  alt="Groen icoontje voor retourproces"
                                  className="icon"
                                />
                              </div>
                              <div className="navbar-dropdown-link-item">
                                <div className="navbar-dropdown-link-title">
                                  Return service
                                </div>
                                <div className="p-s">
                                  Let us handle your returns quickly and
                                  efficiently.
                                </div>
                              </div>
                            </a>
                            <a
                              fs-scrolldisable-element="enable"
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242ae3-07242ac7"
                              href="#"
                              className="navbar-dropdown-link w-inline-block"
                            >
                              <div className="icon-wrap small mmmoooo">
                                <img
                                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b04cba17b6f05ab4913_delivery%20(1).svg"
                                  loading="lazy"
                                  alt="Groen icoontje voor levering"
                                  className="icon"
                                />
                              </div>
                              <div className="navbar-dropdown-link-item">
                                <div className="navbar-dropdown-link-title">
                                  EU&nbsp;fulfilment
                                </div>
                                <div className="p-s">
                                  Enjoy fast delivery times throughout Europe by
                                  shipping from our EU based warehouses
                                </div>
                              </div>
                            </a>
                            <a
                              fs-scrolldisable-element="enable"
                              id="w-node-b21b8488-4c30-3e38-7868-8e4007242aeb-07242ac7"
                              href="#"
                              className="navbar-dropdown-link w-inline-block"
                            >
                              <div className="icon-wrap small mmmoooo">
                                <img
                                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b7bc9bbb755cfcb0bc2_world-wide-web%20(1).svg"
                                  loading="lazy"
                                  alt="Groen icoontje van webshop"
                                  className="icon _50"
                                />
                              </div>
                              <div className="navbar-dropdown-link-item">
                                <div className="navbar-dropdown-link-title">
                                  Store service
                                </div>
                                <div className="p-s">
                                  Need help with your webshop, customer service
                                  or ads? See how we can serve you
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="navabr-dropdown-content-right">
                      <div className="navbar-dropdown-content-wrapper">
                        <div className="navbar-dropdown-featured-wrapper">
                          <a
                            href="#"
                            className="navbar-dropdown-featured w-inline-block"
                          >
                            <div className="navbar-featured-image-wrapper">
                              <img
                                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0eb077a8f4e5e30ca746f_SP%20warehouse.jpg"
                                loading="eager"
                                sizes="100vw"
                                srcSet="
                          https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0eb077a8f4e5e30ca746f_SP%20warehouse-p-500.jpg  500w,
                          https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0eb077a8f4e5e30ca746f_SP%20warehouse-p-800.jpg  800w,
                          https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0eb077a8f4e5e30ca746f_SP%20warehouse.jpg       1000w
                        "
                                alt="Foto van fulfilment center"
                                className="navbar-dropdown-featured-image"
                              />
                            </div>
                            <div className="navbar-dropdown-featured-content">
                              <div className="navbar-dropdown-link-title light">
                                Sign up for our in-house services
                              </div>
                              <div className="divider-1" />
                              <div className="p-s light">
                                Complete our registration form to use our
                                in-house services.
                              </div>
                              <div className="divider-1" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="basic-btn outline invert w-inline-block"
                      >
                        <div className="btn-text">To register</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="tablet_mobile-nav-link-block partnerships w-inline-block"
            >
              <div className="navbar-link">Partnerships</div>
            </a>
            <div className="tablet_mobile-nav-button-wrapper">
              <a
                id="w-node-f67215a3-a884-984e-9b7d-36e0d5acad2c-d5acabec"
                href="#"
                className="basic-btn outline w-button"
              >
                To register
              </a>
              <a
                id="w-node-f67215a3-a884-984e-9b7d-36e0d5acad2e-d5acabec"
                href="#"
                className="basic-btn w-button"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee _2">
      
      </div>
      <section className="home-hero-section">
        <div className="container-home-hero">
          {/* <div className="trustpilot-embed w-embed">
            <div
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="5419b6a8b0d04a076446a9ad"
              data-businessunit-id="60001446c37c02000100edb3"
              data-style-height="24px"
              data-style-width="100%"
              data-theme="light"
              data-style-alignment="center"
            >
              <a href="#" target="_blank" rel="noopener" />
            </div>
          </div> */}
          <h1
            data-w-id="6f9bd2bc-24c1-19cc-50bb-1c4243ab79f2"
            style={{ opacity: 1, color:"white" , marginTop:"1rem"}}
            className="hm center home"
          >
            <span className="text-gradient-animation">SmartDrop </span>
            Automated
            <br />
            <span className="h1-smaller">and Data Driven &amp; Dropshipping</span>
          </h1>
          <div className="divider-1" />
          <div
            data-w-id="0a11de11-5cc5-0e31-c764-4799be30471e"
            style={{ opacity: 1, color:"white" }}
            className="p-l center subtitle-home"
          >
            Our groundbreaking platform effortlessly combines state-of-the-art software with the finest offerings from top-tier sources. The blend of advanced automation and data-driven management not only enables unlimited and swift scalability but also ensures a stress-free experience. This exceptional level of service is evident in its inherent sophistication, contributing to its heightened value.
          </div>
          <div className="divider-2" />
          <div className="home-hero-cta-block">
            <div
              data-w-id="451ff588-3f22-dca9-eecf-aac74b68d0b0"
              style={{ opacity: 1 }}
              className="button-wrapper hero"
            >




<Link
                      to="/signup"
                      target="_blank"
          
                      className="icon-btn w-inline-block"
                      style={{textDecoration:"none", background:"white"}}
                      data-w-id
                    >

                <div className="btn-text" >Start onboarding</div>
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64bfef2863c91bb177105f50_btn-icon-black.svg"
                  loading="lazy"
                  alt=""
                  className="btn-icon"
                />
              </Link>
              
              <img
                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64dbad81e1bc1e6a8ecfab0f_social-avatars.png"
                loading="lazy"
                alt="3 foto's van actieve SP members"
                className="social-proof-people-image hide"
              />
              <div className="divider-0-5" />
              <div className="p-s">Our platform is free to use!</div>
            </div>
            <div
              data-w-id="451ff588-3f22-dca9-eecf-aac74b68d0b5"
              style={{ opacity: 1 }}
              className="w-layout-grid hero-usp-grid"
            >
              <div
                id="w-node-_70e8d53e-1fc4-c1ca-d9b8-5882ae7c64bb-8c970a94"
                className="hero-usp-grid-cell"
              >
                <div className="icon-wrap small mmmoooo">
                  <img
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64db5b2bbcd0c6c9b18f7e70_money.svg"
                    loading="lazy"
                    alt="Groen icoontje voor lagere prijs"
                    className="icon"
                  />
                </div>
                <div className="divider-0-5" />
                <div className="number whitenumber">14%</div>
                <div className="social-proof-text">
                  Competitive pricing advantage.
                </div>
              </div>
              <div
                id="w-node-_451ff588-3f22-dca9-eecf-aac74b68d0b7-8c970a94"
                className="hero-usp-grid-cell"
              >
                <div className="icon-wrap small mmmoooo">
                  <img
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/653a7f36d3ee383b209c3053_dispute%20icon.svg"
                    loading="lazy"
                    alt="Groen icoontje van een geschil"
                    className="icon _50"
                  />
                </div>
                <div className="divider-0-5" />
                <div className="number whitenumber">1.1%</div>
                <div className="social-proof-text">Average dispute rate.</div>
              </div>
              <div
                id="w-node-_0463fc1a-41cd-b24c-ec8e-7a9bbbf1e66f-8c970a94"
                className="hero-usp-grid-cell"
              >
                <div className="icon-wrap small mmmoooo">
                  <img
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64db5b2a4ed87fd82ce96a5d_time-management.svg"
                    loading="lazy"
                    alt="Groen icoontje voor processing time"
                    className="icon _50"
                  />
                </div>
                <div className="divider-0-5" />
                <div className="number whitenumber">2.1</div>
                <div className="social-proof-text">
                  Average processing time in days.
                  <br />
                </div>
              </div>
              <div
                id="w-node-_85fb6da4-fff0-ca91-7bb0-3c618e93340f-8c970a94"
                className="hero-usp-grid-cell"
              >
                <div className="icon-wrap small mmmoooo">
                  <img
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64db5b2bab640f11c458e4e9_fast-delivery.svg"
                    loading="lazy"
                    alt="Groen icoontje voor shipping time"
                    className="icon _50"
                  />
                </div>
                <div className="divider-0-5" />
                <div className="number whitenumber">6.2</div>
                <div className="social-proof-text">
                  Average shipping time in days.
                  <br />
                </div>
              </div>
              <div
                id="w-node-_68d7e04e-17e0-0a31-8c07-2b67dbff0a2b-8c970a94"
                className="hero-usp-grid-cell last"
              >
                <div className="icon-wrap small mmmoooo">
                  <img
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64db5b2bd6c52bb433ffc491_file%20(1).svg"
                    loading="lazy"
                    alt="Groen icoontje voor quotes"
                    className="icon _50"
                  />
                </div>
                <div className="divider-0-5" />
                <div className="number whitenumber">3.4</div>
                <div className="social-proof-text">
                  Average quotations per product.
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="47c6f179-4e37-e4bd-f296-30b4fb0d775c"
          className="home-hero-overlay-animation"
        />
      </section>
      <div
        data-w-id="eee41a2c-b9d0-7575-acbe-49d294022888"
        className="movie-section"
      >
        <div className="cursor-area">
          <div className="scroll-btn">
            <div className="text-block-2">Keep scrolling</div>
          </div>
          <div className="cursor-css w-embed"></div>
        </div>
        <div
          className="home-platform-video w-background-video w-background-video-atom"
          data-autoplay="true"
          data-loop="true"
          data-beta-bgvideo-upgrade="false"
          data-wf-ignore="true"
          style={{ opacity: 1 }}
          data-poster-url="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-poster-00001.jpg"
          data-w-id="eee41a2c-b9d0-7575-acbe-49d294022889"
          data-video-urls="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-transcode.mp4,https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-transcode.webm"
        >
          <video
            id="eee41a2c-b9d0-7575-acbe-49d294022889-video"
            autoPlay
            loop
            style={{
              backgroundImage:
                'url("http://localhost:8000/media/opti.png")',
            }}
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            {/* <source
              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-transcode.webm"
              data-wf-ignore="true"
            /> */}
          </video>
          <div className="home-video-overlay" />
          <div className="home-video-heading-wrapper">
            <div className="home-video-header-wrap">
              <h3 className="h2 light" style={{paddingLeft: "10rem",fontSize:"2rem" }}>
                The utmost exclusive
                <br />
                Preeminent dropshipping platform in.
                <br />
              </h3>
            </div>
          </div>
        </div>
        <div className="home-feature-scroll-wrapper">
          <div className="home-feature-scroll-list">
            <div className="home-feature-scroll-item">
              <div className="icon-wrap big">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c153ea5ebf8b795f168467_reseller.svg"
                  loading="lazy"
                  alt="Groen icoontje voor leveranciers"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">
                Elite suppliers/agents.
              </h3>
              <div className="divider-1" />
              <p className="p-s light">
                Get the best prices from top-notch suppliers/agents through our
                unique bidding system and base your choice not only on price,
                but also on quality, dispute rate, shipping time and processing
                time
              </p>
            </div>
            <div className="home-feature-scroll-item">
              <div className="icon-wrap big">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64ca2fa66e35720cb0b64a83_live-chat%20(1).svg"
                  loading="lazy"
                  alt="Groen icoontje van klantenservice"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">Premium service</h3>
              <div className="divider-1" />
              <p className="p-s light">
                Get a personal EU account manager who will become the hub of
                your supply chain network and take on an advisory and premium
                service role.
              </p>
            </div>
            <div className="home-feature-scroll-item">
              <div className="icon-wrap big">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c153eaefba8ec3e90bc8e5_supply-chain.svg"
                  loading="lazy"
                  alt="Groen icoontje van leverproces"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">
                Supply chain optimization
              </h3>
              <div className="divider-0-5" />
              <p className="p-s light">
                Receive a supply chain dashboard and use data insights to drive
                a lower dispute rate, faster shipping time and faster processing
                time.
              </p>
            </div>
            <div className="home-feature-scroll-item">
              <div className="icon-wrap big">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64da27fb03a3998e7f1c5748_settings%20(1).svg"
                  loading="lazy"
                  alt="Groen icoontje van Automations"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">Automations</h3>
              <div className="divider-1" />
              <p className="p-s light">
                Go for an automated supply chain through our all-in-1 platform,
                so you can focus on growth. Think of automated order
                fulfillment, price acceptance, emails and disputes.
              </p>
            </div>
            <div className="home-feature-scroll-item">
              <div className="icon-wrap big">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c153eac6cd4b9227ac62b9_volume-control.svg"
                  loading="lazy"
                  alt="Icoontje voor progressieve levels"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">
                Progressive Dropship levels
              </h3>
              <div className="divider-1" />
              <p className="p-s light">
                We make the lives of dropshippers easier through our dropship
                levels. Each level has its own characteristics, based on the
                following: The more orders you run, the more interesting it
                becomes to be an SP member! At level Diamond for example, you
                get free agency accounts!
              </p>
              <div className="divider-2" />
              <a href="#" className="basic-btn outline invert w-inline-block">
                <div className="btn-text">View our dropship levels</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section
        data-w-id="20cd734f-3559-a594-dcae-cbf110753b4c"
        className="movie-section-mobile"
      >
        <div className="home-hero-video-wrap">
          <div
            data-poster-url="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-poster-00001.jpg"
            data-video-urls="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-transcode.mp4,https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-transcode.webm"
            data-autoplay="false"
            data-loop="true"
            data-wf-ignore="true"
            data-w-id="58364691-3574-a526-f690-42468bd7d7c9"
            style={{ opacity: 1 }}
            className="background-video-2 w-background-video w-background-video-atom"
          >
            <video
              id="58364691-3574-a526-f690-42468bd7d7c9-video"
              loop
              style={{
                backgroundImage:
                  'url("https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-poster-00001.jpg")',
              }}
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase video - SP Platform (compressed)-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
            <div className="home-hero-video-overlay" />
            <h2 className="h2">
              The most exclusive <br />
              dropship platform in <br />
            </h2>
            <noscript>
              &lt;style&gt; [data-wf-bgvideo-fallback-img] {"{"}
              display: none;
              {"}"}
              @media (prefers-reduced-motion: reduce) {"{"}
              [data-wf-bgvideo-fallback-img] {"{"}
              position: absolute; z-index: -100; display: inline-block; height:
              100%; width: 100%; object-fit: cover;
              {"}"}
              {"}"}&lt;/style &gt;&lt;img data-wf-bgvideo-fallback-img="true"
              src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64e604e281df749718a363eb_Showcase
              video - SP Platform (compressed)-poster-00001.jpg" alt="" /&gt;
            </noscript>
            <div aria-live="polite">
              <button
                type="button"
                data-w-bg-video-control="true"
                aria-controls="58364691-3574-a526-f690-42468bd7d7c9-video"
                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
              >
                <span>
                  <img
                    loading="lazy"
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64eb513e476b7618fe3792f9_Pause%20btn.svg"
                    alt="Pause video"
                    className="image-33"
                  />
                </span>
                <span hidden>
                  <img
                    loading="lazy"
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64eb513dc4994338415fc110_Play%20btn.svg"
                    alt="Play video"
                    className="image-34"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="divider-2" />
          <div className="w-layout-grid grid-11">
            <div
              id="w-node-_5385b71e-664e-beb5-4c17-e8ef18fbeb69-8c970a94"
              className="home-feature-scroll-item"
            >
              <div className="icon-wrap big mmmoooo">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c153ea5ebf8b795f168467_reseller.svg"
                  loading="lazy"
                  alt="Groen icoontje voor leveranciers"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">
                Premium suppliers/agents
              </h3>
              <div className="divider-1" />
              <p className="p-s white">
                Get the best prices from top-notch suppliers/agents through our
                unique bidding system and base your choice not only on price,
                but also on quality, dispute rate, shipping time and processing
                time
              </p>
            </div>
            <div
              id="w-node-_3b29c575-5c64-2333-7b95-06a3f4ffb5c5-8c970a94"
              className="home-feature-scroll-item"
            >
              <div className="icon-wrap big mmmoooo">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64ca2fa66e35720cb0b64a83_live-chat%20(1).svg"
                  loading="lazy"
                  alt="Groen icoontje van klantenservice"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">Premium service</h3>
              <div className="divider-1" />
              <p className="p-s white">
                Get a personal EU account manager who will become the hub of
                your supply chain network and take on an advisory and premium
                service role.
              </p>
            </div>
            <div className="home-feature-scroll-item">
              <div className="icon-wrap big mmmoooo">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c153eaefba8ec3e90bc8e5_supply-chain.svg"
                  loading="lazy"
                  alt="Groen icoontje van leverproces"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">
                Supply chain optimization
              </h3>
              <div className="divider-0-5" />
              <p className="p-s white">
                Receive a supply chain dashboard and use data insights to drive
                a lower dispute rate, faster shipping time and faster processing
                time.
              </p>
            </div>
            <div className="home-feature-scroll-item">
              <div className="icon-wrap big mmmoooo">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64da27fb03a3998e7f1c5748_settings%20(1).svg"
                  loading="lazy"
                  alt="Groen icoontje van Automations"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">Automations</h3>
              <div className="divider-1" />
              <p className="p-s white">
                Go for an automated supply chain through our all-in-1 platform,
                so you can focus on growth. Think of automated order
                fulfillment, price acceptance, emails and disputes.
              </p>
            </div>
            <div className="home-feature-scroll-item">
              <div className="icon-wrap big">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c153eac6cd4b9227ac62b9_volume-control.svg"
                  loading="lazy"
                  alt="Icoontje voor progressieve levels"
                  className="icon"
                />
              </div>
              <div className="divider-1" />
              <h3 className="home-feature-section-title">
                Progressive Dropship levels
              </h3>
              <div className="divider-1" />
              <p className="p-s white">
                We make the lives of dropshippers easier through our dropship
                levels. Each level has its own characteristics, based on the
                following: The more orders you run, the more interesting it
                becomes to be an SP member! At level Diamond for example, you
                get free agency accounts!
              </p>
              <div className="divider-2" />
              <a href="#" className="basic-btn outline invert w-inline-block">
                <div className="btn-text">View our dropship levels</div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="value-propositition-section">
        <div className="container center">
          <div className="title-small-wrapper">
            <h2
              data-w-id="930a42f3-cd6c-f16a-1130-596c7d222f22"
              style={{ opacity: 1 }}
              className="h2 center"
            >
              Your premium <br />
              <span className="text-gradient" style={{color:"black"}}>dropshipping partner</span>
            </h2>
          </div>
          <div className="divider-4" />
          <div className="w-layout-grid home-core-value-grid">
            <div
              id="w-node-_6c6df85b-bf82-ec31-a657-1b4a63b5a9da-8c970a94"
              data-w-id="6c6df85b-bf82-ec31-a657-1b4a63b5a9da"
              style={{ opacity: 1 }}
              className="w-layout-grid home-core-value-grid-2-columns"
            >
              <div
                id="w-node-_7ed34eeb-6a2c-2c18-d3b9-0d29faf58c91-8c970a94"
                className="home-core-grid-multi-cell-wraper"
              >
                <div className="w-layout-grid home-core-grid-4_cells">
                  <div
                    id="w-node-_7ed34eeb-6a2c-2c18-d3b9-0d29faf58c93-8c970a94"
                    className="home-core-grid-cell center small"
                  >
                    <div className="number-unit-wrapper center">
                      <div
                        fs-numbercount-element="number"
                        className="number-normal counter"
                      >
                        100k+
                      </div>
                    </div>
                    <div className="divider-0-5" />
                    <div className="p-s dark center">
                      Successfully delivered orders
                      <br />
                    </div>
                  </div>
                  <div
                    id="w-node-_7ed34eeb-6a2c-2c18-d3b9-0d29faf58c9b-8c970a94"
                    className="home-core-grid-cell center small dark"
                  >
                    <div
                      fs-numbercount-element="number"
                      className="number-normal light counter"
                    >
                      40
                    </div>
                    <div className="divider-0-5" />
                    <div className="p-s light center">
                      Account managers &amp; developers
                      <br />
                    </div>
                  </div>
                  <div
                    id="w-node-_7ed34eeb-6a2c-2c18-d3b9-0d29faf58ca2-8c970a94"
                    className="home-core-grid-cell center small dark"
                  >
                    <div
                      fs-numbercount-element="number"
                      className="number-normal light counter"
                    >
                      24 x 7
                    </div>
                    <div className="divider-0-5" />
                    <div className="p-s light center">
                      Customer Service
                    
                      <br />
                    </div>
                  </div>
                  <div
                    id="w-node-_7ed34eeb-6a2c-2c18-d3b9-0d29faf58ca9-8c970a94"
                    className="home-core-grid-cell center small"
                  >
                    <div
                      fs-numbercount-element="number"
                      className="number-normal counter"
                    >
                      18
                    </div>
                    <div className="divider-0-5" />
                    <div className="p-s dark center">
                      Excellent suppliers/agents
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_8bb9c6cf-e6f7-fbfe-5625-05a39f358741-8c970a94"
                className="home-core-grid-cell"
              >
                <h3 className="h3 core-grid-title">
                  We substantiate our promises
                </h3>
                <div className="divider-1" />
                <p className="p dark">
                OptiPrime Global Services evolved from our firsthand experiences in dropshipping, specifically addressing challenges such as extended delivery times, communication obstacles, and limited data insights. Our unwavering commitment is to provide a comprehensive solution for dropshippers, translating our pledges into actionable strategies. This dedication is evident in the tangible figures and results we've achieved, aligning seamlessly with the ethos of OptiPrime Global.
                </p>
                <div className="divider-2" />
                <a href="#" className="basic-btn outline w-inline-block">
                  <div className="btn-text">About us</div>
                </a>
              </div>
            </div>
            <div
              id="w-node-_26fe47c5-9eb4-de86-e36f-361ca70480bc-8c970a94"
              className="home-core-grid-cell dark _3"
            >
              <div className="divider-0-5" />
              <h2 className="h3 core-grid-title light">
              Innovation, Streamlining,
&amp;  and Automated Processes
              </h2>
              <div className="divider-1" />
              <p className="p light">
              As your main partner for dropshipping, our platform stands out in making your supply chain better and more automatic with special data insights. Work with top-notch agents from leading sources in China and get personalized service. Get extra benefits, better prices, and increased turnover with our progressive Dropship levels designed for your daily order volumes.
              </p>
              <div className="divider-2" />
              <div className="cta-free-wrapper">
              <Link
                      to="/signup"
                      target="_blank"
                      className="icon-btn w-inline-block"
                      style={{textDecoration:"none", background:"white"}}
                      data-w-id
                    >

                <div className="btn-text">Start onboarding</div>
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64bfef2863c91bb177105f50_btn-icon-black.svg"
                  loading="lazy"
                  alt=""
                  className="btn-icon"
                />
              </Link>
                <div className="divider-0-5" />
                <div className="p-s light">Our platform is free to use!</div>
              </div>
              <img
                src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64dcb02c63b3e08fbdc6b8d8_Iphone%2012%20(light%20bg).png"
                loading="lazy"
                data-w-id="26fe47c5-9eb4-de86-e36f-361ca70480c6"
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 73vw, (max-width: 991px) 75vw, (max-width: 1279px) 33vw, (max-width: 1439px) 34vw, (max-width: 1919px) 35vw, 37vw"
                alt="Mockup van Iphone met op het scherm het SP paltform"
                srcSet="
          https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64dcb02c63b3e08fbdc6b8d8_Iphone%2012%20(light%20bg)-p-500.png  500w,
          https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64dcb02c63b3e08fbdc6b8d8_Iphone%2012%20(light%20bg).png       1000w
        "
                className="home-core-grid-cell_3-image"
              />
            </div>
            <div
              id="w-node-f36cd6ec-4170-572a-ecb8-ab48cc45d35e-8c970a94"
              className="w-layout-grid home-core-value-grid-2-columns"
            >
              <div
                id="w-node-d865a01b-5cd2-f2c2-48e7-3f1b7ac7afbd-8c970a94"
                className="home-core-grid-cell _6"
              >
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c39e5f8f07c18231d93327_Hoodie%20front.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 87vw, (max-width: 1439px) 89vw, (max-width: 1919px) 92vw, 97vw"
                  srcSet="
            https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c39e5f8f07c18231d93327_Hoodie%20front-p-500.png   500w,
            https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c39e5f8f07c18231d93327_Hoodie%20front-p-800.png   800w,
            https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c39e5f8f07c18231d93327_Hoodie%20front-p-1080.png 1080w,
            https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c39e5f8f07c18231d93327_Hoodie%20front.png        1500w
          "
                  alt="Medewerker van Service Points met hoodie van Service Points"
                  className="home-core-grid-cell-image-full"
                />
              </div>
              <div
                id="w-node-ce2438cd-0909-1859-b0f4-6325873c75dc-8c970a94"
                className="home-core-grid-cell"
              >
                <div className="divider-0-5" />
                <h3 className="h3 core-grid-title">
                Your success is like our success.
</h3>
                <div className="divider-1" />
                <p className="p dark">
                We believe in fast and clear communication, always keeping our promises. Your dedicated OptiPrime Global account manager is here to support you and stay engaged with your needs. Behind the scenes, we work hard every day to improve our services. Your success is our top priority because it defines our own success at OptiPrime Global.
                </p>
                <div className="divider-2" />
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ecom-services-section">
        <div className="container">
          <div className="header-wrap left">
            <h2
              data-w-id="cb9247df-8821-d4f8-d6f2-3e32803b3455"
              style={{ opacity: 1 }}
              className="h2 left light"
            >
              Other services we offer
            </h2>
            <div className="divider-1" />
            <p
              data-w-id="84d8cc01-bdb3-8b6e-7e76-cceef0734dfa"
              style={{ opacity: 1 }}
              className="p light"
            >
              In addition to our revolutionary platform, we also offer various
              services to relieve you of your worries. Do you desire shorter
              delivery times, branding, streamlined returns, or are you looking
              for help setting up your webshop? Than you have come to the right
              place! Then register now for one of our other services!
            </p>
          </div>
          <div className="divider-4" />
          <div
            data-w-id="fc6a0475-9885-bc06-4df7-798377e392ae"
            style={{ opacity: 1 }}
            className="w-layout-grid ecom-service-grid"
          >
            <div className="ecom-service-grid-content">
              <div className="w-layout-grid ecom-service-list">
                <a
                  id="w-node-_21bfb9d7-8ac1-a62f-5363-2367dd08495f-8c970a94"
                  data-w-id="21bfb9d7-8ac1-a62f-5363-2367dd08495f"
                  href="#"
                  className="ecom-service-item w-inline-block"
                >
                  <div className="icon-wrap big">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11a124f9a861231250d51_box.svg"
                      loading="lazy"
                      alt="Groen icoontje voor producten"
                      className="icon _50"
                    />
                  </div>
                  <div className="divider-1" />
                  <h3 className="h3 small light">Sourcing &amp; forwarding</h3>
                  <div className="divider-0-5" />
                  <p className="p light">
                    Purchase your winning products to ship from stock.
                  </p>
                  <div className="divider-1" />
                  <div className="ecom-service-arrow-wrapper">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c01d2019f21861f2b54114_arrow-45%C2%B0.svg"
                      loading="lazy"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                      }}
                      alt=""
                      className="ecom-serivce-arrow"
                    />
                  </div>
                </a>
                <a
                  id="w-node-_84bbd5cf-f253-9ff8-4109-fc461cec0cae-8c970a94"
                  data-w-id="84bbd5cf-f253-9ff8-4109-fc461cec0cae"
                  href="#"
                  className="ecom-service-item w-inline-block"
                >
                  <div className="icon-wrap big">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b04cba17b6f05ab4913_delivery%20(1).svg"
                      loading="lazy"
                      alt="Groen icoontje voor levering"
                      className="icon _50"
                    />
                  </div>
                  <div className="divider-1" />
                  <h3 className="h3 small light">
                    EU Fulfilment
                    <br />
                  </h3>
                  <div className="divider-0-5" />
                  <p className="p light">
                    Enjoy fast delivery times throughout Europe by shipping from
                    our EU based warehouses
                  </p>
                  <div className="divider-1" />
                  <div className="ecom-service-arrow-wrapper">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c01d2019f21861f2b54114_arrow-45%C2%B0.svg"
                      loading="lazy"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                      }}
                      alt=""
                      className="ecom-serivce-arrow"
                    />
                  </div>
                </a>
                <a
                  id="w-node-_80b23aae-5bb6-9f23-cea4-c01878f22393-8c970a94"
                  data-w-id="80b23aae-5bb6-9f23-cea4-c01878f22393"
                  href="#"
                  className="ecom-service-item w-inline-block"
                >
                  <div className="icon-wrap big">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b27df0fc988e3acec70_product-return.svg"
                      loading="lazy"
                      alt="Groen icoontje voor retourproces"
                      className="icon"
                    />
                  </div>
                  <div className="divider-1" />
                  <h3 className="h3 small light">Return service</h3>
                  <div className="divider-0-5" />
                  <p className="p light">
                    Let us handle your returns quickly and efficiently.
                  </p>
                  <div className="divider-1" />
                  <div className="ecom-service-arrow-wrapper">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c01d2019f21861f2b54114_arrow-45%C2%B0.svg"
                      loading="lazy"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                      }}
                      alt=""
                      className="ecom-serivce-arrow"
                    />
                  </div>
                </a>
                <a
                  id="w-node-c4b72c9f-236e-f0b3-c857-f788868b890c-8c970a94"
                  data-w-id="c4b72c9f-236e-f0b3-c857-f788868b890c"
                  href="#"
                  className="ecom-service-item w-inline-block"
                >
                  <div className="icon-wrap big">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c11b7bc9bbb755cfcb0bc2_world-wide-web%20(1).svg"
                      loading="lazy"
                      alt="Groen icoontje van webshop"
                      className="icon _50"
                    />
                  </div>
                  <div className="divider-1" />
                  <h3 className="h3 small light">Store service</h3>
                  <div className="divider-0-5" />
                  <p className="p light">
                    Need help with your webshop, ads or customer service? See
                    how we can serve you!
                  </p>
                  <div className="divider-1" />
                  <div className="ecom-service-arrow-wrapper">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c01d2019f21861f2b54114_arrow-45%C2%B0.svg"
                      loading="lazy"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                      }}
                      alt=""
                      className="ecom-serivce-arrow"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div
              id="w-node-fc6a0475-9885-bc06-4df7-798377e392ed-8c970a94"
              data-w-id="fc6a0475-9885-bc06-4df7-798377e392ed"
              style={{ opacity: 1 }}
              className="ecom-service-visual-wrapper"
            >
              <div
                style={{ height: "0%" }}
                className="fulfilment-process-line"
              />
              <div className="fulfilment-process-step _1">
                <div className="fulfilment-process-step-text _1">Sourcing</div>
              </div>
              <div className="fulfilment-process-step _2">
                <div className="fulfilment-process-step-text _2">
                  Bulk purchasing
                </div>
              </div>
              <div className="fulfilment-process-step _3">
                <div className="fulfilment-process-step-text _3">
                  Forwarding to fulfillment center
                </div>
              </div>
              <div className="fulfilment-process-step _4">
                <div className="fulfilment-process-step-text _4">
                  Shipping and delivery
                </div>
              </div>
              <div className="fulfilment-process-step _5">
                <div className="fulfilment-process-step-text _5">
                  Return management
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="vergelijk" className="comparison-section">
        <div className="container">
          <h2 className="h2 center">Why choose Service Points?</h2>
          <div className="divider-4" />
          <div className="feature-comparison-wrapper">
            <div className="comparison-scroll-base">
              <div className="comparison-scroll-wrap">
                <div className="w-layout-grid feature-comparison-top">
                  <div
                    id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be2d-a2e1be29"
                    className="comparison-cell top-col-empty"
                  >
                    <a href="#" className="mobile-scroll-table-btn">
                      Scroll naar rechts →
                    </a>
                  </div>
                  <div
                    id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be30-a2e1be29"
                    className="comparison-cell top-col-2"
                  >
                    <div className="comparison-top-wrap">
                      <div className="feature-top-color-wrap">
                        <img
                          src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c0197c7fe85b1d38f9ded3_Logo%20with%20text%20-%20Normal.svg"
                          loading="lazy"
                          alt="Service Points logo met donkere letters"
                          className="feature-comparison-sp-logo"
                        />
                        <div className="feature-top-moq-text">10+ MOQ</div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be34-a2e1be29"
                    className="comparison-cell top-col-3"
                  >
                    <div className="comparison-top-wrap red">
                      <div className="feature-top-color-wrap col-3">
                        <div className="feature-comparison-other-agency">
                          Private dropship agent
                        </div>
                        <div className="feature-top-moq-text">0-10 MOQ</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid feature-comparison-content">
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_0657fe1b-784c-d725-4f04-1b8706dda969-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Type</p>
                    </div>
                    <div
                      id="w-node-_0657fe1b-784c-d725-4f04-1b8706dda96c-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        Professional dropshipper
                      </p>
                    </div>
                    <div
                      id="w-node-_0657fe1b-784c-d725-4f04-1b8706dda96f-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">Amateur drop shipper</p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be3b-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Number of suppliers/agents</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be3e-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        Multi-vendor/agent platform
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be41-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        Basic dashboard/sheet with 1 suppliers/agents
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be45-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Contact</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be48-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        EU account manager with an advisory and supporting role
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be4b-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        A Chinese contact person
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be4f-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Communication</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be52-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        EU timezone, High level service with transparent and
                        clear communication, reliable and flexible
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be55-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        Time difference, language barrier, not always reliable
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be59-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Product quality</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be5c-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison" />
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be5f-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">Often poor quality</p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be63-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">E-com services</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be66-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        Dropship fulfillment, EU warehousing, Sourcing &amp;
                        forwarding, return service and store service
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be69-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        Only dropshipping fulfillment and sourcing &amp;
                        forwarding
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be6d-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Data and insights</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be70-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        Being able to steer based on supply chain data through
                        dashboarding and reporting
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be73-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        No insight at all into what happens with the orders.
                        Complete blind spot
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be77-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Pricing</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be7a-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        The best price for every product through different
                        suppliers/agents who work with a bidding system
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be7d-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        Only the best price for some products
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be81-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Automations</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be84-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        Less customer service due to automated emails for
                        address errors and orders with status "Available for
                        pick up"
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be87-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        0 Automations that help your dropshipping business move
                        forward
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be8b-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Dispute rate</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be8e-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        Daily order checks to ensure that your dispute rate is
                        as low as possible
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be91-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        Nothing is checked preventively, many disputes
                        afterwards
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be95-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Payment methods</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be98-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        Easily pay with PayPal, Amex, Ideal and many more
                        payment methods via the platform
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be9b-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        Limited payment options
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1be9f-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Updates and improvements</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1bea2-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        New features, updates and improvements every month based
                        on your feedback
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1bea5-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        An error-prone spreadsheet that keeps track of your
                        finances, no updates and few improvements. We are
                        focused on you as a dropshipper, they are focused on
                        packing and sending orders.
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-grid feature-comparison-row">
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1bea9-a2e1be29"
                      className="comparison-cell col-1"
                    >
                      <p className="p comparison">Fees</p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1beac-a2e1be29"
                      className="comparison-cell col-2"
                    >
                      <p className="p black comparison">
                        No fee needs to be paid to Service Points, because they
                        apply profit share with the suppliers
                      </p>
                    </div>
                    <div
                      id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1beaf-a2e1be29"
                      className="comparison-cell col-3"
                    >
                      <p className="p black comparison">
                        Same fee as Service Points
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid feature-comparison-bottom">
                  <div
                    id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1beb3-a2e1be29"
                    className="comparison-cell"
                  />
                  <div
                    id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1beb4-a2e1be29"
                    className="comparison-cell col-2 bottom"
                  />
                  <div
                    id="w-node-_89491816-f9d6-9ee0-77f4-9caea2e1beb5-a2e1be29"
                    className="comparison-cell col-3 last"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="faq-section">
        <div className="container center">
          <h2 className="h2 center">Frequently Asked Questions</h2>
          <div className="divider-4" />
          <div className="faq-component">
            <div className="faq-sort-script w-embed w-script"></div>
            <div className="faq-component w-dyn-list">
              <div role="list" className="faq-list w-dyn-items">
                <div
                  data-w-id="faca97b6-a1b4-7ead-9f3d-9fb3af117c6c"
                  style={{ opacity: 1 }}
                  role="listitem"
                  className="faq-accordion w-dyn-item"
                >
                  <div
                    data-w-id="24cf6492-7af0-e9c8-15e0-7f24cb06ebde"
                    className="faq-question"
                  >
                    <h3 className="h3 faq">
                      Service points possess the capacity to propel me to
                      greater heights, whereas a supplier/agent lacks the
                      capability to facilitate such advancement.
                    </h3>
                    <div className="faq-icon-wrapper">
                      <div className="accordion-icon_component">
                        <div className="accordion-icon_horizontal-line" />
                        <div className="accordion-icon_vertical-line" />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0px" }} className="faq-answer">
                    <div className="styled-text w-richtext">
                      <p>
                        The supply chain dynamics within the realm of
                        dropshipping present ample opportunities for further
                        enhancement. Despite the proliferation of automations
                        and optimizations, a substantial blind spot persists,
                        particularly concerning the outcomes of shipping and
                        delivery processes. Crucial metrics such as average
                        processing time on a per-product and per-country basis
                        remain elusive. Additionally, insights into the dispute
                        percentage associated with recent successful products
                        within the past day(s) are lacking. The absence of this
                        essential data poses a challenge in assessing the
                        viability of continuing the scale-up of specific
                        products. In light of these considerations, a
                        comprehensive evaluation of the available data becomes
                        imperative for informed decision-making.
                      </p>
                    </div>
                    <div className="divider-2" />
                  </div>
                  <div className="faq-order-number">2</div>
                </div>
                <div
                  data-w-id="faca97b6-a1b4-7ead-9f3d-9fb3af117c6c"
                  style={{ opacity: 1 }}
                  role="listitem"
                  className="faq-accordion w-dyn-item"
                >
                  <div
                    data-w-id="24cf6492-7af0-e9c8-15e0-7f24cb06ebde"
                    className="faq-question"
                  >
                    <h3 className="h3 faq">
                      What impediments might exist in engaging directly with a
                      supplier or agent?
                    </h3>
                    <div className="faq-icon-wrapper">
                      <div className="accordion-icon_component">
                        <div className="accordion-icon_horizontal-line" />
                        <div className="accordion-icon_vertical-line" />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0px" }} className="faq-answer">
                    <div className="styled-text w-richtext">
                      <p>
                        Engaging with our services offers a distinctive
                        advantage, as we contribute substantial value that
                        surpasses the offerings of an agent, all without
                        incurring additional expenses. Picture the integration
                        of automated business processes, comprehensive data
                        analytics, the dedicated assistance of an account
                        manager, and the capability to seamlessly collaborate
                        with multiple suppliers or agents concurrently, among
                        other benefits. Furthermore, our unique profit-sharing
                        model ensures that you do not bear any upfront costs, as
                        our compensation is derived from a mutually beneficial
                        arrangement with the suppliers and agents. This
                        symbiotic relationship facilitates their access to a
                        daily influx of over 10,000 orders, while simultaneously
                        affording us remuneration. Additionally, suppliers and
                        agents stand to gain significant savings on personnel
                        expenditures, given that we frequently handle support
                        services. Essentially, you receive an abundance of value
                        without incurring any additional expenses—a truly
                        advantageous proposition for all parties involved.
                      </p>
                    </div>
                    <div className="divider-2" />
                  </div>
                  <div className="faq-order-number">1</div>
                </div>
                <div
                  data-w-id="faca97b6-a1b4-7ead-9f3d-9fb3af117c6c"
                  style={{ opacity: 1 }}
                  role="listitem"
                  className="faq-accordion w-dyn-item"
                >
                  <div
                    data-w-id="24cf6492-7af0-e9c8-15e0-7f24cb06ebde"
                    className="faq-question"
                  >
                    <h3 className="h3 faq">
                      Our services cater to novices in dropshipping without
                      imposing any Minimum Order Quantity (MOQ) constraints.
                    </h3>
                    <div className="faq-icon-wrapper">
                      <div className="accordion-icon_component">
                        <div className="accordion-icon_horizontal-line" />
                        <div className="accordion-icon_vertical-line" />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0px" }} className="faq-answer">
                    <div className="styled-text w-richtext">
                      <p>
                        Our minimum daily order threshold stands at 10,
                        reflecting our commitment to delivering substantial
                        value and dedicated effort to our clientele. Partnering
                        with dropshippers generating fewer than 10 daily orders
                        is deemed financially impractical for us. Our strategic
                        emphasis revolves around fostering growth through
                        advanced automations, supply chain optimization, and
                        other nuanced processes that may not align with the
                        needs of businesses operating at a more modest order
                        volume.
                      </p>
                    </div>
                    <div className="divider-2" />
                  </div>
                  <div className="faq-order-number">3</div>
                </div>
                <div
                  data-w-id="faca97b6-a1b4-7ead-9f3d-9fb3af117c6c"
                  style={{ opacity: 1 }}
                  role="listitem"
                  className="faq-accordion w-dyn-item"
                >
                  <div
                    data-w-id="24cf6492-7af0-e9c8-15e0-7f24cb06ebde"
                    className="faq-question"
                  >
                    <h3 className="h3 faq">
                      How can you guarantee such a fast processing time and
                      delivery time?
                    </h3>
                    <div className="faq-icon-wrapper">
                      <div className="accordion-icon_component">
                        <div className="accordion-icon_horizontal-line" />
                        <div className="accordion-icon_vertical-line" />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0px" }} className="faq-answer">
                    <div className="styled-text w-richtext">
                      <p>
                        Given our collaboration with premier suppliers, we
                        provide the advantage of risk diversification. In
                        instances where existing suppliers or agents on the SP
                        platform exhibit suboptimal performance, perhaps owing
                        to heightened demand during peak periods or holiday
                        seasons, we facilitate a seamless transition to
                        alternative suppliers with exemplary track records,
                        ensuring an uninterrupted and satisfactory service
                        experience..
                      </p>
                    </div>
                    <div className="divider-2" />
                  </div>
                  <div className="faq-order-number">4</div>
                </div>
                <div
                  data-w-id="faca97b6-a1b4-7ead-9f3d-9fb3af117c6c"
                  style={{ opacity: 1 }}
                  role="listitem"
                  className="faq-accordion w-dyn-item"
                >
                  <div
                    data-w-id="24cf6492-7af0-e9c8-15e0-7f24cb06ebde"
                    className="faq-question"
                  >
                    <h3 className="h3 faq">Which countries can you ship to?</h3>
                    <div className="faq-icon-wrapper">
                      <div className="accordion-icon_component">
                        <div className="accordion-icon_horizontal-line" />
                        <div className="accordion-icon_vertical-line" />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0px" }} className="faq-answer">
                    <div className="styled-text w-richtext">
                      <p>We can ship worldwide.</p>
                    </div>
                    <div className="divider-2" />
                  </div>
                  <div className="faq-order-number w-dyn-bind-empty" />
                </div>
                <div
                  data-w-id="faca97b6-a1b4-7ead-9f3d-9fb3af117c6c"
                  style={{ opacity: 1 }}
                  role="listitem"
                  className="faq-accordion w-dyn-item"
                >
                  <div
                    data-w-id="24cf6492-7af0-e9c8-15e0-7f24cb06ebde"
                    className="faq-question"
                  >
                    <h3 className="h3 faq">What products do you all have?</h3>
                    <div className="faq-icon-wrapper">
                      <div className="accordion-icon_component">
                        <div className="accordion-icon_horizontal-line" />
                        <div className="accordion-icon_vertical-line" />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0px" }} className="faq-answer">
                    <div className="styled-text w-richtext">
                      <p>
                        Essentially, our capacity extends to the provision of
                        all products cataloged on AliExpress and/or Alibaba.
                        Furthermore, we possess the capability to source a
                        myriad of other products beyond these platforms. For
                        optimal efficiency, it would be highly beneficial if you
                        could furnish us with a website link, thereby expediting
                        the commencement of our collaboration in this regard.
                      </p>
                    </div>
                    <div className="divider-2" />
                  </div>
                  <div className="faq-order-number w-dyn-bind-empty" />
                </div>
                <div
                  data-w-id="faca97b6-a1b4-7ead-9f3d-9fb3af117c6c"
                  style={{ opacity: 1 }}
                  role="listitem"
                  className="faq-accordion w-dyn-item"
                >
                  <div
                    data-w-id="24cf6492-7af0-e9c8-15e0-7f24cb06ebde"
                    className="faq-question"
                  >
                    <h3 className="h3 faq">
                      Is it bad if I don't sell anything for a period?
                    </h3>
                    <div className="faq-icon-wrapper">
                      <div className="accordion-icon_component">
                        <div className="accordion-icon_horizontal-line" />
                        <div className="accordion-icon_vertical-line" />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0px" }} className="faq-answer">
                    <div className="styled-text w-richtext">
                      <p>
                        No supplementary charges will be applied on our end.
                      </p>
                    </div>
                    <div className="divider-2" />
                  </div>
                  <div className="faq-order-number w-dyn-bind-empty" />
                </div>
                <div
                  data-w-id="faca97b6-a1b4-7ead-9f3d-9fb3af117c6c"
                  style={{ opacity: 1 }}
                  role="listitem"
                  className="faq-accordion w-dyn-item"
                >
                  <div
                    data-w-id="24cf6492-7af0-e9c8-15e0-7f24cb06ebde"
                    className="faq-question"
                  >
                    <h3 className="h3 faq">
                      There are no associated costs for the registration
                      process?
                    </h3>
                    <div className="faq-icon-wrapper">
                      <div className="accordion-icon_component">
                        <div className="accordion-icon_horizontal-line" />
                        <div className="accordion-icon_vertical-line" />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "0px" }} className="faq-answer">
                    <div className="styled-text w-richtext">
                      <p>
                        Registration for our fulfillment services is entirely
                        free. Access to the dashboard and the assignment of a
                        dedicated account manager also come at no cost. Your
                        expenses are solely attributed to product and shipping
                        costs, with no concealed or subsequent charges.
                      </p>
                    </div>
                    <div className="divider-2" />
                  </div>
                  <div className="faq-order-number w-dyn-bind-empty" />
                </div>
              </div>
            </div>
            <div
              data-w-id="3a968e22-041a-403f-9ab2-1a988675cf8f"
              style={{ opacity: 1 }}
              className="sign-up-cta-block"
            >
              <div className="sign-up-cta-container">
                <div className="avatar-stack_component">
                  <img
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64dbaccade00e567dd14c53c_Dario%20De%20Gier.jpeg"
                    loading="lazy"
                    sizes="(max-width: 1279px) 44px, (max-width: 1439px) 3vw, 44px"
                    srcSet="
              https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64dbaccade00e567dd14c53c_Dario%20De%20Gier-p-500.jpeg 500w,
              https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64dbaccade00e567dd14c53c_Dario%20De%20Gier.jpeg       554w
            "
                    alt="Avatar photo"
                    className="avatar-stack-item"
                  />
                  <img
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c8bbfed574179d559f2ab1_Tommie%20(1).png"
                    loading="lazy"
                    alt="Avatar photo"
                    className="avatar-stack-item featured"
                  />
                  <img
                    src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64dbabd12cf304fdf04618b9_Victor_edited.jpg"
                    loading="lazy"
                    alt="Avatar photo"
                    className="avatar-group-item"
                  />
                </div>
                <h2 className="h2 light center">
                  Start now as <span className="text-gradient" />
                </h2>
                <div className="divider-1" />
                <div className="p-l light">
                  Optimize and automate your dropshipping business
                </div>
                <div className="divider-2" />
                <Link
                      to="/signup"
                      target="_blank"
                      className="icon-btn w-inline-block"
                      style={{textDecoration:"none", background:"white"}}                      
                      data-w-id
                    >

                <div className="btn-text">Start onboarding</div>
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64bfef2863c91bb177105f50_btn-icon-black.svg"
                  loading="lazy"
                  alt=""
                  className="btn-icon"
                />
              </Link>
                <div className="divider-0-5" />
                <div className="p-s light">Our platform is free to use!</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-w-id="24f8ec1e-9c40-7c9d-243c-a8ab31f5aa13"
        className="footer-section"
      >
        <div className="container">
          <div className="w-layout-grid footer-top-wrapper">
            <div
              id="w-node-_24f8ec1e-9c40-7c9d-243c-a8ab31f5aa16-31f5aa13"
              className="footer-left-wrapper"
            >
              <a href="#" className="footer-logo-link w-nav-brand">
                <img
                  src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c4470f8c52bbd10a9eeced_Logo%20Icon%20-%20Color%20(SVG%20Vector).svg"
                  loading="lazy"
                  alt="Groen Service Points Logo"
                  className="footer-logo-image"
                />
              </a>
              <div className="footer-details-wrapper">
                <p className="footer-col-title" />
                <div className="divider-2" />
                <a href="#" className="footer-link contact w-inline-block">
                  <div className="icon-wrap small mmmoooo black">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c039c2d276b09b3f5fe661_icon-mail.svg"
                      loading="lazy"
                      alt="Groen icoontje voor mail"
                      className="icon _50"
                    />
                  </div>
                  <div className="footer-link-text padding-left" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="footer-link contact w-inline-block"
                >
                  <div className="icon-wrap small mmmoooo black">
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c7c39f537f6929b2a867d4_whatsapp.svg"
                      loading="lazy"
                      alt="Groen icoontje van Whatsapp"
                      className="icon _50"
                    />
                  </div>
                  <div className="footer-link-text padding-left" />
                </a>
              </div>
            </div>
            <div
              id="w-node-_24f8ec1e-9c40-7c9d-243c-a8ab31f5aa2f-31f5aa13"
              className="w-layout-grid uui-footer03_menu-wrapper"
            >
              <div
                id="w-node-_24f8ec1e-9c40-7c9d-243c-a8ab31f5aa30-31f5aa13"
                className="footer-link-list"
              >
                <div className="footer-col-title">Company</div>
                <div className="divider-1" />
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">About us</div>
                </a>
                <a href="#" className="footer-link hide w-inline-block">
                  <div className="footer-link-text">Vacancies</div>
                
                </a>
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">Affiliate</div>
                </a>
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">Blog</div>
                </a>
              </div>
              <div
                id="w-node-_24f8ec1e-9c40-7c9d-243c-a8ab31f5aa43-31f5aa13"
                className="footer-link-list"
              >
                <div className="footer-col-title">Platform</div>
                <div className="divider-1" />
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">Features</div>
                
                </a>
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">Dropship levels</div>
                </a>
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">Suppliers/agents</div>
                </a>
              </div>
              <div
                id="w-node-_24f8ec1e-9c40-7c9d-243c-a8ab31f5aa53-31f5aa13"
                className="footer-link-list"
              >
                <div className="footer-col-title">Other services</div>
                <div className="divider-1" />
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">
                    Sourcing &amp; forwarding
                  </div>
                </a>
                <a href="V" className="footer-link w-inline-block">
                  <div className="footer-link-text">EU&nbsp;fulfilment</div>
                </a>
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">Return service</div>
                </a>
                <a href="#" className="footer-link w-inline-block">
                  <div className="footer-link-text">Store service</div>
                </a>
              </div>
              <div
                id="w-node-_24f8ec1e-9c40-7c9d-243c-a8ab31f5aa63-31f5aa13"
                className="footer-link-list contact"
              >
                <div className="w-layout-grid footer-social-list">
                  <a
                    href="#"
                    target="_blank"
                    className="social-icon-wrap small mmmoooo w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c7bdab64b17f82eaf6ecb9_linkedin.svg"
                      loading="lazy"
                      alt="Groen icoontje van Linkedin"
                      className="icon _40"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="social-icon-wrap small mmmoooo w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c7bdabcf539d6f7dcdf77a_whatsapp.svg"
                      loading="lazy"
                      alt="Groen icoontje van Instagram"
                      className="icon _50"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="social-icon-wrap small mmmoooo w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c7bdab002f54845799d111_facebook.svg"
                      loading="lazy"
                      alt="Groen icoontje voor Facebook"
                      className="icon _25"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="social-icon-wrap small mmmoooo w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c7bdabfc334ca3a0c1a3ce_discord.svg"
                      loading="lazy"
                      alt="Groen icoontje van Discord"
                      className="icon _50"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="uui-footer03_bottom-wrapper">
            <div className="p-s light">
              © 2024&nbsp;OPTIPRIME. All rights reserved.
            </div>
            <div className="w-layout-grid uui-footer03_legal-list">
              <a href="#" className="footer-link">
                Terms and Conditions
              </a>
              <a href="#" className="footer-link">
                Privacybeleid{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="general-btn-container">
        <div className="sticky-contact-text-wrap">
          <div className="sticky-btn-text">contact us</div>
        </div>
        <a
          data-w-id="ef5fce28-365b-f4ed-fbea-0b260e5e762f"
          href="https://api.whatsapp.com/send?phone=7042414212"
          target="_blank"
          className="sticky-contact-btn w-inline-block"
        >
          <img
            src="https://assets-global.website-files.com/64bfca2ced1b82f490a58a1a/64c7c39f537f6929b2a867d4_whatsapp.svg"
            loading="lazy"
            alt="Groen icoontje van Whatsapp"
            className="sticky-contact-icon"
          />
        </a>
      </div>
    </>
  );
}
