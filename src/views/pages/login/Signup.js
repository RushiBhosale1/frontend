/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import '../../../style/styles1.css'
import img1 from '../../pages/assets/img/hand_iphone.png'
import useAxios from 'src/network/useAxios'
import { tokenAuth, signUpUser } from 'src/urls/urls'
import { useRouter } from 'src/hooks/use-router'

export default function Signup() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [fileResponse, error, loading, fetch, setError] = useAxios()
  const [formDetails, setFormDetails] = useState({})
  const [responseToken, loadingToken, errorToken, fetchToken] = useAxios()
  useEffect(() => {
    var token = localStorage.getItem('tokenJson')
    if (token) {
      fetchToken(tokenAuth({ jsonToken: token }))
    }
  }, [])
  useEffect(() => {
    console.log(formDetails)
  }, [formDetails])

  const submitFunction = () => {
    fetch(signUpUser(formDetails))
  }

  useEffect(() => {
    if (fileResponse?.result == 'success' ) {
      router.push('/login/:sign')
    }
  }, [fileResponse])

  return (
    <>
      <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
        <div style={{ display: 'flex', width: '50%', height: '100vh' }}>
          <img src={img1} style={{ paddingLeft: '2rem' }} />
        </div>
        <div
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100vh',
          }}
        >
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form noValidate className="space-y-6" onSubmit="">
              <ul className="nav nav-tabs tab-mod" id role="tablist">
                <li className="nav-item">
                  <a className="nav-link">
                    <Link
                      to="/login"
                      style={{ textDecoration: 'none' }}
                      className="font-semibold cursor-pointer text-indigo-600 hover:text-indigo-500"
                    >
                      Login
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">
                    <Link
                      to="/signup"
                      style={{ textDecoration: 'none' }}
                      className="font-semibold cursor-pointer text-indigo-600 hover:text-indigo-500"
                    >
                      Signup
                    </Link>
                  </a>
                </li>
              </ul>
              <div className="d-flex flex-column" style={{ gap: '10px' }}>
                <div className="form-group">
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="First name"
                    autofocus
                    required="required"
                    onChange={(e) =>
                      setFormDetails((prev) => ({ ...prev, firstname: e.target.value }))
                    }
                    data-parsley-required-message="Name is required"
                    data-parsley-pattern="^[-()_ a-zA-Z0-9]+$"
                    data-parsley-error-message="Please enter valid name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Last name"
                    autofocus
                    required="required"
                    onChange={(e) =>
                      setFormDetails((prev) => ({ ...prev, lastname: e.target.value }))
                    }
                    data-parsley-required-message="Name is required"
                    data-parsley-pattern="^[-()_ a-zA-Z0-9]+$"
                    data-parsley-error-message="Please enter valid name"
                  />
                </div>
                <div className="form-group d-flex">
                  <div className="col-3 p-0">
                    <div className="slect2-mod storebtn">
                      <select
                        className="form-control select2"
                        name="country_code"
                        id="country_code"
                        onChange={(e) =>
                          setFormDetails((prev) => ({ ...prev, countryCode: e.target.value }))
                        }
                      >
                        <option value={+93}>+93 &nbsp; Afghanistan</option>
                        <option value="+358-18">+358-18 &nbsp; Aland Islands</option>
                        <option value={+355}>+355 &nbsp; Albania</option>
                        <option value={+213}>+213 &nbsp; Algeria</option>
                        <option value="+1-684">+1-684 &nbsp; American Samoa</option>
                        <option value={+376}>+376 &nbsp; Andorra</option>
                        <option value={+244}>+244 &nbsp; Angola</option>
                        <option value="+1-264">+1-264 &nbsp; Anguilla</option>
                        <option value={+672}>+672 &nbsp; Antarctica</option>
                        <option value="+1-268">+1-268 &nbsp; Antigua And Barbuda</option>
                        <option value={+54}>+54 &nbsp; Argentina</option>
                        <option value={+374}>+374 &nbsp; Armenia</option>
                        <option value={+297}>+297 &nbsp; Aruba</option>
                        <option value={+61}>+61 &nbsp; Australia</option>
                        <option value={+43}>+43 &nbsp; Austria</option>
                        <option value={+994}>+994 &nbsp; Azerbaijan</option>
                        <option value="+1-242">+1-242 &nbsp; Bahamas</option>
                        <option value={+973}>+973 &nbsp; Bahrain</option>
                        <option value={+880}>+880 &nbsp; Bangladesh</option>
                        <option value="+1-246">+1-246 &nbsp; Barbados</option>
                        <option value={+375}>+375 &nbsp; Belarus</option>
                        <option value={+32}>+32 &nbsp; Belgium</option>
                        <option value={+501}>+501 &nbsp; Belize</option>
                        <option value={+229}>+229 &nbsp; Benin</option>
                        <option value="+1-441">+1-441 &nbsp; Bermuda</option>
                        <option value={+975}>+975 &nbsp; Bhutan</option>
                        <option value={+591}>+591 &nbsp; Bolivia</option>
                        <option value={+387}>+387 &nbsp; Bosnia and Herzegovina</option>
                        <option value={+267}>+267 &nbsp; Botswana</option>
                        <option value={`+0055`}>+0055 &nbsp; Bouvet Island</option>
                        <option value={+55}>+55 &nbsp; Brazil</option>
                        <option value={+246}>+246 &nbsp; British Indian Ocean Territory</option>
                        <option value={+673}>+673 &nbsp; Brunei</option>
                        <option value={+359}>+359 &nbsp; Bulgaria</option>
                        <option value={+226}>+226 &nbsp; Burkina Faso</option>
                        <option value={+257}>+257 &nbsp; Burundi</option>
                        <option value={+855}>+855 &nbsp; Cambodia</option>
                        <option value={+237}>+237 &nbsp; Cameroon</option>
                        <option value={+1}>+1 &nbsp; Canada</option>
                        <option value={+238}>+238 &nbsp; Cape Verde</option>
                        <option value="+1-345">+1-345 &nbsp; Cayman Islands</option>
                        <option value={+236}>+236 &nbsp; Central African Republic</option>
                        <option value={+235}>+235 &nbsp; Chad</option>
                        <option value={+56}>+56 &nbsp; Chile</option>
                        <option value={+86}>+86 &nbsp; China</option>
                        <option value={+61}>+61 &nbsp; Christmas Island</option>
                        <option value={+61}>+61 &nbsp; Cocos (Keeling) Islands</option>
                        <option value={+57}>+57 &nbsp; Colombia</option>
                        <option value={+269}>+269 &nbsp; Comoros</option>
                        <option value={+242}>+242 &nbsp; Congo</option>
                        <option value={+243}>+243 &nbsp; Democratic Republic of the Congo</option>
                        <option value={+682}>+682 &nbsp; Cook Islands</option>
                        <option value={+506}>+506 &nbsp; Costa Rica</option>
                        <option value={+225}>+225 &nbsp; Cote D'Ivoire (Ivory Coast)</option>
                        <option value={+385}>+385 &nbsp; Croatia</option>
                        <option value={+53}>+53 &nbsp; Cuba</option>
                        <option value={+357}>+357 &nbsp; Cyprus</option>
                        <option value={+420}>+420 &nbsp; Czech Republic</option>
                        <option value={+45}>+45 &nbsp; Denmark</option>
                        <option value={+253}>+253 &nbsp; Djibouti</option>
                        <option value="+1-767">+1-767 &nbsp; Dominica</option>
                        <option value="+1-809 and 1-829">
                          +1-809 and 1-829 &nbsp; Dominican Republic
                        </option>
                        <option value={+670}>+670 &nbsp; East Timor</option>
                        <option value={+593}>+593 &nbsp; Ecuador</option>
                        <option value={+20}>+20 &nbsp; Egypt</option>
                        <option value={+503}>+503 &nbsp; El Salvador</option>
                        <option value={+240}>+240 &nbsp; Equatorial Guinea</option>
                        <option value={+291}>+291 &nbsp; Eritrea</option>
                        <option value={+372}>+372 &nbsp; Estonia</option>
                        <option value={+251}>+251 &nbsp; Ethiopia</option>
                        <option value={+500}>+500 &nbsp; Falkland Islands</option>
                        <option value={+298}>+298 &nbsp; Faroe Islands</option>
                        <option value={+679}>+679 &nbsp; Fiji Islands</option>
                        <option value={+358}>+358 &nbsp; Finland</option>
                        <option value={+33}>+33 &nbsp; France</option>
                        <option value={+594}>+594 &nbsp; French Guiana</option>
                        <option value={+689}>+689 &nbsp; French Polynesia</option>
                        <option value={+262}>+262 &nbsp; French Southern Territories</option>
                        <option value={+241}>+241 &nbsp; Gabon</option>
                        <option value={+220}>+220 &nbsp; Gambia The</option>
                        <option value={+995}>+995 &nbsp; Georgia</option>
                        <option value={+49}>+49 &nbsp; Germany</option>
                        <option value={+233}>+233 &nbsp; Ghana</option>
                        <option value={+350}>+350 &nbsp; Gibraltar</option>
                        <option value={+30}>+30 &nbsp; Greece</option>
                        <option value={+299}>+299 &nbsp; Greenland</option>
                        <option value="+1-473">+1-473 &nbsp; Grenada</option>
                        <option value={+590}>+590 &nbsp; Guadeloupe</option>
                        <option value="+1-671">+1-671 &nbsp; Guam</option>
                        <option value={+502}>+502 &nbsp; Guatemala</option>
                        <option value="+44-1481">+44-1481 &nbsp; Guernsey and Alderney</option>
                        <option value={+224}>+224 &nbsp; Guinea</option>
                        <option value={+245}>+245 &nbsp; Guinea-Bissau</option>
                        <option value={+592}>+592 &nbsp; Guyana</option>
                        <option value={+509}>+509 &nbsp; Haiti</option>
                        <option value={+672}>+672 &nbsp; Heard Island and McDonald Islands</option>
                        <option value={+504}>+504 &nbsp; Honduras</option>
                        <option value={+852}>+852 &nbsp; Hong Kong S.A.R.</option>
                        <option value={+36}>+36 &nbsp; Hungary</option>
                        <option value={+354}>+354 &nbsp; Iceland</option>
                        <option value={+91}>+91 &nbsp; India</option>
                        <option value={+62}>+62 &nbsp; Indonesia</option>
                        <option value={+98}>+98 &nbsp; Iran</option>
                        <option value={+964}>+964 &nbsp; Iraq</option>
                        <option value={+353}>+353 &nbsp; Ireland</option>
                        <option value={+972}>+972 &nbsp; Israel</option>
                        <option value={+39}>+39 &nbsp; Italy</option>
                        <option value="+1-876">+1-876 &nbsp; Jamaica</option>
                        <option value={+81}>+81 &nbsp; Japan</option>
                        <option value="+44-1534">+44-1534 &nbsp; Jersey</option>
                        <option value={+962}>+962 &nbsp; Jordan</option>
                        <option value={+7}>+7 &nbsp; Kazakhstan</option>
                        <option value={+254}>+254 &nbsp; Kenya</option>
                        <option value={+686}>+686 &nbsp; Kiribati</option>
                        <option value={+850}>+850 &nbsp; North Korea</option>
                        <option value={+82}>+82 &nbsp; South Korea</option>
                        <option value={+965}>+965 &nbsp; Kuwait</option>
                        <option value={+996}>+996 &nbsp; Kyrgyzstan</option>
                        <option value={+856}>+856 &nbsp; Laos</option>
                        <option value={+371}>+371 &nbsp; Latvia</option>
                        <option value={+961}>+961 &nbsp; Lebanon</option>
                        <option value={+266}>+266 &nbsp; Lesotho</option>
                        <option value={+231}>+231 &nbsp; Liberia</option>
                        <option value={+218}>+218 &nbsp; Libya</option>
                        <option value={+423}>+423 &nbsp; Liechtenstein</option>
                        <option value={+370}>+370 &nbsp; Lithuania</option>
                        <option value={+352}>+352 &nbsp; Luxembourg</option>
                        <option value={+853}>+853 &nbsp; Macau S.A.R.</option>
                        <option value={+389}>+389 &nbsp; Macedonia</option>
                        <option value={+261}>+261 &nbsp; Madagascar</option>
                        <option value={+265}>+265 &nbsp; Malawi</option>
                        <option value={+60}>+60 &nbsp; Malaysia</option>
                        <option value={+960}>+960 &nbsp; Maldives</option>
                        <option value={+223}>+223 &nbsp; Mali</option>
                        <option value={+356}>+356 &nbsp; Malta</option>
                        <option value="+44-1624">+44-1624 &nbsp; Man (Isle of)</option>
                        <option value={+692}>+692 &nbsp; Marshall Islands</option>
                        <option value={+596}>+596 &nbsp; Martinique</option>
                        <option value={+222}>+222 &nbsp; Mauritania</option>
                        <option value={+230}>+230 &nbsp; Mauritius</option>
                        <option value={+262}>+262 &nbsp; Mayotte</option>
                        <option value={+52}>+52 &nbsp; Mexico</option>
                        <option value={+691}>+691 &nbsp; Micronesia</option>
                        <option value={+373}>+373 &nbsp; Moldova</option>
                        <option value={+377}>+377 &nbsp; Monaco</option>
                        <option value={+976}>+976 &nbsp; Mongolia</option>
                        <option value={+382}>+382 &nbsp; Montenegro</option>
                        <option value="+1-664">+1-664 &nbsp; Montserrat</option>
                        <option value={+212}>+212 &nbsp; Morocco</option>
                        <option value={+258}>+258 &nbsp; Mozambique</option>
                        <option value={+95}>+95 &nbsp; Myanmar</option>
                        <option value={+264}>+264 &nbsp; Namibia</option>
                        <option value={+674}>+674 &nbsp; Nauru</option>
                        <option value={+977}>+977 &nbsp; Nepal</option>
                        <option value={+599}>+599 &nbsp; Bonaire, Sint Eustatius and Saba</option>

                        <option value={+687}>+687 &nbsp; New Caledonia</option>
                        <option value={+64}>+64 &nbsp; New Zealand</option>
                        <option value={+505}>+505 &nbsp; Nicaragua</option>
                        <option value={+227}>+227 &nbsp; Niger</option>
                        <option value={+234}>+234 &nbsp; Nigeria</option>
                        <option value={+683}>+683 &nbsp; Niue</option>
                        <option value={+672}>+672 &nbsp; Norfolk Island</option>
                        <option value="+1-670">+1-670 &nbsp; Northern Mariana Islands</option>
                        <option value={+47}>+47 &nbsp; Norway</option>
                        <option value={+968}>+968 &nbsp; Oman</option>
                        <option value={+92}>+92 &nbsp; Pakistan</option>
                        <option value={+680}>+680 &nbsp; Palau</option>
                        <option value={+970}>+970 &nbsp; Palestinian Territory Occupied</option>
                        <option value={+507}>+507 &nbsp; Panama</option>
                        <option value={+675}>+675 &nbsp; Papua new Guinea</option>
                        <option value={+595}>+595 &nbsp; Paraguay</option>
                        <option value={+51}>+51 &nbsp; Peru</option>
                        <option value={+63}>+63 &nbsp; Philippines</option>
                        <option value={+870}>+870 &nbsp; Pitcairn Island</option>
                        <option value={+48}>+48 &nbsp; Poland</option>
                        <option value={+351}>+351 &nbsp; Portugal</option>
                        <option value="+1-787 and 1-939">
                          +1-787 and 1-939 &nbsp; Puerto Rico
                        </option>
                        <option value={+974}>+974 &nbsp; Qatar</option>
                        <option value={+262}>+262 &nbsp; Reunion</option>
                        <option value={+40}>+40 &nbsp; Romania</option>
                        <option value={+7}>+7 &nbsp; Russia</option>
                        <option value={+250}>+250 &nbsp; Rwanda</option>
                        <option value={+290}>+290 &nbsp; Saint Helena</option>
                        <option value="+1-869">+1-869 &nbsp; Saint Kitts And Nevis</option>
                        <option value="+1-758">+1-758 &nbsp; Saint Lucia</option>
                        <option value={+508}>+508 &nbsp; Saint Pierre and Miquelon</option>
                        <option value="+1-784">
                          +1-784 &nbsp; Saint Vincent And The Grenadines
                        </option>
                        <option value={+590}>+590 &nbsp; Saint-Barthelemy</option>
                        <option value={+590}>+590 &nbsp; Saint-Martin (French part)</option>
                        <option value={+685}>+685 &nbsp; Samoa</option>
                        <option value={+378}>+378 &nbsp; San Marino</option>
                        <option value={+239}>+239 &nbsp; Sao Tome and Principe</option>
                        <option value={+966}>+966 &nbsp; Saudi Arabia</option>
                        <option value={+221}>+221 &nbsp; Senegal</option>
                        <option value={+381}>+381 &nbsp; Serbia</option>
                        <option value={+248}>+248 &nbsp; Seychelles</option>
                        <option value={+232}>+232 &nbsp; Sierra Leone</option>
                        <option value={+65}>+65 &nbsp; Singapore</option>
                        <option value={+421}>+421 &nbsp; Slovakia</option>
                        <option value={+386}>+386 &nbsp; Slovenia</option>
                        <option value={+677}>+677 &nbsp; Solomon Islands</option>
                        <option value={+252}>+252 &nbsp; Somalia</option>
                        <option value={+27}>+27 &nbsp; South Africa</option>
                        <option value={+500}>+500 &nbsp; South Georgia</option>
                        <option value={+211}>+211 &nbsp; South Sudan</option>
                        <option value={+34}>+34 &nbsp; Spain</option>
                        <option value={+94}>+94 &nbsp; Sri Lanka</option>
                        <option value={+249}>+249 &nbsp; Sudan</option>
                        <option value={+597}>+597 &nbsp; Suriname</option>
                        <option value={+47}>+47 &nbsp; Svalbard And Jan Mayen Islands</option>
                        <option value={+268}>+268 &nbsp; Swaziland</option>
                        <option value={+46}>+46 &nbsp; Sweden</option>
                        <option value={+41}>+41 &nbsp; Switzerland</option>
                        <option value={+963}>+963 &nbsp; Syria</option>
                        <option value={+886}>+886 &nbsp; Taiwan</option>
                        <option value={+992}>+992 &nbsp; Tajikistan</option>
                        <option value={+255}>+255 &nbsp; Tanzania</option>
                        <option value={+66}>+66 &nbsp; Thailand</option>
                        <option value={+228}>+228 &nbsp; Togo</option>
                        <option value={+690}>+690 &nbsp; Tokelau</option>
                        <option value={+676}>+676 &nbsp; Tonga</option>
                        <option value="+1-868">+1-868 &nbsp; Trinidad And Tobago</option>
                        <option value={+216}>+216 &nbsp; Tunisia</option>
                        <option value={+90}>+90 &nbsp; Turkey</option>
                        <option value={+993}>+993 &nbsp; Turkmenistan</option>
                        <option value="+1-649">+1-649 &nbsp; Turks And Caicos Islands</option>
                        <option value={+688}>+688 &nbsp; Tuvalu</option>
                        <option value={+256}>+256 &nbsp; Uganda</option>
                        <option value={+380}>+380 &nbsp; Ukraine</option>
                        <option value={+971}>+971 &nbsp; United Arab Emirates</option>
                        <option value={+44}>+44 &nbsp; United Kingdom</option>
                        <option value={+1}>+1 &nbsp; United States</option>
                        <option value={+1}>+1 &nbsp; United States Minor Outlying Islands</option>
                        <option value={+598}>+598 &nbsp; Uruguay</option>
                        <option value={+998}>+998 &nbsp; Uzbekistan</option>
                        <option value={+678}>+678 &nbsp; Vanuatu</option>
                        <option value={+379}>+379 &nbsp; Vatican City State (Holy See)</option>
                        <option value={+58}>+58 &nbsp; Venezuela</option>
                        <option value={+84}>+84 &nbsp; Vietnam</option>
                        <option value="+1-284">+1-284 &nbsp; Virgin Islands (British)</option>
                        <option value="+1-340">+1-340 &nbsp; Virgin Islands (US)</option>
                        <option value={+681}>+681 &nbsp; Wallis And Futuna Islands</option>
                        <option value={+212}>+212 &nbsp; Western Sahara</option>
                        <option value={+967}>+967 &nbsp; Yemen</option>
                        <option value={+260}>+260 &nbsp; Zambia</option>
                        <option value={+263}>+263 &nbsp; Zimbabwe</option>
                        <option value={+383}>+383 &nbsp; Kosovo</option>
                        <option value={+599}>+599 &nbsp; Curaçao</option>
                        <option value={+1721} selected="selected">+1721 &nbsp; Sint Maarten (Dutch part)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-9 pr-0">
                    <input
                      type="number"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Phone number"
                      onChange={(e) =>
                        setFormDetails((prev) => ({ ...prev, phonenumber: e.target.value }))
                      }
                      required="required"
                      data-parsley-required-message="Phone number is required"
                      data-parsley-minlength={8}
                      data-parsley-minlength-message="Phone number is too short. It should have 8 digits or more."
                      data-parsley-maxlength={15}
                      data-parsley-maxlength-message="Phone number should not contain more than 15 digits."
                      data-parsley-pattern-message="Please enter valid phone number"
                      data-parsley-type="digits"
                      data-parsley-type-message="Phone number should be numbers only"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setFormDetails((prev) => ({ ...prev, email: e.target.value }))}
                    className="form-control"
                    placeholder="E-mail address"
                    required="required"
                    data-parsley-required-message="E-mail address is required"
                    data-parsley-type="email"
                    data-parsley-type-message="Please enter valid e-mail address"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <select
                    name="daily_orders"
                    className="form-control"
                    id="roleSelect"
                    data-parsley-required="true"
                    data-parsley-required-message="This field is required"
                  >
                    <option value selected="selected">
                      How many orders do you have daily?
                    </option>
                    <option value={1}>Bronze (10-50 orders)</option>
                    <option value={2}>Silver (50-100 orders)</option>
                    <option value={3}>Gold (100-200 orders)</option>
                  </select>
                </div>
         
                <div className="form-group" id="otherOptionInput" style={{ display: 'none' }}>
                  <input
                    type="text"
                    name="otherOptionValue"
                    id="otherOptionValue"
                    className="form-control"
                    placeholder="Please specify"
                    onChange={(e) => setFormDetails((prev) => ({ ...prev, pass1: e.target.value }))}
                    data-parsley-required="true"
                    data-parsley-required-message="This field is required."
                    data-parsley-maxlength={200}
                    data-parsley-maxlength-message="The reference other field should not contain more than 200 characters."
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="text"
                    onChange={(e) =>
                      setFormDetails((prev) => ({ ...prev, companyname: e.target.value }))
                    }
                    className="form-control"
                    placeholder="Your Company Name"
                    required="required"
                    data-parsley-required-message="Company name is required"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="text"
                    onChange={(e) =>
                      setFormDetails((prev) => ({ ...prev, companyAddress: e.target.value }))
                    }
                    className="form-control"
                    placeholder="Your Company Address"
                    required="required"
                    data-parsley-required-message="Company Address is required"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group eye_icon_spacer">
                  <input
                    type="password"
                    name="password"
                    className="form-control password"
                    placeholder="Password"
                    id="new_password"
                    onChange={(e) => setFormDetails((prev) => ({ ...prev, pass2: e.target.value }))}
                    required="required"
                    data-parsley-required-message="Password is required"
                    data-parsley-minlength={8}
                    data-parsley-minlength-message="The password is too short. It should have %s character or more"
                    data-parsley-maxlength={48}
                    data-parsley-maxlength-message="Password should not contain more than %s character."
                    data-parsley-uppercase={1}
                    data-parsley-uppercase-message="Password must have at least %s uppercase letter."
                    data-parsley-lowercase={1}
                    data-parsley-lowercase-message="Password must have at least %s lowercase letter."
                    data-parsley-number={1}
                    data-parsley-number-message="Password must have at least %s number."
                    data-parsley-special={1}
                    data-parsley-special-message="Password must have at least %s special character."
                    data-parsley-errors-container=".errorspannewpassinput"
                    autoComplete="off"
                  />
                  <span className="errorspannewpassinput" />
                  <span
                    toggle="#new_password"
                    className="eye_icon toggle-password fas fa-eye-slash"
                  />
                </div>
                <div className="form-group eye_icon_spacer">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm password"
                    id="confirm_password"
                    required="required"
                    data-parsley-required-message="Confirm password is required."
                    data-parsley-equalto="#new_password"
                    data-parsley-equalto-message="Password & confirm password should be same."
                    autoComplete="off"
                  />
                  <span
                    toggle="#confirm_password"
                    className="eye_icon toggle-password fas fa-eye-slash"
                  />
                </div>
                {/* Add captch with canvas */}

                {/* End captch with canvas */}
                <div className="custom-control custom-checkbox my-1 mr-sm-2"></div>
                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                  <span></span>
                </div>
              </div>
              <div>
                <input
                  onClick={submitFunction}
                  name="register_signup"
                  defaultValue="Sign up"
                  className="btn btn-primary btn-block"
                  id="register_signup"
                  style={{ marginTop: '-0.5rem' }}
                />
              </div>
            </form>

            {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to="/signup"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </>
  )
}
